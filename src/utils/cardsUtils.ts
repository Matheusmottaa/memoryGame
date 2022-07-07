import { CardProps } from "../Components/Card";

const keyGenerator = ():string=> { 
  return ( 
    Math.random().toString(36).substring(2,15) + 
    Math.random().toString(36).substring(2,15)
  ); 
}

export const duplicateArray = <T>(array: T[]): T[] => { 
  return [...array, ...array]; 
}

export const sortArray  = <T>(array: T[]): T[] => { 
  return array.sort(()=> Math.random() - 0.5); 
}
export const regenerateCard = (cards: CardProps[]): CardProps[] => { 
  return cards.map(card => ({...card, id:keyGenerator()})); 
}

export const duplicateRegenerateSortArray = (cards:CardProps[]):CardProps[] => { 
  return sortArray(regenerateCard(duplicateArray(cards))); 
}