import * as request from 'request';
import { User } from './users';

//request library returns the response body as a string by default. it needs to be parsed
// as a JSON object in order to access its properties. 

export class GithubApiService{
    getUserInfo(userName:string){
        let options: any = {
            headers:{
                'User-Agent':'request'
            }
        }
        request.get('https://api.github.com/users/'+userName, options, (error:any, response:any, body:any)=>{
        // console.log(error);    
        // console.log(response);
        //console.log(body);
        let user = new User(body);
        })
    }

    getRepos(){

    }
}