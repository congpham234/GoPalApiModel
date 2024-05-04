$version: "2.0"

namespace gopal

use aws.protocols#restJson1

/// Provides GoPal API Model
@restJson1
@title("GoPal API Model")
service GoPal {
    version: "2024-05-01"
    operations: [
        GetItinerary
        SearchDestination
    ]
}
