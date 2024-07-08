
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
   name : string;

   @Column({default:0})
   @Field()
   gender : number;

   @Column()
   @Field()
   email : string;

   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
   @Field()
   birth : Date;

   @Column({default:null})
   @Field()
   phone : string;

   @Column()
   @Field()
   password : string;

   @Column({default:null})
   @Field()
   note : string;

   @Column({default : 1})
   @Field()
   presenter_id:number;

   @Column({default : false})
   @Field()
   active:boolean;

   @CreateDateColumn()
   @Field()
   create_at : Date;

   @UpdateDateColumn()
   @Field()
   update_at : Date;
}