interface ExtendedRequest extends Request {
  user: {
    sid: string;
    email: string;
  };
}
