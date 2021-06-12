import * as request from 'request';
import { Repo } from './Repo';
import { User } from './users';

//request library returns the response body as a string by default. it needs to be parsed
// as a JSON object in order to access its properties. 
const OPTIONS: any = {
    headers:{
        'User-Agent':'request'
    },
    json:true
}

export class GithubApiService{
    getUserInfo(userName:string, cb:(user:User)=>any){
        
        request.get('https://api.github.com/users/'+userName, OPTIONS, (error:any, response:any, body:any)=>{
            // console.log(error);    
            // console.log(response);
            //console.log(body);
        
            //let user = new User(JSON.parse(body));
            //adding json:true leads to noi use of parsing now
            let user = new User(body); 
            //console.log(user);
            cb(user);
        })
    }

    getRepos(userName:string, cb:(repoArray:Repo[])=>any){
        request.get('https://api.github.com/users/'+userName+'/repos', OPTIONS, (error:any, response:any, body:any)=>{
            let repos = body.map(
                (repo:any) => new Repo(repo)
            )  ;
            cb(repos);         
    })
}
}