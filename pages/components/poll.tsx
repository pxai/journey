import { PollProps } from "../../prisma/types"
import Answer from "./answer";

type Props = {
    poll: PollProps;
}

export default function Poll (poll : PollProps) {
    return (
        <div key= { poll.id }>
            <h3>{poll.title}</h3>
            <div className='author'>By {poll.author.name}</div>
            <p>{poll.content}</p>
            <ul>
                {
                poll.answers.map(answer => {
                    return <Answer {...answer}/>
                })
                } 
            </ul>
        </div>
    )
}