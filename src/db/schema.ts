
import { sql } from "drizzle-orm";
import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 } from 'uuid'

export const posts = sqliteTable(
  "post",
  {
    id: text("id").primaryKey().$defaultFn(()=> v4()).notNull(),
    title: text("title", { length: 256 }).notNull(),
    author: text("author", { length: 128}).notNull(),
    body: text('body').notNull(),

    created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    updated_at: text("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    deleted_at: text("deleted_at"),
    /*
    TODO author_social_links
    */
  },
  
  (example) => ({
    titleIndex: index("name_idx").on(example.title),
  })

);


export type InsertPost = typeof posts.$inferInsert
export type SelectPost = typeof posts.$inferSelect