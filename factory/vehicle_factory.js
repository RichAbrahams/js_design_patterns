import buildCar from './car.js';
import buildBike from './bike.js';

const media = {
    car: buildCar,
    bike: buildBike,
};

function buildVehicle(type, attributes) {
    return new media[type](attributes);
}

export default buildVehicle;
