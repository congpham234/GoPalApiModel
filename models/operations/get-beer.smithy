$version: "2.0"

namespace gopal

@readonly
@http(
    method: "GET",
    uri: "/v1/get-beer",
    code: 200,
)
@documentation("This is a health check api")
operation GetBeer {
  output: GetBeerResponse
}

@output
structure GetBeerResponse {
  beer: String
}
