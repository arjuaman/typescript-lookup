import {GithubApiService} from './GithubAPIService';
import { Repo } from './Repo';
import { User } from './users';
import * as _ from 'lodash';

let svc = new GithubApiService();
if(process.argv.length < 3){
    console.log('Please pass username as argument');
}
else{
    let username = process.argv[2];
    svc.getUserInfo('arjuaman',(user:User)=>{
        svc.getRepos('arjuaman',(repos:Repo[])=>{
            let sortedRepos = _.sortBy(repos,[(repo:Repo)=>repo.size * -1])  //sorted in descending order of size
            //now pick top 5
            let filteredRepos = _.take(sortedRepos,5);
            user.repos = filteredRepos;
            console.log(user);
        }); 
    });
    
}

//call using npm start arjuaman