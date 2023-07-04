import { sql } from '~~/server/db';

export type UserModel = {
    id: number;
}
export const read = async () => {
    const result = await sql({
        query: "select id  from user",
    })
    return result as UserModel[]
}