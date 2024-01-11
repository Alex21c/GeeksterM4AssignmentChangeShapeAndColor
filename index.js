'use strict';
let shapes=['triangle', 'circle', 'square', 'star', 'diamond', 'pentagon'];
let shape = document.querySelector('#shape');
let circle = document.querySelector('#circle');

document.querySelector('#changeShape').addEventListener('click', function(){
  let idx= Math.floor(Math.random() * shapes.length);
  // making sure new generated classname is not same as current one, i.e. if current shape is circle, i want other shapes other than circle
  while(shape.className===shapes[idx]){
    idx= Math.floor(Math.random() * shapes.length);
  }

  shape.className=shapes[idx];
});

document.querySelector('#changeColor').addEventListener('click', function(){
  circle.style.backgroundColor= generateRandomColor();
  shape.style.backgroundColor= generateRandomColor();
});

function generateRandomColor(){
  let red = Math.floor(Math.random()*256); // 0 to 255
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  console.log(`rgb(${red}, ${green}, ${blue})`); 
  return `rgb(${red}, ${green}, ${blue})`;

}