import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from '../../components/users/users.component';
import { RolesComponent } from '../../components/roles/roles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreEditComponent } from '../../components/store-edit/store-edit.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductEditComponent } from '../../components/product-edit/product-edit.component';
import { ActivitiesComponent } from '../../components/activities/activities.component';
import { SiteSettingComponent } from '../../components/site-setting/site-setting.component';
import { ProductAddComponent } from '../../components/product-add/product-add.component';
import { ActivityAddComponent } from '../../components/activity-add/activity-add.component';
import { StoreAddComponent } from '../../components/store-add/store-add.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { StoresComponent } from 'src/app/components/stores/stores.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ImageViewerComponent } from 'src/app/components/image-viewer/image-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxPaginationModule,
    AngularMyDatePickerModule,
    NgxSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    StoreAddComponent,
    StoresComponent,
    StoreEditComponent,
    ProductsComponent,
    ProductEditComponent,
    ActivitiesComponent,
    SiteSettingComponent,
    ProductAddComponent,
    ActivityAddComponent
  ]
})

export class AdminLayoutModule { }
