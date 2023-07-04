import {H3Event} from 'h3'
import * as userModel from '~~/server/model/user'

export const  read = async () =>{
    try {
        const result = await userModel.read();
        return {
            data:result
        }
    } catch (error) {
        throw createError({
            statusCode:500,
            statusMessage:"Something went  wrong"
        })
    }
}