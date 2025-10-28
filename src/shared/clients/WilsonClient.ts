import type { AxiosPromise } from "axios";
import { HTTPClient } from "@shared/clients/Client.ts";

export interface Profile {
  id: string;
  name: string;
  level: number;
  gold: number;
}

export interface CreateProfile {
  name: string;
}

class WilsonClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = "/api";
  }

  public GetProfiles = async (): Promise<AxiosPromise<Profile[]>> => {
    return HTTPClient.get(this.baseUrl + "/v1/profiles");
  };

  public CreateProfile = async (
    request: CreateProfile,
  ): Promise<AxiosPromise<Profile>> => {
    return HTTPClient.post(this.baseUrl + "/v1/profiles", request);
  };
}

export const StrandedClient = new WilsonClient();
