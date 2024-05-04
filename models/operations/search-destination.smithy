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
  destId: String
  destType: String
  cityName: String
  label: String
  region: String
  name: String
  country: String
  imageUrl: String
}
