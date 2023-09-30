/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * A complex attribute that indicates a password recovery is locked (blocking any new sessions).
 * <p>
 **Added In:** 19.1.4
 * <p>
 **SCIM++ Properties:**
 *  - idcsSearchable: false
 *  - multiValued: false
 *  - mutability: readWrite
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface UserExtRecoveryLocked {
  /**
   * Indicates that the recovery is locked.
   * <p>
   **Added In:** 19.1.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "on"?: boolean;
  /**
   * The date and time that the current resource was locked.
   * <p>
   **Added In:** 19.1.4
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lockDate"?: string;
}

export namespace UserExtRecoveryLocked {
  export function getJsonObj(obj: UserExtRecoveryLocked): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserExtRecoveryLocked): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
