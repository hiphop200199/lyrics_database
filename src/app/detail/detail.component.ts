import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { ActivatedRoute } from '@angular/router';
import './songDetail.interface';
import songDetail from './songDetail.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  constructor(private detail : DetailService,private route:ActivatedRoute) {}
  subscription!:Subscription;
  isLoading:boolean=true;
  id!:string|null;
  songDetail!:songDetail;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.detail.getSong(this.id).subscribe(res =>{
      console.log(res);
      this.isLoading = false;
      this.songDetail = res;
    })
  }
}
