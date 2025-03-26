import type { Api } from "~/services/api";

export function useApi() {
  return useNuxtApp().$api as Api
}