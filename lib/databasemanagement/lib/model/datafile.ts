/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

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
 * The details of a data file.
 */
export interface Datafile {
  /**
   * The filename (including the path) of the data file or temp file.
   */
  "name": string;
  /**
   * The status of the file. INVALID status is used when the file number is not in use, for example, a file in a tablespace that was removed.
   */
  "status"?: Datafile.Status;
  /**
   * The online status of the file.
   */
  "onlineStatus"?: Datafile.OnlineStatus;
  /**
   * Indicates whether the data file is auto-extensible.
   */
  "isAutoExtensible"?: boolean;
  /**
   * The lost write protection status of the file.
   */
  "lostWriteProtect"?: Datafile.LostWriteProtect;
  /**
   * Type of tablespace this file belongs to. If it's for a shared tablespace, for a local temporary tablespace for RIM (read-only) instances, or for local temporary tablespace for all instance types.
   */
  "shared"?: Datafile.Shared;
  /**
   * Instance ID of the instance to which the temp file belongs. This column has a NULL value for temp files that belong to shared tablespaces. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceId"?: number;
  /**
   * The maximum file size in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSizeKB"?: number;
  /**
   * The allocated file size in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "allocatedSizeKB"?: number;
  /**
   * The size of the file available for user data in KB. The actual size of the file minus the USER_BYTES value is used to store file-related metadata. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "userSizeKB"?: number;
  /**
   * The number of blocks used as auto-extension increment. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "incrementBy"?: number;
  /**
   * The free space available in the data file in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "freeSpaceKB"?: number;
  /**
   * The total space used in the data file in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedSpaceKB"?: number;
  /**
   * The percentage of used space out of the maximum available space in the file. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedPercentAvailable"?: number;
  /**
   * The percentage of used space out of the total allocated space in the file. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedPercentAllocated"?: number;
}

export namespace Datafile {
  export enum Status {
    Available = "AVAILABLE",
    Invalid = "INVALID",
    Offline = "OFFLINE",
    Online = "ONLINE",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OnlineStatus {
    Sysoff = "SYSOFF",
    System = "SYSTEM",
    Offline = "OFFLINE",
    Online = "ONLINE",
    Recover = "RECOVER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LostWriteProtect {
    Enabled = "ENABLED",
    ProtectOff = "PROTECT_OFF",
    Suspend = "SUSPEND",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Shared {
    Shared = "SHARED",
    LocalForRim = "LOCAL_FOR_RIM",
    LocalForAll = "LOCAL_FOR_ALL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Datafile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Datafile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
