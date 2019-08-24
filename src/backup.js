import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = Object.keys(this.state.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[key].cost) }
            </div>
        </div>)

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


    const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.updateFeature(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
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
            { features }
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

/*
.main__form {
  flex: 5;
  padding: 4px;
}

.main__summary {
  flex: 2;
  box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
  margin: 2px;
  padding: 2px;
}

.summary__option {
  font-size: 0.9em;
  display: grid;
  grid-template-areas: "key cost"
                       "value value";
  margin-top: 10px;
  box-shadow: 0 -1px 0 0 rgba(0,0,0,0.2);
}

.summary__option__label {
  font-weight: bold;
  grid-area: key
}

.summary__option__value {
  grid-area: value;
  color: lightblue;
}

.summary__option__cost {
  grid-area: cost;
  text-align: right;
}


.summary__total {
  font-size: 1.2em;
  display: flex;
  margin-top: 15px;
  border-top: solid 1px rgba(0,0,0,0.3);
  padding: 3px;
}

.summary__total__label {
  font-weight: bold;
  flex: 2;
}

.summary__total__value {
  flex: 1;
  color: red;
}

.feature__list {
  list-style: none;
}

.feature__option:not(.feature__selected) {
  cursor: pointer;
}

.feature__option:not(.feature__selected):hover {
  text-shadow: 1px 1px 2px blue;
}

.feature__option {
  margin-top: 4px;
  padding: 2px;
}

.feature__selected {
  background: #DEDEDE;
}

*/ 
export default App;  

