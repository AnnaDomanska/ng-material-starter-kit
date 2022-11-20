import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoryCheckboxComponentModule } from './components/category-checkbox/category-checkbox.component-module';
import { CategoryMenuComponentModule } from './components/category-menu/category-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'public-holidays', component: PublicHolidaysComponent }, { path: 'checkbox-categories', component: CategoryCheckboxComponent }, { path: 'categories-menu', component: CategoryMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoryCheckboxComponentModule, CategoryMenuComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
