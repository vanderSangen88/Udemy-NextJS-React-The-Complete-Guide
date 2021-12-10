import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {
    // send HTTP-request
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
