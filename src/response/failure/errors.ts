import {
    FailureError,
    isFailureErrorWithCode,
    FailureErrorFactory as factory
} from "../failure"

export type ParseError = FailureError<typeof PARSE_ERROR>
export type InvalidRequest = FailureError<typeof INVALID_REQUEST>
export type MethodNotFound = FailureError<typeof METHOD_NOT_FOUND>
export type InvalidParams = FailureError<typeof INVALID_PARAMS>
export type InternalError = FailureError<typeof INTERNAL_ERROR>

export const PARSE_ERROR = -32700
export const INVALID_REQUEST = -32600
export const METHOD_NOT_FOUND = -32601
export const INVALID_PARAMS = -32602
export const INTERNAL_ERROR = -32603

export const ParseError = factory(PARSE_ERROR, "Parse error")
export const InvalidRequest = factory(INVALID_REQUEST, "Invalid request")
export const MethodNotFound = factory(METHOD_NOT_FOUND, "Method not found")
export const InvalidParams = factory(INVALID_PARAMS, "Invalid params")
export const InternalError = factory(INTERNAL_ERROR, "Internal error")

export const isParseError = isFailureErrorWithCode(PARSE_ERROR)
export const isInvalidRequest = isFailureErrorWithCode(INVALID_REQUEST)
export const isMethodNotFound = isFailureErrorWithCode(METHOD_NOT_FOUND)
export const isInvalidParams = isFailureErrorWithCode(INVALID_PARAMS)
export const isInternalError = isFailureErrorWithCode(INTERNAL_ERROR)