import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twenty',
  templateUrl: './twenty.component.html',
  styleUrls: ['./twenty.component.css']
})
export class TwentyComponent implements OnInit {

  constructor() { }

  countries = ['poland', 'czech', 'germany', 'ukraine', 'russia', 'lithuania', 'slovakia', 'belarus', 'france', 'italy'];
  drawn = [];
  repetitions = [];
  selectors = [];
  clickFieldId = null;
  clickFieldNr = null;
  firstClickField = true;
  secondClickField = false;
  first = null;
  second = null;
  firstId = null;
  secondId = null;
  discoveredCountries = 0;
  firstGame = true;
  discovered = null;
  undiscovered = null;

  ngOnInit(): void {
    this.startGame();
  }


  newGame(): void {
    this.selectors = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine', '#ten', '#eleven', '#twelve',  '#thirteen',
    '#fourteen', '#fifteen', '#sixteen', '#seventeen', '#eighteen', '#nineteen', '#twenty'];
    for (let i = 0; i < this.selectors.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < this.countries.length; j++) {
            if (this.drawn[i] === this.countries[j]) {
                document.querySelector(this.selectors[i]).classList.remove(this.countries[j]);
            }
        }
        document.querySelector(this.selectors[i]).classList.remove('hit');
    }
  }


 startGame(): void {
    if (this.firstGame === false) {
        this.newGame();
        this.drawn = [];
        this.repetitions = [];
        this.clickFieldId = null;
        this.clickFieldNr = null;
        this.firstClickField = true;
        this.secondClickField = false;
        this.first = null;
        this.second = null;
        this.firstId = null;
        this.secondId = null;
        this.discoveredCountries = 0;
    }
    this.fillIn();
    this.draw();
    this.undiscovered = this.countries.length;
    this.discovered = this.discoveredCountries;
}

 fillIn(): void {
    while (this.repetitions.length < this.countries.length) {
        this.repetitions.push(0);
    }
}

 draw(): void {
    let rand = Math.floor(Math.random() * this.countries.length);
    while (this.drawn.length < (this.countries.length * 2)) {
        if (this.repetitions[rand] < 2) {
            this.drawn.push(this.countries[rand]);
            this.repetitions[rand]++;
        }
        rand = Math.floor(Math.random() * this.countries.length);
    }
}

 show(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.countries.length; i++) {
        if (this.drawn[this.clickFieldNr] === this.countries[i]) {
            document.querySelector(this.clickFieldId).classList.toggle(this.countries[i]);
        }
    }
}

 hide(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.countries.length; i++) {
        if (this.drawn[this.first] === this.countries[i]) {
            document.querySelector(this.firstId).classList.toggle(this.countries[i]);
        }
        if (this.drawn[this.second] === this.countries[i]) {
            document.querySelector(this.secondId).classList.toggle(this.countries[i]);
        }
    }
    this.waitClick();
}

 checkClickField(): void {
    if (this.firstClickField === true) {
        this.first = this.clickFieldNr;
        this.firstId = this.clickFieldId;
    }
    else {
        this.second = this.clickFieldNr;
        this.secondId = this.clickFieldId;
    }
}

 waitClick(): void {
    this.selectors = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine', '#ten', '#eleven', '#twelve',  '#thirteen',
    '#fourteen', '#fifteen', '#sixteen', '#seventeen', '#eighteen', '#nineteen', '#twenty'];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.selectors.length; i++) {
        document.querySelector(this.selectors[i]).classList.toggle('wait');
    }
}

 isWinner(): void {
    if (this.discoveredCountries === this.countries.length) {
        alert('You Win!');
        this.firstGame = false;
        this.startGame();
    }
}

 check(): void {
    if (this.firstClickField === true && this.secondClickField === false) {
        this.firstClickField = false;
        this.secondClickField = true;
        this.show();
    }
    else if (this.firstClickField === false && this.secondClickField === true) {
        this.show();
        if (this.drawn[this.first] !== this.drawn[this.second]) {
            this.waitClick();
            setTimeout(() => {
              this.hide();
            }, 1000);
        }
        else {
          document.querySelector(this.firstId).classList.toggle('hit');
          document.querySelector(this.secondId).classList.toggle('hit');
          this.discoveredCountries++;
          this.discovered = this.discoveredCountries;
          this.undiscovered = this.countries.length - this.discoveredCountries;
          this.isWinner();
        }
        this.firstClickField = true;
        this.secondClickField = false;
    }
 }

  oneFieldClick(): void {
      this.clickFieldId = '#one';
      this.clickFieldNr = 0;
      this.checkClickField();
      this.check();
  }

  twoFieldClick(): void {
      this.clickFieldId = '#two';
      this.clickFieldNr = 1;
      this.checkClickField();
      this.check();
  }

  threeFieldClick(): void {
      this.clickFieldId = '#three';
      this.clickFieldNr = 2;
      this.checkClickField();
      this.check();
  }

  fourFieldClick(): void {
      this.clickFieldId = '#four';
      this.clickFieldNr = 3;
      this.checkClickField();
      this.check();
  }

  fiveFieldClick(): void {
      this.clickFieldId = '#five';
      this.clickFieldNr = 4;
      this.checkClickField();
      this.check();
  }

  sixFieldClick(): void {
      this.clickFieldId = '#six';
      this.clickFieldNr = 5;
      this.checkClickField();
      this.check();
  }

  sevenFieldClick(): void {
      this.clickFieldId = '#seven';
      this.clickFieldNr = 6;
      this.checkClickField();
      this.check();
  }

  eightFieldClick(): void {
      this.clickFieldId = '#eight';
      this.clickFieldNr = 7;
      this.checkClickField();
      this.check();
  }

  nineFieldClick(): void {
      this.clickFieldId = '#nine';
      this.clickFieldNr = 8;
      this.checkClickField();
      this.check();
  }

  tenFieldClick(): void {
      this.clickFieldId = '#ten';
      this.clickFieldNr = 9;
      this.checkClickField();
      this.check();
  }

  elevenFieldClick(): void {
      this.clickFieldId = '#eleven';
      this.clickFieldNr = 10;
      this.checkClickField();
      this.check();
  }

  twelveFieldClick(): void {
      this.clickFieldId = '#twelve';
      this.clickFieldNr = 11;
      this.checkClickField();
      this.check();
  }


  thirteenFieldClick(): void {
    this.clickFieldId = '#thirteen';
    this.clickFieldNr = 12;
    this.checkClickField();
    this.check();
}

  fourteenFieldClick(): void {
      this.clickFieldId = '#fourteen';
      this.clickFieldNr = 13;
      this.checkClickField();
      this.check();
  }

  fifteenFieldClick(): void {
      this.clickFieldId = '#fifteen';
      this.clickFieldNr = 14;
      this.checkClickField();
      this.check();
  }

  sixteenFieldClick(): void {
      this.clickFieldId = '#sixteen';
      this.clickFieldNr = 15;
      this.checkClickField();
      this.check();
  }

  seventeenFieldClick(): void {
    this.clickFieldId = '#seventeen';
    this.clickFieldNr = 16;
    this.checkClickField();
    this.check();
}

  eighteenFieldClick(): void {
      this.clickFieldId = '#eighteen';
      this.clickFieldNr = 17;
      this.checkClickField();
      this.check();
  }

  nineteenFieldClick(): void {
      this.clickFieldId = '#nineteen';
      this.clickFieldNr = 18;
      this.checkClickField();
      this.check();
  }

  twentyFieldClick(): void {
      this.clickFieldId = '#twenty';
      this.clickFieldNr = 19;
      this.checkClickField();
      this.check();
  }

}
