import { useState, useEffect } from "react";
import {
  AzureMediaPlayerAuto,
  AzureMediaPlayerManual,
} from "../components/AzureMediaPlayer";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState(DUMMY_DATA);

  useEffect(() => {
    // fetch(URL)
    // .then(response => {
    //   return response.json();
    // }).then(data => {
    setIsLoading(false);
    // setLoadedMeetups(DUMMY_DATA);
    // });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <div>
        <h2>Azure Media Player Auto</h2>
        <AzureMediaPlayerAuto />
        <h2>Azure Media Player Manual</h2>
        <AzureMediaPlayerManual />
      </div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsPage;
