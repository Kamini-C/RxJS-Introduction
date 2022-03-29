import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-handling-errors',
  templateUrl: './handling-errors.component.html',
  styleUrls: ['./handling-errors.component.css']
})
export class HandlingErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear()
    of(2, 4, 6, 8)
      .pipe(
        map(i => {
          if (i === 6)
            throw 'Error'
          return i
        }),
        catchError(err => of('six')) //Of() Automatically completes and 8 will not be emitted
      )
      .subscribe({
        next: x => console.log(`Item= ${x}`),
        error: err => console.log('Error in Subscription') //will not be called as error was handled before it
      })
  }

}
