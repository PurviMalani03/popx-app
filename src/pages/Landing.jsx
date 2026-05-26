import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="bottom-content">
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <button
          className="create-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;