import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FormDataService {

  private formData: any = {};
  
  saveFormData(data: any) {
	// Merge the formData
	Object.assign(this.formData, data);
	console.log("formData saved successfully...");
	console.log(JSON.stringify(this.formData));
  }

  getFormData(): any {
	// Return the entire Form Data
	return this.formData;
  }
  
  setFormData(form:any): any {
	form.patchValue(this.formData);
  }

}
