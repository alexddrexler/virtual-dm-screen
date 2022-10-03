import { Component, OnInit } from '@angular/core';

import { Monster } from '../../interfaces/monster';
import { ALIGNMENTS, SIZES, TYPES } from '../../interfaces/monster';


@Component({
  selector: 'app-create-monster',
  templateUrl: './create-monster.component.html',
  styleUrls: ['./create-monster.component.css']
})
export class CreateMonsterComponent implements OnInit {
  sizes  = SIZES;
  types = TYPES;
  alignments = ALIGNMENTS;

  monster: Monster = {
    name: '',
    description: '',
    size: '',
    type: '',
    alignment: '',
    ability_scores: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    },
    armor_class: 0,
    hit_points: 0,
    vulnerabilities: [],
    resistances: [],
    immunities: [],
  };

  banshee: Monster = {
    name: 'Banshee',
    description: 'A banshee is the hateful spirit of a once-beautiful female elf. It appears as ' +
                 'a luminous, wispy form that vaguely recalls its mortal features. A banshee\'s ' +
                 'face is wreathed in a wild tangle of hair, and its body is clad in wispy rags ' +
                 'that flutter and stream around it.\n' +
                 'A banshee is forever bound to the place of its demise. If abhors mirrors, for ' +
                 'it can\'t bear to see the horror of its undead existence.',
    size: 'medium',
    type: 'undead',
    alignment: 'chaotic evil',
    ability_scores: {
      str: 1,
      dex: 14,
      con: 10,
      int: 12,
      wis: 11,
      cha: 17
    },
    armor_class: 12,
    hit_points: 58,
    hit_points_dice: '13d8',
    vulnerabilities: [],
    resistances: [
      'acid',
      'fire',
      'lightning',
      'thunder',
    ],
    immunities: [
      'cold',
      'necrotic',
      'poison',
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
