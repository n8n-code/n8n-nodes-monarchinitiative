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

<details>
<summary><b>Bioentity</b> (79 operations)</summary>

- Get Returns genes associated with a given anatomy
- Get Returns diseases associated with a case
- Get Returns genotypes associated with a case
- Get Returns models associated with a case
- Get Returns phenotypes associated with a case
- Get Returns variants associated with a case
- Get Returns cases associated with a disease
- Get Returns genes associated with a disease
- Get Returns genotypes associated with a disease
- Get Returns associations to models of the disease
- Get Returns pathways associated with a disease
- Get Returns phenotypes associated with disease
- Get Returns publications associated with a disease
- Get Returns substances associated with a disease
- Get Returns variants associated with a disease
- Get Returns annotations associated to a function term
- Get Returns genes associated to a GO term
- Get Returns publications associated to a GO term
- Get Returns taxons associated to a GO term
- Get Returns anatomical entities associated with a gene
- Get Returns cases associated with a gene
- Get Returns diseases associated with gene
- Get Returns expression events for a gene
- Get Returns function associations for a gene
- Get Returns genotypes associated with a gene
- Get Returns homologs for a gene
- Get Returns interactions for a gene
- Get Returns models associated with a gene
- Get Return diseases associated with orthologs of a gene
- Get Return phenotypes associated with orthologs for a gene
- Get Returns pathways associated with gene
- Get Returns phenotypes associated with gene
- Get Returns publications associated with a gene
- Get Returns variants associated with a gene
- Get Returns cases associated with a genotype
- Get Returns diseases associated with a genotype
- Get Returns genes associated with a genotype
- Get Returns genotypes genotype associations
- Get Returns models associated with a genotype
- Get Returns phenotypes associated with a genotype
- Get Returns publications associated with a genotype
- Get Returns genotypes variant associations
- Get Returns cases associated with a model
- Get Returns diseases associated with a model
- Get Returns genes associated with a model
- Get Returns genotypes associated with a model
- Get Returns phenotypes associated with a model
- Get Returns publications associated with a model
- Get Returns variants associated with a model
- Get Returns diseases associated with a pathway
- Get Returns genes associated with a pathway
- Get Returns phenotypes associated with a pathway
- Get Returns anatomical entities associated with a phenotype
- Get Returns cases associated with a phenotype
- Get Returns diseases associated with a phenotype
- Get Returns genes associated with a phenotype
- Get Returns genotypes associated with a phenotype
- Get Returns pathways associated with a phenotype
- Get Returns publications associated with a phenotype
- Get Returns variants associated with a phenotype
- Get Returns diseases associated with a publication
- Get Returns genes associated with a publication
- Get Returns genotypes associated with a publication
- Get Returns models associated with a publication
- Get Returns phenotypes associated with a publication
- Get Returns variants associated with a publication
- Get Returns associations between an activity and process and the specified substance
- Get Returns associations between given drug and roles
- Get Returns substances associated with a disease
- Get Returns cases associated with a variant
- Get Returns diseases associated with a variant
- Get Returns genes associated with a variant
- Get Returns genotypes associated with a variant
- Get Returns models associated with a variant
- Get Returns phenotypes associated with a variant
- Get Returns publications associated with a variant
- Get Returns basic info on object of any type
- Get Returns associations for an entity regardless of the type
- Get Return basic info on an object for a given type

</details>

<details>
<summary><b>Association</b> (7 operations)</summary>

- Get Returns associations connecting two entities
- Get Returns list of matching associations for a given subject category
- Get Returns list of matching associations between a given subject and object category
- Get Returns list of matching associations starting from a given subject source
- Get Returns list of matching associations pointing to a given object target
- Get Returns list of matching associations of a given type
- Get Returns the association with a given identifier

</details>

<details>
<summary><b>Cam</b> (10 operations)</summary>

- Get Returns list of models
- Get Returns list of matches
- Get Returns list of all instances
- Get Returns list of ALL models
- Get Returns list of all contributors across all models
- Get Returns list of all properties used across all models
- Get Returns list property values for all models
- Get Returns list of models matching query
- Get Returns a complete model
- Get Returns list of models

</details>

<details>
<summary><b>Bioentityset</b> (4 operations)</summary>

- Get Returns compact associations for a given input set
- Get Summary statistics for objects associated
- Get TODO Graph object spanning all entities
- Get Summary statistics for objects associated

</details>

<details>
<summary><b>Bioentityset Homologs</b> (1 operations)</summary>

- Get Returns homology associations for a given input set of genes

</details>

<details>
<summary><b>Bioentityset Slimmer</b> (3 operations)</summary>

- Get For a given gene s summarize its annotations over a defined set of slim
- Get For a given gene s summarize its annotations over a defined set of slim
- Get For a given gene s summarize its annotations over a defined set of slim

</details>

<details>
<summary><b>Evidence Graph</b> (2 operations)</summary>

- Get Returns evidence graph object for a given association
- Get Returns evidence as a association results object given an association

</details>

<details>
<summary><b>Genome Features</b> (1 operations)</summary>

- Get Returns list of matches

</details>

<details>
<summary><b>Graph</b> (2 operations)</summary>

- Get Returns edges emanating from a given node
- Get Returns a graph node

</details>

<details>
<summary><b>Identifier Mapper</b> (1 operations)</summary>

- Get TODO maps a list of identifiers from a source to a target

</details>

<details>
<summary><b>Identifier Prefixes</b> (3 operations)</summary>

- Get Returns list of prefixes
- Get Returns contracted URI
- Get Returns expanded URI

</details>

<details>
<summary><b>Mart</b> (5 operations)</summary>

- Get Bulk download of case associations
- Get Bulk download of disease associations
- Get Bulk download of gene associations
- Get Bulk download of orthologs
- Get Bulk download of paralogs

</details>

<details>
<summary><b>Nlp Annotate</b> (4 operations)</summary>

- Get Annotate a given text using SciGraph annotator
- Post Annotate a given text using SciGraph annotator
- Get Annotate a given content using SciGraph annotator and get all entities from content
- Post Annotate a given content using SciGraph annotator and get all entities from content

</details>

<details>
<summary><b>Ontol</b> (3 operations)</summary>

- Get Returns information content IC for a set of relevant ontology classes
- Get Extract a subgraph from an ontology
- Post Extract a subgraph from an ontology

</details>

<details>
<summary><b>Ontol Labeler</b> (1 operations)</summary>

- Get Fetches a map from CURIEs IDs to labels

</details>

<details>
<summary><b>Ontol Identifier</b> (2 operations)</summary>

- Get Fetches a map from CURIEs IDs to labels
- Post Fetches a map from CURIEs IDs to labels

</details>

<details>
<summary><b>Ontology</b> (6 operations)</summary>

- Get Returns the ancestor ontology terms shared by two ontology terms
- Get Returns meta data of an ontology subset slim
- Get Returns meta data of an ontology term
- Get Returns graph of an ontology term
- Get Extract a subgraph from an ontology term
- Get Returns subsets slims associated to an ontology term

</details>

<details>
<summary><b>Owl Ontology</b> (2 operations)</summary>

- Get Placeholder use OWLery for now
- Get Placeholder use direct SPARQL endpoint for now

</details>

<details>
<summary><b>Pair Sim</b> (1 operations)</summary>

- Get pairwise similarity

</details>

<details>
<summary><b>Individual</b> (2 operations)</summary>

- Get Returns list of matches
- Get Returns list of matches

</details>

<details>
<summary><b>Relation Usage</b> (4 operations)</summary>

- Get All relations used plus count of associations
- Get All relations used plus count of associations
- Get Relation usage count for all subj x obj category combinations
- Get Relation usage count for all subj x obj category combinations showing label

</details>

<details>
<summary><b>Search</b> (3 operations)</summary>

- Get Returns list of matching concepts or entities using lexical search
- Get Returns list of matching concepts or entities using lexical search
- Get Returns list of matching concepts or entities using lexical search

</details>

<details>
<summary><b>Variation Set</b> (7 operations)</summary>

- Get Returns list of variant sets
- Post Creates a new variant set
- Get Returns list of matches
- Get Returns list of variant sets from a specified time period
- Delete s variant set
- Get Returns a variant set
- Put Updates a variant set

</details>

<details>
<summary><b>Sim</b> (5 operations)</summary>

- Get Compare a reference profile vs one profiles
- Post Compare a reference profile vs one or more profiles
- Get annotation score
- Post Get annotation score
- Get Search for phenotypically similar diseases or model genes

</details>

<details>
<summary><b>Mme</b> (5 operations)</summary>

- Post Match a patient to diseases based on their phenotypes
- Post Match a patient to fruit fly genes based on similar phenotypes
- Post Match a patient to mouse genes based on similar phenotypes
- Post Match a patient to nematode genes based on similar phenotypes
- Post Match a patient to zebrafish genes based on similar phenotypes

</details>

<details>
<summary><b>Metadata</b> (1 operations)</summary>

- Get metadata for all datasets from SciGraph

</details>

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


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
