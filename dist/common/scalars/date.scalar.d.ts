import { ValueNode } from 'graphql';
export declare class DateScalar {
    description: string;
    parseValue(value: any): Date;
    serialize(value: any): any;
    parseLiteral(ast: ValueNode): number;
}
