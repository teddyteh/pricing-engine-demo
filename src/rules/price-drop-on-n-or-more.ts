
import { defaultPrices } from "../constants/prices";
import { Item } from "../interfaces/item";
import { AdType } from "../interfaces/itemType";
import { BaseRule } from "./base-rule";

interface PriceDropOnNOrMorePayload {
    items: Item[];
    adType: AdType;
    quantity: number;
    price: number;
}

export class PriceDropOnNOrMore implements BaseRule {
  calculate(payload: PriceDropOnNOrMorePayload): number {
      const { items, adType, quantity, price } = payload;

      const premiumAdCount = items.reduce((totalCount, currentItem) => {
        return currentItem.type === adType ? totalCount + 1 : totalCount;
      }, 0);
      
      let totalPrice = premiumAdCount * defaultPrices.premiumAd;
      
      if (premiumAdCount >= quantity) {
        totalPrice = premiumAdCount * price;
      }
      
      return totalPrice;
    }
  }