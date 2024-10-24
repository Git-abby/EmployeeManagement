import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Creating Array of steps to render dynamic
  // Syntax = name of array: any [] = [data]
  stepsList: any [] = [
    { stepName: 'Basic Details', isCompleted: false },
    { stepName: 'Skills', isCompleted: false },
    { stepName: 'Experience', isCompleted: false },
  ];

  activeStep: any = this.stepsList[0];

  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }
}
