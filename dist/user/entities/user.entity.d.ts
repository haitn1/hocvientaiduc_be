import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    user_id: number;
    full_name: string;
    gender: number;
    email: string;
    birth_day: Date;
    phone: string;
    password: string;
    note: string;
    presenter_id: number;
    active: boolean;
    create_at: Date;
    update_at: Date;
}
