import { Component, OnInit , OnDestroy} from '@angular/core';
import { PhotoModule } from '../../models/photo/photo.module';
import{Subscription}from"rxjs";
import { Router } from '@angular/router';
import { PhotosService } from '../../services/photos.service';



@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.scss']
})
export class ListPhotoComponent implements OnInit, OnDestroy {

	photos: PhotoModule[];
	photoSubscription: Subscription;

  constructor(private photosService: PhotosService, private router: Router) { }

  ngOnInit() {

//Observer  du subject (on subscribe le subject) et premier émission de celui-ci
  	this.photoSubscription= this.photosService.photoSubject.subscribe(
  		(photos: PhotoModule[]) =>{
  			this.photos= photos;
  		},
  		//errorh
  		(error) =>{
  			console.log("error subscription  photos service");
  		},
  		//Si le subject s'acheve
  		()=>{
  			console.log("Observable complete");
  		});
  	this.photosService.emitPhotos();
  }

//On supprime une photo du site
  OnDeletePhoto(photo: PhotoModule){
	this.photosService.removePhotos(photo);
  }

//On regarde la photo du site
 onViewPhoto(id: number) {
    this.router.navigate(['/photo', 'view', id]);
  }


//Clot la subscription une fois le component fermé 
  ngOnDestroy(){
  	this.photoSubscription.unsubscribe();
  }

}
