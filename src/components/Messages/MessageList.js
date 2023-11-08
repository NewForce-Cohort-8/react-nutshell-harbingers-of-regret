import { useNavigate } from "react-router-dom"

export const MessageList = ({message}) => {
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const navigate = useNavigate()
  
    return (
      <>
      <h2>Messages</h2>
        <article className="chats">
          {message.map((messages) => (
            <section className="chat" key={`chat--${messages.id}`}>
                <h4>{messages.user?.username}</h4>

                {messages.description}

                <p className="buttonContainer">                <button 
                onClick={() => navigate(`/messages/${messages.id}/edit`)}>✏️</button>

<button 
                onClick={ () => {
    return fetch(`http://localhost:8088/messages/${messages.id}`, {
        method: "DELETE"
        
    })
    .then(response => response.json())
    .then((event) => {
      event.preventDefault()
    })
}
  }>💣</button> </p>

            </section>
          ))}
        </article>
      </>
    )
  }


 