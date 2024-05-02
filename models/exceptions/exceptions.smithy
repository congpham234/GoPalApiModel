$version: "2"

namespace gopal

@httpError(400)
@error("client")
@documentation("This exception is thrown when a given input is invalid.")
structure InvalidInputException {
    message: String
    keys: KeyValueErrors
}

map KeyValueErrors {
    key: String
    value: String
}

@httpError(404)
@error("client")
@documentation("This exception is thrown when a requested resource does not exist.")
structure NotFoundException {
    message: String,
}

// 501 is not considered retryable, and will not be retried by the Typescript client:
// "Transient errors (HTTP status codes 400, 408, 500, 502, 503, and 504) and throttling
// errors (HTTP status codes 400, 403, 429, 502, 503, and 509) can all be retried."
// (source: https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html)
@httpError(501)
@error("server")
@documentation("This exception is thrown when a dependency call has failed or an internal error occurs.")
structure TerminalException {
    message: String
}

@error("client")
@httpError(401)
@documentation("This exception is thrown when user is not authorized to perform the operation.")
structure UnauthorizedException {
    message: String
}
