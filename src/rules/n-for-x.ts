import { defaultPrices } from "../constants/prices";
import { Item } from "../interfaces/item";
import { AdType } from "../interfaces/item-type";
import { BaseRule } from "./base-rule";

interface NForXPayload {
    items: Item[];
    adType: AdType;
    quantity: number;
    discountedQuantity: number;
}

export class NForX implements BaseRule {
  calculate(payload: NForXPayload): number {
      const { items, adType, quantity, discountedQuantity } = payload;

      const count = items.reduce((totalCount, currentItem) => {
        return currentItem.type === adType ? totalCount + 1 : totalCount;
      }, 0);
  
      const normalItemCount = count % quantity;
      const discountedItemCount = Math.floor(count/quantity);
  
      const normalPriceTotal = defaultPrices[adType] * normalItemCount;
      const totalDiscount = defaultPrices[adType] * discountedQuantity;
      const discountedPriceTotal = discountedItemCount * totalDiscount;
  
      const totalPrice = normalPriceTotal + discountedPriceTotal;
  
      return totalPrice;
    }
  }