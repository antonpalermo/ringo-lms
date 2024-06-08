import { Pool, PoolConfig } from 'pg'
import { Kysely, PostgresDialect, PostgresDialectConfig } from 'kysely'

import { DB } from '@/prisma/generated/types'

const poolConfig: PoolConfig = {
  connectionString: process.env.DATABASE_URL
}

const dialectOptions: PostgresDialectConfig = {
  pool: new Pool(poolConfig)
}

const dialect = new PostgresDialect(dialectOptions)

export const db = new Kysely<DB>({
  dialect
})

export * from '@/prisma/generated/types'
