import { Checkout } from "./checkout";
import { defaultItems, igbBerhardItems, mahSingItems, simeDarbyItems, uemSunriseItems } from "./constants/demo";
import * as pricingRules from "./rules.json";

const customers = [
  { name: "default", items: defaultItems, message: 'Standard Ads x5, Featured Ads x2, Premium Ads x3' },
  { name: "UEM Sunrise", items: uemSunriseItems, message: 'Standard Ads x3, Premium Ads x1' },
  { name: "Sime Darby", items: simeDarbyItems, message: 'Featured Ads x3, Premium Ads x1' },
  { name: "IGB Berhard", items: igbBerhardItems, message: 'Premium Ads x4' },
  { name: "Mah Sing", items: mahSingItems, message: 'Standard Ads x5, Featured Ads x2, Premium Ads x3' },

];

console.log(`
 Instahome Assessment
 - Teddy
`);

customers.forEach(customer => {
  const co = new Checkout(pricingRules);

  customer.items.forEach(item => co.add(item));

  console.log(`
    Customer: ${customer.name}
    Listings scanned: ${customer.message}
    Total: RM ${co.total()} 
  `);
});

console.log(`Run test cases to verify.`);