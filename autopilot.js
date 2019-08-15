

function getNewCar() {
    let newCar = {
        city: 'Toronto',
        passengers: 0,
        gas: 100,
    }
    return newCar;
}

function addCar(cars, newCar) {
    cars.push(newCar);
    console.log(`Adding new car to fleet. Fleet size is now ${cars.length}`)
}

function pickUpPassenger(car) {
    car.passengers += 1
    car.gas -= 10
    return (`Picked up passenger. Car now has ${car.passengers} passengers.`)
}

function getDestination(car) {
    if (car.city === 'Toronto') {
        return 'Mississauga'
    }
    else if (car.city === 'Mississauga') {
        return 'London'
    }
    else if (car.city === 'London') {
        return 'Toronto'
    }
}

function fillUpGas(car) {
    oldGas = car.gas;
    car.gas = 100;
    return(`Filled up to ${getGasDisplay(car.gas)} on gas from ${getGasDisplay(oldGas)}.`)
}

function getGasDisplay(gasAmount) {
    return(`${gasAmount}%`)
}

function drive(car, cityDistance) {
    if (car.gas < cityDistance) {
        return(fillUpGas(car));
    }
    car.city = getDestination(car);
    car.gas -= cityDistance;
    return(`Drove to ${car.city}.  Remaining gas: ${car.gas}`);
}

function dropOffPassengers(car) {
    previousPassengers = car.passengers;
    car.passengers = 0;
    return(`Dropped off ${previousPassengers} passengers.`);
}

function act(car) {
    let distanceBetweenCities = 50;
    if (car.gas < 20) {
        return(fillUpGas(car));
    }
    else if (car.passengers < 3) {
        return pickUpPassenger(car);
    }
    else {
        if (car.gas < distanceBetweenCities)
        return fillUpGas(car);
        }
        let droveTo = drive(car, distanceBetweenCities);
        let passengerDropped = dropOffPassengers(car)
        return (`${droveTo} ${passengerDropped}`)
}


function commandFleet(cars) {
    let i = 1
    cars.forEach(car => {
        let action = act(car);
        console.log(`Car ${i}: ${action}`);
        i++;
    });
}

function addOneCarPerDay(cars, numDays) {
    for (day = 0; day < numDays; day++){
        let newCar = getNewCar();
        addCar(cars, newCar);
        console.log('------')
        commandFleet(cars)
    }
}

const cars = [];
addOneCarPerDay(cars, 10)