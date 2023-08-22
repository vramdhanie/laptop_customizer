import React, { useState } from "react";
import "./App.css";

function App(props) {
  const [selected, setSelected] = useState({
    Processor: {
      name: "17th Generation Intel Core HB (7 Core with donut spare)",
      cost: 700,
    },
    "Operating System": {
      name: "Ubuntu Linux 16.04",
      cost: 200,
    },
    "Video Card": {
      name: "Toyota Corolla 1.5v",
      cost: 1150.98,
    },
    Display: {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500,
    },
  });

  const updateFeature = (feature, newValue) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [feature]: newValue,
    }));
  };

  const summary = Object.keys(selected).map((key) => (
    <div className="summary__option" key={key}>
      <div className="summary__option__label">{key}</div>
      <div className="summary__option__value">{selected[key].name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(selected[key].cost)}
      </div>
    </div>
  ));

  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );

  const features = Object.keys(props.features).map((key) => {
    const options = props.features[key].map((item, index) => {
      const selectedClass =
        item.name === selected[key].name ? "feature__selected" : "";
      const featureClass = "feature__option " + selectedClass;
      return (
        <li key={index} className="feature__item">
          <div
            className={featureClass}
            onClick={(e) => updateFeature(key, item)}
          >
            {item.name} (
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.cost)}
            )
          </div>
        </li>
      );
    });

    return (
      <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">{options}</ul>
      </div>
    );
  });

  return (
    <div className="App">
      <header>
        <h1>ELF Computing</h1>
        <h3>Laptops</h3>
        <h5>Customize your laptop</h5>
      </header>
      <main>
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          {features}
        </section>
        <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
