import orderModel from '../models/order.model.mjs';
import productModel from '../models/product.model.mjs';
import qandaModel from '../models/question.model.mjs';
import reviewModel from '../models/review.model.mjs';
import subscriberModel from '../models/subscriber.model.mjs';
import userModel from '../models/user.model.mjs';


/*

    Simple user check to see if db has been created.

*/
export const dbExists = async () => {

    try {
        let users = await userModel.find({'name': 'admin'});
        return users[0]
    } catch (error) {
        throw(error)
    }

}

/*

    Create new User

*/
export const seedDefaultUser = async (user) => {

    try {
        let newUser = userModel.create(user);
        return newUser
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Subscriber

*/
export const seedDefaultSubscriber = async (subscriber) => {

    try {
        
        let newSubscriber = subscriberModel.create(subscriber);
        return newSubscriber
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Product

*/
export const seedDefaultProduct = async (product) => {

    try {
        
        let newSubscriber = productModel.create(product);
        return newSubscriber
    } catch (error) {
        throw(error)
    }

}

/*

    Create Reviews

*/
export const seedDefaultReview = async (review) => {
    console.log('seedDefaultReview')
    try {
     
        let newReview = await reviewModel.create(review);
        return newReview;

    } catch (error) {
        throw(error)
    }

}

/*

    Create new Order

*/
export const seedDefaultOrder = async (order) => {

    try {
        
        let newOrder = orderModel.create(order);
        return newOrder;
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Question

*/
export const seedDefaultQuestion = async (order) => {

    try {
        
        let newQuestion = qandaModel.create(order);
        return newQuestion;
    } catch (error) {
        throw(error)
    }

}