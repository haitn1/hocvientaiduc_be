import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_tb')
export class Product extends BaseEntity{
   @PrimaryGeneratedColumn()
   id : number;

   @Column()
   name : string;
}