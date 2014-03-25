using System.Web.Http;
using System.Web.Routing;

namespace Braille.TestRunner
{
    public static class WebApiConfig
    {
        public static void Register(RouteCollection routes)
        {
            routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}