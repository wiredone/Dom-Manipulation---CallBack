window.onload = function(){
  main();
}

var main = function(){
  // console.log("Inside Main");
//   var element = document.getElementById('quote-of-the-day');
//   console.log(element);
//   var button = document.getElementsByTagName('button')
//   console.log(button);
//   var qotd = document.querySelector('#quote-of-the-day');
// console.log(qotd);
// // qotd.style.visibility = 'hidden';
// qotd.style.display = 'none';
//
// var buttons = document.getElementsByTagName('button');
// console.log(buttons[0]);

var quotes = document.getElementsByClassName('quote');
console.log(quotes[quotes.length-1].children[0].innerText);
console.log(quotes[quotes.length-1]);
console.log(quotes);

// quotes.hidden = true;

var articles = document.getElementsByTagName('article');

for (var i = 0; i < articles.length; i++) {
  articles[i].style.backgroundColor = 'wheat'
}

createQuote();

}

function createQuote(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = "Open the pod bay doors Hal";

  var cite = document.createElement('cite');
  cite.innerText = "Dave";

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');

  quotes.appendChild(quoteArticle);

}
