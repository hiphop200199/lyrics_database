import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {  Subscription } from 'rxjs';
import './songLink.interface';
import songLink from './songLink.interface';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit,OnDestroy {
  subscription!:Subscription;
  isLoading:boolean=true;
  filter:string|null='';
  keyword:string|null='';
  response:Object={};
  songList!:songLink[];
  getSongs(){
    return this.http.get<songLink[]>('/api/getSongs'+'?filter='+this.filter+'&keyword='+this.keyword);
  }
  constructor(private http:HttpClient,private route:ActivatedRoute) {
  }
  ngOnInit(){
    this.filter = this.route.snapshot.paramMap.get('type');//從快照中取得參數，因為路由不會一直改變
    this.keyword = this.route.snapshot.queryParamMap.get('keyword');
   this.subscription = this.getSongs().subscribe(res =>{
    console.log(res);
    this.isLoading = false;
    this.songList = res;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
