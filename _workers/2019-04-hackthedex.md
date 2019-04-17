---
language: en
layout: worker
type: budget
category: Bug Bounty
bfid: 201904-hackthedex
workerid:
title: Renewal 1: Hack the DEX - a BitShares Bug Bounty Program
name: Blockchain Projects BV
company:
 name: Blockchain Projects BV
 url: https://www.blockchainprojectsbv.com/
status: draft
discussions:
 - name: bitsharestalk
   url: https://bitsharestalk.org/index.php?topic=26806.0
price: up to $XXX,000 bitUSD
duration: 1 year
start: 2019/04/15
end: 2019/04/14
paymentaccount: hackthedex-distribution
---

## History

HackTheDex bounty program was started in July 2018 and is consequently
renewed now. Several critical reports have been submitted and fixed
through HackTheDex, proof for its value and necessity. Those reports included
several possibilities for chain hault and other severe attacks. An overview can
be found here:

https://hackthedex.io/#/reports

In agreement with the BBF this proposal is asking to move over all remaining funds from
the [last worker](https://www.bitshares.foundation/workers/2018-07-hackthedex)
into this new worker and adjust the daily BTS payout accordingly. The
move over will only happen if this proposal stays active for a consecutive
7 days. Including pending payouts of the last worker, that means that
1,433,812.15112 BTS (~88288.92 at 16.24 BTS/USD) and 126,622.0299 bitUSD will
be shifted into the budget of this worker.


## General
BitShares is a decentralized exchange (DEX) built on top of delegated
proof-of-stake (DPoS) blockchain technology. With all financial
technology in the blockchain space, a major concern for users and
traders is security.

If someone found a critical bug in the DEX, they might be tempted to
exploit the bug, and attempt to steal funds from unsuspecting users.
Without a public bug bounty system, hackers do not have an obvious path
of disclosure for reporting their findings. They also do not have any
incentive to share their exploits and techniques, rather than using them
for personal gain.

With this proposal, we’d like to start a BitShares bug bounty program
for security researchers and penetration testers (...aka hackers!) to
disclose important security vulnerabilities they find within the
BitShares core protocol, reference wallet, and related code
repositories.

The proposal will use allocated funds to reward those that step forward
with exploits, relative to the overall risk assessment of the exploit.
The higher the payout for critical bugs, the more incentive there will
be to attract higher quality researchers, and ultimately providing
better security coverage for the DEX.

Funds will also be used to build and maintain a basic public website for
reporting vulnerabilities. The website will include all the information
needed for researchers to report a vulnerability, as well as an archive
of bounty reports and a leaderboard to encourage a little friendly
hacker competition. It will also lay the groundwork for future
HackTheDEX worker proposals to improve the security and safety of
BitShares as a whole.

Worker proposal funds will be held in an escrow account and unused funds
will be refunded back to the network at the end of the proposal period.

## Rules
*   Public disclosure of a vulnerability makes it ineligible for a bounty
*   Issues that have already been submitted by another user or are
    already known to repository maintainers are not eligible for bounty
    rewards
*   Members of any audit panel, and anyone involved with
    [HackTheDEX.io](https://hackthedex.io/), are not eligible to win
    bounty rewards
*   BitShares marketing websites and 3rd party websites/gateways are NOT
    part of the bounty program
*   A number of variables contribute to determining if a disclosed
    vulnerability is eligible for a reward. How the vulnerability is
    scored, and the methods used to determine the score, are at the sole
    discretion of the panel chosen to audit the report

## Audit Panel
When a vulnerability is disclosed, care must be taken to minimize public
disclosure until the issue can be verified by key developers and a bug
fix can be released.

Auditors that take the time to perform a thorough review of the
vulnerability and/or write code to fix the bug will also be compensated
appropriately. Sometimes, but not always, an auditor may need to work
with the researcher(s) to come up with a solution to lock down the
vulnerability.

For transparency, each awarded bounty will include a public report along
with which auditors were involved.

### Audit Panel Selection
When a vulnerability is reported, the panel will be selected from
available _appropriately experienced and trusted_ contributors within
the respective BitShares development community. The primary points of
contact below will be asked to coordinate appropriately experienced and
active developers to audit the report and resolve all issues as quickly
and safely as possible.

*   **BitShares Core Team:** [Ryan R. Fox](https://steemit.com/@fox)
*   **BitShares UI Team:** [Magnus Anderson (startail)](https://steemit.com/@sc-steemit)
*   **BitShares JS:** [Stefan Schießl (sschiessl-bcp)](https://steemit.com/@sschiessl)
*   **Beet:** [Alex M (clockwork)](https://steemit.com/@clockwork)
*   **BitShares Python:** [Fabian Schuh (xeroc)](https://steemit.com/@xeroc)
*   **BitShares Mobile:** [Syalon Flauspid (syalon)](https://github.com/syalon)


## Rewards
Rewards paid out will vary based on severity as guided by the [OWASP
method](https://www.owasp.org/index.php/OWASP_Risk_Rating_Methodology).

Rewards will be paid out in bitUSD based on available worker proposal
funds. The audit panel will use the following OWASP severity values as a
guideline to decide the upper limit of the reward:

*   **Critical**: up to 25,000 bitUSD
*   **High**: up to 10,000 bitUSD
*   **Medium**: up to 5,000 bitUSD
*   **Low**: up to 1,000 bitUSD
*   **Note**: up to 100 bitUSD

Researchers who have been awarded bounties will also be listed on the
hackthedex.io leaderboard (not mandatory).

To qualify for higher rewards, the submission should include everything
the auditing panel would need to reproduce and verify the vulnerability.
The submission should also be well-prepared and of high quality so that
it can be shared with the community as part of our transparency process.

## Open Bounties
Security vulnerability bounties apply to the following source code
repositories, with some exceptions:

*   [bitshares-core](https://github.com/bitshares/bitshares-core)
*   [bitshares-fc](https://github.com/bitshares/bitshares-fc)
*   [bitshares-ui](https://github.com/bitshares/bitshares-ui)
*   [bitsharesjs](https://github.com/bitshares/bitsharesjs)
*   [bitsharesjs-ws](https://github.com/bitshares/bitsharesjs-ws)
*   [beet](https://github.com/bitshares/beet)
*   [beet-js](https://github.com/bitshares/beet-js)
*   [bitshares-mobile-app](https://github.com/bitshares/bitshares-mobile-app)
*   [python-bitshares](https://github.com/bitshares/python-bitshares)

### **Protocol security**

*   Graphene vulnerabilities
*   Validations of blocks, transactions and messages
*   Transaction execution
*   Message calls

An example of a potential issue in this category is Bitcoin’s “zero-day” [flaw](https://en.bitcoin.it/wiki/CVE-2010-5139), which required a hard-fork.

### **Network security**

*   Finney attacks
*   Sybil attacks
*   Replay attacks
*   Transaction / messages malleability
*   (global) DoS

Here is an example from [bitcoin](https://en.bitcoin.it/wiki/CVE-2012-4684) of a global network based DoS scenario.

### **Node security**

Attacks on witness or public API nodes

*   DoS / resource abuse
*   Account / wallet address gathering/probing
*   Broadcast / withhold attacks

DoS example from [bitcoin](https://bitcointalk.org/index.php?topic=287351). DoS / Resource abuse example from [bitcoin](https://en.bitcoin.it/wiki/CVE-2013-2293).

### **Client application security**

This category addresses more classical security issues:

*   Data type overflow / wrap around, e.g. integer overflow
*   Concurrency, e.g. synchronization, state, races
*   Severe issues related to external libraries

Here is an [example](http://bitcoinmagazine.com/3668/bitcoin-network-shaken-by-blockchain-fork/) of a problem hidden in an external library.

## Fund Allocation
Funds will be held within an escrow account managed by the [BitShares
Blockchain Foundation](http://www.bitshares.foundation/). At the end of
the proposal period, **any excess funds will be returned to the
BitShares reserve pool**.

*   **Total Budget: 250,000 bitUSD**
    Refundable reserve via a BitShares Foundation [Budget Worker](http://www.bitshares.foundation/worker/) 
*   **Proposal Period: 1 year**
    Allows sufficient time for security researchers to learn about BitShares and explore the code base
*   **How funds will be allocated:**
    * Bounty Rewards (bitUSD)
    Varies based on OWASP severity scale and audit panel final review
    * 150 bitUSD/hour Audit panel member compensation ([more info](#audit-panel))
    * up to 1000 bitUSD/month for expenses, including Management, Services, Website, Coordination, Collaboration Tools and Reports
    * 5% Disbersement Fee for the [BitShares Blockchain Foundation](http://www.bitshares.foundation/) for escrowing and payment processing (included in the total budget)

## Total asking from the BitShares Blockchain

In total this worker proposal is asking of a funding of

    250,000 bitUSD - 1,433,812.15112 BTS / 16.24 BTS/USD - 126,622.0299 USD = 35089.04 bitUSD

over the duration of 1 year. Due to the generous initial funding the devaluation multiplier will be set to 1, which results in

    XX BTS per day.