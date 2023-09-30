/**
 *
 *
 * OpenAPI spec version: 20230401
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/tenantmanagercontrolplane/ListLinks.ts.html |here} to see how to use ListLinksRequest.
 */
export interface ListLinksRequest extends common.BaseRequest {
  /**
   * The ID of the parent tenancy this link is associated with.
   */
  "parentTenancyId"?: string;
  /**
   * The ID of the child tenancy this link is associated with.
   */
  "childTenancyId"?: string;
  /**
   * The lifecycle state of the resource.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The sort order to use, whether 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
}
