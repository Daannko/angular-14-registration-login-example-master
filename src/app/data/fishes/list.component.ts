import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { FishService } from '@app/_services//fish.service';

@Component({ templateUrl: './list.component.html',providers : [FishService] })
export class ListComponent implements OnInit {
  fishes?: any[];

  constructor( private fishService : FishService) {}

    ngOnInit() {
        this.fishService.getAll("")
            .pipe(first())
            .subscribe((data:any) => {
              this.fishes = data
              console.log(data)
            });
    }


}
