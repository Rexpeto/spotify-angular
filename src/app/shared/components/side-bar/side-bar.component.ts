import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})

export class SideBarComponent {
  mainMenu: { defaultOptions: Array<any>; accessLink: Array<any> } = {
    defaultOptions: [],
    accessLink: [],
  };

  ngOnInit(): void {
    //* List of options
    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        icon: 'uil-estate',
        router: ['/'],
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil-book-open',
        router: ['/', 'favorites'],
      },
    ];

    //* Access user
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ];
  }
}
