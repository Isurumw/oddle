class NetworkManager implements INetworkManager {
  private base: string;
  private fetch: (
    input: RequestInfo,
    init?: RequestInit | undefined,
  ) => Promise<Response>;
  private token?: string;

  public constructor(
    base: string,
    fetch: any,
    token?: string,
    account?: string,
  ) {
    this.fetch = fetch;
    this.token = token;
    this.base = `${base}${account ? `${account}/` : ''}`;
  }

  public async request<T>(
    query: string,
    variables?: object,
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
  ): Promise<T> {
    try {
      const isGraph = !method;
      const url = `${this.base}${!isGraph ? query : ''}`;

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };

      let body: {} = {};

      if (isGraph) {
        body = {
          query,
        };
      }

      if (variables && isGraph) {
        body = {
          ...body,
          variables,
        };
      }

      if (this.token) {
        headers = {
          ...headers,
          ...{Authorization: `${isGraph ? 'Bearer ' : ''}${this.token}`},
        };
      }

      const result = await this.fetch(url, {
        method: method ?? 'POST',
        headers,
        body:
          method !== 'GET' ? JSON.stringify(!isGraph ? variables : body) : null,
      });
      return result.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default NetworkManager;
