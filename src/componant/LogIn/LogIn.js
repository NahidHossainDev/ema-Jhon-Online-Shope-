import React, { useState } from "react";
import { useContext } from "react";
import { ContextElement } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { initializeLoginFramework,handleSignOut, handleGoogleSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./logInManager";

function LogIn() {

 
const [userLogIn, setUserLogIn] = useContext(ContextElement);
  
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isLogin: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
    newUser: newUser,
  });

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
         setUser(res);
         setUserLogIn(res);
         history.replace(from);
      })
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
        setUser(res);
        setUserLogIn(res);
          history.replace(from);
      });
    }
    e.preventDefault();
  };  
  const GoogleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setUserLogIn(res);
      history.replace(from);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      setUser(res);
      setUserLogIn(res);
    });
  };

  let filedValidation = true;
  const handleChange = (event) => {
    if (event.target.name === "email") {
      filedValidation = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const passwordLength = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      filedValidation = passwordLength && passwordHasNumber;
    }
    if (filedValidation) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div>
      {user.isLogin ? (
        <button onClick={signOut}>Sing Out</button>
      ) : (
        <button onClick={GoogleSignIn}>Sign In with Google</button>
      )}
      {user.isLogin && (
        <div>
          <span>
            Welcome, <h3 style={{ display: "inline-block" }}>{user.name}</h3>
          </span>
          <p>Email: {user.email}</p>
          <img
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            src={user.photo}
            alt=""
          />
        </div>
      )}
      <div className="sign-Up" style={{ marginTop: "100px" }}>
        <form onSubmit={handleSubmit}>
          <label for="newUser">New user</label>
          <input
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id=""
          />
          <br />
          {newUser && (
            <input
              type="text"
              name="name"
              onBlur={handleChange}
              placeholder="Your Name"
              required
            />
          )}
          <br />
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            placeholder="Email address"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleChange}
            placeholder="Password"
            required
          />
          <br />
          <input
            type="submit"
            name=""
            value={newUser ? "Sign Up" : "Sign In"}
          />
        </form>
        {user.success ? (
          <p style={{ color: "green" }}>
            Sign {newUser ? "Up" : "In"} done successfully
          </p>
        ) : (
          <p style={{ color: "red" }}>{user.error}</p>
        )}
      </div>
    </div>
  );
}

export default LogIn;
