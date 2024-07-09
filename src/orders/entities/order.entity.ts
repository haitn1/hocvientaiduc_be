import {
    Entity,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('order_tb')
  export class OrderEntity {
    
    @Column()
    id: string;
  
    @Column()
    name: String;

    @Column()
    data: String;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
  
    
  }