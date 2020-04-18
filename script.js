var doorImage1 = document.getElementById('door1')
var botDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
var beachDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
var spaceDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
doorImage1.onclick = () => {
  if (isClicked(doorImage1) == false){
    doorImage1.src= openDoor1
    playDoor(doorImage1)
    
  }
} 
var doorImage2 = document.getElementById('door2')
var doorImage3 = document.getElementById('door3')
doorImage2.onclick = () =>{
  if (isClicked(doorImage2) == false){
    doorImage2.src= openDoor2
    playDoor(doorImage2)  
  } 
}
var startbutton =document.getElementById("start")
doorImage3.onclick = () =>{
  if (isClicked(doorImage3) == false){
    doorImage3.src= openDoor3
    playDoor(doorImage3)  
  }
}
var numClosedDoors = 3;
var openDoor1, openDoor2, openDoor3;
var closedDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
const playDoor =(door) => {
  numClosedDoors--
  if (numClosedDoors == 0) gameOver('win')
  else if (isBot(door)) gameOver()
}
const isClicked =(door) => {
  if (door.src == closedDoorPath) return false
  else return true
}
const isBot = (door) =>{
    
  if (door.src == botDoorPath) return true 
  else return false 
}
const gameOver =(status) => {
  if (status == 'win') startbutton.innerHTML="You win! Play again?"
  else startbutton.innerHTML= "Game over! Play again?"
}
const randomChoreDoorGenerator= () => {
  let choreDoor  =Math.floor(Math.random()*numClosedDoors)
  if (choreDoor == 0) {
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
  }
  else if (choreDoor == 1){
    openDoor2 = botDoorPath
    openDoor1 = beachDoorPath
    openDoor3 = spaceDoorPath
  }  
  else {
    openDoor3 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor1 = spaceDoorPath
  }   
}
randomChoreDoorGenerator()