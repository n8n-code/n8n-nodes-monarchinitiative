import type { INodeProperties } from 'n8n-workflow';

export const owlOntologyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Owl Ontology"
					]
				}
			},
			"options": [
				{
					"name": "Get Dl Query",
					"value": "Get Dl Query",
					"action": "Placeholder - use OWLery for now",
					"description": "Placeholder - use OWLery for now",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/owl/ontology/dlquery/{{$parameter[\"query\"]}}"
						}
					}
				},
				{
					"name": "Get Sparql Query",
					"value": "Get Sparql Query",
					"action": "Placeholder - use direct SPARQL endpoint for now",
					"description": "Placeholder - use direct SPARQL endpoint for now",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/owl/ontology/sparql/{{$parameter[\"query\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /owl/ontology/dlquery/{query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Owl Ontology"
					],
					"operation": [
						"Get Dl Query"
					]
				}
			}
		},
		{
			"displayName": "GET /owl/ontology/sparql/{query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Owl Ontology"
					],
					"operation": [
						"Get Sparql Query"
					]
				}
			}
		},
];
