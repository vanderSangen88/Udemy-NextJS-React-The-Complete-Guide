import EventItem from "./event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          id={event.id}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
