import type { INodeProperties } from 'n8n-workflow';

export const identifierMapperDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identifier Mapper"
					]
				}
			},
			"options": [
				{
					"name": "Get Identifier Mapper",
					"value": "Get Identifier Mapper",
					"action": "TODO maps a list of identifiers from a source to a target",
					"description": "TODO maps a list of identifiers from a source to a target",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identifier/mapper/{{$parameter[\"source\"]}}/{{$parameter[\"target\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identifier/mapper/{source}/{target}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identifier Mapper"
					],
					"operation": [
						"Get Identifier Mapper"
					]
				}
			}
		},
];
