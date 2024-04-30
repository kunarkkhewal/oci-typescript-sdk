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
 * The details required to create an external DB system connector.
 */
export interface CreateExternalDbSystemConnectorDetails {
  /**
   * The user-friendly name for the external connector. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system.
   */
  "externalDbSystemId": string;

  "connectorType": string;
}

export namespace CreateExternalDbSystemConnectorDetails {
  export function getJsonObj(obj: CreateExternalDbSystemConnectorDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "MACS":
          return model.CreateExternalDbSystemMacsConnectorDetails.getJsonObj(
            <model.CreateExternalDbSystemMacsConnectorDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateExternalDbSystemConnectorDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "MACS":
          return model.CreateExternalDbSystemMacsConnectorDetails.getDeserializedJsonObj(
            <model.CreateExternalDbSystemMacsConnectorDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
}
