import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VoiceBasicInterface } from '../voice-basic-interface';
import { CompleteMenu } from '../complete-menu-interface';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.scss'
})
export class ModifyComponent {

  menu: CompleteMenu[] = [
    { id: 1, name: "account", pageid: null, level: 0, prevVoice: null, subVoices: null },
    { id: 2, name: "Level1", pageid: 73, level: 1, prevVoice: null, subVoices: null },
    { id: 3, name: "Level2", pageid: 102, level: 2, prevVoice: null, subVoices: null },
  ];

  selectMenuForm: FormGroup;
  modifyMenuForm: FormGroup;

  menuVoices: VoiceBasicInterface[] | null = null;

  constructor(private fb: FormBuilder) {
    this.selectMenuForm = this.fb.group({
      level: this.fb.control<number | null>(null, Validators.required),
      menuVoice: this.fb.control<VoiceBasicInterface | null>(null)
      //menuVoices: this.fb.array([]),
    });

    this.modifyMenuForm = this.fb.group({
      id: this.fb.control<number | null>(null, Validators.required),
      name: this.fb.control<string | null>(null, Validators.required),
      pageid: this.fb.control<number | null>(null),
      level: this.fb.control<number | null>(null, Validators.required),
      prevVoice: this.fb.control<VoiceBasicInterface | null>(null),
      subVoices: this.fb.control<VoiceBasicInterface[] | null> (null) 
      //subVoices: this.fb.array([])
    });
  }

  onChangeLevel() {
    this.selectMenuForm.get('menuVoice')?.setValue(null);;
    const level = this.selectMenuForm.get('level')?.value;
    
    if(level != null) { 
      //CHIAMA IL SERVER PER OTTENERE TUTTE LE VOCI DEL LIVELLO SELEZIONATO ED ASSEGNA A MenuVoices
      this.menuVoices = [
        { id: 1, name: "element1", level: level},
        { id: 2, name: "element2", level: level},
        { id: 3, name: "element3", level: level},
      ]
      console.log("level", this.menuVoices)
    }
  }

  onChangeVoice() {
    const menuVoice = this.selectMenuForm.get('menuVoice')?.value;
    console.log("Selezionata: ", menuVoice);

    if(menuVoice) {
      this.modifyMenuForm.reset();
      this.modifyMenuForm.patchValue(menuVoice);

      //CHIAMA IL SERVER PER OTTENERE TUTTI I DATI RELATIVI A QUELLA VOCE
      //VALORI DI PROVA
      if(this.modifyMenuForm.get('level')?.value !== 0) {
        this.modifyMenuForm.get('pageid')?.setValue(12);
      }

      let prevVoice: VoiceBasicInterface | null = null;
      const level = this.modifyMenuForm.get('level')?.value;
      if (level != 0) {
        prevVoice = {
          id: 34, name: "Casual", level: (level - 1)
        };
      }
      this.modifyMenuForm.get('prevVoice')?.setValue(prevVoice);
  
      let pageid = this.modifyMenuForm.get('pageid')?.value;
      let subVoices: VoiceBasicInterface[] | null = null;
      if (pageid == null) {
        subVoices = [
          { id: 1, name: "SubElement1", level: level + 1 },
          { id: 2, name: "SubElement2", level: level + 1 },
          { id: 3, name: "SubElement3", level: level + 1 }
        ]
      }
      this.modifyMenuForm.get('subVoices')?.setValue(subVoices);

      console.log("Modify form: ", this.modifyMenuForm.getRawValue())
      
    }
  }

  // get subVoices(): FormArray {
  //   return this.modifyMenuForm.get('subVoices') as FormArray;
  // }

  // addSubVoices(subVoices: VoiceBasicInterface[] | null): void {
  //   if(subVoices != null) {
  //     subVoices.forEach(element => {
  //       const subVoiceForm = this.fb.group({
  //         voice_id: this.fb.control<number | null>(element.id, Validators.required),
  //         menu_voice: this.fb.control<string | null>(element.voice, Validators.required)
  //       });
  //       this.subVoices.push(subVoiceForm);
  //     });
  //   }
  // }

}
