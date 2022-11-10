// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { Dados } from '../../components/Tabela360/hooks';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch(req.method) {
    case 'GET': {
      const posts = await prisma.veados.findMany()
      res.status(200).json(posts)

      break
    }
    case 'POST': {
      const dados = req.body as Dados
      await prisma.veados.create({ data: dados })
      res.status(201)
    }
  }
}

