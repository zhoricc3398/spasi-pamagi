import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule, FormioAppConfig } from 'angular-formio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RatingWrapperComponent } from './custom-components/rating-wrapper/rating-wrapper.component';
import { registerRatingComponent } from './custom-components/rating-wrapper/rating-wrapper.formio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from '../config';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormBuilderComponent, RatingWrapperComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormioModule,
    NgbModule,
  ],
  providers: [{ provide: FormioAppConfig, useValue: AppConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    registerRatingComponent(injector);
  }
}
