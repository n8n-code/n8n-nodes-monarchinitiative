import type { INodeProperties } from 'n8n-workflow';

export const nlpAnnotateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					]
				}
			},
			"options": [
				{
					"name": "Get Annotate",
					"value": "Get Annotate",
					"action": "Annotate a given text using SciGraph annotator",
					"description": "Annotate a given text using SciGraph annotator",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nlp/annotate/"
						}
					}
				},
				{
					"name": "Post Annotate",
					"value": "Post Annotate",
					"action": "Annotate a given text using SciGraph annotator",
					"description": "Annotate a given text using SciGraph annotator",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nlp/annotate/"
						}
					}
				},
				{
					"name": "Get Annotate Entities",
					"value": "Get Annotate Entities",
					"action": "Annotate a given content using SciGraph annotator and get all entities from content",
					"description": "Annotate a given content using SciGraph annotator and get all entities from content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nlp/annotate/entities"
						}
					}
				},
				{
					"name": "Post Annotate Entities",
					"value": "Post Annotate Entities",
					"action": "Annotate a given content using SciGraph annotator and get all entities from content",
					"description": "Annotate a given content using SciGraph annotator and get all entities from content",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nlp/annotate/entities"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /nlp/annotate/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"description": "The text content to annotate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Category",
			"name": "include_category",
			"description": "Categories to include for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Exclude Category",
			"name": "exclude_category",
			"description": "Categories to exclude for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Min Length",
			"name": "min_length",
			"description": "The minimum number of characters in the annotated entity",
			"default": 4,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Longest Only",
			"name": "longest_only",
			"description": "Should only the longest entity be returned for an overlapping group",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "longest_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Abbreviation",
			"name": "include_abbreviation",
			"description": "Should abbreviations be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_abbreviation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Acronym",
			"name": "include_acronym",
			"description": "Should acronyms be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_acronym",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Numbers",
			"name": "include_numbers",
			"description": "Should numbers be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_numbers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate"
					]
				}
			}
		},
		{
			"displayName": "POST /nlp/annotate/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"description": "The text content to annotate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Category",
			"name": "include_category",
			"description": "Categories to include for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Exclude Category",
			"name": "exclude_category",
			"description": "Categories to exclude for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Min Length",
			"name": "min_length",
			"description": "The minimum number of characters in the annotated entity",
			"default": 4,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Longest Only",
			"name": "longest_only",
			"description": "Should only the longest entity be returned for an overlapping group",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "longest_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Abbreviation",
			"name": "include_abbreviation",
			"description": "Should abbreviations be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_abbreviation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Acronym",
			"name": "include_acronym",
			"description": "Should acronyms be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_acronym",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "Include Numbers",
			"name": "include_numbers",
			"description": "Should numbers be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_numbers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate"
					]
				}
			}
		},
		{
			"displayName": "GET /nlp/annotate/entities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"description": "The text content to annotate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Category",
			"name": "include_category",
			"description": "Categories to include for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Exclude Category",
			"name": "exclude_category",
			"description": "Categories to exclude for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Min Length",
			"name": "min_length",
			"description": "The minimum number of characters in the annotated entity",
			"default": 4,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Longest Only",
			"name": "longest_only",
			"description": "Should only the longest entity be returned for an overlapping group",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "longest_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Abbreviation",
			"name": "include_abbreviation",
			"description": "Should abbreviations be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_abbreviation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Acronym",
			"name": "include_acronym",
			"description": "Should acronyms be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_acronym",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Numbers",
			"name": "include_numbers",
			"description": "Should numbers be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_numbers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Get Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "POST /nlp/annotate/entities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"description": "The text content to annotate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Category",
			"name": "include_category",
			"description": "Categories to include for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Exclude Category",
			"name": "exclude_category",
			"description": "Categories to exclude for annotation",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Min Length",
			"name": "min_length",
			"description": "The minimum number of characters in the annotated entity",
			"default": 4,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Longest Only",
			"name": "longest_only",
			"description": "Should only the longest entity be returned for an overlapping group",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "longest_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Abbreviation",
			"name": "include_abbreviation",
			"description": "Should abbreviations be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_abbreviation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Acronym",
			"name": "include_acronym",
			"description": "Should acronyms be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_acronym",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Numbers",
			"name": "include_numbers",
			"description": "Should numbers be included",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_numbers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nlp Annotate"
					],
					"operation": [
						"Post Annotate Entities"
					]
				}
			}
		},
];
