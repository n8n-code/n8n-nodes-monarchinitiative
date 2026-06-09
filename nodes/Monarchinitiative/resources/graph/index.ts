import type { INodeProperties } from 'n8n-workflow';

export const graphDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					]
				}
			},
			"options": [
				{
					"name": "Get Edge Resource",
					"value": "Get Edge Resource",
					"action": "Returns edges emanating from a given node",
					"description": "Returns edges emanating from a given node",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/graph/edges/from/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Node Resource",
					"value": "Get Node Resource",
					"action": "Returns a graph node",
					"description": "A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,\na molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/graph/node/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /graph/edges/from/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					],
					"operation": [
						"Get Edge Resource"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "depth",
			"description": "How far to traverse for neighbors",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "depth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					],
					"operation": [
						"Get Edge Resource"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"description": "Which direction to traverse (used only if relationship_type is defined)",
			"default": "BOTH",
			"type": "options",
			"options": [
				{
					"name": "INCOMING",
					"value": "INCOMING"
				},
				{
					"name": "OUTGOING",
					"value": "OUTGOING"
				},
				{
					"name": "BOTH",
					"value": "BOTH"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					],
					"operation": [
						"Get Edge Resource"
					]
				}
			}
		},
		{
			"displayName": "Relationship Type",
			"name": "relationship_type",
			"description": "Relationship type to traverse",
			"default": "[\n  null\n]",
			"type": "json",
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
						"Graph"
					],
					"operation": [
						"Get Edge Resource"
					]
				}
			}
		},
		{
			"displayName": "Entail",
			"name": "entail",
			"description": "Include sub-properties and equivalent properties",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "entail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					],
					"operation": [
						"Get Edge Resource"
					]
				}
			}
		},
		{
			"displayName": "Graph",
			"name": "graph",
			"description": "Which monarch graph to query",
			"default": "data",
			"type": "options",
			"options": [
				{
					"name": "Data",
					"value": "data"
				},
				{
					"name": "Ontology",
					"value": "ontology"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "graph",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					],
					"operation": [
						"Get Edge Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /graph/node/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Graph"
					],
					"operation": [
						"Get Node Resource"
					]
				}
			}
		},
];
