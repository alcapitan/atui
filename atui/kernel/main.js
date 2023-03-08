/*!
 * ATUI v0.4.0 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Metadata */

const atuiKernel_Metadata = {
    name: "ATUI",
    author: "alcapitan (on GitHub)",
    version: "v0.4.0",
    website: "https://github.com/alcapitan/atui",
    in_development: true,
};
atuiKernel_MetadataDisplay(atuiKernel_Metadata);

/* Metadata display */

function atuiKernel_MetadataDisplay(infos) {
    console.group("Metadata of " + infos["name"]);
    console.log("Author : " + infos["author"]);
    console.log("Version : " + infos["version"]);
    console.log("Website : " + infos["website"]);
    console.groupEnd();
}

/* Find associated element */

function findElement(element, query, stop = null) {
    if (element.querySelectorAll(query).length === 1) {
        // If element has query.
        return element.querySelector(query);
    } else if (element.querySelectorAll(query).length > 1) {
        // If element has several query.
        let list = [];
        for (let counter = 0; counter < element.querySelectorAll(query).length; counter++) {
            list.push(element.querySelectorAll(query)[counter]);
        }
        return list;
    } else if (Array.from(document.querySelectorAll(query)).includes(element)) {
        // If element is query.
        return element;
    } else if (Array.from(document.querySelectorAll(stop)).includes(element)) {
        // If element is stop.
        console.error(`No "${query}" element was found in "${stop}".`);
        return null;
    } else if (element.parentNode === null) {
        // If element is root.
        console.error(`No "${query}" element was found in the webpage.`);
    } else {
        // The parent of element may have query.
        return findElement(element.parentNode, query, stop);
    }
}

/* Convert time data to be readable by humans */

function convertTime(time) {
    let hours = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = Math.floor(time % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    if (hours) {
        if (mins < 10) {
            mins = "0" + mins;
        }
        return hours + ":" + mins + ":" + secs; // hh:mm:ss
    } else {
        return mins + ":" + secs; // mm:ss
    }
}

/* Height carousel */

try {
    const atuiKernel_Header = document.getElementById("atuiKernel_Header");
    const atuiKernel_HeaderAside = atuiKernel_Header.childNodes[1];
    atuiKernel_Header.style.minHeight = atuiKernel_HeaderAside.clientHeight + "px";
    const atuiKernel_Carousel = atuiKernel_Header.childNodes[3];
    if (document.documentElement.clientWidth > 767) {
        const atuiKernel_CarouselHeight = atuiKernel_Carousel.clientHeight + atuiKernel_HeaderAside.clientHeight * 2;
        atuiKernel_Carousel.style.height = atuiKernel_CarouselHeight + "px";
    }
    atuiKernel_Carousel.style.paddingTop = atuiKernel_HeaderAside.clientHeight + "px";
} catch {}

/* Display mode */

try {
    const atuiKernel_ToolsSettingsDisplaymodeElement = document.getElementById("atuiKernel_ToolsSettingsDisplaymode")
        .childNodes[1];
    atuiKernel_ToolsSettingsDisplaymodeElement.addEventListener("click", atuiKernel_ToolsSettingsDisplaymodeChange);
    let atuiKernel_ToolsSettingsDisplaymodeStatus =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    if (!atuiKernel_ToolsSettingsDisplaymodeStatus) {
        atuiKernel_ToolsSettingsDisplaymodeStatus = true;
        atuiKernel_ToolsSettingsDisplaymodeChange();
    }
} catch {}

function atuiKernel_ToolsSettingsDisplaymodeChange() {
    const atuiKernel_ToolsSettingsDisplaymodeElement = document.getElementById("atuiKernel_ToolsSettingsDisplaymode")
        .childNodes[1];
    if (atuiKernel_ToolsSettingsDisplaymodeStatus) {
        atuiKernel_ToolsSettingsDisplaymodeStatus = false;
        atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src", "atui/kernel/medias/dark.png");
        atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt", "Enable light mode");
        atuiKernel_ColorschemeGeneratorAuto(undefined);
    } else {
        atuiKernel_ToolsSettingsDisplaymodeStatus = true;
        atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src", "atui/kernel/medias/light.png");
        atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt", "Enable dark mode");
        atuiKernel_ColorschemeGeneratorAuto(undefined);
    }
}

/* Color scheme */

function atuiKernel_ColorschemeGenerator(base, isDarkMode, wantOpacity) {
    // Diff color
    diffColor = [];
    for (let counter = 0; counter < 3; counter++) {
        diffColor.push(base[counter]);
    }
    for (let counter = 0; counter < 3; counter++) {
        diffColor.push(255 - base[counter]);
    }

    // Step color
    stepColor = [];
    for (let counter = 0; counter < 6; counter++) {
        stepColor.push(diffColor[counter] / 5);
    }

    // Color scheme
    schemeColor = [[0, 0, 0]];
    for (let tones = 1; tones < 5; tones++) {
        tone = [];
        for (let primary = 0; primary < 3; primary++) {
            tone.push(Math.round(stepColor[primary] * tones));
        }
        schemeColor.push(tone);
    }
    schemeColor.push([Math.round(base[0]), Math.round(base[1]), Math.round(base[2])]);
    for (let tones = 1; tones < 5; tones++) {
        tone = [];
        for (let primary = 0; primary < 3; primary++) {
            tone.push(Math.round(base[primary] + stepColor[primary + 3] * tones));
        }
        schemeColor.push(tone);
    }
    schemeColor.push([255, 255, 255]);
    if (isDarkMode) {
        schemeColor = schemeColor.reverse();
    }

    // Apply
    const root = document.documentElement;
    for (let variable = 0; variable < 11; variable++) {
        // Replace 10 by F
        variableText = variable;
        if (variable == 10) {
            variableText = "F";
        }

        // Set opacity or no
        if (wantOpacity) {
            opacity = 0.8;
            codeColor =
                "rgba(" +
                schemeColor[variable][0] +
                "," +
                schemeColor[variable][1] +
                "," +
                schemeColor[variable][2] +
                "," +
                opacity +
                ")";
            opacityText = "B";
        } else {
            codeColor =
                "rgb(" +
                schemeColor[variable][0] +
                "," +
                schemeColor[variable][1] +
                "," +
                schemeColor[variable][2] +
                ")";
            opacityText = "O";
        }

        // Is an accent color or no
        if (base.toString() == [127.5, 127.5, 127.5].toString()) {
            accentText = "B";
        } else {
            accentText = "A";
            document
                .querySelector("meta[name=theme-color]")
                .setAttribute(
                    "content",
                    "rgb(" + schemeColor[5][0] + "," + schemeColor[5][1] + "," + schemeColor[5][2] + ")"
                );
        }

        nameColor = "--atuiKernel_Colorscheme" + opacityText + accentText + variableText;

        root.style.setProperty(nameColor, codeColor);
    }
}

function atuiKernel_ColorschemeGeneratorPack(bicolor, accent, isDarkMode) {
    if (bicolor) {
        atuiKernel_ColorschemeGenerator([127.5, 127.5, 127.5], isDarkMode, false);
        atuiKernel_ColorschemeGenerator([127.5, 127.5, 127.5], isDarkMode, true);
    }
    if (accent != undefined) {
        atuiKernel_ColorschemeGenerator(accent, isDarkMode, false);
        atuiKernel_ColorschemeGenerator(accent, isDarkMode, true);
    }
}

let defaultAccent = [230, 51, 0];
function atuiKernel_ColorschemeGeneratorAuto(accent) {
    if (accent != undefined) {
        defaultAccent = accent;
    }
    if (typeof atuiKernel_ToolsSettingsDisplaymodeStatus == "undefined") {
        atuiKernel_ToolsSettingsDisplaymodeStatus = true;
    }
    atuiKernel_ColorschemeGeneratorPack(true, defaultAccent, atuiKernel_ToolsSettingsDisplaymodeStatus);
}
atuiKernel_ColorschemeGeneratorAuto(undefined);

/* Footer info */

try {
    const atuiKernel_FooterInfo = document.getElementById("atuiKernel_FooterInfo");
} catch {}

function atuiKernel_FooterLastedited(day, month, year) {
    /* Warning date not updated */
    const atuiKernel_FooterInfoDate = new Date();
    if (
        (atuiKernel_FooterInfoDate.getDate() != day ||
            atuiKernel_FooterInfoDate.getMonth() + 1 != month ||
            atuiKernel_FooterInfoDate.getFullYear() != year) &&
        atuiKernel_Metadata["in_development"]
    ) {
        console.warn("The last modification date isn't up to date. ");
    }

    /* Based on ATUI */
    const atuiKernel_FooterInfoBased = document.createElement("a");
    atuiKernel_FooterInfoBased.setAttribute("href", atuiKernel_Metadata["website"]);
    atuiKernel_FooterInfoBased.setAttribute("target", "_blank");
    atuiKernel_FooterInfoBased.innerHTML =
        "This website uses " + atuiKernel_Metadata["name"] + " " + atuiKernel_Metadata["version"] + " . ";
    atuiKernel_FooterInfo.appendChild(atuiKernel_FooterInfoBased);

    /* Last modification of this website */
    const atuiKernel_FooterInfoLasteditedText = document.createElement("a");
    const atuiKernel_FooterInfoLasteditedConvertMonth = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];
    month = atuiKernel_FooterInfoLasteditedConvertMonth[month - 1];
    atuiKernel_FooterInfoLasteditedText.innerHTML = "Latest modification on " + day + " " + month + " " + year + ". ";
    atuiKernel_FooterInfoLasteditedText.setAttribute("href", "./atui/kernel/about.html");
    atuiKernel_FooterInfoLasteditedText.setAttribute("target", "_blank");
    atuiKernel_FooterInfo.insertBefore(atuiKernel_FooterInfoLasteditedText, atuiKernel_FooterInfo.firstChild);
}

/* Notifications */

function atuiKernel_NotificationClose(element) {
    element.remove();
}

try {
    const atuiKernel_Notification = document.getElementById("atuiKernel_Notification");
} catch {}
// Types available : normal, alert, caution, confirmation, information, insertion
function atuiKernel_NotificationDisplay(type, buttons, actions, title, text) {
    // Notification element
    const atuiKernel_NotificationElement = document.createElement("aside");
    atuiKernel_NotificationElement.classList.add("atuiKernel_NotificationElement");
    const atuiKernel_NotificationElementHeader = document.createElement("div");
    const atuiKernel_NotificationElementFooter = document.createElement("div");

    // Type
    const atuiKernel_NotificationElementHeaderTypeImg = document.createElement("img");
    if (type != "normal") {
        atuiKernel_NotificationElementHeaderTypeImg.setAttribute("src", "atui/kernel/medias/" + type + ".png");
    } else {
        atuiKernel_NotificationElementHeaderTypeImg.style.visibility = "hidden";
    }

    // Sound
    const atuiKernel_NotificationElementSound = new Audio("atui/kernel/medias/notification.mp3");

    // Title
    const atuiKernel_NotificationElementHeaderTitle = document.createElement("h3");
    atuiKernel_NotificationElementHeaderTitle.textContent = title;

    // Close button
    const atuiKernel_NotificationElementHeaderClose = document.createElement("img");
    atuiKernel_NotificationElementHeaderClose.setAttribute("src", "atui/kernel/medias/close.png");
    atuiKernel_NotificationElementHeaderClose.addEventListener("click", function () {
        atuiKernel_NotificationClose(atuiKernel_NotificationElement);
        return console.log("close");
    });

    // Text
    const atuiKernel_NotificationElementText = document.createElement("p");
    atuiKernel_NotificationElementText.textContent = text;

    // Action buttons
    if (buttons == "default") {
        if (type == "normal") {
            buttons = [];
        } else if (type == "alert") {
            buttons = ["Ok", "Annuler"];
        } else if (type == "caution") {
            buttons = ["Ok", "Annuler"];
        } else if (type == "confirmation") {
            buttons = ["Oui", "Non"];
        } else if (type == "information") {
            buttons = ["Ok"];
        } else if (type == "insertion") {
            buttons = "insertion";
        }
    }
    if (buttons != "insertion") {
        for (let counter = 0; counter < buttons.length; counter++) {
            const atuiKernel_NotificationElementFooterButton = document.createElement("button");
            atuiKernel_NotificationElementFooterButton.textContent = buttons[counter];
            atuiKernel_NotificationElementFooterButton.addEventListener("click", function () {
                atuiKernel_NotificationClose(atuiKernel_NotificationElement);
                return actions[counter];
            });
            atuiKernel_NotificationElementFooter.appendChild(atuiKernel_NotificationElementFooterButton);
        }
    } else {
        const atuiKernel_NotificationElementFooterInput = document.createElement("input");
        atuiKernel_NotificationElementFooterInput.setAttribute("type", "text");
    }

    // Inserting elements in HTML
    atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderTypeImg);
    atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderTitle);
    atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderClose);
    atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementHeader);
    atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementText);
    atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementFooter);
    atuiKernel_Notification.appendChild(atuiKernel_NotificationElement);

    // Play sound
    atuiKernel_NotificationElementSound.play();

    // Wait and close the notification
    if (type == "normal") {
        setTimeout(function () {
            atuiKernel_NotificationClose(atuiKernel_NotificationElement);
        }, 5000);
    }
}

function atuiKernel_NotificationClose(element) {
    element.remove();
}

function atuiKernel_NotificationCookies() {
    atuiKernel_NotificationDisplay(
        "cookies",
        ["I agree", "I disagree this time", "I disagree definitely", "Read more"],
        [
            "console.log('accept')",
            "console.log('not accept')",
            "console.log('always not accept')",
            "console.log('doc')",
        ],
        "Accept cookies ?",
        "This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies."
    );
}

/* Context Menu */

function atuiKernel_ToolsContextmenuDisplay(element, wish, centered) {
    target = element.childNodes[3]; /* Context menu */
    element = element.childNodes[1]; /* Trigger */
    if (!wish) {
        target.style.visibility = "hidden";
        target.style.top = "0";
        target.style.left = "0";
        element.style.fontWeight = "normal";
        element.style.textDecoration = "none";
    } else {
        element.style.fontWeight = "bold";
        element.style.textDecoration = "underline";
        if (centered) {
            /* Centered */
            /*elementPositionX =
                (document.documentElement.clientWidth - target.clientWidth) / 2;*/
            elementPositionX = 20;
            elementPositionYShift = target.getBoundingClientRect().y;
            elementPositionY = element.getBoundingClientRect().y + 20;
            if (elementPositionY + target.clientHeight > window.innerHeight) {
                // Overflow bottom
                elementPositionY = elementPositionY - target.clientHeight;
            }
            elementPositionY = elementPositionY - elementPositionYShift;
        } else {
            elementPositionXShift = target.getBoundingClientRect().x;
            elementPositionYShift = target.getBoundingClientRect().y;
            elementPositionX = element.getBoundingClientRect().x + 20;
            elementPositionY = element.getBoundingClientRect().y + 20;
            if (elementPositionX + target.clientWidth > document.documentElement.clientWidth) {
                // Overflow right
                elementPositionX = elementPositionX - target.clientWidth;
            }
            elementPositionX = elementPositionX - elementPositionXShift;
            if (elementPositionY + target.clientHeight > window.innerHeight) {
                // Overflow bottom
                elementPositionY = elementPositionY - target.clientHeight;
            }
            elementPositionY = elementPositionY - elementPositionYShift;
        }
        elementPositionX = elementPositionX + "px";
        target.style.left = elementPositionX;
        elementPositionY = elementPositionY + "px";
        target.style.top = elementPositionY;
        target.style.visibility = "visible";
    }
}

function atuiKernel_ToolsContextmenu(target) {
    document.getElementById(target).addEventListener("mouseenter", function () {
        atuiKernel_ToolsContextmenuDisplay(this, true, false);
    });
    document.getElementById(target).addEventListener("mouseleave", function () {
        atuiKernel_ToolsContextmenuDisplay(this, false, undefined);
    });
}

/* Global Panel */

function atuiKernel_NavigationGlobalpanel(target) {
    document.getElementById(target).addEventListener("mouseover", function () {
        atuiKernel_ToolsContextmenuDisplay(this, true, true);
    });
    document.getElementById(target).addEventListener("mouseout", function () {
        atuiKernel_ToolsContextmenuDisplay(this, false, true);
    });
}

/* Infotip */

function atuiKernel_ToolsInfotip(target) {
    document.getElementById(target).addEventListener("mouseenter", function () {
        atuiKernel_ToolsContextmenuDisplay(this, true, false);
    });
    document.getElementById(target).addEventListener("mouseleave", function () {
        atuiKernel_ToolsContextmenuDisplay(this, false, undefined);
    });
}

/* Tabs */

document.querySelectorAll(".atuiKernel_SectionTabs").forEach((tabsContainer) => {
    const tabsHeader = tabsContainer.querySelector(".atuiKernel_SectionTabsHeader");
    const tabsHeaderLinks = tabsHeader.querySelectorAll("a");
    const tabsContent = tabsContainer.querySelector(".atuiKernel_SectionTabsContent");
    const tabsContentTexts = tabsContent.querySelectorAll("div");

    tabsHeaderLinks.forEach((link) => {
        link.addEventListener("click", () => {
            tabsHeaderLinks.forEach((tab) => {
                tab.classList.remove("optionActive");
            });
            tabsContentTexts.forEach((content) => {
                content.classList.remove("optionActive");
            });

            link.classList.add("optionActive");
            document.getElementById(link.getAttribute("data-tabs-assign")).classList.add("optionActive");
        });
    });
});

/* Accordion */

document.querySelectorAll(".atuiKernel_SectionAccordion").forEach((accordion) => {
    const header = accordion.querySelector("header");
    const button = header.querySelector("img");
    const content = accordion.querySelector("section");
    header.addEventListener("click", () => {
        if (window.getComputedStyle(content).display === "none") {
            content.style.display = "block";
            button.style.transform = "rotate(180deg)";
        } else if (window.getComputedStyle(content).display === "block") {
            content.style.display = "none";
            button.style.transform = "rotate(0deg)";
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Spinner resize */

document.querySelectorAll(".atuiKernel_Spinner").forEach((spinner) => {
    if (spinner.getAttribute("data-atui-resize") !== null) {
        spinner.style.setProperty("width", `${spinner.getAttribute("data-atui-resize")}px`);
        spinner.style.setProperty("height", `${spinner.getAttribute("data-atui-resize")}px`);
        const width_adjust = spinner.getAttribute("data-atui-resize") / 5;
        let background_adjust = window.getComputedStyle(spinner).getPropertyValue("background");
        background_adjust = background_adjust.replaceAll("10px", `${width_adjust}px`);
        const mask_adjust = `radial-gradient(farthest-side, #0000 calc(100% - ${width_adjust}px), #000 0)`;
        spinner.style.setProperty("background", background_adjust);
        spinner.style.setProperty("mask", mask_adjust);
        spinner.style.setProperty("-webkit-mask", mask_adjust);
    }
});
