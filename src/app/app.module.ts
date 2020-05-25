import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './Forms/User/login-form/login-form.component';
import { SignupFormComponent } from './Forms/User/signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditProfileComponent } from './user/user-profile/edit-profile/edit-profile.component';
import { LogoutComponent } from './forms/user/logout/logout.component';
import { NewProductComponent } from './forms/product/new-product/new-product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderNewComponent } from './order/order-new/order-new.component';
import { UserOrderComponent } from './order/user-order/user-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';

import { OrdersPerUserComponent } from './orders-per-user/orders-per-user.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    UserListComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductComponent,
    ProductHomeComponent,
    UserProfileComponent,
    EditProfileComponent,
    LogoutComponent,
    NewProductComponent,
    ProductEditComponent,
    AdminHomeComponent,
    UserHomeComponent,
    OrderListComponent,
    OrderNewComponent,
    UserOrderComponent,
    EditOrderComponent,
    ChangePasswordComponent,
    OrdersPerUserComponent
  ],
  imports: [
	ChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
	
    
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
