import { ISettings } from "utils/types";

export const SETTING_DATA: ISettings = {
  browsersList: [
    { title: "chrome", value: "chrome", isActive: false },
    { title: "firefox", value: "firefox", isActive: false },
    { title: "explorer", value: "explorer", isActive: true },
    { title: "safari", value: "safari", isActive: false },
    { title: "opera", value: "opera", isActive: false }
  ],
  deviceSpecificActions: [
    { title: "device reset", value: "device-reset", isActive: false },
    { title: "vinn reset", value: "vinn-reset", isActive: false },
    { title: "phone reset", value: "phone-reset", isActive: true },
    { title: "mobile data", value: "mobile-data", isActive: true },
    { title: "fly mode", value: "fly-mode", isActive: false }
  ],
  actions: [
    { title: "remove cookies", value: "remove-cookies", isActive: true },
    { title: "change resolution", value: "change-resolution", isActive: false },
    { title: "mouse tracks", value: "mouse-tracks", isActive: false },
    { title: "data saving mode", value: "data-saving-mode", isActive: true },
    { title: "random generate", value: "random-generate", isActive: false },
    {
      title: "Analytics protection",
      value: "analytics-protection",
      isActive: true
    },
    { title: "remove history", value: "remove-history", isActive: false }
  ],
  isIncognito: true,
  waitingTime: {
    from: 40,
    to: 55
  },
  isVisitPages: true,
  pageWaiting: {
    pageCount: 1,
    from: 30,
    to: 55
  },
  targetSite: {
    count: 10,
    waitingTime: 20
  },
  automaticReset: 1
};
