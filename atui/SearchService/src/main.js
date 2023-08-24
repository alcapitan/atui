/*!
 * ATUI v0.4.2 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

document.querySelectorAll(".atuiSearchservice_Panel").forEach(function (panel) {
    panel.addEventListener("click", function () {
        panel.classList.add("optionActive");
    });

    document.addEventListener("click", (event) => {
        if (!panel.contains(event.target)) {
            panel.classList.remove("optionActive");
        }
    });
});

/**
 * Filters the values of an array based on an input value.
 * @param {string} input - The value from the search or text input.
 * @param {Array<string>} list - The array of values to filter.
 * @returns {Array<string>} - The filtered array of values that contain the input value.
 */
function atuiSearchservice_Filter(input, list) {
    return list.filter((value) => value.toLowerCase().includes(input.toLowerCase()));
}

/* atuiKernel_InputSubmit action setup */
document.querySelectorAll(".atuiKernel_InputSubmit").forEach((input) => {
    input.addEventListener("click", () => {
        input.closest("form").submit();
    });
});
