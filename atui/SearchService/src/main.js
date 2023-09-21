document.querySelectorAll(".ssPanel").forEach(function (panel) {
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
function ssFilter(input, list) {
    return list.filter((value) => value.toLowerCase().includes(input.toLowerCase()));
}

/* vkInputSubmit action setup */
/* 
 * This is commented for JavaScript forms
document.querySelectorAll(".vkInputSubmit").forEach((input) => {
    input.addEventListener("click", () => {
        input.closest("form").submit();
    });
});
*/
