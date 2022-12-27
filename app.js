import * as dotenv from 'dotenv';
dotenv.config();
import app from './server.js';
import ReviewsDAO from './dao/reviewsDAO.js';
import mongodb from 'mongodb';

const mongoClient = mongodb.MongoClient;
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.qogsmpu.mongodb.net/?retryWrites=true&w=majority`;
const port = 8000;

mongoClient.connect(uri, {
    maxPoolSize: 50,
    waitQueueTimeoutMS: 2500
}).catch(err => {
    console.error(err.stack);
    process.exit(1);
}).then(async (client) => {
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});