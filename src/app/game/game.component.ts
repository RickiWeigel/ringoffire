import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { ActivatedRoute } from '@angular/router';
import { RingoffireService } from '../firebase-services/ringoffire.service';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  imports: [
    NgForOf,
    NgStyle,
    NgIf,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    GameInfoComponent,
  ],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  game!: Game;
  currentCard!: string;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public ringoffireService: RingoffireService
  ) {}

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params['id']);

    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop()!;
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    if (this.game.players.length <= 5) {
      const dialogRef = this.dialog.open(DialogAddPlayerComponent);
      dialogRef.afterClosed().subscribe((name) => {
        if (name) {
          this.game.players.push(name);
        }
      });
    }
  }
}
