import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TransactionCard from "./components/TransactionCard/TransactionCard";
import transactions from "./database/transactions.json";

function App() {
  const [data, setData] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const getData = async () => {
    try {
      const res = await axios.get("/");
      setTotalPoints(0);
      const data = transactions.map((item) => {
        const points =
          ((item.tranractionAmount >= 100 && 50) || 0) +
          ((item.tranractionAmount > 100 &&
            (item.tranractionAmount - 100) * 2) ||
            0);
        setTotalPoints((state) => state + points);
        return { ...item, points };
      });
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App max-w-7xl mx-auto ">
      <div className="flex justify-center px-8 py-4 bg-blue-300 my-2 rounded-3xl items-center gap-2 text-2xl shadow-black shadow-sm hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer">
        <strong>{totalPoints}</strong>
        <span>Total Points</span>
      </div>
      {data.map(({ description, currency, tranractionAmount, points }) => {
        return (
          <TransactionCard
            description={description}
            currency={currency}
            tranractionAmount={tranractionAmount}
            points={points}
          />
        );
      })}
    </div>
  );
}

export default App;
