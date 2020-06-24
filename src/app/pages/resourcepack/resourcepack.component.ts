import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resourcepack',
  templateUrl: './resourcepack.component.html',
  styleUrls: ['./resourcepack.component.css']
})
export class ResourcepackComponent implements OnInit {

  data = [
    'BetterBedrock',
    'ClearerWater',
    'LowerGrass',
    'LowerMycelium',
    'LowerPodzol',
    'LowerSnow',
    'LowerPaths',
    'ShorterTallGrass',
    'ShorterGrass',
    'QuieterGhasts',
    'QuieterDispensersDroppers',
    'QuieterMinecarts',
    'OreBorders',
    'MineProgressBar',
    'StickyPistonSides',
    'CleanRedstoneDust',
    'DiminishingTools',
    'UnobtrusiveRain',
    'BorderlessGlass',
    'BorderlessStainedGlass',
    'UnobtrusiveScaffolding',
    'LowerShield',
    '3DLadders',
    '3DRails',
    '3DSugarcane',
    '3DIronBars',
    '3DVines',
    '3DDoors&Trapdoors',
    '3DStonecutters',
    'SmootherFont',
    'DarkUIGreyText',
    'NumberedHotbar',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
