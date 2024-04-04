
import dbConnect from "./db/dbConnect.mjs";
import orderModel from "./db/models/order.model.mjs";
import productModel from "./db/models/product.model.mjs";
import questionModel from "./db/models/question.model.mjs";
import reviewModel from "./db/models/review.model.mjs";
import subscriberModel from "./db/models/subscriber.model.mjs";
import userModel from "./db/models/user.model.mjs";

/*

    USERS

*/
export const getUsers = async () => {
    
    console.log('getUsers')

    try {

        await dbConnect();
        return await userModel.find({});

    } catch (error) {

        console.log(error)

    }


};

export const getUserByEmail = async (email) => {
    
    console.log('getUserByEmail')

    try {

        await dbConnect();
        let result = await userModel.find({'email': email});
        return result[0];

    } catch (error) {

        console.log(error)

    }

};

export const getUserById = async (id) => {
    
    console.log('getUserById')

    try {

        await dbConnect();
        let result = await userModel.find({'_id': id});
        return result[0];

    } catch (error) {

        console.log(error)

    }

};

/*

    SUBSCRIBERS

*/

export const getSubscribers = async () => {
    
    console.log('getSubscribers')

    try {

        await dbConnect();
        return await subscriberModel.find({});

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberByEmail = async (email) => {
    
    console.log('getSubscriberByEmail')

    try {

        await dbConnect();
        let result = await subscriberModel.find({'email': email});

        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberById = async (id) => {
    
    console.log('getSubscriberById')

    try {

        await dbConnect();
        let result = await subscriberModel.find({'_id': id});
        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const postSubscriber = async (subscriber) => {
    
    console.log('postSubscriber')

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.create(subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const deleteSubscriber = async (id) => {
    
    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndDelete({_id: id}).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const putSubscriber = async (subscriber) => {
    
    console.log('putSubscriber', subscriber);

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndUpdate({_id: subscriber.id}, subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

/* 


    GET REVIEWS


*/

export const getReviews = async () => {
    
    console.log('getReviews service')

    try {

        await dbConnect();
        let result = await reviewModel.find({});

        return result

    } catch (error) {

        console.log(error)

    }

};

/* 


    GET PRODUCTS


*/

export const getProducts = async () => {
    
    try {

        await dbConnect();
        let result = await productModel.find({});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const getSlowProducts = async () => {
    
    try {
    
        return new Promise(async (resolve, reject) => {

            await dbConnect();
            let result = await productModel.find({});

            return setTimeout(() => {
                resolve(result)
        
            }, 3000);
        
    
        });
     

    } catch (error) {

        console.log(error)

    }

};

export const getProductsByRange = async (range) => {
    
    try {

        await dbConnect();

        range = range.split(',');


        let result = await productModel.find({ '_id': { $in: range } });

        return result

    } catch (error) {

        console.log(error)

    }

};

/* 

    ORDERS

*/

export const getOrders = async () => {
    
    try {

        await dbConnect();
        let result = await orderModel.find({});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const getOrderById = async (id) => {
    
    try {

        await dbConnect();
        let result = await orderModel.find({_id: id});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const getOrderByEmail = async (email) => {
    
    try {

        await dbConnect();
        let result = await orderModel.find({email: email});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const postOrder = async (order) => {
    
    try {

        await dbConnect();

        let result = {};
        result = await orderModel.create(order);

        return result;
     

    } catch (error) {

        console.log(error)

    }

};


export const deleteOrderById = async (id) => {
    
    console.log('deleteOrderById')

    try {

        await dbConnect();

        let result = {};
        result = await orderModel.findByIdAndDelete({_id: id});

        return result;
     

    } catch (error) {

        console.log(error)

    }

};

/* 


    GET REVIEWS


*/

export const getQuestions = async () => {
    
    console.log('getQuestions service')

    try {

        await dbConnect();
        let result = await questionModel.find({});

        return result

    } catch (error) {

        console.log(error)

    }

};