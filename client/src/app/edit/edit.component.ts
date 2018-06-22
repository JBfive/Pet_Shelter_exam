import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	pet_id: any;
	cur: any;
	errs: any;
	update: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.update = this.cur
  	this._route.params.subscribe((params: Params) => this.pet_id = params['id']);
  	this.getOne(this.pet_id);
  }
  getOne(id: any){
  		let observable = this._http.getAPet(id)
  		observable.subscribe(data=> {
  			this.cur = data
  			console.log(this.cur)
  		})
  	}
  	edit(id: any){

		
		let observable = this._http.editPet(id, this.cur);
		
		observable.subscribe(data=> {
			console.log(this.update)
		if(data['errors']){
			this.errs=[]
		
			for(let key in data['errors']){
				this.errs.push(data['errors'][key].message)

			}
		}
		else{
			this._router.navigate(['/pets/'+this.pet_id])
		}
		})
	}

}
