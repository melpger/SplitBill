import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    CommonModule, FormsModule]
})
export class SplitBillPage  {

  constructor() {
    addIcons({ cash });
  }



}
