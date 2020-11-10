import { Request } from "express";

interface Params {
  request: Request;
  message: string;
  error?: string | null;
  data?: any;
}

interface GlobalResponse {
  request: string;
  message: string;
  error: string | null;
  data: any;
}

export default (p: Params) => {
  return <GlobalResponse>{
    request: `${p.request.method} ${p.request.originalUrl}`,
    message: p.message,
    error: p.error || null,
    data: p.data || null,
  };
};
