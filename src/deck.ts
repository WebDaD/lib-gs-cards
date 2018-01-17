import {Card, Value, Suit} from './card'
export class Deck {
  public Cards: Card[]

  constructor() {
    // CREATE DECK
    this.newDeck()
  }
  public shuffle(): void {
    // remix this array
    for (let i = this.Cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.Cards[i], this.Cards[j]] = [this.Cards[j], this.Cards[i]];
    }
  }
  public cardsInDeck(): number {
    return this.Cards.length
  }
  public draw(): Card {
    return this.Cards.pop()
  }
  public add(card: Card): void {
    this.Cards.push(card)
  }
  public refill(): void {
    this.newDeck()
  }
  private newDeck(): void {
    for (let index = 0; index < 4; index++) {
      let suit: Suit = (<any>Suit)[index]
      for (let index2 = 0; index2 < 14; index2++) {
        let value: Value = (<any>Value)[index2]
        this.Cards.push(new Card(value, suit)) 
      } 
    }
  }
}