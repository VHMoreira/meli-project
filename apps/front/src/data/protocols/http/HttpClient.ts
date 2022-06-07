export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
    ok = 200,
    serverError = 500
}

export type HttpRequest = {
    url: string
    method: HttpMethod,
    body?: any
}

export type HttpResponse<T = any> = {
    statusCode: HttpStatusCode
    body?: T
}

export interface HttpClient<R = any> {
    request(params: HttpRequest): Promise<HttpResponse<R>>
}