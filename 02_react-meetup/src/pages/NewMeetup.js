import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    // store data
    // fetch(URL, {
    // method: 'POST',
    // body: JSON.stringify(meetupData)
    // headers: {
    // 'Content-Type': 'application/json'
    // }
    // });
    console.warn(`No database connected`);
    console.table(meetupData);

    //
    history.replace("/");
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
