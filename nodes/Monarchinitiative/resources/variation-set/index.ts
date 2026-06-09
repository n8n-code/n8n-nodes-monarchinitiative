import type { INodeProperties } from 'n8n-workflow';

export const variationSetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					]
				}
			},
			"options": [
				{
					"name": "Get Variant Sets Collection",
					"value": "Get Variant Sets Collection",
					"action": "Returns list of variant sets",
					"description": "Returns list of variant sets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/variation/set/"
						}
					}
				},
				{
					"name": "Post Variant Sets Collection",
					"value": "Post Variant Sets Collection",
					"action": "Creates a new variant set",
					"description": "Creates a new variant set",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/variation/set/"
						}
					}
				},
				{
					"name": "Get Variant Analyze",
					"value": "Get Variant Analyze",
					"action": "Returns list of matches",
					"description": "Returns list of matches",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/variation/set/analyze/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Variant Sets Archive Collection",
					"value": "Get Variant Sets Archive Collection",
					"action": "Returns list of variant sets from a specified time period",
					"description": "Returns list of variant sets from a specified time period",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/variation/set/archive/{{$parameter[\"year\"]}}/{{$parameter[\"month\"]}}/{{$parameter[\"day\"]}}"
						}
					}
				},
				{
					"name": "Delete Variant Set Item",
					"value": "Delete Variant Set Item",
					"action": "Deletes variant set",
					"description": "Deletes variant set",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/variation/set/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Variant Set Item",
					"value": "Get Variant Set Item",
					"action": "Returns a variant set",
					"description": "Returns a variant set",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/variation/set/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Put Variant Set Item",
					"value": "Put Variant Set Item",
					"action": "Updates a variant set",
					"description": "Updates a variant set",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/variation/set/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /variation/set/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Results per page {error_msg}",
			"default": 10,
			"type": "options",
			"options": [
				{
					"name": "2",
					"value": 2
				},
				{
					"name": "10",
					"value": 10
				},
				{
					"name": "20",
					"value": 20
				},
				{
					"name": "30",
					"value": 30
				},
				{
					"name": "40",
					"value": 40
				},
				{
					"name": "50",
					"value": 50
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "POST /variation/set/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Article content",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "category_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"description": "The unique identifier of a variant set",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "Pub Date",
			"name": "pub_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pub_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Article title",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Post Variant Sets Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /variation/set/analyze/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Analyze"
					]
				}
			}
		},
		{
			"displayName": "GET /variation/set/archive/{year}/{month}/{day}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Sets Archive Collection"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Sets Archive Collection"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Results per page {error_msg}",
			"default": 10,
			"type": "options",
			"options": [
				{
					"name": "2",
					"value": 2
				},
				{
					"name": "10",
					"value": 10
				},
				{
					"name": "20",
					"value": 20
				},
				{
					"name": "30",
					"value": 30
				},
				{
					"name": "40",
					"value": 40
				},
				{
					"name": "50",
					"value": 50
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Sets Archive Collection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /variation/set/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Delete Variant Set Item"
					]
				}
			}
		},
		{
			"displayName": "GET /variation/set/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Get Variant Set Item"
					]
				}
			}
		},
		{
			"displayName": "PUT /variation/set/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Article content",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "category_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"description": "The unique identifier of a variant set",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
		{
			"displayName": "Pub Date",
			"name": "pub_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pub_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Article title",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Variation Set"
					],
					"operation": [
						"Put Variant Set Item"
					]
				}
			}
		},
];
