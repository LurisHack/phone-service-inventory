import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
 import {
  forgotPasswordFormInputs,
  loginFormInputs,
  registerFormInput
} from "./utility/functions/emailAuthFormPropertiesValue.function";
  import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {IonicModule} from "@ionic/angular";

  @Component({
  selector: 'luris-email-auth-form',
  templateUrl: './luris-email-auth-form.component.html',
  styleUrls: ['./luris-email-auth-form.component.scss'],
    imports: [
      NgIf,
      ReactiveFormsModule, IonicModule, NgStyle, NgForOf],
  standalone: true
})
export class LurisEmailAuthFormComponent  implements OnInit {

  @Input() additionalInput: any = {register: [], login: [], forgetPassword: []};
  @Input() alert: {hasState: boolean, backgroundColor: string, color: string, text: string} = {hasState: false, backgroundColor: '', color: '', text: ''};
  formProperties: any = loginFormInputs
  showForm = false;
  formGroup: FormGroup | any;
  state = 'Login';

  @Output() formOutput = new EventEmitter<{ email: string, password: string, state: string }>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stateChange('Login')
  }

  stateChange(state: string) {

    this.state = state;
    const innerFunction = () => {

      this.formGroup = this.formBuilder.group({})

      Promise.all(this.formProperties.inputs.map((formProperty: {
        formControlName: string,
        placeholder: string,
        icon: string,
        type: string,
        validator: any
      }) => {
        this.formGroup.addControl(formProperty.formControlName, new FormControl(null, formProperty.validator))
      })).then(form => {
        this.showForm = true
      })
    }

    switch (state) {

      case 'Login':
        this.formProperties = loginFormInputs
        innerFunction()
        break;

      case 'Register':
        if (this.additionalInput && this.additionalInput.register?.length) {
          this.formProperties = {
            ...registerFormInput,
            inputs: [...registerFormInput.inputs, ...this.additionalInput.register]
          }
        } else {
          this.formProperties = registerFormInput;
        }
        innerFunction()
        break;

      case 'Forgot Password':
        this.formProperties = forgotPasswordFormInputs
        innerFunction()
        break;

    }


  }

  submitForm() {
    this.formOutput.emit({...this.formGroup.value, state: this.state})
  }



}
