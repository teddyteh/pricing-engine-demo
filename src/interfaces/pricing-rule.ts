/* eslint-disable @typescript-eslint/no-explicit-any */
import { RuleType } from "../constants/rule-types";

export interface PricingRule {
    customerId: string;
    description: string;
    type: RuleType | string;
    payload: any;
}