import type { INodeProperties } from 'n8n-workflow';

export const ontologyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					]
				}
			},
			"options": [
				{
					"name": "Get Ontology Terms Shared Ancestor",
					"value": "Get Ontology Terms Shared Ancestor",
					"action": "Returns the ancestor ontology terms shared by two ontology terms",
					"description": "Returns the ancestor ontology terms shared by two ontology terms",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontology/shared/{{$parameter[\"subject\"]}}/{{$parameter[\"object\"]}}"
						}
					}
				},
				{
					"name": "Get Ontology Subset",
					"value": "Get Ontology Subset",
					"action": "Returns meta data of an ontology subset (slim)",
					"description": "Returns meta data of an ontology subset (slim)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontology/subset/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Ontology Term",
					"value": "Get Ontology Term",
					"action": "Returns meta data of an ontology term",
					"description": "Returns meta data of an ontology term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontology/term/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Ontology Term Graph",
					"value": "Get Ontology Term Graph",
					"action": "Returns graph of an ontology term",
					"description": "Returns graph of an ontology term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontology/term/{{$parameter[\"id\"]}}/graph"
						}
					}
				},
				{
					"name": "Get Ontology Term Subgraph",
					"value": "Get Ontology Term Subgraph",
					"action": "Extract a subgraph from an ontology term",
					"description": "Extract a subgraph from an ontology term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontology/term/{{$parameter[\"id\"]}}/subgraph"
						}
					}
				},
				{
					"name": "Get Ontology Term Subsets",
					"value": "Get Ontology Term Subsets",
					"action": "Returns subsets (slims) associated to an ontology term",
					"description": "Returns subsets (slims) associated to an ontology term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontology/term/{{$parameter[\"id\"]}}/subsets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ontology/shared/{subject}/{object}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Terms Shared Ancestor"
					]
				}
			}
		},
		{
			"displayName": "GET /ontology/subset/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Subset"
					]
				}
			}
		},
		{
			"displayName": "GET /ontology/term/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Term"
					]
				}
			}
		},
		{
			"displayName": "GET /ontology/term/{id}/graph",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Graph"
					]
				}
			}
		},
		{
			"displayName": "Graph Type",
			"name": "graph_type",
			"description": "graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')",
			"default": "topology_graph",
			"type": "options",
			"options": [
				{
					"name": "Topology Graph",
					"value": "topology_graph"
				},
				{
					"name": "Regulates Transitivity Graph",
					"value": "regulates_transitivity_graph"
				},
				{
					"name": "Neighborhood Graph",
					"value": "neighborhood_graph"
				},
				{
					"name": "Neighborhood Limited Graph",
					"value": "neighborhood_limited_graph"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "graph_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Graph"
					]
				}
			}
		},
		{
			"displayName": "GET /ontology/term/{id}/subgraph",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subgraph"
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
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subgraph"
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
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subgraph"
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
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subgraph"
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
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subgraph"
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
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subgraph"
					]
				}
			}
		},
		{
			"displayName": "GET /ontology/term/{id}/subsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontology"
					],
					"operation": [
						"Get Ontology Term Subsets"
					]
				}
			}
		},
];
