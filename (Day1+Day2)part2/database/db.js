import mongoose from "mongoose";


export const Connection=async()=>{
    const URL='mongodb://Nanna9560:Ram95604@ac-imow1xa-shard-00-00.qrhkxqh.mongodb.net:27017,ac-imow1xa-shard-00-01.qrhkxqh.mongodb.net:27017,ac-imow1xa-shard-00-02.qrhkxqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-bjjh8k-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Database connected succesfully');
    }catch(error){
        console.log('Error while connecting to database',error.message);
    }
}

export default Connection;