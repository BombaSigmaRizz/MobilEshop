import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"

export interface User {
  fullName: string
  email: string
  password: string
}

class API {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3333'
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

export const api = new API()