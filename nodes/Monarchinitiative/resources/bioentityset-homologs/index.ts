import type { INodeProperties } from 'n8n-workflow';

export const bioentitysetHomologsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Homologs"
					]
				}
			},
			"options": [
				{
					"name": "Get Entity Set Homologs",
					"value": "Get Entity Set Homologs",
					"action": "Returns homology associations for a given input set of genes",
					"description": "Returns homology associations for a given input set of genes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentityset/homologs/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bioentityset/homologs/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Homologs"
					],
					"operation": [
						"Get Entity Set Homologs"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"description": "Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "subject",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentityset Homologs"
					],
					"operation": [
						"Get Entity Set Homologs"
					]
				}
			}
		},
];
