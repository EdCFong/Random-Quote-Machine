$(document).ready(function ()
{
  getQuote();
  $("#new-quote").click(function ()
  {
    getQuote();
  }
  );
  $("#tweet-quote").on("click", function ()
  {
    window.open('https://twitter.com/intent/tweet?text=' + '"' + the_quote.quote + '" - ' + the_quote.author);
  }
  );
});

class Quote
{
  constructor(quote, author)
  {
    this.quote = quote;
    this.author = author;
  }
}

const getQuote = async () => 
{
  animateCSS('#text', 'bounceIn');
  animateCSS('#i_author', 'bounceIn');
  
  let quote = await callApi();
  $("#quote").text(quote.quote);
  $("#i_author").text(quote.author);

  return quote;
}

const callApi = async () => 
{
  var quote = new Quote();

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "text/plain",
  }
  let response = await fetch('https://localhost:44337/api/quote/getrandomquote', {
    method: "GET",
    headers: headersList
  })

  if (response.ok)
  {
    let json = await response.json();
    quote.author = json.Author;
    quote.quote = json.Text;
  }
  else
  {
    alert("HTTP-Error: " + response.status);
  }
  return quote;
}

//https://daneden.github.io/animate.css/
function animateCSS(element, animationName, callback)
{
  var node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd()
  {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}


