import type { INodeProperties } from 'n8n-workflow';

export const bioentitysetSlimmerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					]
				}
			},
			"options": [
				{
					"name": "Get Entity Set Anatomy Slimmer",
					"value": "Get Entity Set Anatomy Slimmer",
					"action": "For a given gene(s), summarize its annotations over a defined set of slim",
					"description": "For a given gene(s), summarize its annotations over a defined set of slim",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/slimmer/anatomy"
						}
					}
				},
				{
					"name": "Get Entity Set Function Slimmer",
					"value": "Get Entity Set Function Slimmer",
					"action": "For a given gene(s), summarize its annotations over a defined set of slim",
					"description": "For a given gene(s), summarize its annotations over a defined set of slim",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/slimmer/function"
						}
					}
				},
				{
					"name": "Get Entity Set Phenotype Slimmer",
					"value": "Get Entity Set Phenotype Slimmer",
					"action": "For a given gene(s), summarize its annotations over a defined set of slim",
					"description": "For a given gene(s), summarize its annotations over a defined set of slim",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/slimmer/phenotype"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bioentityset/slimmer/anatomy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Anatomy Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"required": true,
			"description": "Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387",
			"default": "[\n  null\n]",
			"type": "json",
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Anatomy Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Slim",
			"name": "slim",
			"required": true,
			"description": "Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Anatomy Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If set, excludes associations that involve IEAs (ECO:0000501)",
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Anatomy Slimmer"
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Anatomy Slimmer"
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Anatomy Slimmer"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentityset/slimmer/function",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Relationship Type",
			"name": "relationship_type",
			"description": "relationship type ('involved_in' or 'acts_upstream_of_or_within')",
			"default": "acts_upstream_of_or_within",
			"type": "options",
			"options": [
				{
					"name": "Involved In",
					"value": "involved_in"
				},
				{
					"name": "Acts Upstream Of Or Within",
					"value": "acts_upstream_of_or_within"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "relationship_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"required": true,
			"description": "Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387",
			"default": "[\n  null\n]",
			"type": "json",
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Slim",
			"name": "slim",
			"required": true,
			"description": "Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If set, excludes associations that involve IEAs (ECO:0000501)",
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Function Slimmer"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentityset/slimmer/phenotype",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Phenotype Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"required": true,
			"description": "Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387",
			"default": "[\n  null\n]",
			"type": "json",
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Phenotype Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Slim",
			"name": "slim",
			"required": true,
			"description": "Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Phenotype Slimmer"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If set, excludes associations that involve IEAs (ECO:0000501)",
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Phenotype Slimmer"
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Phenotype Slimmer"
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
						"Bioentityset Slimmer"
					],
					"operation": [
						"Get Entity Set Phenotype Slimmer"
					]
				}
			}
		},
];
