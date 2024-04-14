import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  date = new FormControl(new Date());
  activity = new FormControl('');
  activities: { date: string; activity: string }[] = [];

  saveActivity() {
    if (this.date.value && this.activity.value) {
      const newActivity = {
        date: this.date.value.toLocaleDateString(), // Convertir la fecha a string
        activity: this.activity.value
      };
      this.activities.push(newActivity);
      this.activity.reset(); // Opcional: resetear el campo de actividad
    }
  }
}
