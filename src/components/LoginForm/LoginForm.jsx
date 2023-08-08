import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/authSlice";
import { Input, Button } from "@mui/material";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { username, password };
    dispatch(login(user));
  };

  return (
    <div className={s.form}>
      <div className={s.from__login}>
        <Input
          size="md"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={s.from__password}>
        <Input
          size="md"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={s.from__btn_login}>
        <Button onClick={handleLogin}>Log In</Button>
      </div>
    </div>
  );
};

export default LoginForm;
