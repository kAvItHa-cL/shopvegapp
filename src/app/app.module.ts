import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule,AngularMaterialModule ],
  declarations: [ AppComponent, HomeComponent,LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers:[]
})
export class AppModule { }
