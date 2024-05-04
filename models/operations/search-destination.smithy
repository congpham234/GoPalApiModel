$version: "2.0"

namespace gopal

@readonly
@http(
    method: "GET",
    uri: "/v1/search-destination",
    code: 200,
)
@documentation("This is to return search destination")
operation SearchDestination {
  input: SearchDestinationRequest
  output: SearchDestinationResponse
  errors: [
    TerminalException
    NotFoundException
  ]
}

@input
structure SearchDestinationRequest {
  @httpQuery("effectiveOn")
  @documentation("Names of locations, cities, districts, places, countries, counties etc.")
  query: String
}

@output
structure SearchDestinationResponse {
  destinations: Destinations
}

list Destinations {
  member: Destination
}

structure Destination {
  @required
  name: String
  @required
  destId: String
  @required
  destType: String
  @required
  label: String
  @required
  country: String
  @required
  imageUrl: String
  region: String
  cityName: String
}
