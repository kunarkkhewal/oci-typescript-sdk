/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * 'DB' type Exadata Fleet Update Collection summary.
 *
 */
export interface DbFsuCollectionSummary extends model.FsuCollectionSummary {
  /**
   * Database Major Version of targets to be included in the Exadata Fleet Update Collection.
   * https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbVersionSummary/ListDbVersions
   * Only Database targets that match the version specified in this value would be added to the Exadata Fleet Update Collection.
   *
   */
  "sourceMajorVersion": model.DbSourceMajorVersions;

  "type": string;
}

export namespace DbFsuCollectionSummary {
  export function getJsonObj(obj: DbFsuCollectionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FsuCollectionSummary.getJsonObj(obj) as DbFsuCollectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DB";
  export function getDeserializedJsonObj(
    obj: DbFsuCollectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FsuCollectionSummary.getDeserializedJsonObj(obj) as DbFsuCollectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}
