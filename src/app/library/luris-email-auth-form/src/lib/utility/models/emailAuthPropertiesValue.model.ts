import {EmailAuthInputsModel} from "./emailAuthInputs.model";


export interface EmailAuthPropertiesValueModel {
  title: string,
  inputs: EmailAuthInputsModel[],
  button: { submit: string, register: string, forgotPassword: string },
  hasState: boolean,
 }
