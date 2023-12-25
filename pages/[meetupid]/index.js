import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails(props) {
  return (
  //  <MeetupDetail
  //    image='https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
  //    title='Meetup'
  //    address='Some Street'
  //    description= 'fjksdljgdf'
  //  />\
  <MeetupDetail {...props.meetupData}/>
  );
}

export async function getStaticPaths(){
  
  return {
    fallback:false,
    paths:[
      {
        params: {
          meetupid: '1',
        }
      },
      {
        params: {
          meetupid: '2',
        }
      },
      {
        params: {
          meetupid: '3',
        }
      }
    ]
  }
}
export async function getStaticProps(context){


  const meetupid = context.params.meetupid;
  console.log(meetupid);
  return{
    props:{
      meetupData:{
     image:'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
     id:meetupid,
     title:'Meetup',
     address:'Some Street',
     description: 'fjksdljgdf'
      }
    }
  }
}

export default MeetupDetails;
