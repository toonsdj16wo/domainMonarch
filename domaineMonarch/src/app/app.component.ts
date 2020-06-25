import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'domaineMonarch';
  constructor (){
  	var firebaseConfig = {
    apiKey: "AIzaSyD1ttFsXm1Y_1L6_tzSXOM3gq-OtG9y-vs",
    authDomain: "domainemonarch.firebaseapp.com",
    databaseURL: "https://domainemonarch.firebaseio.com",
    projectId: "domainemonarch",
    storageBucket: "domainemonarch.appspot.com",
    messagingSenderId: "968699519506",
    appId: "1:968699519506:web:0d8624cff557462e152ecb",
    measurementId: "G-X35MBCWKXE"
  };

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  }
}
