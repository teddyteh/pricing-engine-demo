import { Item } from "../interfaces/item";
import { AdType } from "../interfaces/item-type";
import { BaseRule } from "./base-rule";

interface PriceDropPayload {
  items: Item[];
  adType: AdType;
  price: number;
}

export class PriceDrop implements BaseRule {
  calculate(payload: PriceDropPayload): number {
    const { items, adType, price } = payload;

    const featuredAdCount = items.reduce((totalCount, currentItem) => {
      return currentItem.type === adType ? totalCount + 1 : totalCount;
    }, 0);

    const totalPrice = featuredAdCount * price;

    return totalPrice;
  }
}