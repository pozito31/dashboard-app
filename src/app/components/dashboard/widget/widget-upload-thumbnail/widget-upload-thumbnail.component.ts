import { Component, OnInit, Output, EventEmitter, ɵConsole } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-widget-upload-thumbnail',
  templateUrl: './widget-upload-thumbnail.component.html',
  styleUrls: ['./widget-upload-thumbnail.component.css']
})
export class WidgetUploadThumbnailComponent implements OnInit {

  // Output para enviar la ruta de la imagen
  @Output() sendPath: EventEmitter<string>;

  // Imagen selecionada
  public img: any;
  public loadImg: boolean;

  constructor(
    private afs: AngularFireStorage
  ) {
    this.sendPath = new EventEmitter<string>();
    this.loadImg = true;
  }

  ngOnInit() {
  }

  /**
   * Sube una imagen a firebase
   * @param $event 
   */
  uploadFile($event){

    this.loadImg = false;

    // Creo el id de la imagen con el tiempo
    const id= new Date().getTime().toString();
    // Obtengo la ruta del fichero subido
    const file = $event.target.files[0];
    // Obtengo la ruta de donde quiero guardarlo en firebase
    const path = 'thumbnails/'+id;
    // Obtengo la refencia
    const ref = this.afs.ref(path);

    let self = this;

    // Subo la imagen
    this.afs.upload(path, file).then(() =>{
      // Obtengo la ruta de la imagen
      ref.getDownloadURL().subscribe(url =>{

        self.img = url;
        // Envio la imagen
        self.sendPath.emit(url);
        this.loadImg = true;
      },error => {
        console.error("error "+ error);
        this.loadImg = true;
      })

    }, error =>{
      console.error("Error: " + error);
      this.loadImg = true;
    })

  }

}
