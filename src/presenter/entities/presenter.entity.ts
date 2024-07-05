import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('presenter_tb')
export class Presenter extends BaseEntity{
   @PrimaryColumn()
   id : number;

   @Column()
   name : string
}