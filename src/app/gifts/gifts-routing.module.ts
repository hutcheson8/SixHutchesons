import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { GiftsHomeComponent } from './gifts-home.component';
import { MyShoppingListComponent } from './my-shopping-list/my-shopping-list.component';
import { MyWishListComponent } from './my-wish-list/my-wish-list.component';
import { OtherWishListsComponent } from './other-wish-lists/other-wish-lists.component';


export const giftRoutes: Routes = [
	{
		path : '',
		component : GiftsHomeComponent,
		children :
		[
			{ path : 'myShoppingList', component: MyShoppingListComponent },
			{ path : 'myWishList', component: MyWishListComponent },
			{ path : 'otherWishLists', component: OtherWishListsComponent }
		]
	}
];

@NgModule({imports:[RouterModule], exports:[RouterModule]})
export class GiftsRoutingModule {}
