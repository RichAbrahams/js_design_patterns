import buildVehicle from './vehicle_factory';
function init(){

const honda = buildVehicle('car',{model: 'honda', speed: 150, color: 'red'});

const raleigh = buildVehicle('bike',{model: 'supa', wheels: 3, color: 'blue'});

console.log(honda);
console.log(raleigh);

}

init();
