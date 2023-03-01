$(document).ready(function () {
  var entries = [
    {
      label: "Angular",
      url: "https://angular.io/start/",
      target: "_blank",
    },
    {
      label: "Bootstrap",
      url: "https://getbootstrap.com//",
      target: "_blank",
    },
    {
      label: "HTML",
      url: "https://developer.mozilla.org/es/docs/Web/HTML",
      target: "_blank",
    },
    {
      label: "CSS",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
      target: "_blank",
    },
    {
      label: "C#",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      target: "_blank",
    },
    { label: "Java", url: "https://www.java.com/es/", target: "_blank" },
    {
      label: "Javascript",
      url: "https://www.javascript.com/",
      target: "_blank",
    },
    {
      label: "Typescript",
      url: "https://www.typescriptlang.org/",
      target: "_blank",
    },

    {
      label: "GIT",
      url: "https://git-scm.com//",
      target: "_blank",
    },
    {
      label: "Inglés",
      url: "https://www.cambridgeenglish.org/latinamerica/",
      target: "_blank",
    },
    {
      label: "Photoshop",
      url: "https://www.adobe.com/la/products/photoshop.html",
      target: "_blank",
    },

    {
      label: "Illustrator",
      url: "https://www.adobe.com/la/products/illustrator.html",
      target: "_blank",
    },
    {
      label: "Adobe XD",
      url: "https://www.adobe.com/la/products/xd.html",
      target: "_blank",
    },

    {
      label: "SQL Server",
      url: "https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15",
      target: "_blank",
    },

    {
      label: "Mongo DB",
      url: "https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_argentina_search_core_brand_atlas_desktop&utm_term=mongo%20db&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624305&adgroup=115749712783&gclid=Cj0KCQjwmPSSBhCNARIsAH3cYganAshvaUvAX6ivevX3koKXHRwhG-m0hDGx0RifpjVT17GgTKLjTGEaAhrNEALw_wcB",
      target: "_blank",
    },
    {
      label: "Node JS",
      url: "https://nodejs.org/es/",
      target: "_blank",
    },
  ];

  var settings = {
    entries: entries,
    width: 400,
    height: 300,
    radius: "65%",
    radiusMin: 35,
    bgDraw: false,
    bgColor: "#111",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 150,
    speed: 0.3,
    fontFamily: "Oswald, Arial, sans-serif",
    fontSize: "20",
    fontColor: "#0275d8",
    fontWeight: "bold", //bold
    fontStyle: "italic", //italic
    fontStretch: "expanded", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $("#tag-cloud").svg3DTagCloud(settings);
  // $("#tag-cloud2").svg3DTagCloud(settings);
});
