import type { ColumnType } from 'kysely'
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export type Chapter = {
  id: Generated<string>
  title: string
  description: string
  dateCreated: Generated<Timestamp>
  dateUpdated: Generated<Timestamp>
}
export type Course = {
  id: Generated<string>
  name: string
  description: string | null
  isDraft: Generated<boolean>
  dateCreated: Generated<Timestamp>
  dateUpdated: Generated<Timestamp>
}
export type DB = {
  chapters: Chapter
  courses: Course
}
