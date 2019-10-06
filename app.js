// selecting html elements to be manipulated
var generateBtn = document.querySelector("#generate");
var results = document.querySelector("#results");
var qty = document.querySelector("#qty");
var type = document.querySelector("#type");

//get initial selected values in selection panel  
var quantity = qty.value;
var typeVal = type.value;


// Adding eventlistener to type
type.addEventListener('change', function (e) {
  typeVal = e.target.value
});

// Adding eventlistener to quantity
qty.addEventListener('change', function (e) {
  quantity = e.target.value
});

// The storage(data) of quotes in an object 
var myQuotes = {
  humans: {
    bQuotes: ['Don not cry because it is over', 'smile because it happened', 'Be yourself;'],
    iQuotes: ['So many books,', 'so little time.', 'once is enough.', 'life is a race'],
    mQuotes: ['A room without books ', ' is like a body without a soul.', 'You only live once', 'but if you do it right,'],
    pQuotes: ['No one can make you', ' feel inferior without your consent.', 'everyone else is already taken.'],
    eQuotes: ['In three words', ' I can sum up everything', 'I have learned about life', 'it goes on.'],
  },
  animals: {
    bQuotes: ['Happiness is a warm puppy.', 'All animals are equal', 'but some animals are more equal than others.', 'If you pick up a starving dog'],
    iQuotes: ['make him prosperous he will not bite you.', 'This is the principal difference between a dog and man.', 'Cats look down on us.'],
    mQuotes: ['The creatures outside looked from pig to man', 'from man to pig', 'from pig to man again;', ' but already it was impossible to say which was which.', 'Dogs look up to us', ],
    pQuotes: ['a part of one s soul remains unawakened.', 'Pigs treat us as equals.', 'Meow” means “woof” in cat.', 'I am fond of pigs.'],
    eQuotes: ['A dog is the only thing on earth ', ' loves you more than he loves himself.', 'a rat is running', 'Until one has loved an animal'],
  },

}

//function for generating quotes.
function generateQuotes(type) {
  var part1 = type.bQuotes[Math.floor(Math.random() * type.bQuotes.length)]
  var part2 = type.iQuotes[Math.floor(Math.random() * type.iQuotes.length)]
  var part3 = type.mQuotes[Math.floor(Math.random() * type.mQuotes.length)]
  var part4 = type.pQuotes[Math.floor(Math.random() * type.pQuotes.length)]
  var part5 = type.eQuotes[Math.floor(Math.random() * type.eQuotes.length)]

  return part1 + " " + part2 + " " + part3 + " " + part4 + " " + " " + part5
}

//when the generate quote btn gets clicked //(adding event listener to generate btn)
generateBtn.addEventListener('click', function () {
  console.log(quantity)

  var output = [];
  for (var i = 0; i < quantity; i++) {
    output.push(`<tr>
    <td>${generateQuotes(myQuotes[typeVal])}</td>
  </tr>`)
  }


  //printing generated Quotes into the html
  results.innerHTML = output.join('');
})