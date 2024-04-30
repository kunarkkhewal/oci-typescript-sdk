/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The status of an Exadata storage server connector.
 */
export interface ExternalExadataStorageConnectorStatus {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata storage server connector.
   */
  "id"?: string;
  /**
   * The connection status of the connector.
   */
  "status": ExternalExadataStorageConnectorStatus.Status;
  /**
   * The error message indicating the reason for failure or {@code null} if the connection was successful.
   */
  "errorMessage"?: string;
}

export namespace ExternalExadataStorageConnectorStatus {
  export enum Status {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalExadataStorageConnectorStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalExadataStorageConnectorStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
