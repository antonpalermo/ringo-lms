import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.RESOURCE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
