import React from "react";
import TextCounter from "./TextCounter";
import TrafficLight from "./TrafficLight";
import "./App.css";
import TodoList from "./TodoList";
import CartApp from "./CartApp";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <div>
      <h2>Bài 1: Bộ đếm ký tự</h2>
      <TextCounter />
      <h2>Bài 2: Đèn giao thông</h2>
      <TrafficLight />
      <h2>Bài 3: Danh sách công việc</h2>
      <TodoList />
      <h2>Bài 4: Giỏ hàng</h2>
      <CartApp />
      <h2>Bài 5: Form Đăng ký</h2>
      <RegisterForm />
    </div>
  );
}

export default App;
