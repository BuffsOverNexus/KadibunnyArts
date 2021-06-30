import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { TermsComponent } from './terms/terms.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    GalleryComponent,
    CommissionsComponent,
    TermsComponent,
    OrdersComponent,
    CartComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'account', component: AccountComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'cart', component: CartComponent},
      {path: 'commissions', component: CommissionsComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
