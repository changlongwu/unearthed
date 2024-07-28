import pg from 'pg'
const connectionString = "postgresql://postgres:oaElzrbXRmeUBARIUFKEVbDDUKiGDCQp@monorail.proxy.rlwy.net:22082/railway"

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  connectionString

}

export const pool = new pg.Pool(config)
