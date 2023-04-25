"use strict"; /*!
 * ATUI v0.4.0 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Metadata */

const atuiKernel_Metadata = {
  name: "ATUI",
  author: "alcapitan (on GitHub)",
  version: "v0.4.0",
  website: "https://github.com/alcapitan/atui",
  in_development: true
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

function findElement(element, query) {let stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
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
  let hours = Math.floor(time / 3600);
  let mins = Math.floor(time % 3600 / 60);
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
    title: title,
    text: text,
    url: url
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
  `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A40")})`);

}

/* Pop-up */

function atuiKernel_PopupSetup(listener) {
  const popup = findElement(listener, listener.getAttribute("data-vk-popup-assign"));

  let options = {
    type: "default",
    triggerEvent: "mouseover",
    outEvent: "click"
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
    document.
    querySelectorAll(".atuiKernel_PopupContextmenu, .atuiKernel_PopupTooltip, .atuiKernel_PopupGlobalpanel").
    forEach((popup) => {
      atuiKernel_PopupHide(popup);
    });

    atuiKernel_PopupPosition(listener, popup, options);
    atuiKernel_PopupDisplay(popup);
    document.addEventListener("scroll", atuiKernel_PopupScroll);

    // Close when the user clicks outside the popup
    if (options.outEvent === "click") {
      document.addEventListener(options.outEvent, detectOutsideClick);
    }
  });

  function detectOutsideClick(event) {
    if (!popup.contains(event.target)) {
      atuiKernel_PopupHide(popup);
    }
  }

  function atuiKernel_PopupScroll() {
    atuiKernel_PopupPosition(listener, popup, options);
  }

  function atuiKernel_PopupHide(popup) {
    document.removeEventListener("scroll", atuiKernel_PopupScroll);
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
      height: document.documentElement.clientHeight
    };
    // Schema of getBoundingClientRect() : https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#return_value
    const listenerPosition = listener.getBoundingClientRect();
    const popupPosition = popup.getBoundingClientRect();

    const overflowRight = listenerPosition.left + popupPosition.width > windowDimensions.width;
    const overflowBottom = listenerPosition.top + popupPosition.height > windowDimensions.height;

    let calculatedPosition = {
      left: 0,
      top: 0
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
      calculatedPosition.top = listenerPosition.top - popupPosition.top - popupPosition.height - gap;
    } else {
      calculatedPosition.top = listenerPosition.bottom - popupPosition.top + gap;
    }

    popup.style.left = calculatedPosition.left + "px";
    popup.style.top = calculatedPosition.top + "px";
  }
}
document.querySelectorAll("[data-vk-popup-assign]").forEach((listener) => {
  atuiKernel_PopupSetup(listener);
});

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
  atuiKernel_Metadata["in_development"])
  {
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
  "december"];

  month = atuiKernel_FooterInfoLasteditedConvertMonth[month - 1];
  atuiKernel_FooterInfoLasteditedText.innerHTML = "Latest modification on " + day + " " + month + " " + year + ". ";
  atuiKernel_FooterInfoLasteditedText.setAttribute("href", "./atui/kernel/about.html");
  atuiKernel_FooterInfoLasteditedText.setAttribute("target", "_blank");
  atuiKernel_FooterInfo.insertBefore(atuiKernel_FooterInfoLasteditedText, atuiKernel_FooterInfo.firstChild);
}

/* Notifications */

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
  /* deprecated due to icon source change
  const atuiKernel_NotificationElementHeaderTypeImg = document.createElement("img");
  if (type != "normal") {
      atuiKernel_NotificationElementHeaderTypeImg.setAttribute("src", "atui/kernel/assets/" + type + ".png");
  } else {
      atuiKernel_NotificationElementHeaderTypeImg.style.visibility = "hidden";
  }*/

  // Sound
  const atuiKernel_NotificationElementSound = new Audio("atui/kernel/assets/notification.mp3");

  // Title
  const atuiKernel_NotificationElementHeaderTitle = document.createElement("h3");
  atuiKernel_NotificationElementHeaderTitle.textContent = title;

  // Close button
  const atuiKernel_NotificationElementHeaderClose = document.createElement("i");
  atuiKernel_NotificationElementHeaderClose.classList.add("ti", "ti-x");
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
  "console.log('doc')"],

  "Accept cookies ?",
  "This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies.");

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
//# sourceMappingURL=main.js.map