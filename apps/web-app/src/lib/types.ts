export type Chapter = {
  id: string
  title: string
  description: string
  duration: string
  isDraft: boolean
  courseId: string
  dateCreated: Date
  dateUpdated: Date
}

export type Course = {
  name: string
  dateCreated: Date
  dateUpdated: Date
  id: string
  description: string
  chapters: Chapter[]
  isDraft: boolean
}
