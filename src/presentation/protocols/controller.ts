export interface Controller {
  handle(request: Request): Promise<Response>;
}
export interface Response {
  statusCode: number;
  data: any;
}
export interface Request {
  body: any;
  params: any;
}
