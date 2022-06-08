import { Item } from "@/domain/models";
import { LoadItemDetails } from "@/domain/usecases"
import { HttpClient, HttpStatusCode } from "../protocols/http/HttpClient";

export class RemoteLoadItemDetails implements LoadItemDetails {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLoadItemDetails.Model>
    ) { }

    async load({ id }: LoadItemDetails.Params): Promise<RemoteLoadItemDetails.Model> {
        const response = await this.httpClient.request({
            url: `${this.url}/${id}`,
            method: 'get'
        })

        const Item = response.body

        if (response.statusCode === HttpStatusCode.serverError) {
            throw new Error('Unexpected Server Error')
        }

        return Item
    }
}

export namespace RemoteLoadItemDetails {
    export type Model = Item
}