import postgres from "https://deno.land/x/postgresjs@v3.4.3/mod.js"
import env from "./env.ts"

const sql = postgres(env['POSTGRESQL_CONNECTION_STRING'])

export default sql