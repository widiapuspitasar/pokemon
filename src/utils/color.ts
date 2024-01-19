import { FastAverageColor  } from "fast-average-color";

export const getColorFromUrl = async (url: string) => {
    const fastColor = new FastAverageColor();
    const color = await fastColor.getColorAsync(url);
    if (color.error) return null;
    return color.hex || null;

}