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

// var quotes = document.getElementsByClassName('quote');
// console.log(quotes[quotes.length-1].children[0].innerText);
// console.log(quotes[quotes.length-1]);
// console.log(quotes);
var button = document.getElementById('add-button');
console.log(button);
button.onclick = handleClick;

var qa = [];
// quotes.hidden = true;

var articles = document.getElementsByTagName('article');
  for (var i = 0; i < articles.length; i++) {
    articles[i].style.backgroundColor = 'wheat'
  }
  createQuotes(quotes);
}

var handleClick = function(){
  // console.log(handleClick);
  // console.log('Woah I was got clicked');
  input_text = document.getElementById( 'quote-text-input');
  input_cite = document.getElementById( 'author-text-input');
  var text = input_text.value;
  var author = input_cite.value;
  var quote = new Quote({text:text, author:author});
  // console.log (text); WHY?WHAT?
  createQuote(quote)
}

function createQuote(quote){
  // console.log(quote.type);
  // console.log(quote.type);
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  var blockQuote = document.createElement('blockquote');
  // formatte if no full stop, space, first letter
    blockQuote.innerText = quote.text + " ";
    var cite = document.createElement('cite');
    cite.innerText = quote.cite;
    // console.log(quote);

    blockQuote.appendChild(cite);
    // };
    quoteArticle.appendChild(blockQuote);
    var quotes = document.querySelector('#quotes');
    quotes.appendChild(quoteArticle);
    // console.log(quote);

}




// <article class="quote">
//   <blockquote>
//     .
//     <cite>
//     </cite>
//   </blockquote>
// </article>
// <article class="quote">
//   <blockquote>
//
//     <cite>
//       Rick
//     </cite>
//   </blockquote>
// </article>
// <article class="quote">
//   <blockquote>
//
//     <cite>
//
//     </cite>
//   </blockquote>
// </article>
// <article class="quote">
//   <blockquote>
//
//     <cite>
//
//     </cite>
//   </blockquote>
// </article>

quote1 = new Quote({text:"Visual Basic is the way forward, I don't know why we are doing JavaScript",author:"Jay Chetty"});
quote2 = new Quote({text:"I used the jQuery diet plugin and lost 10kg in a week.", author:"Keith"});
quote3 = new Quote({text:"Scaffolding is nothing but a fiery hell.", author:"Valerie"});
quote4 = new Quote({text:"The only CSS you need to know is background-color: tomato", author:"Rick"});
quote5 = new Quote({text:"Scaffolding is nothing but a fiery hell.", author:"Valerie"});

quotes = [quote1,quote2,quote3,quote4,quote5];

function createQuotes(quotes){
  // console.log(quotes);
  for (quote of quotes){
    createQuote(quote);
    // console.log(quote);
  };
}

function Quote(quoter){
  this.text = quoter.text;
  this.cite = quoter.author;
  // console.log(quoter.text);
}

Quote.prototype.text = function(){
    return this.text;
};
Quote.prototype.cite = function(){
    return this.cite;
};
