import { AbstractControl,ValidatorFn } from '@angular/forms';
declare function validateFormField(field: string,userEnteredValue: string): any;

export function cValidators(field: string): ValidatorFn {
    console.log("inside cValidators");
	return (control: AbstractControl): { [key: string]: boolean } | null => {
		console.log("validating...");
		return validateFormField(field,control.value);		
	};
}













