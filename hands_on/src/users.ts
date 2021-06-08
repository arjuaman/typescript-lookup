import { Repo } from "./Repo";

export class User{
    login:string | undefined;
    fName:string | undefined;
    repoCount:number | undefined;
    followerCount:number | undefined;
    repos?: Repo[] | undefined;

    constructor(userResponse:any){
        this.login = userResponse.login;
        this.fName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this. = userResponse.login;
    }
}