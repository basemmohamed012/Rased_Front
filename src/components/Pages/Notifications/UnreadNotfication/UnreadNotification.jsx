import NotificationItem from '../NotificationItem/NotificationItem.jsx';

export default function UnreadNotifications({ notifications }) {
  const unreadNotes = notifications.filter(note => !note.isRead);

  return (
    <div className="space-y-4">
      {unreadNotes.map((note) => (
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
