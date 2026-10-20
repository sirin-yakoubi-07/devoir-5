import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../model/game.model';
import { GameService } from '../services/game';

@Component({
  selector: 'app-search-by-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-by-name.html',
  styleUrl: './search-by-name.css'
})
export class SearchByName implements OnInit {
  gamename: string = '';
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.rechercherParNom('');
  }

  rechercherGames(nom: string) {
    this.gamename = nom;
    this.games = this.gameService.rechercherParNom(nom);
  }
}
