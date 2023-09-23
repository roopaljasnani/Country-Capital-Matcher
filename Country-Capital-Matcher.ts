import { Component, Input, OnInit } from '@angular/core';

type Data = {
  [key: string]: string;
};

type Button = {
  name: string;
  selected: boolean;
  error: boolean;
}

@Component({
  selector: 'app-country-capital',
  template: `
  <style>
    .buttons {
      display: inline-flex;
    }

    .button {
      margin: 5px;
    }

    .selected {
      background: #0000ff;
    }

    .error {
      background: #ff0000;
    }
  </style>
  <div *ngIf="gameOver">Congratulations</div>
  <div class="buttons">
    <div *ngFor="let item of buttons">
      <div class="button">
        <button (click)="handleButtonClick(item)" [ngStyle]="buttonStyles(item)">{{item.name}}</button>
        <button (click)="handleButtonClick(item)" [style.background]="error ? '#ff0000' : ''" [style.background]="error ? '#ff0000' : ''">{{item.name}}</button>
      </div>
    </div>
  </div>
`,
})

// Do not change the way the component is named and exported.
export class CountryCapitalComponent implements OnInit {
  @Input() data: Data = {};

  ngOnInit(): void {
    this.generateButtons();
  }
  //Use console.log() for debugging

  buttons: Button[] = [];
  selectedButtons: Button[] = [];
  gameOver = false;

  buttonStyles(item:Button) {
    if (item.selected) {
      return {
        backgroundColor: "#0000ff"
      };
    }
    if (item.error) {
      return {
        backgroundColor: "#ff0000"
      };
    }
    return {};
  }

  generateButtons() {
    const names = Object.keys(this.data).concat(Object.values(this.data)).sort(() => Math.random() - 0.5);
    for (const name of names)
      this.buttons.push({
        name,
        selected: false,
        error: false,
      });
  }

  handleButtonClick(button: Button) {
    if (!button.selected) {
      this.buttons.forEach((btn) => {
        btn.error = false;
        btn.selected = btn.selected || btn.name === button.name;
      })
      this.selectedButtons.length < 2 && this.selectedButtons.push(button);
    }

    if (this.selectedButtons.length === 2) {
      if (this.checkMatch()) this.handleMatch();
      else this.handleError();
    }
  }

  checkMatch() {
    const name1 = this.selectedButtons[0].name;
    const name2 = this.selectedButtons[1].name;

    if (Object.keys(this.data).includes(name1) && this.data[name1] === name2) return true;

    if (Object.values(this.data).includes(name1)) {
      const key = Object.keys(this.data).find((key) => this.data[key] === name1)
      if (key === name2) return true;
    }

    return false;
  }

  handleMatch() {
    this.buttons = this.buttons.filter((btn) => !btn.selected);
    this.selectedButtons = [];

    if (!this.buttons.length) this.gameOver = true;
  }

  handleError() {
    this.selectedButtons.forEach((btn) => { btn.error = true; btn.selected = false });
    this.selectedButtons = [];
  }
}
