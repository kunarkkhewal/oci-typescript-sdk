/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details for the Rest data asset.
 */
export interface DataAssetFromRestDetails extends model.DataAsset {
  /**
   * The base url of the rest server.
   */
  "baseUrl"?: string;
  /**
   * The manifest file content of the rest APIs.
   */
  "manifestFileContent"?: string;
  "defaultConnection"?:
    | model.ConnectionFromJdbcDetails
    | model.ConnectionFromRestNoAuthDetails
    | model.ConnectionFromAmazonS3Details
    | model.ConnectionFromObjectStorageDetails
    | model.ConnectionFromOracleSiebelDetails
    | model.ConnectionFromHdfsDetails
    | model.ConnectionFromMySQLDetails
    | model.ConnectionFromMySqlHeatWaveDetails
    | model.ConnectionFromAtpDetails
    | model.ConnectionFromOraclePeopleSoftDetails
    | model.ConnectionFromRestBasicAuthDetails
    | model.ConnectionFromOAuth2Details
    | model.ConnectionFromBICCDetails
    | model.ConnectionFromAdwcDetails
    | model.ConnectionFromOracleDetails
    | model.ConnectionFromOracleEbsDetails
    | model.ConnectionFromLakeDetails
    | model.ConnectionFromBipDetails;

  "modelType": string;
}

export namespace DataAssetFromRestDetails {
  export function getJsonObj(obj: DataAssetFromRestDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DataAsset.getJsonObj(obj) as DataAssetFromRestDetails)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionDetails.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "REST_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: DataAssetFromRestDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAsset.getDeserializedJsonObj(obj) as DataAssetFromRestDetails)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
