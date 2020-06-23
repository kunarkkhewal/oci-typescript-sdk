/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Common lifecycle states for resources in data catalog:
 * CREATING - The resource is being created and may not be usable until the entire metadata is defined.
 * UPDATING - The resource is being updated and may not be usable until all changes are commited.
 * DELETING - The resource is being deleted and might require deep cleanup of children.
 * ACTIVE   - The resource is valid and available for access.
 * INACTIVE - The resource might be incomplete in its definition or might have been made unavailable for
 *            administrative reasons.
 * DELETED  - The resource has been deleted and isn't available.
 * FAILED   - The resource is in a failed state due to validation or other errors.
 * MOVING   - The resource is being moved to another compartment (action changeCompartment)
 *
 **/
export enum LifecycleState {
  CREATING = "CREATING",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  UPDATING = "UPDATING",
  DELETING = "DELETING",
  DELETED = "DELETED",
  FAILED = "FAILED",
  MOVING = "MOVING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UNKNOWN_VALUE = "UNKNOWN_VALUE"
}

export namespace LifecycleState {
  export function getJsonObj(obj: LifecycleState): object {
    return { obj };
  }
}
