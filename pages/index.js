import MeetupList from '../components/meetups/MeetupList';
import {MongoClient} from 'mongodb';

const DUMMY_MEETUPS = [
  {
    id: '1',
    title: 'Tech Meetup',
    image: `https://picsum.photos/seed/${Math.random()}/200/300`,
    address: '123 Main Street, Cityville',
    description: 'Join us for a meetup about the latest in technology.',
  },
  {
    id: '2',
    title: 'Fitness Session',
    image: `https://picsum.photos/seed/${Math.random()}/200/300`,
    address: '456 Fitness Avenue, Health City',
    description: 'Get fit and healthy at our fitness meetup.',
  },
  {
    id: '3',
    title: 'Art Workshop',
    image: `https://picsum.photos/seed/${Math.random()}/200/300`,
    address: '789 Art Street, Creativity Town',
    description: 'Explore your artistic side at our art workshop.',
  },
  {
    id: '4',
    title: 'Book Club',
    image: `https://picsum.photos/seed/${Math.random()}/100/200`,
    address: '101 Library Lane, Bookland',
    description: 'Join fellow book lovers in our monthly book club meetup.',
  },
  {
    id: '5',
    title: 'Food Tasting',
    image: `https://picsum.photos/seed/${Math.random()}/200/300`,
    address: '555 Taste Street, Foodie City',
    description: 'Experience a culinary journey at our food tasting meetup.',
  },
  {
    id: '6',
    title: 'Music Jam',
    image: `https://picsum.photos/seed/${Math.random()}/200/300`,
    address: '888 Melody Lane, Music Town',
    description: 'Bring your instruments and jam with fellow music enthusiasts.',
  },
];

function HomePage(props){
    return (
    
    <MeetupList meetups={props.meetups} />

    )
}

export async function getStaticProps() {
 try {
    const password = encodeURIComponent("#Maddy@123");
    const connectionString = `mongodb+srv://hasan:${password}@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority`;

    // Initialize MongoDB client
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db();
    const meetupsCollection = db.collection('livemeetup');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
      props: {
        meetups: meetups.map(meetup => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
 } catch (error) {
    console.error('MongoDB Connection Error:', error);
    return {
      props: {
        meetups: [], // Return an empty array or handle the error accordingly
      },
      revalidate: 1,
    };
 }
}

export default HomePage;





  
