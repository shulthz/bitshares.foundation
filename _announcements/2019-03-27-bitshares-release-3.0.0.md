---
title: BitShares Core Release 3.0.0 (mandatory)
layout: announcement
---

Dear BitShares User and Business Partners,

the BitShares Blockchain Foundation is pleased to let everyone know
about the *upcoming* protocol upgrade for the main BitShares Blockchain.

Highlights
----------

The new release comes with three highlights for the community:

* Release Numbering
  The core team has changed the versioning of the Core software to
  reflect a `Protocol.Feature.Hotfix` release format beginning from
  3.0.0

* Hashed Timelock Contracts (HTLC)
  The building blocks for Atomic Cross Chain Swaps (ACCS) and other
  solutions based on the HTLC concept.

* Sharing of Market Fees
  Asset issuers and gateways can chose to share market fees with with
  referrals with an adjustable percentage.

We encourage everyone to go through the release notes [1].

Important remark
----------------

This is a *protocol upgrade release*. **All** nodes must upgrade before

     2019-04-23 14:02:00 UTC

Upgrade
-------

This is how you can upgrade from source:

    git fetch origin
    git checkout 3.0.0
    git submodule sync --recursive
    git submodule update --init --recursive
    # it follows the usual compile instructions with cmake and make

A new docker container is currently built by Docker Hub and will be
available shortly via

    docker pull bitshares/bitshares-core:3.0.0

Change Log
----------

The detailed lists about bug and security fixes can be found in the
Release Notes [1]

Mailing Lists
-------------

We would like to remind everyone of the mailing lists [2] operated
by the BitShares Blockchain Foundation where business operators
and users can engage discussions and get the most recent updates,
directly. An distinct mailing list for *critical* operation updates
exists, too.

Protocol Upgrade: A reliable and secure hard fork
-------------------------------------------------

The new release modifies the blockchain protocol and due to this is a
consensus-changing modification. While the usual terminology for this
kind of upgrade in other blockchains is hard-fork, we would like to
emphasis a new term for Graphene-based blockchains: protocol upgrade.
The reasons we distinguish our upgrades from a hard-forks, is that our
consensus mechanism - delegated proof of stake (DPOS) - does not allow
for the blockchain to split into two (or even more) independent
blockchains. BitShares comes with an inherent replay protection and
together with BTS holder-approved block producers cannot result in a
splitting of the blockchain.

Acknowledgement
---------------

The BitShares Blockchain Foundation would like to acknowledge the
efforts taken by the entire core team and is looking forward to more
excellent releases.

Links:
------

 [1] https://github.com/bitshares/bitshares-core/releases/tag/3.0.0
 [2] http://lists.bitshares.foundation/listinfo
