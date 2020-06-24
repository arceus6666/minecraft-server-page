import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {

  data = [
    {
      name: 'Brendan - Pokémon Emerald',
      file: 'brendan_pkmn_emerald'
    },
    {
      name: 'Legion Trooper - Star Wars',
      file: 'legion_trooper'
    },
    {
      name: 'Mario - Super Mario Bros.',
      file: 'nes_mario'
    },
    {
      name: 'Red - Pokémon Red & Blue',
      file: 'red_pkmn_red'
    },
    {
      name: 'Trooper 2',
      file: 'red_trooper'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
