define("DheerSchema2228e101Detail", ["LookupMultiAddMixin"], function() {
	return {
		entitySchemaName: "DheerTestDetail1",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		attributes: {
			"relatedEntitySchemaNameAtt": {
				"dataValueType": this.Terrasoft.DataValueType.TEXT,
				"type": this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value":"Contact",
			},
			"relatedColumnNameAtt": {
				"dataValueType": this.Terrasoft.DataValueType.TEXT,
				"type": this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value":"DheerContact1",
			}
		},
		mixins: {
            // Connecting the mixin to the schema.
            LookupMultiAddMixin: "Terrasoft.LookupMultiAddMixin"
        },
		methods: {
			init: function() {
                this.callParent(arguments);
                // Initializing the mixin.
                this.mixins.LookupMultiAddMixin.init.call(this);
            },
			 // Overriding the base method for displaying the "Add" button.
		getAddRecordButtonVisible: function() {
			
			return this.getToolsVisible();
		},
		onCardSaved: function() {
			// Opens the window for multiple record selection.
			this.openLookupWithMultiSelect();
		},
		// Overriding the base method of adding a detail record.
		addRecord: function() {
			// Opens the window for multiple records selection.
			this.openLookupWithMultiSelect(true);
		},
		  getMultiSelectLookupConfig: function() {
                return {
                    // Root schema — [Opportunities].
                    rootEntitySchemaName: "Testing",
                    // Root schema column.
                    rootColumnName: "DheerDheerTest",
                    // Connected schema — [Contact].
                    relatedEntitySchemaName: this.get("relatedEntitySchemaNameAtt"),
                    // Root schema column.
                    relatedColumnName: this.get("relatedColumnNameAtt"),
                };
            }
		}
	};
});
