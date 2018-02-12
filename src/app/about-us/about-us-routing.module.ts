import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';


const ABOUT_US_ROUTES: Routes = [
    { path: 'aboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ABOUT_US_ROUTES),
  ],
  declarations: [AboutUsComponent],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
