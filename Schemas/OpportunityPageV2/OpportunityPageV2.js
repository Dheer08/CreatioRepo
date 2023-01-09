define("OpportunityPageV2", [], function() {
	return {
		entitySchemaName: "Opportunity",
		messages: {
            "SetNewQuoteButtonVisibility": {
                mode: this.Terrasoft.MessageMode.PTP,
                direction: this.Terrasoft.MessageDirectionType.PUBLISH
            }
        },
		attributes: {
			"ButtonVisibility":{
				"dataValueType": this.Terrasoft.DataValueType.BOOLEAN,
				"type": this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value" : true
			},
			"AccountChange":{
				dependencies: [{
				  columns: ["Account","Stage"], //field to trigger change event for
				  methodName: "OnAccountChange" //method to execute
				}]
			},
			"BudgetChange":{
				dependencies: [{
				  columns: ["Budget"], //field to trigger change event for
				  methodName: "ProbabilityCal" //method to execute
				}]
			},
			/* Attribute name. */
			"Owner": {
				/* Data type. */
				"dataValueType": this.Terrasoft.DataValueType.LOOKUP,
				"lookupListConfig":{
					"filters":[
						function(){
							var OppAccount = this.get("Account").value;
							//this.console.log(OppAccount,"OppAccount");
							var filterGroup = new this.Terrasoft.createFilterGroup();
							 var filterAGroup = new this.Terrasoft.createFilterGroup();
							  var filterBGroup = new this.Terrasoft.createFilterGroup();
							
							filterGroup.logicalOperation = this.Terrasoft.LogicalOperatorType.AND;
							filterAGroup.logicalOperation = this.Terrasoft.LogicalOperatorType.AND;
							filterBGroup.logicalOperation = this.Terrasoft.LogicalOperatorType.OR;
							
							filterAGroup.add("AccountContactsFilter", this.Terrasoft.createColumnFilterWithParameter(
								this.Terrasoft.ComparisonType.EQUAL, "Account", OppAccount));
							
							filterBGroup.add("ContactTypeFilter1", this.Terrasoft.createColumnFilterWithParameter(
								this.Terrasoft.ComparisonType.EQUAL, "DheerCustomerType", "47d87e6b-6ad0-4cea-8a01-8096f2bd3e42"));//Employee
							filterBGroup.add("ContactTypeFilter2", this.Terrasoft.createColumnFilterWithParameter(
								this.Terrasoft.ComparisonType.EQUAL, "DheerCustomerType", "b421da69-f286-4e2f-bb20-601de0f92ca3"));//Partner
				//filterGroup.addItem(filterAGroup);
				filterGroup.addItem(filterBGroup);
   				 return filterGroup;

						
						}
							 
						
					]
				}
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"CloseReason": {
				"VisibleCloseReasonByStageAndProbability": {
					"uId": "5bf85c1d-f52c-4eb2-9e29-d237873dd2f8",
					"enabled": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Stage",
								"attributePath": "End"
							},
							"rightExpression": {
								"type": 0,
								"value": true
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Probability"
							},
							"rightExpression": {
								"type": 0,
								"value": 0
							}
						}
					]
				}
			},
			"DueDate": {
				"EnabledDueDateByStage": {
					"uId": "3bd2bcbc-59e4-456b-9d08-4b242eeca1ba",
					"enabled": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Stage"
							},
							"rightExpression": {
								"type": 0,
								"value": "c2067b11-0ee0-df11-971b-001d60e938c6"
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Stage",
								"attributePath": "End"
							},
							"rightExpression": {
								"type": 0,
								"value": false
							}
						}
					]
				}
			},
			"Partner": {
				"VisiblePartnerByType": {
					"uId": "5abcb0b0-8bb4-412e-8d8a-785c977dc474",
					"enabled": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Type"
							},
							"rightExpression": {
								"type": 0,
								"value": "c4505efc-6cf5-4b0c-b984-55076bc235f0"
							}
						}
					]
				},
				"FiltrationPartnerByAccountType": {
					"uId": "ca0dda30-f418-4975-bc70-9b77492d8554",
					"enabled": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": true,
					"type": 1,
					"attribute": "PartnerAccountType"
				}
			},
			"Probability": {
				"EnabledProbabilityByStage": {
					"uId": "b89b4627-3aaf-4a93-9245-6a83c1daba90",
					"enabled": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "Stage"
							},
							"rightExpression": {
								"type": 0,
								"value": "736f54fd-e240-46f8-8c7c-9066c30aff59"
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "Stage"
							},
							"rightExpression": {
								"type": 0,
								"value": "9abf243c-fc00-45cf-8E28-cdb66c9208b0"
							}
						},
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "Stage"
							},
							"rightExpression": {
								"type": 0,
								"value": "a9aafdfe-2242-4f42-8cd5-2ae3b9556d79"
							}
						}
					]
				}
			},
			"LeadType": {
				"LeadTypeRequired": {
					"uId": "fd2a1e7f-3464-491b-8b62-4ae588701219",
					"enabled": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 0,
								"value": true
							},
							"rightExpression": {
								"type": 0,
								"value": true
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			OnAccountChange:function(){
				console.log("On Account or Stage Change");
				this.getNewQuoteButtonVisible();
			},
			ButtonVisbility:function(){
				var OppAccount  = this.get("Account").value;
				console.log(OppAccount,"OppAccount");
				this.set("ButtonValue",true);
				//return false;
			},
			 onNewQuoteClick: function() {
                //TODO: implement your logic here
                this.showInformationDialog("Hi You Pushed the Button");
            },
			setValidationConfig: function() {
                /* Call the initialization of the parent view model's validators. */
                this.callParent(arguments);
                /* Add the dueDateValidator() validator method for the [DueDate] column. */
                this.addColumnValidator("Budget", this.budgetValidator);
            },
			budgetValidator:function()
			{
				var invalidMessage = "";
              
                if (this.get("Budget") < 0) {
                    invalidMessage = "Budget should not be on Negative";
                }
                /* The object whose property contains the validation error message. If the validation is successful, the object returns an empty string. */
                return {
                    /* The validation error message. */
                    invalidMessage: invalidMessage
                };
			},
            getNewQuoteButtonVisible: function() {
                var newMode = this.isNewMode();
                var result = !newMode;
				//console.log(result,"result");
				//console.log(newMode);
				var OppAccount = this.get("Account").value;
				var CurContactAccount = Terrasoft.SysValue.CURRENT_USER_ACCOUNT.value;
				//console.log(OppAccount,"OppAccount");
				//console.log(CurContactAccount,"CurContactAccount");
				if(OppAccount == CurContactAccount)
					{
						this.set("ButtonVisibility",true);
						result = true;
					}
				else
					{
						result = false;
						this.set("ButtonVisibility",false);
					}
				result = this.get("ButtonVisibility");
                this.sandbox.publish("SetNewQuoteButtonVisibility", result, [this.sandbox.id]);
                return result;
            },
			ProbabilityCal:function(){
				var BudgetVal  = this.get("Budget");
				var ProbabilityVal = this.get("Probability");
				var StageVal = this.get("Stage").value;
				//console.log(StageVal);
				//console.log("Hello");
				if(StageVal === "325f0619-0ee0-df11-971b-001d60e938c6")
					{
						if(BudgetVal >= 10000)
					{
						ProbabilityVal = 7;
						this.set("Probability",70);
					}
				else if(BudgetVal < 10000 && BudgetVal > 2000)
					{
						ProbabilityVal = 5;
						this.set("Probability",50);
					}
				else if(BudgetVal <= 2000 && BudgetVal > 0)
					{
						ProbabilityVal = 3;
						this.set("Probability",30);
					}
				else{
						ProbabilityVal = 0;
						this.set("Probability",0);
				}
					}
				
			},
			onEntityInitialized:function()
            {
                this.callParent(arguments);
			    //this.ButtonVisibility();
				this.ProbabilityCal();
				this. getNewQuoteButtonVisible();
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
                "operation": "insert",
                "name": "NewQuoteButton",
                "parentName": "LeftContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE,
                    "caption": {"bindTo": "Resources.Strings.NewQuoteBtn"},
                    "click": {"bindTo": "onNewQuoteClick"},
                    "visible": {"bindTo": "ButtonVisibility"},
                    "classes": {
                        "textClass": ["actions-button-margin-right"]
                    }
                }
            },
       
			{
				"operation": "merge",
				"name": "MetricsContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityClient",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "OpportunityClient",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "LablelMetricsContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "BantProfileHeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "BantIcon",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "BantHeaderCaption",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 5,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityBudget",
				"values": {
					"layout": {
						"colSpan": 19,
						"rowSpan": 1,
						"column": 5,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityDecisionMaker",
				"values": {
					"layout": {
						"colSpan": 19,
						"rowSpan": 1,
						"column": 5,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityLeadType",
				"values": {
					"layout": {
						"colSpan": 19,
						"rowSpan": 1,
						"column": 5,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "OpportunityLeadType",
				"parentName": "BantProfile",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "OpportunityDueDate",
				"values": {
					"layout": {
						"colSpan": 19,
						"rowSpan": 1,
						"column": 5,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityTitle",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Amount",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "ResponsibleDepartment",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "ResponsibleDepartment",
				"parentName": "OpportunityPageGeneralBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "Probability",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "Category",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "Source",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6
					}
				}
			},
			{
				"operation": "move",
				"name": "Type",
				"parentName": "OpportunityPageGeneralBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "merge",
				"name": "CreatedOn",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 6
					}
				}
			},
			{
				"operation": "merge",
				"name": "Partner",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7
					}
				}
			},
			{
				"operation": "merge",
				"name": "CloseReason",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 7
					}
				}
			},
			{
				"operation": "merge",
				"name": "Description",
				"values": {
					"layout": {
						"colSpan": 23,
						"rowSpan": 1,
						"column": 1,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "TacticAndCompetitorTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "CheckDate",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "ProductsTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "HistoryAccountTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "move",
				"name": "IsPrimary",
				"parentName": "OpportunityPageGeneralBlock",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
