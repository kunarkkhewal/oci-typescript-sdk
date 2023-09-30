/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Updates the Exadata infrastructure. Applies to Exadata Cloud@Customer instances only.
 * See {@link #updateCloudExadataInfrastructureDetails(UpdateCloudExadataInfrastructureDetailsRequest) updateCloudExadataInfrastructureDetails} for information on updating Exadata Cloud Service cloud Exadata infrastructure resources.
 *
 */
export interface UpdateExadataInfrastructureDetails {
  /**
   * The IP address for the first control plane server.
   */
  "cloudControlPlaneServer1"?: string;
  /**
   * The IP address for the second control plane server.
   */
  "cloudControlPlaneServer2"?: string;
  /**
   * The netmask for the control plane network.
   */
  "netmask"?: string;
  /**
   * The gateway for the control plane network.
   */
  "gateway"?: string;
  /**
   * The CIDR block for the Exadata administration network.
   */
  "adminNetworkCIDR"?: string;
  /**
   * The CIDR block for the Exadata InfiniBand interconnect.
   */
  "infiniBandNetworkCIDR"?: string;
  /**
   * The corporate network proxy for access to the control plane network.
   */
  "corporateProxy"?: string;
  /**
   * The list of contacts for the Exadata infrastructure.
   */
  "contacts"?: Array<model.ExadataInfrastructureContact>;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The requested number of additional storage servers for the Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "additionalStorageCount"?: number;
  /**
   * Indicates if deployment is Multi-Rack or not.
   */
  "isMultiRackDeployment"?: boolean;
  /**
   * The base64 encoded Multi-Rack configuration json file.
   */
  "multiRackConfigurationFile"?: string;
  /**
   * The requested number of additional compute servers for the Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "additionalComputeCount"?: number;
  /**
   * Oracle Exadata System Model specification. The system model determines the amount of compute or storage
   * server resources available for use. For more information, please see [System and Shape Configuration Options]
   * (https://docs.oracle.com/en/engineered-systems/exadata-cloud-at-customer/ecccm/ecc-system-config-options.html#GUID-9E090174-5C57-4EB1-9243-B470F9F10D6B)
   *
   */
  "additionalComputeSystemModel"?: UpdateExadataInfrastructureDetails.AdditionalComputeSystemModel;
  /**
   * The list of DNS server IP addresses. Maximum of 3 allowed.
   */
  "dnsServer"?: Array<string>;
  /**
   * The list of NTP server IP addresses. Maximum of 3 allowed.
   */
  "ntpServer"?: Array<string>;
  /**
   * The time zone of the Exadata infrastructure. For details, see [Exadata Infrastructure Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   *
   */
  "timeZone"?: string;
  /**
   * Indicates whether cps offline diagnostic report is enabled for this Exadata infrastructure. This will allow a customer to quickly check status themselves and fix problems on their end, saving time and frustration
   * for both Oracle and the customer when they find the CPS in a disconnected state.You can enable offline diagnostic report during Exadata infrastructure provisioning. You can also disable or enable it at any time
   * using the UpdateExadatainfrastructure API.
   *
   */
  "isCpsOfflineReportEnabled"?: boolean;
  "networkBondingModeDetails"?: model.NetworkBondingModeDetails;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateExadataInfrastructureDetails {
  export enum AdditionalComputeSystemModel {
    X7 = "X7",
    X8 = "X8",
    X8M = "X8M",
    X9M = "X9M",
    X10M = "X10M"
  }

  export function getJsonObj(obj: UpdateExadataInfrastructureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "contacts": obj.contacts
          ? obj.contacts.map(item => {
              return model.ExadataInfrastructureContact.getJsonObj(item);
            })
          : undefined,
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined,

        "networkBondingModeDetails": obj.networkBondingModeDetails
          ? model.NetworkBondingModeDetails.getJsonObj(obj.networkBondingModeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateExadataInfrastructureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "contacts": obj.contacts
          ? obj.contacts.map(item => {
              return model.ExadataInfrastructureContact.getDeserializedJsonObj(item);
            })
          : undefined,
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined,

        "networkBondingModeDetails": obj.networkBondingModeDetails
          ? model.NetworkBondingModeDetails.getDeserializedJsonObj(obj.networkBondingModeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
