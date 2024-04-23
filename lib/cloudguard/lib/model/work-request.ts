/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Detailed information about a work request (WorkRequest resource).
 */
export interface WorkRequest {
  /**
   * Unique identifier of the work request
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the work request. Work requests should be scoped to
   * the same compartment as the resource the work request affects. If the work request affects multiple resources,
   * and those resources are not in the same compartment, it is up to the service team to pick the primary
   * resource whose compartment should be used.
   *
   */
  "compartmentId": string;
  /**
   * Operation type of the work request
   */
  "operationType": model.OperationType;
  /**
   * Operation status of the work request
   */
  "status": model.OperationStatus;
  /**
   * List of resources affected by the work request
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the work request that's completed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was created
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request was started
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request was finished
   */
  "timeFinished"?: Date;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
}

export namespace WorkRequest {
  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
