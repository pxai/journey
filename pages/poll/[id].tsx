import prisma from '../../lib/prisma';
import { GetServerSideProps } from "next";
import { PollProps } from "../../prisma/types"
import Poll from "../components/poll";

type Props = {
  poll: PollProps;
}

export default function PollPage ({ poll }: Props) {
  return (
      <div>
        <Poll {...poll} />
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = String(query.id);
  const poll = await prisma.poll.findUnique({
    where: { id },
    include: {
      author: {
          select: { name: true, id: true },
      },
      answers: true
    },
  });
  return {
      props: { poll: JSON.parse(JSON.stringify(poll)) }
  };
};