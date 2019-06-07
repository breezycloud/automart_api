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

        return res.status(200).json({ status: 200, data });
    }

    static updateCarPrice(req, res)
    {
        const { id } = req.params;
        const data = cars.cars.find(getCarId => getCarId.id == id);
        if(data)
        {
            (data.price = req.body.new_price);
            return res.status(200).json({ status: 200, data: data });            
        }
        else
        {
            return res.status(400).json({ status: 400, error: 'cannot find car'});
        }
    }

    static updateCarStatus(req, res)
    {
        const { id } = req.params;
        const data = cars.cars.find(findCar => findCar.id == id);
        if(data)
        {
            (data.status = req.body.new_status);
            return res.status(200).json({ status: 200, data: data});
        }
        else
        {
            return res.status(400).json({ status: 400, error: 'can find car id'});
        }
    }
    static viewSpecificCar(req, res)
    {
        const { id } = req.params;
        const data = cars.cars.find(viewCar => viewCar.id == id);        
        if(data)
        {            
            return res.status(200).json({ status: 200, data: data});
        }
        else
        {
            return res.status(400).json({ status: 400, error: 'can not find car with that id' });
        }
    }

    static viewUnsoldCars(req, res)
    {
        const { status } = req.params;
        const data = cars.cars.filter(viewCars => viewCars.status == status);
        if(data)
        {
            return res.status(200).json({ status: 200, data: data });            
        }
        else
        {
            return res.status(400).json({ status: 400, error: 'unable to fetch records' });
        }
    }

    static viewCarsMinMax(req, res)
    {
        const { status } = req.params;
        const { Min } = req.params;
        const { Max } = req.params;
        const data = cars.cars.filter(viewCars => viewCars.price <= Min && viewCars.price >= Max);
        if(data)
        {
            return res.status(200).json({ status: 200, data: data });            
        }
        else
        {
            return res.status(400).json({ status: 400, error: 'unable to fetch records' });
        }
    }

    static deleteCar(req,res)
    {
        const car = cars.deleteCar(req.params.id);        
        if(!car)        
        {                    
            return res.status(400).json({ status: 400, message: 'Invalid car id'});
        }
        else
        {
            return res.status(200).json({ status: 200, message: 'Car Ad successfully deleted'});
        }
    }

}

export default CarsController;
