import moment from 'moment';
class Cars{
    cars = [];

    postAD(email, manufacturer, model, price, state, status){
        const id = this.getNewId(this.cars);
        this.cars.push({
            Id: id,
            email,
            created_on: moment.now(),
            manufacturer,
            model,
            price,
            state,
            status
        });

        const newCarAd = this.cars[id - 1];
        return newCarAd; 


    }
    getNewId(array) {
        if (array.length > 0) {
            return array[array.length - 1].id + 1
        } else {
            return 1
        }
    }
}

export default Cars;