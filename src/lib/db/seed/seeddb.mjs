import { exit } from 'process';
import dbConnect from '../dbConnect.mjs';
import { dbExists, seedDefaultProduct, seedDefaultReview, seedDefaultSubscriber, seedDefaultUser, seedDefaultOrder, seedDefaultQuestion } from './seedhelpers.mjs';
import bcrypt from 'bcryptjs';
import { reviews, products, subscribers, orders,questions } from './seedfile.mjs';

// Load Seedfile
// const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
// const galleries = loadJSON('./seedfile.json');


/* 

    SEED

*/

// Database Connection
await dbConnect();
let exists = await dbExists();

if(exists === undefined)
{
    console.log('----------------------')
    console.log('Opretter Database')

    const user = await seedDefaultUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })
    
    const subscriber = await seedDefaultSubscriber(subscribers[0]);

    for (let i = 0; i < reviews.length; i++) {
        const reviewsList = await seedDefaultReview(reviews[i]);
    }

    let productsList = [];

    for (let i = 0; i < products.length; i++) {
        productsList = await seedDefaultProduct(products[i]);
    }

    let order = orders(productsList._id)
    let newOrder = await seedDefaultOrder(order);

    for (let i = 0; i < questions.length; i++) {
        const questionList = await seedDefaultQuestion(questions[i]);
    }

    console.log('productsList order', order)
   

} else {



    console.log('----------------------')
    console.log('Database er allerede oprettet')
    console.log('Slet/drop databasen hvis du ønsker at køre seed scriptet igen.')
    console.log('----------------------')

}

exit();