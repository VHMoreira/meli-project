import { AxiosClient } from '@/infra/http'

export const axiosClientFactory = (): AxiosClient => new AxiosClient()