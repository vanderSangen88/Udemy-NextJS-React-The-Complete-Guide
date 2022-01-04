import Link from "next/link";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <time>{humanReadableDate}</time>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
