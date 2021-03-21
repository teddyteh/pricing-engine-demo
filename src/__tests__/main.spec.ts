import { Checkout } from "../checkout";
import { Item } from "../interfaces/item";
import { AdType } from "../interfaces/itemType";
import * as pricingRules from "../rules.json";

describe("Customers", () => {
    let co: Checkout;
    let items: Item[];

    beforeEach(() => {
        co = new Checkout(pricingRules);
    })

    it("default", () => {
        items = [
            {
                customerId: "default",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "default",
                type: AdType.FEATURED_AD
            },
            {
                customerId: "default",
                type: AdType.PREMIUM_AD
            }
        ];

        items.forEach(item => co.add(item));

        const total = co.total();
        expect(total).toBe(987.97);
    });

    it("UEM Sunrise", () => {
        items = [
            {
                customerId: "uem-sunrise",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "uem-sunrise",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "uem-sunrise",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "uem-sunrise",
                type: AdType.PREMIUM_AD
            }
        ];

        items.forEach(item => co.add(item));

        const total = co.total();
        expect(total).toBe(934.97);
    })

    it("Sime Darby", () => {
        items = [
            {
                customerId: "sime-darby",
                type: AdType.FEATURED_AD
            },
            {
                customerId: "sime-darby",
                type: AdType.FEATURED_AD
            },
            {
                customerId: "sime-darby",
                type: AdType.FEATURED_AD
            },
            {
                customerId: "sime-darby",
                type: AdType.PREMIUM_AD
            }
        ];

        items.forEach(item => co.add(item));

        const total = co.total();
        expect(total).toBe(1294.96);
    })

    it("IGB Berhad", () => {
        items = [
            {
                customerId: "igb-berhad",
                type: AdType.PREMIUM_AD
            },
            {
                customerId: "igb-berhad",
                type: AdType.PREMIUM_AD
            },
            {
                customerId: "igb-berhad",
                type: AdType.PREMIUM_AD
            },
            {
                customerId: "igb-berhad",
                type: AdType.PREMIUM_AD
            }
        ];

        items.forEach(item => co.add(item));

        const total = co.total();
        expect(total).toBe(1519.96);
    })

    it("Mah Sing", () => {
        const items: Item[] = [
            {
                customerId: "mah-sing",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.STANDARD_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.FEATURED_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.FEATURED_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.PREMIUM_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.PREMIUM_AD
            },
            {
                customerId: "mah-sing",
                type: AdType.PREMIUM_AD
            }
        ];

        items.forEach(item => co.add(item));

        const total = co.total();
        expect(total).toBe(2869.91);
    })
});