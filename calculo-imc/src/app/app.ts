import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Imc} from './imc/imc';
import {Teste} from './teste/teste';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Imc, Teste],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculo-imc');
  
}