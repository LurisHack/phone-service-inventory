export interface MultiListHeaderModel {
  name: string,
  hide: string,
  data?: { print: boolean, delete: boolean, edit: boolean, view: boolean, menu: boolean }
}


export class MultiListHeaderBlueprint implements MultiListHeaderModel {

  constructor(
    public name: string,
    public hide: string,
    public data?: {
    print: boolean,
    delete: boolean,
    edit: boolean,
    view: boolean,
    menu: boolean
  }) {}

}
