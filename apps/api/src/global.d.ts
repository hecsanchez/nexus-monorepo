interface ExtendedRequest extends Request {
  user: {
    id: string;
    email: string;
  };
}
