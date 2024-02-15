export interface MultiFormModel {
  placeholder: string, formControlName: string, textLimit: number, type: string, value: any
}

export class MultiFormBluePrint implements MultiFormModel {

  constructor(
    public placeholder: string,
    public formControlName: string,
    public textLimit: number,
    public type: string,
    public value: any) {
  }
}
