/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetItineraryRequestContent } from '../models/GetItineraryRequestContent';
import type { GetItineraryResponseContent } from '../models/GetItineraryResponseContent';
import type { SearchDestinationResponseContent } from '../models/SearchDestinationResponseContent';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * This API returns an AI generated trip planning from input
     * @param requestBody
     * @returns GetItineraryResponseContent GetItinerary 200 response
     * @throws ApiError
     */
    public getItinerary(
        requestBody: GetItineraryRequestContent,
    ): CancelablePromise<GetItineraryResponseContent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/get-itinerary',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `NotFoundException 404 response`,
                501: `TerminalException 501 response`,
            },
        });
    }
    /**
     * This is to return search destination
     * @param effectiveOn Names of locations, cities, districts, places, countries, counties etc.
     * @returns SearchDestinationResponseContent SearchDestination 200 response
     * @throws ApiError
     */
    public searchDestination(
        effectiveOn?: string,
    ): CancelablePromise<SearchDestinationResponseContent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/search-destination',
            query: {
                'effectiveOn': effectiveOn,
            },
            errors: {
                404: `NotFoundException 404 response`,
                501: `TerminalException 501 response`,
            },
        });
    }
}
