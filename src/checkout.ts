import { defaultPrices } from "./constants/prices";
import { Item } from "./interfaces/item";
import { AdType } from "./interfaces/item-type";
import { PricingRule } from './interfaces/pricing-rule';
import { ruleFactory } from './rules/rule-factory';

export class Checkout {
  private items: Item[] = [];
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }
  
  public add(item: Item): void {
    this.items.push(item);
  }
  
  public total(): number {
    let total = 0;

    const itemsByAdType = this.getItemsByAdType();

    for (const [adType, items] of Object.entries(itemsByAdType)) {
      const item = items[0];
      const pricingRules = this.getPricingRulesByAdType(item.customerId, item.type);
      
      if (pricingRules.length === 0) {
        total += defaultPrices[adType];

        continue;
      }

      pricingRules.forEach(pricingRule => {
        const rule = ruleFactory.execute(pricingRule.type);
        
        if (rule) {
          total += rule.calculate({ ...pricingRule.payload, items });
        }
      })
    }
    
    return total;
  }


  private getItemsByAdType(): {
    [key: string]: Item[]
  } {
    const items = {};

    this.items.forEach(item => {
      const existing = items[item.type];

      if (!existing) {
        items[item.type] = [];
      }

      items[item.type].push(item);
    });

    return items;
  }

  private getPricingRulesByAdType(customerId: string, adType: AdType) {
    return this.pricingRules.filter(pricingRule => pricingRule.customerId === customerId && pricingRule.payload.adType === adType);
  }
}

