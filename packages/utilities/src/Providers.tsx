import { ReduxProvider } from '@utilities/contexts/ReduxContext';
import { AuthProvider } from '@utilities/contexts/AuthContext';
import { UserProvider } from '@utilities/contexts/UserContext';
import { TamaguiProvider } from '@utilities/contexts/TamaguiContext';
import { ModalProvider } from '@utilities/contexts/ModalContext';

import { combineProviders } from '@utilities/functions/combineProviders';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) =>
  combineProviders(
    [ReduxProvider, AuthProvider, UserProvider, TamaguiProvider, ModalProvider],
    children
  );
