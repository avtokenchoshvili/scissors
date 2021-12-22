import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseProxyService } from '../servises/firebase-proxy.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})



export class AddComponent implements OnInit {

  jobForm!:FormGroup;

  

  constructor(private fBuilder:FormBuilder, private firebaseClient:FirebaseProxyService) {
    this.jobForm = this.fBuilder.group({
      jobs:this.fBuilder.array([])
    })
   }

  ngOnInit(): void {
  
  } 


  getJobs():FormArray {
    return this.jobForm.get('jobs') as FormArray
  }

newJob():FormGroup {
  return this.fBuilder.group({
    companyLogo: new FormControl(),
    companyName: new FormControl(),
    companyWorkDescription: new FormControl(null),
    workExps: new FormArray([])
  });
}
getWorkExps(jobIndex:number):FormArray{
  return this.getJobs().at(jobIndex).get('workExps') as FormArray;
}


newWorkExp():FormGroup {
  return this.fBuilder.group({
    position:'',
    startAt:'',
    endAt:''
  });
}

addNewJob(){
  this.getJobs().push(this.newJob());

}


deleteJob(jobIndex:number){
  this.getJobs().removeAt(jobIndex);
}

addNewExpAtJob(jobIndex:number){
  this.getWorkExps(jobIndex).push(this.newWorkExp());
}

deleteJobExp(jobIndex:number,expIndex:number){
  this.getWorkExps(jobIndex).removeAt(expIndex)
}

onFormSubmit(){
  console.log(this.jobForm);
  console.log(this.jobForm.value);
  this.firebaseClient.addNewJob(this.jobForm.value).then(()=>{
    console.log('addd')
  })
}



}
