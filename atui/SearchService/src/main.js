/*!
 * ATUI v0.4.1 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

document.querySelectorAll(".atuiSearchservice_Panel").forEach(function (panel) {
    panel.addEventListener("mouseover", function () {
        panel.classList.add("optionActive");
    });
    panel.addEventListener("mouseout", function () {
        panel.classList.remove("optionActive");
    });
});
