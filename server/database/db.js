import mongoose from "mongoose"

const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@blog-app-shard-00-00.kqraq.mongodb.net:27017,blog-app-shard-00-01.kqraq.mongodb.net:27017,blog-app-shard-00-02.kqraq.mongodb.net:27017/?ssl=true&replicaSet=atlas-mcljhg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;

    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database', error);
    }

}

export default Connection;