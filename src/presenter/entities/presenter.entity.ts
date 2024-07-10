import { Field } from "@nestjs/graphql";
import { CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('presenter_tb')
export class PresenterEntity {
    @PrimaryColumn()
    id : number;

    @Field()
    name:String;

    @CreateDateColumn()
    created:Date;

    @UpdateDateColumn()
    updated:Date;
}
