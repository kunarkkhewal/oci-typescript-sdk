/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
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
 * Output of running a set of span enrichment rules against a span.
 */
export interface TestSpanEnrichmentOutput extends model.TestOutput {
  /**
   * The span after applying enrichment rules.
   */
  "span"?: any;
  /**
   * A list of booleans indicating whether the corresponding filter in the input matched the input span.
   *
   */
  "filters"?: Array<boolean>;

  "testType": string;
}

export namespace TestSpanEnrichmentOutput {
  export function getJsonObj(obj: TestSpanEnrichmentOutput, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TestOutput.getJsonObj(obj) as TestSpanEnrichmentOutput)),
      ...{}
    };

    return jsonObj;
  }
  export const testType = "SPAN_ENRICHMENT";
  export function getDeserializedJsonObj(
    obj: TestSpanEnrichmentOutput,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestOutput.getDeserializedJsonObj(obj) as TestSpanEnrichmentOutput)),
      ...{}
    };

    return jsonObj;
  }
}
