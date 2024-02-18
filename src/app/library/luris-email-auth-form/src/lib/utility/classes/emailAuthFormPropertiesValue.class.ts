import {EmailAuthPropertiesValueModel} from "../models/emailAuthPropertiesValue.model";

export class EmailAuthFormPropertiesValueClass implements EmailAuthPropertiesValueModel {
  constructor(public title: string,
              public inputs:
                {
                  formControlName: string,
                  placeholder: string,
                  icon: string,
                  type: string,
                  errorText: string,
                  validator: any[]
                }[],
              public button: { submit: string, register: string, forgotPassword: string },
              public hasState: boolean) {
  }


}

