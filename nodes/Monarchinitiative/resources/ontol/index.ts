import type { INodeProperties } from 'n8n-workflow';

export const ontolDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					]
				}
			},
			"options": [
				{
					"name": "Get Information Content Resource",
					"value": "Get Information Content Resource",
					"action": "Returns information content (IC) for a set of relevant ontology classes",
					"description": "```\nIC = -log2( freq(t) / popSize )\n```\n\nHere the frequency and population is calculated for a particular dataset:\ne.g. all human disease-phenotype associations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontol/information_content/{{$parameter[\"subject_category\"]}}/{{$parameter[\"object_category\"]}}/{{$parameter[\"subject_taxon\"]}}"
						}
					}
				},
				{
					"name": "Get Extract Ontology Subgraph Resource",
					"value": "Get Extract Ontology Subgraph Resource",
					"action": "Extract a subgraph from an ontology",
					"description": "Extract a subgraph from an ontology",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontol/subgraph/{{$parameter[\"ontology\"]}}/{{$parameter[\"node\"]}}"
						}
					}
				},
				{
					"name": "Post Extract Ontology Subgraph Resource",
					"value": "Post Extract Ontology Subgraph Resource",
					"action": "Extract a subgraph from an ontology",
					"description": "Extract a subgraph from an ontology",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ontol/subgraph/{{$parameter[\"ontology\"]}}/{{$parameter[\"node\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ontol/information_content/{subject_category}/{object_category}/{subject_taxon}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Get Information Content Resource"
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
						"Ontol"
					],
					"operation": [
						"Get Information Content Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /ontol/subgraph/{ontology}/{node}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Get Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Cnode",
			"name": "cnode",
			"description": "Additional classes",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "cnode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Get Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Include Ancestors",
			"name": "include_ancestors",
			"description": "Include Ancestors",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_ancestors",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Get Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Include Descendants",
			"name": "include_descendants",
			"description": "Include Descendants",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_descendants",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Get Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "Additional classes",
			"default": "[\n  \"subClassOf\",\n  \"BFO:0000050\"\n]",
			"type": "json",
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
						"Ontol"
					],
					"operation": [
						"Get Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Include Meta",
			"name": "include_meta",
			"description": "Include metadata in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_meta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Get Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /ontol/subgraph/{ontology}/{node}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Post Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Cnode",
			"name": "cnode",
			"description": "Additional classes",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "cnode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Post Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Include Ancestors",
			"name": "include_ancestors",
			"description": "Include Ancestors",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_ancestors",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Post Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Include Descendants",
			"name": "include_descendants",
			"description": "Include Descendants",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_descendants",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Post Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "Additional classes",
			"default": "[\n  \"subClassOf\",\n  \"BFO:0000050\"\n]",
			"type": "json",
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
						"Ontol"
					],
					"operation": [
						"Post Extract Ontology Subgraph Resource"
					]
				}
			}
		},
		{
			"displayName": "Include Meta",
			"name": "include_meta",
			"description": "Include metadata in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_meta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol"
					],
					"operation": [
						"Post Extract Ontology Subgraph Resource"
					]
				}
			}
		},
];
