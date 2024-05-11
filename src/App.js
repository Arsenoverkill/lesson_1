import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios(
        "https://api-v2.elchocrud.pro/api/v1/b7f43731b8f4d8236a87b1adb6b4a1e6/product"
      );
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const postData = async () => {
    try {
      await axios.post(
        "https://api-v2.elchocrud.pro/api/v1/b7f43731b8f4d8236a87b1adb6b4a1e6/product",
        { name: value }
      );
      getData()
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={postData}>Add</button>
    </div>
  );
}

export default App;
