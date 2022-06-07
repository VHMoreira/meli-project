import { axiosClientFactory } from '@/main/factories/http'
import { LoadItemsSearch } from '@/domain/usecases'
import { RemoteLoadItemsSearch } from '@/data/usecases'

export const LoadItemsSearchFactory = (): LoadItemsSearch =>
    new RemoteLoadItemsSearch('http://localhost:8080/api/items', axiosClientFactory())