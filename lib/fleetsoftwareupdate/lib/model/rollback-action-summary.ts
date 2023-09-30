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
 * Rollback Exadata Fleet Update Action summary.
 *
 */
export interface RollbackActionSummary extends model.FsuActionSummary {
  /**
   * OCID identifier for the Exadata Fleet Update Cycle the Action will be part of.
   *
   */
  "fsuCycleId": string;
  /**
   * OCID identifier for the Exadata Fleet Update Action.
   *
   */
  "relatedFsuActionId"?: string;
  "scheduleDetails"?: model.StartTimeScheduleDetails;
  "progress"?: model.FsuActionProgressDetails;
  "details"?: model.ListOfTargetsRollbackDetails | model.FailedJobsRollbackDetails;

  "type": string;
}

export namespace RollbackActionSummary {
  export function getJsonObj(obj: RollbackActionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FsuActionSummary.getJsonObj(obj) as RollbackActionSummary)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? model.ScheduleDetails.getJsonObj(obj.scheduleDetails)
          : undefined,
        "progress": obj.progress
          ? model.FsuActionProgressDetails.getJsonObj(obj.progress)
          : undefined,
        "details": obj.details ? model.RollbackDetails.getJsonObj(obj.details) : undefined
      }
    };

    return jsonObj;
  }
  export const type = "ROLLBACK_AND_REMOVE_TARGET";
  export function getDeserializedJsonObj(
    obj: RollbackActionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FsuActionSummary.getDeserializedJsonObj(obj) as RollbackActionSummary)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? model.ScheduleDetails.getDeserializedJsonObj(obj.scheduleDetails)
          : undefined,
        "progress": obj.progress
          ? model.FsuActionProgressDetails.getDeserializedJsonObj(obj.progress)
          : undefined,
        "details": obj.details
          ? model.RollbackDetails.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}
