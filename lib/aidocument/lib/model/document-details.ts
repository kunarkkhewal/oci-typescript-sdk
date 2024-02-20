/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * The details of a document to analyze.
 */
export interface DocumentDetails {
  "source": string;
}

export namespace DocumentDetails {
  export function getJsonObj(obj: DocumentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageDocumentDetails.getJsonObj(
            <model.ObjectStorageDocumentDetails>(<object>jsonObj),
            true
          );
        case "INLINE":
          return model.InlineDocumentDetails.getJsonObj(
            <model.InlineDocumentDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.source}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DocumentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageDocumentDetails.getDeserializedJsonObj(
            <model.ObjectStorageDocumentDetails>(<object>jsonObj),
            true
          );
        case "INLINE":
          return model.InlineDocumentDetails.getDeserializedJsonObj(
            <model.InlineDocumentDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.source}`);
      }
    }
    return jsonObj;
  }
}
