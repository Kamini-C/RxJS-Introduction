import { Component, OnInit } from '@angular/core';
import { of, tap, map, take } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear()
    of(15, 10, 5, 20)
      // to apply operators in sequence
      .pipe(
        // utility operator: taps without affecting items
        tap((i) => console.log(`tapped value 1: ${i}`)),

        // transform each item emitted
        map((i) => i * 2),

        tap((i) => console.log(`tapped value 2: ${i}`)),
        map((i) => i - 10),
        // filtering operator: emits specified no of items
        take(3), // change to 2 and it will complete without emiting item with error
        map((i) => {
          if (i <= 0) throw new Error('Error Occured');
          return i;
        })
      )
      .subscribe({
        next: (val) => console.log(`value = ${val}`),
        error: (err) => console.log(`error= ${err}`),
        complete: () => console.log('**Complete**'),
      });
  }


}
