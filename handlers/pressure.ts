import logger from "../lib/logger.ts";
import sql from "../lib/postgresql.ts";

export default async function pressureHandler(message: object) {
  const temp = await sql`INSERT INTO pressure (client, value) VALUES ('test', ${message.toString()}) RETURNING *`
  
  logger.info('MQTT Pressure', message.toString())
}