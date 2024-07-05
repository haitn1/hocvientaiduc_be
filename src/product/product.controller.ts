import { Controller, Post ,Get, Param} from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductCreaterDto } from "./dtos/create-product-dto";

@Controller('products')
export class ProductController{
    constructor(private productService : ProductService){}
   
}