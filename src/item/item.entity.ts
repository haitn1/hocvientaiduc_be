import { Field, ID, ObjectType } from 'type-graphql';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('items')
  @ObjectType()
  export class Item {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: number;
  
    @Column()
    @Field()
    name: string;
  
    @UpdateDateColumn()
    @Field()
    updated: Date;
  
    @CreateDateColumn()
    @Field()
    created: Date;
  }