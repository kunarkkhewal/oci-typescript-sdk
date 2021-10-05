/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * User controllable service variables.
 */
export interface ConfigurationVariables {
  /**
   * (\"completion_type\")
   */
  "completionType"?: ConfigurationVariables.CompletionType;
  /**
   * (\"default_authentication_plugin\")
   */
  "defaultAuthenticationPlugin"?: ConfigurationVariables.DefaultAuthenticationPlugin;
  /**
   * (\"transaction_isolation\")
   */
  "transactionIsolation"?: ConfigurationVariables.TransactionIsolation;
  /**
   * (\"innodb_ft_server_stopword_table\")
   */
  "innodbFtServerStopwordTable"?: string;
  /**
   * (\"mandatory_roles\")
   */
  "mandatoryRoles"?: string;
  /**
   * (\"autocommit\")
   */
  "autocommit"?: boolean;
  /**
   * (\"foreign_key_checks\")
   */
  "foreignKeyChecks"?: boolean;
  /**
   * - EVENTUAL:
   *     Both RO and RW transactions do not wait for preceding transactions to be applied before executing.
   *     A RW transaction does not wait for other members to apply a transaction. This means that a transaction
   *     could be externalized on one member before the others. This also means that in the event of a primary failover,
   *     the new primary can accept new RO and RW transactions before the previous primary transactions are all applied.
   *     RO transactions could result in outdated values, RW transactions could result in a rollback due to conflicts.
   * - BEFORE_ON_PRIMARY_FAILOVER:
   *     New RO or RW transactions with a newly elected primary that is applying backlog from the old
   *     primary are held (not applied) until any backlog has been applied. This ensures that when a primary failover happens,
   *     intentionally or not, clients always see the latest value on the primary. This guarantees consistency, but means that
   *     clients must be able to handle the delay in the event that a backlog is being applied. Usually this delay should be minimal,
   *     but does depend on the size of the backlog.
   * - BEFORE:
   *     A RW transaction waits for all preceding transactions to complete before being applied. A RO transaction waits for all preceding
   *     transactions to complete before being executed. This ensures that this transaction reads the latest value by only affecting the
   *     latency of the transaction. This reduces the overhead of synchronization on every RW transaction, by ensuring synchronization is
   *     used only on RO transactions. This consistency level also includes the consistency guarantees provided by BEFORE_ON_PRIMARY_FAILOVER.
   * - AFTER:
   *     A RW transaction waits until its changes have been applied to all of the other members. This value has no effect on RO transactions.
   *     This mode ensures that when a transaction is committed on the local member, any subsequent transaction reads the written value or
   *     a more recent value on any group member. Use this mode with a group that is used for predominantly RO operations to ensure that
   *     applied RW transactions are applied everywhere once they commit. This could be used by your application to ensure that subsequent
   *     reads fetch the latest data which includes the latest writes. This reduces the overhead of synchronization on every RO transaction,
   *     by ensuring synchronization is used only on RW transactions. This consistency level also includes the consistency guarantees
   *     provided by BEFORE_ON_PRIMARY_FAILOVER.
   * - BEFORE_AND_AFTER:
   *     A RW transaction waits for 1) all preceding transactions to complete before being applied and 2) until its changes have been
   *     applied on other members. A RO transaction waits for all preceding transactions to complete before execution takes place.
   *     This consistency level also includes the consistency guarantees provided by BEFORE_ON_PRIMARY_FAILOVER.
   *
   */
  "groupReplicationConsistency"?: ConfigurationVariables.GroupReplicationConsistency;
  /**
   * (\"innodb_ft_enable_stopword\")
   */
  "innodbFtEnableStopword"?: boolean;
  /**
   * (\"local_infile\")
   */
  "localInfile"?: boolean;
  /**
   * (\"mysql_firewall_mode\")
   */
  "mysqlFirewallMode"?: boolean;
  /**
   * (\"mysqlx_enable_hello_notice\") DEPRECATED -- variable should not be settable and will be ignored
   */
  "mysqlxEnableHelloNotice"?: boolean;
  /**
   * (\"sql_require_primary_key\")
   */
  "sqlRequirePrimaryKey"?: boolean;
  /**
   * (\"sql_warnings\")
   */
  "sqlWarnings"?: boolean;
  /**
   * Sets the binary log expiration period in seconds.
   * binlogExpireLogsSeconds corresponds to the MySQL binary logging system variable [binlog_expire_logs_seconds](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_expire_logs_seconds).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "binlogExpireLogsSeconds"?: number;
  /**
   * Configures the amount of table metadata added to the binary log when using row-based logging.
   * binlogRowMetadata corresponds to the MySQL binary logging system variable [binlog_row_metadata](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_metadata).
   *
   */
  "binlogRowMetadata"?: ConfigurationVariables.BinlogRowMetadata;
  /**
   * When set to PARTIAL_JSON, this enables use of a space-efficient binary log format for updates that modify only a small portion of a JSON document.
   * binlogRowValueOptions corresponds to the MySQL binary logging system variable [binlog_row_value_options](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_value_options).
   *
   */
  "binlogRowValueOptions"?: string;
  /**
   * Enables compression for transactions that are written to binary log files on this server.
   * binlogTransactionCompression corresponds to the MySQL binary logging system variable [binlog_transaction_compression](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_transaction_compression).
   *
   */
  "binlogTransactionCompression"?: boolean;
  /**
   * (\"innodb_buffer_pool_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbBufferPoolSize"?: number;
  /**
   * (\"innodb_ft_result_cache_limit\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtResultCacheLimit"?: number;
  /**
   * (\"max_connections\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxConnections"?: number;
  /**
   * (\"max_prepared_stmt_count\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxPreparedStmtCount"?: number;
  /**
   * (\"connect_timeout\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectTimeout"?: number;
  /**
   * (\"cte_max_recursion_depth\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cteMaxRecursionDepth"?: number;
  /**
   * (\"generated_random_password_length\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "generatedRandomPasswordLength"?: number;
  /**
   * (\"information_schema_stats_expiry\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "informationSchemaStatsExpiry"?: number;
  /**
   * (\"innodb_buffer_pool_instances\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbBufferPoolInstances"?: number;
  /**
   * (\"innodb_ft_max_token_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtMaxTokenSize"?: number;
  /**
   * (\"innodb_ft_min_token_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtMinTokenSize"?: number;
  /**
   * (\"innodb_ft_num_word_optimize\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtNumWordOptimize"?: number;
  /**
   * (\"innodb_lock_wait_timeout\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbLockWaitTimeout"?: number;
  /**
   * (\"innodb_max_purge_lag\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbMaxPurgeLag"?: number;
  /**
   * (\"innodb_max_purge_lag_delay\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbMaxPurgeLagDelay"?: number;
  /**
   * (\"max_execution_time\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxExecutionTime"?: number;
  /**
   * (\"mysqlx_connect_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxConnectTimeout"?: number;
  /**
   * (\"mysqlx_document_id_unique_prefix\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxDocumentIdUniquePrefix"?: number;
  /**
   * (\"mysqlx_idle_worker_thread_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxIdleWorkerThreadTimeout"?: number;
  /**
   * (\"mysqlx_interactive_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxInteractiveTimeout"?: number;
  /**
   * (\"mysqlx_max_allowed_packet\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxMaxAllowedPacket"?: number;
  /**
   * (\"mysqlx_min_worker_threads\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxMinWorkerThreads"?: number;
  /**
   * (\"mysqlx_read_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxReadTimeout"?: number;
  /**
   * (\"mysqlx_wait_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxWaitTimeout"?: number;
  /**
   * (\"mysqlx_write_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxWriteTimeout"?: number;
  /**
   * (\"parser_max_mem_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserMaxMemSize"?: number;
  /**
   * (\"query_alloc_block_size\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryAllocBlockSize"?: number;
  /**
   * (\"query_prealloc_size\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryPreallocSize"?: number;
  /**
   * (\"sql_mode\")
   */
  "sqlMode"?: string;
  /**
   * Set the default compression level for the deflate algorithm. (\"mysqlx_deflate_default_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxDeflateDefaultCompressionLevel"?: number;
  /**
   * Limit the upper bound of accepted compression levels for the deflate algorithm. (\"mysqlx_deflate_max_client_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxDeflateMaxClientCompressionLevel"?: number;
  /**
   * Limit the upper bound of accepted compression levels for the lz4 algorithm. (\"mysqlx_lz4_max_client_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxLz4MaxClientCompressionLevel"?: number;
  /**
   * Set the default compression level for the lz4 algorithm. (\"mysqlx_lz4_default_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxLz4DefaultCompressionLevel"?: number;
  /**
   * Limit the upper bound of accepted compression levels for the zstd algorithm. (\"mysqlx_zstd_max_client_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxZstdMaxClientCompressionLevel"?: number;
  /**
   * Set the default compression level for the zstd algorithm. (\"mysqlx_zstd_default_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxZstdDefaultCompressionLevel"?: number;
  /**
   * DEPRECATED -- typo of mysqlx_zstd_default_compression_level. variable will be ignored. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlZstdDefaultCompressionLevel"?: number;
}

export namespace ConfigurationVariables {
  export enum CompletionType {
    NoChain = "NO_CHAIN",
    Chain = "CHAIN",
    Release = "RELEASE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultAuthenticationPlugin {
    MysqlNativePassword = "mysql_native_password",
    Sha256Password = "sha256_password",
    CachingSha2Password = "caching_sha2_password",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TransactionIsolation {
    ReadUncommitted = "READ-UNCOMMITTED",
    ReadCommited = "READ-COMMITED",
    ReadCommitted = "READ-COMMITTED",
    RepeatableRead = "REPEATABLE-READ",
    Serializable = "SERIALIZABLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum GroupReplicationConsistency {
    Eventual = "EVENTUAL",
    BeforeOnPrimaryFailover = "BEFORE_ON_PRIMARY_FAILOVER",
    Before = "BEFORE",
    After = "AFTER",
    BeforeAndAfter = "BEFORE_AND_AFTER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum BinlogRowMetadata {
    Full = "FULL",
    Minimal = "MINIMAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ConfigurationVariables): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigurationVariables): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
