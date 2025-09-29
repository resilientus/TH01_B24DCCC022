import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    setError("");
    setSubmitted(form);
  };

  return ( 
    <div style={{marginBottom: "25px"}}>
        <h2 style={{marginLeft: "35px"}}>Form Đăng Ký</h2>   
        <form onSubmit={handleSubmit} style={{marginLeft: "35px"}}>
            <input
          placeholder="Tên"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
            /> 
            <br/>
            <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br/>
            <input
          type="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <br/>
            <button type="submit" style={{marginBottom: "10px"}}>Đăng ký</button>
        </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submitted && (
        <div style={{marginLeft: "35px", paddingBottom: "20px"}}>
          <h3 style={{marginLeft: "0px"}}>Thông tin đã nhập:</h3>
          <p>Tên: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Mật khẩu: {submitted.password}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
