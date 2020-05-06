export default function (target, type) {
    if(typeof target !== type) throw new Error(`${target} is not a ${type}`) 
}