import { HttpClient, HttpRequest, HttpResponse } from "@/data/protocols/http/HttpClient";
import axios, { AxiosResponse } from 'axios'

export class AxiosClient implements HttpClient {
    async request({ url, method, body }: HttpRequest): Promise<HttpResponse> {
        let response: AxiosResponse
        try {
            response = await axios.request({
                url,
                method,
                data: body
            })
        } catch (error) {
            response = error.response
        }

        return {
            statusCode: response.status,
            body: response.data
        }
    }
}