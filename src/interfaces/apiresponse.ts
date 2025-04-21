export interface APIResponse {
  code: number;
  success: boolean;
  message: string;
  data?: string | unknown;
  count?: number;
}

export const toAPIResponse = (
  code: number,
  success: boolean,
  message: string,
  data?: string | unknown,
  count?: number
): APIResponse => {
  return {
    code,
    success,
    message,
    count: count,
    data: data,
  };
};
