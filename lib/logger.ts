import Logger from "https://deno.land/x/logger@v1.1.3/logger.ts";

const logger = new Logger();
await logger.initFileLogger("./logs", {
  rotate: true,
})

export default logger;