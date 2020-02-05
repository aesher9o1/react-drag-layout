import firebase from './firebase'

const generateDummyData = () => {

}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getRandomKey = () => {
    return new Date().getTime() * Math.random()
}

export const setDatalistFromArray = () => {

}

export const setArrToFirebase = (arr) => {
    console.log(arr)
    return firebase.database().ref('dummy').set(arr)
}

export const getArrFromFirebase = () => {
    return new Promise(function (resolve, reject) {
        firebase.database().ref('dummy').once('value').then(snapshot => {
            if (snapshot.exists())
                resolve({
                    original: snapshot.val(),
                    html: generateSkillsHTMLFromArray(snapshot.val())
                })
            else
                resolve({
                    original: [],
                    html: generateSkillsHTMLFromArray([])
                })
        })
    })
}

export const generateSkillsHTMLFromArray = (arr) => {
    var tempList = []
    for (var i = 0; i <= 9; i++) {
        tempList.push({
            value: arr[i],
            type: (arr[i]) ? "active" : ((arr[i - 1]) ? "warn" : "disabled")
        })
    }
    return tempList
}

export const updateFirebase = (arr) => {
    arr = arr.filter(object => {
        return object.value != null ? object.value : false
    })

    // firebase.database().ref('dummy').set(arr)
}



export const swap = (input, x, y) => {
    var list = [...input]

    var b = list[y];
    list[y] = list[x];
    list[x] = b;

    return list
}