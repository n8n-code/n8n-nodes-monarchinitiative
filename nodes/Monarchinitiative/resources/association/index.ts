import type { INodeProperties } from 'n8n-workflow';

export const associationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					]
				}
			},
			"options": [
				{
					"name": "Get Associations Between",
					"value": "Get Associations Between",
					"action": "Returns associations connecting two entities",
					"description": "Given two entities (e.g. a particular gene and a particular disease), if these two entities\nare connected (directly or indirectly), then return the association objects describing\nthe connection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/between/{{$parameter[\"subject\"]}}/{{$parameter[\"object\"]}}"
						}
					}
				},
				{
					"name": "Get Association By Subject Category Search",
					"value": "Get Association By Subject Category Search",
					"action": "Returns list of matching associations for a given subject category",
					"description": "Returns list of matching associations for a given subject category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/find/{{$parameter[\"subject_category\"]}}"
						}
					}
				},
				{
					"name": "Get Association By Subject And Object Category Search",
					"value": "Get Association By Subject And Object Category Search",
					"action": "Returns list of matching associations between a given subject and object category",
					"description": "Returns list of matching associations between a given subject and object category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/find/{{$parameter[\"subject_category\"]}}/{{$parameter[\"object_category\"]}}"
						}
					}
				},
				{
					"name": "Get Associations From",
					"value": "Get Associations From",
					"action": "Returns list of matching associations starting from a given subject (source)",
					"description": "Returns list of matching associations starting from a given subject (source)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/from/{{$parameter[\"subject\"]}}"
						}
					}
				},
				{
					"name": "Get Associations To",
					"value": "Get Associations To",
					"action": "Returns list of matching associations pointing to a given object (target)",
					"description": "Returns list of matching associations pointing to a given object (target)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/to/{{$parameter[\"object\"]}}"
						}
					}
				},
				{
					"name": "Get Association By Subject And Assoc Type",
					"value": "Get Association By Subject And Assoc Type",
					"action": "Returns list of matching associations of a given type",
					"description": "Returns list of matching associations of a given type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/type/{{$parameter[\"association_type\"]}}"
						}
					}
				},
				{
					"name": "Get Association Object",
					"value": "Get Association Object",
					"action": "Returns the association with a given identifier",
					"description": "An association connects, at a minimum, two things, designated subject and object,\nvia some relationship. Associations also include evidence, provenance etc.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/association/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /association/between/{subject}/{object}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations Between"
					]
				}
			}
		},
		{
			"displayName": "GET /association/find/{subject_category}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Subject Taxon",
			"name": "subject_taxon",
			"description": "Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subject_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Object Taxon",
			"name": "object_taxon",
			"description": "Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject Category Search"
					]
				}
			}
		},
		{
			"displayName": "GET /association/find/{subject_category}/{object_category}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"description": "Subject CURIE",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subject",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"description": "Object CURIE",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Subject Taxon",
			"name": "subject_taxon",
			"description": "Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subject_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Object Taxon",
			"name": "object_taxon",
			"description": "Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Object Category Search"
					]
				}
			}
		},
		{
			"displayName": "GET /association/from/{subject}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Object Taxon",
			"name": "object_taxon",
			"description": "Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations From"
					]
				}
			}
		},
		{
			"displayName": "GET /association/to/{object}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Associations To"
					]
				}
			}
		},
		{
			"displayName": "GET /association/type/{association_type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"description": "Subject CURIE",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subject",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"description": "Object CURIE",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association By Subject And Assoc Type"
					]
				}
			}
		},
		{
			"displayName": "GET /association/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Association"
					],
					"operation": [
						"Get Association Object"
					]
				}
			}
		},
];
