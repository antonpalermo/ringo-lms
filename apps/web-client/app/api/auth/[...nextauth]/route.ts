import NextAuth from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'

import options from '@/app/api/auth/options'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, options)
}

export { handler as GET, handler as POST }
