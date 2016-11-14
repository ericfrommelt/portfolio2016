---
---

// Portfolio pagination for navigation from page to page
// Array index = location of work in grid, so none of this is automated

// Our portfolio pages
var pages = {
        page: [

          {
            "title": "Conversion",
            "url": "{{ site.url }}/work/transformation/"
          },

          {
            "title": "AR Danger",
            "url": "{{ site.url }}/work/augmented-reality-danger/"
          },

          {
            "title": "Big Data Security",
            "url": "{{ site.url }}/work/big-data-security/"
          },

          {
            "title": "okcupid Profiles",
            "url": "{{ site.url }}/work/wired-okcupid/"
          },

          {
            "title": "Squared",
            "url": "{{ site.url }}/work/squared/"
          },

          {
            "title": "Oculus Rift",
            "url": "{{ site.url }}/work/oculus-rift/"
          },

          {
            "title": "Resistance",
            "url": "{{ site.url }}/work/resistance/"
          },

          {
            "title": "Fairfax",
            "url": "{{ site.url }}/work/fairfax/"
          },

          {
            "title": "Visions for Space",
            "url": "{{ site.url }}/work/usc-visions-for-space/"
          },

          {
            "title": "Shotlink",
            "url": "{{ site.url }}/work/numbers-shotlink/"
          },

          {
            "title": "Lakers Numbers",
            "url": "{{ site.url }}/work/numbers-lakers/"
          },

          {
            "title": "Technology Policy",
            "url": "{{ site.url }}/work/technology-policy/"
          },

          {
            "title": "Creative Computers",
            "url": "{{ site.url }}/work/creative-computers/"
          },

          {
            "title": "Urban Mobility",
            "url": "{{ site.url }}/work/urban-mobility/"
          },

          {
            "title": "Get Cryphy",
            "url": "{{ site.url }}/work/get-cryphy/"
          },

          {
            "title": "New Car",
            "url": "{{ site.url }}/work/new-car/"
          },

          {
            "title": "IBM Pure Data",
            "url": "{{ site.url }}/work/ibm-pure-data/"
          },

          {
            "title": "Quant Junkies",
            "url": "{{ site.url }}/work/quant-junkies/"
          },

          {
            "title": "Weird Tales: Vampires",
            "url": "{{ site.url }}/work/weird-tales/"
          },

          {
            "title": "EnerG2",
            "url": "{{ site.url }}/work/energ2/"
          },

          {
            "title": "Styleshifters",
            "url": "{{ site.url }}/work/styleshifters/"
          },

          {
            "title": "Impact of Media",
            "url": "{{ site.url }}/work/impact-of-media/"
          },

          {
            "title": "Auto Intel",
            "url": "{{ site.url }}/work/auto-intel/"
          },

          {
            "title": "Wiretap",
            "url": "{{ site.url }}/work/wiretap/"
          },

          {
            "title": "Network Object 2",
            "url": "{{ site.url }}/work/network-object2/"
          },

          {
            "title": "Network Object 1",
            "url": "{{ site.url }}/work/network-object1/"
          },

          {
            "title": "Observatory",
            "url": "{{ site.url }}/work/observatory/"
          },

          {
            "title": "Loop",
            "url": "{{ site.url }}/work/loop/"
          },

          {
            "title": "Breakout",
            "url": "{{ site.url }}/work/breakout/"
          },

          {
            "title": "Breach",
            "url": "{{ site.url }}/work/breach/"
          },

          {
            "title": "Artificial Intelligence",
            "url": "{{ site.url }}/work/artificial-intelligence/"
          },

          {
            "title": "NORAD",
            "url": "{{ site.url }}/work/norad/"
          },

          {
            "title": "Leak",
            "url": "{{ site.url }}/work/leak/"
          },

          {
            "title": "DSP",
            "url": "{{ site.url }}/work/dsp/"
          },

          {
            "title": "Integrated Circuit",
            "url": "{{ site.url }}/work/integrated-circuit/"
          },

          {
            "title": "Unit",
            "url": "{{ site.url }}/work/unit/"
          },

          {
            "title": "GPS",
            "url": "{{ site.url }}/work/gps/"
          },

          {
            "title": "Intercept",
            "url": "{{ site.url }}/work/intercept/"
          },

          {
            "title": "Encryption Key",
            "url": "{{ site.url }}/work/encryption-key/"
          },

          {
            "title": "Google",
            "url": "{{ site.url }}/work/google/"
          },

          {
            "title": "Source",
            "url": "{{ site.url }}/work/source/"
          },

          {
            "title": "Bunker",
            "url": "{{ site.url }}/work/bunker/"
          },

          {
            "title": "Rigged",
            "url": "{{ site.url }}/work/rigged/"
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
