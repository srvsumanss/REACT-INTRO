import React, { useEffect, useState } from "react";
import axios from "axios";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [items, setitems] = useState([]);
  const [page, setpage] = useState(1);
  console.log(items.length);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(`http://localhost:3002/items?_limit=3&_page=${page}`)
      .then((res) => {
        setitems(res.data);
      });
  };

  return (
    <div className="App">
      <GroceryInput addData={getData} />
      <div>
        {items.map((e) => {
          return <GroceryList tit={e.title} />;
        })}
      </div>
      <div>
        <button
          onClick={() => {
            if (page === 1 || page > 1) {
              setpage(page - 1);
            }
          }}
        >
          Pre
        </button>
        <button
          onClick={() => {
            setpage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Grocery;
