import * as mqtt from "npm:mqtt"
import logger from "./lib/logger.ts"
import temperatureHandler from "./handlers/temperature.ts";
import env from "./lib/env.ts";
import pressureHandler from "./handlers/pressure.ts";
import humidityHandler from "./handlers/humidity.ts";

const client = mqtt.connect('mqtt://localhost:1883', {
  username: env['MQTT_USERNAME'],
  password: env['MQTT_PASSWORD'],
})

client.on('connect', function () {
  logger.info('MQTT connected')
  client.subscribe('temperature', function (err) {
    if (err) {
      logger.error('MQTT subscribe error', err)
    }
  })
  client.subscribe('pressure', function (err) {
    if (err) {
      logger.error('MQTT subscribe error', err)
    }
  })
  client.subscribe('humidity', function (err) {
    if (err) {
      logger.error('MQTT subscribe error', err)
    }
  })
})

client.on('message', function (topic, message) {
  if (topic === 'temperature') temperatureHandler(message)
  if (topic === 'pressure') pressureHandler(message)
  if (topic === 'humidity') humidityHandler(message)
})


client.on('offline', function () {
  logger.warn('MQTT offline')
})

