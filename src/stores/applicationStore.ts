import { action, observable } from "mobx";

export interface IApplicationStore {
  isNavbarOpen: boolean;
}

export class ApplicationStore implements IApplicationStore {

  @observable public isNavbarOpen = false;

  @action public setIsNavbarOpen = (value: boolean): void => {
    this.isNavbarOpen = value;
  };
}