import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
		// this.getTasks();
		// this.getATasks("5b228dc9b37cb6125b1d01bb");
	}
	getPets(){
		// let tempObservable = this._http.get('/tasks');

		// tempObservable.subscribe(data=> console.log('This is magic!', data));
		return this._http.get('/api/pets')
	}
	getAPet(id){
	 	// let tempObservable = this._http.get('/api/authors/'+id)

	 	// tempObservable.subscribe(data=> console.log('More magic!', data));
		return this._http.get('/api/pets/'+id)
	}
	
	addPet(newPet){
	return this._http.post('/api/pets', newPet)
	}
	deletePet(id){
		return this._http.delete('/api/pets/'+id)
	}
	editPet(id, editAPet){
	
		return this._http.put('/api/pets/'+id+'/edit', editAPet)
	}
	// likePet(id){
	// 	return this._http.put
	// }
}
