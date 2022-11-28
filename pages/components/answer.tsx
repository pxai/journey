import { AnswerProps } from "../../prisma/types"

export default function Answer (answer: AnswerProps) {
    return (
        <li key={answer.id}>{answer.title}</li>
    )
}