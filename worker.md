---
layout: default
permalink: /worker/
language: en
---

# Overview

The BitShares Blockchain Foundation takes a lead in managing so called
*worker proposals* on the BitShares Blockchain. These proposals, once
approved by BTS holders, obtain funding in BTS tokens from the working
budget (a.k.a. reserves) of the BitShares DAC. These BTS tokens are then
traded into a *price-stable* cryptocurrency, such as bitCNY, bitEUR,
etc. \[[Read more](#worker-proposals-via-escrow)\]

## Transparency

We want to serve an open and trust-less ecosystem. As such, we provide
full transparency to the BitShares community.
For the sake of **transparency and accountability**, we have the
accounting for the escrow workers under public domain. You can read more
about this on our dedicated [Accountability Page](/accounting).

## Worker Proposals

The BitShares Blockchain Foundation currently maintains the following
list of proposals through escrow:

{% include workers.html %}

# Background

The BitShares Blockchain in its technical implementation only knows 
one type of worker proposal. It contains a name, payment account,
daily BTS payout rate and a link to provide insight into the purpose of
the worker proposal. Anyone can create a worker proposal on-chain, and 
afterwards all BTS token holders can vote on it. If it passes the 
threshold given by the refund workers and receives at least part of the
asked daily BTS payout, it is considered active.

The BitShares community informally split worker proposal into two types,
payment and opinion worker proposals. The former is meant to fund any kind
of activity as defined by the worker proposal, the latter is meant to
do strategic decisions and to agree on the consensus changing development 
and introducing new features of the BitShares core (BitShares Improvement Proposals).

The BitShares Blockchain Foundation can operate a opinion and payment worker proposals
and act as an escrow for the freelancers conducting the worker proposal. 
We see the following value propositions to use us as an escrow (please note that
the BBF is merely one possible way to facilitate worker proposals and is not 
meant as an exclusive escrow):

 - Reduce volatility risk for both parties. The freelancer has the risk of being underpaid if the core 
   token price drops, the blockchain has the risk to overpay the freelancer if the core token price raises. 
   From a business and service provider's perspective both is inacceptible
 - Operating risk for the blockchain. If the freelancer would be paid directly from the chain, he gets paid no matter what (assuming the worker remains active), 
   may not deliver what was promised, only partially or faulty. 
   It also has happened that the freelancer decided to follow a different path with the budget, without the need to get reapproval 
   from core token holders.
 - From a tax perspective, the tokens "appear" out of nowhere in the freelancers account, without 
   an entity in grasp to bill to. Without special considerations this can imply tax liabilities
 - Initial review and iteration on incoming worker proposals, utilizing our knowledge, experience 
   and feel for the need of the BitShares community to produce proposals with increased chances of approval. At the end
   proposals with clear tasks and value propositions are published.

Certainly using the BitShares Blockchain Foundation as an escrow introduces additional 
overhead and requires both trust from the BTS token holders and the freelancer.

## The procedure

The purpose of this service is to provide security and transparency to
both parties, the BitShares Blockchain Community, as well as the
freelancer that performs the work in expectation of payment. Setting up a worker proposal 
through the BBF normally sticks to the following flow:

1. Establishing agreement for Escrow service for a defined task, review and iterate
2. BBF sets up worker proposal on-chain
3. BBF obtains BTS from reserves
4. BBF obtains smartcoins according to agreement (bitCNY, bitUSD, ...)
5. freelancer proves delivery
6. BBF reviews delivery and invoice
7. freelancer receives payment
8. Escrow service returns excess BTS to reserves

## Payment worker proposals

The BitShares Blockchain Foundation splits the payment workers into two sub-types, 
namely escrow and budget workers. For both workers the 

* **escrow workers**: With this, we organize
  freelancers around the world that want to work for the BitShares DAC
  through our trusted escrow setup which carefully vets the individual
  offers, sets them up on the blockchain and ensures the maximum of code
  quality for the BTS token holders.

* **budget workers**: These workers serve as a budget
  that can be tapped whenever it is needed for purposes defined in the
  individual budget workers. This serves as working budget that is more
  flexible then static escrow workers in the way that it allows to pay
  many different people for their support out of a single purpose-specific
  fund.
  
*Remark 1*
A payment worker can only payout funds that have been obtained through 
the corresponding worker being active. The BitShares Blockchain Foundation
expects that the freelancer monitors the status of the worker and available
budget.

*Remark 2*
If not otherwise mentioned in the specific worker proposal, a 5% escrow 
fee is applied to all payment workers operated by the BitShares Blockchain Foundation
(starting 1. March 2019). This fee is applicable for each outgoing
payment and will be accounted for publicly for each worker.

### Escrow Worker Model

The purpose of escrow workers is to ensure proper payment for the work
provided over a period of time and absorb volatility of the BTS token
during that time. The freelancer has a reduced currency-risk during
while the BitShares DAC does not overpay for the provided work,
especially for long-term agreements.

Given that a worker on the blockchain may be voted in for quite some
time, the BitShares Blockchain Foundation would like to exercise the new
model of running an escrow worker to reduce risks and costs for the BTS
token holders:

* BitShares Blockchain Foundation has an account (`workers.bitshares.foundation`) that is co-owned by `committee-account` and escrow partners.
* The worker will redeem it's funds on a regular basis and buy up smartcoins from the market (with reasonable premiums).
* For this reason and due to volatility of BTS, the actual pay of the worker is higher than the USD value.
* The worker will only pay the agreed amount of money and pay only in smartcoins to the `bitshares.foundation` account.
* Every BTS that is not paid according to the terms of the worker proposal **will be returned** to the BTS token holders through the reserve fund.
* The amounts available for individual budgets can be obtained through [transparent account](/accounting)

### Budget Worker Model

Budget workers serve as workers that provide capital for specific
purposes where escrow workers do not fit, such as translation work,
bug fixing or bounties. The rules are as follows:

* BitShares Blockchain Foundation has an account (`workers.bitshares.foundation`) that is co-owned by `committee-account` and escrow partners.
* The BBF will redeem these funds on a regular basis and buy up smartcoins from the market (with reasonable premiums).
* For this reason and due to volatility of BTS, the available budget in USD terms might vary over time.
* The budget is controlled by `bitshares.foundation` who serves as an independent entity to supervise payouts.
* The amounts available for individual budgets can be obtained through [transparent account](/accounting)

## Opinion worker proposals

###  BSIP Worker Model

BSIP is the abbreviation for *BitShares Improvement Proposal* and is
describes the procedure of improving the BitShares protocol. Every major
change to the behavior of the BitShares Blockchain requires approval by
BTS holders by means of approval voting. This is implemented by means of
a BSIP worker.

# Beneficiaries and Invoices

Beneficiaries of either of these models need to authenticate themselves
against the BitShares Blockchain Foundation with their real-world identity.
Invoices need to be sent that are published in this site.

**Payments will be made only after receiving and approving individual invoices!**

Invoices are to be adressed to

    BitShares Blockchain Foundation
    Suite 10, Huggins House
    P. O. Box 187
    Old Manor Estate
    Gingerland, Nevis

It is the desire of the Foundation to fullfill the terms set forth in
the worker proposal. However, the BitShares Blockchain Foundation
expects freelancers to understand that no legal agreements is being
formed between the Foundation and the freelancer. The Foundation merely
acts as an escrow partner for funds offered by the BitShares community. 

# Legal Setup

Workers listed on this site will be owned by the BitShares Blockchain
Foundation, who will also act as the freelancer's partner and point of
contact for the worker proposal and supervise the entire progress.
Payouts are facilitated in Smartcoins through the escrow setup with the
independent BitShares Foundation.

[Blockchain Projects BV](http://blockchainprojectsbv.com) is contracted to 
handle the technical details and support quality assurance procedures.
