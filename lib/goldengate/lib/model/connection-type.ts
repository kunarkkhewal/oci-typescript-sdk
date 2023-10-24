/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The connection type.
 *
 **/
export enum ConnectionType {
  Goldengate = "GOLDENGATE",
  Kafka = "KAFKA",
  KafkaSchemaRegistry = "KAFKA_SCHEMA_REGISTRY",
  Mysql = "MYSQL",
  JavaMessageService = "JAVA_MESSAGE_SERVICE",
  MicrosoftSqlserver = "MICROSOFT_SQLSERVER",
  OciObjectStorage = "OCI_OBJECT_STORAGE",
  Oracle = "ORACLE",
  AzureDataLakeStorage = "AZURE_DATA_LAKE_STORAGE",
  Postgresql = "POSTGRESQL",
  AzureSynapseAnalytics = "AZURE_SYNAPSE_ANALYTICS",
  Snowflake = "SNOWFLAKE",
  AmazonS3 = "AMAZON_S3",
  Hdfs = "HDFS",
  OracleNosql = "ORACLE_NOSQL",
  Mongodb = "MONGODB",
  AmazonKinesis = "AMAZON_KINESIS",
  AmazonRedshift = "AMAZON_REDSHIFT",
  Redis = "REDIS",
  Elasticsearch = "ELASTICSEARCH",
  Generic = "GENERIC",
  GoogleCloudStorage = "GOOGLE_CLOUD_STORAGE",
  GoogleBigquery = "GOOGLE_BIGQUERY",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ConnectionType {
  export function getJsonObj(obj: ConnectionType): ConnectionType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ConnectionType): ConnectionType {
    return obj;
  }
}
