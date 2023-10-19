import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: "dev-niigata-flic",
  apiKey: process.env.API_KEY || '',
})