---
layout: worker
language: en
bfid: 201903-bitshares.org-exotic-infrastructure
category: Network
type: budget
workerid:
title: "'Exotic Flavours' - Global Infrastructure for BitShares blockcain under bitshares.org domain"
name: Milos Preocanin
company:
 name: AP Asia Tech Co., LTD.
 url: https://apasia.tech
status: finished
discussions:
 - name: bitsharestalk
   url: ""
payments:
price: 47400 USD / 320k CNY
duration: 12 months
start: 2019/04/01
end: 2020/04/02
---

# **(Re)Introduction**

16 months ago, we [APAsia.tech](https://apasia.tech/) introduced our first basic infrastructure servers to the BitShares network with support from Move Institute (non-profit), DAOStreet, and selected others. Our goal was to provide better global connectivity to users of the BitShares blockchain and its available dapps.
For the first 9 months we were privately funded, and finally the first worker proposal was authored, presented to, then voted for by stakeholders in August 2018. We were operating a constant minimum of 20 BitShares publicly available API nodes around the world.

The [previous worker](https://www.bitshares.foundation/workers/2018-08-flash-global-infrastructure) provided these outcomes over 6 months (+ 1 month granted additionally):

- Minimum 80% uptime (our score on the end of the worker: 91.27%)
- Upgrade and redeploy nodes at the beginning of the worker + DDOS protection where available
- Proper management of cost optimizations (start $3380/month -> average last 3 months ~$1500/month)
- 2 status pages (1 was delivered to public, 1 remained in private development)
- Unspent funds from previous worker (Asked: 25,500.00 bitUSD, Available Balance: 7,994.05 bitUSD /after paid 7th month)


# **Worker Intent**

To continue providing reliable and affordable infrastructure with not less than 25 nodes on the BitShares blockchain for another 12 months, and with the addition of exotic and limited locations to current API infrastructure.
In addition, 3 baremetal instances are being deployed to those exotic locations. With this worker BitShares will be better branded and easily recognized, since one suggestion is to move all the API nodes from 3rd party domains to the bitshares.org domain. We also plan to provide more API's in Canada, Russia and Australia - where we saw increased activitity during the last worker. Locations such as EU and US are already covered.

(re)Launch of Infrastructure requires:

*	Approval of this proposal
*	5 Business days to shift all 3rd party domains to bitshares.org subdomains, purchase and deploy new SSL certificates for bitshares.org.
*	Acknowledgment from Stakeholders that this worker and its Public API nodes are for non-commercial USE only (limits are configured on some of the nodes).
*	Acknowledgment from Stakeholders that this worker has a management fee.

# **Worker Proposal**

### Proposal for BitShares mainnet infrastructure

 | Current nodes/domains for Mainnet API     | Proposed nodes/domains for Mainnet API | Notes                         |
 | :---------------------------------------  | ------------------------------------: | :-----------------------------|
 | 1.	bitshares.nu                         | stockholm.eu.api.bitshares.org         | 							  |
 | 2.	status200.bitshares.apasia.tech      | master.us.api.bitshares.org            | <-- To become loadbalancer    |
 | 3.	new-york.bitshares.apasia.tech       | new-york.us.api.bitshares.org          | 							  |
 | 4.	chicago.bitshares.apasia.tech        | chicago.us.api.bitshares.org           | 							  |
 | 5.	seattle.bitshares.apasia.tech        | seattle.us.api.bitshares.org           | 							  |
 | 6.	us-la.bitshares.apasia.tech          | losangeles.us.api.bitshares.org        | 							  |
 | 7.	atlanta.bitshares.apasia.tech        | atlanta.us.api.bitshares.org           | 							  |
 | 8.	valley.bitshares.apasia.tech         | siliconvalley.us.api.bitshares.org     | 							  |
 | 9.	dallas.bitshares.apasia.tech         | dallas.us.api.bitshares.org            | 							  |
 | 10.	miami.bitshares.apasia.tech          | miami.us.api.bitshares.org             | 							  |
 | 11.	ncali5.daostreet.com                 | sanjose.us.api.bitshares.org           | 							  |
 | 12.	scali10.daostreet.com                | sydney.au.api.bitshares.org            | 							  |
 | 13.	australia.bitshares.apasia.tech      | sydney2.au.api.bitshares.org           | !!! re-deploy                 |
 | 14.	netherlands.bitshares.apasia.tech    | amsterdam.eu.api.bitshares.org         | 							  |
 | 15.	england.bitshares.apasia.tech        | london.eu.api.bitshares.org            | 							  |
 | 16.	france.bitshares.apasia.tech         | paris.eu.api.bitshares.org             | 							  |
 | 17.	frankfurt8.daostreet.com             | frankfurt.eu.api.bitshares.org         | 							  |
 | 18.	paris7.daostreet.com                 | master.eu.api.bitshares.org            | <-- To become loadbalancer    |
 | 19.	api.open-asset.tech                  | toronto.ca.api.bitshares.org           | !!! re-deploy                 |
 | 20.	toronto.bitshares.apasia.tech        | toronto2.ca.api.bitshares.org          | 							  |
 | 21.	japan.bitshares.apasia.tech          | tokyo.asia.api.bitshares.org           | 							  |
 | 22.	singapore.bitshares.apasia.tech      | singapore.asia.api.bitshares.org       | 							  |

<hr>

### Proposal for BitShares testnet infrastructure

 | Current nodes/domains for Mainnet API     | Proposed nodes/domains for Mainnet API | Notes                         |
 | :--------------------------------------- |-------------------------------------: | :-----------------------------|
 | 1.	testnet.bitshares.apasia.tech        | dallas.testnet.api.bitshares.org       | 							  |
 | 2.	testnet-eu.bitshares.apasia.tech     | amsterdam.testnet.api.bitshares.org    | !!! re-deploy                 |
 | 3.	testnet-asia.bitshares.apasia.tech   | singapore.testnet.api.bitshares.org    | !!! re-deploy                 |

<hr>

### Proposal for baremetal deployment (server units provided/owned by AP Asia Tech Co., LTD.)

 | Specs                                     | Proposed nodes/domains for Mainnet API | Notes                                  |
 | :---------------------------------------: | ------------------------------------: | :--------------------------------------|
 | 1. DELL PowerEdge R210                       | bangkok.asia.api.bitshares.org      | Unit Ready ( + deploy bitshares-core)  |
 | 2. DELL PowerEdge R210                       | saopaulo.samerica.api.bitshares.org | Unit Ready + deploy + delivery to co-location                 |
 | 3. DELL PowerEdge R210                       | johannesburg.safrica.api.bitshares.org | !!! To be provisioned !!!              |

*Specifications for Dell PowerEdge R210 Rackmount Servers/Units: CPU Intel X3550 2.53GHz, HDD 500GB*2 (to be replaced), SSD 120GB *1(to be replaced), RAM 16-20GB, Dell Perc6 RAID CARD.*

## **Status Pages**

- https://status.apasia.tech (production)
- https://apasia.tech/demo1/ (development)

## **Milestones**

* Update domains and bitshares.org dns for presented changes in this worker
* Maintain uptime tracking/monitoring through status.apasia.tech on all nodes from this Worker with a start date from the date the Worker gets approved.
* Continue maintenance and weekly backup of fully synced [default API blockchain database](/http://149.28.193.16/bts-node-full.tar.gz) for easier/faster replay.
* Target of 90% uptime (avg of all nodes in this worker) on a monthly basis.
* Provision 3 baremetal instances (property of AP Asia Tech Co., LTD.) to 3 locations (Thailand, S. America, Africa) within 60 business days from the day worker becomes active.
* Maintain and monitor all nodes through status.bitshares.org (coming as part of the website bitshares.org)
* Maintain [GitHub resources for pre-compiled BitShares API](https://github.com/dls-cipher/BitShares-Mainnet-API-Node-pre-compiled-tutorial) node with default config and backup system.
* Research on Grafana interface for deployment and possible integration for infrastructure of this worker. (Thanks to [@xeroc](https://github.com/xeroc) for [initial demo, development ](http://88.198.69.93:3000/d/5GD-8olmk/bitshares-infrastructure-loadbalancer?orgId=1)  and introduction of Grafana to Community this year)
* Re-deploy master nodes on each continent as load balancers/entry points for improved public usage/access to the API.

*More nodes will be added/removed in the most economical manner preserving best functionality and global API availability.*

## **Costs Summary**

 | Item                                | Price       | Fees/Costs           |
 | ----------------------------------- | :---------: | --------------------: |
 | 25 nodes monthly - various ISPs     | $2,000.00   | Budget Cost per month |
 | 3 x co-location (Thailand, S. America and Africa)     |   $450.00   | Budget Cost per month |
 | Infrastructure Management Budget    | $1,500.00   | Budget Fee per month  |
 | 4 x [1TB WDBlue NAND SSD](https://www.jib.co.th/web/product/readProduct/28658/1471/1-TB-SSD--%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%94%E0%B8%B5--WD-BLUE-SATA-M-2-2280--WDS100T2B0B--3D) (baremetal upgrade)| $1,200.00   | Fixed one-time cost   |
 | 2 x [Premium SSL](https://aptech.supersite2.myorderbox.com/digital-certificate#) for subdomains |   $120.00 | Fixed one time cost   |
 | --------------------------------------------------- | ----------- | -------------------------- |
 | TOTAL (per month):                  | $3,950.00   | Max Budget per month  |
 | TOTAL (one-time):                   | $1,320.00   | Fixed costs           |

*Budgets for costs of the nodes and for the management fees are MAX budgets, not fixed costs.*

*Management hours will be tracked/logged with TopTracker and reports delivered to escrow with monthly invoices. Hours will be invoiced at the price of 100$/h for the manager and 50$/h for sys/network admin.*

**Terms & Remarks**

- "AP Asia Tech Co., LTD" will refer to BitShares DAC as a Client, providing deployments as defined in this Worker, with guarantee on uptime of not under 90% average, on a monthly basis.
- "AP Asia Tech Co., LTD" would be requesting BitShares Blockchain Foundation to be an Escrow Partner.
- "AP Asia Tech Co., LTD" will deliver invoices/receipts to the Escrow. Public accounting is available [here](workers.bitshares.foundation)
- "AP Asia Tech Co., LTD" reserve rights to preserve configuration of Public API to limited (non-commercial) use in order to prevent abuse of the BitShares eco-system, its contributors and funds of the reserve pool.
- "AP Asia Tech Co., LTD." and "Pattana Media Co., LTD." will provide 3 baremetal/server units to the blockchain for the duration of this worker. Configuration and hardware specifications of those units are subject to change without pre-notice to the Client. (hardware failures, uknown usage/cost increase, etc.)
- Hardware will be returned to "AP Asia Tech Co., LTD." and "Pattana Media Co., LTD." with upgrades (physical SSD storage drives) being available for handover to new worker upon finish/termination of this worker.
- "AP Asia Tech Co., LTD." takes responsibility for purchased equipment through this worker (e.g. SSD drives). If purchased it would be property of the blockchain. Setting up 1BTS + develiery expense worker in the future and approval from stakeholders through Consensus would be sufficient to claim the property as a new caretaker.
- DDOS Protection is included in current costs - where applicable/available.
- BitShares Blockchain Foundation Escrow fees are calculated/included in the budget of the worker (i.e. 5% of every payout).
