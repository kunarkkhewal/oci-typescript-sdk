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
 * Details of encryption key to be used to encrypt data for shards and catalog for sharded database. For system-defined
 * sharding type, all shards have to use same encryptionKeyDetails. For system-defined sharding, if encryptionKeyDetails
 * are not specified for catalog, then Oracle managed key will be used for catalog.
 * For user-defined sharding type, if encryptionKeyDetails are not provided for any shard or catalog, then Oracle managed
 * key will be used for such shard or catalog. For system-defined or user-defined sharding type, if the shard or catalog
 * has a peer in region other than primary shard or catalog region, then make sure to provide virtual vault for such shard
 * or catalog, which is also replicated to peer region (the region where peer or standby shard or catalog exists).
 *
 */
export interface DedicatedShardOrCatalogEncryptionKeyDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the vault in customer tenancy where KMS key is present.
   * For shard or catalog with cross-region data guard enabled, user needs to make sure to provide virtual private vault only,
   * which is also replicated in the region of standby shard.
   *
   */
  "vaultId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the KMS key in vault identified by vaultId in customer tenancy
   * that is used as the master encryption key.
   *
   */
  "kmsKeyId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the KMS key version for key identified by kmsKeyId
   * that is used in data encryption (TDE) operations.
   *
   */
  "kmsKeyVersionId"?: string;
}

export namespace DedicatedShardOrCatalogEncryptionKeyDetails {
  export function getJsonObj(obj: DedicatedShardOrCatalogEncryptionKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DedicatedShardOrCatalogEncryptionKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
