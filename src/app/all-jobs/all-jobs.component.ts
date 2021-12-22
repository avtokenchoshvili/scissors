import { Component, OnInit } from '@angular/core';
import { FirebaseProxyService } from '../servises/firebase-proxy.service';
@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  allJobsInformation:any[] = [];
  constructor(private firebaseClient: FirebaseProxyService) { }
  ngOnInit(): void {
    this.firebaseClient.getAllJobs().valueChanges().subscribe((response:any) => {
      console.log(response);
      this.allJobsInformation = response;
    })
  }

}