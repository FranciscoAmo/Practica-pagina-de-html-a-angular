import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService,
                public router: Router) { }

  ngOnInit() {
  }

  buscarProducto(palabra:string){
    if(palabra.length<1){
      return;
    }
    this.router.navigate(['/search',palabra]);
    console.log(palabra);
  }

}
