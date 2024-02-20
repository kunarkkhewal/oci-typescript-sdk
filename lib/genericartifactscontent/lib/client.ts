/**
 * Generic Artifacts Content API
 * API covering the Generic Artifacts Service content
Use this API to put and get generic artifact content.

 * OpenAPI spec version: 20160918
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

export enum GenericArtifactsContentApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class GenericArtifactsContentClient {
  protected static serviceEndpointTemplate =
    "https://generic.artifacts.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "GenericArtifactsContent";
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

    if (!developerToolConfiguration.isServiceEnabled("genericartifactscontent")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("genericartifactscontent");
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
    this._endpoint = this._endpoint + "/20160918";
    if (this.logger)
      this.logger.info(`GenericArtifactsContentClient endpoint set to ${this._endpoint}`);
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
        GenericArtifactsContentClient.serviceEndpointTemplate,
        this._region,
        GenericArtifactsContentClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        GenericArtifactsContentClient.serviceEndpointTemplate,
        this._regionId,
        GenericArtifactsContentClient.endpointServiceName
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
      GenericArtifactsContentClient.serviceEndpointTemplate,
      region,
      GenericArtifactsContentClient.endpointServiceName
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
      GenericArtifactsContentClient.serviceEndpointTemplate,
      regionId,
      GenericArtifactsContentClient.endpointServiceName
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
   * Gets the specified artifact's content.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetGenericArtifactContentRequest
   * @return GetGenericArtifactContentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/genericartifactscontent/GetGenericArtifactContent.ts.html |here} to see how to use GetGenericArtifactContent API.
   */
  public async getGenericArtifactContent(
    getGenericArtifactContentRequest: requests.GetGenericArtifactContentRequest
  ): Promise<responses.GetGenericArtifactContentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation GenericArtifactsContentClient#getGenericArtifactContent."
      );
    const operationName = "getGenericArtifactContent";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/generic/20160918/GenericArtifact/GetGenericArtifactContent";
    const pathParams = {
      "{artifactId}": getGenericArtifactContentRequest.artifactId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getGenericArtifactContentRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getGenericArtifactContentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/generic/artifacts/{artifactId}/content",
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
        responseObject: <responses.GetGenericArtifactContentResponse>{},

        body: response.body!,
        bodyKey: "value",
        bodyModel: "string",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Gets the content of an artifact with a specified `artifactPath` and `version`.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetGenericArtifactContentByPathRequest
   * @return GetGenericArtifactContentByPathResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/genericartifactscontent/GetGenericArtifactContentByPath.ts.html |here} to see how to use GetGenericArtifactContentByPath API.
   */
  public async getGenericArtifactContentByPath(
    getGenericArtifactContentByPathRequest: requests.GetGenericArtifactContentByPathRequest
  ): Promise<responses.GetGenericArtifactContentByPathResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation GenericArtifactsContentClient#getGenericArtifactContentByPath."
      );
    const operationName = "getGenericArtifactContentByPath";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/generic/20160918/GenericArtifact/GetGenericArtifactContentByPath";
    const pathParams = {
      "{repositoryId}": getGenericArtifactContentByPathRequest.repositoryId,
      "{artifactPath}": getGenericArtifactContentByPathRequest.artifactPath,
      "{version}": getGenericArtifactContentByPathRequest.version
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getGenericArtifactContentByPathRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getGenericArtifactContentByPathRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path:
        "/generic/repositories/{repositoryId}/artifactPaths/{artifactPath}/versions/{version}/content",
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
        responseObject: <responses.GetGenericArtifactContentByPathResponse>{},

        body: response.body!,
        bodyKey: "value",
        bodyModel: "string",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Uploads an artifact. Provide `artifactPath`, `version` and content. Avoid entering confidential information when you define the path and version.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param PutGenericArtifactContentByPathRequest
   * @return PutGenericArtifactContentByPathResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/genericartifactscontent/PutGenericArtifactContentByPath.ts.html |here} to see how to use PutGenericArtifactContentByPath API.
   */
  public async putGenericArtifactContentByPath(
    putGenericArtifactContentByPathRequest: requests.PutGenericArtifactContentByPathRequest
  ): Promise<responses.PutGenericArtifactContentByPathResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation GenericArtifactsContentClient#putGenericArtifactContentByPath."
      );
    const operationName = "putGenericArtifactContentByPath";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/generic/20160918/GenericArtifact/PutGenericArtifactContentByPath";
    const pathParams = {
      "{repositoryId}": putGenericArtifactContentByPathRequest.repositoryId,
      "{artifactPath}": putGenericArtifactContentByPathRequest.artifactPath,
      "{version}": putGenericArtifactContentByPathRequest.version
    };

    const queryParams = {};

    let headerParams = {
      "if-match": putGenericArtifactContentByPathRequest.ifMatch,
      "opc-request-id": putGenericArtifactContentByPathRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      putGenericArtifactContentByPathRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path:
        "/generic/repositories/{repositoryId}/artifactPaths/{artifactPath}/versions/{version}/content",
      method: "PUT",
      bodyContent: putGenericArtifactContentByPathRequest.genericArtifactContentBody,
      pathParams: pathParams,
      headerParams: headerParams,
      backupBinaryBody: retrier.backUpBinaryBody,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink,
        true
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.PutGenericArtifactContentByPathResponse>{},
        body: await response.json(),
        bodyKey: "genericArtifact",
        bodyModel: model.GenericArtifact,
        type: "model.GenericArtifact",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
}
