export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}