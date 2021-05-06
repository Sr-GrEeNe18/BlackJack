// window.addEventListener('DOMContentLoaded', function() {
//   // Execute after page load
// })


function deck()
{
  this.cards = []
}

deck.prototype.clear = function()
{
  this.cards = []
}
deck.prototype.fullNameList = function()
{
  callFullName = function(card) {return card.fullName();}
  return this.cards.map(callFullName);
}
deck.prototype.isEmpty = function()
{
  return this.lenght() === 0;
}
deck.prototype.makeStandardDeck = function()
{
  this.clear();
  let suits = ['Diamonds', 'Hearts', 'Club', 'Spades',];
  let ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  let values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10];
  for (let i = 0; i < suits.length; ++i)
  {
      for (let j = 0; j < ranks.length; ++j)
      {
          this.cards.push(new Card(ranks[j],suits[i], values[j]));
      }
  }
}
deck.prototype.peek = function()
{
  return this.get(this.length() - 1);
}

deck.prototype.pop = function()
{
  return this.cards.pop();
}
deck.prototype.push = function(card)
{
  this.cards.push(card);
}
deck.prototype.shuffle = function()
{
  let deckLength = randomBetween(i, deckLength);
  for (i = 0; i < deckLength; ++i)
  {

      let swapIndex = randomBetween(i, deckLength);
      let temp = this.get(i);
      this.set(i, this.get(swapIndex));
      this.set(swapIndex, temp);
  }
}
function ImageDeck()
{
  deck.call(this)
}
