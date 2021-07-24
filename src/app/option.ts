export interface Option {
  // Please use the OptionKey enum to handle key assignments.
  id: number;
  key: string;
  value: string;
  title: string;
  type: OptionType;
  description: string;
}

export enum OptionKey {
  COMMISSION_STATUS = 'COMMISSION_STATUS',
  COMMISSION_DISABLED_MESSAGE = 'COMMISSION_DISABLED_MESSAGE',
}

export enum OptionType {
  none = -1,
  toggle,
  text ,
  textarea,

}
