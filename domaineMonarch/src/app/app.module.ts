import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { HostComponent } from './host/host.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ListPhotoComponent } from './photo/list-photo/list-photo.component';
import { PhotoViewComponent } from './photo/photo-view/photo-view.component';
import { PhotoSingleComponent } from './photo/photo-single/photo-single.component';
import { AddphotoFormComponent } from './photo/addphoto-form/addphoto-form.component';
import {AuthService}from './services/auth.service';
import {AuthGuardService}from './services/auth-guard.service';
import {PhotosService}from './services/photos.service';
import{Routes, RouterModule} from '@angular/router';
import{FormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'photos', component: ListPhotoComponent },
  { path: 'photo/new', component: AddphotoFormComponent },
  { path: 'photo/view/:id', component: PhotoSingleComponent },
  { path: '', component: WelcomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    HostComponent,
    SignInComponent,
    SignUpComponent,
    ListPhotoComponent,
    PhotoViewComponent,
    PhotoSingleComponent,
    AddphotoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuardService,PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
