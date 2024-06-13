import {AlertDataType} from '../Alert';

export type AlertContextType = {
  alert: (data: AlertDataType) => void;
};
