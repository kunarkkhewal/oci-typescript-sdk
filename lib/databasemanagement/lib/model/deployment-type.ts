/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A list of the supported infrastructure that can be used to deploy the database:
* <p>
- ONPREMISE: External infrastructure on premises.
* - BM: Bare metal infrastructure in Oracle Cloud.
* - VM: Virtual machines in Oracle Cloud.
* - EXADATA: Exadata infrastructure in Oracle Cloud.
* - EXADATA_CC: Exadata Cloud@Customer infrastructure in customer's data center.
* - AUTONOMOUS: Oracle Autonomous Cloud infrastructure
* 
**/
export enum DeploymentType {
  Onpremise = "ONPREMISE",
  Bm = "BM",
  Vm = "VM",
  Exadata = "EXADATA",
  ExadataCc = "EXADATA_CC",
  Autonomous = "AUTONOMOUS",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DeploymentType {
  export function getJsonObj(obj: DeploymentType): DeploymentType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DeploymentType): DeploymentType {
    return obj;
  }
}
