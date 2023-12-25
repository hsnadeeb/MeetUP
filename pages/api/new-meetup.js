import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const password = encodeURIComponent("#Maddy@123");

      // Construct the MongoDB connection string
      const connectionString = `mongodb+srv://hasan:${password}@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority`;

      // Initialize MongoDB client
      const client = new MongoClient(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        // Connect to MongoDB
        await client.connect();

        // Access the database and collection
        const db = client.db();
        const meetupsCollection = db.collection("livemeetup");

        // Insert data into the collection
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        // Send a successful response to the client
        res.status(201).json({ message: "Meetup inserted" });
      } finally {
        // Close the MongoDB connection
        await client.close();
      }
    } catch (error) {
      console.error("Error:", error);

      // Send an error response to the client with the detailed error message
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
}

export default handler;






// import { MongoClient } from "mongodb";
// async function handler(req, res){
//     if(req.method==='POST'){
//         const data = req.body;

//         MongoClient.connect('mongodb+srv://hasan:#Maddy@123@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority');
//         const db = client.db();
//         const meetupsCollection= db.collection('livemeetup');
//         const result = await meetupsCollection.insertOne(data);
//         console.log(result);
//         client.close();
//         res.status(201).json({message:"Meetup inserted"});
//     }
// }

// export default handler;