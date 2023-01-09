define("DheerTest1Page", [], function() {
	return {
		entitySchemaName: "DheerTest",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "DheerTestFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "DheerTest"
				}
			},
			"DheerContactDetial": {
				"schemaName": "DheerSchema7a65f263Detail",
				"entitySchemaName": "Contact",
				"filter": {
					"detailColumn": "Id",
					"masterColumn": "DheerContact"
				}
			},
			"DheerTestDet": {
				"schemaName": "DheerSchema2228e101Detail",
				"entitySchemaName": "DheerTestDetail1",
				"filter": {
					"detailColumn": "DheerDheerTest",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			 onEntityInitialized: function() {
                /* Call the parent implementation of the method. */
                this.callParent(arguments);
                /* Generate the code if a new element or a copy of an existing element is created. */
                if (this.isAddMode() || this.isCopyMode()) {
                    /* Call the Terrasoft.BasePageV2.getIncrementCode base method that generates the number based on the specified pattern. */
                    this.getIncrementCode(function(response) {
                        /* Return the generated number to the [Code] column. */
                        this.set("DheerRequestNumber", response);
                    });
                }
            }
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "DheerName47405bc1-01a1-46dd-a4e9-269b81673860",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DheerName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DheerRequestNumberf38f849c-61ed-44ae-87d8-d5e86800bbbd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DheerRequestNumber"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGERa7ca9811-5206-47b5-a699-eed441acfbe2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DheerAutoNumber",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP8be4ea41-6e93-4b43-b0d1-a1150a0bae53",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DheerContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP2b0f95eb-4bf7-405b-9852-930c4dfa8e4e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DheerLead",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DheerShowLead1e9be3504-958d-432b-9c90-b57b443ff5ef",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DheerShowLead1"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "DheerNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabInput",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabInputTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabInputGroup5f93f3bb",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabInputGroup5f93f3bbGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabInput",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabInputGridLayout17ee31da",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabInputGroup5f93f3bb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEANb2ca3a97-c9dd-4dcc-aa64-82307b0dd5a1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabInputGridLayout17ee31da"
					},
					"bindTo": "DheerShowLeads",
					"enabled": true
				},
				"parentName": "TabInputGridLayout17ee31da",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabOutput",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabOutputTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DheerContactDetial",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabOutput",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DheerTestDet",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabOutput",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
