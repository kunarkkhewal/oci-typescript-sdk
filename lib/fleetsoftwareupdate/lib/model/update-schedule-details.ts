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
 * Scheduling related details for the Exadata Fleet Update Action.
 * The specified time should not conflict with existing Exadata Infrastructure maintenance windows.
 * 'NONE' type scheduleDetails for UpdateAction would execute the Exadata Fleet Update Action as soon as possible.
 *
 */
export interface UpdateScheduleDetails {
  "type": string;
}

export namespace UpdateScheduleDetails {
  export function getJsonObj(obj: UpdateScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NONE":
          return model.NoneScheduleDetails.getJsonObj(
            <model.NoneScheduleDetails>(<object>jsonObj),
            true
          );
        case "START_TIME":
          return model.UpdateStartTimeScheduleDetails.getJsonObj(
            <model.UpdateStartTimeScheduleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NONE":
          return model.NoneScheduleDetails.getDeserializedJsonObj(
            <model.NoneScheduleDetails>(<object>jsonObj),
            true
          );
        case "START_TIME":
          return model.UpdateStartTimeScheduleDetails.getDeserializedJsonObj(
            <model.UpdateStartTimeScheduleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
