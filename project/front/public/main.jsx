import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token) {
      navigate("/login");
    }

    const res = fetch(`http://localhost:3302/api/users/verify`, {
      method: "POST",
      headers: {
        "jwt-token": user.token,
      },
    });
    if (res.status === 401) {
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
