import firebase from './firebase'

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getRandomKey = () => {
    return new Date().getTime() * Math.random()
}

export const setDatalistFromArray = () => {

}

export const setArrToFirebase = (arr) => {
    const temp = []
    for (var i = 0; i <= 9; i++) {
        if (arr[i].value) {
            temp.push(arr[i].value)
        }
    }

    return firebase.database().ref('dummy').set(temp)
}

export const getArrFromFirebase = () => {
    return new Promise(function (resolve, reject) {
        firebase.database().ref('dummy').once('value').then(snapshot => {
            var tempList = []
            for (var i = 0; i <= 9; i++) {
                tempList.push({
                    value: snapshot.val()[i],
                    type: (snapshot.val()[i]) ? "active" : ((snapshot.val()[i - 1]) ? "warn" : "disabled")
                })
            }

            resolve(tempList)
        })
    })
}


export const swap = (input, x, y) => {
    var list = [...input]

    var b = list[y];
    list[y] = list[x];
    list[x] = b;

    return list
}