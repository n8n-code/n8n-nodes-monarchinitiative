import type { INodeProperties } from 'n8n-workflow';

export const individualDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Individual"
					]
				}
			},
			"options": [
				{
					"name": "Get Pedigree",
					"value": "Get Pedigree",
					"action": "Returns list of matches",
					"description": "Returns list of matches",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/individual/pedigree/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Individual",
					"value": "Get Individual",
					"action": "Returns list of matches",
					"description": "Returns list of matches",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/individual/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /individual/pedigree/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individual"
					],
					"operation": [
						"Get Pedigree"
					]
				}
			}
		},
		{
			"displayName": "GET /individual/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individual"
					],
					"operation": [
						"Get Individual"
					]
				}
			}
		},
];
