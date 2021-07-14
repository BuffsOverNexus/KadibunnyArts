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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';

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
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
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
      {path: 'account/create', component: RegisterComponent},
      {path: 'account/login', component: LoginComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'logout', component: LogoutComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
