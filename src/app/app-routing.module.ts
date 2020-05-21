import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './Forms/User/signup-form/signup-form.component';
// import { SignupFormComponent } from "./signup/signup.component";
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { LoginFormComponent } from './Forms/User/login-form/login-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditProfileComponent } from './user/user-profile/edit-profile/edit-profile.component';
import { LogoutComponent } from './forms/user/logout/logout.component';
import { NewProductComponent } from './forms/product/new-product/new-product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderNewComponent } from './order/order-new/order-new.component';
import { UserOrderComponent } from './order/user-order/user-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product', component: ProductComponent, children: [
      
      { path: '', component: ProductHomeComponent },
      { path: 'productlist', component: ProductListComponent },
	  { path: 'productdetail', component: ProductDetailComponent},
      { path: 'new', component: NewProductComponent },
      { path: 'productlist/:id', component: ProductDetailComponent },
      { path: 'productlist/editproduct/:id', component: ProductEditComponent }
      
    ]
  },
   { path: 'productdetail', component: ProductDetailComponent},
  { path: 'home', component: HomeComponent, },
  { path: 'userhome',component: UserHomeComponent },
  { path: 'adminhome',component: AdminHomeComponent },
  { path: 'login', component: LoginFormComponent, },
  { path: 'signup', component: SignupFormComponent },
  { path: 'logout', component: LogoutComponent, },
  { path: 'userslist', component: UserListComponent },
  { path: 'profile', component: UserProfileComponent , children:[
    { path: 'editProfile', component: EditProfileComponent },
	{ path: 'changePassword', component: ChangePasswordComponent},
  // {
  //   path: 'productlist', component: ProductListComponent,
  // },
  ]
},
{ path: 'placeorder/:id', component: OrderNewComponent, },
  { path: 'myorder/updateOrder/:id', component: EditOrderComponent, },
	  {path: 'placeorder/:id/myorder', component: UserOrderComponent},
  { path: 'myorder', component: UserOrderComponent },
  { path: 'orderlist', component: OrderListComponent },
   {
    path: 'productdetail/:id', component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
