import type { INodeProperties } from 'n8n-workflow';

export const genomeFeaturesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Genome Features"
					]
				}
			},
			"options": [
				{
					"name": "Get Features Within Resource",
					"value": "Get Features Within Resource",
					"action": "Returns list of matches",
					"description": "Returns list of matches",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/genome/features/within/{{$parameter[\"build\"]}}/{{$parameter[\"reference\"]}}/{{$parameter[\"begin\"]}}/{{$parameter[\"end\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /genome/features/within/{build}/{reference}/{begin}/{end}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genome Features"
					],
					"operation": [
						"Get Features Within Resource"
					]
				}
			}
		},
];
