import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();


export async function Database() {
  try {

    const uri = process.env.MONGODB_URI;

    const Cluster = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await Cluster.connect();

    const database = Cluster.db('YoutubeDatabase');
    const LikedHistoryCollection = database.collection('LikedHistory');
    return {LikedHistoryCollection,Cluster}

  } catch (error) {
    console.error("Error connecting to the database:", error);
  }

  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await Cluster.close();
  // }
}
