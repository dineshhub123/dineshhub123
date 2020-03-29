import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MydirectiveDirective } from './mydirective.directive';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective,
    HomecomponentComponent,
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
