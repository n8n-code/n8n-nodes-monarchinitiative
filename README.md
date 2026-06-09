# @n8n-dev/n8n-nodes-monarchinitiative

![monarchinitiative Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-monarchinitiative.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-monarchinitiative)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing monarchinitiative API integrations by hand.**

Every time you connect n8n to monarchinitiative, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to monarchinitiative took 5 minutes, not half a day?**

This node gives you **26+ resources** out of the box: **Bioentity**, **Association**, **Cam**, **Bioentityset**, **Bioentityset Homologs**, and 21 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-monarchinitiative
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-monarchinitiative`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **monarchinitiative API** → paste your API key
3. Drag the **monarchinitiative** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Bioentity | Get returns genes associated with a given anatomy, Get returns diseases associated with a case, Get returns genotypes associated with a case, Get returns models associated with a case, Get returns phenotypes associated with a case, Get returns variants associated with a case, Get returns cases associated with a disease, Get returns genes associated with a disease, Get returns genotypes associated with a disease, Get returns associations to models of the disease, Get returns pathways associated with a disease, Get returns phenotypes associated with disease, Get returns publications associated with a disease, Get returns substances associated with a disease, Get returns variants associated with a disease, Get returns annotations associated to a function term, Get returns genes associated to a go term, Get returns publications associated to a go term, Get returns taxons associated to a go term, Get returns anatomical entities associated with a gene, Get returns cases associated with a gene, Get returns diseases associated with gene, Get returns expression events for a gene, Get returns function associations for a gene, Get returns genotypes associated with a gene, Get returns homologs for a gene, Get returns interactions for a gene, Get returns models associated with a gene, Get return diseases associated with orthologs of a gene, Get return phenotypes associated with orthologs for a gene, Get returns pathways associated with gene, Get returns phenotypes associated with gene, Get returns publications associated with a gene, Get returns variants associated with a gene, Get returns cases associated with a genotype, Get returns diseases associated with a genotype, Get returns genes associated with a genotype, Get returns genotypesgenotype associations, Get returns models associated with a genotype, Get returns phenotypes associated with a genotype, Get returns publications associated with a genotype, Get returns genotypesvariant associations, Get returns cases associated with a model, Get returns diseases associated with a model, Get returns genes associated with a model, Get returns genotypes associated with a model, Get returns phenotypes associated with a model, Get returns publications associated with a model, Get returns variants associated with a model, Get returns diseases associated with a pathway, Get returns genes associated with a pathway, Get returns phenotypes associated with a pathway, Get returns anatomical entities associated with a phenotype, Get returns cases associated with a phenotype, Get returns diseases associated with a phenotype, Get returns genes associated with a phenotype, Get returns genotypes associated with a phenotype, Get returns pathways associated with a phenotype, Get returns publications associated with a phenotype, Get returns variants associated with a phenotype, Get returns diseases associated with a publication, Get returns genes associated with a publication, Get returns genotypes associated with a publication, Get returns models associated with a publication, Get returns phenotypes associated with a publication, Get returns variants associated with a publication, Get returns associations between an activity and process and the specified substance, Get returns associations between given drug and roles, Get returns substances associated with a disease, Get returns cases associated with a variant, Get returns diseases associated with a variant, Get returns genes associated with a variant, Get returns genotypes associated with a variant, Get returns models associated with a variant, Get returns phenotypes associated with a variant, Get returns publications associated with a variant, Get returns basic info on object of any type, Get returns associations for an entity regardless of the type, Get return basic info on an object for a given type |
| Association | Get returns associations connecting two entities, Get returns list of matching associations for a given subject category, Get returns list of matching associations between a given subject and object category, Get returns list of matching associations starting from a given subject source, Get returns list of matching associations pointing to a given object target, Get returns list of matching associations of a given type, Get returns the association with a given identifier |
| Cam | Get returns list of models, Get returns list of matches, Get returns list of all instances, Get returns list of all models, Get returns list of all contributors across all models, Get returns list of all properties used across all models, Get returns list propertyvalues for all models, Get returns list of models matching query, Get returns a complete model, Get returns list of models |
| Bioentityset | Get returns compact associations for a given input set, Get summary statistics for objects associated, Get todo graph object spanning all entities, Get summary statistics for objects associated |
| Bioentityset Homologs | Get returns homology associations for a given input set of genes |
| Bioentityset Slimmer | Get for a given genes summarize its annotations over a defined set of slim, Get for a given genes summarize its annotations over a defined set of slim, Get for a given genes summarize its annotations over a defined set of slim |
| Evidence Graph | Get returns evidence graph object for a given association, Get returns evidence as a associationresults object given an association |
| Genome Features | Get returns list of matches |
| Graph | Get returns edges emanating from a given node, Get returns a graph node |
| Identifier Mapper | Get todo maps a list of identifiers from a source to a target |
| Identifier Prefixes | Get returns list of prefixes, Get returns contracted uri, Get returns expanded uri |
| Mart | Get bulk download of case associations, Get bulk download of disease associations, Get bulk download of gene associations, Get bulk download of orthologs, Get bulk download of paralogs |
| Nlp Annotate | Get annotate a given text using scigraph annotator, Post annotate a given text using scigraph annotator, Get annotate a given content using scigraph annotator and get all entities from content, Post annotate a given content using scigraph annotator and get all entities from content |
| Ontol | Get returns information content ic for a set of relevant ontology classes, Get extract a subgraph from an ontology, Post extract a subgraph from an ontology |
| Ontol Labeler | Get fetches a map from curiesids to labels |
| Ontol Identifier | Get fetches a map from curiesids to labels, Post fetches a map from curiesids to labels |
| Ontology | Get returns the ancestor ontology terms shared by two ontology terms, Get returns meta data of an ontology subset slim, Get returns meta data of an ontology term, Get returns graph of an ontology term, Get extract a subgraph from an ontology term, Get returns subsets slims associated to an ontology term |
| Owl Ontology | Get placeholder  use owlery for now, Get placeholder  use direct sparql endpoint for now |
| Pair Sim | Get pairwise similarity |
| Individual | Get returns list of matches, Get returns list of matches |
| Relation Usage | Get all relations used plus count of associations, Get all relations used plus count of associations, Get relation usage count for all subj x obj category combinations, Get relation usage count for all subj x obj category combinations showing label |
| Search | Get returns list of matching concepts or entities using lexical search, Get returns list of matching concepts or entities using lexical search, Get returns list of matching concepts or entities using lexical search |
| Variation Set | Get returns list of variant sets, Post creates a new variant set, Get returns list of matches, Get returns list of variant sets from a specified time period, Deletes variant set, Get returns a variant set, Put updates a variant set |
| Sim | Get compare a reference profile vs one profiles, Post compare a reference profile vs one or more profiles, Get annotation score, Post get annotation score, Get search for phenotypically similar diseases or model genes |
| Mme | Post match a patient to diseases based on their phenotypes, Post match a patient to fruit fly genes based on similar phenotypes, Post match a patient to mouse genes based on similar phenotypes, Post match a patient to nematode genes based on similar phenotypes, Post match a patient to zebrafish genes based on similar phenotypes |
| Metadata | Get metadata for all datasets from scigraph |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from monarchinitiative docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official monarchinitiative OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **monarchinitiative** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the monarchinitiative API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
