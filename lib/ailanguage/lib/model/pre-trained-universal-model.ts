/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Possible pre trained universal model information
 */
export interface PreTrainedUniversalModel extends model.ModelDetails {
  /**
   * Optional pre trained model version. if nothing specified latest pre trained model will be used.
   * Supported versions can be found at /modelTypes/{modelType}
   *
   */
  "version"?: string;

  "modelType": string;
}

export namespace PreTrainedUniversalModel {
  export function getJsonObj(obj: PreTrainedUniversalModel, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ModelDetails.getJsonObj(obj) as PreTrainedUniversalModel)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "PRE_TRAINED_UNIVERSAL";
  export function getDeserializedJsonObj(
    obj: PreTrainedUniversalModel,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDetails.getDeserializedJsonObj(obj) as PreTrainedUniversalModel)),
      ...{}
    };

    return jsonObj;
  }
}
