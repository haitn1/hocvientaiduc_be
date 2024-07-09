import { Field, ID, ObjectType } from 'type-graphql';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('items_tb')
  @ObjectType()
  export class Item {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: number;
  
    @Column()
    @Field()
    name: String;

    @Column()
    @Field()
    user_id: number;
  
    @UpdateDateColumn()
    @Field()
    updated: Date;
  
    @CreateDateColumn()
    @Field()
    created: Date;
  }