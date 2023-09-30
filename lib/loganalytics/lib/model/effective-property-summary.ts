/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * A property and its effective value details.
 */
export interface EffectivePropertySummary {
  /**
   * The property name.
   */
  "name": string;
  /**
   * The effective value of the property. This is determined by considering the value set at the most effective level.
   *
   */
  "value"?: string;
  /**
   * The level from which the effective value was determined.
   */
  "effectiveLevel"?: string;
  /**
   * A list of pattern level override values for the property.
   */
  "patterns"?: Array<model.PatternOverride>;
}

export namespace EffectivePropertySummary {
  export function getJsonObj(obj: EffectivePropertySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "patterns": obj.patterns
          ? obj.patterns.map(item => {
              return model.PatternOverride.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EffectivePropertySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "patterns": obj.patterns
          ? obj.patterns.map(item => {
              return model.PatternOverride.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
