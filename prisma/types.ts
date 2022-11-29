export type PollProps =  {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: Date;
    author?: UserProps;
    answers: AnswerProps[];
}

export type AnswerProps = {
    id: string;
    title: string;
    createdAt: Date;
    pollId: string;
    votes?: VoteProps[];
}

export type VoteProps = {
    id: string;
    createdAt: Date;
    answerId: string;
    voterId: string; 
}

export type UserProps =  {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    polls?: PollProps[];
    votes?: VoteProps[];
    answer?: VoteProps[];
}
