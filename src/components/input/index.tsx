import { AriTextInput } from "./text-input";
import { AriSearchInput } from "./search-input";
import { AriInputNumber } from "./input-number";
import { AriTextArea } from "./text-area";
import { AriTextListInput } from "./text-list-input";

export const AriInput = Object.assign(AriTextInput, {
    Search: AriSearchInput,
    Number: AriInputNumber,
    TextArea: AriTextArea,
    TextList: AriTextListInput
});

export * from "./text-input";
export * from "./search-input";
export * from "./input-number";
export * from "./text-area";
export * from "./text-list-input";