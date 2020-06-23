/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about a filter operator. The filter operator lets you select certain attributes from the inbound port to continue downstream to the outbound port.
 */
export interface FilterPush extends model.PushDownOperation {
  /**
   * The filter condition.
   */
  "filterCondition"?: string;

  "modelType": string;
}

export namespace FilterPush {
  export function getJsonObj(obj: FilterPush, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PushDownOperation.getJsonObj(obj) as FilterPush)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "FILTER";
}
