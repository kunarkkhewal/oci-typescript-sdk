/**
 *
 *
 * OpenAPI spec version: 20210630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/devops/ListPaths.ts.html |here} to see how to use ListPathsRequest.
 */
export interface ListPathsRequest extends common.BaseRequest {
  /**
   * Unique repository identifier.
   */
  "repositoryId": string;
  /**
   * The name of branch/tag or commit hash it points to. If names conflict, order of preference is commit > branch > tag.
   * You can disambiguate with \"heads/foobar\" and \"tags/foobar\". If left blank repository's default branch will be used.
   *
   */
  "ref"?: string;
  /**
   * Flag to determine if files must be retrived recursively. Flag is False by default.
   */
  "pathsInSubtree"?: boolean;
  /**
   * The fully qualified path to the folder whose contents are returned, including the folder name. For example, /examples is a fully-qualified path to a folder named examples that was created off of the root directory (/) of a repository.
   */
  "folderPath"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The sort order to use. Use either ascending or descending.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order is ascending. If no value is specified name is default.
   *
   */
  "sortBy"?: ListPathsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request.  If you need to contact Oracle about a particular request, provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace ListPathsRequest {
  export enum SortBy {
    Type = "type",
    SizeInBytes = "sizeInBytes",
    Name = "name"
  }
}
