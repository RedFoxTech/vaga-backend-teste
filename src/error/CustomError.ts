export class CustomError extends Error{
  public readonly statusCode:number;
  constructor(statusCode:number,message:string){
    super(message)
    this.statusCode = statusCode
  }
};