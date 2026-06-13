import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "Get Autocomplete",
					"value": "Get Autocomplete",
					"action": "Returns list of matching concepts or entities using lexical search",
					"description": "Returns list of matching concepts or entities using lexical search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/entity/autocomplete/{{$parameter[\"term\"]}}"
						}
					}
				},
				{
					"name": "Get Search Hpo Entities",
					"value": "Get Search Hpo Entities",
					"action": "Returns list of matching concepts or entities using lexical search",
					"description": "Returns list of matching concepts or entities using lexical search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/entity/hpo-pl/{{$parameter[\"term\"]}}"
						}
					}
				},
				{
					"name": "Get Search Entities",
					"value": "Get Search Entities",
					"action": "Returns list of matching concepts or entities using lexical search",
					"description": "Returns list of matching concepts or entities using lexical search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/entity/{{$parameter[\"term\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/entity/autocomplete/{term}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Fq",
			"name": "fq",
			"description": "fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "fq",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "e.g. gene, disease",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"description": "ontology prefix: HP, -MONDO",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Include Eqs",
			"name": "include_eqs",
			"description": "Include equivalent ids in prefix filter",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_eqs",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Boost Fx",
			"name": "boost_fx",
			"description": "boost function e.g. pow(edges,0.334)",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "boost_fx",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Boost Q",
			"name": "boost_q",
			"description": "boost query e.g. category:genotype^-10",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "boost_q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "taxon filter, eg NCBITaxon:9606, includes inferred taxa",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "row number to start from",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Highlight Class",
			"name": "highlight_class",
			"description": "highlight class",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "highlight_class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Min Match",
			"name": "min_match",
			"description": "minimum should match parameter, see solr docs for details",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_match",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Exclude Groups",
			"name": "exclude_groups",
			"description": "Exclude grouping classes (classes with subclasses)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_groups",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Minimal Tokenizer",
			"name": "minimal_tokenizer",
			"description": "set to true to use the minimal tokenizer, good for variants and genotypes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "minimal_tokenizer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "GET /search/entity/hpo-pl/{term}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "row number to start from",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Phenotype Group",
			"name": "phenotype_group",
			"description": "phenotype group id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phenotype_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Phenotype Group Label",
			"name": "phenotype_group_label",
			"description": "phenotype group label",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phenotype_group_label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Anatomical System",
			"name": "anatomical_system",
			"description": "anatomical system id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "anatomical_system",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Anatomical System Label",
			"name": "anatomical_system_label",
			"description": "anatomical system label",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "anatomical_system_label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "Highlight Class",
			"name": "highlight_class",
			"description": "highlight class",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "highlight_class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Hpo Entities"
					]
				}
			}
		},
		{
			"displayName": "GET /search/entity/{term}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Fq",
			"name": "fq",
			"description": "fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "fq",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "e.g. gene, disease",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"description": "ontology prefix: HP, -MONDO",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Include Eqs",
			"name": "include_eqs",
			"description": "Include equivalent ids in prefix filter",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_eqs",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Boost Fx",
			"name": "boost_fx",
			"description": "boost function e.g. pow(edges,0.334)",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "boost_fx",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Boost Q",
			"name": "boost_q",
			"description": "boost query e.g. category:genotype^-10",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "boost_q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "taxon filter, eg NCBITaxon:9606, includes inferred taxa",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "row number to start from",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Highlight Class",
			"name": "highlight_class",
			"description": "highlight class",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "highlight_class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Min Match",
			"name": "min_match",
			"description": "minimum should match parameter, see solr docs for details",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_match",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Exclude Groups",
			"name": "exclude_groups",
			"description": "Exclude grouping classes (classes with subclasses)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_groups",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
		{
			"displayName": "Minimal Tokenizer",
			"name": "minimal_tokenizer",
			"description": "set to true to use the minimal tokenizer, good for variants and genotypes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "minimal_tokenizer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search Entities"
					]
				}
			}
		},
];
