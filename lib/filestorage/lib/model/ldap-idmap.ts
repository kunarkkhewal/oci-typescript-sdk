/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Mount target details about the LDAP ID mapping configuration.
 *
 */
export interface LdapIdmap {
  /**
   * Schema type of the LDAP account.
   */
  "schemaType"?: LdapIdmap.SchemaType;
  /**
   * The amount of time that the mount target should allow an entry to persist in its cache before attempting to refresh the entry. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cacheRefreshIntervalSeconds"?: number;
  /**
   * The maximum amount of time the mount target is allowed to use a cached entry. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cacheLifetimeSeconds"?: number;
  /**
   * The amount of time that a mount target will maintain information that a user is not found in the ID mapping configuration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "negativeCacheLifetimeSeconds"?: number;
  /**
    * All LDAP searches are recursive starting at this user.
* <p>
Example: `CN=User,DC=domain,DC=com`
* 
    */
  "userSearchBase"?: string;
  /**
    * All LDAP searches are recursive starting at this group.
* <p>
Example: `CN=Group,DC=domain,DC=com`
* 
    */
  "groupSearchBase"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the first connector to use to communicate with the LDAP server.
   */
  "outboundConnector1Id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the second connector to use to communicate with the LDAP server.
   */
  "outboundConnector2Id"?: string;
}

export namespace LdapIdmap {
  export enum SchemaType {
    Rfc2307 = "RFC2307",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LdapIdmap): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LdapIdmap): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
