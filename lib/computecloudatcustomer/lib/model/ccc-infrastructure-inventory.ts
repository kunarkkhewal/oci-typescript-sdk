/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer Infrastructure deployments
and scheduled upgrades. For more information see 
[Compute Cloud@Customer documentation](/iaas/Content/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * Inventory for a Compute Cloud@Customer infrastructure. This information
 * cannot be updated and is from the infrastructure. The information will only be available
 * after the connectionState is transitioned to CONNECTED.
 *
 */
export interface CccInfrastructureInventory {
  /**
   * The serial number of the Compute Cloud@Customer infrastructure rack.
   *
   */
  "serialNumber"?: string;
  /**
   * The number of management nodes that are available and in active use
   * on the Compute Cloud@Customer infrastructure rack.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "managementNodeCount"?: number;
  /**
   * The number of compute nodes that are available and usable
   * on the Compute Cloud@Customer infrastructure rack. There is no distinction
   * of compute node type in this information.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "computeNodeCount"?: number;
  /**
   * The number of storage trays in the Compute Cloud@Customer infrastructure rack that are designated for capacity storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "capacityStorageTrayCount"?: number;
  /**
   * The number of storage trays in the Compute Cloud@Customer infrastructure rack that are designated for performance storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "performanceStorageTrayCount"?: number;
}

export namespace CccInfrastructureInventory {
  export function getJsonObj(obj: CccInfrastructureInventory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CccInfrastructureInventory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
