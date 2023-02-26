// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  console.log("This is dev: ", process.env.NODE_ENV)
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'file:./dev.db',
      },
    },
  })
}

export default prisma;