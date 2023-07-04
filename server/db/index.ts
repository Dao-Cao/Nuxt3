import  mysql  from "mysql2/promise";

const pool = mysql.createPool({
    host: 'dev5p.in.satt.jp',
    user: 'root',
    password: "abc123$%&",
    database: 'sf-ri'
});


interface Options {
    query: string;
    values?: any[];
}
export const sql = async ({ query, values }: Options) => {
    const [rows] = await pool.query(query, values);
    return rows
}