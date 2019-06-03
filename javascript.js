var quotes=[
'It does not matter how slowly you go as long as you do not stop.',
'The Way Get Started Is To Quit Talking And Begin Doing.-Walt Disney',
'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller',
'I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.-Og Mandino',
'Keep your face always toward the sunshine - and shadows will fall behind you. -Walt Whitman',
'No matter what people tell you, words and ideas can change the world. -Robin Williams',
'We know what we are, but know not what we may be. -William Shakespeare',
'Start by doing what\'s necessary then do what\'s possible and suddenly you are doing the impossible. -Francis of Assisi',
'No act of kindness, no matter how small, is ever wasted. -Aesop',
'Someone is sitting in the shade today because someone planted a tree a long time ago. -Warren Buffett'
]
function newQuote(){
var randomNumber=Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}





