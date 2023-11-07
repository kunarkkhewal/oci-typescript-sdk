/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
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
 * Count of Java downloads aggregated by the specified type.
 */
export interface JavaDownloadCountAggregation {
  /**
   * Count of Java downloads. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "downloadCount": number;
  /**
   * The Java family version.
   */
  "familyVersion"?: string;
  /**
   * The Java family display name.
   */
  "familyDisplayName"?: string;
  /**
   * The Java release version. Applicable only to `JAVA_RELEASE` aggregationType.
   */
  "releaseVersion"?: string;
  /**
   * The target Operating System family for the artifact. Applicable only to `PLATFORM` aggregationType.
   */
  "osFamily"?: string;
  /**
   * The target Operating System architecture for the artifact. Applicable only to `PLATFORM` aggregationType.
   */
  "architecture"?: string;
  /**
   * The package type(typically the file extension) of the artifact. Applicable only to `PLATFORM` aggregationType.
   */
  "packageType"?: string;
  /**
   * Additional information about the package type. Applicable only to `PLATFORM` aggregationType.
   */
  "packageTypeDetail"?: string;
}

export namespace JavaDownloadCountAggregation {
  export function getJsonObj(obj: JavaDownloadCountAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaDownloadCountAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
