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
 * Object that contains the details about a single attribute in the bulk request to be unpinned.
 *
 */
export interface BulkUnpinAttributeDetail {
  /**
   * Name of the attribute to be unpinned.
   *
   */
  "attributeName": string;
  /**
   * Namespace of the attribute to be unpinned.  The attributeNameSpace will default to TRACES if it is
   * not passed in.
   *
   */
  "attributeNameSpace"?: BulkUnpinAttributeDetail.AttributeNameSpace;
}

export namespace BulkUnpinAttributeDetail {
  export enum AttributeNameSpace {
    Traces = "TRACES",
    Synthetic = "SYNTHETIC"
  }

  export function getJsonObj(obj: BulkUnpinAttributeDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkUnpinAttributeDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
