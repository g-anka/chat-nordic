import { useEffect, useRef } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getMessages, selectMessages, connect, submitMessage } from "../features/chats/messagesSlice"
import Message from "../features/chats/Message"
import MessageForm from "../features/chats/MessageForm"
import styled from 'styled-components'

function Chat() {
    const { chatId } = useParams()
    const dispatch = useDispatch()
    const messages = useSelector(selectMessages)
    const messagesRef = useRef()

    useEffect(() => {
        dispatch(getMessages(chatId))
        dispatch(connect())
    }, [chatId])
    console.log("messages", messages)

    useEffect(() => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }, [messages])

    const handleSubmit = ({ name, text, imageURL, location }) => {
        const message = {
            chatId,
            name,
            text,
            imageURL,
            location,
        }
        dispatch(submitMessage(message))
    }

    return (
        <div>
            <h1>Чат {chatId}</h1>
            <SMessages ref={messagesRef}>
                {messages.map((message) => (
                    <div key={message._id} className="mb-3">
                        <Message message={message} />
                    </div>
                ))}
            </SMessages>
            <MessageForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Chat

const SMessages = styled.div`
  max-height: 50vh;
  overflow: scroll;
`