import type { INodeProperties } from 'n8n-workflow';

export const bioentitysetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					]
				}
			},
			"options": [
				{
					"name": "Get Entity Set Associations",
					"value": "Get Entity Set Associations",
					"action": "Returns compact associations for a given input set",
					"description": "Returns compact associations for a given input set",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/associations"
						}
					}
				},
				{
					"name": "Get Entity Set Summary",
					"value": "Get Entity Set Summary",
					"action": "Summary statistics for objects associated",
					"description": "Summary statistics for objects associated",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/descriptor/counts"
						}
					}
				},
				{
					"name": "Get Entity Set Graph Resource",
					"value": "Get Entity Set Graph Resource",
					"action": "TODO Graph object spanning all entities",
					"description": "TODO Graph object spanning all entities",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/graph"
						}
					}
				},
				{
					"name": "Get Over Representation",
					"value": "Get Over Representation",
					"action": "Summary statistics for objects associated",
					"description": "Summary statistics for objects associated",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/overrepresentation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bioentityset/associations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Associations"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
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
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Associations"
					]
				}
			}
		},
		{
			"displayName": "Background",
			"name": "background",
			"description": "Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "background",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Associations"
					]
				}
			}
		},
		{
			"displayName": "Object Category",
			"name": "object_category",
			"description": "E.g. phenotype, function",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Associations"
					]
				}
			}
		},
		{
			"displayName": "Object Slim",
			"name": "object_slim",
			"description": "Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentityset/descriptor/counts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Summary"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
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
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Summary"
					]
				}
			}
		},
		{
			"displayName": "Background",
			"name": "background",
			"description": "Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "background",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Summary"
					]
				}
			}
		},
		{
			"displayName": "Object Category",
			"name": "object_category",
			"description": "E.g. phenotype, function",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Summary"
					]
				}
			}
		},
		{
			"displayName": "Object Slim",
			"name": "object_slim",
			"description": "Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentityset/graph",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Graph Resource"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
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
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Graph Resource"
					]
				}
			}
		},
		{
			"displayName": "Background",
			"name": "background",
			"description": "Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "background",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Graph Resource"
					]
				}
			}
		},
		{
			"displayName": "Object Category",
			"name": "object_category",
			"description": "E.g. phenotype, function",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Graph Resource"
					]
				}
			}
		},
		{
			"displayName": "Object Slim",
			"name": "object_slim",
			"description": "Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Entity Set Graph Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentityset/overrepresentation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Object Category",
			"name": "object_category",
			"description": "E.g. phenotype, function",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
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
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Background",
			"name": "background",
			"description": "Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "background",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Subject Category",
			"name": "subject_category",
			"description": "Default: gene. Other types may be used e.g. disease but statistics may not make sense",
			"default": "gene",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subject_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Max P Value",
			"name": "max_p_value",
			"description": "Exclude results with p-value greater than this",
			"default": "0.05",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_p_value",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Ontology",
			"name": "ontology",
			"description": "ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ontology",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "must be NCBITaxon CURIE. Example: NCBITaxon:9606",
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
						"Bioentityset"
					],
					"operation": [
						"Get Over Representation"
					]
				}
			}
		},
];
