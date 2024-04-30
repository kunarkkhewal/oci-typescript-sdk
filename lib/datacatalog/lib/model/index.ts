/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddResourceLockDetails from "./add-resource-lock-details";
export import AddResourceLockDetails = AddResourceLockDetails.AddResourceLockDetails;
import * as AsynchronousExportDataAssetDetails from "./asynchronous-export-data-asset-details";
export import AsynchronousExportDataAssetDetails = AsynchronousExportDataAssetDetails.AsynchronousExportDataAssetDetails;
import * as AsynchronousExportDataAssetResult from "./asynchronous-export-data-asset-result";
export import AsynchronousExportDataAssetResult = AsynchronousExportDataAssetResult.AsynchronousExportDataAssetResult;
import * as AsynchronousExportGlossaryDetails from "./asynchronous-export-glossary-details";
export import AsynchronousExportGlossaryDetails = AsynchronousExportGlossaryDetails.AsynchronousExportGlossaryDetails;
import * as AsynchronousExportGlossaryResult from "./asynchronous-export-glossary-result";
export import AsynchronousExportGlossaryResult = AsynchronousExportGlossaryResult.AsynchronousExportGlossaryResult;
import * as AsynchronousExportRequestDetails from "./asynchronous-export-request-details";
export import AsynchronousExportRequestDetails = AsynchronousExportRequestDetails.AsynchronousExportRequestDetails;
import * as AsynchronousExportResult from "./asynchronous-export-result";
export import AsynchronousExportResult = AsynchronousExportResult.AsynchronousExportResult;
import * as AttachCatalogPrivateEndpointDetails from "./attach-catalog-private-endpoint-details";
export import AttachCatalogPrivateEndpointDetails = AttachCatalogPrivateEndpointDetails.AttachCatalogPrivateEndpointDetails;
import * as Attribute from "./attribute";
export import Attribute = Attribute.Attribute;
import * as AttributeCollection from "./attribute-collection";
export import AttributeCollection = AttributeCollection.AttributeCollection;
import * as AttributeSummary from "./attribute-summary";
export import AttributeSummary = AttributeSummary.AttributeSummary;
import * as AttributeTag from "./attribute-tag";
export import AttributeTag = AttributeTag.AttributeTag;
import * as AttributeTagCollection from "./attribute-tag-collection";
export import AttributeTagCollection = AttributeTagCollection.AttributeTagCollection;
import * as AttributeTagSummary from "./attribute-tag-summary";
export import AttributeTagSummary = AttributeTagSummary.AttributeTagSummary;
import * as BasePermissionsSummary from "./base-permissions-summary";
export import BasePermissionsSummary = BasePermissionsSummary.BasePermissionsSummary;
import * as BaseTag from "./base-tag";
export import BaseTag = BaseTag.BaseTag;
import * as BaseTagSummary from "./base-tag-summary";
export import BaseTagSummary = BaseTagSummary.BaseTagSummary;
import * as Catalog from "./catalog";
export import Catalog = Catalog.Catalog;
import * as CatalogPermissionsSummary from "./catalog-permissions-summary";
export import CatalogPermissionsSummary = CatalogPermissionsSummary.CatalogPermissionsSummary;
import * as CatalogPrivateEndpoint from "./catalog-private-endpoint";
export import CatalogPrivateEndpoint = CatalogPrivateEndpoint.CatalogPrivateEndpoint;
import * as CatalogPrivateEndpointSummary from "./catalog-private-endpoint-summary";
export import CatalogPrivateEndpointSummary = CatalogPrivateEndpointSummary.CatalogPrivateEndpointSummary;
import * as CatalogSummary from "./catalog-summary";
export import CatalogSummary = CatalogSummary.CatalogSummary;
import * as ChangeCatalogCompartmentDetails from "./change-catalog-compartment-details";
export import ChangeCatalogCompartmentDetails = ChangeCatalogCompartmentDetails.ChangeCatalogCompartmentDetails;
import * as ChangeCatalogPrivateEndpointCompartmentDetails from "./change-catalog-private-endpoint-compartment-details";
export import ChangeCatalogPrivateEndpointCompartmentDetails = ChangeCatalogPrivateEndpointCompartmentDetails.ChangeCatalogPrivateEndpointCompartmentDetails;
import * as ChangeMetastoreCompartmentDetails from "./change-metastore-compartment-details";
export import ChangeMetastoreCompartmentDetails = ChangeMetastoreCompartmentDetails.ChangeMetastoreCompartmentDetails;
import * as Connection from "./connection";
export import Connection = Connection.Connection;
import * as ConnectionAliasSummary from "./connection-alias-summary";
export import ConnectionAliasSummary = ConnectionAliasSummary.ConnectionAliasSummary;
import * as ConnectionCollection from "./connection-collection";
export import ConnectionCollection = ConnectionCollection.ConnectionCollection;
import * as ConnectionResult from "./connection-result";
export import ConnectionResult = ConnectionResult.ConnectionResult;
import * as ConnectionSummary from "./connection-summary";
export import ConnectionSummary = ConnectionSummary.ConnectionSummary;
import * as CreateAttributeDetails from "./create-attribute-details";
export import CreateAttributeDetails = CreateAttributeDetails.CreateAttributeDetails;
import * as CreateCatalogDetails from "./create-catalog-details";
export import CreateCatalogDetails = CreateCatalogDetails.CreateCatalogDetails;
import * as CreateCatalogPrivateEndpointDetails from "./create-catalog-private-endpoint-details";
export import CreateCatalogPrivateEndpointDetails = CreateCatalogPrivateEndpointDetails.CreateCatalogPrivateEndpointDetails;
import * as CreateConnectionDetails from "./create-connection-details";
export import CreateConnectionDetails = CreateConnectionDetails.CreateConnectionDetails;
import * as CreateCustomPropertyDetails from "./create-custom-property-details";
export import CreateCustomPropertyDetails = CreateCustomPropertyDetails.CreateCustomPropertyDetails;
import * as CreateDataAssetDetails from "./create-data-asset-details";
export import CreateDataAssetDetails = CreateDataAssetDetails.CreateDataAssetDetails;
import * as CreateEntityDetails from "./create-entity-details";
export import CreateEntityDetails = CreateEntityDetails.CreateEntityDetails;
import * as CreateFolderDetails from "./create-folder-details";
export import CreateFolderDetails = CreateFolderDetails.CreateFolderDetails;
import * as CreateGlossaryDetails from "./create-glossary-details";
export import CreateGlossaryDetails = CreateGlossaryDetails.CreateGlossaryDetails;
import * as CreateJobDefinitionDetails from "./create-job-definition-details";
export import CreateJobDefinitionDetails = CreateJobDefinitionDetails.CreateJobDefinitionDetails;
import * as CreateJobDetails from "./create-job-details";
export import CreateJobDetails = CreateJobDetails.CreateJobDetails;
import * as CreateJobExecutionDetails from "./create-job-execution-details";
export import CreateJobExecutionDetails = CreateJobExecutionDetails.CreateJobExecutionDetails;
import * as CreateMetastoreDetails from "./create-metastore-details";
export import CreateMetastoreDetails = CreateMetastoreDetails.CreateMetastoreDetails;
import * as CreateNamespaceDetails from "./create-namespace-details";
export import CreateNamespaceDetails = CreateNamespaceDetails.CreateNamespaceDetails;
import * as CreatePatternDetails from "./create-pattern-details";
export import CreatePatternDetails = CreatePatternDetails.CreatePatternDetails;
import * as CreateTagDetails from "./create-tag-details";
export import CreateTagDetails = CreateTagDetails.CreateTagDetails;
import * as CreateTermDetails from "./create-term-details";
export import CreateTermDetails = CreateTermDetails.CreateTermDetails;
import * as CreateTermRelationshipDetails from "./create-term-relationship-details";
export import CreateTermRelationshipDetails = CreateTermRelationshipDetails.CreateTermRelationshipDetails;
import * as CustomProperty from "./custom-property";
export import CustomProperty = CustomProperty.CustomProperty;
import * as CustomPropertyCollection from "./custom-property-collection";
export import CustomPropertyCollection = CustomPropertyCollection.CustomPropertyCollection;
import * as CustomPropertyDataType from "./custom-property-data-type";
export import CustomPropertyDataType = CustomPropertyDataType.CustomPropertyDataType;
import * as CustomPropertyGetUsage from "./custom-property-get-usage";
export import CustomPropertyGetUsage = CustomPropertyGetUsage.CustomPropertyGetUsage;
import * as CustomPropertySetUsage from "./custom-property-set-usage";
export import CustomPropertySetUsage = CustomPropertySetUsage.CustomPropertySetUsage;
import * as CustomPropertySummary from "./custom-property-summary";
export import CustomPropertySummary = CustomPropertySummary.CustomPropertySummary;
import * as CustomPropertyTypeUsage from "./custom-property-type-usage";
export import CustomPropertyTypeUsage = CustomPropertyTypeUsage.CustomPropertyTypeUsage;
import * as DataAsset from "./data-asset";
export import DataAsset = DataAsset.DataAsset;
import * as DataAssetCollection from "./data-asset-collection";
export import DataAssetCollection = DataAssetCollection.DataAssetCollection;
import * as DataAssetExportScope from "./data-asset-export-scope";
export import DataAssetExportScope = DataAssetExportScope.DataAssetExportScope;
import * as DataAssetImportExportTypeFilter from "./data-asset-import-export-type-filter";
export import DataAssetImportExportTypeFilter = DataAssetImportExportTypeFilter.DataAssetImportExportTypeFilter;
import * as DataAssetPermissionsSummary from "./data-asset-permissions-summary";
export import DataAssetPermissionsSummary = DataAssetPermissionsSummary.DataAssetPermissionsSummary;
import * as DataAssetSummary from "./data-asset-summary";
export import DataAssetSummary = DataAssetSummary.DataAssetSummary;
import * as DataAssetTag from "./data-asset-tag";
export import DataAssetTag = DataAssetTag.DataAssetTag;
import * as DataAssetTagCollection from "./data-asset-tag-collection";
export import DataAssetTagCollection = DataAssetTagCollection.DataAssetTagCollection;
import * as DataAssetTagSummary from "./data-asset-tag-summary";
export import DataAssetTagSummary = DataAssetTagSummary.DataAssetTagSummary;
import * as DataSelectorPatternDetails from "./data-selector-pattern-details";
export import DataSelectorPatternDetails = DataSelectorPatternDetails.DataSelectorPatternDetails;
import * as DerivedLogicalEntities from "./derived-logical-entities";
export import DerivedLogicalEntities = DerivedLogicalEntities.DerivedLogicalEntities;
import * as DetachCatalogPrivateEndpointDetails from "./detach-catalog-private-endpoint-details";
export import DetachCatalogPrivateEndpointDetails = DetachCatalogPrivateEndpointDetails.DetachCatalogPrivateEndpointDetails;
import * as Entity from "./entity";
export import Entity = Entity.Entity;
import * as EntityCollection from "./entity-collection";
export import EntityCollection = EntityCollection.EntityCollection;
import * as EntityLineage from "./entity-lineage";
export import EntityLineage = EntityLineage.EntityLineage;
import * as EntitySummary from "./entity-summary";
export import EntitySummary = EntitySummary.EntitySummary;
import * as EntityTag from "./entity-tag";
export import EntityTag = EntityTag.EntityTag;
import * as EntityTagCollection from "./entity-tag-collection";
export import EntityTagCollection = EntityTagCollection.EntityTagCollection;
import * as EntityTagSummary from "./entity-tag-summary";
export import EntityTagSummary = EntityTagSummary.EntityTagSummary;
import * as EventConfig from "./event-config";
export import EventConfig = EventConfig.EventConfig;
import * as EventConfigStatus from "./event-config-status";
export import EventConfigStatus = EventConfigStatus.EventConfigStatus;
import * as ExportDataAssetDetails from "./export-data-asset-details";
export import ExportDataAssetDetails = ExportDataAssetDetails.ExportDataAssetDetails;
import * as FacetedSearchAggregation from "./faceted-search-aggregation";
export import FacetedSearchAggregation = FacetedSearchAggregation.FacetedSearchAggregation;
import * as FacetedSearchCustomProperty from "./faceted-search-custom-property";
export import FacetedSearchCustomProperty = FacetedSearchCustomProperty.FacetedSearchCustomProperty;
import * as FacetedSearchDateFilterRequest from "./faceted-search-date-filter-request";
export import FacetedSearchDateFilterRequest = FacetedSearchDateFilterRequest.FacetedSearchDateFilterRequest;
import * as FacetedSearchFilterRequest from "./faceted-search-filter-request";
export import FacetedSearchFilterRequest = FacetedSearchFilterRequest.FacetedSearchFilterRequest;
import * as FacetedSearchSortRequest from "./faceted-search-sort-request";
export import FacetedSearchSortRequest = FacetedSearchSortRequest.FacetedSearchSortRequest;
import * as FacetedSearchStringFilterRequest from "./faceted-search-string-filter-request";
export import FacetedSearchStringFilterRequest = FacetedSearchStringFilterRequest.FacetedSearchStringFilterRequest;
import * as FetchEntityLineageDetails from "./fetch-entity-lineage-details";
export import FetchEntityLineageDetails = FetchEntityLineageDetails.FetchEntityLineageDetails;
import * as Folder from "./folder";
export import Folder = Folder.Folder;
import * as FolderCollection from "./folder-collection";
export import FolderCollection = FolderCollection.FolderCollection;
import * as FolderSummary from "./folder-summary";
export import FolderSummary = FolderSummary.FolderSummary;
import * as FolderTag from "./folder-tag";
export import FolderTag = FolderTag.FolderTag;
import * as FolderTagCollection from "./folder-tag-collection";
export import FolderTagCollection = FolderTagCollection.FolderTagCollection;
import * as FolderTagSummary from "./folder-tag-summary";
export import FolderTagSummary = FolderTagSummary.FolderTagSummary;
import * as Glossary from "./glossary";
export import Glossary = Glossary.Glossary;
import * as GlossaryCollection from "./glossary-collection";
export import GlossaryCollection = GlossaryCollection.GlossaryCollection;
import * as GlossaryPermissionsSummary from "./glossary-permissions-summary";
export import GlossaryPermissionsSummary = GlossaryPermissionsSummary.GlossaryPermissionsSummary;
import * as GlossarySummary from "./glossary-summary";
export import GlossarySummary = GlossarySummary.GlossarySummary;
import * as GlossaryTreeElement from "./glossary-tree-element";
export import GlossaryTreeElement = GlossaryTreeElement.GlossaryTreeElement;
import * as HarvestStatus from "./harvest-status";
export import HarvestStatus = HarvestStatus.HarvestStatus;
import * as ImportConnectionDetails from "./import-connection-details";
export import ImportConnectionDetails = ImportConnectionDetails.ImportConnectionDetails;
import * as ImportDataAssetDetails from "./import-data-asset-details";
export import ImportDataAssetDetails = ImportDataAssetDetails.ImportDataAssetDetails;
import * as ImportDataAssetJobResult from "./import-data-asset-job-result";
export import ImportDataAssetJobResult = ImportDataAssetJobResult.ImportDataAssetJobResult;
import * as ImportGlossaryDetails from "./import-glossary-details";
export import ImportGlossaryDetails = ImportGlossaryDetails.ImportGlossaryDetails;
import * as ImportLineageDetails from "./import-lineage-details";
export import ImportLineageDetails = ImportLineageDetails.ImportLineageDetails;
import * as ImportLineageJobResult from "./import-lineage-job-result";
export import ImportLineageJobResult = ImportLineageJobResult.ImportLineageJobResult;
import * as Job from "./job";
export import Job = Job.Job;
import * as JobCollection from "./job-collection";
export import JobCollection = JobCollection.JobCollection;
import * as JobDefinition from "./job-definition";
export import JobDefinition = JobDefinition.JobDefinition;
import * as JobDefinitionCollection from "./job-definition-collection";
export import JobDefinitionCollection = JobDefinitionCollection.JobDefinitionCollection;
import * as JobDefinitionPermissionsSummary from "./job-definition-permissions-summary";
export import JobDefinitionPermissionsSummary = JobDefinitionPermissionsSummary.JobDefinitionPermissionsSummary;
import * as JobDefinitionScope from "./job-definition-scope";
export import JobDefinitionScope = JobDefinitionScope.JobDefinitionScope;
import * as JobDefinitionSummary from "./job-definition-summary";
export import JobDefinitionSummary = JobDefinitionSummary.JobDefinitionSummary;
import * as JobExecution from "./job-execution";
export import JobExecution = JobExecution.JobExecution;
import * as JobExecutionCollection from "./job-execution-collection";
export import JobExecutionCollection = JobExecutionCollection.JobExecutionCollection;
import * as JobExecutionState from "./job-execution-state";
export import JobExecutionState = JobExecutionState.JobExecutionState;
import * as JobExecutionSummary from "./job-execution-summary";
export import JobExecutionSummary = JobExecutionSummary.JobExecutionSummary;
import * as JobLifecycleState from "./job-lifecycle-state";
export import JobLifecycleState = JobLifecycleState.JobLifecycleState;
import * as JobLog from "./job-log";
export import JobLog = JobLog.JobLog;
import * as JobLogCollection from "./job-log-collection";
export import JobLogCollection = JobLogCollection.JobLogCollection;
import * as JobLogSummary from "./job-log-summary";
export import JobLogSummary = JobLogSummary.JobLogSummary;
import * as JobMetric from "./job-metric";
export import JobMetric = JobMetric.JobMetric;
import * as JobMetricCollection from "./job-metric-collection";
export import JobMetricCollection = JobMetricCollection.JobMetricCollection;
import * as JobMetricSummary from "./job-metric-summary";
export import JobMetricSummary = JobMetricSummary.JobMetricSummary;
import * as JobScheduleType from "./job-schedule-type";
export import JobScheduleType = JobScheduleType.JobScheduleType;
import * as JobSummary from "./job-summary";
export import JobSummary = JobSummary.JobSummary;
import * as JobType from "./job-type";
export import JobType = JobType.JobType;
import * as LifecycleState from "./lifecycle-state";
export import LifecycleState = LifecycleState.LifecycleState;
import * as LineageDirection from "./lineage-direction";
export import LineageDirection = LineageDirection.LineageDirection;
import * as LineageObject from "./lineage-object";
export import LineageObject = LineageObject.LineageObject;
import * as LineageRelationship from "./lineage-relationship";
export import LineageRelationship = LineageRelationship.LineageRelationship;
import * as Metastore from "./metastore";
export import Metastore = Metastore.Metastore;
import * as MetastoreSummary from "./metastore-summary";
export import MetastoreSummary = MetastoreSummary.MetastoreSummary;
import * as Namespace from "./namespace";
export import Namespace = Namespace.Namespace;
import * as NamespaceCollection from "./namespace-collection";
export import NamespaceCollection = NamespaceCollection.NamespaceCollection;
import * as NamespaceSummary from "./namespace-summary";
export import NamespaceSummary = NamespaceSummary.NamespaceSummary;
import * as ObjectLineage from "./object-lineage";
export import ObjectLineage = ObjectLineage.ObjectLineage;
import * as ObjectLineageRequestDetails from "./object-lineage-request-details";
export import ObjectLineageRequestDetails = ObjectLineageRequestDetails.ObjectLineageRequestDetails;
import * as ObjectRelationship from "./object-relationship";
export import ObjectRelationship = ObjectRelationship.ObjectRelationship;
import * as ObjectStorageObjectReference from "./object-storage-object-reference";
export import ObjectStorageObjectReference = ObjectStorageObjectReference.ObjectStorageObjectReference;
import * as ParseConnectionDetails from "./parse-connection-details";
export import ParseConnectionDetails = ParseConnectionDetails.ParseConnectionDetails;
import * as Pattern from "./pattern";
export import Pattern = Pattern.Pattern;
import * as PatternCollection from "./pattern-collection";
export import PatternCollection = PatternCollection.PatternCollection;
import * as PatternSummary from "./pattern-summary";
export import PatternSummary = PatternSummary.PatternSummary;
import * as ProcessRecommendationDetails from "./process-recommendation-details";
export import ProcessRecommendationDetails = ProcessRecommendationDetails.ProcessRecommendationDetails;
import * as PropertyDefinition from "./property-definition";
export import PropertyDefinition = PropertyDefinition.PropertyDefinition;
import * as RecommendationCollection from "./recommendation-collection";
export import RecommendationCollection = RecommendationCollection.RecommendationCollection;
import * as RecommendationDetails from "./recommendation-details";
export import RecommendationDetails = RecommendationDetails.RecommendationDetails;
import * as RecommendationResourceType from "./recommendation-resource-type";
export import RecommendationResourceType = RecommendationResourceType.RecommendationResourceType;
import * as RecommendationStatus from "./recommendation-status";
export import RecommendationStatus = RecommendationStatus.RecommendationStatus;
import * as RecommendationType from "./recommendation-type";
export import RecommendationType = RecommendationType.RecommendationType;
import * as RemoveResourceLockDetails from "./remove-resource-lock-details";
export import RemoveResourceLockDetails = RemoveResourceLockDetails.RemoveResourceLockDetails;
import * as ResourceLock from "./resource-lock";
export import ResourceLock = ResourceLock.ResourceLock;
import * as RuleAttribute from "./rule-attribute";
export import RuleAttribute = RuleAttribute.RuleAttribute;
import * as RuleCollection from "./rule-collection";
export import RuleCollection = RuleCollection.RuleCollection;
import * as RuleOriginType from "./rule-origin-type";
export import RuleOriginType = RuleOriginType.RuleOriginType;
import * as RuleSummary from "./rule-summary";
export import RuleSummary = RuleSummary.RuleSummary;
import * as RuleType from "./rule-type";
export import RuleType = RuleType.RuleType;
import * as SearchCriteria from "./search-criteria";
export import SearchCriteria = SearchCriteria.SearchCriteria;
import * as SearchResult from "./search-result";
export import SearchResult = SearchResult.SearchResult;
import * as SearchResultCollection from "./search-result-collection";
export import SearchResultCollection = SearchResultCollection.SearchResultCollection;
import * as SearchTagSummary from "./search-tag-summary";
export import SearchTagSummary = SearchTagSummary.SearchTagSummary;
import * as SearchTermSummary from "./search-term-summary";
export import SearchTermSummary = SearchTermSummary.SearchTermSummary;
import * as SuggestListItem from "./suggest-list-item";
export import SuggestListItem = SuggestListItem.SuggestListItem;
import * as SuggestResults from "./suggest-results";
export import SuggestResults = SuggestResults.SuggestResults;
import * as Term from "./term";
export import Term = Term.Term;
import * as TermAssociatedObject from "./term-associated-object";
export import TermAssociatedObject = TermAssociatedObject.TermAssociatedObject;
import * as TermCollection from "./term-collection";
export import TermCollection = TermCollection.TermCollection;
import * as TermRelationship from "./term-relationship";
export import TermRelationship = TermRelationship.TermRelationship;
import * as TermRelationshipCollection from "./term-relationship-collection";
export import TermRelationshipCollection = TermRelationshipCollection.TermRelationshipCollection;
import * as TermRelationshipSummary from "./term-relationship-summary";
export import TermRelationshipSummary = TermRelationshipSummary.TermRelationshipSummary;
import * as TermSummary from "./term-summary";
export import TermSummary = TermSummary.TermSummary;
import * as TermWorkflowStatus from "./term-workflow-status";
export import TermWorkflowStatus = TermWorkflowStatus.TermWorkflowStatus;
import * as Type from "./type";
export import Type = Type.Type;
import * as TypeCollection from "./type-collection";
export import TypeCollection = TypeCollection.TypeCollection;
import * as TypeCustomPropertyDetails from "./type-custom-property-details";
export import TypeCustomPropertyDetails = TypeCustomPropertyDetails.TypeCustomPropertyDetails;
import * as TypeSummary from "./type-summary";
export import TypeSummary = TypeSummary.TypeSummary;
import * as UpdateAttributeDetails from "./update-attribute-details";
export import UpdateAttributeDetails = UpdateAttributeDetails.UpdateAttributeDetails;
import * as UpdateCatalogDetails from "./update-catalog-details";
export import UpdateCatalogDetails = UpdateCatalogDetails.UpdateCatalogDetails;
import * as UpdateCatalogPrivateEndpointDetails from "./update-catalog-private-endpoint-details";
export import UpdateCatalogPrivateEndpointDetails = UpdateCatalogPrivateEndpointDetails.UpdateCatalogPrivateEndpointDetails;
import * as UpdateConnectionDetails from "./update-connection-details";
export import UpdateConnectionDetails = UpdateConnectionDetails.UpdateConnectionDetails;
import * as UpdateCustomPropertyDetails from "./update-custom-property-details";
export import UpdateCustomPropertyDetails = UpdateCustomPropertyDetails.UpdateCustomPropertyDetails;
import * as UpdateDataAssetDetails from "./update-data-asset-details";
export import UpdateDataAssetDetails = UpdateDataAssetDetails.UpdateDataAssetDetails;
import * as UpdateEntityDetails from "./update-entity-details";
export import UpdateEntityDetails = UpdateEntityDetails.UpdateEntityDetails;
import * as UpdateFolderDetails from "./update-folder-details";
export import UpdateFolderDetails = UpdateFolderDetails.UpdateFolderDetails;
import * as UpdateGlossaryDetails from "./update-glossary-details";
export import UpdateGlossaryDetails = UpdateGlossaryDetails.UpdateGlossaryDetails;
import * as UpdateJobDefinitionDetails from "./update-job-definition-details";
export import UpdateJobDefinitionDetails = UpdateJobDefinitionDetails.UpdateJobDefinitionDetails;
import * as UpdateJobDetails from "./update-job-details";
export import UpdateJobDetails = UpdateJobDetails.UpdateJobDetails;
import * as UpdateMetastoreDetails from "./update-metastore-details";
export import UpdateMetastoreDetails = UpdateMetastoreDetails.UpdateMetastoreDetails;
import * as UpdateNamespaceDetails from "./update-namespace-details";
export import UpdateNamespaceDetails = UpdateNamespaceDetails.UpdateNamespaceDetails;
import * as UpdatePatternDetails from "./update-pattern-details";
export import UpdatePatternDetails = UpdatePatternDetails.UpdatePatternDetails;
import * as UpdateTermDetails from "./update-term-details";
export import UpdateTermDetails = UpdateTermDetails.UpdateTermDetails;
import * as UpdateTermRelationshipDetails from "./update-term-relationship-details";
export import UpdateTermRelationshipDetails = UpdateTermRelationshipDetails.UpdateTermRelationshipDetails;
import * as UploadCredentialsDetails from "./upload-credentials-details";
export import UploadCredentialsDetails = UploadCredentialsDetails.UploadCredentialsDetails;
import * as ValidateConnectionDetails from "./validate-connection-details";
export import ValidateConnectionDetails = ValidateConnectionDetails.ValidateConnectionDetails;
import * as ValidateConnectionResult from "./validate-connection-result";
export import ValidateConnectionResult = ValidateConnectionResult.ValidateConnectionResult;
import * as ValidatePatternDetails from "./validate-pattern-details";
export import ValidatePatternDetails = ValidatePatternDetails.ValidatePatternDetails;
import * as ValidatePatternResult from "./validate-pattern-result";
export import ValidatePatternResult = ValidatePatternResult.ValidatePatternResult;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLog from "./work-request-log";
export import WorkRequestLog = WorkRequestLog.WorkRequestLog;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
