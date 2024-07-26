import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { PageFunctionality } from '../page-funcionality-interface';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    MatTableModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

  displayedColumns: string[] = ['component', 'page', 'authorization', 'readonly'];
  //pages!: PageFunctionality[];

  pagesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
    this.pagesForm = this.formBuilder.group({
      pages: this.formBuilder.array(this.pages.map(page => this.createPageGroup(page)))
    });
  }

  createPageGroup(page: PageFunctionality): FormGroup {
    return this.formBuilder.group({
      idcomponent: new FormControl(page.idcomponent, Validators.required),
      component_name: new FormControl(page.component_name, Validators.required),
      page_name: new FormControl(page.page_name, Validators.required),
      path: new FormControl(page.path, Validators.required),
      authorization: new FormControl(page.authorization, Validators.required),
      readonly: new FormControl(page.readonly, Validators.required),
    });
  }

  get pagesArray(): FormArray {
    return this.pagesForm.get('pages') as FormArray;
  }

  onCheckboxChange(event: Event, formName: string, index: number) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    const value = isChecked ? 1 : 0;

    this.pagesArray.at(index).patchValue({ [formName]: value });
  }

  onSubmit() {
    console.log(this.pagesForm.value);
  }

  private getPages() {
  }

  pages: PageFunctionality[] = [
    {
      idcomponent: 1,
      component_name: 'HeaderComponent',
      page_name: 'HomePage',
      path: '/home',
      authorization: 1,
      readonly: 0
    },
    {
      idcomponent: 2,
      component_name: 'FooterComponent',
      page_name: 'HomePage',
      path: '/home',
      authorization: 1,
      readonly: 0
    },
    {
      idcomponent: 3,
      component_name: 'LoginComponent',
      page_name: 'LoginPage',
      path: '/login',
      authorization: 1,
      readonly: 1
    },
    {
      idcomponent: 4,
      component_name: 'DashboardComponent',
      page_name: 'DashboardPage',
      path: '/dashboard',
      authorization: 2,
      readonly: 0
    },
    {
      idcomponent: 5,
      component_name: 'SettingsComponent',
      page_name: 'SettingsPage',
      path: '/settings',
      authorization: 3,
      readonly: 1
    },
    {
      idcomponent: 6,
      component_name: 'ProfileComponent',
      page_name: 'ProfilePage',
      path: '/profile',
      authorization: 2,
      readonly: 0
    },
    {
      idcomponent: 7,
      component_name: 'AdminComponent',
      page_name: 'AdminPage',
      path: '/admin',
      authorization: 3,
      readonly: 0
    },
    {
      idcomponent: 8,
      component_name: 'UserListComponent',
      page_name: 'UserListPage',
      path: '/users',
      authorization: 2,
      readonly: 0
    },
    {
      idcomponent: 9,
      component_name: 'HelpComponent',
      page_name: 'HelpPage',
      path: '/help',
      authorization: 1,
      readonly: 1
    },
    {
      idcomponent: 10,
      component_name: 'ContactComponent',
      page_name: 'ContactPage',
      path: '/contact',
      authorization: 1,
      readonly: 1
    }
  ]


}
