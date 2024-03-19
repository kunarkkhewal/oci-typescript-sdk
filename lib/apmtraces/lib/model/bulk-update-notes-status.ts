/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Response of a bulk update notes operation.
 *
 */
export interface BulkUpdateNotesStatus {
  /**
   * We preserve the order of the attribute items from the bulk update notes request in this collection.  The ith object in this collection represents the
   * bulk update notes operation status of the ith object in the BulkUpdateAttributeNotesDetails object in the Bulk update notes request.  If the
   * bulk update notes operation results in a processing error or a validation error, the operationStatus property in the  BulkUpdateNotesMetadata object will
   * contain the appropriate bulk error status for the bulk operation.
   *
   */
  "attributeStatuses": Array<model.AttributeUpdateNotesResponse>;
  "bulkUpdateNotesMetadata": model.BulkUpdateNotesMetadata;
}

export namespace BulkUpdateNotesStatus {
  export function getJsonObj(obj: BulkUpdateNotesStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "attributeStatuses": obj.attributeStatuses
          ? obj.attributeStatuses.map(item => {
              return model.AttributeUpdateNotesResponse.getJsonObj(item);
            })
          : undefined,
        "bulkUpdateNotesMetadata": obj.bulkUpdateNotesMetadata
          ? model.BulkUpdateNotesMetadata.getJsonObj(obj.bulkUpdateNotesMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkUpdateNotesStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "attributeStatuses": obj.attributeStatuses
          ? obj.attributeStatuses.map(item => {
              return model.AttributeUpdateNotesResponse.getDeserializedJsonObj(item);
            })
          : undefined,
        "bulkUpdateNotesMetadata": obj.bulkUpdateNotesMetadata
          ? model.BulkUpdateNotesMetadata.getDeserializedJsonObj(obj.bulkUpdateNotesMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
