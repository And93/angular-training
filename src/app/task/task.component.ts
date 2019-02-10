import {Component, Inject, InjectionToken, OnInit} from '@angular/core';

interface IConstants {
  app: string;
  ver: string;

  [key: string]: string;
}

const TaskManager = new InjectionToken<IConstants>('taskManager');

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [
    {provide: TaskManager, useValue: {app: 'TaskManager', ver: '1.0'}}
  ]
})
export class TaskComponent implements OnInit {

  constructor(
    @Inject(TaskManager) public taskManager: IConstants
  ) {
  }

  ngOnInit() {
  }

}
