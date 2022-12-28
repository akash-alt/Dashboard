import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Link} from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    
    <div className="login">
      
      <form onSubmit={handleLogin}>
      <h3>Login</h3>
        <span className="email-adr">

      <label>Email address</label>
      </span>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="email-pass">
        <label>Password</label>
        </span>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn-submit">Login</button>
        <div className="signup-link">
        <Link to='/signup'>signup</Link>
        </div>
        {error && <span>Wrong email or password!</span>}
        <span>
          
        </span>
      </form>
    </div>
  );
};

export default Login;
