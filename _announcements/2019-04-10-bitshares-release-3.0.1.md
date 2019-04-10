---
title: BitShares Core Release 3.0.1 (recommended)
layout: announcement
---

Dear BitShares User and Business Partners,

The BitShares core developers have identified and fix a last issue with
the release of 3.0.1 [1].

Fixes
-----

* Added validation to the `htlc_extend` validation to prevent unwanted extensions
* Added history entry for all parties involved in an htlc.

Who Should Update
-----------------

* All validation node operators are required to upgrade prior to Protocol Activation: *23 APR 2019 14:02 UTC* as this is a consensus protocol impacting release
* All API node operators are strongly encouraged to upgrade, as account history IDs could become different between nodes running newer vs older versions
* All BTS token holders are strongly encouraged to review this release, then vote to support block producers signaling their intention to upgrade prior to protocol activation

Links:
------

- [1] https://github.com/bitshares/bitshares-core/releases/tag/3.0.1
