/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateShardedDatabase = "CREATE_SHARDED_DATABASE",
  DeleteShardedDatabase = "DELETE_SHARDED_DATABASE",
  UpdateShardedDatabase = "UPDATE_SHARDED_DATABASE",
  ConfigureShardedDatabaseGsms = "CONFIGURE_SHARDED_DATABASE_GSMS",
  StartShardedDatabase = "START_SHARDED_DATABASE",
  StopShardedDatabase = "STOP_SHARDED_DATABASE",
  ValidateNetwork = "VALIDATE_NETWORK",
  ChangeShardedDbCompartment = "CHANGE_SHARDED_DB_COMPARTMENT",
  CreatePrivateEndpoint = "CREATE_PRIVATE_ENDPOINT",
  UpdatePrivateEndpoint = "UPDATE_PRIVATE_ENDPOINT",
  DeletePrivateEndpoint = "DELETE_PRIVATE_ENDPOINT",
  ChangePrivateEndpointCompartment = "CHANGE_PRIVATE_ENDPOINT_COMPARTMENT",
  InsertShards = "INSERT_SHARDS",
  RemoveShards = "REMOVE_SHARDS",
  MergeCatalogShards = "MERGE_CATALOG_SHARDS",
  UploadSignedCertAndGenerateWallet = "UPLOAD_SIGNED_CERT_AND_GENERATE_WALLET",
  GenerateGsmCertSigningReq = "GENERATE_GSM_CERT_SIGNING_REQ",
  ConfigureSharding = "CONFIGURE_SHARDING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}
