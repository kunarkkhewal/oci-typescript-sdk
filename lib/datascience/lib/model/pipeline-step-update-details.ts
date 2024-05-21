/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The details of the step to update.
 */
export interface PipelineStepUpdateDetails {
  /**
   * The name of the step.
   */
  "stepName": string;
  /**
   * A short description of the step.
   */
  "description"?: string;
  "stepConfigurationDetails"?: model.PipelineStepConfigurationDetails;

  "stepType": string;
}

export namespace PipelineStepUpdateDetails {
  export function getJsonObj(obj: PipelineStepUpdateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "stepConfigurationDetails": obj.stepConfigurationDetails
          ? model.PipelineStepConfigurationDetails.getJsonObj(obj.stepConfigurationDetails)
          : undefined
      }
    };

    if (obj && "stepType" in obj && obj.stepType) {
      switch (obj.stepType) {
        case "ML_JOB":
          return model.PipelineMLJobStepUpdateDetails.getJsonObj(
            <model.PipelineMLJobStepUpdateDetails>(<object>jsonObj),
            true
          );
        case "CUSTOM_SCRIPT":
          return model.PipelineCustomScriptStepUpdateDetails.getJsonObj(
            <model.PipelineCustomScriptStepUpdateDetails>(<object>jsonObj),
            true
          );
        case "CONTAINER":
          return model.PipelineContainerStepUpdateDetails.getJsonObj(
            <model.PipelineContainerStepUpdateDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.stepType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PipelineStepUpdateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "stepConfigurationDetails": obj.stepConfigurationDetails
          ? model.PipelineStepConfigurationDetails.getDeserializedJsonObj(
              obj.stepConfigurationDetails
            )
          : undefined
      }
    };

    if (obj && "stepType" in obj && obj.stepType) {
      switch (obj.stepType) {
        case "ML_JOB":
          return model.PipelineMLJobStepUpdateDetails.getDeserializedJsonObj(
            <model.PipelineMLJobStepUpdateDetails>(<object>jsonObj),
            true
          );
        case "CUSTOM_SCRIPT":
          return model.PipelineCustomScriptStepUpdateDetails.getDeserializedJsonObj(
            <model.PipelineCustomScriptStepUpdateDetails>(<object>jsonObj),
            true
          );
        case "CONTAINER":
          return model.PipelineContainerStepUpdateDetails.getDeserializedJsonObj(
            <model.PipelineContainerStepUpdateDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.stepType}`);
      }
    }
    return jsonObj;
  }
}
