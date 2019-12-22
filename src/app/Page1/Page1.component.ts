import { Component } from '@angular/core';

import { FormDataService } from '../data/formdata.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';import { ServiceInvoker } from '../services/service.invoker.service';
import { serviceConfigurations } from '../services/configurations';
import { cValidators } from '../custom.validator';

@Component({
  selector: 'Page1',
  templateUrl: './Page1.component.html',
  styleUrls: ['./Page1.component.css']
})
export class Page1Component{
	

  Page1_form1:FormGroup;
  Page1_form1_submitted=false;
  serviceResData:any;
  configs:any;
  response:any;

  constructor(private formDataService: FormDataService, private fb: FormBuilder, private router: Router, private service: ServiceInvoker) {

	this.Page1_form1 = fb.group({
		Form1_AO_Field1: [null, [ cValidators('Form1_AO_Field1') ]],
		Form1_AO_Field2: [null, [ cValidators('Form1_AO_Field2') ]],
		Form1_AO_Field3: [null, [ cValidators('Form1_AO_Field3') ]],
		Form1_Individual_Name: [null, [ cValidators('Form1_Individual_Name') ]]
	});

	this.formDataService.setFormData(this.Page1_form1);
	this.configs = new serviceConfigurations();
  }
	

  get formRef1() { return this.Page1_form1.controls; }

  Page1_form1_onSubmit() {
	this.navigateToComponent(null);
  }

// No services available

  navigateToComponent(navigatePath: string) {
	this.Page1_form1_submitted=true;
	if (this.Page1_form1.valid) {
		// Save the form data
		this.formDataService.saveFormData(this.Page1_form1.value);
		// Navigate to the component
		if(navigatePath){
			this.router.navigate([navigatePath]);
		}else{
			this.response=this.service.postRequest(this.configs.baseUrl+this.configs.serviceUrl,this.formDataService.getFormData(),null);
			this.response.subscribe(data=>{
				swal.fire({
					type: 'success',
					title: 'success',
					text:data.message
				});
			});
		}
	}

  }

  ngOnInit() {

	try{
		document.querySelector("select[name='language']").dispatchEvent(new Event('change'));
	}catch(e){
		console.error(e);
	}
  }
}
