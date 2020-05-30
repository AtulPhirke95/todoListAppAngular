import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistCreateComponent } from './todolist/todolist-create/todolist-create.component';
import { TodolistUpdateComponent } from './todolist/todolist-update/todolist-update.component';
import { TodolistDeleteComponent } from './todolist/todolist-delete/todolist-delete.component';
import { TodolistViewComponent } from './todolist/todolist-view/todolist-view.component';
import { TolistUpdateSelectItemComponent } from './todolist/todolist-update/tolist-update-select-item/tolist-update-select-item.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    TodolistComponent,
    TodolistCreateComponent,
    TodolistUpdateComponent,
    TodolistDeleteComponent,
    TodolistViewComponent,
    TolistUpdateSelectItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
  ],
  exports:[
    TodolistComponent,
    TodolistCreateComponent,
    TodolistUpdateComponent,
    TodolistDeleteComponent,
    TodolistViewComponent,
    TolistUpdateSelectItemComponent,
  ]
})
export class TodoappModuleModule { }
