
# Email Auth Form

A brief description of what this project does and who it's for


## Installation

Install luris-email-auth-form with npm

```bash
  npm install luris-email-auth-form
```


## Email Auth Form


```http
  <luris-email-auth-form [alert]="alertText" [additionalInput]="additionalInput"  (formOutput)="formOutput($event)"></luris-email-auth-form>
  ```

| Directive | Interface     | Example                |
| :-------- | :------- | :------------------------- |
| `alert` | `{hasState: boolean, backgroundColor: string, color: string, name: string}` | `alertText = {hasState: false, backgroundColor: '#fffeee', color: '#123456', text: 'Hello world!'}` |
| `additionalInput`      | ` EmailAuthInputsModel: {formControlName: string, placeholder: string, icon: string, type: string, errorText: string, validator: any[]}; register?: EmailAuthInputsModel[], login?: EmailAuthInputsModel[], forgetPassword?: EmailAuthInputsModel[]` | `constructor(public title: string, public inputs:{formControlName: string, placeholder: string,icon: string,type: string,errorText: string,validator: any[]}[],public button: { submit: string, register: string, forgotPassword:string },public hasState: boolean) {}`| `new EmailAuthFormPropertiesValueClass('',[{formControlName: 'email',placeholder: 'email',icon:'featherMail',type: 'text',errorText: 'Please fill valid email',validator: [Validators.email, Validators.required]}],{submit: '', register: '', forgotPassword: ''}true,)`


| Event Emitter | Interface     |  Example | Function
| :-------- | :------- |  :--------| :---------|
|`(formOutput)`| `{ email: string, password: string, state: string }` | `(formOutput)="formOutput($event)"` | `formOutput($event: { email: string; password: string }) {console.log($event) }` |

