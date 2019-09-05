---
title: BitShares Core Releases to fix chain halt
layout: announcement
---

The BitShares Blockchain Foundation would like to inform operators of
BitShares-core full nodes, that a recent incident caused the blockchain to halt
temporarily.

The issue has been identified quickly and the core team has released a fix for
all 3.x versions of bitshares-core.

**NOTE: ALL mainnet nodes need to upgrade**

The versions that include the fix are:

* 3.0.2
* 3.1.1
* 3.2.2
* 3.3.1

The upgrade does not cause a replay.

The BitShares Blockchain Foundation is glad that the core team
was able to resolve this issue in a timely manner.

Changes
-------

The fix adds a test that ensures that the settlement offset has
to be less than 100%.

Who Should Update
-----------------

Every node operator requires to upgrade.

Links:
------

- https://github.com/bitshares/bitshares-core/releases/tag/3.0.2
- https://github.com/bitshares/bitshares-core/releases/tag/3.1.1
- https://github.com/bitshares/bitshares-core/releases/tag/3.2.2
- https://github.com/bitshares/bitshares-core/releases/tag/3.3.1
