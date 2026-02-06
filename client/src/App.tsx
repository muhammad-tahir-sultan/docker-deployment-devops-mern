import { useEffect, useState } from "react"
import "./App.css"
const App = () => {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const backendUrl = 'http://localhost:4000'

  useEffect(() => {
    fetch(`${backendUrl}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setError(err.message));
  }, [])
  return (
    <div className="app">
      <h1>App</h1>
      <p>Message from server: {message ? <span className="message">{message}</span> : <span className="error">{error}</span>}</p>
    </div>
  )
}

export default App