import type { INodeProperties } from 'n8n-workflow';

export const ontolIdentifierDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Identifier"
					]
				}
			},
			"options": [
				{
					"name": "Get Ontol Identifier Resource",
					"value": "Get Ontol Identifier Resource",
					"action": "Fetches a map from CURIEs/IDs to labels",
					"description": "Fetches a map from CURIEs/IDs to labels",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ontol/identifier/"
						}
					}
				},
				{
					"name": "Post Ontol Identifier Resource",
					"value": "Post Ontol Identifier Resource",
					"action": "Fetches a map from CURIEs/IDs to labels",
					"description": "Takes 'label' list argument either as a querystring argument or as a key\nin the POST body when content-type is application/json.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ontol/identifier/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ontol/identifier/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Identifier"
					],
					"operation": [
						"Get Ontol Identifier Resource"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"required": true,
			"description": "List of labels",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Identifier"
					],
					"operation": [
						"Get Ontol Identifier Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /ontol/identifier/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Identifier"
					],
					"operation": [
						"Post Ontol Identifier Resource"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"required": true,
			"description": "List of labels",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ontol Identifier"
					],
					"operation": [
						"Post Ontol Identifier Resource"
					]
				}
			}
		},
];
