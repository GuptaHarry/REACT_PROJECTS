import React, { createElement, useState } from "react";
import ReactDom from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import arr from "./utils/dummy";
import Counter from "./components/Counter";
/// testing

// const element1 = <h1>Hello Harry.....</h1>
// const Root = ReactDom.createRoot( document.getElementById("root"));
// Root.render(element1);

// myntra
// card creation

// put dummy data in utils folder => utility///

function App() {
  let [A, setA] = useState(arr);

  function sortArr() {
    A.sort((a, b) => a.price - b.price); //sort working  -> if postive so change  || if negative so as it is
    setA([...A]); // arr refernce leta hai -> to wo same ho gya ahai , -> use destructuring
    console.log(arr);
  }


  // above 699 price filter;
  function sortAbove699(){
       
      setA([...A.filter((value)=>value.price>=699)]);
  }

  return (
    <>
      <Header />

      {/* buuton for sort by price  */}

      <button className="btn-price" onClick={sortArr}>
        Sort By Price
      </button>
      <button className="btn-price" onClick={sortAbove699}>
        Sort Above 699
      </button>
      <div
        className="middle"
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {A.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            discount={value.discount}
            price={value.price}
          />
        ))}
      </div>

      <Footer />

      <Counter />
    </>
  );
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<App />);
