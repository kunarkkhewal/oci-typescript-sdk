/**
 * Application Performance Monitoring Control Plane API
 * Use the Application Performance Monitoring Control Plane API to perform operations such as creating, updating,
deleting and listing APM domains and monitoring the progress of these operations using the work request APIs.

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information that can be updated by update APM domain operation.
 */
export interface UpdateApmDomainDetails {
  /**
   * Display name of the APM domain.
   */
  "displayName"?: string;
  /**
   * Description of the APM domain.
   */
  "description"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateApmDomainDetails {
  export function getJsonObj(obj: UpdateApmDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateApmDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
