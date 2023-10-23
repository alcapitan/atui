/* SearchService */

setupInstance(
    document.querySelector("#searchCountry .ssBar input"),
    ["France", "Morocco", "Tunisia", "Brazil", "Spain", "India"],
    document.getElementById("listCountry"),
);
setupInstance(
    document.querySelector("#searchName .ssBar input"),
    ["Sarah", "Aïsha", "Mariam", "Louise", "Élise", "Éléonore"],
    document.getElementById("listName"),
);

function setupInstance(instance, values, listValues) {
    instance.addEventListener("input", () => {
        const inputValue = instance.value;
        const matchingValues = ssFilter(inputValue, values);

        while (listValues.firstChild) {
            listValues.removeChild(listValues.firstChild);
        }
        matchingValues.forEach((value) => {
            const valueElement = document.createElement("li");
            valueElement.innerText = value;
            listValues.appendChild(valueElement);
        });
    });
}

/* Toggle RTL */

document.getElementById("toggleRtl").addEventListener("click", function () {
    document.documentElement.setAttribute(
        "dir",
        document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl",
    );
});

/* Notification */

const testActionBtnNotif = () => {
    console.log("coucou milan !");
};

document.getElementById("pushNotification").addEventListener("click", function () {
    vkNotificationPush({
        type: "atui",
        icon: "flask",
        image: "patch/icons/logo.png",
        title: "autogen notif",
        text: "hey yo, you read an autogen notif",
        buttons: [
            {
                style: "Filled",
                text: "click here",
                action: () => {
                    testActionBtnNotif();
                    console.log("congrats");
                },
            },
        ],
        link: "https://alcapitan.github.io/atui/",
    });
});

document.getElementById("pushNotificationMini").addEventListener("click", function () {
    vkNotificationPush({
        type: "atui-mini",
        text: "This is a mini notification !",
        buttons: [
            {
                text: "that's cool",
                action: () => {
                    console.log("mini notif seems cool :-)");
                },
            },
            {
                text: "it sucks",
                action: () => {
                    console.log("argh someone said that mini notif sucks >:-(");
                },
            },
        ],
    });
});

/* Practical JS functions */

document.getElementById("clipboardButton").addEventListener("click", async function () {
    const text = document.getElementById("clipboardInput").value;
    vkClipboardCopy(text);
    const clipboardText = await vkClipboardPaste();
    document.getElementById("clipboard-paste").innerText = clipboardText;
});

document.getElementById("shareButton").addEventListener("click", function () {
    vkShare("ATUI", "Meet the new web UI framework", "https://alcapitan.github.io/atui/");
});

document.getElementById("showModal").addEventListener("click", () => {
    vkModalShow("modalPreview");
});

/* MediasPlayer */

document.getElementById("assignVideo").addEventListener("click", () => {
    mpAssign({
        player: "#videoplayer",
        media: "patch/videos/test-videoplayer.mp4",
        title: "Testing video",
        picture: "patch/illustrations/community.jpg",
        source: "https://pixabay.com/users/justyøu-587443/",
    });
});

document.getElementById("playAudio2").addEventListener("click", () => {
    mpAssign({
        player: "#audioplayer2",
        media: "patch/musics/test-audioplayer.mp3",
        title: "Sinking Ship - Uplink",
        picture: "patch/musics/test-audioplayer.png",
        source: "http://ncs.io/SinkingShip",
        date: "2022",
    });
    mpRun("#audioplayer2");
});

document.getElementById("playAudio1").addEventListener("click", () => {
    mpRun("#audioplayer1");
});
