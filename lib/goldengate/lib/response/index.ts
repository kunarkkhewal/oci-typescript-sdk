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

import * as CancelDeploymentBackupResponse from "./cancel-deployment-backup-response";
export import CancelDeploymentBackupResponse = CancelDeploymentBackupResponse.CancelDeploymentBackupResponse;
import * as CancelDeploymentUpgradeResponse from "./cancel-deployment-upgrade-response";
export import CancelDeploymentUpgradeResponse = CancelDeploymentUpgradeResponse.CancelDeploymentUpgradeResponse;
import * as CancelSnoozeDeploymentUpgradeResponse from "./cancel-snooze-deployment-upgrade-response";
export import CancelSnoozeDeploymentUpgradeResponse = CancelSnoozeDeploymentUpgradeResponse.CancelSnoozeDeploymentUpgradeResponse;
import * as ChangeConnectionCompartmentResponse from "./change-connection-compartment-response";
export import ChangeConnectionCompartmentResponse = ChangeConnectionCompartmentResponse.ChangeConnectionCompartmentResponse;
import * as ChangeDatabaseRegistrationCompartmentResponse from "./change-database-registration-compartment-response";
export import ChangeDatabaseRegistrationCompartmentResponse = ChangeDatabaseRegistrationCompartmentResponse.ChangeDatabaseRegistrationCompartmentResponse;
import * as ChangeDeploymentBackupCompartmentResponse from "./change-deployment-backup-compartment-response";
export import ChangeDeploymentBackupCompartmentResponse = ChangeDeploymentBackupCompartmentResponse.ChangeDeploymentBackupCompartmentResponse;
import * as ChangeDeploymentCompartmentResponse from "./change-deployment-compartment-response";
export import ChangeDeploymentCompartmentResponse = ChangeDeploymentCompartmentResponse.ChangeDeploymentCompartmentResponse;
import * as CollectDeploymentDiagnosticResponse from "./collect-deployment-diagnostic-response";
export import CollectDeploymentDiagnosticResponse = CollectDeploymentDiagnosticResponse.CollectDeploymentDiagnosticResponse;
import * as CopyDeploymentBackupResponse from "./copy-deployment-backup-response";
export import CopyDeploymentBackupResponse = CopyDeploymentBackupResponse.CopyDeploymentBackupResponse;
import * as CreateConnectionResponse from "./create-connection-response";
export import CreateConnectionResponse = CreateConnectionResponse.CreateConnectionResponse;
import * as CreateConnectionAssignmentResponse from "./create-connection-assignment-response";
export import CreateConnectionAssignmentResponse = CreateConnectionAssignmentResponse.CreateConnectionAssignmentResponse;
import * as CreateDatabaseRegistrationResponse from "./create-database-registration-response";
export import CreateDatabaseRegistrationResponse = CreateDatabaseRegistrationResponse.CreateDatabaseRegistrationResponse;
import * as CreateDeploymentResponse from "./create-deployment-response";
export import CreateDeploymentResponse = CreateDeploymentResponse.CreateDeploymentResponse;
import * as CreateDeploymentBackupResponse from "./create-deployment-backup-response";
export import CreateDeploymentBackupResponse = CreateDeploymentBackupResponse.CreateDeploymentBackupResponse;
import * as DeleteConnectionResponse from "./delete-connection-response";
export import DeleteConnectionResponse = DeleteConnectionResponse.DeleteConnectionResponse;
import * as DeleteConnectionAssignmentResponse from "./delete-connection-assignment-response";
export import DeleteConnectionAssignmentResponse = DeleteConnectionAssignmentResponse.DeleteConnectionAssignmentResponse;
import * as DeleteDatabaseRegistrationResponse from "./delete-database-registration-response";
export import DeleteDatabaseRegistrationResponse = DeleteDatabaseRegistrationResponse.DeleteDatabaseRegistrationResponse;
import * as DeleteDeploymentResponse from "./delete-deployment-response";
export import DeleteDeploymentResponse = DeleteDeploymentResponse.DeleteDeploymentResponse;
import * as DeleteDeploymentBackupResponse from "./delete-deployment-backup-response";
export import DeleteDeploymentBackupResponse = DeleteDeploymentBackupResponse.DeleteDeploymentBackupResponse;
import * as DeploymentWalletExistsResponse from "./deployment-wallet-exists-response";
export import DeploymentWalletExistsResponse = DeploymentWalletExistsResponse.DeploymentWalletExistsResponse;
import * as ExportDeploymentWalletResponse from "./export-deployment-wallet-response";
export import ExportDeploymentWalletResponse = ExportDeploymentWalletResponse.ExportDeploymentWalletResponse;
import * as GetConnectionResponse from "./get-connection-response";
export import GetConnectionResponse = GetConnectionResponse.GetConnectionResponse;
import * as GetConnectionAssignmentResponse from "./get-connection-assignment-response";
export import GetConnectionAssignmentResponse = GetConnectionAssignmentResponse.GetConnectionAssignmentResponse;
import * as GetDatabaseRegistrationResponse from "./get-database-registration-response";
export import GetDatabaseRegistrationResponse = GetDatabaseRegistrationResponse.GetDatabaseRegistrationResponse;
import * as GetDeploymentResponse from "./get-deployment-response";
export import GetDeploymentResponse = GetDeploymentResponse.GetDeploymentResponse;
import * as GetDeploymentBackupResponse from "./get-deployment-backup-response";
export import GetDeploymentBackupResponse = GetDeploymentBackupResponse.GetDeploymentBackupResponse;
import * as GetDeploymentUpgradeResponse from "./get-deployment-upgrade-response";
export import GetDeploymentUpgradeResponse = GetDeploymentUpgradeResponse.GetDeploymentUpgradeResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ImportDeploymentWalletResponse from "./import-deployment-wallet-response";
export import ImportDeploymentWalletResponse = ImportDeploymentWalletResponse.ImportDeploymentWalletResponse;
import * as ListConnectionAssignmentsResponse from "./list-connection-assignments-response";
export import ListConnectionAssignmentsResponse = ListConnectionAssignmentsResponse.ListConnectionAssignmentsResponse;
import * as ListConnectionsResponse from "./list-connections-response";
export import ListConnectionsResponse = ListConnectionsResponse.ListConnectionsResponse;
import * as ListDatabaseRegistrationsResponse from "./list-database-registrations-response";
export import ListDatabaseRegistrationsResponse = ListDatabaseRegistrationsResponse.ListDatabaseRegistrationsResponse;
import * as ListDeploymentBackupsResponse from "./list-deployment-backups-response";
export import ListDeploymentBackupsResponse = ListDeploymentBackupsResponse.ListDeploymentBackupsResponse;
import * as ListDeploymentTypesResponse from "./list-deployment-types-response";
export import ListDeploymentTypesResponse = ListDeploymentTypesResponse.ListDeploymentTypesResponse;
import * as ListDeploymentUpgradesResponse from "./list-deployment-upgrades-response";
export import ListDeploymentUpgradesResponse = ListDeploymentUpgradesResponse.ListDeploymentUpgradesResponse;
import * as ListDeploymentVersionsResponse from "./list-deployment-versions-response";
export import ListDeploymentVersionsResponse = ListDeploymentVersionsResponse.ListDeploymentVersionsResponse;
import * as ListDeploymentWalletsOperationsResponse from "./list-deployment-wallets-operations-response";
export import ListDeploymentWalletsOperationsResponse = ListDeploymentWalletsOperationsResponse.ListDeploymentWalletsOperationsResponse;
import * as ListDeploymentsResponse from "./list-deployments-response";
export import ListDeploymentsResponse = ListDeploymentsResponse.ListDeploymentsResponse;
import * as ListMessagesResponse from "./list-messages-response";
export import ListMessagesResponse = ListMessagesResponse.ListMessagesResponse;
import * as ListTrailFilesResponse from "./list-trail-files-response";
export import ListTrailFilesResponse = ListTrailFilesResponse.ListTrailFilesResponse;
import * as ListTrailSequencesResponse from "./list-trail-sequences-response";
export import ListTrailSequencesResponse = ListTrailSequencesResponse.ListTrailSequencesResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
import * as RescheduleDeploymentUpgradeResponse from "./reschedule-deployment-upgrade-response";
export import RescheduleDeploymentUpgradeResponse = RescheduleDeploymentUpgradeResponse.RescheduleDeploymentUpgradeResponse;
import * as RestoreDeploymentResponse from "./restore-deployment-response";
export import RestoreDeploymentResponse = RestoreDeploymentResponse.RestoreDeploymentResponse;
import * as RollbackDeploymentUpgradeResponse from "./rollback-deployment-upgrade-response";
export import RollbackDeploymentUpgradeResponse = RollbackDeploymentUpgradeResponse.RollbackDeploymentUpgradeResponse;
import * as SnoozeDeploymentUpgradeResponse from "./snooze-deployment-upgrade-response";
export import SnoozeDeploymentUpgradeResponse = SnoozeDeploymentUpgradeResponse.SnoozeDeploymentUpgradeResponse;
import * as StartDeploymentResponse from "./start-deployment-response";
export import StartDeploymentResponse = StartDeploymentResponse.StartDeploymentResponse;
import * as StopDeploymentResponse from "./stop-deployment-response";
export import StopDeploymentResponse = StopDeploymentResponse.StopDeploymentResponse;
import * as TestConnectionAssignmentResponse from "./test-connection-assignment-response";
export import TestConnectionAssignmentResponse = TestConnectionAssignmentResponse.TestConnectionAssignmentResponse;
import * as UpdateConnectionResponse from "./update-connection-response";
export import UpdateConnectionResponse = UpdateConnectionResponse.UpdateConnectionResponse;
import * as UpdateDatabaseRegistrationResponse from "./update-database-registration-response";
export import UpdateDatabaseRegistrationResponse = UpdateDatabaseRegistrationResponse.UpdateDatabaseRegistrationResponse;
import * as UpdateDeploymentResponse from "./update-deployment-response";
export import UpdateDeploymentResponse = UpdateDeploymentResponse.UpdateDeploymentResponse;
import * as UpdateDeploymentBackupResponse from "./update-deployment-backup-response";
export import UpdateDeploymentBackupResponse = UpdateDeploymentBackupResponse.UpdateDeploymentBackupResponse;
import * as UpgradeDeploymentResponse from "./upgrade-deployment-response";
export import UpgradeDeploymentResponse = UpgradeDeploymentResponse.UpgradeDeploymentResponse;
import * as UpgradeDeploymentUpgradeResponse from "./upgrade-deployment-upgrade-response";
export import UpgradeDeploymentUpgradeResponse = UpgradeDeploymentUpgradeResponse.UpgradeDeploymentUpgradeResponse;
