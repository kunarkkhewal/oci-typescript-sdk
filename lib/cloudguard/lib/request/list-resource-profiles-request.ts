/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/ListResourceProfiles.ts.html |here} to see how to use ListResourceProfilesRequest.
 */
export interface ListResourceProfilesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Start time for a filter. If start time is not specified, start time will be set to current time - 30 days.
   */
  "timeLastDetectedGreaterThanOrEqualTo"?: Date;
  /**
   * End time for a filter. If end time is not specified, end time will be set to current time.
   */
  "timeLastDetectedLessThanOrEqualTo"?: Date;
  /**
   * Start time for a filter. If start time is not specified, start time will be set to current time - 30 days.
   */
  "timeFirstDetectedGreaterThanOrEqualTo"?: Date;
  /**
   * End time for a filter. If end time is not specified, end time will be set to current time.
   */
  "timeFirstDetectedLessThanOrEqualTo"?: Date;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed
   * and all compartments and subcompartments in the tenancy are
   * returned depending on the setting of {@code accessLevel}.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are {@code RESTRICTED} and {@code ACCESSIBLE}. Default is {@code RESTRICTED}.
   * Setting this to {@code ACCESSIBLE} returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment).
   * When set to {@code RESTRICTED} permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListResourceProfilesRequest.AccessLevel;
  /**
   * A filter to return only resources that match the list of resource types given.
   */
  "resourceTypes"?: Array<string>;
  /**
   * Risk score filter.
   */
  "riskScoreGreaterThanOrEqualTo"?: number;
  /**
   * Risk score filter,
   */
  "riskScoreLessThanOrEqualTo"?: number;
  /**
   * A filter to return only resources that match the list of techniques given.
   */
  "techniques"?: Array<string>;
  /**
   * A filter to return only resources that match the list of tactics given.
   */
  "tactics"?: Array<string>;
  /**
   * The maximum number of items to return
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort resource profiles. Only one sort order may be provided. Default order for timeLastDetected is descending. If no value is specified timeLastDetected is default.
   *
   */
  "sortBy"?: ListResourceProfilesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListResourceProfilesRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortBy {
    RiskScore = "riskScore",
    RiskScoreGrowth = "riskScoreGrowth",
    TimeFirstDetected = "timeFirstDetected",
    TimeLastDetected = "timeLastDetected",
    SightingsCount = "sightingsCount",
    DisplayName = "displayName",
    Type = "type"
  }
}
