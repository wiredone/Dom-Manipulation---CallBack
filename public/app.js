window.onload = function(){
  main();
}

var main = function(){

var button = document.getElementById('add-button');
console.log(button);
button.onclick = validate;

var del = document.getElementById('delbutt');
console.log(del);
del.onclick = myDelete;

var articles = document.getElementsByTagName('article');
  for (var i = 0; i < articles.length; i++) {
    articles[i].style.backgroundColor = 'wheat'
  }
  createQuotes(quotes);
}

var handleClick = function(){
  input_text = document.getElementById( 'quote-text-input');
  input_cite = document.getElementById( 'author-text-input');
  var text = input_text.value;
  var author = input_cite.value;
  var quote = new Quote({text:text, author:author});
  // console.log (text); WHY?WHAT?
  quotes.push(quote)
  createQuote(quote)
}

var check = "Visual Basic is the way forward, I don't know why we are doing JavaScript";

function deleteAquote(text){
  deleted = document.getElementById(text);
  deleted.style.display = 'none';
}

function myDelete(){
  var el = document.getElementById('blockQuote');
  console.log(el);
   var tops = el.getElementsByTagName('input');
   for (var i=0, len=tops.length; i<len; i++) {
      if ( tops[i].type === 'checkbox' ) {
          tops[i].onclick = function() {
              console.log(tops);
          }
      }
  }
}
function createQuote(quote){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  quoteArticle.id=quote.text

var blockQuote = document.createElement('blockquote');
  // format if no full stop, space, first letter
    blockQuote.innerText = quote.text + " ";
    blockQuote.id='blockQuote'
    var cite = document.createElement('cite');
    cite.innerText = quote.cite;
    blockQuote.appendChild(cite);
    quoteArticle.appendChild(blockQuote);
    var deletebox = document.createElement('INPUT');
    deletebox.setAttribute("type", "checkbox");
    deletebox.id=quote.text
    deletebox.name='input';
    blockQuote.appendChild(deletebox);
    var quotes = document.querySelector('#quotes');
    quotes.appendChild(quoteArticle);
}

quote1 = new Quote({text:"Visual Basic is the way forward, I don't know why we are doing JavaScript",author:"Jay Chetty"});
quote2 = new Quote({text:"I used the jQuery diet plugin and lost 10kg in a week.", author:"Keith"});
quote3 = new Quote({text:"Scaffolding is nothing but a fiery hell.", author:"Valerie"});
quote4 = new Quote({text:"The only CSS you need to know is background-color: tomato", author:"Rick"});
quote5 = new Quote({text:"Scaffolding is nothing but a fiery hell.", author:"Valerie"});

quotes = [quote1,quote2,quote3,quote4,quote5];

function createQuotes(quotes){
  for (quote of quotes){
    createQuote(quote);
  };
}

function Quote(quoter){
  this.text = quoter.text;
  this.cite = quoter.author;
}

Quote.prototype.text = function(){
    return this.text;
};
Quote.prototype.cite = function(){
    return this.cite;
};

function validate(){
  if( document.quoteform.text.value == "" ){
   alert( "Please provide a quote!" );
   document.quoteform.text.focus() ;
   return false;
  }
  if( document.quoteform.author.value == "" ){
   alert( "Please provide an author!" );
   document.quoteform.author.focus() ;
   return false;
  }
  handleClick();
}
