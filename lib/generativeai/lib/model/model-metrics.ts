/**
 * Generative AI Service Management API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service management API to create and manage [dedicated AI clusters](#/en/generative-ai/latest/DedicatedAiCluster/), [endpoints](#/en/generative-ai/latest/Endpoint/), [custom models](#/en/generative-ai/latest/Model/), and [work requests](#/en/generative-ai/latest/WorkRequest/) in the Generative AI service. For example, create a custom model by fine-tuning an out-of-the-box model using your own data, on a fine-tuning dedicated AI cluster. Then, create a hosting dedicated AI cluster with an endpoint to host your custom model. 

To access your custom model endpoints, or to try the out-of-the-box models to generate text, summarize, and create text embeddings see the [Generative AI Inference API](/#/en/generative-ai-inference/latest/).

To learn more about the service, see the [Generative AI documentation](/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
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
 * Model metrics during the creation of a new model.
 */
export interface ModelMetrics {
  "modelMetricsType": string;
}

export namespace ModelMetrics {
  export function getJsonObj(obj: ModelMetrics): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelMetricsType" in obj && obj.modelMetricsType) {
      switch (obj.modelMetricsType) {
        case "TEXT_GENERATION_MODEL_METRICS":
          return model.TextGenerationModelMetrics.getJsonObj(
            <model.TextGenerationModelMetrics>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.modelMetricsType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelMetrics): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelMetricsType" in obj && obj.modelMetricsType) {
      switch (obj.modelMetricsType) {
        case "TEXT_GENERATION_MODEL_METRICS":
          return model.TextGenerationModelMetrics.getDeserializedJsonObj(
            <model.TextGenerationModelMetrics>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.modelMetricsType}`);
      }
    }
    return jsonObj;
  }
}
