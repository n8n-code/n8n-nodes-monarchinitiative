import type { INodeProperties } from 'n8n-workflow';

export const bioentityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					]
				}
			},
			"options": [
				{
					"name": "Get Anatomy Gene Associations",
					"value": "Get Anatomy Gene Associations",
					"action": "Returns genes associated with a given anatomy",
					"description": "Returns genes associated with a given anatomy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/anatomy/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Case Disease Associations",
					"value": "Get Case Disease Associations",
					"action": "Returns diseases associated with a case",
					"description": "Returns diseases associated with a case",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/case/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Case Genotype Associations",
					"value": "Get Case Genotype Associations",
					"action": "Returns genotypes associated with a case",
					"description": "Returns genotypes associated with a case",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/case/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Case Model Associations",
					"value": "Get Case Model Associations",
					"action": "Returns models associated with a case",
					"description": "Returns models associated with a case",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/case/{{$parameter[\"id\"]}}/models"
						}
					}
				},
				{
					"name": "Get Case Phenotype Associations",
					"value": "Get Case Phenotype Associations",
					"action": "Returns phenotypes associated with a case",
					"description": "Returns phenotypes associated with a case",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/case/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Case Variant Associations",
					"value": "Get Case Variant Associations",
					"action": "Returns variants associated with a case",
					"description": "Returns variants associated with a case",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/case/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Disease Case Associations",
					"value": "Get Disease Case Associations",
					"action": "Returns cases associated with a disease",
					"description": "Returns cases associated with a disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/cases"
						}
					}
				},
				{
					"name": "Get Disease Gene Associations",
					"value": "Get Disease Gene Associations",
					"action": "Returns genes associated with a disease",
					"description": "Returns genes associated with a disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Disease Genotype Associations",
					"value": "Get Disease Genotype Associations",
					"action": "Returns genotypes associated with a disease",
					"description": "Returns genotypes associated with a disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Disease Model Associations",
					"value": "Get Disease Model Associations",
					"action": "Returns associations to models of the disease",
					"description": "In the association object returned, the subject will be the disease, and the object will be the model.\nThe model may be a gene or genetic element.\n\nIf the query disease is a general class, the association subject may be to a specific disease.\n\nIn some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.\n\nIn other cases, the association will be *indirect*, for\nexample, chaining over orthology. In these cases the chain\nwill be reflected in the *evidence graph*\n\n* TODO: provide hook into owlsim for dynamic computation of models by similarity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/models"
						}
					}
				},
				{
					"name": "Get Disease Pathway Associations",
					"value": "Get Disease Pathway Associations",
					"action": "Returns pathways associated with a disease",
					"description": "Returns pathways associated with a disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/pathways"
						}
					}
				},
				{
					"name": "Get Disease Phenotype Associations",
					"value": "Get Disease Phenotype Associations",
					"action": "Returns phenotypes associated with disease",
					"description": "Returns phenotypes associated with disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Disease Publication Associations",
					"value": "Get Disease Publication Associations",
					"action": "Returns publications associated with a disease",
					"description": "Returns publications associated with a disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Disease Substance Associations",
					"value": "Get Disease Substance Associations",
					"action": "Returns substances associated with a disease",
					"description": "e.g. drugs or small molecules used to treat",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/treatment"
						}
					}
				},
				{
					"name": "Get Disease Variant Associations",
					"value": "Get Disease Variant Associations",
					"action": "Returns variants associated with a disease",
					"description": "Returns variants associated with a disease",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/disease/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Function Associations",
					"value": "Get Function Associations",
					"action": "Returns annotations associated to a function term",
					"description": "Returns annotations associated to a function term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/function/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Function Gene Associations",
					"value": "Get Function Gene Associations",
					"action": "Returns genes associated to a GO term",
					"description": "Returns genes associated to a GO term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/function/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Function Publication Associations",
					"value": "Get Function Publication Associations",
					"action": "Returns publications associated to a GO term",
					"description": "Returns publications associated to a GO term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/function/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Function Taxon Associations",
					"value": "Get Function Taxon Associations",
					"action": "Returns taxons associated to a GO term",
					"description": "Returns taxons associated to a GO term",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/function/{{$parameter[\"id\"]}}/taxons"
						}
					}
				},
				{
					"name": "Get Gene Anatomy Associations",
					"value": "Get Gene Anatomy Associations",
					"action": "Returns anatomical entities associated with a gene",
					"description": "Returns anatomical entities associated with a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/anatomy"
						}
					}
				},
				{
					"name": "Get Gene Case Associations",
					"value": "Get Gene Case Associations",
					"action": "Returns cases associated with a gene",
					"description": "Returns cases associated with a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/cases"
						}
					}
				},
				{
					"name": "Get Gene Disease Associations",
					"value": "Get Gene Disease Associations",
					"action": "Returns diseases associated with gene",
					"description": "Returns diseases associated with gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Gene Expression Associations",
					"value": "Get Gene Expression Associations",
					"action": "Returns expression events for a gene",
					"description": "Returns expression events for a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/expression/anatomy"
						}
					}
				},
				{
					"name": "Get Gene Function Associations",
					"value": "Get Gene Function Associations",
					"action": "Returns function associations for a gene",
					"description": "IMPLEMENTATION DETAILS\n----------------------\n\nNote: currently this is implemented as a query to the GO/AmiGO solr instance.\nThis directly supports IDs such as:\n\n - ZFIN e.g. ZFIN:ZDB-GENE-050417-357\n\nNote that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,\nthe standard for biolink is MGI:nnnn, so you should use this (will be transparently\nmapped to legacy ID)\n\nAdditionally, for some species such as Human, GO has the annotation attached to the UniProt ID.\nAgain, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be\nmapped behind the scenes for querying.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/function"
						}
					}
				},
				{
					"name": "Get Gene Genotype Associations",
					"value": "Get Gene Genotype Associations",
					"action": "Returns genotypes associated with a gene",
					"description": "Returns genotypes associated with a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Gene Homolog Associations",
					"value": "Get Gene Homolog Associations",
					"action": "Returns homologs for a gene",
					"description": "Returns homologs for a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/homologs"
						}
					}
				},
				{
					"name": "Get Gene Interactions",
					"value": "Get Gene Interactions",
					"action": "Returns interactions for a gene",
					"description": "Returns interactions for a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/interactions"
						}
					}
				},
				{
					"name": "Get Gene Model Associations",
					"value": "Get Gene Model Associations",
					"action": "Returns models associated with a gene",
					"description": "Returns models associated with a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/models"
						}
					}
				},
				{
					"name": "Get Gene Ortholog Disease Associations",
					"value": "Get Gene Ortholog Disease Associations",
					"action": "Return diseases associated with orthologs of a gene",
					"description": "Return diseases associated with orthologs of a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/ortholog/diseases"
						}
					}
				},
				{
					"name": "Get Gene Ortholog Phenotype Associations",
					"value": "Get Gene Ortholog Phenotype Associations",
					"action": "Return phenotypes associated with orthologs for a gene",
					"description": "Return phenotypes associated with orthologs for a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/ortholog/phenotypes"
						}
					}
				},
				{
					"name": "Get Gene Pathway Associations",
					"value": "Get Gene Pathway Associations",
					"action": "Returns pathways associated with gene",
					"description": "Returns pathways associated with gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/pathways"
						}
					}
				},
				{
					"name": "Get Gene Phenotype Associations",
					"value": "Get Gene Phenotype Associations",
					"action": "Returns phenotypes associated with gene",
					"description": "Returns phenotypes associated with gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Gene Publication Associations",
					"value": "Get Gene Publication Associations",
					"action": "Returns publications associated with a gene",
					"description": "Returns publications associated with a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Gene Variant Associations",
					"value": "Get Gene Variant Associations",
					"action": "Returns variants associated with a gene",
					"description": "Returns variants associated with a gene",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/gene/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Genotype Case Associations",
					"value": "Get Genotype Case Associations",
					"action": "Returns cases associated with a genotype",
					"description": "Returns cases associated with a genotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/cases"
						}
					}
				},
				{
					"name": "Get Genotype Disease Associations",
					"value": "Get Genotype Disease Associations",
					"action": "Returns diseases associated with a genotype",
					"description": "Returns diseases associated with a genotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Genotype Gene Associations",
					"value": "Get Genotype Gene Associations",
					"action": "Returns genes associated with a genotype",
					"description": "Returns genes associated with a genotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Genotype Genotype Associations",
					"value": "Get Genotype Genotype Associations",
					"action": "Returns genotypes-genotype associations",
					"description": "Genotypes may be related to one another according to the GENO model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Genotype Model Associations",
					"value": "Get Genotype Model Associations",
					"action": "Returns models associated with a genotype",
					"description": "Returns models associated with a genotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/models"
						}
					}
				},
				{
					"name": "Get Genotype Phenotype Associations",
					"value": "Get Genotype Phenotype Associations",
					"action": "Returns phenotypes associated with a genotype",
					"description": "Returns phenotypes associated with a genotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Genotype Publication Associations",
					"value": "Get Genotype Publication Associations",
					"action": "Returns publications associated with a genotype",
					"description": "Returns publications associated with a genotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Genotype Variant Associations",
					"value": "Get Genotype Variant Associations",
					"action": "Returns genotypes-variant associations",
					"description": "Returns genotypes-variant associations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/genotype/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Model Case Associations",
					"value": "Get Model Case Associations",
					"action": "Returns cases associated with a model",
					"description": "Returns cases associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/cases"
						}
					}
				},
				{
					"name": "Get Model Disease Associations",
					"value": "Get Model Disease Associations",
					"action": "Returns diseases associated with a model",
					"description": "Returns diseases associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Model Gene Associations",
					"value": "Get Model Gene Associations",
					"action": "Returns genes associated with a model",
					"description": "Returns genes associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Model Genotype Associations",
					"value": "Get Model Genotype Associations",
					"action": "Returns genotypes associated with a model",
					"description": "Returns genotypes associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Model Phenotype Associations",
					"value": "Get Model Phenotype Associations",
					"action": "Returns phenotypes associated with a model",
					"description": "Returns phenotypes associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Model Publication Associations",
					"value": "Get Model Publication Associations",
					"action": "Returns publications associated with a model",
					"description": "Returns publications associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Model Variant Associations",
					"value": "Get Model Variant Associations",
					"action": "Returns variants associated with a model",
					"description": "Returns variants associated with a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/model/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Pathway Disease Associations",
					"value": "Get Pathway Disease Associations",
					"action": "Returns diseases associated with a pathway",
					"description": "Returns diseases associated with a pathway",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/pathway/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Pathway Gene Associations",
					"value": "Get Pathway Gene Associations",
					"action": "Returns genes associated with a pathway",
					"description": "Returns genes associated with a pathway",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/pathway/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Pathway Phenotype Associations",
					"value": "Get Pathway Phenotype Associations",
					"action": "Returns phenotypes associated with a pathway",
					"description": "Returns phenotypes associated with a pathway",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/pathway/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Phenotype Anatomy Associations",
					"value": "Get Phenotype Anatomy Associations",
					"action": "Returns anatomical entities associated with a phenotype",
					"description": "Example IDs:\n\n * MP:0008521 abnormal Bowman membrane",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/anatomy"
						}
					}
				},
				{
					"name": "Get Phenotype Case Associations",
					"value": "Get Phenotype Case Associations",
					"action": "Returns cases associated with a phenotype",
					"description": "Returns cases associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/cases"
						}
					}
				},
				{
					"name": "Get Phenotype Disease Associations",
					"value": "Get Phenotype Disease Associations",
					"action": "Returns diseases associated with a phenotype",
					"description": "Returns diseases associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Phenotype Gene Associations",
					"value": "Get Phenotype Gene Associations",
					"action": "Returns genes associated with a phenotype",
					"description": "Returns genes associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Phenotype Genotype Associations",
					"value": "Get Phenotype Genotype Associations",
					"action": "Returns genotypes associated with a phenotype",
					"description": "Returns genotypes associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Phenotype Pathway Associations",
					"value": "Get Phenotype Pathway Associations",
					"action": "Returns pathways associated with a phenotype",
					"description": "Returns pathways associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/pathways"
						}
					}
				},
				{
					"name": "Get Phenotype Publication Associations",
					"value": "Get Phenotype Publication Associations",
					"action": "Returns publications associated with a phenotype",
					"description": "Returns publications associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Phenotype Variant Associations",
					"value": "Get Phenotype Variant Associations",
					"action": "Returns variants associated with a phenotype",
					"description": "Returns variants associated with a phenotype",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/phenotype/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Publication Disease Associations",
					"value": "Get Publication Disease Associations",
					"action": "Returns diseases associated with a publication",
					"description": "Returns diseases associated with a publication",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/publication/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Publication Gene Associations",
					"value": "Get Publication Gene Associations",
					"action": "Returns genes associated with a publication",
					"description": "Returns genes associated with a publication",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/publication/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Publication Genotype Associations",
					"value": "Get Publication Genotype Associations",
					"action": "Returns genotypes associated with a publication",
					"description": "Returns genotypes associated with a publication",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/publication/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Publication Model Associations",
					"value": "Get Publication Model Associations",
					"action": "Returns models associated with a publication",
					"description": "Returns models associated with a publication",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/publication/{{$parameter[\"id\"]}}/models"
						}
					}
				},
				{
					"name": "Get Publication Phenotype Associations",
					"value": "Get Publication Phenotype Associations",
					"action": "Returns phenotypes associated with a publication",
					"description": "Returns phenotypes associated with a publication",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/publication/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Publication Variant Associations",
					"value": "Get Publication Variant Associations",
					"action": "Returns variants associated with a publication",
					"description": "Returns variants associated with a publication",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/publication/{{$parameter[\"id\"]}}/variants"
						}
					}
				},
				{
					"name": "Get Substance Participant In Associations",
					"value": "Get Substance Participant In Associations",
					"action": "Returns associations between an activity and process and the specified substance",
					"description": "Examples relationships:\n\n * substance is a metabolite of a process\n * substance is synthesized by a process\n * substance is modified by an activity\n * substance elicits a response program/pathway\n * substance is transported by activity or pathway\n\nFor example, CHEBI:40036 (amitrole)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/substance/{{$parameter[\"id\"]}}/participant_in"
						}
					}
				},
				{
					"name": "Get Substance Role Associations",
					"value": "Get Substance Role Associations",
					"action": "Returns associations between given drug and roles",
					"description": "Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/substance/{{$parameter[\"id\"]}}/roles"
						}
					}
				},
				{
					"name": "Get Substance Treats Associations",
					"value": "Get Substance Treats Associations",
					"action": "Returns substances associated with a disease",
					"description": "e.g. drugs or small molecules used to treat",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/substance/{{$parameter[\"id\"]}}/treats"
						}
					}
				},
				{
					"name": "Get Variant Case Associations",
					"value": "Get Variant Case Associations",
					"action": "Returns cases associated with a variant",
					"description": "Returns cases associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/cases"
						}
					}
				},
				{
					"name": "Get Variant Disease Associations",
					"value": "Get Variant Disease Associations",
					"action": "Returns diseases associated with a variant",
					"description": "Returns diseases associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/diseases"
						}
					}
				},
				{
					"name": "Get Variant Gene Associations",
					"value": "Get Variant Gene Associations",
					"action": "Returns genes associated with a variant",
					"description": "Returns genes associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/genes"
						}
					}
				},
				{
					"name": "Get Variant Genotype Associations",
					"value": "Get Variant Genotype Associations",
					"action": "Returns genotypes associated with a variant",
					"description": "Returns genotypes associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/genotypes"
						}
					}
				},
				{
					"name": "Get Variant Model Associations",
					"value": "Get Variant Model Associations",
					"action": "Returns models associated with a variant",
					"description": "Returns models associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/models"
						}
					}
				},
				{
					"name": "Get Variant Phenotype Associations",
					"value": "Get Variant Phenotype Associations",
					"action": "Returns phenotypes associated with a variant",
					"description": "Returns phenotypes associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/phenotypes"
						}
					}
				},
				{
					"name": "Get Variant Publication Associations",
					"value": "Get Variant Publication Associations",
					"action": "Returns publications associated with a variant",
					"description": "Returns publications associated with a variant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/variant/{{$parameter[\"id\"]}}/publications"
						}
					}
				},
				{
					"name": "Get Generic Object",
					"value": "Get Generic Object",
					"action": "Returns basic info on object of any type",
					"description": "Returns basic info on object of any type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Generic Associations",
					"value": "Get Generic Associations",
					"action": "Returns associations for an entity regardless of the type",
					"description": "Returns associations for an entity regardless of the type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/{{$parameter[\"id\"]}}/associations"
						}
					}
				},
				{
					"name": "Get Generic Object By Type",
					"value": "Get Generic Object By Type",
					"action": "Return basic info on an object for a given type",
					"description": "Return basic info on an object for a given type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bioentity/{{$parameter[\"type\"]}}/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bioentity/anatomy/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Anatomy Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/case/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/case/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/case/{id}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Model Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/case/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/case/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Case Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Case Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Association Type",
			"name": "association_type",
			"description": "Additional filters: causal, non_causal, both",
			"default": "both",
			"type": "options",
			"options": [
				{
					"name": "Causal",
					"value": "causal"
				},
				{
					"name": "Non Causal",
					"value": "non_causal"
				},
				{
					"name": "Both",
					"value": "both"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "association_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Model Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/pathways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/treatment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Substance Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/disease/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Disease Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/function/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/function/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relationship Type",
			"name": "relationship_type",
			"description": "relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')",
			"default": "involved_in",
			"type": "options",
			"options": [
				{
					"name": "Involved In",
					"value": "involved_in"
				},
				{
					"name": "Involved In Regulation Of",
					"value": "involved_in_regulation_of"
				},
				{
					"name": "Acts Upstream Of Or Within",
					"value": "acts_upstream_of_or_within"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "relationship_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/function/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Function Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Function Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/function/{id}/taxons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Taxon Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Function Taxon Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Function Taxon Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Function Taxon Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/anatomy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Case Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Association Type",
			"name": "association_type",
			"description": "Additional filters: causal, non_causal, both",
			"default": "both",
			"type": "options",
			"options": [
				{
					"name": "Causal",
					"value": "causal"
				},
				{
					"name": "Non Causal",
					"value": "non_causal"
				},
				{
					"name": "Both",
					"value": "both"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "association_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/expression/anatomy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Expression Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/function",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Function Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/homologs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "Taxon CURIE of homolog, e.g. NCBITaxon:9606 (Can be an ancestral node in the ontology; includes inferred associations by default)",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Homology Type",
			"name": "homology_type",
			"description": "P (paralog), O (Ortholog) or LDO (least-diverged ortholog)",
			"default": "P",
			"type": "options",
			"options": [
				{
					"name": "P",
					"value": "P"
				},
				{
					"name": "O",
					"value": "O"
				},
				{
					"name": "LDO",
					"value": "LDO"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "homology_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Homolog Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/interactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Interactions"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Model Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/ortholog/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/ortholog/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Ortholog Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/pathways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/gene/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Gene Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Model Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/genotype/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Genotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Case Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/model/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Model Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/pathway/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/pathway/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/pathway/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Pathway Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/anatomy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Anatomy Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Case Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/pathways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Pathway Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/phenotype/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Phenotype Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/publication/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/publication/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/publication/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/publication/{id}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Model Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/publication/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/publication/{id}/variants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Publication Variant Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/substance/{id}/participant_in",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Participant In Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/substance/{id}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Role Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/substance/{id}/treats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Substance Treats Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Case Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/diseases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Disease Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/genes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Gene Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/genotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Genotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Model Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/phenotypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Phenotype Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/variant/{id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Variant Publication Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/{id}/associations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Taxon",
			"name": "taxon",
			"description": "One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default",
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Direct Taxon",
			"name": "direct_taxon",
			"description": "Set true to exclude inferred taxa",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct_taxon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Relation",
			"name": "relation",
			"description": "A relation CURIE to filter associations",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting responses <field> <desc,asc>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Query string to filter documents",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /bioentity/{type}/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "number of rows",
			"default": 100,
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "beginning row",
			"default": 0,
			"type": "number",
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"description": "Enable faceting",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Facet Fields",
			"name": "facet_fields",
			"description": "Fields to facet on",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "facet_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Unselect Evidence",
			"name": "unselect_evidence",
			"description": "If true, excludes evidence objects in response",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unselect_evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Exclude Automatic Assertions",
			"name": "exclude_automatic_assertions",
			"description": "If true, excludes associations that involve IEAs (ECO:0000501)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_automatic_assertions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Fetch Objects",
			"name": "fetch_objects",
			"description": "If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fetch_objects",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Use Compact Associations",
			"name": "use_compact_associations",
			"description": "If true, returns results in compact associations format",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "use_compact_associations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
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
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Evidence",
			"name": "evidence",
			"description": "Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "evidence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Get Association Counts",
			"name": "get_association_counts",
			"description": "Get association counts",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "get_association_counts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
		{
			"displayName": "Distinct Counts",
			"name": "distinct_counts",
			"description": "Get distinct counts for associations (to be used in conjunction with 'get_association_counts' parameter)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "distinct_counts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bioentity"
					],
					"operation": [
						"Get Generic Object By Type"
					]
				}
			}
		},
];
