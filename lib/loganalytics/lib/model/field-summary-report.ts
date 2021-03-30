/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * FieldSummaryReport
 */
export interface FieldSummaryReport {
  /**
   * The count of custom (user defined) fields. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonOobCount"?: number;
  /**
   * The count of built in fields. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "oobCount"?: number;
  /**
   * Field usage detailss
   */
  "usageDetails"?: Array<model.UsageStatusItem>;
}

export namespace FieldSummaryReport {
  export function getJsonObj(obj: FieldSummaryReport): object {
    const jsonObj = {
      ...obj,
      ...{
        "usageDetails": obj.usageDetails
          ? obj.usageDetails.map(item => {
              return model.UsageStatusItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
