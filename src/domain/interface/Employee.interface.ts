
export interface IFEmployee
 {
    findAll(): Promise<any[]>;
    createEmployee(formData: any): Promise<any>;
}