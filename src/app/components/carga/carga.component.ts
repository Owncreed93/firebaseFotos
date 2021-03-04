import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/filte-item';

// **************************************** SERVICES *********************************** //

import { CargaImagesService } from '../../services/carga-images.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = [];

  constructor( public _cargaImagenes: CargaImagesService ) { }

  ngOnInit(): void {
  }

  cargarImagenes(): void {

    this._cargaImagenes.cargarImagenesFirebase( this.archivos );

  }

}
