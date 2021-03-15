import { RuleType } from "../constants/rule-types";
import { BaseRule } from "./base-rule";
import { NForX } from "./n-for-x";
import { PriceDrop } from "./price-drop";
import { PriceDropOnNOrMore } from "./price-drop-on-n-or-more";

export class RuleFactory {
    public execute(type: RuleType | string): BaseRule {
        switch (type) {
            case RuleType.N_FOR_X:
                return new NForX();

            case RuleType.PRICE_DROP:
                return new PriceDrop();

            case RuleType.PRICE_DROP_ON_N_OR_MORE:
                return new PriceDropOnNOrMore();

            default:
                return null;
        }
    }
}

export const ruleFactory = new RuleFactory();