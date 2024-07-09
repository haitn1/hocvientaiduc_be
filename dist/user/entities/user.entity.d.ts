import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    user_id: number;
    name: string;
    gender: number;
    email: string;
    birth: Date;
    phone: string;
    password: string;
    note: string;
    presenter_id: number;
    active: boolean;
    created: Date;
    updated: Date;
}
