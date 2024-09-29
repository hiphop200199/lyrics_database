import { Component } from '@angular/core';
import { SingerLinkComponent } from "../singer-link/singer-link.component";
import { SongNameLinkComponent } from "../song-name-link/song-name-link.component";
import { LyricsLinkComponent } from "../lyrics-link/lyrics-link.component";
import { HeroImageComponent } from "../hero-image/hero-image.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SingerLinkComponent, SongNameLinkComponent, LyricsLinkComponent, HeroImageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
