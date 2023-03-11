import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ObservableAndPromiseDemo';

  private subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    // //-------------------------------- 1. Emit Values-------------------------------------
    // var observable = new Observable(res => {
    //   res.next("Hello Piyush");
    //   res.next("Hello Vivek");
    //   res.next("Hello Rajesh");
    // });
    // observable.subscribe(console.log)

    // //Output --> Observable can emmit multiple values
    // //Hello Piyush
    // //Hello Vivek
    // //Hello Rajesh

    // var promise = new Promise(res => {
    //   res("Hello Piyush");
    //   res("Hello Vivek");
    //   res("Hello Rajesh");
    // });
    // promise.then(console.log)

    // //output
    // //Hello Piyush --> Promise will emit only single values that's why other two values are not emmited.

    // //------------------------------------------------------------------------------------

    // //----------------------------------- 2. Lazy Load------------------------------------

    // var observable = new Observable(res => {
    //   res.next("Hello....");
    // });
    // observable.subscribe(console.log) //Whenever we subscribe observable then only it will emmit values beacuse it is lazy load.

    // var promise = new Promise(res => {

    //   console.log("Promise start executing..."); //In console you can see this output before calling promise it will initialized on creation and eagerly load.

    //   res("Hello....");
    // });
    // promise.then(console.log)

    // //-----------------------------------------------------------------------------------

    //--------------------3.Asynchronous Promise Vs Synchronous/Asynchronous Observables------------------------

    // //Async Promise
    // var promise = new Promise(res => {
    //   console.log("Start Executing...");

    //   res("Hello...");

    //   console.log("Execution End...");
    // });
    // promise.then(console.log)

    // //Async Observable
    // var observable = new Observable(res => {
    //   console.log("Start Executing...");
    //   setTimeout(() => {
    //     res.next("Hello Piyush");
    //     res.next("Hello Vivek");
    //     res.next("Hello Rajesh");
    //   })
    //     , 1000
    //   console.log("Execution End...");
    // });
    // observable.subscribe(console.log)

    // //Sync Observable
    // var observable = new Observable(res => {
    //   console.log("Start Executing...");
    //   res.next("Hello Piyush");
    //   res.next("Hello Vivek");
    //   res.next("Hello Rajesh");
    //   console.log("Execution End...");
    // });
    // observable.subscribe(console.log)

    //--------------------------------------------4. Subscribe and Unsubscribe Observable--------------------
    //observable
    const observable = new Observable((res) => {

      let count = 0;
        setInterval(() => {
          count = count + 1;
          res.next(count);
        }
          , 1000)
    })

    //subscribe the observable
    this.subscription = observable.subscribe(ele => { console.log(ele) })

    //unsubscribe the observable
    setTimeout(() => {
      this.subscription?.unsubscribe();
    }
    ,12000)

  }
}


