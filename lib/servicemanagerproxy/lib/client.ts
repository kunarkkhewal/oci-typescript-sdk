/**
 * Service Manager Proxy API
 * Use the Service Manager Proxy API to obtain information about SaaS environments provisioned by Service Manager. 
You can get information such as service types and service environment URLs.

 * OpenAPI spec version: 20210914
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import {
  composeResponse,
  composeRequest,
  GenericRetrier,
  developerToolConfiguration
} from "oci-common";
const Breaker = require("opossum");

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ServiceManagerProxyApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ServiceManagerProxyClient {
  protected static serviceEndpointTemplate = "https://smproxy.{region}.ocs.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "ServiceManagerProxy";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

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
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }

    if (!developerToolConfiguration.isServiceEnabled("servicemanagerproxy")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("servicemanagerproxy");
    }

    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

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
    this._endpoint = this._endpoint + "/20210914";
    if (this.logger)
      this.logger.info(`ServiceManagerProxyClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        ServiceManagerProxyClient.serviceEndpointTemplate,
        this._region,
        ServiceManagerProxyClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        ServiceManagerProxyClient.serviceEndpointTemplate,
        this._regionId,
        ServiceManagerProxyClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      ServiceManagerProxyClient.serviceEndpointTemplate,
      region,
      ServiceManagerProxyClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
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
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      ServiceManagerProxyClient.serviceEndpointTemplate,
      regionId,
      ServiceManagerProxyClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * Get the detailed information for a specific service environment.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetServiceEnvironmentRequest
   * @return GetServiceEnvironmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/servicemanagerproxy/GetServiceEnvironment.ts.html |here} to see how to use GetServiceEnvironment API.
   */
  public async getServiceEnvironment(
    getServiceEnvironmentRequest: requests.GetServiceEnvironmentRequest
  ): Promise<responses.GetServiceEnvironmentResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceManagerProxyClient#getServiceEnvironment.");
    const operationName = "getServiceEnvironment";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/smp/20210914/ServiceEnvironment/GetServiceEnvironment";
    const pathParams = {
      "{serviceEnvironmentId}": getServiceEnvironmentRequest.serviceEnvironmentId
    };

    const queryParams = {
      "compartmentId": getServiceEnvironmentRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getServiceEnvironmentRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getServiceEnvironmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceEnvironments/{serviceEnvironmentId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetServiceEnvironmentResponse>{},
        body: await response.json(),
        bodyKey: "serviceEnvironment",
        bodyModel: model.ServiceEnvironment,
        type: "model.ServiceEnvironment",
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
   * List the details of Software as a Service (SaaS) environments provisioned by Service Manager.
   * Information includes the service instance endpoints and service definition details.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListServiceEnvironmentsRequest
   * @return ListServiceEnvironmentsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/servicemanagerproxy/ListServiceEnvironments.ts.html |here} to see how to use ListServiceEnvironments API.
   */
  public async listServiceEnvironments(
    listServiceEnvironmentsRequest: requests.ListServiceEnvironmentsRequest
  ): Promise<responses.ListServiceEnvironmentsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceManagerProxyClient#listServiceEnvironments.");
    const operationName = "listServiceEnvironments";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/smp/20210914/ServiceEnvironment/ListServiceEnvironments";
    const pathParams = {};

    const queryParams = {
      "serviceEnvironmentId": listServiceEnvironmentsRequest.serviceEnvironmentId,
      "serviceEnvironmentType": listServiceEnvironmentsRequest.serviceEnvironmentType,
      "compartmentId": listServiceEnvironmentsRequest.compartmentId,
      "limit": listServiceEnvironmentsRequest.limit,
      "page": listServiceEnvironmentsRequest.page,
      "sortBy": listServiceEnvironmentsRequest.sortBy,
      "sortOrder": listServiceEnvironmentsRequest.sortOrder,
      "displayName": listServiceEnvironmentsRequest.displayName
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listServiceEnvironmentsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listServiceEnvironmentsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceEnvironments",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListServiceEnvironmentsResponse>{},
        body: await response.json(),
        bodyKey: "serviceEnvironmentCollection",
        bodyModel: model.ServiceEnvironmentCollection,
        type: "model.ServiceEnvironmentCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
