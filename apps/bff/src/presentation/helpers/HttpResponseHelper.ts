import { HttpResponse } from '@/presentation/protocols'
import { ServerError } from '../errors'

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})