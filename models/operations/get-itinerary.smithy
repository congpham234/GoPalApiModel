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
  destination: Destination
  @required
  startDate: Date
  @required
  endDate: Date
  @required
  numOfPeople: Integer
}

@output
structure GetItineraryResponse {
  placesToStay: PlacesToStay
  @required
  planningDays: Days
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
  distanceFromCenter: String
  imageUrl1024x768: String
}

list Days {
  member: Day
}

structure Day {
  @required
  dayNumber: Integer
  @required
  activities: Activities
}

list Activities {
  member: Activity
}

structure Activity {
  @required
  activityName: String
  @required
  location: String
  @required
  description: String
  detail: ActivityDetail
}

structure ActivityDetail {
  photoUri: String
  latitude: Integer
  longitude: Integer
  goodForChildren: Boolean
  allowsDogs: Boolean
  wheelchairAccessibleParking: Boolean
  wheelchairAccessibleEntrance: Boolean
  websiteUri: String
}
