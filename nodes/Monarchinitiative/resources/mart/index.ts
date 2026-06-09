import type { INodeProperties } from 'n8n-workflow';

export const martDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					]
				}
			},
			"options": [
				{
					"name": "Get Mart Case Associations Resource",
					"value": "Get Mart Case Associations Resource",
					"action": "Bulk download of case associations",
					"description": "NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mart/case/{{$parameter[\"object_category\"]}}/{{$parameter[\"taxon\"]}}"
						}
					}
				},
				{
					"name": "Get Mart Disease Associations Resource",
					"value": "Get Mart Disease Associations Resource",
					"action": "Bulk download of disease associations",
					"description": "NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mart/disease/{{$parameter[\"object_category\"]}}/{{$parameter[\"taxon\"]}}"
						}
					}
				},
				{
					"name": "Get Mart Gene Associations Resource",
					"value": "Get Mart Gene Associations Resource",
					"action": "Bulk download of gene associations",
					"description": "NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mart/gene/{{$parameter[\"object_category\"]}}/{{$parameter[\"taxon\"]}}"
						}
					}
				},
				{
					"name": "Get Mart Ortholog Associations Resource",
					"value": "Get Mart Ortholog Associations Resource",
					"action": "Bulk download of orthologs",
					"description": "Bulk download of orthologs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mart/ortholog/{{$parameter[\"taxon1\"]}}/{{$parameter[\"taxon2\"]}}"
						}
					}
				},
				{
					"name": "Get Mart Paralog Associations Resource",
					"value": "Get Mart Paralog Associations Resource",
					"action": "Bulk download of paralogs",
					"description": "Bulk download of paralogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mart/paralog/{{$parameter[\"taxon1\"]}}/{{$parameter[\"taxon2\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /mart/case/{object_category}/{taxon}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Case Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "Slim",
			"name": "slim",
			"description": "Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Case Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /mart/disease/{object_category}/{taxon}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Disease Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "Slim",
			"name": "slim",
			"description": "Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Disease Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /mart/gene/{object_category}/{taxon}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Gene Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "Slim",
			"name": "slim",
			"description": "Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "slim",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Gene Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /mart/ortholog/{taxon1}/{taxon2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Ortholog Associations Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /mart/paralog/{taxon1}/{taxon2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mart"
					],
					"operation": [
						"Get Mart Paralog Associations Resource"
					]
				}
			}
		},
];
