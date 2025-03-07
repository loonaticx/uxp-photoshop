---
id: "guides"
title: "Guides"
sidebar_label: "Guides"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# Guides

A collections class allowing for array access into a document's guides

Access this collection through [Document.guides](/ps_reference/classes/document/#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Indexable

▪ [index: *number*]: [*Guide*](/ps_reference/classes/guide/)

Used to access the guides in the collection

Access this collection through [Document.guides](/ps_reference/classes/document/#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [Guide](/ps_reference/modules/guide/) elements in this collection |
| parent | [*Document*](/ps_reference/classes/document/) | Read-only | The owner document of this Guide collection |

## Methods

### add

[*Guide*](/ps_reference/classes/guide/)

Adds a guide for the collection at the given coordinate and direction

***Fixes in Photoshop 24.0:***

- *Corect coordinate when resolution is not 72 PPI*
- *Returns valid instance of guide*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [*Direction*](/ps_reference/modules/constants/#direction) | Indicates whether the guide is vertical or horizontal |
| `coordinate` | *number* | Position of the guide measured from the ruler origin in pixels. The value can be a decimal number.  Note: the user can move the ruler origin which will affect the position value of the guides. |

___

### removeAll

*void*

Clears all guides from this collection
