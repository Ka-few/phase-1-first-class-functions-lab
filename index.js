const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const firsttwo = drivers.slice(0,2)
    return firsttwo

}

const returnLastTwoDrivers = function () {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    const lasttwo = drivers.slice(-2)
    return lasttwo

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (multiplier){
    return function(fareMultiplier){
        fareMultiplier = 5
        return multiplier*fareMultiplier
    }
    
}
createFareMultiplier(5)

const fareDoubler = function(fares){
    return fares*2
}
const fareTripler = function(fares){
    return fares*3
}



function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}
// Code your solution in this file!
