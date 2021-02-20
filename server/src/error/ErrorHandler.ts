export class ErrorHandler extends Error {
  status;
  message;
  constructor(status: number = 500, message: string = 'Server Error') {
    super(message);
    this.status = status;
    this.message = message;
  }
}