import NotificationItem from "../NotificationItem/NotificationItem.jsx";

export default function MentionsNotifications({ notifications }) {
  const mentionsNotifications = notifications.filter(note => note.type === "mention");

  return (
    <div className="space-y-4">
      {mentionsNotifications.length > 0 ? (
        mentionsNotifications.map((note) => (
          <NotificationItem
            key={note.id}
            title={note.title}
            time={note.time}
            description={note.description}
            image={note.image}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">لا توجد إشعارات تم ذكرك فيها.</p>
      )}
    </div>
  );
}
