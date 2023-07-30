/*!
 * ATUI v0.4.2 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Metadata */

const atuiSearchservices_Metadata = {
    name: "Search Service",
    author: "alcapitan (on GitHub)",
    version: "v0.4.2",
    website: "https://github.com/alcapitan/atui",
    in_development: false,
};
// atuiKernel_MetadataDisplay(atuiSearchservices_Metadata);

/* Display search elements */

function atuiSearchservices_HeaderDevelop(element, wish) {
    const atuiSearchservices_HeaderBar = document.getElementById("atuiSearchservices_HeaderBar");
    const atuiSearchservices_HeaderPropositions = document.getElementById("atuiSearchservices_HeaderPropositions");
    const atuiSearchservices_HeaderBarInput = document.getElementById("atuiSearchservices_Input");

    /* wish = true; // To block hiding for development tests */
    if (!wish) {
        atuiSearchservices_HeaderBar.style.width = "100%";
        atuiSearchservices_HeaderBar.style.margin = "0px";
        if (document.documentElement.clientWidth <= 767) {
            atuiSearchservices_HeaderBar.style.border = "";
            atuiSearchservices_HeaderBar.style.backgroundColor = "transparent";
            atuiSearchservices_HeaderBarInput.style.display = "none";
        }
        atuiSearchservices_HeaderPropositions.style.display = "none";
        element.style.position = "initial";
        element.style.left = "";
        element.style.right = "";
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none";
    } else {
        atuiSearchservices_HeaderBar.style.width = "calc(100% - 20px)";
        atuiSearchservices_HeaderBar.style.margin = "10px";
        atuiSearchservices_HeaderPropositions.style.display = "block";
        element.style.position = "absolute";
        if (document.documentElement.clientWidth <= 767) {
            atuiSearchservices_HeaderBarInput.style.display = "inline";
            atuiSearchservices_HeaderBar.style.backgroundColor = "hsl(var(--atuiKernel_Color-NFF))";
            atuiSearchservices_HeaderBar.style.border = "1px hsl(var(--atuiKernel_Color-N70)) solid";
        }
        element.style.backgroundColor = "hsl(var(--atuiKernel_Color-A70))";
        element.style.boxShadow = "var(--atuiKernel_ShadowMedium)";
        atuiSearchservices_HeaderPropositionsGenerate();
    }
}

document.getElementById("atuiSearchservices_Header").addEventListener("mouseenter", function () {
    atuiSearchservices_HeaderDevelop(this, true);
});
document.getElementById("atuiSearchservices_Header").addEventListener("mouseleave", function () {
    atuiSearchservices_HeaderDevelop(this, false);
});

/* Propositions */

const atuiSearchservices_HeaderPropositionsRecentInfos = [
    ["satisfied drop room", "https://www.at.ma"],
    ["era assumption grow", "https://www.at.ma"],
    ["score wheel shaft", "https://www.at.ma"],
    ["veil crossing inhabitant", "https://www.at.ma"],
    ["ratio spoil freedom", "https://www.at.ma"],
];
const atuiSearchservices_HeaderPropositionsSuggestedInfos = [
    ["charter gutter merit", "https://www.at.ma"],
    ["meaning presidency maze", "https://www.at.ma"],
    ["different federation zone", "https://www.at.ma"],
    ["realize praise doctor", "https://www.at.ma"],
    ["network atmosphere last", "https://www.at.ma"],
];

function atuiSearchservices_HeaderPropositionsGenerate() {
    try {
        /* Recent searches */
        const atuiSearchservices_HeaderPropositionsRecentInfosContainer = document.getElementById(
            "atuiSearchservices_HeaderPropositionsRecentContainer",
        );
        atuiSearchservices_HeaderPropositionsRecentInfosContainer.textContent = "";
        for (const counter in atuiSearchservices_HeaderPropositionsRecentInfos) {
            const atuiSearchservices_HeaderPropositionsRecentInfosNewlink = document.createElement("a");
            const atuiSearchservices_HeaderPropositionsRecentInfosNewlinkText = document.createTextNode(
                atuiSearchservices_HeaderPropositionsRecentInfos[counter][0],
            );
            atuiSearchservices_HeaderPropositionsRecentInfosNewlink.appendChild(
                atuiSearchservices_HeaderPropositionsRecentInfosNewlinkText,
            );
            atuiSearchservices_HeaderPropositionsRecentInfosNewlink.setAttribute(
                "href",
                atuiSearchservices_HeaderPropositionsRecentInfos[counter][1],
            );
            atuiSearchservices_HeaderPropositionsRecentInfosContainer.appendChild(
                atuiSearchservices_HeaderPropositionsRecentInfosNewlink,
            );
        }
    } catch {}
    try {
        /* Suggested searches */
        const atuiSearchservices_HeaderPropositionsSuggestedInfosContainer = document.getElementById(
            "atuiSearchservices_HeaderPropositionsSuggestedContainer",
        );
        atuiSearchservices_HeaderPropositionsSuggestedInfosContainer.textContent = "";
        for (const counter in atuiSearchservices_HeaderPropositionsSuggestedInfos) {
            const atuiSearchservices_HeaderPropositionsSuggestedInfosNewlink = document.createElement("a");
            const atuiSearchservices_HeaderPropositionsSuggestedInfosNewlinkText = document.createTextNode(
                atuiSearchservices_HeaderPropositionsSuggestedInfos[counter][0],
            );
            atuiSearchservices_HeaderPropositionsSuggestedInfosNewlink.appendChild(
                atuiSearchservices_HeaderPropositionsSuggestedInfosNewlinkText,
            );
            atuiSearchservices_HeaderPropositionsSuggestedInfosNewlink.setAttribute(
                "href",
                atuiSearchservices_HeaderPropositionsRecentInfos[counter][1],
            );
            atuiSearchservices_HeaderPropositionsSuggestedInfosContainer.appendChild(
                atuiSearchservices_HeaderPropositionsSuggestedInfosNewlink,
            );
        }
    } catch {}
}

/* Prevent default <form> submission */

document.querySelector("#atuiSearchservices_HeaderBar form").addEventListener("submit", function (event) {
    event.preventDefault();
});
