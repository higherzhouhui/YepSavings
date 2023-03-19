import { IMessageProps } from '@/components/message';
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

// 传入提示状态与内容参数即可
export const showTip = (option: IMessageProps) => {
  Event.emit(EventTypes.Message, option);
};