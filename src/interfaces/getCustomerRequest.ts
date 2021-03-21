import { AdType } from "./itemType";

export interface GetCustomerRequest {
    customerId?: string;
    adTypes: AdType[] 
}