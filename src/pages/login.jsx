import React from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser({ name, email });
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="btn submit">Login</button>
    </form>
  );
};
export default Login;
