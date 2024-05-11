/* istanbul ignore file */
export const Stage = {
  alpha: 'alpha'
};

export const Region = {
  usWest2: 'us-west-2',
};

/* eslint-disable */
export class EndpointProvider {
  // Define the endpoint table as a static property if no instance-specific data is required
  static endpointTable = new Map();

  constructor() {
    // Initialize the endpoint table in the constructor or a static initializer
    EndpointProvider.setEndpoint(Stage.alpha, Region.usWest2, "https://tn50uc6px2.execute-api.us-west-2.amazonaws.com/prod");
  }

  // Static method to set values in the table
  static setEndpoint(stage, region, url) {
    if (!this.endpointTable.has(stage)) {
      this.endpointTable.set(stage, new Map());
    }
    this.endpointTable.get(stage).set(region, url);
  }

  // Static method to get endpoints
  static getEndpoint(stage, region) {
    return this.endpointTable.get(stage).get(region);
  }
}
