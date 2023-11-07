/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * SaaS administrative user status.
 */
export interface SaasAdminUserStatus {
  /**
   * Indicates if the SaaS administrative user is enabled for the Autonomous Database.
   */
  "isEnabled"?: boolean;
  /**
   * The access type for the SaaS administrative user. If no access type is specified, the READ_ONLY access type is used.
   */
  "accessType"?: SaasAdminUserStatus.AccessType;
  /**
   * The date and time the SaaS administrative user was enabled at, for the Autonomous Database.
   */
  "timeSaasAdminUserEnabled"?: Date;
}

export namespace SaasAdminUserStatus {
  export enum AccessType {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE",
    Admin = "ADMIN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SaasAdminUserStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SaasAdminUserStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
