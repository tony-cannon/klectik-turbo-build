import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export const ModalContext = createContext({
  openAuthBottomSheet: false,
  setOpenAuthBottomSheet: (() => {}) as Dispatch<SetStateAction<boolean>>,
  //   openPreferences: false,
  //   setOpenPreferences: () => {},
  //   openProfile: false,
  //   setOpenProfile: () => {},
  //   openSearch: false,
  //   setOpenSearch: () => {},
  //   openChannelDetails: false,
  //   setOpenChannelDetails: () => {},
  //   openDirectDetails: false,
  //   setOpenDirectDetails: () => {},
  //   openChannelBrowser: false,
  //   setOpenChannelBrowser: () => {},
  //   openMemberBrowser: false,
  //   setOpenMemberBrowser: () => {},
  //   openWorkspaceBrowser: false,
  //   setOpenWorkspaceBrowser: () => {},
  //   openStickers: false,
  //   setOpenStickers: () => {},
});

export function useModal() {
  return React.useContext(ModalContext);
}

interface ModalProviderProps {
  children?: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openAuthBottomSheet, setOpenAuthBottomSheet] = useState(false);
  //   const [openPreferences, setOpenPreferences] = useState(false);
  //   const [openProfile, setOpenProfile] = useState(false);
  //   const [openSearch, setOpenSearch] = useState(false);
  //   const [openChannelDetails, setOpenChannelDetails] = useState(false);
  //   const [openDirectDetails, setOpenDirectDetails] = useState(false);
  //   const [openChannelBrowser, setOpenChannelBrowser] = useState(false);
  //   const [openMemberBrowser, setOpenMemberBrowser] = useState(false);
  //   const [openWorkspaceBrowser, setOpenWorkspaceBrowser] = useState(false);
  //   const [openStickers, setOpenStickers] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openAuthBottomSheet,
        setOpenAuthBottomSheet,
        // openPreferences,
        // setOpenPreferences,
        // openProfile,
        // setOpenProfile,
        // openSearch,
        // setOpenSearch,
        // openChannelDetails,
        // setOpenChannelDetails,
        // openDirectDetails,
        // setOpenDirectDetails,
        // openChannelBrowser,
        // setOpenChannelBrowser,
        // openMemberBrowser,
        // setOpenMemberBrowser,
        // openWorkspaceBrowser,
        // setOpenWorkspaceBrowser,
        // openStickers,
        // setOpenStickers,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
