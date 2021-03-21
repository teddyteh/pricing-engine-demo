import { Customer } from "./customer";

export interface PricingResponse extends Customer {
    total: string;
}