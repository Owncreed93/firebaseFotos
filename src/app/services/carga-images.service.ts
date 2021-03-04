import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// ****************************************** MODELS *************************************** //

import { FileItem } from '../models/filte-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore ) {



  }

  cargarImagenesFirebase( imagenes: FileItem[] ): void{

    console.log( imagenes );

  }

  private guardarImagen( imagen: { nombre: string, url: string } ): void {

    this.db.collection(`/${ this.CARPETA_IMAGENES }`).add( imagen );

  }

}
