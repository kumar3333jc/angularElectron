import { Component } from '@angular/core';
import { FormDataService } from '../data/formdata.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2'; import { ServiceInvoker } from '../services/service.invoker.service';
import { serviceConfigurations } from '../services/configurations';
import { cValidators } from '../custom.validator';
import { ApplicationService } from '../services/application.service';
import * as CryptoJS from 'crypto-js';
@Component({
	selector: 'Page3',
	templateUrl: './Page3.component.html',
	styleUrls: ['./Page3.component.css']
})
export class Page3Component {
	token: string = "0123456789123456";

	Page3_form1: FormGroup;
	Page3_form1_submitted = false;
	serviceResData: any;
	configs: any;
	response: any;

	constructor(private formDataService: FormDataService, private fb: FormBuilder, private router: Router, private service: ServiceInvoker, private applicationService: ApplicationService) {

		this.Page3_form1 = fb.group({
			Form1_page3_individual_firstname: [null, [cValidators('Form1_page3_individual_firstname')]],
			Form1_page3_individual_lastname: [null, [cValidators('Form1_page3_individual_lastname')]],
			Form1_page3_parent_name: [null, [cValidators('Form1_page3_parent_name')]],
			Form1_page3_parent_designation: [null, [cValidators('Form1_page3_parent_designation')]],
			Form1_page3_day: [null, [cValidators('Form1_page3_day')]],
			Form1_page3_month: [null, [cValidators('Form1_page3_month')]],
			Form1_page3_place: [null, [cValidators('Form1_page3_place')]],
			Form1_page3_name: [null, [cValidators('Form1_page3_name')]]
		});

		this.formDataService.setFormData(this.Page3_form1);
		this.configs = new serviceConfigurations();
	}


	get formRef1() { return this.Page3_form1.controls; }

	Page3_form1_onSubmit() {
		this.navigateToComponent(null);
	}

	//encrypt
	encryptUsingAES256(data: any) {
		let _key = CryptoJS.enc.Utf8.parse(this.token);
		let _iv = CryptoJS.enc.Utf8.parse(this.token);
		let encrypted = CryptoJS.AES.encrypt(
			JSON.stringify(data), _key, {
				keySize: 16,
				iv: _iv,
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});
		return encrypted.toString();
	}

	// No services available
	navigateToComponent(navigatePath: string) {
		this.Page3_form1_submitted = true;
		if (this.Page3_form1.valid) {
			// Save the form data
			this.formDataService.saveFormData(this.Page3_form1.value);
			// Navigate to the component
			if (navigatePath) {
				this.router.navigate([navigatePath]);
			} else {
				this.response = this.formDataService.getFormData()


				// console.log(this.response)
				// Object.keys(this.response).forEach(function(key) {
				// console.log(key);

				// 	var value = this.response.key;
				// 	console.log(value)
				// 	// 
				// });	


				const enc = this.encryptUsingAES256(this.response)
				console.log(enc)

				this.applicationService.addItem(enc).subscribe((data) => {
					console.log(data);
					swal.fire({
						type: 'success',
						title: 'success',

						text: 'Saved Sucessfully'
					});
					this.router.navigate(['Preview']);
				}, (err) => {
					swal.fire({
						type: 'error',
						title: 'Oops...',
						text: 'Something went wrong!'
					});
				})

				// this.response=this.service.postRequest(this.configs.baseUrl+this.configs.serviceUrl,this.formDataService.getFormData(),null);
				// this.response.subscribe(data=>{
				// 	swal.fire({
				// 		type: 'success',
				// 		title: 'success',
				// 		text:data.message
				// 	});
				// });
			}
		}

	}
	ngOnInit() {

		try {
			document.querySelector("select[name='language']").dispatchEvent(new Event('change'));
		} catch (e) {
			console.error(e);
		}
	}
}
