import {EmailAuthFormPropertiesValueClass} from "../classes/emailAuthFormPropertiesValue.class";
import {EmailAuthPropertiesValueModel} from "../models/emailAuthPropertiesValue.model";
import {Validators} from "@angular/forms";

export const forgotPasswordFormInputs = new EmailAuthFormPropertiesValueClass(
  '',
  [{
    formControlName: 'email',
    placeholder: 'email',
    icon: 'featherMail',
    type: 'text',
    errorText: 'Please fill valid email',
    validator: [Validators.email, Validators.required]
  }],
  {submit: '', register: '', forgotPassword: ''},
  true,
);

export const loginFormInputs = {
  ...forgotPasswordFormInputs,
  inputs: [
    ...forgotPasswordFormInputs.inputs,
    {
      formControlName: 'password',
      placeholder: 'password',
      icon: 'featherLock',
      type: 'text',
      errorText: 'Password enter at least 6 character',
      validator: [Validators.required, Validators.maxLength(6)],
     }
  ]
}

export const registerFormInput = loginFormInputs;

// export const forgotPasswordFormPropertiesValueFunction = (): EmailAuthPropertiesValueModel => forgotPasswordFormInputs
// export const loginFormPropertiesValueFunction = (): EmailAuthPropertiesValueModel => loginFormInputs
// export const registerFormPropertiesValueFunction = (): EmailAuthPropertiesValueModel => registerFormInput
