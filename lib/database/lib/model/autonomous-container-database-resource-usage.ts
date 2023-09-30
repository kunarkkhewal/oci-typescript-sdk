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
 * Associated autonomous container databases usages.
 */
export interface AutonomousContainerDatabaseResourceUsage {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous Container Database.
   */
  "id"?: string;
  /**
   * The user-friendly name for the Autonomous Container Database. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * CPUs / cores reclaimable or released to cluster on Autonomous Container Database restart. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * CPUs / cores available for ADB provisioning or scaling in the Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * Largest provisionable ADB in the Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "largestProvisionableAutonomousDatabaseInCpus"?: number;
  /**
   * CPUs / cores assigned to ADBs in the Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedCpus"?: number;
  /**
   * CPUs / cores reserved for scalability, resilliency and other overheads.
   * This includes failover, autoscaling and idle instance overhead.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCpus"?: number;
  /**
   * CPUs / cores assigned to the Autonomous Container Database. Sum of provisioned,
   * reserved and reclaimable CPUs/ cores.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedCpus"?: number;
  /**
   * Valid list of provisionable CPUs / cores for ADB creation.
   */
  "provisionableCpus"?: Array<number>;
  /**
   * List of autonomous container database resource usage per autonomous virtual machine.
   */
  "autonomousContainerDatabaseVmUsage"?: Array<model.AcdAvmResourceStats>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AutonomousContainerDatabaseResourceUsage {
  export function getJsonObj(obj: AutonomousContainerDatabaseResourceUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "autonomousContainerDatabaseVmUsage": obj.autonomousContainerDatabaseVmUsage
          ? obj.autonomousContainerDatabaseVmUsage.map(item => {
              return model.AcdAvmResourceStats.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousContainerDatabaseResourceUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "autonomousContainerDatabaseVmUsage": obj.autonomousContainerDatabaseVmUsage
          ? obj.autonomousContainerDatabaseVmUsage.map(item => {
              return model.AcdAvmResourceStats.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
