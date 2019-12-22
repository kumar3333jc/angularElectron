import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';
import {HttpClientModule} from '@angular/common/http';
import { FormDataService } from './data/formdata.service';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { page_headerComponent } from './page_header/page_header.component';
import { page_bodyComponent } from './page_body/page_body.component';
import { page_footerComponent } from './page_footer/page_footer.component';
import { Form1Page2Status } from './page2/services/Form1_page2_status.service';
import { PreviewComponent } from './preview/preview.component';
import { ElectronService } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
	page_headerComponent,
	page_bodyComponent,
	page_footerComponent,
	PreviewComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
	FormsModule,
	NgxScrollToFirstInvalidModule,
	HttpClientModule
  ],
  providers: [{ provide: Form1Page2Status, useClass: Form1Page2Status }, { provide: FormDataService, useClass: FormDataService }, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
