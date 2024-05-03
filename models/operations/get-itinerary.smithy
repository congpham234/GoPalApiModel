$version: "2.0"

namespace gopal

@http(
    method: "POST",
    uri: "/v1/get-itinerary",
    code: 200,
)
@documentation("This API returns an AI generated trip planning from input")
operation GetItinerary {
    input: GetItineraryRequest
    output: GetItineraryResponse
    errors: [
      TerminalException
      NotFoundException
    ]
}

@input
structure GetItineraryRequest {
  @required
  destination: String
  @required
  startDate: Date
  @required
  endDate: Date
  @required
  numOfPeople: Integer
  @required
  country: String
}

@output
structure GetItineraryResponse {
  country: String
  destination: String
  destinationImageUrl: String
  placesToStay: PlacesToStay
  planningDays: PlanningDays
}

list PlacesToStay {
  member: PlaceToStay
}

structure PlaceToStay {
  @required
  name: String
  @range(min: 1, max: 10)
  reviewScore: Float
  reviewCount: Integer
  suggestedPrice: BigDecimal
  currency: String
  photoUrl: String
}

list PlanningDays {
  member: PlanningDay
}

structure PlanningDay {
  @required
  dayNumber: Integer
  @required
  title: String
  @required
  location: String
  @required
  description: String
  locationImageUrl: String
}
