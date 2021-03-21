import { Checkout } from "../checkout";
import { defaultItems, igbBerhardItems, mahSingItems, simeDarbyItems, uemSunriseItems } from "../constants/demo";
import { Customer } from "../interfaces/customer";
import { AdType } from "../interfaces/itemType";
import { PricingResponse } from "../interfaces/pricingResponse";
import * as pricingRules from "../rules.json";

const customers: Customer[] = [
    { id: "default", adTypes: defaultItems, message: 'Standard Ads x1, Featured Ads x1, Premium Ads x1' },
    { id: "uem-sunrise", adTypes: uemSunriseItems, message: 'Standard Ads x3, Premium Ads x1' },
    { id: "sime-darby", adTypes: simeDarbyItems, message: 'Featured Ads x3, Premium Ads x1' },
    { id: "igb-berhad", adTypes: igbBerhardItems, message: 'Premium Ads x4' },
    { id: "mah-sing", adTypes: mahSingItems, message: 'Standard Ads x5, Featured Ads x2, Premium Ads x3' },
];


class PricingService {
    getDemoCustomer(customerId: string): Customer {
        const customer = customers.find(customer => customer.id == customerId);

        return customer;
    }

    parseCustomer(customerId = 'default', adTypes: AdType[]): Customer {
        if (!adTypes) {
            throw new Error(`No adType given. Available adTpes: ${Object.values(AdType)}`);
        }

        adTypes.forEach(adType => {
            if (!Object.values(AdType).includes(adType)) {
                throw new Error(`AdType ${adType} does not exist. Available adTypes: ${Object.values(AdType)}`);
            }
        })
        
        const customer: Customer = {
            id: customerId, adTypes: adTypes
        };

        return customer;
    }

    getPrice(customer: Customer): PricingResponse {
        if (!customer) {
            customer = customers.find(customer => customer.id == "default");
        }

        const co = new Checkout(pricingRules);
        customer.adTypes.forEach((item: AdType) => co.add({ customerId: customer.id, type: item }));

        const pricingResponse: PricingResponse = {
            ...customer,
            total: `RM ${co.total()}`
        };

        return pricingResponse;
    }
}

export const pricingService = new PricingService();