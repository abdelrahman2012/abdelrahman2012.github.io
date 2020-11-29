score = 0
level = 1
document.getElementById("S").innerHTML = 'Score : '+score;
function P() {
  console.clear();
  score = score + 1
  document.getElementById("S").innerHTML = 'Score : ' + score;
  document.getElementById("W").innerHTML = 'Nog 50 te gaan';
  console.log('Score : ' + score);
  console.log('Level : '+ level);


  if(score > 50){
    document.getElementById("W").innerHTML = 'Nog 100 te gaan';
  }
  if(score > 100){
    document.getElementById("W").innerHTML = 'Nog 150 te gaan';
  }
  if(score > 150){
    document.getElementById("W").innerHTML = 'Nog 250 te gaan';
  }
  if(score > 250){
    document.getElementById("W").innerHTML = 'Nog 500 te gaan';
  }
  if(score > 500){
    document.getElementById("W").innerHTML = 'Nog 100 te gaan';
  }
  if(score == 1000){
    alert('Je hebt de HEELE spel af!');
    level = level + 1000000000
  }
  
}