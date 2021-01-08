import React, { useEffect, useState } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://randomuser.me/api/?results=5");
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };
  return (
    <div>
      {items.map(item=>(
            <div key={item.login.uuid}>
              <h1 >{item.name.first} {item.name.last}</h1>
                <img src={item.picture.medium}/>
            </div>          
      ))}
    </div>
  );
}

export default Shop;
