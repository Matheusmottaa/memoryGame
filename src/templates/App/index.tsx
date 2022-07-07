import { Card } from "../../Components/Card";
import { Gird } from "../../Components/Grid";
import { cards } from "../../data/card";
import "./styles.css"; 

export function App(){ 
  return ( 
    <div className="app">
      <Gird cards={cards}/>
    </div>
  ); 
}