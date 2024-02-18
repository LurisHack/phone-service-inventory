import {EmailAuthInputsModel} from "./emailAuthInputs.model";

export interface EmailAuthAdditionalInputsModel{
 register?: EmailAuthInputsModel[], login?: EmailAuthInputsModel[], forgetPassword?: EmailAuthInputsModel[]
}
