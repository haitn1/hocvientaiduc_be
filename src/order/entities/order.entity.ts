import {
    Entity,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('order_tb')
  export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    type:String;

    @Column()
    name: String;

    @Column({default:null})
    data: String;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
  
    
  }