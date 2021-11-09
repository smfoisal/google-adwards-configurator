export interface ICheckBoxData {
  title: string;
  value: string;
  isActive: boolean;
}

export interface IWaitingTime {
  from: number;
  to: number;
}

export interface IPageWaiting extends IWaitingTime {
  pageCount: number;
}

export interface ITargetSite {
  count: number;
  waitingTime: number;
}

export interface ISettings {
  browsersList: ICheckBoxData[];
  deviceSpecificActions: ICheckBoxData[];
  actions: ICheckBoxData[];
  isIncognito: boolean;
  waitingTime: IWaitingTime;
  isVisitPages: boolean;
  pageWaiting: IPageWaiting;
  targetSite: ITargetSite;
  automaticReset: number;
}
