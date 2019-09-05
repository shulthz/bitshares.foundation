---
title: BitShares Core Releases to fix chain halt
layout: announcement
---

The BitShares Blockchain Foundation would like to inform operators of
BitShares-core full nodes that a recent incident caused the blockchain to halt
temporarily.

The halt began at approximately 12:45 UTC. The halt was caused by the
[force settlement](https://how.bitshares.works/en/master/bts_holders/dex_short.html?highlight=force) of an asset
that had been configured by its asset issuer with a force settlement penalty of 100%.
This  penalty caused a divide by zero error when the asset’s
[settlement fill price was re-calculated](https://github.com/bitshares/bitshares-core/blob/ba19d55ccc711b126349d812dbc3e7f8f62b5e59/libraries/chain/db_update.cpp#L405-L407).
A [resolution](https://github.com/bitshares/bitshares-core/commit/ed6b6d8dc93d266407959d342235aaa740d64dc5) was prepared by the BitShares Core Team
and updated in the form of [updates to all 3.x Protocol and Feature Releases](#https://github.com/bitshares/bitshares-core/releases/tag/3.3.1).
The BitShares block producers restarted the blockchain at approximately 14:00 UTC.

The BitShares Blockchain Foundation is glad that the core team
was able to resolve this issue in a timely manner.

Changes
-------

The [fix](https://github.com/bitshares/bitshares-core/commit/ed6b6d8dc93d266407959d342235aaa740d64dc5) adds a test that ensures that the settlement offset has
to be less than 100%.

Who Should Update
-----------------

**NOTE: Every node operator should uprgade their node**

The upgrade does not cause a replay.

Links:
------

Upgrades are available for the 3.x Protocol and Featrue Releases:

* 3.0.2: https://github.com/bitshares/bitshares-core/releases/tag/3.0.2
* 3.1.1: https://github.com/bitshares/bitshares-core/releases/tag/3.1.1
* 3.2.2: https://github.com/bitshares/bitshares-core/releases/tag/3.2.2
* 3.3.1: https://github.com/bitshares/bitshares-core/releases/tag/3.3.1
