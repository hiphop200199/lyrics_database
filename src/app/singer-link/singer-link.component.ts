import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//先引用RouterLink，再到元件裡引用RouterLink，最後在模板裡使用routerLink='search/good'

@Component({
  selector: 'app-singer-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './singer-link.component.html',
  styleUrl: './singer-link.component.scss'
})
export class SingerLinkComponent {

}
