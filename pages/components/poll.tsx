import Link from "next/link";
import { PollProps } from "../../prisma/types"
import Answer from "./answer";
import { useSession } from 'next-auth/react'; 
import { useRouter } from "next/router";

type Props = {
    poll: PollProps;
}

export default function Poll (poll : PollProps) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleDelete = async () => {
    try {
      await fetch(`/api/poll/${poll.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("deleted")
      await router.push('/');
    } catch (error) {
      console.error(error);
    }
  }
    return (
        <div>
            <h3><Link href={`/poll/${poll.id}`}>{poll.title}</Link></h3>
            <div className='author'>By {poll.author.name}</div>
            {
              poll.author.id === session?.user.id && 
                <div>
                  <span onClick={handleDelete}>Delete it</span>
                </div>
            }
            <p>{poll.content}</p>
            <ul>
                {
                poll.answers.map(answer => {
                    return <Answer key={answer.id} {...answer}/>
                })
                } 
            </ul>
        </div>
    )
}