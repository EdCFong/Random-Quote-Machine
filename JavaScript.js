$(document).ready(function(){
  var the_quote = getQuote();
  $("#quote").text(the_quote.quote);
  $("#i_author").text(the_quote.author);
  $("#new-quote").click(function()
  {
    the_quote = getQuote();
    $("#quote").text(the_quote.quote);
    $("#i_author").text(the_quote.author);
    
  }
  );
  $("#tweet-quote").on("click",function()
  {
    window.open('https://twitter.com/intent/tweet?text=' + '"' + the_quote.quote + '" - ' + the_quote.author);
  }
  );
});

class Quote {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }
}
var Quotes = [];
Quotes.push(new Quote('Welcome to the real world. It sucks. You’re gonna love it!','Monica Geller'));
Quotes.push(new Quote('Don’t tell me what to do. I tell you what to do.','Monica Geller'));
Quotes.push(new Quote('I heard how dirty your apartment was and I couldn’t sleep.','Monica Geller'));
Quotes.push(new Quote('Rules are good! Rules help control the fun!','Monica Geller'));

Quotes.push(new Quote("It's a moo point. It's like a cow's opinion; it doesn't matter. It's moo.",'Joey Tribbiani'));
Quotes.push(new Quote("Why do you have to break up with her? Be a man. Just stop calling.",'Joey Tribbiani'));
Quotes.push(new Quote("It is a love based on giving and receiving as well as having and sharing. And the love that they give and have is shared and received. And through this having and giving and sharing and receiving, we too can share and love and have and receive.",'Joey Tribbiani'));
Quotes.push(new Quote("Joey doesn't share food!",'Joey Tribbiani'));
Quotes.push(new Quote("How you doing?",'Joey Tribbiani'));
Quotes.push(new Quote("Yeah that's right. I stepped up! She's my friend and she needed help. And if I have to I'd pee on any one of you.",'Joey Tribbiani'));

Quotes.push(new Quote("Oh, I’m sorry. Did my back hurt your knife?",'Rachel Green'));
Quotes.push(new Quote("Everyone I Know is either getting married or getting pregnant...",'Rachel Green'));
Quotes.push(new Quote("How long do cats live? Like assuming you don’t throw 'em under a bus or something?",'Rachel Green'));
Quotes.push(new Quote("What if I don't want to be a shoe? What if I want to be ... a purse? Or a hat?",'Rachel Green'));

Quotes.push(new Quote("You could not be any more wrong. You could try, but you would not be successful.",'Ross Geller'));
Quotes.push(new Quote("I grew up in a house with Monica, okay. If you didn’t eat fast, you didn’t eat.",'Ross Geller'));
Quotes.push(new Quote("You're over me? When were you under me?",'Ross Geller'));
Quotes.push(new Quote("If you're going to call me names, I would prefer Ross, the Divorce Force. It's just cooler.",'Ross Geller'));
Quotes.push(new Quote("We were on a break!",'Ross Geller'));
Quotes.push(new Quote("Unagi",'Ross Geller'));

Quotes.push(new Quote("But they don't know that we know they know we know!",'Phoebe Buffay'));
Quotes.push(new Quote("If you want to receive e-mails about my upcoming shows, then please give me money so I can buy a computer.",'Phoebe Buffay'));
Quotes.push(new Quote("This is brand-new information!",'Phoebe Buffay'));
Quotes.push(new Quote("I can hear the voices in my head again",'Phoebe Buffay'));

Quotes.push(new Quote("You're so far past the line, you can't even see the line. The line is a dot to you.",'Chandler Muriel Bing'));
Quotes.push(new Quote("I'm not so good with the advice... Can I interest you in a sarcastic comment?",'Chandler Muriel Bing'));
Quotes.push(new Quote("Until I was 25, I thought that the only response to ‘I love you’ was ‘Oh, crap!",'Chandler Muriel Bing'));
Quotes.push(new Quote("All right, look if you absolutely have to tell her the truth, at least wait until the timings right. And that's what deathbeds are for.",'Chandler Muriel Bing'));
Quotes.push(new Quote("Couldn't we just lose our virginities again? Because I think, actually, mine's growing back.",'Chandler Muriel Bing'));

function getQuote()
{
  var index = Math.floor(Math.random()*19);
  animateCSS('#text', 'bounceIn');
  animateCSS('#i_author', 'bounceIn');
  return Quotes[index];
}

//https://daneden.github.io/animate.css/
function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}


