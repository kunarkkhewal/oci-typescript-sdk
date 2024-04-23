/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * The information about new Scheduled Query of type DataSourceSummary.
 */
export interface ScheduledQueryDataSourceSummaryObjDetails extends model.DataSourceSummaryDetails {
  /**
   * Description for the scheduled query
   */
  "description"?: string;
  /**
   * Target information in which scheduled query will be run
   */
  "scheduledQueryScopeDetails"?: Array<model.ScheduledQueryScopeDetail>;
  /**
   * Interval in minutes in which the query is run periodically. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "intervalInSeconds"?: number;
  /**
   * DataSource query metadata replication region and status.
   */
  "regionStatusDetail"?: Array<model.RegionStatusDetail>;

  "dataSourceFeedProvider": string;
}

export namespace ScheduledQueryDataSourceSummaryObjDetails {
  export function getJsonObj(
    obj: ScheduledQueryDataSourceSummaryObjDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSourceSummaryDetails.getJsonObj(
            obj
          ) as ScheduledQueryDataSourceSummaryObjDetails)),
      ...{
        "scheduledQueryScopeDetails": obj.scheduledQueryScopeDetails
          ? obj.scheduledQueryScopeDetails.map(item => {
              return model.ScheduledQueryScopeDetail.getJsonObj(item);
            })
          : undefined,

        "regionStatusDetail": obj.regionStatusDetail
          ? obj.regionStatusDetail.map(item => {
              return model.RegionStatusDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const dataSourceFeedProvider = "SCHEDULEDQUERY";
  export function getDeserializedJsonObj(
    obj: ScheduledQueryDataSourceSummaryObjDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSourceSummaryDetails.getDeserializedJsonObj(
            obj
          ) as ScheduledQueryDataSourceSummaryObjDetails)),
      ...{
        "scheduledQueryScopeDetails": obj.scheduledQueryScopeDetails
          ? obj.scheduledQueryScopeDetails.map(item => {
              return model.ScheduledQueryScopeDetail.getDeserializedJsonObj(item);
            })
          : undefined,

        "regionStatusDetail": obj.regionStatusDetail
          ? obj.regionStatusDetail.map(item => {
              return model.RegionStatusDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
