import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-song-name-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './song-name-link.component.html',
  styleUrl: './song-name-link.component.scss'
})
export class SongNameLinkComponent {

}
