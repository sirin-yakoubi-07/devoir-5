import { Routes } from '@angular/router';
import { GamesComponent } from './games/games';
import { AddGame } from './add-game/add-game';
import { UpdateGame } from './update-game/update-game';
import { SearchByClass } from './search-by-class/search-by-class';
import { SearchByName } from './search-by-name/search-by-name';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { gameGuard } from './game-guard';

export const routes: Routes = [
  { path: "games", component: GamesComponent },
  { path: "add-game", component: AddGame },
{ path: 'updateGame/:id', component: UpdateGame },
  { path: "search-by-class", component: SearchByClass },
  { path: "search-by-name", component: SearchByName },
  { path: "", redirectTo: "games", pathMatch: "full" },
  {path:  'app-forbidden', component: Forbidden}, 
{path: "add-game", component : AddGame, canActivate:[gameGuard]},   

  {path:  'login', component : Login}
];
