import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LoginComponent } from './login/login.component';
import { SummaryPageModule } from './summary-page/summary-page.module';
import {AgGridModule} from 'ag-grid-angular';
import { AboutUsModule } from './about-us/about-us.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SummaryPageModule,
    AboutUsModule,
    AppRoutingModule,
    AgGridModule.withComponents([ ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
