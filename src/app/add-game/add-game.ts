import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game';
import { Router } from '@angular/router';
import { Classification } from '../model/classification.model';

@Component({
  imports: [FormsModule, CommonModule],
  standalone: true,
  selector: 'app-add-game',
  styleUrl: './add-game.css',
  templateUrl: './add-game.html',
})
export class AddGame implements OnInit {
  newGame = new Game();
  message: string = '';
  classifications!: Classification[];
  newIdClass!: number;
  newClassification!: Classification;

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.classifications = this.gameService.listeClassifications();
    if (this.classifications.length > 0) {
      this.newIdClass = this.classifications[0].idClass; // première classe sélectionnée par défaut
    }
  }

  addGame() {
    this.newClassification = this.gameService.consulterClassification(this.newIdClass);
    this.newGame.classification = this.newClassification;

    this.gameService.ajouterGame(this.newGame);
    this.message = `Game ${this.newGame.gamename} add successfully`;
    this.router.navigate(['/games']); // retour automatique à la page d'accueil
  }
}
