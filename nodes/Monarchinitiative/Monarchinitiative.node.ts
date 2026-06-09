import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { bioentityDescription } from './resources/bioentity';
import { associationDescription } from './resources/association';
import { camDescription } from './resources/cam';
import { bioentitysetDescription } from './resources/bioentityset';
import { bioentitysetHomologsDescription } from './resources/bioentityset-homologs';
import { bioentitysetSlimmerDescription } from './resources/bioentityset-slimmer';
import { evidenceGraphDescription } from './resources/evidence-graph';
import { genomeFeaturesDescription } from './resources/genome-features';
import { graphDescription } from './resources/graph';
import { identifierMapperDescription } from './resources/identifier-mapper';
import { identifierPrefixesDescription } from './resources/identifier-prefixes';
import { martDescription } from './resources/mart';
import { nlpAnnotateDescription } from './resources/nlp-annotate';
import { ontolDescription } from './resources/ontol';
import { ontolLabelerDescription } from './resources/ontol-labeler';
import { ontolIdentifierDescription } from './resources/ontol-identifier';
import { ontologyDescription } from './resources/ontology';
import { owlOntologyDescription } from './resources/owl-ontology';
import { pairSimDescription } from './resources/pair-sim';
import { individualDescription } from './resources/individual';
import { relationUsageDescription } from './resources/relation-usage';
import { searchDescription } from './resources/search';
import { variationSetDescription } from './resources/variation-set';
import { simDescription } from './resources/sim';
import { mmeDescription } from './resources/mme';
import { metadataDescription } from './resources/metadata';

export class Monarchinitiative implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Monarchinitiative',
		name: 'N8nDevMonarchinitiative',
		icon: { light: 'file:./monarchinitiative.svg', dark: 'file:./monarchinitiative.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API integration layer for linked biological objects',
		defaults: { name: 'Monarchinitiative' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevMonarchinitiativeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Bioentity",
					"value": "Bioentity",
					"description": "Retrieval of domain entities plus associations"
				},
				{
					"name": "Association",
					"value": "Association",
					"description": "Retrieve associations between entities or entity and descriptors"
				},
				{
					"name": "Cam",
					"value": "Cam",
					"description": "Operations on GO Causal Activity Models (GO-CAMs)"
				},
				{
					"name": "Bioentityset",
					"value": "Bioentityset",
					"description": "Operations over sets of entities"
				},
				{
					"name": "Bioentityset Homologs",
					"value": "Bioentityset Homologs",
					"description": "Map gene IDs to their homologs"
				},
				{
					"name": "Bioentityset Slimmer",
					"value": "Bioentityset Slimmer",
					"description": "maps a set of entities to a slim"
				},
				{
					"name": "Evidence Graph",
					"value": "Evidence Graph",
					"description": "Operations on evidence graphs"
				},
				{
					"name": "Genome Features",
					"value": "Genome Features",
					"description": "Operations to retrieve sequence features"
				},
				{
					"name": "Graph",
					"value": "Graph",
					"description": "Operations over data graphs"
				},
				{
					"name": "Identifier Mapper",
					"value": "Identifier Mapper",
					"description": "mapping and resolution of identifiers"
				},
				{
					"name": "Identifier Prefixes",
					"value": "Identifier Prefixes",
					"description": "identifier prefixes"
				},
				{
					"name": "Mart",
					"value": "Mart",
					"description": "Perform bulk operations"
				},
				{
					"name": "Nlp Annotate",
					"value": "Nlp Annotate",
					"description": "annotate text using named entities"
				},
				{
					"name": "Ontol",
					"value": "Ontol",
					"description": "extract a subgraph from an ontology"
				},
				{
					"name": "Ontol Labeler",
					"value": "Ontol Labeler",
					"description": "Assign labels to IDs"
				},
				{
					"name": "Ontol Identifier",
					"value": "Ontol Identifier",
					"description": "Retrieve IDs for labels"
				},
				{
					"name": "Ontology",
					"value": "Ontology",
					"description": "Operations on Ontology Terms and Subsets"
				},
				{
					"name": "Owl Ontology",
					"value": "Owl Ontology",
					"description": "OWL-level operations on an ontology"
				},
				{
					"name": "Pair Sim",
					"value": "Pair Sim",
					"description": "pairwise similarity between two entities"
				},
				{
					"name": "Individual",
					"value": "Individual",
					"description": "Individual humans (including patients), or organisms"
				},
				{
					"name": "Relation Usage",
					"value": "Relation Usage",
					"description": "Usage of different relationship types"
				},
				{
					"name": "Search",
					"value": "Search",
					"description": "Search for entities"
				},
				{
					"name": "Variation Set",
					"value": "Variation Set",
					"description": "Operations related to sets of variants"
				},
				{
					"name": "Sim",
					"value": "Sim",
					"description": "Perform semantic similarity, ranking, and sufficiency scoring"
				},
				{
					"name": "Mme",
					"value": "Mme",
					"description": "Match patients with similar diseases and non-human genes based on their phenotypes"
				},
				{
					"name": "Metadata",
					"value": "Metadata",
					"description": "Get metadata"
				}
			],
			"default": ""
		},
		...bioentityDescription,
		...associationDescription,
		...camDescription,
		...bioentitysetDescription,
		...bioentitysetHomologsDescription,
		...bioentitysetSlimmerDescription,
		...evidenceGraphDescription,
		...genomeFeaturesDescription,
		...graphDescription,
		...identifierMapperDescription,
		...identifierPrefixesDescription,
		...martDescription,
		...nlpAnnotateDescription,
		...ontolDescription,
		...ontolLabelerDescription,
		...ontolIdentifierDescription,
		...ontologyDescription,
		...owlOntologyDescription,
		...pairSimDescription,
		...individualDescription,
		...relationUsageDescription,
		...searchDescription,
		...variationSetDescription,
		...simDescription,
		...mmeDescription,
		...metadataDescription
		],
	};
}
