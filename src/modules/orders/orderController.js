import Orders from '../../models/orders';

const order = new Orders();

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
        const data = order.purchaseOrder(car_id, status, price, price_offered);

        return res.status(200).json({
            status: 200,
            data: data
        });
    }
    static updatePrice(req, res) {
        const { id } = req.params;             
        const data = order.orders.find(modifyP => modifyP.id == id && modifyP.status == 'Pending');        
        if (data) 
        {
          (data.old_price_offered = data.price_offered), (data.new_price_offered = req.body.new_price);
          return res.status(200).json({
            status: 200,
            data: 
            {
               id: data.id,
               car_id: data.car_id,
               status: data.status,
               old_price_offered: data.old_price_offered,
               new_price_offered: data.new_price_offered
            }
          });
        }
        else
        {
            return res.status(400).json({status: "Invalid order id"});
        } 
      }
}

export default OrderController;