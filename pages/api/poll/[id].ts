import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PUT") {
        // update a todo.
        const id = String(req.query.id)
        const title = String(req.query.title);
        const content = String(req.query.content);
        const published = Boolean(req.query.published);
        
        const poll = await prisma.poll.update({
            where: { id: String(id) },
            data: { title, content, published },
        })
        return res.json(poll);
    } else if (req.method === "DELETE") {
        // delete a todo.
        const { id } = req.query;
        const poll = await prisma.poll.delete({
            where: {
                id: String(id),
            },
        });
        return res.json(poll);
    }
}