import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPagr(){

    function addMeetupHandler(enteredMeetupData){
    
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetUpPagr;