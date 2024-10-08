class myStory{
   constructor(Subject,action,adjectives,objects,places){
      this.subject=subject;
      this.action=action;
      this.adjectives=adjective;
      this.objects=objects;
      this.places=places;
   }

   CompleteSentence() {
      return `${this.subject} ${this.action} ${this.adjectives} ${this.objects} ${this.places}`;
  }
}

//assigning our bottons
const Btn1 = document.querySelector('#Btn1');
const Btn2 = document.querySelector('#Btn2');
const Btn3 = document.querySelector('#Btn3');
const Btn4 = document.querySelector('#Btn4');
const Btn5 = document.querySelector('#Btn5');



//our arrays
let forBotton1 = ["The turkey", "Mom", "Dad", "The dog","My teacher","The elephant","The cat"];
let forBotton2 =["sat on","ate","dance with","saw","doesn't like", "kissed"];
let forBotton3 =["a funny", "a scary","a goofy","a slimy","a barking","a fat"];
let forBotton4 =["goat","fish","cow","frog","bug","worm"];
let forBotton5 =["on moon","on chair","in my spaghetti","in my soup","on the grass","in my shoes"];

//variables to keep that the function return.
let word1;
let word2;
let word3;
let word4;
let word5;

let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

//calling function with the bottons and assigning the return to a variable
Btn1.onclick = () => { word1 = firstBotton(forBotton1) };
Btn2.onclick = () => { word2 = secondBotton(forBotton2) };
Btn3.onclick = () => { word3 = thirdBotton(forBotton3) };
Btn4.onclick = () => { word4 = fourthBotton(forBotton4) };
Btn5.onclick = () => { word5 = fifthBotton(forBotton5)};


//function to display first array after first botton its press.
function firstBotton(arrayToCheck) {

   if (counter >= arrayToCheck.length) {
      counter = 0;
   }
   let countFromArray = counter;

   document.querySelector('#Botton1').textContent = arrayToCheck[countFromArray];
   counter++;
   return arrayToCheck[countFromArray];
}



//function to display second array after first botton its press.
function secondBotton(arrayToCheck) {

   if (counter2 >= arrayToCheck.length) {
      counter2 = 0;
   }
   let countFromArray = counter2;

   document.querySelector('#Botton2').textContent = arrayToCheck[countFromArray];
   counter2++;
   return arrayToCheck[countFromArray];
}



//function to display third array after first botton its press.
function thirdBotton(arrayToCheck) {
   if (counter3 >= arrayToCheck.length) {
      counter3 = 0;
   }
   let countFromArray = counter3;


   document.querySelector('#Botton3').textContent = arrayToCheck[countFromArray];
   counter3++;


   return arrayToCheck[countFromArray];
}

//function to display fourth array after first botton its press.
function fourthBotton(arrayToCheck) {
   if (counter4 >= arrayToCheck.length) {
       counter4 = 0; 
   }
   let countFromArray = counter4;

   
   document.querySelector('#Botton4').textContent = arrayToCheck[countFromArray];
   counter4++; 

   
   return arrayToCheck[countFromArray];
}

//function to display fifth array after first botton its press.
function fifthBotton(arrayToCheck) {
   if (counter5 >= arrayToCheck.length) {
       counter5 = 0; 
   }
   let countFromArray = counter5;

   
   document.querySelector('#Botton5').textContent = arrayToCheck[countFromArray];
   counter5++; 

   
   return arrayToCheck[countFromArray];
}