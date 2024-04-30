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
 * The details required to create an external DB system.
 */
export interface CreateExternalDbSystemDetails {
  /**
   * The user-friendly name for the DB system. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the external DB system resides.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system discovery.
   */
  "dbSystemDiscoveryId": string;
  "databaseManagementConfig"?: model.ExternalDbSystemDatabaseManagementConfigDetails;
  "stackMonitoringConfig"?: model.AssociatedServiceDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
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
}

export namespace CreateExternalDbSystemDetails {
  export function getJsonObj(obj: CreateExternalDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseManagementConfig": obj.databaseManagementConfig
          ? model.ExternalDbSystemDatabaseManagementConfigDetails.getJsonObj(
              obj.databaseManagementConfig
            )
          : undefined,
        "stackMonitoringConfig": obj.stackMonitoringConfig
          ? model.AssociatedServiceDetails.getJsonObj(obj.stackMonitoringConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateExternalDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseManagementConfig": obj.databaseManagementConfig
          ? model.ExternalDbSystemDatabaseManagementConfigDetails.getDeserializedJsonObj(
              obj.databaseManagementConfig
            )
          : undefined,
        "stackMonitoringConfig": obj.stackMonitoringConfig
          ? model.AssociatedServiceDetails.getDeserializedJsonObj(obj.stackMonitoringConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
