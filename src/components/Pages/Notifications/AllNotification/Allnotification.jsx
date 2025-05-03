import NotificationItem from '../NotificationItem/NotificationItem.jsx';

export default function AllNotifications({ notifications }) {
  return (
    <div className="space-y-4">
      {notifications.map((note) => (
        <NotificationItem
          key={note.id}
          title={note.title}
          time={note.time}
          description={note.description}
          image={note.image}
        />
      ))}
    </div>
  );
}
