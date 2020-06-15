/**
 * Calculates how many pixels per inch a screen has
 * @param resolutionWidth The width of the resolution (in pixels)
 * @param resolutionHeight The height of the resolution (in pixels)
 * @param screenDiagonal The diagonal of the screen (in inches)
 */
declare var pixelDensity: (resolutionWidth: number, resolutionHeight: number, screenDiagonal: number) => number;
