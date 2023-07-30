/*!
 * ATUI v0.4.2 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Metadata */

const atuiKernel_Metadata = {
    name: "ATUI",
    author: "alcapitan (on GitHub)",
    version: "v0.4.2",
    website: "https://github.com/alcapitan/atui",
    in_development: false,
};
atuiKernel_MetadataDisplay(atuiKernel_Metadata);

/* Metadata display */

function atuiKernel_MetadataDisplay(infos) {
    console.group("Metadata of " + infos.name);
    console.log("Author : " + infos.author);
    console.log("Version : " + infos.version);
    console.log("Website : " + infos.website);
    console.groupEnd();
}

/* Find associated element */

function findElement(element, query, stop = null) {
    if (element.querySelectorAll(query).length === 1) {
        // If element has query.
        return element.querySelector(query);
    } else if (element.querySelectorAll(query).length > 1) {
        // If element has several query.
        const list = [];
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

/* Verify link */

async function verifyLink(url) {
    const response = await fetch(url);
    if (response.ok) {
        return true;
    } else {
        return false;
    }
}

/* Convert time data to be readable by humans */

function convertTime(time) {
    const hours = Math.floor(time / 3600);
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

/* Clipboard tools */

function atuiKernel_ClipboardCopy(text) {
    navigator.clipboard.writeText(text);
}

function atuiKernel_ClipboardPaste() {
    return navigator.clipboard.readText();
}

/* Share tool */

function atuiKernel_ShareTool(title, text, url) {
    navigator.share({
        title,
        text,
        url,
    });
}

/* Display mode */

function atuiKernel_ColormodeIsDark() {
    const status = document.documentElement.getAttribute("data-atui-colormode");
    if (status === "dark") {
        return true;
    } else {
        return false;
    }
}

function atuiKernel_ColormodeToggle() {
    /* Toggles the status */
    document.querySelectorAll(".atuiKernel_ColormodeButton").forEach((button) => {
        if (atuiKernel_ColormodeIsDark()) {
            document.documentElement.setAttribute("data-atui-colormode", "light");
            button.classList.replace("ti-moon", "ti-sun");
        } else {
            document.documentElement.setAttribute("data-atui-colormode", "dark");
            button.classList.replace("ti-sun", "ti-moon");
        }
    });

    /* Save the status in cookies */
    const date = new Date();
    date.setTime(date.getTime() + 3600000); // Expiration time is 1 hour
    const expires = "expires=" + date.toUTCString();
    const cookie =
        "atuiKernel_ColormodeIsDark=" + atuiKernel_ColormodeIsDark() + ";" + expires + ";path=/;SameSite=Lax;";
    document.cookie = cookie;
}

function atuiKernel_ColormodeStartup() {
    const systemStatus = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemStatus) {
        atuiKernel_ColormodeToggle();
        console.info("Dark mode enabled according to the system preferences.");
        return true;
    }
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("atuiKernel_ColormodeIsDark=")) {
            const cookieStatus = cookie.substring("atuiKernel_ColormodeIsDark=".length, cookie.length);
            if (cookieStatus === "true") {
                atuiKernel_ColormodeToggle();
                console.info("Dark mode enabled according to the cookies.");
            }
            return cookieStatus === "true";
        }
    }
    return false;
}
atuiKernel_ColormodeStartup();

document.querySelectorAll(".atuiKernel_ColormodeButton").forEach((button) => {
    button.addEventListener("click", () => {
        atuiKernel_ColormodeToggle();
    });
});

/* Color accent */

function atuiKernel_ColoraccentMetatag() {
    let metaTag = document.querySelector('meta[name="data-atui-colormode"]');
    if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "theme-color");
        document.head.appendChild(metaTag);
    }
    metaTag.setAttribute(
        "content",
        `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A40")})`,
    );
}

/* Pop-up */

function atuiKernel_PopupSetup(listener) {
    const popup = findElement(listener, listener.getAttribute("data-vk-popup-assign"));

    const options = {
        type: "default",
        triggerEvent: "mouseover",
        outEvent: "click",
    };

    if (popup.classList.contains("atuiKernel_PopupGlobalpanel")) {
        options.type = "centered-hor";
    }

    if (listener.classList.contains("optionRightclick")) {
        options.triggerEvent = "contextmenu";
    }

    listener.addEventListener(options.triggerEvent, (event) => {
        // Prevent default context menu on right click
        if (options.triggerEvent === "contextmenu") {
            event.preventDefault();
        }

        // Hide all popups
        document
            .querySelectorAll(".atuiKernel_PopupContextmenu, .atuiKernel_PopupTooltip, .atuiKernel_PopupGlobalpanel")
            .forEach((popup) => {
                atuiKernel_PopupHide(popup);
            });

        atuiKernel_PopupPosition(listener, popup, options);
        atuiKernel_PopupDisplay(popup);
        document.addEventListener("scroll", atuiKernel_PopupReload);
        window.addEventListener("resize", atuiKernel_PopupReload);

        document.addEventListener(options.outEvent, (event) => {
            detectOutsideClick(event);
        });
    });

    function detectOutsideClick(event) {
        if (!popup.contains(event.target) && !listener.contains(event.target)) {
            atuiKernel_PopupHide(popup);
        }
    }

    function atuiKernel_PopupReload() {
        atuiKernel_PopupPosition(listener, popup, options);
    }

    function atuiKernel_PopupHide(popup) {
        document.removeEventListener("scroll", atuiKernel_PopupReload);
        window.removeEventListener("resize", atuiKernel_PopupReload);
        document.removeEventListener("click", detectOutsideClick);
        popup.style.visibility = "hidden";
    }

    function atuiKernel_PopupDisplay(popup) {
        popup.style.visibility = "visible";
    }

    function atuiKernel_PopupPosition(listener, popup, options) {
        const gap = 5;

        // The temporary position at 0 is very important to get the getBoundingClientRect() position at 0px;0px and thus know the shift.
        popup.style.left = "0";
        popup.style.top = "0";

        // The variables windowDimensions, listenerPosition and popupPosition have been made to facilitate the reading of the code.
        const windowDimensions = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        };
        // Schema of getBoundingClientRect() : https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#return_value
        const listenerPosition = listener.getBoundingClientRect();
        const popupPosition = popup.getBoundingClientRect();

        const overflowRight = listenerPosition.left + popupPosition.width > windowDimensions.width;
        const overflowBottom = listenerPosition.top + popupPosition.height > windowDimensions.height;

        const calculatedPosition = {
            left: 0,
            top: 0,
        };

        if (options.type === "centered" || options.type === "centered-hor") {
            calculatedPosition.left = (windowDimensions.width - popupPosition.width) / 2;
        } else if (overflowRight) {
            calculatedPosition.left = listenerPosition.right - popupPosition.left - popupPosition.width - gap;
        } else {
            calculatedPosition.left = listenerPosition.left - popupPosition.left + gap;
        }

        if (options.type === "centered" || options.type === "centered-ver") {
            calculatedPosition.top = (windowDimensions.height - popupPosition.height) / 2;
        } else if (overflowBottom) {
            calculatedPosition.top = listenerPosition.top - popupPosition.top - popupPosition.height + gap;
        } else {
            calculatedPosition.top = listenerPosition.bottom - popupPosition.top - gap;
        }

        popup.style.left = calculatedPosition.left + "px";
        popup.style.top = calculatedPosition.top + "px";
    }
}
document.querySelectorAll("[data-vk-popup-assign]").forEach((listener) => {
    atuiKernel_PopupSetup(listener);
});

/* Notifications */

function atuiKernel_NotificationPush(options) {
    function systemPush() {
        const notification = new Notification(options.title, {
            body: options.text || "",
            icon: options.image
                ? options.image
                : options.icon
                ? `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${options.icon}.svg`
                : "",
        });
        notification.onclick = (event) => {
            if (options.link && options.link !== "") {
                event.preventDefault();
                window.open(options.link);
            }
        };
    }

    function internPush() {
        // Create the notification element
        const notification = document.createElement("div");
        notification.classList.add("atuiKernel_Notification");

        // Create the header element
        const header = document.createElement("header");
        let icon;
        if (options.image) {
            icon = document.createElement("img");
            icon.setAttribute("src", options.image);
        } else if (options.icon) {
            icon = document.createElement("i");
            icon.classList.add("ti", `ti-${options.icon}`);
        }
        const title = document.createElement("p");
        title.textContent = options.title;
        header.appendChild(icon);
        header.appendChild(title);
        notification.appendChild(header);

        // Create the section element
        const section = document.createElement("section");
        const content = document.createElement("p");
        content.innerHTML = options.text;
        section.appendChild(content);
        notification.appendChild(section);

        // Create the footer element
        const footer = document.createElement("footer");
        options.buttons.forEach((button) => {
            const buttonElement = document.createElement("div");
            buttonElement.classList.add("atuiKernel_Button", "optionAccent", `option${button.option}`);
            const buttonTextElement = document.createElement("p");
            buttonTextElement.textContent = button.text;
            buttonElement.appendChild(buttonTextElement);
            buttonElement.addEventListener("click", () => {
                button.action();
                notification.remove();
            });
            footer.appendChild(buttonElement);
        });
        notification.appendChild(footer);

        // Display the notification
        let container = document.querySelector(".atuiKernel_NotificationContainer");
        if (!container) {
            container = document.createElement("div");
            container.classList.add("atuiKernel_NotificationContainer");
            document.body.appendChild(container);
        }
        container.insertBefore(notification, container.firstChild);

        if (options.close !== false) {
            let mouseOver = false;
            notification.addEventListener("mouseenter", () => {
                mouseOver = true;
            });
            notification.addEventListener("mouseleave", () => {
                mouseOver = false;
            });

            setTimeout(() => {
                if (mouseOver) {
                    notification.addEventListener("mouseleave", () => {
                        setTimeout(() => {
                            notification.remove();
                        }, 2000);
                    });
                } else {
                    notification.remove();
                }
            }, options.close || 5000);
        }
    }

    async function verifyPermission() {
        if (Notification.permission === "granted") {
            return true;
        } else {
            await Notification.requestPermission();
            if (Notification.permission === "granted") {
                return true;
            } else {
                return false;
            }
        }
    }

    verifyPermission().then((permission) => {
        // Ensure notification permission is granted
        if (!permission) {
            return console.error("Notification cannot be displayed because permission has been denied.");
        }

        // Assert notification options
        if (!options.title || options.title === "") {
            return console.error("Notification should have a title.");
        }

        // Display the notification
        if (options.system) {
            systemPush();
        } else {
            internPush();
            if (!("sound" in options)) {
                // Default sound
                const sound = new Audio(atuiKernel_NotificationSound);
                sound.play();
            } else if (options.sound) {
                // Custom specific sound
                const sound = new Audio(options.sound);
                sound.play();
            }
        }
    });
}
const atuiKernel_NotificationSound = "atui/kernel/assets/notification.mp3";

/* Patch height superposition issue between header and carousel */

const atuiKernel_HeaderFixCarousel = () => {
    document.querySelectorAll(".atuiKernel_Header.optionCarousel").forEach((header) => {
        const carousel = findElement(header, ".atuiKernel_Carousel", ".atuiKernel_BodyContent");
        let carouselContent = findElement(header, ".atuiKernel_Carousel > div > div", ".atuiKernel_BodyContent");

        if (!Array.isArray(carouselContent)) {
            carouselContent = [carouselContent];
        }

        carousel.style.minHeight = header.offsetHeight * 2 + "px";
        carouselContent.forEach((element) => {
            element.style.paddingTop = header.offsetHeight + 20 + "px";
        });
    });
};
atuiKernel_HeaderFixCarousel();
window.addEventListener("resize", atuiKernel_HeaderFixCarousel);

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
    const button = header.querySelector("i");
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

/* Footer info */

try {
    const atuiKernel_FooterInfo = document.getElementById("atuiKernel_FooterInfo");
} catch {}

function atuiKernel_FooterLastedited(day, month, year) {
    /* Warning date not updated */
    const atuiKernel_FooterInfoDate = new Date();
    if (
        (atuiKernel_FooterInfoDate.getDate() !== day ||
            atuiKernel_FooterInfoDate.getMonth() + 1 !== month ||
            atuiKernel_FooterInfoDate.getFullYear() !== year) &&
        atuiKernel_Metadata.in_development
    ) {
        console.warn("The last modification date isn't up to date. ");
    }

    /* Based on ATUI */
    const atuiKernel_FooterInfoBased = document.createElement("a");
    atuiKernel_FooterInfoBased.setAttribute("href", atuiKernel_Metadata.website);
    atuiKernel_FooterInfoBased.setAttribute("target", "_blank");
    atuiKernel_FooterInfoBased.innerHTML =
        "This website uses " + atuiKernel_Metadata.name + " " + atuiKernel_Metadata.version + " . ";
    atuiKernel_FooterInfo.appendChild(atuiKernel_FooterInfoBased);

    /* Last modification of this website */
    const atuiKernel_FooterInfoLasteditedText = document.createElement("a");
    const atuiKernel_FooterInfoLasteditedConvertMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    month = atuiKernel_FooterInfoLasteditedConvertMonth[month - 1];
    atuiKernel_FooterInfoLasteditedText.innerHTML = "Latest modification on " + day + " " + month + " " + year + ". ";
    atuiKernel_FooterInfo.insertBefore(atuiKernel_FooterInfoLasteditedText, atuiKernel_FooterInfo.firstChild);
}
