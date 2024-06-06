import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyArAxNYHJorhZWp-qx3zn_iHwdc_5fWPEc",
      authDomain: "splityourbillnow.firebaseapp.com",
      projectId: "splityourbillnow",
      storageBucket: "splityourbillnow.appspot.com",
      messagingSenderId: "832541768215",
      appId: "1:832541768215:web:5a1d4add17f814fe6b7a52",
      measurementId: "G-RHFXY6CCLG"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
