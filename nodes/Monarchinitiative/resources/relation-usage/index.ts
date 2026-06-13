import type { INodeProperties } from 'n8n-workflow';

export const relationUsageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Relation Usage"
					]
				}
			},
			"options": [
				{
					"name": "Get Relation Usage Resource",
					"value": "Get Relation Usage Resource",
					"action": "All relations used plus count of associations",
					"description": "All relations used plus count of associations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/relation/usage/"
						}
					}
				},
				{
					"name": "Get Relation Usage Between Resource",
					"value": "Get Relation Usage Between Resource",
					"action": "All relations used plus count of associations",
					"description": "All relations used plus count of associations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/relation/usage/between/{{$parameter[\"subject_category\"]}}/{{$parameter[\"object_category\"]}}"
						}
					}
				},
				{
					"name": "Get Relation Usage Pivot Resource",
					"value": "Get Relation Usage Pivot Resource",
					"action": "Relation usage count for all subj x obj category combinations",
					"description": "Relation usage count for all subj x obj category combinations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/relation/usage/pivot"
						}
					}
				},
				{
					"name": "Get Relation Usage Pivot Label Resource",
					"value": "Get Relation Usage Pivot Label Resource",
					"action": "Relation usage count for all subj x obj category combinations, showing label",
					"description": "Relation usage count for all subj x obj category combinations, showing label",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/relation/usage/pivot/label"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /relation/usage/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Resource"
					]
				}
			}
		},
		{
			"displayName": "Subject Taxon",
			"name": "subject_taxon",
			"description": "SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Resource"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /relation/usage/between/{subject_category}/{object_category}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Between Resource"
					]
				}
			}
		},
		{
			"displayName": "Subject Taxon",
			"name": "subject_taxon",
			"description": "SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Between Resource"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Between Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /relation/usage/pivot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Pivot Resource"
					]
				}
			}
		},
		{
			"displayName": "Subject Taxon",
			"name": "subject_taxon",
			"description": "SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Pivot Resource"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Pivot Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /relation/usage/pivot/label",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Pivot Label Resource"
					]
				}
			}
		},
		{
			"displayName": "Subject Taxon",
			"name": "subject_taxon",
			"description": "SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Pivot Label Resource"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ",
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
						"Relation Usage"
					],
					"operation": [
						"Get Relation Usage Pivot Label Resource"
					]
				}
			}
		},
];
