/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Details of the request to start a JFR crypto event analysis.
 * When the targets aren't specified, then all managed instances currently in the fleet are selected.
 *
 */
export interface RequestCryptoAnalysesDetails {
  /**
   * The attachment targets to start JFR.
   */
  "targets"?: Array<model.JfrAttachmentTarget>;
  /**
   * Duration of the JFR recording in minutes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recordingDurationInMinutes"?: number;
  /**
   * Period to looking for JVMs. In addition to attach to running JVMs when given the command,
   * JVM started within the waiting period will also be attached for JFR. The value should be
   * larger than the agent polling interval setting for the fleet to ensure agent can get the
   * instructions. If not specified, the agent polling interval for the fleet is used.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "waitingPeriodInMinutes"?: number;
}

export namespace RequestCryptoAnalysesDetails {
  export function getJsonObj(obj: RequestCryptoAnalysesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.JfrAttachmentTarget.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RequestCryptoAnalysesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.JfrAttachmentTarget.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
