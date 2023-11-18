import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("token");

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const response = fetch(`http://localhost:3302/api/users/verify`, {
        method: "POST",
        headers: {
          "jwt-token": token,
        },
        body: JSON.stringify(token),
      });
      if (response !== 200) {
        navigate("/login");
      }
    } catch (e) {
      navigate("/login");
    }

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <header>
        <h1>My Simple React Home Page</h1>
      </header>
      <main>
        <p>
          Welcome to my simple React home page! This is a basic example of a
          React project.
        </p>
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </main>
    </div>
  );
};

export default HomePage;
