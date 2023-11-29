import logger from "../lib/logger.ts";
import sql from "../lib/postgresql.ts";

export default async function temperatureHandler(message: object) {
  const temp = await sql`INSERT INTO temperature (client, value) VALUES ('test', ${message.toString()}) RETURNING *`
  
  logger.info('MQTT Temperature', message.toString())
}