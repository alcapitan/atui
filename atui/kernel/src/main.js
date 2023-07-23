/*!
 * ATUI v0.4.1 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Licensing */

const atuiKernel_Version = "0.4.1";

document.querySelectorAll(".atuiKernel_LicensingAtui").forEach((link) => {
    link.setAttribute("href", "https://github.com/alcapitan/atui/");
    link.setAttribute("target", "_blank");
    link.textContent = `This website is powered by ATUI v${atuiKernel_Version}.`;
});

function atuiKernel_PrintAtuiLicensing() {
    console.info(`This website is powered by ATUI v${atuiKernel_Version} (https://github.com/alcapitan/atui).`);
}
atuiKernel_PrintAtuiLicensing();

/* Find associated element */

function atuiKernel_ToolsFindElement(element, query, stop = null) {
    if (element.querySelectorAll(query).length === 1) {
        // If element has query.
        return [element.querySelector(query)];
    } else if (element.querySelectorAll(query).length > 1) {
        // If element has several queries.
        return Array.from(element.querySelectorAll(query));
    } else if (Array.from(document.querySelectorAll(query)).includes(element)) {
        // If element is query.
        return [element];
    } else if (Array.from(document.querySelectorAll(stop)).includes(element)) {
        // If element is stop.
        console.error(`No "${query}" element was found in "${stop}".`);
        return [];
    } else if (element.parentNode === null) {
        // If element is root.
        console.error(`No "${query}" element was found in the webpage.`);
        return [];
    } else {
        // The parent of element may have query.
        return atuiKernel_ToolsFindElement(element.parentNode, query, stop);
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

/* Data storage */

/**
 * Create or update data stored in the user's device (with localStorage, sessionStorage, or cookies).
 * @param {string} key - The key to identify the data.
 * @param {*} value - The data to be saved.
 * @param {string} tool - The storage tool to use: "local" (means localStorage), "session" (means sessionStorage), or "cookie".
 * @param {number} [lifetime=30] - The number of days before the cookie expires (only for "cookie" storage).
 * @returns {boolean} Returns true if the data was saved successfully, otherwise false.
 */
function atuiKernel_StorageSet(key, value, tool, lifetime = 30) {
    switch (tool) {
        case "local":
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (error) {
                console.error("Error when handling localStorage :", error);
                return false;
            }
        case "session":
            try {
                sessionStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (error) {
                console.error("Error when handling sessionStorage :", error);
                return false;
            }
        case "cookie":
            try {
                let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + (lifetime ?? 30));
                cookie += `;expires=${expirationDate.toUTCString()}`;
                document.cookie = cookie;
                return true;
            } catch (error) {
                console.error("Error when handling cookies :", error);
                return false;
            }
        default:
            console.error("This storage tool unavailable (check spelling) :", tool);
            return false;
    }
}

/**
 * Retrieves data stored in the user's device (with localStorage, sessionStorage, or cookies).
 * @param {string} key - The key to identify the data to retrieve.
 * @param {string} tool - The storage tool to use: "local" (means localStorage), "session" (means sessionStorage), or "cookie".
 * @returns {*} The retrieved data or null if no data is found.
 */
function atuiKernel_StorageGet(key, tool) {
    function convertToLogicalType(value) {
        try {
            return JSON.parse(value); // If the value is a dictionary, an array, a boolean, a number, or null
        } catch (error) {
            return value === "undefined" ? undefined : value;
        }
    }

    switch (tool) {
        case "local":
            try {
                const data = localStorage.getItem(key);
                return data !== null ? convertToLogicalType(data) : null;
            } catch (error) {
                console.error("Error when handling localStorage :", error);
                return null;
            }
        case "session":
            try {
                const data = sessionStorage.getItem(key);
                return data !== null ? convertToLogicalType(data) : null;
            } catch (error) {
                console.error("Error when handling sessionStorage :", error);
                return null;
            }
        case "cookie":
            try {
                const cookies = document.cookie.split(";");
                for (const cookie of cookies) {
                    const [cookieName, cookieValue] = cookie.split("=");
                    if (decodeURIComponent(cookieName.trim()) === key) {
                        const data = decodeURIComponent(cookieValue.trim());
                        return convertToLogicalType(data);
                    }
                }
                return null; // If no cookie found
            } catch (error) {
                console.error("Error when handling cookies :", error);
                return null;
            }
        default:
            console.error("This storage tool unavailable (check spelling) :", tool);
            return null;
    }
}

/**
 * Removes data stored in the user's device (with localStorage, sessionStorage, or cookies).
 * @param {string} key - The key to identify the data to remove.
 * @param {string} tool - The storage tool to use: "local" (means localStorage), "session" (means sessionStorage), or "cookie".
 * @returns {boolean} Returns true if the data was removed successfully, otherwise false.
 */
function atuiKernel_StorageRemove(key, tool) {
    switch (tool) {
        case "local":
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error("Error when handling localStorage :", error);
                return false;
            }
        case "session":
            try {
                sessionStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error("Error when handling sessionStorage :", error);
                return false;
            }
        case "cookie":
            try {
                document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
                return true;
            } catch (error) {
                console.error("Error when handling cookies :", error);
                return false;
            }
        default:
            console.error("This storage tool unavailable (check spelling) :", tool);
            return false;
    }
}

/* Display mode */

function atuiKernel_ColormodeIsDark() {
    return document.documentElement.getAttribute("data-atui-colormode") === "dark";
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
    atuiKernel_StorageSet("atuiKernel_ColormodeIsDark", atuiKernel_ColormodeIsDark(), "local");
}

function atuiKernel_ColormodeStartup() {
    const systemStatus = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemStatus) {
        atuiKernel_ColormodeToggle();
        console.info("Dark mode enabled according to the system preferences.");
        return true;
    }

    const localStatus = atuiKernel_StorageGet("atuiKernel_ColormodeIsDark", "local");
    if (localStatus) {
        atuiKernel_ColormodeToggle();
        console.info("Dark mode enabled according to the memory.");
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
    const popup = atuiKernel_ToolsFindElement(listener, listener.getAttribute("data-vk-popup-assign"))[0];

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
        if (options.type === "atui-mini") notification.classList.add("optionMini");

        // Create the icon element in the header
        const header = document.createElement("header");
        let icon;
        if (options.image || options.icon) {
            if (options.image) {
                icon = document.createElement("img");
                icon.setAttribute("src", options.image);
            } else if (options.icon) {
                icon = document.createElement("i");
                icon.classList.add("ti", `ti-${options.icon}`);
            }
            header.appendChild(icon);
        }

        // Create the title element in the header
        const title = document.createElement("p");
        title.textContent = options.type === "atui-mini" ? options.text : options.title;
        header.appendChild(title);

        notification.appendChild(header);

        if (options.type !== "atui-mini") {
            // Create the section element
            const section = document.createElement("section");
            const content = document.createElement("p");
            content.innerHTML = options.text;
            section.appendChild(content);
            notification.appendChild(section);
        }

        // Create the footer element
        const footer = document.createElement("footer");
        options.buttons.forEach((button) => {
            const buttonElement = document.createElement("div");
            buttonElement.classList.add("atuiKernel_Button", "optionAccent");
            if (button.option && button.option !== "") buttonElement.classList.add(`option${button.option}`);
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
        if ((!options.title || options.title === "") && options.type !== "atui-mini") {
            return console.error("Notification should have a title.");
        }

        // Display the notification
        if (options.type === "system") {
            systemPush();
        } else if (options.type.startsWith("atui")) {
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
        } else {
            console.error(`Notification type ${options.type} doesn't exist.`);
        }
    });
}
let atuiKernel_NotificationSound = "atui/kernel/assets/notification.mp3"; /* eslint-disable-line prefer-const */

/* Patch height superposition issue between header and carousel */

const atuiKernel_HeaderFixCarousel = () => {
    document.querySelectorAll(".atuiKernel_Header.optionCarousel").forEach((header) => {
        const carousel = atuiKernel_ToolsFindElement(header, ".atuiKernel_Carousel", ".atuiKernel_BodyContent")[0];
        const carouselContent = atuiKernel_ToolsFindElement(
            header,
            ".atuiKernel_Carousel > div > div",
            ".atuiKernel_BodyContent",
        );

        carousel.style.minHeight = header.offsetHeight * 2 + "px";
        carouselContent.forEach((element) => {
            element.style.paddingTop = header.offsetHeight + 20 + "px";
        });
    });
};
atuiKernel_HeaderFixCarousel();
window.addEventListener("resize", atuiKernel_HeaderFixCarousel);

/* Modal */

function atuiKernel_ModalShow(modalId) {
    const modalBackground = document.getElementById(modalId);
    modalBackground.classList.add("optionShow");

    function handleClickOutsideModal(event) {
        if (event.target === modalBackground) {
            modalBackground.classList.remove("optionShow");
        }
    }

    document.addEventListener("click", handleClickOutsideModal);
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

/* Scrolltop */

document.querySelectorAll(".atuiKernel_Scrolltop").forEach((button) => {
    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            button.classList.add("optionActive");
        } else {
            button.classList.remove("optionActive");
        }
    });
});
