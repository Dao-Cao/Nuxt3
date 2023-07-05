import { defineEventHandler,getRequestURL,setCookie } from "h3";
export default defineEventHandler((event) => {
    console.log('New request: ' + getRequestURL(event))
  })