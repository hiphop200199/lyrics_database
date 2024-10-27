import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  //注入ActivatedRoute服務
  constructor(private route:ActivatedRoute,private router:Router){}
  type:string|null='';//設定一個屬性接收網址參數
  isLoading:boolean=false;
  keyword:string='';
  startSearch():void{
    console.log(this.keyword);
    this.router.navigate(['list/'+this.type],{queryParams:{keyword:this.keyword}});//路徑加網址列參數
  }
  ngOnInit(){
    this.type = this.route.snapshot.paramMap.get('type');//從快照中取得參數，因為路由不會一直改變
  }
}
