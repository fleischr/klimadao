import type {
  SWRMutationConfiguration,
  SWRMutationResponse,
} from "swr/mutation";
import useSWRMutation from "swr/mutation";
import type { ResponseConfig } from "../../../lib/api/client";
import client from "../../../lib/api/client";
import type {
  PostLoginVerifyMutationRequest,
  PostLoginVerifyMutationResponse,
} from "../types/PostLoginVerify";

/**
 * @description Provide a signed hash to receive a JWT token to be consumed by PUT or POST requests.
 * @summary Verify signed data
 * @link /login/verify
 */

export function usePostLoginVerify<
  TData = PostLoginVerifyMutationResponse,
  TError = unknown,
  TVariables = PostLoginVerifyMutationRequest,
>(options?: {
  mutation?: SWRMutationConfiguration<
    ResponseConfig<TData>,
    TError,
    string | null,
    TVariables
  >;
  client?: Partial<Parameters<typeof client<TData, TError, TVariables>>[0]>;
  shouldFetch?: boolean;
}): SWRMutationResponse<
  ResponseConfig<TData>,
  TError,
  string | null,
  TVariables
> {
  const {
    mutation: mutationOptions,
    client: clientOptions = {},
    shouldFetch = true,
  } = options ?? {};

  const url = shouldFetch ? `/login/verify` : null;
  return useSWRMutation<
    ResponseConfig<TData>,
    TError,
    string | null,
    TVariables
  >(
    url,
    (url, { arg: data }) => {
      return client<TData, TError, TVariables>({
        method: "post",
        url,
        data,

        ...clientOptions,
      });
    },
    mutationOptions
  );
}