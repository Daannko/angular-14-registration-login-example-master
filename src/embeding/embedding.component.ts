import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';



@Component({ templateUrl: 'embedding.component.html' })
export class EmbeddingComponent implements OnInit{

  id: number | undefined;

  constructor(private router: Router){
    this. id = Number(router.url.split('/').pop());
  }


  ngOnInit() {
   this. id = Number(this.router.url.split('/').pop());



  }

  course = {
    name: 'System Modeling',
    description: 'Cool course for cool people',
    startDate: '2023.06.12',
    instructor: 'Maciej :).'
  };

}
