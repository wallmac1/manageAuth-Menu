import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  pages: {id: number, name: string}[] = [
    {id: 1, name: "Home"},
    {id: 2, name: "Account"},
    {id: 3, name: "Profile"},
  ];

  levels: number[] = [0, 1, 2];

  levelsZero: {id: number, name: string}[] = [
    {id: 1, name: "Customer"},
    {id: 2, name: "User"},
    {id: 3, name: "Worker"},
  ];

  levelsOne: {id: number, name: string}[] = [
    {id: 1, name: "Insert"},
    {id: 2, name: "Battery"},
    {id: 3, name: "Something"},
  ];

  addMenuForm = new FormGroup({
    menu_voice: new FormControl<string | null>(null, Validators.required),
    pageid: new FormControl<number | null>(null, Validators.required),
    level: new FormControl<number | null>(null, Validators.required),
    levelzero_id: new FormControl<number | null>(null),
    levelone_id: new FormControl<number | null>(null)
  })

  onSubmit() {
    console.log(this.addMenuForm.value);
  }

}
