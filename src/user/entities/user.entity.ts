
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user_tb')
export class UserEntity extends BaseEntity{
   @PrimaryGeneratedColumn()
   user_id : number;

   @Column()
   name : string;

   @Column({default:0})
   gender : number;

   @Column()
   email : string;

   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
   birth : Date;

   @Column({default:null})
   phone : string;

   @Column()
   password : string;

   @Column({default:null})
   note : string;

   @Column({default : 1})
   presenter_id:number;

   @Column({default : false})
   active:boolean;

   @CreateDateColumn()
   created : Date;

   @UpdateDateColumn()
   updated : Date;
}