import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'aboutus',     component: AboutusComponent },
    { path: 'contactus',   component: ContactusComponent },
    { path: 'ecommerce',   component: EcommerceComponent },
    { path: 'landing',     component: LandingComponent },
    { path: 'legal',     component: BlogpostComponent },
    { path: 'productpage', component: ProductpageComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
