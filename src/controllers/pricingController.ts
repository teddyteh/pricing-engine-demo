import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Route
} from "tsoa";
import { ErrorResponse } from "../interfaces/errorResponse";
import { GetCustomerRequest } from "../interfaces/getCustomerRequest";
import { PricingResponse } from "../interfaces/pricingResponse";
import { pricingService } from "../services/pricingService";

@Route("pricing")
export class PricingController extends Controller {
    @Get("demo/{customerId}")
    public async getCustomerDemo(
        @Path() customerId: string
    ): Promise<PricingResponse | ErrorResponse> {
        try {
            const customer = pricingService.getDemoCustomer(customerId);

            if (!customer) {
                throw new Error("Customer not found.");
            }
    
            return pricingService.getPrice(customer);
        } catch (error) {
            return { error: error.message };
        }
    }

    @Post()
    public async getCustomer(
        @Body() body: GetCustomerRequest
    ): Promise<PricingResponse | ErrorResponse> {
        try {
            const { customerId, adTypes } = body;

            const customer = pricingService.parseCustomer(customerId, adTypes);
    
            return pricingService.getPrice(customer);    
        } catch (error) {
            return { error: error.message };
        }
    }
}