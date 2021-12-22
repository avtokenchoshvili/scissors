import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProxyService {
  

private collectionName:string = '/jobs';
private jobsCollectionRef!:AngularFireList<any>;



  constructor(private database:AngularFireDatabase) {
    this.jobsCollectionRef = this.database.list(this.collectionName)
   }

   getAllJobs():any {
    return this.jobsCollectionRef.snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) =>
          ({ key: c.payload.key, ...c.payload.val()  })
        )
      )
    );
  }

addNewJob(job:any):any{
  return this.jobsCollectionRef.push(job);
}

updateJob(kay:string,job:any):Promise<void>{
  return this.jobsCollectionRef.update(kay,job);
}

delete(kay:string):any{
  return this.jobsCollectionRef.remove(kay)
}

}
