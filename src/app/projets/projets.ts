import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-projets',
  imports: [Header, Footer],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {

}
