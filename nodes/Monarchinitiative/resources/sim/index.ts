import type { INodeProperties } from 'n8n-workflow';

export const simDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					]
				}
			},
			"options": [
				{
					"name": "Get Sim Compare",
					"value": "Get Sim Compare",
					"action": "Compare a reference profile vs one profiles",
					"description": "Compare a reference profile vs one profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim/compare"
						}
					}
				},
				{
					"name": "Post Sim Compare",
					"value": "Post Sim Compare",
					"action": "Compare a reference profile vs one or more profiles",
					"description": "Compare a reference profile vs one or more profiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim/compare"
						}
					}
				},
				{
					"name": "Get Annotation Score",
					"value": "Get Annotation Score",
					"action": "Get annotation score",
					"description": "Get annotation score",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim/score"
						}
					}
				},
				{
					"name": "Post Annotation Score",
					"value": "Post Annotation Score",
					"action": "Get annotation score",
					"description": "Get annotation score",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim/score"
						}
					}
				},
				{
					"name": "Get Sim Search",
					"value": "Get Sim Search",
					"action": "Search for phenotypically similar diseases or model genes",
					"description": "Search for phenotypically similar diseases or model genes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim/search"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sim/compare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "Is Feature Set",
			"name": "is_feature_set",
			"description": "set to true if *all* input ids are phenotypic features, else set to false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_feature_set",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "Metric",
			"name": "metric",
			"description": "Metric for computing similarity",
			"default": "phenodigm",
			"type": "options",
			"options": [
				{
					"name": "Phenodigm",
					"value": "phenodigm"
				},
				{
					"name": "Jaccard",
					"value": "jaccard"
				},
				{
					"name": "Sim GIC",
					"value": "simGIC"
				},
				{
					"name": "Resnik",
					"value": "resnik"
				},
				{
					"name": "Symmetric Resnik",
					"value": "symmetric_resnik"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "metric",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "Ref Id",
			"name": "ref_id",
			"description": "A phenotype or identifier that is composed of phenotypes (eg disease, gene)",
			"default": "[]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ref_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "Query Id",
			"name": "query_id",
			"description": "A phenotype or identifier that is composed of phenotypes (eg disease, gene)",
			"default": "[]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "query_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "POST /sim/compare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Post Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "Query Ids",
			"name": "query_ids",
			"type": "json",
			"default": "[\n  [\n    null\n  ]\n]",
			"description": "list of query profiles",
			"routing": {
				"send": {
					"property": "query_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Post Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "Reference Ids",
			"name": "reference_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "list of ids",
			"routing": {
				"send": {
					"property": "reference_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Post Sim Compare"
					]
				}
			}
		},
		{
			"displayName": "GET /sim/score",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Annotation Score"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Phenotype identifier (eg HP:0004935)",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Annotation Score"
					]
				}
			}
		},
		{
			"displayName": "Absent Id",
			"name": "absent_id",
			"description": "absent phenotype (eg HP:0002828)",
			"default": "[]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "absent_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Annotation Score"
					]
				}
			}
		},
		{
			"displayName": "POST /sim/score",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Post Annotation Score"
					]
				}
			}
		},
		{
			"displayName": "Features",
			"name": "features",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "list of features",
			"routing": {
				"send": {
					"property": "features",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Post Annotation Score"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "curie formatted id",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Post Annotation Score"
					]
				}
			}
		},
		{
			"displayName": "GET /sim/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Search"
					]
				}
			}
		},
		{
			"displayName": "Is Feature Set",
			"name": "is_feature_set",
			"description": "set to true if *all* input ids are phenotypic features, else set to false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_feature_set",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Search"
					]
				}
			}
		},
		{
			"displayName": "Metric",
			"name": "metric",
			"description": "Metric for computing similarity",
			"default": "phenodigm",
			"type": "options",
			"options": [
				{
					"name": "Phenodigm",
					"value": "phenodigm"
				},
				{
					"name": "Jaccard",
					"value": "jaccard"
				},
				{
					"name": "Sim GIC",
					"value": "simGIC"
				},
				{
					"name": "Resnik",
					"value": "resnik"
				},
				{
					"name": "Symmetric Resnik",
					"value": "symmetric_resnik"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "metric",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Search"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "A phenotype or identifier that is composed of phenotypes (eg disease, gene)",
			"default": "[]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Search"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "number of rows, max 500",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Search"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "ncbi taxon id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sim"
					],
					"operation": [
						"Get Sim Search"
					]
				}
			}
		},
];
