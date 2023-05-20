import { Component } from '@angular/core';
import { Square } from '../types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  squares: Square[] = [];
  winner: Square = null;
  xTurn = true;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
  }

  get player() {
    return this.xTurn ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (this.winner != null) return;
    if (this.squares[idx] != null) return;
    this.squares[idx] = this.player;
    this.xTurn = !this.xTurn;
    this.checkWinner();
  }

  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winner = this.squares[a];
      }
    }
  }
}
