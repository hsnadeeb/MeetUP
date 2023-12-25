import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      const password = encodeURIComponent("#Maddy@123");

      // Construct the MongoDB connection string
      const connectionString = `mongodb+srv://hasan:${password}@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority`;

      const client = new MongoClient(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      // Access the database and collection
      const db = client.db();
      const meetupsCollection = db.collection('meetups');

      // Fetch meetups from the database
      const meetups = await meetupsCollection.find().toArray();

      // Close the MongoDB connection
      await client.close();

      // Send the meetups as a JSON response
      res.status(200).json({ meetups });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
