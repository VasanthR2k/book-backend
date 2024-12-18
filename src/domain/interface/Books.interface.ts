

export interface IFBooks {
  findAll(): Promise<any[]>;
  findById(id: number): Promise<any>;
  createBooks(formData: any, file: any): Promise<any>;
  updateBooks(id: number, formData: any,file:any): Promise<any>;
  deletBooks(id: number): Promise<any>;
  findCount(): Promise<any>;
  findsametitle(title: string): Promise<any>;
  filterdata(formData: any): Promise<any>;
  filterdatacount(formData: any): Promise<any>;
  uploadfile(formdata: any): Promise<any>;
  removefile(formdata:any):Promise<any>
 
}
