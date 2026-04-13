// clipboard popup
function clipFallback(str) {
    // untested for now
    var textToCopy = document.createElement("textarea");
    textToCopy = str;

    textToCopy.style.top = 0;
    textToCopy.style.left = 0;
    textToCopy.style.position = "fixed";

    document.body.appendChild(textToCopy);
    textToCopy.focus();
    textToCopy.select();

    try {
        var isCopied = document.execCommand("copy");
        console.log(
            "[FALLBACK] copied to clipboard (" + isCopied ? "true" : "false" + ")",
        );
    } catch (err) {
        console.error("[FALLBACK/ERROR] unable to copy to clipboard (" + err + ")");
    }

    document.body.removeChild(textToCopy);
}

function copyToClip(str) {
    if (!navigator.clipboard) {
        clipFallback(str);
        return;
    }
    navigator.clipboard.writeText(str).then(
        function () {
            console.log("[ASYNC] copied to clipboard (" + str + ")");
        },
        function (err) {
            console.error("[ASYNC/ERROR] unable to copy to clipboard: " + err);
        },
    );
}

// usage example (?)
document.addEventListener("DOMContentLoaded", () => {
    const discordBtn = document.getElementById("discordBtn");
    const clipDial = document.getElementById("clipDial");
    const str = window.getComputedStyle(discordBtn, "::after").getPropertyValue("content");
    const usrStr = str.slice(1, -1);

    let isClicked = false;

    discordBtn.addEventListener("click", () => {
        copyToClip(usrStr);
        if (!isClicked) {
            isClicked = true;
            clipDial.style.bottom = "20px";
            clipDial.style.opacity = 1;
            setTimeout(() => {
                clipDial.style.bottom = "-40px";
                clipDial.style.opacity = 0;
                isClicked = false;
            }, 2000);
        } else {
            console.log("element is active");
        }
    });
});
