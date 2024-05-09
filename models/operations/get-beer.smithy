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
  input: GetBeerRequest
  output: GetBeerResponse
}

@input
structure GetBeerRequest {
  @httpQuery("query")
  query: String
}

@output
structure GetBeerResponse {
  beer: String
}
