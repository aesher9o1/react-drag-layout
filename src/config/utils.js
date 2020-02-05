import firebase from './firebase'



export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

export const getRandomKey = ()=>{
    return new Date().getTime() * Math.random()
}

export const setArrToFirebase = (arr)=>{
   
}

export function getArrFromFirebase(){
    return firebase.database().ref('dummy').once('value')
}