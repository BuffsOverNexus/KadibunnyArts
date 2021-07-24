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
  COMMISSION_REQUIRE_ACCOUNT = "COMMISSION_REQUIRE_ACCOUNT",
  ACCOUNT_EDIT_EMAIL = "ACCOUNT_EDIT_EMAIL",
}

export enum OptionType {
  none = -1,
  toggle,
  text ,
  textarea,

}
