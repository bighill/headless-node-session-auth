interface Params {
  message: string;
  error?: string | null;
  data?: any;
}

interface GlobalResponse {
  message: string;
  error: string | null;
  data: any;
}

export default (p: Params) => {
  return <GlobalResponse>{
    message: p.message,
    error: p.error || null,
    data: p.data || null,
  };
};
