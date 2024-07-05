
import { Presenter } from "src/presenter/entities/presenter.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
   @PrimaryGeneratedColumn()
   user_id : number;
   @Column({default:""})
   full_name : string;

   @Column({default:0})
   gender : number;

   @Column({default:""})
   email : string;

   @Column({default:null})
   birth_day : Date;

   @Column({default:""})
   phone : string;

   @Column({default:""})
   password : string;

   @Column({default:""})
   note : string;

   @Column({default:1})
   presenter_id:number;
/*
   @ManyToOne(type =>  Presenter,  presenter =>  presenter.id)
   presenter: Presenter;
*/
   @Column({default:null})
   create_at : Date;

   @Column({default:null})
   update_at : Date;
}