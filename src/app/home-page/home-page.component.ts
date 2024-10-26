import {  Component,HostListener, OnDestroy, OnInit } from '@angular/core';
import { SingerLinkComponent } from "../singer-link/singer-link.component";
import { SongNameLinkComponent } from "../song-name-link/song-name-link.component";
import { LyricsLinkComponent } from "../lyrics-link/lyrics-link.component";
import { HeroImageComponent } from "../hero-image/hero-image.component";
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import * as _ from 'lodash';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SingerLinkComponent, SongNameLinkComponent, LyricsLinkComponent, HeroImageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit,OnDestroy{
  subscription! : Subscription;
  debounce = _.debounce(this.handleScroll,300,{leading:true,trailing:false});
  private handleScroll(event:WheelEvent){
    event.preventDefault();
    const urlTree:UrlTree = this.router.parseUrl(this.router.url);
    if(event.deltaY > 0){
      if(urlTree.fragment=='lyrics-link'){
        return;
      }else{
        switch(urlTree.fragment){
          case null:
          case 'top':
          this.router.navigate(['homepage'],{fragment:'singer-link'});
          break;
          case 'singer-link':
          this.router.navigate(['homepage'],{fragment:'name-link'});
          break;
          case 'name-link':
          this.router.navigate(['homepage'],{fragment:'lyrics-link'});
          break;
        }
      }
    }else{
      if(urlTree.fragment==null){
        return;
      }else{
        this.location.back();
      }
    }
  }
  constructor(private router:Router,private route : ActivatedRoute,private location:Location ){}
  ngOnInit(){
    this.subscription =  this.route.fragment.subscribe(fragment =>{
    //  console.log(fragment);
    })
  }

@HostListener('wheel',['$event'])
onMouseWheel(event : WheelEvent){
 // console.log(event);
 this.debounce(event);
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
