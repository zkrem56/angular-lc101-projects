import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries']},
      {title: "Today's CHores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
      {title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']}];
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
