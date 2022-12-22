let  User = { name: "Eduardo",
              age: 40,
              previous_coworkers:[{name:"Fernando",age:42},{name:"Alejandro",age:38},{name:"Jona",age:40}]   
            }
let UserJson = ('{"name":"Eduardo","age":40}');
interface User{name:string, age: number}; 
let UserObject: User = JSON.parse(UserJson);
            
console.log('User:::', UserObject.name);

/*class HttpResponse {
    _headers:any;
    _rawBody:any;

    get headers(){
        return this.headers;
    }

    set headers(headers: any){
        this._headers = headers;
    }
}*/

