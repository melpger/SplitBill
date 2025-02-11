import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonRow,
  IonCol, IonList, IonInput, IonItem, IonText, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonIcon, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonRow,
    IonCol, IonList, IonInput, IonItem, IonText, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonIcon, IonListHeader,
    CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddMemberPage {

  members: any[] = [];

  constructor() {

    this.stub();

    addIcons({ addCircle });


  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  stub() {
    this.members = [
      {id: 11, name: "Member A"},
      {id: 22, name: "Member B"},
      {id: 33, name: "Member C"},
    ]
  }

}
