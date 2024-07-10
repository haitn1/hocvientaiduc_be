
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('presenter_tb')
export class PresenterEntity {
    @PrimaryColumn()
    id : number;

    @Column()
    name:String;

    @CreateDateColumn()
    created:Date;

    @UpdateDateColumn()
    updated:Date;
}
