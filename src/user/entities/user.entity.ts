
import { Presenter } from "src/presenter/entities/presenter.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity{
   @PrimaryGeneratedColumn()
   user_id : number;
   @Column()
   full_name : string;

   @Column()
   gender : number;

   @Column()
   email : string;

   @Column()
   birth_day : Date;

   @Column()
   phone : string;

   @Column()
   password : string;

   @Column()
   note : string;

   @Column()
   presenter_id:number;

   @CreateDateColumn()
   create_at : Date;

   @UpdateDateColumn()
   update_at : Date;
}