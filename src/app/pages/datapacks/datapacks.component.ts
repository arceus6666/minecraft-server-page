import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapacks',
  templateUrl: './datapacks.component.html',
  styleUrls: ['./datapacks.component.css']
})
export class DatapacksComponent implements OnInit {

  data = [
    'anti_enderman_grief',
    'anti_ghast_grief',
    'armour_statues',
    'double_shulker_shells',
    'gem_villagers',
    'more_mob_heads',
    'multiplayer_sleep',
    'player_graves',
    'player_head_drops',
    'track_raw_statistics',
    'treasure_gems'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
