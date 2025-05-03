import NotificationItem from "../NotificationItem/NotificationItem.jsx";

export default function SystemNotifications({ notifications }) {
  const systemNotifications = notifications.filter(note => note.type === "system");

  return (
    <div className="space-y-4">
      {systemNotifications.length > 0 ? (
        systemNotifications.map((note) => (
          <NotificationItem
            key={note.id}
            title={note.title}
            time={note.time}
            description={note.description}
            image={note.image}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">لا توجد إشعارات من النظام حالياً.</p>
      )}
    </div>
  );
}
