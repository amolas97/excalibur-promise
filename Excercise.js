//Consigna: Una operación de rotación a la izquierda en un array desplaza cada uno de los elementos 1 unidad a la
// izquierda. Tenga en cuenta que el elemento de índice más bajo se mueve al índice más alto en una rotación. Esto se
// llama matriz circular.
let rotations = parseInt(process.argv[2] || 2);
let arr = [1,3,2,5,6,3];
rotations = (rotations>arr.length) ? rotations%arr.length : rotations;
const rotateToLeft = () => arr.concat(arr.splice(0,rotations));
console.log(rotateToLeft());