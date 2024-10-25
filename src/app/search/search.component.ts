import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  //注入ActivatedRoute服務
  constructor(private route:ActivatedRoute){}
  type:string|null='';//設定一個屬性接收網址參數
  ngOnInit(){
    this.type = this.route.snapshot.paramMap.get('type');//從快照中取得參數，因為路由不會一直改變

  }
}
