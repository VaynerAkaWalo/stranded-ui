import { HTTPClient } from "./Client.ts";
import type { AxiosPromise } from "axios";
import { authPath } from "@shared/path-utils.ts";

export interface Identity {
  name: string;
  id: string;
}

class BarricadeClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = authPath() + "/api";
  }

  public getIdentity = async (): Promise<AxiosPromise<Identity>> => {
    return HTTPClient.get(this.baseUrl + "/v1/whoami", {
      withCredentials: true,
    });
  };

  public logout = async (): Promise<AxiosPromise<void>> => {
    return HTTPClient.post(
      this.baseUrl + "/v1/logout",
      {},
      {
        withCredentials: true,
      },
    );
  };
}

export const AuthenticationClient = new BarricadeClient();
