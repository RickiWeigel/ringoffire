import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgStyle, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  constructor() {}

  pickCardAnimation = false;
  game: Game | undefined;

  ngOnInit(): void {}

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}
