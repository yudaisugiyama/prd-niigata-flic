import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: "dev-niigata-flic",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
})