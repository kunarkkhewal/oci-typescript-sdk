/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A summary of a work request.
 */
export interface WorkRequestSummary {
  /**
   * The type of the work request.
   *
   */
  "operationType": model.OperationType;
  /**
   * The status of current work request.
   *
   */
  "status": model.OperationStatus;
  /**
    * The ID (OCID) of the work request.
* <p>
Example: `ocid1.workrequest.oc1.phx.&lt;unique_id&gt;`
* 
    */
  "id": string;
  /**
    * The OCID of the compartment that contains the work request. Work requests should be scoped to
* the same compartment as the resource the work request affects. If the work request affects multiple resources,
* and those resources are not in the same compartment, it is up to the service team to pick the primary
* resource whose compartment should be used.
* <p>
Example: `ocid1.compartment.oc1..&lt;unique_id&gt;`
* 
    */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   *
   */
  "resources": Array<model.WorkRequestResource>;
  /**
    * The percentage of the request completed.
* <p>
Example: `75`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "percentComplete": number;
  /**
    * The date and time the request was created. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeAccepted": Date;
  /**
    * The date and time the request was started. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeStarted"?: Date;
  /**
    * The date and time the request was finished. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
