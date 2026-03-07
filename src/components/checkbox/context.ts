import { createContext } from "react";

export interface CheckboxContextProps {
    value: Array<string | number>;
    disabled?: boolean;
    toggleOption: (value: string | number) => void;
}

export const CheckboxContext = createContext<CheckboxContextProps | undefined>(undefined);