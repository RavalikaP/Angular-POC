import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryPageComponent } from './summary-page.component';


const SUMMARY_PAGE_ROUTES: Routes = [
    { path: 'summary', component: SummaryPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(SUMMARY_PAGE_ROUTES),
  ],
  declarations: [SummaryPageComponent],
  exports: [RouterModule]
})
export class SummaryPageRoutingModule { }
