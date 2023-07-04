import { sql } from '~~/server/db';

export type UserModel = {
    logon: string;
}
export const read = async () => {
    const result = await sql({
        query: "select logon  from user_master",
    })
    return result as UserModel[]
}