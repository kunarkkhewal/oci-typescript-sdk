/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The protocol address that an external listener is configured to listen on.
 */
export interface ExternalListenerEndpoint {
  /**
   * The list of services registered with the listener.
   */
  "services"?: Array<string>;

  "protocol": string;
}

export namespace ExternalListenerEndpoint {
  export function getJsonObj(obj: ExternalListenerEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "protocol" in obj && obj.protocol) {
      switch (obj.protocol) {
        case "TCP":
          return model.ExternalListenerTcpEndpoint.getJsonObj(
            <model.ExternalListenerTcpEndpoint>(<object>jsonObj),
            true
          );
        case "TCPS":
          return model.ExternalListenerTcpsEndpoint.getJsonObj(
            <model.ExternalListenerTcpsEndpoint>(<object>jsonObj),
            true
          );
        case "IPC":
          return model.ExternalListenerIpcEndpoint.getJsonObj(
            <model.ExternalListenerIpcEndpoint>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.protocol}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalListenerEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "protocol" in obj && obj.protocol) {
      switch (obj.protocol) {
        case "TCP":
          return model.ExternalListenerTcpEndpoint.getDeserializedJsonObj(
            <model.ExternalListenerTcpEndpoint>(<object>jsonObj),
            true
          );
        case "TCPS":
          return model.ExternalListenerTcpsEndpoint.getDeserializedJsonObj(
            <model.ExternalListenerTcpsEndpoint>(<object>jsonObj),
            true
          );
        case "IPC":
          return model.ExternalListenerIpcEndpoint.getDeserializedJsonObj(
            <model.ExternalListenerIpcEndpoint>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.protocol}`);
      }
    }
    return jsonObj;
  }
}
