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
 * Parameters to be used to create a new security zone.
 */
export interface CreateSecurityZoneDetails {
  /**
   * The security zone's display name
   */
  "displayName": string;
  /**
   * The security zone's description
   */
  "description"?: string;
  /**
   * The OCID of the security zone recipe ({@code SecurityRecipe} resource) for the security zone
   */
  "securityZoneRecipeId": string;
  /**
   * The OCID of the compartment for the security zone
   */
  "compartmentId": string;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* Example: {@code {\"bar-key\": \"value\"}}
* <p>
Avoid entering confidential information.
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateSecurityZoneDetails {
  export function getJsonObj(obj: CreateSecurityZoneDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSecurityZoneDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
