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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
