import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotosService } from '../../services/photos.service';
import { PhotoModule } from '../../models/photo/photo.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addphoto-form',
  templateUrl: './addphoto-form.component.html',
  styleUrls: ['./addphoto-form.component.scss']
})
export class AddphotoFormComponent implements OnInit {

  addPhotoForm : FormGroup;

  constructor(private  photoService: PhotosService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){

//Initialisation du  formGroup via formBuilder.group . On met également les validator obligatoire
  	this.addPhotoForm = this.formBuilder.group({
  		namePhoto:['',Validators.required],
		category:['',Validators.required],
		description: ['', Validators.required]
  	});
  }

//Une fois la sousmission du formulaire, on recupère le formgroup via la variable addPhotoForm(), on appelle le service de création puis on redirige vers la liste des photos
    onSubmitForm() {
	    const formValue = this.addPhotoForm.value;
	    const newPhotos = new PhotoModule(
	      formValue['namePhoto'],
	      formValue['category'],
	      formValue['description']
	    );
	    this.photoService.createPhoto(newPhotos);
	    this.router.navigate(['/photos']);
  }

}
