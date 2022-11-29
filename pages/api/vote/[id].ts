import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PUT") {
        const id = String(req.query.id)
        const title = String(req.query.title);

        const post = await prisma.vote.update({
            where: { id: String(id) },
            data: { title },
        })
        return res.json(post);
    } else if (req.method === "DELETE") {
        const { id } = req.query;
        const vote = await prisma.answer.delete({
            where: {
                id: String(id),
            },
        });
        return res.json(vote);
    }
}