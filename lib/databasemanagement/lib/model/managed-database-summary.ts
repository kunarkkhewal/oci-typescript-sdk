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
 * A summary of the Managed Database.
 */
export interface ManagedDatabaseSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The name of the Managed Database.
   */
  "name": string;
  /**
   * The type of Oracle Database installation.
   */
  "databaseType": model.DatabaseType;
  /**
   * The subtype of the Oracle Database. Indicates whether the database is a Container Database,
   * Pluggable Database, Non-container Database, Autonomous Database, or Autonomous Container Database.
   *
   */
  "databaseSubType": model.DatabaseSubType;
  /**
   * The infrastructure used to deploy the Oracle Database.
   */
  "deploymentType"?: model.DeploymentType;
  /**
   * The management option used when enabling Database Management.
   */
  "managementOption"?: model.ManagementOption;
  /**
   * The workload type of the Autonomous Database.
   */
  "workloadType"?: model.WorkloadType;
  /**
   * Indicates whether the Oracle Database is part of a cluster.
   */
  "isCluster": boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the parent Container Database
   * if the Managed Database is a Pluggable Database.
   *
   */
  "parentContainerId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external
   * DB system that this Managed Database is part of.
   *
   */
  "dbSystemId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the storage DB system.
   */
  "storageSystemId"?: string;
  /**
   * The date and time the Managed Database was created.
   */
  "timeCreated": Date;
  /**
   * The Oracle Database version.
   */
  "databaseVersion"?: string;
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
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagedDatabaseSummary {
  export function getJsonObj(obj: ManagedDatabaseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedDatabaseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
