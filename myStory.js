class myStory{
   constructor(Subject,action,adjectives,objects,places){
      this.subject=subject;
      this.action=action;
      this.adjectives=adjective;
      this.objects=objects;
      this.places=places;
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


function firstBotton (firstArray){
 
   

   if(counter>=firstArray.length){
      counter =0;
   }
   let countFromArray=counter;

   document.querySelector('#Botton1').textContent = firstArray[countFromArray];
   counter ++;
}

Btn1.onclick = () => firstBotton(forBotton1);