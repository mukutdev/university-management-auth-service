import dotenv from 'dotenv'
import path from "path"
dotenv.config({path : path.join(process.cwd() , '.env')})

export default {
    port : process.env.PORT,
    db_url : process.env.DB_URL,
    db_user : process.env.DB_USER,
    db_password : process.env.DB_PASS,
}