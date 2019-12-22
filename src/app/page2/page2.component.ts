import { Component } from '@angular/core';

import { FormDataService } from '../data/formdata.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form1Page2Status } from './services/Form1_page2_status.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';import { ServiceInvoker } from '../services/service.invoker.service';
import { serviceConfigurations } from '../services/configurations';
import { cValidators } from '../custom.validator';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class page2Component{
	
  form1Page2StatusSelect: any = [];

  page2_form1:FormGroup;
  page2_form1_submitted=false;
  serviceResData:any;
  configs:any;
  response:any;

  constructor(private formDataService: FormDataService, private fb: FormBuilder, private form1Page2Status: Form1Page2Status, private router: Router, private service: ServiceInvoker) {

	this.page2_form1 = fb.group({
		Form1_page2_fullname_address: [null, [ cValidators('Form1_page2_fullname_address') ]],
		Form1_page2_status: [null, [ cValidators('Form1_page2_status') ]],
		Form1_page2_nationality: [null, [ cValidators('Form1_page2_nationality') ]],
		Form1_page2_country: [null, [ cValidators('Form1_page2_country') ]],
		Form1_page2_address: [null, [ cValidators('Form1_page2_address') ]],
		Form1_page2_email_id: [null, [ cValidators('Form1_page2_email_id') ]],
		Form1_page2_pan_or_tan: [null, [ cValidators('Form1_page2_pan_or_tan') ]],
		Form1_page2_number: [null, [ cValidators('Form1_page2_number') ]],
		Form1_page2_period: [null, [ cValidators('Form1_page2_period') ]],
		Form1_page2_purpose: [null, [ cValidators('Form1_page2_purpose') ]],
		Form1_page2_other_details: [null, [ cValidators('Form1_page2_other_details') ]]
	});

	this.formDataService.setFormData(this.page2_form1);
	this.configs = new serviceConfigurations();
  }
	

  get formRef1() { return this.page2_form1.controls; }

  page2_form1_onSubmit() {
	this.navigateToComponent(null);
  }

// No services available

  navigateToComponent(navigatePath: string) {
	this.page2_form1_submitted=true;
	if (this.page2_form1.valid) {
		// Save the form data
		this.formDataService.saveFormData(this.page2_form1.value);
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
	const optionsObservable = this.form1Page2Status.getOptions();
	optionsObservable.subscribe({
		next:(data) =>{ this.form1Page2StatusSelect = data; }
	});

	try{
		document.querySelector("select[name='language']").dispatchEvent(new Event('change'));
	}catch(e){
		console.error(e);
	}
  }
}
