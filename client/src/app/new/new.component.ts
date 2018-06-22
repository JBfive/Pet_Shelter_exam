import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	pet: any;
	errs: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.pet = {name: '', type: '', description: '', skill1: '', skill2: '', skill3: ''}
  }
  onSubmit(){
  	let observable = this._http.addPet(this.pet);
	observable.subscribe(data=> {
		// this.author = {name: ""} 
		console.log(data)
    if(data['errors']){
      this.errs=[]
    
      for(let key in data['errors']){
				this.errs.push(data['errors'][key].message)

      }
    }
    else{
		  this._router.navigate(['/'])
    }
  })
}

}
