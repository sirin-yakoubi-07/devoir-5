import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../model/game.model';
import { Classification } from '../model/classification.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-game',
  standalone: true,
  templateUrl: './update-game.html',
  styles: ``
})
export class UpdateGame implements OnInit {
  currentGame = new Game();
  classifications!: Classification[];
  updatedClassId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.classifications = this.gameService.listeClassifications();
    this.currentGame = this.gameService.consulterGame(
      this.activatedRoute.snapshot.params['id']
    ) || new Game();
    if (this.currentGame && this.currentGame.classification) {
      this.updatedClassId = this.currentGame.classification.idClass;
    }
  }

  updateGame() {
    this.currentGame.classification = this.gameService.consulterClassification(this.updatedClassId);
    this.gameService.updateGame(this.currentGame);
    this.router.navigate(['/games']);
  }
}
