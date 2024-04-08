import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {PasswordGeneratorComponent} from "./password-generator/password-generator.component";
import {ToastComponent} from "./toast/toast.component";
import {FooterComponent} from "./footer/footer.component";
import { AwsRum, AwsRumConfig } from 'aws-rum-web';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, PasswordGeneratorComponent, ToastComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'locky';

  ngOnInit(): void {
    try {
      const config: AwsRumConfig = {
        sessionSampleRate: 1,
        guestRoleArn: "arn:aws:iam::905418360304:role/RUM-Monitor-us-east-1-905418360304-3062236952171-Unauth",
        identityPoolId: "us-east-1:c20c3549-ba0f-47f0-b302-2c376af2f391",
        endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
        telemetries: ["performance","errors","http"],
        allowCookies: false,
        enableXRay: false
      };

      const APPLICATION_ID: string = 'c51f8fdb-a842-4f80-b772-4f565d62567b';
      const APPLICATION_VERSION: string = '1.0.0';
      const APPLICATION_REGION: string = 'us-east-1';

      const awsRum: AwsRum = new AwsRum(
        APPLICATION_ID,
        APPLICATION_VERSION,
        APPLICATION_REGION,
        config
      );
    } catch (error) {
      console.warn('Error initializing CloudWatch RUM web client', error);
      // Ignore errors thrown during CloudWatch RUM web client initialization
    }
  }
}
