import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");

  const BASE_URL = "https://jsonplaceholder.typicode.com";

  // Axios using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  // Axios using Async Await
  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Axios</h1>
      {error !== "" && <p>{error}</p>}
      <div className="flex">
        {myData.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
