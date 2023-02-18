// console.log("it is external js file");
// console.log(document);


 //Fruiis header change innertext

 const fruitsHead = document.getElementById('FruitsHeader');
 fruitsHead.innerText = 'Fruits Header Are Change By javascript';
 fruitsHead.style.color = 'blue';

 //coloring strong text...
 const strong = document.getElementById('strongText');
 strong.style.color =  'red';


const licollecction = document.getElementsByTagName('li');
//    console.log(licollecction);
for(const text of licollecction){
 // console.log(text.innerText);
}

//using getElementByid

//changing Color Using id

const placeTitle= document.getElementById('placeTitle');
const colorIng= placeTitle.style.color = "red";

//getElementsByClass

const liList = document.getElementsByClassName('placeLi');
for(const Allli of liList){
 const ColorLi = Allli.style.color='white';
}

//coloring section using id

const  placeSEction = document.getElementById('place-section');
const colorfullSection = placeSEction.style.backgroundColor = 'gray';
placeSEction.style.padding= "30px 40px"


//find Element By querySelector


