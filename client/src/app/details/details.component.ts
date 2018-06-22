import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	cur: any;
	pet_id: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
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
  	delete(id: any){
  		let observable = this._http.deletePet(id)
  		observable.subscribe(data=> {
  			
  			this._router.navigate(['/'])
  		})
  	}
    // like(id: any){
    //   let observable = this._http.likePet(id)
    //   observable.subscribe(data=> {
        
    //   })
    // }
}
