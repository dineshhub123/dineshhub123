import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MydirectiveDirective } from './mydirective.directive';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { AddCartComponent } from './add-cart/add-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective,
    TemplateDrivenComponent,
    AddCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
