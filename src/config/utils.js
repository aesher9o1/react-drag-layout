import firebase from './firebase'



export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

export const getRandomKey = ()=>{
    return new Date().getTime() * Math.random()
}

export const setArrToFirebase = (arr)=>{
    const temp =[]
    for(var i = 0;i<=9;i++){
        if(arr[i].value){
            temp.push(arr[i].value)
        }
    }

  return firebase.database().ref('dummy').set(temp)
}

export const getArrFromFirebase=()=>{
    return firebase.database().ref('dummy').once('value')
}