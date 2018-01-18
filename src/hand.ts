/**
 * @overview Hand Object containing an Array of Cards
 * @module hand
 * @author Dominik Sigmund
 * @version 1.0
 * @description Object Hand
 * @memberof lib-gs-cards
 */

import {Card, Value, Suit} from './card'
/** The Class Hand stands for a players Hand of Cards
 * @class Hand
 * */
export class Hand {
  /**
 * The Cards Array
 * @var {Card[]}
 */
  public Cards: Card[]
/** Creates a instance of class Hand
 * @throws {Error} Error
 * @returns {Hand} The Object
 * */
  constructor() {
    this.Cards = new Array<Card>()
  }
  /** Returns the NUmber of Cards in the Hand
   * @returns {number} The Number
 * */
  public cardsInHand(): number {
    return this.Cards.length
  }
/** Returns the Cards in the Hand
   * @returns {Card[]} The Card Array
 * */
public list(): Card[] {
  return this.Cards
}

  /** Plays a Card, removing it form the hand
   * @returns {Card} The Card
 * */
  public play(index: number): Card {
    let card = this.Cards[index]
    this.Cards.splice(index, 1);
    return card
  }
  /** Looks at a Card
   * @returns {Card} The Card
 * */
  public look(index): Card {
    return this.Cards[index]
  }
  /** Adds a Card to the Hand
 * @param {Card} card - A Card Object
 * */
  public add(card: Card): void {
    this.Cards.push(card)
  }
}