import { useBase, createRouter, defineEventHandler } from "h3";
import * as userCtrl from '~~/server/controller/user'
const router = createRouter();
router.get('/list', defineEventHandler(userCtrl.read))


export default useBase('/api/user', router.handler)