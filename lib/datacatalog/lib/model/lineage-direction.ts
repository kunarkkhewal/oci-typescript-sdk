/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Indicates the direction for lineage fetch. It is one of upstream (or source objects), downstream (or target
 * objects), both.
 * Corresponding enums are:
 * UPSTREAM   - Source objects.
 * DOWNSTREAM - Target objects.
 * BOTH       - Both source and target objects.
 *
 **/
export enum LineageDirection {
  Upstream = "UPSTREAM",
  Both = "BOTH",
  Downstream = "DOWNSTREAM",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LineageDirection {
  export function getJsonObj(obj: LineageDirection): LineageDirection {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LineageDirection): LineageDirection {
    return obj;
  }
}
