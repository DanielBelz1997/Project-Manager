import { useState, useEffect } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefualt();
  };
};
