import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-creation-function',
  templateUrl: './creation-function.component.html',
  styleUrls: ['./creation-function.component.css']
})
export class CreationFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear()
     // emits 4 values using of creation function
     of(2, 4, 6, 8).subscribe((val) => console.log(val));

     // emits 4 values of array using from creation function
     from([5, 10, 15, 20]).subscribe({
       next: (val) => console.log(`value = ${val}`),
       error: (err) => console.log(`error= ${err}`),
       complete: () => console.log('complete'),
     });
 
     // emits 3 string values using of
     of('one', 'two', 'three').subscribe({
       next: (val) => console.log(`value emitted = ${val}`),
       error: (err) => console.log(`error= ${err}`),
       complete: () => console.log('complete'),
     });
 
     // emits 3 string values in array using of
     of(['one', 'two', 'three']).subscribe({
       next: (val) => console.log(`value = ${val}`),
       error: (err) => console.log(`error= ${err}`),
       complete: () => console.log('complete'),
     });
 
     // emits 3 string values in array using of and spread operator
     of(...['one', 'two', 'three']).subscribe({
       next: (val) => console.log(`value = ${val}`),
       error: (err) => console.log(`error= ${err}`),
       complete: () => console.log('complete'),
     });
 
     // emits 3 string values using from
     from(['one', 'two', 'three']).subscribe({
       next: (val) => console.log(`value = ${val}`),
       error: (err) => console.log(`error= ${err}`),
       complete: () => console.log('complete'),
     });
  }

}
