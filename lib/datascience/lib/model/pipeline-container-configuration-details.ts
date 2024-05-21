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
 * Container Details for a step in pipeline.
 */
export interface PipelineContainerConfigurationDetails {
  "containerType": string;
}

export namespace PipelineContainerConfigurationDetails {
  export function getJsonObj(obj: PipelineContainerConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "containerType" in obj && obj.containerType) {
      switch (obj.containerType) {
        case "OCIR_CONTAINER":
          return model.PipelineOcirContainerConfigurationDetails.getJsonObj(
            <model.PipelineOcirContainerConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.containerType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PipelineContainerConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "containerType" in obj && obj.containerType) {
      switch (obj.containerType) {
        case "OCIR_CONTAINER":
          return model.PipelineOcirContainerConfigurationDetails.getDeserializedJsonObj(
            <model.PipelineOcirContainerConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.containerType}`);
      }
    }
    return jsonObj;
  }
}
