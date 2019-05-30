import Orders from '../../models/orders';

const orders = new Orders();

class OrderController{
    static purchaseOrder(req, res){
        const{
            body:{
                car_id,
                status,
                price,
                price_offered
            }
        } = req;
        const data = orders.purchaseOrder(car_id, status, price, price_offered);

        return res.status(200).json({
            status: 200,
            data
        })
    }
}

export default OrderController;