/**
 * Secure Desktops API
 * Create and manage cloud-hosted desktops which can be accessed from a web browser or installed client.

 * OpenAPI spec version: 20220618
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
 * Provides information about the desktop pool such as number of active desktops, name, OCID, state, and maximum size.
 *
 */
export interface DesktopPoolSummary {
  /**
   * The OCID of the desktop pool.
   */
  "id": string;
  /**
   * A user friendly display name. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The current state of the desktop pool.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The maximum number of desktops permitted in the desktop pool. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maximumSize": number;
  /**
   * The number of active desktops in the desktop pool. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "activeDesktops"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Contact information of the desktop pool administrator.
   * Avoid entering confidential information.
   *
   */
  "contactDetails": string;
  /**
   * The OCID of the compartment which will contain the desktop pool.
   */
  "compartmentId": string;
  /**
   * The date and time the resource was created.
   */
  "timeCreated": Date;
}

export namespace DesktopPoolSummary {
  export function getJsonObj(obj: DesktopPoolSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DesktopPoolSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
