console.log(window.innerWidth);//breedte
console.log(window.innerHeight);//hoogte
let imageNames =
["Landen_Albania.jpg",
"Landen_Andorra.jpg",
"Landen_Armenia.jpg",
"Landen_Austria.jpg",
"Landen_Azerbaijan.jpg",
"Landen_Belarus.jpg",
"Landen_Belgium.jpg",
"Landen_Bosnia_&_Herzagovina.jpg",
"Landen_Bulgaris.jpg",
"Landen_Croatia.jpg",
"Landen_Cyprus.jpg",
"Landen_Czech_Republic.jpg",
"Landen_Denmark.jpg",
"Landen_Estonia.jpg",
"Landen_Faroe_Islands.jpg",
"Landen_Finland.jpg",
"Landen_France.jpg",
"Landen_Georgia.jpg",
"Landen_Germany.jpg",
"Landen_Gibraltar.jpg",
"Landen_Great_Britain.jpg",
"Landen_Greece.jpg",
"Landen_Hungary.jpg",
"Landen_Iceland.jpg",
"Landen_Ireland.jpg",
"Landen_Italy.jpg",
"Landen_Kosovo.jpg",
"Landen_Latvia.jpg",
"Landen_Lichtenstein.jpg",
"Landen_Lithuania.jpg",
"Landen_Luxembourg.jpg",
"Landen_Macedonia.jpg",
"Landen_Malta.jpg",
"Landen_Moldova.jpg",
"Landen_Monaco.jpg",
"Landen_Montenegro.jpg",
"Landen_Netherlands.jpg",
"Landen_Norway.jpg",
"Landen_Poland.jpg",
"Landen_Portugal.jpg",
"Landen_Romania.jpg",
"Landen_Russia.jpg",
"Landen_Serbia.jpg",
"Landen_Slovakia.jpg",
"Landen_San_Marino.jpg",
"Landen_Spain.jpg",
"Landen_Sweden.jpg",
"Landen_Switzerland.jpg",
"Landen_Turkey.jpg",
"Landen_Ukraine.jpg"];
let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display');

//by starten script een random image grote weergave
selectImage(Math.floor(Math.random()*imageNames.length));

for(let i = 0; i < imageNames.length; i++){
  let tumb = new Image();
  //images worden uit de map small gehaald
  tumb.src = "images/small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumbs.addEventListener("click",function(e){
    selectImage(e.target.id);
  });
}

function selectImage(id){
  //image wordt uit de map big gehaald
  id = Number(id);
  if(id == 50)
  {
    id = 0;
  }

if(id == -1)
  {
    id = 49;
  }
  number = id;
  display.src = "images/big/" + imageNames[id];
  console.log(id);
}

function right(){
  selectImage(number + 1);
}

function left(){
  selectImage(number - 1);
}

function down(){
  if(number == 45){
    selectImage(0);
  }
  else if(number == 46){
    selectImage(1);
  }
  else if(number == 47){
    selectImage(2);
  }
  else if(number == 48){
    selectImage(3);
  }
  else if(number == 49){
    selectImage(4);
  }
  else
  selectImage(number + 5);
}

function up(){
  if(number == 0){
    selectImage(45);
  }
  else if(number == 1){
    selectImage(46);
  }
  else if(number == 2){
    selectImage(47);
  }
  else if(number == 3){
    selectImage(48);
  }
  else if(number == 4){
    selectImage(49);
  }
  else
  selectImage(number - 5);
}
