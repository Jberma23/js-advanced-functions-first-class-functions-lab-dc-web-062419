const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  let createFareMultiplier = function(num){
      return function(fare){
        return fare * num
      }
  }

  const fareDoubler = createFareMultiplier(2)

  const fareTripler = createFareMultiplier(3)

  const selectDifferentDrivers = function(drivers, func){
      return func(drivers)
  }