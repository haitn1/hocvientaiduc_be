import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    user_id: number;
    full_name: string;
    gender: number;
    email: string;
    birth_day: Date;
    phone: string;
    password: string;
    note: string;
    presenter_id: number;
    create_at: Date;
    update_at: Date;
}
