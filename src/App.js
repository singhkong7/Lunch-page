import React, { Component } from 'react'
import "./App.css";
import data from "./Data";
import Card from "./Card/Card";
import Side from "./Left-Side/side";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: data
     
    };
  }
  render() {
    const {collections}=this.state;
    return (
      <div className="App">
         <div className="front">
          <Side />
          <div className="center">
            <h1 className="top">What are you having for Lunch ?</h1>
          </div>
          <div className="text">
            <p>
                Lorem ipsum dolor sit amet,<br></br>
                consectetur adipsing elit<br></br>
                sed do eiusmod tempor<br></br>
                incididunt ut labore et
            </p>
          </div>
         </div>
        
        <div className="card_top">
        {
          collections.map(({id, ...otherCollectionProps})=>
          (
              <Card key={id} {...otherCollectionProps} />
          ))
          }
        </div>
    </div>
    )
  }
}
