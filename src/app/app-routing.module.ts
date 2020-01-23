import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinnerComponent } from './dinner/dinner.component';
import { GiftsModule } from './gifts/gifts.module';
import { giftRoutes } from './gifts/gifts-routing.module';


const routes: Routes = [
	{path : 'dinner', component : DinnerComponent},
	{path : 'gifts', children : [...giftRoutes] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
