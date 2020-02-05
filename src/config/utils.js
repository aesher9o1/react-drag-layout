export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

export const getRandomKey = ()=>{
    return new Date().getTime() * Math.random()
}