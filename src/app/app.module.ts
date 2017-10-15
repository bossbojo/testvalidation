import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ValidationDirective } from './directives/validation.directive';

import { AppComponent } from './app.component';
import { TestfromComponent } from './components/testfrom/testfrom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ValidationDirective,
    AppComponent,
    TestfromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
