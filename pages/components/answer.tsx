import { AnswerProps } from "../../prisma/types"

export default function Answer (answer: AnswerProps) {
    return (
        <li>{answer.title}</li>
    )
}