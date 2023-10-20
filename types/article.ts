export type Event = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
    eye_catch: {
      url: string
      height: number
      width: number
    }
    tag: string
    url: string
  }

export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  eye_catch: {
    url: string
    height: number
    width: number
  }
  tag: string
}

export type Support = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  supports: string
}