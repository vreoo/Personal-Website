/**
 * Create a page loader that loads the page after a delay in a smooth transition
 *
 * @param {number} delay - The delay in milliseconds before the page loader starts
 * @returns {void}
 */
setTimeout(function () {
    document.body.classList.add("loaded");
}, 1000);
