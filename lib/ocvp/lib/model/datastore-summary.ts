/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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
 * Datastore summary for a getting an Sddc.
 *
 */
export interface DatastoreSummary {
  /**
   * A list of [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)s of Block Storage Volumes.
   */
  "blockVolumeIds": Array<string>;
  /**
   * Type of the datastore.
   */
  "datastoreType": model.DatastoreTypes;
  /**
   * Size of the Block Storage Volume in GB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "capacity": number;
}

export namespace DatastoreSummary {
  export function getJsonObj(obj: DatastoreSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatastoreSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
