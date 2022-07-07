import "./style.css"; 

export interface CardProps{ 
  id:string; 
  flipped?:boolean; 
  back:string;
  handleClick?: (id:string)=> void;  
}

export function Card({flipped = false, back, handleClick, id}:CardProps){ 
  const cardContentClassNames = ['cardContent']
  flipped && cardContentClassNames.push("cardContentFlipped")
  const handleClickFn = ()=> { 
    if(handleClick)
      handleClick(id); 
  }
  return (
    <div className="card" onClick={()=> handleClickFn(id)}>
      <div className={cardContentClassNames.join(' ')}>
        <div className="cardFace cardFaceFront">?</div>
        <div className="cardFace cardFaceBack">{back}</div>
      </div>
    </div>
  ); 
}