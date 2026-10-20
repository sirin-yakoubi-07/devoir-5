import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Game } from '../model/game.model';
import { GameService } from '../services/game';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class GamesComponent implements OnInit {
  games!: Game[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.listeGames();
  }

  supprimerGame(g: Game) {
    let conf = confirm("Do you want to delete this?");
    if (conf) {
      this.gameService.supprimerGame(g);
      this.games = this.gameService.listeGames(); // Actualise la liste après suppression
    }
  }
}
