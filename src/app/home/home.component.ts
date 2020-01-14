import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	title:string = "Create Routes";
	
	routesArr:any = [
		// {
	 //    	start:"DGL",
	 //    	mid:["MDU", "TYR"],
	 //    	end:"TJR",
	 //    }
	];
	routes:any = {};

  	constructor() { }

  	ngOnInit() {
  		console.log(this.routesArr);	
  	}

  	routeCreation(){
  		console.log(this.routes);

		let isExist = 'false';
		this.routesArr.map((value, key) => {
         	if (value.end === this.routes.start.toUpperCase()){
            	this.routesArr[key].start = value.start;
            	this.routesArr[key].mid.push(value.end);
            	this.routesArr[key].end = this.routes.end.toUpperCase();
          		isExist = 'true';
          	}
        });
	
		if(isExist === 'false'){
			let newRoutes = {
		    	start:this.routes.start.toUpperCase(),
		    	mid:[],
		    	end:this.routes.end.toUpperCase(),
		    }
			this.routesArr.push(newRoutes);
		}

  		console.log(this.routesArr);
  	
  	}

}




// 		if (this.routesArr.some(
  // 			(route) => route.end == this.routes.start)) {
		//     let extRoutes = {
		//     	start: route.start,
		//     }
		//     this.categories.push(newCategory);
		// }else{
		// 	this.routesArr.push(this.routes);
		// }



// let extRoutes = {};
		// let isExist = 'false';
		// this.routesArr.forEach((value, key) => {
  //           if(value.end === this.routes.start){
  //           	isExist = 'true';		
  //           	extRoutes = {
		//     		start: value.start,
		//     		mid:value.end,
		//     		end:this.routes.end,
		//     	}
  //           }
  //       });
		
		// if(isExist === 'true'){

		// }else{
		// 	this.routesArr.push(this.routes);
		// }