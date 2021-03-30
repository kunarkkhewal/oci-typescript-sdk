/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of replication status across all replica regions
 */
export interface ReplicationStatusDetails {
  "replicaDetails"?: Array<model.ReplicaDetails>;
}

export namespace ReplicationStatusDetails {
  export function getJsonObj(obj: ReplicationStatusDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicaDetails": obj.replicaDetails
          ? obj.replicaDetails.map(item => {
              return model.ReplicaDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
