
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Presenter } from "src/presenter/entities/presenter.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
@ObjectType()
export class User extends BaseEntity{
   @PrimaryGeneratedColumn()
   @Field(() => ID)
   user_id : number;

   @Column()
   @Field()
   full_name : string;

   @Column()
   @Field()
   gender : number;

   @Column()
   @Field()
   email : string;

   @Column()
   @Field()
   birth_day : Date;

   @Column()
   @Field()
   phone : string;

   @Column()
   @Field()
   password : string;

   @Column()
   @Field()
   note : string;

   @Column()
   @Field()
   presenter_id:number;

   @Column()
   @Field()
   active:boolean;

   @CreateDateColumn()
   @Field()
   create_at : Date;

   @UpdateDateColumn()
   @Field()
   update_at : Date;
}