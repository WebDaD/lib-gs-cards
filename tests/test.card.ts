/* global it, describe */
import {Card, Value, Suit} from '../src/card'
import { expect } from 'chai';
import 'mocha'
describe('UT01: Card', function () {
  describe('UT01-01: Constructor', function () {
    it('UT01-01-01: Throw Error on Missing Suit', function (done) {
      try {
        let myCard = new Card(Value.Ace, null)
        done(new Error('Here should be an Error'))
      } catch (error) {
        done()
      }
    })
    it('UT01-01-02: Throw Error on Missing Value', function (done) {
      try {
        let myCard = new Card(null, Suit.Clubs)
        done(new Error('Here should be an Error'))
      } catch (error) {
        done()
      }
    })
    it('UT01-01-03: Return Card on Good Values', function () {
      let myCard = new Card(Value.Ace, Suit.Spades)
      expect(myCard.suit).to.equal(Suit.Spades)
      expect(myCard.value).to.equal(Value.Ace)
    })
  })
  describe('UT01-02: valueOf', function () {
    it('UT01-02-01: Return the Correct Numbers', function() {
      expect(new Card(Value.Ace, Suit.Spades).valueOf()).to.equal(1)
      expect(new Card(Value.Two, Suit.Spades).valueOf()).to.equal(2)
      expect(new Card(Value.Three, Suit.Spades).valueOf()).to.equal(3)
      expect(new Card(Value.Four, Suit.Spades).valueOf()).to.equal(4)
      expect(new Card(Value.Five, Suit.Spades).valueOf()).to.equal(5)
      expect(new Card(Value.Six, Suit.Spades).valueOf()).to.equal(6)
      expect(new Card(Value.Seven, Suit.Spades).valueOf()).to.equal(7)
      expect(new Card(Value.Eight, Suit.Spades).valueOf()).to.equal(8)
      expect(new Card(Value.Nine, Suit.Spades).valueOf()).to.equal(9)
      expect(new Card(Value.Ten, Suit.Spades).valueOf()).to.equal(10)
      expect(new Card(Value.Jack, Suit.Spades).valueOf()).to.equal(10)
      expect(new Card(Value.Queen, Suit.Spades).valueOf()).to.equal(10)
      expect(new Card(Value.King, Suit.Spades).valueOf()).to.equal(10)
    })
  })
})
