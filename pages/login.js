import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <div style={wrap}>
      <h2>🔐 MECH SAFI LOGIN</h2>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" style={input}/>
      <button style={btn}>Send Login Link</button>
    </div>
  );
}

const wrap = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#060A14",
  color: "#fff"
};

const input = { padding: 10, width: 250, marginBottom: 10 };
const btn = { padding: 10, background: "#FF6B1A", border: "none", color: "#fff" };
