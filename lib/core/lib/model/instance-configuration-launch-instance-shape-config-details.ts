/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
* The shape configuration requested for the instance.
* <p>
If the parameter is provided, the instance is created
* with the resources that you specify. If some properties are missing or
* the entire parameter is not provided, the instance is created with the default
* configuration values for the `shape` that you specify.
* <p>
Each shape only supports certain configurable values. If the values that you provide are not valid for the
* specified `shape`, an error is returned.
* 
*/
export interface InstanceConfigurationLaunchInstanceShapeConfigDetails {
  /**
   * The total number of OCPUs available to the instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpus"?: number;
  /**
   * The total number of VCPUs available to the instance. This can be used instead of OCPUs,
   * in which case the actual number of OCPUs will be calculated based on this value
   * and the actual hardware. This must be a multiple of 2.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vcpus"?: number;
  /**
   * The total amount of memory available to the instance, in gigabytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInGBs"?: number;
  /**
    * The baseline OCPU utilization for a subcore burstable VM instance. Leave this attribute blank for a
* non-burstable instance, or explicitly specify non-burstable with `BASELINE_1_1`.
* <p>
The following values are supported:
* - `BASELINE_1_8` - baseline usage is 1/8 of an OCPU.
* - `BASELINE_1_2` - baseline usage is 1/2 of an OCPU.
* - `BASELINE_1_1` - baseline usage is an entire OCPU. This represents a non-burstable instance.
* 
    */
  "baselineOcpuUtilization"?: InstanceConfigurationLaunchInstanceShapeConfigDetails.BaselineOcpuUtilization;
  /**
   * The number of NVMe drives to be used for storage. A single drive has 6.8 TB available.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nvmes"?: number;
}

export namespace InstanceConfigurationLaunchInstanceShapeConfigDetails {
  export enum BaselineOcpuUtilization {
    Baseline18 = "BASELINE_1_8",
    Baseline12 = "BASELINE_1_2",
    Baseline11 = "BASELINE_1_1",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceConfigurationLaunchInstanceShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationLaunchInstanceShapeConfigDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
