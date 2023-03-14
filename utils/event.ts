import {EventEmitter} from 'events';


export const Event = new EventEmitter();

export enum EventTypes {
  search = 'event.search',
  TIP = 'event.tip',
  Message = 'event.message',
  DropDown = 'event.dropDown',
  ModalPopUp = 'event.modalpopup',
}

export enum IMessageType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  WARN = 'WARN',
}