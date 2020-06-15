/**
 * Calculates how many pixels per inch a screen has
 * @param resolutionWidth The width of the resolution (in pixels)
 * @param resolutionHeight The height of the resolution (in pixels)
 * @param screenDiagonal The diagonal of the screen (in inches)
 */
var pixelDensity = function (resolutionWidth, resolutionHeight, screenDiagonal) {
    if (!resolutionWidth ||
        Array.isArray(resolutionWidth) ||
        !resolutionHeight ||
        Array.isArray(resolutionHeight) ||
        !screenDiagonal ||
        Array.isArray(screenDiagonal)) {
        return NaN;
    }
    return Math.pow(Math.pow(resolutionWidth, 2) +
        Math.pow(resolutionHeight, 2), 0.5) / screenDiagonal;
};
if (typeof module !== "undefined" && module.exports) {
    module.exports = pixelDensity;
}
