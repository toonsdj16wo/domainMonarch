import { Injectable } from '@angular/core';
import{Subject}from"rxjs";
import { PhotoModule } from '../models/photo/photo.module';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

	photos : PhotoModule[] =[];
	photoSubject = new Subject<PhotoModule[]>();

	emitPhotos(){
		//emission des nouvelles photos
		this.photoSubject.next(this.photos);
	}

	//Sauvegarde les photos en base de données
	savePhotos(){
		firebase.database().ref("/photos").set(this.photos);
	}

	/*On demande à firebase de récupérer la liste des photos , 'value' demande d'executer la callback 
	à chaque modification au endpoint /photos
	Le deuxième argument est la fonction de call back qui reçoit un datasnapshot (un objet correspondant au node demandé)
	Prise en compte si le serveur ne nous retourne rien*/

	getPhotos(){
		firebase.database().ref("/photos").on('value',(data) =>{
			this.photos = data.val() ? data.val() : [];
			this.emitPhotos();
		})
	}

	//Récupère une photo selon son id ,on utilise once qui ne fait une seule requête de donnée. On veut la donnee une seule fois, on n'a pas besoin de faire des callback à chaque modfication
	getSinglePhoto(id: number) {
	    return new Promise(
	      (resolve, reject) => {
	        firebase.database().ref('photo/view/' + id).once('value').then(
	          (data) => {
	            resolve(data.val());
	          }, (error) => {
	            reject(error);
	          }
	        );
	      }
	    );
	}

//ajoute la photo
	createPhoto (newPhoto : PhotoModule) {
		this.photos.push(newPhoto);
		this.savePhotos();
		this.emitPhotos();
	}

// retirer un post
	removePhotos(photo: PhotoModule){
		const photoIndex = this.photos.findIndex(
			(photoElement) =>{
				if(photoElement == photo){
					return true;
				}
			}
		);

		this.photos.slice(photoIndex,1);
		this.savePhotos();
		this.emitPhotos();
	}

  constructor() {
  	this.getPhotos();
   }
}
