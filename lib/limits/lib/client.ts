/**
 * Service Limits APIs
 * APIs that interact with the resource limits of a specific resource type.
 * OpenAPI spec version: 20181025
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { QuotasWaiter } from "./quotas-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum LimitsApiKeys {}

export class LimitsClient {
  protected static serviceEndpointTemplate = "https://limits.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    if (this.logger) this.logger.info(`LimitsClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      LimitsClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      LimitsClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * For a given compartmentId, resource limit name, and scope, returns the following:
   *   * The number of available resources associated with the given limit.
   *   * The usage in the selected compartment for the given limit.
   *   Note that not all resource limits support this API. If the value is not available, the API returns a 404 response.
   *
   * @param GetResourceAvailabilityRequest
   * @return GetResourceAvailabilityResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/GetResourceAvailability.ts.html |here} to see how to use GetResourceAvailability API.
   */
  public async getResourceAvailability(
    getResourceAvailabilityRequest: requests.GetResourceAvailabilityRequest
  ): Promise<responses.GetResourceAvailabilityResponse> {
    if (this.logger) this.logger.debug("Calling operation LimitsClient#getResourceAvailability.");
    const pathParams = {
      "{serviceName}": getResourceAvailabilityRequest.serviceName,
      "{limitName}": getResourceAvailabilityRequest.limitName
    };

    const queryParams = {
      "compartmentId": getResourceAvailabilityRequest.compartmentId,
      "availabilityDomain": getResourceAvailabilityRequest.availabilityDomain
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getResourceAvailabilityRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getResourceAvailabilityRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20190729/services/{serviceName}/limits/{limitName}/resourceAvailability",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetResourceAvailabilityResponse>{},
        body: await response.json(),
        bodyKey: "resourceAvailability",
        bodyModel: model.ResourceAvailability,
        type: "model.ResourceAvailability",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Includes a list of resource limits that are currently supported.
   * If the 'areQuotasSupported' property is true, you can create quota policies on top of this limit at the
   * compartment level.
   *
   * @param ListLimitDefinitionsRequest
   * @return ListLimitDefinitionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/ListLimitDefinitions.ts.html |here} to see how to use ListLimitDefinitions API.
   */
  public async listLimitDefinitions(
    listLimitDefinitionsRequest: requests.ListLimitDefinitionsRequest
  ): Promise<responses.ListLimitDefinitionsResponse> {
    if (this.logger) this.logger.debug("Calling operation LimitsClient#listLimitDefinitions.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listLimitDefinitionsRequest.compartmentId,
      "serviceName": listLimitDefinitionsRequest.serviceName,
      "name": listLimitDefinitionsRequest.name,
      "sortBy": listLimitDefinitionsRequest.sortBy,
      "sortOrder": listLimitDefinitionsRequest.sortOrder,
      "limit": listLimitDefinitionsRequest.limit,
      "page": listLimitDefinitionsRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listLimitDefinitionsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listLimitDefinitionsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20190729/limitDefinitions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListLimitDefinitionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.LimitDefinitionSummary,
        type: "Array<model.LimitDefinitionSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listLimitDefinitionsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.LimitDefinitionSummary objects
   * contained in responses from the listLimitDefinitions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllLimitDefinitions(
    request: requests.ListLimitDefinitionsRequest
  ): AsyncIterableIterator<model.LimitDefinitionSummary> {
    return paginateRecords(request, req => this.listLimitDefinitions(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listLimitDefinitionsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listLimitDefinitions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllLimitDefinitionsResponses(
    request: requests.ListLimitDefinitionsRequest
  ): AsyncIterableIterator<responses.ListLimitDefinitionsResponse> {
    return paginateResponses(request, req => this.listLimitDefinitions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.LimitDefinitionSummary objects
   * contained in responses from the listLimitDefinitions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listLimitDefinitionsRecordIterator(
    request: requests.ListLimitDefinitionsRequest
  ): AsyncIterableIterator<model.LimitDefinitionSummary> {
    return paginateRecords(request, req => this.listLimitDefinitions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listLimitDefinitions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listLimitDefinitionsResponseIterator(
    request: requests.ListLimitDefinitionsRequest
  ): AsyncIterableIterator<responses.ListLimitDefinitionsResponse> {
    return paginateResponses(request, req => this.listLimitDefinitions(req));
  }

  /**
   * Includes a full list of resource limits belonging to a given service.
   *
   * @param ListLimitValuesRequest
   * @return ListLimitValuesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/ListLimitValues.ts.html |here} to see how to use ListLimitValues API.
   */
  public async listLimitValues(
    listLimitValuesRequest: requests.ListLimitValuesRequest
  ): Promise<responses.ListLimitValuesResponse> {
    if (this.logger) this.logger.debug("Calling operation LimitsClient#listLimitValues.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listLimitValuesRequest.compartmentId,
      "serviceName": listLimitValuesRequest.serviceName,
      "scopeType": listLimitValuesRequest.scopeType,
      "availabilityDomain": listLimitValuesRequest.availabilityDomain,
      "name": listLimitValuesRequest.name,
      "sortBy": listLimitValuesRequest.sortBy,
      "sortOrder": listLimitValuesRequest.sortOrder,
      "limit": listLimitValuesRequest.limit,
      "page": listLimitValuesRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listLimitValuesRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listLimitValuesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20190729/limitValues",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListLimitValuesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.LimitValueSummary,
        type: "Array<model.LimitValueSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listLimitValuesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.LimitValueSummary objects
   * contained in responses from the listLimitValues operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllLimitValues(
    request: requests.ListLimitValuesRequest
  ): AsyncIterableIterator<model.LimitValueSummary> {
    return paginateRecords(request, req => this.listLimitValues(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listLimitValuesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listLimitValues operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllLimitValuesResponses(
    request: requests.ListLimitValuesRequest
  ): AsyncIterableIterator<responses.ListLimitValuesResponse> {
    return paginateResponses(request, req => this.listLimitValues(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.LimitValueSummary objects
   * contained in responses from the listLimitValues operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listLimitValuesRecordIterator(
    request: requests.ListLimitValuesRequest
  ): AsyncIterableIterator<model.LimitValueSummary> {
    return paginateRecords(request, req => this.listLimitValues(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listLimitValues operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listLimitValuesResponseIterator(
    request: requests.ListLimitValuesRequest
  ): AsyncIterableIterator<responses.ListLimitValuesResponse> {
    return paginateResponses(request, req => this.listLimitValues(req));
  }

  /**
   * Returns the list of supported services.
   * This includes the programmatic service name, along with the friendly service name.
   *
   * @param ListServicesRequest
   * @return ListServicesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/ListServices.ts.html |here} to see how to use ListServices API.
   */
  public async listServices(
    listServicesRequest: requests.ListServicesRequest
  ): Promise<responses.ListServicesResponse> {
    if (this.logger) this.logger.debug("Calling operation LimitsClient#listServices.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listServicesRequest.compartmentId,
      "sortBy": listServicesRequest.sortBy,
      "sortOrder": listServicesRequest.sortOrder,
      "limit": listServicesRequest.limit,
      "page": listServicesRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listServicesRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listServicesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20190729/services",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListServicesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.ServiceSummary,
        type: "Array<model.ServiceSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listServicesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.ServiceSummary objects
   * contained in responses from the listServices operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllServices(
    request: requests.ListServicesRequest
  ): AsyncIterableIterator<model.ServiceSummary> {
    return paginateRecords(request, req => this.listServices(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listServicesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listServices operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllServicesResponses(
    request: requests.ListServicesRequest
  ): AsyncIterableIterator<responses.ListServicesResponse> {
    return paginateResponses(request, req => this.listServices(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.ServiceSummary objects
   * contained in responses from the listServices operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listServicesRecordIterator(
    request: requests.ListServicesRequest
  ): AsyncIterableIterator<model.ServiceSummary> {
    return paginateRecords(request, req => this.listServices(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listServices operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listServicesResponseIterator(
    request: requests.ListServicesRequest
  ): AsyncIterableIterator<responses.ListServicesResponse> {
    return paginateResponses(request, req => this.listServices(req));
  }
}
export enum QuotasApiKeys {}

export class QuotasClient {
  protected static serviceEndpointTemplate = "https://limits.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": QuotasWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    if (this.logger) this.logger.info(`QuotasClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      QuotasClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      QuotasClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new QuotasWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): QuotasWaiter {
    this._waiters = new QuotasWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): QuotasWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Creates a new quota with the details supplied.
   * @param CreateQuotaRequest
   * @return CreateQuotaResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/CreateQuota.ts.html |here} to see how to use CreateQuota API.
   */
  public async createQuota(
    createQuotaRequest: requests.CreateQuotaRequest
  ): Promise<responses.CreateQuotaResponse> {
    if (this.logger) this.logger.debug("Calling operation QuotasClient#createQuota.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createQuotaRequest.opcRequestId,
      "opc-retry-token": createQuotaRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createQuotaRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20181025/quotas",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createQuotaRequest.createQuotaDetails,
        "CreateQuotaDetails",
        model.CreateQuotaDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateQuotaResponse>{},
        body: await response.json(),
        bodyKey: "quota",
        bodyModel: model.Quota,
        type: "model.Quota",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes the quota corresponding to the given OCID.
   * @param DeleteQuotaRequest
   * @return DeleteQuotaResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/DeleteQuota.ts.html |here} to see how to use DeleteQuota API.
   */
  public async deleteQuota(
    deleteQuotaRequest: requests.DeleteQuotaRequest
  ): Promise<responses.DeleteQuotaResponse> {
    if (this.logger) this.logger.debug("Calling operation QuotasClient#deleteQuota.");
    const pathParams = {
      "{quotaId}": deleteQuotaRequest.quotaId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": deleteQuotaRequest.opcRequestId,
      "if-match": deleteQuotaRequest.ifMatch
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteQuotaRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20181025/quotas/{quotaId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteQuotaResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the quota for the OCID specified.
   * @param GetQuotaRequest
   * @return GetQuotaResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/GetQuota.ts.html |here} to see how to use GetQuota API.
   */
  public async getQuota(
    getQuotaRequest: requests.GetQuotaRequest
  ): Promise<responses.GetQuotaResponse> {
    if (this.logger) this.logger.debug("Calling operation QuotasClient#getQuota.");
    const pathParams = {
      "{quotaId}": getQuotaRequest.quotaId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getQuotaRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getQuotaRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20181025/quotas/{quotaId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetQuotaResponse>{},
        body: await response.json(),
        bodyKey: "quota",
        bodyModel: model.Quota,
        type: "model.Quota",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists all quotas on resources from the given compartment.
   * @param ListQuotasRequest
   * @return ListQuotasResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/ListQuotas.ts.html |here} to see how to use ListQuotas API.
   */
  public async listQuotas(
    listQuotasRequest: requests.ListQuotasRequest
  ): Promise<responses.ListQuotasResponse> {
    if (this.logger) this.logger.debug("Calling operation QuotasClient#listQuotas.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listQuotasRequest.compartmentId,
      "page": listQuotasRequest.page,
      "limit": listQuotasRequest.limit,
      "name": listQuotasRequest.name,
      "lifecycleState": listQuotasRequest.lifecycleState,
      "sortOrder": listQuotasRequest.sortOrder,
      "sortBy": listQuotasRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listQuotasRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listQuotasRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20181025/quotas",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListQuotasResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.QuotaSummary,
        type: "Array<model.QuotaSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listQuotasRecordIterator function.
   * Creates a new async iterator which will iterate over the models.QuotaSummary objects
   * contained in responses from the listQuotas operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllQuotas(
    request: requests.ListQuotasRequest
  ): AsyncIterableIterator<model.QuotaSummary> {
    return paginateRecords(request, req => this.listQuotas(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listQuotasResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listQuotas operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllQuotasResponses(
    request: requests.ListQuotasRequest
  ): AsyncIterableIterator<responses.ListQuotasResponse> {
    return paginateResponses(request, req => this.listQuotas(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.QuotaSummary objects
   * contained in responses from the listQuotas operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listQuotasRecordIterator(
    request: requests.ListQuotasRequest
  ): AsyncIterableIterator<model.QuotaSummary> {
    return paginateRecords(request, req => this.listQuotas(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listQuotas operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listQuotasResponseIterator(
    request: requests.ListQuotasRequest
  ): AsyncIterableIterator<responses.ListQuotasResponse> {
    return paginateResponses(request, req => this.listQuotas(req));
  }

  /**
   * Updates the quota corresponding to given OCID with the details supplied.
   * @param UpdateQuotaRequest
   * @return UpdateQuotaResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/UpdateQuota.ts.html |here} to see how to use UpdateQuota API.
   */
  public async updateQuota(
    updateQuotaRequest: requests.UpdateQuotaRequest
  ): Promise<responses.UpdateQuotaResponse> {
    if (this.logger) this.logger.debug("Calling operation QuotasClient#updateQuota.");
    const pathParams = {
      "{quotaId}": updateQuotaRequest.quotaId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": updateQuotaRequest.opcRequestId,
      "if-match": updateQuotaRequest.ifMatch
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateQuotaRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/20181025/quotas/{quotaId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateQuotaRequest.updateQuotaDetails,
        "UpdateQuotaDetails",
        model.UpdateQuotaDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateQuotaResponse>{},
        body: await response.json(),
        bodyKey: "quota",
        bodyModel: model.Quota,
        type: "model.Quota",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
