/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
import { AIServiceSpeechWaiter } from "./aiservicespeech-waiter";
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

export enum AIServiceSpeechApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class AIServiceSpeechClient {
  protected static serviceEndpointTemplate =
    "https://speech.aiservice.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": AIServiceSpeechWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "AIServiceSpeech";
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

    if (!developerToolConfiguration.isServiceEnabled("aispeech")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("aispeech");
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
    this._endpoint = this._endpoint + "/20220101";
    if (this.logger) this.logger.info(`AIServiceSpeechClient endpoint set to ${this._endpoint}`);
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
        AIServiceSpeechClient.serviceEndpointTemplate,
        this._region,
        AIServiceSpeechClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        AIServiceSpeechClient.serviceEndpointTemplate,
        this._regionId,
        AIServiceSpeechClient.endpointServiceName
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
      AIServiceSpeechClient.serviceEndpointTemplate,
      region,
      AIServiceSpeechClient.endpointServiceName
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
      AIServiceSpeechClient.serviceEndpointTemplate,
      regionId,
      AIServiceSpeechClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Creates a new AIServiceSpeechWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): AIServiceSpeechWaiter {
    this._waiters = new AIServiceSpeechWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): AIServiceSpeechWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
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
   * Canceling the job cancels all the tasks under it.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CancelTranscriptionJobRequest
   * @return CancelTranscriptionJobResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/CancelTranscriptionJob.ts.html |here} to see how to use CancelTranscriptionJob API.
   */
  public async cancelTranscriptionJob(
    cancelTranscriptionJobRequest: requests.CancelTranscriptionJobRequest
  ): Promise<responses.CancelTranscriptionJobResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#cancelTranscriptionJob.");
    const operationName = "cancelTranscriptionJob";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionJob/CancelTranscriptionJob";
    const pathParams = {
      "{transcriptionJobId}": cancelTranscriptionJobRequest.transcriptionJobId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": cancelTranscriptionJobRequest.ifMatch,
      "opc-request-id": cancelTranscriptionJobRequest.opcRequestId,
      "opc-retry-token": cancelTranscriptionJobRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      cancelTranscriptionJobRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs/{transcriptionJobId}/actions/cancel",
      method: "POST",
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
        responseObject: <responses.CancelTranscriptionJobResponse>{},
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
   * Cancel Transcription Task
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CancelTranscriptionTaskRequest
   * @return CancelTranscriptionTaskResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/CancelTranscriptionTask.ts.html |here} to see how to use CancelTranscriptionTask API.
   */
  public async cancelTranscriptionTask(
    cancelTranscriptionTaskRequest: requests.CancelTranscriptionTaskRequest
  ): Promise<responses.CancelTranscriptionTaskResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#cancelTranscriptionTask.");
    const operationName = "cancelTranscriptionTask";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionTask/CancelTranscriptionTask";
    const pathParams = {
      "{transcriptionJobId}": cancelTranscriptionTaskRequest.transcriptionJobId,
      "{transcriptionTaskId}": cancelTranscriptionTaskRequest.transcriptionTaskId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": cancelTranscriptionTaskRequest.ifMatch,
      "opc-request-id": cancelTranscriptionTaskRequest.opcRequestId,
      "opc-retry-token": cancelTranscriptionTaskRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      cancelTranscriptionTaskRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path:
        "/transcriptionJobs/{transcriptionJobId}/transcriptionTasks/{transcriptionTaskId}/actions/cancel",
      method: "POST",
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
        responseObject: <responses.CancelTranscriptionTaskResponse>{},
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
   * Moves a transcription Job resource into a different compartment.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ChangeTranscriptionJobCompartmentRequest
   * @return ChangeTranscriptionJobCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/ChangeTranscriptionJobCompartment.ts.html |here} to see how to use ChangeTranscriptionJobCompartment API.
   */
  public async changeTranscriptionJobCompartment(
    changeTranscriptionJobCompartmentRequest: requests.ChangeTranscriptionJobCompartmentRequest
  ): Promise<responses.ChangeTranscriptionJobCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation AIServiceSpeechClient#changeTranscriptionJobCompartment."
      );
    const operationName = "changeTranscriptionJobCompartment";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionJob/ChangeTranscriptionJobCompartment";
    const pathParams = {
      "{transcriptionJobId}": changeTranscriptionJobCompartmentRequest.transcriptionJobId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeTranscriptionJobCompartmentRequest.ifMatch,
      "opc-request-id": changeTranscriptionJobCompartmentRequest.opcRequestId,
      "opc-retry-token": changeTranscriptionJobCompartmentRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      changeTranscriptionJobCompartmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs/{transcriptionJobId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeTranscriptionJobCompartmentRequest.changeTranscriptionJobCompartmentDetails,
        "ChangeTranscriptionJobCompartmentDetails",
        model.ChangeTranscriptionJobCompartmentDetails.getJsonObj
      ),
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
        responseObject: <responses.ChangeTranscriptionJobCompartmentResponse>{},
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
   * Creates a new Transcription Job.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateTranscriptionJobRequest
   * @return CreateTranscriptionJobResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/CreateTranscriptionJob.ts.html |here} to see how to use CreateTranscriptionJob API.
   */
  public async createTranscriptionJob(
    createTranscriptionJobRequest: requests.CreateTranscriptionJobRequest
  ): Promise<responses.CreateTranscriptionJobResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#createTranscriptionJob.");
    const operationName = "createTranscriptionJob";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionJob/CreateTranscriptionJob";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createTranscriptionJobRequest.opcRetryToken,
      "opc-request-id": createTranscriptionJobRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createTranscriptionJobRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createTranscriptionJobRequest.createTranscriptionJobDetails,
        "CreateTranscriptionJobDetails",
        model.CreateTranscriptionJobDetails.getJsonObj
      ),
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
        responseObject: <responses.CreateTranscriptionJobResponse>{},
        body: await response.json(),
        bodyKey: "transcriptionJob",
        bodyModel: model.TranscriptionJob,
        type: "model.TranscriptionJob",
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
   * Gets a Transcription Job by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetTranscriptionJobRequest
   * @return GetTranscriptionJobResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/GetTranscriptionJob.ts.html |here} to see how to use GetTranscriptionJob API.
   */
  public async getTranscriptionJob(
    getTranscriptionJobRequest: requests.GetTranscriptionJobRequest
  ): Promise<responses.GetTranscriptionJobResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#getTranscriptionJob.");
    const operationName = "getTranscriptionJob";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionJob/GetTranscriptionJob";
    const pathParams = {
      "{transcriptionJobId}": getTranscriptionJobRequest.transcriptionJobId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getTranscriptionJobRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getTranscriptionJobRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs/{transcriptionJobId}",
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
        responseObject: <responses.GetTranscriptionJobResponse>{},
        body: await response.json(),
        bodyKey: "transcriptionJob",
        bodyModel: model.TranscriptionJob,
        type: "model.TranscriptionJob",
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
   * Gets a Transcription Task by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetTranscriptionTaskRequest
   * @return GetTranscriptionTaskResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/GetTranscriptionTask.ts.html |here} to see how to use GetTranscriptionTask API.
   */
  public async getTranscriptionTask(
    getTranscriptionTaskRequest: requests.GetTranscriptionTaskRequest
  ): Promise<responses.GetTranscriptionTaskResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#getTranscriptionTask.");
    const operationName = "getTranscriptionTask";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionTask/GetTranscriptionTask";
    const pathParams = {
      "{transcriptionJobId}": getTranscriptionTaskRequest.transcriptionJobId,
      "{transcriptionTaskId}": getTranscriptionTaskRequest.transcriptionTaskId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getTranscriptionTaskRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getTranscriptionTaskRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs/{transcriptionJobId}/transcriptionTasks/{transcriptionTaskId}",
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
        responseObject: <responses.GetTranscriptionTaskResponse>{},
        body: await response.json(),
        bodyKey: "transcriptionTask",
        bodyModel: model.TranscriptionTask,
        type: "model.TranscriptionTask",
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
   * Returns a list of Transcription Jobs.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListTranscriptionJobsRequest
   * @return ListTranscriptionJobsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/ListTranscriptionJobs.ts.html |here} to see how to use ListTranscriptionJobs API.
   */
  public async listTranscriptionJobs(
    listTranscriptionJobsRequest: requests.ListTranscriptionJobsRequest
  ): Promise<responses.ListTranscriptionJobsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#listTranscriptionJobs.");
    const operationName = "listTranscriptionJobs";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionJob/ListTranscriptionJobs";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listTranscriptionJobsRequest.compartmentId,
      "lifecycleState": listTranscriptionJobsRequest.lifecycleState,
      "displayName": listTranscriptionJobsRequest.displayName,
      "id": listTranscriptionJobsRequest.id,
      "limit": listTranscriptionJobsRequest.limit,
      "page": listTranscriptionJobsRequest.page,
      "sortOrder": listTranscriptionJobsRequest.sortOrder,
      "sortBy": listTranscriptionJobsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listTranscriptionJobsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listTranscriptionJobsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs",
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
        responseObject: <responses.ListTranscriptionJobsResponse>{},
        body: await response.json(),
        bodyKey: "transcriptionJobCollection",
        bodyModel: model.TranscriptionJobCollection,
        type: "model.TranscriptionJobCollection",
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
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
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
   * Returns a list of Transcription Tasks.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListTranscriptionTasksRequest
   * @return ListTranscriptionTasksResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/ListTranscriptionTasks.ts.html |here} to see how to use ListTranscriptionTasks API.
   */
  public async listTranscriptionTasks(
    listTranscriptionTasksRequest: requests.ListTranscriptionTasksRequest
  ): Promise<responses.ListTranscriptionTasksResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#listTranscriptionTasks.");
    const operationName = "listTranscriptionTasks";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionTask/ListTranscriptionTasks";
    const pathParams = {
      "{transcriptionJobId}": listTranscriptionTasksRequest.transcriptionJobId
    };

    const queryParams = {
      "lifecycleState": listTranscriptionTasksRequest.lifecycleState,
      "displayName": listTranscriptionTasksRequest.displayName,
      "id": listTranscriptionTasksRequest.id,
      "limit": listTranscriptionTasksRequest.limit,
      "page": listTranscriptionTasksRequest.page,
      "sortOrder": listTranscriptionTasksRequest.sortOrder,
      "sortBy": listTranscriptionTasksRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listTranscriptionTasksRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listTranscriptionTasksRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs/{transcriptionJobId}/transcriptionTasks",
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
        responseObject: <responses.ListTranscriptionTasksResponse>{},
        body: await response.json(),
        bodyKey: "transcriptionTaskCollection",
        bodyModel: model.TranscriptionTaskCollection,
        type: "model.TranscriptionTaskCollection",
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
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
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
   * Updates the Transcription Job
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateTranscriptionJobRequest
   * @return UpdateTranscriptionJobResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aispeech/UpdateTranscriptionJob.ts.html |here} to see how to use UpdateTranscriptionJob API.
   */
  public async updateTranscriptionJob(
    updateTranscriptionJobRequest: requests.UpdateTranscriptionJobRequest
  ): Promise<responses.UpdateTranscriptionJobResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceSpeechClient#updateTranscriptionJob.");
    const operationName = "updateTranscriptionJob";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/speech/20220101/TranscriptionJob/UpdateTranscriptionJob";
    const pathParams = {
      "{transcriptionJobId}": updateTranscriptionJobRequest.transcriptionJobId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateTranscriptionJobRequest.ifMatch,
      "opc-request-id": updateTranscriptionJobRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateTranscriptionJobRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/transcriptionJobs/{transcriptionJobId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateTranscriptionJobRequest.updateTranscriptionJobDetails,
        "UpdateTranscriptionJobDetails",
        model.UpdateTranscriptionJobDetails.getJsonObj
      ),
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
        responseObject: <responses.UpdateTranscriptionJobResponse>{},
        body: await response.json(),
        bodyKey: "transcriptionJob",
        bodyModel: model.TranscriptionJob,
        type: "model.TranscriptionJob",
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
