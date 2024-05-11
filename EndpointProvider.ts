export const Stage = {
  alpha: 'alpha'
}

export const Region = {
  usWest2: 'us-west-2',
}

export class EndpointProvider {
  // Define the endpoint table as a static property if no instance-specific data is required
  private static endpointTable = new Map<string, Map<String, string>>();

  constructor() {
    // Initialize the endpoint table in the constructor or a static initializer
    EndpointProvider.setEndpoint(Stage.alpha, Region.usWest2, "https://tn50uc6px2.execute-api.us-west-2.amazonaws.com/prod");
  }

  // Static method to set values in the table
  private static setEndpoint(stage: string, region: string, url: string): void {
    if (!this.endpointTable.has(stage)) {
      this.endpointTable.set(stage, new Map<string, string>());
    }
    this.endpointTable.get(stage)?.set(region, url);
  }

  // Static method to get endpoints
  public static getEndpoint(stage: string, region: string): string | undefined {
    return this.endpointTable.get(stage)?.get(region);
  }
}
