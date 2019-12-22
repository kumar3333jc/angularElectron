import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';

import { PageNotFoundComponent } from './page_not_found/page_not_found.component';
import { Page1Component } from './Page1/Page1.component';
import { page2Component } from './page2/page2.component';
import { Page3Component } from './Page3/Page3.component';
import { PreviewComponent } from './preview/preview.component';


const appRoutes: Routes = [{path:'',redirectTo:'Page1',pathMatch:'full'},{path:'Page1',component:Page1Component},{path:'page2',component:page2Component},{path:'Page3',component:Page3Component},{path:'Preview',component:PreviewComponent},{path:'**',component:PageNotFoundComponent}];

@NgModule({
  declarations: [
	PageNotFoundComponent,
	Page1Component,
	page2Component,
	Page3Component
	],
  imports: [
	ReactiveFormsModule, 
	CommonModule, 
	NgxScrollToFirstInvalidModule,
	RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
