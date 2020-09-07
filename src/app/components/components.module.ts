import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateSchemesComponent } from './create-schemes/create-schemes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSchemesComponent } from './list-schemes/list-schemes.component';
/* import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component'; */
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CreateSchemesComponent,
    ListSchemesComponent,
    WorkerDetailsComponent,
    UserdetailsComponent,
    ImageViewerComponent,
    ActivityEditComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ImageViewerComponent
  ]
})
export class ComponentsModule { }
