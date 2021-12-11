import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.page.html',
  styleUrls: ['./save-details.page.scss'],
})
export class SaveDetailsPage implements OnInit {

  constructor(public alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  showAlert() {

    this.alertController.create({
      header: 'Confirmation',
      message: 'Item successfully added to your cart.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  return2Main() {
    this.navCtrl.back();
  }
}
