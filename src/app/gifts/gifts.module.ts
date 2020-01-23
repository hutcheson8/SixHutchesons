import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsHomeComponent } from './gifts-home.component';
import { GiftsRoutingModule } from './gifts-routing.module';
import { MyWishListComponent } from './my-wish-list/my-wish-list.component';
import { MyShoppingListComponent } from './my-shopping-list/my-shopping-list.component';
import { OtherWishListsComponent } from './other-wish-lists/other-wish-lists.component';

@NgModule({
  declarations:[GiftsHomeComponent, MyWishListComponent, MyShoppingListComponent, OtherWishListsComponent],
  imports: [
    CommonModule,
    GiftsRoutingModule
  ],
  exports: [GiftsHomeComponent, MyWishListComponent, MyShoppingListComponent, OtherWishListsComponent]
})
export class GiftsModule { }
