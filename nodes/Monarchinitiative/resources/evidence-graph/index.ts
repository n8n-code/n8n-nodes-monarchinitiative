import type { INodeProperties } from 'n8n-workflow';

export const evidenceGraphDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Evidence Graph"
					]
				}
			},
			"options": [
				{
					"name": "Get Evidence Graph Object",
					"value": "Get Evidence Graph Object",
					"action": "Returns evidence graph object for a given association",
					"description": "Note that every association is assumed to have a unique ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/evidence/graph/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Evidence Graph Table",
					"value": "Get Evidence Graph Table",
					"action": "Returns evidence as a association_results object given an association",
					"description": "Note that every association is assumed to have a unique ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/evidence/graph/{{$parameter[\"id\"]}}/table"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /evidence/graph/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Evidence Graph"
					],
					"operation": [
						"Get Evidence Graph Object"
					]
				}
			}
		},
		{
			"displayName": "GET /evidence/graph/{id}/table",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Evidence Graph"
					],
					"operation": [
						"Get Evidence Graph Table"
					]
				}
			}
		},
		{
			"displayName": "Is Publication",
			"name": "is_publication",
			"description": "If true, considers dc:source as edge",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_publication",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Evidence Graph"
					],
					"operation": [
						"Get Evidence Graph Table"
					]
				}
			}
		},
];
