import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      navigate("/home"); // 登入成功，跳轉到主頁
    } else {
      setError("帳號或密碼錯誤");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>登入系統</h2>
      <div>
        <input
          type="email"
          placeholder="輸入 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", marginBottom: "10px", width: "250px" }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="輸入密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginBottom: "10px", width: "250px" }}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        登入
      </button>
    </div>
  );
};

export default LoginPage;
