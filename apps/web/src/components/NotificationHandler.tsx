import React, { FC, useEffect, useState } from 'react';
import NotificationsSystem, {
  atalhoTheme,
  setUpNotifications,
  useNotifications,
} from 'reapop';

setUpNotifications({
  defaultProps: {
    position: 'top-right',
    dismissible: true,
    dismissAfter: 10000,
  },
});

const NotificationHandler: FC = () => {
  const { notifications, dismissNotification } = useNotifications();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => dismissNotification(id)}
      theme={atalhoTheme}
    />
  );
};

export default NotificationHandler;
