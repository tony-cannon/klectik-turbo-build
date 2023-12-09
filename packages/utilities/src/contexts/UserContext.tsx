import { useAuth } from './AuthContext';

import { useQuery, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';

export const UserContext = React.createContext({
  user: null,
  userdata: null,
});

interface UserProviderProps {
  children?: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { user: authUser } = useAuth();

  // const { data } = useQuery(queries.GET_USER, {
  //   variables: { objectId: authUser?.uid },
  //   skip: !authUser?.uid,
  // });
  // const { data: dataPush } = useSubscription(subscriptions.USER, {
  //   variables: { objectId: authUser?.uid },
  //   skip: !authUser?.uid,
  // });

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (data) {
  //     setUser(data.getUser);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (dataPush) {
  //     setUser(dataPush.onUpdateUser);
  //   }
  // }, [dataPush]);

  return (
    <UserContext.Provider value={{ user: authUser, userdata: user }}>
      {children}
    </UserContext.Provider>
  );
};
