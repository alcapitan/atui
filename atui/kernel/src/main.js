/* Licensing */

const vkVersion = "0.4.2";

document.querySelectorAll(".vkLicensingAtui").forEach((link) => {
    link.setAttribute("href", "https://github.com/alcapitan/atui/");
    link.setAttribute("target", "_blank");
    link.textContent = `This website is powered by ATUI v${vkVersion}.`;
});

function vkLicensingPrint() {
    console.info(`This website is powered by ATUI v${vkVersion} (https://github.com/alcapitan/atui).`);
}
vkLicensingPrint();

/* Find associated element */

function vkClosest(element, query, stop = null) {
    /**
     * ! This function is deprecated, it will be replaced by native javascript function closest().
     */
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
        return vkClosest(element.parentNode, query, stop);
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

function vkClipboardCopy(text) {
    navigator.clipboard.writeText(text);
}

function vkClipboardPaste() {
    return navigator.clipboard.readText();
}

/* Share tool */

function vkShare(title, text, url) {
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
 * @param {string} [lifetime="30d"] - The data's lifetime (only for "cookie" storage) ("37m" means 37 minutes, "4h" means 4 hours and "8d" means 8 days).
 * @returns {boolean} Returns true if the data was saved successfully, otherwise false.
 */
function vkStorageSet(key, value, tool, lifetime = "30d") {
    function addDurationToDate(date, duration) {
        const regex = /^(\d+)([dhm])$/;
        const match = duration.match(regex);

        if (!match) {
            throw new Error("Invalid duration format. Use Xd, Xh, or Xm (X being a positive integer).");
        }

        const quantity = parseInt(match[1]);
        const unit = match[2];

        if (isNaN(quantity) || quantity <= 0) {
            throw new Error("The quantity of time must be a positive integer.");
        }

        const dateCopy = new Date(date.getTime());

        switch (unit) {
            case "d": // Days
                dateCopy.setDate(dateCopy.getDate() + quantity);
                break;
            case "h": // Hours
                dateCopy.setTime(dateCopy.getTime() + quantity * 60 * 60 * 1000);
                break;
            case "m": // Minutes
                dateCopy.setTime(dateCopy.getTime() + quantity * 60 * 1000);
                break;
            default:
                throw new Error("Invalid time unit. Use 'd' (= days), 'h' (= hours), or 'm' (= minutes).");
        }

        return dateCopy;
    }

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
                const expirationDate = addDurationToDate(new Date(), lifetime);
                const maxAgeInSeconds = Math.floor((expirationDate - new Date()) / 1000);
                cookie += `;max-age=${maxAgeInSeconds}`;
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
function vkStorageGet(key, tool) {
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
function vkStorageRemove(key, tool) {
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

function vkThemeIsDark() {
    return document.documentElement.getAttribute("data-vk-theme") === "dark";
}

function vkThemeToggle() {
    /* Toggles the status */
    document.querySelectorAll(".vkThemeButton").forEach((button) => {
        if (vkThemeIsDark()) {
            document.documentElement.setAttribute("data-vk-theme", "light");
            button.classList.replace("ti-moon", "ti-sun");
        } else {
            document.documentElement.setAttribute("data-vk-theme", "dark");
            button.classList.replace("ti-sun", "ti-moon");
        }
    });
    vkStorageSet("vkThemeIsDark", vkThemeIsDark(), "local");
}

function vkThemeStartup() {
    const systemStatus = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemStatus) {
        vkThemeToggle();
        console.info("Dark mode enabled according to the system preferences.");
        return true;
    }

    const localStatus = vkStorageGet("vkThemeIsDark", "local");
    if (localStatus) {
        vkThemeToggle();
        console.info("Dark mode enabled according to the memory.");
    }

    return false;
}
vkThemeStartup();

document.querySelectorAll(".vkThemeButton").forEach((button) => {
    button.addEventListener("click", () => {
        vkThemeToggle();
    });
});

/* Color accent */

function vkColorMetatag() {
    let metaTag = document.querySelector('meta[name="data-vk-theme"]');
    if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "theme-color");
        document.head.appendChild(metaTag);
    }
    metaTag.setAttribute(
        "content",
        `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--vkColorA40")})`,
    );
}

/* Pop-up */

function vkPopupSetup(listener) {
    const popup = vkClosest(listener, listener.getAttribute("data-vk-popup-assign"))[0];

    const options = {
        type: "default",
        triggerEvent: "mouseover",
        outEvent: "click",
    };

    if (popup.classList.contains("vkPopupGlobalpanel")) {
        options.type = "centered-hor";
    }

    if (listener.classList.contains("optionRightClick")) {
        options.triggerEvent = "contextmenu";
    }

    listener.addEventListener(options.triggerEvent, (event) => {
        // Prevent default context menu on right click
        if (options.triggerEvent === "contextmenu") {
            event.preventDefault();
        }

        // Hide all popups
        document.querySelectorAll(".vkPopupContextmenu, .vkPopupTooltip, .vkPopupGlobalpanel").forEach((popup) => {
            vkPopupHide(popup);
        });

        vkPopupPosition(listener, popup, options);
        vkPopupDisplay(popup);
        document.addEventListener("scroll", vkPopupReload);
        window.addEventListener("resize", vkPopupReload);

        document.addEventListener(options.outEvent, (event) => {
            detectOutsideClick(event);
        });
    });

    function detectOutsideClick(event) {
        if (!popup.contains(event.target) && !listener.contains(event.target)) {
            vkPopupHide(popup);
        }
    }

    function vkPopupReload() {
        vkPopupPosition(listener, popup, options);
    }

    function vkPopupHide(popup) {
        document.removeEventListener("scroll", vkPopupReload);
        window.removeEventListener("resize", vkPopupReload);
        document.removeEventListener("click", detectOutsideClick);
        popup.style.visibility = "hidden";
    }

    function vkPopupDisplay(popup) {
        popup.style.visibility = "visible";
    }

    function vkPopupPosition(listener, popup, options) {
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

        const isListenerRTL = getComputedStyle(listener).direction === "rtl";

        const overflowInline = !isListenerRTL
            ? listenerPosition.left + popupPosition.width > windowDimensions.width
            : listenerPosition.left - popupPosition.width < 0;
        const overflowBottom = listenerPosition.top + popupPosition.height > windowDimensions.height;

        const calculatedPosition = {
            left: 0,
            top: 0,
        };

        if (options.type === "centered" || options.type === "centered-hor") {
            calculatedPosition.left = (windowDimensions.width - popupPosition.width) / 2;
        } else if ((overflowInline && !isListenerRTL) || (!overflowInline && isListenerRTL)) {
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
    vkPopupSetup(listener);
});

/* Notifications */

function vkNotificationPush(options) {
    function systemPush() {
        const notification = new Notification(options.title, {
            body: options.text || "",
            icon: options.image
                ? options.image
                : options.icon
                ? `https://unpkg.com/@tabler/icons/icons/${options.icon}.svg`
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
        notification.classList.add("vkNotification");
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
            buttonElement.classList.add("vkButton", "optionAccent");
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
        let container = document.querySelector(".vkNotificationContainer");
        if (!container) {
            container = document.createElement("div");
            container.classList.add("vkNotificationContainer");
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
                const sound = new Audio(vkNotificationSound);
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
let vkNotificationSound = "atui/kernel/assets/notification.mp3"; /* eslint-disable-line prefer-const */

/* Carousel */

// Height superposition between header and carousel

const vkHeaderFixCarousel = () => {
    document.querySelectorAll(".vkHeader.optionCarousel").forEach((header) => {
        const carousel = vkClosest(header, ".vkCarousel", ".vkStructureBodyContent")[0];
        const carouselContent = vkClosest(carousel, ".vkCarouselSlides > div > div", ".vkCarousel");
        const carouselControls = carousel.querySelector(".vkCarouselControls");

        carousel.style.minHeight = header.offsetHeight * 2 + "px";
        carouselContent.forEach((element) => {
            element.style.paddingBlockStart = header.offsetHeight + 20 + "px";
        });
        carouselControls.style.marginBlockStart = header.offsetHeight + "px";
    });
};
vkHeaderFixCarousel();
window.addEventListener("resize", vkHeaderFixCarousel);

// Controls

document.querySelectorAll(".vkCarousel").forEach((carousel) => {
    const slidesContainer = carousel.querySelector(".vkCarouselSlides");
    const controls = carousel.querySelector(".vkCarouselControls");
    const controlsLeft = controls?.querySelector(".vkCarouselControlsLeft");
    const controlsRight = controls?.querySelector(".vkCarouselControlsRight");
    controlsLeft?.addEventListener("click", () => {
        slidesContainer.scrollBy({
            left: -slidesContainer.offsetWidth,
            behavior: "smooth",
        });
    });
    controlsRight?.addEventListener("click", () => {
        slidesContainer.scrollBy({
            left: slidesContainer.offsetWidth,
            behavior: "smooth",
        });
    });
});

/* Modal */

function vkModalShow(modalId) {
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

document.querySelectorAll(".vkTabs").forEach((tabsContainer) => {
    const tabsHeader = tabsContainer.querySelector(".vkTabsHeader");
    const tabsHeaderLinks = tabsHeader.querySelectorAll("a");
    const tabsContent = tabsContainer.querySelector(".vkTabsContent");
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

document.querySelectorAll(".vkAccordion").forEach((accordion) => {
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

document.querySelectorAll(".vkScrolltop").forEach((button) => {
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
