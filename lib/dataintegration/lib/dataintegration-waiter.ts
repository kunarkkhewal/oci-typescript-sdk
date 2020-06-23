/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DataIntegrationClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataIntegrationWaiter {
  public constructor(
    private client: DataIntegrationClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }

  /**
   * Waits forWorkspace till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetWorkspaceResponse | null (null in case of 404 response)
   */
  public async forWorkspace(
    request: serviceRequests.GetWorkspaceRequest,
    ...targetStates: models.Workspace.LifecycleState[]
  ): Promise<serviceResponses.GetWorkspaceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getWorkspace(request),
      response => targetStates.exists(response.workspace.lifecycleState),
      targetStates.includes(models.Workspace.LifecycleState.DELETED)
    );
  }
}
