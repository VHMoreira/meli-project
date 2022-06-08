import { axiosClientFactory } from '@/main/factories/http'
import { LoadItemDetails } from '@/domain/usecases'
import { RemoteLoadItemDetails } from '@/data/usecases'

export const LoadItemDetailsFactory = (): LoadItemDetails =>
    new RemoteLoadItemDetails('http://localhost:8080/api/items', axiosClientFactory())