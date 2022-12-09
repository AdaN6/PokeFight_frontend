
import React from 'react';

const Play = (props) => {
    console.log(props.data[0]);
//Game Logic
let randomId = Math.floor(Math.random() * 300)
//console.log(randomId)
let pointsPlayer1 = randomId;
const pointsPlayer2 = 200 //we should pass the pokemon id
//console.log(pointsPlayer1)
//console.log(pointsPlayer2)


    function battle (pointsPlayer1, pointsPlayer2){
        if(pointsPlayer1 > pointsPlayer2){
            alert( "Player one win ")
        }else if(pointsPlayer1 < pointsPlayer2){
            alert("Player two win ")
        }else{
            alert ("It's tie")
        }
        }
        
       // battle(pointsPlayer1,pointsPlayer2)
        //console.log(battle)
        
    return (
        <div>
            <h4>start the fight</h4>
            <button onClick={()=>battle(pointsPlayer2)} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>Start</button>
        </div>
    );
}

export default Play;











