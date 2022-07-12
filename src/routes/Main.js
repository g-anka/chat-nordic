import { Link } from 'react-router-dom'

function Main() {
    return(
        <div>
            <h1>Добро пожаловать</h1>
            <Link to="/chats">Проходите в чат</Link>
        </div>
    )
}

export default Main