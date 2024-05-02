$version: "2.0"

namespace gopal

@http(
    method: "POST",
    uri: "/v1/plantrip",
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
  startDate: Timestamp
  @required
  endDate: Timestamp
  @required
  numOfPeople: Integer
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

list PlanningDays {
  member: PlanningDay
}

structure PlaceToStay {
  @required
  name: String
  @range(min: 1, max: 10)
  reviewScore: Float
  numOfReviews: Integer
  suggestedPrice: BigDecimal
  currency: String
}

structure PlanningDay {
  dayNumber: Integer
  title: String
  location: String
  locationImageUrl: String
  description: String
}
