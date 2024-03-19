/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Metadata about the bulk pin operation.  The bulk pin operation is atomic and binary.  If the processing of any of the attributes
 * in the bulk pin request results in a processing or validation error, then none of the attributes in the request are pinned.
 *
 */
export interface BulkPinMetadata {
  /**
   * Operation status of the bulk pin operation.
   * SUCCESS - The bulk pin operation has succeeded and all the attributes in the bulk pin request have been pinned by this operation or pinned earlier.
   * The following are error statuses for the bulk pin operation.
   * EMPTY_ATTRIBUTE_LIST - The bulk pin request object was empty and did not contain any attributes to be pinned.
   * INVALID_BULK_REQUEST - The bulk request contains invalid attribute(s), or attribute(s) that resulted in a validation error, or an attribute that resulted
   * in a processing error.
   *
   */
  "operationStatus": BulkPinMetadata.OperationStatus;
  /**
   * Type of operation.
   *
   */
  "operationType": BulkPinMetadata.OperationType;
  /**
   * Total number attributes (both string and numeric) in TRACES namespace that were pinned.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "attributesPinned": number;
  /**
   * Total number attributes (both string and numeric) in SYNTHETIC namespace that were pinned.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "syntheticAttributesPinned"?: number;
}

export namespace BulkPinMetadata {
  export enum OperationStatus {
    Success = "SUCCESS",
    EmptyAttributeList = "EMPTY_ATTRIBUTE_LIST",
    InvalidBulkRequest = "INVALID_BULK_REQUEST",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperationType {
    Pin = "PIN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BulkPinMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkPinMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
