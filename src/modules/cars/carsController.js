import Cars from '../../models/cars';

const cars = new Cars();

class CarsController{

    static postCarAd(req, res) {
        const {
            body: {
                email,                
                manufacturer,
                model,
                price,
                state,
                status
            }            
        } = req;

        const data = cars.postAD(email, manufacturer, model, price, state, status);

        return res.status(200).json({
            status: 200,
            data
        });
    }
}

export default CarsController;
