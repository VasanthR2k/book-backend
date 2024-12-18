


export interface logininterface {
    findAll(): Promise<any[]>;
    finddata(formdata:any):Promise<any[]>;
    findpastroalldata():Promise<any>;
    pastrotoken(formdata:any):Promise<any[]>;
}