import type { INodeProperties } from 'n8n-workflow';

export const metadataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					]
				}
			},
			"options": [
				{
					"name": "Get Metadata For Datasets",
					"value": "Get Metadata For Datasets",
					"action": "Get metadata for all datasets from SciGraph",
					"description": "Get metadata for all datasets from SciGraph",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metadata/datasets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /metadata/datasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					],
					"operation": [
						"Get Metadata For Datasets"
					]
				}
			}
		},
];
