//Game Logic
let randomId = Math.floor(Math.random() * 300)
//console.log(randomId)
const pointsPlayer1 = randomId;
const pointsPlayer2 = 200 //we should pass the pokemon id
console.log(pointsPlayer1)
console.log(pointsPlayer2)



function battle (pointsPlayer1, pointsPlayer2){
if(pointsPlayer1 > pointsPlayer2){
    return "Player one win "
}else if(pointsPlayer1 < pointsPlayer2){
    return "Player two win "
}else{
    return "It's tie"
}
}

battle(pointsPlayer1,pointsPlayer2)
console.log(battle)









