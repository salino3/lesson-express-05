import { MongoClient, Db } from 'mongodb';
import { connect } from 'mongoose';



export const connectToDBServer = async(connectionURI: string) => {
 await connect(connectionURI);
};




// export let db: Db;

// export const connectToDBServer = async (connectionURI: string) => {
//   const client = new MongoClient(connectionURI);
//   await client.connect();

//   db = client.db();
// };
