using System;
using System.Reflection;
using System.Reflection.Emit;

namespace Braille.MethodTransform
{
    internal class DynamicILReaderProvider : IILReaderResolver
    {
        public const int TypeRidPrefix = 0x02000000;
        public const int MethodRidPrefix = 0x06000000;
        public const int FieldRidPrefix = 0x04000000;
        private object dynamicScope;
        private ILGenerator generator;

        #region Static initialization
        public static readonly Type RuntimeDynamicMethodType;

        private static readonly FieldInfo fileLengthField = typeof(ILGenerator).GetField("m_length", BindingFlags.NonPublic | BindingFlags.Instance);

        private static readonly FieldInfo IntermediateLanguageBytesField = typeof(ILGenerator).GetField("m_ILStream", BindingFlags.NonPublic | BindingFlags.Instance);

        private static readonly MethodInfo bakeByteArrayMethod = typeof(ILGenerator).GetMethod("BakeByteArray", BindingFlags.NonPublic | BindingFlags.Instance);

        private static readonly PropertyInfo dynamicScopeIndexor;

        private static readonly FieldInfo dynamicScopeField;

        private static readonly Type genericMethodInfoType;

        private static readonly FieldInfo genericMethodHandleField;

        private static readonly FieldInfo genericMethodContextField;

        private static readonly Type varArgMethodType;

        private static readonly FieldInfo varArgMethodMethod;

        private static readonly Type genericFieldInfoType;

        private static readonly FieldInfo genericFieldInfoHandle;

        private static readonly FieldInfo genericFieldInfoContext;

        private static readonly FieldInfo ownerField;

        static DynamicILReaderProvider()
        {
            BindingFlags bindingFlags = BindingFlags.NonPublic | BindingFlags.Instance;
            dynamicScopeIndexor = Type.GetType("System.Reflection.Emit.DynamicScope").GetProperty("Item", bindingFlags);
            dynamicScopeField = Type.GetType("System.Reflection.Emit.DynamicILGenerator").GetField("m_scope", bindingFlags);

            varArgMethodType = Type.GetType("System.Reflection.Emit.VarArgMethod");
            varArgMethodMethod = varArgMethodType.GetField("m_method", bindingFlags);

            genericMethodInfoType = Type.GetType("System.Reflection.Emit.GenericMethodInfo");
            genericMethodHandleField = genericMethodInfoType.GetField("m_methodHandle", bindingFlags);
            genericMethodContextField = genericMethodInfoType.GetField("m_context", bindingFlags);

            genericFieldInfoType = Type.GetType("System.Reflection.Emit.GenericFieldInfo", false);
            if (genericFieldInfoType != null)
            {
                genericFieldInfoHandle = genericFieldInfoType.GetField("m_fieldHandle", bindingFlags);
                genericFieldInfoContext = genericFieldInfoType.GetField("m_context", bindingFlags);
            }
            else
            {
                genericFieldInfoHandle = genericFieldInfoContext = null;
            }

            RuntimeDynamicMethodType = typeof(DynamicMethod).GetNestedType("RTDynamicMethod", BindingFlags.NonPublic);
            ownerField = RuntimeDynamicMethodType.GetField("m_owner", bindingFlags);
        }
        #endregion

        private DynamicILReaderProvider(DynamicMethod method)
        {
            this.Method = method;
            this.generator = method.GetILGenerator();
            this.dynamicScope = dynamicScopeField.GetValue(this.generator);
        }

        public DynamicMethod Method { get; private set; }

        internal object this[int token]
        {
            get
            {
                return dynamicScopeIndexor.GetValue(this.dynamicScope, new object[] { token });
            }
        }

        public static DynamicILReaderProvider Create(MethodInfo method)
        {
            if (method == null)
            {
                throw new ArgumentNullException("method");
            }

            DynamicMethod dynamicMethod = method as DynamicMethod;
            if (dynamicMethod != null)
            {
                return new DynamicILReaderProvider(dynamicMethod);
            }

            Type methodType = method.GetType();
            if (RuntimeDynamicMethodType.IsAssignableFrom(methodType))
            {
                return new DynamicILReaderProvider(ownerField.GetValue(method) as DynamicMethod);
            }

            return null;
        }

        public byte[] GetMethodBody()
        {
            byte[] data = null;
            ILGenerator ilgen = this.Method.GetILGenerator();

            try
            {
                data = (byte[])bakeByteArrayMethod.Invoke(ilgen, null) ?? new byte[0];
            }
            catch (TargetInvocationException)
            {
                int length = (int)fileLengthField.GetValue(ilgen);
                data = new byte[length];
                Array.Copy((byte[])IntermediateLanguageBytesField.GetValue(ilgen), data, length);
            }

            return data;
        }

        public FieldInfo ResolveField(int metadataToken)
        {
            object tokenValue = this[metadataToken];
            if (tokenValue is RuntimeFieldHandle)
            {
                return FieldInfo.GetFieldFromHandle((RuntimeFieldHandle)tokenValue);
            }

            if (tokenValue.GetType() == DynamicILReaderProvider.genericFieldInfoType)
            {
                return FieldInfo.GetFieldFromHandle(
                    (RuntimeFieldHandle)genericFieldInfoHandle.GetValue(tokenValue),
                    (RuntimeTypeHandle)genericFieldInfoContext.GetValue(tokenValue));
            }

            return null;
        }

        public MemberInfo ResolveMember(int metadataToken)
        {
            if ((metadataToken & TypeRidPrefix) != 0)
            {
                return this.ResolveType(metadataToken);
            }

            if ((metadataToken & MethodRidPrefix) != 0)
            {
                return this.ResolveMethod(metadataToken);
            }

            if ((metadataToken & FieldRidPrefix) != 0)
            {
                return this.ResolveField(metadataToken);
            }

            return null;
        }

        public MethodBase ResolveMethod(int metadataToken)
        {
            object tokenValue = this[metadataToken];
            DynamicMethod dynamicMethod = tokenValue as DynamicMethod;
            if (dynamicMethod != null)
            {
                return dynamicMethod;
            }

            if (tokenValue is RuntimeMethodHandle)
            {
                return MethodBase.GetMethodFromHandle((RuntimeMethodHandle)this[metadataToken]);
            }

            if (tokenValue.GetType() == DynamicILReaderProvider.genericFieldInfoType)
            {
                return MethodBase.GetMethodFromHandle(
                    (RuntimeMethodHandle)genericMethodHandleField.GetValue(tokenValue),
                    (RuntimeTypeHandle)genericMethodContextField.GetValue(tokenValue));
            }

            if (tokenValue.GetType() == DynamicILReaderProvider.varArgMethodType)
            {
                return DynamicILReaderProvider.varArgMethodMethod.GetValue(tokenValue) as MethodInfo;
            }

            return null;
        }

        public byte[] ResolveSignature(int metadataToken)
        {
            return this[metadataToken] as byte[];
        }
        public string ResolveString(int metadataToken)
        {
            return this[metadataToken] as string;
        }

        public Type ResolveType(int metadataToken)
        {
            return Type.GetTypeFromHandle((RuntimeTypeHandle)this[metadataToken]);
        }
    }
}
