import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import { login } from "./store/auth/authSlice";
import LogoutButton from "./components/LogoutButton";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(login(user));
    }
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <LogoutButton />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;
