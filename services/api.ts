import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"

export type ApiOptions = {
  url: string
  headers?: Record<string, string>
}

export class Api {
  private client: AxiosInstance

  constructor(private options: ApiOptions) {
    this.client = axios.create({
      baseURL: this.options.url,
      withCredentials: true,
      headers: this.options.headers
    })
  }

  async request<T = any>(options: AxiosRequestConfig) {
    const response = await this.client.request<T>(options)

    return response.data
  }

  async get<T = any>(url: string, params?: Record<string, any>, options?: AxiosRequestConfig) {
    const response = await this.client.request<T>({
      ...options,
      method: 'GET',
      url,
      params
    })

    return response.data
  }

  async post<T = any>(url: string, data?: unknown, options?: AxiosRequestConfig) {
    const response = await this.client.request<T>({
      ...options,
      method: 'POST',
      url,
      data
    })

    return response.data
  }

  async delete(url: string, options?: AxiosRequestConfig) {
    const response = await this.client.request({
      ...options,
      method: 'DELETE',
      url
    })

    return response.data
  }

  async $request<T = any>(options: AxiosRequestConfig) {
    const response = await this.client.request<T>(options)

    return response
  }

  async $get<T = any>(url: string, params?: Record<string, any>, options?: AxiosRequestConfig) {
    const response = await this.client.request<T>({
      ...options,
      method: 'GET',
      url,
      params
    })

    return response
  }

  async $post<T = any>(url: string, data?: unknown, options?: AxiosRequestConfig) {
    const response = await this.client.request<T>({
      ...options,
      method: 'POST',
      url,
      data
    })

    return response
  }

  async $delete(url: string, options?: AxiosRequestConfig) {
    const response = await this.client.request({
      ...options,
      method: 'DELETE',
      url
    })

    return response
  }

}
