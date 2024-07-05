import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Product } from "./entities/product.entity";
import { ProductCreaterDto } from "./dtos/create-product-dto";
import { Console } from "console";

@Injectable() 
export class ProductService{
    constructor(private dataSource : DataSource){}
    
    
}