import DATA from '../data/DATA'

export const pedirDatos = () => {   
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(DATA)
    }, 1000)
})
}