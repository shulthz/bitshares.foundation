---
title: BitShares Block Production Incident Report - Minority Fork
layout: announcement
---

On Friday, April 5th 2019 at block height 32,599,932, an incident occurred
on the BitShares network that caused a minority fork of less than one
hour in length.

Provided that during this forking, the irreversible block did not
advance, businesses on top of the BitShares blockchain that comply to
best practises have not been at any risk.

Due to the nature of the forking, actions that took place on minority
fork have been invalidated. For this reason, a small amount of trading
activity 

### Acknowledgement

The BitShares Blockchain Foundation would like to thank the core
developers and the Block producers for their short response time and for
resolving the issue in a timely manner.

## Root Cause

A previously installed soft-fork that prevented call order updates within
proposals to be included into a block has been removed in favor of the
release of BitShares 3.0.0. With the revival of bitUSD, and the
coincidental protocol upgrade scheduled with 3.0.0, a transaction made
it into the blockchain that contained such a call order update which
resulted in a separation of the Block producers between those that run
3.0.0 already and those that didn't.

## Resolution

The issue has been resolved by alerting every Block producer to properly
upgrade to 3.0.0 which only took a short period of time.

### Announcement Mailing List

In order to improve responsiveness, the BitShares Blockchain Foundation has set
up several mailing lists including a low noise `critical` and an `announcement`
list that we recommend fundamental industry partners (like exchanges and money
transmitting partners) to [subscribe to](http://lists.bitshares.foundation).
This will enable all businesses in the BitShares network to be aware of all
latest developments.
