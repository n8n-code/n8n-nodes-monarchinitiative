import type { INodeProperties } from 'n8n-workflow';

export const pairSimDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pair Sim"
					]
				}
			},
			"options": [
				{
					"name": "Get Pair Sim Jaccard Resource",
					"value": "Get Pair Sim Jaccard Resource",
					"action": "Get pairwise similarity",
					"description": "Get pairwise similarity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pair/sim/jaccard/{{$parameter[\"id1\"]}}/{{$parameter[\"id2\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pair/sim/jaccard/{id1}/{id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pair Sim"
					],
					"operation": [
						"Get Pair Sim Jaccard Resource"
					]
				}
			}
		},
		{
			"displayName": "Object Category",
			"name": "object_category",
			"description": "e.g. disease, phenotype, gene. Two subjects will be compared based on overlap between associations to objects in this category",
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
						"Pair Sim"
					],
					"operation": [
						"Get Pair Sim Jaccard Resource"
					]
				}
			}
		},
];
