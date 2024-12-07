// @ts-nocheck
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { FetchError } from "@medusajs/js-sdk"
import { HttpTypes } from "@medusajs/types"
import { apiClient } from "../client"

export const useSignInWithEmailPass = (
  options?: UseMutationOptions<
    string,
    FetchError,
    HttpTypes.AdminSignUpWithEmailPassword
  >
) => {
  return useMutation({
    mutationFn: (payload) => apiClient.auth.login("user", "emailpass", payload),
    onSuccess: async (data, variables, context) => {
      options?.onSuccess?.(data, variables, context)
    },
    ...options,
  })
}

export const useSignUpWithEmailPass = (
  options?: UseMutationOptions<
    string,
    FetchError,
    HttpTypes.AdminSignInWithEmailPassword
  >
) => {
  return useMutation({
    mutationFn: (payload) =>
      apiClient.auth.register("user", "emailpass", payload),
    onSuccess: async (data, variables, context) => {
      options?.onSuccess?.(data, variables, context)
    },
    ...options,
  })
}

export const useResetPasswordForEmailPass = (
  options?: UseMutationOptions<void, FetchError, { email: string }>
) => {
  return useMutation({
    mutationFn: (payload) =>
      apiClient.auth.resetPassword("user", "emailpass", {
        identifier: payload.email,
      }),
    onSuccess: async (data, variables, context) => {
      options?.onSuccess?.(data, variables, context)
    },
    ...options,
  })
}

export const useLogout = (options?: UseMutationOptions<void, FetchError>) => {
  return useMutation({
    mutationFn: () => apiClient.auth.logout(),
    ...options,
  })
}

// export const useUpdateProviderForEmailPass = (
//   options?: UseMutationOptions<void, FetchError, { password: string }>
// ) => {
//   return useMutation({
//     mutationFn: (payload) =>
//       apiClient.auth.updateProvider("user", "emailpass", payload),
//     onSuccess: async (data, variables, context) => {
//       options?.onSuccess?.(data, variables, context)
//     },
//     ...options,
//   })
// }
