import type { INodeProperties } from 'n8n-workflow';

export const ontolLabelerDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Labeler"
					]
				}
			},
			"options": [
				{
					"name": "Get Ontol Labeler Resource",
					"value": "Get Ontol Labeler Resource",
					"action": "Fetches a map from CURIEs/IDs to labels",
					"description": "Fetches a map from CURIEs/IDs to labels",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontol/labeler/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ontol/labeler/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Labeler"
					],
					"operation": [
						"Get Ontol Labeler Resource"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "List of ids",
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
						"Ontol Labeler"
					],
					"operation": [
						"Get Ontol Labeler Resource"
					]
				}
			}
		},
];
