import logger from "../lib/logger.ts";
import sql from "../lib/postgresql.ts";

export default async function humidityHandler(message: object) {
  const temp = await sql`INSERT INTO humidity (client, value) VALUES ('test', ${message.toString()}) RETURNING *`
  
  logger.info('MQTT Humidity', message.toString())
}