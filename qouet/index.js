var quotes =[
            {quotes :"The best revenge is massive success.",author :"--Frank Sinatra"},
            {quotes :"You miss 100% of the shots you don't take.",author :"--Wayne Gretzy"},
            {quotes :"Do not take life too seriously. You will not get out alive.",author :"--Elbert Hubbard"},
            {quotes :"Resentment is like drinking poison and waiting for your enemies to die.",author :"--Nelson Mandela"},
            {quotes :"It's not what happens to you, but how you react to it that matters.",author :"--Epictetus"}

]

function getquot(){
    var newNumber = Math.floor(Math.random()*quotes.length)
    document.getElementById("quotes").innerHTML=quotes[newNumber].quotes;
    document.getElementById("author").innerHTML=quotes[newNumber].author
}