import { Classification } from "./classification.model";

export class Game {
  idgame!: number;
  gamename!: string;
  gameprice!: number;
  creationdate!: Date;
  classification?: Classification;
}
