import type { INodeProperties } from 'n8n-workflow';

export const identifierPrefixesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identifier Prefixes"
					]
				}
			},
			"options": [
				{
					"name": "Get Prefix Collection",
					"value": "Get Prefix Collection",
					"action": "Returns list of prefixes",
					"description": "Returns list of prefixes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identifier/prefixes/"
						}
					}
				},
				{
					"name": "Get Prefix Contract",
					"value": "Get Prefix Contract",
					"action": "Returns contracted URI",
					"description": "Returns contracted URI",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identifier/prefixes/contract/{{$parameter[\"uri\"]}}"
						}
					}
				},
				{
					"name": "Get Prefix Expand",
					"value": "Get Prefix Expand",
					"action": "Returns expanded URI",
					"description": "Returns expanded URI",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identifier/prefixes/expand/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identifier/prefixes/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identifier Prefixes"
					],
					"operation": [
						"Get Prefix Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /identifier/prefixes/contract/{uri}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identifier Prefixes"
					],
					"operation": [
						"Get Prefix Contract"
					]
				}
			}
		},
		{
			"displayName": "GET /identifier/prefixes/expand/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identifier Prefixes"
					],
					"operation": [
						"Get Prefix Expand"
					]
				}
			}
		},
];
