/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about the new Packaging Configuration.
 */
export interface CreateStreamPackagingConfigDetails {
  /**
   * Unique identifier of the Distribution Channel that this stream packaging configuration belongs to.
   */
  "distributionChannelId": string;
  /**
   * The name of the stream Packaging Configuration. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The output format for the package.
   */
  "streamPackagingFormat": CreateStreamPackagingConfigDetails.StreamPackagingFormat;
  /**
   * The duration in seconds for each fragment. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "segmentTimeInSeconds": number;
  "encryption"?:
    | model.StreamPackagingConfigEncryptionAes128
    | model.StreamPackagingConfigEncryptionNone;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateStreamPackagingConfigDetails {
  export enum StreamPackagingFormat {
    Hls = "HLS",
    Dash = "DASH"
  }

  export function getJsonObj(obj: CreateStreamPackagingConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "encryption": obj.encryption
          ? model.StreamPackagingConfigEncryption.getJsonObj(obj.encryption)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateStreamPackagingConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "encryption": obj.encryption
          ? model.StreamPackagingConfigEncryption.getDeserializedJsonObj(obj.encryption)
          : undefined
      }
    };

    return jsonObj;
  }
}
