import type { INodeProperties } from 'n8n-workflow';

export const mmeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mme"
					]
				}
			},
			"options": [
				{
					"name": "Post Disease Mme",
					"value": "Post Disease Mme",
					"action": "Match a patient to diseases based on their phenotypes",
					"description": "Match a patient to diseases based on their phenotypes",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mme/disease"
						}
					}
				},
				{
					"name": "Post Fly Mme",
					"value": "Post Fly Mme",
					"action": "Match a patient to fruit fly genes based on similar phenotypes",
					"description": "Match a patient to fruit fly genes based on similar phenotypes",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mme/fly"
						}
					}
				},
				{
					"name": "Post Mouse Mme",
					"value": "Post Mouse Mme",
					"action": "Match a patient to mouse genes based on similar phenotypes",
					"description": "Match a patient to mouse genes based on similar phenotypes",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mme/mouse"
						}
					}
				},
				{
					"name": "Post Nematode Mme",
					"value": "Post Nematode Mme",
					"action": "Match a patient to nematode genes based on similar phenotypes",
					"description": "Match a patient to nematode genes based on similar phenotypes",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mme/nematode"
						}
					}
				},
				{
					"name": "Post Zebrafish Mme",
					"value": "Post Zebrafish Mme",
					"action": "Match a patient to zebrafish genes based on similar phenotypes",
					"description": "Match a patient to zebrafish genes based on similar phenotypes",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mme/zebrafish"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /mme/disease",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mme"
					],
					"operation": [
						"Post Disease Mme"
					]
				}
			}
		},
		{
			"displayName": "POST /mme/fly",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mme"
					],
					"operation": [
						"Post Fly Mme"
					]
				}
			}
		},
		{
			"displayName": "POST /mme/mouse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mme"
					],
					"operation": [
						"Post Mouse Mme"
					]
				}
			}
		},
		{
			"displayName": "POST /mme/nematode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mme"
					],
					"operation": [
						"Post Nematode Mme"
					]
				}
			}
		},
		{
			"displayName": "POST /mme/zebrafish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mme"
					],
					"operation": [
						"Post Zebrafish Mme"
					]
				}
			}
		},
];
