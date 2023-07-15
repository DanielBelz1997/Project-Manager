import { useState, useEffect } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      comment: comment,
    };
    try {
      const response = await fetch("http://localhost:3000/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");

        setName("");
        setEmail("");
        setComment("");

        const getDataResponse = await fetch("http://localhost:3000/list");
        if (getDataResponse.ok) {
          const data = await getDataResponse.json();
          setSubmittedData(data);
        }
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/list");
        if (response.ok) {
          const data = await response.json();
          setSubmittedData(data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h2>נתונים:</h2>
          {submittedData.map((item) => (
            <div className="item-box" key={item._id}>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Comment:</strong> {item.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormComponent;
