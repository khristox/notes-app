import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"
console.log("🌐 Connecting to database with URL:", process.env.DATABASE_URL)
export const db = drizzle(process.env.DATABASE_URL!, { schema, logger: true, })