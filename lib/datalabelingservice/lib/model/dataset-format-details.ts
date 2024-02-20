/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * It specifies how to process the data. Supported formats include DOCUMENT, IMAGE, and TEXT.
 */
export interface DatasetFormatDetails {
  "formatType": string;
}

export namespace DatasetFormatDetails {
  export function getJsonObj(obj: DatasetFormatDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "formatType" in obj && obj.formatType) {
      switch (obj.formatType) {
        case "IMAGE":
          return model.ImageDatasetFormatDetails.getJsonObj(
            <model.ImageDatasetFormatDetails>(<object>jsonObj),
            true
          );
        case "DOCUMENT":
          return model.DocumentDatasetFormatDetails.getJsonObj(
            <model.DocumentDatasetFormatDetails>(<object>jsonObj),
            true
          );
        case "TEXT":
          return model.TextDatasetFormatDetails.getJsonObj(
            <model.TextDatasetFormatDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.formatType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatasetFormatDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "formatType" in obj && obj.formatType) {
      switch (obj.formatType) {
        case "IMAGE":
          return model.ImageDatasetFormatDetails.getDeserializedJsonObj(
            <model.ImageDatasetFormatDetails>(<object>jsonObj),
            true
          );
        case "DOCUMENT":
          return model.DocumentDatasetFormatDetails.getDeserializedJsonObj(
            <model.DocumentDatasetFormatDetails>(<object>jsonObj),
            true
          );
        case "TEXT":
          return model.TextDatasetFormatDetails.getDeserializedJsonObj(
            <model.TextDatasetFormatDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.formatType}`);
      }
    }
    return jsonObj;
  }
}
