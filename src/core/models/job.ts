interface Job {
    id: string,
    thumbnail: string,
    title: string,
    city: string,
    description: string,
    state: string,
    created_at: Date,
    end_date: Date,
    counter: Message,
}

interface Message {
    messages_total: number,
    messages_unread: number
}

export default Job;