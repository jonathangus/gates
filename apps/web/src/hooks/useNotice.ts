import { useNotifications } from 'reapop';

const useNotice = () => {
  const { notify } = useNotifications();

  return notify;
};

export default useNotice;
