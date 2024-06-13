import {AlertDataType} from '../Alert';

export type AlertDataHookReturnType = {
  alertData: AlertDataType;
  onSetAlertData: (value: AlertDataType) => void;
};
