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
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth/auth.component';




const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'photos', component: ListPhotoComponent },
  { path: 'photo/new', component: AddphotoFormComponent },
  { path: 'photo/view/:id', component: PhotoSingleComponent },
  { path: '', component: WelcomeComponent },
  { path: 'not-found', component: WelcomeComponent},
  { path: '**', redirectTo: 'not-found' }

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
    AddphotoFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuardService,PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
