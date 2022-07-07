import "./style.css"; 

import { Card, CardProps } from "../Card";
import { useRef, useState } from "react";
import { duplicateRegenerateSortArray } from "../../utils/cardsUtils";

export interface GridProps{ 
  cards:CardProps[]; 
}

export function Gird({cards}:GridProps){ 
  const [stateCards, setStateCards] = useState(()=> { 
    return duplicateRegenerateSortArray(cards); 
  }); 

  const first = useRef<CardProps | null>(null); 
  const second = useRef<CardProps | null>(null); 
  const unFlip = useRef(false); 
  const [matches, setMatches] = useState(0); 
  const [moves, setMoves] = useState(0); 

  const handleReset = ()=> { 
    setStateCards(duplicateRegenerateSortArray(cards)); 
    first.current = null; 
    second.current = null; 
    unFlip.current = false; 
    setMatches(0);
    setMoves(0); 
  }

  const handleClick = (id:string) => { 
    const newStateCards = stateCards.map(card => { 
      if(card.id !== id) return card;
      if(card.flipped) return card; 
      if(unFlip.current && first.current && second.current){ 
        first.current.flipped = false; 
        second.current.flipped = false; 
        first.current = null; 
        second.current = null;
        unFlip.current =false;  
      }
      card.flipped = true;  
      if(first.current === null){ 
        first.current = card; 
      }else if(second.current === null){ 
        second.current = card; 
      }
      if(first.current && second.current){ 
        if(first.current.back === second.current.back){ 
          first.current = null; 
          second.current = null; 
          setMatches((match)=>match+1); 
        }else { 
          unFlip.current = true; 
        }
        setMoves((move)=>move+1); 
      }
      return card; 
    }); 
    setStateCards(newStateCards); 
  }

  return ( 
    <>
      <h1>Memory Game</h1>
      <div className="grid"> 
      {stateCards.map(card => { 
        return <Card {...card} key={card.id} handleClick={handleClick} />
      })}
      </div>
      <div className="intro">
        <p>Moves: {moves} | Matches: {matches}
          <button onClick={handleReset}>Reset</button>
        </p>
      </div>
    </>
    
  ); 
}