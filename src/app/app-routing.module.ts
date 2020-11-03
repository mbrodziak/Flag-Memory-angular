import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwelveComponent } from './boards/twelve/twelve.component';
import { SixteenComponent } from './boards/sixteen/sixteen.component';
import { TwentyComponent } from './boards/twenty/twenty.component';

const routes: Routes = [
  {
    path: 'twelve',
    component: TwelveComponent
  },
  {
    path: 'sixteen',
    component: SixteenComponent
  },
  {
    path: 'twenty',
    component: TwentyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
