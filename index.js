
var rls=require("readline-sync")
var ch=require('chalk')
var score=0;var alpha=["a","b","c","d"];
console.log(ch.white.bold("Hello,Welcome to Quiz.Choose appropriate answer and try to pass each level.Good luck:)"))
console.log("\n")

var name=rls.question("What's your name:");
console.log("Good Luck!"+name)
console.log("\n")
var highscore=[
  {
    name:"ABC",
    score:"18"
  },
  {
    name:"XYZ",
    score:"16"
  }
]
first={
  question:"1.What is flutter?",
  answer:"b",
  options:['IDE','Framework','Library','Language']
}
second={
  question:"2.In which year flutter is launched?",
  answer:"c",
  options:['2014','2015','2017','2019']
}
third={
  question:"3.Which programming language flutter uses?",
  answer:"a",
  options:['Dart','Javascript','Ruby','Scala']
}
fourth={
  question:"4.By which Company flutter is made?",
  answer:"a",
  options:['Google','Microsoft','Facebook','Apple']
}
fifth={
  question:"5.Everything is what in flutter?",
  answer:"c",
  options:['Function','Object','Widget','Control-Structure']
}
sixth={
  question:"6.For which technology flutter is not used?",
  answer:"d",
  options:['Android','IOS','Web','Data Science']
}
seven={
  question:"7.Flutter engine is written in which language?",
  answer:'d',
  options:['c','java','python','c++']
}
eight={
  question:"8.Which is latest version of flutter?",
  answer:'b',
  options:['1.18','1.17','1.10','1.13']
}
nine={
  question:"9.Which widget is uses for make space between widgets?",
  answer:'d',
  options:['Padding()','SafeArea()','InkWell()','SizedBox()']
}
ten={
  question:"10.How many Properties InkWell widget has?",
  answer:'a',
  options:['29','34','20','25']
}
question(first)
question(second)
question(third)
question(fourth)
function question(obj)
{
    console.log(ch.black.bgYellow.inverse(obj.question));
    for(var i=0;i<obj.options.length;i++)
        console.log(ch.blue(alpha[i])+"."+obj.options[i]);     
    var ans=rls.question("Choose option:");
    if(ans==obj.answer)
    {
      console.log(ch.green.inverse("You are right!!"));
      score+=2;
    }
    else
      console.log(ch.red.bold("Oops!You are wrong!!"));
      console.log("Your score is:"+score);
      console.log("\n")
}
if(score>=6)
{
    console.log(ch.green.bold("Congrates!You reached to Level 2:)"))
    console.log("\n")
    question(fifth),
    question(sixth),
    question(seven)
}
if(score>=10)
{
    console.log(ch.green.bold("Congrates!You reached to Level 3:)"))
    console.log("\n")
    question(eight),
    question(nine),
    question(ten)
}
console.log(ch.magenta.bold("Thank you for playing!!"));
console.log(ch.magenta.bold('Your final score is:'+score))


console.log("High Scores:")
console.log("******************")
for(var i=0;i<highscore.length;i++)
{
  var current=highscore[i]
  if(score>current.score)
  {
    highscore.push({name:name,score:score})
  }
  console.log("Name:   "+current.name),
  console.log("Score:   "+current.score)
}
















