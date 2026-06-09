import type { INodeProperties } from 'n8n-workflow';

export const camDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					]
				}
			},
			"options": [
				{
					"name": "Get Activity Collection",
					"value": "Get Activity Collection",
					"action": "Returns list of models",
					"description": "Returns list of models",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/activity"
						}
					}
				},
				{
					"name": "Get Instance Object",
					"value": "Get Instance Object",
					"action": "Returns list of matches",
					"description": "Returns list of matches",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/instance/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Model Instances",
					"value": "Get Model Instances",
					"action": "Returns list of all instances",
					"description": "Returns list of all instances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/instances"
						}
					}
				},
				{
					"name": "Get Model Collection",
					"value": "Get Model Collection",
					"action": "Returns list of ALL models",
					"description": "Returns list of ALL models",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/model"
						}
					}
				},
				{
					"name": "Get Model Contributors",
					"value": "Get Model Contributors",
					"action": "Returns list of all contributors across all models",
					"description": "Returns list of all contributors across all models",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/model/contributors"
						}
					}
				},
				{
					"name": "Get Model Properties",
					"value": "Get Model Properties",
					"action": "Returns list of all properties used across all models",
					"description": "Returns list of all properties used across all models",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/model/properties"
						}
					}
				},
				{
					"name": "Get Model Property Values",
					"value": "Get Model Property Values",
					"action": "Returns list property-values for all models",
					"description": "Returns list property-values for all models",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/model/property_values"
						}
					}
				},
				{
					"name": "Get Model Query",
					"value": "Get Model Query",
					"action": "Returns list of models matching query",
					"description": "Returns list of models matching query",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/model/query"
						}
					}
				},
				{
					"name": "Get Model Object",
					"value": "Get Model Object",
					"action": "Returns a complete model",
					"description": "Returns a complete model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/model/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Physical Interaction",
					"value": "Get Physical Interaction",
					"action": "Returns list of models",
					"description": "Returns list of models",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cam/physical_interaction"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /cam/activity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Activity Collection"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "string to search for in title of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Activity Collection"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "string to search for in contributor of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Activity Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/instance/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Instance Object"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "string to search for in title of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Instance Object"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "string to search for in contributor of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Instance Object"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/model",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/model/contributors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Contributors"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/model/properties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Properties"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "string to search for in title of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Properties"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "string to search for in contributor of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/model/property_values",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Property Values"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "string to search for in title of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Property Values"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "string to search for in contributor of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Property Values"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/model/query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Query"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "string to search for in title of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Query"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "string to search for in contributor of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Query"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/model/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Model Object"
					]
				}
			}
		},
		{
			"displayName": "GET /cam/physical_interaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Physical Interaction"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "string to search for in title of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Physical Interaction"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "string to search for in contributor of model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cam"
					],
					"operation": [
						"Get Physical Interaction"
					]
				}
			}
		},
];
