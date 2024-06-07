import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonRow,
  IonCol, IonList, IonInput, IonItem, IonText, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonIcon, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cash } from 'ionicons/icons';

@Component({
  selector: 'app-split-bill',
  templateUrl: './split-bill.page.html',
  styleUrls: ['./split-bill.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonRow,
    IonCol, IonList, IonInput, IonItem, IonText, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonIcon, IonListHeader,
    CommonModule, FormsModule, ReactiveFormsModule]
})
export class SplitBillPage  {

  splitBillForm: FormGroup;
  invalidSubmit = false;
  members: any[] = [];

  constructor(
    public formBuilder: FormBuilder,
  ) {

    this.stub();

    addIcons({ cash });

    this.splitBillForm = this.formBuilder.group({
      itemName: ["", Validators.compose([Validators.maxLength(100), Validators.required])],
      itemPrice: [0, Validators.compose([Validators.min(0), Validators.pattern('[0-9]?\\.?[0-9]*'), Validators.required])],
      paidBy: ["", Validators.compose([Validators.required])],
      splitTo: this.formBuilder.array([])
    });
  }

  onChange(id:string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.splitBillForm.controls['splitTo'];

    if (isChecked) {
      emailFormArray.push(new FormControl(id));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == id)
      emailFormArray.removeAt(index);
    }
  }

  async ensureInput() {
    if (this.splitBillForm.valid) {
      this.invalidSubmit = false;
    } else {
      this.invalidSubmit = true;
    }
  }

  stub() {
    this.members = [
      {id: 11, name: "Member A", checked:"false"},
      {id: 22, name: "Member B", checked:"false"},
      {id: 33, name: "Member C", checked:"false"},
    ]
  }



}
