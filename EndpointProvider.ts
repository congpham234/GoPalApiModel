export enum Stage {
  alpha = 'alpha',
}

export enum Region {
  usWest2 = 'us-west-2',
}

export class EndpointProvider {
  // Define the endpoint table as a static property if no instance-specific data is required
  private static endpointTable = new Map<Stage, Map<Region, string>>();

  constructor() {
    // Initialize the endpoint table in the constructor or a static initializer
    EndpointProvider.setEndpoint(Stage.alpha, Region.usWest2, "https://tn50uc6px2.execute-api.us-west-2.amazonaws.com/prod/");
  }

  // Static method to set values in the table
  private static setEndpoint(stage: Stage, region: Region, url: string): void {
    if (!this.endpointTable.has(stage)) {
      this.endpointTable.set(stage, new Map<Region, string>());
    }
    this.endpointTable.get(stage)?.set(region, url);
  }

  // Static method to get endpoints
  public static getEndpoint(stage: Stage, region: Region): string | undefined {
    return this.endpointTable.get(stage)?.get(region);
  }
}
