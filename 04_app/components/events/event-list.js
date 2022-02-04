import EventItem from "./event-item";
import styles from "./event-list.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
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
