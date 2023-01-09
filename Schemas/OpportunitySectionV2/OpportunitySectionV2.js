define("OpportunitySectionV2", ["OpportunityConfigurationConstants"], function(OpportunityConfigurationConstants) {
    return {
        /* The name of the section object schema. */
        entitySchemaName: "Opportunity",
		attributes: {
            "IsNewQuoteButtonVisible": {
                dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
                value: false
            }
        },
        messages: {
            "SetNewQuoteButtonVisibility": {
                mode: this.Terrasoft.MessageMode.PTP,
                direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
            }
        },
        /* The methods of the section view model. */
        methods: {
            /* Overload the base method that modifies the data row before uploading the row to the list. */
            /*prepareResponseCollectionItem: function(item) {
             
                this.callParent(arguments);
                item.customStyle = null;
               
                var running = item.get("Stage");
				OpportunityConfigurationConstants.Opportunity.Stage.OnHold="241ade6b-4256-4947-ba8a-7d96988a97b1";
				
                if (running.value === OpportunityConfigurationConstants.Opportunity.Stage.Contractions) {
                    item.customStyle = {
                       
                        "color": "white",
                      
                        "background": "#90EE90"
                    };
                }
            },*/
			 subscribeSandboxEvents: function() {
                this.callParent(arguments);
                this.sandbox.subscribe("SetNewQuoteButtonVisibility", function(result) {
                    this.set("IsNewQuoteButtonVisible", result);
					this.reloadGridData();
                }, this, [this.getCardModuleSandboxId()]);
            },
        },
		 diff: /**SCHEMA_DIFF*/[
            {
                "operation": "insert",
                "name": "NewQuoteButton",
                "parentName": "CombinedModeActionButtonsCardLeftContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE,
                    "caption": {"bindTo": "Resources.Strings.NewQuoteBtn"},
                    "visible": { "bindTo": "IsNewQuoteButtonVisible" },
                    "click": {"bindTo": "onCardAction"},
                    "tag": "onNewQuoteClick",
                    "classes": {
                        "textClass": ["actions-button-margin-right"]
                    }
                }
            }
        ]

    };
});