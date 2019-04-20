import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from '../shared/image-upload/image-upload.module';

import { ExamplesComponent } from './examples.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LandingComponent } from './landing/landing.component';
import { ProductpageComponent } from './productpage/productpage.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAXPIjpKlYFdpWNU78LtCNTzID9ZZ_zjlg'
        }),
        ImageUploadModule
    ],
    declarations: [
        ExamplesComponent,
        AboutusComponent,
        BlogpostComponent,
        ContactusComponent,
        EcommerceComponent,
        LandingComponent,
        ProductpageComponent
    ]
})
export class ExamplesModule { }
