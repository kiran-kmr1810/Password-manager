import "./App.css";
import {useState} from "react"; 
import Axios from "axios";

function App() {
  const [Password, setPassword] = useState("");
  const [Website, setWebsite] = useState("");
  const [Username, setUsername] = useState("");
  const [comment, setcomment] = useState("");

  const addPassword = ()=>{
    Axios.post('http://localhost:3000/addpassword',{
      password : Password,
      username : Username,
      website : Website,
      comment : comment

    });
  }
  return (
    <div className="App">
      <div className="AddingPassword">
        <input
          type="text"
          placeholder="Website"
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="comment"
          onChange={(event) => {
            setcomment(event.target.value);
          }}
        />
        <button onClick = {addPassword}> Add Password</button>
      </div>
    </div>
  );
}

export default App;