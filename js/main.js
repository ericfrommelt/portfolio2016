// Portfolio pagination for navigation from page to page
// Array index = location of work in grid, so none of this is automated

// Our portfolio pages
var pages = {
        page: [

          {
            "title": "Conversion",
            "url": "http://sites:8888/ericfrommelt2015/_site/work/transformation/"
          },

          {
            "title": "AR Danger",
            "url": "http://sites:8888/ericfrommelt2015/_site/work/augmented-reality-danger/"
          },

          {
            "title": "Big Data Security",
            "url": "http://sites:8888/ericfrommelt2015/_site/work/big-data-security/"
          },

          {
            "title": "okcupid Profiles",
            "url": "http://sites:8888/ericfrommelt2015/_site/work/wired-okcupid/"
          },

          {
            "title": "Oculus Rift",
            "url": "http://sites:8888/ericfrommelt2015/_site/work/oculus-rift/"
          }
        ]
      }

// Establish some variables
var currentPage = $("body").find("#page-number").text();
var currentUrl = window.location.href;
var pageMax = pages.page.length;
var previousLink = $("body").find(".previous-project");
var nextLink = $("body").find(".next-project");
var getLastPage = pages.page[pages.page.length-1].url;
var nextUrl;
var prevUrl;

// Iterate through our array
for (var i=0; i<=pageMax; i++) {
  var getUrls = pages.page[i].url;
  var getFirstPage = pages.page[0].url;

// If we're on the first page, set the Next url and hide the Previous link
  if (currentUrl == getFirstPage) {
    nextUrl = pages.page[i+1].url;
    $("body").find(".next-project").attr("href", nextUrl);
    previousLink.hide();
    break;
  };

// If we're on the last page, set the Previous url and hide the Next link
  if (currentUrl == getLastPage) {
    prevUrl = pages.page[pages.page.length-2].url;
    $("body").find(".previous-project").attr("href", prevUrl);
    nextLink.hide();
    break;
  };

// If we're somewhere in the middle, set the Previous and Next links
  if (currentUrl == getUrls) {
    nextUrl = pages.page[i+1].url;
    prevUrl = pages.page[i-1].url;
    $("body").find(".next-project").attr("href", nextUrl);
    $("body").find(".previous-project").attr("href", prevUrl);
    break;
  };
}
