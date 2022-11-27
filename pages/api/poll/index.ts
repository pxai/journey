import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
        // creating a new todo.
        const title = String(req.query.title);
        const content = String(req.query.content);
        const published = Boolean(req.query.published);

        const result = await prisma.poll.create({
            data: {
                title, content, published
            },
        })
        return res.json(result)
    }
}