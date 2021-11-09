import { ReactNode, useState, createContext, useContext } from "react";
import { SETTING_DATA } from "utils/settings-data";
import {
  ICheckBoxData,
  IWaitingTime,
  IPageWaiting,
  ITargetSite
} from "utils/types";
import { ISettings } from "utils/types";

interface Props {
  children: ReactNode;
  onExport: (settings: ISettings) => void;
  onStart: (settings: ISettings) => void;
  onStop: () => void;
}

interface SettingsContextProps {
  browsersList: ICheckBoxData[];
  deviceActions: ICheckBoxData[];
  generalActions: ICheckBoxData[];
  isIncognito: boolean;
  waitingTime: IWaitingTime;
  isVisitPages: boolean;
  pageWaiting: IPageWaiting;
  targetSite: ITargetSite;
  automaticReset: number;
  //
  onUpdateBrowsersList: (value: string) => void;
  onUpdateDeviceActions: (value: string) => void;
  onUpdateGeneralActions: (value: string) => void;
  onUpdateIncognito: () => void;
  onUpdateWaitingTime: (data: IWaitingTime) => void;
  onUpdateVisitedPage: () => void;
  onUpdatePageWaiting: (data: IPageWaiting) => void;
  onUpdateTargetSite: (data: ITargetSite) => void;
  onUpdateAutomaticReset: (data: number) => void;
  //
  onExportReport: () => void;
  onStop: () => void;
  onStartTriggered: () => void;
}

const SettingsContext = createContext<SettingsContextProps>({
  browsersList: SETTING_DATA.browsersList,
  deviceActions: SETTING_DATA.deviceSpecificActions,
  generalActions: SETTING_DATA.actions,
  isIncognito: SETTING_DATA.isIncognito,
  waitingTime: SETTING_DATA.waitingTime,
  isVisitPages: SETTING_DATA.isVisitPages,
  pageWaiting: SETTING_DATA.pageWaiting,
  targetSite: SETTING_DATA.targetSite,
  automaticReset: SETTING_DATA.automaticReset,
  //
  onUpdateBrowsersList: (value: string) => {},
  onUpdateDeviceActions: (value: string) => {},
  onUpdateGeneralActions: (value: string) => {},
  onUpdateIncognito: () => {},
  onUpdateWaitingTime: (data: IWaitingTime) => {},
  onUpdateVisitedPage: () => {},
  onUpdatePageWaiting: (data: IPageWaiting) => {},
  onUpdateTargetSite: (data: ITargetSite) => {},
  onUpdateAutomaticReset: (data: number) => {},
  onExportReport: () => {},
  onStop: () => {},
  onStartTriggered: () => {}
});

function SettingsProvider({ children, onExport, onStop, onStart }: Props) {
  const [browsersList, setBrowsersList] = useState<ICheckBoxData[]>(
    SETTING_DATA.browsersList
  );
  const [deviceActions, setDeviceActions] = useState<ICheckBoxData[]>(
    SETTING_DATA.deviceSpecificActions
  );
  const [generalActions, setGeneralActions] = useState<ICheckBoxData[]>(
    SETTING_DATA.actions
  );
  const [isIncognito, setIsIncognito] = useState<boolean>(
    SETTING_DATA.isIncognito
  );
  const [waitingTime, setWaitingTime] = useState<IWaitingTime>(
    SETTING_DATA.waitingTime
  );
  const [isVisitPages, setIsVisitPages] = useState<boolean>(
    SETTING_DATA.isVisitPages
  );
  const [pageWaiting, setPageWaiting] = useState<IPageWaiting>(
    SETTING_DATA.pageWaiting
  );
  const [targetSite, setTargetSite] = useState<ITargetSite>(
    SETTING_DATA.targetSite
  );
  const [automaticReset, setAutomaticReset] = useState<number>(
    SETTING_DATA.automaticReset
  );

  const onUpdateBrowsersList = (value: string) => {
    const updatedBrowsersList = browsersList.map((data: ICheckBoxData) => {
      if (data.value === value) {
        return {
          ...data,
          isActive: !data.isActive
        };
      }
      return data;
    });
    setBrowsersList(updatedBrowsersList);
  };

  const onUpdateDeviceActions = (value: string) => {
    const updatedDeviceActions = deviceActions.map((data: ICheckBoxData) => {
      if (data.value === value) {
        return {
          ...data,
          isActive: !data.isActive
        };
      }
      return data;
    });
    setDeviceActions(updatedDeviceActions);
  };

  const onUpdateGeneralActions = (value: string) => {
    const updatedActions = generalActions.map((data: ICheckBoxData) => {
      if (data.value === value) {
        return {
          ...data,
          isActive: !data.isActive
        };
      }
      return data;
    });
    setGeneralActions(updatedActions);
  };

  const getSettings = (): ISettings => ({
    browsersList,
    isIncognito,
    waitingTime,
    isVisitPages,
    pageWaiting,
    targetSite,
    automaticReset,
    deviceSpecificActions: deviceActions,
    actions: generalActions
  });

  const onExportReport = () => {
    const settings: ISettings = getSettings();
    onExport(settings);
  };
  const onStartTriggered = () => {
    const settings: ISettings = getSettings();
    onStart(settings);
  };

  return (
    <SettingsContext.Provider
      value={{
        browsersList,
        deviceActions,
        generalActions,
        isIncognito,
        waitingTime,
        isVisitPages,
        pageWaiting,
        targetSite,
        automaticReset,
        //
        onUpdateBrowsersList,
        onUpdateDeviceActions,
        onUpdateGeneralActions,
        onUpdateIncognito: () => setIsIncognito(!isIncognito),
        onUpdateWaitingTime: (data: IWaitingTime) => setWaitingTime(data),
        onUpdateVisitedPage: () => setIsVisitPages(!isVisitPages),
        onUpdatePageWaiting: (data: IPageWaiting) => setPageWaiting(data),
        onUpdateTargetSite: (data: ITargetSite) => setTargetSite(data),
        onUpdateAutomaticReset: (data: number) => setAutomaticReset(data),
        //
        onExportReport,
        onStop,
        onStartTriggered
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

const useSettings = () => useContext(SettingsContext);

export { SettingsProvider, useSettings };
