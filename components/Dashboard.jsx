import { useEffect, useState } from "react";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => r.json())
      .then(setJobs);
  }, []);

  const addJob = async () => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        problem: input,
        status: "waiting"
      })
    });

    setInput("");
    const res = await fetch("/api/jobs");
    setJobs(await res.json());
  };

  return (
    <div style={wrap}>
      <h1>🔧 MECH SAFI DASHBOARD</h1>

      <div style={{ display: "flex", gap: 10 }}>
        <input value={input} onChange={(e)=>setInput(e.target.value)} style={inputStyle}/>
        <button onClick={addJob} style={btn}>Add</button>
      </div>

      <div style={{ marginTop: 20 }}>
        {jobs.map((j) => (
          <div key={j.id} style={card}>
            {j.problem} — {j.status}
          </div>
        ))}
      </div>
    </div>
  );
}

const wrap = { padding: 20, background: "#060A14", color: "#fff", minHeight: "100vh" };
const inputStyle = { flex: 1, padding: 10 };
const btn = { background: "#FF6B1A", border: "none", color: "#fff", padding: 10 };
const card = { background: "#1A2740", padding: 10, marginTop: 10 };
