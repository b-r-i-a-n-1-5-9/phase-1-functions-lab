// Code your solution in this file!
function distanceFromHqInBlocks(value){
    let distanceFromHq = 42;
    let solution= Math.abs(value-distanceFromHq);
    return solution;
}
distanceFromHqInBlocks(43)

console.log (distanceFromHqInBlocks(43))
// distanceFromHqInFeet()
function  distanceFromHqInFeet(A){
    
    let B=42;
    let solution2= Math.abs((A-B)*264);
    return solution2;
    
}
distanceFromHqInFeet()

// distanceTravelledInFeet()
 function  distanceTravelledInFeet(start,destination){
 let solution3=Math.abs((destination-start)*264)
    return solution3}
 distanceTravelledInFeet()
 //calculatesFarePrice
 
 function calculatesFarePrice(start,destination){
 let feetDistance= distanceTravelledInFeet(start,destination)
 if (feetDistance <=400){
    return 0; 
 }
 else if (feetDistance>400 && feetDistance<=2000){
    let nonFreeDistance= feetDistance-400
    return 0.02*  nonFreeDistance
 }
 else if (feetDistance>2000 && feetDistance<=2500){
    
    return 25
 }
 else {
    return `cannot travel that far`
 }
}
calculatesFarePrice()
