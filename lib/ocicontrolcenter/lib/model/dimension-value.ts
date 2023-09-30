/**
 * OCI Control Center API
 * OCI Control Center (OCC) service enables you to monitor the region-level cloud consumption and provides the region-level capacity data, in realms where OCC is available. Use the OCI Control Center (OCC) API to explore region-level capacity and utilization information about core services. For more information, see [OCI Control Center](/iaas/Content/control-center/home.htm).

 * OpenAPI spec version: 20230515
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
 * The dimension value for the given dimension name as key.
 *
 */
export interface DimensionValue {
  /**
   * The value of the dimension.
   *
   */
  "dimensionValue"?: string;
}

export namespace DimensionValue {
  export function getJsonObj(obj: DimensionValue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DimensionValue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
