import logger from "../lib/logger.ts";

export default function temperatureHandler(message: object) {
  logger.info('MQTT message', message.toString())
}