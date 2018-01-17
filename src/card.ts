export class Card {
  public value: Value
  public suit: Suit

  constructor(value: Value, suit: Suit) {
    this.value = value
    this.suit = suit
  }

  public valueOf(): number {
    switch (this.value) {
      case Value.Ace: return 1
      case Value.Two: return 2
      case Value.Three: return 3
      case Value.Four: return 4
      case Value.Five: return 5
      case Value.Six:	return 6
      case Value.Seven:	return 7
      case Value.Eight:	return 8
      case Value.Nine: return 9
      case Value.Ten:
      case Value.Jack:
      case Value.Queen:     
      case Value.King: return 10   
      default: throw "Error: No Valid Card"
    }
  }
}

export default Card

export enum Suit {
  Hearts = 0,
  Diamonds = 1,
  Clubs = 2,
  Spades = 3,
}
export enum Value {
  Ace = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six =	6,
  Seven =	7,
  Eight =	8,
  Nine = 9,
  Ten =	10,
  Jack,
  Queen,
  King
}