import { AriSlider } from "./slider";
import { AriRangeSlider } from "./range-slider";

export const AriSliderComponent = Object.assign(AriSlider, {
    Range: AriRangeSlider
});

export * from "./slider";
export * from "./range-slider";
