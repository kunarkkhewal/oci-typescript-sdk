/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Detailed information about a scheduled job.
 */
export interface ScheduledJob {
  /**
   * The OCID of the scheduled job.
   */
  "id": string;
  /**
   * Scheduled job name.
   */
  "displayName": string;
  /**
   * The OCID of the compartment containing the scheduled job.
   */
  "compartmentId": string;
  /**
   * Details describing the scheduled job.
   */
  "description"?: string;
  /**
   * The type of scheduling this scheduled job follows.
   */
  "scheduleType": model.ScheduleTypes;
  /**
   * The time of the next execution of this scheduled job.
   */
  "timeNextExecution": Date;
  /**
   * The time of the last execution of this scheduled job.
   */
  "timeLastExecution"?: Date;
  /**
   * The recurring rule for a RECURRING scheduled job.
   */
  "recurringRule"?: string;
  /**
   * The list of managed instance OCIDs this scheduled job operates on (mutually exclusive with managedInstanceGroupIds, managedCompartmentIds and lifecycleStageIds).
   */
  "managedInstanceIds"?: Array<string>;
  /**
   * The list of managed instance group OCIDs this scheduled job operates on (mutually exclusive with managedInstances, managedCompartmentIds and lifecycleStageIds).
   */
  "managedInstanceGroupIds"?: Array<string>;
  /**
   * The list of target compartment OCIDs if this scheduled job operates on a compartment level (mutually exclusive with managedInstances, managedInstanceGroupIds and lifecycleStageIds).
   */
  "managedCompartmentIds"?: Array<string>;
  /**
   * The list of target lifecycle stage OCIDs if this scheduled job operates on lifecycle stages (mutually exclusive with managedInstances, managedInstanceGroupIds and managedCompartmentIds).
   */
  "lifecycleStageIds"?: Array<string>;
  /**
   * Whether to create jobs for all compartments in the tenancy when managedCompartmentIds specifies the tenancy OCID.
   */
  "isSubcompartmentIncluded"?: boolean;
  /**
   * The list of operations this scheduled job needs to perform (can only support one operation if the operationType is not UPDATE_PACKAGES/UPDATE_ALL/UPDATE_SECURITY/UPDATE_BUGFIX/UPDATE_ENHANCEMENT/UPDATE_OTHER/UPDATE_KSPLICE_USERSPACE/UPDATE_KSPLICE_KERNEL).
   */
  "operations": Array<model.ScheduledJobOperation>;
  /**
   * The list of work request OCIDs associated with this scheduled job.
   */
  "workRequestIds"?: Array<string>;
  /**
   * The time this scheduled job was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time this scheduled job was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the scheduled job.
   */
  "lifecycleState": ScheduledJob.LifecycleState;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * true, if the schedule job has its update/deletion capabilities restricted. (Used to track scheduled job for management station syncing).
   */
  "isRestricted"?: boolean;
}

export namespace ScheduledJob {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ScheduledJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.ScheduledJobOperation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.ScheduledJobOperation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
