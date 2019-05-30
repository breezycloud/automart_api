import moment from 'moment';

class Orders{
    orders = [];
    purchaseOrder(car_id, status, price, price_offered){
        const id = this.getNewId(this.orders);
        this.orders.push({
            id: id,
            car_id,
            created_on: moment.now(),
            status,
            price,
            price_offered
        });

        const newOrder = this.orders[id - 1];
        return newOrder;
    }
    getNewId(array){
        if(array.length > 0){
            return array[array.length - 1].id + 1
        }
        else{
            return 1
        }
    }
}

export default Orders;