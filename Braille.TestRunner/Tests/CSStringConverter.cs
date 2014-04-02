
//
//  Good parsing & flow control case. Makes no sense to run right now.
//


class Program { public static void Main() { } }

class S
{
    public void Append(string p)
    {
        TestLog.Log(p);
    }
    public void Append(char p)
    {
        TestLog.Log(p);
    }
}

static class CSStringConverter
{
    public static string Convert(string value)
    {
        var sb = new S();

        sb.Append('"');

        for (int i = 0; i < value.Length; i++)
        {
            switch (value[i])
            {
                //case '\'':
                //    b.Append("\\'");
                //    break;

                case '\\':
                    sb.Append("\\\\");
                    break;

                case '\x2028':
                case '\x2029':
                    sb.Append(EscapeChar(value[i]));
                    break;

                case char.MinValue:
                    sb.Append("\\0");
                    break;

                case '\t':
                    sb.Append("\\t");
                    break;

                case '\n':
                    sb.Append("\\n");
                    break;

                case '\r':
                    sb.Append("\\r");
                    break;

                case '"':
                    sb.Append("\\\"");
                    break;

                default:
                    sb.Append(value[i]);
                    break;
            }
        }

        sb.Append('"');

        return sb.ToString();
    }

    private static string EscapeChar(char value)
    {
        return "\\u" + ((int)value); //.ToString("X4", CultureInfo.InvariantCulture);
    }
}

