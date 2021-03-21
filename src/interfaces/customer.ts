import { AdType } from "./itemType";

export interface Customer {
    id: string;
    adTypes: AdType[];
    message?: string;
}
