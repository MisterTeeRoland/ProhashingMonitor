var coinList = [
  {
    id: "01coin",
    symbol: "zoc",
    name: "01coin",
  },
  {
    id: "0-5x-long-algorand-token",
    symbol: "algohalf",
    name: "0.5X Long Algorand Token",
  },
  {
    id: "0-5x-long-altcoin-index-token",
    symbol: "althalf",
    name: "0.5X Long Altcoin Index Token",
  },
  {
    id: "0-5x-long-balancer-token",
    symbol: "balhalf",
    name: "0.5X Long Balancer Token",
  },
  {
    id: "0-5x-long-bitcoin-cash-token",
    symbol: "bchhalf",
    name: "0.5X Long Bitcoin Cash Token",
  },
  {
    id: "0-5x-long-bitcoin-sv-token",
    symbol: "bsvhalf",
    name: "0.5X Long Bitcoin SV Token",
  },
  {
    id: "0-5x-long-bitcoin-token",
    symbol: "half",
    name: "0.5X Long Bitcoin Token",
  },
  {
    id: "0-5x-long-cardano-token",
    symbol: "adahalf",
    name: "0.5X Long Cardano Token",
  },
  {
    id: "0-5x-long-chainlink-token",
    symbol: "linkhalf",
    name: "0.5X Long Chainlink Token",
  },
  {
    id: "0-5x-long-cosmos-token",
    symbol: "atomhalf",
    name: "0.5X Long Cosmos Token",
  },
  {
    id: "0-5x-long-defi-index-token",
    symbol: "defihalf",
    name: "0.5X Long DeFi Index Token",
  },
  {
    id: "0-5x-long-dogecoin-token",
    symbol: "dogehalf",
    name: "0.5X Long Dogecoin Token",
  },
  {
    id: "0-5x-long-dragon-index-token",
    symbol: "drgnhalf",
    name: "0.5X Long Dragon Index Token",
  },
  {
    id: "0-5x-long-echange-token-index-token",
    symbol: "exchhalf",
    name: "0.5X Long Exchange Token Index Token",
  },
  {
    id: "0-5x-long-eos-token",
    symbol: "eoshalf",
    name: "0.5X Long EOS Token",
  },
  {
    id: "0-5x-long-ethereum-classic-token",
    symbol: "etchalf",
    name: "0.5X Long Ethereum Classic Token",
  },
  {
    id: "0-5x-long-ethereum-token",
    symbol: "ethhalf",
    name: "0.5X Long Ethereum Token",
  },
  {
    id: "0-5x-long-kyber-network-token",
    symbol: "knchalf",
    name: "0.5X Long Kyber Network Token",
  },
  {
    id: "0-5x-long-matic-token",
    symbol: "matichalf",
    name: "0.5X Long Matic Token",
  },
  {
    id: "0-5x-long-okb-token",
    symbol: "OKBHALF",
    name: "0.5X Long OKB Token",
  },
  {
    id: "0-5x-long-privacy-index-token",
    symbol: "privhalf",
    name: "0.5X Long Privacy Index Token",
  },
  {
    id: "0-5x-long-shitcoin-index-token",
    symbol: "halfshit",
    name: "0.5X Long Shitcoin Index Token",
  },
  {
    id: "0-5x-long-swipe-token",
    symbol: "sxphalf",
    name: "0.5X Long Swipe Token",
  },
  {
    id: "0-5x-long-tether-gold-token",
    symbol: "xauthalf",
    name: "0.5X Long Tether Gold Token",
  },
  {
    id: "0-5x-long-tezos-token",
    symbol: "xtzhalf",
    name: "0.5X Long Tezos Token",
  },
  {
    id: "0-5x-long-theta-network-token",
    symbol: "thetahalf",
    name: "0.5X Long Theta Network Token",
  },
  {
    id: "0-5x-long-xrp-token",
    symbol: "xrphalf",
    name: "0.5X Long XRP Token",
  },
  {
    id: "0cash",
    symbol: "zch",
    name: "0cash",
  },
  {
    id: "0chain",
    symbol: "zcn",
    name: "0chain",
  },
  {
    id: "0x",
    symbol: "zrx",
    name: "0x",
  },
  {
    id: "0xcert",
    symbol: "zxc",
    name: "0xcert",
  },
  {
    id: "0xcharts",
    symbol: "0xc",
    name: "0xCharts",
  },
  {
    id: "0xdao",
    symbol: "OXD",
    name: "0xDAO",
  },
  {
    id: "0xmonero",
    symbol: "0xmr",
    name: "0xMonero",
  },
  {
    id: "0xpad",
    symbol: "0xpad",
    name: "0xPAD",
  },
  {
    id: "0x-wormhole",
    symbol: "zrx",
    name: "0x (Wormhole)",
  },
  {
    id: "1000-florida",
    symbol: "realtoken-s-1000-florida-ave-akron-oh",
    name: "RealT Token - 1000 Florida Ave, Akron, OH 44314",
  },
  {
    id: "10024-10028-appoline",
    symbol: "realtoken-s-10024-10028-appoline-st-detroit-mi",
    name: "RealT Token -10024-10028 Appoline St, Detroit, MI 48227",
  },
  {
    id: "10084-grayton",
    symbol: "realtoken-s-10084-grayton-st-detroit-mi",
    name: "RealT Token - 10084 Grayton St, Detroit, MI 48224",
  },
  {
    id: "100man",
    symbol: "man",
    name: "100Man",
  },
  {
    id: "100x-coin",
    symbol: "100x",
    name: "100xCoin",
  },
  {
    id: "10604-somerset",
    symbol: "realtoken-s-10604-somerset-ave-detroit-mi",
    name: "RealT Token - 10604 Somerset Ave, Detroit, MI 48224",
  },
  {
    id: "10612-somerset",
    symbol: "realtoken-s-10612-somerset-ave-detroit-mi",
    name: "RealT Token - 10612 Somerset Ave, Detroit, MI 48224",
  },
  {
    id: "10616-mckinney",
    symbol: "realtoken-s-10616-mckinney-st-detroit-mi",
    name: "RealT Token - 10616 McKinney St, Detroit, MI 48224",
  },
  {
    id: "10617-hathaway",
    symbol: "realtoken-s-10617-hathaway-ave-cleveland-oh",
    name: "RealT Token - 10617 Hathaway Ave, Cleveland, OH 44108",
  },
  {
    id: "10629-mckinney",
    symbol: "realtoken-s-10629-mckinney-st-detroit-mi",
    name: "RealT Token - 10629 McKinney St, Detroit, MI 48224",
  },
  {
    id: "10639-stratman",
    symbol: "realtoken-s-10639-stratman-st-detroit-mi",
    name: "RealT Token - 10639 Stratman St, Detroit, MI 48224",
  },
  {
    id: "10700-whittier",
    symbol: "realtoken-s-10700-whittier-ave-detroit-mi",
    name: "RealT Token - 10700 Whittier Ave, Detroit, MI 48224",
  },
  {
    id: "10974-worden",
    symbol: "realtoken-s-10974-worden-st-detroit-mi",
    name: "RealT Token - 10974 Worden St, Detroit, MI 48224",
  },
  {
    id: "11078-longview",
    symbol: "realtoken-s-11078-longview-st-detroit-mi",
    name: "RealT Token - 11078 Longview St, Detroit, MI 48213",
  },
  {
    id: "11078-wayburn",
    symbol: "realtoken-s-11078-wayburn-st-detroit-mi",
    name: "RealT Token - 11078 Wayburn St, Detroit, MI 48224",
  },
  {
    id: "11201-college",
    symbol: "realtoken-s-11201-college-st-detroit-mi",
    name: "RealT Token - 11201 College St, Detroit, MI 48205",
  },
  {
    id: "11300-roxbury",
    symbol: "realtoken-s-11300-roxbury-st-detroit-mi",
    name: "RealT Token - 11300 Roxbury St, Detroit, MI 48224",
  },
  {
    id: "11653-nottingham",
    symbol: "realtoken-s-11653-nottingham-rd-detroit-mi",
    name: "RealT Token - 11653 Nottingham Rd, Detroit, MI 48224",
  },
  {
    id: "11957-olga",
    symbol: "realtoken-s-11957-olga-st-detroit-mi",
    name: "RealT Token - 11957 Olga St, Detroit, MI 48213",
  },
  {
    id: "12334-lansdowne",
    symbol: "realtoken-s-12334-lansdowne-street-detroit-mi",
    name: "RealT Token - 12334 Lansdowne Street, Detroit, MI 48224",
  },
  {
    id: "12405-santa-rosa",
    symbol: "realtoken-s-12405-santa-rosa-dr-detroit-mi",
    name: "RealT Token - 12405 Santa Rosa Dr, Detroit, MI 48204",
  },
  {
    id: "12409-whitehill",
    symbol: "realtoken-s-12409-whitehill-st-detroit-mi",
    name: "RealT Token - 12409 Whitehill St, Detroit, MI 48224",
  },
  {
    id: "1244-s-avers",
    symbol: "realtoken-s-1244-s.avers-st-chicago-il",
    name: "RealT Token - 1244 S. Avers St, Chicago, IL 60623",
  },
  {
    id: "12866-lauder",
    symbol: "realtoken-s-12866-lauder-st-detroit-mi",
    name: "RealT Token - 12866 Lauder St, Detroit, MI 48227",
  },
  {
    id: "12ships",
    symbol: "TSHP",
    name: "12Ships",
  },
  {
    id: "13045-wade",
    symbol: "realtoken-s-13045-wade-st-detroit-mi",
    name: "RealT Token - 13045 Wade St, Detroit, MI 48213",
  },
  {
    id: "13114-glenfield",
    symbol: "realtoken-s-13114-glenfield-ave-detroit-mi",
    name: "RealT Token - 13114 Glenfield Ave, Detroit, MI 48213",
  },
  {
    id: "13116-kilbourne",
    symbol: "realtoken-s-13116-kilbourne-ave-detroit-mi",
    name: "RealT Token - 13116 Kilbourne Ave, Detroit, MI 48213",
  },
  {
    id: "1337",
    symbol: "1337",
    name: "Elite",
  },
  {
    id: "13606-winthrop",
    symbol: "realtoken-s-13606-winthrop-st-detroit-mi",
    name: "RealT Token - 13606 Winthrop St, Detroit, MI 48227",
  },
  {
    id: "13991-warwick",
    symbol: "realtoken-s-13991-warwick-st-detroit-mi",
    name: "RealT Token -13991 Warwick St, Detroit, MI, 48223",
  },
  {
    id: "14066-santa-rosa",
    symbol: "realtoken-s-14066-santa-rosa-dr-detroit-mi",
    name: "RealT Token - 14066 Santa Rosa Dr, Detroit, MI 48238",
  },
  {
    id: "14078-carlisle",
    symbol: "realtoken-s-14078-carlisle-st-detroit-mi",
    name: "RealT Token - 14078 Carlisle St, Detroit, MI 48205",
  },
  {
    id: "14229-wilshire",
    symbol: "realtoken-s-14229-wilshire-dr-detroit-mi",
    name: "RealT Token - 14229 Wilshire Dr, Detroit, MI 48213",
  },
  {
    id: "14231-strathmoor",
    symbol: "realtoken-s-14231-strathmoor-st-detroit-mi",
    name: "RealT Token - 14231 Strathmoor St, Detroit, MI 48227",
  },
  {
    id: "14319-rosemary",
    symbol: "realtoken-s-14319-rosemary-st-detroit-mi",
    name: "RealT Token - 14319 Rosemary St, Detroit, MI 48213",
  },
  {
    id: "14494-chelsea",
    symbol: "realtoken-s-14494-chelsea-ave-detroit-mi",
    name: "RealT Token - 14494 Chelsea Ave, Detroit, MI 48213",
  },
  {
    id: "14825-wilfred",
    symbol: "realtoken-s-14825-wilfried-st-detroit-mi",
    name: "RealT Token - 14825 Wilfred St, Detroit, MI 48213",
  },
  {
    id: "14882-troester",
    symbol: "realtoken-s-14882-troester-st-detroit-mi",
    name: "RealT Token - 14882 Troester St, Detroit, MI 48205",
  },
  {
    id: "14918-joy",
    symbol: "realtoken-s-14918-joy-rd-detroit-mi",
    name: "RealT Token - 14918 Joy Rd, Detroit, MI 48228",
  },
  {
    id: "15039-ward",
    symbol: "realtoken-s-15039-ward-ave-detroit-mi",
    name: "RealT Token - 15039 Ward Ave, Detroit, MI 48227",
  },
  {
    id: "15048-freeland",
    symbol: "realtoken-s-15048-freeland-st-detroit-mi",
    name: "RealT Token - 15048 Freeland St, Detroit, MI, 48227",
  },
  {
    id: "15095-hartwell",
    symbol: "realtoken-s-15095-hartwell-st-detroit-mi",
    name: "RealT Token -15095 Hartwell St, Detroit, MI 48227",
  },
  {
    id: "15350-greydale",
    symbol: "realtoken-s-15350-greydale-st-detroit-mi",
    name: "RealT Token - 15350 Greydale St, Detroit, MI 48223",
  },
  {
    id: "15373-parkside",
    symbol: "realtoken-s-15373-parkside-st-detroit-mi",
    name: "RealT Token - 15373 Parkside St, Detroit, MI 48238",
  },
  {
    id: "1542-s-ridgeway",
    symbol: "realtoken-s-1542-s.ridgeway-ave-chicago-il",
    name: "RealT Token - 1542 S Ridgeway Ave, Chicago, IL 60623",
  },
  {
    id: "15634-liberal",
    symbol: "realtoken-s-15634-liberal-st-detroit-mi",
    name: "RealT Token - 15634 Liberal St, Detroit, MI 48205",
  },
  {
    id: "15753-hartwell",
    symbol: "realtoken-s-15753-hartwell-st-detroit-mi",
    name: "RealT Token - 15753 Hartwell St, Detroit, MI 48227",
  },
  {
    id: "15770-prest",
    symbol: "realtoken-s-15770-prest-st-detroit-mi",
    name: "RealT Token - 15770 Prest St, Detroit, MI 48227",
  },
  {
    id: "15777-ardmore",
    symbol: "realtoken-s-15777-ardmore-st-detroit-mi",
    name: "RealT Token - 15777 Ardmore St, Detroit, MI 48227",
  },
  {
    id: "15778-manor",
    symbol: "realtoken-s-15778-manor-st-detroit-mi",
    name: "RealT Token - 15778 Manor St, Detroit, MI 48238",
  },
  {
    id: "15784-monte-vista",
    symbol: "realtoken-s-15784-monte-vista-st-detroit-mi",
    name: "RealT Token - 15784 Monte Vista St, Detroit, MI 48238",
  },
  {
    id: "15796-hartwell",
    symbol: "realtoken-s-15796-hartwell-st-detroit-mi",
    name: "RealT Token - 15796 Hartwell St, Detroit, MI 48227",
  },
  {
    id: "15860-hartwell",
    symbol: "realtoken-s-15860-hartwell-st-detroit-mi",
    name: "RealT Token - 15860 Hartwell St, Detroit, MI 48227",
  },
  {
    id: "1617-s-avers",
    symbol: "realtoken-s-1617-s.avers-ave-chicago-il",
    name: "RealT Token - 1617 S Avers Ave, Chicago, IL 60623",
  },
  {
    id: "16200-fullerton",
    symbol: "realtoken-s-16200-fullerton-ave-detroit-mi",
    name: "RealT Token - 16200 Fullerton Ave, Detroit, MI 48227",
  },
  {
    id: "17500-evergreen",
    symbol: "realtoken-s-17500-evergreen-rd-detroit-mi",
    name: "RealT Token - 17500 Evergreen Rd, Detroit, MI 48219",
  },
  {
    id: "17809-charest",
    symbol: "realtoken-s-17809-charest-st-detroit-mi",
    name: "RealT Token - 17809 Charest St, Detroit, MI 48212",
  },
  {
    id: "17813-bradford",
    symbol: "realtoken-s-17813-bradford-st-detroit-mi",
    name: "RealT Token - 17813 Bradford St, Detroit, MI 48205",
  },
  {
    id: "1815-s-avers",
    symbol: "realtoken-s-1815-s.avers-ave-chicago-il",
    name: "RealT Token - 1815 S Avers Ave, Chicago, IL 60623",
  },
  {
    id: "18273-monte-vista",
    symbol: "realtoken-s-18273-monte-vista-st-detroit-mi",
    name: "RealT Token - 18273 Monte Vista St, Detroit, MI 48221",
  },
  {
    id: "18276-appoline",
    symbol: "realtoken-s-18276-appoline-st-detroit-mi",
    name: "RealT Token - 18276 Appoline St, Detroit, MI 48235",
  },
  {
    id: "18433-faust",
    symbol: "realtoken-s-18433-faust-ave-detroit-mi",
    name: "RealT Token - 18433 Faust Ave, Detroit, MI, 48219",
  },
  {
    id: "18466-fielding",
    symbol: "realtoken-s-18466-fielding-st-detroit-mi",
    name: "RealT Token -18466 Fielding St, Detroit, MI 48219",
  },
  {
    id: "18481-westphalia",
    symbol: "realtoken-s-18481-westphalia-st-detroit-mi",
    name: "RealT Token - 18481 Westphalia St, Detroit, MI 48205",
  },
  {
    id: "18776-sunderland",
    symbol: "realtoken-s-18776-sunderland-rd-detroit-mi",
    name: "RealT Token - 18776 Sunderland Rd, Detroit, MI 48219",
  },
  {
    id: "18900-mansfield",
    symbol: "realtoken-s-18900-mansfield-st-detroit-mi",
    name: "RealT Token - 18900 Mansfield St, Detroit, MI 48235",
  },
  {
    id: "18983-alcoy",
    symbol: "realtoken-s-18983-alcoy-ave-detroit-mi",
    name: "RealT Token - 18983 Alcoy Ave, Detroit, MI 48205",
  },
  {
    id: "19020-rosemont",
    symbol: "realtoken-s-19020-rosemont-ave-detroit-mi",
    name: "RealT Token - 19020 Rosemont Ave, Detroit, MI 48219",
  },
  {
    id: "19136-tracey",
    symbol: "realtoken-s-19136-tracey-st-detroit-mi",
    name: "RealT Token - 19136 Tracey St, Detroit MI 48235",
  },
  {
    id: "19163-mitchell",
    symbol: "realtoken-s-19163-mitchell-st-detroit-mi",
    name: "RealT Token - 19163 Mitchell St, Detroit, MI 48234",
  },
  {
    id: "19200-strasburg",
    symbol: "realtoken-s-19200-strasburg-st-detroit-mi",
    name: "RealT Token - 19200 Strasburg St, Detroit, MI 48205",
  },
  {
    id: "19201-westphalia",
    symbol: "realtoken-s-19201-westphalia-st-detroit-mi",
    name: "RealT Token - 19201 Westphalia St, Detroit, MI 48205",
  },
  {
    id: "19218-houghton",
    symbol: "realtoken-s-19218-houghton-st-detroit-mi",
    name: "RealT Token - 19218 Houghton St, Detroit, MI 48219",
  },
  {
    id: "19311-keystone",
    symbol: "realtoken-s-19311-keystone-st-detroit-mi",
    name: "RealT Token - 19311 Keystone St, Detroit, MI 48234",
  },
  {
    id: "19317-gable",
    symbol: "realtoken-s-19317-gable-st-detroit-mi",
    name: "RealT Token - 19317 Gable St, Detroit, MI 48234",
  },
  {
    id: "19333-moenart",
    symbol: "realtoken-s-19333-moenart-st-detroit-mi",
    name: "RealT Token - 19333 Moenart St, Detroit MI 48234",
  },
  {
    id: "19596-goulburn",
    symbol: "realtoken-s-19596-goulburn-st-detroit-mi",
    name: "RealT Token - 19596 Goulburn Ave, Detroit, MI 48205",
  },
  {
    id: "19996-joann",
    symbol: "realtoken-s-19996-joann-ave-detroit-mi",
    name: "RealT Token - 19996 Joann Ave, Detroit, MI 48205",
  },
  {
    id: "1art",
    symbol: "1art",
    name: "OneArt",
  },
  {
    id: "1box",
    symbol: "1box",
    name: "1BOX",
  },
  {
    id: "1doge",
    symbol: "1doge",
    name: "1Doge",
  },
  {
    id: "1-dollar",
    symbol: "oneusd",
    name: "1 Dollar",
  },
  {
    id: "1eco",
    symbol: "1eco",
    name: "1eco",
  },
  {
    id: "1inch",
    symbol: "1inch",
    name: "1inch",
  },
  {
    id: "1inch-wormhole",
    symbol: "1inch",
    name: "1INCH (Wormhole)",
  },
  {
    id: "1million-nfts",
    symbol: "1mil",
    name: "1MillionNFTs",
  },
  {
    id: "1million-token",
    symbol: "1mt",
    name: "1Million Token",
  },
  {
    id: "1nft",
    symbol: "1nft",
    name: "1NFT",
  },
  {
    id: "1peco",
    symbol: "1peco",
    name: "1peco",
  },
  {
    id: "1safu",
    symbol: "safu",
    name: "1SAFU",
  },
  {
    id: "1sol",
    symbol: "1sol",
    name: "1Sol",
  },
  {
    id: "1sol-io-wormhole",
    symbol: "1sol",
    name: "1sol.io (Wormhole)",
  },
  {
    id: "1swap",
    symbol: "1swap",
    name: "1Swap",
  },
  {
    id: "1tronic",
    symbol: "1trc",
    name: "1TRONIC",
  },
  {
    id: "1-up",
    symbol: "1-up",
    name: "1-UP",
  },
  {
    id: "1world",
    symbol: "1wo",
    name: "1World",
  },
  {
    id: "1x-long-btc-implied-volatility-token",
    symbol: "bvol",
    name: "Bitcoin Volatility Token",
  },
  {
    id: "1x-short-algorand-token",
    symbol: "algohedge",
    name: "1X Short Algorand Token",
  },
  {
    id: "1x-short-bitcoin-cash-token",
    symbol: "bchhedge",
    name: "1X Short Bitcoin Cash Token",
  },
  {
    id: "1x-short-bitcoin-token",
    symbol: "hedge",
    name: "1X Short Bitcoin Token",
  },
  {
    id: "1x-short-bnb-token",
    symbol: "bnbhedge",
    name: "1X Short BNB Token",
  },
  {
    id: "1x-short-btc-implied-volatility",
    symbol: "ibvol",
    name: "Inverse Bitcoin Volatility Token",
  },
  {
    id: "1x-short-cardano-token",
    symbol: "adahedge",
    name: "1X Short Cardano Token",
  },
  {
    id: "1x-short-chainlink-token",
    symbol: "LINKHEDGE",
    name: "1X Short Chainlink Token",
  },
  {
    id: "1x-short-compound-token-token",
    symbol: "comphedge",
    name: "1X Short Compound Token Token",
  },
  {
    id: "1x-short-cosmos-token",
    symbol: "atomhedge",
    name: "1X Short Cosmos Token",
  },
  {
    id: "1x-short-defi-index-token",
    symbol: "defihedge",
    name: "1X Short DeFi Index Token",
  },
  {
    id: "1x-short-dogecoin-token",
    symbol: "dogehedge",
    name: "1X Short Dogecoin Token",
  },
  {
    id: "1x-short-eos-token",
    symbol: "eoshedge",
    name: "1X Short EOS Token",
  },
  {
    id: "1x-short-ethereum-token",
    symbol: "ethhedge",
    name: "1X Short Ethereum Token",
  },
  {
    id: "1x-short-exchange-token-index-token",
    symbol: "exchhedge",
    name: "1X Short Exchange Token Index Token",
  },
  {
    id: "1x-short-litecoin-token",
    symbol: "ltchedge",
    name: "1X Short Litecoin Token",
  },
  {
    id: "1x-short-matic-token",
    symbol: "matichedge",
    name: "1X Short Matic Token",
  },
  {
    id: "1x-short-okb-token",
    symbol: "okbhedge",
    name: "1X Short OKB Token",
  },
  {
    id: "1x-short-privacy-index-token",
    symbol: "privhedge",
    name: "1X Short Privacy Index Token",
  },
  {
    id: "1x-short-shitcoin-index-token",
    symbol: "hedgeshit",
    name: "1X Short Shitcoin Index Token",
  },
  {
    id: "1x-short-swipe-token",
    symbol: "sxphedge",
    name: "1X Short Swipe Token",
  },
  {
    id: "1x-short-tezos-token",
    symbol: "xtzhedge",
    name: "1X Short Tezos Token",
  },
  {
    id: "1x-short-theta-network-token",
    symbol: "thetahedge",
    name: "1X Short Theta Network Token",
  },
  {
    id: "1x-short-tomochain-token",
    symbol: "tomohedge",
    name: "1X Short TomoChain Token",
  },
  {
    id: "1x-short-trx-token",
    symbol: "trxhedge",
    name: "1X Short TRX Token",
  },
  {
    id: "1x-short-vechain-token",
    symbol: "vethedge",
    name: "1X Short VeChain Token",
  },
  {
    id: "1x-short-xrp-token",
    symbol: "xrphedge",
    name: "1X Short XRP Token",
  },
  {
    id: "20200-lesure",
    symbol: "realtoken-s-20200-lesure-st-detroit-mi",
    name: "RealT Token - 20200 Lesure St, Detroit, MI 48235",
  },
  {
    id: "2022moon",
    symbol: "2022m",
    name: "2022MOON",
  },
  {
    id: "2030-floki",
    symbol: "2030Floki",
    name: "2030 Floki",
  },
  {
    id: "25097-andover",
    symbol: "realtoken-s-25097-andover-dr-dearborn-heights-mi",
    name: "RealT Token - 25097 Andover Dr, Dearborn Heights, MI 48125",
  },
  {
    id: "272-n-e-42nd-court",
    symbol: "realtoken-s-272-n.e.-42nd-court-deerfield-beach-fl",
    name: "RealT Token - 272 N.E. 42nd Court, Deerfield Beach, FL 33064",
  },
  {
    id: "28vck",
    symbol: "vck",
    name: "28VCK",
  },
  {
    id: "2acoin",
    symbol: "arms",
    name: "2ACoin",
  },
  {
    id: "2-chains",
    symbol: "2chainlinks",
    name: "2 Chains",
  },
  {
    id: "2crazynft",
    symbol: "2crz",
    name: "2crazyNFT",
  },
  {
    id: "2gather",
    symbol: "two",
    name: "2gather",
  },
  {
    id: "2gether-2",
    symbol: "2gt",
    name: "2gether",
  },
  {
    id: "2give",
    symbol: "2give",
    name: "2GIVE",
  },
  {
    id: "2goshi",
    symbol: "2goshi",
    name: "2GoShi",
  },
  {
    id: "2key",
    symbol: "2key",
    name: "2key.network",
  },
  {
    id: "2local-2",
    symbol: "2lc",
    name: "2local",
  },
  {
    id: "2omb-finance",
    symbol: "2omb",
    name: "2omb Finance",
  },
  {
    id: "2share",
    symbol: "2shares",
    name: "2SHARE",
  },
  {
    id: "2x2",
    symbol: "2x2",
    name: "2X2",
  },
  {
    id: "300fit",
    symbol: "fit",
    name: "300FIT",
  },
  {
    id: "30mb-token",
    symbol: "3omb",
    name: "3OMB Token",
  },
  {
    id: "3432-harding",
    symbol: "realtoken-s-3432-harding-street-detroit-mi",
    name: "RealT Token - 3432 Harding Street, Detroit, MI, 48214",
  },
  {
    id: "3shares",
    symbol: "3share",
    name: "3Share",
  },
  {
    id: "3x-long-algorand-token",
    symbol: "algobull",
    name: "3X Long Algorand Token",
  },
  {
    id: "3x-long-altcoin-index-token",
    symbol: "altbull",
    name: "3X Long Altcoin Index Token",
  },
  {
    id: "3x-long-balancer-token",
    symbol: "balbull",
    name: "3X Long Balancer Token",
  },
  {
    id: "3x-long-bilira-token",
    symbol: "trybbull",
    name: "3X Long BiLira Token",
  },
  {
    id: "3x-long-bitcoin-cash-token",
    symbol: "bchbull",
    name: "3X Long Bitcoin Cash Token",
  },
  {
    id: "3x-long-bitcoin-sv-token",
    symbol: "bsvbull",
    name: "3X Long Bitcoin SV Token",
  },
  {
    id: "3x-long-bitcoin-token",
    symbol: "bull",
    name: "3X Long Bitcoin Token",
  },
  {
    id: "3x-long-bnb-token",
    symbol: "bnbbull",
    name: "3X Long BNB Token",
  },
  {
    id: "3x-long-cardano-token",
    symbol: "adabull",
    name: "3X Long Cardano Token",
  },
  {
    id: "3x-long-chainlink-token",
    symbol: "linkbull",
    name: "3X Long Chainlink Token",
  },
  {
    id: "3x-long-compound-token-token",
    symbol: "compbull",
    name: "3X Long Compound Token Token",
  },
  {
    id: "3x-long-compound-usdt-token",
    symbol: "cusdtbull",
    name: "3X Long Compound USDT Token",
  },
  {
    id: "3x-long-cosmos-token",
    symbol: "atombull",
    name: "3X Long Cosmos Token",
  },
  {
    id: "3x-long-defi-index-token",
    symbol: "defibull",
    name: "3X Long DeFi Index Token",
  },
  {
    id: "3x-long-dogecoin-token",
    symbol: "dogebull",
    name: "3X Long Dogecoin Token",
  },
  {
    id: "3x-long-dragon-index-token",
    symbol: "drgnbull",
    name: "3X Long Dragon Index Token",
  },
  {
    id: "3x-long-eos-token",
    symbol: "eosbull",
    name: "3X Long EOS Token",
  },
  {
    id: "3x-long-ethereum-classic-token",
    symbol: "etcbull",
    name: "3X Long Ethereum Classic Token",
  },
  {
    id: "3x-long-ethereum-token",
    symbol: "ethbull",
    name: "3X Long Ethereum Token",
  },
  {
    id: "3x-long-exchange-token-index-token",
    symbol: "exchbull",
    name: "3X Long Exchange Token Index Token",
  },
  {
    id: "3x-long-huobi-token-token",
    symbol: "htbull",
    name: "3X Long Huobi Token Token",
  },
  {
    id: "3x-long-kyber-network-token",
    symbol: "kncbull",
    name: "3X Long Kyber Network Token",
  },
  {
    id: "3x-long-leo-token",
    symbol: "leobull",
    name: "3X Long LEO Token",
  },
  {
    id: "3x-long-litecoin-token",
    symbol: "ltcbull",
    name: "3X Long Litecoin Token",
  },
  {
    id: "3x-long-maker-token",
    symbol: "mkrbull",
    name: "3X Long Maker Token",
  },
  {
    id: "3x-long-matic-token",
    symbol: "maticbull",
    name: "3X Long Matic Token",
  },
  {
    id: "3x-long-midcap-index-token",
    symbol: "midbull",
    name: "3X Long Midcap Index Token",
  },
  {
    id: "3x-long-okb-token",
    symbol: "okbbull",
    name: "3X Long OKB Token",
  },
  {
    id: "3x-long-pax-gold-token",
    symbol: "paxgbull",
    name: "3X Long PAX Gold Token",
  },
  {
    id: "3x-long-privacy-index-token",
    symbol: "privbull",
    name: "3X Long Privacy Index Token",
  },
  {
    id: "3x-long-shitcoin-index-token",
    symbol: "bullshit",
    name: "3X Long Shitcoin Index Token",
  },
  {
    id: "3x-long-stellar-token",
    symbol: "xlmbull",
    name: "3X Long Stellar Token",
  },
  {
    id: "3x-long-sushi-token",
    symbol: "sushibull",
    name: "3X Long Sushi Token",
  },
  {
    id: "3x-long-swipe-token",
    symbol: "sxpbull",
    name: "3X Long Swipe Token",
  },
  {
    id: "3x-long-tether-gold-token",
    symbol: "xautbull",
    name: "3X Long Tether Gold Token",
  },
  {
    id: "3x-long-tether-token",
    symbol: "usdtbull",
    name: "3X Long Tether Token",
  },
  {
    id: "3x-long-tezos-token",
    symbol: "xtzbull",
    name: "3X Long Tezos Token",
  },
  {
    id: "3x-long-theta-network-token",
    symbol: "thetabull",
    name: "3X Long Theta Network Token",
  },
  {
    id: "3x-long-tomochain-token",
    symbol: "tomobull",
    name: "3X Long TomoChain Token",
  },
  {
    id: "3x-long-trx-token",
    symbol: "trxbull",
    name: "3X Long TRX Token",
  },
  {
    id: "3x-long-vechain-token",
    symbol: "vetbull",
    name: "3X Long VeChain Token",
  },
  {
    id: "3x-long-xrp-token",
    symbol: "xrpbull",
    name: "3X Long XRP Token",
  },
  {
    id: "3x-long-zcash-token",
    symbol: "zecbull",
    name: "3X Long Zcash Token",
  },
  {
    id: "3x-short-altcoin-index-token",
    symbol: "altbear",
    name: "3X Short Altcoin Index Token",
  },
  {
    id: "3x-short-balancer-token",
    symbol: "balbear",
    name: "3X Short Balancer Token",
  },
  {
    id: "3x-short-bilira-token",
    symbol: "trybbear",
    name: "3X Short BiLira Token",
  },
  {
    id: "3x-short-bitcoin-cash-token",
    symbol: "bchbear",
    name: "3X Short Bitcoin Cash Token",
  },
  {
    id: "3x-short-bitcoin-sv-token",
    symbol: "bsvbear",
    name: "3X Short Bitcoin SV Token",
  },
  {
    id: "3x-short-bitcoin-token",
    symbol: "bear",
    name: "3X Short Bitcoin Token",
  },
  {
    id: "3x-short-bnb-token",
    symbol: "bnbbear",
    name: "3X Short BNB Token",
  },
  {
    id: "3x-short-cardano-token",
    symbol: "adabear",
    name: "3X Short Cardano Token",
  },
  {
    id: "3x-short-chainlink-token",
    symbol: "linkbear",
    name: "3X Short Chainlink Token",
  },
  {
    id: "3x-short-compound-token-token",
    symbol: "compbear",
    name: "3X Short Compound Token Token",
  },
  {
    id: "3x-short-compound-usdt-token",
    symbol: "cusdtbear",
    name: "3X Short Compound USDT Token",
  },
  {
    id: "3x-short-cosmos-token",
    symbol: "atombear",
    name: "3X Short Cosmos Token",
  },
  {
    id: "3x-short-defi-index-token",
    symbol: "defibear",
    name: "3X Short DeFi Index Token",
  },
  {
    id: "3x-short-dragon-index-token",
    symbol: "drgnbear",
    name: "3X Short Dragon Index Token",
  },
  {
    id: "3x-short-eos-token",
    symbol: "eosbear",
    name: "3X Short EOS Token",
  },
  {
    id: "3x-short-ethereum-classic-token",
    symbol: "etcbear",
    name: "3X Short Ethereum Classic Token",
  },
  {
    id: "3x-short-ethereum-token",
    symbol: "ethbear",
    name: "3X Short Ethereum Token",
  },
  {
    id: "3x-short-exchange-token-index-token",
    symbol: "exchbear",
    name: "3X Short Exchange Token Index Token",
  },
  {
    id: "3x-short-huobi-token-token",
    symbol: "htbear",
    name: "3X Short Huobi Token Token",
  },
  {
    id: "3x-short-kyber-network-token",
    symbol: "kncbear",
    name: "3X Short Kyber Network Token",
  },
  {
    id: "3x-short-leo-token",
    symbol: "leobear",
    name: "3X Short LEO Token",
  },
  {
    id: "3x-short-litecoin-token",
    symbol: "ltcbear",
    name: "3X Short Litecoin Token",
  },
  {
    id: "3x-short-maker-token",
    symbol: "mkrbear",
    name: "3X Short Maker Token",
  },
  {
    id: "3x-short-midcap-index-token",
    symbol: "midbear",
    name: "3X Short Midcap Index Token",
  },
  {
    id: "3x-short-okb-token",
    symbol: "okbbear",
    name: "3X Short OKB Token",
  },
  {
    id: "3x-short-pax-gold-token",
    symbol: "paxgbear",
    name: "3X Short PAX Gold Token",
  },
  {
    id: "3x-short-privacy-index-token",
    symbol: "privbear",
    name: "3X Short Privacy Index Token",
  },
  {
    id: "3x-short-shitcoin-index-token",
    symbol: "bearshit",
    name: "3X Short Shitcoin Index Token",
  },
  {
    id: "3x-short-stellar-token",
    symbol: "xlmbear",
    name: "3X Short Stellar Token",
  },
  {
    id: "3x-short-sushi-token",
    symbol: "sushibear",
    name: "3X Short Sushi Token",
  },
  {
    id: "3x-short-swipe-token",
    symbol: "sxpbear",
    name: "3X Short Swipe Token",
  },
  {
    id: "3x-short-tether-gold-token",
    symbol: "xautbear",
    name: "3X Short Tether Gold Token",
  },
  {
    id: "3x-short-tether-token",
    symbol: "usdtbear",
    name: "3X Short Tether Token",
  },
  {
    id: "3x-short-tezos-token",
    symbol: "xtzbear",
    name: "3X Short Tezos Token",
  },
  {
    id: "3x-short-theta-network-token",
    symbol: "thetabear",
    name: "3X Short Theta Network Token",
  },
  {
    id: "3x-short-trx-token",
    symbol: "trxbear",
    name: "3X Short TRX Token",
  },
  {
    id: "3x-short-vechain-token",
    symbol: "vetbear",
    name: "3X Short VeChain Token",
  },
  {
    id: "3x-short-xrp-token",
    symbol: "xrpbear",
    name: "3X Short XRP Token",
  },
  {
    id: "402-s-kostner",
    symbol: "realtoken-s-402-s.kostner-ave-chicago-il",
    name: "RealT Token - 402 S Kostner Ave, Chicago, IL 60624",
  },
  {
    id: "404",
    symbol: "404",
    name: "404",
  },
  {
    id: "4061-grand",
    symbol: "realtoken-s-4061-grand-st-detroit-mi",
    name: "RealT Token - 4061 Grand St, Detroit, MI 48238",
  },
  {
    id: "42-coin",
    symbol: "42",
    name: "42-coin",
  },
  {
    id: "4340-east-71",
    symbol: "realtoken-s-4340-east-71-cleveland-oh",
    name: "RealT Token - 4340 East 71, Cleveland, OH 44105",
  },
  {
    id: "4380-beaconsfield",
    symbol: "realtoken-s-4380-beaconsfield-st-detroit-mi",
    name: "RealT Token - 4380 Beaconsfield St, Detroit, MI 48224",
  },
  {
    id: "451pcbcom",
    symbol: "pcb",
    name: "451PCBcom",
  },
  {
    id: "4680-buckingham",
    symbol: "realtoken-s-4680-buckingham-ave-detroit-mi",
    name: "RealT Token - 4680 Buckingham Ave, Detroit, MI 48224",
  },
  {
    id: "4852-4854-w-cortez",
    symbol: "realtoken-s-4852-4854-w.cortez-st-chicago-il",
    name: "RealT Token - 4852-4854 W Cortez St, Chicago, IL 60651",
  },
  {
    id: "4artechnologies",
    symbol: "4art",
    name: "4ART Coin",
  },
  {
    id: "4bulls",
    symbol: "4b",
    name: "4Bulls",
  },
  {
    id: "4jnet",
    symbol: "4jnet",
    name: "4JNET",
  },
  {
    id: "4mw",
    symbol: "4mw",
    name: "4MW",
  },
  {
    id: "4new",
    symbol: "kwatt",
    name: "4New",
  },
  {
    id: "4-stock",
    symbol: "4stc",
    name: "4-Stock",
  },
  {
    id: "50cent",
    symbol: "50c",
    name: "50Cent",
  },
  {
    id: "50k",
    symbol: "50k",
    name: "50 Keeper",
  },
  {
    id: "520",
    symbol: "520",
    name: "520",
  },
  {
    id: "5601-s-wood",
    symbol: "realtoken-s-5601-s.wood-st-chicago-il",
    name: "RealT Token - 5601 S Wood St, Chicago, IL 60636",
  },
  {
    id: "581-587-jefferson",
    symbol: "realtoken-s-581-587-jefferson-ave-rochester-ny",
    name: "RealT Token - 581-587 Jefferson Ave, Rochester, NY 14611",
  },
  {
    id: "5942-audubon",
    symbol: "realtoken-s-5942-audubon-rd-detroit-mi",
    name: "RealT Token - 5942 Audubon Rd, Detroit, MI 48224",
  },
  {
    id: "5g-cash",
    symbol: "vgc",
    name: "5G-CASH",
  },
  {
    id: "6923-greenview",
    symbol: "realtoken-s-6923-greenview-ave-detroit-mi",
    name: "RealT Token - 6923 Greenview Ave, Detroit, MI 48228",
  },
  {
    id: "6ix9ine-chain",
    symbol: "69c",
    name: "6ix9ine Chain",
  },
  {
    id: "7eleven",
    symbol: "7e",
    name: "7ELEVEN",
  },
  {
    id: "7plus-coin",
    symbol: "sv7",
    name: "7Plus Coin",
  },
  {
    id: "7up",
    symbol: "7up",
    name: "7up",
  },
  {
    id: "808ta-token",
    symbol: "808ta",
    name: "808TA Token",
  },
  {
    id: "8181-bliss",
    symbol: "realtoken-s-8181-bliss-st-detroit-mi",
    name: "RealT Token - 8181 Bliss St, Detroit, MI 48234",
  },
  {
    id: "8342-schaefer",
    symbol: "realtoken-s-8342-schaefer-highway-detroit-mi",
    name: "RealT Token - 8342 Schaefer Highway, Detroit, MI 48228",
  },
  {
    id: "867",
    symbol: "867",
    name: "867",
  },
  {
    id: "888-infinity",
    symbol: "888",
    name: "888 Infinity",
  },
  {
    id: "888tron",
    symbol: "888",
    name: "888tron",
  },
  {
    id: "88mph",
    symbol: "mph",
    name: "88mph",
  },
  {
    id: "8ball-finance",
    symbol: "8ball",
    name: "8Ball Finance",
  },
  {
    id: "8bit-doge",
    symbol: "bitd",
    name: "8Bit Doge",
  },
  {
    id: "8ight-finance",
    symbol: "eight",
    name: "8ight Finance",
  },
  {
    id: "8pay",
    symbol: "8pay",
    name: "8Pay",
  },
  {
    id: "8x8-protocol",
    symbol: "exe",
    name: "8X8 Protocol",
  },
  {
    id: "9133-devonshire",
    symbol: "realtoken-s-9133-devonshire-rd-detroit-mi",
    name: "RealT Token - 9133 Devonshire Rd, Detroit, MI 48224",
  },
  {
    id: "9165-kensington",
    symbol: "realtoken-s-9165-kensington-ave-detroit-mi",
    name: "RealT Token - 9165 Kensington Ave, Detroit, MI 48224",
  },
  {
    id: "9166-devonshire",
    symbol: "realtoken-s-9166-devonshire-rd-detroit-mi",
    name: "RealT Token - 9166 Devonshire Rd, Detroit MI 48224",
  },
  {
    id: "9169-boleyn",
    symbol: "realtoken-s-9169-boleyn-st-detroit-mi",
    name: "RealT Token - 9169 Boleyn St, Detroit, MI, 48224",
  },
  {
    id: "9309-courville",
    symbol: "realtoken-s-9309-courville-st-detroit-mi",
    name: "RealT Token - 9309 Courville St, Detroit, MI 48224",
  },
  {
    id: "9336-patton",
    symbol: "realtoken-s-9336-patton-st-detroit-mi",
    name: "RealT Token - 9336 Patton St, Detroit, MI 48228",
  },
  {
    id: "9465-beaconsfield",
    symbol: "realtoken-s-9465-beaconsfield-st-detroit-mi",
    name: "RealT Token - 9465 Beaconsfield St, Detroit, MI 48224",
  },
  {
    id: "9481-wayburn",
    symbol: "realtoken-s-9481-wayburn-st-detroit-mi",
    name: "RealT Token - 9481 Wayburn St, Detroit, MI 48224",
  },
  {
    id: "9717-everts",
    symbol: "realtoken-s-9717-everts-st-detroit-mi",
    name: "RealT Token - 9717 Everts St, Detroit, MI 48224",
  },
  {
    id: "9920-bishop",
    symbol: "realtoken-s-9920-bishop-st-detroit-mi",
    name: "RealT Token - 9920 Bishop St, Detroit, MI 48224",
  },
  {
    id: "9943-marlowe",
    symbol: "realtoken-s-9943-marlowe-st-detroit-mi",
    name: "RealT Token - 9943 Marlowe St, Detroit, MI 48227",
  },
  {
    id: "99starz",
    symbol: "stz",
    name: "99Starz",
  },
  {
    id: "a4-finance",
    symbol: "a4",
    name: "A4 Finance",
  },
  {
    id: "aaa-coin",
    symbol: "aaa",
    name: "AAA COIN",
  },
  {
    id: "aag-ventures",
    symbol: "aag",
    name: "AAG Ventures",
  },
  {
    id: "aang-inu",
    symbol: "aang",
    name: "Aang Inu",
  },
  {
    id: "aave",
    symbol: "aave",
    name: "Aave",
  },
  {
    id: "aave-aave",
    symbol: "aAAVE",
    name: "Aave AAVE",
  },
  {
    id: "aave-amm-bptbalweth",
    symbol: "aAmmBptBALWETH",
    name: "Aave AMM BptBALWETH",
  },
  {
    id: "aave-amm-bptwbtcweth",
    symbol: "aAmmBptWBTCWETH",
    name: "Aave AMM BptWBTCWETH",
  },
  {
    id: "aave-amm-dai",
    symbol: "aAmmDAI",
    name: "Aave AMM DAI",
  },
  {
    id: "aave-amm-uniaaveweth",
    symbol: "aammuniaaveweth",
    name: "Aave AMM UniAAVEWETH",
  },
  {
    id: "aave-amm-unibatweth",
    symbol: "aAmmUniBATWETH",
    name: "Aave AMM UniBATWETH",
  },
  {
    id: "aave-amm-unicrvweth",
    symbol: "aAmmUniCRVWETH",
    name: "Aave AMM UniCRVWETH",
  },
  {
    id: "aave-amm-unidaiusdc",
    symbol: "aAmmUniDAIUSDC",
    name: "Aave AMM UniDAIUSDC",
  },
  {
    id: "aave-amm-unidaiweth",
    symbol: "aammunidaiweth",
    name: "Aave AMM UniDAIWETH",
  },
  {
    id: "aave-amm-unilinkweth",
    symbol: "aAmmUniLINKWETH",
    name: "Aave AMM UniLINKWETH",
  },
  {
    id: "aave-amm-unimkrweth",
    symbol: "aAmmUniMKRWETH",
    name: "Aave AMM UniMKRWETH",
  },
  {
    id: "aave-amm-unirenweth",
    symbol: "aAmmUniRENWETH",
    name: "Aave AMM UniRENWETH",
  },
  {
    id: "aave-amm-unisnxweth",
    symbol: "aAmmUniSNXWETH",
    name: "Aave AMM UniSNXWETH",
  },
  {
    id: "aave-amm-uniuniweth",
    symbol: "aAmmUniUNIWETH",
    name: "Aave AMM UniUNIWETH",
  },
  {
    id: "aave-amm-uniusdcweth",
    symbol: "aAmmUniUSDCWETH",
    name: "Aave AMM UniUSDCWETH",
  },
  {
    id: "aave-amm-uniwbtcusdc",
    symbol: "aAmmUniWBTCUSDC",
    name: "Aave AMM UniWBTCUSDC",
  },
  {
    id: "aave-amm-uniwbtcweth",
    symbol: "aammuniwbtcweth",
    name: "Aave AMM UniWBTCWETH",
  },
  {
    id: "aave-amm-uniyfiweth",
    symbol: "aAmmUniYFIWETH",
    name: "Aave AMM UniYFIWETH",
  },
  {
    id: "aave-amm-usdc",
    symbol: "aAmmUSDC",
    name: "Aave AMM USDC",
  },
  {
    id: "aave-amm-usdt",
    symbol: "aAmmUSDT",
    name: "Aave AMM USDT",
  },
  {
    id: "aave-amm-wbtc",
    symbol: "aAmmWBTC",
    name: "Aave AMM WBTC",
  },
  {
    id: "aave-amm-weth",
    symbol: "aAmmWETH",
    name: "Aave AMM WETH",
  },
  {
    id: "aave-bal",
    symbol: "abal",
    name: "Aave BAL",
  },
  {
    id: "aave-balancer-pool-token",
    symbol: "abpt",
    name: "Aave Balancer Pool Token",
  },
  {
    id: "aave-bat",
    symbol: "abat",
    name: "Aave BAT",
  },
  {
    id: "aave-bat-v1",
    symbol: "abat",
    name: "Aave BAT v1",
  },
  {
    id: "aave-busd",
    symbol: "abusd",
    name: "Aave BUSD",
  },
  {
    id: "aave-busd-v1",
    symbol: "abusd",
    name: "Aave BUSD v1",
  },
  {
    id: "aave-crv",
    symbol: "aCRV",
    name: "Aave CRV",
  },
  {
    id: "aave-dai",
    symbol: "adai",
    name: "Aave DAI",
  },
  {
    id: "aave-dai-v1",
    symbol: "adai",
    name: "Aave DAI v1",
  },
  {
    id: "aave-enj",
    symbol: "aenj",
    name: "Aave ENJ",
  },
  {
    id: "aave-enj-v1",
    symbol: "aenj",
    name: "Aave ENJ v1",
  },
  {
    id: "aave-eth-v1",
    symbol: "aeth",
    name: "Aave ETH v1",
  },
  {
    id: "aavegotchi",
    symbol: "ghst",
    name: "Aavegotchi",
  },
  {
    id: "aave-gusd",
    symbol: "agusd",
    name: "Aave GUSD",
  },
  {
    id: "aave-interest-bearing-ampl",
    symbol: "aampl",
    name: "Aave interest bearing AMPL",
  },
  {
    id: "aave-knc",
    symbol: "aknc",
    name: "Aave KNC",
  },
  {
    id: "aave-knc-v1",
    symbol: "aknc",
    name: "Aave KNC v1",
  },
  {
    id: "aave-link",
    symbol: "alink",
    name: "Aave LINK",
  },
  {
    id: "aave-link-v1",
    symbol: "alink",
    name: "Aave LINK v1",
  },
  {
    id: "aave-mana",
    symbol: "amana",
    name: "Aave MANA",
  },
  {
    id: "aave-mana-v1",
    symbol: "amana",
    name: "Aave MANA v1",
  },
  {
    id: "aave-mkr",
    symbol: "amkr",
    name: "Aave MKR",
  },
  {
    id: "aave-mkr-v1",
    symbol: "amkr",
    name: "Aave MKR v1",
  },
  {
    id: "aave-polygon-aave",
    symbol: "amAAVE",
    name: "Aave Polygon AAVE",
  },
  {
    id: "aave-polygon-dai",
    symbol: "amDAI",
    name: "Aave Polygon DAI",
  },
  {
    id: "aave-polygon-usdc",
    symbol: "amusdc",
    name: "Aave Polygon USDC",
  },
  {
    id: "aave-polygon-usdt",
    symbol: "amUSDT",
    name: "Aave Polygon USDT",
  },
  {
    id: "aave-polygon-wbtc",
    symbol: "amWBTC",
    name: "Aave Polygon WBTC",
  },
  {
    id: "aave-polygon-weth",
    symbol: "amWETH",
    name: "Aave Polygon WETH",
  },
  {
    id: "aave-polygon-wmatic",
    symbol: "amWMATIC",
    name: "Aave Polygon WMATIC",
  },
  {
    id: "aave-rai",
    symbol: "arai",
    name: "Aave RAI",
  },
  {
    id: "aave-ren",
    symbol: "aren",
    name: "Aave REN",
  },
  {
    id: "aave-ren-v1",
    symbol: "aren",
    name: "Aave REN v1",
  },
  {
    id: "aave-snx",
    symbol: "asnx",
    name: "Aave SNX",
  },
  {
    id: "aave-snx-v1",
    symbol: "asnx",
    name: "Aave SNX v1",
  },
  {
    id: "aave-susd",
    symbol: "asusd",
    name: "Aave SUSD",
  },
  {
    id: "aave-susd-v1",
    symbol: "asusd",
    name: "Aave SUSD v1",
  },
  {
    id: "aave-tusd",
    symbol: "atusd",
    name: "Aave TUSD",
  },
  {
    id: "aave-tusd-v1",
    symbol: "atusd",
    name: "Aave TUSD v1",
  },
  {
    id: "aave-uni",
    symbol: "auni",
    name: "Aave UNI",
  },
  {
    id: "aave-usdc",
    symbol: "ausdc",
    name: "Aave USDC",
  },
  {
    id: "aave-usdc-v1",
    symbol: "ausdc",
    name: "Aave USDC v1",
  },
  {
    id: "aave-usdt",
    symbol: "ausdt",
    name: "Aave USDT",
  },
  {
    id: "aave-usdt-v1",
    symbol: "ausdt",
    name: "Aave USDT v1",
  },
  {
    id: "aave-wbtc",
    symbol: "awbtc",
    name: "Aave WBTC",
  },
  {
    id: "aave-wbtc-v1",
    symbol: "awbtc",
    name: "Aave WBTC v1",
  },
  {
    id: "aave-weth",
    symbol: "aweth",
    name: "Aave WETH",
  },
  {
    id: "aave-wormhole",
    symbol: "aave",
    name: "Aave (Wormhole)",
  },
  {
    id: "aave-xsushi",
    symbol: "aXSUSHI",
    name: "Aave XSUSHI",
  },
  {
    id: "aave-yfi",
    symbol: "aYFI",
    name: "Aave YFI",
  },
  {
    id: "aave-zrx",
    symbol: "azrx",
    name: "Aave ZRX",
  },
  {
    id: "aave-zrx-v1",
    symbol: "azrx",
    name: "Aave ZRX v1",
  },
  {
    id: "aax-token",
    symbol: "aab",
    name: "AAX Token",
  },
  {
    id: "abachi",
    symbol: "abi",
    name: "Abachi",
  },
  {
    id: "abby-inu",
    symbol: "abby",
    name: "Abby Inu",
  },
  {
    id: "abc-chain",
    symbol: "abc",
    name: "ABC Chain",
  },
  {
    id: "abcc-token",
    symbol: "at",
    name: "ABCC Token",
  },
  {
    id: "abcd-token",
    symbol: "abcd",
    name: "ABCD Token",
  },
  {
    id: "abell-coin",
    symbol: "abc",
    name: "Abell Coin",
  },
  {
    id: "abey",
    symbol: "abey",
    name: "Abey",
  },
  {
    id: "abitshadow-token",
    symbol: "abst",
    name: "Abitshadow Token",
  },
  {
    id: "able-finance",
    symbol: "able",
    name: "Able Finance",
  },
  {
    id: "absolute",
    symbol: "abs",
    name: "Absolute",
  },
  {
    id: "absorber",
    symbol: "abs",
    name: "Absorber",
  },
  {
    id: "abulaba",
    symbol: "aaa",
    name: "Abulaba",
  },
  {
    id: "abura-farm",
    symbol: "abu",
    name: "Abura Farm",
  },
  {
    id: "acala",
    symbol: "aca",
    name: "Acala",
  },
  {
    id: "acash-coin",
    symbol: "aca",
    name: "Acash Coin",
  },
  {
    id: "aca-token",
    symbol: "aca",
    name: "ACA Token",
  },
  {
    id: "accel-defi",
    symbol: "accel",
    name: "Accel Defi",
  },
  {
    id: "accesslauncher",
    symbol: "acx",
    name: "AccessLauncher",
  },
  {
    id: "ace-casino",
    symbol: "ace",
    name: "Ace Entertainment",
  },
  {
    id: "aced",
    symbol: "aced",
    name: "Aced [OLD]",
  },
  {
    id: "aced-2",
    symbol: "aced",
    name: "Aced",
  },
  {
    id: "acent",
    symbol: "ace",
    name: "Acent",
  },
  {
    id: "acet-token",
    symbol: "act",
    name: "Acet",
  },
  {
    id: "ac-exchange-token",
    symbol: "acxt",
    name: "ACDX Exchange Token",
  },
  {
    id: "achain",
    symbol: "act",
    name: "Achain",
  },
  {
    id: "acknoledger",
    symbol: "ack",
    name: "AcknoLedger",
  },
  {
    id: "ac-milan-fan-token",
    symbol: "acm",
    name: "AC Milan Fan Token",
  },
  {
    id: "acoconut",
    symbol: "ac",
    name: "ACoconut",
  },
  {
    id: "acoin",
    symbol: "acoin",
    name: "Acoin",
  },
  {
    id: "acreage-coin",
    symbol: "acr",
    name: "Acreage Coin",
  },
  {
    id: "acryl",
    symbol: "acryl",
    name: "Acryl",
  },
  {
    id: "acryptos",
    symbol: "acs",
    name: "ACryptoS",
  },
  {
    id: "acryptosi",
    symbol: "acsi",
    name: "ACryptoSI",
  },
  {
    id: "actinium",
    symbol: "acm",
    name: "Actinium",
  },
  {
    id: "action-coin",
    symbol: "actn",
    name: "Action Coin",
  },
  {
    id: "activada",
    symbol: "ACADA",
    name: "ActivADA",
  },
  {
    id: "acuity-token",
    symbol: "acu",
    name: "Acuity",
  },
  {
    id: "acu-platform",
    symbol: "acu",
    name: "ACU Platform",
  },
  {
    id: "acute-angle-cloud",
    symbol: "aac",
    name: "Acute Angle Cloud",
  },
  {
    id: "acy-finance",
    symbol: "acy",
    name: "ACY Finance",
  },
  {
    id: "adaboy",
    symbol: "adaboy",
    name: "ADABoy",
  },
  {
    id: "adacash",
    symbol: "adacash",
    name: "ADAcash",
  },
  {
    id: "adadex-tools",
    symbol: "adat",
    name: "Adadex Tools",
  },
  {
    id: "adaflect",
    symbol: "ADAFlect",
    name: "ADAFlect",
  },
  {
    id: "adakong",
    symbol: "akong",
    name: "AdaKong",
  },
  {
    id: "adamant",
    symbol: "addy",
    name: "Adamant",
  },
  {
    id: "adamant-coin",
    symbol: "admc",
    name: "Adamant Coin",
  },
  {
    id: "adamant-messenger",
    symbol: "adm",
    name: "ADAMANT Messenger",
  },
  {
    id: "adana-demirspor",
    symbol: "demir",
    name: "Adana Demirspor",
  },
  {
    id: "adapad",
    symbol: "adapad",
    name: "ADAPad",
  },
  {
    id: "adappter-token",
    symbol: "adp",
    name: "Adappter Token",
  },
  {
    id: "adax",
    symbol: "adax",
    name: "ADAX",
  },
  {
    id: "adbank",
    symbol: "adb",
    name: "adbank",
  },
  {
    id: "addax",
    symbol: "adx",
    name: "Addax",
  },
  {
    id: "addict-finance",
    symbol: "addict",
    name: "Addict Finance",
  },
  {
    id: "add-xyz-new",
    symbol: "add",
    name: "Add.xyz (NEW)",
  },
  {
    id: "adelphoi",
    symbol: "adl",
    name: "Adelphoi",
  },
  {
    id: "adena-finance",
    symbol: "adena",
    name: "Adena Finance",
  },
  {
    id: "adene",
    symbol: "ADEN",
    name: "Adene",
  },
  {
    id: "adex",
    symbol: "adx",
    name: "Ambire AdEx",
  },
  {
    id: "ad-flex-token",
    symbol: "adf",
    name: "Ad Flex Token",
  },
  {
    id: "aditus",
    symbol: "adi",
    name: "Aditus",
  },
  {
    id: "admonkey",
    symbol: "admonkey",
    name: "AdMonkey",
  },
  {
    id: "adora-token",
    symbol: "ara",
    name: "Adora Token",
  },
  {
    id: "adshares",
    symbol: "ads",
    name: "Adshares",
  },
  {
    id: "adtoken",
    symbol: "adt",
    name: "adToken",
  },
  {
    id: "advanced-internet-block",
    symbol: "aib",
    name: "Advanced Integrated Blocks",
  },
  {
    id: "advar-protocol",
    symbol: "advar",
    name: "Advar Protocol",
  },
  {
    id: "adventure-gold",
    symbol: "agld",
    name: "Adventure Gold",
  },
  {
    id: "adventure-inu",
    symbol: "adinu",
    name: "Adventure Inu",
  },
  {
    id: "adventure-token",
    symbol: "twa",
    name: "Adventure Token",
  },
  {
    id: "advertise-coin",
    symbol: "adco",
    name: "Advertise Coin",
  },
  {
    id: "aegis",
    symbol: "ags",
    name: "Aegis",
  },
  {
    id: "aegis-launchpad",
    symbol: "agspad",
    name: "Aegis Launchpad",
  },
  {
    id: "aelf",
    symbol: "elf",
    name: "aelf",
  },
  {
    id: "aelin",
    symbol: "aelin",
    name: "Aelin",
  },
  {
    id: "aelysir",
    symbol: "ael",
    name: "Aelysir",
  },
  {
    id: "aeneas",
    symbol: "ash",
    name: "Aeneas",
  },
  {
    id: "aen-smart-token",
    symbol: "aens",
    name: "AEN Smart Token",
  },
  {
    id: "aeon",
    symbol: "aeon",
    name: "Aeon",
  },
  {
    id: "aerdrop",
    symbol: "aer",
    name: "Aerdrop",
  },
  {
    id: "aergo",
    symbol: "aergo",
    name: "Aergo",
  },
  {
    id: "aeron",
    symbol: "arnx",
    name: "Aeron",
  },
  {
    id: "aerotoken",
    symbol: "aet",
    name: "AEROTOKEN",
  },
  {
    id: "aerotyne",
    symbol: "atyne",
    name: "Aerotyne",
  },
  {
    id: "aeryus",
    symbol: "aer",
    name: "Aeryus",
  },
  {
    id: "aeternity",
    symbol: "ae",
    name: "Aeternity",
  },
  {
    id: "aetherius",
    symbol: "aeth",
    name: "Aetherius",
  },
  {
    id: "aetherv2",
    symbol: "ATH",
    name: "AetherV2",
  },
  {
    id: "aeur",
    symbol: "aeur",
    name: "AEUR",
  },
  {
    id: "aevolve-token",
    symbol: "avex!",
    name: "Aevolve Token",
  },
  {
    id: "aezora",
    symbol: "azr",
    name: "Azzure",
  },
  {
    id: "afen-blockchain",
    symbol: "afen",
    name: "AFEN Blockchain",
  },
  {
    id: "afin-coin",
    symbol: "afin",
    name: "Asian Fintech",
  },
  {
    id: "afreum",
    symbol: "afr",
    name: "Afreum",
  },
  {
    id: "africa-trading-chain",
    symbol: "att",
    name: "Africa Trading Chain",
  },
  {
    id: "afrix",
    symbol: "afx",
    name: "Afrix",
  },
  {
    id: "afro",
    symbol: "afro",
    name: "Afro",
  },
  {
    id: "afrodex",
    symbol: "afrox",
    name: "AfroDex",
  },
  {
    id: "afrodex-labs-token",
    symbol: "afdlt",
    name: "AfroDex Labs Token",
  },
  {
    id: "afrostar",
    symbol: "afro",
    name: "Afrostar",
  },
  {
    id: "afterback",
    symbol: "aftrbck",
    name: "AfterBack",
  },
  {
    id: "afterburn",
    symbol: "aftrbrn",
    name: "AfterBurn",
  },
  {
    id: "aga-carbon-credit",
    symbol: "agac",
    name: "AGA Carbon Credit",
  },
  {
    id: "aga-carbon-rewards",
    symbol: "acar",
    name: "AGA Carbon Rewards",
  },
  {
    id: "again-project",
    symbol: "again",
    name: "Again Project",
  },
  {
    id: "aga-rewards",
    symbol: "edc",
    name: "Edcoin",
  },
  {
    id: "aga-rewards-2",
    symbol: "agar",
    name: "AGA Rewards",
  },
  {
    id: "aga-token",
    symbol: "aga",
    name: "AGA Token",
  },
  {
    id: "agavecoin",
    symbol: "agvc",
    name: "AgaveCoin",
  },
  {
    id: "agave-token",
    symbol: "agve",
    name: "Agave Token",
  },
  {
    id: "agenor",
    symbol: "age",
    name: "Agenor",
  },
  {
    id: "agent-shiba-inu",
    symbol: "agentshibainu",
    name: "Agent Shiba I.N.U.",
  },
  {
    id: "ageofgods",
    symbol: "aog",
    name: "AgeOfGods",
  },
  {
    id: "age-of-knights",
    symbol: "gem",
    name: "Age Of Knights",
  },
  {
    id: "age-of-tanks",
    symbol: "a.o.t",
    name: "Age Of Tanks",
  },
  {
    id: "ageur",
    symbol: "ageur",
    name: "agEUR",
  },
  {
    id: "ageur-wormhole",
    symbol: "ageur",
    name: "agEUR (Wormhole)",
  },
  {
    id: "aggle-io",
    symbol: "aggl",
    name: "aggle.io",
  },
  {
    id: "aggregatedfinance",
    symbol: "agfi",
    name: "AggregatedFinance",
  },
  {
    id: "agile",
    symbol: "agl",
    name: "Agile",
  },
  {
    id: "agoras-currency-of-tau",
    symbol: "agrs",
    name: "Agoras: Currency of Tau",
  },
  {
    id: "agouti",
    symbol: "agu",
    name: "Agouti",
  },
  {
    id: "agpc",
    symbol: "agpc",
    name: "AGPC",
  },
  {
    id: "agrello",
    symbol: "dlt",
    name: "Agrello",
  },
  {
    id: "agricoin",
    symbol: "AGN",
    name: "Agricoin",
  },
  {
    id: "agrinoble",
    symbol: "agn",
    name: "Agrinoble",
  },
  {
    id: "agrinovuscoin",
    symbol: "agri",
    name: "AgriNovusCoin",
  },
  {
    id: "agrocash-x",
    symbol: "xagc",
    name: "AgroCash X",
  },
  {
    id: "agrofarm",
    symbol: "farm",
    name: "Agrofarm",
  },
  {
    id: "agro-global",
    symbol: "agro",
    name: "Agro Global",
  },
  {
    id: "agrolot",
    symbol: "aglt",
    name: "AGROLOT",
  },
  {
    id: "agro-matic",
    symbol: "AMT",
    name: "Agro-Matic",
  },
  {
    id: "agronomist",
    symbol: "agte",
    name: "Agronomist",
  },
  {
    id: "ahatoken",
    symbol: "aht",
    name: "AhaToken",
  },
  {
    id: "aichain",
    symbol: "ait",
    name: "AICHAIN",
  },
  {
    id: "aicon",
    symbol: "aico",
    name: "Aicon",
  },
  {
    id: "aidcoin",
    symbol: "aid",
    name: "AidCoin",
  },
  {
    id: "aidi-finance",
    symbol: "aidi",
    name: "Aidi Finance",
  },
  {
    id: "aidi-inu",
    symbol: "aidi",
    name: "Aidi Inu",
  },
  {
    id: "ai-doctor",
    symbol: "aidoc",
    name: "AI Doctor",
  },
  {
    id: "aidos-kuneen",
    symbol: "adk",
    name: "Aidos Kuneen",
  },
  {
    id: "ailink-token",
    symbol: "ali",
    name: "AiLink Token",
  },
  {
    id: "aimedis-2",
    symbol: "aimx",
    name: "Aimedis",
  },
  {
    id: "ai-network",
    symbol: "ain",
    name: "AI Network",
  },
  {
    id: "ainu-token",
    symbol: "ainu",
    name: "Ainu Token",
  },
  {
    id: "aion",
    symbol: "aion",
    name: "Aion",
  },
  {
    id: "aioz-network",
    symbol: "aioz",
    name: "AIOZ Network",
  },
  {
    id: "aipichain",
    symbol: "aipi",
    name: "AiPiChain",
  },
  {
    id: "airbloc-protocol",
    symbol: "abl",
    name: "Airbloc",
  },
  {
    id: "aircoin-2",
    symbol: "air",
    name: "AirCoin",
  },
  {
    id: "aircoins",
    symbol: "airx",
    name: "Aircoins",
  },
  {
    id: "airdropper",
    symbol: "air",
    name: "AirDropper",
  },
  {
    id: "airdrop-world",
    symbol: "awt",
    name: "Airdrop World",
  },
  {
    id: "airight",
    symbol: "airi",
    name: "aiRight",
  },
  {
    id: "airnft-token",
    symbol: "airt",
    name: "AirNFT Token",
  },
  {
    id: "airraid-lottery-token",
    symbol: "araid",
    name: "AirRaid Lottery Token",
  },
  {
    id: "air-shiba",
    symbol: "AIRSHIB",
    name: "Air Shiba",
  },
  {
    id: "airswap",
    symbol: "ast",
    name: "AirSwap",
  },
  {
    id: "aisf",
    symbol: "agt",
    name: "AISF",
  },
  {
    id: "ai-tech",
    symbol: "ai-tech",
    name: "Ai-Tech",
  },
  {
    id: "aitra",
    symbol: "aitra",
    name: "AITRA",
  },
  {
    id: "aiwork",
    symbol: "awo",
    name: "AiWork",
  },
  {
    id: "ajeverse",
    symbol: "aje",
    name: "Ajeverse",
  },
  {
    id: "akamaru-inu",
    symbol: "akamaru",
    name: "Akamaru Inu",
  },
  {
    id: "akash-network",
    symbol: "akt",
    name: "Akash Network",
  },
  {
    id: "akil-coin",
    symbol: "AKL",
    name: "Akil Coin",
  },
  {
    id: "akira",
    symbol: "akira",
    name: "Akira",
  },
  {
    id: "akita-inu",
    symbol: "akita",
    name: "Akita Inu",
  },
  {
    id: "akitavax",
    symbol: "akitax",
    name: "Akitavax",
  },
  {
    id: "aklima",
    symbol: "aklima",
    name: "AlphaKlima",
  },
  {
    id: "akoin",
    symbol: "akn",
    name: "Akoin",
  },
  {
    id: "akroma",
    symbol: "aka",
    name: "Akroma",
  },
  {
    id: "akropolis",
    symbol: "akro",
    name: "Akropolis",
  },
  {
    id: "akropolis-delphi",
    symbol: "adel",
    name: "Delphi",
  },
  {
    id: "akro-wormhole",
    symbol: "akro",
    name: "Akropolis (Wormhole)",
  },
  {
    id: "akuaku",
    symbol: "akuaku",
    name: "AkuAku",
  },
  {
    id: "alacrity",
    symbol: "alr",
    name: "Alacrity",
  },
  {
    id: "aladdin-dao",
    symbol: "ald",
    name: "Aladdin DAO",
  },
  {
    id: "aladiex",
    symbol: "ala",
    name: "Aladiex",
  },
  {
    id: "alanyaspor-fan-token",
    symbol: "ala",
    name: "Alanyaspor Fan Token",
  },
  {
    id: "alaya",
    symbol: "atp",
    name: "Alaya",
  },
  {
    id: "alchemist",
    symbol: "mist",
    name: "Alchemist",
  },
  {
    id: "alchemix",
    symbol: "alcx",
    name: "Alchemix",
  },
  {
    id: "alchemix-usd",
    symbol: "alusd",
    name: "Alchemix USD",
  },
  {
    id: "alchemy-dao",
    symbol: "alch",
    name: "AlchemyDAO",
  },
  {
    id: "alchemy-pay",
    symbol: "ach",
    name: "Alchemy Pay",
  },
  {
    id: "aldrin",
    symbol: "rin",
    name: "Aldrin",
  },
  {
    id: "aleph",
    symbol: "aleph",
    name: "Aleph.im",
  },
  {
    id: "aleph-im-wormhole",
    symbol: "aleph",
    name: "Aleph.im (Wormhole)",
  },
  {
    id: "alephium",
    symbol: "alph",
    name: "Alephium",
  },
  {
    id: "aleph-zero",
    symbol: "azero",
    name: "Aleph Zero",
  },
  {
    id: "alethea-artificial-liquid-intelligence-token",
    symbol: "ali",
    name: "Alethea Artificial Liquid Intelligence Token",
  },
  {
    id: "alex",
    symbol: "alex",
    name: "Alex",
  },
  {
    id: "alfa-romeo-racing-orlen-fan-token",
    symbol: "sauber",
    name: "Alfa Romeo Racing ORLEN Fan Token",
  },
  {
    id: "algebra",
    symbol: "algb",
    name: "Algebra",
  },
  {
    id: "algogems",
    symbol: "gems",
    name: "AlgoGems",
  },
  {
    id: "algopad",
    symbol: "algopad",
    name: "AlgoPad",
  },
  {
    id: "algopainter",
    symbol: "algop",
    name: "AlgoPainter",
  },
  {
    id: "algorand",
    symbol: "algo",
    name: "Algorand",
  },
  {
    id: "algory",
    symbol: "alg",
    name: "Algory",
  },
  {
    id: "algovest",
    symbol: "avs",
    name: "AlgoVest",
  },
  {
    id: "alibabacoin",
    symbol: "abbc",
    name: "ABBC",
  },
  {
    id: "alien-inu",
    symbol: "alien",
    name: "Alien Inu",
  },
  {
    id: "alien-shiba-inu",
    symbol: "ashib",
    name: "Alien Shiba Inu",
  },
  {
    id: "alien-worlds",
    symbol: "tlm",
    name: "Alien Worlds",
  },
  {
    id: "alien-worlds-bsc",
    symbol: "tlm",
    name: "Alien Worlds (BSC)",
  },
  {
    id: "alinx",
    symbol: "alix",
    name: "AlinX",
  },
  {
    id: "alis",
    symbol: "alis",
    name: "ALIS",
  },
  {
    id: "a-list-royale",
    symbol: "AList",
    name: "A-List Royale",
  },
  {
    id: "alita",
    symbol: "ali",
    name: "Alita",
  },
  {
    id: "alita-network",
    symbol: "alita",
    name: "Alita Network",
  },
  {
    id: "alitas",
    symbol: "alt",
    name: "Alitas",
  },
  {
    id: "alium-swap",
    symbol: "alm",
    name: "Alium Swap",
  },
  {
    id: "alkemi-network-dao-token",
    symbol: "alk",
    name: "Alkemi Network DAO Token",
  },
  {
    id: "alkimi",
    symbol: "$ads",
    name: "Alkimi",
  },
  {
    id: "all-art",
    symbol: "aart",
    name: "ALL.ART",
  },
  {
    id: "all-best-ico",
    symbol: "allbi",
    name: "ALL BEST ICO",
  },
  {
    id: "allbridge",
    symbol: "abr",
    name: "Allbridge",
  },
  {
    id: "all-coins-yield-capital",
    symbol: "acyc",
    name: "All Coins Yield Capital",
  },
  {
    id: "alldex-alliance",
    symbol: "axa",
    name: "Alldex Alliance",
  },
  {
    id: "all-for-one-business",
    symbol: "afo",
    name: "All For One Business",
  },
  {
    id: "allianceblock",
    symbol: "albt",
    name: "AllianceBlock",
  },
  {
    id: "alliance-cargo-direct",
    symbol: "acd",
    name: "Alliance Cargo Direct",
  },
  {
    id: "alliance-fan-token",
    symbol: "all",
    name: "Alliance Fan Token",
  },
  {
    id: "alliance-x-trading",
    symbol: "axt",
    name: "Alliance X Trading",
  },
  {
    id: "allium-finance",
    symbol: "alm",
    name: "Allium Finance",
  },
  {
    id: "allive",
    symbol: "alv",
    name: "Allive",
  },
  {
    id: "all-me",
    symbol: "me",
    name: "All.me",
  },
  {
    id: "allohash",
    symbol: "alh",
    name: "AlloHash",
  },
  {
    id: "alloy-project",
    symbol: "xao",
    name: "Alloy Project",
  },
  {
    id: "allsafe",
    symbol: "asafe",
    name: "AllSafe",
  },
  {
    id: "all-sports",
    symbol: "soc",
    name: "All Sports",
  },
  {
    id: "alluo",
    symbol: "alluo",
    name: "Alluo",
  },
  {
    id: "ally",
    symbol: "aly",
    name: "Ally",
  },
  {
    id: "ally-direct",
    symbol: "drct",
    name: "Ally Direct",
  },
  {
    id: "almace-shards",
    symbol: "almx",
    name: "Almace Shards",
  },
  {
    id: "almond",
    symbol: "alm",
    name: "Almond",
  },
  {
    id: "aloha",
    symbol: "aloha",
    name: "Aloha",
  },
  {
    id: "alpaca",
    symbol: "alpa",
    name: "Alpaca City",
  },
  {
    id: "alpaca-finance",
    symbol: "alpaca",
    name: "Alpaca Finance",
  },
  {
    id: "alpaca-usd",
    symbol: "ausd",
    name: "Alpaca USD",
  },
  {
    id: "alp-coin",
    symbol: "alp",
    name: "ALP Coin",
  },
  {
    id: "alpha5",
    symbol: "a5t",
    name: "Alpha5",
  },
  {
    id: "alpha-brain-capital",
    symbol: "abc",
    name: "Alpha Brain Capital",
  },
  {
    id: "alphacat",
    symbol: "acat",
    name: "Alphacat",
  },
  {
    id: "alphacoin",
    symbol: "alpha",
    name: "AlphaCoin",
  },
  {
    id: "alpha-coin",
    symbol: "apc",
    name: "Alpha Coin",
  },
  {
    id: "alphadex",
    symbol: "dex",
    name: "AlphaDex",
  },
  {
    id: "alpha-dex",
    symbol: "roar",
    name: "Alpha DEX",
  },
  {
    id: "alpha-finance",
    symbol: "alpha",
    name: "Alpha Finance",
  },
  {
    id: "alpha-kombat",
    symbol: "alkom",
    name: "Alpha Kombat",
  },
  {
    id: "alphalink",
    symbol: "ank",
    name: "AlphaLink",
  },
  {
    id: "alpha-platform",
    symbol: "a",
    name: "Alpha Token",
  },
  {
    id: "alpha-quark-token",
    symbol: "aqt",
    name: "Alpha Quark Token",
  },
  {
    id: "alpha-rome",
    symbol: "aROME",
    name: "Alpha Rome",
  },
  {
    id: "alpha-shiba-inu",
    symbol: "alphashib",
    name: "Alpha Shiba Inu",
  },
  {
    id: "alpha-wolf",
    symbol: "awf",
    name: "Alpha Wolf",
  },
  {
    id: "alphr",
    symbol: "alphr",
    name: "Alphr",
  },
  {
    id: "alrightcoin",
    symbol: "alc",
    name: "AlrightCoin",
  },
  {
    id: "altafin",
    symbol: "afn",
    name: "AltaFin",
  },
  {
    id: "altbase",
    symbol: "altb",
    name: "Altbase",
  },
  {
    id: "alt-coin",
    symbol: "ALT",
    name: "Alt Coin",
  },
  {
    id: "altcommunity-coin",
    symbol: "altom",
    name: "ALTOM",
  },
  {
    id: "altcrusaders",
    symbol: "alt",
    name: "AltCrusaders",
  },
  {
    id: "altera",
    symbol: "aen",
    name: "Altera",
  },
  {
    id: "altered-protocol",
    symbol: "alte",
    name: "Altered Protocol",
  },
  {
    id: "alternatemoney",
    symbol: "am",
    name: "AlternateMoney",
  },
  {
    id: "alt-estate",
    symbol: "alt",
    name: "AltEstate Token",
  },
  {
    id: "altmarkets-coin",
    symbol: "altm",
    name: "Altmarkets Coin",
  },
  {
    id: "altrucoin",
    symbol: "altrucoin",
    name: "Altrucoin",
  },
  {
    id: "altswitch",
    symbol: "alts",
    name: "AltSwitch",
  },
  {
    id: "altura",
    symbol: "alu",
    name: "Altura",
  },
  {
    id: "aludra-network",
    symbol: "ald",
    name: "Aludra Network",
  },
  {
    id: "aluna",
    symbol: "aln",
    name: "Aluna",
  },
  {
    id: "alvarenet",
    symbol: "alvn",
    name: "AlvareNet",
  },
  {
    id: "alyattes",
    symbol: "alya",
    name: "Alyattes",
  },
  {
    id: "amasa",
    symbol: "amas",
    name: "Amasa",
  },
  {
    id: "amaten",
    symbol: "ama",
    name: "Amaten",
  },
  {
    id: "amateras",
    symbol: "amt",
    name: "Amateras",
  },
  {
    id: "amazonacoin",
    symbol: "amz",
    name: "AmazonasCoin",
  },
  {
    id: "amber",
    symbol: "amb",
    name: "Ambrosus",
  },
  {
    id: "amc-fight-night",
    symbol: "amc",
    name: "AMC Fight Night",
  },
  {
    id: "amepay",
    symbol: "ame",
    name: "Amepay",
  },
  {
    id: "american-akita",
    symbol: "uskita",
    name: "American Akita",
  },
  {
    id: "american-shiba",
    symbol: "ushiba",
    name: "American Shiba",
  },
  {
    id: "americanstaff-inu",
    symbol: "amstaff",
    name: "AmericanStaff Inu",
  },
  {
    id: "ameru-dao",
    symbol: "adao",
    name: "Ameru DAO",
  },
  {
    id: "amis",
    symbol: "amis",
    name: "AMIS",
  },
  {
    id: "amix",
    symbol: "amix",
    name: "AMIX",
  },
  {
    id: "ammbr",
    symbol: "amr",
    name: "Ammbr",
  },
  {
    id: "ammyi-coin",
    symbol: "ami",
    name: "AMMYI Coin",
  },
  {
    id: "amnext",
    symbol: "amc",
    name: "Amnext",
  },
  {
    id: "amo",
    symbol: "amo",
    name: "AMO Coin",
  },
  {
    id: "amon",
    symbol: "amn",
    name: "Amon",
  },
  {
    id: "amond",
    symbol: "amon",
    name: "AmonD",
  },
  {
    id: "amoveo",
    symbol: "veo",
    name: "Amoveo",
  },
  {
    id: "ampleforth",
    symbol: "ampl",
    name: "Ampleforth",
  },
  {
    id: "ampleforth-governance-token",
    symbol: "forth",
    name: "Ampleforth Governance Token",
  },
  {
    id: "ampleforth-wormhole",
    symbol: "ampl",
    name: "Ampleforth (Wormhole)",
  },
  {
    id: "ampleswap",
    symbol: "ample",
    name: "AmpleSwap",
  },
  {
    id: "ampnet",
    symbol: "aapx",
    name: "AMPnet",
  },
  {
    id: "amp-token",
    symbol: "amp",
    name: "Amp",
  },
  {
    id: "amp-wormhole",
    symbol: "amp",
    name: "Amp (Wormhole)",
  },
  {
    id: "amun-defi-index",
    symbol: "dfi",
    name: "Amun DeFi Index",
  },
  {
    id: "amun-defi-momentum-index",
    symbol: "dmx",
    name: "Amun DeFi Momentum Index",
  },
  {
    id: "amy-finance",
    symbol: "amy",
    name: "Amy Finance",
  },
  {
    id: "amz-coin",
    symbol: "amz",
    name: "AMZ Coin",
  },
  {
    id: "anchor",
    symbol: "anct",
    name: "Anchor",
  },
  {
    id: "anchor-beth-token",
    symbol: "beth",
    name: "Anchor bETH Token",
  },
  {
    id: "anchor-neural-world-token",
    symbol: "anw",
    name: "Anchor Neural World Token",
  },
  {
    id: "anchor-protocol",
    symbol: "anc",
    name: "Anchor Protocol",
  },
  {
    id: "anchorswap",
    symbol: "anchor",
    name: "AnchorSwap",
  },
  {
    id: "anchorust",
    symbol: "aust",
    name: "AnchorUST",
  },
  {
    id: "ancient-kingdom",
    symbol: "dom",
    name: "Ancient Kingdom",
  },
  {
    id: "ancient-warrior",
    symbol: "ancw",
    name: "Ancient Warrior",
  },
  {
    id: "andes-coin",
    symbol: "andes",
    name: "AndesCoin",
  },
  {
    id: "andromeda",
    symbol: "m31",
    name: "Andromeda",
  },
  {
    id: "androttweiler-token",
    symbol: "androttweiler",
    name: "Androttweiler Token",
  },
  {
    id: "anduschain",
    symbol: "deb",
    name: "Anduschain",
  },
  {
    id: "angelheart-token",
    symbol: "AHT",
    name: "AngelHeart Token",
  },
  {
    id: "angel-inu",
    symbol: "ANGEL",
    name: "Angel Inu",
  },
  {
    id: "angelscreed",
    symbol: "angel",
    name: "AngelsCreed",
  },
  {
    id: "angle-protocol",
    symbol: "angle",
    name: "ANGLE",
  },
  {
    id: "angryb",
    symbol: "anb",
    name: "Angryb",
  },
  {
    id: "angrybakery",
    symbol: "abake",
    name: "AngryBakery",
  },
  {
    id: "angryfloki",
    symbol: "$afloki",
    name: "AngryFloki",
  },
  {
    id: "animal-adoption-advocacy",
    symbol: "paws",
    name: "Animal Adoption Advocacy",
  },
  {
    id: "animal-concerts-token",
    symbol: "anml",
    name: "Animal Concerts",
  },
  {
    id: "animal-house",
    symbol: "ahouse",
    name: "Animal House",
  },
  {
    id: "animalia",
    symbol: "anim",
    name: "Animalia",
  },
  {
    id: "animal-token",
    symbol: "stray",
    name: "Animal Token",
  },
  {
    id: "animal-tycoon",
    symbol: "amt",
    name: "Animal Tycoon",
  },
  {
    id: "animecoin",
    symbol: "ani",
    name: "Animecoin",
  },
  {
    id: "animeinu",
    symbol: "aime",
    name: "AnimeInu",
  },
  {
    id: "anime-token",
    symbol: "ani",
    name: "Anime Token",
  },
  {
    id: "anime-vault-nftx",
    symbol: "anime",
    name: "ANIME Vault (NFTX)",
  },
  {
    id: "aniverse",
    symbol: "anv",
    name: "Aniverse",
  },
  {
    id: "anj",
    symbol: "anj",
    name: "Aragon Court",
  },
  {
    id: "anji",
    symbol: "anji",
    name: "Anji",
  },
  {
    id: "ankaragucu-fan-token",
    symbol: "anka",
    name: "Ankaragücü Fan Tokens",
  },
  {
    id: "ankr",
    symbol: "ankr",
    name: "Ankr",
  },
  {
    id: "ankr-avalanche-reward-earning-bond",
    symbol: "aavaxb",
    name: "Ankr Avalanche Reward Earning Bond",
  },
  {
    id: "ankreth",
    symbol: "aethc",
    name: "Ankr Reward-Bearing Staked ETH",
  },
  {
    id: "ankr-network-wormhole",
    symbol: "ankr",
    name: "Ankr Network (Wormhole)",
  },
  {
    id: "ankr-reward-earning-staked-eth",
    symbol: "aethb",
    name: "Ankr Reward-Earning Staked ETH",
  },
  {
    id: "annex",
    symbol: "ann",
    name: "Annex Finance",
  },
  {
    id: "anomus-coin",
    symbol: "anom",
    name: "Anomus Coin",
  },
  {
    id: "anon",
    symbol: "anon",
    name: "ANON",
  },
  {
    id: "anonfloki",
    symbol: "anonfloki",
    name: "AnonFloki",
  },
  {
    id: "anon-inu",
    symbol: "ainu",
    name: "Anon Inu",
  },
  {
    id: "anons-network",
    symbol: "anons",
    name: "Anons Network",
  },
  {
    id: "anonymous-bsc",
    symbol: "anon",
    name: "Anonymous BSC",
  },
  {
    id: "anortis",
    symbol: "anortis",
    name: "Anortis",
  },
  {
    id: "anpanswap-token",
    symbol: "anpan",
    name: "AnpanSwap Token",
  },
  {
    id: "anrkey-x",
    symbol: "$anrx",
    name: "AnRKey X",
  },
  {
    id: "ans-crypto-coin",
    symbol: "ans",
    name: "ANS Crypto Coin",
  },
  {
    id: "answerly",
    symbol: "ansr",
    name: "Answerly",
  },
  {
    id: "antalyaspor",
    symbol: "akrep",
    name: "Antalyaspor",
  },
  {
    id: "antex",
    symbol: "antex",
    name: "Antex",
  },
  {
    id: "antiample",
    symbol: "xamp",
    name: "Antiample",
  },
  {
    id: "anti-fraud-chain",
    symbol: "afc",
    name: "Anti-Fraud Chain",
  },
  {
    id: "anti-lockdown",
    symbol: "free",
    name: "Anti-Lockdown",
  },
  {
    id: "antimatter",
    symbol: "matter",
    name: "AntiMatter",
  },
  {
    id: "antimony",
    symbol: "atmn",
    name: "Antimony",
  },
  {
    id: "antique-zombie-shards",
    symbol: "zomb",
    name: "Antique Zombie Shards",
  },
  {
    id: "antis-inu",
    symbol: "antis",
    name: "Antis Inu",
  },
  {
    id: "antra",
    symbol: "antr",
    name: "Antra",
  },
  {
    id: "any-blocknet",
    symbol: "ablock",
    name: "ANY Blocknet",
  },
  {
    id: "anypad",
    symbol: "apad",
    name: "Anypad",
  },
  {
    id: "anyprinter",
    symbol: "anyp",
    name: "AnyPrinter",
  },
  {
    id: "anyswap",
    symbol: "any",
    name: "Anyswap",
  },
  {
    id: "aok",
    symbol: "aok",
    name: "AOK",
  },
  {
    id: "aos",
    symbol: "aos",
    name: "AOS",
  },
  {
    id: "ape",
    symbol: "ape",
    name: "APE",
  },
  {
    id: "apeboys",
    symbol: "ApeBoys",
    name: "ApeBoys",
  },
  {
    id: "apebullinu",
    symbol: "abi",
    name: "ApeBullInu",
  },
  {
    id: "apebusd",
    symbol: "apebusd",
    name: "ApeBUSD",
  },
  {
    id: "apecoin",
    symbol: "ape",
    name: "APEcoin",
  },
  {
    id: "apefarmer",
    symbol: "apef",
    name: "ApeFarmer",
  },
  {
    id: "apefund",
    symbol: "apefund",
    name: "ApeFund",
  },
  {
    id: "ape-fun-token",
    symbol: "aft",
    name: "Ape Fun Token",
  },
  {
    id: "apehaven",
    symbol: "apes",
    name: "ApeHaven",
  },
  {
    id: "ape-in",
    symbol: "apein",
    name: "Ape In",
  },
  {
    id: "apelab",
    symbol: "ape",
    name: "ApeLab",
  },
  {
    id: "apenft",
    symbol: "nft",
    name: "APENFT",
  },
  {
    id: "ape-punk",
    symbol: "ape$",
    name: "APE Punk",
  },
  {
    id: "apes-of-empires",
    symbol: "aoe",
    name: "Apes of Empires",
  },
  {
    id: "apes-token",
    symbol: "apes",
    name: "Apes Token",
  },
  {
    id: "apeswap-finance",
    symbol: "banana",
    name: "ApeSwap Finance",
  },
  {
    id: "apetoken",
    symbol: "APET",
    name: "APEToken",
  },
  {
    id: "ape-token",
    symbol: "apet",
    name: "Ape Token",
  },
  {
    id: "ape-x",
    symbol: "ape-x",
    name: "Ape-X",
  },
  {
    id: "apex-army",
    symbol: "apex",
    name: "APEx Army",
  },
  {
    id: "apexit-finance",
    symbol: "apex",
    name: "ApeXit Finance",
  },
  {
    id: "apex-protocol",
    symbol: "apxp",
    name: "APEX Protocol",
  },
  {
    id: "apex-token",
    symbol: "apex",
    name: "Apex Finance",
  },
  {
    id: "apholding-coin",
    symbol: "aph",
    name: "APHolding Coin",
  },
  {
    id: "api3",
    symbol: "api3",
    name: "API3",
  },
  {
    id: "apidai-network",
    symbol: "apidai",
    name: "Apidai Network",
  },
  {
    id: "apix",
    symbol: "apix",
    name: "APIX",
  },
  {
    id: "apm-coin",
    symbol: "APM",
    name: "apM Coin",
  },
  {
    id: "apollo",
    symbol: "apl",
    name: "Apollo",
  },
  {
    id: "apollo-coin",
    symbol: "APX",
    name: "Apollo Coin",
  },
  {
    id: "apollo-dao",
    symbol: "apollo",
    name: "Apollo DAO",
  },
  {
    id: "apollo-inu",
    symbol: "APOLLO",
    name: "Apollo Inu",
  },
  {
    id: "apollon-limassol",
    symbol: "APL",
    name: "Apollon Limassol Fan Token",
  },
  {
    id: "apollox-2",
    symbol: "apx",
    name: "ApolloX",
  },
  {
    id: "apoyield",
    symbol: "soul",
    name: "APOyield",
  },
  {
    id: "appa-inu",
    symbol: "appa",
    name: "Appa Inu",
  },
  {
    id: "app-alliance-association",
    symbol: "aaa",
    name: "AAAchain",
  },
  {
    id: "appcoins",
    symbol: "appc",
    name: "AppCoins",
  },
  {
    id: "appics",
    symbol: "apx",
    name: "Appics",
  },
  {
    id: "apple",
    symbol: "apple",
    name: "Apple",
  },
  {
    id: "apple-finance",
    symbol: "aplp",
    name: "Apple Finance",
  },
  {
    id: "apple-network",
    symbol: "ank",
    name: "Apple Network",
  },
  {
    id: "apple-protocol-token",
    symbol: "aapl",
    name: "Apple Protocol Token",
  },
  {
    id: "appleswap",
    symbol: "apple",
    name: "AppleSwap",
  },
  {
    id: "apr-coin",
    symbol: "apr",
    name: "APR Coin",
  },
  {
    id: "apricot",
    symbol: "apt",
    name: "Apricot",
  },
  {
    id: "april",
    symbol: "april",
    name: "April",
  },
  {
    id: "apron",
    symbol: "apn",
    name: "Apron",
  },
  {
    id: "apwine",
    symbol: "apw",
    name: "APWine",
  },
  {
    id: "apy-finance",
    symbol: "apy",
    name: "APY.Finance",
  },
  {
    id: "apyswap",
    symbol: "apys",
    name: "APYSwap",
  },
  {
    id: "apy-vision",
    symbol: "vision",
    name: "APY.vision",
  },
  {
    id: "aqar-chain",
    symbol: "aqr",
    name: "Aqar Chain",
  },
  {
    id: "aqua",
    symbol: "aqua",
    name: "Aqua",
  },
  {
    id: "aquachain",
    symbol: "aqua",
    name: "Aquachain",
  },
  {
    id: "aquafi",
    symbol: "aqua",
    name: "AquaFi",
  },
  {
    id: "aqua-goat",
    symbol: "aquagoat",
    name: "Aqua Goat",
  },
  {
    id: "aquagoat-old",
    symbol: "aquagoat",
    name: "AquaGoat (Old)",
  },
  {
    id: "aquari",
    symbol: "aquari",
    name: "Aquari",
  },
  {
    id: "aquarius",
    symbol: "aqua",
    name: "Aquarius",
  },
  {
    id: "aquariuscoin",
    symbol: "arco",
    name: "AquariusCoin",
  },
  {
    id: "aquarius-fi",
    symbol: "aqu",
    name: "Aquarius.Fi",
  },
  {
    id: "arabic",
    symbol: "abic",
    name: "Arabic",
  },
  {
    id: "arabtycoon",
    symbol: "at",
    name: "ArabTycoon",
  },
  {
    id: "aragon",
    symbol: "ant",
    name: "Aragon",
  },
  {
    id: "arank",
    symbol: "arank",
    name: "Arank",
  },
  {
    id: "araplanet",
    symbol: "arap",
    name: "AraPlanet",
  },
  {
    id: "arata",
    symbol: "arata",
    name: "Arata",
  },
  {
    id: "ara-token",
    symbol: "ara",
    name: "Ara Token",
  },
  {
    id: "araw-token",
    symbol: "araw",
    name: "ARAW Token",
  },
  {
    id: "arbidex",
    symbol: "abx",
    name: "Arbidex",
  },
  {
    id: "arbidoge",
    symbol: "adoge",
    name: "ArbiDoge",
  },
  {
    id: "arbifarm",
    symbol: "AFARM",
    name: "ArbiFarm",
  },
  {
    id: "arbimatter",
    symbol: "arbimatter",
    name: "ArbiMATTER",
  },
  {
    id: "arbinyan",
    symbol: "nyan",
    name: "ArbiNYAN",
  },
  {
    id: "arbirise-finance",
    symbol: "arf",
    name: "ArbiRiseFinance",
  },
  {
    id: "arbis-finance",
    symbol: "arbis",
    name: "Arbis Finance",
  },
  {
    id: "arbismart-token",
    symbol: "rbis",
    name: "ArbiSmart Token",
  },
  {
    id: "arbiswap",
    symbol: "aswap",
    name: "Arbiswap",
  },
  {
    id: "arbiter",
    symbol: "arb",
    name: "Arbiter",
  },
  {
    id: "arbix-finance",
    symbol: "arbx",
    name: "Arbix Finance",
  },
  {
    id: "arbucks",
    symbol: "buck",
    name: "Arbucks",
  },
  {
    id: "arbys",
    symbol: "arbys",
    name: "Arbys Token",
  },
  {
    id: "arcade",
    symbol: "arc",
    name: "Arcade",
  },
  {
    id: "arcadenetwork",
    symbol: "arc",
    name: "ArcadeNetwork",
  },
  {
    id: "arcadium",
    symbol: "arcadium",
    name: "Arcadium",
  },
  {
    id: "arcana",
    symbol: "ARCA",
    name: "Arcana",
  },
  {
    id: "arcane",
    symbol: "ARCANE",
    name: "Arcane",
  },
  {
    id: "arcaneleague",
    symbol: "arcaneleague",
    name: "ArcaneLeague",
  },
  {
    id: "arcane-token",
    symbol: "arcane",
    name: "Arcane Token",
  },
  {
    id: "arcanineinu",
    symbol: "arcanineinu",
    name: "ArcanineInu",
  },
  {
    id: "arcblock",
    symbol: "abt",
    name: "Arcblock",
  },
  {
    id: "arc-block-protocol",
    symbol: "abp",
    name: "Arc Block Protocol",
  },
  {
    id: "arc-governance",
    symbol: "arcx",
    name: "ARC Governance",
  },
  {
    id: "archangel-token",
    symbol: "archa",
    name: "ArchAngel",
  },
  {
    id: "archer-dao-governance-token",
    symbol: "arch",
    name: "Archer DAO Governance Token",
  },
  {
    id: "archethic",
    symbol: "uco",
    name: "ArchEthic",
  },
  {
    id: "archetypal-network",
    symbol: "actp",
    name: "Archetypal Network",
  },
  {
    id: "arcona",
    symbol: "arcona",
    name: "Arcona",
  },
  {
    id: "arcs",
    symbol: "arx",
    name: "ARCS",
  },
  {
    id: "arcticcoin",
    symbol: "arc",
    name: "Advanced Technology Coin",
  },
  {
    id: "arctic-finance",
    symbol: "aurora",
    name: "Arctic Finance",
  },
  {
    id: "ardana",
    symbol: "dana",
    name: "Ardana",
  },
  {
    id: "ardcoin",
    symbol: "ardx",
    name: "ArdCoin",
  },
  {
    id: "ardor",
    symbol: "ardr",
    name: "Ardor",
  },
  {
    id: "arena-token",
    symbol: "arena",
    name: "Arena Token",
  },
  {
    id: "arenaverse",
    symbol: "averse",
    name: "Arenaverse",
  },
  {
    id: "ares-protocol",
    symbol: "ares",
    name: "Ares Protocol",
  },
  {
    id: "argentine-football-association-fan-token",
    symbol: "arg",
    name: "Argentine Football Association Fan Token",
  },
  {
    id: "argo",
    symbol: "argo",
    name: "ArGoApp",
  },
  {
    id: "argon",
    symbol: "argon",
    name: "Argon",
  },
  {
    id: "ari10",
    symbol: "ari10",
    name: "Ari10",
  },
  {
    id: "ariadne",
    symbol: "ardn",
    name: "Ariadne",
  },
  {
    id: "arianee",
    symbol: "aria20",
    name: "Arianee",
  },
  {
    id: "aries-financial-token",
    symbol: "afib",
    name: "Aries Financial",
  },
  {
    id: "arion",
    symbol: "arion",
    name: "Arion",
  },
  {
    id: "arionum",
    symbol: "aro",
    name: "Arionum",
  },
  {
    id: "arise-finance",
    symbol: "ari",
    name: "Arise Finance",
  },
  {
    id: "ari-swap",
    symbol: "ari",
    name: "Ari Swap",
  },
  {
    id: "ariva",
    symbol: "arv",
    name: "Ariva",
  },
  {
    id: "arix",
    symbol: "arix",
    name: "Arix",
  },
  {
    id: "ark",
    symbol: "ark",
    name: "Ark",
  },
  {
    id: "arkadiko-protocol",
    symbol: "diko",
    name: "Arkadiko",
  },
  {
    id: "arkania-protocol",
    symbol: "ania",
    name: "Arkania Protocol",
  },
  {
    id: "arke",
    symbol: "arke",
    name: "ARKE",
  },
  {
    id: "arker-2",
    symbol: "arker",
    name: "Arker",
  },
  {
    id: "armada",
    symbol: "ARMD",
    name: "Armada",
  },
  {
    id: "armor",
    symbol: "armor",
    name: "ARMOR",
  },
  {
    id: "armor-nxm",
    symbol: "arnxm",
    name: "Armor NXM",
  },
  {
    id: "armours",
    symbol: "arm",
    name: "Armours",
  },
  {
    id: "armzlegends",
    symbol: "prot",
    name: "ArmzLegends",
  },
  {
    id: "around-network",
    symbol: "art",
    name: "Around Network",
  },
  {
    id: "arowana-token",
    symbol: "arw",
    name: "Arowana Token",
  },
  {
    id: "arpa-chain",
    symbol: "arpa",
    name: "ARPA Chain",
  },
  {
    id: "arqma",
    symbol: "arq",
    name: "ArQmA",
  },
  {
    id: "arrb-token",
    symbol: "arrb",
    name: "Arrb Token",
  },
  {
    id: "arrow",
    symbol: "arw",
    name: "Arrow",
  },
  {
    id: "arsenal-fan-token",
    symbol: "AFC",
    name: "Arsenal Fan Token",
  },
  {
    id: "artax",
    symbol: "xax",
    name: "ARTAX",
  },
  {
    id: "art-blocks-curated-fidenza-855",
    symbol: "fdnza",
    name: "Art Blocks Curated Fidenza #855",
  },
  {
    id: "art-blocks-curated-full-set",
    symbol: "abc123",
    name: "Art Blocks Curated Full Set",
  },
  {
    id: "artbyte",
    symbol: "aby",
    name: "ArtByte",
  },
  {
    id: "artem",
    symbol: "artem",
    name: "Artem",
  },
  {
    id: "artemis",
    symbol: "mis",
    name: "Artemis",
  },
  {
    id: "artery",
    symbol: "artr",
    name: "Artery",
  },
  {
    id: "artex",
    symbol: "artex",
    name: "Artex",
  },
  {
    id: "artfinity-token",
    symbol: "at",
    name: "Artfinity Token",
  },
  {
    id: "arth",
    symbol: "arth",
    name: "ARTH",
  },
  {
    id: "articuno-inu",
    symbol: "articuno",
    name: "Articuno Inu",
  },
  {
    id: "artificial-intelligence",
    symbol: "ai",
    name: "Artificial Intelligence",
  },
  {
    id: "artii-token",
    symbol: "artii",
    name: "ARTII Token",
  },
  {
    id: "arti-project",
    symbol: "arti",
    name: "Arti Project",
  },
  {
    id: "artm",
    symbol: "artm",
    name: "ARTM",
  },
  {
    id: "art-nano",
    symbol: "ARNO",
    name: "ART-NANO",
  },
  {
    id: "art-of-war",
    symbol: "$AOW",
    name: "Art of War",
  },
  {
    id: "artonline",
    symbol: "art",
    name: "ArtOnline",
  },
  {
    id: "artube",
    symbol: "att",
    name: "Artube",
  },
  {
    id: "artverse-token",
    symbol: "avt",
    name: "Artverse Token",
  },
  {
    id: "artwork-nft",
    symbol: "anft",
    name: "Artwork NFT",
  },
  {
    id: "artx",
    symbol: "artx",
    name: "ARTX",
  },
  {
    id: "arweave",
    symbol: "ar",
    name: "Arweave",
  },
  {
    id: "aryacoin",
    symbol: "aya",
    name: "Aryacoin",
  },
  {
    id: "ascend",
    symbol: "ACE",
    name: "Ascend",
  },
  {
    id: "ascension",
    symbol: "asn",
    name: "Ascension",
  },
  {
    id: "ascensionarcade",
    symbol: "aat",
    name: "AscensionArcade",
  },
  {
    id: "ascension-protocol",
    symbol: "ascend",
    name: "Ascension Protocol",
  },
  {
    id: "ascentpad",
    symbol: "asp",
    name: "AscentPad",
  },
  {
    id: "asch",
    symbol: "xas",
    name: "Asch",
  },
  {
    id: "asd",
    symbol: "asd",
    name: "AscendEx Token",
  },
  {
    id: "asec-frontier",
    symbol: "asec",
    name: "ASEC Frontier",
  },
  {
    id: "asgard-dao",
    symbol: "asgard",
    name: "Asgard Dao",
  },
  {
    id: "asgardian-aereus",
    symbol: "volt",
    name: "Asgardian Aereus",
  },
  {
    id: "ash",
    symbol: "ash",
    name: "ASH",
  },
  {
    id: "ashera",
    symbol: "ash",
    name: "Ashera",
  },
  {
    id: "asia-coin",
    symbol: "ASIA",
    name: "Asia Coin",
  },
  {
    id: "asia-pacific-electronic-coin",
    symbol: "apecoin",
    name: "Asia Pacific Electronic Coin",
  },
  {
    id: "asimi",
    symbol: "asimi",
    name: "ASIMI",
  },
  {
    id: "ask-me-anything",
    symbol: "ama",
    name: "Ask Me Anything",
  },
  {
    id: "askobar-network",
    symbol: "asko",
    name: "Asko",
  },
  {
    id: "aspire",
    symbol: "asp",
    name: "Aspire",
  },
  {
    id: "aspo-world",
    symbol: "aspo",
    name: "ASPO World",
  },
  {
    id: "as-roma-fan-token",
    symbol: "asr",
    name: "AS Roma Fan Token",
  },
  {
    id: "assemble-protocol",
    symbol: "asm",
    name: "Assemble Protocol",
  },
  {
    id: "asset-backed-protocol",
    symbol: "abp",
    name: "Asset Backed Protocol",
  },
  {
    id: "assgard",
    symbol: "assg",
    name: "Assgard",
  },
  {
    id: "assy-index",
    symbol: "assy",
    name: "ASSY Index",
  },
  {
    id: "asta",
    symbol: "asta",
    name: "ASTA",
  },
  {
    id: "astar",
    symbol: "astr",
    name: "Astar",
  },
  {
    id: "aster",
    symbol: "atc",
    name: "Aster",
  },
  {
    id: "ast-finance",
    symbol: "ast",
    name: "AST.finance",
  },
  {
    id: "aston",
    symbol: "atx",
    name: "Aston",
  },
  {
    id: "aston-martin-cognizant-fan-token",
    symbol: "am",
    name: "Aston Martin Cognizant Fan Token",
  },
  {
    id: "aston-villa-fan-token",
    symbol: "avl",
    name: "Aston Villa Fan Token",
  },
  {
    id: "astra-guild-ventures",
    symbol: "agv",
    name: "Astra Guild Ventures",
  },
  {
    id: "astrapad",
    symbol: "astra",
    name: "AstraPad",
  },
  {
    id: "astra-protocol",
    symbol: "astra",
    name: "Astra Coin",
  },
  {
    id: "astro",
    symbol: "astro",
    name: "Astro",
  },
  {
    id: "astrobirdz",
    symbol: "abz",
    name: "AstroBirdz",
  },
  {
    id: "astrodonkey",
    symbol: "dnky",
    name: "AstroDonkey",
  },
  {
    id: "astro-dragon",
    symbol: "dragn",
    name: "Astro Dragon",
  },
  {
    id: "astroelon",
    symbol: "elonone",
    name: "AstroElon",
  },
  {
    id: "astrofarms",
    symbol: "leo",
    name: "AstroFarms",
  },
  {
    id: "astro-gold",
    symbol: "astrogold",
    name: "Astro Gold",
  },
  {
    id: "astrokitty",
    symbol: "ak",
    name: "Astrokitties",
  },
  {
    id: "astrolion",
    symbol: "astrolion",
    name: "AstroLion",
  },
  {
    id: "astronaut",
    symbol: "naut",
    name: "Astronaut",
  },
  {
    id: "astronodes",
    symbol: "astro",
    name: "AstroNodes",
  },
  {
    id: "astronos",
    symbol: "astro",
    name: "Astronos",
  },
  {
    id: "astroport",
    symbol: "astro",
    name: "Astroport",
  },
  {
    id: "astrosanta",
    symbol: "asa",
    name: "AstroSanta",
  },
  {
    id: "astrospaces-io",
    symbol: "spaces",
    name: "AstroSpaces.io",
  },
  {
    id: "astroswap",
    symbol: "astro",
    name: "AstroSwap",
  },
  {
    id: "astrotools",
    symbol: "astro",
    name: "AstroTools",
  },
  {
    id: "astro-verse",
    symbol: "asv",
    name: "Astro Verse",
  },
  {
    id: "asuka-inu",
    symbol: "asuka",
    name: "Asuka Inu",
  },
  {
    id: "asuna-inu",
    symbol: "asunainu",
    name: "Asuna Inu",
  },
  {
    id: "asva",
    symbol: "asva",
    name: "Asva Labs",
  },
  {
    id: "asyagro",
    symbol: "asy",
    name: "ASYAGRO",
  },
  {
    id: "atari",
    symbol: "atri",
    name: "Atari",
  },
  {
    id: "ata-token",
    symbol: "ata",
    name: "ATA Token",
  },
  {
    id: "atauro",
    symbol: "ATR",
    name: "Atauro",
  },
  {
    id: "atbcoin",
    symbol: "atb",
    name: "ATBCoin",
  },
  {
    id: "atd",
    symbol: "atd",
    name: "A2DAO",
  },
  {
    id: "at-finance",
    symbol: "at",
    name: "AT Finance",
  },
  {
    id: "atheios",
    symbol: "ath",
    name: "Atheios",
  },
  {
    id: "athena-money",
    symbol: "ath",
    name: "Athena Money",
  },
  {
    id: "athena-money-owl",
    symbol: "owl",
    name: "Athena Money Owl",
  },
  {
    id: "atheneum",
    symbol: "aem",
    name: "Atheneum",
  },
  {
    id: "ath-games",
    symbol: "ATHD",
    name: "ATH Games",
  },
  {
    id: "athletex",
    symbol: "AX",
    name: "AthleteX",
  },
  {
    id: "atlant",
    symbol: "atl",
    name: "Atlant",
  },
  {
    id: "atlantic-finance",
    symbol: "atfi",
    name: "Atlantic Finance",
  },
  {
    id: "atlantis",
    symbol: "atlas",
    name: "Atlantis",
  },
  {
    id: "atlantis-loans",
    symbol: "atl",
    name: "Atlantis Loans",
  },
  {
    id: "atlantis-loans-polygon",
    symbol: "atlx",
    name: "Atlantis Loans Polygon",
  },
  {
    id: "atlantis-metaverse",
    symbol: "tau",
    name: "Atlantis Metaverse",
  },
  {
    id: "atlantis-token",
    symbol: "atis",
    name: "Atlantis Token",
  },
  {
    id: "atlas-cloud",
    symbol: "atlas",
    name: "Atlas Cloud",
  },
  {
    id: "atlas-dex",
    symbol: "ats",
    name: "Atlas DEX",
  },
  {
    id: "atlas-protocol",
    symbol: "ATP",
    name: "Atlas Protocol",
  },
  {
    id: "atlas-usv",
    symbol: "usv",
    name: "Atlas USV",
  },
  {
    id: "atletico-madrid",
    symbol: "atm",
    name: "Atletico Madrid Fan Token",
  },
  {
    id: "atmos",
    symbol: "atmos",
    name: "Atmos",
  },
  {
    id: "atn",
    symbol: "atn",
    name: "ATN",
  },
  {
    id: "atomic-token",
    symbol: "atmc",
    name: "Atomic Token",
  },
  {
    id: "atomic-wallet-coin",
    symbol: "awc",
    name: "Atomic Wallet Coin",
  },
  {
    id: "atompad",
    symbol: "atpad",
    name: "AtomPad",
  },
  {
    id: "atrollcity",
    symbol: "pine",
    name: "Atrollcity",
  },
  {
    id: "atromg8",
    symbol: "ag8",
    name: "ATROMG8",
  },
  {
    id: "attack-wagon",
    symbol: "atk",
    name: "Attack Wagon",
  },
  {
    id: "attila",
    symbol: "att",
    name: "Attila",
  },
  {
    id: "attlas-token",
    symbol: "ats",
    name: "Attlas Token",
  },
  {
    id: "attn",
    symbol: "attn",
    name: "ATTN",
  },
  {
    id: "attrace",
    symbol: "attr",
    name: "Attrace",
  },
  {
    id: "auction",
    symbol: "auction",
    name: "Bounce",
  },
  {
    id: "auctus",
    symbol: "auc",
    name: "Auctus",
  },
  {
    id: "audax",
    symbol: "audax",
    name: "Audax",
  },
  {
    id: "audiocoin",
    symbol: "adc",
    name: "AudioCoin",
  },
  {
    id: "audius",
    symbol: "audio",
    name: "Audius",
  },
  {
    id: "audius-wormhole",
    symbol: "audio",
    name: "Audius (Wormhole)",
  },
  {
    id: "augmented-finance",
    symbol: "agf",
    name: "Augmented Finance",
  },
  {
    id: "augur",
    symbol: "rep",
    name: "Augur",
  },
  {
    id: "augury-finance",
    symbol: "omen",
    name: "Augury Finance",
  },
  {
    id: "aunit",
    symbol: "aunit",
    name: "Aunit",
  },
  {
    id: "aureo",
    symbol: "aur",
    name: "AUREO",
  },
  {
    id: "aureus-nummus-gold",
    symbol: "ang",
    name: "Aureus Nummus Gold",
  },
  {
    id: "aureus-token",
    symbol: "aureusrh",
    name: "Aureus Token",
  },
  {
    id: "auric-network",
    symbol: "auscm",
    name: "Auric Network",
  },
  {
    id: "aurix",
    symbol: "aur",
    name: "Aurix",
  },
  {
    id: "aurora",
    symbol: "aoa",
    name: "Aurora Chain",
  },
  {
    id: "auroracoin",
    symbol: "aur",
    name: "Auroracoin",
  },
  {
    id: "aurora-dao",
    symbol: "idex",
    name: "IDEX",
  },
  {
    id: "aurora-near",
    symbol: "aurora",
    name: "Aurora",
  },
  {
    id: "aurorashibamoon",
    symbol: "ashibam",
    name: "AuroraShibaMoon",
  },
  {
    id: "auroratoken",
    symbol: "aurora",
    name: "AuroraToken",
  },
  {
    id: "aurora-token",
    symbol: "Aurora",
    name: "Aurora Token",
  },
  {
    id: "aurory",
    symbol: "aury",
    name: "Aurory",
  },
  {
    id: "aurory-wormhole",
    symbol: "aury",
    name: "Aurory (Wormhole)",
  },
  {
    id: "auroshiba",
    symbol: "ashiba",
    name: "AuroShiba",
  },
  {
    id: "aurum",
    symbol: "aur",
    name: "Aurum",
  },
  {
    id: "aurumcoin",
    symbol: "au",
    name: "AurumCoin",
  },
  {
    id: "auruscoin",
    symbol: "awx",
    name: "AurusDeFi",
  },
  {
    id: "aurusgold",
    symbol: "awg",
    name: "AurusGOLD",
  },
  {
    id: "aurus-silver",
    symbol: "aws",
    name: "AurusSILVER",
  },
  {
    id: "ausd",
    symbol: "ausd",
    name: "aUSD",
  },
  {
    id: "australian-kelpie",
    symbol: "knockers",
    name: "Australian Kelpie",
  },
  {
    id: "australian-safe-shepherd",
    symbol: "ass",
    name: "Australian Safe Shepherd",
  },
  {
    id: "auto",
    symbol: "auto",
    name: "Auto",
  },
  {
    id: "autobahn",
    symbol: "atb",
    name: "Autobahn",
  },
  {
    id: "autobitco-token",
    symbol: "abco",
    name: "AutoBitco Token",
  },
  {
    id: "autobusd",
    symbol: "abs",
    name: "Autobusd",
  },
  {
    id: "autocrypto",
    symbol: "au",
    name: "AutoCrypto",
  },
  {
    id: "autoglyph-271",
    symbol: "aglyph",
    name: "Autoglyph #271",
  },
  {
    id: "automata",
    symbol: "ata",
    name: "Automata",
  },
  {
    id: "automatic-network",
    symbol: "aumi",
    name: "AutoMatic Network",
  },
  {
    id: "automaticup",
    symbol: "atmup",
    name: "AutoMaticUp",
  },
  {
    id: "autonio",
    symbol: "niox",
    name: "Autonio",
  },
  {
    id: "autoshark",
    symbol: "jaws",
    name: "AutoShark",
  },
  {
    id: "autostake",
    symbol: "auto",
    name: "Autostake",
  },
  {
    id: "autz-token",
    symbol: "autz",
    name: "AUTZ Token",
  },
  {
    id: "auxilium",
    symbol: "aux",
    name: "Auxilium",
  },
  {
    id: "avakus",
    symbol: "avak",
    name: "Avakus",
  },
  {
    id: "avalanche-2",
    symbol: "AVAX",
    name: "Avalanche",
  },
  {
    id: "avalanche-honeybee",
    symbol: "a.bee",
    name: "Avalanche HoneyBee",
  },
  {
    id: "avalanchevoid",
    symbol: "void",
    name: "AvalancheVoid",
  },
  {
    id: "avalanche-wormhole",
    symbol: "avax",
    name: "Avalanche (Wormhole)",
  },
  {
    id: "avalaunch",
    symbol: "xava",
    name: "Avalaunch",
  },
  {
    id: "avaluse",
    symbol: "aval",
    name: "Avaluse",
  },
  {
    id: "ava-mim",
    symbol: "avamim",
    name: "Ava MIM",
  },
  {
    id: "avanyan",
    symbol: "anyan",
    name: "AvaNyan",
  },
  {
    id: "avaocado-dao",
    symbol: "avg",
    name: "Avocado DAO",
  },
  {
    id: "avaone-finance",
    symbol: "avao",
    name: "AvaOne Finance",
  },
  {
    id: "avapay",
    symbol: "avapay",
    name: "AvaPay",
  },
  {
    id: "avara",
    symbol: "avr",
    name: "AVARA",
  },
  {
    id: "avastr-vault-nftx",
    symbol: "avastr",
    name: "AVASTR Vault (NFTX)",
  },
  {
    id: "avaterra",
    symbol: "terra",
    name: "Avaterra",
  },
  {
    id: "ava-time",
    symbol: "avtime",
    name: "Ava Time",
  },
  {
    id: "avaware",
    symbol: "ave",
    name: "Avaware",
  },
  {
    id: "avaware-usd",
    symbol: "ausd",
    name: "Avaware USD",
  },
  {
    id: "avaxlauncher",
    symbol: "avxl",
    name: "Avaxlauncher",
  },
  {
    id: "avaxtars",
    symbol: "avxt",
    name: "Avaxtars",
  },
  {
    id: "avaxup",
    symbol: "avaxup",
    name: "AvaxUp",
  },
  {
    id: "avengers-bsc",
    symbol: "avg",
    name: "Avengers BSC",
  },
  {
    id: "aventus",
    symbol: "avt",
    name: "Aventus",
  },
  {
    id: "avinoc",
    symbol: "avinoc",
    name: "AVINOC",
  },
  {
    id: "avme",
    symbol: "avme",
    name: "AVME",
  },
  {
    id: "avnrich",
    symbol: "avn",
    name: "AVNRich",
  },
  {
    id: "axe",
    symbol: "axe",
    name: "Axe",
  },
  {
    id: "axel",
    symbol: "axel",
    name: "AXEL",
  },
  {
    id: "axentro",
    symbol: "axnt",
    name: "Axentro",
  },
  {
    id: "axia",
    symbol: "axiav3",
    name: "Axia",
  },
  {
    id: "axia-coin",
    symbol: "axc",
    name: "AXIA Coin",
  },
  {
    id: "axial",
    symbol: "axl",
    name: "AXiaL",
  },
  {
    id: "axial-token",
    symbol: "axial",
    name: "Axial Token",
  },
  {
    id: "axie-infinity",
    symbol: "axs",
    name: "Axie Infinity",
  },
  {
    id: "axie-infinity-shard-wormhole",
    symbol: "axset",
    name: "Axie Infinity Shard (Wormhole)",
  },
  {
    id: "axioms",
    symbol: "axi",
    name: "Axioms",
  },
  {
    id: "axion",
    symbol: "axn",
    name: "Axion",
  },
  {
    id: "axis-defi",
    symbol: "axis",
    name: "Axis DeFi",
  },
  {
    id: "axis-token",
    symbol: "axis",
    name: "AXIS Token",
  },
  {
    id: "axl-inu",
    symbol: "axl",
    name: "AXL INU",
  },
  {
    id: "axpire",
    symbol: "axpr",
    name: "aXpire",
  },
  {
    id: "axus-coin",
    symbol: "axus",
    name: "Axus Coin",
  },
  {
    id: "ayfi-v1",
    symbol: "ayfi",
    name: "Aave YFI v1",
  },
  {
    id: "azbit",
    symbol: "az",
    name: "Azbit",
  },
  {
    id: "azeusx",
    symbol: "azx",
    name: "AzeusX",
  },
  {
    id: "az-fundchain",
    symbol: "azt",
    name: "AZ Fundchain",
  },
  {
    id: "azuki",
    symbol: "azuki",
    name: "Azuki",
  },
  {
    id: "azuma-coin",
    symbol: "azum",
    name: "Azuma Coin",
  },
  {
    id: "azuras",
    symbol: "uzz",
    name: "UZURAS",
  },
  {
    id: "azus",
    symbol: "azu",
    name: "Azus",
  },
  {
    id: "b20",
    symbol: "b20",
    name: "B20",
  },
  {
    id: "b21",
    symbol: "b21",
    name: "B21",
  },
  {
    id: "b26",
    symbol: "b26",
    name: "B26",
  },
  {
    id: "b2bcoin-2",
    symbol: "b2b",
    name: "B2Bcoin",
  },
  {
    id: "b2u-coin",
    symbol: "b2u",
    name: "B2U Coin",
  },
  {
    id: "baanx",
    symbol: "bxx",
    name: "Baanx",
  },
  {
    id: "baasid",
    symbol: "baas",
    name: "BaaSid",
  },
  {
    id: "babb",
    symbol: "bax",
    name: "BABB",
  },
  {
    id: "babelfish",
    symbol: "babel",
    name: "BabelFish",
  },
  {
    id: "baboon-financial",
    symbol: "BOON",
    name: "Baboon Financial",
  },
  {
    id: "baby-ada",
    symbol: "babyada",
    name: "Baby ADA",
  },
  {
    id: "baby-aetherius",
    symbol: "babyaeth",
    name: "Baby Aetherius",
  },
  {
    id: "baby-akita",
    symbol: "bkita",
    name: "Baby Akita",
  },
  {
    id: "baby-alpaca",
    symbol: "BALPAC",
    name: "Baby Alpaca",
  },
  {
    id: "baby-alucard",
    symbol: "alucard",
    name: "Baby Alucard",
  },
  {
    id: "babyarmy",
    symbol: "barmy",
    name: "BabyArmy",
  },
  {
    id: "babyavengers",
    symbol: "avngrs",
    name: "BabyAvengers",
  },
  {
    id: "babybackdoge",
    symbol: "bbdoge",
    name: "BabyBackDOGE",
  },
  {
    id: "baby-bali",
    symbol: "BB",
    name: "Baby Bali",
  },
  {
    id: "babybanana",
    symbol: "bbnana",
    name: "BabyBanana",
  },
  {
    id: "babybilz",
    symbol: "babybilz",
    name: "BabyBilz",
  },
  {
    id: "babybitcoin",
    symbol: "babybitc",
    name: "BabyBitcoin",
  },
  {
    id: "baby-bitcoin",
    symbol: "bbtc",
    name: "Baby Bitcoin",
  },
  {
    id: "babybnb",
    symbol: "babybnb",
    name: "BabyBNB",
  },
  {
    id: "baby-bonfire",
    symbol: "FIRE",
    name: "Baby Bonfire",
  },
  {
    id: "babyboo",
    symbol: "babyboo",
    name: "BabyBoo",
  },
  {
    id: "baby-boxer",
    symbol: "bboxer",
    name: "Baby Boxer",
  },
  {
    id: "babybsc",
    symbol: "bbsc",
    name: "BabyBSC",
  },
  {
    id: "babybusd",
    symbol: "babybusd",
    name: "BabyBUSD",
  },
  {
    id: "baby-cake",
    symbol: "babycake",
    name: "Baby Cake",
  },
  {
    id: "babycare",
    symbol: "babycare",
    name: "BabyCare",
  },
  {
    id: "babycasper",
    symbol: "babycasper",
    name: "Baby Casper",
  },
  {
    id: "babycatgirl",
    symbol: "babycatgirl",
    name: "BabyCatGirl",
  },
  {
    id: "baby-cat-girl",
    symbol: "bbycat",
    name: "Baby Cat Girl",
  },
  {
    id: "baby-cheems-inu",
    symbol: "bci",
    name: "Baby Cheems Inu",
  },
  {
    id: "baby-chow",
    symbol: "chow",
    name: "Baby Chow",
  },
  {
    id: "baby-defido",
    symbol: "babydefido",
    name: "Baby DeFido",
  },
  {
    id: "baby-doge-billionaire",
    symbol: "babydb",
    name: "Baby Doge Billionaire",
  },
  {
    id: "babydogecake",
    symbol: "bdc",
    name: "BabyDogeCake",
  },
  {
    id: "baby-doge-cash",
    symbol: "babydogecash",
    name: "Baby Doge Cash",
  },
  {
    id: "baby-doge-coin",
    symbol: "babydoge",
    name: "Baby Doge Coin",
  },
  {
    id: "babydoge-coin-eth",
    symbol: "babydoge",
    name: "BabyDoge ETH",
  },
  {
    id: "baby-doge-inu",
    symbol: "$babydogeinu",
    name: "Baby Doge Inu",
  },
  {
    id: "baby-doge-money-maker",
    symbol: "BABYDOGEMM",
    name: "Baby Doge Money Maker",
  },
  {
    id: "babydogex",
    symbol: "BDOGEX",
    name: "BabyDogeX",
  },
  {
    id: "babydogezilla",
    symbol: "babydogezilla",
    name: "BabyDogeZilla",
  },
  {
    id: "baby-dogo-coin",
    symbol: "babydogo",
    name: "Baby Dogo Coin",
  },
  {
    id: "babydot",
    symbol: "bdot",
    name: "BabyDot",
  },
  {
    id: "baby-doug",
    symbol: "babydoug",
    name: "Baby Doug",
  },
  {
    id: "babyegg",
    symbol: "BABYEGG",
    name: "BabyEgg",
  },
  {
    id: "babyelon",
    symbol: "babyelon",
    name: "BabyElon",
  },
  {
    id: "babyeth",
    symbol: "babyeth",
    name: "BabyEth",
  },
  {
    id: "babyethereum",
    symbol: "bbeth",
    name: "BabyEthereum",
  },
  {
    id: "babyeth-v2",
    symbol: "babyethv2",
    name: "BabyETH V2",
  },
  {
    id: "baby-everdoge",
    symbol: "baby everdoge",
    name: "Baby EverDoge",
  },
  {
    id: "baby-falcon-doge",
    symbol: "bfdoge",
    name: "Baby Falcon Doge",
  },
  {
    id: "babyfeg",
    symbol: "bbfeg",
    name: "Babyfeg",
  },
  {
    id: "babyfloki",
    symbol: "babyfloki",
    name: "BabyFloki",
  },
  {
    id: "baby-floki",
    symbol: "BabyFloki",
    name: "Baby Floki",
  },
  {
    id: "baby-floki-billionaire",
    symbol: "BabyFB",
    name: "Baby Floki Billionaire",
  },
  {
    id: "baby-floki-coin",
    symbol: "BABYFLOKICOIN",
    name: "Baby Floki Coin",
  },
  {
    id: "baby-floki-doge",
    symbol: "babyfd",
    name: "Baby Floki Doge",
  },
  {
    id: "baby-floki-inu",
    symbol: "bfloki",
    name: "Baby Floki Inu",
  },
  {
    id: "baby-floki-pup",
    symbol: "BabyFlokiPup",
    name: "Baby Floki Pup",
  },
  {
    id: "baby-floki-up",
    symbol: "bfu",
    name: "Baby Floki Up",
  },
  {
    id: "babyflokizilla",
    symbol: "babyflokizilla",
    name: "BabyFlokiZilla",
  },
  {
    id: "babyfortknox",
    symbol: "BFK",
    name: "BabyFortKnox",
  },
  {
    id: "babyfrog",
    symbol: "babyfrog",
    name: "BabyFrog",
  },
  {
    id: "babyharmony",
    symbol: "babyharmony",
    name: "BabyHarmony",
  },
  {
    id: "baby-jeju",
    symbol: "bbjeju",
    name: "Baby Jeju",
  },
  {
    id: "baby-kishu",
    symbol: "babykishu",
    name: "Baby Kishu",
  },
  {
    id: "babykitty",
    symbol: "BabyKitty",
    name: "BabyKitty",
  },
  {
    id: "babykraken",
    symbol: "krakbaby",
    name: "BabyKraken",
  },
  {
    id: "baby-kshark",
    symbol: "bks",
    name: "Baby KShark",
  },
  {
    id: "babylink",
    symbol: "bblink",
    name: "BabyLink",
  },
  {
    id: "baby-lion",
    symbol: "bln",
    name: "Baby Lion",
  },
  {
    id: "babylondao",
    symbol: "bby",
    name: "BabylonDAO",
  },
  {
    id: "babylondon",
    symbol: "babylondon",
    name: "BabyLondon",
  },
  {
    id: "babylon-finance",
    symbol: "babl",
    name: "Babylon Finance",
  },
  {
    id: "babylons",
    symbol: "babi",
    name: "Babylons",
  },
  {
    id: "baby-matic",
    symbol: "babymatic",
    name: "Baby Matic",
  },
  {
    id: "baby-meta",
    symbol: "babymeta",
    name: "Baby Meta",
  },
  {
    id: "baby-mind",
    symbol: "bmnd",
    name: "Baby Mind",
  },
  {
    id: "baby-moon-floki",
    symbol: "floki",
    name: "Baby Moon Floki",
  },
  {
    id: "baby-moon-wolf",
    symbol: "babywolf",
    name: "Baby Moon Wolf",
  },
  {
    id: "baby-o-baby",
    symbol: "bob",
    name: "Baby o Baby",
  },
  {
    id: "baby-pancake",
    symbol: "bpcake",
    name: "Baby Pancake",
  },
  {
    id: "baby-panda",
    symbol: "bpanda",
    name: "Baby Panda",
  },
  {
    id: "babypenguin",
    symbol: "bpeng",
    name: "BabyPenguin",
  },
  {
    id: "baby-pig-token",
    symbol: "babypig",
    name: "Baby Pig Token",
  },
  {
    id: "baby-poocoin",
    symbol: "babypoo",
    name: "Baby Poocoin",
  },
  {
    id: "babypumpkin-finance",
    symbol: "bump",
    name: "BabyPumpkin Finance",
  },
  {
    id: "babypunks",
    symbol: "bpunks",
    name: "BabyPunks",
  },
  {
    id: "babyquick",
    symbol: "babyquick",
    name: "BabyQuick",
  },
  {
    id: "baby-ripple",
    symbol: "BabyXRP",
    name: "Baby Ripple",
  },
  {
    id: "baby-ryukyu-inu",
    symbol: "brki",
    name: "Baby Ryukyu Inu",
  },
  {
    id: "babysafemoon",
    symbol: "bsfm",
    name: "BabySafeMoon",
  },
  {
    id: "baby-saitama",
    symbol: "babysaitama",
    name: "Baby Saitama",
  },
  {
    id: "baby-samo-coin",
    symbol: "baby",
    name: "Baby Samo Coin",
  },
  {
    id: "babysatoshi",
    symbol: "bsatoshi",
    name: "BabySatoshi",
  },
  {
    id: "baby-satoshi",
    symbol: "sats",
    name: "Baby Satoshi",
  },
  {
    id: "baby-schrodinger-coin",
    symbol: "babydinger",
    name: "Baby Schrodinger Coin",
  },
  {
    id: "baby-shark",
    symbol: "shark",
    name: "Baby Shark",
  },
  {
    id: "baby-shark-finance",
    symbol: "bbs",
    name: "Baby-Shark.Finance",
  },
  {
    id: "baby-shark-inu",
    symbol: "dododo",
    name: "Baby Shark Inu",
  },
  {
    id: "baby-shark-tank",
    symbol: "bashtank",
    name: "Baby Shark Tank",
  },
  {
    id: "baby-shiba",
    symbol: "bhiba",
    name: "Baby Shiba",
  },
  {
    id: "baby-shiba-coin",
    symbol: "babyshiba",
    name: "Baby Shiba Coin",
  },
  {
    id: "baby-shiba-dot",
    symbol: "bsd",
    name: "Baby Shiba Dot",
  },
  {
    id: "baby-shiba-inu",
    symbol: "babyshibainu",
    name: "Baby Shiba Inu",
  },
  {
    id: "baby-shiba-rocket",
    symbol: "bshibr",
    name: "Baby Shiba Rocket",
  },
  {
    id: "babyshibby-inu",
    symbol: "babyshib",
    name: "BabyShibby Inu",
  },
  {
    id: "baby-shibnobi",
    symbol: "babyshinja",
    name: "Baby Shibnobi",
  },
  {
    id: "baby-squid-games",
    symbol: "squids",
    name: "Baby Squid Games",
  },
  {
    id: "baby-starlink-doge",
    symbol: "starlinkdoge",
    name: "Baby Starlink Doge",
  },
  {
    id: "babysun",
    symbol: "babysun",
    name: "BabySun",
  },
  {
    id: "babyswap",
    symbol: "baby",
    name: "BabySwap",
  },
  {
    id: "babytigergold",
    symbol: "babytiger",
    name: "BabyTigerGold",
  },
  {
    id: "baby-tiger-king",
    symbol: "babytk",
    name: "Baby Tiger King",
  },
  {
    id: "baby-token",
    symbol: "baby",
    name: "Baby Token",
  },
  {
    id: "babytraderjoe",
    symbol: "bjoe",
    name: "BabyTraderJoe",
  },
  {
    id: "baby-trump",
    symbol: "babytrump",
    name: "Baby Trump",
  },
  {
    id: "babyuni",
    symbol: "babyuni",
    name: "BabyUni",
  },
  {
    id: "babyusdt",
    symbol: "babyusdt",
    name: "BabyUSDT",
  },
  {
    id: "babywakandainu",
    symbol: "babywkd",
    name: "Babywakandainu",
  },
  {
    id: "baby-white-hamster",
    symbol: "$bwh",
    name: "Baby White Hamster",
  },
  {
    id: "babywhitetiger",
    symbol: "bwt",
    name: "BabyWhiteTiger",
  },
  {
    id: "baby-woj",
    symbol: "bwj",
    name: "Baby WOJ",
  },
  {
    id: "babyxape",
    symbol: "babyx",
    name: "BabyXape",
  },
  {
    id: "babyxrp",
    symbol: "bbyxrp",
    name: "BabyXrp",
  },
  {
    id: "backed-protocol",
    symbol: "bakt",
    name: "Backed Protocol",
  },
  {
    id: "backpacker-coin",
    symbol: "bpc",
    name: "BackPacker Coin",
  },
  {
    id: "bacon",
    symbol: "bacon",
    name: "BACON",
  },
  {
    id: "baconcoin",
    symbol: "bak",
    name: "BaconCoin",
  },
  {
    id: "bacondao",
    symbol: "bacon",
    name: "BaconDAO",
  },
  {
    id: "baconswap",
    symbol: "bacon",
    name: "BaconSwap",
  },
  {
    id: "baddest-alpha-ape-bundle",
    symbol: "aped",
    name: "Baddest Alpha Ape Bundle",
  },
  {
    id: "badger-dao",
    symbol: "badger",
    name: "Badger DAO",
  },
  {
    id: "badger-sett-badger",
    symbol: "bbadger",
    name: "Badger Sett Badger",
  },
  {
    id: "badger-sett-digg",
    symbol: "bdigg",
    name: "Badger Sett Digg",
  },
  {
    id: "bae",
    symbol: "bae",
    name: "Bae",
  },
  {
    id: "baepay",
    symbol: "baepay",
    name: "BAEPAY",
  },
  {
    id: "bafe-io",
    symbol: "bafe",
    name: "Bafe.io",
  },
  {
    id: "bafi-finance-token",
    symbol: "bafi",
    name: "Bafi Finance Token",
  },
  {
    id: "bagel",
    symbol: "bagel",
    name: "Bagels Finance",
  },
  {
    id: "bagswap",
    symbol: "bswap",
    name: "BagSwap",
  },
  {
    id: "baguette",
    symbol: "bag",
    name: "Baguette",
  },
  {
    id: "baguette-token",
    symbol: "bgtt",
    name: "Baguette Token",
  },
  {
    id: "bagus-wallet",
    symbol: "bg",
    name: "Bagus Wallet",
  },
  {
    id: "baitcoin",
    symbol: "bait",
    name: "Baitcoin",
  },
  {
    id: "bakc-vault-nftx",
    symbol: "bakc",
    name: "BAKC Vault (NFTX)",
  },
  {
    id: "bake-coin",
    symbol: "bakecoin",
    name: "Bake Coin",
  },
  {
    id: "bakedcake",
    symbol: "bakedcake",
    name: "BakedCake Finance",
  },
  {
    id: "baked-token",
    symbol: "baked",
    name: "Baked Token",
  },
  {
    id: "baker-guild",
    symbol: "baker",
    name: "Baker Guild",
  },
  {
    id: "bakerytoken",
    symbol: "bake",
    name: "BakerySwap",
  },
  {
    id: "bakerytools",
    symbol: "tbake",
    name: "BakeryTools",
  },
  {
    id: "bake-up",
    symbol: "$bakeup",
    name: "Bake Up",
  },
  {
    id: "bakumatsu-swap-finance",
    symbol: "ryma",
    name: "Bakumatsu Swap Finance",
  },
  {
    id: "balanced-dollars",
    symbol: "bnUSD",
    name: "Balanced Dollars",
  },
  {
    id: "balancer",
    symbol: "bal",
    name: "Balancer",
  },
  {
    id: "balance-tokens",
    symbol: "baln",
    name: "Balance Tokens",
  },
  {
    id: "balicoin",
    symbol: "bali",
    name: "Bali Coin",
  },
  {
    id: "balisari",
    symbol: "bst",
    name: "Balisari",
  },
  {
    id: "bali-social-integrated",
    symbol: "bsi",
    name: "Bali Social Integrated",
  },
  {
    id: "bali-token",
    symbol: "bli",
    name: "Bali Token",
  },
  {
    id: "balkari-token",
    symbol: "bkr",
    name: "Balkari Token",
  },
  {
    id: "ball-coin",
    symbol: "ball",
    name: "BALL Coin",
  },
  {
    id: "balloon-coin",
    symbol: "balo",
    name: "Balloon Coin",
  },
  {
    id: "ballotbox",
    symbol: "bbx",
    name: "Ballotbox",
  },
  {
    id: "ballswap",
    symbol: "bsp",
    name: "BallSwap",
  },
  {
    id: "ballswapper-accelerator-reflection-token",
    symbol: "bart",
    name: "Ballswapper Accelerator Reflection Token",
  },
  {
    id: "ball-token",
    symbol: "ball",
    name: "Ball Token",
  },
  {
    id: "balpha",
    symbol: "balpha",
    name: "bAlpha",
  },
  {
    id: "bamboo-coin",
    symbol: "bmbo",
    name: "Bamboo Coin",
  },
  {
    id: "bamboo-defi",
    symbol: "bamboo",
    name: "BambooDeFi",
  },
  {
    id: "bamboo-token-2",
    symbol: "bamboo",
    name: "Bamboo Token",
  },
  {
    id: "banana",
    symbol: "banana",
    name: "Banana",
  },
  {
    id: "banana-bucks",
    symbol: "bab",
    name: "Banana Bucks",
  },
  {
    id: "banana-finance",
    symbol: "banana",
    name: "Banana Finance",
  },
  {
    id: "bananatok",
    symbol: "bna",
    name: "BananaTok",
  },
  {
    id: "banana-token",
    symbol: "bnana",
    name: "Chimpion",
  },
  {
    id: "bananaz-club",
    symbol: "BANANAZ",
    name: "BANANAZ CLUB",
  },
  {
    id: "banano",
    symbol: "ban",
    name: "Banano",
  },
  {
    id: "banca",
    symbol: "banca",
    name: "Banca",
  },
  {
    id: "bancor",
    symbol: "bnt",
    name: "Bancor Network Token",
  },
  {
    id: "bancor-governance-token",
    symbol: "vbnt",
    name: "Bancor Governance Token",
  },
  {
    id: "bancor-wormhole",
    symbol: "bnt",
    name: "Bancor (Wormhole)",
  },
  {
    id: "band-protocol",
    symbol: "band",
    name: "Band Protocol",
  },
  {
    id: "bang-decentralized",
    symbol: "bang",
    name: "BANG Decentralized",
  },
  {
    id: "bank-btc",
    symbol: "bankbtc",
    name: "Bank BTC",
  },
  {
    id: "bankcoincash",
    symbol: "bcash",
    name: "BankCoin BCash",
  },
  {
    id: "bankera",
    symbol: "bnk",
    name: "Bankera",
  },
  {
    id: "bankerdoge",
    symbol: "banker",
    name: "BankerDoge",
  },
  {
    id: "bankers-dream",
    symbol: "bank$",
    name: "Bankers Dream",
  },
  {
    id: "banketh",
    symbol: "banketh",
    name: "BankEth",
  },
  {
    id: "bankex",
    symbol: "bkx",
    name: "BANKEX",
  },
  {
    id: "bankless-bed-index",
    symbol: "bed",
    name: "Bankless BED Index",
  },
  {
    id: "bankless-dao",
    symbol: "bank",
    name: "Bankless DAO",
  },
  {
    id: "bankless-defi-innovation-index",
    symbol: "gmi",
    name: "Bankless DeFi Innovation Index",
  },
  {
    id: "banklife",
    symbol: "lib",
    name: "Banklife",
  },
  {
    id: "bankroll",
    symbol: "bankr",
    name: "BankRoll",
  },
  {
    id: "bankroll-extended-token",
    symbol: "bnkrx",
    name: "Bankroll Extended Token",
  },
  {
    id: "bankroll-network",
    symbol: "bnkr",
    name: "Bankroll Network",
  },
  {
    id: "bankroll-vault",
    symbol: "vlt",
    name: "Bankroll Vault",
  },
  {
    id: "banksea",
    symbol: "kse",
    name: "Banksea",
  },
  {
    id: "banksocial",
    symbol: "bsl",
    name: "BankSocial",
  },
  {
    id: "bankwupt",
    symbol: "bankwupt",
    name: "Bankwupt",
  },
  {
    id: "banque-universal",
    symbol: "cbu",
    name: "Banque Universal",
  },
  {
    id: "bantu",
    symbol: "xbn",
    name: "Bantu",
  },
  {
    id: "bao-finance",
    symbol: "bao",
    name: "Bao Finance",
  },
  {
    id: "barbecueswap",
    symbol: "bbq",
    name: "BarbecueSwap",
  },
  {
    id: "bare",
    symbol: "bare",
    name: "BARE",
  },
  {
    id: "barnbridge",
    symbol: "bond",
    name: "BarnBridge",
  },
  {
    id: "barrel",
    symbol: "barrel",
    name: "Barrel",
  },
  {
    id: "barter",
    symbol: "brtr",
    name: "Barter",
  },
  {
    id: "bartertrade",
    symbol: "bart",
    name: "BarterTrade",
  },
  {
    id: "based-gold",
    symbol: "bgld",
    name: "Based Gold",
  },
  {
    id: "based-loans-ownership",
    symbol: "blo",
    name: "Based Loans Ownership",
  },
  {
    id: "based-money",
    symbol: "$based",
    name: "Based Money",
  },
  {
    id: "based-token",
    symbol: "bdc",
    name: "Based Token",
  },
  {
    id: "base-protocol",
    symbol: "base",
    name: "Base Protocol",
  },
  {
    id: "base-reward-token",
    symbol: "brt",
    name: "Base Reward Token",
  },
  {
    id: "basic",
    symbol: "basic",
    name: "BASIC",
  },
  {
    id: "basic-attention-token",
    symbol: "bat",
    name: "Basic Attention Token",
  },
  {
    id: "basic-attention-token-wormhole",
    symbol: "bat",
    name: "Basic Attention Token (Wormhole)",
  },
  {
    id: "basid-coin",
    symbol: "basid",
    name: "Basid Coin",
  },
  {
    id: "basis-bond",
    symbol: "bab",
    name: "Basis Bond",
  },
  {
    id: "basis-cash",
    symbol: "bac",
    name: "Basis Cash",
  },
  {
    id: "basis-coin-cash",
    symbol: "bcc",
    name: "Basis Coin Cash",
  },
  {
    id: "basiscoin-share",
    symbol: "bcs",
    name: "Basis Coin Share",
  },
  {
    id: "basis-dollar",
    symbol: "bsd",
    name: "Basis Dollar",
  },
  {
    id: "basis-dollar-share",
    symbol: "bsds",
    name: "Basis Dollar Share",
  },
  {
    id: "basis-gold",
    symbol: "bsg",
    name: "Basis Gold",
  },
  {
    id: "basis-gold-share-heco",
    symbol: "bags",
    name: "Basis Gold Share (Heco)",
  },
  {
    id: "basis-markets",
    symbol: "basis",
    name: "basis.markets",
  },
  {
    id: "basis-share",
    symbol: "bas",
    name: "Basis Share",
  },
  {
    id: "basketball-legends",
    symbol: "BBL",
    name: "Basketball Legends",
  },
  {
    id: "basketcoin",
    symbol: "bskt",
    name: "BasketCoin",
  },
  {
    id: "basketdao",
    symbol: "bask",
    name: "BasketDAO",
  },
  {
    id: "basketdao-defi-index",
    symbol: "bdi",
    name: "BasketDAO DeFi Index",
  },
  {
    id: "bast",
    symbol: "bast",
    name: "Bast",
  },
  {
    id: "bata",
    symbol: "bta",
    name: "Bata",
  },
  {
    id: "batman",
    symbol: "batman",
    name: "Batman",
  },
  {
    id: "batorrent",
    symbol: "ba",
    name: "BaTorrent",
  },
  {
    id: "battle-esports-coin",
    symbol: "bes",
    name: "battle esports coin",
  },
  {
    id: "battle-hero",
    symbol: "bath",
    name: "Battle Hero",
  },
  {
    id: "battle-of-guardians-share",
    symbol: "bgs",
    name: "Battle of Guardians Share",
  },
  {
    id: "battle-pets",
    symbol: "pet",
    name: "Battle Pets",
  },
  {
    id: "battleroyaletoken",
    symbol: "brtk",
    name: "BattleRoyaleToken",
  },
  {
    id: "battle-saga",
    symbol: "btl",
    name: "Battle Saga",
  },
  {
    id: "bauble",
    symbol: "bab",
    name: "Bauble",
  },
  {
    id: "bayc-history",
    symbol: "sweep",
    name: "BAYC History -The Great Floor Sweep",
  },
  {
    id: "bayc-vault-nftx",
    symbol: "bayc",
    name: "BAYC Vault (NFTX)",
  },
  {
    id: "bbscoin",
    symbol: "bbs",
    name: "BBSCoin",
  },
  {
    id: "bchpad",
    symbol: "bpad",
    name: "BCHPad",
  },
  {
    id: "bcpay-fintech",
    symbol: "bcpay",
    name: "BCPAY FinTech",
  },
  {
    id: "b-cube-ai",
    symbol: "bcube",
    name: "B-cube.ai",
  },
  {
    id: "bcv",
    symbol: "bcv",
    name: "BitCapitalVendor",
  },
  {
    id: "bdefi",
    symbol: "bdefi",
    name: "bDeFi",
  },
  {
    id: "bdollar",
    symbol: "bdo",
    name: "bDollar",
  },
  {
    id: "bdollar-share",
    symbol: "sbdo",
    name: "bDollar Share",
  },
  {
    id: "beachboyz",
    symbol: "boyz",
    name: "BeachBoyz",
  },
  {
    id: "beach-token",
    symbol: "beach",
    name: "Beach Token",
  },
  {
    id: "beach-token-bsc",
    symbol: "beach",
    name: "Beach Token BSC",
  },
  {
    id: "beacon",
    symbol: "becn",
    name: "Beacon",
  },
  {
    id: "beaglecake",
    symbol: "beaglecake",
    name: "BeagleCake",
  },
  {
    id: "beam",
    symbol: "beam",
    name: "BEAM",
  },
  {
    id: "beamswap",
    symbol: "glint",
    name: "BeamSwap",
  },
  {
    id: "bean",
    symbol: "bean",
    name: "Bean",
  },
  {
    id: "bean-cash",
    symbol: "bitb",
    name: "Bean Cash",
  },
  {
    id: "bearn-fi",
    symbol: "bfi",
    name: "Bearn.fi",
  },
  {
    id: "beast-masters",
    symbol: "master",
    name: "Beast Masters",
  },
  {
    id: "beast-token",
    symbol: "beast",
    name: "Beast Token",
  },
  {
    id: "beatbind",
    symbol: "bbnd",
    name: "BeatBind",
  },
  {
    id: "beatify",
    symbol: "song",
    name: "Beatify",
  },
  {
    id: "beatzcoin",
    symbol: "btzc",
    name: "BeatzCoin",
  },
  {
    id: "beavis-and-butthead",
    symbol: "bbh",
    name: "Beavis and Butthead",
  },
  {
    id: "bebop-inu",
    symbol: "bebop-inu",
    name: "Bebop Inu",
  },
  {
    id: "becoswap-token",
    symbol: "beco",
    name: "BecoSwap Token",
  },
  {
    id: "bedrock",
    symbol: "rock",
    name: "Bedrock",
  },
  {
    id: "beechat",
    symbol: "chat",
    name: "BeeChat",
  },
  {
    id: "beefy-finance",
    symbol: "bifi",
    name: "Beefy.Finance",
  },
  {
    id: "beekan",
    symbol: "bkbt",
    name: "BeeKan / Beenews",
  },
  {
    id: "beenode",
    symbol: "bnode",
    name: "Beenode",
  },
  {
    id: "beer-inu",
    symbol: "beer",
    name: "Beer Inu",
  },
  {
    id: "beer-money",
    symbol: "beer",
    name: "Beer Money",
  },
  {
    id: "bee-safe",
    symbol: "BSAFE",
    name: "Bee Safe",
  },
  {
    id: "beethoven-x",
    symbol: "beets",
    name: "Beethoven X",
  },
  {
    id: "beetle-coin",
    symbol: "beet",
    name: "Beetle Coin",
  },
  {
    id: "beglobal-finance",
    symbol: "glb",
    name: "BeGlobal Finance",
  },
  {
    id: "beholder",
    symbol: "eye",
    name: "Behodler",
  },
  {
    id: "bela",
    symbol: "aqua",
    name: "Bela Aqua",
  },
  {
    id: "beldex",
    symbol: "bdx",
    name: "Beldex",
  },
  {
    id: "believer",
    symbol: "blvr",
    name: "BELIEVER",
  },
  {
    id: "belifex",
    symbol: "befx",
    name: "Belifex",
  },
  {
    id: "belka",
    symbol: "BLK",
    name: "Belka",
  },
  {
    id: "bella-protocol",
    symbol: "bel",
    name: "Bella Protocol",
  },
  {
    id: "bellcoin",
    symbol: "bell",
    name: "Bellcoin",
  },
  {
    id: "belrium",
    symbol: "bel",
    name: "Belrium",
  },
  {
    id: "belt",
    symbol: "belt",
    name: "Belt",
  },
  {
    id: "beluga-fi",
    symbol: "beluga",
    name: "Beluga.fi",
  },
  {
    id: "bem",
    symbol: "bemt",
    name: "BEM",
  },
  {
    id: "bemil-coin",
    symbol: "bem",
    name: "Bemil Coin",
  },
  {
    id: "benative",
    symbol: "bnv",
    name: "BeNative",
  },
  {
    id: "benchmark-protocol",
    symbol: "mark",
    name: "Benchmark Protocol",
  },
  {
    id: "benchmark-protocol-governance-token",
    symbol: "bend",
    name: "Benchmark Protocol Governance Token",
  },
  {
    id: "benddao",
    symbol: "bend",
    name: "BendDao",
  },
  {
    id: "benepit",
    symbol: "bnp",
    name: "BenePit",
  },
  {
    id: "benqi",
    symbol: "qi",
    name: "BENQI",
  },
  {
    id: "bent-finance",
    symbol: "bent",
    name: "Bent Finance",
  },
  {
    id: "benzene",
    symbol: "bzn",
    name: "Benzene",
  },
  {
    id: "bep20-leo",
    symbol: "bLEO",
    name: "BEP20 LEO",
  },
  {
    id: "bepay",
    symbol: "becoin",
    name: "bePAY Finance",
  },
  {
    id: "bepis",
    symbol: "BEPIS",
    name: "BEPIS",
  },
  {
    id: "bepro-network",
    symbol: "bepro",
    name: "BEPRO Network",
  },
  {
    id: "bernard",
    symbol: "bern",
    name: "Bernard",
  },
  {
    id: "berry",
    symbol: "Berry",
    name: "Berry",
  },
  {
    id: "berry-data",
    symbol: "bry",
    name: "Berry Data",
  },
  {
    id: "berryswap",
    symbol: "berry",
    name: "BerrySwap",
  },
  {
    id: "berry-vault-nftx",
    symbol: "berry",
    name: "BERRY Vault (NFTX)",
  },
  {
    id: "berserk-inu",
    symbol: "berserk",
    name: "Berserk Inu",
  },
  {
    id: "berylbit",
    symbol: "brb",
    name: "BerylBit",
  },
  {
    id: "beshare-token",
    symbol: "bst",
    name: "Beshare Token",
  },
  {
    id: "bestay",
    symbol: "bsy",
    name: "Bestay",
  },
  {
    id: "beta-finance",
    symbol: "beta",
    name: "Beta Finance",
  },
  {
    id: "betapulsartoken",
    symbol: "bpul",
    name: "BetaPulsarToken",
  },
  {
    id: "betdice",
    symbol: "dice",
    name: "BetDice",
  },
  {
    id: "betherchip",
    symbol: "bec",
    name: "Betherchip",
  },
  {
    id: "bethereum",
    symbol: "bether",
    name: "Bethereum",
  },
  {
    id: "betller-coin",
    symbol: "btllr",
    name: "Betller Coin",
  },
  {
    id: "betrium",
    symbol: "btrm",
    name: "Betrium",
  },
  {
    id: "betswamp",
    symbol: "bets",
    name: "Betswamp",
  },
  {
    id: "betswap-gg",
    symbol: "bsgg",
    name: "Betswap.gg",
  },
  {
    id: "better-money",
    symbol: "better",
    name: "Better Money",
  },
  {
    id: "betu",
    symbol: "betu",
    name: "Betu",
  },
  {
    id: "betxoin",
    symbol: "betxc",
    name: "Betxoin",
  },
  {
    id: "beverage",
    symbol: "beverage",
    name: "BEVERAGE",
  },
  {
    id: "beverage-token",
    symbol: "drink",
    name: "Beverage Token",
  },
  {
    id: "bevo-digital-art-token",
    symbol: "bevo",
    name: "Bevo Digital Art Token",
  },
  {
    id: "beyondcoin",
    symbol: "bynd",
    name: "Beyondcoin",
  },
  {
    id: "beyond-finance",
    symbol: "byn",
    name: "BeyondFi",
  },
  {
    id: "beyond-protocol",
    symbol: "bp",
    name: "Beyond Protocol",
  },
  {
    id: "beyond-the-scene-coin",
    symbol: "btsc",
    name: "Beyond The Scene Coin",
  },
  {
    id: "bezant",
    symbol: "bznt",
    name: "Bezant",
  },
  {
    id: "bezoge-earth",
    symbol: "bezoge",
    name: "Bezoge Earth",
  },
  {
    id: "bezop",
    symbol: "bez",
    name: "Bezop",
  },
  {
    id: "bfg-token",
    symbol: "bfg",
    name: "BFG Token",
  },
  {
    id: "bficoin",
    symbol: "bfic",
    name: "Bficoin",
  },
  {
    id: "bfk-warzone",
    symbol: "bfk",
    name: "BFK WARZONE",
  },
  {
    id: "bgan-vault-nftx",
    symbol: "bgan",
    name: "BGAN Vault (NFTX)",
  },
  {
    id: "bgogo",
    symbol: "bgg",
    name: "Bgogo Token",
  },
  {
    id: "bgov",
    symbol: "bgov",
    name: "BGOV",
  },
  {
    id: "bholdus-token",
    symbol: "bho",
    name: "Bholdus Token",
  },
  {
    id: "biblepay",
    symbol: "bbp",
    name: "BiblePay",
  },
  {
    id: "bibox-token",
    symbol: "bix",
    name: "Bibox Token",
  },
  {
    id: "biconomy",
    symbol: "bico",
    name: "Biconomy",
  },
  {
    id: "biconomy-exchange-token",
    symbol: "bit",
    name: "Biconomy Exchange Token",
  },
  {
    id: "bidao",
    symbol: "bid",
    name: "Bidao",
  },
  {
    id: "biden",
    symbol: "biden",
    name: "BIDEN Token",
  },
  {
    id: "bidesk",
    symbol: "bdk",
    name: "Bidesk",
  },
  {
    id: "bidipass",
    symbol: "bdp",
    name: "BidiPass",
  },
  {
    id: "bifi",
    symbol: "bifi",
    name: "BiFi",
  },
  {
    id: "bifrost",
    symbol: "bfc",
    name: "Bifrost",
  },
  {
    id: "bifrost-native-coin",
    symbol: "bnc",
    name: "Bifrost Native Coin",
  },
  {
    id: "bigbang-core",
    symbol: "bbc",
    name: "BigBang Core",
  },
  {
    id: "bigbang-game",
    symbol: "bbgc",
    name: "BigBang Game",
  },
  {
    id: "bigbom-eco",
    symbol: "bbo",
    name: "Bigbom",
  },
  {
    id: "big-brain-capital-dao",
    symbol: "bbc dao",
    name: "Big Brain Capital DAO",
  },
  {
    id: "bigdata-cash",
    symbol: "bdcash",
    name: "BigdataCash",
  },
  {
    id: "big-data-protocol",
    symbol: "bdp",
    name: "Big Data Protocol",
  },
  {
    id: "big-defi-energy",
    symbol: "bde",
    name: "Big Defi Energy",
  },
  {
    id: "big-digital-shares",
    symbol: "bds",
    name: "Big Digital Shares",
  },
  {
    id: "big-dog-coin",
    symbol: "bdog",
    name: "Big Dog Coin",
  },
  {
    id: "big-eth",
    symbol: "bigeth",
    name: "BIG ETH",
  },
  {
    id: "bigfoot",
    symbol: "foot",
    name: "BIGFOOT",
  },
  {
    id: "big-fund-capital-dao",
    symbol: "bfc",
    name: "Big Fund Capital DAO",
  },
  {
    id: "big-league",
    symbol: "bglg",
    name: "Big League",
  },
  {
    id: "bigo-token",
    symbol: "bigo",
    name: "BIGOCOIN",
  },
  {
    id: "bigshortbets",
    symbol: "bigsb",
    name: "BigShortBets",
  },
  {
    id: "bigwinner",
    symbol: "big",
    name: "Bigwinner",
  },
  {
    id: "biitgatti",
    symbol: "bitgatti",
    name: "Bitgatti",
  },
  {
    id: "bikini-finance",
    symbol: "BIKINI",
    name: "Bikini Finance",
  },
  {
    id: "bilaxy-token",
    symbol: "bia",
    name: "Bilaxy Token",
  },
  {
    id: "bilira",
    symbol: "tryb",
    name: "BiLira",
  },
  {
    id: "billionaire-plus",
    symbol: "bplus",
    name: "Billionaire Plus",
  },
  {
    id: "billionhappiness",
    symbol: "bhc",
    name: "BillionHappiness",
  },
  {
    id: "bill-token",
    symbol: "bill",
    name: "Bill Token",
  },
  {
    id: "bimp-finance",
    symbol: "bimp",
    name: "Bimp Finance",
  },
  {
    id: "binahero",
    symbol: "hero",
    name: "BinaHero",
  },
  {
    id: "binahunter",
    symbol: "bhunt",
    name: "BinaHunter",
  },
  {
    id: "binamars",
    symbol: "bmars",
    name: "Binamars",
  },
  {
    id: "binamars-game",
    symbol: "bgame",
    name: "Binamars Game",
  },
  {
    id: "binamon",
    symbol: "bmon",
    name: "Binamon",
  },
  {
    id: "binance8",
    symbol: "b8",
    name: "Binance8",
  },
  {
    id: "binance-bitcoin",
    symbol: "btcb",
    name: "Binance Bitcoin",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "Binance Coin",
  },
  {
    id: "binance-coin-wormhole",
    symbol: "bnb",
    name: "Binance Coin (Wormhole)",
  },
  {
    id: "binancedog",
    symbol: "bidog",
    name: "Binancedog",
  },
  {
    id: "binance-ecosystem-value",
    symbol: "bev",
    name: "Binance Ecosystem Value",
  },
  {
    id: "binance-eth",
    symbol: "beth",
    name: "Binance ETH staking",
  },
  {
    id: "binancehodl",
    symbol: "bihodl",
    name: "BinanceHODL",
  },
  {
    id: "binanceidr",
    symbol: "bidr",
    name: "BIDR",
  },
  {
    id: "binance-multi-chain-capital",
    symbol: "bmcc",
    name: "Binance Multi-Chain Capital",
  },
  {
    id: "binance-peg-avalanche",
    symbol: "avax",
    name: "Binance-Peg Avalanche",
  },
  {
    id: "binance-peg-bitcoin-cash",
    symbol: "bch",
    name: "Binance-Peg Bitcoin Cash",
  },
  {
    id: "binance-peg-cardano",
    symbol: "ada",
    name: "Binance-Peg Cardano",
  },
  {
    id: "binance-peg-dogecoin",
    symbol: "doge",
    name: "Binance-Peg Dogecoin",
  },
  {
    id: "binance-peg-eos",
    symbol: "eos",
    name: "Binance-Peg EOS",
  },
  {
    id: "binance-peg-filecoin",
    symbol: "fil",
    name: "Binance-Peg Filecoin",
  },
  {
    id: "binance-peg-firo",
    symbol: "firo",
    name: "Binance-Peg Firo",
  },
  {
    id: "binance-peg-iotex",
    symbol: "iotx",
    name: "Binance-Peg IoTeX",
  },
  {
    id: "binance-peg-litecoin",
    symbol: "ltc",
    name: "Binance-Peg Litecoin",
  },
  {
    id: "binance-peg-ontology",
    symbol: "ont",
    name: "Binance-Peg Ontology",
  },
  {
    id: "binance-peg-polkadot",
    symbol: "dot",
    name: "Binance-Peg Polkadot",
  },
  {
    id: "binance-peg-xrp",
    symbol: "xrp",
    name: "Binance-Peg XRP",
  },
  {
    id: "binance-smart-chain-girl",
    symbol: "bscgirl",
    name: "Binance Smart Chain Girl",
  },
  {
    id: "binance-usd",
    symbol: "busd",
    name: "Binance USD",
  },
  {
    id: "binance-usd-wormhole",
    symbol: "busdet",
    name: "Binance USD (Wormhole)",
  },
  {
    id: "binance-usd-wormhole-from-bsc",
    symbol: "busdbs",
    name: "Binance USD (Wormhole from BSC)",
  },
  {
    id: "binance-wrapped-btc",
    symbol: "bbtc",
    name: "Binance Wrapped BTC",
  },
  {
    id: "binanomics",
    symbol: "bnm",
    name: "Binanomics",
  },
  {
    id: "binapet",
    symbol: "bpet",
    name: "Binapet",
  },
  {
    id: "binarium",
    symbol: "bin",
    name: "Binarium",
  },
  {
    id: "binary-cat",
    symbol: "kitty",
    name: "Binary Cat",
  },
  {
    id: "binaryx",
    symbol: "bnx",
    name: "BinaryX",
  },
  {
    id: "bincentive",
    symbol: "bcnt",
    name: "Bincentive",
  },
  {
    id: "binemon",
    symbol: "bin",
    name: "Binemon",
  },
  {
    id: "bingo-cash",
    symbol: "bgo",
    name: "Bingo Cash",
  },
  {
    id: "bingo-doge",
    symbol: "bdoge",
    name: "Bingo Doge",
  },
  {
    id: "bingo-share",
    symbol: "sbgo",
    name: "Bingo Share",
  },
  {
    id: "bingus-network",
    symbol: "bingus",
    name: "Bingus Network",
  },
  {
    id: "binjit-coin",
    symbol: "bnj",
    name: "Binjit Coin",
  },
  {
    id: "binom-protocol",
    symbol: "binom",
    name: "Binom Protocol",
  },
  {
    id: "binopoly",
    symbol: "bino",
    name: "Binopoly",
  },
  {
    id: "binosaurs",
    symbol: "binosaurs",
    name: "Binosaurs",
  },
  {
    id: "binstarter",
    symbol: "bsr",
    name: "BinStarter",
  },
  {
    id: "bintex-futures",
    symbol: "bntx",
    name: "Bintex Futures",
  },
  {
    id: "biocrypt",
    symbol: "bio",
    name: "BioCrypt",
  },
  {
    id: "biokkoin",
    symbol: "bkkg",
    name: "Biokkoin",
  },
  {
    id: "biopassport",
    symbol: "biot",
    name: "Bio Passport",
  },
  {
    id: "biopset",
    symbol: "biop",
    name: "BIOPset",
  },
  {
    id: "bios",
    symbol: "bios",
    name: "0x_nodes",
  },
  {
    id: "biotron",
    symbol: "btrn",
    name: "Biotron",
  },
  {
    id: "bip",
    symbol: "bip",
    name: "Minter",
  },
  {
    id: "birake",
    symbol: "bir",
    name: "Birake",
  },
  {
    id: "birb",
    symbol: "birb",
    name: "Birb",
  },
  {
    id: "birdchain",
    symbol: "bird",
    name: "Birdchain",
  },
  {
    id: "bird-money",
    symbol: "bird",
    name: "Bird.Money",
  },
  {
    id: "birdy-finance",
    symbol: "bird",
    name: "Birdy Finance",
  },
  {
    id: "bishares",
    symbol: "bison",
    name: "BiShares",
  },
  {
    id: "bishoku-inu",
    symbol: "bishoku",
    name: "Bishoku Inu",
  },
  {
    id: "bishu-finance",
    symbol: "bishufi",
    name: "Bishu Finance",
  },
  {
    id: "bismuth",
    symbol: "bis",
    name: "Bismuth",
  },
  {
    id: "bistroo",
    symbol: "bist",
    name: "Bistroo",
  },
  {
    id: "biswap",
    symbol: "bsw",
    name: "Biswap",
  },
  {
    id: "biswap-token",
    symbol: "biswap",
    name: "Biswap Token",
  },
  {
    id: "bit2me",
    symbol: "b2m",
    name: "Bit2Me",
  },
  {
    id: "bitacium",
    symbol: "xbond",
    name: "Bitacium",
  },
  {
    id: "bitalgo",
    symbol: "alg",
    name: "Bitalgo",
  },
  {
    id: "bitant",
    symbol: "bitant",
    name: "BitANT",
  },
  {
    id: "bitau",
    symbol: "bau",
    name: "BitAU",
  },
  {
    id: "bitball",
    symbol: "btb",
    name: "Bitball",
  },
  {
    id: "bitball-treasure",
    symbol: "btrs",
    name: "Bitball Treasure",
  },
  {
    id: "bitbar",
    symbol: "btb",
    name: "Bitbar",
  },
  {
    id: "bitbase-token",
    symbol: "btbs",
    name: "BitBase Token",
  },
  {
    id: "bitberry-token",
    symbol: "bbr",
    name: "Bitberry Token",
  },
  {
    id: "bitblocks-finance",
    symbol: "bbkfi",
    name: "BitBlocks Finance",
  },
  {
    id: "bitblocks-fire",
    symbol: "bfire",
    name: "Bitblocks Fire",
  },
  {
    id: "bitblocks-project",
    symbol: "bbk",
    name: "BitBlocks",
  },
  {
    id: "bitbook-gambling",
    symbol: "bxk",
    name: "Bitbook Gambling",
  },
  {
    id: "bitbook-token",
    symbol: "bbt",
    name: "BitBook",
  },
  {
    id: "bitboost",
    symbol: "bbt",
    name: "BitBoost",
  },
  {
    id: "bitbucks",
    symbol: "bitbucks",
    name: "BitBucks",
  },
  {
    id: "bitcanna",
    symbol: "bcna",
    name: "BitCanna",
  },
  {
    id: "bitcarecoin",
    symbol: "bcare",
    name: "BitCareCoin",
  },
  {
    id: "bitcash",
    symbol: "bitc",
    name: "BitCash",
  },
  {
    id: "bitcashpay-old",
    symbol: "bcp",
    name: "BitcashPay (Old)",
  },
  {
    id: "bitceo",
    symbol: "bceo",
    name: "bitCEO",
  },
  {
    id: "bitcherry",
    symbol: "bchc",
    name: "BitCherry",
  },
  {
    id: "bitcicoin",
    symbol: "bitci",
    name: "Bitcicoin",
  },
  {
    id: "bitclave",
    symbol: "cat",
    name: "BitClave",
  },
  {
    id: "bitcloud",
    symbol: "btdx",
    name: "Bitcloud",
  },
  {
    id: "bitclout",
    symbol: "deso",
    name: "Decentralized Social",
  },
  {
    id: "bitcny",
    symbol: "bitcny",
    name: "bitCNY",
  },
  {
    id: "bitcoffeen",
    symbol: "bff",
    name: "Bitcoffeen",
  },
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "bitcoin-2",
    symbol: "btc2",
    name: "Bitcoin 2",
  },
  {
    id: "bitcoin-adult",
    symbol: "btad",
    name: "Bitcoin Adult",
  },
  {
    id: "bitcoin-and-ethereum-standard-token",
    symbol: "best",
    name: "Bitcoin and Ethereum Standard Token",
  },
  {
    id: "bitcoin-anonymous",
    symbol: "btca",
    name: "Bitcoin Anonymous",
  },
  {
    id: "bitcoin-asia",
    symbol: "btca",
    name: "Bitcoin Asia",
  },
  {
    id: "bitcoin-atom",
    symbol: "bca",
    name: "Bitcoin Atom",
  },
  {
    id: "bitcoinbam",
    symbol: "btcbam",
    name: "BitcoinBam",
  },
  {
    id: "bitcoin-bep2",
    symbol: "btcb",
    name: "Bitcoin BEP2",
  },
  {
    id: "bitcoin-br",
    symbol: "BTCBR",
    name: "Bitcoin BR",
  },
  {
    id: "bitcoinbrand",
    symbol: "btcb",
    name: "BitcoinBrand",
  },
  {
    id: "bitcoin-cash",
    symbol: "bch",
    name: "Bitcoin Cash",
  },
  {
    id: "bitcoin-cash-sv",
    symbol: "bsv",
    name: "Bitcoin SV",
  },
  {
    id: "bitcoin-confidential",
    symbol: "bc",
    name: "Bitcoin Confidential",
  },
  {
    id: "bitcoin-cure",
    symbol: "byron",
    name: "Byron",
  },
  {
    id: "bitcoin-diamond",
    symbol: "bcd",
    name: "Bitcoin Diamond",
  },
  {
    id: "bitcoin-fast",
    symbol: "bcf",
    name: "Bitcoin Fast",
  },
  {
    id: "bitcoin-final",
    symbol: "btcf",
    name: "Bitcoin Final",
  },
  {
    id: "bitcoingenx",
    symbol: "bgx",
    name: "BitcoinGenX",
  },
  {
    id: "bitcoin-god",
    symbol: "god",
    name: "Bitcoin God",
  },
  {
    id: "bitcoin-gold",
    symbol: "btg",
    name: "Bitcoin Gold",
  },
  {
    id: "bitcoin-green",
    symbol: "bitg",
    name: "Bitcoin Green",
  },
  {
    id: "bitcoin-hd",
    symbol: "bhd",
    name: "Bitcoin HD",
  },
  {
    id: "bitcoin-hot",
    symbol: "bth",
    name: "Bitcoin Hot",
  },
  {
    id: "bitcoin-instant",
    symbol: "bti",
    name: "Bitcoin Instant",
  },
  {
    id: "bitcoin-interest",
    symbol: "bci",
    name: "Bitcoin Interest",
  },
  {
    id: "bitcoin-international",
    symbol: "btci",
    name: "Bitcoin International",
  },
  {
    id: "bitcoin-latinum",
    symbol: "ltnm",
    name: "Bitcoin Latinum",
  },
  {
    id: "bitcoin-lightning",
    symbol: "bltg",
    name: "Block-Logic",
  },
  {
    id: "bitcoinmoney",
    symbol: "bcm",
    name: "BitcoinMoney",
  },
  {
    id: "bitcoinmono",
    symbol: "btcmz",
    name: "BitcoinMono",
  },
  {
    id: "bitcoin-networks",
    symbol: "btcn",
    name: "Bitcoin Networks",
  },
  {
    id: "bitcoinnexx",
    symbol: "bnxx",
    name: "Bitcoinnexx",
  },
  {
    id: "bitcoin-one",
    symbol: "btcone",
    name: "BitCoin One",
  },
  {
    id: "bitcoin-pay",
    symbol: "btp",
    name: "Bitcoin Pay",
  },
  {
    id: "bitcoin-plus",
    symbol: "xbc",
    name: "Bitcoin Plus",
  },
  {
    id: "bitcoinprint",
    symbol: "btcp",
    name: "BitcoinPrint",
  },
  {
    id: "bitcoin-private",
    symbol: "btcp",
    name: "Bitcoin Private",
  },
  {
    id: "bitcoin-pro",
    symbol: "btcp",
    name: "Bitcoin Pro",
  },
  {
    id: "bitcoin-red",
    symbol: "btcred",
    name: "Bitcoin Red",
  },
  {
    id: "bitcoinregular",
    symbol: "btrl",
    name: "BitcoinRegular",
  },
  {
    id: "bitcoin-rhodium",
    symbol: "xrc",
    name: "xRhodium",
  },
  {
    id: "bitcoin-sb",
    symbol: "bsb",
    name: "Bitcoin SB",
  },
  {
    id: "bitcoin-scrypt",
    symbol: "btcs",
    name: "Bitcoin Scrypt",
  },
  {
    id: "bitcoinsov",
    symbol: "bsov",
    name: "BitcoinSoV",
  },
  {
    id: "bitcoinstaking",
    symbol: "bsk",
    name: "BitcoinStaking",
  },
  {
    id: "bitcoin-stash",
    symbol: "bsh",
    name: "Bitcoin Stash",
  },
  {
    id: "bitcoin-subsidium",
    symbol: "xbtx",
    name: "Bitcoin Subsidium",
  },
  {
    id: "bitcoin-token",
    symbol: "btct",
    name: "BitcoinToken",
  },
  {
    id: "bitcoin-trc20",
    symbol: "btct",
    name: "Bitcoin TRC20",
  },
  {
    id: "bitcoin-trust",
    symbol: "bct",
    name: "Bitcoin Trust",
  },
  {
    id: "bitcoin-ultra",
    symbol: "btcu",
    name: "BitcoinUltra",
  },
  {
    id: "bitcoin-unicorn",
    symbol: "btcui",
    name: "Bitcoin Unicorn",
  },
  {
    id: "bitcoinv",
    symbol: "btcv",
    name: "BitcoinV",
  },
  {
    id: "bitcoin-vault",
    symbol: "btcv",
    name: "Bitcoin Vault",
  },
  {
    id: "bitcoinvend",
    symbol: "bcvt",
    name: "BitcoinVend",
  },
  {
    id: "bitcoin-volatility-index-token",
    symbol: "btcv",
    name: "Bitcoin Volatility Index Token",
  },
  {
    id: "bitcoinx",
    symbol: "bcx",
    name: "BitcoinX",
  },
  {
    id: "bitcoinx-2",
    symbol: "btcx",
    name: "BitcoinXGames",
  },
  {
    id: "bitcoinz",
    symbol: "btcz",
    name: "BitcoinZ",
  },
  {
    id: "bitcoiva",
    symbol: "bca",
    name: "Bitcoiva",
  },
  {
    id: "bitcomine",
    symbol: "bme",
    name: "BitcoMine",
  },
  {
    id: "bitcomo",
    symbol: "bm",
    name: "Bitcomo",
  },
  {
    id: "bitconnect",
    symbol: "bcc",
    name: "Bitconnect",
  },
  {
    id: "bitconnectx-genesis",
    symbol: "bccx",
    name: "BCCXGenesis",
  },
  {
    id: "bitcore",
    symbol: "btx",
    name: "BitCore",
  },
  {
    id: "bitcorn",
    symbol: "corn",
    name: "BITCORN",
  },
  {
    id: "bitcratic-revenue",
    symbol: "bctr",
    name: "Bitcratic Revenue",
  },
  {
    id: "bitcrex-coin",
    symbol: "bic",
    name: "Bitcrex Coin",
  },
  {
    id: "bitcrush",
    symbol: "crush",
    name: "Bitcrush",
  },
  {
    id: "bitcurate",
    symbol: "btcr",
    name: "Bitcurate",
  },
  {
    id: "bitdao",
    symbol: "bit",
    name: "BitDAO",
  },
  {
    id: "bitdefi",
    symbol: "bfi",
    name: "BitDefi",
  },
  {
    id: "bitdegree",
    symbol: "bdg",
    name: "BitDegree",
  },
  {
    id: "bitecoin",
    symbol: "$BITC",
    name: "Bitecoin",
  },
  {
    id: "bit-ecological-digital",
    symbol: "bed",
    name: "Bit Ecological Digital",
  },
  {
    id: "bitenium-token",
    symbol: "bt",
    name: "Bitenium Token",
  },
  {
    id: "bitex-global",
    symbol: "xbx",
    name: "Bitex Global XBX Coin",
  },
  {
    id: "bit_financial",
    symbol: "bfc",
    name: "Bit Financial",
  },
  {
    id: "bitflate",
    symbol: "bfl",
    name: "Bitflate",
  },
  {
    id: "bitflowers",
    symbol: "petal",
    name: "bitFlowers",
  },
  {
    id: "bitforex",
    symbol: "bf",
    name: "Bitforex Token",
  },
  {
    id: "bitfresh",
    symbol: "bft",
    name: "Bitfresh",
  },
  {
    id: "bitgear",
    symbol: "gear",
    name: "Bitgear",
  },
  {
    id: "bitgem",
    symbol: "xbtg",
    name: "Bitgem",
  },
  {
    id: "bitgesell",
    symbol: "bgl",
    name: "Bitgesell",
  },
  {
    id: "bitget-token",
    symbol: "bgb",
    name: "Bitget Token",
  },
  {
    id: "bitgrit",
    symbol: "bgr",
    name: "bitgrit",
  },
  {
    id: "bitguild",
    symbol: "plat",
    name: "BitGuild PLAT",
  },
  {
    id: "bithachi",
    symbol: "bith",
    name: "Bithachi",
  },
  {
    id: "bithashex",
    symbol: "bhax",
    name: "Bithashex",
  },
  {
    id: "bithash-token",
    symbol: "bt",
    name: "BitHash Token",
  },
  {
    id: "bithostcoin",
    symbol: "bih",
    name: "BitHostCoin",
  },
  {
    id: "bit-hotel",
    symbol: "bth",
    name: "Bit Hotel",
  },
  {
    id: "bitica-coin",
    symbol: "bdcc",
    name: "BITICA COIN",
  },
  {
    id: "bitjob",
    symbol: "stu",
    name: "bitJob",
  },
  {
    id: "bitkub-coin",
    symbol: "kub",
    name: "Bitkub Coin",
  },
  {
    id: "bitlocus",
    symbol: "btl",
    name: "Bitlocus",
  },
  {
    id: "bitlorrent",
    symbol: "blt",
    name: "Bitlorrent",
  },
  {
    id: "bitmark",
    symbol: "marks",
    name: "Bitmark",
  },
  {
    id: "bitmart-token",
    symbol: "bmx",
    name: "BitMart Token",
  },
  {
    id: "bitmex-token",
    symbol: "bmex",
    name: "BitMEX Token",
  },
  {
    id: "bitmic",
    symbol: "bmic",
    name: "Bitmic",
  },
  {
    id: "bitmoney",
    symbol: "bit",
    name: "BitMoney",
  },
  {
    id: "bitnautic",
    symbol: "btnt",
    name: "BitNautic",
  },
  {
    id: "bitnorm",
    symbol: "bn",
    name: "Bitnorm",
  },
  {
    id: "bito-coin",
    symbol: "bito",
    name: "BITO Coin",
  },
  {
    id: "bitonyx-token",
    symbol: "btnyx",
    name: "BitOnyx Token",
  },
  {
    id: "bitorbit",
    symbol: "bitorb",
    name: "BitOrbit",
  },
  {
    id: "bitpanda-ecosystem-token",
    symbol: "best",
    name: "Bitpanda Ecosystem Token",
  },
  {
    id: "bitplayer-token",
    symbol: "bpt",
    name: "Bitpayer Token",
  },
  {
    id: "bitpower",
    symbol: "bpp",
    name: "Bitpower",
  },
  {
    id: "bit-public-talent-network",
    symbol: "bptn",
    name: "Bit Public Talent Network",
  },
  {
    id: "bitradio",
    symbol: "bro",
    name: "Bitradio",
  },
  {
    id: "bitrent",
    symbol: "rntb",
    name: "BitRent",
  },
  {
    id: "bitrewards",
    symbol: "xbrt",
    name: "BitRewards",
  },
  {
    id: "bitrewards-token",
    symbol: "bit",
    name: "BitRewards Token",
  },
  {
    id: "bit-rides",
    symbol: "rides",
    name: "Bit Rides",
  },
  {
    id: "bitrise-token",
    symbol: "brise",
    name: "Bitgert",
  },
  {
    id: "bitriver",
    symbol: "btr",
    name: "Bitriver",
  },
  {
    id: "bitroncoin",
    symbol: "btrn",
    name: "BitronCoin",
  },
  {
    id: "bitrue-token",
    symbol: "btr",
    name: "Bitrue Coin",
  },
  {
    id: "bitscreener",
    symbol: "bitx",
    name: "BitScreener",
  },
  {
    id: "bitshares",
    symbol: "bts",
    name: "BitShares",
  },
  {
    id: "bitshark",
    symbol: "btshk",
    name: "Bitshark",
  },
  {
    id: "bitshiba",
    symbol: "shiba",
    name: "BitShiba",
  },
  {
    id: "bitsol-finance",
    symbol: "btsl",
    name: "Bitsol Finance",
  },
  {
    id: "bitsong",
    symbol: "btsg",
    name: "BitSong",
  },
  {
    id: "bitsonic-token",
    symbol: "bsc",
    name: "Bitsonic Token",
  },
  {
    id: "bitspawn",
    symbol: "spwn",
    name: "Bitspawn",
  },
  {
    id: "bitstake",
    symbol: "xbs",
    name: "BitStake",
  },
  {
    id: "bitsten-token",
    symbol: "bst",
    name: "Bitsten Token",
  },
  {
    id: "bit-store-coin",
    symbol: "store",
    name: "Bit Store",
  },
  {
    id: "bitsum",
    symbol: "mat",
    name: "Matka",
  },
  {
    id: "bitswift",
    symbol: "bits",
    name: "Bitswift",
  },
  {
    id: "bitto-exchange",
    symbol: "BITTO",
    name: "BITTO",
  },
  {
    id: "bittoken",
    symbol: "bitt",
    name: "BITToken",
  },
  {
    id: "bittokens",
    symbol: "bxt",
    name: "BitTokens",
  },
  {
    id: "bittorrent",
    symbol: "btt",
    name: "BitTorrent",
  },
  {
    id: "bittorrent-old",
    symbol: "bttold",
    name: "BitTorrent [OLD]",
  },
  {
    id: "bittracksystems",
    symbol: "bttr",
    name: "BittrackSystems",
  },
  {
    id: "bit-trust-system",
    symbol: "biut",
    name: "Bit Trust System",
  },
  {
    id: "bittube",
    symbol: "tube",
    name: "BitTube",
  },
  {
    id: "bittwatt",
    symbol: "bwt",
    name: "Bittwatt",
  },
  {
    id: "bitup",
    symbol: "bitup",
    name: "BitUp",
  },
  {
    id: "bitup-token",
    symbol: "but",
    name: "BitUP Token",
  },
  {
    id: "bitvalley",
    symbol: "bitv",
    name: "BitValley",
  },
  {
    id: "bitvalve-2",
    symbol: "btv",
    name: "BitValve",
  },
  {
    id: "bitvote",
    symbol: "btv",
    name: "Bitvote",
  },
  {
    id: "bitweb",
    symbol: "bte",
    name: "Bitweb",
  },
  {
    id: "bitwell-token",
    symbol: "well",
    name: "Bitwell Token",
  },
  {
    id: "bitwhite",
    symbol: "btw",
    name: "BitWhite",
  },
  {
    id: "bitwin24",
    symbol: "bwi",
    name: "Bitwin24",
  },
  {
    id: "bitz",
    symbol: "bitz",
    name: "bitz",
  },
  {
    id: "bitzeny",
    symbol: "zny",
    name: "BitZeny",
  },
  {
    id: "bitzipp",
    symbol: "bzp",
    name: "BitZipp",
  },
  {
    id: "bixb-coin",
    symbol: "bixb",
    name: "BixB Coin",
  },
  {
    id: "bixcpro",
    symbol: "bixcpro",
    name: "BIXCPRO",
  },
  {
    id: "bizzcoin",
    symbol: "bizz",
    name: "BIZZCOIN",
  },
  {
    id: "bkex-token",
    symbol: "bkk",
    name: "BKEX Chain",
  },
  {
    id: "bking-finance",
    symbol: "bkf",
    name: "BKING Finance",
  },
  {
    id: "blackberry-token",
    symbol: "bb",
    name: "Blackberry Token",
  },
  {
    id: "blackcoin",
    symbol: "blk",
    name: "BlackCoin",
  },
  {
    id: "black-diamond",
    symbol: "diamonds",
    name: "Black Diamond",
  },
  {
    id: "black-diamond-rating",
    symbol: "hzt",
    name: "Black Diamond Rating",
  },
  {
    id: "blackdragon-token",
    symbol: "BDT",
    name: "BlackDragon Token",
  },
  {
    id: "black-eye-galaxy",
    symbol: "byg",
    name: "Black Eye Galaxy",
  },
  {
    id: "blackfisk",
    symbol: "blfi",
    name: "BlackFisk",
  },
  {
    id: "blackhat-coin",
    symbol: "blkc",
    name: "BlackHat Coin",
  },
  {
    id: "blackhole-protocol",
    symbol: "black",
    name: "BlackHole Protocol",
  },
  {
    id: "blackholeswap-compound-dai-usdc",
    symbol: "bhsc",
    name: "BlackHoleSwap-Compound DAI/USDC",
  },
  {
    id: "black-kishu-inu",
    symbol: "bishu",
    name: "Black Kishu Inu",
  },
  {
    id: "black-label",
    symbol: "klb",
    name: "Black Label",
  },
  {
    id: "black-lemon",
    symbol: "bom",
    name: "Black Lemon",
  },
  {
    id: "black-market-gaming",
    symbol: "bmg",
    name: "Black Market Gaming",
  },
  {
    id: "blackmoon-crypto",
    symbol: "bmc",
    name: "Blackmoon Crypto",
  },
  {
    id: "blacknet",
    symbol: "bln",
    name: "Blacknet",
  },
  {
    id: "blackpearl-chain",
    symbol: "bplc",
    name: "BlackPearl Token",
  },
  {
    id: "black-phoenix",
    symbol: "bpx",
    name: "Black Phoenix",
  },
  {
    id: "blackpoker",
    symbol: "bpkr",
    name: "BlackPoker",
  },
  {
    id: "blackpool-token",
    symbol: "bpt",
    name: "BlackPool Token",
  },
  {
    id: "blackswan",
    symbol: "swan",
    name: "Blackswan",
  },
  {
    id: "black-whale",
    symbol: "blk",
    name: "Black Whale",
  },
  {
    id: "blade",
    symbol: "blade",
    name: "BladeWarrior",
  },
  {
    id: "blanc",
    symbol: "blanc",
    name: "Blanc",
  },
  {
    id: "blank",
    symbol: "blank",
    name: "BlockWallet",
  },
  {
    id: "blast",
    symbol: "blast",
    name: "BLAST",
  },
  {
    id: "blastoise-inu",
    symbol: "blast",
    name: "Blastoise Inu",
  },
  {
    id: "blastx",
    symbol: "bstx",
    name: "Blastx",
  },
  {
    id: "blaze-network",
    symbol: "BLZN",
    name: "Blaze Network",
  },
  {
    id: "blaze-the-cat",
    symbol: "$blaze",
    name: "Blaze the cat",
  },
  {
    id: "blind-boxes",
    symbol: "bles",
    name: "Blind Boxes",
  },
  {
    id: "blink",
    symbol: "blk",
    name: "BLink",
  },
  {
    id: "blinky-bob",
    symbol: "blinky",
    name: "Blinky Bob",
  },
  {
    id: "bliss-2",
    symbol: "bliss",
    name: "Bliss",
  },
  {
    id: "blitzpredict",
    symbol: "xbp",
    name: "BlitzPick",
  },
  {
    id: "blizzard",
    symbol: "xblzd",
    name: "Blizzard",
  },
  {
    id: "blizzard-network",
    symbol: "blizz",
    name: "Blizzard Network",
  },
  {
    id: "blizz-finance",
    symbol: "blzz",
    name: "Blizz Finance",
  },
  {
    id: "blocery",
    symbol: "bly",
    name: "Blocery",
  },
  {
    id: "block-18",
    symbol: "18c",
    name: "Block 18",
  },
  {
    id: "block2play",
    symbol: "B2P",
    name: "Block2Play",
  },
  {
    id: "block-ape-scissors",
    symbol: "bas",
    name: "Block Ape Scissors",
  },
  {
    id: "blockasset",
    symbol: "block",
    name: "Blockasset",
  },
  {
    id: "blockbank",
    symbol: "bbank",
    name: "BlockBank",
  },
  {
    id: "blockbase",
    symbol: "bbt",
    name: "BlockBase",
  },
  {
    id: "blockburn",
    symbol: "burn",
    name: "BlockBurn",
  },
  {
    id: "blockcdn",
    symbol: "bcdn",
    name: "BlockCDN",
  },
  {
    id: "blockchain-adventurers-guild",
    symbol: "bag",
    name: "Blockchain Adventurers Guild",
  },
  {
    id: "blockchain-based-distributed-super-computing-platform",
    symbol: "mbcc",
    name: "Blockchain-Based Distributed Super Computing Platform",
  },
  {
    id: "blockchain-certified-data-token",
    symbol: "bcdt",
    name: "EvidenZ",
  },
  {
    id: "blockchain-cuties-universe",
    symbol: "cute",
    name: "Blockchain Cuties Universe",
  },
  {
    id: "blockchain-cuties-universe-governance",
    symbol: "bcug",
    name: "Blockchain Cuties Universe Governance",
  },
  {
    id: "blockchain-euro-project",
    symbol: "bepr",
    name: "Blockchain Euro Project",
  },
  {
    id: "blockchain-exchange-alliance",
    symbol: "bxa",
    name: "Blockchain Exchange Alliance",
  },
  {
    id: "blockchain-monster-hunt",
    symbol: "bcmc",
    name: "Blockchain Monster Hunt",
  },
  {
    id: "blockchain-of-hash-power",
    symbol: "bhp",
    name: "Blockchain of Hash Power",
  },
  {
    id: "blockchainpoland",
    symbol: "bcp",
    name: "BlockchainPoland",
  },
  {
    id: "blockchain-property",
    symbol: "bpf",
    name: "Blockchain Property",
  },
  {
    id: "blockchain-quotations-index-token",
    symbol: "bqt",
    name: "Blockchain Quotations Index Token",
  },
  {
    id: "blockchainspace",
    symbol: "guild",
    name: "BlockchainSpace",
  },
  {
    id: "block-commerce-protocol",
    symbol: "bcp",
    name: "Block Commerce Protocol",
  },
  {
    id: "block-creatures",
    symbol: "moolah",
    name: "Block Creatures",
  },
  {
    id: "block-duelers",
    symbol: "bdt",
    name: "Block Duelers",
  },
  {
    id: "blockidcoin",
    symbol: "bid",
    name: "Blockidcoin",
  },
  {
    id: "blockmason-credit-protocol",
    symbol: "bcpt",
    name: "Blockmason Credit Protocol",
  },
  {
    id: "blockmason-link",
    symbol: "blink",
    name: "BlockMason Link",
  },
  {
    id: "blockmax",
    symbol: "ocb",
    name: "BLOCKMAX",
  },
  {
    id: "blockmesh-2",
    symbol: "bmh",
    name: "BlockMesh",
  },
  {
    id: "blockmine",
    symbol: "gold nugget",
    name: "Blockmine",
  },
  {
    id: "block-monsters",
    symbol: "mnstrs",
    name: "Block Monsters",
  },
  {
    id: "blocknet",
    symbol: "block",
    name: "Blocknet",
  },
  {
    id: "blocknotex",
    symbol: "bnox",
    name: "BlockNoteX",
  },
  {
    id: "blockpad",
    symbol: "bpad",
    name: "BlockPad",
  },
  {
    id: "blockpass",
    symbol: "pass",
    name: "Blockpass",
  },
  {
    id: "blockport",
    symbol: "bux",
    name: "BUX Token",
  },
  {
    id: "blocks",
    symbol: "blocks",
    name: "BLOCKS",
  },
  {
    id: "blockspace-token",
    symbol: "bls",
    name: "Blocks Space",
  },
  {
    id: "blockstack",
    symbol: "stx",
    name: "Stacks",
  },
  {
    id: "blockstamp",
    symbol: "bst",
    name: "BlockStamp",
  },
  {
    id: "blockster",
    symbol: "bxr",
    name: "Blockster",
  },
  {
    id: "blockswap-network",
    symbol: "cbsn",
    name: "BlockSwap Network",
  },
  {
    id: "blocktanium",
    symbol: "bkt",
    name: "Blocktanium",
  },
  {
    id: "blocktix",
    symbol: "tix",
    name: "Blocktix",
  },
  {
    id: "blocktyme",
    symbol: "btym",
    name: "Blocktyme",
  },
  {
    id: "blockv",
    symbol: "vee",
    name: "BLOCKv",
  },
  {
    id: "blockwarrior",
    symbol: "blwa",
    name: "BlockWarrior",
  },
  {
    id: "blockwrk",
    symbol: "wrk",
    name: "BlockWRK",
  },
  {
    id: "bloc-money",
    symbol: "bloc",
    name: "Bloc.Money",
  },
  {
    id: "blocsport-one",
    symbol: "bls",
    name: "blocsport.one",
  },
  {
    id: "blocto-token",
    symbol: "blt",
    name: "Blocto Token",
  },
  {
    id: "bloggercoin",
    symbol: "blogger",
    name: "Bloggercoin",
  },
  {
    id: "bloktopia",
    symbol: "blok",
    name: "Bloktopia",
  },
  {
    id: "blood-token",
    symbol: "blood",
    name: "Blood Token",
  },
  {
    id: "bloody-shiba",
    symbol: "BLOODYSHIBA",
    name: "Bloody shiba",
  },
  {
    id: "bloom",
    symbol: "blt",
    name: "Bloom",
  },
  {
    id: "bloomzed-token",
    symbol: "blct",
    name: "Bloomzed Loyalty Club Ticket",
  },
  {
    id: "blossomcoin",
    symbol: "blosm",
    name: "BlossomCoin",
  },
  {
    id: "blowup",
    symbol: "$blow",
    name: "BlowUP",
  },
  {
    id: "blox",
    symbol: "cdt",
    name: "Blox",
  },
  {
    id: "bloxmove-erc20",
    symbol: "blxm",
    name: "bloXmove Token",
  },
  {
    id: "blox-token",
    symbol: "blox",
    name: "Blox Token",
  },
  {
    id: "blubber-coin",
    symbol: "blub",
    name: "Blubber Coin",
  },
  {
    id: "blue",
    symbol: "blue",
    name: "Blue Protocol",
  },
  {
    id: "blueark",
    symbol: "brk",
    name: "BlueArk",
  },
  {
    id: "blue-baikal",
    symbol: "bbc",
    name: "Blue Baikal",
  },
  {
    id: "bluechip-capital-token",
    symbol: "bcc",
    name: "BlueChip Capital Token",
  },
  {
    id: "bluechips-token",
    symbol: "bchip",
    name: "BLUECHIPS Token",
  },
  {
    id: "bluecoin",
    symbol: "blu",
    name: "Bluecoin",
  },
  {
    id: "blue-eyes-white-doge",
    symbol: "bdoge",
    name: "Blue Eyes White Doge",
  },
  {
    id: "bluefi",
    symbol: "bleu",
    name: "BleuFi",
  },
  {
    id: "bluefincore",
    symbol: "bfc",
    name: "Bluefincore",
  },
  {
    id: "blue-gold",
    symbol: "blg",
    name: "Blue Gold",
  },
  {
    id: "blue-horizon",
    symbol: "blh",
    name: "Blue Horizon",
  },
  {
    id: "bluesparrow-token",
    symbol: "bluesparrow",
    name: "BlueSparrow Token",
  },
  {
    id: "blue-swap",
    symbol: "blue",
    name: "Blue Swap",
  },
  {
    id: "blue-whale",
    symbol: "bwx",
    name: "Blue Whale",
  },
  {
    id: "bluewizard",
    symbol: "wiz",
    name: "BlueWizard",
  },
  {
    id: "blurt",
    symbol: "blurt",
    name: "Blurt",
  },
  {
    id: "bluzelle",
    symbol: "blz",
    name: "Bluzelle",
  },
  {
    id: "bmchain-token",
    symbol: "bmt",
    name: "BMCHAIN token",
  },
  {
    id: "bnb48-club-token",
    symbol: "koge",
    name: "BNB48 Club Token",
  },
  {
    id: "bnb-bank",
    symbol: "bbk",
    name: "BNB Bank",
  },
  {
    id: "bnb-cash",
    symbol: "bnbch",
    name: "BNB Cash",
  },
  {
    id: "bnb-diamond",
    symbol: "bnbd",
    name: "BNB Diamond",
  },
  {
    id: "bnbeanstalk",
    symbol: "beans",
    name: "BNBeanstalk",
  },
  {
    id: "bnbeer",
    symbol: "bnbeer",
    name: "BNBeer",
  },
  {
    id: "bnbglobal-v2",
    symbol: "bnbg",
    name: "BNBGlobal V2",
  },
  {
    id: "bnbheroes-token",
    symbol: "bnbh",
    name: "BnbHeroes Token",
  },
  {
    id: "bnbhunter",
    symbol: "bht",
    name: "BNBHunter",
  },
  {
    id: "bnb-hyper-rise",
    symbol: "hyperrise",
    name: "BNB Hyper Rise",
  },
  {
    id: "bnbpay",
    symbol: "bpay",
    name: "BNBPay",
  },
  {
    id: "bnbrain",
    symbol: "brain",
    name: "BnbRain",
  },
  {
    id: "bnbrise",
    symbol: "brise",
    name: "BNBRise",
  },
  {
    id: "bnb-shinobi",
    symbol: "chakra",
    name: "BNB Shinobi",
  },
  {
    id: "bnb-superheroes",
    symbol: "bsh",
    name: "BNB Superheroes",
  },
  {
    id: "bnbtiger",
    symbol: "bnbtiger",
    name: "BNBTiger",
  },
  {
    id: "bnbx-finance",
    symbol: "bnbx",
    name: "BNBX Finance",
  },
  {
    id: "bnftx-token",
    symbol: "bnftt",
    name: "BNFTX Token",
  },
  {
    id: "bnktothefuture",
    symbol: "bft",
    name: "BnkToTheFuture",
  },
  {
    id: "bnoincoin",
    symbol: "bnc",
    name: "Bnoincoin",
  },
  {
    id: "b-non-fungible-yearn",
    symbol: "bnfy",
    name: "B Non-Fungible Yearn",
  },
  {
    id: "bnpl-pay",
    symbol: "bnpl",
    name: "BNPL Pay",
  },
  {
    id: "bnsd-finance",
    symbol: "bnsd",
    name: "BNSD Finance",
  },
  {
    id: "bns-token",
    symbol: "bns",
    name: "BNS Token",
  },
  {
    id: "bnx-finex",
    symbol: "bnx",
    name: "Bnx Finex",
  },
  {
    id: "boa",
    symbol: "boa",
    name: "BOA",
  },
  {
    id: "boat",
    symbol: "boat",
    name: "BOAT",
  },
  {
    id: "bobadoge",
    symbol: "bdoge",
    name: "BobaDoge",
  },
  {
    id: "boba-network",
    symbol: "boba",
    name: "Boba Network",
  },
  {
    id: "bobo-cash",
    symbol: "bobo",
    name: "Bobo Cash",
  },
  {
    id: "bobs_repair",
    symbol: "bob",
    name: "Bob's Repair",
  },
  {
    id: "bocketbsc",
    symbol: "rktbsc",
    name: "RocketBSC",
  },
  {
    id: "boda-token",
    symbol: "bodav2",
    name: "BODA Token",
  },
  {
    id: "bodhi-network",
    symbol: "nbot",
    name: "Bodhi Network",
  },
  {
    id: "bogecoin",
    symbol: "boge",
    name: "Bogecoin",
  },
  {
    id: "bogged-finance",
    symbol: "bog",
    name: "Bogged Finance",
  },
  {
    id: "bogged-finance-[old]",
    symbol: "bog",
    name: "Bogged Finance [OLD]",
  },
  {
    id: "bohr",
    symbol: "BR",
    name: "BoHr",
  },
  {
    id: "boid",
    symbol: "boid",
    name: "Boid",
  },
  {
    id: "boku",
    symbol: "boku",
    name: "Boryoku Dragonz",
  },
  {
    id: "boldman-capital",
    symbol: "bold",
    name: "Boldman Capital",
  },
  {
    id: "bole-token",
    symbol: "bole",
    name: "Bole Token",
  },
  {
    id: "boliecoin",
    symbol: "bolc",
    name: "Boliecoin",
  },
  {
    id: "bolivarcoin",
    symbol: "boli",
    name: "Bolivarcoin",
  },
  {
    id: "bollycoin",
    symbol: "BOLLY",
    name: "BollyCoin",
  },
  {
    id: "bologna-fc-fan-token",
    symbol: "bfc",
    name: "Bologna FC Fan Token",
  },
  {
    id: "bolt",
    symbol: "bolt",
    name: "Bolt",
  },
  {
    id: "boltt-coin",
    symbol: "boltt",
    name: "BolttCoin",
  },
  {
    id: "bolt-true-dollar",
    symbol: "btd",
    name: "Bolt Dollar",
  },
  {
    id: "bolt-true-share",
    symbol: "bts",
    name: "Bolt Share",
  },
  {
    id: "bomb",
    symbol: "bomb",
    name: "BOMB",
  },
  {
    id: "bomber-coin",
    symbol: "bcoin",
    name: "Bomber Coin",
  },
  {
    id: "bomberman",
    symbol: "$BOMB",
    name: "Bomberman",
  },
  {
    id: "bomb-money",
    symbol: "bomb",
    name: "Bomb Money",
  },
  {
    id: "bomb-money-bshare",
    symbol: "bshare",
    name: "Bomb Money BShare",
  },
  {
    id: "bondappetite-usd",
    symbol: "usdap",
    name: "BondAppetite USD",
  },
  {
    id: "bondappetit-gov-token",
    symbol: "bag",
    name: "BondAppetit Governance Token",
  },
  {
    id: "bonded-luna",
    symbol: "bluna",
    name: "Bonded Luna",
  },
  {
    id: "bondly",
    symbol: "bondly",
    name: "Bondly",
  },
  {
    id: "bondtoearn",
    symbol: "bte",
    name: "BondToEarn",
  },
  {
    id: "bone",
    symbol: "BONE",
    name: "Bone",
  },
  {
    id: "b-one-payment",
    symbol: "b1p",
    name: "B ONE PAYMENT",
  },
  {
    id: "bone-shibaswap",
    symbol: "bone",
    name: "Bone ShibaSwap",
  },
  {
    id: "boneswap",
    symbol: "bone",
    name: "BoneSwap",
  },
  {
    id: "bone-token",
    symbol: "bone",
    name: "Bone Token",
  },
  {
    id: "bonezyard",
    symbol: "bnz",
    name: "BonezYard",
  },
  {
    id: "bonfi",
    symbol: "bnf",
    name: "BonFi",
  },
  {
    id: "bonfida",
    symbol: "fida",
    name: "Bonfida",
  },
  {
    id: "bonfire",
    symbol: "bonfire",
    name: "Bonfire",
  },
  {
    id: "bongweedcoin",
    symbol: "bwc",
    name: "BongWeedCoin",
  },
  {
    id: "bonk-token",
    symbol: "bonk",
    name: "BONK Token",
  },
  {
    id: "bonorum-coin",
    symbol: "bono",
    name: "Bonorum",
  },
  {
    id: "bonsai-vault-nftx",
    symbol: "bonsai",
    name: "BONSAI Vault (NFTX)",
  },
  {
    id: "bonus-cake",
    symbol: "BonusCake",
    name: "Bonus Cake",
  },
  {
    id: "boobank",
    symbol: "boob",
    name: "BooBank",
  },
  {
    id: "boocake",
    symbol: "boocake",
    name: "BooCake",
  },
  {
    id: "boo-finance",
    symbol: "boofi",
    name: "Boo Finance",
  },
  {
    id: "boolberry",
    symbol: "bbr",
    name: "BoolBerry",
  },
  {
    id: "boolean",
    symbol: "bool",
    name: "Boolean",
  },
  {
    id: "boombaby-io",
    symbol: "boomb",
    name: "BoomBaby.io",
  },
  {
    id: "boo-mirrorworld",
    symbol: "xboo",
    name: "Boo MirrorWorld",
  },
  {
    id: "boom-shiba",
    symbol: "boomshiba",
    name: "Boom Shiba",
  },
  {
    id: "boom-token",
    symbol: "boom",
    name: "Boom Token",
  },
  {
    id: "boorio",
    symbol: "orio",
    name: "Boorio",
  },
  {
    id: "boost",
    symbol: "boost",
    name: "Boost",
  },
  {
    id: "boosted-finance",
    symbol: "boost",
    name: "Boosted Finance",
  },
  {
    id: "booster",
    symbol: "boo",
    name: "Booster",
  },
  {
    id: "booster-bsc",
    symbol: "boost",
    name: "Booster BSC",
  },
  {
    id: "boosto",
    symbol: "bst",
    name: "BOOSTO",
  },
  {
    id: "bootleg-nft",
    symbol: "boot",
    name: "Bootleg NFT",
  },
  {
    id: "boozedoge",
    symbol: "BODO",
    name: "BoozeDoge",
  },
  {
    id: "bora",
    symbol: "bora",
    name: "BORA",
  },
  {
    id: "borealis",
    symbol: "brl",
    name: "Borealis",
  },
  {
    id: "bored-ark",
    symbol: "bark",
    name: "Bored Ark",
  },
  {
    id: "bored-museum",
    symbol: "bored",
    name: "Bored Museum",
  },
  {
    id: "boringdao",
    symbol: "boring",
    name: "BoringDAO",
  },
  {
    id: "boringdao-btc",
    symbol: "obtc",
    name: "BoringDAO BTC",
  },
  {
    id: "boringdao-doge",
    symbol: "odoge",
    name: "BoringDAO DOGE",
  },
  {
    id: "boringdao-ltc",
    symbol: "oltc",
    name: "BoringDAO LTC",
  },
  {
    id: "boringdao-[old]",
    symbol: "bor",
    name: "BoringDAO [OLD]",
  },
  {
    id: "boring-protocol",
    symbol: "bop",
    name: "Boring Protocol",
  },
  {
    id: "bork",
    symbol: "bork",
    name: "Bork",
  },
  {
    id: "born-to-race",
    symbol: "brt",
    name: "Born To Race",
  },
  {
    id: "boruto-inu",
    symbol: "boruto",
    name: "Boruto Inu",
  },
  {
    id: "bosagora",
    symbol: "boa",
    name: "BOSAGORA",
  },
  {
    id: "boson-protocol",
    symbol: "boson",
    name: "Boson Protocol",
  },
  {
    id: "boss",
    symbol: "boss",
    name: "Boss",
  },
  {
    id: "bossswap",
    symbol: "boss",
    name: "Boss Swap",
  },
  {
    id: "botopiafinance",
    symbol: "BTOP",
    name: "BotopiaFinance",
  },
  {
    id: "botto",
    symbol: "botto",
    name: "Botto",
  },
  {
    id: "bottos",
    symbol: "bto",
    name: "Bottos",
  },
  {
    id: "botxcoin",
    symbol: "botx",
    name: "BOTXCOIN",
  },
  {
    id: "bouje-token",
    symbol: "bouje",
    name: "Bouje Token",
  },
  {
    id: "bounty0x",
    symbol: "bnty",
    name: "Bounty0x",
  },
  {
    id: "bountymarketcap",
    symbol: "bmc",
    name: "BountyMarketCap",
  },
  {
    id: "boutspro",
    symbol: "bouts",
    name: "BoutsPro",
  },
  {
    id: "bowl-a-coin",
    symbol: "bac",
    name: "Bowl A Coin",
  },
  {
    id: "bowscoin",
    symbol: "bsc",
    name: "BowsCoin",
  },
  {
    id: "boxaxis",
    symbol: "baxs",
    name: "BoxAxis",
  },
  {
    id: "boxerdoge",
    symbol: "boxerdoge",
    name: "BoxerDOGE",
  },
  {
    id: "boxer-inu",
    symbol: "boxer",
    name: "Boxer Inu",
  },
  {
    id: "box-token",
    symbol: "box",
    name: "BOX Token",
  },
  {
    id: "boxx",
    symbol: "boxx",
    name: "Blockparty",
  },
  {
    id: "bozkurt-token",
    symbol: "bt",
    name: "Bozkurt Token",
  },
  {
    id: "bpop",
    symbol: "bpop",
    name: "BPOP",
  },
  {
    id: "b-protocol",
    symbol: "bpro",
    name: "B.Protocol",
  },
  {
    id: "brainiac",
    symbol: "brains",
    name: "Brainiac",
  },
  {
    id: "braintrust",
    symbol: "btrst",
    name: "Braintrust",
  },
  {
    id: "brandpad-finance",
    symbol: "brand",
    name: "BrandPad Finance",
  },
  {
    id: "brank",
    symbol: "brank",
    name: "Brank",
  },
  {
    id: "bravo-coin",
    symbol: "bravo",
    name: "BravoCoin",
  },
  {
    id: "brazil-fan-token",
    symbol: "bft",
    name: "Brazil Fan Token",
  },
  {
    id: "brcp-token",
    symbol: "brcp",
    name: "BRCP Token",
  },
  {
    id: "bread",
    symbol: "brd",
    name: "Bread",
  },
  {
    id: "breezecoin",
    symbol: "brze",
    name: "Breezecoin",
  },
  {
    id: "brewlabs",
    symbol: "brewlabs",
    name: "Brewlabs",
  },
  {
    id: "bribe",
    symbol: "BRIBE",
    name: "BRIBE",
  },
  {
    id: "brick",
    symbol: "brick",
    name: "r/FortNiteBR Bricks",
  },
  {
    id: "brickchain-finance",
    symbol: "brick",
    name: "Brickchain Finance",
  },
  {
    id: "brick-token",
    symbol: "brick",
    name: "Brick Token",
  },
  {
    id: "bridge",
    symbol: "brg.x",
    name: "Bridge$",
  },
  {
    id: "bridge-finance",
    symbol: "bfr",
    name: "Bridge Finance",
  },
  {
    id: "bridge-mutual",
    symbol: "bmi",
    name: "Bridge Mutual",
  },
  {
    id: "bridge-protocol",
    symbol: "brdg",
    name: "Bridge Protocol",
  },
  {
    id: "brig-finance",
    symbol: "brig",
    name: "Brig Finance",
  },
  {
    id: "bright-token",
    symbol: "bright",
    name: "Bright Token",
  },
  {
    id: "bright-union",
    symbol: "bright",
    name: "Bright Union",
  },
  {
    id: "brilliancex",
    symbol: "brilx",
    name: "BrillianceX",
  },
  {
    id: "bring",
    symbol: "nor",
    name: "Noir",
  },
  {
    id: "bring-finance",
    symbol: "brng",
    name: "bRing.Finance",
  },
  {
    id: "britto",
    symbol: "brt",
    name: "Britto",
  },
  {
    id: "brmv-token",
    symbol: "brmv",
    name: "BRMV Token",
  },
  {
    id: "brokoli",
    symbol: "brkl",
    name: "Brokoli",
  },
  {
    id: "brosispay",
    symbol: "bspay",
    name: "Brosispay",
  },
  {
    id: "brother-music-platform",
    symbol: "bmp",
    name: "Brother Music Platform",
  },
  {
    id: "browniesswap",
    symbol: "brown",
    name: "BrowniesSwap",
  },
  {
    id: "bruce-non-fungible-token",
    symbol: "bnft",
    name: "Bruce Non Fungible Token",
  },
  {
    id: "brz",
    symbol: "brz",
    name: "Brazilian Digital Token",
  },
  {
    id: "bsc33dao",
    symbol: "bsc33",
    name: "BSC33DAO",
  },
  {
    id: "bscarmy",
    symbol: "barmy",
    name: "BscArmy",
  },
  {
    id: "bscbond",
    symbol: "bscb",
    name: "BscBond",
  },
  {
    id: "bsccrop",
    symbol: "bsccrop",
    name: "BSCCrop",
  },
  {
    id: "bscex",
    symbol: "bscx",
    name: "BSCEX",
  },
  {
    id: "bscgold",
    symbol: "bscgold",
    name: "BSCGold",
  },
  {
    id: "bsclaunch",
    symbol: "bsl",
    name: "BSClaunch",
  },
  {
    id: "bsc-memepad",
    symbol: "bscm",
    name: "BSC MemePad",
  },
  {
    id: "bscpad",
    symbol: "bscpad",
    name: "BSCPAD",
  },
  {
    id: "bscshiba",
    symbol: "bshiba",
    name: "bscShiba",
  },
  {
    id: "bscstarter",
    symbol: "start",
    name: "Starter.xyz",
  },
  {
    id: "bsc-station",
    symbol: "bscs",
    name: "BSC Station",
  },
  {
    id: "bscview",
    symbol: "bscv",
    name: "Bscview",
  },
  {
    id: "bscwin-bulls",
    symbol: "bscwin",
    name: "BSCWIN Bulls",
  },
  {
    id: "bsha3",
    symbol: "bsha3",
    name: "BSHA3",
  },
  {
    id: "bsocial",
    symbol: "bins",
    name: "BSocial",
  },
  {
    id: "bstable",
    symbol: "bstbl",
    name: "bStable",
  },
  {
    id: "bsys",
    symbol: "bsys",
    name: "BSYS",
  },
  {
    id: "bta-protocol",
    symbol: "btap",
    name: "BTA Protocol",
  },
  {
    id: "btc-2x-flexible-leverage-index",
    symbol: "BTC2x-FLI",
    name: "BTC 2x Flexible Leverage Index",
  },
  {
    id: "btc-alpha-token",
    symbol: "bac",
    name: "BTC-Alpha Token",
  },
  {
    id: "btc-lite",
    symbol: "btcl",
    name: "BTC Lite",
  },
  {
    id: "btcmoon",
    symbol: "btcm",
    name: "BTCMoon",
  },
  {
    id: "btc-network-demand-set-ii",
    symbol: "byte",
    name: "BTC Network Demand Set II",
  },
  {
    id: "btc-proxy",
    symbol: "btcpx",
    name: "BTC Proxy",
  },
  {
    id: "btc-rsi-crossover-yield-set",
    symbol: "btcrsiapy",
    name: "BTC RSI Crossover Yield Set",
  },
  {
    id: "btc-standard-hashrate-token",
    symbol: "btcst",
    name: "BTC Standard Hashrate Token",
  },
  {
    id: "btecoin",
    symbol: "bte",
    name: "BTEcoin",
  },
  {
    id: "btf",
    symbol: "btf",
    name: "Bitcoin Faith",
  },
  {
    id: "bt-finance",
    symbol: "bt",
    name: "BT.Finance",
  },
  {
    id: "btmiracles",
    symbol: "bm",
    name: "BtMiracles",
  },
  {
    id: "btrips",
    symbol: "btr",
    name: "BTRIPS",
  },
  {
    id: "bts-chain",
    symbol: "btsc",
    name: "BTS Chain",
  },
  {
    id: "btse-token",
    symbol: "btse",
    name: "BTSE Token",
  },
  {
    id: "btsunicorn",
    symbol: "btsucn",
    name: "BTSunicorn",
  },
  {
    id: "btu-protocol",
    symbol: "btu",
    name: "BTU Protocol",
  },
  {
    id: "bubble-network",
    symbol: "bbl",
    name: "Bubble Network",
  },
  {
    id: "buckhath-coin",
    symbol: "bhig",
    name: "BuckHath Coin",
  },
  {
    id: "buckswap",
    symbol: "bucks",
    name: "BuckSwap",
  },
  {
    id: "budacoin",
    symbol: "buda",
    name: "BudaCoin",
  },
  {
    id: "budbo",
    symbol: "bubo",
    name: "Budbo",
  },
  {
    id: "buddy",
    symbol: "bud",
    name: "Buddy",
  },
  {
    id: "buffalo-swap",
    symbol: "buff",
    name: "Buffalo Swap",
  },
  {
    id: "buffaloswap-horn",
    symbol: "horn",
    name: "BuffaloSwap HORN",
  },
  {
    id: "buff-doge",
    symbol: "buffdoge",
    name: "Buff Doge",
  },
  {
    id: "buff-doge-coin",
    symbol: "dogecoin",
    name: "Buff Doge Coin",
  },
  {
    id: "buffed-kishu",
    symbol: "bkishu",
    name: "Buffed Kishu",
  },
  {
    id: "buffedshiba",
    symbol: "bshib",
    name: "BuffedShiba",
  },
  {
    id: "buff-floki",
    symbol: "BUFlOKI",
    name: "Buff Floki",
  },
  {
    id: "buff-samo",
    symbol: "bsamo",
    name: "Buff Samo",
  },
  {
    id: "buff-shiba-inu",
    symbol: "buffshiba",
    name: "Buff Shiba Inu",
  },
  {
    id: "buffswap",
    symbol: "buffs",
    name: "BuffSwap",
  },
  {
    id: "bugg-finance",
    symbol: "bugg",
    name: "BUGG Finance",
  },
  {
    id: "bugg-inu",
    symbol: "bugg",
    name: "Bugg Inu",
  },
  {
    id: "build-finance",
    symbol: "build",
    name: "BUILD Finance",
  },
  {
    id: "buildin",
    symbol: "bin",
    name: "Buildin",
  },
  {
    id: "buildup",
    symbol: "bup",
    name: "BuildUp",
  },
  {
    id: "bukh",
    symbol: "bukh",
    name: "bUKHI",
  },
  {
    id: "bulk-network",
    symbol: "bulk",
    name: "Bulk Network",
  },
  {
    id: "bullchain",
    symbol: "BULL",
    name: "Bullchain",
  },
  {
    id: "bull-coin",
    symbol: "bull",
    name: "Bull Coin",
  },
  {
    id: "bulldog-coin",
    symbol: "bulldog",
    name: "BullDog Coin",
  },
  {
    id: "bulldoge-inu",
    symbol: "bulld",
    name: "Bulldoge Inu",
  },
  {
    id: "bulldogswap",
    symbol: "budg",
    name: "BullDogSwap",
  },
  {
    id: "bulldog-token",
    symbol: "bdog",
    name: "Bulldog Token",
  },
  {
    id: "bulleon",
    symbol: "bul",
    name: "Bulleon",
  },
  {
    id: "bulleth",
    symbol: "bulleth",
    name: "Bulleth",
  },
  {
    id: "bullex",
    symbol: "blx",
    name: "BulleX",
  },
  {
    id: "bull-inu",
    symbol: "BULL",
    name: "BULL Inu",
  },
  {
    id: "bullion",
    symbol: "cbx",
    name: "Bullion",
  },
  {
    id: "bullionfx",
    symbol: "bull",
    name: "BullionFX",
  },
  {
    id: "bullish-af",
    symbol: "bullaf",
    name: "Bullish AF",
  },
  {
    id: "bullishapes",
    symbol: "bullish",
    name: "BullishApes",
  },
  {
    id: "bullperks",
    symbol: "blp",
    name: "BullPerks",
  },
  {
    id: "bullrise",
    symbol: "bull",
    name: "BullRise",
  },
  {
    id: "bullrun2-0",
    symbol: "br2.0",
    name: "BullRun2.0",
  },
  {
    id: "bull-run-token",
    symbol: "br",
    name: "Bull Run Finance",
  },
  {
    id: "bullswap-protocol",
    symbol: "bvl",
    name: "Bullswap Protocol",
  },
  {
    id: "bully-inu",
    symbol: "binu",
    name: "Bully Inu",
  },
  {
    id: "bumoon",
    symbol: "bumn",
    name: "BUMooN",
  },
  {
    id: "bumper",
    symbol: "bump",
    name: "Bumper",
  },
  {
    id: "bundle-dao",
    symbol: "bdl",
    name: "Bundle Dao",
  },
  {
    id: "bundles",
    symbol: "bund",
    name: "Bundles",
  },
  {
    id: "bunicorn",
    symbol: "buni",
    name: "Bunicorn",
  },
  {
    id: "bunnycake",
    symbol: "bunnycake",
    name: "BunnyCake",
  },
  {
    id: "bunnycoin",
    symbol: "bun",
    name: "Bunnycoin",
  },
  {
    id: "bunny-farm",
    symbol: "BNF",
    name: "Bunny Farm",
  },
  {
    id: "bunnygirl",
    symbol: "bunnygirl",
    name: "BunnyGirl",
  },
  {
    id: "bunnypark",
    symbol: "bp",
    name: "BunnyPark",
  },
  {
    id: "bunnypark-game",
    symbol: "bg",
    name: "BunnyPark Game",
  },
  {
    id: "bunnyrocket",
    symbol: "bunnyrocket",
    name: "BunnyRocket",
  },
  {
    id: "bunnytoken",
    symbol: "bunny",
    name: "BunnyToken",
  },
  {
    id: "bunny-token-polygon",
    symbol: "polybunny",
    name: "Pancake Bunny Polygon",
  },
  {
    id: "bunnyverse",
    symbol: "bnv",
    name: "BunnyVerse",
  },
  {
    id: "bunny-zilla",
    symbol: "bunnyzilla",
    name: "Bunny Zilla",
  },
  {
    id: "bunscake",
    symbol: "bscake",
    name: "Bunscake",
  },
  {
    id: "burency",
    symbol: "buy",
    name: "Burency",
  },
  {
    id: "burgerburn",
    symbol: "brgb",
    name: "BurgerBurn",
  },
  {
    id: "burger-swap",
    symbol: "burger",
    name: "Burger Swap",
  },
  {
    id: "buried-bones",
    symbol: "bbt",
    name: "Buried Bones",
  },
  {
    id: "burn1coin",
    symbol: "burn1coin",
    name: "Burn1Coin",
  },
  {
    id: "burndoge",
    symbol: "burndoge",
    name: "BurnDoge",
  },
  {
    id: "burningmoon",
    symbol: "bm",
    name: "BurningMoon",
  },
  {
    id: "burnrocket",
    symbol: "burnrocket",
    name: "BurnRocket",
  },
  {
    id: "burnt-cake",
    symbol: "bcake",
    name: "Burnt Cake",
  },
  {
    id: "burnx",
    symbol: "burnx",
    name: "BurnX",
  },
  {
    id: "burnx20",
    symbol: "burnx20",
    name: "BurnX 2.0",
  },
  {
    id: "busdx",
    symbol: "busdx",
    name: "BUSDX",
  },
  {
    id: "business-credit-substitute",
    symbol: "bcs",
    name: "Business Credit Substitute",
  },
  {
    id: "busta",
    symbol: "bust",
    name: "BUSTA",
  },
  {
    id: "busy-dao",
    symbol: "busy",
    name: "Busy DAO",
  },
  {
    id: "buttcoin-2",
    symbol: "butt",
    name: "Buttcoin",
  },
  {
    id: "butterflydao",
    symbol: "btrfly",
    name: "Redacted Cartel",
  },
  {
    id: "butterfly-protocol-2",
    symbol: "bfly",
    name: "Butterfly Protocol",
  },
  {
    id: "butterswap",
    symbol: "butter",
    name: "ButterSwap",
  },
  {
    id: "butter-token",
    symbol: "butter",
    name: "Butter Token",
  },
  {
    id: "buu-inu",
    symbol: "buu",
    name: "Buu Inu",
  },
  {
    id: "buxcoin",
    symbol: "bux",
    name: "BUXCOIN",
  },
  {
    id: "buy-coin-pos",
    symbol: "bcp",
    name: "BuyCoinPos",
  },
  {
    id: "buying",
    symbol: "buy",
    name: "Buying.com",
  },
  {
    id: "buymainstreet",
    symbol: "$mainst",
    name: "BuyMainStreet",
  },
  {
    id: "buysell",
    symbol: "bull",
    name: "BuySell",
  },
  {
    id: "buyucoin-token",
    symbol: "buc",
    name: "BuyUCoin Token",
  },
  {
    id: "buzzcoin",
    symbol: "buzz",
    name: "BuzzCoin",
  },
  {
    id: "buzzshow",
    symbol: "gldy",
    name: "Buzzshow",
  },
  {
    id: "bxbtc",
    symbol: "bxbtc",
    name: "bxBTC",
  },
  {
    id: "bxh",
    symbol: "bxh",
    name: "BXH Token",
  },
  {
    id: "bxiot",
    symbol: "bxiot",
    name: "bXIOT",
  },
  {
    id: "bxmi-token",
    symbol: "bxmi",
    name: "Bxmi Token",
  },
  {
    id: "byakko",
    symbol: "BYK",
    name: "Byakko",
  },
  {
    id: "bycoin",
    symbol: "byco",
    name: "Bycoin",
  },
  {
    id: "byteball",
    symbol: "gbyte",
    name: "Obyte",
  },
  {
    id: "bytecoin",
    symbol: "bcn",
    name: "Bytecoin",
  },
  {
    id: "bytedex",
    symbol: "bext",
    name: "ByteDex",
  },
  {
    id: "byteex",
    symbol: "bx",
    name: "ByteEx",
  },
  {
    id: "bytenext",
    symbol: "bnu",
    name: "ByteNext",
  },
  {
    id: "bytom",
    symbol: "btm",
    name: "Bytom",
  },
  {
    id: "bytus",
    symbol: "byts",
    name: "Bytus",
  },
  {
    id: "bytz",
    symbol: "bytz",
    name: "BYTZ",
  },
  {
    id: "bzedge",
    symbol: "bze",
    name: "BZEdge",
  },
  {
    id: "bzx-protocol",
    symbol: "bzrx",
    name: "bZx Protocol",
  },
  {
    id: "bzzone",
    symbol: "bzzone",
    name: "Bzzone",
  },
  {
    id: "caash",
    symbol: "cash",
    name: "Caash",
  },
  {
    id: "caashcow",
    symbol: "COW",
    name: "CaashCow",
  },
  {
    id: "caave",
    symbol: "caave",
    name: "cAAVE",
  },
  {
    id: "cabana-token",
    symbol: "cba",
    name: "Cabana Token",
  },
  {
    id: "cache-gold",
    symbol: "cgt",
    name: "CACHE Gold",
  },
  {
    id: "cacti-club",
    symbol: "cacti",
    name: "Cacti Club",
  },
  {
    id: "cad-coin",
    symbol: "cadc",
    name: "CAD Coin",
  },
  {
    id: "cafeswap-token",
    symbol: "brew",
    name: "CafeSwap Token",
  },
  {
    id: "cage",
    symbol: "c4g3",
    name: "Cage",
  },
  {
    id: "cage-governance",
    symbol: "cgt",
    name: "Cage Governance",
  },
  {
    id: "caica-coin",
    symbol: "cicc",
    name: "CAICA Coin",
  },
  {
    id: "caietf-finance",
    symbol: "cai",
    name: "CAIETF.Finance",
  },
  {
    id: "cajutel",
    symbol: "caj",
    name: "Cajutel",
  },
  {
    id: "cake",
    symbol: "cake",
    name: "CakeDAO",
  },
  {
    id: "cakebaker",
    symbol: "cakebaker",
    name: "CakeBaker",
  },
  {
    id: "cake-bank",
    symbol: "cakebank",
    name: "Cake Bank",
  },
  {
    id: "cake-girl",
    symbol: "cakegirl",
    name: "Cake Girl",
  },
  {
    id: "cake-monster",
    symbol: "monsta",
    name: "Cake Monster",
  },
  {
    id: "cakepunks",
    symbol: "cakepunks",
    name: "CAKEPUNKS",
  },
  {
    id: "cakeswap",
    symbol: "cakeswap",
    name: "CakeSwap",
  },
  {
    id: "caketools",
    symbol: "ckt",
    name: "Caketools",
  },
  {
    id: "cakeup",
    symbol: "CakeUp",
    name: "CakeUp",
  },
  {
    id: "cakezilla",
    symbol: "cakezilla",
    name: "CakeZilla",
  },
  {
    id: "calamari-network",
    symbol: "kma",
    name: "Calamari Network",
  },
  {
    id: "calcifer",
    symbol: "CALCIFER",
    name: "Calcifer",
  },
  {
    id: "calicoin",
    symbol: "cali",
    name: "CaliCoin",
  },
  {
    id: "californium",
    symbol: "cf",
    name: "Californium",
  },
  {
    id: "callisto",
    symbol: "clo",
    name: "Callisto Network",
  },
  {
    id: "calo-app",
    symbol: "calo",
    name: "Calo App",
  },
  {
    id: "caluracoin",
    symbol: "clc",
    name: "CaluraCoin",
  },
  {
    id: "calypso",
    symbol: "cyo",
    name: "Calypso",
  },
  {
    id: "cameltoken",
    symbol: "CMLT",
    name: "CamelToken",
  },
  {
    id: "camp",
    symbol: "camp",
    name: "Camp",
  },
  {
    id: "canary",
    symbol: "cnr",
    name: "Canary",
  },
  {
    id: "canaryx",
    symbol: "cnyx",
    name: "CanaryX",
  },
  {
    id: "candela-coin",
    symbol: "cla",
    name: "Candela Coin",
  },
  {
    id: "candylad",
    symbol: "candylad",
    name: "Candylad",
  },
  {
    id: "cannabiscoin",
    symbol: "cann",
    name: "CannabisCoin",
  },
  {
    id: "cannabis-seed-token",
    symbol: "cana",
    name: "Cannabis Seed Token",
  },
  {
    id: "cannumo",
    symbol: "canu",
    name: "Cannumo",
  },
  {
    id: "canon-crypto",
    symbol: "cato",
    name: "Canon Crypto",
  },
  {
    id: "canopus",
    symbol: "opus",
    name: "Canopus",
  },
  {
    id: "canyacoin",
    symbol: "can",
    name: "CanYaCoin",
  },
  {
    id: "cap",
    symbol: "cap",
    name: "Cap",
  },
  {
    id: "capital-aggregator-token",
    symbol: "cat",
    name: "Capital Aggregator Token",
  },
  {
    id: "capital-dao-starter-token",
    symbol: "cds",
    name: "Capital DAO Starter Token",
  },
  {
    id: "capital-finance",
    symbol: "cap",
    name: "Capital.finance",
  },
  {
    id: "capital-system",
    symbol: "capsys",
    name: "Capital System",
  },
  {
    id: "capital-x-cell",
    symbol: "cxc",
    name: "CAPITAL X CELL",
  },
  {
    id: "capitol",
    symbol: "cptl",
    name: "Capitol",
  },
  {
    id: "cappasity",
    symbol: "capp",
    name: "Cappasity",
  },
  {
    id: "captain",
    symbol: "capt",
    name: "Captain",
  },
  {
    id: "captain-inu",
    symbol: "cptinu",
    name: "Captain Inu",
  },
  {
    id: "captain-shibarrow",
    symbol: "shibarrow",
    name: "Captain Shibarrow",
  },
  {
    id: "capybara",
    symbol: "capy",
    name: "Capybara",
  },
  {
    id: "caramelswap",
    symbol: "mel",
    name: "CaramelSwap",
  },
  {
    id: "carat",
    symbol: "carat",
    name: "CARAT",
  },
  {
    id: "carbon",
    symbol: "crbn",
    name: "Carbon",
  },
  {
    id: "carboncoin",
    symbol: "carbon",
    name: "Carboncoin",
  },
  {
    id: "carbon-coin",
    symbol: "cbc",
    name: "Carbon Coin",
  },
  {
    id: "carbondefi",
    symbol: "carbo",
    name: "CarbonDEFI",
  },
  {
    id: "carboneco",
    symbol: "c0",
    name: "CarbonEco",
  },
  {
    id: "carbon-finance",
    symbol: "carbon",
    name: "Carbon Finance",
  },
  {
    id: "carbon-gems",
    symbol: "gems",
    name: "Carbon GEMS",
  },
  {
    id: "carbon-labs",
    symbol: "carb",
    name: "Carbon Labs",
  },
  {
    id: "carbon-utility-token",
    symbol: "cut",
    name: "Carbon Utility Token",
  },
  {
    id: "car-coin",
    symbol: "ccm",
    name: "Car Coin",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
  },
  {
    id: "cardanoevo",
    symbol: "cevo",
    name: "CardanoEvo",
  },
  {
    id: "cardanomics",
    symbol: "adx",
    name: "Cardanomics",
  },
  {
    id: "cardanopad",
    symbol: "apa",
    name: "CardanoPad",
  },
  {
    id: "cardashift",
    symbol: "clap",
    name: "Cardashift",
  },
  {
    id: "cardax",
    symbol: "cdx",
    name: "Cardax",
  },
  {
    id: "cardence",
    symbol: "$crdn",
    name: "Cardence",
  },
  {
    id: "cardstack",
    symbol: "card",
    name: "Cardstack",
  },
  {
    id: "cardstarter",
    symbol: "cards",
    name: "Cardstarter",
  },
  {
    id: "cardswap",
    symbol: "cswap",
    name: "CardSwap",
  },
  {
    id: "card-vaulti-nftx",
    symbol: "card",
    name: "CARD Vault (NFTX)",
  },
  {
    id: "cardwallet",
    symbol: "cw",
    name: "CardWallet",
  },
  {
    id: "care-coin",
    symbol: "crc",
    name: "Care Coin",
  },
  {
    id: "cargo-gems",
    symbol: "gem",
    name: "Cargo Gems",
  },
  {
    id: "cargox",
    symbol: "cxo",
    name: "CargoX",
  },
  {
    id: "caribmarsx",
    symbol: "CMX",
    name: "CaribMarsX",
  },
  {
    id: "carma-coin",
    symbol: "carma",
    name: "Carma Coin",
  },
  {
    id: "carnomaly",
    symbol: "carr",
    name: "Carnomaly",
  },
  {
    id: "carr-finance",
    symbol: "crt",
    name: "Carrot Finance",
  },
  {
    id: "carrot-stable-coin",
    symbol: "carrot",
    name: "Carrot Stable Coin",
  },
  {
    id: "carrot-token",
    symbol: "carrot",
    name: "Carrot Token",
  },
  {
    id: "carry",
    symbol: "cre",
    name: "Carry",
  },
  {
    id: "carsautofinance",
    symbol: "caf",
    name: "CarsAutoFinance",
  },
  {
    id: "cartesi",
    symbol: "ctsi",
    name: "Cartesi",
  },
  {
    id: "carvertical",
    symbol: "cv",
    name: "carVertical",
  },
  {
    id: "case-closed",
    symbol: "$caseclosed",
    name: "Case Closed",
  },
  {
    id: "cash2",
    symbol: "cash2",
    name: "Cash2",
  },
  {
    id: "cashaa",
    symbol: "cas",
    name: "Cashaa",
  },
  {
    id: "cashbackpro",
    symbol: "cbp",
    name: "CashBackPro",
  },
  {
    id: "cashbet-coin",
    symbol: "cbc",
    name: "CBC.network",
  },
  {
    id: "cashcats",
    symbol: "$cats",
    name: "CashCats",
  },
  {
    id: "cashcow",
    symbol: "cow",
    name: "CashCow",
  },
  {
    id: "cashcow-finance",
    symbol: "ccf",
    name: "CashCow.Finance",
  },
  {
    id: "cashdog",
    symbol: "cashdog",
    name: "CashDog",
  },
  {
    id: "cash-flash",
    symbol: "cft",
    name: "Cash Flash",
  },
  {
    id: "cashhand",
    symbol: "chnd",
    name: "Cashhand",
  },
  {
    id: "cashio-dollar",
    symbol: "cash",
    name: "Cashio Dollar",
  },
  {
    id: "cashio-token",
    symbol: "cashio",
    name: "Cashio Token",
  },
  {
    id: "cashpay",
    symbol: "cpz",
    name: "CashPay",
  },
  {
    id: "cash-tech",
    symbol: "cate",
    name: "Cash Tech",
  },
  {
    id: "casinocoin",
    symbol: "csc",
    name: "Casinocoin",
  },
  {
    id: "casinoxmetaverse",
    symbol: "$casio",
    name: "CasinoXMetaverse",
  },
  {
    id: "casper-defi",
    symbol: "casper",
    name: "Casper DeFi",
  },
  {
    id: "casper-network",
    symbol: "cspr",
    name: "Casper Network",
  },
  {
    id: "casperpad",
    symbol: "cspd",
    name: "CasperPad",
  },
  {
    id: "caspian",
    symbol: "csp",
    name: "Caspian",
  },
  {
    id: "castweet",
    symbol: "ctt",
    name: "Castweet",
  },
  {
    id: "cat",
    symbol: "cat",
    name: "CAT",
  },
  {
    id: "catbonk",
    symbol: "cabo",
    name: "Catbonk",
  },
  {
    id: "catboy",
    symbol: "ctb",
    name: "CatBoy",
  },
  {
    id: "catbread",
    symbol: "catbread",
    name: "CatBread",
  },
  {
    id: "catchy",
    symbol: "catchy",
    name: "Catchy",
  },
  {
    id: "catecoin",
    symbol: "cate",
    name: "CateCoin",
  },
  {
    id: "catemoon-inu",
    symbol: "cate",
    name: "Catemoon Inu",
  },
  {
    id: "catena-x",
    symbol: "cex",
    name: "Catena X",
  },
  {
    id: "cate-shiba",
    symbol: "chiba",
    name: "Cate Shiba",
  },
  {
    id: "catex-token",
    symbol: "catt",
    name: "Catex Token",
  },
  {
    id: "catge-coin",
    symbol: "catge",
    name: "Catge Coin",
  },
  {
    id: "catgirl",
    symbol: "catgirl",
    name: "Catgirl",
  },
  {
    id: "catnip",
    symbol: "nip",
    name: "CatNIP",
  },
  {
    id: "cato",
    symbol: "cato",
    name: "CATO",
  },
  {
    id: "catocoin",
    symbol: "cato",
    name: "CatoCoin",
  },
  {
    id: "cats-claw",
    symbol: "claw",
    name: "Cats Claw",
  },
  {
    id: "catscoin",
    symbol: "cats",
    name: "Catscoin",
  },
  {
    id: "cat-token",
    symbol: "cat",
    name: "Cat Token",
  },
  {
    id: "cat-trade-protocol",
    symbol: "catx",
    name: "CAT.trade Protocol",
  },
  {
    id: "catwoman",
    symbol: "cw",
    name: "CatWoman",
  },
  {
    id: "catzcoin",
    symbol: "catz",
    name: "CatzCoin",
  },
  {
    id: "cavapoo",
    symbol: "cava",
    name: "Cavapoo",
  },
  {
    id: "cave",
    symbol: "cave",
    name: "Crypto Cavemen",
  },
  {
    id: "cazi-cazi",
    symbol: "cazi",
    name: "Cazi Cazi",
  },
  {
    id: "cbbn-token",
    symbol: "CBBN",
    name: "CBBN Token",
  },
  {
    id: "cbdao",
    symbol: "bree",
    name: "CBDAO",
  },
  {
    id: "cbd-coin",
    symbol: "cbd",
    name: "CBD Coin",
  },
  {
    id: "cberry",
    symbol: "cby",
    name: "CBerry",
  },
  {
    id: "cbet-token",
    symbol: "cbet",
    name: "CBET Token",
  },
  {
    id: "cbi-index-7",
    symbol: "cbix7",
    name: "CBI Index 7",
  },
  {
    id: "cc",
    symbol: "cc",
    name: "CC",
  },
  {
    id: "ccomp",
    symbol: "ccomp",
    name: "cCOMP",
  },
  {
    id: "ccore",
    symbol: "cco",
    name: "Ccore",
  },
  {
    id: "ccswap",
    symbol: "cc",
    name: "CCSwap",
  },
  {
    id: "ccuniverse",
    symbol: "uvu",
    name: "CCUniverse",
  },
  {
    id: "cdai",
    symbol: "cdai",
    name: "cDAI",
  },
  {
    id: "cdzexchange",
    symbol: "cdz",
    name: "CDzExchange",
  },
  {
    id: "cedars",
    symbol: "ceds",
    name: "CEDARS",
  },
  {
    id: "ceek",
    symbol: "ceek",
    name: "CEEK Smart VR Token",
  },
  {
    id: "ceezee-safu",
    symbol: "safu",
    name: "CEEZEE SAFU",
  },
  {
    id: "celcoin",
    symbol: "celc",
    name: "CelCoin",
  },
  {
    id: "celeb",
    symbol: "celeb",
    name: "Celeb",
  },
  {
    id: "celer-network",
    symbol: "celr",
    name: "Celer Network",
  },
  {
    id: "celery",
    symbol: "cly",
    name: "Celery",
  },
  {
    id: "celestial",
    symbol: "celt",
    name: "Celestial",
  },
  {
    id: "celeum",
    symbol: "clx",
    name: "Celeum",
  },
  {
    id: "celletf",
    symbol: "ecell",
    name: "CellETF",
  },
  {
    id: "cellframe",
    symbol: "cell",
    name: "Cellframe",
  },
  {
    id: "celo",
    symbol: "celo",
    name: "Celo",
  },
  {
    id: "celo-dollar",
    symbol: "cusd",
    name: "Celo Dollar",
  },
  {
    id: "celo-euro",
    symbol: "ceur",
    name: "Celo Euro",
  },
  {
    id: "celolaunch",
    symbol: "cla",
    name: "CeloLaunch",
  },
  {
    id: "celostarter",
    symbol: "cstar",
    name: "CeloStarter",
  },
  {
    id: "celsius-degree-token",
    symbol: "cel",
    name: "Celsius Network",
  },
  {
    id: "celsius-wormhole",
    symbol: "cel",
    name: "Celsius (Wormhole)",
  },
  {
    id: "centaur",
    symbol: "cntr",
    name: "Centaur",
  },
  {
    id: "centaurify",
    symbol: "cent",
    name: "Centaurify",
  },
  {
    id: "centcex",
    symbol: "cenx",
    name: "Centcex",
  },
  {
    id: "centercoin",
    symbol: "cent",
    name: "CENTERCOIN",
  },
  {
    id: "centerprime",
    symbol: "cpx",
    name: "CenterPrime",
  },
  {
    id: "centralex",
    symbol: "cenx",
    name: "Centralex",
  },
  {
    id: "centrality",
    symbol: "cennz",
    name: "Centrality",
  },
  {
    id: "centric-cash",
    symbol: "cns",
    name: "Centric Swap",
  },
  {
    id: "centrifuge",
    symbol: "cfg",
    name: "Centrifuge",
  },
  {
    id: "centurion",
    symbol: "cnt",
    name: "Centurion",
  },
  {
    id: "centurion-inu",
    symbol: "cent",
    name: "Centurion Inu",
  },
  {
    id: "cerberus",
    symbol: "ccf",
    name: "Cerberus Finance",
  },
  {
    id: "cerberusdao",
    symbol: "3dog",
    name: "CerberusDAO",
  },
  {
    id: "cerby-token",
    symbol: "cerby",
    name: "Cerby Token",
  },
  {
    id: "cerealia",
    symbol: "cer",
    name: "Cerealia",
  },
  {
    id: "cere-network",
    symbol: "cere",
    name: "Cere Network",
  },
  {
    id: "ceres",
    symbol: "ceres",
    name: "Ceres",
  },
  {
    id: "cerium",
    symbol: "xce",
    name: "Cerium",
  },
  {
    id: "certik",
    symbol: "ctk",
    name: "CertiK",
  },
  {
    id: "certrise",
    symbol: "cert",
    name: "CertRise",
  },
  {
    id: "certurium",
    symbol: "crt",
    name: "Certurium",
  },
  {
    id: "cerveza",
    symbol: "cvza",
    name: "Cerveza",
  },
  {
    id: "cetf",
    symbol: "cetf",
    name: "Cell ETF",
  },
  {
    id: "cexlt",
    symbol: "clt",
    name: "Cexlt",
  },
  {
    id: "cfl365-finance",
    symbol: "cfl365",
    name: "CFL365 Finance",
  },
  {
    id: "cforforum-token",
    symbol: "cfo",
    name: "Cfoforum Token",
  },
  {
    id: "cfx-quantum",
    symbol: "cfxq",
    name: "CFX Quantum",
  },
  {
    id: "chadfi",
    symbol: "chad",
    name: "ChadFi",
  },
  {
    id: "chad-link-set",
    symbol: "chadlink",
    name: "Chad Link Set",
  },
  {
    id: "chads-vc",
    symbol: "chads",
    name: "CHADS VC",
  },
  {
    id: "chai",
    symbol: "chai",
    name: "Chai",
  },
  {
    id: "chain",
    symbol: "chn",
    name: "Chain",
  },
  {
    id: "chainbing",
    symbol: "cbg",
    name: "Chainbing",
  },
  {
    id: "chaincade",
    symbol: "chaincade",
    name: "ChainCade",
  },
  {
    id: "chaincoin",
    symbol: "chc",
    name: "Chaincoin",
  },
  {
    id: "chain-colosseum",
    symbol: "colos",
    name: "Chain Colosseum",
  },
  {
    id: "chainfi",
    symbol: "cnfi",
    name: "ChainFi",
  },
  {
    id: "chainflix",
    symbol: "cfxt",
    name: "Chainflix",
  },
  {
    id: "chain-flowers",
    symbol: "cflo",
    name: "Chain Flowers",
  },
  {
    id: "chain-games",
    symbol: "chain",
    name: "Chain Games",
  },
  {
    id: "chainge-finance",
    symbol: "chng",
    name: "Chainge Finance",
  },
  {
    id: "chain-guardians",
    symbol: "cgg",
    name: "Chain Guardians",
  },
  {
    id: "chainium",
    symbol: "chx",
    name: "WeOwn",
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
  },
  {
    id: "chainlink-nft-vault-nftx",
    symbol: "cnhpd",
    name: "Chainlink NFT Vault (NFTX)",
  },
  {
    id: "chainlink-wormhole",
    symbol: "link",
    name: "Chainlink (Wormhole)",
  },
  {
    id: "chainlist",
    symbol: "clist",
    name: "Chainlist",
  },
  {
    id: "chainpay",
    symbol: "cpay",
    name: "Chainpay",
  },
  {
    id: "chain-pet",
    symbol: "cpet",
    name: "Chain Pet",
  },
  {
    id: "chainsquare",
    symbol: "chs",
    name: "Chainsquare",
  },
  {
    id: "chainswap",
    symbol: "asap",
    name: "Chainswap",
  },
  {
    id: "chain-wars-essence",
    symbol: "cwe",
    name: "Chain Wars",
  },
  {
    id: "chainx",
    symbol: "pcx",
    name: "ChainX",
  },
  {
    id: "challengedac",
    symbol: "chl",
    name: "ChallengeDAC",
  },
  {
    id: "change",
    symbol: "cag",
    name: "Change",
  },
  {
    id: "changenow",
    symbol: "now",
    name: "ChangeNOW",
  },
  {
    id: "change-our-world",
    symbol: "chg",
    name: "Change Our World",
  },
  {
    id: "changer",
    symbol: "cng",
    name: "Changer",
  },
  {
    id: "channels",
    symbol: "can",
    name: "Channels",
  },
  {
    id: "charg-coin",
    symbol: "chg",
    name: "Charg Coin",
  },
  {
    id: "chargedefi-charge",
    symbol: "charge",
    name: "ChargeDeFi Charge",
  },
  {
    id: "chargedefi-static",
    symbol: "static",
    name: "ChargeDeFi Static",
  },
  {
    id: "charged-particles",
    symbol: "ionx",
    name: "Charged Particles",
  },
  {
    id: "charitas",
    symbol: "char",
    name: "Charitas",
  },
  {
    id: "charity-alfa",
    symbol: "mich",
    name: "Charity Alfa",
  },
  {
    id: "charix-token",
    symbol: "charix",
    name: "Charix Token",
  },
  {
    id: "charizard-inu",
    symbol: "charizard",
    name: "Charizard Inu",
  },
  {
    id: "charli3",
    symbol: "c3",
    name: "Charli3",
  },
  {
    id: "charm",
    symbol: "charm",
    name: "Charm",
  },
  {
    id: "chartex",
    symbol: "chart",
    name: "ChartEx",
  },
  {
    id: "chbt",
    symbol: "chbt",
    name: "CHBT",
  },
  {
    id: "checkdot",
    symbol: "cdt",
    name: "CheckDot",
  },
  {
    id: "checoin",
    symbol: "checoin",
    name: "CheCoin",
  },
  {
    id: "chedda",
    symbol: "chedda",
    name: "Chedda",
  },
  {
    id: "chee",
    symbol: "chee",
    name: "Chee Finance",
  },
  {
    id: "cheecoin",
    symbol: "chee",
    name: "Cheecoin",
  },
  {
    id: "cheems",
    symbol: "cheems",
    name: "Cheems",
  },
  {
    id: "cheems-inu",
    symbol: "$CINU",
    name: "CHEEMS INU",
  },
  {
    id: "cheesecakeswap",
    symbol: "ccake",
    name: "CheesecakeSwap",
  },
  {
    id: "cheesedao",
    symbol: "cheez",
    name: "CheeseDAO",
  },
  {
    id: "cheesefry",
    symbol: "cheese",
    name: "CheeseFry",
  },
  {
    id: "cheesesoda-token",
    symbol: "soda",
    name: "CheeseSoda Token",
  },
  {
    id: "cheeseswap",
    symbol: "chs",
    name: "CheeseSwap",
  },
  {
    id: "cheese-swap",
    symbol: "cheese",
    name: "Cheese Swap",
  },
  {
    id: "chefcake",
    symbol: "chefcake",
    name: "ChefCake",
  },
  {
    id: "chellitcoin",
    symbol: "chlt",
    name: "Chellitcoin",
  },
  {
    id: "chemix-ecology-governance-token",
    symbol: "kun",
    name: "Chemix Ecology Governance Token",
  },
  {
    id: "cheqd-network",
    symbol: "cheq",
    name: "CHEQD Network",
  },
  {
    id: "cherry",
    symbol: "cherry",
    name: "Cherry",
  },
  {
    id: "cherry-network",
    symbol: "cher",
    name: "Cherry Network",
  },
  {
    id: "cherrypick",
    symbol: "cherry",
    name: "CherryPick",
  },
  {
    id: "cherryswap",
    symbol: "che",
    name: "CherrySwap",
  },
  {
    id: "cherry-token",
    symbol: "yt",
    name: "Cherry Token",
  },
  {
    id: "chesscoin-0-32",
    symbol: "chess",
    name: "ChessCoin 0.32%",
  },
  {
    id: "chessnft",
    symbol: "cnft",
    name: "ChessNFT",
  },
  {
    id: "chex-token",
    symbol: "chex",
    name: "CHEX Token",
  },
  {
    id: "chi",
    symbol: "chi",
    name: "Chi",
  },
  {
    id: "chia",
    symbol: "xch",
    name: "Chia",
  },
  {
    id: "chiba-inu",
    symbol: "chiba",
    name: "Chiba Inu",
  },
  {
    id: "chicken",
    symbol: "kfc",
    name: "Chicken",
  },
  {
    id: "chickenlegs",
    symbol: "corn",
    name: "ChickenLegs",
  },
  {
    id: "chicken-zilla",
    symbol: "chkn",
    name: "Chicken Zilla",
  },
  {
    id: "chi-gastoken",
    symbol: "chi",
    name: "Chi Gastoken",
  },
  {
    id: "chi-gastoken-bsc",
    symbol: "chi",
    name: "Chi Gastoken (BSC)",
  },
  {
    id: "chihiro-inu",
    symbol: "chiro",
    name: "Chihiro Inu",
  },
  {
    id: "chihuahua",
    symbol: "hua",
    name: "Chihuahua",
  },
  {
    id: "chihuahuasol",
    symbol: "chih",
    name: "ChihuahuaSol",
  },
  {
    id: "chihuahua-token",
    symbol: "huahua",
    name: "Chihuahua Chain",
  },
  {
    id: "chihuahuax",
    symbol: "chihua",
    name: "Chihuahuax",
  },
  {
    id: "chihua-token",
    symbol: "chihua",
    name: "Chihua Token",
  },
  {
    id: "chikn-egg",
    symbol: "egg",
    name: "Chikn Egg",
  },
  {
    id: "chikn-feed",
    symbol: "feed",
    name: "chikn feed",
  },
  {
    id: "chiliz",
    symbol: "chz",
    name: "Chiliz",
  },
  {
    id: "chiliz-wormhole",
    symbol: "chz",
    name: "Chiliz (Wormhole)",
  },
  {
    id: "chilliswap",
    symbol: "chli",
    name: "ChilliSwap",
  },
  {
    id: "chimaera",
    symbol: "chi",
    name: "XAYA",
  },
  {
    id: "chimeras",
    symbol: "chim",
    name: "Chimeras",
  },
  {
    id: "chimp-fight",
    symbol: "nana",
    name: "Nana",
  },
  {
    id: "chip",
    symbol: "chip",
    name: "Chip",
  },
  {
    id: "chipstars",
    symbol: "chips",
    name: "Chipstars",
  },
  {
    id: "chipz",
    symbol: "chpz",
    name: "Chipz",
  },
  {
    id: "chiva-token",
    symbol: "chiv",
    name: "Chiva Token",
  },
  {
    id: "chives-coin",
    symbol: "xcc",
    name: "Chives Coin",
  },
  {
    id: "chiwawa",
    symbol: "chiwa",
    name: "Chiwawa",
  },
  {
    id: "chonk",
    symbol: "chonk",
    name: "Chonk",
  },
  {
    id: "chopper-inu",
    symbol: "CHOPPER",
    name: "Chopper Inu",
  },
  {
    id: "chord-protocol",
    symbol: "chord",
    name: "Chord Protocol",
  },
  {
    id: "chow-chow-finance",
    symbol: "chow",
    name: "Chow Chow Finance",
  },
  {
    id: "chowdao",
    symbol: "chow",
    name: "ChowDAO",
  },
  {
    id: "chow-inu",
    symbol: "chow",
    name: "Chow Inu",
  },
  {
    id: "christmas-bnb",
    symbol: "xmasbnb",
    name: "Christmas BNB",
  },
  {
    id: "chromaway",
    symbol: "chr",
    name: "Chromia",
  },
  {
    id: "chronicle",
    symbol: "xnl",
    name: "Chronicle",
  },
  {
    id: "chronobank",
    symbol: "time",
    name: "chrono.tech",
  },
  {
    id: "chronobase",
    symbol: "tik",
    name: "ChronoBase",
  },
  {
    id: "chronologic",
    symbol: "day",
    name: "Chronologic",
  },
  {
    id: "chubbies",
    symbol: "chubbies20",
    name: "Chubbies",
  },
  {
    id: "chubbyakita",
    symbol: "cakita",
    name: "ChubbyAkita",
  },
  {
    id: "chubbydoge",
    symbol: "cdoge",
    name: "ChubbyDoge",
  },
  {
    id: "chubby-inu",
    symbol: "chinu",
    name: "Chubby Inu",
  },
  {
    id: "chug-token",
    symbol: "chug",
    name: "CHUG Token",
  },
  {
    id: "chumbai-valley",
    symbol: "chmb",
    name: "Chumbi Valley",
  },
  {
    id: "chum-coin",
    symbol: "chum",
    name: "Chum Coin",
  },
  {
    id: "chumhum-finance",
    symbol: "chum",
    name: "Chumhum Finance",
  },
  {
    id: "chunghoptoken",
    symbol: "chc",
    name: "ChunghopToken",
  },
  {
    id: "cia",
    symbol: "CIA",
    name: "CIA",
  },
  {
    id: "cifculation",
    symbol: "clc",
    name: "Cifculation",
  },
  {
    id: "cigarette-token",
    symbol: "cig",
    name: "Cigarette Token",
  },
  {
    id: "cindicator",
    symbol: "cnd",
    name: "Cindicator",
  },
  {
    id: "cindrum",
    symbol: "cind",
    name: "Cindrum",
  },
  {
    id: "cine-media-celebrity-coin",
    symbol: "cmccoin",
    name: "CINE MEDIA CELEBRITY COIN",
  },
  {
    id: "cino-games",
    symbol: "cino",
    name: "Cino Games",
  },
  {
    id: "cipher",
    symbol: "cpr",
    name: "CIPHER [OLD]",
  },
  {
    id: "cipher-2",
    symbol: "cpr",
    name: "CIPHER",
  },
  {
    id: "circleex",
    symbol: "cx",
    name: "CircleEx",
  },
  {
    id: "circlepod",
    symbol: "cpx",
    name: "Circlepod",
  },
  {
    id: "circleswap",
    symbol: "cir",
    name: "CircleSwap",
  },
  {
    id: "circuits-of-value",
    symbol: "coval",
    name: "Circuits of Value",
  },
  {
    id: "ciredo",
    symbol: "cir",
    name: "Ciredo",
  },
  {
    id: "cirquity",
    symbol: "cirq",
    name: "Cirquity",
  },
  {
    id: "cirrus",
    symbol: "crs",
    name: "Cirrus",
  },
  {
    id: "cirus",
    symbol: "cirus",
    name: "Cirus",
  },
  {
    id: "citadao",
    symbol: "knight",
    name: "CitaDAO",
  },
  {
    id: "citadel",
    symbol: "ctl",
    name: "Citadel",
  },
  {
    id: "citadel-one",
    symbol: "xct",
    name: "Citadel.one",
  },
  {
    id: "cities-vault-nftx",
    symbol: "cities",
    name: "CITIES Vault (NFTX)",
  },
  {
    id: "citizen-finance",
    symbol: "cifi",
    name: "Citizen Finance",
  },
  {
    id: "citrus",
    symbol: "cts",
    name: "Citrus",
  },
  {
    id: "city-coin",
    symbol: "city",
    name: "City Coin",
  },
  {
    id: "citystates-medieval",
    symbol: "csm",
    name: "CityStates Medieval",
  },
  {
    id: "civic",
    symbol: "cvc",
    name: "Civic",
  },
  {
    id: "civic-power",
    symbol: "power",
    name: "Civic Power",
  },
  {
    id: "civilization",
    symbol: "civ",
    name: "Civilization",
  },
  {
    id: "civitas",
    symbol: "civ",
    name: "Civitas",
  },
  {
    id: "clams",
    symbol: "clam",
    name: "Clams",
  },
  {
    id: "clash-token",
    symbol: "sct",
    name: "Clash Token",
  },
  {
    id: "classicbitcoin",
    symbol: "cbtc",
    name: "ClassicBitcoin",
  },
  {
    id: "classicdoge",
    symbol: "xdoge",
    name: "ClassicDoge",
  },
  {
    id: "classzz",
    symbol: "czz",
    name: "ClassZZ",
  },
  {
    id: "clavis",
    symbol: "clavis",
    name: "Clavis",
  },
  {
    id: "cleanocean",
    symbol: "clean",
    name: "CleanOcean",
  },
  {
    id: "clear-coin",
    symbol: "clr",
    name: "Clear Coin",
  },
  {
    id: "cleardao",
    symbol: "clh",
    name: "ClearDAO",
  },
  {
    id: "clearpoll",
    symbol: "poll",
    name: "ClearPoll",
  },
  {
    id: "clearpool",
    symbol: "cpool",
    name: "Clearpool",
  },
  {
    id: "clexchain",
    symbol: "clex",
    name: "Clexchain",
  },
  {
    id: "clientelecoin",
    symbol: "clt",
    name: "ClienteleCoin",
  },
  {
    id: "clifford-inu",
    symbol: "cliff",
    name: "Clifford Inu",
  },
  {
    id: "climb-token-finance",
    symbol: "climb",
    name: "Climb Token Finance",
  },
  {
    id: "clintex-cti",
    symbol: "cti",
    name: "ClinTex CTi",
  },
  {
    id: "cliq",
    symbol: "ct",
    name: "CLIQ",
  },
  {
    id: "cloakcoin",
    symbol: "cloak",
    name: "Cloakcoin",
  },
  {
    id: "clock-vault-nftx",
    symbol: "clock",
    name: "CLOCK Vault (NFTX)",
  },
  {
    id: "cloud9bsc-finance",
    symbol: "cloud9",
    name: "Cloud9bsc.finance",
  },
  {
    id: "cloudbric",
    symbol: "clbk",
    name: "Cloudbric",
  },
  {
    id: "cloud-protocol",
    symbol: "cpro",
    name: "Cloud Protocol",
  },
  {
    id: "cloutcontracts",
    symbol: "ccs",
    name: "CloutContracts",
  },
  {
    id: "clover",
    symbol: "clv",
    name: "Clover",
  },
  {
    id: "clover-finance",
    symbol: "clv",
    name: "Clover Finance",
  },
  {
    id: "clown-coin",
    symbol: "clown",
    name: "Clown Coin",
  },
  {
    id: "club-atletico-independiente",
    symbol: "cai",
    name: "Club Atletico Independiente Fan Token",
  },
  {
    id: "clubcoin",
    symbol: "club",
    name: "Clubcoin",
  },
  {
    id: "club-donkey",
    symbol: "cdonk",
    name: "Club Donkey",
  },
  {
    id: "clube-atletico-mineiro-fan-token",
    symbol: "galo",
    name: "Clube Atlético Mineiro Fan Token",
  },
  {
    id: "clucoin",
    symbol: "clu",
    name: "CluCoin",
  },
  {
    id: "clytie",
    symbol: "cly",
    name: "Clytie",
  },
  {
    id: "cmc-coin",
    symbol: "cmcc",
    name: "CMC Coin",
  },
  {
    id: "cmitcoin",
    symbol: "cmit",
    name: "CMITCOIN",
  },
  {
    id: "cng-casino",
    symbol: "cng",
    name: "CNG Casino",
  },
  {
    id: "cnn",
    symbol: "cnn",
    name: "Content Neutrality Network",
  },
  {
    id: "cnns",
    symbol: "cnns",
    name: "CNNS",
  },
  {
    id: "coalculus",
    symbol: "coal",
    name: "Coalculus",
  },
  {
    id: "cobak-token",
    symbol: "cbk",
    name: "Cobak Token",
  },
  {
    id: "coban",
    symbol: "coban",
    name: "COBAN",
  },
  {
    id: "cobragoose",
    symbol: "CBG",
    name: "CobraGoose",
  },
  {
    id: "cocaine-cowboy-shards",
    symbol: "coke",
    name: "Cocaine Cowboy Shards",
  },
  {
    id: "cockapoo",
    symbol: "cpoo",
    name: "Cockapoo",
  },
  {
    id: "cocktail",
    symbol: "cocktail",
    name: "Cocktail",
  },
  {
    id: "cocktailbar",
    symbol: "coc",
    name: "cocktailbar.finance",
  },
  {
    id: "cocoin",
    symbol: "cocoin",
    name: "Cocoin",
  },
  {
    id: "cocos-bcx",
    symbol: "cocos",
    name: "COCOS BCX",
  },
  {
    id: "coco-swap",
    symbol: "coco",
    name: "Coco Swap",
  },
  {
    id: "codeo-token",
    symbol: "codeo",
    name: "CODEO TOKEN",
  },
  {
    id: "codex",
    symbol: "cdex",
    name: "Codex",
  },
  {
    id: "codex-finance",
    symbol: "codex",
    name: "CODEX Finance",
  },
  {
    id: "codi-finance",
    symbol: "codi",
    name: "Codi Finance",
  },
  {
    id: "coffe-1-st-round",
    symbol: "cff",
    name: "Coffe",
  },
  {
    id: "coffeecoin",
    symbol: "cof",
    name: "CoffeeCoin",
  },
  {
    id: "coffin-dollar",
    symbol: "cousd",
    name: "Coffin Dollar",
  },
  {
    id: "coffin-finance",
    symbol: "coffin",
    name: "Coffin Finance",
  },
  {
    id: "cofinex",
    symbol: "cnx",
    name: "Cofinex",
  },
  {
    id: "cofix",
    symbol: "cofi",
    name: "CoFiX",
  },
  {
    id: "cogecoin",
    symbol: "coge",
    name: "Cogecoin",
  },
  {
    id: "cogiverse",
    symbol: "cogi",
    name: "9D NFT",
  },
  {
    id: "coic",
    symbol: "coic",
    name: "COIC Token",
  },
  {
    id: "coil-crypto",
    symbol: "coil",
    name: "Coil",
  },
  {
    id: "coin",
    symbol: "coin",
    name: "Coin",
  },
  {
    id: "coin4trade",
    symbol: "c4t",
    name: "Coin4Trade",
  },
  {
    id: "coin98",
    symbol: "c98",
    name: "Coin98",
  },
  {
    id: "coinage-finance",
    symbol: "cage",
    name: "Coinage Finance",
  },
  {
    id: "coinalpha",
    symbol: "alp",
    name: "CoinAlpha",
  },
  {
    id: "coin-artist",
    symbol: "coin",
    name: "Coin Artist",
  },
  {
    id: "coinary-token",
    symbol: "cyt",
    name: "Coinary Token",
  },
  {
    id: "coinbase-stock",
    symbol: "coin",
    name: "Coinbase Tokenized Stock on FTX",
  },
  {
    id: "coinbase-stock-bittrex",
    symbol: "coin",
    name: "Coinbase Tokenized Stock on Bittrex",
  },
  {
    id: "coinburp",
    symbol: "burp",
    name: "CoinBurp",
  },
  {
    id: "coin-capsule",
    symbol: "caps",
    name: "Ternoa",
  },
  {
    id: "coinclaim",
    symbol: "clm",
    name: "CoinClaim",
  },
  {
    id: "coindeal-token",
    symbol: "cdl",
    name: "CoinDeal Token",
  },
  {
    id: "coin-discovery",
    symbol: "codi",
    name: "Coin Discovery",
  },
  {
    id: "coindom",
    symbol: "scc",
    name: "Stem Cell Coin",
  },
  {
    id: "coinex-token",
    symbol: "cet",
    name: "CoinEx Token",
  },
  {
    id: "coinfi",
    symbol: "cofi",
    name: "CoinFi",
  },
  {
    id: "coinfirm-amlt",
    symbol: "amlt",
    name: "AMLT Network",
  },
  {
    id: "coinflect",
    symbol: "cflt",
    name: "Coinflect",
  },
  {
    id: "coinfresh",
    symbol: "cfresh",
    name: "Coinfresh",
  },
  {
    id: "coingress",
    symbol: "cgress",
    name: "Coingress",
  },
  {
    id: "coin-guardian",
    symbol: "cgd",
    name: "Coin Guardian",
  },
  {
    id: "coinhunters",
    symbol: "chtrv2",
    name: "Coinhunters",
  },
  {
    id: "coinlancer",
    symbol: "cl",
    name: "Coinlancer",
  },
  {
    id: "coinlion",
    symbol: "lion",
    name: "CoinLion",
  },
  {
    id: "coinloan",
    symbol: "clt",
    name: "CoinLoan",
  },
  {
    id: "coinmeet",
    symbol: "meet",
    name: "CoinMeet",
  },
  {
    id: "coinmerge",
    symbol: "cmerge",
    name: "CoinMerge (ERC20)",
  },
  {
    id: "coinmerge-bsc",
    symbol: "cmerge",
    name: "CoinMerge (BEP20)",
  },
  {
    id: "coinmetro",
    symbol: "xcm",
    name: "CoinMetro",
  },
  {
    id: "coinmooner",
    symbol: "mooner",
    name: "CoinMooner",
  },
  {
    id: "coinnec",
    symbol: "coi",
    name: "Coinnec",
  },
  {
    id: "coin-of-nature",
    symbol: "con",
    name: "Coin of Nature",
  },
  {
    id: "coin-of-the-champions",
    symbol: "coc",
    name: "Coin of the champions",
  },
  {
    id: "coinone-token",
    symbol: "cone",
    name: "CoinOne Token",
  },
  {
    id: "coinpad",
    symbol: "CP",
    name: "Coinpad",
  },
  {
    id: "coinpoker",
    symbol: "chp",
    name: "CoinPoker",
  },
  {
    id: "coinracer",
    symbol: "crace",
    name: "Coinracer",
  },
  {
    id: "coin-sack",
    symbol: "cs",
    name: "Coin Sack",
  },
  {
    id: "coinsale",
    symbol: "csf",
    name: "Coinsale",
  },
  {
    id: "coinsbit-token",
    symbol: "cnb",
    name: "Coinsbit Token",
  },
  {
    id: "coinscope",
    symbol: "coinscope",
    name: "Coinscope",
  },
  {
    id: "coinspaid",
    symbol: "cpd",
    name: "CoinsPaid",
  },
  {
    id: "coinstox",
    symbol: "csx",
    name: "Coinstox",
  },
  {
    id: "coinsuper-ecosystem-network",
    symbol: "cen",
    name: "Coinsuper Ecosystem Network",
  },
  {
    id: "coinswap",
    symbol: "coins",
    name: "CoinSwap",
  },
  {
    id: "coinswap-space",
    symbol: "css",
    name: "CoinSwap Space",
  },
  {
    id: "coin-to-fish",
    symbol: "CTFT",
    name: "Coin To Fish",
  },
  {
    id: "cointorox",
    symbol: "orox",
    name: "Cointorox",
  },
  {
    id: "cointribe",
    symbol: "ctribe",
    name: "CoinTribe",
  },
  {
    id: "cointribute",
    symbol: "ctb",
    name: "Cointribute",
  },
  {
    id: "coinversation",
    symbol: "cto",
    name: "Coinversation",
  },
  {
    id: "coinweb",
    symbol: "cweb",
    name: "Coinweb",
  },
  {
    id: "coinwind",
    symbol: "cow",
    name: "CoinWind",
  },
  {
    id: "coinxpad",
    symbol: "cxpad",
    name: "CoinxPad",
  },
  {
    id: "coinzoom-token",
    symbol: "zoom",
    name: "CoinZoom Token",
  },
  {
    id: "cola-token",
    symbol: "cola",
    name: "Cola Token",
  },
  {
    id: "coldbank",
    symbol: "cold",
    name: "Coldbank",
  },
  {
    id: "cold-finance",
    symbol: "cold",
    name: "Cold Finance",
  },
  {
    id: "coldstack",
    symbol: "cls",
    name: "Coldstack",
  },
  {
    id: "collar-dobe-defender",
    symbol: "collar",
    name: "Collar: Dobe Defender",
  },
  {
    id: "collateral-pay",
    symbol: "coll",
    name: "Collateral Pay",
  },
  {
    id: "collateral-pay-governance",
    symbol: "collg",
    name: "Collateral Pay Governance",
  },
  {
    id: "collectcoin",
    symbol: "clct",
    name: "CollectCoin",
  },
  {
    id: "collectible",
    symbol: "collt",
    name: "Collectible",
  },
  {
    id: "collective",
    symbol: "co2",
    name: "Collective",
  },
  {
    id: "collective-vault-nftx",
    symbol: "collective",
    name: "COLLECTIVE Vault (NFTX)",
  },
  {
    id: "collector-coin",
    symbol: "ags",
    name: "Collector Coin",
  },
  {
    id: "collegecoinnetwork",
    symbol: "ccn",
    name: "CollegeCoinNetwork",
  },
  {
    id: "collegicoin",
    symbol: "clg",
    name: "Collegicoin",
  },
  {
    id: "colligo-token",
    symbol: "cotk",
    name: "Colligo Token",
  },
  {
    id: "colony",
    symbol: "cly",
    name: "Colony",
  },
  {
    id: "color",
    symbol: "clr",
    name: "Color Platform",
  },
  {
    id: "colossuscoinxt",
    symbol: "colx",
    name: "ColossusXT",
  },
  {
    id: "columbus",
    symbol: "cbs",
    name: "Columbus",
  },
  {
    id: "comb-finance",
    symbol: "comb",
    name: "Comb Finance",
  },
  {
    id: "combine-finance",
    symbol: "comb",
    name: "Combine.finance",
  },
  {
    id: "combo-2",
    symbol: "comb",
    name: "Combo",
  },
  {
    id: "comdex",
    symbol: "cmdx",
    name: "Comdex",
  },
  {
    id: "comet-nodes",
    symbol: "comet",
    name: "Comet Nodes",
  },
  {
    id: "comfy",
    symbol: "comfy",
    name: "Comfy",
  },
  {
    id: "comfy-share",
    symbol: "cshare",
    name: "Comfy Share",
  },
  {
    id: "comfytoken",
    symbol: "comfy",
    name: "ComfyToken",
  },
  {
    id: "commercium",
    symbol: "cmm",
    name: "Commercium",
  },
  {
    id: "commons-earth",
    symbol: "com",
    name: "Commons Earth",
  },
  {
    id: "communifty",
    symbol: "cnft",
    name: "Communifty",
  },
  {
    id: "community-business-token",
    symbol: "cbt",
    name: "Community Business Token",
  },
  {
    id: "community-chain",
    symbol: "comc",
    name: "Community Chain",
  },
  {
    id: "community-coin-2",
    symbol: "ctc",
    name: "Community Coin Token",
  },
  {
    id: "community-coin-token",
    symbol: "cmc",
    name: "Community Coin",
  },
  {
    id: "community-doge-coin",
    symbol: "ccdoge",
    name: "Community Doge Coin",
  },
  {
    id: "community-metaverse",
    symbol: "comt",
    name: "Community Token",
  },
  {
    id: "communitytoken",
    symbol: "ct",
    name: "Cojam",
  },
  {
    id: "comodo-coin",
    symbol: "cmd",
    name: "Comodo Coin",
  },
  {
    id: "compendium-fi",
    symbol: "cmfi",
    name: "Compendium.Fi",
  },
  {
    id: "complete-humanity",
    symbol: "humanity",
    name: "Complete Humanity",
  },
  {
    id: "complifi",
    symbol: "comfi",
    name: "CompliFi",
  },
  {
    id: "complus-network",
    symbol: "com",
    name: "Complus Network",
  },
  {
    id: "component",
    symbol: "cmp",
    name: "Component",
  },
  {
    id: "compound-0x",
    symbol: "czrx",
    name: "c0x",
  },
  {
    id: "compound-basic-attention-token",
    symbol: "cbat",
    name: "cBAT",
  },
  {
    id: "compound-coin",
    symbol: "comp",
    name: "Compound Coin",
  },
  {
    id: "compound-ether",
    symbol: "ceth",
    name: "cETH",
  },
  {
    id: "compound-governance-token",
    symbol: "comp",
    name: "Compound",
  },
  {
    id: "compound-maker",
    symbol: "cmkr",
    name: "cMKR",
  },
  {
    id: "compound-sai",
    symbol: "csai",
    name: "cSAI",
  },
  {
    id: "compound-sushi",
    symbol: "csushi",
    name: "cSUSHI",
  },
  {
    id: "compound-uniswap",
    symbol: "cuni",
    name: "cUNI",
  },
  {
    id: "compound-usd-coin",
    symbol: "cusdc",
    name: "cUSDC",
  },
  {
    id: "compound-usdt",
    symbol: "cusdt",
    name: "cUSDT",
  },
  {
    id: "compound-wormhole",
    symbol: "comp",
    name: "Compound (Wormhole)",
  },
  {
    id: "compound-wrapped-btc",
    symbol: "cwbtc",
    name: "cWBTC",
  },
  {
    id: "compound-wrapped-btc-legacy",
    symbol: "cwbtc",
    name: "cWBTC (Legacy)",
  },
  {
    id: "compound-yearn-finance",
    symbol: "cyfi",
    name: "cYFI",
  },
  {
    id: "comsa",
    symbol: "cms",
    name: "COMSA",
  },
  {
    id: "conceal",
    symbol: "ccx",
    name: "Conceal",
  },
  {
    id: "concentrated-voting-power",
    symbol: "cvp",
    name: "PowerPool Concentrated Voting Power",
  },
  {
    id: "concern-proverty-chain",
    symbol: "chy",
    name: "Concern Poverty Chain",
  },
  {
    id: "concertvr",
    symbol: "cvt",
    name: "concertVR",
  },
  {
    id: "concierge-io",
    symbol: "ava",
    name: "Travala.com",
  },
  {
    id: "condensate",
    symbol: "rain",
    name: "Condensate",
  },
  {
    id: "conegame",
    symbol: "conegame",
    name: "ConeGame",
  },
  {
    id: "conflux-token",
    symbol: "cfx",
    name: "Conflux",
  },
  {
    id: "conjee",
    symbol: "CONJ",
    name: "Conjee",
  },
  {
    id: "conjure",
    symbol: "cnj",
    name: "Conjure",
  },
  {
    id: "connect-coin",
    symbol: "xcon",
    name: "Connect Coin",
  },
  {
    id: "connect-financial",
    symbol: "cnfi",
    name: "Connect Financial",
  },
  {
    id: "connectico",
    symbol: "con",
    name: "Connectico",
  },
  {
    id: "connectjob",
    symbol: "cjt",
    name: "ConnectJob",
  },
  {
    id: "connectome",
    symbol: "cntm",
    name: "Connectome",
  },
  {
    id: "consentium",
    symbol: "csm",
    name: "Consentium",
  },
  {
    id: "constellation-labs",
    symbol: "dag",
    name: "Constellation",
  },
  {
    id: "constitutiondao",
    symbol: "people",
    name: "ConstitutionDAO",
  },
  {
    id: "constitutiondao-wormhole",
    symbol: "people",
    name: "ConstitutionDAO (Wormhole)",
  },
  {
    id: "contentbox",
    symbol: "box",
    name: "ContentBox",
  },
  {
    id: "contentos",
    symbol: "cos",
    name: "Contentos",
  },
  {
    id: "content-value-network",
    symbol: "cvnt",
    name: "Conscious Value Network",
  },
  {
    id: "continuum-world",
    symbol: "um",
    name: "Continuum World",
  },
  {
    id: "contracoin",
    symbol: "ctcn",
    name: "Contracoin",
  },
  {
    id: "contraction-dynamic-set-dollar",
    symbol: "cdsd",
    name: "Contraction Dynamic Set Dollar",
  },
  {
    id: "contracto",
    symbol: "lock",
    name: "Contracto",
  },
  {
    id: "contribute",
    symbol: "trib",
    name: "Contribute",
  },
  {
    id: "conun",
    symbol: "con",
    name: "CONUN",
  },
  {
    id: "convergence",
    symbol: "conv",
    name: "Convergence",
  },
  {
    id: "converter-finance",
    symbol: "con",
    name: "Converter Finance",
  },
  {
    id: "convex-crv",
    symbol: "cvxcrv",
    name: "Convex CRV",
  },
  {
    id: "convex-finance",
    symbol: "cvx",
    name: "Convex Finance",
  },
  {
    id: "convex-finance-wormhole",
    symbol: "cvx",
    name: "Convex Finance (Wormhole)",
  },
  {
    id: "cook",
    symbol: "cook",
    name: "Cook",
  },
  {
    id: "cool-cats",
    symbol: "cool20",
    name: "Cool Cats",
  },
  {
    id: "cool-vault-nftx",
    symbol: "cool",
    name: "COOL Vault (NFTX)",
  },
  {
    id: "coomcoin",
    symbol: "coom",
    name: "CoomCoin",
  },
  {
    id: "cope",
    symbol: "cope",
    name: "Cope",
  },
  {
    id: "copiosa",
    symbol: "cop",
    name: "Copiosa",
  },
  {
    id: "cops-finance",
    symbol: "cops",
    name: "Cops Finance",
  },
  {
    id: "copuppy",
    symbol: "cp",
    name: "CoPuppy",
  },
  {
    id: "copycat-finance",
    symbol: "copycat",
    name: "Copycat Finance",
  },
  {
    id: "coral-swap",
    symbol: "coral",
    name: "Coral Swap",
  },
  {
    id: "cord-finance",
    symbol: "cord",
    name: "CORD.Finance",
  },
  {
    id: "core",
    symbol: "cmcx",
    name: "CORE MultiChain",
  },
  {
    id: "corestarter",
    symbol: "cstr",
    name: "CoreStarter",
  },
  {
    id: "coreto",
    symbol: "cor",
    name: "Coreto",
  },
  {
    id: "corgicoin",
    symbol: "corgi",
    name: "CorgiCoin",
  },
  {
    id: "corgidoge",
    symbol: "corgi",
    name: "Corgidoge",
  },
  {
    id: "corgi-inu",
    symbol: "corgi",
    name: "Corgi Inu",
  },
  {
    id: "corginftgame",
    symbol: "cor",
    name: "CorgiNFTGame",
  },
  {
    id: "corgiswap",
    symbol: "coris",
    name: "CorgiSwap",
  },
  {
    id: "corionx",
    symbol: "corx",
    name: "CorionX",
  },
  {
    id: "corn",
    symbol: "corn",
    name: "CORN",
  },
  {
    id: "cornatto",
    symbol: "cnc",
    name: "Cornatto",
  },
  {
    id: "cornichon",
    symbol: "corn",
    name: "Cornichon",
  },
  {
    id: "cornucopias",
    symbol: "copi",
    name: "Cornucopias",
  },
  {
    id: "corra-finance",
    symbol: "cora",
    name: "Corra.Finance",
  },
  {
    id: "corsac-v2",
    symbol: "csct",
    name: "Corsac v2",
  },
  {
    id: "cortex",
    symbol: "ctxc",
    name: "Cortex",
  },
  {
    id: "coshi-inu",
    symbol: "coshi",
    name: "CoShi Inu",
  },
  {
    id: "cosmic-ape-coin",
    symbol: "CAC",
    name: "Cosmic Ape Coin",
  },
  {
    id: "cosmic-coin",
    symbol: "cosmic",
    name: "Cosmic Coin",
  },
  {
    id: "cosmic-music",
    symbol: "csmc",
    name: "Cosmic Music",
  },
  {
    id: "cosmicswap",
    symbol: "cosmic",
    name: "CosmicSwap",
  },
  {
    id: "cosmic-universe-magic-token",
    symbol: "magic",
    name: "Cosmic Universe Magic Token",
  },
  {
    id: "cosmo-coin",
    symbol: "cosm",
    name: "Cosmo Coin",
  },
  {
    id: "cosmos",
    symbol: "atom",
    name: "Cosmos",
  },
  {
    id: "cosmostarter",
    symbol: "csms",
    name: "Cosmostarter",
  },
  {
    id: "cosplay-token",
    symbol: "cot",
    name: "Cosplay Token (OLD)",
  },
  {
    id: "cosplay-token-2",
    symbol: "cot",
    name: "Cosplay Token",
  },
  {
    id: "cost-coin",
    symbol: "akm",
    name: "COST COIN+",
  },
  {
    id: "coti",
    symbol: "coti",
    name: "COTI",
  },
  {
    id: "cotrader",
    symbol: "cot",
    name: "CoTrader",
  },
  {
    id: "couchain",
    symbol: "cou",
    name: "Couchain",
  },
  {
    id: "cougar-token",
    symbol: "cgs",
    name: "Cougar Token",
  },
  {
    id: "council-of-apes",
    symbol: "coape",
    name: "Council of Apes",
  },
  {
    id: "counos-coin",
    symbol: "cca",
    name: "Counos Coin",
  },
  {
    id: "counosx",
    symbol: "ccxx",
    name: "CounosX",
  },
  {
    id: "counterparty",
    symbol: "xcp",
    name: "Counterparty",
  },
  {
    id: "county-metaverse",
    symbol: "county",
    name: "County Metaverse",
  },
  {
    id: "cousin-doge",
    symbol: "cousindoge",
    name: "Cousin Doge",
  },
  {
    id: "covalent",
    symbol: "cqt",
    name: "Covalent",
  },
  {
    id: "covalent-cova",
    symbol: "cova",
    name: "Cova Unity",
  },
  {
    id: "covenant-child",
    symbol: "covn",
    name: "Covenant",
  },
  {
    id: "covercompared",
    symbol: "cvr",
    name: "CoverCompared",
  },
  {
    id: "cover-protocol",
    symbol: "cover",
    name: "Cover Protocol",
  },
  {
    id: "covesting",
    symbol: "cov",
    name: "Covesting",
  },
  {
    id: "covicoin",
    symbol: "cvc",
    name: "CoviCoin",
  },
  {
    id: "covid-slice",
    symbol: "covid19",
    name: "Covid Slice",
  },
  {
    id: "covid-token",
    symbol: "covidtoken",
    name: "Covid Token",
  },
  {
    id: "cowboy-snake",
    symbol: "cows",
    name: "Cowboy Snake",
  },
  {
    id: "cow-inu",
    symbol: "ci",
    name: "Cow Inu",
  },
  {
    id: "cowry",
    symbol: "cow",
    name: "COWRY",
  },
  {
    id: "coxswap",
    symbol: "cox",
    name: "Coxswap",
  },
  {
    id: "cpchain",
    symbol: "cpc",
    name: "CPChain",
  },
  {
    id: "cpos-cloud-payment",
    symbol: "cpos",
    name: "CPOS Cloud Payment",
  },
  {
    id: "cprop",
    symbol: "cprop",
    name: "CPROP",
  },
  {
    id: "cpuchain",
    symbol: "cpu",
    name: "CPUchain",
  },
  {
    id: "cpucoin",
    symbol: "cpu",
    name: "CPUcoin",
  },
  {
    id: "crabada",
    symbol: "cra",
    name: "Crabada",
  },
  {
    id: "crabada-amulet",
    symbol: "cram",
    name: "Crabada Amulet",
  },
  {
    id: "crafting-finance",
    symbol: "crf",
    name: "Crafting Finance",
  },
  {
    id: "craft-network",
    symbol: "cft",
    name: "Craft network",
  },
  {
    id: "cranberry",
    symbol: "crnbry",
    name: "Cranberry",
  },
  {
    id: "cranx-chain",
    symbol: "granx",
    name: "GranX Chain",
  },
  {
    id: "cratos",
    symbol: "crts",
    name: "Cratos",
  },
  {
    id: "crave",
    symbol: "crave",
    name: "Crave",
  },
  {
    id: "crazy-bunny-equity-token",
    symbol: "cbunny",
    name: "Crazy Bunny Equity Token",
  },
  {
    id: "crazyminer",
    symbol: "pwr",
    name: "CrazyMiner",
  },
  {
    id: "crazy-rich-coin",
    symbol: "crc",
    name: "Crazy Rich Coin",
  },
  {
    id: "crazytime",
    symbol: "crazytime",
    name: "CrazyTime",
  },
  {
    id: "crb-coin",
    symbol: "crb",
    name: "CRB Coin",
  },
  {
    id: "crd-network",
    symbol: "crd",
    name: "CRD Network",
  },
  {
    id: "crdt",
    symbol: "CRDT",
    name: "CRDT",
  },
  {
    id: "cre8r-dao",
    symbol: "cre8r",
    name: "CRE8R DAO",
  },
  {
    id: "cream",
    symbol: "crm",
    name: "Creamcoin",
  },
  {
    id: "cream-2",
    symbol: "cream",
    name: "Cream",
  },
  {
    id: "cream-eth2",
    symbol: "creth2",
    name: "Cream ETH 2",
  },
  {
    id: "creampye",
    symbol: "pye",
    name: "Creampye [OLD]",
  },
  {
    id: "cream-wormhole",
    symbol: "cream",
    name: "Cream (Wormhole)",
  },
  {
    id: "creaticles",
    symbol: "cre8",
    name: "Creaticles",
  },
  {
    id: "creativecoin",
    symbol: "crea",
    name: "CREA",
  },
  {
    id: "creator-platform",
    symbol: "ctr",
    name: "Creator Platform",
  },
  {
    id: "creator-protocol",
    symbol: "cre",
    name: "Creator Protocol",
  },
  {
    id: "creda",
    symbol: "creda",
    name: "CreDA",
  },
  {
    id: "credefi",
    symbol: "credi",
    name: "Credefi",
  },
  {
    id: "credit",
    symbol: "credit",
    name: "TerraCredit",
  },
  {
    id: "credit-2",
    symbol: "CREDIT",
    name: "PROXI DeFi",
  },
  {
    id: "creditcoin-2",
    symbol: "ctc",
    name: "Creditcoin",
  },
  {
    id: "credit-printer",
    symbol: "creditp",
    name: "Credit Printer",
  },
  {
    id: "credits",
    symbol: "cs",
    name: "CREDITS",
  },
  {
    id: "creditum",
    symbol: "credit",
    name: "Creditum",
  },
  {
    id: "credmark",
    symbol: "cmk",
    name: "Credmark",
  },
  {
    id: "creds",
    symbol: "creds",
    name: "Creds",
  },
  {
    id: "creed-finance",
    symbol: "creed",
    name: "Creed Finance",
  },
  {
    id: "crespo",
    symbol: "cso",
    name: "Crespo",
  },
  {
    id: "crevacoin",
    symbol: "creva",
    name: "Crevacoin",
  },
  {
    id: "crex-token",
    symbol: "crex",
    name: "Crex Token",
  },
  {
    id: "cribnb",
    symbol: "crb",
    name: "Cribnb",
  },
  {
    id: "cricket-foundation",
    symbol: "cric",
    name: "Cricket Foundation",
  },
  {
    id: "crimecash",
    symbol: "ccash",
    name: "CrimeCash",
  },
  {
    id: "crimegold",
    symbol: "cgold",
    name: "CrimeGold",
  },
  {
    id: "criptoro-coin",
    symbol: "ctro",
    name: "Criptoro Coin",
  },
  {
    id: "crir-msh",
    symbol: "msh",
    name: "CRIR MSH",
  },
  {
    id: "croat",
    symbol: "croat",
    name: "CROAT",
  },
  {
    id: "croblanc",
    symbol: "croblanc",
    name: "Croblanc",
  },
  {
    id: "crodex",
    symbol: "crx",
    name: "Crodex",
  },
  {
    id: "croissant-games",
    symbol: "croissant",
    name: "Croissant Games",
  },
  {
    id: "croking",
    symbol: "crk",
    name: "Croking",
  },
  {
    id: "cromoon",
    symbol: "moon",
    name: "CroMoon",
  },
  {
    id: "cronaswap",
    symbol: "crona",
    name: "CronaSwap",
  },
  {
    id: "cronodes",
    symbol: "crn",
    name: "CroNodes",
  },
  {
    id: "cronofi-finance",
    symbol: "crono",
    name: "Cronofi Finance",
  },
  {
    id: "cropbytes",
    symbol: "cbx",
    name: "CropBytes",
  },
  {
    id: "cropperfinance",
    symbol: "crp",
    name: "CropperFinance",
  },
  {
    id: "cross-chain-bch",
    symbol: "ccbch",
    name: "Cross-Chain BCH",
  },
  {
    id: "cross-chain-bridge-token",
    symbol: "bridge",
    name: "Cross-Chain Bridge Token",
  },
  {
    id: "cross-chain-capital",
    symbol: "ccc",
    name: "Cross Chain Capital",
  },
  {
    id: "cross-chain-farming",
    symbol: "CCF",
    name: "Cross Chain Farming",
  },
  {
    id: "crosschain-iotx",
    symbol: "ciotx",
    name: "Crosschain IOTX",
  },
  {
    id: "crossfi",
    symbol: "crfi",
    name: "CrossFi",
  },
  {
    id: "crossing-the-yellow-blocks",
    symbol: "cbk",
    name: "Crossing the Yellow Blocks",
  },
  {
    id: "crosspad",
    symbol: "cross",
    name: "CrossPad",
  },
  {
    id: "crossswap",
    symbol: "cswap",
    name: "CrossSwap",
  },
  {
    id: "crosswallet",
    symbol: "cwt",
    name: "CrossWallet",
  },
  {
    id: "crossy-animals",
    symbol: "ca",
    name: "Crossy Animals",
  },
  {
    id: "crowdclassic",
    symbol: "crcl",
    name: "CRowdCLassic",
  },
  {
    id: "crowdhero",
    symbol: "crwd",
    name: "CrowdHero",
  },
  {
    id: "crowd-machine",
    symbol: "cmct",
    name: "Crowd Machine",
  },
  {
    id: "crown",
    symbol: "crw",
    name: "Crown",
  },
  {
    id: "crowns",
    symbol: "cws",
    name: "Seascape Crowns",
  },
  {
    id: "crown-sovereign",
    symbol: "csov",
    name: "Crown Sovereign",
  },
  {
    id: "crowny-token",
    symbol: "crwny",
    name: "Crowny Token",
  },
  {
    id: "crow-token",
    symbol: "crow",
    name: "Crow",
  },
  {
    id: "croxswap",
    symbol: "crox",
    name: "CroxSwap",
  },
  {
    id: "crude-token",
    symbol: "crude",
    name: "Crude Token",
  },
  {
    id: "crunch",
    symbol: "crunch",
    name: "Crunchy",
  },
  {
    id: "crunchy-dao",
    symbol: "crdao",
    name: "Crunchy DAO",
  },
  {
    id: "crunchy-network",
    symbol: "crunch",
    name: "Crunchy Network",
  },
  {
    id: "crusaders-of-crypto",
    symbol: "crusader",
    name: "Crusaders of Crypto",
  },
  {
    id: "crust-network",
    symbol: "cru",
    name: "Crust Network",
  },
  {
    id: "crust-storage-market",
    symbol: "csm",
    name: "Crust Shadow",
  },
  {
    id: "crybet",
    symbol: "cbt",
    name: "CryBet",
  },
  {
    id: "crycash",
    symbol: "crc",
    name: "CRYCASH",
  },
  {
    id: "cry-coin",
    symbol: "CRYY",
    name: "Cry Coin",
  },
  {
    id: "cryowar-token",
    symbol: "cwar",
    name: "Cryowar",
  },
  {
    id: "crypcade-shares",
    symbol: "cade",
    name: "CrypCade Shares",
  },
  {
    id: "cryptalk",
    symbol: "cryp",
    name: "Cryptalk",
  },
  {
    id: "cryptaur",
    symbol: "cpt",
    name: "Cryptaur",
  },
  {
    id: "crypterium",
    symbol: "crpt",
    name: "Crypterium",
  },
  {
    id: "cryptertoken",
    symbol: "crypt",
    name: "CrypterToken",
  },
  {
    id: "cryptex",
    symbol: "crx",
    name: "CryptEx",
  },
  {
    id: "cryptex-finance",
    symbol: "ctx",
    name: "Cryptex Finance",
  },
  {
    id: "cryptia",
    symbol: "crypt",
    name: "Cryptia",
  },
  {
    id: "cryptid",
    symbol: "cid",
    name: "Cryptid",
  },
  {
    id: "cryption-network",
    symbol: "cnt",
    name: "Cryption Network",
  },
  {
    id: "crypto20",
    symbol: "c20",
    name: "CRYPTO20",
  },
  {
    id: "crypto-accept",
    symbol: "acpt",
    name: "Crypto Accept",
  },
  {
    id: "crypto-against-cancer",
    symbol: "cact",
    name: "Crypto Against Cancer",
  },
  {
    id: "crypto-application-token",
    symbol: "capp",
    name: "Crypto Application Token",
  },
  {
    id: "crypto-arcade-punk",
    symbol: "c-arcade",
    name: "Crypto Arcade Punk",
  },
  {
    id: "cryptoart-ai",
    symbol: "cart",
    name: "CryptoArt.Ai",
  },
  {
    id: "crypto-bank",
    symbol: "cbank",
    name: "Crypto Bank",
  },
  {
    id: "crypto-bank-coin",
    symbol: "cbc",
    name: "Crypto Bank Coin",
  },
  {
    id: "crypto-bank-token",
    symbol: "cbt",
    name: "Crypto Bank Token",
  },
  {
    id: "cryptobay",
    symbol: "bay",
    name: "CryptoBay",
  },
  {
    id: "crypto-bay",
    symbol: "pearl",
    name: "Crypto Bay",
  },
  {
    id: "cryptobeast",
    symbol: "beast",
    name: "CryptoBeast",
  },
  {
    id: "cryptobet",
    symbol: "cbet",
    name: "CryptoBet",
  },
  {
    id: "cryptobike",
    symbol: "cb",
    name: "CryptoBike",
  },
  {
    id: "crypto-bike-riders",
    symbol: "riders",
    name: "Crypto Bike Riders",
  },
  {
    id: "crypto-birds",
    symbol: "xcb",
    name: "Crypto Birds",
  },
  {
    id: "cryptoblades",
    symbol: "skill",
    name: "CryptoBlades",
  },
  {
    id: "cryptoblades-kingdoms",
    symbol: "king",
    name: "CryptoBlades Kingdoms",
  },
  {
    id: "cryptoblast",
    symbol: "cbt",
    name: "CryptoBlast",
  },
  {
    id: "cryptobonusmiles",
    symbol: "cbm",
    name: "CryptoBonusMiles",
  },
  {
    id: "cryptobosscoin",
    symbol: "cbc",
    name: "CryptoBossCoin",
  },
  {
    id: "cryptobucks",
    symbol: "CBUCKS",
    name: "CRYPTOBUCKS",
  },
  {
    id: "cryptobuyer-token",
    symbol: "xpt",
    name: "Cryptobuyer Token",
  },
  {
    id: "crypto-candy",
    symbol: "candy",
    name: "Crypto Candy",
  },
  {
    id: "crypto-carbon-energy",
    symbol: "cyce",
    name: "Crypto Carbon Energy",
  },
  {
    id: "cryptocars",
    symbol: "ccar",
    name: "CryptoCars",
  },
  {
    id: "crypto-cars-world",
    symbol: "cars",
    name: "Crypto Cars World",
  },
  {
    id: "cryptocart",
    symbol: "ccv2",
    name: "CryptoCart V2",
  },
  {
    id: "cryptocat",
    symbol: "ccat",
    name: "CryptoCat",
  },
  {
    id: "cryptocean",
    symbol: "cron",
    name: "Cryptocean",
  },
  {
    id: "cryptochrome",
    symbol: "chm",
    name: "Cryptochrome",
  },
  {
    id: "cryptoclans",
    symbol: "coc",
    name: "CryptoClans",
  },
  {
    id: "crypto-classic",
    symbol: "crc",
    name: "Crypto Classic",
  },
  {
    id: "crypto-com-chain",
    symbol: "cro",
    name: "Crypto.com Coin",
  },
  {
    id: "crypto-com-coin-wormhole",
    symbol: "cro",
    name: "Crypto.com Coin (Wormhole)",
  },
  {
    id: "cryptocricketclub",
    symbol: "3cs",
    name: "CryptoCricketClub",
  },
  {
    id: "cryptocurrency-top-10-tokens-index",
    symbol: "cc10",
    name: "Cryptocurrency Top 10 Index",
  },
  {
    id: "crypto-development-services",
    symbol: "CDS",
    name: "Crypto Development Services",
  },
  {
    id: "cryptodicehero",
    symbol: "hro",
    name: "CryptoDiceHero",
  },
  {
    id: "cryptodogs",
    symbol: "crd",
    name: "CryptoDogs",
  },
  {
    id: "cryptodrop",
    symbol: "cdrop",
    name: "CryptoDrop",
  },
  {
    id: "cryptoenergy",
    symbol: "cnrg",
    name: "CryptoEnergy",
  },
  {
    id: "crypto-energy-token",
    symbol: "CET",
    name: "Crypto Energy Token",
  },
  {
    id: "crypto-excellence",
    symbol: "ce",
    name: "Crypto Excellence",
  },
  {
    id: "cryptoexpress",
    symbol: "xpress",
    name: "CryptoXpress",
  },
  {
    id: "crypto-fantasy-coin",
    symbol: "CFC",
    name: "Crypto Fantasy Coin",
  },
  {
    id: "crypto-fantasy-league",
    symbol: "cfl",
    name: "Crypto Fantasy League",
  },
  {
    id: "cryptofarming",
    symbol: "$CFAR",
    name: "CryptoFarming",
  },
  {
    id: "cryptofifa",
    symbol: "ffa",
    name: "FFA.Games",
  },
  {
    id: "crypto-fight-club",
    symbol: "fight",
    name: "Crypto Fight Club",
  },
  {
    id: "cryptoflow",
    symbol: "cfl",
    name: "Cryptoflow",
  },
  {
    id: "cryptoforspeed",
    symbol: "cfs",
    name: "CryptoForSpeed",
  },
  {
    id: "cryptofranc",
    symbol: "xchf",
    name: "CryptoFranc",
  },
  {
    id: "crypto-gaming-united",
    symbol: "cgu",
    name: "Crypto Gaming United",
  },
  {
    id: "cryptogcoin",
    symbol: "crg",
    name: "Cryptogcoin",
  },
  {
    id: "crypto-gladiator-shards",
    symbol: "cgs",
    name: "Crypto Gladiator Shards",
  },
  {
    id: "crypto-global-bank",
    symbol: "cgb",
    name: "Crypto Global Bank",
  },
  {
    id: "cryptogodz",
    symbol: "godz",
    name: "Cryptogodz",
  },
  {
    id: "cryptogram",
    symbol: "cryptogram",
    name: "Cryptogram",
  },
  {
    id: "cryptographic-ultra-money",
    symbol: "cum",
    name: "Cryptographic Ultra Money",
  },
  {
    id: "cryptoguards",
    symbol: "cgar",
    name: "CryptoGuards",
  },
  {
    id: "cryptoheadz",
    symbol: "headz",
    name: "Cryptoheadz",
  },
  {
    id: "crypto-holding-frank-token",
    symbol: "chft",
    name: "Crypto Holding Frank Token",
  },
  {
    id: "crypto-hounds",
    symbol: "cth",
    name: "Crypto Hounds",
  },
  {
    id: "cryptoindex-io",
    symbol: "cix100",
    name: "Cryptoindex.com 100",
  },
  {
    id: "crypto-island",
    symbol: "cisla",
    name: "Crypto Island",
  },
  {
    id: "crypto-jackpot",
    symbol: "cjp",
    name: "Crypto Jackpot",
  },
  {
    id: "cryptojetski",
    symbol: "cjet",
    name: "CryptoJetski",
  },
  {
    id: "cryptokek",
    symbol: "kek",
    name: "Cryptokek",
  },
  {
    id: "cryptokenz",
    symbol: "cyt",
    name: "Cryptokenz",
  },
  {
    id: "crypto-kombat",
    symbol: "kombat",
    name: "Crypto Kombat",
  },
  {
    id: "cryptolion",
    symbol: "CLION",
    name: "CryptoLion",
  },
  {
    id: "cryptomafia",
    symbol: "$CMF",
    name: "CryptoMafia",
  },
  {
    id: "crypto-makers-foundation",
    symbol: "cmf",
    name: "Crypto Makers Foundation",
  },
  {
    id: "cryptomeda",
    symbol: "tech",
    name: "Cryptomeda",
  },
  {
    id: "crypto-media-network",
    symbol: "cmn",
    name: "Crypto Media Network",
  },
  {
    id: "cryptomines-eternal",
    symbol: "ETERNAL",
    name: "CryptoMines Eternal",
  },
  {
    id: "cryptomoonshots",
    symbol: "cms",
    name: "CryptoMoonShots",
  },
  {
    id: "cryptomotorcycle",
    symbol: "cmc",
    name: "CryptoMotorcycle",
  },
  {
    id: "crypto-mushroomz",
    symbol: "shroomz",
    name: "Crypto Mushroomz",
  },
  {
    id: "cryptoneur-network-foundation",
    symbol: "CNF",
    name: "CryptoNeur Network foundation",
  },
  {
    id: "cryptonex",
    symbol: "cnx",
    name: "Cryptonex",
  },
  {
    id: "cryptonia-poker",
    symbol: "cnp",
    name: "Cryptonia Poker",
  },
  {
    id: "cryptonite",
    symbol: "CRT",
    name: "Cryptonite",
  },
  {
    id: "cryptonits",
    symbol: "crt",
    name: "Cryptonits",
  },
  {
    id: "cryptonovae",
    symbol: "yae",
    name: "Cryptonovae",
  },
  {
    id: "cryptopay",
    symbol: "cpay",
    name: "Cryptopay",
  },
  {
    id: "crypto-perx",
    symbol: "cprx",
    name: "Crypto Perx",
  },
  {
    id: "crypto-phoenix",
    symbol: "cphx",
    name: "Crypto Phoenix",
  },
  {
    id: "cryptopia-land-dollar",
    symbol: "cld",
    name: "Cryptopia Land Dollar",
  },
  {
    id: "crypto-piece",
    symbol: "belly",
    name: "Crypto Piece",
  },
  {
    id: "cryptoping",
    symbol: "ping",
    name: "CryptoPing",
  },
  {
    id: "cryptoplanes",
    symbol: "cpan",
    name: "CryptoPlanes",
  },
  {
    id: "cryptoplants",
    symbol: "cpc",
    name: "CryptoPlants Club",
  },
  {
    id: "cryptopolis",
    symbol: "cpo",
    name: "Cryptopolis",
  },
  {
    id: "crypto-pote-token",
    symbol: "pope",
    name: "Crypto Pote Token",
  },
  {
    id: "crypto-price-index",
    symbol: "cpi",
    name: "Crypto Price Index",
  },
  {
    id: "cryptoprofile",
    symbol: "cp",
    name: "CryptoProfile",
  },
  {
    id: "crypto-puffs",
    symbol: "puffs",
    name: "Crypto Puffs",
  },
  {
    id: "cryptopunk-7171-hoodie",
    symbol: "hoodie",
    name: "CryptoPunk #7171",
  },
  {
    id: "cryptopunt",
    symbol: "pun",
    name: "CryptoPunt",
  },
  {
    id: "crypto-raiders",
    symbol: "raider",
    name: "Crypto Raiders",
  },
  {
    id: "cryptorg-token",
    symbol: "ctg",
    name: "Cryptorg Token",
  },
  {
    id: "crypto-rocket-launch",
    symbol: "crl",
    name: "Crypto Rocket Launch",
  },
  {
    id: "cryptorockets",
    symbol: "crocket",
    name: "CryptoRockets",
  },
  {
    id: "crypto-royale",
    symbol: "roy",
    name: "Crypto Royale",
  },
  {
    id: "cryptorun-network",
    symbol: "crn",
    name: "Cryptorun Network",
  },
  {
    id: "cryptosaga",
    symbol: "saga",
    name: "CryptoSaga",
  },
  {
    id: "crypto-shield",
    symbol: "shield",
    name: "Crypto Shield",
  },
  {
    id: "cryptoships",
    symbol: "cship",
    name: "CryptoShips",
  },
  {
    id: "cryptoskates",
    symbol: "cst",
    name: "CryptoSkates",
  },
  {
    id: "crypto-soccer",
    symbol: "csc",
    name: "Crypto Soccer",
  },
  {
    id: "cryptosoul",
    symbol: "soul",
    name: "CryptoSoul",
  },
  {
    id: "crypto-sports",
    symbol: "cspn",
    name: "Crypto Sports",
  },
  {
    id: "cryptospot-token",
    symbol: "spot",
    name: "Cryptospot Token",
  },
  {
    id: "cryptosummoner",
    symbol: "smnr",
    name: "CryptoSummoner",
  },
  {
    id: "cryptosword",
    symbol: "swd",
    name: "CryptoSword",
  },
  {
    id: "cryptotanks",
    symbol: "tank",
    name: "CryptoTanks",
  },
  {
    id: "cryptotankz",
    symbol: "tankz",
    name: "CryptoTankz",
  },
  {
    id: "cryptotask-2",
    symbol: "ctask",
    name: "CryptoTask",
  },
  {
    id: "cryptotaxis-token",
    symbol: "ctax",
    name: "Cryptotaxis Token",
  },
  {
    id: "cryptotem",
    symbol: "totem",
    name: "Cryptotem",
  },
  {
    id: "cryptotrains",
    symbol: "ctrain",
    name: "CryptoTrains",
  },
  {
    id: "crypto-twitter",
    symbol: "ct",
    name: "Crypto Twitter",
  },
  {
    id: "cryptotycoon",
    symbol: "ctt",
    name: "CryptoTycoon",
  },
  {
    id: "cryptoverificationcoin",
    symbol: "cvcc",
    name: "CryptoVerificationCoin",
  },
  {
    id: "crypto-village-accelerator",
    symbol: "cva",
    name: "Crypto Village Accelerator",
  },
  {
    id: "crypto-village-accelerator-cvag",
    symbol: "cvag",
    name: "Crypto Village Accelerator CVAG",
  },
  {
    id: "cryptovszombie",
    symbol: "cvz",
    name: "CryptoVsZombie",
  },
  {
    id: "cryptowar-xblade",
    symbol: "xblade",
    name: "CryptoWar xBlade",
  },
  {
    id: "cryptowolf",
    symbol: "cwolf",
    name: "CryptoWolf",
  },
  {
    id: "cryptoworld-vip",
    symbol: "cwv",
    name: "CryptoWorld.VIP",
  },
  {
    id: "cryptozoo",
    symbol: "zoo",
    name: "CryptoZoo",
  },
  {
    id: "cryptozoon",
    symbol: "zoon",
    name: "CryptoZoon",
  },
  {
    id: "cryptrust",
    symbol: "ctrt",
    name: "Cryptrust",
  },
  {
    id: "cryptyk",
    symbol: "ctk",
    name: "Cryptyk",
  },
  {
    id: "crystal",
    symbol: "crystal",
    name: "Crystal",
  },
  {
    id: "crystal-clear",
    symbol: "cct",
    name: "Crystal Clear",
  },
  {
    id: "crystal-kingdoms",
    symbol: "ckg",
    name: "Crystal Kingdoms",
  },
  {
    id: "crystal-of-dragon",
    symbol: "cod",
    name: "Crystal Of Dragon",
  },
  {
    id: "crystal-powder",
    symbol: "cp",
    name: "Crystal Powder",
  },
  {
    id: "crystal-token",
    symbol: "cyl",
    name: "Crystal Token",
  },
  {
    id: "crystal-wallet",
    symbol: "crt",
    name: "Crystal Wallet",
  },
  {
    id: "crystl-finance",
    symbol: "crystl",
    name: "Crystl Finance",
  },
  {
    id: "cspc",
    symbol: "cspc",
    name: "CSPC",
  },
  {
    id: "csp-dao-network",
    symbol: "nebo",
    name: "CSP DAO Network",
  },
  {
    id: "cspro-chain",
    symbol: "cspro",
    name: "CSPro Chain",
  },
  {
    id: "ctc",
    symbol: "c2c",
    name: "C2C System",
  },
  {
    id: "c-token",
    symbol: "c",
    name: "C Token",
  },
  {
    id: "ctomorrow-platform",
    symbol: "ctp",
    name: "Ctomorrow Platform",
  },
  {
    id: "cts-coin",
    symbol: "ctsc",
    name: "Crypto Trading Solutions Coin",
  },
  {
    id: "cube",
    symbol: "auto",
    name: "Cube",
  },
  {
    id: "cub-finance",
    symbol: "cub",
    name: "Cub Finance",
  },
  {
    id: "cubiex",
    symbol: "cbix",
    name: "Cubiex",
  },
  {
    id: "cubiex-power",
    symbol: "cbix-p",
    name: "Cubiex Power",
  },
  {
    id: "cudl-finance",
    symbol: "cudl",
    name: "Cudl Finance",
  },
  {
    id: "cudos",
    symbol: "cudos",
    name: "Cudos",
  },
  {
    id: "cuex",
    symbol: "cuex",
    name: "Cuex",
  },
  {
    id: "cujo-inu",
    symbol: "cujo",
    name: "Cujo Inu",
  },
  {
    id: "cultiplan",
    symbol: "ctpl",
    name: "Cultiplan",
  },
  {
    id: "culture-ticket-chain",
    symbol: "ctc",
    name: "Culture Ticket Chain",
  },
  {
    id: "cuminu",
    symbol: "cuminu",
    name: "Cuminu",
  },
  {
    id: "cumrocket",
    symbol: "cummies",
    name: "CumRocket",
  },
  {
    id: "curate",
    symbol: "xcur",
    name: "Curate",
  },
  {
    id: "curecoin",
    symbol: "cure",
    name: "Curecoin",
  },
  {
    id: "cure-token-v2",
    symbol: "CURE",
    name: "CURE Token V2",
  },
  {
    id: "curio-governance",
    symbol: "cgt",
    name: "Curio Governance",
  },
  {
    id: "curio-stable-coin",
    symbol: "csc",
    name: "Curio Stable Coin",
  },
  {
    id: "curryswap",
    symbol: "curry",
    name: "CurrySwap",
  },
  {
    id: "curve-dao-token",
    symbol: "crv",
    name: "Curve DAO Token",
  },
  {
    id: "curve-dao-token-wormhole",
    symbol: "crv",
    name: "Curve DAO Token (Wormhole)",
  },
  {
    id: "curve-fi-ydai-yusdc-yusdt-ytusd",
    symbol: "yCurve",
    name: "LP-yCurve",
  },
  {
    id: "curvehash",
    symbol: "curve",
    name: "CURVEHASH",
  },
  {
    id: "custody-token",
    symbol: "cust",
    name: "Custody Token",
  },
  {
    id: "custom-contract-network",
    symbol: "ccn",
    name: "Custom contract network",
  },
  {
    id: "cutcoin",
    symbol: "cut",
    name: "CUTcoin",
  },
  {
    id: "cvault-finance",
    symbol: "core",
    name: "cVault.finance",
  },
  {
    id: "cvcoin",
    symbol: "cvn",
    name: "CVCoin",
  },
  {
    id: "cvd19",
    symbol: "cvd19",
    name: "CVD19",
  },
  {
    id: "cvip",
    symbol: "cvip",
    name: "CVIP",
  },
  {
    id: "cvp-token",
    symbol: "cvp",
    name: "CVP Token",
  },
  {
    id: "cxcoin",
    symbol: "cx",
    name: "CxCoin",
  },
  {
    id: "cxn-network",
    symbol: "CXN",
    name: "CXN Network",
  },
  {
    id: "cxrbn-token",
    symbol: "cxrbn",
    name: "CXRBN Token",
  },
  {
    id: "cybercoin",
    symbol: "CBR",
    name: "Cybercoin",
  },
  {
    id: "cyber-crystal",
    symbol: "crystal",
    name: "Cyber Crystal",
  },
  {
    id: "cyberdao",
    symbol: "cyber",
    name: "CyberDAO",
  },
  {
    id: "cyberdoge",
    symbol: "cybrrrdoge",
    name: "CyberDoge",
  },
  {
    id: "cyber-doge",
    symbol: "cyberd",
    name: "Cyber Doge",
  },
  {
    id: "cyberdragon-gold",
    symbol: "gold",
    name: "CyberDragon Gold",
  },
  {
    id: "cyberfi",
    symbol: "cfi",
    name: "CyberFi",
  },
  {
    id: "cyberfm",
    symbol: "cyfm",
    name: "CyberFM",
  },
  {
    id: "cyberkongz",
    symbol: "kongz20",
    name: "CYBERKONGZ",
  },
  {
    id: "cybermiles",
    symbol: "cmt",
    name: "CyberMiles",
  },
  {
    id: "cyber-movie-chain",
    symbol: "cmct",
    name: "Cyber Movie Chain",
  },
  {
    id: "cybermusic",
    symbol: "cymt",
    name: "CyberMusic",
  },
  {
    id: "cybertime-finance",
    symbol: "ctf",
    name: "CyberTime Finance",
  },
  {
    id: "cybertronchain",
    symbol: "ctc",
    name: "CyberTronchain",
  },
  {
    id: "cybervein",
    symbol: "cvt",
    name: "CyberVeinToken",
  },
  {
    id: "cybex",
    symbol: "cyb",
    name: "Cybex",
  },
  {
    id: "cyborg-apes",
    symbol: "borg",
    name: "Cyborg Apes",
  },
  {
    id: "cycan-network",
    symbol: "cyn",
    name: "Cycan Network",
  },
  {
    id: "cycle-punk",
    symbol: "bike",
    name: "Cycle Punk",
  },
  {
    id: "cycle-token",
    symbol: "cycle",
    name: "Cycle Token",
  },
  {
    id: "cyclone-protocol",
    symbol: "cyc",
    name: "Cyclone Protocol",
  },
  {
    id: "cyclops-treasure",
    symbol: "cytr",
    name: "Cyclops Treasure",
  },
  {
    id: "cyclos",
    symbol: "cys",
    name: "Cyclos",
  },
  {
    id: "cy-finance",
    symbol: "cyf",
    name: "CY Finance",
  },
  {
    id: "cyop-protocol",
    symbol: "cyop",
    name: "CyOp Protocol",
  },
  {
    id: "cypherium",
    symbol: "cph",
    name: "Cypherium",
  },
  {
    id: "czdiamond",
    symbol: "czdiamond",
    name: "CZDiamond",
  },
  {
    id: "czfarm",
    symbol: "czf",
    name: "CZFarm",
  },
  {
    id: "d3",
    symbol: "defi",
    name: "D3",
  },
  {
    id: "dacc",
    symbol: "dacc",
    name: "DACC",
  },
  {
    id: "dacsee",
    symbol: "dacs",
    name: "Dacsee",
  },
  {
    id: "dacxi",
    symbol: "dacxi",
    name: "Dacxi",
  },
  {
    id: "daddybezos",
    symbol: "djbz",
    name: "DaddyBezos",
  },
  {
    id: "daddycake",
    symbol: "daddycake",
    name: "DaddyCake",
  },
  {
    id: "daddy-doge",
    symbol: "daddydoge",
    name: "Daddy Doge",
  },
  {
    id: "daddy-dogeback",
    symbol: "daddydb",
    name: "Daddy Dogeback",
  },
  {
    id: "daddyeth",
    symbol: "DADDYETH",
    name: "DaddyETH",
  },
  {
    id: "daddy-ethereum",
    symbol: "DDETH",
    name: "Daddy Ethereum",
  },
  {
    id: "daddy-shark",
    symbol: "DaddyShark",
    name: "Daddy Shark",
  },
  {
    id: "daddyshiba",
    symbol: "daddyshiba",
    name: "DaddyShiba",
  },
  {
    id: "daddyusdt",
    symbol: "DaddyUSDT",
    name: "DaddyUSDT",
  },
  {
    id: "daddyyorkie",
    symbol: "DDY",
    name: "DaddyYorkie",
  },
  {
    id: "daex",
    symbol: "dax",
    name: "DAEX",
  },
  {
    id: "dafin",
    symbol: "daf",
    name: "DaFIN",
  },
  {
    id: "dafi-protocol",
    symbol: "dafi",
    name: "Dafi Protocol",
  },
  {
    id: "daftcoin",
    symbol: "daft",
    name: "DaftCoin",
  },
  {
    id: "dagger",
    symbol: "xdag",
    name: "Dagger",
  },
  {
    id: "dai",
    symbol: "dai",
    name: "Dai",
  },
  {
    id: "daikicoin",
    symbol: "dic",
    name: "Daikicoin",
  },
  {
    id: "daikokuten-sama",
    symbol: "DKKS",
    name: "Daikokuten Sama",
  },
  {
    id: "daily-cop",
    symbol: "dlycop",
    name: "Daily COP",
  },
  {
    id: "dain-token",
    symbol: "dain",
    name: "Dain Token",
  },
  {
    id: "dai-stablecoin-wormhole",
    symbol: "daipo",
    name: "Dai Stablecoin (Wormhole)",
  },
  {
    id: "daisy",
    symbol: "daisy",
    name: "Daisy Protocol",
  },
  {
    id: "dai-wormhole",
    symbol: "dai",
    name: "DAI (Wormhole)",
  },
  {
    id: "dalecoin",
    symbol: "dalc",
    name: "Dalecoin",
  },
  {
    id: "dali",
    symbol: "dali",
    name: "DALI",
  },
  {
    id: "damn-token",
    symbol: "damn",
    name: "DAMN Token",
  },
  {
    id: "danat-coin",
    symbol: "dnc",
    name: "Danat Coin",
  },
  {
    id: "dancing-banana",
    symbol: "dance",
    name: "Dancing Banana",
  },
  {
    id: "dandy",
    symbol: "dandy",
    name: "Dandy Dego",
  },
  {
    id: "danecoin",
    symbol: "dane",
    name: "Danecoin",
  },
  {
    id: "dangermoon",
    symbol: "DANGERMOON",
    name: "DangerMoon",
  },
  {
    id: "dao1",
    symbol: "dao1",
    name: "DAO1",
  },
  {
    id: "daohaus",
    symbol: "haus",
    name: "DAOhaus",
  },
  {
    id: "dao-invest",
    symbol: "vest",
    name: "DAO Invest",
  },
  {
    id: "daoland",
    symbol: "dld",
    name: "Daoland",
  },
  {
    id: "daolaunch",
    symbol: "dal",
    name: "DAOLaunch",
  },
  {
    id: "dao-maker",
    symbol: "dao",
    name: "DAO Maker",
  },
  {
    id: "daopolis-token",
    symbol: "daos",
    name: "Daopolis Token",
  },
  {
    id: "daosquare",
    symbol: "rice",
    name: "DAOSquare",
  },
  {
    id: "daostack",
    symbol: "gen",
    name: "DAOstack",
  },
  {
    id: "daovc",
    symbol: "daovc",
    name: "DAOvc",
  },
  {
    id: "daoventures",
    symbol: "dvd",
    name: "DAOventures",
  },
  {
    id: "dapp",
    symbol: "dapp",
    name: "LiquidApps",
  },
  {
    id: "dappatoz",
    symbol: "dcash",
    name: "Dappatoz",
  },
  {
    id: "dapp-com",
    symbol: "dappt",
    name: "Dapp.com",
  },
  {
    id: "dappercoin",
    symbol: "dapp",
    name: "DapperCoin",
  },
  {
    id: "dappnode",
    symbol: "node",
    name: "DAppNode",
  },
  {
    id: "dappradar",
    symbol: "radar",
    name: "DappRadar",
  },
  {
    id: "dappstore",
    symbol: "dappx",
    name: "dAppstore",
  },
  {
    id: "dappsy",
    symbol: "app",
    name: "Dappsy",
  },
  {
    id: "daps-token",
    symbol: "daps",
    name: "DAPS Coin",
  },
  {
    id: "dar-dex-token",
    symbol: "ddt",
    name: "Dar Dex Token",
  },
  {
    id: "darenft",
    symbol: "dnft",
    name: "DareNFT",
  },
  {
    id: "darkbuild",
    symbol: "dark",
    name: "Dark.Build v1",
  },
  {
    id: "darkbuild-v2",
    symbol: "db",
    name: "Dark.Build",
  },
  {
    id: "darkcoin",
    symbol: "dark",
    name: "Darkcoin",
  },
  {
    id: "darkcrypto",
    symbol: "dark",
    name: "DarkCrypto",
  },
  {
    id: "darkcrypto-share",
    symbol: "sky",
    name: "DarkCrypto Share",
  },
  {
    id: "dark-energy-crystals",
    symbol: "dec",
    name: "Dark Energy Crystals",
  },
  {
    id: "dark-frontiers",
    symbol: "dark",
    name: "Dark Frontiers",
  },
  {
    id: "darklisk",
    symbol: "disk",
    name: "DarkLisk",
  },
  {
    id: "dark-magic",
    symbol: "dmagic",
    name: "Dark Magic",
  },
  {
    id: "darkmagick",
    symbol: "dmgk",
    name: "DarkMAGICK",
  },
  {
    id: "dark-matter",
    symbol: "dmt",
    name: "Dark Matter",
  },
  {
    id: "dark-matter-defi",
    symbol: "dmd",
    name: "Dark Matter Defi",
  },
  {
    id: "dark-matter-token",
    symbol: "dkmt",
    name: "Vibranium Dark Matter",
  },
  {
    id: "darkpaycoin",
    symbol: "d4rk",
    name: "DARK",
  },
  {
    id: "dark-planet",
    symbol: "dp",
    name: "Dark Planet",
  },
  {
    id: "darkshield",
    symbol: "dks",
    name: "DarkShield",
  },
  {
    id: "darma-cash",
    symbol: "dmch",
    name: "Darma Cash",
  },
  {
    id: "dart-insurance",
    symbol: "dart",
    name: "dART Insurance",
  },
  {
    id: "dart-inu",
    symbol: "dart",
    name: "Dart Inu",
  },
  {
    id: "darwinia-commitment-token",
    symbol: "kton",
    name: "Darwinia Commitment Token",
  },
  {
    id: "darwinia-crab-network",
    symbol: "crab",
    name: "Darwinia Crab Network Native Token",
  },
  {
    id: "darwinia-network-native-token",
    symbol: "ring",
    name: "Darwinia Network Native Token",
  },
  {
    id: "dascoin",
    symbol: "grn",
    name: "GreenPower",
  },
  {
    id: "dash",
    symbol: "dash",
    name: "Dash",
  },
  {
    id: "dash-diamond",
    symbol: "dashd",
    name: "Dash Diamond",
  },
  {
    id: "dash-platinum",
    symbol: "plat",
    name: "Platinum",
  },
  {
    id: "dashsports",
    symbol: "dass",
    name: "DashSports",
  },
  {
    id: "data",
    symbol: "dta",
    name: "DATA",
  },
  {
    id: "databroker-dao",
    symbol: "dtx",
    name: "DaTa eXchange Token",
  },
  {
    id: "datacoin",
    symbol: "dtc",
    name: "Datacoin",
  },
  {
    id: "data-economy-index",
    symbol: "data",
    name: "Data Economy Index",
  },
  {
    id: "data-enterprise-chain",
    symbol: "dec",
    name: "Data Enterprise Chain",
  },
  {
    id: "datahighway",
    symbol: "dhx",
    name: "DataHighway",
  },
  {
    id: "datakyc",
    symbol: "dkyc",
    name: "DataKYC",
  },
  {
    id: "datamine",
    symbol: "dam",
    name: "Datamine",
  },
  {
    id: "data-trade-on-demand-platform",
    symbol: "dtop",
    name: "DTOP Token",
  },
  {
    id: "datbit",
    symbol: "dbt",
    name: "Datbit",
  },
  {
    id: "datum",
    symbol: "dat",
    name: "Datum",
  },
  {
    id: "datx",
    symbol: "datx",
    name: "DATx",
  },
  {
    id: "daughter-doge",
    symbol: "ddoge",
    name: "Daughter Doge",
  },
  {
    id: "dav",
    symbol: "dav",
    name: "DAV Network",
  },
  {
    id: "davinci-coin",
    symbol: "dac",
    name: "Davinci Coin",
  },
  {
    id: "davinci-token",
    symbol: "vinci",
    name: "DaVinci Token",
  },
  {
    id: "davis-cup-fan-token",
    symbol: "DAVIS",
    name: "Davis Cup Fan Token",
  },
  {
    id: "dawg",
    symbol: "dawg",
    name: "DAWG",
  },
  {
    id: "dawn-of-gods",
    symbol: "dago",
    name: "Dawn Of Gods",
  },
  {
    id: "dawn-protocol",
    symbol: "dawn",
    name: "Dawn Protocol",
  },
  {
    id: "dawn-wars",
    symbol: "dw",
    name: "Dawn Wars",
  },
  {
    id: "daxhund",
    symbol: "dxh",
    name: "Daxhund",
  },
  {
    id: "day-by-day",
    symbol: "dbd",
    name: "Day By Day",
  },
  {
    id: "day-of-defeat",
    symbol: "dod",
    name: "Day Of Defeat",
  },
  {
    id: "dbx-2",
    symbol: "dbx",
    name: "DBX",
  },
  {
    id: "dcoin-token",
    symbol: "dt",
    name: "Dcoin Token",
  },
  {
    id: "d-community",
    symbol: "dili",
    name: "D Community",
  },
  {
    id: "dctdao",
    symbol: "dctd",
    name: "DCTDAO",
  },
  {
    id: "ddmcoin",
    symbol: "ddm",
    name: "DDMCoin",
  },
  {
    id: "dds-store",
    symbol: "dds",
    name: "DDS.Store",
  },
  {
    id: "deapcoin",
    symbol: "dep",
    name: "DEAPCOIN",
  },
  {
    id: "deathroad",
    symbol: "drace",
    name: "DeathRoad",
  },
  {
    id: "death-token",
    symbol: "death",
    name: "Death Token",
  },
  {
    id: "debase",
    symbol: "debase",
    name: "Debase",
  },
  {
    id: "debio-network",
    symbol: "dbio",
    name: "DeBio Network",
  },
  {
    id: "debitcoin",
    symbol: "dbtc",
    name: "Debitcoin",
  },
  {
    id: "debitum-network",
    symbol: "deb",
    name: "Debitum Network",
  },
  {
    id: "decentbet",
    symbol: "dbet",
    name: "DecentBet",
  },
  {
    id: "decent-database",
    symbol: "decent",
    name: "DECENT Database",
  },
  {
    id: "decentr",
    symbol: "dec",
    name: "Decentr",
  },
  {
    id: "decentrahub-coin",
    symbol: "dcntr",
    name: "Decentrahub Coin",
  },
  {
    id: "decentraland",
    symbol: "mana",
    name: "Decentraland",
  },
  {
    id: "decentraland-wormhole",
    symbol: "mana",
    name: "Decentraland (Wormhole)",
  },
  {
    id: "decentral-games",
    symbol: "dg",
    name: "Decentral Games",
  },
  {
    id: "decentral-games-governance",
    symbol: "xdg",
    name: "Decentral Games Governance",
  },
  {
    id: "decentral-games-ice",
    symbol: "ice",
    name: "Decentral Games ICE",
  },
  {
    id: "decentral-games-old",
    symbol: "dg",
    name: "Decentral Games (Old)",
  },
  {
    id: "decentralized-advertising",
    symbol: "dad",
    name: "DAD",
  },
  {
    id: "decentralized-asset-trading-platform",
    symbol: "datp",
    name: "Decentralized Asset Trading Platform",
  },
  {
    id: "decentralized-autonomous-organization",
    symbol: "DAO",
    name: "Decentralized Autonomous Organization",
  },
  {
    id: "decentralized-bitcoin",
    symbol: "dbtc",
    name: "Decentralized Bitcoin",
  },
  {
    id: "decentralized-community-investment-protocol",
    symbol: "dcip",
    name: "Decentralized Community Investment Protocol",
  },
  {
    id: "decentralized-currency-assets",
    symbol: "dca",
    name: "Decentralize Currency",
  },
  {
    id: "decentralized-machine-learning",
    symbol: "dml",
    name: "Decentralized Machine Learning Protocol",
  },
  {
    id: "decentralized-mining-exchange",
    symbol: "dmc",
    name: "Decentralized Mining Exchange",
  },
  {
    id: "decentralized-nations",
    symbol: "dena",
    name: "Decentralized Nations",
  },
  {
    id: "decentralized-oracle",
    symbol: "deor",
    name: "Decentralized Oracle",
  },
  {
    id: "decentralized-universal-basic-income",
    symbol: "dubi",
    name: "Decentralized Universal Basic Income",
  },
  {
    id: "decentralized-vulnerability-platform",
    symbol: "dvp",
    name: "Decentralized Vulnerability Platform",
  },
  {
    id: "decentra-lotto",
    symbol: "delo",
    name: "Decentra-Lotto",
  },
  {
    id: "decentralway",
    symbol: "dcw",
    name: "Decentralway",
  },
  {
    id: "decentraweb",
    symbol: "dweb",
    name: "DecentraWeb",
  },
  {
    id: "decentsol",
    symbol: "dsol",
    name: "DecentSol",
  },
  {
    id: "decenturion",
    symbol: "dcnt",
    name: "Decenturion",
  },
  {
    id: "dechart",
    symbol: "dch",
    name: "DeChart",
  },
  {
    id: "decimal",
    symbol: "del",
    name: "Decimal",
  },
  {
    id: "decimated",
    symbol: "dio",
    name: "Decimated",
  },
  {
    id: "decoin",
    symbol: "dtep",
    name: "Decoin",
  },
  {
    id: "decred",
    symbol: "dcr",
    name: "Decred",
  },
  {
    id: "decredit",
    symbol: "cdtc",
    name: "DeCredit",
  },
  {
    id: "decubate",
    symbol: "dcb",
    name: "Decubate",
  },
  {
    id: "decurian",
    symbol: "ecu",
    name: "Decurian",
  },
  {
    id: "decus",
    symbol: "sats",
    name: "DeCus Satoshi",
  },
  {
    id: "deepbrain-chain",
    symbol: "dbc",
    name: "DeepBrain Chain",
  },
  {
    id: "deepcloud-ai",
    symbol: "deep",
    name: "DeepCloud AI",
  },
  {
    id: "deeper-network",
    symbol: "dpr",
    name: "Deeper Network",
  },
  {
    id: "deeplock",
    symbol: "deep",
    name: "DeepLock",
  },
  {
    id: "deeponion",
    symbol: "onion",
    name: "DeepOnion",
  },
  {
    id: "deepspace",
    symbol: "dps",
    name: "DEEPSPACE",
  },
  {
    id: "deepspace-token",
    symbol: "dxo",
    name: "DeepSpace Token",
  },
  {
    id: "deesse",
    symbol: "love",
    name: "Deesse",
  },
  {
    id: "deez-nuts",
    symbol: "deeznuts",
    name: "Deez Nuts",
  },
  {
    id: "defactor",
    symbol: "factr",
    name: "Defactor",
  },
  {
    id: "defender-of-doge",
    symbol: "dod",
    name: "Defender of Doge",
  },
  {
    id: "deffect",
    symbol: "def",
    name: "Deffect",
  },
  {
    id: "defhold",
    symbol: "defo",
    name: "DefHold",
  },
  {
    id: "defi11",
    symbol: "d11",
    name: "DeFi11",
  },
  {
    id: "defiant",
    symbol: "defi",
    name: "DeFiant",
  },
  {
    id: "defiat",
    symbol: "dft",
    name: "DeFiat",
  },
  {
    id: "defibank-money",
    symbol: "dfm",
    name: "DefiBank.Money",
  },
  {
    id: "defi-bank-tycoon",
    symbol: "dbtycoon",
    name: "DeFi Bank Tycoon",
  },
  {
    id: "defibay",
    symbol: "DBay",
    name: "DefiBay",
  },
  {
    id: "defibet",
    symbol: "$dbet",
    name: "DefiBet",
  },
  {
    id: "defi-bids",
    symbol: "bid",
    name: "DeFi Bids",
  },
  {
    id: "defibox",
    symbol: "box",
    name: "DefiBox",
  },
  {
    id: "defi-ch",
    symbol: "dfch",
    name: "DeFi.ch",
  },
  {
    id: "defichain",
    symbol: "dfi",
    name: "DeFiChain",
  },
  {
    id: "defi-city",
    symbol: "dfc",
    name: "DeFi City",
  },
  {
    id: "deficliq",
    symbol: "cliq",
    name: "DefiCliq",
  },
  {
    id: "defi-coin",
    symbol: "defc",
    name: "DeFi Coin",
  },
  {
    id: "deficonnect",
    symbol: "dfc",
    name: "DefiConnect",
  },
  {
    id: "defi-cover-and-risk-index",
    symbol: "dcvr",
    name: "DeFi Cover and Risk Index",
  },
  {
    id: "defi-degen-land",
    symbol: "ddl",
    name: "DeFi Degen Land",
  },
  {
    id: "defido",
    symbol: "defido",
    name: "DeFido",
  },
  {
    id: "defidollar",
    symbol: "dusd",
    name: "DefiDollar",
  },
  {
    id: "defidollar-dao",
    symbol: "dfd",
    name: "DefiDollar DAO",
  },
  {
    id: "defi-for-you",
    symbol: "dfy",
    name: "Defi For You",
  },
  {
    id: "defi-gold",
    symbol: "dfgl",
    name: "DeFi Gold",
  },
  {
    id: "defihelper-governance-token",
    symbol: "dfh",
    name: "DeFiHelper Governance Token",
  },
  {
    id: "defi-holdings",
    symbol: "dhold",
    name: "DeFi Holdings",
  },
  {
    id: "defi-hunters-dao",
    symbol: "ddao",
    name: "DeFi Hunters DAO",
  },
  {
    id: "defiking",
    symbol: "dfk",
    name: "DefiKing",
  },
  {
    id: "defi-kingdoms",
    symbol: "jewel",
    name: "DeFi Kingdoms",
  },
  {
    id: "defil",
    symbol: "dfl",
    name: "DeFIL",
  },
  {
    id: "defi-land",
    symbol: "dfl",
    name: "DeFi Land",
  },
  {
    id: "defi-launch",
    symbol: "dlaunch",
    name: "DeFi Launch",
  },
  {
    id: "defily",
    symbol: "dfl",
    name: "Defily",
  },
  {
    id: "defina-finance",
    symbol: "fina",
    name: "Defina Finance",
  },
  {
    id: "defi-nation-signals-dao",
    symbol: "dsd",
    name: "DeFi Nation Signals DAO",
  },
  {
    id: "define",
    symbol: "dfa",
    name: "DeFine",
  },
  {
    id: "definer",
    symbol: "fin",
    name: "DeFiner",
  },
  {
    id: "defini",
    symbol: "dfni",
    name: "DeFini",
  },
  {
    id: "definitex",
    symbol: "dfx",
    name: "Definitex",
  },
  {
    id: "definition-network",
    symbol: "dzi",
    name: "DeFinition Network",
  },
  {
    id: "definity",
    symbol: "defx",
    name: "DeFinity",
  },
  {
    id: "definix",
    symbol: "finix",
    name: "Definix",
  },
  {
    id: "definomics",
    symbol: "dfn",
    name: "DeFinomics",
  },
  {
    id: "defi-omega",
    symbol: "dfio",
    name: "DeFi Omega",
  },
  {
    id: "defi-on-mcw",
    symbol: "dfm",
    name: "DeFi on MCW",
  },
  {
    id: "defipie",
    symbol: "PIE",
    name: "DeFiPie",
  },
  {
    id: "defiplaza",
    symbol: "dfp2",
    name: "DefiPlaza",
  },
  {
    id: "defipulse-index",
    symbol: "dpi",
    name: "DeFi Pulse Index",
  },
  {
    id: "defire",
    symbol: "cwap",
    name: "DeFIRE",
  },
  {
    id: "defirex",
    symbol: "dfx",
    name: "Defirex",
  },
  {
    id: "defis",
    symbol: "xgm",
    name: "Defis",
  },
  {
    id: "defiscale",
    symbol: "dfc",
    name: "DeFiScale",
  },
  {
    id: "defi-shopping-stake",
    symbol: "dss",
    name: "Defi Shopping Stake",
  },
  {
    id: "defis-network",
    symbol: "dfs",
    name: "Defis Network",
  },
  {
    id: "defisportscoin",
    symbol: "dsc",
    name: "DefiSportsCoin",
  },
  {
    id: "defistarter",
    symbol: "dfi",
    name: "DfiStarter",
  },
  {
    id: "defi-stoa",
    symbol: "sta",
    name: "Defi STOA",
  },
  {
    id: "defit",
    symbol: "defit",
    name: "Digital Fitness",
  },
  {
    id: "defi-top-5-tokens-index",
    symbol: "defi5",
    name: "DEFI Top 5 Index",
  },
  {
    id: "defiville-island",
    symbol: "isla",
    name: "DefiVille Island",
  },
  {
    id: "defi-warrior",
    symbol: "fiwa",
    name: "Defi Warrior",
  },
  {
    id: "defi-wizard",
    symbol: "dwz",
    name: "DeFi Wizard",
  },
  {
    id: "defixbet",
    symbol: "dxb",
    name: "DefiXBet",
  },
  {
    id: "defi-yield-protocol",
    symbol: "dyp",
    name: "DeFi Yield Protocol",
  },
  {
    id: "deflect",
    symbol: "deflct",
    name: "Deflect",
  },
  {
    id: "defpace",
    symbol: "$dpace",
    name: "DefPace",
  },
  {
    id: "defrost-finance",
    symbol: "melt",
    name: "Defrost Finance",
  },
  {
    id: "defycoinv2",
    symbol: "defy",
    name: "DefyCoinV2",
  },
  {
    id: "defydefi",
    symbol: "defy",
    name: "DefyDefi",
  },
  {
    id: "defyswap-finance",
    symbol: "dfy",
    name: "DefySwap Finance",
  },
  {
    id: "degate",
    symbol: "dg",
    name: "DeGate",
  },
  {
    id: "degem",
    symbol: "dgm",
    name: "DegemV2",
  },
  {
    id: "degen",
    symbol: "degn",
    name: "Degen",
  },
  {
    id: "degen-ape-club",
    symbol: "dac",
    name: "Degen Ape Club",
  },
  {
    id: "degen-arts",
    symbol: "dac",
    name: "Degen Arts",
  },
  {
    id: "degenerate-money",
    symbol: "degenr",
    name: "Degenerate Money",
  },
  {
    id: "degenerator",
    symbol: "meme",
    name: "Meme",
  },
  {
    id: "degen-index",
    symbol: "degen",
    name: "DEGEN Index",
  },
  {
    id: "degen-protocol-token",
    symbol: "sh33p",
    name: "Degen Protocol Token",
  },
  {
    id: "degens",
    symbol: "degens",
    name: "Degens",
  },
  {
    id: "degenvc",
    symbol: "dgvc",
    name: "DegenVC",
  },
  {
    id: "dego-finance",
    symbol: "dego",
    name: "Dego Finance",
  },
  {
    id: "degov",
    symbol: "degov",
    name: "Degov",
  },
  {
    id: "degree-crypto-token",
    symbol: "dct",
    name: "Degree Crypto Token",
  },
  {
    id: "dehero-community-token",
    symbol: "heroes",
    name: "Dehero Community Token",
  },
  {
    id: "dehive",
    symbol: "dhv",
    name: "DeHive",
  },
  {
    id: "dehorizon",
    symbol: "devt",
    name: "DeHorizon",
  },
  {
    id: "dehr-network",
    symbol: "dhr",
    name: "DeHR Network",
  },
  {
    id: "dehub",
    symbol: "dehub",
    name: "DeHub",
  },
  {
    id: "deimos-token",
    symbol: "dio",
    name: "Deimos Token",
  },
  {
    id: "deipool",
    symbol: "dip",
    name: "Deipool",
  },
  {
    id: "dei-token",
    symbol: "dei",
    name: "DEI Token",
  },
  {
    id: "dejave",
    symbol: "djv",
    name: "Dejave",
  },
  {
    id: "dekbox",
    symbol: "dek",
    name: "DekBox",
  },
  {
    id: "deku-inu",
    symbol: "DEKU",
    name: "Deku Inu",
  },
  {
    id: "deligence",
    symbol: "ira",
    name: "Diligence",
  },
  {
    id: "deli-of-thrones",
    symbol: "dotx",
    name: "DeFi of Thrones",
  },
  {
    id: "delion",
    symbol: "dln",
    name: "Delion",
  },
  {
    id: "delos-defi",
    symbol: "delos",
    name: "Delos Defi",
  },
  {
    id: "delphy",
    symbol: "dpy",
    name: "Delphy",
  },
  {
    id: "deltachain",
    symbol: "delta",
    name: "DeltaChain",
  },
  {
    id: "delta-exchange-token",
    symbol: "deto",
    name: "Delta Exchange Token",
  },
  {
    id: "delta-financial",
    symbol: "delta",
    name: "Delta Financial",
  },
  {
    id: "deltaflip",
    symbol: "DeltaF",
    name: "DeltaFlip",
  },
  {
    id: "deltahub-community",
    symbol: "DHC",
    name: "DeltaHub Community",
  },
  {
    id: "delta-theta",
    symbol: "dlta",
    name: "delta.theta",
  },
  {
    id: "demeter-usd",
    symbol: "dusd",
    name: "Demeter USD",
  },
  {
    id: "demodyfi",
    symbol: "dmod",
    name: "Demodyfi",
  },
  {
    id: "demole",
    symbol: "dmlg",
    name: "Demole",
  },
  {
    id: "denarius",
    symbol: "d",
    name: "Denarius",
  },
  {
    id: "dendomains",
    symbol: "ddn",
    name: "Den Domains",
  },
  {
    id: "denizlispor-fan-token",
    symbol: "dnz",
    name: "Denizlispor Fan Token",
  },
  {
    id: "dent",
    symbol: "dent",
    name: "Dent",
  },
  {
    id: "dentacoin",
    symbol: "dcn",
    name: "Dentacoin",
  },
  {
    id: "deonex-token",
    symbol: "don",
    name: "DEONEX Token",
  },
  {
    id: "depay",
    symbol: "depay",
    name: "DePay",
  },
  {
    id: "depo",
    symbol: "depo",
    name: "Depo",
  },
  {
    id: "depocket",
    symbol: "depo",
    name: "DePocket",
  },
  {
    id: "depth-token",
    symbol: "dep",
    name: "Depth Token",
  },
  {
    id: "dequant",
    symbol: "deq",
    name: "Dequant",
  },
  {
    id: "derace",
    symbol: "derc",
    name: "DeRace",
  },
  {
    id: "deracoin",
    symbol: "drc",
    name: "Deracoin",
  },
  {
    id: "deri-protocol",
    symbol: "deri",
    name: "Deri Protocol",
  },
  {
    id: "derivadao",
    symbol: "ddx",
    name: "DerivaDAO",
  },
  {
    id: "derived",
    symbol: "dvdx",
    name: "Derived",
  },
  {
    id: "derivex",
    symbol: "dvx",
    name: "Derivex",
  },
  {
    id: "dero",
    symbol: "dero",
    name: "Dero",
  },
  {
    id: "desirenft",
    symbol: "desire",
    name: "DesireNFT",
  },
  {
    id: "desmos",
    symbol: "dsm",
    name: "Desmos",
  },
  {
    id: "despace-protocol",
    symbol: "des",
    name: "DeSpace Protocol",
  },
  {
    id: "destorage",
    symbol: "ds",
    name: "DeStorage",
  },
  {
    id: "deswap",
    symbol: "daw",
    name: "Deswap",
  },
  {
    id: "dether",
    symbol: "DTH",
    name: "Dether",
  },
  {
    id: "detik",
    symbol: "dtk",
    name: "DETIK",
  },
  {
    id: "detox",
    symbol: "dtx",
    name: "Detox",
  },
  {
    id: "deus-finance-2",
    symbol: "deus",
    name: "DEUS Finance",
  },
  {
    id: "deutsche-emark",
    symbol: "dem",
    name: "Deutsche eMark",
  },
  {
    id: "deva-token",
    symbol: "deva",
    name: "DEVA Token",
  },
  {
    id: "devault",
    symbol: "dvt",
    name: "DeVault",
  },
  {
    id: "devery",
    symbol: "eve",
    name: "Devery",
  },
  {
    id: "devia8",
    symbol: "devia8",
    name: "Devia8",
  },
  {
    id: "deviantcoin",
    symbol: "dev",
    name: "Deviant Coin",
  },
  {
    id: "devikins",
    symbol: "dvk",
    name: "Devikins",
  },
  {
    id: "devil-finance",
    symbol: "devil",
    name: "Devil Finance",
  },
  {
    id: "devil-token",
    symbol: "DEVL",
    name: "Devil Token",
  },
  {
    id: "devita-global",
    symbol: "life",
    name: "Devita Global",
  },
  {
    id: "devolution",
    symbol: "devo",
    name: "DeVolution",
  },
  {
    id: "devour",
    symbol: "restaurants",
    name: "Devour",
  },
  {
    id: "dev-protocol",
    symbol: "dev",
    name: "Dev Protocol",
  },
  {
    id: "dexa-coin",
    symbol: "dexa",
    name: "DEXA COIN",
  },
  {
    id: "dexbrowser",
    symbol: "bro",
    name: "DexBrowser",
  },
  {
    id: "dexchain",
    symbol: "dxc",
    name: "Dexchain",
  },
  {
    id: "dexe",
    symbol: "dexe",
    name: "DeXe",
  },
  {
    id: "dexfin",
    symbol: "dxf",
    name: "Dexfin",
  },
  {
    id: "dexfolio",
    symbol: "dexf",
    name: "Dexfolio",
  },
  {
    id: "dex-game",
    symbol: "dxgm",
    name: "DexGame",
  },
  {
    id: "dexigas",
    symbol: "dxg",
    name: "Dexigas",
  },
  {
    id: "dexioprotocol",
    symbol: "Dexi",
    name: "Dexioprotocol",
  },
  {
    id: "dexira",
    symbol: "dex",
    name: "dexIRA",
  },
  {
    id: "dexit-finance",
    symbol: "dxt",
    name: "Dexit Finance",
  },
  {
    id: "dexkit",
    symbol: "kit",
    name: "DexKit",
  },
  {
    id: "dexlab",
    symbol: "dxl",
    name: "Dexlab",
  },
  {
    id: "dexmex",
    symbol: "dexm",
    name: "Dexmex",
  },
  {
    id: "dexpad",
    symbol: "dxp",
    name: "DexPad",
  },
  {
    id: "dexsport",
    symbol: "desu",
    name: "Dexsport",
  },
  {
    id: "dextf",
    symbol: "dextf",
    name: "Domani Protocol",
  },
  {
    id: "dextoken-governance",
    symbol: "dexg",
    name: "Dextoken Governance",
  },
  {
    id: "dextools",
    symbol: "dext",
    name: "DexTools",
  },
  {
    id: "dex-trade-coin",
    symbol: "dxc",
    name: "Dex-Trade Coin",
  },
  {
    id: "dextro",
    symbol: "dxo",
    name: "Dextro",
  },
  {
    id: "dextrust",
    symbol: "dets",
    name: "Dextrust",
  },
  {
    id: "dfe-finance",
    symbol: "dfe",
    name: "DFE.Finance",
  },
  {
    id: "dfinance",
    symbol: "xfi",
    name: "Dfinance",
  },
  {
    id: "dfnorm-vault-nftx",
    symbol: "dfnorm",
    name: "DFNORM Vault (NFTX)",
  },
  {
    id: "dfohub",
    symbol: "buidl",
    name: "dfohub",
  },
  {
    id: "dforce-btc",
    symbol: "xbtc",
    name: "dForce BTC",
  },
  {
    id: "dforce-eth",
    symbol: "xeth",
    name: "dForce ETH",
  },
  {
    id: "dforce-eux",
    symbol: "eux",
    name: "dForce EUR",
  },
  {
    id: "dforce-token",
    symbol: "df",
    name: "dForce Token",
  },
  {
    id: "dfs-mafia",
    symbol: "dfsm",
    name: "DFS MAFIA",
  },
  {
    id: "dfsocial",
    symbol: "dfsocial",
    name: "DFSocial (Old)",
  },
  {
    id: "dfsocial-gaming-2",
    symbol: "dfsg",
    name: "DFSocial Gaming",
  },
  {
    id: "dfund",
    symbol: "dfnd",
    name: "dFund",
  },
  {
    id: "dfuture",
    symbol: "dft",
    name: "dfuture",
  },
  {
    id: "dfx-finance",
    symbol: "dfx",
    name: "DFX Finance",
  },
  {
    id: "dfyn-network",
    symbol: "dfyn",
    name: "Dfyn Network",
  },
  {
    id: "dgld",
    symbol: "dgld",
    name: "DGLD",
  },
  {
    id: "dgpayment",
    symbol: "dgp",
    name: "DGPayment",
  },
  {
    id: "dhabicoin",
    symbol: "dbc",
    name: "Dhabicoin",
  },
  {
    id: "dhd-coin",
    symbol: "dhd",
    name: "DHD Coin",
  },
  {
    id: "dhealth",
    symbol: "dhp",
    name: "dHealth",
  },
  {
    id: "dhedge-dao",
    symbol: "dht",
    name: "dHEDGE DAO",
  },
  {
    id: "dhedge-stablecoin-yield",
    symbol: "dusd",
    name: "dHEDGE Stablecoin Yield",
  },
  {
    id: "dhedge-top-index",
    symbol: "dtop",
    name: "dHEDGE Top Index",
  },
  {
    id: "dia-data",
    symbol: "DIA",
    name: "DIA",
  },
  {
    id: "diamond",
    symbol: "dmd",
    name: "Diamond",
  },
  {
    id: "diamond-boyz-coin",
    symbol: "dbz",
    name: "Diamond Boyz Coin",
  },
  {
    id: "diamonddao",
    symbol: "dmnd",
    name: "DiamondDAO",
  },
  {
    id: "diamond-dnd",
    symbol: "dnd",
    name: "Diamond DND",
  },
  {
    id: "diamond-hands",
    symbol: "dhands",
    name: "Diamond Hands",
  },
  {
    id: "diamond-hands-token",
    symbol: "dhc",
    name: "Diamond Hands Token",
  },
  {
    id: "diamondhold",
    symbol: "dhold",
    name: "DiamondHold",
  },
  {
    id: "diamond-love",
    symbol: "love",
    name: "Diamond Love",
  },
  {
    id: "diamond-platform-token",
    symbol: "dpt",
    name: "Diamond Platform Token",
  },
  {
    id: "diamondq",
    symbol: "DIQ",
    name: "DiamondQ",
  },
  {
    id: "diamondshiba",
    symbol: "ds$",
    name: "DiamondShiba",
  },
  {
    id: "diamond-whitex",
    symbol: "DWHX",
    name: "Diamond Whitex",
  },
  {
    id: "diamond-xrpl",
    symbol: "diamond",
    name: "Diamond XRPL",
  },
  {
    id: "diarrheacoin",
    symbol: "DIAH",
    name: "DiarrheaCoin",
  },
  {
    id: "dibs-money",
    symbol: "dibs",
    name: "Dibs Money",
  },
  {
    id: "dibs-share",
    symbol: "dshare",
    name: "Dibs Share",
  },
  {
    id: "dice-inu",
    symbol: "dice",
    name: "Dice Inu",
  },
  {
    id: "didcoin",
    symbol: "did",
    name: "Didcoin",
  },
  {
    id: "die",
    symbol: "die",
    name: "Die",
  },
  {
    id: "diemlibre",
    symbol: "dlb",
    name: "DiemLibre",
  },
  {
    id: "difo-network",
    symbol: "dfn",
    name: "Difo Network",
  },
  {
    id: "dify-finance",
    symbol: "yfiii",
    name: "Dify.Finance",
  },
  {
    id: "digex",
    symbol: "digex",
    name: "Digex",
  },
  {
    id: "digg",
    symbol: "digg",
    name: "DIGG",
  },
  {
    id: "digible",
    symbol: "digi",
    name: "Digible",
  },
  {
    id: "digibyte",
    symbol: "dgb",
    name: "DigiByte",
  },
  {
    id: "digichain",
    symbol: "digichain",
    name: "Digichain Coin",
  },
  {
    id: "digicol-token",
    symbol: "dgcl",
    name: "DigiCol Token",
  },
  {
    id: "digi-dinar",
    symbol: "ddr",
    name: "Digi Dinar",
  },
  {
    id: "digidinar-stabletoken",
    symbol: "ddrst",
    name: "DigiDinar StableToken",
  },
  {
    id: "digidinar-token",
    symbol: "ddrt",
    name: "DigiDinar Token",
  },
  {
    id: "digies-coin",
    symbol: "digs",
    name: "Digies Coin",
  },
  {
    id: "digifinextoken",
    symbol: "dft",
    name: "DigiFinexToken",
  },
  {
    id: "digifit",
    symbol: "DGI",
    name: "DIGIFIT",
  },
  {
    id: "digimax",
    symbol: "dgmt",
    name: "DigiMax",
  },
  {
    id: "digimoney",
    symbol: "dgm",
    name: "DigiMoney",
  },
  {
    id: "diginu",
    symbol: "diginu",
    name: "DIGINU",
  },
  {
    id: "digipharm",
    symbol: "dph",
    name: "Digipharm",
  },
  {
    id: "digital-bank-of-africa",
    symbol: "dba",
    name: "Digital Bank of Africa",
  },
  {
    id: "digitalbits",
    symbol: "xdb",
    name: "DigitalBits",
  },
  {
    id: "digitalcoin",
    symbol: "dgc",
    name: "Digitalcoin",
  },
  {
    id: "digital-currency-daily",
    symbol: "dcd",
    name: "Digital Currency Daily",
  },
  {
    id: "digital-fantasy-sports",
    symbol: "dfs",
    name: "Fantasy Sports",
  },
  {
    id: "digital-money-bits",
    symbol: "dmb",
    name: "Digital Money Bits",
  },
  {
    id: "digitalnote",
    symbol: "xdn",
    name: "DigitalNote",
  },
  {
    id: "digitalprice",
    symbol: "dp",
    name: "DigitalPrice",
  },
  {
    id: "digital-rand",
    symbol: "dzar",
    name: "Digital Rand",
  },
  {
    id: "digital-reserve-currency",
    symbol: "drc",
    name: "Digital Reserve Currency",
  },
  {
    id: "digital-standard-unit",
    symbol: "dsu",
    name: "Digital Standard Unit",
  },
  {
    id: "digital-swis-franc",
    symbol: "dsfr",
    name: "Digital Swiss Franc",
  },
  {
    id: "digital-ticks",
    symbol: "dtx",
    name: "Digital Ticks",
  },
  {
    id: "digitex-futures-exchange",
    symbol: "dgtx",
    name: "Digitex Token",
  },
  {
    id: "digiwill",
    symbol: "dgw",
    name: "Digiwill",
  },
  {
    id: "digixdao",
    symbol: "dgd",
    name: "DigixDAO",
  },
  {
    id: "digix-gold",
    symbol: "dgx",
    name: "Digix Gold",
  },
  {
    id: "dike",
    symbol: "dike",
    name: "Dike",
  },
  {
    id: "dimecoin",
    symbol: "dime",
    name: "Dimecoin",
  },
  {
    id: "diminutive-coin",
    symbol: "dimi",
    name: "Diminutive Coin",
  },
  {
    id: "dimitra",
    symbol: "dmtr",
    name: "Dimitra",
  },
  {
    id: "dimsum",
    symbol: "dms",
    name: "DimSum",
  },
  {
    id: "dina",
    symbol: "dina",
    name: "Dina",
  },
  {
    id: "dinamo-zagreb-fan-token",
    symbol: "dzg",
    name: "Dinamo Zagreb Fan Token",
  },
  {
    id: "dinastycoin",
    symbol: "dcy",
    name: "Dinastycoin",
  },
  {
    id: "dinero",
    symbol: "din",
    name: "Dinero",
  },
  {
    id: "dinger-token",
    symbol: "dinger",
    name: "Dinger Token",
  },
  {
    id: "dingocoin",
    symbol: "dingo",
    name: "Dingocoin",
  },
  {
    id: "dingo-token",
    symbol: "dingo",
    name: "Dingo Token",
  },
  {
    id: "dink-donk",
    symbol: "dink",
    name: "Dink Doink",
  },
  {
    id: "dino",
    symbol: "dino",
    name: "Dino",
  },
  {
    id: "dinoegg",
    symbol: "dinoegg",
    name: "DINOEGG",
  },
  {
    id: "dino-exchange",
    symbol: "dino",
    name: "Dino Exchange",
  },
  {
    id: "dinopark",
    symbol: "dinop",
    name: "DinoPark",
  },
  {
    id: "dino-runner-fan-token",
    symbol: "drft",
    name: "Dino Runner Fan Token",
  },
  {
    id: "dinosaureggs",
    symbol: "dsg",
    name: "Dinosaur Eggs Token",
  },
  {
    id: "dinoswap",
    symbol: "dino",
    name: "DinoSwap",
  },
  {
    id: "dinox",
    symbol: "dnxc",
    name: "DinoX",
  },
  {
    id: "dint-token",
    symbol: "dint",
    name: "DINT Token",
  },
  {
    id: "dionpay",
    symbol: "dion",
    name: "Dionpay",
  },
  {
    id: "dios-finance",
    symbol: "dios",
    name: "Dios Finance",
  },
  {
    id: "dipper",
    symbol: "dip",
    name: "Dipper",
  },
  {
    id: "dipper-network",
    symbol: "dip",
    name: "Dipper Network",
  },
  {
    id: "dirham",
    symbol: "dah",
    name: "Dirham",
  },
  {
    id: "dirham-crypto",
    symbol: "dhs",
    name: "Dirham Crypto",
  },
  {
    id: "dirty-finance",
    symbol: "dirty",
    name: "Dirty Finance",
  },
  {
    id: "disbalancer",
    symbol: "ddos",
    name: "disBalancer",
  },
  {
    id: "disciplina-project-by-teachmeplease",
    symbol: "dscp",
    name: "Disciplina",
  },
  {
    id: "disco-burn-token",
    symbol: "dbt",
    name: "Disco Burn Token",
  },
  {
    id: "district0x",
    symbol: "dnt",
    name: "district0x",
  },
  {
    id: "distx",
    symbol: "distx",
    name: "DistX",
  },
  {
    id: "ditto",
    symbol: "ditto",
    name: "Ditto",
  },
  {
    id: "dittoinu",
    symbol: "dittoinu",
    name: "DittoInu",
  },
  {
    id: "divergence-protocol",
    symbol: "diver",
    name: "Divergence Protocol",
  },
  {
    id: "diversifi",
    symbol: "dfi",
    name: "DiversiFi",
  },
  {
    id: "divi",
    symbol: "divi",
    name: "Divi",
  },
  {
    id: "divine-dao",
    symbol: "divine",
    name: "Divine DAO",
  },
  {
    id: "diviner-protocol",
    symbol: "dpt",
    name: "Diviner Protocol",
  },
  {
    id: "divo-token",
    symbol: "divo",
    name: "DIVO Token",
  },
  {
    id: "divs",
    symbol: "divs",
    name: "Divs",
  },
  {
    id: "dixt-finance",
    symbol: "dixt",
    name: "Dixt Finance",
  },
  {
    id: "diyarbekirspor",
    symbol: "diyar",
    name: "Diyarbekirspor",
  },
  {
    id: "dkargo",
    symbol: "dka",
    name: "dKargo",
  },
  {
    id: "dkey-bank",
    symbol: "dkey",
    name: "DKEY Bank",
  },
  {
    id: "dlike",
    symbol: "dlike",
    name: "DLIKE",
  },
  {
    id: "dlp-duck-token",
    symbol: "duck",
    name: "DLP Duck Token",
  },
  {
    id: "dmarket",
    symbol: "dmt",
    name: "DMarket",
  },
  {
    id: "dmd",
    symbol: "dmd",
    name: "DMD",
  },
  {
    id: "dmme-app",
    symbol: "dmme",
    name: "DMme",
  },
  {
    id: "dmm-governance",
    symbol: "dmg",
    name: "DMM: Governance",
  },
  {
    id: "dmst",
    symbol: "dmst",
    name: "DMScript",
  },
  {
    id: "dmtc-token",
    symbol: "dmtc",
    name: "Demeter Chain",
  },
  {
    id: "dmt-token",
    symbol: "dmt",
    name: "DMT Token",
  },
  {
    id: "dmz-token",
    symbol: "dmz",
    name: "DMZ Token",
  },
  {
    id: "dna-dollar",
    symbol: "dna",
    name: "DNA Dollar",
  },
  {
    id: "dna-genesys",
    symbol: "dna",
    name: "DNA Genesys",
  },
  {
    id: "dna-share",
    symbol: "dshare",
    name: "DNA Share",
  },
  {
    id: "dnaxcat",
    symbol: "dxct",
    name: "DNAxCAT",
  },
  {
    id: "dnft-protocol",
    symbol: "dnf",
    name: "DNFT Protocol",
  },
  {
    id: "dobermann",
    symbol: "dobe",
    name: "Dobermann",
  },
  {
    id: "dock",
    symbol: "dock",
    name: "Dock",
  },
  {
    id: "documentchain",
    symbol: "dms",
    name: "Documentchain",
  },
  {
    id: "dodo",
    symbol: "dodo",
    name: "DODO",
  },
  {
    id: "dodreamchain",
    symbol: "drm",
    name: "DoDreamChain",
  },
  {
    id: "doex",
    symbol: "doex",
    name: "DOEX",
  },
  {
    id: "dofi",
    symbol: "doo",
    name: "Dofi",
  },
  {
    id: "dog",
    symbol: "dog",
    name: "Dog",
  },
  {
    id: "dog-club-token",
    symbol: "dclub",
    name: "Dog Club Token",
  },
  {
    id: "dog-collar",
    symbol: "COLLAR",
    name: "Dog Collar",
  },
  {
    id: "dogdeficoin",
    symbol: "dogdefi",
    name: "DogDeFiCoin",
  },
  {
    id: "doge-alliance",
    symbol: "dogeally",
    name: "Doge Alliance",
  },
  {
    id: "doge-army-token",
    symbol: "dgat",
    name: "Doge Army Token",
  },
  {
    id: "doge-back",
    symbol: "dogeback",
    name: "Doge Back",
  },
  {
    id: "dogebnb-org",
    symbol: "dogebnb",
    name: "DogeBNB.org",
  },
  {
    id: "dogebonk",
    symbol: "dobo",
    name: "DogeBonk",
  },
  {
    id: "dogebtc",
    symbol: "dogebtc",
    name: "DogeBTC",
  },
  {
    id: "dogebull",
    symbol: "DOGEBULL",
    name: "DogeBull",
  },
  {
    id: "dogecash",
    symbol: "dogec",
    name: "DogeCash",
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
  },
  {
    id: "dogecoin-2",
    symbol: "doge2",
    name: "Dogecoin 2.0",
  },
  {
    id: "dogecola",
    symbol: "dogecola",
    name: "DogeCola",
  },
  {
    id: "dogecube",
    symbol: "DogeCube",
    name: "DogeCube",
  },
  {
    id: "dogedao",
    symbol: "dogedao",
    name: "DogeDao",
  },
  {
    id: "doge-dash",
    symbol: "DogeDash",
    name: "Doge Dash",
  },
  {
    id: "dogedealer",
    symbol: "dogedealer",
    name: "DogeDealer",
  },
  {
    id: "dogedi",
    symbol: "dogedi",
    name: "DOGEDI",
  },
  {
    id: "dogedrinks",
    symbol: "dogedrinks",
    name: "DogeDrinks",
  },
  {
    id: "dogefather",
    symbol: "dogefather",
    name: "Dogefather",
  },
  {
    id: "dogefather-ecosystem",
    symbol: "dogefather",
    name: "Dogefather Ecosystem",
  },
  {
    id: "dogefi",
    symbol: "dogefi",
    name: "DogeFi",
  },
  {
    id: "doge-floki-coin",
    symbol: "dofi",
    name: "Doge Floki Coin",
  },
  {
    id: "dogefood",
    symbol: "dogefood",
    name: "DogeFood",
  },
  {
    id: "dogegamer",
    symbol: "dga",
    name: "Doge Gamer",
  },
  {
    id: "dogegayson",
    symbol: "GOGE",
    name: "DogeGaySon",
  },
  {
    id: "dogegf",
    symbol: "dogegf",
    name: "DogeGF",
  },
  {
    id: "dogehouse-capital",
    symbol: "DOGEX",
    name: "DogeHouse Capital",
  },
  {
    id: "doge-in-shiba",
    symbol: "dgshib",
    name: "Doge in Shiba",
  },
  {
    id: "doge-king",
    symbol: "dogek",
    name: "Doge King",
  },
  {
    id: "dogekongzilla",
    symbol: "dogekongzilla",
    name: "DogeKongZilla",
  },
  {
    id: "dogekwon-terra",
    symbol: "dkwon",
    name: "DogeKwon Terra",
  },
  {
    id: "dogelana",
    symbol: "dgln",
    name: "Dogelana",
  },
  {
    id: "dogelon-mars",
    symbol: "elon",
    name: "Dogelon Mars",
  },
  {
    id: "dogelon-mars-wormhole",
    symbol: "elon",
    name: "Dogelon Mars (Wormhole)",
  },
  {
    id: "dogeman",
    symbol: "dgman",
    name: "DogeMan",
  },
  {
    id: "dogemania",
    symbol: "dogemania",
    name: "DogeMania",
  },
  {
    id: "dogematic",
    symbol: "dm",
    name: "Dogematic",
  },
  {
    id: "dogemon-go",
    symbol: "dogo",
    name: "DogemonGo",
  },
  {
    id: "dogemongo-solana",
    symbol: "dogo",
    name: "DogemonGo Solana",
  },
  {
    id: "dogemoon",
    symbol: "dogemoon",
    name: "Dogemoon",
  },
  {
    id: "dogen-finance",
    symbol: "dogen",
    name: "Dogen Finance",
  },
  {
    id: "doge-of-woof-street",
    symbol: "wsdoge",
    name: "Doge of Woof Street",
  },
  {
    id: "dogeon",
    symbol: "don",
    name: "Dogeon",
  },
  {
    id: "dogepepsi",
    symbol: "DOGEPEPSI",
    name: "DogePepsi",
  },
  {
    id: "doge-raca",
    symbol: "doca",
    name: "Doge Raca",
  },
  {
    id: "doge-reloaded",
    symbol: "reloaded",
    name: "Doge Reloaded",
  },
  {
    id: "dogerise",
    symbol: "dogerise",
    name: "Dogerise",
  },
  {
    id: "doge-rise-up",
    symbol: "DOGERISEUP",
    name: "Doge Rise Up",
  },
  {
    id: "dogerocket",
    symbol: "dogerkt",
    name: "DogeRocket",
  },
  {
    id: "doge-run",
    symbol: "drun",
    name: "Doge Run",
  },
  {
    id: "doge-spacex",
    symbol: "dogesx",
    name: "Doge SpaceX",
  },
  {
    id: "doge-strap",
    symbol: "drap",
    name: "Doge Strap",
  },
  {
    id: "dogestribute",
    symbol: "dgstb",
    name: "Dogestribute",
  },
  {
    id: "doge-superbowl",
    symbol: "DSBOWL",
    name: "Doge Superbowl",
  },
  {
    id: "dogeswap",
    symbol: "doges",
    name: "Dogeswap",
  },
  {
    id: "dogethefloki",
    symbol: "dtf",
    name: "DogeTheFloki",
  },
  {
    id: "doge-token",
    symbol: "doget",
    name: "Doge Token",
  },
  {
    id: "doge-universe",
    symbol: "SPACExDOGE",
    name: "Doge Universe",
  },
  {
    id: "dogevillage",
    symbol: "dogev",
    name: "DogeVillage",
  },
  {
    id: "dogeville",
    symbol: "dville",
    name: "DogeVille",
  },
  {
    id: "dogewarrior",
    symbol: "dwr",
    name: "DogeWarrior",
  },
  {
    id: "dogewhale",
    symbol: "dogewhale",
    name: "Dogewhale",
  },
  {
    id: "dogewhisky",
    symbol: "DogeWhisky",
    name: "Dogewhisky",
  },
  {
    id: "doge-yellow-coin",
    symbol: "dogey",
    name: "Doge Yellow Coin",
  },
  {
    id: "dogeyield",
    symbol: "dogy",
    name: "DogeYield",
  },
  {
    id: "dogey-inu",
    symbol: "dinu",
    name: "Dogey-Inu",
  },
  {
    id: "dogezero",
    symbol: "doge0",
    name: "DogeZero",
  },
  {
    id: "dogezilla",
    symbol: "dogezilla",
    name: "DogeZilla",
  },
  {
    id: "doge-zilla",
    symbol: "DOGEZ",
    name: "DogeZilla Token",
  },
  {
    id: "dogezoo",
    symbol: "dzoo",
    name: "DogeZoo",
  },
  {
    id: "doggy",
    symbol: "doggy",
    name: "Doggy",
  },
  {
    id: "doggystyle-coin",
    symbol: "dsc",
    name: "DoggyStyle Coin",
  },
  {
    id: "doggy-swap",
    symbol: "dogs",
    name: "Doggy Swap",
  },
  {
    id: "dogira",
    symbol: "dogira",
    name: "Dogira",
  },
  {
    id: "dogkage",
    symbol: "dake",
    name: "DogKage",
  },
  {
    id: "dogsofelon",
    symbol: "doe",
    name: "Dogs Of Elon",
  },
  {
    id: "dogswap-token",
    symbol: "dog",
    name: "Dogeswap Token (HECO)",
  },
  {
    id: "dogus",
    symbol: "dogus",
    name: "Dogus",
  },
  {
    id: "dogyrace",
    symbol: "dor",
    name: "DogyRace",
  },
  {
    id: "dogz",
    symbol: "dogz",
    name: "Dogz",
  },
  {
    id: "dogzverse-token",
    symbol: "DGZV",
    name: "DogZVerse Token",
  },
  {
    id: "dojo",
    symbol: "dojo",
    name: "DOJO",
  },
  {
    id: "dojofarm-finance",
    symbol: "dojo",
    name: "DojoFarm Finance",
  },
  {
    id: "doken",
    symbol: "doken",
    name: "DoKEN",
  },
  {
    id: "doki-doki-chainbinders",
    symbol: "bnd",
    name: "Doki Doki Chainbinders",
  },
  {
    id: "doki-doki-finance",
    symbol: "doki",
    name: "Doki Doki",
  },
  {
    id: "dok-token",
    symbol: "DOK",
    name: "DOK Token",
  },
  {
    id: "dola-usd",
    symbol: "dola",
    name: "Dola USD Stablecoin",
  },
  {
    id: "dollar-online",
    symbol: "dollar",
    name: "Dollar INTERNATIONAL",
  },
  {
    id: "dollars",
    symbol: "usdx",
    name: "Dollars",
  },
  {
    id: "dolphin-token-2",
    symbol: "dse",
    name: "Dolphin Token",
  },
  {
    id: "domain-coin",
    symbol: "dmn",
    name: "Domain Coin",
  },
  {
    id: "domi",
    symbol: "domi",
    name: "Domi",
  },
  {
    id: "domraider",
    symbol: "drt",
    name: "DomRaider",
  },
  {
    id: "dona",
    symbol: "dona",
    name: "DONA",
  },
  {
    id: "donaswap",
    symbol: "dona",
    name: "Donaswap",
  },
  {
    id: "donkey",
    symbol: "donk",
    name: "Donkey",
  },
  {
    id: "don-key",
    symbol: "don",
    name: "Don-key",
  },
  {
    id: "donkey-token",
    symbol: "don",
    name: "Donkey Token",
  },
  {
    id: "donnie-finance",
    symbol: "don",
    name: "Donnie Finance",
  },
  {
    id: "dont-kyc",
    symbol: "dkyc",
    name: "Don't KYC",
  },
  {
    id: "donu",
    symbol: "donu",
    name: "Donu",
  },
  {
    id: "donut",
    symbol: "donut",
    name: "Donut",
  },
  {
    id: "donutcat",
    symbol: "dcat",
    name: "DonutCat",
  },
  {
    id: "doogee",
    symbol: "doogee",
    name: "Doogee",
  },
  {
    id: "doom-hero-dao",
    symbol: "dhd",
    name: "Doom Hero Dao",
  },
  {
    id: "doom-hero-game",
    symbol: "dhg",
    name: "Doom Hero Game",
  },
  {
    id: "doont-buy",
    symbol: "dbuy",
    name: "Doont Buy",
  },
  {
    id: "door",
    symbol: "door",
    name: "DOOR",
  },
  {
    id: "doos-token",
    symbol: "doos",
    name: "DOOS TOKEN",
  },
  {
    id: "dope-wars-paper",
    symbol: "paper",
    name: "Dope Wars Paper",
  },
  {
    id: "dopewarz",
    symbol: "drug",
    name: "DopeWarz",
  },
  {
    id: "dopex",
    symbol: "dpx",
    name: "Dopex",
  },
  {
    id: "dopex-rebate-token",
    symbol: "rdpx",
    name: "Dopex Rebate Token",
  },
  {
    id: "dopple-exchange-token",
    symbol: "dopx",
    name: "Dopple Exchange Token",
  },
  {
    id: "dopple-finance",
    symbol: "dop",
    name: "Dopple Finance",
  },
  {
    id: "doraemoninu",
    symbol: "doraemoninu",
    name: "DoraemonInu",
  },
  {
    id: "doraemoon",
    symbol: "dora",
    name: "Doraemoon",
  },
  {
    id: "dora-factory",
    symbol: "dora",
    name: "Dora Factory",
  },
  {
    id: "doragonland",
    symbol: "dor",
    name: "DoragonLand",
  },
  {
    id: "doren",
    symbol: "dre",
    name: "DoRen",
  },
  {
    id: "dose-token",
    symbol: "dose",
    name: "DOSE",
  },
  {
    id: "dos-network",
    symbol: "dos",
    name: "DOS Network",
  },
  {
    id: "dotarcade",
    symbol: "adt",
    name: "DotArcade",
  },
  {
    id: "dotc-pro-token",
    symbol: "dotc",
    name: "dotc.pro token",
  },
  {
    id: "dot-finance",
    symbol: "pink",
    name: "Dot Finance",
  },
  {
    id: "dotmoovs",
    symbol: "moov",
    name: "dotmoovs",
  },
  {
    id: "dotoracle",
    symbol: "dto",
    name: "DotOracle",
  },
  {
    id: "double-ace",
    symbol: "daa",
    name: "Double Ace",
  },
  {
    id: "double-bubble",
    symbol: "dbubble",
    name: "Double Bubble",
  },
  {
    id: "doubledice-token",
    symbol: "dodi",
    name: "DoubleDice",
  },
  {
    id: "dough",
    symbol: "dough",
    name: "Dough",
  },
  {
    id: "dovu",
    symbol: "dov",
    name: "Dovu",
  },
  {
    id: "dowcoin",
    symbol: "dow",
    name: "Dowcoin",
  },
  {
    id: "down-bad",
    symbol: "db",
    name: "Down Bad",
  },
  {
    id: "doxxed",
    symbol: "dox",
    name: "Doxxed",
  },
  {
    id: "doxxed-santa",
    symbol: "DxSanta",
    name: "Doxxed Santa",
  },
  {
    id: "dpk",
    symbol: "dpk token",
    name: "DPK",
  },
  {
    id: "dprating",
    symbol: "rating",
    name: "DPRating",
  },
  {
    id: "dp-token",
    symbol: "DPT",
    name: "DP Token",
  },
  {
    id: "dracarys",
    symbol: "drac",
    name: "DRACARYS",
  },
  {
    id: "drachen-lord",
    symbol: "drag",
    name: "Drachen Lord",
  },
  {
    id: "drachma",
    symbol: "dra",
    name: "Drachma",
  },
  {
    id: "draco-force",
    symbol: "drc",
    name: "Draco Force",
  },
  {
    id: "dracula-token",
    symbol: "drc",
    name: "Dracula Token",
  },
  {
    id: "dragon-ball",
    symbol: "dragon",
    name: "Dragon Ball",
  },
  {
    id: "dragon-battles",
    symbol: "drb",
    name: "Dragon Battles",
  },
  {
    id: "dragonbit",
    symbol: "drgb",
    name: "Dragonbit",
  },
  {
    id: "dragonbite",
    symbol: "bite",
    name: "DragonBite",
  },
  {
    id: "dragonchain",
    symbol: "drgn",
    name: "Dragonchain",
  },
  {
    id: "dragon-coin",
    symbol: "drg",
    name: "Dragon Coin",
  },
  {
    id: "dragon-crypto-aurum",
    symbol: "dcau",
    name: "Dragon Crypto Aurum",
  },
  {
    id: "dragon-egg",
    symbol: "dregg",
    name: "Dragon Egg",
  },
  {
    id: "dragonereum-gold",
    symbol: "gold",
    name: "Dragonereum GOLD",
  },
  {
    id: "dragon-fortune",
    symbol: "dragonfortune",
    name: "Dragon Fortune",
  },
  {
    id: "dragon-infinity",
    symbol: "$di",
    name: "Dragon Infinity",
  },
  {
    id: "dragon-kart-token",
    symbol: "kart",
    name: "Dragon Kart Token",
  },
  {
    id: "dragonknight",
    symbol: "dk",
    name: "Dragon Knight",
  },
  {
    id: "dragon-mainland-shards",
    symbol: "dms",
    name: "Dragon Mainland Shards",
  },
  {
    id: "dragonmoon",
    symbol: "dmoon",
    name: "DragonMoon",
  },
  {
    id: "dragonmusk",
    symbol: "dmusk",
    name: "Dragonmusk",
  },
  {
    id: "dragon-pool",
    symbol: "dp",
    name: "Dragon Pool",
  },
  {
    id: "dragonsea",
    symbol: "dge",
    name: "DragonSea",
  },
  {
    id: "dragon-slayer",
    symbol: "drs",
    name: "Dragon Slayer",
  },
  {
    id: "dragons-quick",
    symbol: "dquick",
    name: "Dragon's Quick",
  },
  {
    id: "dragonvein",
    symbol: "dvc",
    name: "DragonVein",
  },
  {
    id: "dragon-verse",
    symbol: "drv",
    name: "Dragon Verse",
  },
  {
    id: "dragon-war",
    symbol: "draw",
    name: "Dragon War",
  },
  {
    id: "dragon-warrior",
    symbol: "gon+",
    name: "Dragon Warrior",
  },
  {
    id: "dragon-x",
    symbol: "dax",
    name: "Dragon X",
  },
  {
    id: "drakeball-super",
    symbol: "dbs",
    name: "Drakeball Super",
  },
  {
    id: "drakeball-token",
    symbol: "dball",
    name: "DrakeBall Token [OLD]",
  },
  {
    id: "draken",
    symbol: "drk",
    name: "Draken",
  },
  {
    id: "drakoin",
    symbol: "drk",
    name: "Drakoin",
  },
  {
    id: "drax",
    symbol: "drax",
    name: "Drax",
  },
  {
    id: "drc-mobility",
    symbol: "drc",
    name: "DRC Mobility",
  },
  {
    id: "drdoge",
    symbol: "drdoge",
    name: "DrDoge",
  },
  {
    id: "dreamr-platform-token",
    symbol: "dmr",
    name: "Dreamr Platform Token",
  },
  {
    id: "dreamscoin",
    symbol: "dream",
    name: "DreamsCoin",
  },
  {
    id: "dreams-quest",
    symbol: "dreams",
    name: "Dreams Quest",
  },
  {
    id: "dream-swap",
    symbol: "dream",
    name: "Dream Swap",
  },
  {
    id: "dreamteam3",
    symbol: "dt3",
    name: "DreamTeam3",
  },
  {
    id: "dreamverse",
    symbol: "dv",
    name: "Dreamverse",
  },
  {
    id: "d-reit",
    symbol: "drt",
    name: "D-ReiT",
  },
  {
    id: "drep-new",
    symbol: "drep",
    name: "Drep [new]",
  },
  {
    id: "drife",
    symbol: "drf",
    name: "Drife",
  },
  {
    id: "drip-network",
    symbol: "DRIP",
    name: "Drip Network",
  },
  {
    id: "drivenx",
    symbol: "dvx",
    name: "DRIVENx",
  },
  {
    id: "dronefly",
    symbol: "kdc",
    name: "DroneFly",
  },
  {
    id: "drops-ownership-power",
    symbol: "dop",
    name: "Drops Ownership Power",
  },
  {
    id: "drunkdoge",
    symbol: "drunk",
    name: "DrunkDoge",
  },
  {
    id: "dry-doge-metaverse",
    symbol: "drydoge",
    name: "Dry Doge Metaverse",
  },
  {
    id: "dscvr-finance",
    symbol: "dscvr",
    name: "DSCVR.Finance",
  },
  {
    id: "d-skyscraper",
    symbol: "dsg",
    name: "D-Skyscraper",
  },
  {
    id: "dsys",
    symbol: "dsys",
    name: "DSYS",
  },
  {
    id: "dtmi",
    symbol: "dtmi",
    name: "DTMI",
  },
  {
    id: "dtravel",
    symbol: "trvl",
    name: "DTravel",
  },
  {
    id: "dtube-coin",
    symbol: "dtube",
    name: "Dtube Coin",
  },
  {
    id: "ducato-protocol-token",
    symbol: "ducato",
    name: "Ducato Protocol Token",
  },
  {
    id: "duckdaodime",
    symbol: "ddim",
    name: "DuckDaoDime",
  },
  {
    id: "duckduck-token",
    symbol: "duck",
    name: "DuckDuck Token",
  },
  {
    id: "duckrocket",
    symbol: "duck",
    name: "DuckRocket",
  },
  {
    id: "duck-vault-nftx",
    symbol: "duck",
    name: "DUCK Vault (NFTX)",
  },
  {
    id: "duelist-king",
    symbol: "dkt",
    name: "Duelist King",
  },
  {
    id: "duel-network",
    symbol: "duel",
    name: "Duel Network",
  },
  {
    id: "dukascoin",
    symbol: "duk+",
    name: "Dukascoin",
  },
  {
    id: "dukecoin",
    symbol: "dkc",
    name: "Dukecoin",
  },
  {
    id: "duke-inu-token",
    symbol: "duke",
    name: "Duke Inu Token",
  },
  {
    id: "dulcet",
    symbol: "dlc",
    name: "Dulcet",
  },
  {
    id: "dune",
    symbol: "dun",
    name: "Dune",
  },
  {
    id: "dunes",
    symbol: "dunes",
    name: "Dunes",
  },
  {
    id: "dune-token",
    symbol: "dune",
    name: "Dune Token",
  },
  {
    id: "dungeonswap",
    symbol: "dnd",
    name: "DungeonSwap",
  },
  {
    id: "duo",
    symbol: "duo",
    name: "DUO Network",
  },
  {
    id: "duo-2",
    symbol: "duo",
    name: "Duo",
  },
  {
    id: "dusd-network",
    symbol: "dusd",
    name: "DUSD Network",
  },
  {
    id: "dusk-network",
    symbol: "dusk",
    name: "DUSK Network",
  },
  {
    id: "dust",
    symbol: "dust",
    name: "Dust",
  },
  {
    id: "dust-token",
    symbol: "dust",
    name: "DUST Token",
  },
  {
    id: "duxdoge",
    symbol: "ddc",
    name: "DuxDoge",
  },
  {
    id: "dvf",
    symbol: "dvf",
    name: "DeversiFi",
  },
  {
    id: "dvision-network",
    symbol: "dvi",
    name: "Dvision Network",
  },
  {
    id: "dxbpay",
    symbol: "dxb",
    name: "DXBPay",
  },
  {
    id: "dxchain",
    symbol: "dx",
    name: "DxChain Token",
  },
  {
    id: "dxdao",
    symbol: "dxd",
    name: "DXdao",
  },
  {
    id: "dxiot",
    symbol: "dxiot",
    name: "dXIOT",
  },
  {
    id: "dxsale-network",
    symbol: "sale",
    name: "DxSale Network",
  },
  {
    id: "dyakon",
    symbol: "dyn",
    name: "DYAKON",
  },
  {
    id: "dydx",
    symbol: "dydx",
    name: "dYdX",
  },
  {
    id: "dydx-wormhole",
    symbol: "dydx",
    name: "dYdX (Wormhole)",
  },
  {
    id: "dymmax",
    symbol: "dmx",
    name: "Dymmax",
  },
  {
    id: "dynamic",
    symbol: "dyn",
    name: "Dynamic",
  },
  {
    id: "dynamic-set-dollar",
    symbol: "dsd",
    name: "Dynamic Set Dollar",
  },
  {
    id: "dynamite",
    symbol: "dyt",
    name: "DoYourTip",
  },
  {
    id: "dynamite-token",
    symbol: "dynmt",
    name: "Dynamite Token",
  },
  {
    id: "dynamix",
    symbol: "dyna",
    name: "Dynamix",
  },
  {
    id: "dynamo-coin",
    symbol: "dynamo",
    name: "Dynamo Coin",
  },
  {
    id: "dynasty-global-investments-ag",
    symbol: "dyn",
    name: "Dynasty Global Investments AG",
  },
  {
    id: "dyngecoin",
    symbol: "dynge",
    name: "Dyngecoin",
  },
  {
    id: "dyor-token",
    symbol: "dyor",
    name: "DYOR Token",
  },
  {
    id: "dyztoken",
    symbol: "dyz",
    name: "DyzToken",
  },
  {
    id: "e1337",
    symbol: "1337",
    name: "1337",
  },
  {
    id: "eaglecoin-2",
    symbol: "elc",
    name: "EagleCoin",
  },
  {
    id: "eagle-vision",
    symbol: "evi",
    name: "Eagle Vision",
  },
  {
    id: "eagonswap-token",
    symbol: "eagon",
    name: "EagonSwap Token",
  },
  {
    id: "early-bird",
    symbol: "ebird",
    name: "Early Bird",
  },
  {
    id: "earlybsc",
    symbol: "ebsc",
    name: "EarlyBSC",
  },
  {
    id: "earnable",
    symbol: "earn",
    name: "Earnable",
  },
  {
    id: "earnablefi",
    symbol: "efi",
    name: "EarnableFi",
  },
  {
    id: "earnable-v2",
    symbol: "earn",
    name: "Earnable v2",
  },
  {
    id: "earnbase",
    symbol: "ENB",
    name: "Earnbase",
  },
  {
    id: "earnbusd",
    symbol: "ebusd",
    name: "EarnBUSD",
  },
  {
    id: "earndefi",
    symbol: "edc",
    name: "EarnDeFi",
  },
  {
    id: "earnfinex",
    symbol: "EFX",
    name: "Earnfinex",
  },
  {
    id: "earnhub",
    symbol: "ehb",
    name: "EarnHub",
  },
  {
    id: "earn-network",
    symbol: "earn$",
    name: "Earn Network",
  },
  {
    id: "earnpay",
    symbol: "earnpay",
    name: "EarnPay",
  },
  {
    id: "earnscoin",
    symbol: "ern",
    name: "Earnscoin",
  },
  {
    id: "earnx",
    symbol: "earnx",
    name: "EarnX",
  },
  {
    id: "earnzcoin",
    symbol: "erz",
    name: "EarnzCoin",
  },
  {
    id: "earthchain",
    symbol: "earth",
    name: "EarthChain",
  },
  {
    id: "earthcoin",
    symbol: "eac",
    name: "Earthcoin",
  },
  {
    id: "earthfund",
    symbol: "1earth",
    name: "EarthFund",
  },
  {
    id: "easticoin",
    symbol: "esti",
    name: "Easticoin",
  },
  {
    id: "easyfi",
    symbol: "ez",
    name: "EasyFi V2",
  },
  {
    id: "easy-finance-token",
    symbol: "eft",
    name: "Easy Finance Token",
  },
  {
    id: "easymine",
    symbol: "emt",
    name: "easyMine",
  },
  {
    id: "eautocoin",
    symbol: "ato",
    name: "EAutocoin",
  },
  {
    id: "eazypayza",
    symbol: "ezpay",
    name: "EazyPayZa",
  },
  {
    id: "ebisu-network",
    symbol: "ebs",
    name: "Ebisu Network",
  },
  {
    id: "eblockstock",
    symbol: "ebso",
    name: "eBlockStock",
  },
  {
    id: "eboost",
    symbol: "ebst",
    name: "eBoost",
  },
  {
    id: "ebox",
    symbol: "ebox",
    name: "Ebox",
  },
  {
    id: "ebsp-token",
    symbol: "ebsp",
    name: "EBSP Token",
  },
  {
    id: "ecash",
    symbol: "xec",
    name: "eCash",
  },
  {
    id: "ecc",
    symbol: "ecc",
    name: "ECC",
  },
  {
    id: "ecchi-coin",
    symbol: "ecchi",
    name: "Ecchi Coin",
  },
  {
    id: "e-chat",
    symbol: "echt",
    name: "e-Chat",
  },
  {
    id: "echoin",
    symbol: "ec",
    name: "Echoin",
  },
  {
    id: "echolink",
    symbol: "eko",
    name: "EchoLink",
  },
  {
    id: "echosoracoin",
    symbol: "esrc",
    name: "EchoSoraCoin",
  },
  {
    id: "echo-tech-coin",
    symbol: "ecot",
    name: "Echo Tech Coin",
  },
  {
    id: "ecio-space",
    symbol: "ecio",
    name: "ECIO Space",
  },
  {
    id: "eclipse-2",
    symbol: "ecp",
    name: "Eclipse",
  },
  {
    id: "eclipseum",
    symbol: "ecl",
    name: "Eclipseum",
  },
  {
    id: "ecobit",
    symbol: "ecob",
    name: "Ecobit",
  },
  {
    id: "ecochain",
    symbol: "ecoc",
    name: "Ecochain",
  },
  {
    id: "ecochain-token",
    symbol: "ect",
    name: "Ecochain Token",
  },
  {
    id: "eco-defi",
    symbol: "ecop",
    name: "Eco DeFi",
  },
  {
    id: "ecodollar",
    symbol: "ecos",
    name: "EcoDollar",
  },
  {
    id: "ecofi",
    symbol: "eco",
    name: "EcoFi",
  },
  {
    id: "ecog9coin",
    symbol: "egc",
    name: "EcoG9coin",
  },
  {
    id: "ecoin-2",
    symbol: "ecoin",
    name: "Ecoin",
  },
  {
    id: "e-coin-finance",
    symbol: "ecoin",
    name: "E-coin Finance",
  },
  {
    id: "ecomi",
    symbol: "omi",
    name: "ECOMI",
  },
  {
    id: "ecomverse-finance",
    symbol: "ecov",
    name: "EcomVerse Finance",
  },
  {
    id: "ecoreal-estate",
    symbol: "ecoreal",
    name: "Ecoreal Estate",
  },
  {
    id: "ecoscu",
    symbol: "ecu",
    name: "ECOSC",
  },
  {
    id: "ecosystem-coin-network",
    symbol: "ecn",
    name: "Ecosystem Coin Network",
  },
  {
    id: "eco-value-coin",
    symbol: "evc",
    name: "Eco Value Coin",
  },
  {
    id: "ecpntoken",
    symbol: "ecpn",
    name: "ECPN Token",
  },
  {
    id: "ecp-technology",
    symbol: "ecp",
    name: "ECP+ Technology",
  },
  {
    id: "edc-blockchain",
    symbol: "edc",
    name: "EDC Blockchain",
  },
  {
    id: "eddaswap",
    symbol: "edda",
    name: "EDDASwap",
  },
  {
    id: "eden",
    symbol: "eden",
    name: "EDEN",
  },
  {
    id: "edenchain",
    symbol: "edn",
    name: "Edenchain",
  },
  {
    id: "edge",
    symbol: "edge",
    name: "Edge",
  },
  {
    id: "edgecoin-2",
    symbol: "edgt",
    name: "Edgecoin",
  },
  {
    id: "edgeless",
    symbol: "edg",
    name: "Edgeless",
  },
  {
    id: "edgeware",
    symbol: "edg",
    name: "Edgeware",
  },
  {
    id: "educare",
    symbol: "ekt",
    name: "EDUCare",
  },
  {
    id: "education-ecosystem",
    symbol: "ledu",
    name: "Education Ecosystem",
  },
  {
    id: "educoin",
    symbol: "edu",
    name: "Educoin",
  },
  {
    id: "edufex",
    symbol: "edux",
    name: "Edufex",
  },
  {
    id: "eeat",
    symbol: "EEAT",
    name: "eEat",
  },
  {
    id: "effect-network",
    symbol: "efx",
    name: "Effect Network",
  },
  {
    id: "efficient-transaction-token",
    symbol: "ett",
    name: "Efficient Transaction Token",
  },
  {
    id: "effort-economy",
    symbol: "efft",
    name: "Effort Economy",
  },
  {
    id: "efil",
    symbol: "efil",
    name: "eFIL",
  },
  {
    id: "efin",
    symbol: "efin",
    name: "eFIN",
  },
  {
    id: "efin-decentralized",
    symbol: "wefin",
    name: "eFin Decentralized",
  },
  {
    id: "efinity",
    symbol: "efi",
    name: "Efinity Token",
  },
  {
    id: "eft",
    symbol: "eft",
    name: "EFT",
  },
  {
    id: "efun",
    symbol: "efun",
    name: "EFUN",
  },
  {
    id: "egame",
    symbol: "egi",
    name: "eGame",
  },
  {
    id: "eggplant",
    symbol: "eggplant",
    name: "Eggplant",
  },
  {
    id: "eggplant-finance",
    symbol: "eggp",
    name: "Eggplant Finance",
  },
  {
    id: "egg-protocol",
    symbol: "egg",
    name: "EGG Protocol",
  },
  {
    id: "eggzilla",
    symbol: "EGG",
    name: "eggzilla",
  },
  {
    id: "egoh-finance",
    symbol: "egoh",
    name: "EGOH Finance",
  },
  {
    id: "egold",
    symbol: "egold",
    name: "eGold",
  },
  {
    id: "egoras",
    symbol: "egr",
    name: "Egoras Rights",
  },
  {
    id: "egoras-credit",
    symbol: "egc",
    name: "Egoras Credit",
  },
  {
    id: "egretia",
    symbol: "egt",
    name: "Egretia",
  },
  {
    id: "egyptian-mau",
    symbol: "mau",
    name: "Egyptian Mau",
  },
  {
    id: "ehash",
    symbol: "ehash",
    name: "EHash",
  },
  {
    id: "eidos",
    symbol: "eidos",
    name: "EIDOS",
  },
  {
    id: "eifi-finance",
    symbol: "eifi",
    name: "EIFI Finance",
  },
  {
    id: "eight-hours",
    symbol: "ehrt",
    name: "Eight Hours",
  },
  {
    id: "eiichiro-oda-inu",
    symbol: "oda",
    name: "Eiichiro Oda Inu",
  },
  {
    id: "einsteinium",
    symbol: "emc2",
    name: "Einsteinium",
  },
  {
    id: "eject",
    symbol: "eject",
    name: "Eject",
  },
  {
    id: "ekta-2",
    symbol: "ekta",
    name: "Ekta",
  },
  {
    id: "elamachain",
    symbol: "elama",
    name: "Elamachain",
  },
  {
    id: "elanausd",
    symbol: "use",
    name: "ElenaUSD",
  },
  {
    id: "elastic-bitcoin",
    symbol: "xbt",
    name: "Elastic Bitcoin",
  },
  {
    id: "elastic-dao",
    symbol: "egt",
    name: "ElasticDAO",
  },
  {
    id: "elastos",
    symbol: "ela",
    name: "Elastos",
  },
  {
    id: "electra",
    symbol: "eca",
    name: "Electra",
  },
  {
    id: "electra-protocol",
    symbol: "xep",
    name: "Electra Protocol",
  },
  {
    id: "electric-arena",
    symbol: "earena",
    name: "Electric Arena",
  },
  {
    id: "electric-cash",
    symbol: "elcash",
    name: "Electric Cash",
  },
  {
    id: "electric-token",
    symbol: "etr",
    name: "Electric Token",
  },
  {
    id: "electric-vehicle-direct-currency",
    symbol: "evdc",
    name: "Electric Vehicle Direct Currency",
  },
  {
    id: "electric-vehicle-zone",
    symbol: "evz",
    name: "Electric Vehicle Zone",
  },
  {
    id: "electrify-asia",
    symbol: "elec",
    name: "Electrify.Asia",
  },
  {
    id: "electrinity",
    symbol: "elit",
    name: "Electrinity",
  },
  {
    id: "electronero",
    symbol: "etnx",
    name: "Electronero",
  },
  {
    id: "electronero-pulse",
    symbol: "etnxp",
    name: "Electronero Pulse",
  },
  {
    id: "electroneum",
    symbol: "etn",
    name: "Electroneum",
  },
  {
    id: "electronicgulden",
    symbol: "efl",
    name: "Electronic Gulden",
  },
  {
    id: "electronic-move-pay",
    symbol: "emp",
    name: "Electronic Move Pay",
  },
  {
    id: "electronic-pk-chain",
    symbol: "epc",
    name: "Electronic PK Chain",
  },
  {
    id: "electrum-dark",
    symbol: "eld",
    name: "Electrum Dark",
  },
  {
    id: "elefworld",
    symbol: "elef",
    name: "ELEF World",
  },
  {
    id: "elementrem",
    symbol: "ele",
    name: "Elementrem",
  },
  {
    id: "elements-2",
    symbol: "elm",
    name: "Elements",
  },
  {
    id: "elemon",
    symbol: "elmon",
    name: "Elemon",
  },
  {
    id: "elena-protocol",
    symbol: "elena",
    name: "Elena Protocol",
  },
  {
    id: "elephant-money",
    symbol: "elephant",
    name: "Elephant Money",
  },
  {
    id: "elevate",
    symbol: "ele",
    name: "Elevate",
  },
  {
    id: "e-leven",
    symbol: "elv",
    name: "E-leven",
  },
  {
    id: "eleven-finance",
    symbol: "ele",
    name: "Eleven Finance",
  },
  {
    id: "elf-token",
    symbol: "elf",
    name: "Elf Token",
  },
  {
    id: "eligma",
    symbol: "goc",
    name: "GoCrypto",
  },
  {
    id: "elis",
    symbol: "xls",
    name: "ELIS",
  },
  {
    id: "elite-swap",
    symbol: "elt",
    name: "Elite Swap",
  },
  {
    id: "elitium",
    symbol: "eum",
    name: "Elitium",
  },
  {
    id: "elk-finance",
    symbol: "elk",
    name: "Elk Finance",
  },
  {
    id: "ellaism",
    symbol: "ella",
    name: "Ellaism",
  },
  {
    id: "ellipsis",
    symbol: "eps",
    name: "Ellipsis",
  },
  {
    id: "eloin",
    symbol: "eloin",
    name: "Eloin",
  },
  {
    id: "elo-inu",
    symbol: "Elo Inu",
    name: "Elo Inu",
  },
  {
    id: "elonballs",
    symbol: "elonballs",
    name: "ELONBALLS",
  },
  {
    id: "elon-diamond-hands",
    symbol: "edh",
    name: "Elon Diamond Hands",
  },
  {
    id: "elondoge-dao",
    symbol: "edao",
    name: "ElonDoge DAO",
  },
  {
    id: "elon-doge-token",
    symbol: "edoge",
    name: "ElonDoge Token",
  },
  {
    id: "elonflokiinu",
    symbol: "EFloki",
    name: "ElonFlokiInu",
  },
  {
    id: "elongate",
    symbol: "elongate",
    name: "ElonGate",
  },
  {
    id: "elongate-duluxe",
    symbol: "elongd",
    name: "Elongate Deluxe",
  },
  {
    id: "elon-goat",
    symbol: "egt",
    name: "Elon GOAT",
  },
  {
    id: "elongrab",
    symbol: "ELONGRAB",
    name: "Elongrab",
  },
  {
    id: "eloniumcoin",
    symbol: "elnc",
    name: "EloniumCoin",
  },
  {
    id: "elonomics",
    symbol: "$elonom",
    name: "Elonomics",
  },
  {
    id: "elon-peg",
    symbol: "elonpeg",
    name: "Elon Peg",
  },
  {
    id: "elons-marvin",
    symbol: "marvin",
    name: "Elon's Marvin",
  },
  {
    id: "elonspets",
    symbol: "elp",
    name: "ElonsPets",
  },
  {
    id: "elons-rabbit",
    symbol: "erabbit",
    name: "ELONs RABBIT",
  },
  {
    id: "elontech",
    symbol: "etch",
    name: "ElonTech",
  },
  {
    id: "elpis-battle",
    symbol: "EBA",
    name: "Elpis Battle",
  },
  {
    id: "elrond-erd-2",
    symbol: "egld",
    name: "Elrond",
  },
  {
    id: "eltcoin",
    symbol: "eltcoin",
    name: "Eltcoin",
  },
  {
    id: "elves-century",
    symbol: "elves",
    name: "Elves Century",
  },
  {
    id: "elves-continent",
    symbol: "ek",
    name: "Elves Continent",
  },
  {
    id: "elya",
    symbol: "elya",
    name: "Elya",
  },
  {
    id: "elynet-token",
    symbol: "elyx",
    name: "Elynet Token",
  },
  {
    id: "elysia",
    symbol: "el",
    name: "ELYSIA",
  },
  {
    id: "elysian",
    symbol: "ely",
    name: "Elysian",
  },
  {
    id: "elysiant-token",
    symbol: "els",
    name: "Elysian Token",
  },
  {
    id: "elysium",
    symbol: "lys",
    name: "Elysium",
  },
  {
    id: "emanate",
    symbol: "EMT",
    name: "Emanate",
  },
  {
    id: "embr",
    symbol: "embr",
    name: "Embr",
  },
  {
    id: "emercoin",
    symbol: "emc",
    name: "EmerCoin",
  },
  {
    id: "eminer",
    symbol: "em",
    name: "Eminer",
  },
  {
    id: "emirex-token",
    symbol: "emrx",
    name: "Emirex Token",
  },
  {
    id: "emiswap",
    symbol: "esw",
    name: "EmiSwap",
  },
  {
    id: "emocoin",
    symbol: "EMO",
    name: "Emocoin",
  },
  {
    id: "emogi-network",
    symbol: "lol",
    name: "EMOGI Network",
  },
  {
    id: "emoji",
    symbol: "emoj",
    name: "Emoji",
  },
  {
    id: "emojis-farm",
    symbol: "emoji",
    name: "Emojis Farm",
  },
  {
    id: "e-money",
    symbol: "ngm",
    name: "e-Money",
  },
  {
    id: "e-money-eur",
    symbol: "eeur",
    name: "e-Money EUR",
  },
  {
    id: "empire-capital-token",
    symbol: "ecc",
    name: "Empire Capital Token",
  },
  {
    id: "empire-token",
    symbol: "empire",
    name: "Empire Token",
  },
  {
    id: "emp-money",
    symbol: "emp",
    name: "Emp Money",
  },
  {
    id: "emporiumx",
    symbol: "epx",
    name: "EmporiumX",
  },
  {
    id: "empow",
    symbol: "em",
    name: "Empow",
  },
  {
    id: "empower-network",
    symbol: "mpwr",
    name: "Empower Network",
  },
  {
    id: "emp-shares",
    symbol: "eshare",
    name: "EMP Shares",
  },
  {
    id: "empty-set-dollar",
    symbol: "esd",
    name: "Empty Set Dollar",
  },
  {
    id: "empty-set-share",
    symbol: "ess",
    name: "Empty Set Share",
  },
  {
    id: "empyrean",
    symbol: "empyr",
    name: "Empyrean",
  },
  {
    id: "emrals",
    symbol: "emrals",
    name: "Emrals",
  },
  {
    id: "encocoinplus",
    symbol: "epg",
    name: "Encocoinplus",
  },
  {
    id: "encrypgen",
    symbol: "dna",
    name: "EncrypGen",
  },
  {
    id: "endgame-token",
    symbol: "end",
    name: "Endgame Token",
  },
  {
    id: "endor",
    symbol: "edr",
    name: "Endor Protocol Token",
  },
  {
    id: "endpoint-cex-fan-token",
    symbol: "endcex",
    name: "Endpoint Cex Fan Token",
  },
  {
    id: "enegra",
    symbol: "egx",
    name: "Enegra",
  },
  {
    id: "energi",
    symbol: "nrg",
    name: "Energi",
  },
  {
    id: "energo",
    symbol: "tsl",
    name: "Tesla Token",
  },
  {
    id: "energoncoin",
    symbol: "tfg1",
    name: "Energoncoin",
  },
  {
    id: "energy8",
    symbol: "e8",
    name: "Energy8",
  },
  {
    id: "energycoin",
    symbol: "enrg",
    name: "Energycoin",
  },
  {
    id: "energy-ledger",
    symbol: "elx",
    name: "Energy Ledger",
  },
  {
    id: "energy-pay",
    symbol: "ENY",
    name: "Energy Pay",
  },
  {
    id: "energy-vault-nftx",
    symbol: "energy",
    name: "ENERGY Vault (NFTX)",
  },
  {
    id: "energy-web-token",
    symbol: "ewt",
    name: "Energy Web Token",
  },
  {
    id: "enex",
    symbol: "enx",
    name: "ENEX",
  },
  {
    id: "engine",
    symbol: "egcc",
    name: "Engine",
  },
  {
    id: "engine-token",
    symbol: "engn",
    name: "Engine Token",
  },
  {
    id: "enhanced-liquidity-konstrukt",
    symbol: "elk",
    name: "Enhanced Liquidity Konstrukt",
  },
  {
    id: "enhance-token",
    symbol: "enhance",
    name: "Enhance Token",
  },
  {
    id: "enigma",
    symbol: "eng",
    name: "Enigma",
  },
  {
    id: "enigma-dao",
    symbol: "gma",
    name: "Enigma DAO",
  },
  {
    id: "enjincoin",
    symbol: "enj",
    name: "Enjin Coin",
  },
  {
    id: "enjinstarter",
    symbol: "ejs",
    name: "Enjinstarter",
  },
  {
    id: "enjin-wormhole",
    symbol: "enj",
    name: "Enjin (Wormhole)",
  },
  {
    id: "enkronos",
    symbol: "enk",
    name: "Enkronos",
  },
  {
    id: "enno-cash",
    symbol: "enno",
    name: "ENNO Cash",
  },
  {
    id: "enq-enecuum",
    symbol: "enq",
    name: "Enecuum",
  },
  {
    id: "enreachdao",
    symbol: "nrch",
    name: "EnreachDAO",
  },
  {
    id: "en-tan-mo",
    symbol: "etm",
    name: "En-Tan-Mo",
  },
  {
    id: "enterbutton",
    symbol: "entc",
    name: "EnterButton",
  },
  {
    id: "entercoin",
    symbol: "entrc",
    name: "EnterCoin",
  },
  {
    id: "enterdao",
    symbol: "entr",
    name: "EnterDAO",
  },
  {
    id: "entireswap",
    symbol: "entire",
    name: "EntireSwap",
  },
  {
    id: "entropyfi",
    symbol: "erp",
    name: "Entropyfi",
  },
  {
    id: "enumivo",
    symbol: "enu",
    name: "Enumivo",
  },
  {
    id: "env-finance",
    symbol: "env",
    name: "ENV Finance",
  },
  {
    id: "envida",
    symbol: "edat",
    name: "EnviDa",
  },
  {
    id: "envion",
    symbol: "evn",
    name: "Envion",
  },
  {
    id: "enviro",
    symbol: "enviro",
    name: "Enviro",
  },
  {
    id: "envoy-defi",
    symbol: "voy",
    name: "enVoy DeFi",
  },
  {
    id: "envoy-network",
    symbol: "env",
    name: "Envoy",
  },
  {
    id: "eos",
    symbol: "eos",
    name: "EOS",
  },
  {
    id: "eosbet",
    symbol: "bet",
    name: "EarnBet",
  },
  {
    id: "eosblack",
    symbol: "black",
    name: "eosBLACK",
  },
  {
    id: "eos-btc",
    symbol: "ebtc",
    name: "EOS BTC",
  },
  {
    id: "eosdac",
    symbol: "eosdac",
    name: "eosDAC",
  },
  {
    id: "eos-eth",
    symbol: "eeth",
    name: "EOS ETH",
  },
  {
    id: "eosforce",
    symbol: "eosc",
    name: "EOSForce",
  },
  {
    id: "eos-pow-coin",
    symbol: "pow",
    name: "EOS PoW Coin",
  },
  {
    id: "eox",
    symbol: "eox",
    name: "EOX",
  },
  {
    id: "e-p",
    symbol: "e$p",
    name: "E$P",
  },
  {
    id: "epanus",
    symbol: "eps",
    name: "Epanus",
  },
  {
    id: "epic-cash",
    symbol: "epic",
    name: "Epic Cash",
  },
  {
    id: "epichero",
    symbol: "epichero",
    name: "EpicHero",
  },
  {
    id: "epik-prime",
    symbol: "epik",
    name: "Epik Prime",
  },
  {
    id: "epik-protocol",
    symbol: "epk",
    name: "EpiK Protocol",
  },
  {
    id: "epluscoin",
    symbol: "eplus",
    name: "Epluscoin",
  },
  {
    id: "epochtoken",
    symbol: "eph",
    name: "EpochToken",
  },
  {
    id: "epstein",
    symbol: "epstein",
    name: "Epstein",
  },
  {
    id: "eqifi",
    symbol: "eqx",
    name: "EQIFi",
  },
  {
    id: "equal",
    symbol: "eql",
    name: "Equal",
  },
  {
    id: "equalizer",
    symbol: "eqz",
    name: "Equalizer",
  },
  {
    id: "equilibrium",
    symbol: "eq",
    name: "Equilibrium Games",
  },
  {
    id: "equilibrium-eosdt",
    symbol: "eosdt",
    name: "Equilibrium EOSDT",
  },
  {
    id: "equitrader",
    symbol: "eqt",
    name: "EquiTrader",
  },
  {
    id: "equos-origin",
    symbol: "eqo",
    name: "EQO",
  },
  {
    id: "e-radix",
    symbol: "exrd",
    name: "e-Radix",
  },
  {
    id: "era-swap-token",
    symbol: "es",
    name: "Era Swap Token",
  },
  {
    id: "erc20",
    symbol: "erc20",
    name: "ERC20",
  },
  {
    id: "erc223",
    symbol: "erc223",
    name: "ERC223",
  },
  {
    id: "erenyeagerinu",
    symbol: "erenyeagerinu",
    name: "Eren Yeager Inu",
  },
  {
    id: "ergo",
    symbol: "erg",
    name: "Ergo",
  },
  {
    id: "eristica",
    symbol: "ert",
    name: "Eristica token",
  },
  {
    id: "eron",
    symbol: "eron",
    name: "ERON",
  },
  {
    id: "eros",
    symbol: "ers",
    name: "Eros",
  },
  {
    id: "eros-token",
    symbol: "eros",
    name: "Eros Token",
  },
  {
    id: "erotica-2",
    symbol: "erotica",
    name: "Erotica",
  },
  {
    id: "eroverse",
    symbol: "ero",
    name: "Eroverse",
  },
  {
    id: "ertha",
    symbol: "ertha",
    name: "Ertha",
  },
  {
    id: "erth-token",
    symbol: "erth",
    name: "ERTH Token",
  },
  {
    id: "erugo-world-coin",
    symbol: "ewc",
    name: "Erugo World Coin",
  },
  {
    id: "escoin-token",
    symbol: "elg",
    name: "Escoin Token",
  },
  {
    id: "escrow-protocol",
    symbol: "escrow",
    name: "Escrow Protocol",
  },
  {
    id: "escudonavacense",
    symbol: "esn",
    name: "EscudoNavacense",
  },
  {
    id: "esg-chain",
    symbol: "esgc",
    name: "ESG Chain",
  },
  {
    id: "eshark-token",
    symbol: "eshk",
    name: "eShark Token",
  },
  {
    id: "eska",
    symbol: "esk",
    name: "Eska",
  },
  {
    id: "eskisehir-fan-token",
    symbol: "eses",
    name: "Eskişehir Fan Tokens",
  },
  {
    id: "espers",
    symbol: "esp",
    name: "Espers",
  },
  {
    id: "esplash",
    symbol: "espl",
    name: "ESplash",
  },
  {
    id: "e-sport-betting-coin",
    symbol: "esbc",
    name: "ESBC",
  },
  {
    id: "esports",
    symbol: "ert",
    name: "Esports.com",
  },
  {
    id: "esportspro",
    symbol: "espro",
    name: "EsportsPro",
  },
  {
    id: "essence-of-creation",
    symbol: "eoc",
    name: "Essence of Creation",
  },
  {
    id: "essentia",
    symbol: "ess",
    name: "Essentia",
  },
  {
    id: "ester-finance",
    symbol: "est",
    name: "Ester Finance",
  },
  {
    id: "eswapping-v2",
    symbol: "eswapv2",
    name: "eSwapping v2",
  },
  {
    id: "eterland",
    symbol: "eter",
    name: "Eterland",
  },
  {
    id: "etermon",
    symbol: "etm",
    name: "Etermon",
  },
  {
    id: "eternalflow",
    symbol: "EFT",
    name: "EternalFlow",
  },
  {
    id: "eternalgirl",
    symbol: "etgl",
    name: "EternalGirl",
  },
  {
    id: "eternal-oasis",
    symbol: "etos",
    name: "Eternal Oasis",
  },
  {
    id: "eternal-spire-v2",
    symbol: "ensp",
    name: "Eternal Spire V2",
  },
  {
    id: "etf-dao",
    symbol: "tfd",
    name: "ETF Dao",
  },
  {
    id: "etg-finance",
    symbol: "etgf",
    name: "ETG Finance",
  },
  {
    id: "eth_20_day_ma_crossover_set",
    symbol: "eth20smaco",
    name: "ETH 20 Day MA Crossover Set",
  },
  {
    id: "eth-20-day-ma-crossover-yield-set",
    symbol: "ethmacoapy",
    name: "ETH 20 Day MA Crossover Yield Set",
  },
  {
    id: "eth-20-ma-crossover-yield-set-ii",
    symbol: "eth20macoapy",
    name: "ETH 20 MA Crossover Yield Set II",
  },
  {
    id: "eth2-staking-by-poolx",
    symbol: "eth2",
    name: "Eth 2.0 Staking by Pool-X",
  },
  {
    id: "eth-2x-flexible-leverage-index",
    symbol: "ETH2x-FLI",
    name: "Index Coop - ETH 2x Flexible Leverage Index",
  },
  {
    id: "eth3s",
    symbol: "eth3s",
    name: "ETH3S",
  },
  {
    id: "eth-50-day-ma-crossover-set",
    symbol: "eth50smaco",
    name: "ETH 50 Day MA Crossover Set",
  },
  {
    id: "etha-lend",
    symbol: "etha",
    name: "ETHA Lend",
  },
  {
    id: "ethanol",
    symbol: "enol",
    name: "Ethanol",
  },
  {
    id: "ethart",
    symbol: "arte",
    name: "Items",
  },
  {
    id: "ethbnt",
    symbol: "ethbnt",
    name: "ETHBNT Relay",
  },
  {
    id: "ethbtc-1x-short",
    symbol: "ratiodoom",
    name: "ETHBTC 1x Short",
  },
  {
    id: "ethbtc-2x-long-polygon",
    symbol: "mratiomoon",
    name: "ETHBTC 2x Long (Polygon)",
  },
  {
    id: "ethbtc-2x-long-token",
    symbol: "ethbtcmoon",
    name: "ETHBTC 2x Long Token",
  },
  {
    id: "eth-btc-ema-ratio-trading-set",
    symbol: "ethbtcemaco",
    name: "ETH/BTC EMA Ratio Trading Set",
  },
  {
    id: "eth-btc-rsi-ratio-trading-set",
    symbol: "ethbtcrsi",
    name: "ETH/BTC RSI Ratio Trading Set",
  },
  {
    id: "ethdown",
    symbol: "ethdown",
    name: "ETHDOWN",
  },
  {
    id: "etheal",
    symbol: "heal",
    name: "Etheal",
  },
  {
    id: "etheking",
    symbol: "ethe",
    name: "ETHEKing",
  },
  {
    id: "ether-1",
    symbol: "ETHO",
    name: "Etho Protocol",
  },
  {
    id: "ethera-2",
    symbol: "eta",
    name: "Ethera",
  },
  {
    id: "etherback",
    symbol: "ethback",
    name: "EtherBack",
  },
  {
    id: "etherbone",
    symbol: "ethbn",
    name: "EtherBone",
  },
  {
    id: "etherconnect",
    symbol: "ecc",
    name: "Etherconnect",
  },
  {
    id: "ethereans",
    symbol: "os",
    name: "Ethereans",
  },
  {
    id: "etherean-socks",
    symbol: "eth2socks",
    name: "Etherean Socks",
  },
  {
    id: "etheremontoken",
    symbol: "emont",
    name: "EthermonToken",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },
  {
    id: "ethereum-apex",
    symbol: "eapex",
    name: "Ethereum Apex",
  },
  {
    id: "ethereum-cash",
    symbol: "ecash",
    name: "Ethereum Cash",
  },
  {
    id: "ethereum-cash-token",
    symbol: "ecash",
    name: "Ethereum Cash Token",
  },
  {
    id: "ethereum-chain-token",
    symbol: "ect",
    name: "Ethereum Chain Token",
  },
  {
    id: "ethereum-classic",
    symbol: "etc",
    name: "Ethereum Classic",
  },
  {
    id: "ethereum-eagle-project",
    symbol: "egl",
    name: "Ethereum Gas Limit",
  },
  {
    id: "ethereum-gold",
    symbol: "etg",
    name: "Ethereum Gold",
  },
  {
    id: "ethereum-gold-project",
    symbol: "etgp",
    name: "Ethereum Gold Project",
  },
  {
    id: "ethereum-lite",
    symbol: "elite",
    name: "Ethereum Lite",
  },
  {
    id: "ethereummax",
    symbol: "emax",
    name: "EthereumMax",
  },
  {
    id: "ethereum-meta",
    symbol: "ethm",
    name: "Ethereum Meta",
  },
  {
    id: "ethereum-money",
    symbol: "ethmny",
    name: "Ethereum Money",
  },
  {
    id: "ethereum-name-service",
    symbol: "ens",
    name: "Ethereum Name Service",
  },
  {
    id: "ethereum-name-service-wormhole",
    symbol: "ens",
    name: "Ethereum Name Service (Wormhole)",
  },
  {
    id: "ethereumpay",
    symbol: "epay",
    name: "EthereumPay",
  },
  {
    id: "ethereum-platinum",
    symbol: "eplat",
    name: "Ethereum Platinum",
  },
  {
    id: "ethereum-pro",
    symbol: "epro",
    name: "Ethereum Pro",
  },
  {
    id: "ethereum-push-notification-service",
    symbol: "push",
    name: "Ethereum Push Notification Service - EPNS",
  },
  {
    id: "ethereumsc",
    symbol: "ethsc",
    name: "EthereumSC",
  },
  {
    id: "ethereum-shillings",
    symbol: "eshill",
    name: "Ethereum Shillings",
  },
  {
    id: "ethereum-stake",
    symbol: "ethys",
    name: "Ethereum Stake",
  },
  {
    id: "ethereumvault",
    symbol: "evault",
    name: "EthereumVault",
  },
  {
    id: "ethereum-vault",
    symbol: "ethv",
    name: "Ethereum Vault",
  },
  {
    id: "ethereum-volatility-index-token",
    symbol: "ethv",
    name: "Ethereum Volatility Index Token",
  },
  {
    id: "ethereum-wormhole",
    symbol: "eth",
    name: "Ethereum (Wormhole)",
  },
  {
    id: "ethereum-wrapped-filecoin",
    symbol: "efil",
    name: "Ethereum Wrapped Filecoin",
  },
  {
    id: "ethereumx",
    symbol: "etx",
    name: "EthereumX",
  },
  {
    id: "ethereum-yield",
    symbol: "ethy",
    name: "Ethereum Yield",
  },
  {
    id: "ethergem",
    symbol: "egem",
    name: "EtherGem",
  },
  {
    id: "etherinc",
    symbol: "eti",
    name: "EtherInc",
  },
  {
    id: "etherisc",
    symbol: "dip",
    name: "Etherisc DIP Token",
  },
  {
    id: "ether-kingdoms-token",
    symbol: "imp",
    name: "Ether Kingdoms Token",
  },
  {
    id: "etherland",
    symbol: "eland",
    name: "Etherland",
  },
  {
    id: "ether-legends",
    symbol: "elet",
    name: "Elementeum",
  },
  {
    id: "etherlite-2",
    symbol: "etl",
    name: "EtherLite",
  },
  {
    id: "ethermon",
    symbol: "emon",
    name: "Ethermon",
  },
  {
    id: "ethernaal",
    symbol: "naal",
    name: "Ethernaal",
  },
  {
    id: "ethernal-finance",
    symbol: "ethfin",
    name: "Ethernal Finance",
  },
  {
    id: "ethernity-chain",
    symbol: "ern",
    name: "Ethernity Chain",
  },
  {
    id: "ethernity-cloud",
    symbol: "etny",
    name: "Ethernity CLOUD",
  },
  {
    id: "etheroll",
    symbol: "dice",
    name: "Etheroll",
  },
  {
    id: "etherparty",
    symbol: "fuel",
    name: "Etherparty",
  },
  {
    id: "etherpay",
    symbol: "ethpy",
    name: "Etherpay",
  },
  {
    id: "etherprint",
    symbol: "ethp",
    name: "Etherprint",
  },
  {
    id: "etherrock-72",
    symbol: "pebble",
    name: "Etherrock #72",
  },
  {
    id: "ethersmart",
    symbol: "etm",
    name: "EtherSmart",
  },
  {
    id: "ethersniper",
    symbol: "ets",
    name: "Ethersniper",
  },
  {
    id: "ethersocks",
    symbol: "sox",
    name: "Ethersocks",
  },
  {
    id: "ether-terrestrial",
    symbol: "et",
    name: "Ether Terrestrial",
  },
  {
    id: "etherzero",
    symbol: "etz",
    name: "Ether Zero",
  },
  {
    id: "eth-fan-token",
    symbol: "eft",
    name: "ETH Fan Token",
  },
  {
    id: "ethichub",
    symbol: "ethix",
    name: "EthicHub",
  },
  {
    id: "ethlend",
    symbol: "lend",
    name: "Aave [OLD]",
  },
  {
    id: "ethorse",
    symbol: "horse",
    name: "Ethorse",
  },
  {
    id: "ethos",
    symbol: "vgx",
    name: "Voyager Token",
  },
  {
    id: "ethos-project",
    symbol: "ethos",
    name: "Ethos Project",
  },
  {
    id: "ethpad",
    symbol: "ethpad",
    name: "ETHPad",
  },
  {
    id: "ethplode",
    symbol: "ethplo",
    name: "ETHplode",
  },
  {
    id: "ethplus",
    symbol: "ethp",
    name: "ETHPlus",
  },
  {
    id: "eth-price-action-candlestick-set",
    symbol: "ethpa",
    name: "ETH Price Action Candlestick Set",
  },
  {
    id: "eth-rsi-60-40-crossover-set",
    symbol: "ethrsi6040",
    name: "ETH RSI 60/40 Crossover Set",
  },
  {
    id: "eth-rsi-60-40-yield-set",
    symbol: "ethrsiapy",
    name: "ETH RSI 60/40 Yield Set",
  },
  {
    id: "eth-rsi-60-40-yield-set-ii",
    symbol: "ethrsiapy",
    name: "ETH RSI 60/40 Yield Set II",
  },
  {
    id: "ethst-governance-token",
    symbol: "et",
    name: "ETHST Governance Token",
  },
  {
    id: "ethtez",
    symbol: "ethtz",
    name: "ETHtez",
  },
  {
    id: "ethup",
    symbol: "ethup",
    name: "ETHUP",
  },
  {
    id: "eth-variable-long",
    symbol: "methmoon",
    name: "ETH Variable Leverage Long",
  },
  {
    id: "ethverse",
    symbol: "ethv",
    name: "Ethverse",
  },
  {
    id: "ethzilla",
    symbol: "ethzilla",
    name: "EthZilla",
  },
  {
    id: "etitanium",
    symbol: "etit",
    name: "eTitanium",
  },
  {
    id: "etna-network",
    symbol: "etna",
    name: "ETNA Network",
  },
  {
    id: "etor",
    symbol: "etor",
    name: "etor",
  },
  {
    id: "etrade",
    symbol: "ett",
    name: "Etrade",
  },
  {
    id: "eub-chain",
    symbol: "eubc",
    name: "EUB Chain",
  },
  {
    id: "euler-tools",
    symbol: "euler",
    name: "Euler Tools",
  },
  {
    id: "euno",
    symbol: "euno",
    name: "EUNO",
  },
  {
    id: "eunomia",
    symbol: "ents",
    name: "EUNOMIA",
  },
  {
    id: "euphoria-2",
    symbol: "wagmi",
    name: "Euphoria",
  },
  {
    id: "eureka-coin",
    symbol: "erk",
    name: "Eureka Coin",
  },
  {
    id: "eurocoinpay",
    symbol: "ecte",
    name: "EurocoinToken",
  },
  {
    id: "europecoin",
    symbol: "erc",
    name: "EuropeCoin",
  },
  {
    id: "euro-stable-token",
    symbol: "eurst",
    name: "Euro Stable Token",
  },
  {
    id: "euro-token-2",
    symbol: "euro",
    name: "Euro Token",
  },
  {
    id: "eurxb",
    symbol: "eurxb",
    name: "EURxb",
  },
  {
    id: "eutaria",
    symbol: "eut",
    name: "Eutaria",
  },
  {
    id: "evagrow-coin",
    symbol: "eva",
    name: "Evagrow Coin",
  },
  {
    id: "evai",
    symbol: "evai",
    name: "Evai",
  },
  {
    id: "evanesco-network",
    symbol: "eva",
    name: "Evanesco Network",
  },
  {
    id: "evedo",
    symbol: "eved",
    name: "Evedo",
  },
  {
    id: "eve-exchange",
    symbol: "eve",
    name: "EVE Exchange",
  },
  {
    id: "evencoin",
    symbol: "evn",
    name: "EvenCoin",
  },
  {
    id: "everape",
    symbol: "everape",
    name: "EverApe",
  },
  {
    id: "everbnb",
    symbol: "everbnb",
    name: "EverBNB",
  },
  {
    id: "everdot",
    symbol: "everdot",
    name: "EverDot",
  },
  {
    id: "everestcoin",
    symbol: "evcoin",
    name: "EverestCoin",
  },
  {
    id: "everest-token",
    symbol: "evrt",
    name: "Everest Token",
  },
  {
    id: "evereth",
    symbol: "EverETH",
    name: "EverETH",
  },
  {
    id: "everex",
    symbol: "evx",
    name: "Everex",
  },
  {
    id: "evergain",
    symbol: "evergain",
    name: "EverGain",
  },
  {
    id: "evergreen-token",
    symbol: "egt",
    name: "Evergreen Token",
  },
  {
    id: "evergrowcoin",
    symbol: "EGC",
    name: "EverGrowCoin",
  },
  {
    id: "everid",
    symbol: "id",
    name: "Everest",
  },
  {
    id: "everipedia",
    symbol: "iq",
    name: "Everipedia",
  },
  {
    id: "everlens",
    symbol: "elen",
    name: "Everlens",
  },
  {
    id: "evermars",
    symbol: "evm",
    name: "EverMars",
  },
  {
    id: "evermusk",
    symbol: "evermusk",
    name: "Evermusk",
  },
  {
    id: "everreflect",
    symbol: "evrf",
    name: "EverReflect",
  },
  {
    id: "everrise",
    symbol: "rise",
    name: "EverRise",
  },
  {
    id: "eversol",
    symbol: "esol",
    name: "EVERSOL",
  },
  {
    id: "eversol-staked-sol",
    symbol: "esol",
    name: "EverSOL Staked SOL",
  },
  {
    id: "everswap",
    symbol: "ever",
    name: "EverSwap",
  },
  {
    id: "everton-fan-token",
    symbol: "efc",
    name: "Everton Fan Token",
  },
  {
    id: "everus",
    symbol: "evr",
    name: "Everus",
  },
  {
    id: "everyape",
    symbol: "evape",
    name: "EveryApe",
  },
  {
    id: "everyape-bsc",
    symbol: "evape",
    name: "EveryApe BSC",
  },
  {
    id: "everycoin",
    symbol: "evy",
    name: "EveryCoin",
  },
  {
    id: "every-game",
    symbol: "egame",
    name: "Every Game",
  },
  {
    id: "everyonescrypto",
    symbol: "eoc",
    name: "EveryonesCrypto",
  },
  {
    id: "every-original",
    symbol: "eveo",
    name: "EVERY ORIGINAL",
  },
  {
    id: "evident-proof-transaction-token",
    symbol: "eptt",
    name: "Evident Proof Transaction Token",
  },
  {
    id: "evil-coin",
    symbol: "evil",
    name: "Evil Coin",
  },
  {
    id: "evilsquidgame",
    symbol: "evilsquid",
    name: "EvilSquidGame",
  },
  {
    id: "evny-token",
    symbol: "evny",
    name: "EVNY Token",
  },
  {
    id: "evocardano",
    symbol: "evoc",
    name: "EvoCardano",
  },
  {
    id: "evolution",
    symbol: "gen",
    name: "Evolution",
  },
  {
    id: "evolution-finance",
    symbol: "evn",
    name: "Evolution Finance",
  },
  {
    id: "evolution-network",
    symbol: "evox",
    name: "Evolution Network",
  },
  {
    id: "evolution-token",
    symbol: "evo",
    name: "Evolution Token",
  },
  {
    id: "evoverse-power",
    symbol: "epw",
    name: "Evoverse Power",
  },
  {
    id: "evrice",
    symbol: "evc",
    name: "Evrice",
  },
  {
    id: "evrynet",
    symbol: "evry",
    name: "Evrynet",
  },
  {
    id: "evulus",
    symbol: "evu",
    name: "Evulus",
  },
  {
    id: "excavo-finance",
    symbol: "cavo",
    name: "Excavo Finance",
  },
  {
    id: "excelon",
    symbol: "xlon",
    name: "Excelon",
  },
  {
    id: "exchangecoin",
    symbol: "excc",
    name: "ExchangeCoin",
  },
  {
    id: "exchange-genesis-ethlas-medium",
    symbol: "xgem",
    name: "Exchange Genesis Ethlas Medium",
  },
  {
    id: "exchange-union",
    symbol: "xuc",
    name: "Exchange Union",
  },
  {
    id: "exciting-japan-coin",
    symbol: "xjp",
    name: "eXciting Japan Coin",
  },
  {
    id: "exclusivecoin",
    symbol: "excl",
    name: "ExclusiveCoin",
  },
  {
    id: "exeedme",
    symbol: "xed",
    name: "Exeedme",
  },
  {
    id: "exenox-mobile",
    symbol: "exnx",
    name: "Exenox Mobile",
  },
  {
    id: "exenpay-token",
    symbol: "exenp",
    name: "ExenPay Token",
  },
  {
    id: "exentoken",
    symbol: "exen",
    name: "ExenToken",
  },
  {
    id: "exgold",
    symbol: "exg",
    name: "Exgold",
  },
  {
    id: "exip",
    symbol: "EXIP",
    name: "EXIP",
  },
  {
    id: "exmo-coin",
    symbol: "exm",
    name: "EXMO Coin",
  },
  {
    id: "exmr-monero",
    symbol: "exmr",
    name: "EXMR FDN",
  },
  {
    id: "exnetwork-token",
    symbol: "exnt",
    name: "ExNetwork Token",
  },
  {
    id: "exodia",
    symbol: "exod",
    name: "Exodia",
  },
  {
    id: "exodia-inu",
    symbol: "exodia",
    name: "Exodia Inu",
  },
  {
    id: "exohood",
    symbol: "exo",
    name: "Exohood",
  },
  {
    id: "exor",
    symbol: "exor",
    name: "EXOR",
  },
  {
    id: "expanse",
    symbol: "exp",
    name: "Expanse",
  },
  {
    id: "experience-chain",
    symbol: "xpc",
    name: "eXPerience Chain",
  },
  {
    id: "experiencecoin",
    symbol: "epc",
    name: "ExperienceCoin",
  },
  {
    id: "experiencer",
    symbol: "expr",
    name: "Experiencer",
  },
  {
    id: "experty-wisdom-token",
    symbol: "wis",
    name: "Experty Wisdom Token",
  },
  {
    id: "exrnchain",
    symbol: "exrn",
    name: "EXRNchain",
  },
  {
    id: "exrt-network",
    symbol: "exrt",
    name: "EXRT Network",
  },
  {
    id: "extradna",
    symbol: "xdna",
    name: "extraDNA",
  },
  {
    id: "extreme-private-masternode-coin",
    symbol: "EPM",
    name: "Extreme Private Masternode Coin",
  },
  {
    id: "exzocoin",
    symbol: "exzo",
    name: "ExzoCoin 2.0",
  },
  {
    id: "eyes-protocol",
    symbol: "eyes",
    name: "EYES Protocol",
  },
  {
    id: "ezdex",
    symbol: "ezx",
    name: "EZDex",
  },
  {
    id: "ezystayz",
    symbol: "ezy",
    name: "Ezystayz",
  },
  {
    id: "fabric",
    symbol: "fab",
    name: "Fabric",
  },
  {
    id: "fabwelt",
    symbol: "welt",
    name: "Fabwelt",
  },
  {
    id: "face",
    symbol: "face",
    name: "Faceter",
  },
  {
    id: "face-vault-nftx",
    symbol: "face",
    name: "FACE Vault (NFTX)",
  },
  {
    id: "factom",
    symbol: "fct",
    name: "Factom",
  },
  {
    id: "facts",
    symbol: "bkc",
    name: "FACTS",
  },
  {
    id: "faircoin",
    symbol: "fair",
    name: "Faircoin",
  },
  {
    id: "fairgame",
    symbol: "fair",
    name: "FairGame",
  },
  {
    id: "fairlife",
    symbol: "fairlife",
    name: "FairLife",
  },
  {
    id: "fairum",
    symbol: "fai",
    name: "Fairum",
  },
  {
    id: "faithcoin",
    symbol: "faith",
    name: "FaithCoin",
  },
  {
    id: "falafel",
    symbol: "falafel",
    name: "Falafel",
  },
  {
    id: "falcon-nine",
    symbol: "f9",
    name: "Falcon Nine",
  },
  {
    id: "falcon-swaps",
    symbol: "falcons",
    name: "Falcon Swaps",
  },
  {
    id: "falcon-token",
    symbol: "fnt",
    name: "Falcon Project",
  },
  {
    id: "falconx",
    symbol: "falcx",
    name: "FalconX",
  },
  {
    id: "family",
    symbol: "fam",
    name: "Family",
  },
  {
    id: "famous-coin",
    symbol: "famous",
    name: "Famous Coin",
  },
  {
    id: "famous-five",
    symbol: "fafi",
    name: "Famous Five",
  },
  {
    id: "fam-token",
    symbol: "fam",
    name: "FAM Token",
  },
  {
    id: "fan8",
    symbol: "fan8",
    name: "Fan8",
  },
  {
    id: "fanadise",
    symbol: "fan",
    name: "Fanadise",
  },
  {
    id: "fananywhere",
    symbol: "faw",
    name: "FanAnywhere",
  },
  {
    id: "fanaticos-cash",
    symbol: "fch",
    name: "Fanáticos Cash",
  },
  {
    id: "fanbi-token",
    symbol: "fbt",
    name: "FANBI TOKEN",
  },
  {
    id: "fancy-games",
    symbol: "fnc",
    name: "Fancy Games",
  },
  {
    id: "fandom-chain",
    symbol: "kdc",
    name: "Fandom Chain",
  },
  {
    id: "fango",
    symbol: "xfg",
    name: "Fango",
  },
  {
    id: "fangs",
    symbol: "dragonland",
    name: "Dragon Land Metaverse",
  },
  {
    id: "fang-token",
    symbol: "fang",
    name: "FANG Token",
  },
  {
    id: "fanscoin",
    symbol: "fc",
    name: "FansCoin",
  },
  {
    id: "fans-of-doge",
    symbol: "DogeFans",
    name: "Fans of Doge",
  },
  {
    id: "fanspel",
    symbol: "fan",
    name: "Fanspel",
  },
  {
    id: "fans-squid",
    symbol: "fst",
    name: "Fans Squid",
  },
  {
    id: "fanstime",
    symbol: "fti",
    name: "FansTime",
  },
  {
    id: "fantasy",
    symbol: "ftsy",
    name: "Fantasy",
  },
  {
    id: "fantasy-doge",
    symbol: "ftd",
    name: "Fantasy Doge",
  },
  {
    id: "fantasy-gold",
    symbol: "fgc",
    name: "Fantasy Gold",
  },
  {
    id: "fantasy-tales",
    symbol: "fts",
    name: "Fantasy Tales",
  },
  {
    id: "fantasy-world-gold",
    symbol: "fwg",
    name: "Fantasy World Gold",
  },
  {
    id: "fanterra",
    symbol: "fterra",
    name: "FanTerra",
  },
  {
    id: "fantohm",
    symbol: "fhm",
    name: "Fantohm",
  },
  {
    id: "fantom",
    symbol: "ftm",
    name: "Fantom",
  },
  {
    id: "fantom-cake",
    symbol: "fatcake",
    name: "Fantom Cake",
  },
  {
    id: "fantom-doge",
    symbol: "rip",
    name: "Fantom Doge",
  },
  {
    id: "fantom-ethprinter",
    symbol: "fethp",
    name: "FANTOM ETHPrinter",
  },
  {
    id: "fantom-frens",
    symbol: "ffs",
    name: "Fantom Frens",
  },
  {
    id: "fantomgo",
    symbol: "ftg",
    name: "fantomGO",
  },
  {
    id: "fantom-moon-finance",
    symbol: "fmf",
    name: "Fantom-moon.finance",
  },
  {
    id: "fantom-oasis",
    symbol: "ftmo",
    name: "Fantom Oasis",
  },
  {
    id: "fantom-of-the-opera-apes",
    symbol: "fantomapes",
    name: "Fantom of the Opera Apes",
  },
  {
    id: "fantomstarter",
    symbol: "fs",
    name: "FantomStarter",
  },
  {
    id: "fantom-token-wormhole",
    symbol: "ftmet",
    name: "Fantom Token (Wormhole)",
  },
  {
    id: "fantom-usd",
    symbol: "fusd",
    name: "Fantom USD",
  },
  {
    id: "fantums-of-opera-token",
    symbol: "foo",
    name: "Fantums of Opera Token",
  },
  {
    id: "fanzy",
    symbol: "fx1",
    name: "FANZY",
  },
  {
    id: "faraland",
    symbol: "fara",
    name: "FaraLand",
  },
  {
    id: "farmageddon",
    symbol: "fg",
    name: "Farmageddon",
  },
  {
    id: "farmerdoge",
    symbol: "crop",
    name: "FarmerDoge V3",
  },
  {
    id: "farmers-only",
    symbol: "fox",
    name: "Farmers Only",
  },
  {
    id: "farmersonly-onion",
    symbol: "onion",
    name: "FarmersOnly Onion",
  },
  {
    id: "farm-finance",
    symbol: "fft",
    name: "Farm Finance",
  },
  {
    id: "farmland-protocol",
    symbol: "far",
    name: "Farmland Protocol",
  },
  {
    id: "farm-planet",
    symbol: "fpl",
    name: "Farm Planet",
  },
  {
    id: "farmpoly",
    symbol: "poly",
    name: "FarmPoly",
  },
  {
    id: "farmyield",
    symbol: "famy",
    name: "FarmYield",
  },
  {
    id: "fashion-coin",
    symbol: "fshn",
    name: "Fashion Coin",
  },
  {
    id: "fast-food-wolf-game",
    symbol: "ffwool",
    name: "Fast Food Wolf Game",
  },
  {
    id: "fastmoon",
    symbol: "fastmoon",
    name: "FastMoon",
  },
  {
    id: "fastswap",
    symbol: "fast",
    name: "FastSwap",
  },
  {
    id: "fastswap-bsc",
    symbol: "fast",
    name: "Fastswap (BSC)",
  },
  {
    id: "fatcake",
    symbol: "fatcake",
    name: "FatCake",
  },
  {
    id: "fatcoin",
    symbol: "fat",
    name: "Fatcoin",
  },
  {
    id: "fat-doge",
    symbol: "foge",
    name: "Fat Doge",
  },
  {
    id: "fate-token",
    symbol: "fate",
    name: "Fate Token",
  },
  {
    id: "fat-satoshi",
    symbol: "fatoshi",
    name: "Fat Satoshi",
  },
  {
    id: "favecoin",
    symbol: "fave",
    name: "Favecoin",
  },
  {
    id: "fawkes-mask",
    symbol: "fmk",
    name: "Fawkes Mask",
  },
  {
    id: "fc-barcelona-fan-token",
    symbol: "bar",
    name: "FC Barcelona Fan Token",
  },
  {
    id: "fc-porto",
    symbol: "porto",
    name: "FC Porto",
  },
  {
    id: "fds",
    symbol: "fds",
    name: "Fair Dollars",
  },
  {
    id: "fear",
    symbol: "fear",
    name: "Fear",
  },
  {
    id: "fear-uncertainty-doubt",
    symbol: "fud",
    name: "Fear Uncertainty Doubt",
  },
  {
    id: "feast-finance",
    symbol: "feast",
    name: "Feast Finance",
  },
  {
    id: "feathercoin",
    symbol: "ftc",
    name: "Feathercoin",
  },
  {
    id: "fedoracoin",
    symbol: "tips",
    name: "Fedoracoin",
  },
  {
    id: "fedora-gold",
    symbol: "fed",
    name: "Fedora Gold",
  },
  {
    id: "feeder-finance",
    symbol: "feed",
    name: "Feeder Finance",
  },
  {
    id: "feedeveryshiba",
    symbol: "fes",
    name: "FeedEveryShiba",
  },
  {
    id: "feed-pups",
    symbol: "fups",
    name: "Feed Pups",
  },
  {
    id: "feed-system",
    symbol: "feedtk",
    name: "Feed System",
  },
  {
    id: "feed-token",
    symbol: "feed",
    name: "Feed Token",
  },
  {
    id: "feellike",
    symbol: "fll",
    name: "Feellike",
  },
  {
    id: "fegnomics",
    symbol: "fegn",
    name: "Fegnomics",
  },
  {
    id: "feg-token",
    symbol: "feg",
    name: "FEG Token",
  },
  {
    id: "feg-token-bsc",
    symbol: "feg",
    name: "FEG Token BSC",
  },
  {
    id: "feichang-niu",
    symbol: "fcn",
    name: "Feichang Niu",
  },
  {
    id: "feisty-doge-nft",
    symbol: "nfd",
    name: "Feisty Doge NFT",
  },
  {
    id: "fei-usd",
    symbol: "fei",
    name: "Fei USD",
  },
  {
    id: "fenerbahce-token",
    symbol: "fb",
    name: "Fenerbahçe Token",
  },
  {
    id: "fenix-danjon",
    symbol: "DJN",
    name: "Fenix Danjon",
  },
  {
    id: "fenix-finance",
    symbol: "fenix",
    name: "Fenix Finance",
  },
  {
    id: "fera",
    symbol: "fera",
    name: "Fera",
  },
  {
    id: "ferret",
    symbol: "frt",
    name: "Ferret",
  },
  {
    id: "ferrum-network",
    symbol: "frm",
    name: "Ferrum Network",
  },
  {
    id: "fertilizer",
    symbol: "frt",
    name: "Fertilizer",
  },
  {
    id: "fesbnb",
    symbol: "fesbnb",
    name: "FesBNB",
  },
  {
    id: "fess-chain",
    symbol: "fess",
    name: "Fesschain",
  },
  {
    id: "fetch-ai",
    symbol: "fet",
    name: "Fetch.ai",
  },
  {
    id: "fetch-inu",
    symbol: "FINU",
    name: "Fetch Inu",
  },
  {
    id: "fetish-coin",
    symbol: "fetish",
    name: "Fetish Coin",
  },
  {
    id: "feudalz-goldz",
    symbol: "goldz",
    name: "Feudalz Goldz",
  },
  {
    id: "fewmans-gold",
    symbol: "fewgo",
    name: "Fewmans Gold",
  },
  {
    id: "few-understand",
    symbol: "few",
    name: "Few Understand",
  },
  {
    id: "feyorra",
    symbol: "fey",
    name: "Feyorra",
  },
  {
    id: "fia-protocol",
    symbol: "fia",
    name: "FIA Protocol",
  },
  {
    id: "fiat-dao-token",
    symbol: "fdt",
    name: "FIAT DAO Token",
  },
  {
    id: "fibos",
    symbol: "fo",
    name: "FIBOS",
  },
  {
    id: "fibo-token",
    symbol: "fibo",
    name: "FibSwap DEX",
  },
  {
    id: "fidenza-527",
    symbol: "fidenz",
    name: "Fidenza #527",
  },
  {
    id: "fidex-exchange",
    symbol: "fex",
    name: "FIDEX Exchange",
  },
  {
    id: "fidira",
    symbol: "fid",
    name: "Fidira",
  },
  {
    id: "fiestacoin",
    symbol: "fiesta",
    name: "FiestaCoin",
  },
  {
    id: "fiftyonefifty",
    symbol: "fifty",
    name: "FIFTYONEFIFTY",
  },
  {
    id: "filda",
    symbol: "filda",
    name: "Filda",
  },
  {
    id: "filecash",
    symbol: "fic",
    name: "Filecash",
  },
  {
    id: "filecoin",
    symbol: "fil",
    name: "Filecoin",
  },
  {
    id: "filecoin-standard-full-hashrate",
    symbol: "sfil",
    name: "Filecoin Standard Full Hashrate",
  },
  {
    id: "filecoin-standard-hashrate-token",
    symbol: "filst",
    name: "Filecoin Standard Hashrate Token",
  },
  {
    id: "filenet",
    symbol: "fn",
    name: "Filenet",
  },
  {
    id: "filestar",
    symbol: "star",
    name: "FileStar",
  },
  {
    id: "filipcoin",
    symbol: "fcp",
    name: "Filipcoin",
  },
  {
    id: "fimi-market-inc",
    symbol: "fimi",
    name: "Fimi Market Inc.",
  },
  {
    id: "finance-vote",
    symbol: "fvt",
    name: "Finance Vote",
  },
  {
    id: "financial-intelligence-group-token",
    symbol: "atbfig",
    name: "Financial Intelligence Group Token",
  },
  {
    id: "financial-investment-token",
    symbol: "fit",
    name: "FINANCIAL INVESTMENT TOKEN",
  },
  {
    id: "financio",
    symbol: "fin",
    name: "Financio",
  },
  {
    id: "findora",
    symbol: "fra",
    name: "Findora",
  },
  {
    id: "findshibby",
    symbol: "fshibby",
    name: "Findshibby",
  },
  {
    id: "finexbox-token",
    symbol: "fnb",
    name: "FinexboxToken",
  },
  {
    id: "fingerprints",
    symbol: "prints",
    name: "FingerprintsDAO",
  },
  {
    id: "finminity",
    symbol: "fmt",
    name: "Finminity",
  },
  {
    id: "fins-token",
    symbol: "fins",
    name: "Fins Token",
  },
  {
    id: "finswap",
    symbol: "fnsp",
    name: "Finswap",
  },
  {
    id: "fintab",
    symbol: "fntb",
    name: "FinTab",
  },
  {
    id: "fintropy",
    symbol: "fint",
    name: "Fintropy",
  },
  {
    id: "fintrux",
    symbol: "ftx",
    name: "FintruX",
  },
  {
    id: "finxflo",
    symbol: "fxf",
    name: "FINXFLO",
  },
  {
    id: "fio-protocol",
    symbol: "fio",
    name: "FIO Protocol",
  },
  {
    id: "firdaos",
    symbol: "fdo",
    name: "Firdaos",
  },
  {
    id: "fireants",
    symbol: "ants",
    name: "FireAnts",
  },
  {
    id: "fireball-2",
    symbol: "fire",
    name: "FireBall",
  },
  {
    id: "firebird-finance",
    symbol: "hope",
    name: "Firebird.Finance",
  },
  {
    id: "firebot",
    symbol: "fbx",
    name: "FireBot",
  },
  {
    id: "fireflame-inu",
    symbol: "fire",
    name: "FireFlame Inu",
  },
  {
    id: "fire-lotto",
    symbol: "flot",
    name: "Fire Lotto",
  },
  {
    id: "fire-protocol",
    symbol: "fire",
    name: "Fire Protocol",
  },
  {
    id: "firerocket",
    symbol: "firerocket",
    name: "FireRocket",
  },
  {
    id: "firestarter",
    symbol: "flame",
    name: "FireStarter",
  },
  {
    id: "fire-token-2",
    symbol: "fire",
    name: "Fire Token",
  },
  {
    id: "firezard",
    symbol: "zard",
    name: "FireZard",
  },
  {
    id: "firmachain",
    symbol: "fct",
    name: "Firmachain",
  },
  {
    id: "firstdoge",
    symbol: "firstdoge",
    name: "FirstDoge",
  },
  {
    id: "first-doge-finance",
    symbol: "fdoge",
    name: "First Doge Finance",
  },
  {
    id: "first-eleven",
    symbol: "f11",
    name: "First Eleven",
  },
  {
    id: "firsthare",
    symbol: "firsthare",
    name: "FirstHare",
  },
  {
    id: "first-inu",
    symbol: "finu",
    name: "First Inu",
  },
  {
    id: "firulais",
    symbol: "firu",
    name: "Firulais",
  },
  {
    id: "firulais-wallet-token",
    symbol: "FIWT",
    name: "Firulais Wallet Token",
  },
  {
    id: "fisco",
    symbol: "fscc",
    name: "FISCO Coin",
  },
  {
    id: "fiscus-fyi",
    symbol: "ffyi",
    name: "Fiscus FYI",
  },
  {
    id: "fish-crypto",
    symbol: "fico",
    name: "Fish Crypto",
  },
  {
    id: "fishervspirate",
    symbol: "fvp",
    name: "FisherVsPirate",
  },
  {
    id: "fishing-town",
    symbol: "fhtn",
    name: "Fishing Town",
  },
  {
    id: "fishingtowngiltoken",
    symbol: "gil",
    name: "FishingTownGilToken",
  },
  {
    id: "fishy-tank-token",
    symbol: "fte",
    name: "Fishy Tank Token",
  },
  {
    id: "fit-beat",
    symbol: "ftb",
    name: "Fit&Beat",
  },
  {
    id: "fitmin",
    symbol: "ftm",
    name: "Fitmin",
  },
  {
    id: "fit-token",
    symbol: "fit",
    name: "FIT Token",
  },
  {
    id: "five7",
    symbol: "f7",
    name: "Five7",
  },
  {
    id: "five-balance",
    symbol: "fbn",
    name: "Fivebalance Coin",
  },
  {
    id: "five-star-coin",
    symbol: "fsc",
    name: "Five Star Coin",
  },
  {
    id: "fixed-trade-coin",
    symbol: "fxtc",
    name: "Fixed Trade Coin",
  },
  {
    id: "fk-coin",
    symbol: "fk",
    name: "FK Coin",
  },
  {
    id: "flag-network",
    symbol: "flag",
    name: "Flag Network",
  },
  {
    id: "flama",
    symbol: "fma",
    name: "Flama",
  },
  {
    id: "flame",
    symbol: "flame",
    name: "FLAME",
  },
  {
    id: "flamedefi",
    symbol: "fdao",
    name: "FlameDefi",
  },
  {
    id: "flamengo-fan-token",
    symbol: "mengo",
    name: "Flamengo Fan Token",
  },
  {
    id: "flamingo-finance",
    symbol: "flm",
    name: "Flamingo Finance",
  },
  {
    id: "flappydoge",
    symbol: "FLPD",
    name: "FlappyDoge",
  },
  {
    id: "flappy-shiba-inu",
    symbol: "fsinu",
    name: "Flappy Shiba Inu",
  },
  {
    id: "flare-finance",
    symbol: "exfi",
    name: "Flare Finance",
  },
  {
    id: "flare-token",
    symbol: "1flr",
    name: "Flare Token",
  },
  {
    id: "flash",
    symbol: "flash",
    name: "Flash",
  },
  {
    id: "flash-token",
    symbol: "flash",
    name: "Flash Loans",
  },
  {
    id: "flash-token-2",
    symbol: "FLASH",
    name: "Flash Token",
  },
  {
    id: "flashx-ultra",
    symbol: "fsxu",
    name: "FlashX Ultra",
  },
  {
    id: "flat-earth-token",
    symbol: "flat",
    name: "Flat Earth Token",
  },
  {
    id: "flavors-bsc",
    symbol: "flvr",
    name: "Flavors BSC",
  },
  {
    id: "flesh-token",
    symbol: "flesh",
    name: "Flesh Token",
  },
  {
    id: "fleta",
    symbol: "fleta",
    name: "FLETA",
  },
  {
    id: "flex-coin",
    symbol: "flex",
    name: "FLEX Coin",
  },
  {
    id: "flex-finance",
    symbol: "flex",
    name: "Flex Finance",
  },
  {
    id: "flexq",
    symbol: "flq",
    name: "FlexQ",
  },
  {
    id: "flex-usd",
    symbol: "flexusd",
    name: "flexUSD",
  },
  {
    id: "flinch",
    symbol: "fln",
    name: "Flinch",
  },
  {
    id: "flipper-token",
    symbol: "flip",
    name: "Flipper Token",
  },
  {
    id: "flipstar",
    symbol: "flip",
    name: "FlipStar",
  },
  {
    id: "flits",
    symbol: "fls",
    name: "Flits",
  },
  {
    id: "flixxo",
    symbol: "flixx",
    name: "Flixxo",
  },
  {
    id: "float-protocol",
    symbol: "bank",
    name: "Float Protocol",
  },
  {
    id: "float-protocol-float",
    symbol: "float",
    name: "Float Protocol: Float",
  },
  {
    id: "flock",
    symbol: "flock",
    name: "Flock",
  },
  {
    id: "flokachu-token",
    symbol: "flokachu",
    name: "Flokachu Token",
  },
  {
    id: "floki-adventure",
    symbol: "fiat",
    name: "Floki Adventure",
  },
  {
    id: "flokibonk",
    symbol: "flobo",
    name: "FlokiBonk",
  },
  {
    id: "flokibro",
    symbol: "fbro",
    name: "FlokiBro",
  },
  {
    id: "flokicoke",
    symbol: "FLOKICOKE",
    name: "FlokiCoke",
  },
  {
    id: "flokidoge",
    symbol: "$floge",
    name: "Flokidoge",
  },
  {
    id: "floki-elon",
    symbol: "flokielon",
    name: "Floki Elon",
  },
  {
    id: "flokifrunkpuppy",
    symbol: "FLOKIFRUNKPUPPY",
    name: "FlokiFrunkPuppy",
  },
  {
    id: "floki-gold",
    symbol: "flokigold",
    name: "Floki Gold",
  },
  {
    id: "flokigravity",
    symbol: "flokig",
    name: "FlokiGravity",
  },
  {
    id: "floki-inu",
    symbol: "floki",
    name: "Floki Inu",
  },
  {
    id: "flokikong",
    symbol: "kong",
    name: "FlokiKong",
  },
  {
    id: "flokiloki",
    symbol: "flokiloki",
    name: "FlokiLoki",
  },
  {
    id: "flokimars",
    symbol: "flom",
    name: "Flokimars",
  },
  {
    id: "floki-meta",
    symbol: "mfloki",
    name: "Floki Meta",
  },
  {
    id: "floki-millions",
    symbol: "millions",
    name: "Floki Millions",
  },
  {
    id: "flokimon",
    symbol: "fmon",
    name: "FlokiMON",
  },
  {
    id: "floki-monk",
    symbol: "flokimonk",
    name: "Floki Monk",
  },
  {
    id: "flokimooni",
    symbol: "flokim",
    name: "Flokimooni",
  },
  {
    id: "floki-musk",
    symbol: "floki",
    name: "Floki Musk",
  },
  {
    id: "flokinomics",
    symbol: "Flokin",
    name: "Flokinomics",
  },
  {
    id: "floki-one",
    symbol: "floki",
    name: "Floki One",
  },
  {
    id: "flokipad",
    symbol: "flokipad",
    name: "FlokiPad",
  },
  {
    id: "flokipetworld",
    symbol: "FPET",
    name: "Flokipetworld",
  },
  {
    id: "floki-pup",
    symbol: "flokipup",
    name: "Floki Pup",
  },
  {
    id: "flokirai",
    symbol: "FLOKIRAI",
    name: "Flokirai",
  },
  {
    id: "flokirocket",
    symbol: "rkf",
    name: "FlokiRocket",
  },
  {
    id: "floki-rocket",
    symbol: "rloki",
    name: "Floki Rocket",
  },
  {
    id: "floki-shiba",
    symbol: "fshib",
    name: "Floki Shiba",
  },
  {
    id: "floki-shiba-inu",
    symbol: "flokishib",
    name: "Floki Shiba Inu",
  },
  {
    id: "flokishu",
    symbol: "flishu",
    name: "FloKishu",
  },
  {
    id: "flokiswap",
    symbol: "flokis",
    name: "FlokiSwap",
  },
  {
    id: "floki-wife",
    symbol: "flofe",
    name: "Floki Wife",
  },
  {
    id: "flokizap",
    symbol: "flokiz",
    name: "FlokiZap",
  },
  {
    id: "floof",
    symbol: "floof",
    name: "FLOOF",
  },
  {
    id: "florida-man",
    symbol: "fman",
    name: "Florida Man",
  },
  {
    id: "florin",
    symbol: "xfl",
    name: "Florin",
  },
  {
    id: "floshin",
    symbol: "floshin",
    name: "Floshin",
  },
  {
    id: "flourish-coin",
    symbol: "flrs",
    name: "Flourish Coin",
  },
  {
    id: "flourishing-ai-token",
    symbol: "ai",
    name: "Flourishing AI",
  },
  {
    id: "flow",
    symbol: "flow",
    name: "Flow",
  },
  {
    id: "flowchaincoin",
    symbol: "flc",
    name: "Flowchain",
  },
  {
    id: "flowcom",
    symbol: "fig",
    name: "FlowCom",
  },
  {
    id: "flower-solana",
    symbol: "FLOW",
    name: "Flower Solana",
  },
  {
    id: "fluffy-coin",
    symbol: "fluf",
    name: "Fluffy Coin",
  },
  {
    id: "fluffy-inu",
    symbol: "fluffy",
    name: "Fluffy Inu",
  },
  {
    id: "fluidfi",
    symbol: "fluid",
    name: "FluidFi",
  },
  {
    id: "flurmoon",
    symbol: "flur",
    name: "FlurMoon",
  },
  {
    id: "flurry",
    symbol: "flurry",
    name: "Flurry Finance",
  },
  {
    id: "fluttercoin",
    symbol: "flt",
    name: "Fluttercoin",
  },
  {
    id: "flux",
    symbol: "flux",
    name: "Datamine FLUX",
  },
  {
    id: "fluxchain",
    symbol: "flx",
    name: "FLUXchain",
  },
  {
    id: "flux-protocol",
    symbol: "flux",
    name: "Flux Protocol",
  },
  {
    id: "flux-token",
    symbol: "flx",
    name: "Flux Token",
  },
  {
    id: "flynnjamm",
    symbol: "jamm",
    name: "FlynnJamm",
  },
  {
    id: "flypaper",
    symbol: "sticky",
    name: "FlyPaper",
  },
  {
    id: "flypme",
    symbol: "fyp",
    name: "FlypMe",
  },
  {
    id: "fme",
    symbol: "fme",
    name: "FME",
  },
  {
    id: "fm-gallery",
    symbol: "fmg",
    name: "FM Gallery",
  },
  {
    id: "fnb-protocol",
    symbol: "fnb",
    name: "FNB Protocol",
  },
  {
    id: "fndz-token",
    symbol: "fndz",
    name: "FNDZ Token",
  },
  {
    id: "fnkcom",
    symbol: "fnk",
    name: "Fnk.com",
  },
  {
    id: "foam-protocol",
    symbol: "foam",
    name: "FOAM",
  },
  {
    id: "fodl-finance",
    symbol: "fodl",
    name: "Fodl Finance",
  },
  {
    id: "fohocoin",
    symbol: "foho",
    name: "FohoCoin",
  },
  {
    id: "foincoin",
    symbol: "foin",
    name: "Foin",
  },
  {
    id: "folder-protocol",
    symbol: "fol",
    name: "Folder Protocol",
  },
  {
    id: "follow-friday",
    symbol: "ff",
    name: "Follow Friday",
  },
  {
    id: "follow-token",
    symbol: "folo",
    name: "Follow Token",
  },
  {
    id: "fomo-baby",
    symbol: "fomobaby",
    name: "FOMO BABY",
  },
  {
    id: "fomo-chronicles-manga",
    symbol: "otaku",
    name: "FOMO Chronicles Manga",
  },
  {
    id: "fomoeth",
    symbol: "fomoeth",
    name: "FomoETH",
  },
  {
    id: "fomo-labs",
    symbol: "fomo",
    name: "Fomo Labs",
  },
  {
    id: "fompound",
    symbol: "fomp",
    name: "Fompound",
  },
  {
    id: "font",
    symbol: "font",
    name: "Font",
  },
  {
    id: "foobee",
    symbol: "fbe",
    name: "Foobee",
  },
  {
    id: "football-coin",
    symbol: "xfc",
    name: "Football Coin",
  },
  {
    id: "football-fantasy-pro",
    symbol: "fanta",
    name: "Football Fantasy Pro",
  },
  {
    id: "footballgo",
    symbol: "fgsport",
    name: "FootBallGo",
  },
  {
    id: "footballstars",
    symbol: "fts",
    name: "FootballStars",
  },
  {
    id: "footie-plus",
    symbol: "footie",
    name: "Footie Plus",
  },
  {
    id: "forcecowboy",
    symbol: "fcb",
    name: "ForceCowBoy",
  },
  {
    id: "force-dao",
    symbol: "force",
    name: "Force DAO",
  },
  {
    id: "force-for-fast",
    symbol: "fff",
    name: "Force For Fast",
  },
  {
    id: "force-protocol",
    symbol: "for",
    name: "ForTube",
  },
  {
    id: "forefront",
    symbol: "ff",
    name: "Forefront",
  },
  {
    id: "foresight",
    symbol: "fors",
    name: "Foresight",
  },
  {
    id: "forest-knight",
    symbol: "knight",
    name: "Forest Knight",
  },
  {
    id: "foreverblast",
    symbol: "feb",
    name: "ForeverBlast",
  },
  {
    id: "foreverbnb",
    symbol: "fbnb",
    name: "ForeverBNB",
  },
  {
    id: "foreverfomo",
    symbol: "ForeverFOMO",
    name: "ForeverFOMO",
  },
  {
    id: "forever-pump",
    symbol: "ForeverPump",
    name: "Forever Pump",
  },
  {
    id: "foreverup",
    symbol: "foreverup",
    name: "ForeverUp",
  },
  {
    id: "forexcoin",
    symbol: "forex",
    name: "FOREXCOIN",
  },
  {
    id: "forint",
    symbol: "forint",
    name: "Forint",
  },
  {
    id: "for-loot-and-glory",
    symbol: "FLAG",
    name: "For Loot And Glory",
  },
  {
    id: "formation-fi",
    symbol: "form",
    name: "Formation FI",
  },
  {
    id: "formula",
    symbol: "fml",
    name: "FormulA",
  },
  {
    id: "forrest-pump",
    symbol: "fpump",
    name: "Forrest Pump",
  },
  {
    id: "forthbox",
    symbol: "fbx",
    name: "ForthBox",
  },
  {
    id: "fortknoxter",
    symbol: "fkx",
    name: "FortKnoxster",
  },
  {
    id: "fortress",
    symbol: "fts",
    name: "Fortress Loans",
  },
  {
    id: "fortressdao",
    symbol: "fort",
    name: "Fortress",
  },
  {
    id: "fortuna",
    symbol: "fota",
    name: "Fortuna",
  },
  {
    id: "fortuna-sittard-fan-token",
    symbol: "FOR",
    name: "Fortuna Sittard Fan Token",
  },
  {
    id: "fortune",
    symbol: "fortune",
    name: "Fortune",
  },
  {
    id: "forty-seven-bank",
    symbol: "fsbt",
    name: "FSBT API",
  },
  {
    id: "forward",
    symbol: "forward",
    name: "Forward",
  },
  {
    id: "fossil",
    symbol: "fossil",
    name: "Fossil",
  },
  {
    id: "foundrydao-logistics",
    symbol: "fry",
    name: "FoundryDAO Logistics",
  },
  {
    id: "fountain",
    symbol: "ftn",
    name: "Fountain",
  },
  {
    id: "fox",
    symbol: "fox",
    name: "Fox",
  },
  {
    id: "foxboy",
    symbol: "fbb",
    name: "Foxboy",
  },
  {
    id: "foxdcoin",
    symbol: "foxd",
    name: "Foxdcoin",
  },
  {
    id: "fox-finance",
    symbol: "fox",
    name: "Fox Finance",
  },
  {
    id: "foxgirl",
    symbol: "foxgirl",
    name: "FoxGirl",
  },
  {
    id: "fox-trading-token",
    symbol: "foxt",
    name: "Fox Trading Token",
  },
  {
    id: "foxy-equilibrium",
    symbol: "foxy",
    name: "Foxy Equilibrium",
  },
  {
    id: "fractal",
    symbol: "fcl",
    name: "Fractal",
  },
  {
    id: "fraction",
    symbol: "fraction",
    name: "Fraction",
  },
  {
    id: "fractionalized-smb-2367",
    symbol: "daojones",
    name: "Fractionalized SMB-2367",
  },
  {
    id: "fractionalized-wave-999",
    symbol: "wav",
    name: "Fractionalized WAVE-999",
  },
  {
    id: "fragments-of-arker",
    symbol: "foa",
    name: "Fragments of Arker",
  },
  {
    id: "fraktionalized-thug-2856",
    symbol: "thug",
    name: "Fraktionalized THUG 2856",
  },
  {
    id: "frakt-token",
    symbol: "frkt",
    name: "FRAKT Token",
  },
  {
    id: "franc",
    symbol: "franc",
    name: "FRANC",
  },
  {
    id: "france-rev-finance",
    symbol: "FRF",
    name: "France REV Finance",
  },
  {
    id: "frankenstein-finance",
    symbol: "frank",
    name: "Frankenstein Finance",
  },
  {
    id: "franklin",
    symbol: "fly",
    name: "Franklin",
  },
  {
    id: "frat",
    symbol: "frat",
    name: "Frat",
  },
  {
    id: "frax",
    symbol: "frax",
    name: "Frax",
  },
  {
    id: "frax-share",
    symbol: "fxs",
    name: "Frax Share",
  },
  {
    id: "frax-share-wormhole",
    symbol: "fxs",
    name: "Frax Share (Wormhole)",
  },
  {
    id: "frax-wormhole",
    symbol: "frax",
    name: "Frax (Wormhole)",
  },
  {
    id: "fredenergy",
    symbol: "fred",
    name: "FRED Energy",
  },
  {
    id: "freecash",
    symbol: "fch",
    name: "Freecash",
  },
  {
    id: "freedom",
    symbol: "fdm",
    name: "Freedom",
  },
  {
    id: "freedom-coin",
    symbol: "free",
    name: "FREEdom coin",
  },
  {
    id: "freedom-reserve",
    symbol: "fr",
    name: "Freedom Reserve",
  },
  {
    id: "freela",
    symbol: "frel",
    name: "Freela",
  },
  {
    id: "freeliquid",
    symbol: "fl",
    name: "Freeliquid",
  },
  {
    id: "freemoon",
    symbol: "freemoon",
    name: "Freemoon",
  },
  {
    id: "freeriver",
    symbol: "free",
    name: "FreeRiver",
  },
  {
    id: "freerossdao",
    symbol: "free",
    name: "FreeRossDAO",
  },
  {
    id: "freeway-token",
    symbol: "fwt",
    name: "Freeway Token",
  },
  {
    id: "freicoin",
    symbol: "frc",
    name: "Freicoin",
  },
  {
    id: "freight-trust-network",
    symbol: "edi",
    name: "Freight Trust Network",
  },
  {
    id: "fren",
    symbol: "fren",
    name: "FREN",
  },
  {
    id: "french-connection-finance",
    symbol: "fcf",
    name: "French Connection Finance",
  },
  {
    id: "french-digital-reserve",
    symbol: "fdr",
    name: "French Digital Reserve",
  },
  {
    id: "french-ico-coin",
    symbol: "fico",
    name: "French ICO Coin",
  },
  {
    id: "frenchie",
    symbol: "fren",
    name: "Frenchie",
  },
  {
    id: "frencoin",
    symbol: "fren",
    name: "FrenCoin",
  },
  {
    id: "frens",
    symbol: "frens",
    name: "Frens",
  },
  {
    id: "frenzy",
    symbol: "fzy",
    name: "Frenzy",
  },
  {
    id: "freyala",
    symbol: "xya",
    name: "Freyala",
  },
  {
    id: "friends-with-benefits-pro",
    symbol: "fwb",
    name: "Friends With Benefits Pro",
  },
  {
    id: "friendz",
    symbol: "fdz",
    name: "Friendz",
  },
  {
    id: "frieza-inu",
    symbol: "frinu",
    name: "Frieza Inu",
  },
  {
    id: "fringe-finance",
    symbol: "frin",
    name: "Fringe Finance",
  },
  {
    id: "frmx-token",
    symbol: "frmx",
    name: "FRMx Token",
  },
  {
    id: "frog",
    symbol: "frog",
    name: "Frog",
  },
  {
    id: "frogdao-dime",
    symbol: "fdd",
    name: "FrogDAO Dime",
  },
  {
    id: "froge-finance",
    symbol: "froge",
    name: "Froge Finance",
  },
  {
    id: "froggies-token",
    symbol: "FROGGIES",
    name: "Froggies",
  },
  {
    id: "frog-nation-farm",
    symbol: "frog",
    name: "Frog Nation Farm",
  },
  {
    id: "frogswap",
    symbol: "frog",
    name: "FrogSwap",
  },
  {
    id: "frogzilla",
    symbol: "FZL",
    name: "FrogZilla",
  },
  {
    id: "frontier-token",
    symbol: "front",
    name: "Frontier",
  },
  {
    id: "frontier-token-wormhole",
    symbol: "front",
    name: "Frontier Token (Wormhole)",
  },
  {
    id: "front-row",
    symbol: "frr",
    name: "Frontrow",
  },
  {
    id: "frost",
    symbol: "frost",
    name: "Frost",
  },
  {
    id: "frosted-cake",
    symbol: "FROSTEDCAKE",
    name: "Frosted Cake",
  },
  {
    id: "frosty-floki",
    symbol: "FrostyFloki",
    name: "Frosty Floki",
  },
  {
    id: "frosty-floki-v2",
    symbol: "frostyfloki",
    name: "Frosty Floki V2",
  },
  {
    id: "froyo-games",
    symbol: "froyo",
    name: "Froyo Games",
  },
  {
    id: "frozencake",
    symbol: "frozen",
    name: "FrozenCake",
  },
  {
    id: "fruit",
    symbol: "fruit",
    name: "Fruit",
  },
  {
    id: "fruit-fighters",
    symbol: "foofight",
    name: "Fruit Fighters",
  },
  {
    id: "fruits",
    symbol: "frts",
    name: "Fruits",
  },
  {
    id: "fsd-coin",
    symbol: "fsdcoin",
    name: "FSD Coin",
  },
  {
    id: "fsn",
    symbol: "fsn",
    name: "FUSION",
  },
  {
    id: "fsw-token",
    symbol: "fsw",
    name: "Falconswap",
  },
  {
    id: "ftm-guru",
    symbol: "elite",
    name: "ftm.guru",
  },
  {
    id: "ftmlaunch",
    symbol: "ftml",
    name: "FTMlaunch",
  },
  {
    id: "ftmpay",
    symbol: "ftmp",
    name: "FTMPay",
  },
  {
    id: "ftm-pup-token",
    symbol: "fpup",
    name: "FTM PUP Token",
  },
  {
    id: "ftribe-fighters",
    symbol: "f2c",
    name: "Ftribe Fighters",
  },
  {
    id: "ftx-token",
    symbol: "ftt",
    name: "FTX Token",
  },
  {
    id: "ftx-wormhole",
    symbol: "ftt",
    name: "FTX (Wormhole)",
  },
  {
    id: "fudcoin-official",
    symbol: "fud",
    name: "FUDcoin Official",
  },
  {
    id: "fudfinance",
    symbol: "fud",
    name: "FUD.finance",
  },
  {
    id: "fuel-token",
    symbol: "fuel",
    name: "Jetfuel Finance",
  },
  {
    id: "fufu",
    symbol: "fufu",
    name: "Fufu",
  },
  {
    id: "fujicoin",
    symbol: "fjc",
    name: "Fujicoin",
  },
  {
    id: "fullmetal-inu",
    symbol: "fma",
    name: "FullMetal Inu",
  },
  {
    id: "fuma-finance",
    symbol: "fuma",
    name: "Fuma Finance",
  },
  {
    id: "fumoney",
    symbol: "fum",
    name: "FUMoney",
  },
  {
    id: "fundamenta",
    symbol: "fmta",
    name: "Fundamenta",
  },
  {
    id: "funder-one",
    symbol: "fundx",
    name: "Funder One",
  },
  {
    id: "fundin",
    symbol: "fdn",
    name: "FUNDIN",
  },
  {
    id: "fund-of-yours",
    symbol: "foy",
    name: "Fund Of Yours",
  },
  {
    id: "fundum",
    symbol: "fnd",
    name: "Fundum",
  },
  {
    id: "funfair",
    symbol: "fun",
    name: "FUNToken",
  },
  {
    id: "fungie-dao",
    symbol: "fng",
    name: "Fungie DAO",
  },
  {
    id: "funjo",
    symbol: "funjo",
    name: "Funjo",
  },
  {
    id: "furucombo",
    symbol: "combo",
    name: "Furucombo",
  },
  {
    id: "furukuru",
    symbol: "fuku",
    name: "Furukuru",
  },
  {
    id: "fuse-doge",
    symbol: "fDoge",
    name: "fuse doge",
  },
  {
    id: "fusefi",
    symbol: "volt",
    name: "FuseFi",
  },
  {
    id: "fuse-network-token",
    symbol: "fuse",
    name: "Fuse",
  },
  {
    id: "fusible",
    symbol: "fusii",
    name: "Fusible",
  },
  {
    id: "fusion-heroes",
    symbol: "fsh",
    name: "Fusion Heroes",
  },
  {
    id: "futura-finance",
    symbol: "fft",
    name: "Futura Finance",
  },
  {
    id: "futurax",
    symbol: "ftxt",
    name: "FUTURAX",
  },
  {
    id: "future",
    symbol: "ftr",
    name: "Future",
  },
  {
    id: "future1coin",
    symbol: "f1c",
    name: "Future1Coin",
  },
  {
    id: "future-of-finance-fund",
    symbol: "fff",
    name: "Future Of Finance Fund",
  },
  {
    id: "future-real-estate-token",
    symbol: "fret",
    name: "Future Real Estate Token",
  },
  {
    id: "futurescash",
    symbol: "fct",
    name: "FuturesCash",
  },
  {
    id: "futurescoin",
    symbol: "fc",
    name: "FuturesCoin",
  },
  {
    id: "future-star",
    symbol: "fstar",
    name: "Future Star",
  },
  {
    id: "futureswap",
    symbol: "fst",
    name: "Futureswap",
  },
  {
    id: "futurocoin",
    symbol: "fto",
    name: "FuturoCoin",
  },
  {
    id: "fuze-token",
    symbol: "fuze",
    name: "FUZE Token",
  },
  {
    id: "fuzex",
    symbol: "fxt",
    name: "FuzeX",
  },
  {
    id: "fuzzballs",
    symbol: "fuzz",
    name: "FuzzBalls",
  },
  {
    id: "fuzz-finance",
    symbol: "fuzz",
    name: "Fuzz Finance",
  },
  {
    id: "fuzzy-inu",
    symbol: "fuzzy",
    name: "Fuzzy Inu",
  },
  {
    id: "fwar-finance",
    symbol: "fwt",
    name: "Fwar Finance",
  },
  {
    id: "fx-coin",
    symbol: "fx",
    name: "Function X",
  },
  {
    id: "fxpay",
    symbol: "fxp",
    name: "FXPay",
  },
  {
    id: "fxt-token",
    symbol: "fxt",
    name: "FXT Token",
  },
  {
    id: "fxwallet",
    symbol: "fxl",
    name: "FXWallet",
  },
  {
    id: "fydcoin",
    symbol: "fyd",
    name: "FYDcoin",
  },
  {
    id: "fyooz",
    symbol: "fyz",
    name: "Fyooz",
  },
  {
    id: "g2-crypto-gaming-lottery",
    symbol: "g2",
    name: "G2 Crypto Gaming & Lottery",
  },
  {
    id: "g999",
    symbol: "g999",
    name: "G999",
  },
  {
    id: "gabecoin",
    symbol: "gabecoin",
    name: "Gabecoin",
  },
  {
    id: "gaberise",
    symbol: "gabr",
    name: "GabeRise",
  },
  {
    id: "gacube",
    symbol: "gac",
    name: "GACUBE",
  },
  {
    id: "gaia-dao",
    symbol: "gaia",
    name: "Gaia DAO",
  },
  {
    id: "gaia-everworld",
    symbol: "gaia",
    name: "Gaia Everworld",
  },
  {
    id: "gaias-tears",
    symbol: "dfktears",
    name: "Gaia's Tears",
  },
  {
    id: "gain",
    symbol: "gain",
    name: "GainPool",
  },
  {
    id: "gain-protocol",
    symbol: "gain",
    name: "Gain Protocol",
  },
  {
    id: "gains",
    symbol: "gains",
    name: "Gains",
  },
  {
    id: "gains-farm",
    symbol: "gfarm2",
    name: "Gains Farm",
  },
  {
    id: "gains-network",
    symbol: "gns",
    name: "Gains Network",
  },
  {
    id: "gaj",
    symbol: "gaj",
    name: "Gaj Finance",
  },
  {
    id: "gala",
    symbol: "gala",
    name: "Gala",
  },
  {
    id: "galactic-arena-the-nftverse",
    symbol: "gan",
    name: "Galactic Arena: The NFTverse",
  },
  {
    id: "galactic-blue-index",
    symbol: "gbi",
    name: "Galactic Blue Index",
  },
  {
    id: "galactrum",
    symbol: "ore",
    name: "Galactrum",
  },
  {
    id: "galatasaray-fan-token",
    symbol: "gal",
    name: "Galatasaray Fan Token",
  },
  {
    id: "gala-wormhole",
    symbol: "gala",
    name: "Gala (Wormhole)",
  },
  {
    id: "galaxer",
    symbol: "glx",
    name: "Galaxer",
  },
  {
    id: "galaxium",
    symbol: "glxm",
    name: "Galaxium",
  },
  {
    id: "galaxy-adventure",
    symbol: "gla",
    name: "Galaxy Adventure",
  },
  {
    id: "galaxy-blitz",
    symbol: "mit",
    name: "Galaxy Blitz",
  },
  {
    id: "galaxybusd",
    symbol: "galaxy",
    name: "GalaxyBUSD",
  },
  {
    id: "galaxycoin",
    symbol: "Galaxy",
    name: "GalaxyCoin",
  },
  {
    id: "galaxy-coin",
    symbol: "glxc",
    name: "Galaxy Coin",
  },
  {
    id: "galaxy-fight-club",
    symbol: "gcoin",
    name: "Galaxy Fight Club",
  },
  {
    id: "galaxygoggle",
    symbol: "gg",
    name: "GalaxyGoggle",
  },
  {
    id: "galaxy-heroes-coin",
    symbol: "ghc",
    name: "Galaxy Heroes Coin",
  },
  {
    id: "galaxy-network",
    symbol: "gnc",
    name: "Galaxy Network",
  },
  {
    id: "galaxy-surge",
    symbol: "GALS",
    name: "Galaxy Surge",
  },
  {
    id: "galaxy-war",
    symbol: "gwt",
    name: "Galaxy War",
  },
  {
    id: "gallant",
    symbol: "gal",
    name: "Gallant",
  },
  {
    id: "gamb",
    symbol: "gmb",
    name: "GAMB",
  },
  {
    id: "gambit",
    symbol: "gmt",
    name: "Gambit",
  },
  {
    id: "gambler-shiba",
    symbol: "gshiba",
    name: "Gambler Shiba",
  },
  {
    id: "game",
    symbol: "gtc",
    name: "Game",
  },
  {
    id: "game1network",
    symbol: "game1",
    name: "Game1Network",
  },
  {
    id: "game-ace-token",
    symbol: "gat",
    name: "Game Ace Token",
  },
  {
    id: "gamebetcoin",
    symbol: "gbt",
    name: "GameBet",
  },
  {
    id: "gamebox",
    symbol: "gamebox",
    name: "Gamebox",
  },
  {
    id: "game-city",
    symbol: "gmci",
    name: "Game City",
  },
  {
    id: "game-coin",
    symbol: "gmex",
    name: "Game Coin",
  },
  {
    id: "gamecredits",
    symbol: "game",
    name: "GameCredits",
  },
  {
    id: "gamecrypt",
    symbol: "gamecrypt",
    name: "GameCrypt",
  },
  {
    id: "gamedao",
    symbol: "dao",
    name: "GameDAO",
  },
  {
    id: "gamee",
    symbol: "gmee",
    name: "GAMEE",
  },
  {
    id: "game-fantasy-token",
    symbol: "gft",
    name: "Game Fantasy Token",
  },
  {
    id: "game-fanz",
    symbol: "gfn",
    name: "Game Fanz",
  },
  {
    id: "gamefi",
    symbol: "gafi",
    name: "GameFi",
  },
  {
    id: "gamefi-collection",
    symbol: "gfc",
    name: "GameFi Collection",
  },
  {
    id: "gamefi-token",
    symbol: "gfi",
    name: "GameFi Token",
  },
  {
    id: "gameflip",
    symbol: "flp",
    name: "Gameflip",
  },
  {
    id: "game-frag",
    symbol: "frag",
    name: "Game-Frag",
  },
  {
    id: "gamenft",
    symbol: "gnft",
    name: "GameNFT",
  },
  {
    id: "gameology",
    symbol: "gmy",
    name: "Gameology",
  },
  {
    id: "gameologyv2",
    symbol: "gmyx",
    name: "Gameologyv2",
  },
  {
    id: "gameonetoken",
    symbol: "GameOne",
    name: "GameoneToken",
  },
  {
    id: "gamer",
    symbol: "gmr",
    name: "GAMER",
  },
  {
    id: "gamercoin",
    symbol: "ghx",
    name: "GamerCoin",
  },
  {
    id: "gamerse",
    symbol: "lfg",
    name: "Gamerse",
  },
  {
    id: "gamers-yield",
    symbol: "gy",
    name: "Gamers Yield",
  },
  {
    id: "gamesafe",
    symbol: "gamesafe",
    name: "Gamesafe",
  },
  {
    id: "gamespad",
    symbol: "gmpd",
    name: "GamesPad",
  },
  {
    id: "gamesta",
    symbol: "gsg",
    name: "Gamesta",
  },
  {
    id: "gamestar-exchange",
    symbol: "gms",
    name: "GameStar",
  },
  {
    id: "game-stars",
    symbol: "gst",
    name: "Game Stars",
  },
  {
    id: "gamestarter",
    symbol: "game",
    name: "Gamestarter",
  },
  {
    id: "gamestation",
    symbol: "gamer",
    name: "GameStation",
  },
  {
    id: "gamestop-finance",
    symbol: "gme",
    name: "GameStop Finance",
  },
  {
    id: "gameswap-org",
    symbol: "gswap",
    name: "Gameswap",
  },
  {
    id: "gameverse",
    symbol: "gmv",
    name: "GameVerse",
  },
  {
    id: "gamex",
    symbol: "gmx",
    name: "GameX",
  },
  {
    id: "game-x-change-potion",
    symbol: "gxp",
    name: "Game X Change Potion",
  },
  {
    id: "gamezone",
    symbol: "gzone",
    name: "GameZone",
  },
  {
    id: "gamifi",
    symbol: "gmi",
    name: "GamiFi",
  },
  {
    id: "gaming-doge",
    symbol: "gamingdoge",
    name: "Gaming Doge",
  },
  {
    id: "gamingshiba",
    symbol: "gamingshiba",
    name: "GamingShiba",
  },
  {
    id: "gamium",
    symbol: "gmm",
    name: "Gamium",
  },
  {
    id: "gami-world",
    symbol: "gami",
    name: "GAMI World",
  },
  {
    id: "gamma",
    symbol: "gamma",
    name: "Gamma",
  },
  {
    id: "gamma-strategies",
    symbol: "gamma",
    name: "Gamma Strategies",
  },
  {
    id: "gamma-token",
    symbol: "gam",
    name: "Gamma Token",
  },
  {
    id: "gamyfi-token",
    symbol: "gfx",
    name: "GamyFi Token",
  },
  {
    id: "ganesha-token",
    symbol: "gnsh",
    name: "Ganesha Token",
  },
  {
    id: "gangstabet",
    symbol: "gbet",
    name: "GangstaBet",
  },
  {
    id: "gan-punks",
    symbol: "gpunks20",
    name: "Gan Punks",
  },
  {
    id: "ganymede",
    symbol: "gany",
    name: "Ganymede",
  },
  {
    id: "gapcoin",
    symbol: "gap",
    name: "Gapcoin",
  },
  {
    id: "gard-governance-token",
    symbol: "ggt",
    name: "GARD Governance Token",
  },
  {
    id: "garfield-token",
    symbol: "garfield",
    name: "Garfield Token",
  },
  {
    id: "gari-network",
    symbol: "gari",
    name: "Gari Network",
  },
  {
    id: "garlic",
    symbol: "GRLC",
    name: "Garlic",
  },
  {
    id: "garlicoin",
    symbol: "grlc",
    name: "Garlicoin",
  },
  {
    id: "gas",
    symbol: "gas",
    name: "Gas",
  },
  {
    id: "gas-dao",
    symbol: "gas",
    name: "Gas DAO",
  },
  {
    id: "gasify",
    symbol: "gsfy",
    name: "Gasify",
  },
  {
    id: "gasp",
    symbol: "gasp",
    name: "gAsp",
  },
  {
    id: "gastoken",
    symbol: "gst2",
    name: "GasToken",
  },
  {
    id: "gastrocoin",
    symbol: "gtc",
    name: "GastroCoin",
  },
  {
    id: "gatechain-token",
    symbol: "gt",
    name: "GateToken",
  },
  {
    id: "gatechain-wormhole",
    symbol: "gt",
    name: "GateChain (Wormhole)",
  },
  {
    id: "gatenet",
    symbol: "gate",
    name: "GATENet",
  },
  {
    id: "gather",
    symbol: "gth",
    name: "Gather",
  },
  {
    id: "gatorswap",
    symbol: "gator",
    name: "GatorSwap",
  },
  {
    id: "gatsby-inu",
    symbol: "gatsbyinu",
    name: "Gatsby Inu",
  },
  {
    id: "gaur-money",
    symbol: "gaur",
    name: "Gaur Money",
  },
  {
    id: "gaur-shares",
    symbol: "gshare",
    name: "Gaur Shares",
  },
  {
    id: "gazetv",
    symbol: "gaze",
    name: "GazeTV",
  },
  {
    id: "gbox",
    symbol: "gbox",
    name: "GBOX",
  },
  {
    id: "gbrick",
    symbol: "gbx",
    name: "Gbrick",
  },
  {
    id: "gcn-coin",
    symbol: "gcn",
    name: "GCN Coin",
  },
  {
    id: "gdao-governance-vault",
    symbol: "xgdao",
    name: "GDAO Governance Vault",
  },
  {
    id: "gdoge-finance",
    symbol: "gdoge",
    name: "GDOGE Finance",
  },
  {
    id: "gearbox",
    symbol: "gear",
    name: "Gearbox",
  },
  {
    id: "geeq",
    symbol: "GEEQ",
    name: "GEEQ",
  },
  {
    id: "gegem",
    symbol: "geg",
    name: "GeGem",
  },
  {
    id: "geist-dai",
    symbol: "gdai",
    name: "Geist Dai",
  },
  {
    id: "geist-eth",
    symbol: "geth",
    name: "Geist ETH",
  },
  {
    id: "geist-finance",
    symbol: "geist",
    name: "Geist Finance",
  },
  {
    id: "geist-ftm",
    symbol: "gftm",
    name: "Geist FTM",
  },
  {
    id: "geist-fusdt",
    symbol: "gfusdt",
    name: "Geist fUSDT",
  },
  {
    id: "geist-usdc",
    symbol: "gusdc",
    name: "Geist USDC",
  },
  {
    id: "geist-wbtc",
    symbol: "gwbtc",
    name: "Geist WBTC",
  },
  {
    id: "gelato",
    symbol: "gel",
    name: "Gelato",
  },
  {
    id: "geld-finance",
    symbol: "geldf",
    name: "GELD Finance",
  },
  {
    id: "gembites",
    symbol: "gbts",
    name: "GemBites",
  },
  {
    id: "gemguardian",
    symbol: "gemg",
    name: "GemGuardian",
  },
  {
    id: "gemini-dollar",
    symbol: "gusd",
    name: "Gemini Dollar",
  },
  {
    id: "gemit-app",
    symbol: "gemit",
    name: "GEMIT.app",
  },
  {
    id: "gemma-extending-tech",
    symbol: "gxt",
    name: "Gemma Extending Tech",
  },
  {
    id: "gempay",
    symbol: "gpay",
    name: "GemPay",
  },
  {
    id: "gems-2",
    symbol: "gem",
    name: "Gems",
  },
  {
    id: "gemspree",
    symbol: "gems",
    name: "GemSpree",
  },
  {
    id: "gemstones",
    symbol: "gms",
    name: "Gemstones",
  },
  {
    id: "gem-token",
    symbol: "gem",
    name: "Gem Token",
  },
  {
    id: "genaro-network",
    symbol: "gnx",
    name: "Genaro Network",
  },
  {
    id: "genart",
    symbol: "genart",
    name: "GENART",
  },
  {
    id: "gencoin-capital",
    symbol: "gencap",
    name: "GenCoin Capital",
  },
  {
    id: "gene",
    symbol: "gene",
    name: "Gene",
  },
  {
    id: "genebank-token",
    symbol: "gnbt",
    name: "Genebank Token",
  },
  {
    id: "general-attention-currency",
    symbol: "xac",
    name: "General Attention Currency",
  },
  {
    id: "generation-of-yield",
    symbol: "ygy",
    name: "Generation of Yield",
  },
  {
    id: "generic-doge",
    symbol: "gdoge",
    name: "Generic Doge",
  },
  {
    id: "genes-chain",
    symbol: "genes",
    name: "GENES Chain",
  },
  {
    id: "genesis-mana",
    symbol: "mana",
    name: "Genesis Mana",
  },
  {
    id: "genesis-pool",
    symbol: "gpool",
    name: "Genesis Pool",
  },
  {
    id: "genesis-shards",
    symbol: "gs",
    name: "Genesis Shards",
  },
  {
    id: "genesis-token",
    symbol: "gent",
    name: "Genesis Token",
  },
  {
    id: "genesis-vision",
    symbol: "gvt",
    name: "Genesis Vision",
  },
  {
    id: "genesis-worlds",
    symbol: "genesis",
    name: "Genesis Worlds",
  },
  {
    id: "genesisx",
    symbol: "xgs",
    name: "GenesisX",
  },
  {
    id: "genesysgo-shadow",
    symbol: "shdw",
    name: "GenesysGo Shadow",
  },
  {
    id: "genexi",
    symbol: "gxi",
    name: "Genexi",
  },
  {
    id: "gengar-token",
    symbol: "gengar",
    name: "Gengar Token",
  },
  {
    id: "genie-protocol",
    symbol: "gnp",
    name: "Genie Protocol",
  },
  {
    id: "genius-coin",
    symbol: "genius",
    name: "Genius Coin",
  },
  {
    id: "genius-yield",
    symbol: "gens",
    name: "Genius Yield",
  },
  {
    id: "genix",
    symbol: "genix",
    name: "Genix",
  },
  {
    id: "gennix",
    symbol: "gnnx",
    name: "Gennix",
  },
  {
    id: "genomesdao",
    symbol: "$gene",
    name: "GenomesDAO",
  },
  {
    id: "genopets",
    symbol: "gene",
    name: "Genopets",
  },
  {
    id: "genre",
    symbol: "genre",
    name: "GENRE",
  },
  {
    id: "genshinflokiinu",
    symbol: "gfloki",
    name: "GenshinFlokiInu",
  },
  {
    id: "genshin-nft",
    symbol: "genshin",
    name: "Genshin NFT",
  },
  {
    id: "genshinshibinu",
    symbol: "gshib",
    name: "GenshinShibInu",
  },
  {
    id: "genshiro",
    symbol: "gens",
    name: "Genshiro",
  },
  {
    id: "gensokishis-metaverse",
    symbol: "mv",
    name: "GensoKishi’s Metaverse",
  },
  {
    id: "gentarium",
    symbol: "gtm",
    name: "Gentarium",
  },
  {
    id: "genwealth-coin",
    symbol: "gwc",
    name: "GenWealth Coin",
  },
  {
    id: "genx",
    symbol: "genx",
    name: "GENX",
  },
  {
    id: "geocoin",
    symbol: "geo",
    name: "Geocoin",
  },
  {
    id: "geodb",
    symbol: "geo",
    name: "GeoDB",
  },
  {
    id: "geopoly",
    symbol: "geo$",
    name: "Geopoly",
  },
  {
    id: "gera-coin",
    symbol: "gera",
    name: "Gera Coin",
  },
  {
    id: "germancoin",
    symbol: "gcx",
    name: "GermanCoin",
  },
  {
    id: "gerowallet",
    symbol: "gero",
    name: "GeroWallet",
  },
  {
    id: "get-token",
    symbol: "get",
    name: "GET Protocol",
  },
  {
    id: "geyser",
    symbol: "gysr",
    name: "Geyser",
  },
  {
    id: "geysercoin",
    symbol: "gsr",
    name: "GeyserCoin",
  },
  {
    id: "gforce",
    symbol: "gfce",
    name: "GFORCE",
  },
  {
    id: "gg-coin",
    symbol: "ggc",
    name: "Global Game Coin",
  },
  {
    id: "gg-token",
    symbol: "ggtk",
    name: "GG Token",
  },
  {
    id: "ghibli-inu",
    symbol: "ghibli",
    name: "Ghibli Inu",
  },
  {
    id: "ghospers-game",
    symbol: "ghsp",
    name: "Ghospers Game",
  },
  {
    id: "ghostblade-inu",
    symbol: "ghostblade",
    name: "GhostBlade Inu",
  },
  {
    id: "ghost-block",
    symbol: "ecto",
    name: "Ghost Block",
  },
  {
    id: "ghost-by-mcafee",
    symbol: "ghost",
    name: "Ghost",
  },
  {
    id: "ghostface",
    symbol: "ghostface",
    name: "Ghostface",
  },
  {
    id: "ghostface-shiba",
    symbol: "gfshib",
    name: "Ghostface Shiba",
  },
  {
    id: "ghost-farmer-capital",
    symbol: "gfc",
    name: "Ghost Farmer Capital",
  },
  {
    id: "ghost-inu",
    symbol: "ghost",
    name: "Ghost Inu",
  },
  {
    id: "ghostmarket",
    symbol: "gm",
    name: "GhostMarket",
  },
  {
    id: "ghost-trader",
    symbol: "GTR",
    name: "Ghost Trader",
  },
  {
    id: "ghoul-token",
    symbol: "ghoul",
    name: "Ghoul Token",
  },
  {
    id: "gibx-swap",
    symbol: "x",
    name: "GIBX Swap",
  },
  {
    id: "gictrade",
    symbol: "gict",
    name: "GICTrade",
  },
  {
    id: "gif-dao",
    symbol: "gif",
    name: "GIF DAO",
  },
  {
    id: "giftbag",
    symbol: "gbag",
    name: "Giftbag",
  },
  {
    id: "gift-coin",
    symbol: "gift",
    name: "Gift Coin",
  },
  {
    id: "giftedhands",
    symbol: "ghd",
    name: "Giftedhands",
  },
  {
    id: "gifto",
    symbol: "gto",
    name: "Gifto",
  },
  {
    id: "gigachad",
    symbol: "chad",
    name: "GigaChad",
  },
  {
    id: "giga-watt-token",
    symbol: "wtt",
    name: "Giga Watt Token",
  },
  {
    id: "gigecoin",
    symbol: "gig",
    name: "GigEcoin",
  },
  {
    id: "giletjaunecoin",
    symbol: "gjco",
    name: "GiletJauneCoin",
  },
  {
    id: "gilgamesh-eth",
    symbol: "gil",
    name: "Gilgamesh ETH",
  },
  {
    id: "gimmer",
    symbol: "gmr",
    name: "Gimmer",
  },
  {
    id: "ginga-finance",
    symbol: "gin",
    name: "Ginga Finance",
  },
  {
    id: "ginspirit",
    symbol: "ginspirit",
    name: "GinSpirit",
  },
  {
    id: "gin-token",
    symbol: "gin",
    name: "Gin Token",
  },
  {
    id: "ginza-eternity-reward",
    symbol: "ger",
    name: "Ginza Eternity Reward",
  },
  {
    id: "ginza-network",
    symbol: "ginza",
    name: "Ginza Network",
  },
  {
    id: "girl-story",
    symbol: "metagirl",
    name: "Girl Story",
  },
  {
    id: "gitcoin",
    symbol: "gtc",
    name: "Gitcoin",
  },
  {
    id: "give-global",
    symbol: "give",
    name: "Give Global",
  },
  {
    id: "giveth",
    symbol: "giv",
    name: "Giveth",
  },
  {
    id: "givetime-io",
    symbol: "gtm",
    name: "Givetime.io",
  },
  {
    id: "givingtoservices-svs",
    symbol: "svs",
    name: "GivingToServices SVS",
  },
  {
    id: "givly-coin",
    symbol: "giv",
    name: "GIV Token",
  },
  {
    id: "gizadao",
    symbol: "giza",
    name: "GizaDao",
  },
  {
    id: "glacierlaunch",
    symbol: "GLAC",
    name: "GlacierLaunch",
  },
  {
    id: "glass-chain",
    symbol: "gls",
    name: "Glass Chain",
  },
  {
    id: "gleec-coin",
    symbol: "gleec",
    name: "Gleec Coin",
  },
  {
    id: "glex",
    symbol: "glex",
    name: "GLEX",
  },
  {
    id: "glimpse",
    symbol: "glms",
    name: "Glimpse",
  },
  {
    id: "glitch-protocol",
    symbol: "glch",
    name: "Glitch Protocol",
  },
  {
    id: "glitchy",
    symbol: "gly",
    name: "Glitchy",
  },
  {
    id: "glitzkoin",
    symbol: "gtn",
    name: "GlitzKoin",
  },
  {
    id: "global-aex-token",
    symbol: "gat",
    name: "Global AEX Token",
  },
  {
    id: "globalboost",
    symbol: "bsty",
    name: "GlobalBoost-Y",
  },
  {
    id: "globalchainz",
    symbol: "gcz",
    name: "GlobalChainZ",
  },
  {
    id: "global-china-cash",
    symbol: "cnc",
    name: "Global China Cash",
  },
  {
    id: "globalcoin",
    symbol: "glc",
    name: "GlobalCoin",
  },
  {
    id: "global-coin-research",
    symbol: "gcr",
    name: "Global Coin Research",
  },
  {
    id: "global-crypto-alliance",
    symbol: "call",
    name: "Global Crypto Alliance",
  },
  {
    id: "global-defi",
    symbol: "gdefi",
    name: "Global DeFi",
  },
  {
    id: "global-digital-content",
    symbol: "gdc",
    name: "Global Digital Content",
  },
  {
    id: "global-gaming",
    symbol: "gmng",
    name: "Global Gaming",
  },
  {
    id: "globalgive",
    symbol: "ggive",
    name: "GlobalGive",
  },
  {
    id: "global-human-trust",
    symbol: "ght",
    name: "Global Human Trust",
  },
  {
    id: "global-reserve-system",
    symbol: "glob",
    name: "Global Reserve System",
  },
  {
    id: "global-smart-asset",
    symbol: "gsa",
    name: "Global Smart Asset",
  },
  {
    id: "global-social-chain",
    symbol: "gsc",
    name: "Global Social Chain",
  },
  {
    id: "global-trust-coin",
    symbol: "gtc",
    name: "Global Trust Coin",
  },
  {
    id: "globaltrustfund-token",
    symbol: "gtf",
    name: "GLOBALTRUSTFUND TOKEN",
  },
  {
    id: "globalvillage-ecosystem",
    symbol: "gve",
    name: "Globalvillage Ecosystem",
  },
  {
    id: "globe-derivative-exchange",
    symbol: "gdt",
    name: "Globe Derivative Exchange",
  },
  {
    id: "glorydoge",
    symbol: "gloryd",
    name: "GloryDoge",
  },
  {
    id: "glosfer-token",
    symbol: "glo",
    name: "Glosfer Token",
  },
  {
    id: "glouki",
    symbol: "glk",
    name: "Glouki",
  },
  {
    id: "glovecoin",
    symbol: "glov",
    name: "GloveCoin",
  },
  {
    id: "glow",
    symbol: "GLOW",
    name: "Glow",
  },
  {
    id: "glow-token",
    symbol: "glow",
    name: "Glow Token",
  },
  {
    id: "glox-finance",
    symbol: "glox",
    name: "Glox Finance",
  },
  {
    id: "glufco",
    symbol: "glf",
    name: "Glufco",
  },
  {
    id: "glyph-vault-nftx",
    symbol: "glyph",
    name: "GLYPH Vault (NFTX)",
  },
  {
    id: "gm",
    symbol: "gm",
    name: "GM",
  },
  {
    id: "gma",
    symbol: "gma",
    name: "GMA",
  },
  {
    id: "gmcoin",
    symbol: "gm",
    name: "GM Holding",
  },
  {
    id: "gm-coin",
    symbol: "gm",
    name: "Gm Coin",
  },
  {
    id: "gmcoin-2",
    symbol: "gmcoin",
    name: "GMCoin",
  },
  {
    id: "gm-floki",
    symbol: "gmfloki",
    name: "GM Floki",
  },
  {
    id: "gm-inu",
    symbol: "gminu",
    name: "GM Inu",
  },
  {
    id: "gmr-finance",
    symbol: "gmr",
    name: "GMR Finance (OLD)",
  },
  {
    id: "gmsol",
    symbol: "GMSOL",
    name: "GMSOL",
  },
  {
    id: "gmt-token",
    symbol: "gmt",
    name: "GMT Token",
  },
  {
    id: "gmx",
    symbol: "gmx",
    name: "GMX",
  },
  {
    id: "gn",
    symbol: "gn",
    name: "GN",
  },
  {
    id: "gnar-token",
    symbol: "GNAR",
    name: "GNAR TOKEN",
  },
  {
    id: "gnome",
    symbol: "$gnome",
    name: "GNOME",
  },
  {
    id: "gnometoken",
    symbol: "gnome",
    name: "GnomeToken",
  },
  {
    id: "gnosis",
    symbol: "gno",
    name: "Gnosis",
  },
  {
    id: "gny",
    symbol: "gny",
    name: "GNY",
  },
  {
    id: "goaltime-n",
    symbol: "gtx",
    name: "GoalTime N",
  },
  {
    id: "goal-token",
    symbol: "goal",
    name: "Goal Token",
  },
  {
    id: "goatcoin",
    symbol: "goat",
    name: "Goatcoin",
  },
  {
    id: "goat-coin",
    symbol: "goat",
    name: "Goat Coin",
  },
  {
    id: "goats",
    symbol: "goats",
    name: "GOATS",
  },
  {
    id: "g-o-a-t-token",
    symbol: "G.O.A.T",
    name: "G.O.A.T Token",
  },
  {
    id: "gobble-token",
    symbol: "gobble",
    name: "Gobble Token",
  },
  {
    id: "goblin",
    symbol: "goblin",
    name: "Goblin",
  },
  {
    id: "gobyte",
    symbol: "gbx",
    name: "GoByte",
  },
  {
    id: "gochain",
    symbol: "go",
    name: "GoChain",
  },
  {
    id: "god-dao",
    symbol: "god",
    name: "God DAO",
  },
  {
    id: "godl",
    symbol: "$godl",
    name: "GODL",
  },
  {
    id: "gods-and-legends",
    symbol: "gnlr",
    name: "Gods and Legends",
  },
  {
    id: "god-shiba-token",
    symbol: "gshib",
    name: "God Shiba Token",
  },
  {
    id: "gods-unchained",
    symbol: "gods",
    name: "Gods Unchained",
  },
  {
    id: "godzilla",
    symbol: "godz",
    name: "Godzilla",
  },
  {
    id: "goforit",
    symbol: "goi",
    name: "GoForIt Walk&Win",
  },
  {
    id: "gogeta-inu",
    symbol: "gogeta",
    name: "Gogeta Inu",
  },
  {
    id: "gogocoin",
    symbol: "gogo",
    name: "GOGOcoin",
  },
  {
    id: "gogo-finance",
    symbol: "gogo",
    name: "GOGO Finance",
  },
  {
    id: "gogolcoin",
    symbol: "gol",
    name: "GogolCoin",
  },
  {
    id: "goin",
    symbol: "GOIN",
    name: "GOIN",
  },
  {
    id: "goku",
    symbol: "goku",
    name: "Goku",
  },
  {
    id: "gokumarket-credit",
    symbol: "gmc",
    name: "GokuMarket Credit",
  },
  {
    id: "gold",
    symbol: "gold",
    name: "GOLD",
  },
  {
    id: "goldario",
    symbol: "gld",
    name: "Goldario",
  },
  {
    id: "gold-bcr",
    symbol: "gbcr",
    name: "Gold BCR",
  },
  {
    id: "goldblock",
    symbol: "gbk",
    name: "Goldblock",
  },
  {
    id: "goldblocks",
    symbol: "gb",
    name: "GoldBlocks",
  },
  {
    id: "gold-cash",
    symbol: "gold",
    name: "Gold Cash",
  },
  {
    id: "goldcoin",
    symbol: "glc",
    name: "Goldcoin",
  },
  {
    id: "gold-coin-reserve",
    symbol: "gcr",
    name: "Gold Coin Reserve",
  },
  {
    id: "golden-age",
    symbol: "ga",
    name: "Golden Age",
  },
  {
    id: "golden-ball",
    symbol: "glb",
    name: "Golden Ball",
  },
  {
    id: "goldendiamond9",
    symbol: "g9",
    name: "GoldenDiamond9",
  },
  {
    id: "golden-doge",
    symbol: "gdoge",
    name: "Golden Doge",
  },
  {
    id: "golden-goose",
    symbol: "gold",
    name: "Golden Goose",
  },
  {
    id: "golden-kitty-cake",
    symbol: "gkcake",
    name: "Golden Kitty Cake",
  },
  {
    id: "golden-ratio-coin",
    symbol: "goldr",
    name: "Golden Ratio Coin",
  },
  {
    id: "golden-ratio-token",
    symbol: "grt",
    name: "Golden Ratio Token",
  },
  {
    id: "golden-roots",
    symbol: "gdr",
    name: "Golden Roots",
  },
  {
    id: "golden-token",
    symbol: "gold",
    name: "Golden Token",
  },
  {
    id: "goldenugget",
    symbol: "gnto",
    name: "GoldeNugget",
  },
  {
    id: "golden-york",
    symbol: "goldyork",
    name: "Golden York",
  },
  {
    id: "goldex-token",
    symbol: "gldx",
    name: "Goldex Token",
  },
  {
    id: "goldfarm",
    symbol: "gold",
    name: "GoldFarm",
  },
  {
    id: "gold-fever-native-gold",
    symbol: "ngl",
    name: "Gold Fever Native Gold",
  },
  {
    id: "goldfinch",
    symbol: "gfi",
    name: "Goldfinch",
  },
  {
    id: "goldfund-ico",
    symbol: "gfun",
    name: "GoldFund",
  },
  {
    id: "gol-d-inu",
    symbol: "ginu",
    name: "Gol D Inu",
  },
  {
    id: "goldkash",
    symbol: "xgk",
    name: "GoldKash",
  },
  {
    id: "goldminer",
    symbol: "gm",
    name: "GoldMiner",
  },
  {
    id: "gold-mining-members",
    symbol: "gmm",
    name: "Gold Mining Members",
  },
  {
    id: "goldmint",
    symbol: "mntp",
    name: "Goldmint",
  },
  {
    id: "goldmoney",
    symbol: "gdm",
    name: "Goldmoney",
  },
  {
    id: "goldnugget",
    symbol: "ngt",
    name: "Gold Nugget",
  },
  {
    id: "gold-pegas",
    symbol: "gdp",
    name: "Gold Pegas",
  },
  {
    id: "gold-poker",
    symbol: "gpkr",
    name: "Gold Poker",
  },
  {
    id: "gold-secured-currency",
    symbol: "gsx",
    name: "Gold Secured Currency",
  },
  {
    id: "gold-sonic",
    symbol: "gsonic",
    name: "Gold Sonic",
  },
  {
    id: "golem",
    symbol: "glm",
    name: "Golem",
  },
  {
    id: "golff",
    symbol: "gof",
    name: "Golff",
  },
  {
    id: "golfinance",
    symbol: "GOL",
    name: "GolFinance",
  },
  {
    id: "golfrochain",
    symbol: "golf",
    name: "Golfrochain",
  },
  {
    id: "goma-finance",
    symbol: "goma",
    name: "GOMA Finance",
  },
  {
    id: "gomax",
    symbol: "gomax",
    name: "GOMAx",
  },
  {
    id: "gomb",
    symbol: "gomb",
    name: "GOMB",
  },
  {
    id: "gombshare",
    symbol: "gshare",
    name: "GOMBSHARE",
  },
  {
    id: "gomics",
    symbol: "gom",
    name: "Gomics",
  },
  {
    id: "gomoney2",
    symbol: "gom2",
    name: "GoMoney2",
  },
  {
    id: "gondola-finance",
    symbol: "gdl",
    name: "Gondola Finance",
  },
  {
    id: "gonetwork",
    symbol: "got",
    name: "GoNetwork",
  },
  {
    id: "good-bridging",
    symbol: "gb",
    name: "Good Bridging",
  },
  {
    id: "good-fire",
    symbol: "gf",
    name: "Good Fire",
  },
  {
    id: "good-game",
    symbol: "gg",
    name: "Good Game",
  },
  {
    id: "good-games-guild",
    symbol: "ggg",
    name: "Good Games Guild",
  },
  {
    id: "good-token",
    symbol: "good",
    name: "Good Token",
  },
  {
    id: "goofydoge",
    symbol: "GoofyDoge",
    name: "GoofyDoge",
  },
  {
    id: "goonrich",
    symbol: "goon",
    name: "GoonRich",
  },
  {
    id: "gooreo",
    symbol: "gooreo",
    name: "Gooreo",
  },
  {
    id: "goose-finance",
    symbol: "egg",
    name: "Goose Finance",
  },
  {
    id: "goosefx",
    symbol: "gofx",
    name: "GooseFX",
  },
  {
    id: "gorgeous",
    symbol: "gorgeous",
    name: "Gorgeous",
  },
  {
    id: "gorilla-diamond",
    symbol: "gdt",
    name: "Gorilla Diamond",
  },
  {
    id: "gorilla-inu",
    symbol: "gorilla inu",
    name: "Gorilla Inu",
  },
  {
    id: "gotem",
    symbol: "gotem",
    name: "gotEM",
  },
  {
    id: "gotogods",
    symbol: "ogods",
    name: "GOTOGODS",
  },
  {
    id: "gourmetgalaxy",
    symbol: "gum",
    name: "Gourmet Galaxy",
  },
  {
    id: "governance-ohm",
    symbol: "gohm",
    name: "Governance OHM",
  },
  {
    id: "governance-ohm-wormhole",
    symbol: "gohm",
    name: "Governance OHM (Wormhole)",
  },
  {
    id: "governance-zil",
    symbol: "gzil",
    name: "governance ZIL",
  },
  {
    id: "governor-dao",
    symbol: "gdao",
    name: "Governor DAO",
  },
  {
    id: "govi",
    symbol: "govi",
    name: "Govi",
  },
  {
    id: "govworld",
    symbol: "gov",
    name: "GovWorld",
  },
  {
    id: "gowithmi",
    symbol: "gmat",
    name: "GoWithMi",
  },
  {
    id: "goztepe-s-k-fan-token",
    symbol: "goz",
    name: "Göztepe S.K. Fan Token",
  },
  {
    id: "gpex",
    symbol: "gpx",
    name: "GPEX",
  },
  {
    id: "gps-ecosystem",
    symbol: "gps",
    name: "GPS Ecosystem",
  },
  {
    id: "gpu-coin",
    symbol: "gpu",
    name: "GPU Coin",
  },
  {
    id: "grafenocoin-2",
    symbol: "gfnc",
    name: "GrafenoCoin",
  },
  {
    id: "grafsound",
    symbol: "gsmt",
    name: "Grafsound",
  },
  {
    id: "graft-blockchain",
    symbol: "grft",
    name: "Graft Blockchain",
  },
  {
    id: "grain",
    symbol: "grain",
    name: "Grain Token",
  },
  {
    id: "grain-token",
    symbol: "grain",
    name: "Grain",
  },
  {
    id: "gram",
    symbol: "gram",
    name: "OpenGram",
  },
  {
    id: "grand-exchange",
    symbol: "gp",
    name: "Grand Exchange",
  },
  {
    id: "grandpa-doge",
    symbol: "grandpadoge",
    name: "Grandpa Doge",
  },
  {
    id: "granny-shiba",
    symbol: "gshiba",
    name: "Granny Shiba",
  },
  {
    id: "grape-2",
    symbol: "grape",
    name: "Grape Protocol",
  },
  {
    id: "grape-finance",
    symbol: "grape",
    name: "Grape Finance",
  },
  {
    id: "grapefruit-coin",
    symbol: "grpft",
    name: "Grapefruit Coin",
  },
  {
    id: "grap-finance",
    symbol: "grap",
    name: "Grap Finance",
  },
  {
    id: "graphene",
    symbol: "gfn",
    name: "Graphene",
  },
  {
    id: "graphlinq-protocol",
    symbol: "glq",
    name: "GraphLinq Protocol",
  },
  {
    id: "graviocoin",
    symbol: "gio",
    name: "Graviocoin",
  },
  {
    id: "gravitoken",
    symbol: "grv",
    name: "Gravitoken",
  },
  {
    id: "graviton-zero",
    symbol: "grav",
    name: "Graviton Zero",
  },
  {
    id: "gravitx",
    symbol: "GRX",
    name: "GravitX",
  },
  {
    id: "gravity",
    symbol: "gzro",
    name: "Gravity",
  },
  {
    id: "gravity-finance",
    symbol: "gfi",
    name: "Gravity Finance",
  },
  {
    id: "grearn",
    symbol: "gst",
    name: "GrEarn",
  },
  {
    id: "great-ape",
    symbol: "greatape",
    name: "Great Ape",
  },
  {
    id: "great-bounty-dealer",
    symbol: "gbd",
    name: "Great Bounty Dealer",
  },
  {
    id: "greed",
    symbol: "$greed",
    name: "Greed",
  },
  {
    id: "greenair",
    symbol: "green",
    name: "GreenAir",
  },
  {
    id: "green-beli",
    symbol: "grbe",
    name: "Green Beli",
  },
  {
    id: "green-ben",
    symbol: "EBEN",
    name: "Green Ben",
  },
  {
    id: "greencandles",
    symbol: "green",
    name: "GreenCandles",
  },
  {
    id: "green-chart",
    symbol: "green",
    name: "Green Chart",
  },
  {
    id: "green-climate-world",
    symbol: "wgc",
    name: "Green Climate World",
  },
  {
    id: "greencoin",
    symbol: "gre",
    name: "Greencoin",
  },
  {
    id: "green-dildo-finance",
    symbol: "gdildo",
    name: "Green Dildo Finance",
  },
  {
    id: "green-energy-coin",
    symbol: "gec",
    name: "Green Energy Coin",
  },
  {
    id: "greeneum-network",
    symbol: "green",
    name: "Greeneum Network",
  },
  {
    id: "greenex",
    symbol: "gnx",
    name: "Greenex",
  },
  {
    id: "green-eyed-monsters",
    symbol: "GEM",
    name: "Green Eyed Monsters",
  },
  {
    id: "green-floki",
    symbol: "greenfloki",
    name: "Green Floki",
  },
  {
    id: "green-flow",
    symbol: "grc",
    name: "GreenCoin.AI",
  },
  {
    id: "greenheart-cbd",
    symbol: "cbd",
    name: "Greenheart CBD",
  },
  {
    id: "green-life-energy",
    symbol: "gnl",
    name: "Green Life Energy",
  },
  {
    id: "green-light",
    symbol: "gl",
    name: "Green Light",
  },
  {
    id: "greenmars",
    symbol: "greenmars",
    name: "GreenMars",
  },
  {
    id: "greenmoon",
    symbol: "grm",
    name: "GreenMoon",
  },
  {
    id: "greenmoonzilla",
    symbol: "grmzilla",
    name: "GreenMoonZilla",
  },
  {
    id: "greenpay-coin",
    symbol: "gpc",
    name: "GreenPay Coin",
  },
  {
    id: "green-planet",
    symbol: "gamma",
    name: "Green Planet",
  },
  {
    id: "green-shiba-inu",
    symbol: "ginux",
    name: "Green Shiba Inu",
  },
  {
    id: "greentek",
    symbol: "gte",
    name: "GreenTek",
  },
  {
    id: "greentrust",
    symbol: "gnt",
    name: "GreenTrust",
  },
  {
    id: "green-world",
    symbol: "grew",
    name: "Green World",
  },
  {
    id: "greenzonex",
    symbol: "gzx",
    name: "GreenZoneX",
  },
  {
    id: "gremlins-finance",
    symbol: "grem",
    name: "Gremlins Finance",
  },
  {
    id: "greyhound",
    symbol: "greyhound",
    name: "Greyhound",
  },
  {
    id: "grey-token",
    symbol: "grey",
    name: "Grey Token",
  },
  {
    id: "gric",
    symbol: "gc",
    name: "Gric Coin",
  },
  {
    id: "grid",
    symbol: "grid",
    name: "GridPlus [OLD]",
  },
  {
    id: "gridcoin-research",
    symbol: "grc",
    name: "Gridcoin",
  },
  {
    id: "gridzone",
    symbol: "zone",
    name: "GridZone.io",
  },
  {
    id: "griffin-art",
    symbol: "gart",
    name: "Griffin Art",
  },
  {
    id: "grill-farm",
    symbol: "grill",
    name: "Grill Farm",
  },
  {
    id: "grimm",
    symbol: "grimm",
    name: "Grimm",
  },
  {
    id: "grimtoken",
    symbol: "grim",
    name: "GrimToken",
  },
  {
    id: "grin",
    symbol: "grin",
    name: "Grin",
  },
  {
    id: "grind-token",
    symbol: "grind",
    name: "Grind Token",
  },
  {
    id: "gro-dao-token",
    symbol: "gro",
    name: "Gro DAO Token",
  },
  {
    id: "groestlcoin",
    symbol: "grs",
    name: "Groestlcoin",
  },
  {
    id: "grom",
    symbol: "gr",
    name: "GROM",
  },
  {
    id: "groovy-finance",
    symbol: "gvy",
    name: "Groovy Finance",
  },
  {
    id: "groupdao",
    symbol: "gdo",
    name: "GroupDao",
  },
  {
    id: "gro-vault-token",
    symbol: "gvt",
    name: "Gro Vault Token",
  },
  {
    id: "growing-fi",
    symbol: "grow",
    name: "Growing.fi",
  },
  {
    id: "growthcoin",
    symbol: "grw",
    name: "GrowthCoin",
  },
  {
    id: "growth-defi",
    symbol: "gro",
    name: "GROWTH DeFi",
  },
  {
    id: "grow-token-2",
    symbol: "grow",
    name: "Grow Token",
  },
  {
    id: "grpl-finance-2",
    symbol: "grpl",
    name: "GRPL Finance",
  },
  {
    id: "grumpydoge-punks",
    symbol: "gpunks",
    name: "GrumpyDoge Punks",
  },
  {
    id: "gscarab",
    symbol: "gscarab",
    name: "GScarab",
  },
  {
    id: "gsenetwork",
    symbol: "gse",
    name: "GSENetwork",
  },
  {
    id: "gsmcoin",
    symbol: "gsm",
    name: "GSMcoin",
  },
  {
    id: "gspi",
    symbol: "gspi",
    name: "Shopping.io Governance",
  },
  {
    id: "gst",
    symbol: "gst",
    name: "GST",
  },
  {
    id: "gstcoin",
    symbol: "gst",
    name: "GSTCOIN",
  },
  {
    id: "gton-capital",
    symbol: "gton",
    name: "GTON CAPITAL",
  },
  {
    id: "gt-protocol",
    symbol: "gtp",
    name: "GT-Protocol",
  },
  {
    id: "gt-star-token",
    symbol: "gts",
    name: "GT STAR Token",
  },
  {
    id: "gu",
    symbol: "gu",
    name: "Kugle GU",
  },
  {
    id: "guapcoin",
    symbol: "guap",
    name: "Guapcoin",
  },
  {
    id: "guarded-ether",
    symbol: "geth",
    name: "Guarded Ether",
  },
  {
    id: "guardian-token",
    symbol: "guard",
    name: "Guardian Token",
  },
  {
    id: "guccinuv2",
    symbol: "GucciV2",
    name: "GuccinuV2",
  },
  {
    id: "guider",
    symbol: "gdr",
    name: "Guider",
  },
  {
    id: "guildfi",
    symbol: "gf",
    name: "GuildFi",
  },
  {
    id: "guild-of-guardians",
    symbol: "gog",
    name: "Guild of Guardians",
  },
  {
    id: "guitarswap",
    symbol: "gut",
    name: "GuitarSwap",
  },
  {
    id: "gulden",
    symbol: "nlg",
    name: "Gulden",
  },
  {
    id: "gummy-beans",
    symbol: "GUMMIE",
    name: "Gummy Beans",
  },
  {
    id: "gummy-bull-token",
    symbol: "GUMMY",
    name: "Gummy Bull Token",
  },
  {
    id: "guncoin",
    symbol: "gun",
    name: "Guncoin",
  },
  {
    id: "gunstar-metaverse",
    symbol: "gst",
    name: "Gunstar Metaverse",
  },
  {
    id: "gunthy",
    symbol: "gunthy",
    name: "GUNTHY",
  },
  {
    id: "gusd-token",
    symbol: "gusdt",
    name: "Global Utility Smart Digital Token",
  },
  {
    id: "guss-one",
    symbol: "guss",
    name: "GUSS.ONE",
  },
  {
    id: "gutter-cat-gang",
    symbol: "gcg",
    name: "Gutter Cat Gang",
  },
  {
    id: "guzzler",
    symbol: "gzlr",
    name: "Guzzler",
  },
  {
    id: "gw",
    symbol: "gw",
    name: "GW",
  },
  {
    id: "gxchain",
    symbol: "gxc",
    name: "GXChain",
  },
  {
    id: "gyen",
    symbol: "gyen",
    name: "GYEN",
  },
  {
    id: "gym-token",
    symbol: "gym",
    name: "GYM Token",
  },
  {
    id: "gyro",
    symbol: "gyro",
    name: "Gyro",
  },
  {
    id: "h2finance",
    symbol: "yfih2",
    name: "H2Finance",
  },
  {
    id: "h3ro3s",
    symbol: "h3ro3s",
    name: "H3RO3S",
  },
  {
    id: "h3x",
    symbol: "h3x",
    name: "H3X",
  },
  {
    id: "habitat",
    symbol: "hbt",
    name: "Habitat",
  },
  {
    id: "habits",
    symbol: "hbx",
    name: "Habits",
  },
  {
    id: "hacash",
    symbol: "hac",
    name: "Hacash",
  },
  {
    id: "hachiko",
    symbol: "Hachiko",
    name: "Hachiko",
  },
  {
    id: "hachikoinu",
    symbol: "inu",
    name: "Hachiko Inu Token",
  },
  {
    id: "hackenai",
    symbol: "hai",
    name: "Hacken Token",
  },
  {
    id: "hackspace-capital",
    symbol: "hac",
    name: "Hackspace Capital",
  },
  {
    id: "hades-money",
    symbol: "hades",
    name: "Hades Money",
  },
  {
    id: "hado",
    symbol: "hdo",
    name: "HADO",
  },
  {
    id: "haino",
    symbol: "HE",
    name: "Haino",
  },
  {
    id: "hakka-finance",
    symbol: "hakka",
    name: "Hakka Finance",
  },
  {
    id: "hakuna-matata",
    symbol: "matata",
    name: "Hakuna Matata",
  },
  {
    id: "hakunamatata-new",
    symbol: "hkun",
    name: "HakunaMatata (new)",
  },
  {
    id: "hakuna-metata",
    symbol: "tata",
    name: "HakunaMatata (old)",
  },
  {
    id: "hakurai",
    symbol: "$rai",
    name: "Hakurai",
  },
  {
    id: "hakuryu",
    symbol: "$ryu",
    name: "Hakuryu",
  },
  {
    id: "halcyon",
    symbol: "hal",
    name: "Halcyon",
  },
  {
    id: "halfpizza",
    symbol: "piza",
    name: "Half Pizza",
  },
  {
    id: "halo-platform",
    symbol: "halo",
    name: "Halo Platform",
  },
  {
    id: "halving-coin",
    symbol: "halv",
    name: "Halving",
  },
  {
    id: "hamaru",
    symbol: "maru",
    name: "Hamaru",
  },
  {
    id: "hamdan-coin",
    symbol: "hmc",
    name: "Hamdan Coin",
  },
  {
    id: "hampton-metaverse",
    symbol: "hmeta",
    name: "Hampton Metaverse",
  },
  {
    id: "hamster",
    symbol: "ham",
    name: "Hamster",
  },
  {
    id: "hanacoin",
    symbol: "hana",
    name: "Hanacoin",
  },
  {
    id: "hanagold-token",
    symbol: "hng",
    name: "HanaGold Token",
  },
  {
    id: "handle-fi",
    symbol: "forex",
    name: "handle.fi",
  },
  {
    id: "handshake",
    symbol: "hns",
    name: "Handshake",
  },
  {
    id: "handy",
    symbol: "handy",
    name: "Handy",
  },
  {
    id: "hangrybirds",
    symbol: "hangry",
    name: "HangryBirds",
  },
  {
    id: "hanu-yokia",
    symbol: "hanu",
    name: "Hanu Yokia",
  },
  {
    id: "hanzo-inu",
    symbol: "hnzo",
    name: "Hanzo Inu",
  },
  {
    id: "hapi",
    symbol: "hapi",
    name: "HAPI",
  },
  {
    id: "happiness-token",
    symbol: "hps",
    name: "Happiness Token",
  },
  {
    id: "happy-birthday-coin",
    symbol: "hbdc",
    name: "Happy Birthday Coin",
  },
  {
    id: "happycoin",
    symbol: "happy",
    name: "HappyCoin",
  },
  {
    id: "happyfans",
    symbol: "happy",
    name: "HappyFans",
  },
  {
    id: "happy-land",
    symbol: "hpl",
    name: "Happy Land",
  },
  {
    id: "harambe-protocol",
    symbol: "riph",
    name: "Harambe Protocol",
  },
  {
    id: "hara-token",
    symbol: "hart",
    name: "Hara Token",
  },
  {
    id: "hardcore-finance",
    symbol: "hcore",
    name: "Hardcore Finance",
  },
  {
    id: "hare-token",
    symbol: "hare",
    name: "Hare Token",
  },
  {
    id: "harmes-shares",
    symbol: "hshares",
    name: "Hermes Shares",
  },
  {
    id: "harmomized-app",
    symbol: "hmz",
    name: "Harmonized App",
  },
  {
    id: "harmon-ape",
    symbol: "ape",
    name: "Harmon Ape",
  },
  {
    id: "harmony",
    symbol: "one",
    name: "Harmony",
  },
  {
    id: "harmonycoin",
    symbol: "hmc",
    name: "HarmonyCoin",
  },
  {
    id: "harmonylauncher",
    symbol: "harl",
    name: "HarmonyLauncher",
  },
  {
    id: "harmonypad",
    symbol: "hpad",
    name: "HarmonyPad",
  },
  {
    id: "harmony-parrot-egg",
    symbol: "1pegg",
    name: "Harmony Parrot Egg",
  },
  {
    id: "harmony-play",
    symbol: "hplay",
    name: "Harmony Play",
  },
  {
    id: "haroldcoin",
    symbol: "hrld",
    name: "Haroldcoin",
  },
  {
    id: "harold-coin",
    symbol: "harold",
    name: "Harold Coin",
  },
  {
    id: "harpy-finance",
    symbol: "harpy",
    name: "Harpy Finance",
  },
  {
    id: "harrison-first",
    symbol: "FIRST",
    name: "Harrison First",
  },
  {
    id: "harrypotterobamasonic10inu",
    symbol: "BITCOIN",
    name: "HarryPotterObamaSonic10Inu",
  },
  {
    id: "harvest-finance",
    symbol: "farm",
    name: "Harvest Finance",
  },
  {
    id: "hashbit",
    symbol: "hbit",
    name: "HashBit",
  },
  {
    id: "hash-bridge-oracle",
    symbol: "hbo",
    name: "Hash Bridge Oracle",
  },
  {
    id: "hashbx",
    symbol: "hbx",
    name: "HashBX",
  },
  {
    id: "hashcoin",
    symbol: "hsc",
    name: "HashCoin",
  },
  {
    id: "hashgard",
    symbol: "gard",
    name: "Hashgard",
  },
  {
    id: "hashland-coin",
    symbol: "hc",
    name: "HashLand Coin",
  },
  {
    id: "hashmasks",
    symbol: "mask20",
    name: "Hashmasks",
  },
  {
    id: "hashnet-biteco",
    symbol: "hnb",
    name: "HashNet BitEco",
  },
  {
    id: "hashpanda",
    symbol: "panda",
    name: "HashPanda",
  },
  {
    id: "hash-pot",
    symbol: "hpot",
    name: "Hash Pot",
  },
  {
    id: "hashshare",
    symbol: "hss",
    name: "Hashshare",
  },
  {
    id: "hashtagger",
    symbol: "MOOO",
    name: "Hashtagger",
  },
  {
    id: "hash-token",
    symbol: "hash",
    name: "Hash Token",
  },
  {
    id: "hatch-dao",
    symbol: "hatch",
    name: "Hatch DAO",
  },
  {
    id: "hathor",
    symbol: "htr",
    name: "Hathor",
  },
  {
    id: "hatoken",
    symbol: "hatok",
    name: "Hatoken",
  },
  {
    id: "hat-swap-city",
    symbol: "htc",
    name: "Hat Swap City",
  },
  {
    id: "hatter",
    symbol: "hatter",
    name: "Hatter",
  },
  {
    id: "have-fun",
    symbol: "hf",
    name: "Have Fun",
  },
  {
    id: "have-fun-staying-poor",
    symbol: "hfsp",
    name: "Have Fun Staying Poor",
  },
  {
    id: "haven",
    symbol: "xhv",
    name: "Haven",
  },
  {
    id: "havens-nook",
    symbol: "hxn",
    name: "Havens Nook",
  },
  {
    id: "haven-token",
    symbol: "haven",
    name: "Haven Token",
  },
  {
    id: "havven",
    symbol: "snx",
    name: "Synthetix Network Token",
  },
  {
    id: "havy-2",
    symbol: "havy",
    name: "Havy",
  },
  {
    id: "hawaii-coin",
    symbol: "hwi",
    name: "Hawaii Coin",
  },
  {
    id: "hawkdex",
    symbol: "hawk",
    name: "HawkDex",
  },
  {
    id: "hayate-inu",
    symbol: "hinu",
    name: "Hayate Inu",
  },
  {
    id: "hayfever",
    symbol: "hay",
    name: "Hayfever",
  },
  {
    id: "hazza",
    symbol: "haz",
    name: "Hazza",
  },
  {
    id: "hbarpad",
    symbol: "hbarp",
    name: "HbarPad",
  },
  {
    id: "hbtc-token",
    symbol: "hbc",
    name: "HBTC Captain Token",
  },
  {
    id: "hdac",
    symbol: "hdac",
    name: "HDAC",
  },
  {
    id: "hdpunk-vault-nftx",
    symbol: "hdpunk",
    name: "HDPUNK Vault (NFTX)",
  },
  {
    id: "healing-potion",
    symbol: "hppot",
    name: "Healing Potion",
  },
  {
    id: "healthchainus",
    symbol: "hcut",
    name: "HealthChainUS",
  },
  {
    id: "health-potion",
    symbol: "hep",
    name: "Health Potion",
  },
  {
    id: "health-token",
    symbol: "helth",
    name: "Health Token",
  },
  {
    id: "heartbout",
    symbol: "hb",
    name: "HeartBout",
  },
  {
    id: "heartbout-pay",
    symbol: "hp",
    name: "HeartBout Pay",
  },
  {
    id: "heartk",
    symbol: "HeartK",
    name: "HeartK",
  },
  {
    id: "heartnumber",
    symbol: "htn",
    name: "Heart Number",
  },
  {
    id: "heavens-gate",
    symbol: "hate",
    name: "Heavens Gate",
  },
  {
    id: "hebeblock",
    symbol: "hebe",
    name: "Hebeblock",
  },
  {
    id: "hecate-capital",
    symbol: "HECATE",
    name: "Hecate Capital",
  },
  {
    id: "hecofi",
    symbol: "hfi",
    name: "HecoFi",
  },
  {
    id: "heco-origin-token",
    symbol: "hogt",
    name: "Heco Origin Token",
  },
  {
    id: "hector-dao",
    symbol: "hec",
    name: "Hector DAO",
  },
  {
    id: "hedera-hashgraph",
    symbol: "hbar",
    name: "Hedera",
  },
  {
    id: "hedge4-ai",
    symbol: "hejj",
    name: "Hedge4.AI",
  },
  {
    id: "hedge-finance",
    symbol: "hedge",
    name: "Hedge Finance",
  },
  {
    id: "hedget",
    symbol: "hget",
    name: "Hedget",
  },
  {
    id: "hedgetrade",
    symbol: "hedg",
    name: "HedgeTrade",
  },
  {
    id: "hedget-wormhole",
    symbol: "hget",
    name: "Hedget (Wormhole)",
  },
  {
    id: "hedpay",
    symbol: "hdp.ф",
    name: "HEdpAY",
  },
  {
    id: "hegic",
    symbol: "hegic",
    name: "Hegic",
  },
  {
    id: "helex-token",
    symbol: "hlx",
    name: "Helex",
  },
  {
    id: "helicopter-finance",
    symbol: "copter",
    name: "Helicopter Finance",
  },
  {
    id: "helio",
    symbol: "hlo",
    name: "Helio",
  },
  {
    id: "helios-cash",
    symbol: "heo",
    name: "Helios Cash",
  },
  {
    id: "helios-charts",
    symbol: "$sol",
    name: "Helios Charts",
  },
  {
    id: "helium",
    symbol: "hnt",
    name: "Helium",
  },
  {
    id: "heliumx",
    symbol: "hex",
    name: "Heliumx",
  },
  {
    id: "helix",
    symbol: "hlix",
    name: "Helix",
  },
  {
    id: "helkin",
    symbol: "hk",
    name: "Helkin",
  },
  {
    id: "helleniccoin",
    symbol: "hnc",
    name: "HNC Coin",
  },
  {
    id: "hellfire",
    symbol: "hfire",
    name: "HellFire",
  },
  {
    id: "hell-hounds",
    symbol: "SOUL",
    name: "HELL HOUNDS",
  },
  {
    id: "hellmoon",
    symbol: "hmoon",
    name: "HELLMOON",
  },
  {
    id: "hellogold",
    symbol: "hgt",
    name: "HelloGold",
  },
  {
    id: "hellshare",
    symbol: "hellshare",
    name: "HELLSHARE",
  },
  {
    id: "hellsing-inu",
    symbol: "hellsing",
    name: "Hellsing Inu",
  },
  {
    id: "helmet-insure",
    symbol: "helmet",
    name: "Helmet Insure",
  },
  {
    id: "help-coin",
    symbol: "hlp",
    name: "HLP Token",
  },
  {
    id: "help-coins",
    symbol: "hcs",
    name: "Help Coins",
  },
  {
    id: "helper-search-token",
    symbol: "hsn",
    name: "Helper Search Token",
  },
  {
    id: "helpico",
    symbol: "help",
    name: "Helpico",
  },
  {
    id: "help-the-homeless-coin",
    symbol: "hth",
    name: "Help The Homeless Coin",
  },
  {
    id: "help-token",
    symbol: "help",
    name: "GoHelpFund",
  },
  {
    id: "hempcoin-thc",
    symbol: "thc",
    name: "Hempcoin",
  },
  {
    id: "hepa-finance",
    symbol: "hepa",
    name: "Hepa Finance",
  },
  {
    id: "heptafranc",
    symbol: "hptf",
    name: "HEPTAFRANC",
  },
  {
    id: "herbalist-token",
    symbol: "herb",
    name: "Herbalist Token",
  },
  {
    id: "herity-network",
    symbol: "her",
    name: "Herity Network",
  },
  {
    id: "hermes",
    symbol: "hermes",
    name: "HERMES",
  },
  {
    id: "hermez-network-token",
    symbol: "hez",
    name: "Hermez Network",
  },
  {
    id: "hero",
    symbol: "hero",
    name: "HERO",
  },
  {
    id: "hero-arena",
    symbol: "hera",
    name: "Hero Arena",
  },
  {
    id: "herobattle",
    symbol: "hrb",
    name: "Herobattle",
  },
  {
    id: "herobook",
    symbol: "hbg",
    name: "HeroBook",
  },
  {
    id: "hero-cat-key",
    symbol: "hck",
    name: "Hero Cat Key",
  },
  {
    id: "hero-cat-token",
    symbol: "hct",
    name: "Hero Cat Token",
  },
  {
    id: "herocoin",
    symbol: "play",
    name: "HEROcoin",
  },
  {
    id: "herodoge",
    symbol: "herodoge",
    name: "HeroDoge",
  },
  {
    id: "heroeschained",
    symbol: "hec",
    name: "HeroesChained",
  },
  {
    id: "heroes-empires",
    symbol: "he",
    name: "Heroes & Empires",
  },
  {
    id: "hero-essence",
    symbol: "hes",
    name: "Hero Essence",
  },
  {
    id: "heroes-td",
    symbol: "htd",
    name: "Heroes TD",
  },
  {
    id: "heroestd-cgc",
    symbol: "cgc",
    name: "HeroesTD CGC",
  },
  {
    id: "herofi",
    symbol: "heroegg",
    name: "HeroFi",
  },
  {
    id: "herofi-token",
    symbol: "rofi",
    name: "HeroFi Token (OLD)",
  },
  {
    id: "herofi-token-2",
    symbol: "rofi",
    name: "HeroFi Token",
  },
  {
    id: "hero-inu",
    symbol: "heros",
    name: "Hero Inu",
  },
  {
    id: "heropark",
    symbol: "hp",
    name: "HeroPark",
  },
  {
    id: "herosofcrypton",
    symbol: "heroes",
    name: "Heroes of Crypton",
  },
  {
    id: "hero-token",
    symbol: "raise",
    name: "Raise Token",
  },
  {
    id: "heroverse",
    symbol: "her",
    name: "HeroVerse",
  },
  {
    id: "hertz-network",
    symbol: "htz",
    name: "Hertz Network",
  },
  {
    id: "herum",
    symbol: "ram",
    name: "Herum",
  },
  {
    id: "hesh-fi",
    symbol: "hesh",
    name: "Hesh.Fi",
  },
  {
    id: "hex",
    symbol: "hex",
    name: "HEX",
  },
  {
    id: "hex-money",
    symbol: "hxy",
    name: "HXY Money",
  },
  {
    id: "hfuel",
    symbol: "hfuel",
    name: "HFuel",
  },
  {
    id: "hibiki-finance",
    symbol: "hibiki",
    name: "Hibiki Finance",
  },
  {
    id: "hiblocks",
    symbol: "hibs",
    name: "Hiblocks",
  },
  {
    id: "hic-et-nunc-dao",
    symbol: "hdao",
    name: "Hic et nunc DAO",
  },
  {
    id: "hicoin",
    symbol: "xhi",
    name: "HiCoin",
  },
  {
    id: "hidden-coin",
    symbol: "hdn",
    name: "Hidden Coin",
  },
  {
    id: "hideous-coin",
    symbol: "hideous",
    name: "Hideous Finance",
  },
  {
    id: "hi-dollar",
    symbol: "hi",
    name: "hi Dollar",
  },
  {
    id: "hierocoin",
    symbol: "bar",
    name: "Hierocoin",
  },
  {
    id: "hifi-gaming-society",
    symbol: "hifi",
    name: "HiFi Gaming Society",
  },
  {
    id: "higgs",
    symbol: "higgs",
    name: "Higgs",
  },
  {
    id: "high-performance-blockchain",
    symbol: "hpb",
    name: "High Performance Blockchain",
  },
  {
    id: "highstreet",
    symbol: "high",
    name: "Highstreet",
  },
  {
    id: "hillstone",
    symbol: "hsf",
    name: "Hillstone",
  },
  {
    id: "himalayan-cat-coin",
    symbol: "hima",
    name: "Himalayan Cat Coin",
  },
  {
    id: "himo-world",
    symbol: "himo",
    name: "Himo World",
  },
  {
    id: "hina-inu",
    symbol: "hina",
    name: "Hina Inu",
  },
  {
    id: "hintchain",
    symbol: "hint",
    name: "Hintchain",
  },
  {
    id: "hippie-inu",
    symbol: "HIPPIE",
    name: "Hippie Inu",
  },
  {
    id: "hippo-coin",
    symbol: "$HIPPO",
    name: "Hippo Coin",
  },
  {
    id: "hippo-token",
    symbol: "hip",
    name: "Hippo Token",
  },
  {
    id: "hirevibes",
    symbol: "hvt",
    name: "HireVibes",
  },
  {
    id: "historia",
    symbol: "hta",
    name: "Historia",
  },
  {
    id: "hitbtc-token",
    symbol: "hit",
    name: "HitBTC Token",
  },
  {
    id: "hitchain",
    symbol: "hit",
    name: "HitChain",
  },
  {
    id: "hitcoin",
    symbol: "htc",
    name: "Hitcoin",
  },
  {
    id: "hithotx",
    symbol: "hitx",
    name: "Hithotx",
  },
  {
    id: "hive",
    symbol: "hive",
    name: "Hive",
  },
  {
    id: "hive_dollar",
    symbol: "HBD",
    name: "Hive Dollar",
  },
  {
    id: "hiveterminal",
    symbol: "hvn",
    name: "Hiveterminal token",
  },
  {
    id: "hiz-finance",
    symbol: "hiz",
    name: "Hiz Finance",
  },
  {
    id: "hk-coin",
    symbol: "hkc",
    name: "HK Coin",
  },
  {
    id: "hland-token",
    symbol: "hland",
    name: "HLand Token",
  },
  {
    id: "hlth-token",
    symbol: "hlth",
    name: "HLTH Token",
  },
  {
    id: "hobbs-networking",
    symbol: "hnw",
    name: "Hobbs Networking",
  },
  {
    id: "hobonickels",
    symbol: "hbn",
    name: "Hobonickels",
  },
  {
    id: "hodlada",
    symbol: "HADA",
    name: "HodlADA",
  },
  {
    id: "hodlbusd",
    symbol: "hbusd",
    name: "HodlBUSD",
  },
  {
    id: "hodlcoin",
    symbol: "hodl",
    name: "HOdlcoin",
  },
  {
    id: "hodler-heroes-nft",
    symbol: "hhnft",
    name: "Hodler Heroes NFT",
  },
  {
    id: "hodl-eth",
    symbol: "HETH",
    name: "Hodl ETH",
  },
  {
    id: "hodl-finance",
    symbol: "hft",
    name: "Hodl Finance",
  },
  {
    id: "hodl-token",
    symbol: "hodl",
    name: "HODL",
  },
  {
    id: "hodltree",
    symbol: "htre",
    name: "HodlTree",
  },
  {
    id: "hodl-vault",
    symbol: "hvlt",
    name: "HODL Vault",
  },
  {
    id: "hodooi-com",
    symbol: "hod",
    name: "HoDooi.com",
  },
  {
    id: "hoff-coin",
    symbol: "hoff",
    name: "Hoff Coin",
  },
  {
    id: "hoge-finance",
    symbol: "hoge",
    name: "Hoge Finance",
  },
  {
    id: "hogl-finance",
    symbol: "hogl",
    name: "HOGL Finance",
  },
  {
    id: "hokage-inu",
    symbol: "HOKAGE",
    name: "Hokage Inu",
  },
  {
    id: "hokkaidu-inu",
    symbol: "hokk",
    name: "Hokkaido Inu",
  },
  {
    id: "holdefi",
    symbol: "hld",
    name: "Holdefi",
  },
  {
    id: "holder-finance",
    symbol: "hfi",
    name: "Holder Finance",
  },
  {
    id: "holdermoon",
    symbol: "hlm",
    name: "HolderMoon",
  },
  {
    id: "holderswap",
    symbol: "hfs",
    name: "HolderSwap",
  },
  {
    id: "holdex-finance",
    symbol: "holdex",
    name: "Holdex Finance",
  },
  {
    id: "holiday-token",
    symbol: "HOL",
    name: "Holiday Token",
  },
  {
    id: "hollaex-token",
    symbol: "xht",
    name: "HollaEx Token",
  },
  {
    id: "hollygold",
    symbol: "hgold",
    name: "HollyGold",
  },
  {
    id: "holographic-doge",
    symbol: "hodo",
    name: "Holographic Doge",
  },
  {
    id: "hololoot",
    symbol: "hol",
    name: "Hololoot",
  },
  {
    id: "holoride",
    symbol: "ride",
    name: "holoride",
  },
  {
    id: "holotoken",
    symbol: "hot",
    name: "Holo",
  },
  {
    id: "holydoge",
    symbol: "hdoge",
    name: "HolyDoge",
  },
  {
    id: "holyheld",
    symbol: "holy",
    name: "Holyheld (OLD)",
  },
  {
    id: "holyheld-2",
    symbol: "move",
    name: "Mover",
  },
  {
    id: "holy-knight",
    symbol: "holy",
    name: "Holy Knight",
  },
  {
    id: "holy-trinity",
    symbol: "holy",
    name: "Holy Trinity",
  },
  {
    id: "home-coin",
    symbol: "home",
    name: "Home Coin",
  },
  {
    id: "homeros",
    symbol: "hmr",
    name: "Homeros",
  },
  {
    id: "homerun",
    symbol: "hmrn",
    name: "Homerun",
  },
  {
    id: "homihelp",
    symbol: "homi",
    name: "HOMIHELP",
  },
  {
    id: "hom-token",
    symbol: "homt",
    name: "HOM Token",
  },
  {
    id: "hondaiscoin",
    symbol: "hndc",
    name: "HondaisCoin",
  },
  {
    id: "honest-mining",
    symbol: "hnst",
    name: "Honest",
  },
  {
    id: "honey",
    symbol: "hny",
    name: "Honey",
  },
  {
    id: "honey-badger",
    symbol: "honeybadger",
    name: "Honey Badger",
  },
  {
    id: "honeybear",
    symbol: "bear",
    name: "HoneyBear",
  },
  {
    id: "honeybee",
    symbol: "bee",
    name: "HoneyBee",
  },
  {
    id: "honeycomb-2",
    symbol: "honey",
    name: "Honeycomb",
  },
  {
    id: "honey-defi",
    symbol: "honey",
    name: "Honey Defi",
  },
  {
    id: "honey-deluxe",
    symbol: "honeyd",
    name: "Honey Deluxe",
  },
  {
    id: "honeyfarm-finance",
    symbol: "honey",
    name: "HoneyFarm Finance",
  },
  {
    id: "honeymoon-token",
    symbol: "moon",
    name: "HoneyMOON Token",
  },
  {
    id: "honeypad",
    symbol: "honey",
    name: "HONEYPAD",
  },
  {
    id: "honey-pot-beekeepers",
    symbol: "honey",
    name: "Honey Pot BeeKeepers",
  },
  {
    id: "honey-token",
    symbol: "sweet",
    name: "Honey Token",
  },
  {
    id: "honk-honk",
    symbol: "honk",
    name: "Honk Honk",
  },
  {
    id: "hono",
    symbol: "Hono",
    name: "Hono",
  },
  {
    id: "honor-token",
    symbol: "honor",
    name: "Honor Token",
  },
  {
    id: "hoodler",
    symbol: "hood",
    name: "Hoodler",
  },
  {
    id: "hoodrat-finance",
    symbol: "hoodrat",
    name: "Hoodrat Finance",
  },
  {
    id: "hoopoe",
    symbol: "hoop",
    name: "Hoopoe",
  },
  {
    id: "hoo-token",
    symbol: "hoo",
    name: "Hoo Token",
  },
  {
    id: "hope-token",
    symbol: "hope",
    name: "Hope Token",
  },
  {
    id: "hoppy",
    symbol: "hop",
    name: "HOPPY",
  },
  {
    id: "hopr",
    symbol: "hopr",
    name: "HOPR",
  },
  {
    id: "hoqu",
    symbol: "hqx",
    name: "HOQU",
  },
  {
    id: "hora",
    symbol: "hora",
    name: "HORA Token",
  },
  {
    id: "hord",
    symbol: "hord",
    name: "Hord",
  },
  {
    id: "horde",
    symbol: "hor",
    name: "Horde",
  },
  {
    id: "horizondollar",
    symbol: "hzd",
    name: "Horizon Dollar",
  },
  {
    id: "horizonland",
    symbol: "hrz",
    name: "Horizonland",
  },
  {
    id: "horizon-protocol",
    symbol: "hzn",
    name: "Horizon Protocol",
  },
  {
    id: "horny-doge",
    symbol: "horny",
    name: "Horny Doge",
  },
  {
    id: "horuspay",
    symbol: "horus",
    name: "HorusPay",
  },
  {
    id: "hospital-coin",
    symbol: "hosp",
    name: "Hospital Coin",
  },
  {
    id: "hotbit-token",
    symbol: "htb",
    name: "Hotbit Token",
  },
  {
    id: "hot-cross",
    symbol: "hotcross",
    name: "Hot Cross",
  },
  {
    id: "hotdoge",
    symbol: "hotdoge",
    name: "HotDoge",
  },
  {
    id: "hot-doge",
    symbol: "hotdoge",
    name: "HotDoge [OLD]",
  },
  {
    id: "hotdollars-token",
    symbol: "hds",
    name: "HotDollars Token",
  },
  {
    id: "hotnow",
    symbol: "hot",
    name: "HotNow",
  },
  {
    id: "hotzilla",
    symbol: "hotzilla",
    name: "HotZilla",
  },
  {
    id: "howdoo",
    symbol: "udoo",
    name: "Hyprr (Howdoo)",
  },
  {
    id: "howl-city",
    symbol: "hwl",
    name: "Howl City",
  },
  {
    id: "howlx",
    symbol: "hwxt",
    name: "Howlx",
  },
  {
    id: "hrd",
    symbol: "hrd",
    name: "Hoard Token",
  },
  {
    id: "hrdcoin",
    symbol: "hrd",
    name: "HRDcoin",
  },
  {
    id: "hrdgcoin",
    symbol: "hrdg",
    name: "HRDGCOIN",
  },
  {
    id: "hshare",
    symbol: "hc",
    name: "HyperCash",
  },
  {
    id: "h-space-metaverse",
    symbol: "hksm",
    name: "H-Space Metaverse",
  },
  {
    id: "htm",
    symbol: "htm",
    name: "HTM",
  },
  {
    id: "htmlcoin",
    symbol: "html",
    name: "HTMLCOIN",
  },
  {
    id: "htmoon",
    symbol: "htmoon",
    name: "HTMoon",
  },
  {
    id: "htmoon-fomo",
    symbol: "HTMoon",
    name: "HTMoon FOMO",
  },
  {
    id: "hubble",
    symbol: "hbb",
    name: "Hubble",
  },
  {
    id: "hubii-network",
    symbol: "hbt",
    name: "Hubii Network",
  },
  {
    id: "hub-token",
    symbol: "hub",
    name: "Hub Token",
  },
  {
    id: "huckleberry",
    symbol: "finn",
    name: "Huckleberry",
  },
  {
    id: "hudi",
    symbol: "hudi",
    name: "Hudi",
  },
  {
    id: "hue",
    symbol: "hue",
    name: "Hue",
  },
  {
    id: "hughug-coin",
    symbol: "hghg",
    name: "HUGHUG",
  },
  {
    id: "hugo-finance",
    symbol: "hugo",
    name: "Hugo Game",
  },
  {
    id: "huh",
    symbol: "huh",
    name: "HUH Token",
  },
  {
    id: "human",
    symbol: "human",
    name: "HUMAN",
  },
  {
    id: "humancoin-2",
    symbol: "hmnc",
    name: "HumanCoin",
  },
  {
    id: "humandao",
    symbol: "hdao",
    name: "humanDAO",
  },
  {
    id: "humaniq",
    symbol: "hmq",
    name: "Humaniq",
  },
  {
    id: "human-protocol",
    symbol: "hmt",
    name: "HUMAN Protocol",
  },
  {
    id: "humans-ai",
    symbol: "heart",
    name: "Humans.ai",
  },
  {
    id: "humanscape",
    symbol: "hum",
    name: "Humanscape",
  },
  {
    id: "hummingbird-egg-token",
    symbol: "hegg",
    name: "Hummingbird Egg Token",
  },
  {
    id: "hummingbird-finance",
    symbol: "hmng",
    name: "Hummingbird Finance",
  },
  {
    id: "hummingbot",
    symbol: "hbot",
    name: "Hummingbot",
  },
  {
    id: "humpback",
    symbol: "hump",
    name: "Whale Loans",
  },
  {
    id: "hundred-finance",
    symbol: "hnd",
    name: "Hundred Finance",
  },
  {
    id: "hungarian-vizsla-inu",
    symbol: "hvi",
    name: "Hungarian Vizsla Inu",
  },
  {
    id: "hunger-doge",
    symbol: "hungrydoge",
    name: "Hunger Doge",
  },
  {
    id: "hunger-token",
    symbol: "hunger",
    name: "Hunger Token",
  },
  {
    id: "hungrybear",
    symbol: "hungry",
    name: "HungryBear",
  },
  {
    id: "hunny-love-token",
    symbol: "love",
    name: "HunnyDAO",
  },
  {
    id: "hunterdoge",
    symbol: "$hd",
    name: "HunterDoge",
  },
  {
    id: "hunt-token",
    symbol: "hunt",
    name: "HUNT",
  },
  {
    id: "huobi-bitcoin-cash",
    symbol: "hbch",
    name: "Huobi Bitcoin Cash",
  },
  {
    id: "huobi-btc",
    symbol: "hbtc",
    name: "Huobi BTC",
  },
  {
    id: "huobi-btc-wormhole",
    symbol: "hbtc",
    name: "Huobi BTC (Wormhole)",
  },
  {
    id: "huobi-ethereum",
    symbol: "heth",
    name: "Huobi Ethereum",
  },
  {
    id: "huobi-fil",
    symbol: "hfil",
    name: "Huobi Fil",
  },
  {
    id: "huobi-litecoin",
    symbol: "hltc",
    name: "Huobi Litecoin",
  },
  {
    id: "huobi-polkadot",
    symbol: "hdot",
    name: "Huobi Polkadot",
  },
  {
    id: "huobi-pool-token",
    symbol: "hpt",
    name: "Huobi Pool Token",
  },
  {
    id: "huobi-token",
    symbol: "ht",
    name: "Huobi Token",
  },
  {
    id: "hupayx",
    symbol: "hpx",
    name: "HUPAYX",
  },
  {
    id: "huplife",
    symbol: "hup",
    name: "HUP.LIFE",
  },
  {
    id: "hurify",
    symbol: "hur",
    name: "Hurify",
  },
  {
    id: "hurricane",
    symbol: "hurricane",
    name: "Hurricane",
  },
  {
    id: "hurricaneswap-token",
    symbol: "hct",
    name: "HurricaneSwap Token",
  },
  {
    id: "husd",
    symbol: "husd",
    name: "HUSD",
  },
  {
    id: "husd-stablecoin-wormhole",
    symbol: "husd",
    name: "HUSD Stablecoin (Wormhole)",
  },
  {
    id: "hush",
    symbol: "hush",
    name: "Hush",
  },
  {
    id: "husky",
    symbol: "husky",
    name: "Husky",
  },
  {
    id: "husky-avax",
    symbol: "husky",
    name: "Husky AVAX",
  },
  {
    id: "husky-inu",
    symbol: "hdog",
    name: "Husky Inu",
  },
  {
    id: "huskyshiba",
    symbol: "hshiba",
    name: "HuskyShiba",
  },
  {
    id: "huskyx",
    symbol: "huskyx",
    name: "HuskyX",
  },
  {
    id: "hut34-entropy",
    symbol: "entrp",
    name: "Hut34 Entropy",
  },
  {
    id: "hxro",
    symbol: "hxro",
    name: "Hxro",
  },
  {
    id: "hxro-wormhole",
    symbol: "hxro",
    name: "Hxro (Wormhole)",
  },
  {
    id: "hybrid-bank-cash",
    symbol: "hbc",
    name: "Hybrid Bank Cash",
  },
  {
    id: "hybrix",
    symbol: "hy",
    name: "Hybrix",
  },
  {
    id: "hycon",
    symbol: "hyc",
    name: "Hycon",
  },
  {
    id: "hydra",
    symbol: "hydra",
    name: "Hydra",
  },
  {
    id: "hydradx",
    symbol: "xhdx",
    name: "HydraDX",
  },
  {
    id: "hydra-token",
    symbol: "hyd",
    name: "Hydraledger",
  },
  {
    id: "hydro",
    symbol: "hydro",
    name: "Hydro",
  },
  {
    id: "hydrogen-token",
    symbol: "hgt",
    name: "Hydrogen Token",
  },
  {
    id: "hydro-h2o",
    symbol: "h2o",
    name: "Hydro H2O",
  },
  {
    id: "hydrolink",
    symbol: "hlink",
    name: "HydroLink",
  },
  {
    id: "hydro-protocol",
    symbol: "hot",
    name: "Hydro Protocol",
  },
  {
    id: "hyfi-token",
    symbol: "hyfi",
    name: "HyFi Token",
  },
  {
    id: "hygenercoin",
    symbol: "hg",
    name: "Hygenercoin",
  },
  {
    id: "hymnode",
    symbol: "hnt",
    name: "Hymnode",
  },
  {
    id: "hyperalloy",
    symbol: "alloy",
    name: "HyperAlloy",
  },
  {
    id: "hyperboost",
    symbol: "hyperboost",
    name: "HyperBoost",
  },
  {
    id: "hyperchain-x",
    symbol: "hyper",
    name: "HyperChain X",
  },
  {
    id: "hyper-credit-network",
    symbol: "hpay",
    name: "Hyper Credit Network",
  },
  {
    id: "hyperdao",
    symbol: "hdao",
    name: "HyperDAO",
  },
  {
    id: "hyper-deflate",
    symbol: "hdfl",
    name: "Hyper Deflate",
  },
  {
    id: "hyperexchange",
    symbol: "hx",
    name: "HyperExchange",
  },
  {
    id: "hyper-finance",
    symbol: "hyfi",
    name: "Hyper Finance",
  },
  {
    id: "hyperion",
    symbol: "hyn",
    name: "Hyperion",
  },
  {
    id: "hyperjump",
    symbol: "jump",
    name: "HyperJump",
  },
  {
    id: "hyper-pay",
    symbol: "hpy",
    name: "Hyper Pay",
  },
  {
    id: "hyperquant",
    symbol: "hqt",
    name: "HyperQuant",
  },
  {
    id: "hypersign-identity-token",
    symbol: "hid",
    name: "Hypersign Identity Token",
  },
  {
    id: "hypersonic-finance",
    symbol: "hypersonic",
    name: "Hypersonic Finance",
  },
  {
    id: "hyperstake",
    symbol: "hyp",
    name: "Element",
  },
  {
    id: "hyper-trust",
    symbol: "hptt",
    name: "Hyper Trust",
  },
  {
    id: "hyperverse",
    symbol: "hvt",
    name: "HyperVerse",
  },
  {
    id: "hyruleswap",
    symbol: "rupee",
    name: "HyruleSwap",
  },
  {
    id: "hyve",
    symbol: "hyve",
    name: "Hyve",
  },
  {
    id: "hzm-coin",
    symbol: "hzm",
    name: "HZM Coin",
  },
  {
    id: "i0coin",
    symbol: "i0c",
    name: "I0Coin",
  },
  {
    id: "i9-coin",
    symbol: "i9c",
    name: "i9 Coin",
  },
  {
    id: "i9x-coin",
    symbol: "i9x",
    name: "i9X Coin",
  },
  {
    id: "iab",
    symbol: "iab",
    name: "IAB",
  },
  {
    id: "iagon",
    symbol: "iag",
    name: "Iagon",
  },
  {
    id: "i-am-vaccinated",
    symbol: "iamvax",
    name: "I Am Vaccinated",
  },
  {
    id: "ibank",
    symbol: "ibank",
    name: "iBank",
  },
  {
    id: "ibaud",
    symbol: "ibaud",
    name: "Iron Bank AUD",
  },
  {
    id: "ibax-network",
    symbol: "ibxc",
    name: "IBAX Network",
  },
  {
    id: "ibetyou",
    symbol: "iby",
    name: "iBetYou",
  },
  {
    id: "ibex",
    symbol: "ibex",
    name: "IBEX",
  },
  {
    id: "ibg-eth",
    symbol: "ibg",
    name: "iBG (ETH)",
  },
  {
    id: "ibg-token",
    symbol: "ibg",
    name: "iBG Token",
  },
  {
    id: "ibithub",
    symbol: "ibh",
    name: "iBitHub",
  },
  {
    id: "ibiza-token",
    symbol: "ibz",
    name: "Ibiza Token",
  },
  {
    id: "ibkrw",
    symbol: "ibkrw",
    name: "Iron Bank KRW",
  },
  {
    id: "ibnb-2",
    symbol: "ibnb",
    name: "iBNB",
  },
  {
    id: "ibuffer-token",
    symbol: "ibfr",
    name: "iBuffer Token",
  },
  {
    id: "icarus-finance",
    symbol: "ica",
    name: "Icarus Finance",
  },
  {
    id: "icarus-network",
    symbol: "ica",
    name: "Icarus Network",
  },
  {
    id: "ic-defi",
    symbol: "icd",
    name: "IC DeFi",
  },
  {
    id: "iceberg",
    symbol: "ICEBERG",
    name: "ICEBERG",
  },
  {
    id: "icebreak-r",
    symbol: "icebrk",
    name: "IceBreak-R",
  },
  {
    id: "icecubes-finance",
    symbol: "icube",
    name: "IceCubes Finance",
  },
  {
    id: "ice-dao",
    symbol: "icy",
    name: "Ice Dao",
  },
  {
    id: "iceflake-finance",
    symbol: "flake",
    name: "IceFlake Finance",
  },
  {
    id: "iceslush-finance",
    symbol: "slush",
    name: "IceSlush Finance",
  },
  {
    id: "ice-token",
    symbol: "ice",
    name: "Popsicle Finance",
  },
  {
    id: "ice-wormhole",
    symbol: "ice",
    name: "Ice (Wormhole)",
  },
  {
    id: "ichi-farm",
    symbol: "ichi",
    name: "ICHI",
  },
  {
    id: "ichigo-inu",
    symbol: "ichigo",
    name: "Ichigo Inu",
  },
  {
    id: "icolcoin",
    symbol: "icol",
    name: "Icolcoin",
  },
  {
    id: "icon",
    symbol: "icx",
    name: "ICON",
  },
  {
    id: "iconiq-lab-token",
    symbol: "icnq",
    name: "Iconic Token",
  },
  {
    id: "icrypto-world",
    symbol: "icw",
    name: "iCrypto World",
  },
  {
    id: "icy-money",
    symbol: "ICY",
    name: "ICY.MONEY",
  },
  {
    id: "idavoll-network",
    symbol: "idv",
    name: "Idavoll DAO",
  },
  {
    id: "ideachain",
    symbol: "ich",
    name: "IdeaChain",
  },
  {
    id: "ideanet-token",
    symbol: "inet",
    name: "Ideanet Token",
  },
  {
    id: "ideaology",
    symbol: "idea",
    name: "Ideaology",
  },
  {
    id: "ideas",
    symbol: "IDS",
    name: "IDEAS",
  },
  {
    id: "idefiyieldprotocol",
    symbol: "idyp",
    name: "iDeFiYieldProtocol",
  },
  {
    id: "idena",
    symbol: "iDNA",
    name: "Idena",
  },
  {
    id: "identity",
    symbol: "idtt",
    name: "Identity",
  },
  {
    id: "idexo-token",
    symbol: "ido",
    name: "Idexo Token",
  },
  {
    id: "idia",
    symbol: "idia",
    name: "Impossible Decentralized Incubator Access",
  },
  {
    id: "idk",
    symbol: "idk",
    name: "IDK",
  },
  {
    id: "idle",
    symbol: "idle",
    name: "IDLE",
  },
  {
    id: "idle-cyber",
    symbol: "afk",
    name: "Idle Cyber",
  },
  {
    id: "idle-dai-risk-adjusted",
    symbol: "idleDAISafe",
    name: "IdleDAI (Risk Adjusted)",
  },
  {
    id: "idle-dai-yield",
    symbol: "idleDAIYield",
    name: "IdleDAI (Best Yield)",
  },
  {
    id: "idle-mystic",
    symbol: "mst",
    name: "Idle Mystic",
  },
  {
    id: "idle-mystic-token",
    symbol: "imt",
    name: "Idle Mystic Token",
  },
  {
    id: "idle-susd-yield",
    symbol: "idleSUSDYield",
    name: "IdleSUSD (Yield)",
  },
  {
    id: "idle-tusd-yield",
    symbol: "idleTUSDYield",
    name: "IdleTUSD (Best Yield)",
  },
  {
    id: "idle-usdc-risk-adjusted",
    symbol: "idleUSDCSafe",
    name: "IdleUSDC (Risk Adjusted)",
  },
  {
    id: "idle-usdc-yield",
    symbol: "idleUSDCYield",
    name: "IdleUSDC (Yield)",
  },
  {
    id: "idle-usdt-risk-adjusted",
    symbol: "IdleUSDTSafe",
    name: "IdleUSDT (Risk Adjusted)",
  },
  {
    id: "idle-usdt-yield",
    symbol: "idleUSDTYield",
    name: "IdleUSDT (Yield)",
  },
  {
    id: "idle-wbtc-yield",
    symbol: "idleWBTCYield",
    name: "IdleWBTC (Best Yield)",
  },
  {
    id: "idl-token",
    symbol: "idl",
    name: "IDL Token",
  },
  {
    id: "idm-token",
    symbol: "idm",
    name: "IDM Token",
  },
  {
    id: "idol",
    symbol: "$IDOL",
    name: "IDOL",
  },
  {
    id: "idoscan",
    symbol: "idoscan",
    name: "Idoscan",
  },
  {
    id: "iethereum",
    symbol: "ieth",
    name: "iEthereum",
  },
  {
    id: "iexec-rlc",
    symbol: "rlc",
    name: "iExec RLC",
  },
  {
    id: "ifarm",
    symbol: "ifarm",
    name: "iFARM",
  },
  {
    id: "ifoswap-token",
    symbol: "h2o",
    name: "IFOSwap Token",
  },
  {
    id: "iftoken",
    symbol: "ift",
    name: "IFToken",
  },
  {
    id: "ifx24",
    symbol: "ifx24",
    name: "IFX24",
  },
  {
    id: "ig-gold",
    symbol: "igg",
    name: "IG Gold",
  },
  {
    id: "ignis",
    symbol: "ignis",
    name: "Ignis",
  },
  {
    id: "ignition",
    symbol: "ic",
    name: "Ignition",
  },
  {
    id: "igtoken",
    symbol: "ig",
    name: "IGToken",
  },
  {
    id: "iht-real-estate-protocol",
    symbol: "iht",
    name: "IHT Real Estate Protocol",
  },
  {
    id: "iinjaz",
    symbol: "ijz",
    name: "iinjaz",
  },
  {
    id: "ijascoin",
    symbol: "ijc",
    name: "IjasCoin",
  },
  {
    id: "ikomp",
    symbol: "ikomp",
    name: "IKOMP",
  },
  {
    id: "ikura-token",
    symbol: "ikura",
    name: "Ikura Token",
  },
  {
    id: "ilayer",
    symbol: "ilayer",
    name: "iLayer",
  },
  {
    id: "ilcoin",
    symbol: "ilc",
    name: "ILCOIN",
  },
  {
    id: "illiquiddao",
    symbol: "jpegs",
    name: "IlliquidDAO",
  },
  {
    id: "illuvium",
    symbol: "ilv",
    name: "Illuvium",
  },
  {
    id: "illuvium-wormhole",
    symbol: "ilv",
    name: "Illuvium (Wormhole)",
  },
  {
    id: "i-love-you",
    symbol: "ily",
    name: "I Love You",
  },
  {
    id: "ilus-coin",
    symbol: "ilus",
    name: "ILUS Coin",
  },
  {
    id: "imagecash",
    symbol: "imgc",
    name: "ImageCash",
  },
  {
    id: "imagecoin",
    symbol: "img",
    name: "ImageCoin",
  },
  {
    id: "imagictoken",
    symbol: "imagic",
    name: "iMagicToken",
  },
  {
    id: "ime-lab",
    symbol: "lime",
    name: "iMe Lab",
  },
  {
    id: "imm",
    symbol: "imm",
    name: "IMM",
  },
  {
    id: "immortaldao",
    symbol: "immo",
    name: "ImmortalDAO",
  },
  {
    id: "immortl",
    symbol: "imrtl",
    name: "Immortl",
  },
  {
    id: "immutable",
    symbol: "dara",
    name: "Immutable",
  },
  {
    id: "immutable-x",
    symbol: "imx",
    name: "Immutable X",
  },
  {
    id: "imo",
    symbol: "imo",
    name: "IMO",
  },
  {
    id: "i-money-crypto",
    symbol: "imc",
    name: "i Money Crypto",
  },
  {
    id: "impactmarket",
    symbol: "pact",
    name: "impactMarket",
  },
  {
    id: "impactx",
    symbol: "impactx",
    name: "ImpactX",
  },
  {
    id: "impactxp",
    symbol: "impactxp",
    name: "ImpactXP",
  },
  {
    id: "imperial-obelisk",
    symbol: "imp",
    name: "Imperial Obelisk",
  },
  {
    id: "imperium-empires",
    symbol: "ime",
    name: "Imperium Empires",
  },
  {
    id: "impermax",
    symbol: "imx",
    name: "Impermax",
  },
  {
    id: "impleum",
    symbol: "impl",
    name: "Impleum",
  },
  {
    id: "impossible-finance",
    symbol: "if",
    name: "Impossible Finance",
  },
  {
    id: "improved-bitcoin",
    symbol: "iBTC",
    name: "Improved Bitcoin",
  },
  {
    id: "impulse-by-fdr",
    symbol: "impulse",
    name: "Impulse By FDR",
  },
  {
    id: "impulseven",
    symbol: "i7",
    name: "ImpulseVen",
  },
  {
    id: "inari",
    symbol: "inari",
    name: "Inari",
  },
  {
    id: "incakoin",
    symbol: "nka",
    name: "IncaKoin",
  },
  {
    id: "incinerate",
    symbol: "FIRE",
    name: "Incinerate",
  },
  {
    id: "inci-token",
    symbol: "INCI",
    name: "Inci Token",
  },
  {
    id: "incognito-2",
    symbol: "prv",
    name: "Incognito",
  },
  {
    id: "incoin",
    symbol: "in",
    name: "InCoin",
  },
  {
    id: "income",
    symbol: "income",
    name: "Income",
  },
  {
    id: "income-island",
    symbol: "income",
    name: "Income Island",
  },
  {
    id: "incooom-genesis",
    symbol: "cooom",
    name: "Incooom Genesis",
  },
  {
    id: "incooom-genesis-gold",
    symbol: "gcooom",
    name: "Incooom Genesis Gold",
  },
  {
    id: "incooom-genesis-psychedelic",
    symbol: "pcooom",
    name: "Incooom Genesis Psychedelic",
  },
  {
    id: "indahash",
    symbol: "idh",
    name: "indaHash",
  },
  {
    id: "index-chain",
    symbol: "IDX",
    name: "Index Chain",
  },
  {
    id: "index-cooperative",
    symbol: "index",
    name: "Index Cooperative",
  },
  {
    id: "index-coop-eth-2x-flexible-leverage-index",
    symbol: "eth2x-fli-p",
    name: "Index Coop - ETH 2x Flexible Leverage Index (Polygon)",
  },
  {
    id: "indexed-finance",
    symbol: "ndx",
    name: "Indexed Finance",
  },
  {
    id: "indodex",
    symbol: "iddx",
    name: "IndoDEX",
  },
  {
    id: "indorse",
    symbol: "ind",
    name: "Indorse",
  },
  {
    id: "infam",
    symbol: "INF",
    name: "Infam",
  },
  {
    id: "infbundle",
    symbol: "inf",
    name: "INFBUNDLE",
  },
  {
    id: "infchain",
    symbol: "inf",
    name: "InfChain",
  },
  {
    id: "infinitecoin",
    symbol: "ifc",
    name: "Infinitecoin",
  },
  {
    id: "infinitee",
    symbol: "inftee",
    name: "Infinitee",
  },
  {
    id: "infinite-ecosystem",
    symbol: "infinity",
    name: "Infinite Ecosystem",
  },
  {
    id: "infinite-launch",
    symbol: "ila",
    name: "Infinite Launch",
  },
  {
    id: "infinite-ricks",
    symbol: "rick",
    name: "Infinite Ricks",
  },
  {
    id: "infinito",
    symbol: "inft",
    name: "Infinito",
  },
  {
    id: "infinitup",
    symbol: "iup",
    name: "InfinitUp",
  },
  {
    id: "infinitx",
    symbol: "inx",
    name: "InfinitX",
  },
  {
    id: "infinity",
    symbol: "it",
    name: "Infinity Token",
  },
  {
    id: "infinitycake",
    symbol: "incake",
    name: "InfinityCake",
  },
  {
    id: "infinitycash",
    symbol: "ifc",
    name: "InfinityCash",
  },
  {
    id: "infinity-economics",
    symbol: "xin",
    name: "Infinity Economics",
  },
  {
    id: "infinity-esaham",
    symbol: "infs",
    name: "Infinity Esaham",
  },
  {
    id: "infinity-eth",
    symbol: "ieth",
    name: "Infinity ETH",
  },
  {
    id: "infinity-finance",
    symbol: "8fi",
    name: "Infinity Finance",
  },
  {
    id: "infinity-game-nft",
    symbol: "ign",
    name: "Infinity Game NFT",
  },
  {
    id: "infinitygaming",
    symbol: "play",
    name: "InfinityGaming",
  },
  {
    id: "infinitypad",
    symbol: "infp",
    name: "InfinityPad",
  },
  {
    id: "infinity-pad",
    symbol: "ipad",
    name: "Infinity Pad",
  },
  {
    id: "infinity-protocol-bsc",
    symbol: "infinity",
    name: "Infinity Protocol BSC",
  },
  {
    id: "infinity-rocket-token",
    symbol: "irt",
    name: "Infinity Rocket Token",
  },
  {
    id: "infinity-skies",
    symbol: "isky",
    name: "Infinity Skies",
  },
  {
    id: "infinium",
    symbol: "inf",
    name: "Infinium",
  },
  {
    id: "inflationcoin",
    symbol: "iflt",
    name: "InflationCoin",
  },
  {
    id: "inflation-hedging-coin",
    symbol: "ihc",
    name: "Inflation Hedging Coin",
  },
  {
    id: "inflex-finance",
    symbol: "inflex",
    name: "Inflex Finance",
  },
  {
    id: "infliv",
    symbol: "ifv",
    name: "INFLIV",
  },
  {
    id: "influencer",
    symbol: "imi",
    name: "Influencer",
  },
  {
    id: "influencer-doge",
    symbol: "idoge",
    name: "Influencer Doge",
  },
  {
    id: "influencer-finance",
    symbol: "influence",
    name: "Influencer Finance",
  },
  {
    id: "influencer-token",
    symbol: "inf",
    name: "INFLUENCER TOKEN",
  },
  {
    id: "influxcoin",
    symbol: "infx",
    name: "Influxcoin",
  },
  {
    id: "infomatix",
    symbol: "info",
    name: "Infomatix",
  },
  {
    id: "info-token",
    symbol: "info",
    name: "Kardia Info",
  },
  {
    id: "inft-platform",
    symbol: "inft",
    name: "iNFT Token",
  },
  {
    id: "injective-protocol",
    symbol: "inj",
    name: "Injective Protocol",
  },
  {
    id: "injeolmi",
    symbol: "wijm",
    name: "Wrapped Injeolmi",
  },
  {
    id: "ink",
    symbol: "ink",
    name: "Ink",
  },
  {
    id: "ink-protocol",
    symbol: "xnk",
    name: "Ink Protocol",
  },
  {
    id: "inkz",
    symbol: "inkz",
    name: "INKz",
  },
  {
    id: "inlock-token",
    symbol: "ilk",
    name: "INLOCK",
  },
  {
    id: "inmax",
    symbol: "inx",
    name: "InMax",
  },
  {
    id: "inmediate",
    symbol: "dit",
    name: "Direct Insurance Token",
  },
  {
    id: "innova",
    symbol: "inn",
    name: "Innova",
  },
  {
    id: "innovaminex",
    symbol: "minx",
    name: "InnovaMinex",
  },
  {
    id: "innovation-blockchain-payment",
    symbol: "IBP",
    name: "Innovation Blockchain Payment",
  },
  {
    id: "innovative-bioresearch",
    symbol: "innbc",
    name: "Innovative Bioresearch Coin",
  },
  {
    id: "innovativebioresearchclassic",
    symbol: "innbcl",
    name: "InnovativeBioresearchClassic",
  },
  {
    id: "ino-coin",
    symbol: "ino",
    name: "Ino Coin",
  },
  {
    id: "inoovi",
    symbol: "ivi",
    name: "Inoovi",
  },
  {
    id: "inpoker",
    symbol: "inp",
    name: "InPoker",
  },
  {
    id: "ins3",
    symbol: "ins3",
    name: "INS3",
  },
  {
    id: "insanecoin",
    symbol: "insn",
    name: "INSaNe",
  },
  {
    id: "insight-protocol",
    symbol: "inx",
    name: "Insight Protocol",
  },
  {
    id: "insights-network",
    symbol: "instar",
    name: "INSTAR",
  },
  {
    id: "instadapp",
    symbol: "inst",
    name: "Instadapp",
  },
  {
    id: "instantxrp",
    symbol: "instantxrp",
    name: "InstantXRP",
  },
  {
    id: "instaraise",
    symbol: "insta",
    name: "Instaraise",
  },
  {
    id: "instinct",
    symbol: "instinct",
    name: "Instinct",
  },
  {
    id: "instrumental-finance",
    symbol: "strm",
    name: "Instrumental Finance",
  },
  {
    id: "insula",
    symbol: "isla",
    name: "Insula",
  },
  {
    id: "insurace",
    symbol: "insur",
    name: "InsurAce",
  },
  {
    id: "insure",
    symbol: "sure",
    name: "inSure DeFi",
  },
  {
    id: "insured-finance",
    symbol: "infi",
    name: "Insured Finance",
  },
  {
    id: "insurepal",
    symbol: "ipl",
    name: "InsurePal",
  },
  {
    id: "insureum",
    symbol: "isr",
    name: "Insureum",
  },
  {
    id: "insurex",
    symbol: "ixt",
    name: "iXledger",
  },
  {
    id: "integral",
    symbol: "itgr",
    name: "Integral",
  },
  {
    id: "integritee",
    symbol: "teer",
    name: "Integritee",
  },
  {
    id: "integrity",
    symbol: "grit",
    name: "Integrity",
  },
  {
    id: "intelligent-investment-chain",
    symbol: "iic",
    name: "Intelligent Investment Chain",
  },
  {
    id: "intelligent-mining",
    symbol: "im",
    name: "Intelligent Mining",
  },
  {
    id: "intelligent-ratio-set",
    symbol: "intratio",
    name: "Intelligent Ratio Set",
  },
  {
    id: "intercoin",
    symbol: "itr",
    name: "Intercoin",
  },
  {
    id: "intercrone",
    symbol: "icr",
    name: "InterCrone",
  },
  {
    id: "interest-bearing-bitcoin",
    symbol: "ibbtc",
    name: "Interest Bearing Bitcoin",
  },
  {
    id: "interest-bearing-bitcoin-wormhole",
    symbol: "ibbtc",
    name: "Interest Bearing Bitcoin (Wormhole)",
  },
  {
    id: "interest-bearing-eth",
    symbol: "ibETH",
    name: "Interest Bearing ETH",
  },
  {
    id: "interfinex-bills",
    symbol: "ifex",
    name: "Interfinex Bills",
  },
  {
    id: "intergalactic-cockroach",
    symbol: "icc",
    name: "Intergalactic Cockroach",
  },
  {
    id: "interlude",
    symbol: "ish",
    name: "Interlude",
  },
  {
    id: "inter-milan-fan-token",
    symbol: "inter",
    name: "Inter Milan Fan Token",
  },
  {
    id: "international-cryptox",
    symbol: "incx",
    name: "International CryptoX",
  },
  {
    id: "internet-computer",
    symbol: "icp",
    name: "Internet Computer",
  },
  {
    id: "internet-node-token",
    symbol: "int",
    name: "INTchain",
  },
  {
    id: "internet-of-energy-network",
    symbol: "ioen",
    name: "Internet of Energy Network",
  },
  {
    id: "internet-of-people",
    symbol: "iop",
    name: "Internet of People",
  },
  {
    id: "internxt",
    symbol: "inxt",
    name: "Internxt",
  },
  {
    id: "intersola",
    symbol: "isola",
    name: "Intersola",
  },
  {
    id: "interstellar-domain-order",
    symbol: "ido",
    name: "Interstellar Domain Order",
  },
  {
    id: "intervalue",
    symbol: "inve",
    name: "InterValue",
  },
  {
    id: "intexcoin",
    symbol: "intx",
    name: "INTEXCOIN",
  },
  {
    id: "intucoin",
    symbol: "intu",
    name: "INTUCoin",
  },
  {
    id: "inubis",
    symbol: "inubis",
    name: "Inubis",
  },
  {
    id: "inu-jump-and-the-temple-of-shiba",
    symbol: "inujump",
    name: "Inu Jump and the Temple of Shiba",
  },
  {
    id: "inu-token",
    symbol: "inu",
    name: "INU Token",
  },
  {
    id: "inu-wars",
    symbol: "IWR",
    name: "Inu Wars",
  },
  {
    id: "inuyasha",
    symbol: "inuyasha",
    name: "Inuyasha",
  },
  {
    id: "inventoryclub",
    symbol: "vnt",
    name: "InventoryClub",
  },
  {
    id: "inverse-ethereum-volatility-index-token",
    symbol: "iethv",
    name: "Inverse Ethereum Volatility Index Token",
  },
  {
    id: "inverse-finance",
    symbol: "inv",
    name: "Inverse Finance",
  },
  {
    id: "investdex",
    symbol: "invest",
    name: "InvestDex",
  },
  {
    id: "investdigital",
    symbol: "idt",
    name: "InvestDigital",
  },
  {
    id: "investel",
    symbol: "investel",
    name: "Investel",
  },
  {
    id: "investin",
    symbol: "ivn",
    name: "Investin",
  },
  {
    id: "invest-like-stakeborg-index",
    symbol: "ilsi",
    name: "Invest Like Stakeborg Index",
  },
  {
    id: "invictus",
    symbol: "in",
    name: "Invictus",
  },
  {
    id: "invictus-capital-token",
    symbol: "icap",
    name: "Invictus Capital Token",
  },
  {
    id: "invictus-hyprion-fund",
    symbol: "ihf",
    name: "Invictus Hyperion Fund",
  },
  {
    id: "invi-token",
    symbol: "invi",
    name: "INVI Token",
  },
  {
    id: "invoice-coin",
    symbol: "ivc",
    name: "Invoice Coin",
  },
  {
    id: "invox-finance",
    symbol: "invox",
    name: "Invox Finance",
  },
  {
    id: "iobusd",
    symbol: "iobusd",
    name: "ioBUSD",
  },
  {
    id: "iocoin",
    symbol: "ioc",
    name: "I/O Coin",
  },
  {
    id: "ioeth",
    symbol: "ioeth",
    name: "ioETH",
  },
  {
    id: "ioex",
    symbol: "ioex",
    name: "ioeX",
  },
  {
    id: "ioi-token",
    symbol: "ioi",
    name: "IOI Token",
  },
  {
    id: "ion",
    symbol: "ion",
    name: "Ion",
  },
  {
    id: "ionchain-token",
    symbol: "ionc",
    name: "IONChain",
  },
  {
    id: "ionomy",
    symbol: "ion",
    name: "Ionomy",
  },
  {
    id: "iostoken",
    symbol: "iost",
    name: "IOST",
  },
  {
    id: "iota",
    symbol: "miota",
    name: "IOTA",
  },
  {
    id: "iot-chain",
    symbol: "itc",
    name: "IoT Chain",
  },
  {
    id: "ioten",
    symbol: "iotn",
    name: "IOTEN",
  },
  {
    id: "iotex",
    symbol: "iotx",
    name: "IoTeX",
  },
  {
    id: "iotexchart",
    symbol: "iotexchart",
    name: "Iotexchart",
  },
  {
    id: "iotexdoge",
    symbol: "iodoge",
    name: "IotexDoge",
  },
  {
    id: "iotexpad",
    symbol: "tex",
    name: "IoTeXPad",
  },
  {
    id: "iotexshiba",
    symbol: "ioshib",
    name: "IoTexShiba",
  },
  {
    id: "iouni",
    symbol: "iouni",
    name: "ioUNI",
  },
  {
    id: "iousdc",
    symbol: "iousdc",
    name: "ioUSDC",
  },
  {
    id: "iousdt",
    symbol: "iousdt",
    name: "ioUSDT",
  },
  {
    id: "iowbtc",
    symbol: "iowbtc",
    name: "ioWBTC",
  },
  {
    id: "iown",
    symbol: "iown",
    name: "iOWN Token",
  },
  {
    id: "ipay",
    symbol: "ipay",
    name: "iPay",
  },
  {
    id: "ipse",
    symbol: "post",
    name: "IPSE",
  },
  {
    id: "ipulse",
    symbol: "pls",
    name: "iPulse",
  },
  {
    id: "ipx-token",
    symbol: "ipx",
    name: "Tachyon Protocol",
  },
  {
    id: "iq-cash",
    symbol: "iq",
    name: "IQ.cash",
  },
  {
    id: "iqcoin",
    symbol: "iqcoin",
    name: "IQCoin",
  },
  {
    id: "iq-coin",
    symbol: "IQG",
    name: "IQ Coin",
  },
  {
    id: "iqeon",
    symbol: "iqn",
    name: "IQeon",
  },
  {
    id: "iqoniq",
    symbol: "iqq",
    name: "Iqoniq",
  },
  {
    id: "iridium",
    symbol: "ird",
    name: "Iridium",
  },
  {
    id: "iris-network",
    symbol: "iris",
    name: "IRISnet",
  },
  {
    id: "iris-token-2",
    symbol: "iris",
    name: "Iris Token",
  },
  {
    id: "iron-bank",
    symbol: "ib",
    name: "Iron Bank",
  },
  {
    id: "iron-bank-chf",
    symbol: "ibchf",
    name: "Iron Bank CHF",
  },
  {
    id: "iron-bank-euro",
    symbol: "ibeur",
    name: "Iron Bank EURO",
  },
  {
    id: "iron-bank-gbp",
    symbol: "ibgbp",
    name: "Iron Bank GBP",
  },
  {
    id: "iron-bank-jpy",
    symbol: "ibjpy",
    name: "Iron Bank JPY",
  },
  {
    id: "iron-bsc",
    symbol: "iron",
    name: "Iron BSC",
  },
  {
    id: "iron-finance",
    symbol: "ice",
    name: "Iron Finance",
  },
  {
    id: "ironman",
    symbol: "ironman",
    name: "Ironman",
  },
  {
    id: "iron-stablecoin",
    symbol: "iron",
    name: "Iron",
  },
  {
    id: "iron-titanium-token",
    symbol: "titan",
    name: "IRON Titanium Token",
  },
  {
    id: "isalcoin",
    symbol: "isal",
    name: "Isalcoin",
  },
  {
    id: "isiklar-coin",
    symbol: "isikc",
    name: "Isiklar Coin",
  },
  {
    id: "island-boyz",
    symbol: "$islbyz",
    name: "Island Boyz",
  },
  {
    id: "island-coin",
    symbol: "isle",
    name: "Island Coin",
  },
  {
    id: "island-doges",
    symbol: "island",
    name: "Island Doges",
  },
  {
    id: "islander",
    symbol: "isa",
    name: "Islander",
  },
  {
    id: "island-inu",
    symbol: "islainu",
    name: "Island Inu",
  },
  {
    id: "islandswap",
    symbol: "isl",
    name: "Islandswap",
  },
  {
    id: "ispolink",
    symbol: "isp",
    name: "Ispolink",
  },
  {
    id: "istanbul-basaksehir-fan-token",
    symbol: "ibfk",
    name: "İstanbul Başakşehir Fan Token",
  },
  {
    id: "istardust",
    symbol: "isdt",
    name: "Istardust",
  },
  {
    id: "italian-lira",
    symbol: "itl",
    name: "Italian Lira",
  },
  {
    id: "italo",
    symbol: "xta",
    name: "Italo",
  },
  {
    id: "itam-cube",
    symbol: "itamcube",
    name: "ITAM CUBE",
  },
  {
    id: "itam-games",
    symbol: "itam",
    name: "ITAM Games",
  },
  {
    id: "itc",
    symbol: "itc",
    name: "ITC",
  },
  {
    id: "iten",
    symbol: "iten",
    name: "ITEN",
  },
  {
    id: "iteration-syndicate",
    symbol: "ITS",
    name: "Iteration Syndicate",
  },
  {
    id: "iticoin",
    symbol: "iti",
    name: "iTicoin",
  },
  {
    id: "itrust-governance-token",
    symbol: "itg",
    name: "iTrust Governance Token",
  },
  {
    id: "itsmyne",
    symbol: "myne",
    name: "ITSMYNE",
  },
  {
    id: "its-not-art",
    symbol: "notart",
    name: "Its Not Art",
  },
  {
    id: "iungo",
    symbol: "ing",
    name: "Iungo",
  },
  {
    id: "iupixel",
    symbol: "PIXEL",
    name: "iUPixel",
  },
  {
    id: "ivogel",
    symbol: "ivg",
    name: "IVOGEL",
  },
  {
    id: "ivory",
    symbol: "ivory",
    name: "Ivory",
  },
  {
    id: "ivy-mining",
    symbol: "ivy",
    name: "Ivy Mining",
  },
  {
    id: "ixcoin",
    symbol: "ixc",
    name: "Ixcoin",
  },
  {
    id: "ixicash",
    symbol: "ixi",
    name: "IxiCash",
  },
  {
    id: "ixinium",
    symbol: "xxa",
    name: "Ixinium",
  },
  {
    id: "ixo",
    symbol: "ixo",
    name: "IXO",
  },
  {
    id: "ix-swap",
    symbol: "ixs",
    name: "IX Swap",
  },
  {
    id: "ix-token",
    symbol: "ixt",
    name: "IX Token",
  },
  {
    id: "ize",
    symbol: "ize",
    name: "IZE",
  },
  {
    id: "izichain",
    symbol: "izi",
    name: "IZIChain",
  },
  {
    id: "izumi-finance",
    symbol: "izi",
    name: "Izumi Finance",
  },
  {
    id: "jackpool-finance",
    symbol: "jfi",
    name: "JackPool.finance",
  },
  {
    id: "jackpot",
    symbol: "777",
    name: "Jackpot",
  },
  {
    id: "jackpot-army",
    symbol: "jackpot",
    name: "Jackpot Army",
  },
  {
    id: "jackpot-token",
    symbol: "jpt",
    name: "Jackpot Token",
  },
  {
    id: "jack-raffle",
    symbol: "jackr",
    name: "Jack Raffle",
  },
  {
    id: "jack-token",
    symbol: "jack",
    name: "Jack Token",
  },
  {
    id: "jacy",
    symbol: "jacy",
    name: "JACY",
  },
  {
    id: "jade-currency",
    symbol: "jade",
    name: "Jade Currency",
  },
  {
    id: "jade-protocol",
    symbol: "jade",
    name: "Jade Protocol",
  },
  {
    id: "jaguarswap",
    symbol: "jaguar",
    name: "JaguarSwap",
  },
  {
    id: "jaiho-crypto",
    symbol: "jaiho",
    name: "Jaiho Crypto",
  },
  {
    id: "jarvis",
    symbol: "jar",
    name: "Jarvis+",
  },
  {
    id: "jarvis-reward-token",
    symbol: "jrt",
    name: "Jarvis Reward Token",
  },
  {
    id: "jarvis-synthetic-british-pound",
    symbol: "jgbp",
    name: "Jarvis Synthetic British Pound",
  },
  {
    id: "jarvis-synthetic-euro",
    symbol: "jeur",
    name: "Jarvis Synthetic Euro",
  },
  {
    id: "jarvis-synthetic-swiss-franc",
    symbol: "jchf",
    name: "Jarvis Synthetic Swiss Franc",
  },
  {
    id: "jasmycoin",
    symbol: "jasmy",
    name: "JasmyCoin",
  },
  {
    id: "javascript-token",
    symbol: "js",
    name: "JavaScript Token",
  },
  {
    id: "jax-network",
    symbol: "wjxn",
    name: "Jax.Network",
  },
  {
    id: "jd-coin",
    symbol: "jdc",
    name: "JD Coin",
  },
  {
    id: "jdi-token",
    symbol: "jdi",
    name: "JDI Token",
  },
  {
    id: "jedstar",
    symbol: "jed",
    name: "JEDSTAR",
  },
  {
    id: "jeet",
    symbol: "jeet",
    name: "JEET",
  },
  {
    id: "jeff-in-space",
    symbol: "jeff",
    name: "Jeff in Space",
  },
  {
    id: "jejudoge",
    symbol: "jejudoge",
    name: "Jejudoge",
  },
  {
    id: "jejudoge-bsc",
    symbol: "jejudoge",
    name: "Jejudoge BSC",
  },
  {
    id: "jem",
    symbol: "jem",
    name: "Jem",
  },
  {
    id: "jenny-metaverse-dao-token",
    symbol: "uJENNY",
    name: "Jenny Metaverse DAO Token",
  },
  {
    id: "jeritex",
    symbol: "jrit",
    name: "JERITEX",
  },
  {
    id: "jet",
    symbol: "jet",
    name: "JET",
  },
  {
    id: "jetcoin",
    symbol: "jet",
    name: "Jetcoin",
  },
  {
    id: "jetoken",
    symbol: "jets",
    name: "JeToken",
  },
  {
    id: "jetswap-token",
    symbol: "wings",
    name: "JetSwap Token",
  },
  {
    id: "jewel",
    symbol: "jwl",
    name: "Jewel",
  },
  {
    id: "jfin-coin",
    symbol: "jfin",
    name: "JFIN Coin",
  },
  {
    id: "jigen",
    symbol: "jig",
    name: "Jigen",
  },
  {
    id: "jigsaw",
    symbol: "jigsaw",
    name: "Jigsaw",
  },
  {
    id: "jigstack",
    symbol: "stak",
    name: "Jigstack",
  },
  {
    id: "jindoge",
    symbol: "jindoge",
    name: "Jindoge",
  },
  {
    id: "jindo-inu",
    symbol: "jind",
    name: "Jindo Inu",
  },
  {
    id: "jk-coin",
    symbol: "jk",
    name: "JK Coin",
  },
  {
    id: "jmtime",
    symbol: "jmt",
    name: "JMTIME",
  },
  {
    id: "jobcash",
    symbol: "jch",
    name: "JobCash",
  },
  {
    id: "jobchain",
    symbol: "job",
    name: "Jobchain",
  },
  {
    id: "jobscoin",
    symbol: "jobs",
    name: "Jobscoin",
  },
  {
    id: "joe",
    symbol: "joe",
    name: "JOE",
  },
  {
    id: "joe-wormhole",
    symbol: "joe",
    name: "JOE (Wormhole)",
  },
  {
    id: "joint",
    symbol: "joint",
    name: "Joint Ventures",
  },
  {
    id: "jointer",
    symbol: "jntr",
    name: "Jointer",
  },
  {
    id: "jojo",
    symbol: "jojo",
    name: "JOJO",
  },
  {
    id: "jojo-inu",
    symbol: "jojo",
    name: "JoJo Inu",
  },
  {
    id: "joke-community",
    symbol: "$joke",
    name: "Joke Community",
  },
  {
    id: "joker-coin",
    symbol: "joker",
    name: "Joker Coin",
  },
  {
    id: "jokermanor-metaverse",
    symbol: "jkt",
    name: "JokerManor Metaverse",
  },
  {
    id: "joker-token",
    symbol: "joker",
    name: "Joker Token",
  },
  {
    id: "jokes-meme",
    symbol: "joke",
    name: "Jokes Meme",
  },
  {
    id: "jomon-shiba",
    symbol: "jshiba",
    name: "Jomon Shiba",
  },
  {
    id: "joorschain",
    symbol: "jic",
    name: "JoorsChain",
  },
  {
    id: "joos-protocol",
    symbol: "joos",
    name: "JOOS Protocol",
  },
  {
    id: "joulecoin",
    symbol: "xjo",
    name: "Joulecoin",
  },
  {
    id: "joys",
    symbol: "joys",
    name: "JOYS",
  },
  {
    id: "joystick-2",
    symbol: "joy",
    name: "Joystick",
  },
  {
    id: "jpaw-inu",
    symbol: "jpaw",
    name: "Jpaw Inu",
  },
  {
    id: "jpegvaultdao",
    symbol: "jpeg",
    name: "JPEGvaultDAO",
  },
  {
    id: "jpool",
    symbol: "jsol",
    name: "JPool",
  },
  {
    id: "jpyc",
    symbol: "jpyc",
    name: "JPY Coin",
  },
  {
    id: "jsb-foundation",
    symbol: "jsb",
    name: "JSB Foundation",
  },
  {
    id: "jswap-finance",
    symbol: "jf",
    name: "Jswap.Finance",
  },
  {
    id: "jubi-token",
    symbol: "jt",
    name: "Jubi Token",
  },
  {
    id: "juggernaut",
    symbol: "jgn",
    name: "Juggernaut",
  },
  {
    id: "juicebox",
    symbol: "jbx",
    name: "Juicebox",
  },
  {
    id: "julien",
    symbol: "julien",
    name: "JULIEN",
  },
  {
    id: "julswap",
    symbol: "juld",
    name: "JulSwap",
  },
  {
    id: "jumbo",
    symbol: "jub",
    name: "Jumbo",
  },
  {
    id: "jumptoken",
    symbol: "JMPT",
    name: "JumpToken",
  },
  {
    id: "junca-cash",
    symbol: "jcc",
    name: "Junca cash",
  },
  {
    id: "jungle",
    symbol: "Jungle",
    name: "Jungle",
  },
  {
    id: "junko-inu",
    symbol: "junkoinu",
    name: "Junko Inu",
  },
  {
    id: "juno-network",
    symbol: "juno",
    name: "JUNO",
  },
  {
    id: "junsonmingchancoin",
    symbol: "jmc",
    name: "Junsonmingchancoin",
  },
  {
    id: "jupiter",
    symbol: "jup",
    name: "Jupiter",
  },
  {
    id: "jur",
    symbol: "jur",
    name: "Jur",
  },
  {
    id: "jurasaur",
    symbol: "jrex",
    name: "Jurasaur",
  },
  {
    id: "just",
    symbol: "jst",
    name: "JUST",
  },
  {
    id: "justbet",
    symbol: "winr",
    name: "JustBet",
  },
  {
    id: "justfarm",
    symbol: "jfm",
    name: "JustFarm",
  },
  {
    id: "justmoney",
    symbol: "jm",
    name: "JustMoney",
  },
  {
    id: "just-stablecoin",
    symbol: "usdj",
    name: "JUST Stablecoin",
  },
  {
    id: "justyours",
    symbol: "just",
    name: "JustYours",
  },
  {
    id: "juventus-fan-token",
    symbol: "juv",
    name: "Juventus Fan Token",
  },
  {
    id: "k21",
    symbol: "k21",
    name: "K21",
  },
  {
    id: "k-9-inu",
    symbol: "k9",
    name: "K-9 Inu",
  },
  {
    id: "kabosu",
    symbol: "kabosu",
    name: "Kabosu",
  },
  {
    id: "kaby-arena",
    symbol: "kaby",
    name: "Kaby Arena",
  },
  {
    id: "kaby-gaming-token",
    symbol: "kgt",
    name: "Kaby Gaming Token",
  },
  {
    id: "kaco-finance",
    symbol: "kac",
    name: "KACO Finance",
  },
  {
    id: "kadena",
    symbol: "kda",
    name: "Kadena",
  },
  {
    id: "kaiba-defi",
    symbol: "kaiba",
    name: "Kaiba Defi",
  },
  {
    id: "kaidht",
    symbol: "kaidht",
    name: "Dog House Token",
  },
  {
    id: "kai-inu",
    symbol: "KAIINU",
    name: "Kai Inu",
  },
  {
    id: "kaiju-worlds",
    symbol: "kaiju",
    name: "Kaiju Worlds",
  },
  {
    id: "kaikeninu",
    symbol: "kaieco",
    name: "KaikenInu",
  },
  {
    id: "kaiken-shiba",
    symbol: "kshib",
    name: "Kaiken Shiba",
  },
  {
    id: "kainet",
    symbol: "kainet",
    name: "KAINET",
  },
  {
    id: "kaizilla",
    symbol: "kaizilla",
    name: "Kaizilla",
  },
  {
    id: "kaka-nft-world",
    symbol: "kaka",
    name: "KAKA NFT World",
  },
  {
    id: "kakashiinuv2",
    symbol: "kki",
    name: "KakashiInuV2",
  },
  {
    id: "kala",
    symbol: "kala",
    name: "Kala",
  },
  {
    id: "kala-finance",
    symbol: "kala",
    name: "Kala Finance",
  },
  {
    id: "kalamint",
    symbol: "kalam",
    name: "Kalamint",
  },
  {
    id: "kalao",
    symbol: "klo",
    name: "Kalao",
  },
  {
    id: "kalata",
    symbol: "kala",
    name: "Kalata Protocol",
  },
  {
    id: "kalera-nft",
    symbol: "kln",
    name: "Kalera NFT",
  },
  {
    id: "kalissa",
    symbol: "kali",
    name: "Kalissa",
  },
  {
    id: "kalkulus",
    symbol: "klks",
    name: "Kalkulus",
  },
  {
    id: "kalmar",
    symbol: "kalm",
    name: "Kalmar",
  },
  {
    id: "kamax-vault-nftx",
    symbol: "kamax",
    name: "KAMAX Vault (NFTX)",
  },
  {
    id: "kambria",
    symbol: "kat",
    name: "Kambria",
  },
  {
    id: "kamiland",
    symbol: "kami",
    name: "Kamiland",
  },
  {
    id: "kampay",
    symbol: "kampay",
    name: "Kampay",
  },
  {
    id: "kan",
    symbol: "kan",
    name: "BitKan",
  },
  {
    id: "kanadecoin",
    symbol: "kndc",
    name: "KanadeCoin",
  },
  {
    id: "kanaloa-network",
    symbol: "kana",
    name: "Kanaloa Network",
  },
  {
    id: "kandy",
    symbol: "kandy",
    name: "KANDY",
  },
  {
    id: "kanga-exchange",
    symbol: "kng",
    name: "Kanga Exchange",
  },
  {
    id: "kangal",
    symbol: "kangal",
    name: "Kangal",
  },
  {
    id: "kangaroo",
    symbol: "gar",
    name: "Kangaroo",
  },
  {
    id: "kangaroocake",
    symbol: "kcake",
    name: "KangarooCake",
  },
  {
    id: "kanpeki",
    symbol: "kae",
    name: "Kanpeki",
  },
  {
    id: "kappa",
    symbol: "kappa",
    name: "Kappa",
  },
  {
    id: "karaganda-token",
    symbol: "krg",
    name: "Karaganda Token",
  },
  {
    id: "karastar-kara",
    symbol: "kara",
    name: "KaraStar",
  },
  {
    id: "karastar-umy",
    symbol: "umy",
    name: "KaraStar UMY",
  },
  {
    id: "karbo",
    symbol: "krb",
    name: "Karbo",
  },
  {
    id: "kardiachain",
    symbol: "kai",
    name: "KardiaChain",
  },
  {
    id: "karencoin",
    symbol: "karen",
    name: "KarenCoin",
  },
  {
    id: "karma-dao",
    symbol: "karma",
    name: "Karma DAO",
  },
  {
    id: "karsiyaka-taraftar-token",
    symbol: "ksk",
    name: "Karsiyaka Taraftar Token",
  },
  {
    id: "kart-racing-league",
    symbol: "krl",
    name: "Kart Racing League",
  },
  {
    id: "karura",
    symbol: "kar",
    name: "Karura",
  },
  {
    id: "kashhcoin",
    symbol: "kashh",
    name: "Kashhcoin",
  },
  {
    id: "kassandra",
    symbol: "kacy",
    name: "Kassandra",
  },
  {
    id: "kasta",
    symbol: "kasta",
    name: "Kasta",
  },
  {
    id: "katalyo",
    symbol: "ktlyo",
    name: "Katalyo",
  },
  {
    id: "katana-finance",
    symbol: "katana",
    name: "Katana Finance",
  },
  {
    id: "katana-inu",
    symbol: "KATA",
    name: "Katana Inu",
  },
  {
    id: "katsumi",
    symbol: "katsumi",
    name: "Katsumi",
  },
  {
    id: "kattana",
    symbol: "ktn",
    name: "Kattana",
  },
  {
    id: "kauri",
    symbol: "kau",
    name: "Kauri",
  },
  {
    id: "kava",
    symbol: "kava",
    name: "Kava",
  },
  {
    id: "kava-lend",
    symbol: "HARD",
    name: "Kava Lend",
  },
  {
    id: "kava-swap",
    symbol: "swp",
    name: "Kava Swap",
  },
  {
    id: "kavian-fantom",
    symbol: "fkavian",
    name: "Kavian Fantom",
  },
  {
    id: "kawaii-islands",
    symbol: "kwt",
    name: "Kawaii Islands",
  },
  {
    id: "kawaiinu",
    symbol: "kawaii",
    name: "kawaiINU",
  },
  {
    id: "kawai-shiba",
    symbol: "kshiba",
    name: "Kawai Shiba",
  },
  {
    id: "kawakami-inu",
    symbol: "kawa",
    name: "Kawakami",
  },
  {
    id: "kayserispor",
    symbol: "kysr",
    name: "Kayserispor",
  },
  {
    id: "kazama-senshi",
    symbol: "kazama",
    name: "Kazama Senshi",
  },
  {
    id: "kbn",
    symbol: "kbn",
    name: "Koban",
  },
  {
    id: "kcash",
    symbol: "kcash",
    name: "Kcash",
  },
  {
    id: "kcc-memepad",
    symbol: "kccm",
    name: "KCC MemePad",
  },
  {
    id: "kccpad",
    symbol: "kccpad",
    name: "KCCPad",
  },
  {
    id: "kdag",
    symbol: "kdag",
    name: "King DAG",
  },
  {
    id: "kebab-token",
    symbol: "kebab",
    name: "Kebab Token",
  },
  {
    id: "keep3rv1",
    symbol: "kp3r",
    name: "Keep3rV1",
  },
  {
    id: "keep3rv1-wormhole",
    symbol: "kp3r",
    name: "Keep3rV1 (Wormhole)",
  },
  {
    id: "keep4r",
    symbol: "kp4r",
    name: "Keep4r",
  },
  {
    id: "keep-network",
    symbol: "keep",
    name: "Keep Network",
  },
  {
    id: "keep-network-wormhole",
    symbol: "keep",
    name: "Keep Network (Wormhole)",
  },
  {
    id: "keeps-coin",
    symbol: "kpc",
    name: "KEEPs Coin",
  },
  {
    id: "keeshond",
    symbol: "$ksh",
    name: "Keeshond",
  },
  {
    id: "keiko",
    symbol: "keiko",
    name: "Keiko",
  },
  {
    id: "keisuke-inu",
    symbol: "$kei",
    name: "Keisuke Inu",
  },
  {
    id: "kekwcoin",
    symbol: "kekw",
    name: "Kekwcoin",
  },
  {
    id: "kelpie-inu",
    symbol: "kelpie",
    name: "Kelpie Inu",
  },
  {
    id: "kelvpn",
    symbol: "kel",
    name: "KelVPN",
  },
  {
    id: "kemacoin",
    symbol: "kema",
    name: "KemaCoin",
  },
  {
    id: "ken-inu",
    symbol: "kenu",
    name: "Ken Inu",
  },
  {
    id: "kenny-token",
    symbol: "kenny",
    name: "Kenny Token",
  },
  {
    id: "kenshi",
    symbol: "kenshi",
    name: "Kenshi",
  },
  {
    id: "kentucky-farm-capital",
    symbol: "KFC",
    name: "Kentucky Farm Capital",
  },
  {
    id: "kephi-gallery",
    symbol: "kphi",
    name: "Kephi Gallery",
  },
  {
    id: "kepler452b",
    symbol: "452b",
    name: "Kepler452b",
  },
  {
    id: "kepler-network",
    symbol: "kmw",
    name: "Kepler Network",
  },
  {
    id: "kerman",
    symbol: "kerman",
    name: "KERMAN",
  },
  {
    id: "kermit",
    symbol: "kermit",
    name: "Kermit Finance",
  },
  {
    id: "kevacoin",
    symbol: "kva",
    name: "Kevacoin",
  },
  {
    id: "key",
    symbol: "key",
    name: "Key",
  },
  {
    id: "keyco",
    symbol: "kec",
    name: "Keyco",
  },
  {
    id: "keyfi",
    symbol: "keyfi",
    name: "KeyFi",
  },
  {
    id: "keysians-network",
    symbol: "ken",
    name: "Keysians Network",
  },
  {
    id: "keys-token",
    symbol: "keys",
    name: "Keys Token",
  },
  {
    id: "keytango",
    symbol: "tango",
    name: "keyTango",
  },
  {
    id: "kfan-token",
    symbol: "kfan",
    name: "KFan Token",
  },
  {
    id: "khalifa-finance",
    symbol: "khalifa",
    name: "Khalifa Finance",
  },
  {
    id: "ki",
    symbol: "xki",
    name: "KI",
  },
  {
    id: "kiba-inu",
    symbol: "kiba",
    name: "Kiba Inu",
  },
  {
    id: "kibastablecapital",
    symbol: "KSC",
    name: "KibaStableCapital",
  },
  {
    id: "kichicoin",
    symbol: "kich",
    name: "KichiCoin",
  },
  {
    id: "kick",
    symbol: "kick",
    name: "Kick",
  },
  {
    id: "kick-io",
    symbol: "kick",
    name: "KICK.IO",
  },
  {
    id: "kickpad",
    symbol: "kpad",
    name: "KickPad",
  },
  {
    id: "kickstarter",
    symbol: "KSR",
    name: "Kickstarter",
  },
  {
    id: "kids-cash",
    symbol: "kash",
    name: "Kids Cash",
  },
  {
    id: "kiki",
    symbol: "kiki",
    name: "Kiki",
  },
  {
    id: "kikswap",
    symbol: "kik",
    name: "Kikswap",
  },
  {
    id: "kiku-inu",
    symbol: "kinu",
    name: "Kiku Inu",
  },
  {
    id: "kilimanjaro",
    symbol: "kili",
    name: "Kilimanjaro",
  },
  {
    id: "killswitch",
    symbol: "ksw",
    name: "KillSwitch",
  },
  {
    id: "killthezero",
    symbol: "KTZ",
    name: "KILLTHEZERO",
  },
  {
    id: "killua-inu",
    symbol: "killua",
    name: "Killua Inu",
  },
  {
    id: "kill-zill",
    symbol: "kz",
    name: "KiLL ZiLL",
  },
  {
    id: "kiloample",
    symbol: "kmpl",
    name: "KiloAmple",
  },
  {
    id: "kilo-shiba-inu",
    symbol: "kshib",
    name: "Kilo Shiba Inu",
  },
  {
    id: "kilt-protocol",
    symbol: "kilt",
    name: "KILT Protocol",
  },
  {
    id: "kimchi-finance",
    symbol: "kimchi",
    name: "KIMCHI.finance",
  },
  {
    id: "kimetsu-inu",
    symbol: "kimetsu",
    name: "Kimetsu Inu",
  },
  {
    id: "kimex",
    symbol: "kmx",
    name: "KIMEX",
  },
  {
    id: "kimjongmoon",
    symbol: "kimj",
    name: "KimJongMoon",
  },
  {
    id: "kin",
    symbol: "kin",
    name: "Kin",
  },
  {
    id: "kind-ads-token",
    symbol: "kind",
    name: "Kind Ads Token",
  },
  {
    id: "kindcow-finance",
    symbol: "kind",
    name: "Kindcow Finance",
  },
  {
    id: "kindness-for-soul",
    symbol: "kfs g",
    name: "Kindness For Soul",
  },
  {
    id: "kineko",
    symbol: "kko",
    name: "Kineko",
  },
  {
    id: "kine-protocol",
    symbol: "kine",
    name: "Kine Protocol",
  },
  {
    id: "king-arthur",
    symbol: "bking",
    name: "King Arthur",
  },
  {
    id: "king-baby-doge",
    symbol: "kbd",
    name: "King Baby Doge",
  },
  {
    id: "king-cardano",
    symbol: "kada",
    name: "King Cardano",
  },
  {
    id: "kingdoge",
    symbol: "kdoge",
    name: "KingDoge",
  },
  {
    id: "kingdoge-token",
    symbol: "kingdoge",
    name: "KingDoge Token",
  },
  {
    id: "kingdom-game-4-0",
    symbol: "kdg",
    name: "Kingdom Game 4.0",
  },
  {
    id: "kingdom-karnage",
    symbol: "kkt",
    name: "Kingdom Karnage",
  },
  {
    id: "kingdomswap",
    symbol: "KS",
    name: "Kingdomswap",
  },
  {
    id: "king-floki",
    symbol: "king",
    name: "King Floki V2",
  },
  {
    id: "king-forever",
    symbol: "KFR",
    name: "KING FOREVER",
  },
  {
    id: "kingfund-finance",
    symbol: "king",
    name: "KingFund Finance",
  },
  {
    id: "king-money",
    symbol: "kim",
    name: "King Money",
  },
  {
    id: "king-of-defi",
    symbol: "kodx",
    name: "King Of Defi",
  },
  {
    id: "king-of-shiba",
    symbol: "kingshiba",
    name: "King of Shiba",
  },
  {
    id: "king-of-the-doge",
    symbol: "kotdoge",
    name: "King Of The Doge",
  },
  {
    id: "kingpad",
    symbol: "crown",
    name: "KingPad",
  },
  {
    id: "king-rooster",
    symbol: "krc",
    name: "King Rooster",
  },
  {
    id: "king-samo",
    symbol: "ksamo",
    name: "King Samo",
  },
  {
    id: "king-shiba",
    symbol: "kingshib",
    name: "King Shiba",
  },
  {
    id: "kingspeed",
    symbol: "ksc",
    name: "KingSpeed",
  },
  {
    id: "king-swap",
    symbol: "$king",
    name: "King Swap",
  },
  {
    id: "kingxchain",
    symbol: "kxc",
    name: "KingXChain",
  },
  {
    id: "kino",
    symbol: "kino",
    name: "Kino",
  },
  {
    id: "kintaman",
    symbol: "kinta",
    name: "Kintaman",
  },
  {
    id: "kintsugi",
    symbol: "kint",
    name: "Kintsugi",
  },
  {
    id: "kiradoge-coin",
    symbol: "KIRADOGE",
    name: "Kiradoge",
  },
  {
    id: "kira-network",
    symbol: "kex",
    name: "KIRA Network",
  },
  {
    id: "kirby-inu",
    symbol: "kirby",
    name: "Kirby Inu",
  },
  {
    id: "kirby-reloaded",
    symbol: "$kirbyreloaded",
    name: "Kirby Reloaded",
  },
  {
    id: "kirobo",
    symbol: "kiro",
    name: "Kirobo",
  },
  {
    id: "kishimoto-inu",
    symbol: "kishimoto",
    name: "Kishimoto Inu",
  },
  {
    id: "kishu-baby",
    symbol: "kishubaby",
    name: "Kishu Baby",
  },
  {
    id: "kishuelon",
    symbol: "KELON",
    name: "Kishuelon",
  },
  {
    id: "kishu-inu",
    symbol: "kishu",
    name: "Kishu Inu",
  },
  {
    id: "kissmymoon",
    symbol: "kissmymoon",
    name: "KissMyMoon",
  },
  {
    id: "kitcoin",
    symbol: "ktc",
    name: "Kitcoin",
  },
  {
    id: "kite-sync",
    symbol: "kite",
    name: "Kite Sync",
  },
  {
    id: "kitsumon",
    symbol: "$kmc",
    name: "Kitsumon",
  },
  {
    id: "kitsune-inu",
    symbol: "kitsu",
    name: "Kitsune Inu",
  },
  {
    id: "kittenfinance",
    symbol: "kif",
    name: "KittenFinance",
  },
  {
    id: "kitty",
    symbol: "kit",
    name: "Kitty",
  },
  {
    id: "kittycake",
    symbol: "kcake",
    name: "KittyCake",
  },
  {
    id: "kittycoin",
    symbol: "kitty",
    name: "Kitty Coin",
  },
  {
    id: "kitty-coin-solana",
    symbol: "kitty",
    name: "Kitty Coin Solana",
  },
  {
    id: "kitty-finance",
    symbol: "kitty",
    name: "Kitty Finance",
  },
  {
    id: "kitty-inu",
    symbol: "kitty",
    name: "Kitty Inu",
  },
  {
    id: "kitty-ninja",
    symbol: "KINJA",
    name: "Kitty Ninja",
  },
  {
    id: "kitty-shiba",
    symbol: "kshiba",
    name: "Kitty Shiba",
  },
  {
    id: "kitty-solana",
    symbol: "kitty",
    name: "Kitty Solana",
  },
  {
    id: "kitty-vault-nftx",
    symbol: "kitty",
    name: "KITTY Vault (NFTX)",
  },
  {
    id: "kiwigo",
    symbol: "kgo",
    name: "Kiwigo",
  },
  {
    id: "kiwi-token",
    symbol: "kiwi",
    name: "KIWI Token",
  },
  {
    id: "klayfi-finance",
    symbol: "kfi",
    name: "KlayFi Finance",
  },
  {
    id: "klaygames",
    symbol: "klayg",
    name: "KlayGames",
  },
  {
    id: "klaymore-stakehouse",
    symbol: "house",
    name: "Klaymore Stakehouse",
  },
  {
    id: "klayswap-protocol",
    symbol: "ksp",
    name: "KlaySwap Protocol",
  },
  {
    id: "klay-token",
    symbol: "klay",
    name: "Klaytn",
  },
  {
    id: "klear-finance",
    symbol: "klear",
    name: "Klear Finance",
  },
  {
    id: "kleekai",
    symbol: "klee",
    name: "KleeKai",
  },
  {
    id: "klend",
    symbol: "klt",
    name: "KLend",
  },
  {
    id: "kleros",
    symbol: "pnk",
    name: "Kleros",
  },
  {
    id: "klever",
    symbol: "klv",
    name: "Klever",
  },
  {
    id: "klever-finance",
    symbol: "kfi",
    name: "Klever Finance",
  },
  {
    id: "klima-dao",
    symbol: "klima",
    name: "Klima DAO",
  },
  {
    id: "klimatas",
    symbol: "kts",
    name: "Klimatas",
  },
  {
    id: "klondike-btc",
    symbol: "kbtc",
    name: "Klondike BTC",
  },
  {
    id: "klondike-finance-v2",
    symbol: "klonx",
    name: "Klondike Finance v2",
  },
  {
    id: "kmushicoin",
    symbol: "ktv",
    name: "Kmushicoin",
  },
  {
    id: "knekted",
    symbol: "knt",
    name: "Knekted",
  },
  {
    id: "knight-war-spirits",
    symbol: "kws",
    name: "Knight War Spirits",
  },
  {
    id: "knit-finance",
    symbol: "kft",
    name: "Knit Finance",
  },
  {
    id: "know-your-developer",
    symbol: "kydc",
    name: "Know Your Developer",
  },
  {
    id: "knoxedge",
    symbol: "knx",
    name: "KnoxEdge",
  },
  {
    id: "knoxfs",
    symbol: "kfx",
    name: "KnoxFS",
  },
  {
    id: "knuckles",
    symbol: "knuckles",
    name: "KNUCKLES",
  },
  {
    id: "koala-token",
    symbol: "mkoala",
    name: "Koala Token",
  },
  {
    id: "kobocoin",
    symbol: "kobo",
    name: "Kobocoin",
  },
  {
    id: "koda-finance",
    symbol: "koda",
    name: "Koda Cryptocurrency",
  },
  {
    id: "kodi",
    symbol: "kodi",
    name: "KODI",
  },
  {
    id: "kodiak",
    symbol: "kodi",
    name: "Kodiak",
  },
  {
    id: "koel-coin",
    symbol: "koel",
    name: "Koel Coin",
  },
  {
    id: "kogecoin",
    symbol: "kogecoin",
    name: "KogeCoin",
  },
  {
    id: "koho-chain",
    symbol: "khc",
    name: "KoHo Chain",
  },
  {
    id: "koinomo",
    symbol: "kmo",
    name: "Koinomo",
  },
  {
    id: "koinon",
    symbol: "koin",
    name: "Koinon",
  },
  {
    id: "koinos",
    symbol: "koin",
    name: "Koinos",
  },
  {
    id: "koji",
    symbol: "koji",
    name: "Koji",
  },
  {
    id: "koka-inu",
    symbol: "INU",
    name: "KOKA INU",
  },
  {
    id: "kok-coin",
    symbol: "kok",
    name: "KOK Coin",
  },
  {
    id: "kokoswap",
    symbol: "koko",
    name: "KokoSwap",
  },
  {
    id: "kolibri-dao",
    symbol: "kdao",
    name: "Kolibri DAO",
  },
  {
    id: "kolibri-usd",
    symbol: "kusd",
    name: "Kolibri USD",
  },
  {
    id: "kollect",
    symbol: "kol",
    name: "Kollect",
  },
  {
    id: "kollector",
    symbol: "kltr",
    name: "Kollector",
  },
  {
    id: "koloop-basic",
    symbol: "kpc",
    name: "Koloop Basic",
  },
  {
    id: "kols-offering-token",
    symbol: "kot",
    name: "Kols Offering Token",
  },
  {
    id: "kombai-inu",
    symbol: "kombai",
    name: "Kombai Inu",
  },
  {
    id: "komet",
    symbol: "komet",
    name: "Komet",
  },
  {
    id: "kommunitas",
    symbol: "kom",
    name: "Kommunitas",
  },
  {
    id: "komodo",
    symbol: "kmd",
    name: "Komodo",
  },
  {
    id: "kompass",
    symbol: "komp",
    name: "Kompass",
  },
  {
    id: "kong-defi",
    symbol: "kong",
    name: "Kong Defi",
  },
  {
    id: "kong-land-alpha-citizenship",
    symbol: "citizen",
    name: "KONG Land Alpha Citizenship",
  },
  {
    id: "kongz-vault-nftx",
    symbol: "kongz",
    name: "KONGZ Vault (NFTX)",
  },
  {
    id: "konjungate",
    symbol: "konj",
    name: "KONJUNGATE",
  },
  {
    id: "konomi-network",
    symbol: "kono",
    name: "Konomi Network",
  },
  {
    id: "koreadoge",
    symbol: "kdoge",
    name: "Koreadoge",
  },
  {
    id: "kori-inu",
    symbol: "kori",
    name: "Kori Inu",
  },
  {
    id: "koromaru",
    symbol: "koromaru",
    name: "KOROMARU",
  },
  {
    id: "korss-chain-launchpad",
    symbol: "kclp",
    name: "Kross Chain Launchpad",
  },
  {
    id: "koto",
    symbol: "koto",
    name: "Koto",
  },
  {
    id: "kounotori",
    symbol: "kto",
    name: "Kounotori",
  },
  {
    id: "kp0rnetwork",
    symbol: "kp0r",
    name: "Kp0rNetwork",
  },
  {
    id: "kper-network",
    symbol: "kper",
    name: "Kper Network",
  },
  {
    id: "kpop-coin",
    symbol: "kpop",
    name: "KPOP Coin",
  },
  {
    id: "kranz-token",
    symbol: "krz",
    name: "Kranz Token",
  },
  {
    id: "krause",
    symbol: "$KRAUSE",
    name: "KRAUSE",
  },
  {
    id: "kred",
    symbol: "kred",
    name: "KRED",
  },
  {
    id: "krida-fans",
    symbol: "krida",
    name: "Krida Fans",
  },
  {
    id: "krios",
    symbol: "GIG",
    name: "Krios",
  },
  {
    id: "kripto-galaxy-battle",
    symbol: "kaba",
    name: "Kripto Galaxy Battle",
  },
  {
    id: "kromatika",
    symbol: "krom",
    name: "Kromatika",
  },
  {
    id: "kronn",
    symbol: "krex",
    name: "Kronn",
  },
  {
    id: "kronobit",
    symbol: "knb",
    name: "Kronobit",
  },
  {
    id: "kronos-dao",
    symbol: "krno",
    name: "Kronos Dao",
  },
  {
    id: "krook-coin",
    symbol: "KROOK",
    name: "Krook Coin",
  },
  {
    id: "k-root-wallet",
    symbol: "kroot",
    name: "K-Root Wallet",
  },
  {
    id: "krown",
    symbol: "krw",
    name: "KROWN",
  },
  {
    id: "kryll",
    symbol: "krl",
    name: "KRYLL",
  },
  {
    id: "kryptobellion",
    symbol: "krypto",
    name: "Kryptobellion",
  },
  {
    id: "krypto-kitty",
    symbol: "kty",
    name: "Krypto Kitty",
  },
  {
    id: "kryptokrona",
    symbol: "xkr",
    name: "Kryptokrona",
  },
  {
    id: "kryptomon",
    symbol: "kmon",
    name: "Kryptomon",
  },
  {
    id: "krypton-token",
    symbol: "kgc",
    name: "Krypton Galaxy Coin",
  },
  {
    id: "kryxivia-game",
    symbol: "kxa",
    name: "Kryxivia Game",
  },
  {
    id: "kryza-exchange",
    symbol: "krx",
    name: "KRYZA Exchange",
  },
  {
    id: "kryza-network",
    symbol: "krn",
    name: "KRYZA Network",
  },
  {
    id: "ksm-starter",
    symbol: "kst",
    name: "KSM Starter",
  },
  {
    id: "kstarcoin",
    symbol: "ksc",
    name: "KStarCoin",
  },
  {
    id: "k-tune",
    symbol: "ktt",
    name: "K-Tune",
  },
  {
    id: "kuaitoken",
    symbol: "kt",
    name: "Kuai Token",
  },
  {
    id: "kubecoin",
    symbol: "kube",
    name: "KubeCoin",
  },
  {
    id: "kuber-finance",
    symbol: "kft",
    name: "Kuber Finance",
  },
  {
    id: "kubic",
    symbol: "kubic",
    name: "Kubic",
  },
  {
    id: "kucoin-shares",
    symbol: "kcs",
    name: "KuCoin Token",
  },
  {
    id: "kudoge",
    symbol: "kudo",
    name: "KuDoge",
  },
  {
    id: "kuende",
    symbol: "kue",
    name: "Kuende",
  },
  {
    id: "kujira",
    symbol: "kuji",
    name: "Kujira",
  },
  {
    id: "kukachu",
    symbol: "kuka",
    name: "Kukachu",
  },
  {
    id: "kukafe-finance",
    symbol: "kafe",
    name: "Kafe Finance [Moonriver]",
  },
  {
    id: "kuky-star",
    symbol: "kuky",
    name: "Kuky Star",
  },
  {
    id: "kult-of-kek",
    symbol: "kok",
    name: "Kult of Kek",
  },
  {
    id: "kulupu",
    symbol: "klp",
    name: "Kulupu",
  },
  {
    id: "kuma-inu",
    symbol: "kuma",
    name: "Kuma Inu",
  },
  {
    id: "kunaiinu",
    symbol: "kunai",
    name: "KunaiInu",
  },
  {
    id: "kunoichix",
    symbol: "kuno",
    name: "KunoichiX",
  },
  {
    id: "kurai-inu",
    symbol: "kurai",
    name: "Kurai Inu",
  },
  {
    id: "kurai-metaverse",
    symbol: "kurai",
    name: "Kurai MetaVerse",
  },
  {
    id: "kuramainu",
    symbol: "kunu",
    name: "KuramaInu",
  },
  {
    id: "kurobi",
    symbol: "kuro",
    name: "Kurobi",
  },
  {
    id: "kuro-shiba",
    symbol: "kuro",
    name: "Kuro Shiba",
  },
  {
    id: "kurrent",
    symbol: "kurt",
    name: "Kurrent",
  },
  {
    id: "kusama",
    symbol: "ksm",
    name: "Kusama",
  },
  {
    id: "kusd-t",
    symbol: "kusd-t",
    name: "KUSD-T",
  },
  {
    id: "kush-finance",
    symbol: "kseed",
    name: "Kush Finance",
  },
  {
    id: "kuswap",
    symbol: "kus",
    name: "KuSwap",
  },
  {
    id: "kutikirise",
    symbol: "ktr",
    name: "KuTikiRise",
  },
  {
    id: "kuverit",
    symbol: "kuv",
    name: "Kuverit",
  },
  {
    id: "kwikswap-protocol",
    symbol: "kwik",
    name: "KwikSwap Protocol",
  },
  {
    id: "kxusd",
    symbol: "kxusd",
    name: "kxUSD",
  },
  {
    id: "kyanite",
    symbol: "kyan",
    name: "Kyanite",
  },
  {
    id: "kyber-network",
    symbol: "kncl",
    name: "Kyber Network Crystal Legacy",
  },
  {
    id: "kyber-network-crystal",
    symbol: "knc",
    name: "Kyber Network Crystal",
  },
  {
    id: "kylin-network",
    symbol: "kyl",
    name: "Kylin Network",
  },
  {
    id: "kyrrex",
    symbol: "krrx",
    name: "Kyrrex",
  },
  {
    id: "kzcash",
    symbol: "kzc",
    name: "Kzcash",
  },
  {
    id: "label-foundation",
    symbol: "lbl",
    name: "LABEL Foundation",
  },
  {
    id: "labracoin",
    symbol: "labra",
    name: "LabraCoin",
  },
  {
    id: "labs-group",
    symbol: "labs",
    name: "LABS Group",
  },
  {
    id: "la-casa-de-papel",
    symbol: "lcdp",
    name: "La Casa De Papel",
  },
  {
    id: "lacucina",
    symbol: "lac",
    name: "LaCucina",
  },
  {
    id: "la-doge-de-papel",
    symbol: "lddp",
    name: "La Doge de Papel",
  },
  {
    id: "ladyminers",
    symbol: "yttrium",
    name: "Ladyminers",
  },
  {
    id: "lady-uni",
    symbol: "luni",
    name: "Lady Uni",
  },
  {
    id: "ladz",
    symbol: "ladz",
    name: "LADZ",
  },
  {
    id: "laikacoin",
    symbol: "laika",
    name: "LaikaCoin",
  },
  {
    id: "laika-protocol",
    symbol: "laika",
    name: "Laika Protocol",
  },
  {
    id: "lambda",
    symbol: "lamb",
    name: "Lambda",
  },
  {
    id: "lamden",
    symbol: "tau",
    name: "Lamden",
  },
  {
    id: "lanacoin",
    symbol: "lana",
    name: "LanaCoin",
  },
  {
    id: "lance-coin",
    symbol: "lce",
    name: "Lance Coin",
  },
  {
    id: "lanceria",
    symbol: "lanc",
    name: "Lanceria",
  },
  {
    id: "landi-token",
    symbol: "landi",
    name: "LANDI Token",
  },
  {
    id: "land-of-realm",
    symbol: "lor",
    name: "Land of Realm",
  },
  {
    id: "land-of-strife",
    symbol: "los",
    name: "Land of Strife",
  },
  {
    id: "landorc",
    symbol: "lorc",
    name: "LandOrc",
  },
  {
    id: "landshare",
    symbol: "land",
    name: "Landshare",
  },
  {
    id: "la-peseta",
    symbol: "pta",
    name: "La Peseta",
  },
  {
    id: "lapis",
    symbol: "lps",
    name: "Lapis",
  },
  {
    id: "laqira-protocol",
    symbol: "lqr",
    name: "Laqira Protocol",
  },
  {
    id: "largo-coin",
    symbol: "lrg",
    name: "Largo Coin",
  },
  {
    id: "larix",
    symbol: "larix",
    name: "Larix",
  },
  {
    id: "lasereyes",
    symbol: "lsr",
    name: "LaserEyes",
  },
  {
    id: "laser-eyes",
    symbol: "lasereyes",
    name: "Laser Eyes",
  },
  {
    id: "lassocoin",
    symbol: "lasso",
    name: "LassoCoin",
  },
  {
    id: "latamcash",
    symbol: "lmch",
    name: "Latamcash",
  },
  {
    id: "latiumx",
    symbol: "latx",
    name: "LatiumX",
  },
  {
    id: "latoken",
    symbol: "la",
    name: "LATOKEN",
  },
  {
    id: "latteswap",
    symbol: "latte",
    name: "LatteSwap",
  },
  {
    id: "lattice-token",
    symbol: "ltx",
    name: "Lattice Token",
  },
  {
    id: "launchmynft",
    symbol: "mynft",
    name: "LaunchMyNFT",
  },
  {
    id: "launchpool",
    symbol: "lpool",
    name: "Launchpool",
  },
  {
    id: "launchwall",
    symbol: "wall",
    name: "LaunchWall",
  },
  {
    id: "launchx",
    symbol: "lnchx",
    name: "LaunchX",
  },
  {
    id: "launchzone",
    symbol: "lz",
    name: "LaunchZone",
  },
  {
    id: "lavacake-finance",
    symbol: "lava",
    name: "LavaCake Finance",
  },
  {
    id: "lavaswap",
    symbol: "lava",
    name: "Lavaswap",
  },
  {
    id: "law",
    symbol: "law",
    name: "LAW",
  },
  {
    id: "layer-1-quality-index",
    symbol: "l1q",
    name: "Layer 1 Quality Index",
  },
  {
    id: "lazio-fan-token",
    symbol: "lazio",
    name: "Lazio Fan Token",
  },
  {
    id: "lazydoge",
    symbol: "lazydoge",
    name: "LazyDoge",
  },
  {
    id: "lazy-horse-race-club",
    symbol: "LHRC",
    name: "Lazy Horse Race Club",
  },
  {
    id: "lazymint",
    symbol: "lazy",
    name: "LazyMint",
  },
  {
    id: "lazy-shiba",
    symbol: "lazyshiba",
    name: "Lazy Shiba",
  },
  {
    id: "lbk",
    symbol: "lbk",
    name: "LBK",
  },
  {
    id: "lbrl",
    symbol: "lbrl",
    name: "LBRL",
  },
  {
    id: "lbry-credits",
    symbol: "lbc",
    name: "LBRY Credits",
  },
  {
    id: "lcg",
    symbol: "lcg",
    name: "LCG",
  },
  {
    id: "lcms",
    symbol: "lcms",
    name: "LCMS",
  },
  {
    id: "lcx",
    symbol: "lcx",
    name: "LCX",
  },
  {
    id: "lead-token",
    symbol: "lead",
    name: "Lead Token",
  },
  {
    id: "leafcoin",
    symbol: "leaf",
    name: "Leafcoin",
  },
  {
    id: "leafty",
    symbol: "leafty",
    name: "Leafty",
  },
  {
    id: "leaguedao-governance-token",
    symbol: "leag",
    name: "LeagueDAO Governance Token",
  },
  {
    id: "league-of-ancients",
    symbol: "loa",
    name: "League of Ancients",
  },
  {
    id: "league-of-kingdoms",
    symbol: "loka",
    name: "League of Kingdoms",
  },
  {
    id: "league-of-zodiacs",
    symbol: "loz",
    name: "League of Zodiacs",
  },
  {
    id: "lean",
    symbol: "lean",
    name: "Lean",
  },
  {
    id: "leasehold",
    symbol: "lsh",
    name: "Leasehold",
  },
  {
    id: "leash",
    symbol: "leash",
    name: "Doge Killer",
  },
  {
    id: "le-caliente",
    symbol: "lecliente",
    name: "LE CALIENTE",
  },
  {
    id: "ledgerscore",
    symbol: "led",
    name: "LedgerScore",
  },
  {
    id: "ledgis",
    symbol: "led",
    name: "Ledgis",
  },
  {
    id: "ledgity",
    symbol: "lty",
    name: "Ledgity",
  },
  {
    id: "leeds-united-fan-token",
    symbol: "lufc",
    name: "Leeds United Fan Token",
  },
  {
    id: "leek-token",
    symbol: "leek",
    name: "Leek Token",
  },
  {
    id: "legal-block",
    symbol: "lbk",
    name: "Legal Block",
  },
  {
    id: "legend-of-fantasy-war",
    symbol: "lfw",
    name: "Legend of Fantasy War",
  },
  {
    id: "legends",
    symbol: "legends",
    name: "Legends",
  },
  {
    id: "legends-room",
    symbol: "more",
    name: "More Coin",
  },
  {
    id: "legia-warsaw-fan-token",
    symbol: "LEG",
    name: "Legia Warsaw Fan Token",
  },
  {
    id: "legion-network",
    symbol: "lgx",
    name: "Legion Network",
  },
  {
    id: "legolas-exchange",
    symbol: "lgo",
    name: "LGO Token",
  },
  {
    id: "lekan",
    symbol: "lrk",
    name: "Lekan",
  },
  {
    id: "lelouch-lamperouge",
    symbol: "zero",
    name: "Lelouch Lamperouge",
  },
  {
    id: "lemochain",
    symbol: "lemo",
    name: "LemoChain",
  },
  {
    id: "lemon",
    symbol: "lmn",
    name: "Lemon",
  },
  {
    id: "lemon-bet",
    symbol: "lbet",
    name: "Lemon Bet",
  },
  {
    id: "lemond",
    symbol: "lemd",
    name: "Lemond",
  },
  {
    id: "lemonn-token",
    symbol: "lmn",
    name: "Lemonn",
  },
  {
    id: "lenda",
    symbol: "lenda",
    name: "Lenda",
  },
  {
    id: "lendefi",
    symbol: "ldfi",
    name: "Lendefi",
  },
  {
    id: "lendhub",
    symbol: "lhb",
    name: "Lendhub",
  },
  {
    id: "lendingblock",
    symbol: "lnd",
    name: "Lendingblock",
  },
  {
    id: "lendroid-support-token",
    symbol: "lst",
    name: "Lendroid Support Token",
  },
  {
    id: "leo",
    symbol: "leo",
    name: "Leo",
  },
  {
    id: "leonicorn-swap",
    symbol: "leos",
    name: "Leonicorn Swap",
  },
  {
    id: "leonidas-token",
    symbol: "leonidas",
    name: "Leonidas Token",
  },
  {
    id: "leopard",
    symbol: "leopard",
    name: "Leopard",
  },
  {
    id: "leo-token",
    symbol: "leo",
    name: "LEO Token",
  },
  {
    id: "lepasa",
    symbol: "lepa",
    name: "Lepasa",
  },
  {
    id: "lepricon",
    symbol: "l3p",
    name: "Lepricon",
  },
  {
    id: "less-network",
    symbol: "less",
    name: "Less Network",
  },
  {
    id: "lethean",
    symbol: "lthn",
    name: "Lethean",
  },
  {
    id: "letitride",
    symbol: "lir",
    name: "LetItRide",
  },
  {
    id: "let-s-go-brandon",
    symbol: "lgb",
    name: "Let's Go Brandon",
  },
  {
    id: "lets-go-brandon-coin",
    symbol: "$fjb",
    name: "Let's Go Brandon Coin",
  },
  {
    id: "lets-go-farming",
    symbol: "LGF",
    name: "Let's Go Farming",
  },
  {
    id: "levante-ud-fan-token",
    symbol: "lev",
    name: "Levante U.D. Fan Token",
  },
  {
    id: "level01-derivatives-exchange",
    symbol: "lvx",
    name: "LVX",
  },
  {
    id: "levelapp",
    symbol: "lvl",
    name: "LevelApp",
  },
  {
    id: "levelg",
    symbol: "levelg",
    name: "LEVELG",
  },
  {
    id: "level-up",
    symbol: "lvlup",
    name: "Level Up",
  },
  {
    id: "levelup-gaming",
    symbol: "lvlup",
    name: "LevelUp Gaming",
  },
  {
    id: "leven",
    symbol: "leven",
    name: "Leven",
  },
  {
    id: "leverj-gluon",
    symbol: "l2",
    name: "Leverj Gluon",
  },
  {
    id: "lever-network",
    symbol: "lev",
    name: "Lever Network",
  },
  {
    id: "levin",
    symbol: "levin",
    name: "Levin",
  },
  {
    id: "levolution",
    symbol: "levl",
    name: "Levolution",
  },
  {
    id: "lexit-2",
    symbol: "lexi",
    name: "LEXIT",
  },
  {
    id: "lgcy-network",
    symbol: "lgcy",
    name: "LGCY Network",
  },
  {
    id: "lhcoin",
    symbol: "lhcoin",
    name: "LHCoin",
  },
  {
    id: "libartysharetoken",
    symbol: "lst",
    name: "Libartysharetoken",
  },
  {
    id: "libera",
    symbol: "lib",
    name: "Libera",
  },
  {
    id: "liber-coin",
    symbol: "lbr",
    name: "LIBER COIN",
  },
  {
    id: "libertas-token",
    symbol: "libertas",
    name: "LIBERTAS",
  },
  {
    id: "libfx",
    symbol: "libfx",
    name: "Libfx",
  },
  {
    id: "libonomy",
    symbol: "lby",
    name: "Libonomy",
  },
  {
    id: "libra-2",
    symbol: "lc",
    name: "Libra",
  },
  {
    id: "libra-credit",
    symbol: "lba",
    name: "LibraToken",
  },
  {
    id: "libre-defi",
    symbol: "libre",
    name: "Libre DeFi",
  },
  {
    id: "librefreelencer",
    symbol: "libref",
    name: "LibreFreelencer",
  },
  {
    id: "librium-tech",
    symbol: "lib",
    name: "Librium Tech",
  },
  {
    id: "lichang",
    symbol: "lc",
    name: "Lichang",
  },
  {
    id: "lido-dao",
    symbol: "ldo",
    name: "Lido DAO",
  },
  {
    id: "lido-dao-wormhole",
    symbol: "ldo",
    name: "Lido DAO (Wormhole)",
  },
  {
    id: "lido-staked-ether-wormhole",
    symbol: "steth",
    name: "Lido Staked Ether (Wormhole)",
  },
  {
    id: "lido-staked-sol",
    symbol: "stsol",
    name: "Lido Staked SOL",
  },
  {
    id: "lien",
    symbol: "lien",
    name: "Lien",
  },
  {
    id: "life-crypto",
    symbol: "life",
    name: "Life Crypto",
  },
  {
    id: "life-dao",
    symbol: "lf",
    name: "Life DAO",
  },
  {
    id: "life-token-v2",
    symbol: "ltnv2",
    name: "Life Token v2",
  },
  {
    id: "lightbeam-courier-coin",
    symbol: "lbcc",
    name: "Lightbeam Courier Coin",
  },
  {
    id: "lightcoin",
    symbol: "lhc",
    name: "Lightcoin",
  },
  {
    id: "light-defi",
    symbol: "light",
    name: "Light Defi",
  },
  {
    id: "lightening-cash",
    symbol: "lic",
    name: "Lightening Cash",
  },
  {
    id: "lightforge",
    symbol: "ltfg",
    name: "Lightforge",
  },
  {
    id: "lightning-bitcoin",
    symbol: "lbtc",
    name: "Lightning Bitcoin",
  },
  {
    id: "lightningcoin",
    symbol: "lc",
    name: "LightningCoin",
  },
  {
    id: "lightning-protocol",
    symbol: "light",
    name: "Lightning Protocol",
  },
  {
    id: "lightpaycoin",
    symbol: "lpc",
    name: "LightPayCoin",
  },
  {
    id: "lightstreams",
    symbol: "pht",
    name: "Lightstreams Photon",
  },
  {
    id: "light-year",
    symbol: "lc",
    name: "Light Year",
  },
  {
    id: "lightyears",
    symbol: "year",
    name: "Lightyears",
  },
  {
    id: "likecoin",
    symbol: "like",
    name: "LikeCoin",
  },
  {
    id: "lildoge",
    symbol: "lildoge",
    name: "LilDoge",
  },
  {
    id: "lil-doge-floki-token",
    symbol: "ldf",
    name: "Lil Doge Floki Token",
  },
  {
    id: "lil-floki",
    symbol: "lilfloki",
    name: "Lil Floki",
  },
  {
    id: "lilflokiceo",
    symbol: "lilflokiceo",
    name: "LilFlokiCeo",
  },
  {
    id: "lillion",
    symbol: "lil",
    name: "Lillion",
  },
  {
    id: "limbo-token",
    symbol: "lnfs",
    name: "Limbo Token",
  },
  {
    id: "limestone-network",
    symbol: "limex",
    name: "Limestone Network",
  },
  {
    id: "limeswap",
    symbol: "lime",
    name: "LimeSwap",
  },
  {
    id: "limited-usd",
    symbol: "lusd",
    name: "Limited USD",
  },
  {
    id: "limitless-vip",
    symbol: "vip",
    name: "Limitless VIP",
  },
  {
    id: "limitswap",
    symbol: "limit",
    name: "LimitSwap",
  },
  {
    id: "limocoin-swap",
    symbol: "lmcswap",
    name: "Limocoin Swap",
  },
  {
    id: "limon-group",
    symbol: "limon",
    name: "Limon Group",
  },
  {
    id: "lina",
    symbol: "lina",
    name: "LINA",
  },
  {
    id: "linda",
    symbol: "mrx",
    name: "Metrix Coin",
  },
  {
    id: "linear",
    symbol: "lina",
    name: "Linear",
  },
  {
    id: "linear-bsc",
    symbol: "lina",
    name: "Linear (BSC)",
  },
  {
    id: "linfinity",
    symbol: "lfc",
    name: "Linfinity",
  },
  {
    id: "linix",
    symbol: "lnx",
    name: "LNX Protocol",
  },
  {
    id: "link",
    symbol: "ln",
    name: "LINK",
  },
  {
    id: "linka",
    symbol: "linka",
    name: "LINKA",
  },
  {
    id: "linkart",
    symbol: "lar",
    name: "LinkArt",
  },
  {
    id: "linkbased",
    symbol: "lbd",
    name: "LinkBased",
  },
  {
    id: "linkcoin-token",
    symbol: "lkn",
    name: "LinkCoin Token",
  },
  {
    id: "linker-coin",
    symbol: "lnc",
    name: "Linker Coin",
  },
  {
    id: "linketh-2x-token",
    symbol: "linkethmoon",
    name: "LINKETH 2x Token",
  },
  {
    id: "link-eth-growth-alpha-set",
    symbol: "lega",
    name: "LINK/ETH Growth Alpha Set",
  },
  {
    id: "link-eth-rsi-ratio-trading-set",
    symbol: "linkethrsi",
    name: "LINK/ETH RSI Ratio Trading Set",
  },
  {
    id: "linkeye",
    symbol: "let",
    name: "Linkeye",
  },
  {
    id: "linkflow",
    symbol: "lf",
    name: "Linkflow",
  },
  {
    id: "linkka",
    symbol: "ika",
    name: "Linkka",
  },
  {
    id: "link-machine-learning",
    symbol: "lml",
    name: "Link Machine Learning",
  },
  {
    id: "link-platform",
    symbol: "lnk",
    name: "Link Platform",
  },
  {
    id: "linkpool",
    symbol: "lpl",
    name: "LinkPool",
  },
  {
    id: "links",
    symbol: "links",
    name: "Links",
  },
  {
    id: "linksync",
    symbol: "sync",
    name: "LinkSync",
  },
  {
    id: "linktoken",
    symbol: "ltk",
    name: "LinkToken",
  },
  {
    id: "linspirit",
    symbol: "linspirit",
    name: "linSpirit",
  },
  {
    id: "l-inu",
    symbol: "l",
    name: "L inu",
  },
  {
    id: "lionisland-inu",
    symbol: "lionisland",
    name: "LionIsland Inu",
  },
  {
    id: "lion-token",
    symbol: "lion",
    name: "Lion Token",
  },
  {
    id: "liq-protocol",
    symbol: "liq",
    name: "LIQ Protocol",
  },
  {
    id: "liquidchain",
    symbol: "xlc",
    name: "Liquidchain",
  },
  {
    id: "liquid-collectibles",
    symbol: "lico",
    name: "Liquid Collectibles",
  },
  {
    id: "liquid-defi",
    symbol: "liq",
    name: "Liquid DeFi",
  },
  {
    id: "liquiddriver",
    symbol: "lqdr",
    name: "LiquidDriver",
  },
  {
    id: "liquid-icp",
    symbol: "licp",
    name: "Liquid ICP",
  },
  {
    id: "liquidifty",
    symbol: "lqt",
    name: "Liquidifty",
  },
  {
    id: "liquidify",
    symbol: "lat",
    name: "Liquidify",
  },
  {
    id: "liquidity-bot-token",
    symbol: "liq",
    name: "Liquidity Bot Token",
  },
  {
    id: "liquidity-dividends-protocol",
    symbol: "LID",
    name: "Liquidity Dividends Protocol",
  },
  {
    id: "liquidity-network",
    symbol: "lqd",
    name: "Liquidity Network",
  },
  {
    id: "liquidus",
    symbol: "liq",
    name: "Liquidus",
  },
  {
    id: "liquity",
    symbol: "lqty",
    name: "Liquity",
  },
  {
    id: "liquity-usd",
    symbol: "lusd",
    name: "Liquity USD",
  },
  {
    id: "lisk",
    symbol: "lsk",
    name: "Lisk",
  },
  {
    id: "lit",
    symbol: "LIT",
    name: "LIT",
  },
  {
    id: "litebar",
    symbol: "ltb",
    name: "LiteBar",
  },
  {
    id: "litebitcoin",
    symbol: "lbtc",
    name: "LiteBitcoin",
  },
  {
    id: "litecash",
    symbol: "cash",
    name: "Litecash",
  },
  {
    id: "litecoin",
    symbol: "ltc",
    name: "Litecoin",
  },
  {
    id: "litecoin-bep2",
    symbol: "ltcb",
    name: "Litecoin BEP2",
  },
  {
    id: "litecoin-cash",
    symbol: "lcc",
    name: "Litecoin Cash",
  },
  {
    id: "litecoin-finance",
    symbol: "ltfn",
    name: "Litecoin Finance",
  },
  {
    id: "litecoin-plus",
    symbol: "lcp",
    name: "Litecoin Plus",
  },
  {
    id: "litecoin-sv",
    symbol: "lsv",
    name: "Litecoin SV",
  },
  {
    id: "litecoin-token",
    symbol: "ltk",
    name: "Litecoin Token",
  },
  {
    id: "litecoin-ultra",
    symbol: "ltcu",
    name: "LiteCoin Ultra",
  },
  {
    id: "litecoinz",
    symbol: "ltz",
    name: "LitecoinZ",
  },
  {
    id: "litedoge",
    symbol: "ldoge",
    name: "LiteDoge",
  },
  {
    id: "litegold",
    symbol: "ltg",
    name: "LiteGold",
  },
  {
    id: "litentry",
    symbol: "lit",
    name: "Litentry",
  },
  {
    id: "litex",
    symbol: "lxt",
    name: "LITEX",
  },
  {
    id: "litherium",
    symbol: "lith",
    name: "Litherium",
  },
  {
    id: "lithium-2",
    symbol: "lithium",
    name: "Lithium",
  },
  {
    id: "lithium-finance",
    symbol: "lith",
    name: "Lithium Finance",
  },
  {
    id: "lithosphere",
    symbol: "litho",
    name: "Lithosphere",
  },
  {
    id: "lith-token",
    symbol: "lith",
    name: "Lith Token",
  },
  {
    id: "lition",
    symbol: "lit",
    name: "Lition",
  },
  {
    id: "little-angry-bunny-v2",
    symbol: "lab-v2",
    name: "Little Angry Bunny v2",
  },
  {
    id: "littlebabydoge",
    symbol: "lbd",
    name: "LittleBabyDoge",
  },
  {
    id: "little-bunny-rocket",
    symbol: "lbr",
    name: "Little Bunny Rocket",
  },
  {
    id: "littledoge",
    symbol: "littledoge",
    name: "LittleDoge",
  },
  {
    id: "littleghosts-ectoplasm",
    symbol: "ecto",
    name: "LittleGhosts Ectoplasm",
  },
  {
    id: "littleinu",
    symbol: "linu",
    name: "LittleInu",
  },
  {
    id: "little-rabbit",
    symbol: "ltrbt",
    name: "Little Rabbit",
  },
  {
    id: "littlesesame",
    symbol: "lsc",
    name: "Littlesesame",
  },
  {
    id: "little-tsuki-inu",
    symbol: "liltk",
    name: "Little Tsuki Inu",
  },
  {
    id: "little-ugly-duck",
    symbol: "lud",
    name: "Little Ugly Duck",
  },
  {
    id: "lituni",
    symbol: "lito",
    name: "Lituni",
  },
  {
    id: "livenodes",
    symbol: "lno",
    name: "Livenodes",
  },
  {
    id: "livenpay",
    symbol: "lvn",
    name: "LivenPay",
  },
  {
    id: "livepeer",
    symbol: "lpt",
    name: "Livepeer",
  },
  {
    id: "live-swap-coin",
    symbol: "lsc",
    name: "Live Swap Coin",
  },
  {
    id: "livetrade-token",
    symbol: "ltd",
    name: "LiveTrade Token",
  },
  {
    id: "lixir-protocol",
    symbol: "lix",
    name: "Lixir Finance",
  },
  {
    id: "lizard-token",
    symbol: "lizard",
    name: "Lizard Token",
  },
  {
    id: "llamaswap",
    symbol: "lama",
    name: "LlamaSwap",
  },
  {
    id: "lmao-finance",
    symbol: "lmao",
    name: "LMAO Finance",
  },
  {
    id: "lnko-token",
    symbol: "lnko",
    name: "LNKO Token",
  },
  {
    id: "load-network",
    symbol: "load",
    name: "LOAD Network",
  },
  {
    id: "loa-protocol",
    symbol: "loa",
    name: "LOA Protocol",
  },
  {
    id: "lobby",
    symbol: "lby",
    name: "Lobby",
  },
  {
    id: "lobis",
    symbol: "lobi",
    name: "Lobis",
  },
  {
    id: "lobstex-coin",
    symbol: "lobs",
    name: "Lobstex",
  },
  {
    id: "localcoinswap",
    symbol: "lcs",
    name: "LocalCoinSwap",
  },
  {
    id: "localtrade",
    symbol: "ltt",
    name: "LocalTrade",
  },
  {
    id: "locgame",
    symbol: "locg",
    name: "LOCGame",
  },
  {
    id: "lockchain",
    symbol: "loc",
    name: "LockTrip",
  },
  {
    id: "locklet",
    symbol: "lkt",
    name: "Locklet",
  },
  {
    id: "lockness",
    symbol: "lkn",
    name: "Lockness",
  },
  {
    id: "locus-chain",
    symbol: "locus",
    name: "Locus Chain",
  },
  {
    id: "lofi-defi",
    symbol: "lofi",
    name: "Lofi Defi",
  },
  {
    id: "logix-coin",
    symbol: "lgx",
    name: "Logix Coin",
  },
  {
    id: "logs",
    symbol: "logs",
    name: "LOGS",
  },
  {
    id: "loki-network",
    symbol: "oxen",
    name: "Oxen",
  },
  {
    id: "lol",
    symbol: "lol",
    name: "LOL",
  },
  {
    id: "loltoken",
    symbol: "lol",
    name: "LOLTOKEN",
  },
  {
    id: "londefy",
    symbol: "ldf",
    name: "Londefy",
  },
  {
    id: "londex",
    symbol: "ldx",
    name: "Londex",
  },
  {
    id: "london-vault-nftx",
    symbol: "london",
    name: "LONDON Vault (NFTX)",
  },
  {
    id: "lonelyfans",
    symbol: "lof",
    name: "LonelyFans",
  },
  {
    id: "long-coin",
    symbol: "long",
    name: "LONG COIN",
  },
  {
    id: "longdrink-finance",
    symbol: "long",
    name: "Longdrink Finance",
  },
  {
    id: "lookscoin",
    symbol: "look",
    name: "LooksCoin",
  },
  {
    id: "looksrare",
    symbol: "looks",
    name: "LooksRare",
  },
  {
    id: "looks-rare",
    symbol: "lr",
    name: "Looks Rare",
  },
  {
    id: "loomi",
    symbol: "loomi",
    name: "Loomi",
  },
  {
    id: "loom-network",
    symbol: "loomold",
    name: "Loom Network (OLD)",
  },
  {
    id: "loom-network-new",
    symbol: "loom",
    name: "Loom Network (NEW)",
  },
  {
    id: "loon-network",
    symbol: "loon",
    name: "Loon Network",
  },
  {
    id: "loopring",
    symbol: "lrc",
    name: "Loopring",
  },
  {
    id: "loopringcoin-v2-wormhole",
    symbol: "lrc",
    name: "LoopringCoin V2 (Wormhole)",
  },
  {
    id: "loop-token",
    symbol: "loop",
    name: "LOOP Finance",
  },
  {
    id: "loot",
    symbol: "loot",
    name: "Lootex",
  },
  {
    id: "loot-network",
    symbol: "LOOT",
    name: "Loot Network",
  },
  {
    id: "loot-token",
    symbol: "loot",
    name: "Loot Token",
  },
  {
    id: "lord-arena",
    symbol: "lorda",
    name: "Lord Arena",
  },
  {
    id: "lorde-edge",
    symbol: "edgelon",
    name: "Lorde Edge",
  },
  {
    id: "lords",
    symbol: "lords",
    name: "LORDS",
  },
  {
    id: "loserchick-egg",
    symbol: "egg",
    name: "LoserChick EGG",
  },
  {
    id: "loser-coin",
    symbol: "lowb",
    name: "Loser Coin",
  },
  {
    id: "lossless",
    symbol: "lss",
    name: "Lossless",
  },
  {
    id: "lotdog",
    symbol: "lotdog",
    name: "Lotdog",
  },
  {
    id: "loterra",
    symbol: "lota",
    name: "LoTerra",
  },
  {
    id: "lotoblock",
    symbol: "loto",
    name: "Lotoblock",
  },
  {
    id: "lotto",
    symbol: "lotto",
    name: "Lotto",
  },
  {
    id: "lottonation",
    symbol: "lnt",
    name: "Lottonation",
  },
  {
    id: "lot-trade",
    symbol: "lott",
    name: "LOT.TRADE",
  },
  {
    id: "loud-market",
    symbol: "loud",
    name: "Loud Market",
  },
  {
    id: "louverture",
    symbol: "lvt",
    name: "Louverture",
  },
  {
    id: "louvre-finance",
    symbol: "louvre",
    name: "Louvre Finance",
  },
  {
    id: "lovechain",
    symbol: "lov",
    name: "LoveChain",
  },
  {
    id: "love-coin",
    symbol: "love",
    name: "LOVE Coin",
  },
  {
    id: "love-doge",
    symbol: "lovedoge",
    name: "Love Doge",
  },
  {
    id: "love-earth-coin",
    symbol: "lec",
    name: "Love Earth Coin",
  },
  {
    id: "lovehearts",
    symbol: "lvh",
    name: "LoveHearts",
  },
  {
    id: "lovelace-world",
    symbol: "lace",
    name: "Lovelace World",
  },
  {
    id: "lovely-inu-finance",
    symbol: "lovely",
    name: "Lovely Inu finance",
  },
  {
    id: "lovepot-token",
    symbol: "love",
    name: "LovePot Token",
  },
  {
    id: "low-float-gem",
    symbol: "lfg",
    name: "Low Float Gem",
  },
  {
    id: "low-orbit-crypto-cannon",
    symbol: "locc",
    name: "Low Orbit Crypto Cannon",
  },
  {
    id: "lox-network",
    symbol: "lox",
    name: "Lox Network",
  },
  {
    id: "lp-3pool-curve",
    symbol: "3crv",
    name: "LP 3pool Curve",
  },
  {
    id: "l-pesa",
    symbol: "lpk",
    name: "Kripton",
  },
  {
    id: "lpi-dao",
    symbol: "lpi",
    name: "LPI DAO",
  },
  {
    id: "lp-renbtc-curve",
    symbol: "renbtcCurve",
    name: "LP renBTC Curve",
  },
  {
    id: "lp-scurve",
    symbol: "sCurve",
    name: "LP-sCurve",
  },
  {
    id: "lto-network",
    symbol: "lto",
    name: "LTO Network",
  },
  {
    id: "ltradex",
    symbol: "ltex",
    name: "Ltradex",
  },
  {
    id: "lua-token",
    symbol: "lua",
    name: "LuaSwap",
  },
  {
    id: "luatoken-wormhole",
    symbol: "lua",
    name: "LuaToken (Wormhole)",
  },
  {
    id: "luca",
    symbol: "luca",
    name: "LUCA",
  },
  {
    id: "lucent",
    symbol: "lcnt",
    name: "Lucent",
  },
  {
    id: "lucha",
    symbol: "lucha",
    name: "Lucha",
  },
  {
    id: "lucid-lands",
    symbol: "llg",
    name: "Lucid Lands",
  },
  {
    id: "luckchain",
    symbol: "bash",
    name: "LuckChain",
  },
  {
    id: "luckstar",
    symbol: "lst",
    name: "Luckstar",
  },
  {
    id: "lucky1token",
    symbol: "l1t",
    name: "Lucky1Token",
  },
  {
    id: "lucky-2",
    symbol: "lucky",
    name: "LUCKY",
  },
  {
    id: "lucky-block",
    symbol: "lblock",
    name: "Lucky Block",
  },
  {
    id: "lucky-cat",
    symbol: "lucky",
    name: "Lucky Cat",
  },
  {
    id: "lucky-lion",
    symbol: "lucky",
    name: "Lucky Lion",
  },
  {
    id: "luckypig",
    symbol: "luckypig",
    name: "LuckyPig",
  },
  {
    id: "lucky-property-development-invest",
    symbol: "lpdi",
    name: "Lucky Property Development Invest",
  },
  {
    id: "luckyseventoken",
    symbol: "lst",
    name: "LuckySevenToken",
  },
  {
    id: "luckytoken",
    symbol: "lkt",
    name: "LuckyToken",
  },
  {
    id: "lucky-token",
    symbol: "lucky",
    name: "Lucky Token",
  },
  {
    id: "lucky-unicorn-token",
    symbol: "l99",
    name: "Lucky Unicorn Token",
  },
  {
    id: "lucrosus-capital",
    symbol: "$LUCA",
    name: "Lucrosus Capital",
  },
  {
    id: "lucy",
    symbol: "lucy",
    name: "LUCY",
  },
  {
    id: "lucy-inu",
    symbol: "lucy",
    name: "Lucy Inu",
  },
  {
    id: "ludena-protocol",
    symbol: "ldn",
    name: "Ludena Protocol",
  },
  {
    id: "ludos",
    symbol: "lud",
    name: "Ludos Protocol",
  },
  {
    id: "luffy-inu",
    symbol: "luffy",
    name: "Luffy",
  },
  {
    id: "lukso-token",
    symbol: "lyxe",
    name: "LUKSO Token",
  },
  {
    id: "lulz",
    symbol: "lulz",
    name: "LULZ",
  },
  {
    id: "lumenswap",
    symbol: "lsp",
    name: "Lumenswap",
  },
  {
    id: "lumi-credits",
    symbol: "lumi",
    name: "LUMI Credits",
  },
  {
    id: "luminos-mining-protocol",
    symbol: "lumi",
    name: "Luminos Mining Protocol",
  },
  {
    id: "lum-network",
    symbol: "lum",
    name: "Lum Network",
  },
  {
    id: "lumos-metaverse",
    symbol: "lumosx",
    name: "Lumos Metaverse",
  },
  {
    id: "lum-rune",
    symbol: "lum",
    name: "Lum Rune",
  },
  {
    id: "lunachow",
    symbol: "luchow",
    name: "LunaChow",
  },
  {
    id: "lunadoge",
    symbol: "loge",
    name: "LunaDoge",
  },
  {
    id: "lunafox",
    symbol: "lufx",
    name: "LunaFox",
  },
  {
    id: "lunaland",
    symbol: "lln",
    name: "LunaLand",
  },
  {
    id: "luna-pad",
    symbol: "lunapad",
    name: "Luna-Pad",
  },
  {
    id: "lunar",
    symbol: "lnr",
    name: "Lunar",
  },
  {
    id: "lunarbrain",
    symbol: "lun",
    name: "LunarBrain",
  },
  {
    id: "lunarium",
    symbol: "xln",
    name: "Lunarium",
  },
  {
    id: "lunarswap",
    symbol: "lunar",
    name: "LunarSwap",
  },
  {
    id: "luna-rush",
    symbol: "lus",
    name: "Luna Rush",
  },
  {
    id: "luna-wormhole",
    symbol: "luna",
    name: "LUNA (Wormhole)",
  },
  {
    id: "lunch-money",
    symbol: "lmy",
    name: "Lunch Money",
  },
  {
    id: "lunes",
    symbol: "lunes",
    name: "Lunes",
  },
  {
    id: "lung-protocol",
    symbol: "l2p",
    name: "Lung Protocol",
  },
  {
    id: "luni",
    symbol: "luni",
    name: "LUNI",
  },
  {
    id: "lunr-token",
    symbol: "lunr",
    name: "Lunr Token",
  },
  {
    id: "lunyr",
    symbol: "lun",
    name: "Lunyr",
  },
  {
    id: "luto-cash",
    symbol: "luto",
    name: "Luto Cash",
  },
  {
    id: "lux-bio-exchange-coin",
    symbol: "lbxc",
    name: "LUX BIO EXCHANGE COIN",
  },
  {
    id: "luxcoin",
    symbol: "lux",
    name: "LUXCoin",
  },
  {
    id: "lux-expression",
    symbol: "lux",
    name: "Lux Expression",
  },
  {
    id: "luxfi",
    symbol: "lxf",
    name: "LuxFi",
  },
  {
    id: "luxor",
    symbol: "lux",
    name: "Luxor",
  },
  {
    id: "luxurious-pro-network-token",
    symbol: "lpnt",
    name: "Luxurious Pro Network Token",
  },
  {
    id: "luxury-club",
    symbol: "lux",
    name: "Luxury Club",
  },
  {
    id: "luxy",
    symbol: "luxy",
    name: "Luxy",
  },
  {
    id: "luyuka",
    symbol: "lyk",
    name: "Luyuka",
  },
  {
    id: "lwazi-project",
    symbol: "lwazi",
    name: "Lwazi Project",
  },
  {
    id: "lyca-island",
    symbol: "lyca",
    name: "Lyca Island",
  },
  {
    id: "lydia-finance",
    symbol: "lyd",
    name: "Lydia Finance",
  },
  {
    id: "lyfe",
    symbol: "lyfe",
    name: "Lyfe",
  },
  {
    id: "lyfe-gold",
    symbol: "lgold",
    name: "Lyfe Gold",
  },
  {
    id: "lyfe-land",
    symbol: "lland",
    name: "Lyfe Land",
  },
  {
    id: "lyfe-silver",
    symbol: "lsilver",
    name: "Lyfe Silver",
  },
  {
    id: "lykke",
    symbol: "lkk",
    name: "Lykke",
  },
  {
    id: "lympo",
    symbol: "lym",
    name: "Lympo",
  },
  {
    id: "lympo-market-token",
    symbol: "lmt",
    name: "Lympo Market Token",
  },
  {
    id: "lync-network",
    symbol: "lync",
    name: "LYNC Network",
  },
  {
    id: "lynx",
    symbol: "lynx",
    name: "Lynx",
  },
  {
    id: "lyptus-token",
    symbol: "lyptus",
    name: "Lyptus Token",
  },
  {
    id: "lyra",
    symbol: "lyr",
    name: "Lyra",
  },
  {
    id: "lyra-finance",
    symbol: "lyra",
    name: "Lyra Finance",
  },
  {
    id: "lys-capital",
    symbol: "lys",
    name: "LYS Capital",
  },
  {
    id: "lzp",
    symbol: "LZP",
    name: "LZP",
  },
  {
    id: "m2",
    symbol: "m2",
    name: "M2",
  },
  {
    id: "m7-vault",
    symbol: "vault",
    name: "M7 Vault",
  },
  {
    id: "macaronswap",
    symbol: "mcrn",
    name: "MacaronSwap",
  },
  {
    id: "mach",
    symbol: "mach",
    name: "MACH Project",
  },
  {
    id: "machinecoin",
    symbol: "mac",
    name: "Machinecoin",
  },
  {
    id: "machix",
    symbol: "mcx",
    name: "Machi X",
  },
  {
    id: "macoin",
    symbol: "beck",
    name: "Macoin",
  },
  {
    id: "madagascar-token",
    symbol: "$time",
    name: "Madagascar Token",
  },
  {
    id: "mad-bull-token",
    symbol: "mbull",
    name: "Mad Bull Token",
  },
  {
    id: "madcredits",
    symbol: "MWD",
    name: "MadCredits",
  },
  {
    id: "mad-meerkat-optimizer",
    symbol: "mmo",
    name: "Mad Meerkat Optimizer",
  },
  {
    id: "mad-network",
    symbol: "mad",
    name: "MADNetwork",
  },
  {
    id: "mad-rabbit",
    symbol: "madr",
    name: "Mad Rabbit",
  },
  {
    id: "mad-viking-games",
    symbol: "mvg",
    name: "Mad Viking Games",
  },
  {
    id: "madworld",
    symbol: "umad",
    name: "MADworld",
  },
  {
    id: "maecenas",
    symbol: "art",
    name: "Maecenas",
  },
  {
    id: "mafacoin",
    symbol: "mafa",
    name: "MafaCoin",
  },
  {
    id: "maga-coin",
    symbol: "maga",
    name: "MAGA coin",
  },
  {
    id: "mage-doge",
    symbol: "mgdg",
    name: "Mage Doge",
  },
  {
    id: "maggot",
    symbol: "maggot",
    name: "Maggot",
  },
  {
    id: "magic",
    symbol: "magic",
    name: "Magic",
  },
  {
    id: "magic-beasties",
    symbol: "bsts",
    name: "Magic Beasties",
  },
  {
    id: "magic-birds-token",
    symbol: "mbt",
    name: "Magic Birds Token",
  },
  {
    id: "magic-bnb",
    symbol: "mbnb",
    name: "MAGIC BNB",
  },
  {
    id: "magicbox",
    symbol: "mbt",
    name: "MagicBox",
  },
  {
    id: "magic-cake",
    symbol: "magiccake",
    name: "Magic Cake",
  },
  {
    id: "magiccraft",
    symbol: "mcrt",
    name: "MagicCraft",
  },
  {
    id: "magic-cube",
    symbol: "mcc",
    name: "Magic Cube Coin",
  },
  {
    id: "magicdoge",
    symbol: "magicdoge",
    name: "MagicDOGE",
  },
  {
    id: "magic-forest",
    symbol: "magf",
    name: "Magic Forest",
  },
  {
    id: "magic-internet-money",
    symbol: "mim",
    name: "Magic Internet Money",
  },
  {
    id: "magic-internet-money-wormhole",
    symbol: "mimet",
    name: "Magic Internet Money (Wormhole)",
  },
  {
    id: "magick-dao",
    symbol: "magick",
    name: "Magick DAO",
  },
  {
    id: "magic-metaverse",
    symbol: "mac",
    name: "Magic Metaverse",
  },
  {
    id: "magic-power",
    symbol: "mgp",
    name: "Magic Power",
  },
  {
    id: "magic-token",
    symbol: "magic",
    name: "Magic Token",
  },
  {
    id: "magic-trading-token",
    symbol: "mtk",
    name: "Magic Trading Token",
  },
  {
    id: "magnachain",
    symbol: "mgc",
    name: "Magnachain",
  },
  {
    id: "magnet-dao",
    symbol: "mag",
    name: "Magnet DAO",
  },
  {
    id: "magnetgold",
    symbol: "mtg",
    name: "MagnetGold",
  },
  {
    id: "magpiecoin",
    symbol: "mgpc",
    name: "MagpieCoin",
  },
  {
    id: "mahadao",
    symbol: "maha",
    name: "MahaDAO",
  },
  {
    id: "maia",
    symbol: "maia",
    name: "Maia",
  },
  {
    id: "maiar-dex",
    symbol: "mex",
    name: "Maiar DEX",
  },
  {
    id: "maidcoin",
    symbol: "$maid",
    name: "MaidCoin",
  },
  {
    id: "maidsafecoin",
    symbol: "maid",
    name: "MaidSafeCoin",
  },
  {
    id: "maincoin",
    symbol: "mnc",
    name: "MainCoin",
  },
  {
    id: "mainfinex",
    symbol: "XVX",
    name: "Mainfinex",
  },
  {
    id: "mainframe",
    symbol: "mft",
    name: "Hifi Finance",
  },
  {
    id: "mainframe-protocol",
    symbol: "vmain",
    name: "MainFrame Protocol",
  },
  {
    id: "mainstream-for-the-underground",
    symbol: "mftu",
    name: "Mainstream For The Underground",
  },
  {
    id: "maison-capital",
    symbol: "MSN",
    name: "Maison Capital",
  },
  {
    id: "make-a-difference-token",
    symbol: "mad",
    name: "Make A Difference Token",
  },
  {
    id: "make-more-money",
    symbol: "M3C",
    name: "Make More Money",
  },
  {
    id: "maker",
    symbol: "mkr",
    name: "Maker",
  },
  {
    id: "makes",
    symbol: "mks",
    name: "Makes",
  },
  {
    id: "makiswap",
    symbol: "maki",
    name: "MakiSwap",
  },
  {
    id: "makk",
    symbol: "makk",
    name: "Makk",
  },
  {
    id: "malinka",
    symbol: "MLNK",
    name: "Malinka",
  },
  {
    id: "malt-stablecoin",
    symbol: "malt",
    name: "Malt Stablecoin",
  },
  {
    id: "mama-dao",
    symbol: "mama",
    name: "Mama DAO",
  },
  {
    id: "mamadoge",
    symbol: "mamadoge",
    name: "MamaDoge",
  },
  {
    id: "mamaverse",
    symbol: "coinmama",
    name: "MamaVerse",
  },
  {
    id: "manager-pro",
    symbol: "MPRO",
    name: "Manager PRO",
  },
  {
    id: "manarium",
    symbol: "ari",
    name: "Manarium",
  },
  {
    id: "manateecoin",
    symbol: "mtc",
    name: "ManateeCoin",
  },
  {
    id: "manchester-city-fan-token",
    symbol: "city",
    name: "Manchester City Fan Token",
  },
  {
    id: "mandala-exchange-token",
    symbol: "mdx",
    name: "Mandala Exchange Token",
  },
  {
    id: "mandi-token",
    symbol: "mandi",
    name: "Mandi Token",
  },
  {
    id: "mandox",
    symbol: "mandox",
    name: "MandoX",
  },
  {
    id: "maneki-neko",
    symbol: "NEKI",
    name: "Maneki-neko",
  },
  {
    id: "maneki-vault-nftx",
    symbol: "maneki",
    name: "MANEKI Vault (NFTX)",
  },
  {
    id: "manga-token",
    symbol: "$manga",
    name: "Manga Token",
  },
  {
    id: "mangochain",
    symbol: "mgp",
    name: "MangoChain",
  },
  {
    id: "mango-markets",
    symbol: "mngo",
    name: "Mango",
  },
  {
    id: "manifest",
    symbol: "mnfst",
    name: "Manifest",
  },
  {
    id: "manifold-finance",
    symbol: "fold",
    name: "Manifold Finance",
  },
  {
    id: "manna",
    symbol: "manna",
    name: "Manna",
  },
  {
    id: "mantis-network",
    symbol: "mntis",
    name: "Mantis Network",
  },
  {
    id: "mantra-dao",
    symbol: "om",
    name: "MANTRA DAO",
  },
  {
    id: "manufactory-2",
    symbol: "mnft",
    name: "ManuFactory",
  },
  {
    id: "manyswap",
    symbol: "many",
    name: "Manyswap",
  },
  {
    id: "many-worlds",
    symbol: "many",
    name: "Many Worlds",
  },
  {
    id: "mao-zedong",
    symbol: "mao",
    name: "Mao Zedong",
  },
  {
    id: "mapcoin",
    symbol: "mapc",
    name: "MapCoin",
  },
  {
    id: "maple",
    symbol: "mpl",
    name: "Maple",
  },
  {
    id: "maps",
    symbol: "maps",
    name: "MAPS",
  },
  {
    id: "marblecoin",
    symbol: "mbc",
    name: "Marblecoin",
  },
  {
    id: "marcopolo",
    symbol: "map",
    name: "MAP Protocol",
  },
  {
    id: "margin-call",
    symbol: "mc",
    name: "Margin Call",
  },
  {
    id: "marginswap",
    symbol: "mfi",
    name: "Marginswap",
  },
  {
    id: "marhabadefi",
    symbol: "mrhb",
    name: "MarhabaDeFi",
  },
  {
    id: "marinade",
    symbol: "mnde",
    name: "Marinade",
  },
  {
    id: "marinade-staked-sol-wormhole",
    symbol: "msol",
    name: "Marinade staked SOL (Wormhole)",
  },
  {
    id: "mariofloki",
    symbol: "mrfloki",
    name: "MarioFloki",
  },
  {
    id: "markaccy",
    symbol: "MKCY",
    name: "Markaccy",
  },
  {
    id: "market-arbitrage-coin",
    symbol: "wmarc",
    name: "Wrapped Market Arbitrage Coin",
  },
  {
    id: "market-ledger",
    symbol: "ml",
    name: "Market Ledger",
  },
  {
    id: "market-making-pro",
    symbol: "mmpro",
    name: "Market Making Pro",
  },
  {
    id: "marketmove",
    symbol: "move",
    name: "MarketMove",
  },
  {
    id: "marketpeak",
    symbol: "peak",
    name: "PEAKDEFI",
  },
  {
    id: "markhor-meta",
    symbol: "mm",
    name: "Markhor Meta",
  },
  {
    id: "marlin",
    symbol: "pond",
    name: "Marlin",
  },
  {
    id: "marmaj",
    symbol: "marmaj",
    name: "Marmaj",
  },
  {
    id: "mar-network",
    symbol: "mars",
    name: "Mars Network",
  },
  {
    id: "marnotaur",
    symbol: "taur",
    name: "Marnotaur",
  },
  {
    id: "mars",
    symbol: "mars",
    name: "Mars",
  },
  {
    id: "mars4",
    symbol: "mars4",
    name: "MARS4",
  },
  {
    id: "marscoin",
    symbol: "mars",
    name: "Marscoin",
  },
  {
    id: "marscolony",
    symbol: "clny",
    name: "MarsColony",
  },
  {
    id: "mars-doge",
    symbol: "MarsDoge",
    name: "Mars Doge",
  },
  {
    id: "mars-dogecoin",
    symbol: "mdc",
    name: "Mars DogeCoin",
  },
  {
    id: "mars-ecosystem-token",
    symbol: "xms",
    name: "Mars Ecosystem Token",
  },
  {
    id: "mars-floki-inu",
    symbol: "floki",
    name: "Mars Floki Inu",
  },
  {
    id: "marshal-lion-group-coin",
    symbol: "mlgc",
    name: "Marshal Lion Group Coin",
  },
  {
    id: "marshmellowdefi",
    symbol: "mash",
    name: "MarshmallowDeFi",
  },
  {
    id: "mars-inu",
    symbol: "marsinu",
    name: "Mars Inu",
  },
  {
    id: "mars-panda-world",
    symbol: "mpt",
    name: "Mars Panda World",
  },
  {
    id: "marsrise",
    symbol: "marsrise",
    name: "MarsRise",
  },
  {
    id: "mars-space-x",
    symbol: "MPX",
    name: "Mars Space X",
  },
  {
    id: "mars-token",
    symbol: "omt",
    name: "Mars Token",
  },
  {
    id: "marsx",
    symbol: "mx",
    name: "MarsX",
  },
  {
    id: "martexcoin",
    symbol: "mxt",
    name: "MarteXcoin",
  },
  {
    id: "martiandoge",
    symbol: "martiandoge",
    name: "MartianDoge",
  },
  {
    id: "martkist",
    symbol: "martk",
    name: "Martkist",
  },
  {
    id: "marvelous-nfts",
    symbol: "mnft",
    name: "Marvelous NFTs",
  },
  {
    id: "marvininu",
    symbol: "marvin",
    name: "MarvinInu",
  },
  {
    id: "marvin-inu",
    symbol: "marvin",
    name: "Marvin Inu",
  },
  {
    id: "marx",
    symbol: "marx",
    name: "MarX",
  },
  {
    id: "marxcoin",
    symbol: "marx",
    name: "MarxCoin",
  },
  {
    id: "masari",
    symbol: "msr",
    name: "Masari",
  },
  {
    id: "mashima-inu",
    symbol: "mashima",
    name: "Mashima Inu",
  },
  {
    id: "maskdoge",
    symbol: "MaskDoge",
    name: "MaskDoge",
  },
  {
    id: "mask-network",
    symbol: "mask",
    name: "Mask Network",
  },
  {
    id: "mask-vault-nftx",
    symbol: "mask",
    name: "MASK Vault (NFTX)",
  },
  {
    id: "mason-token",
    symbol: "mason",
    name: "Mason Token",
  },
  {
    id: "masq",
    symbol: "masq",
    name: "MASQ",
  },
  {
    id: "mass",
    symbol: "mass",
    name: "MASS",
  },
  {
    id: "mass-vehicle-ledger",
    symbol: "mvl",
    name: "MVL",
  },
  {
    id: "masterchef2",
    symbol: "masterchef2",
    name: "MASTERCHEF2",
  },
  {
    id: "master-contract-token",
    symbol: "mct",
    name: "Master Contract Token",
  },
  {
    id: "master-floki",
    symbol: "MASTER",
    name: "Master Floki",
  },
  {
    id: "masternode-hype-coin-exchange",
    symbol: "mhce",
    name: "Masternode Hype Coin Exchange",
  },
  {
    id: "masternodesme",
    symbol: "mnme",
    name: "MasterNodesME",
  },
  {
    id: "master-usd",
    symbol: "musd",
    name: "MASTER USD",
  },
  {
    id: "masterwin",
    symbol: "mw",
    name: "MasterWin",
  },
  {
    id: "mastiff-inu",
    symbol: "minu",
    name: "Mastiff Inu",
  },
  {
    id: "mata",
    symbol: "mata",
    name: "Mata",
  },
  {
    id: "matador-token",
    symbol: "mtdr",
    name: "Matador Token",
  },
  {
    id: "matchpool",
    symbol: "gup",
    name: "Guppy",
  },
  {
    id: "mate",
    symbol: "mate",
    name: "Mate",
  },
  {
    id: "material",
    symbol: "mtrl",
    name: "Material",
  },
  {
    id: "math",
    symbol: "math",
    name: "MATH",
  },
  {
    id: "math-token-wormhole",
    symbol: "math",
    name: "MATH Token (Wormhole)",
  },
  {
    id: "matic-aave-aave",
    symbol: "maaave",
    name: "Matic Aave Interest Bearing AAVE",
  },
  {
    id: "matic-aave-dai",
    symbol: "madai",
    name: "Matic Aave Interest Bearing DAI",
  },
  {
    id: "matic-aave-link",
    symbol: "malink",
    name: "Matic Aave Interest Bearing LINK",
  },
  {
    id: "matic-aave-tusd",
    symbol: "matusd",
    name: "Matic Aave interest bearing TUSD",
  },
  {
    id: "matic-aave-uni",
    symbol: "mauni",
    name: "Matic Aave Interest Bearing UNI",
  },
  {
    id: "matic-aave-usdc",
    symbol: "mausdc",
    name: "Matic Aave Interest Bearing USDC",
  },
  {
    id: "matic-aave-usdt",
    symbol: "mausdt",
    name: "Matic Aave Interest Bearing USDT",
  },
  {
    id: "matic-aave-weth",
    symbol: "maweth",
    name: "Matic Aave Interest Bearing WETH",
  },
  {
    id: "matic-aave-yfi",
    symbol: "mayfi",
    name: "Matic Aave Interest Bearing YFI",
  },
  {
    id: "matic-dai-stablecoin",
    symbol: "dai-matic",
    name: "Matic DAI Stablecoin",
  },
  {
    id: "maticlaunch",
    symbol: "mtcl",
    name: "MaticLaunch",
  },
  {
    id: "matic-network",
    symbol: "matic",
    name: "Polygon",
  },
  {
    id: "maticpad",
    symbol: "matpad",
    name: "MaticPad",
  },
  {
    id: "maticverse",
    symbol: "mverse",
    name: "MaticVerse",
  },
  {
    id: "matic-wormhole",
    symbol: "maticpo",
    name: "MATIC (Wormhole)",
  },
  {
    id: "matic-wormhole-from-ethereum",
    symbol: "maticet",
    name: "Matic (Wormhole from Ethereum)",
  },
  {
    id: "matrexcoin",
    symbol: "mac",
    name: "Matrexcoin",
  },
  {
    id: "matrix-ai-network",
    symbol: "man",
    name: "Matrix AI Network",
  },
  {
    id: "matrixetf",
    symbol: "mdf",
    name: "MatrixETF",
  },
  {
    id: "matrix-protocol",
    symbol: "mtx",
    name: "Matrix Protocol",
  },
  {
    id: "matrix-samurai",
    symbol: "mxs",
    name: "Marketing Samurai",
  },
  {
    id: "matrix-solana-index",
    symbol: "msi",
    name: "Matrix Solana Index",
  },
  {
    id: "matrixswap",
    symbol: "matrix",
    name: "Matrix Labs",
  },
  {
    id: "matryx",
    symbol: "mtx",
    name: "MATRYX",
  },
  {
    id: "maxcoin",
    symbol: "max",
    name: "Maxcoin",
  },
  {
    id: "maxgoat",
    symbol: "maxgoat",
    name: "MaxGoat",
  },
  {
    id: "maximizer",
    symbol: "maxi",
    name: "Maximizer",
  },
  {
    id: "maximus",
    symbol: "maxi",
    name: "Maximus",
  },
  {
    id: "maxonrow",
    symbol: "mxw",
    name: "Maxonrow",
  },
  {
    id: "max-property-group",
    symbol: "mcf",
    name: "Max Crowdfund",
  },
  {
    id: "max-revive",
    symbol: "maxr",
    name: "Max Revive",
  },
  {
    id: "max-token",
    symbol: "max",
    name: "MAX Token",
  },
  {
    id: "maya-coin",
    symbol: "maya",
    name: "Maya Coin",
  },
  {
    id: "maya-preferred-223",
    symbol: "mayp",
    name: "Maya Preferred",
  },
  {
    id: "maza",
    symbol: "mzc",
    name: "Maza",
  },
  {
    id: "maze-token",
    symbol: "mzr",
    name: "Maze Token",
  },
  {
    id: "mbitbooks",
    symbol: "mbit",
    name: "MBitBooks",
  },
  {
    id: "mbm-token",
    symbol: "mbm",
    name: "MBM Token",
  },
  {
    id: "mcat",
    symbol: "mcat",
    name: "mCat",
  },
  {
    id: "mcdex",
    symbol: "mcb",
    name: "MCDEX",
  },
  {
    id: "mcdoge",
    symbol: "mcdoge",
    name: "McDoge",
  },
  {
    id: "mcelo",
    symbol: "mcelo",
    name: "mCELO",
  },
  {
    id: "mceur",
    symbol: "mceur",
    name: "mcEUR",
  },
  {
    id: "mcfinance",
    symbol: "mcf",
    name: "MCFinance",
  },
  {
    id: "mchain",
    symbol: "mar",
    name: "Mchain",
  },
  {
    id: "mch-coin",
    symbol: "mchc",
    name: "MCH Coin",
  },
  {
    id: "mci-coin",
    symbol: "cyclub",
    name: "Cyclub",
  },
  {
    id: "mcn-ventures",
    symbol: "mcn",
    name: "MCN Ventures",
  },
  {
    id: "mcobit",
    symbol: "mct",
    name: "Mcobit",
  },
  {
    id: "mcontent",
    symbol: "mcontent",
    name: "MContent",
  },
  {
    id: "mcs-token",
    symbol: "mcs",
    name: "MCS Token",
  },
  {
    id: "mdex",
    symbol: "mdx",
    name: "Mdex",
  },
  {
    id: "mdsquare",
    symbol: "tmed",
    name: "MDsquare",
  },
  {
    id: "mdtoken",
    symbol: "mdtk",
    name: "MDtoken",
  },
  {
    id: "mdu",
    symbol: "mdu",
    name: "MDUKEY",
  },
  {
    id: "meals",
    symbol: "meals",
    name: "MEALS",
  },
  {
    id: "meanfi",
    symbol: "mean",
    name: "Meanfi",
  },
  {
    id: "measurable-data-token",
    symbol: "mdt",
    name: "Measurable Data Token",
  },
  {
    id: "meblox-protocol",
    symbol: "meb",
    name: "Meblox Protocol",
  },
  {
    id: "mechashiba",
    symbol: "mec",
    name: "MechaShiba",
  },
  {
    id: "mech-master",
    symbol: "mech",
    name: "Mech Master",
  },
  {
    id: "meconcash",
    symbol: "mch",
    name: "Meconcash",
  },
  {
    id: "medacoin",
    symbol: "meda",
    name: "Medacoin",
  },
  {
    id: "media-eye",
    symbol: "eye",
    name: "MeDIA eYe",
  },
  {
    id: "media-licensing-token",
    symbol: "mlt",
    name: "Media Licensing Token",
  },
  {
    id: "media-network",
    symbol: "media",
    name: "Media Network",
  },
  {
    id: "medibit",
    symbol: "medibit",
    name: "MEDIBIT",
  },
  {
    id: "medibloc",
    symbol: "med",
    name: "Medibloc",
  },
  {
    id: "medicalchain",
    symbol: "mtn",
    name: "Medicalchain",
  },
  {
    id: "medical-token-currency",
    symbol: "mtc",
    name: "Doc.com",
  },
  {
    id: "medicalveda",
    symbol: "mveda",
    name: "MedicalVeda",
  },
  {
    id: "medican-coin",
    symbol: "mcan",
    name: "Medican Coin",
  },
  {
    id: "medic-coin",
    symbol: "medic",
    name: "Medic Coin",
  },
  {
    id: "mediconnect",
    symbol: "medi",
    name: "MediConnect",
  },
  {
    id: "medishares",
    symbol: "mds",
    name: "MediShares",
  },
  {
    id: "medi-token",
    symbol: "medi",
    name: "Medi Token",
  },
  {
    id: "medium",
    symbol: "mdm",
    name: "MEDIUM",
  },
  {
    id: "medooza-ecosystem",
    symbol: "mdza",
    name: "Medooza Ecosystem",
  },
  {
    id: "medping",
    symbol: "mpg",
    name: "Medping",
  },
  {
    id: "medusa",
    symbol: "dusa",
    name: "Medusa",
  },
  {
    id: "meebits",
    symbol: "meebits20",
    name: "Meebits",
  },
  {
    id: "meebitsdao-pool",
    symbol: "mbbt",
    name: "MeebitsDAO Pool",
  },
  {
    id: "meeb-master",
    symbol: "meeb",
    name: "Meeb Master",
  },
  {
    id: "meeb-vault-nftx",
    symbol: "meeb",
    name: "MEEB Vault (NFTX)",
  },
  {
    id: "meetone",
    symbol: "meetone",
    name: "MEET.ONE",
  },
  {
    id: "meetple",
    symbol: "mpt",
    name: "Meetple",
  },
  {
    id: "megabonk",
    symbol: "mbonk",
    name: "megaBonk",
  },
  {
    id: "megacoin",
    symbol: "mec",
    name: "Megacoin",
  },
  {
    id: "megacosm",
    symbol: "megacosm",
    name: "Megacosm",
  },
  {
    id: "megacryptopolis",
    symbol: "mega",
    name: "MegaCryptoPolis",
  },
  {
    id: "mega-lottery-services-global",
    symbol: "mlr",
    name: "Mega Lottery Services Global",
  },
  {
    id: "megarise",
    symbol: "megarise",
    name: "MegaRise",
  },
  {
    id: "megashibazilla",
    symbol: "msz",
    name: "MegaShibaZilla",
  },
  {
    id: "megatech",
    symbol: "mgt",
    name: "Megatech",
  },
  {
    id: "megatoken",
    symbol: "mega",
    name: "MegaToken",
  },
  {
    id: "megaweapon",
    symbol: "$weapon",
    name: "Megaweapon",
  },
  {
    id: "megla-doge",
    symbol: "MGD",
    name: "Megla Doge",
  },
  {
    id: "meka",
    symbol: "meka",
    name: "MekaMiners",
  },
  {
    id: "mekka-froggo",
    symbol: "lfgo",
    name: "Mekka Froggo",
  },
  {
    id: "melalie",
    symbol: "mel",
    name: "Melalie",
  },
  {
    id: "meland-ai",
    symbol: "meld",
    name: "Meland.ai",
  },
  {
    id: "meld-gold",
    symbol: "mcau",
    name: "Meld Gold",
  },
  {
    id: "meli-games",
    symbol: "meli",
    name: "Meli Games",
  },
  {
    id: "meliodas",
    symbol: "meliodas",
    name: "Meliodas",
  },
  {
    id: "meliora",
    symbol: "mora",
    name: "Meliora",
  },
  {
    id: "mello-token",
    symbol: "mello",
    name: "Mello Token",
  },
  {
    id: "melodity",
    symbol: "meld",
    name: "Melodity",
  },
  {
    id: "melody",
    symbol: "melody",
    name: "Melody",
  },
  {
    id: "melon",
    symbol: "mln",
    name: "Enzyme",
  },
  {
    id: "melonheadsprotocol",
    symbol: "mhsp",
    name: "MelonHeadSProtocol",
  },
  {
    id: "melonx",
    symbol: "$mlnx",
    name: "MELONx",
  },
  {
    id: "melo-token",
    symbol: "melo",
    name: "Melo Token",
  },
  {
    id: "membrana-platform",
    symbol: "mbn",
    name: "Membrana",
  },
  {
    id: "meme-cash",
    symbol: "mch",
    name: "Meme Cash",
  },
  {
    id: "memecoin",
    symbol: "mem",
    name: "Memecoin",
  },
  {
    id: "memecoin-factory",
    symbol: "factory",
    name: "Memecoin Factory",
  },
  {
    id: "memecoinuniverse",
    symbol: "mcu",
    name: "MemeCoinUniverse",
  },
  {
    id: "meme-doge-coin",
    symbol: "memedoge",
    name: "Meme Doge Coin",
  },
  {
    id: "memeflate",
    symbol: "mflate",
    name: "Memeflate",
  },
  {
    id: "memefund",
    symbol: "mfund",
    name: "Memefund",
  },
  {
    id: "meme-games",
    symbol: "mgames",
    name: "Meme Games",
  },
  {
    id: "meme-inu",
    symbol: "meme",
    name: "Meme Inu",
  },
  {
    id: "memekiller",
    symbol: "kill",
    name: "MemeKiller",
  },
  {
    id: "meme-lordz",
    symbol: "$lordz",
    name: "Meme Lordz",
  },
  {
    id: "meme-ltd",
    symbol: "meme20",
    name: "MEME LTD",
  },
  {
    id: "memenft",
    symbol: "mnft",
    name: "MemeNFT",
  },
  {
    id: "memenopoly-money",
    symbol: "mnop",
    name: "Memenopoly Money",
  },
  {
    id: "memepad",
    symbol: "mepad",
    name: "MemePad",
  },
  {
    id: "memetic",
    symbol: "meme",
    name: "Memetic",
  },
  {
    id: "memewars",
    symbol: "mwar",
    name: "MemeWars",
  },
  {
    id: "memex",
    symbol: "memex",
    name: "MEMEX",
  },
  {
    id: "menapay",
    symbol: "mpay",
    name: "Menapay",
  },
  {
    id: "menlo-one",
    symbol: "one",
    name: "Menlo One",
  },
  {
    id: "mensa",
    symbol: "msa",
    name: "Mensa",
  },
  {
    id: "mensa-protocol",
    symbol: "mensa",
    name: "Mensa Protocol",
  },
  {
    id: "meong-token",
    symbol: "meong",
    name: "Meong Token",
  },
  {
    id: "meo-tools",
    symbol: "meo",
    name: "Meo.tools",
  },
  {
    id: "meowcat",
    symbol: "meowcat",
    name: "MeowCat",
  },
  {
    id: "meownaut",
    symbol: "mnt",
    name: "Meownaut",
  },
  {
    id: "meowshi",
    symbol: "meow",
    name: "Meowshi",
  },
  {
    id: "meowswap",
    symbol: "meow",
    name: "MeowSwap",
  },
  {
    id: "mercenary",
    symbol: "mgold",
    name: "Mercenary",
  },
  {
    id: "merchant-token",
    symbol: "mto",
    name: "Merchant Token",
  },
  {
    id: "merchdao",
    symbol: "mrch",
    name: "MerchDAO",
  },
  {
    id: "mercor-finance",
    symbol: "mrcr",
    name: "Mercor Finance",
  },
  {
    id: "merculet",
    symbol: "mvp",
    name: "Merculet",
  },
  {
    id: "mercurial",
    symbol: "mer",
    name: "Mercurial",
  },
  {
    id: "mercurity-finance",
    symbol: "mee",
    name: "Mercurity Finance",
  },
  {
    id: "mercury",
    symbol: "mer",
    name: "Mercury",
  },
  {
    id: "merebel",
    symbol: "meri",
    name: "Merebel",
  },
  {
    id: "merge",
    symbol: "merge",
    name: "Merge",
  },
  {
    id: "mergecoin",
    symbol: "mgc",
    name: "MergeCoin",
  },
  {
    id: "meridian-network",
    symbol: "lock",
    name: "Meridian Network",
  },
  {
    id: "merit-circle",
    symbol: "mc",
    name: "Merit Circle",
  },
  {
    id: "merkle-network",
    symbol: "merkle",
    name: "Merkle Network",
  },
  {
    id: "merlin",
    symbol: "merl",
    name: "Merlin",
  },
  {
    id: "mermaid",
    symbol: "merd",
    name: "Mermaid",
  },
  {
    id: "meroechain",
    symbol: "mrc",
    name: "MeroeChain",
  },
  {
    id: "meschain",
    symbol: "mes",
    name: "MesChain",
  },
  {
    id: "mesefa",
    symbol: "sefa",
    name: "Mesefa",
  },
  {
    id: "meshbox",
    symbol: "mesh",
    name: "MeshBox",
  },
  {
    id: "meso",
    symbol: "meso",
    name: "Meso",
  },
  {
    id: "meta",
    symbol: "mta",
    name: "mStable Governance Token: Meta",
  },
  {
    id: "metaaltpad",
    symbol: "MAP",
    name: "MetaAltPad",
  },
  {
    id: "meta-apes",
    symbol: "MAPES",
    name: "Meta Apes",
  },
  {
    id: "metaaudio",
    symbol: "audiom",
    name: "MetaAudio",
  },
  {
    id: "metaaxis",
    symbol: "mta",
    name: "MetaAxis",
  },
  {
    id: "metabean",
    symbol: "metabean",
    name: "MetaBean",
  },
  {
    id: "metabet",
    symbol: "mbet",
    name: "MetaBET",
  },
  {
    id: "metabike",
    symbol: "MBIKE",
    name: "Metabike",
  },
  {
    id: "meta-billionaires-club",
    symbol: "metabc",
    name: "Meta Billionaires Club",
  },
  {
    id: "metabrands",
    symbol: "mage",
    name: "MetaBrands",
  },
  {
    id: "meta-brawl",
    symbol: "brawl",
    name: "Meta Brawl",
  },
  {
    id: "meta-bsc",
    symbol: "meta",
    name: "Meta BSC",
  },
  {
    id: "metabullrage",
    symbol: "berage",
    name: "Metabullrage",
  },
  {
    id: "metabullrun",
    symbol: "mbr",
    name: "MetaBullRun",
  },
  {
    id: "metabusdcoin",
    symbol: "mbc",
    name: "MetaBUSDCoin",
  },
  {
    id: "meta-capital",
    symbol: "mcap",
    name: "Meta Capital",
  },
  {
    id: "metacash",
    symbol: "meta",
    name: "MetaCash",
  },
  {
    id: "metacat",
    symbol: "metacat",
    name: "MetaCat",
  },
  {
    id: "meta-cat",
    symbol: "mcat",
    name: "Meta Cat",
  },
  {
    id: "meta-cloth",
    symbol: "meta cloth",
    name: "Meta Cloth",
  },
  {
    id: "metacoin",
    symbol: "mtc",
    name: "Metacoin",
  },
  {
    id: "metacraft",
    symbol: "mct",
    name: "Metacraft",
  },
  {
    id: "metacz",
    symbol: "metacz",
    name: "MetaCZ",
  },
  {
    id: "meta-decentraland",
    symbol: "mdl",
    name: "Meta Decentraland",
  },
  {
    id: "metadium",
    symbol: "meta",
    name: "Metadium",
  },
  {
    id: "metadoge",
    symbol: "metadoge",
    name: "MetaDoge",
  },
  {
    id: "meta-doge",
    symbol: "metadoge",
    name: "Meta Doge",
  },
  {
    id: "metadogeswap",
    symbol: "mds",
    name: "MetaDogeSwap",
  },
  {
    id: "metadog-racing",
    symbol: "dog$",
    name: "MetaDog Racing",
  },
  {
    id: "metadrace",
    symbol: "drace",
    name: "MetaDrace",
  },
  {
    id: "metadress",
    symbol: "mtd",
    name: "MetaDress",
  },
  {
    id: "metadubai",
    symbol: "mdb",
    name: "MetaDubai",
  },
  {
    id: "metafabric",
    symbol: "fabric",
    name: "MetaFabric",
  },
  {
    id: "metaface",
    symbol: "MFT",
    name: "MetaFace",
  },
  {
    id: "metafarm-dao",
    symbol: "metafarm",
    name: "MetaFarm DAO",
  },
  {
    id: "metafashioners",
    symbol: "mfs",
    name: "MetaFashioners",
  },
  {
    id: "metaficial-world",
    symbol: "mw",
    name: "Metaficial World",
  },
  {
    id: "metafinance",
    symbol: "mfi",
    name: "MetaFinance",
  },
  {
    id: "meta_finance",
    symbol: "mf1",
    name: "Meta Finance",
  },
  {
    id: "metafish",
    symbol: "fish",
    name: "Metafish",
  },
  {
    id: "metaflip",
    symbol: "metaflip",
    name: "MetaFlip",
  },
  {
    id: "meta-floki",
    symbol: "mfloki",
    name: "Meta Floki",
  },
  {
    id: "meta-floki-inu",
    symbol: "metaflokinu",
    name: "Meta Floki Inu",
  },
  {
    id: "meta-flokimon-go",
    symbol: "metaflokimg",
    name: "Meta FlokiMon Go",
  },
  {
    id: "metafluence",
    symbol: "meto",
    name: "Metafluence",
  },
  {
    id: "metafocus",
    symbol: "metafocus",
    name: "MetaFocus",
  },
  {
    id: "metafootball",
    symbol: "mtf",
    name: "MetaFootball",
  },
  {
    id: "metagalaxy",
    symbol: "mgxy",
    name: "Metagalaxy",
  },
  {
    id: "metagalaxy-land",
    symbol: "megaland",
    name: "Metagalaxy Land",
  },
  {
    id: "metagame",
    symbol: "seed",
    name: "MetaGame",
  },
  {
    id: "metagame-arena",
    symbol: "mga",
    name: "Metagame Arena",
  },
  {
    id: "metagamehub-dao",
    symbol: "mgh",
    name: "MetaGameHub DAO",
  },
  {
    id: "metagaming",
    symbol: "mtgm",
    name: "MetaGaming",
  },
  {
    id: "metagear",
    symbol: "gear",
    name: "MetaGear",
  },
  {
    id: "metagochi",
    symbol: "mgchi",
    name: "Metagochi",
  },
  {
    id: "metagods",
    symbol: "mgod",
    name: "MetaGods",
  },
  {
    id: "metagon",
    symbol: "metagon",
    name: "Metagon",
  },
  {
    id: "meta-grow",
    symbol: "META",
    name: "META GROW",
  },
  {
    id: "meta-hangry-games",
    symbol: "mhg",
    name: "Meta Hangry Games",
  },
  {
    id: "metahash",
    symbol: "mhc",
    name: "#MetaHash",
  },
  {
    id: "metahero",
    symbol: "hero",
    name: "Metahero",
  },
  {
    id: "meta-inu",
    symbol: "metainu",
    name: "Meta Inu",
  },
  {
    id: "meta-inu-token",
    symbol: "meta",
    name: "Meta Inu Token",
  },
  {
    id: "meta-islands",
    symbol: "igo",
    name: "Meta Islands",
  },
  {
    id: "metakings",
    symbol: "mtk",
    name: "Metakings",
  },
  {
    id: "meta-knight",
    symbol: "MetaKnight",
    name: "Meta Knight",
  },
  {
    id: "metakombat",
    symbol: "kombat",
    name: "MetaKombat",
  },
  {
    id: "metal",
    symbol: "mtl",
    name: "Metal",
  },
  {
    id: "metalama",
    symbol: "LAMA",
    name: "MetaLama",
  },
  {
    id: "metaland-dao",
    symbol: "meta",
    name: "Metaland DAO",
  },
  {
    id: "metaland-gameverse",
    symbol: "mst",
    name: "Monster",
  },
  {
    id: "meta-land-yield",
    symbol: "mly",
    name: "Meta Land Yield",
  },
  {
    id: "metal-backed-money",
    symbol: "mbmx",
    name: "Metal Backed Money",
  },
  {
    id: "meta-legends",
    symbol: "metal",
    name: "Meta Legends",
  },
  {
    id: "metal-music-coin",
    symbol: "mtlmc3",
    name: "Metal Music Coin",
  },
  {
    id: "metaloop-tech",
    symbol: "mlt",
    name: "Metaloop Tech",
  },
  {
    id: "metal-packaging-token",
    symbol: "mpt",
    name: "Metal Packaging Token",
  },
  {
    id: "metalswap",
    symbol: "xmt",
    name: "MetalSwap",
  },
  {
    id: "metamars",
    symbol: "metam",
    name: "MetaMars",
  },
  {
    id: "metamatrix",
    symbol: "mtx",
    name: "MetaMatrix",
  },
  {
    id: "meta-monstas",
    symbol: "MONSTA",
    name: "Meta Monstas",
  },
  {
    id: "metamoon",
    symbol: "MetaMoon",
    name: "MetaMoon",
  },
  {
    id: "metamorph",
    symbol: "metm",
    name: "MetaMorph",
  },
  {
    id: "metamounts",
    symbol: "mount",
    name: "MetaMounts",
  },
  {
    id: "metamui",
    symbol: "mmui",
    name: "MetaMUI",
  },
  {
    id: "meta-musk",
    symbol: "META",
    name: "Meta Musk",
  },
  {
    id: "meta-mvrs",
    symbol: "mvrs",
    name: "Meta MVRS",
  },
  {
    id: "metanations",
    symbol: "mena",
    name: "MetaNations",
  },
  {
    id: "meta-network",
    symbol: "meta",
    name: "Meta Network",
  },
  {
    id: "metaniagames",
    symbol: "metania",
    name: "MetaniaGames",
  },
  {
    id: "metanyx",
    symbol: "metx",
    name: "Metanyx",
  },
  {
    id: "metapad",
    symbol: "mpd",
    name: "Metapad",
  },
  {
    id: "metapay",
    symbol: "mpay",
    name: "Metapay",
  },
  {
    id: "metapets",
    symbol: "metapets",
    name: "MetaPets",
  },
  {
    id: "meta-pets",
    symbol: "mp",
    name: "Meta Pets",
  },
  {
    id: "metaplace",
    symbol: "mpc",
    name: "Metaplace",
  },
  {
    id: "metaplanet",
    symbol: "mpl",
    name: "MetaPlanet",
  },
  {
    id: "metaplay",
    symbol: "mplay",
    name: "MetaPlay",
  },
  {
    id: "metaplayers-gg",
    symbol: "fps",
    name: "MetaPlayers.gg",
  },
  {
    id: "metapool",
    symbol: "mpool",
    name: "Metapool",
  },
  {
    id: "metaportal",
    symbol: "metaportal",
    name: "MetaPortal",
  },
  {
    id: "metapplay",
    symbol: "metap",
    name: "MetapPlay",
  },
  {
    id: "metaraca",
    symbol: "metar",
    name: "MetaRaca",
  },
  {
    id: "metaracers",
    symbol: "mrs",
    name: "MetaRacers",
  },
  {
    id: "metarcade",
    symbol: "meta",
    name: "Metarcade",
  },
  {
    id: "metareserve",
    symbol: "power",
    name: "MetaReserve",
  },
  {
    id: "metasafemoon",
    symbol: "metasfm",
    name: "MetaSafeMoon",
  },
  {
    id: "metaseer",
    symbol: "metas",
    name: "Metaseer",
  },
  {
    id: "metashiba",
    symbol: "METASHIB",
    name: "MetaShiba",
  },
  {
    id: "meta-shiba",
    symbol: "mshiba",
    name: "Meta Shiba",
  },
  {
    id: "meta-shiba-bsc",
    symbol: "meshi",
    name: "Meta Shiba BSC",
  },
  {
    id: "metashib-token",
    symbol: "metashib",
    name: "MetaShib Token",
  },
  {
    id: "meta-shield",
    symbol: "shield",
    name: "Meta Shield",
  },
  {
    id: "metasoccer",
    symbol: "msu",
    name: "MetaSoccer",
  },
  {
    id: "metasoldier",
    symbol: "msd",
    name: "MetaSoldier",
  },
  {
    id: "metaspace",
    symbol: "mspace",
    name: "Metaspace",
  },
  {
    id: "metaspace-reit",
    symbol: "mreit",
    name: "MetaSpace REIT",
  },
  {
    id: "meta-spatial",
    symbol: "spat",
    name: "Meta Spatial",
  },
  {
    id: "metastar",
    symbol: "metastar",
    name: "Metastar",
  },
  {
    id: "metastrike",
    symbol: "mts",
    name: "Metastrike",
  },
  {
    id: "metasurvivor",
    symbol: "msg",
    name: "MetaSurvivor",
  },
  {
    id: "metatown",
    symbol: "mtown",
    name: "MetaTown",
  },
  {
    id: "metauniverse",
    symbol: "metauniverse",
    name: "MetaUniverse",
  },
  {
    id: "meta-vault-nftx",
    symbol: "meta",
    name: "META Vault (NFTX)",
  },
  {
    id: "metavegas",
    symbol: "metavegas",
    name: "MetaVegas",
  },
  {
    id: "metaverseair",
    symbol: "mvrs",
    name: "MetaverseAir",
  },
  {
    id: "metaverse-capital",
    symbol: "MVC",
    name: "Metaverse Capital",
  },
  {
    id: "metaverse-doge",
    symbol: "$MVDOGE",
    name: "Metaverse Doge",
  },
  {
    id: "metaverse-dualchain-network-architecture",
    symbol: "dna",
    name: "Metaverse DNA",
  },
  {
    id: "metaverse-etp",
    symbol: "etp",
    name: "Metaverse ETP",
  },
  {
    id: "metaverse-exchange",
    symbol: "metacex",
    name: "Metaverse Exchange",
  },
  {
    id: "metaverse-face",
    symbol: "mefa",
    name: "Metaverse Face",
  },
  {
    id: "metaverse-index",
    symbol: "mvi",
    name: "Metaverse Index",
  },
  {
    id: "metaverse-index-token",
    symbol: "metai",
    name: "Metaverse Index Token",
  },
  {
    id: "metaverse-miner",
    symbol: "META",
    name: "Metaverse Miner",
  },
  {
    id: "metaverse-nft-index",
    symbol: "PLAY",
    name: "Metaverse NFT Index",
  },
  {
    id: "metaversepro",
    symbol: "meta",
    name: "MetaversePRO",
  },
  {
    id: "metaversex",
    symbol: "metax",
    name: "MetaverseX",
  },
  {
    id: "metavpad",
    symbol: "metav",
    name: "MetaVPad",
  },
  {
    id: "metawars",
    symbol: "wars",
    name: "MetaWars",
  },
  {
    id: "metawhale-btc",
    symbol: "mwbtc",
    name: "MetaWhale BTC",
  },
  {
    id: "metawhale-gold",
    symbol: "MWG",
    name: "Metawhale Gold",
  },
  {
    id: "metaworld",
    symbol: "MW",
    name: "MetaWorld",
  },
  {
    id: "meta-world",
    symbol: "metaworld",
    name: "Meta World",
  },
  {
    id: "meta-world-game",
    symbol: "MTW",
    name: "Meta World Game",
  },
  {
    id: "metaxiz",
    symbol: "mexi",
    name: "Metaxiz",
  },
  {
    id: "metaxy",
    symbol: "mxy",
    name: "Metaxy",
  },
  {
    id: "metazilla",
    symbol: "mz",
    name: "MetaZilla",
  },
  {
    id: "metazoon-token",
    symbol: "mez",
    name: "MetaZoon Token",
  },
  {
    id: "metazuckzilla",
    symbol: "meta",
    name: "MetaZuckZilla",
  },
  {
    id: "meteorite-network",
    symbol: "meteor",
    name: "Meteorite Network",
  },
  {
    id: "meteor-remnants-essence",
    symbol: "mre",
    name: "Meteor Remnants Essence",
  },
  {
    id: "meter",
    symbol: "mtrg",
    name: "Meter Governance",
  },
  {
    id: "meter-governance-mapped-by-meter-io",
    symbol: "eMTRG",
    name: "Meter Governance mapped by Meter.io",
  },
  {
    id: "meter-stable",
    symbol: "mtr",
    name: "Meter Stable",
  },
  {
    id: "method-fi",
    symbol: "mthd",
    name: "Method Finance",
  },
  {
    id: "metis",
    symbol: "mts",
    name: "Metis",
  },
  {
    id: "metisrise",
    symbol: "mrise",
    name: "MetisRise",
  },
  {
    id: "metis-token",
    symbol: "metis",
    name: "Metis Token",
  },
  {
    id: "metoshi",
    symbol: "meto",
    name: "Metoshi",
  },
  {
    id: "metric-exchange",
    symbol: "metric",
    name: "MetricExchange",
  },
  {
    id: "metronome",
    symbol: "met",
    name: "Metronome",
  },
  {
    id: "mettalex",
    symbol: "mtlx",
    name: "Mettalex",
  },
  {
    id: "metti-inu",
    symbol: "metti",
    name: "Metti Inu",
  },
  {
    id: "mew-inu",
    symbol: "MEW",
    name: "Mew Inu",
  },
  {
    id: "mewn-inu",
    symbol: "mewn",
    name: "Mewn Inu",
  },
  {
    id: "mewtwo-inu",
    symbol: "mewtwo",
    name: "Mewtwo Inu",
  },
  {
    id: "mex",
    symbol: "mex",
    name: "MEX",
  },
  {
    id: "mexc-token",
    symbol: "mexc",
    name: "MEXC Token",
  },
  {
    id: "mgc-token",
    symbol: "mgc",
    name: "MGC Token",
  },
  {
    id: "mgoat",
    symbol: "mgoat",
    name: "MetaGoat",
  },
  {
    id: "mg-social",
    symbol: "mgs",
    name: "MG.Social",
  },
  {
    id: "miami",
    symbol: "miami",
    name: "MIAMI",
  },
  {
    id: "miamicoin",
    symbol: "mia",
    name: "MiamiCoin",
  },
  {
    id: "miami-land",
    symbol: "miami",
    name: "Miami Land",
  },
  {
    id: "miaw-token",
    symbol: "miaw",
    name: "Miaw",
  },
  {
    id: "mib-coin",
    symbol: "mib",
    name: "MIB Coin",
  },
  {
    id: "microbitcoin",
    symbol: "mbc",
    name: "MicroBitcoin",
  },
  {
    id: "micro-bitcoin-finance",
    symbol: "mbtc",
    name: "Micro Bitcoin Finance",
  },
  {
    id: "microcoin",
    symbol: "mcc",
    name: "MicroCoin",
  },
  {
    id: "microdexwallet",
    symbol: "micro",
    name: "MicroDexWallet",
  },
  {
    id: "micro-gaming-protocol",
    symbol: "mgp",
    name: "Micro Gaming Protocol",
  },
  {
    id: "micromines",
    symbol: "micro",
    name: "Micromines",
  },
  {
    id: "micromoney",
    symbol: "amm",
    name: "MicroMoney",
  },
  {
    id: "micropets",
    symbol: "pets",
    name: "MicroPets",
  },
  {
    id: "micro-santa-coin",
    symbol: "MicroSanta",
    name: "Micro Santa Coin",
  },
  {
    id: "microshiba",
    symbol: "microshib",
    name: "MicroSHIBA",
  },
  {
    id: "microtick",
    symbol: "TICK",
    name: "Microtick",
  },
  {
    id: "microtuber",
    symbol: "mct",
    name: "MicroTuber",
  },
  {
    id: "midas",
    symbol: "midas",
    name: "Midas",
  },
  {
    id: "midasdao",
    symbol: "crown",
    name: "MidasDAO",
  },
  {
    id: "midas-dollar",
    symbol: "mdo",
    name: "Midas Dollar",
  },
  {
    id: "midas-gold",
    symbol: "mdg",
    name: "Midas Gold",
  },
  {
    id: "midas-protocol",
    symbol: "mas",
    name: "Midas Protocol",
  },
  {
    id: "migranet",
    symbol: "mig",
    name: "Migranet",
  },
  {
    id: "miks-coin",
    symbol: "miks",
    name: "MIKS COIN",
  },
  {
    id: "mileverse",
    symbol: "mvc",
    name: "MileVerse",
  },
  {
    id: "milf-finance",
    symbol: "milf",
    name: "MILF Finance",
  },
  {
    id: "military-finance",
    symbol: "mil",
    name: "Military Finance",
  },
  {
    id: "militia-games",
    symbol: "milit",
    name: "Militia Games",
  },
  {
    id: "milk2",
    symbol: "milk",
    name: "CashCow Protocol Milk",
  },
  {
    id: "milk-alliance",
    symbol: "mlk",
    name: "MiL.k Alliance",
  },
  {
    id: "milk-and-butter",
    symbol: "mb",
    name: "Milk and Butter",
  },
  {
    id: "milkshakeswap",
    symbol: "milk",
    name: "Milkshake Swap",
  },
  {
    id: "milk-token",
    symbol: "milk",
    name: "Milk Token",
  },
  {
    id: "milky-token",
    symbol: "milky",
    name: "Milky Token",
  },
  {
    id: "milkywayex",
    symbol: "milky",
    name: "MilkyWayEx",
  },
  {
    id: "millenniumclub",
    symbol: "mclb",
    name: "MillenniumClub Coin",
  },
  {
    id: "millimeter",
    symbol: "mm",
    name: "Millimeter",
  },
  {
    id: "million",
    symbol: "mm",
    name: "Million",
  },
  {
    id: "millionaire-maker",
    symbol: "million",
    name: "Millionaire Maker",
  },
  {
    id: "million-monke",
    symbol: "MIMO",
    name: "Million Monke",
  },
  {
    id: "millionsy",
    symbol: "milli",
    name: "MILLIONSY",
  },
  {
    id: "millonarios-fc-fan-token",
    symbol: "mfc",
    name: "Millonarios FC Fan Token",
  },
  {
    id: "mim",
    symbol: "swarm",
    name: "MIM",
  },
  {
    id: "mimas",
    symbol: "mimas",
    name: "Mimas",
  },
  {
    id: "mimatic",
    symbol: "mimatic",
    name: "MAI",
  },
  {
    id: "mimblewimblecoin",
    symbol: "mwc",
    name: "MimbleWimbleCoin",
  },
  {
    id: "mimir-token",
    symbol: "mimir",
    name: "Mimir Token",
  },
  {
    id: "mimo-parallel-governance-token",
    symbol: "mimo",
    name: "Mimo Governance Token",
  },
  {
    id: "mimosa",
    symbol: "mimo",
    name: "Mimosa",
  },
  {
    id: "mina-protocol",
    symbol: "mina",
    name: "Mina Protocol",
  },
  {
    id: "mincoin",
    symbol: "mnc",
    name: "Mincoin",
  },
  {
    id: "mindcell",
    symbol: "mdc",
    name: "MindCell",
  },
  {
    id: "mindcoin",
    symbol: "mnd",
    name: "MindCoin",
  },
  {
    id: "mindexnew",
    symbol: "micn",
    name: "Mindexnew",
  },
  {
    id: "mindfolk-wood",
    symbol: "$wood",
    name: "Mindfolk Wood",
  },
  {
    id: "mind-music",
    symbol: "mnd",
    name: "Mind Music",
  },
  {
    id: "mindol",
    symbol: "min",
    name: "MINDOL",
  },
  {
    id: "minds",
    symbol: "minds",
    name: "Minds",
  },
  {
    id: "mindsync",
    symbol: "mai",
    name: "Mindsync",
  },
  {
    id: "minebee",
    symbol: "mb",
    name: "MineBee",
  },
  {
    id: "minecrypto",
    symbol: "mcr",
    name: "MineCrypto",
  },
  {
    id: "mine-network",
    symbol: "mnet",
    name: "MINE Network",
  },
  {
    id: "mineral",
    symbol: "mnr",
    name: "Mineral",
  },
  {
    id: "minereum",
    symbol: "mne",
    name: "Minereum",
  },
  {
    id: "minergate-token",
    symbol: "mg",
    name: "MinerGate Token",
  },
  {
    id: "minersdefi",
    symbol: "miners",
    name: "MinersDefi",
  },
  {
    id: "minerva-wallet",
    symbol: "miva",
    name: "Minerva Wallet",
  },
  {
    id: "mines-of-dalarnia",
    symbol: "dar",
    name: "Mines of Dalarnia",
  },
  {
    id: "mineum",
    symbol: "mnm",
    name: "Mineum",
  },
  {
    id: "mini",
    symbol: "mini",
    name: "Mini",
  },
  {
    id: "minibaby",
    symbol: "MBBY",
    name: "MiniBaby",
  },
  {
    id: "mini-baby-doge",
    symbol: "minibabydoge",
    name: "Mini Baby Doge",
  },
  {
    id: "minibitcoin",
    symbol: "mbtc",
    name: "MiniBitcoin",
  },
  {
    id: "minibnb",
    symbol: "minibnb",
    name: "MiniBNB",
  },
  {
    id: "minibtc",
    symbol: "minibtc",
    name: "MiniBTC",
  },
  {
    id: "minicake",
    symbol: "minicake",
    name: "MiniCake",
  },
  {
    id: "mini-cardano",
    symbol: "mada",
    name: "Mini Cardano",
  },
  {
    id: "minidoge",
    symbol: "minidoge",
    name: "MiniDOGE",
  },
  {
    id: "mini-doge-pro",
    symbol: "minidogepro",
    name: "Mini Doge Pro",
  },
  {
    id: "minieverdoge",
    symbol: "med",
    name: "MiniEverDoge",
  },
  {
    id: "mini-floki",
    symbol: "MiniFloki",
    name: "Mini Floki",
  },
  {
    id: "miniflokiada",
    symbol: "mflokiada",
    name: "MiniFlokiADA",
  },
  {
    id: "minifootball",
    symbol: "minifootball",
    name: "Minifootball",
  },
  {
    id: "minihokk",
    symbol: "MHokk",
    name: "MiniHokk",
  },
  {
    id: "mini-hollywood-doge",
    symbol: "mollydoge⭐",
    name: "Mini Hollywood Doge",
  },
  {
    id: "minikishimoto-inu",
    symbol: "minikishimoto",
    name: "miniKishimoto Inu",
  },
  {
    id: "minikishu",
    symbol: "MINIKISHU",
    name: "MINIKISHU",
  },
  {
    id: "minimals",
    symbol: "mms",
    name: "Minimals",
  },
  {
    id: "mini-metis",
    symbol: "minime",
    name: "Mini Metis",
  },
  {
    id: "mini-mongoose",
    symbol: "miniMONGOOSE",
    name: "mini Mongoose",
  },
  {
    id: "mini-saitama",
    symbol: "minisaitama",
    name: "Mini Saitama",
  },
  {
    id: "minishib",
    symbol: "minishib",
    name: "MiniShib",
  },
  {
    id: "mini-shib",
    symbol: "mshib",
    name: "mini SHIB",
  },
  {
    id: "mini-shiba",
    symbol: "minishiba",
    name: "Mini Shiba",
  },
  {
    id: "minishib-eth",
    symbol: "minishib",
    name: "miniSHIB ETH",
  },
  {
    id: "minishib-token",
    symbol: "minishib",
    name: "miniSHIB Token",
  },
  {
    id: "minisoccer",
    symbol: "minisoccer",
    name: "Minisoccer",
  },
  {
    id: "minisports-token",
    symbol: "minisports",
    name: "MiniSports Token",
  },
  {
    id: "minisportzilla",
    symbol: "minisportz",
    name: "MiniSportZilla",
  },
  {
    id: "minithunder",
    symbol: "Thunder",
    name: "MiniThunder",
  },
  {
    id: "mini-tiger",
    symbol: "minitiger",
    name: "Mini Tiger",
  },
  {
    id: "miniusdc",
    symbol: "miniusdc",
    name: "MiniUSDC",
  },
  {
    id: "minix",
    symbol: "MNX",
    name: "MiniX",
  },
  {
    id: "miniyak",
    symbol: "myak",
    name: "MiniYAK",
  },
  {
    id: "minmax",
    symbol: "max",
    name: "MinMax",
  },
  {
    id: "minotaur",
    symbol: "MINO",
    name: "Minotaur",
  },
  {
    id: "mint-asset",
    symbol: "mint",
    name: "Mint Asset",
  },
  {
    id: "mint-club",
    symbol: "mint",
    name: "Mint Club",
  },
  {
    id: "mintcoin",
    symbol: "mint",
    name: "Mintcoin",
  },
  {
    id: "mintea",
    symbol: "mint",
    name: "Mintea",
  },
  {
    id: "minter-hub",
    symbol: "hub",
    name: "Minter Hub",
  },
  {
    id: "minto",
    symbol: "btcmt",
    name: "Minto",
  },
  {
    id: "mintswap",
    symbol: "mint",
    name: "MintSwap",
  },
  {
    id: "minty-art",
    symbol: "minty",
    name: "Minty Art",
  },
  {
    id: "mintyswap",
    symbol: "mintys",
    name: "MintySwap",
  },
  {
    id: "mirai-token",
    symbol: "mirai",
    name: "Mirai Token",
  },
  {
    id: "miraqle",
    symbol: "mql",
    name: "MiraQle",
  },
  {
    id: "mirocana",
    symbol: "miro",
    name: "Mirocana",
  },
  {
    id: "mirrored-airbnb",
    symbol: "mabnb",
    name: "Mirrored Airbnb",
  },
  {
    id: "mirrored-alibaba",
    symbol: "mbaba",
    name: "Mirrored Alibaba",
  },
  {
    id: "mirrored-amazon",
    symbol: "mamzn",
    name: "Mirrored Amazon",
  },
  {
    id: "mirrored-amc-entertainment",
    symbol: "mamc",
    name: "Mirrored AMC Entertainment",
  },
  {
    id: "mirrored-apple",
    symbol: "maapl",
    name: "Mirrored Apple",
  },
  {
    id: "mirrored-bitcoin",
    symbol: "mbtc",
    name: "Mirrored Bitcoin",
  },
  {
    id: "mirrored-coinbase",
    symbol: "mcoin",
    name: "Mirrored Coinbase",
  },
  {
    id: "mirrored-ether",
    symbol: "meth",
    name: "Mirrored Ether",
  },
  {
    id: "mirrored-facebook",
    symbol: "mfb",
    name: "Mirrored Facebook",
  },
  {
    id: "mirrored-galaxy-digital-holdings-ltd",
    symbol: "mglxy",
    name: "Mirrored Galaxy Digital Holdings Ltd",
  },
  {
    id: "mirrored-gamestop",
    symbol: "mgme",
    name: "Mirrored GameStop",
  },
  {
    id: "mirrored-goldman-sachs",
    symbol: "mgs",
    name: "Mirrored Goldman Sachs",
  },
  {
    id: "mirrored-google",
    symbol: "mgoogl",
    name: "Mirrored Google",
  },
  {
    id: "mirrored-invesco-qqq-trust",
    symbol: "mqqq",
    name: "Mirrored Invesco QQQ Trust",
  },
  {
    id: "mirrored-ishares-gold-trust",
    symbol: "miau",
    name: "Mirrored iShares Gold Trust",
  },
  {
    id: "mirrored-ishares-silver-trust",
    symbol: "mslv",
    name: "Mirrored iShares Silver Trust",
  },
  {
    id: "mirrored-microsoft",
    symbol: "mmsft",
    name: "Mirrored Microsoft",
  },
  {
    id: "mirrored-netflix",
    symbol: "mnflx",
    name: "Mirrored Netflix",
  },
  {
    id: "mirrored-nio",
    symbol: "mnio",
    name: "Mirrored Nio",
  },
  {
    id: "mirrored-robinhood-markets",
    symbol: "mhood",
    name: "Mirrored Robinhood Markets",
  },
  {
    id: "mirrored-spdr-s-p-500",
    symbol: "mspy",
    name: "Mirrored SPDR S&P 500",
  },
  {
    id: "mirrored-square",
    symbol: "msq",
    name: "Mirrored Square",
  },
  {
    id: "mirrored-tesla",
    symbol: "mtsla",
    name: "Mirrored Tesla",
  },
  {
    id: "mirrored-twitter",
    symbol: "mtwtr",
    name: "Mirrored Twitter",
  },
  {
    id: "mirrored-united-states-oil-fund",
    symbol: "muso",
    name: "Mirrored United States Oil Fund",
  },
  {
    id: "mirror-mamd-token",
    symbol: "mamd",
    name: "Mirror mAMD Token",
  },
  {
    id: "mirror-markk-token",
    symbol: "markk",
    name: "Mirror mARKK Token",
  },
  {
    id: "mirror-mdot-token",
    symbol: "mdot",
    name: "Mirror mDOT Token",
  },
  {
    id: "mirror-protocol",
    symbol: "mir",
    name: "Mirror Protocol",
  },
  {
    id: "mirror-world-token",
    symbol: "mw",
    name: "Mirror World Token",
  },
  {
    id: "misbloc",
    symbol: "msb",
    name: "Misbloc",
  },
  {
    id: "mishka-token",
    symbol: "mishka",
    name: "Mishka Token",
  },
  {
    id: "miss-doge",
    symbol: "mdoge",
    name: "Miss Doge",
  },
  {
    id: "missedeverything",
    symbol: "ME",
    name: "MissedEverything",
  },
  {
    id: "mission-helios",
    symbol: "helios",
    name: "Mission Helios",
  },
  {
    id: "mist",
    symbol: "mist",
    name: "Mist",
  },
  {
    id: "mistel-finance",
    symbol: "mistel",
    name: "Mistel Finance",
  },
  {
    id: "mistswap",
    symbol: "mist",
    name: "MistSwap",
  },
  {
    id: "misty-inu",
    symbol: "misty",
    name: "Misty Inu",
  },
  {
    id: "mithril",
    symbol: "mith",
    name: "Mithril",
  },
  {
    id: "mithril-share",
    symbol: "mis",
    name: "Mithril Share",
  },
  {
    id: "mithrilverse",
    symbol: "mithril",
    name: "Mithrilverse",
  },
  {
    id: "mittens",
    symbol: "mitten",
    name: "Mittens",
  },
  {
    id: "mixin",
    symbol: "xin",
    name: "Mixin",
  },
  {
    id: "mixmarvel",
    symbol: "mix",
    name: "MixMarvel",
  },
  {
    id: "mixsome",
    symbol: "some",
    name: "Mixsome",
  },
  {
    id: "mixtrust",
    symbol: "mxt",
    name: "MixTrust",
  },
  {
    id: "mixty-finance",
    symbol: "mxf",
    name: "Mixty Finance",
  },
  {
    id: "miyazaki-inu",
    symbol: "miyazaki",
    name: "Miyazaki Inu",
  },
  {
    id: "mjewel",
    symbol: "mjewel",
    name: "MJewel",
  },
  {
    id: "mkitty",
    symbol: "mkitty",
    name: "mKitty",
  },
  {
    id: "mkreth-1x-short",
    symbol: "mkrethdoom",
    name: "MKRETH 1x Short",
  },
  {
    id: "mktcash",
    symbol: "mch",
    name: "Mktcash",
  },
  {
    id: "mktcoin",
    symbol: "mlm",
    name: "MktCoin",
  },
  {
    id: "mmacoin",
    symbol: "MMA",
    name: "MMACoin",
  },
  {
    id: "mmaon",
    symbol: "mmaon",
    name: "MMAON",
  },
  {
    id: "mmfinance",
    symbol: "mmf",
    name: "MMFinance",
  },
  {
    id: "mmmluckup7",
    symbol: "mmm7",
    name: "MMMLUCKUP7",
  },
  {
    id: "mmocoin",
    symbol: "mmo",
    name: "MMOCoin",
  },
  {
    id: "mms-cash",
    symbol: "mcash",
    name: "MMS Cash",
  },
  {
    id: "mms-coin",
    symbol: "mmsc",
    name: "MMS Coin",
  },
  {
    id: "mm-token",
    symbol: "mm",
    name: "MM Token",
  },
  {
    id: "mnmcoin",
    symbol: "mnmc",
    name: "MNMCoin",
  },
  {
    id: "mnpostree",
    symbol: "mptc",
    name: "MNPoSTree",
  },
  {
    id: "moar",
    symbol: "moar",
    name: "Moar Finance",
  },
  {
    id: "mobiecoin",
    symbol: "mbx",
    name: "MobieCoin",
  },
  {
    id: "mobifi",
    symbol: "mofi",
    name: "MobiFi",
  },
  {
    id: "mobilecoin",
    symbol: "mob",
    name: "MobileCoin",
  },
  {
    id: "mobile-crypto-pay-coin",
    symbol: "mcpc",
    name: "Mobile Crypto Pay Coin",
  },
  {
    id: "mobilego",
    symbol: "mgo",
    name: "MobileGo",
  },
  {
    id: "mobilian-coin",
    symbol: "mbn",
    name: "Mobilian Coin",
  },
  {
    id: "mobilink-coin",
    symbol: "molk",
    name: "MobilinkToken",
  },
  {
    id: "mob-inu",
    symbol: "mob",
    name: "Mob Inu",
  },
  {
    id: "mobit-global",
    symbol: "mbgl",
    name: "Mobit Global",
  },
  {
    id: "mobius",
    symbol: "mobi",
    name: "Mobius",
  },
  {
    id: "mobius-finance",
    symbol: "mot",
    name: "Mobius Finance",
  },
  {
    id: "mobius-money",
    symbol: "mobi",
    name: "Mobius Money",
  },
  {
    id: "mobox",
    symbol: "mbox",
    name: "Mobox",
  },
  {
    id: "moby-dick",
    symbol: "wot",
    name: "Moby Dick",
  },
  {
    id: "mochi-inu",
    symbol: "mochi",
    name: "Mochi Inu",
  },
  {
    id: "mochi-market",
    symbol: "moma",
    name: "Mochi Market",
  },
  {
    id: "mochimo",
    symbol: "mcm",
    name: "Mochimo",
  },
  {
    id: "mochiswap",
    symbol: "mochi",
    name: "Mochiswap",
  },
  {
    id: "mochiswap-token",
    symbol: "hmochi",
    name: "MochiSwap Token",
  },
  {
    id: "mocktailswap",
    symbol: "mok",
    name: "MocktailSwap",
  },
  {
    id: "moda-dao",
    symbol: "moda",
    name: "MODA DAO",
  },
  {
    id: "modefi",
    symbol: "mod",
    name: "Modefi",
  },
  {
    id: "model-x-coin",
    symbol: "modx",
    name: "MODEL-X-coin",
  },
  {
    id: "modern-investment-coin",
    symbol: "modic",
    name: "Modern Investment Coin",
  },
  {
    id: "modex",
    symbol: "modex",
    name: "Modex",
  },
  {
    id: "modihost",
    symbol: "aim",
    name: "ModiHost",
  },
  {
    id: "moebius",
    symbol: "mobi",
    name: "Moebius",
  },
  {
    id: "moeda-loyalty-points",
    symbol: "mda",
    name: "Moeda Loyalty Points",
  },
  {
    id: "mogu",
    symbol: "mogx",
    name: "Mogu",
  },
  {
    id: "mogul-productions",
    symbol: "stars",
    name: "Mogul Productions",
  },
  {
    id: "mojitoswap",
    symbol: "mjt",
    name: "MojitoSwap",
  },
  {
    id: "mojocoin",
    symbol: "mojo",
    name: "Mojocoin",
  },
  {
    id: "mojo-v2",
    symbol: "MOJOV2",
    name: "Mojo V2",
  },
  {
    id: "molecular-future",
    symbol: "mof",
    name: "Molecular Future",
  },
  {
    id: "moma-protocol",
    symbol: "momat",
    name: "Moma Protocol",
  },
  {
    id: "momento",
    symbol: "momento",
    name: "Momento",
  },
  {
    id: "moments",
    symbol: "mmt",
    name: "Moments Market",
  },
  {
    id: "momentum",
    symbol: "XMM",
    name: "Momentum",
  },
  {
    id: "momentum-token",
    symbol: "mtm",
    name: "Momentum Token",
  },
  {
    id: "mommon",
    symbol: "mmon",
    name: "Mammon",
  },
  {
    id: "mommy-doge",
    symbol: "mommydoge",
    name: "Mommy Doge",
  },
  {
    id: "mommyusdt",
    symbol: "mommyusdt",
    name: "MommyUSDT",
  },
  {
    id: "momo-key",
    symbol: "key",
    name: "MoMo Key",
  },
  {
    id: "momo-protocol",
    symbol: "momo",
    name: "Momo Protocol",
  },
  {
    id: "momoshiba",
    symbol: "momo",
    name: "MomoShiba",
  },
  {
    id: "mona",
    symbol: "mona",
    name: "Monaco Planet",
  },
  {
    id: "monacoin",
    symbol: "mona",
    name: "MonaCoin",
  },
  {
    id: "monavale",
    symbol: "mona",
    name: "Monavale",
  },
  {
    id: "mondo-community-coin",
    symbol: "mndcc",
    name: "Mondo Community Coin",
  },
  {
    id: "monero",
    symbol: "xmr",
    name: "Monero",
  },
  {
    id: "monero-classic-xmc",
    symbol: "xmc",
    name: "Monero-Classic",
  },
  {
    id: "monerov",
    symbol: "xmv",
    name: "MoneroV",
  },
  {
    id: "moneta",
    symbol: "moneta",
    name: "Moneta",
  },
  {
    id: "monetaryunit",
    symbol: "mue",
    name: "MonetaryUnit",
  },
  {
    id: "monetas",
    symbol: "mntg",
    name: "Monetas",
  },
  {
    id: "moneta-verde",
    symbol: "mcn",
    name: "Moneta Verde",
  },
  {
    id: "monetha",
    symbol: "mth",
    name: "Monetha",
  },
  {
    id: "moneybrain-bips",
    symbol: "bips",
    name: "Moneybrain BiPS",
  },
  {
    id: "moneybyte",
    symbol: "mon",
    name: "MoneyByte",
  },
  {
    id: "moneydefiswap",
    symbol: "msd",
    name: "MoneydefiSwap",
  },
  {
    id: "moneyhero",
    symbol: "myh",
    name: "Moneyhero",
  },
  {
    id: "moneynet",
    symbol: "mnc",
    name: "Moneynet",
  },
  {
    id: "money-party",
    symbol: "party",
    name: "MONEY PARTY",
  },
  {
    id: "moneyrain-finance",
    symbol: "moneyrain",
    name: "Moneyrain Finance",
  },
  {
    id: "moneyswap",
    symbol: "mswap",
    name: "MoneySwap",
  },
  {
    id: "moneytoken",
    symbol: "imt",
    name: "MoneyToken",
  },
  {
    id: "moneytree",
    symbol: "money",
    name: "MoneyTree",
  },
  {
    id: "monfter",
    symbol: "mon",
    name: "Monfter",
  },
  {
    id: "mongo-coin",
    symbol: "mongocm",
    name: "MONGO Coin",
  },
  {
    id: "mongoose",
    symbol: "mongoose",
    name: "Mongoose",
  },
  {
    id: "mongoosecoin",
    symbol: "mongoose",
    name: "MongooseCoin",
  },
  {
    id: "moniwar",
    symbol: "mowa",
    name: "Moniwar",
  },
  {
    id: "monk",
    symbol: "monk",
    name: "Monk",
  },
  {
    id: "monkeyball",
    symbol: "mbs",
    name: "MonkeyBall",
  },
  {
    id: "monkey-claus-game",
    symbol: "MCG",
    name: "Monkey Claus Game",
  },
  {
    id: "monnos",
    symbol: "mns",
    name: "Monnos",
  },
  {
    id: "mononoke-inu",
    symbol: "Mononoke-Inu",
    name: "Mononoke Inu",
  },
  {
    id: "monox",
    symbol: "mono",
    name: "MonoX",
  },
  {
    id: "monsoon-finance",
    symbol: "mcash",
    name: "Monsoon Finance",
  },
  {
    id: "monspac",
    symbol: "mspc",
    name: "Monspac",
  },
  {
    id: "monsta-infinite",
    symbol: "moni",
    name: "Monsta Infinite",
  },
  {
    id: "monstaverse",
    symbol: "monstr",
    name: "MonstaVerse",
  },
  {
    id: "monster-adventure-token",
    symbol: "mat",
    name: "Monster Adventure Token",
  },
  {
    id: "monster-battle",
    symbol: "mbs",
    name: "Monster Battle",
  },
  {
    id: "monster-cash-share",
    symbol: "mss",
    name: "Monster Slayer Share",
  },
  {
    id: "monster-galaxy",
    symbol: "ggm",
    name: "Monster Galaxy",
  },
  {
    id: "monster-grand-prix-token",
    symbol: "mgpx",
    name: "Monster Grand Prix Token",
  },
  {
    id: "monster-of-god",
    symbol: "monx",
    name: "Monster of God",
  },
  {
    id: "monsterquest",
    symbol: "mqst",
    name: "MonsterQuest",
  },
  {
    id: "monsters-clan",
    symbol: "mons",
    name: "Monsters Clan",
  },
  {
    id: "monster-slayer",
    symbol: "ms",
    name: "Monster Slayer",
  },
  {
    id: "monster-valley",
    symbol: "monster",
    name: "Monster Valley",
  },
  {
    id: "moochii",
    symbol: "moochii",
    name: "Moochii",
  },
  {
    id: "moola",
    symbol: "mla",
    name: "Moola",
  },
  {
    id: "moola-celo-atoken",
    symbol: "mcelo",
    name: "Moola CELO AToken",
  },
  {
    id: "moola-celo-dollars",
    symbol: "mcusd",
    name: "Moola Celo Dollars",
  },
  {
    id: "moola-market",
    symbol: "moo",
    name: "Moola Market",
  },
  {
    id: "moomonster",
    symbol: "moo",
    name: "MooMonster",
  },
  {
    id: "moon",
    symbol: "moon",
    name: "r/CryptoCurrency Moons",
  },
  {
    id: "moonai",
    symbol: "mooi",
    name: "Moonaï",
  },
  {
    id: "moonarch",
    symbol: "moonarch",
    name: "Moonarch",
  },
  {
    id: "moonbar",
    symbol: "moonbar",
    name: "MoonBar",
  },
  {
    id: "moonbase",
    symbol: "mbbased",
    name: "Moonbase",
  },
  {
    id: "moonbeam",
    symbol: "glmr",
    name: "Moonbeam",
  },
  {
    id: "moonbeans",
    symbol: "beans",
    name: "MoonBeans",
  },
  {
    id: "moonbear-finance",
    symbol: "mbf",
    name: "MoonBear.Finance",
  },
  {
    id: "moonbeers",
    symbol: "beers",
    name: "MoonBeers",
  },
  {
    id: "moonbet",
    symbol: "mbet",
    name: "MoonBet",
  },
  {
    id: "moonbird",
    symbol: "mbird",
    name: "Moonbird",
  },
  {
    id: "moonboobs",
    symbol: "boobs",
    name: "MoonBoobs",
  },
  {
    id: "mooncake",
    symbol: "moon",
    name: "MoonCake",
  },
  {
    id: "mooncat-vault-nftx",
    symbol: "mooncat",
    name: "MOONCAT Vault (NFTX)",
  },
  {
    id: "moon-chain",
    symbol: "mcf",
    name: "Moon Chain",
  },
  {
    id: "mooncoin",
    symbol: "moon",
    name: "Mooncoin",
  },
  {
    id: "moondao-2",
    symbol: "md",
    name: "MoonDao",
  },
  {
    id: "moondash",
    symbol: "moondash",
    name: "MoonDash",
  },
  {
    id: "moonedge",
    symbol: "mooned",
    name: "MoonEdge",
  },
  {
    id: "moonery",
    symbol: "mnry",
    name: "Moonery",
  },
  {
    id: "mooney",
    symbol: "mooney",
    name: "Mooney",
  },
  {
    id: "moonfarmer",
    symbol: "mfm",
    name: "MoonFarmer",
  },
  {
    id: "moonfarm-finance",
    symbol: "mfo",
    name: "MoonFarm Finance",
  },
  {
    id: "moongame",
    symbol: "mgt",
    name: "Moongame",
  },
  {
    id: "mooni",
    symbol: "mooni",
    name: "Mooni",
  },
  {
    id: "moonienft",
    symbol: "mny",
    name: "MoonieNFT",
  },
  {
    id: "moon-juice",
    symbol: "juice",
    name: "Moon Juice",
  },
  {
    id: "moonka",
    symbol: "mka",
    name: "Moonka",
  },
  {
    id: "moonkat-finance",
    symbol: "mkat",
    name: "MoonKat Finance",
  },
  {
    id: "moonlana",
    symbol: "mola",
    name: "MoonLana",
  },
  {
    id: "moonlift",
    symbol: "mltpx",
    name: "Moonlift Capital",
  },
  {
    id: "moon-light-night",
    symbol: "mlnt",
    name: "Moon Light Night",
  },
  {
    id: "moonlight-token",
    symbol: "moonlight",
    name: "Moonlight Token",
  },
  {
    id: "moon-maker-protocol",
    symbol: "mmp",
    name: "Moon Maker Protocol",
  },
  {
    id: "moonminer",
    symbol: "moonminer",
    name: "MoonMiner",
  },
  {
    id: "moon-nation-game",
    symbol: "mng",
    name: "Moon Nation Game",
  },
  {
    id: "moon-owl",
    symbol: "mowl",
    name: "Moon Owl",
  },
  {
    id: "moonpaw",
    symbol: "moonpaw",
    name: "MoonPaw",
  },
  {
    id: "moonpoly",
    symbol: "cmp",
    name: "Moonpoly",
  },
  {
    id: "moonpot",
    symbol: "pots",
    name: "Moonpot",
  },
  {
    id: "moonpump",
    symbol: "pump",
    name: "MoonPump",
  },
  {
    id: "moon-rabbit",
    symbol: "aaa",
    name: "Moon Rabbit",
  },
  {
    id: "moonrabbit-2",
    symbol: "moonrabbit",
    name: "MoonRabbit",
  },
  {
    id: "moonradar-finance",
    symbol: "mrf",
    name: "Moonradar Finance",
  },
  {
    id: "moonretriever",
    symbol: "FETCH",
    name: "MoonRetriever",
  },
  {
    id: "moonrise",
    symbol: "moonrise",
    name: "MoonRise",
  },
  {
    id: "moonriver",
    symbol: "movr",
    name: "Moonriver",
  },
  {
    id: "moonrock",
    symbol: "rock",
    name: "MoonRock",
  },
  {
    id: "moon-rocket-coin",
    symbol: "mrc",
    name: "Moon Rocket Coin",
  },
  {
    id: "moon-sack",
    symbol: "sack",
    name: "Moon Sack",
  },
  {
    id: "moonscape",
    symbol: "mscp",
    name: "Moonscape",
  },
  {
    id: "moonsdust",
    symbol: "moond",
    name: "MoonsDust",
  },
  {
    id: "moonshield-finance",
    symbol: "mshld",
    name: "Moonshield Finance",
  },
  {
    id: "moonshot",
    symbol: "moonshot",
    name: "Moonshot",
  },
  {
    id: "moonshot-max",
    symbol: "msm",
    name: "MoonShot Max",
  },
  {
    id: "moonshots-farm",
    symbol: "BONES",
    name: "Moonshots Farm",
  },
  {
    id: "moonstar",
    symbol: "moonstar",
    name: "MoonStar",
  },
  {
    id: "moonstarevenge-token",
    symbol: "MTR",
    name: "MoonstaRevenge Token",
  },
  {
    id: "moonstarter",
    symbol: "mnst",
    name: "MoonStarter",
  },
  {
    id: "moon-stop",
    symbol: "mnstp",
    name: "Moon Stop",
  },
  {
    id: "moonswap",
    symbol: "moon",
    name: "MoonSwap",
  },
  {
    id: "moontimer",
    symbol: "mtg",
    name: "MoonTimer",
  },
  {
    id: "moontography",
    symbol: "mtgy",
    name: "Moontography",
  },
  {
    id: "moontoken",
    symbol: "moontoken",
    name: "MoonToken",
  },
  {
    id: "moontools",
    symbol: "moons",
    name: "MoonTools",
  },
  {
    id: "moontrust",
    symbol: "mntt",
    name: "MoonTrust",
  },
  {
    id: "moontrustbsc",
    symbol: "mnttbsc",
    name: "MoonTrustBSC",
  },
  {
    id: "moonwalk",
    symbol: "moonwalk",
    name: "MoonWalk",
  },
  {
    id: "moon-warriors",
    symbol: "mwar",
    name: "Moon Warriors",
  },
  {
    id: "moonway",
    symbol: "moonway",
    name: "MoonWay",
  },
  {
    id: "moonwilly",
    symbol: "moonwilly",
    name: "MoonWilly",
  },
  {
    id: "moonwolf-io",
    symbol: "wolf",
    name: "moonwolf.io",
  },
  {
    id: "morality",
    symbol: "mo",
    name: "Morality",
  },
  {
    id: "morcilla-war",
    symbol: "mor",
    name: "Morcilla War",
  },
  {
    id: "mork",
    symbol: "mork",
    name: "MORK",
  },
  {
    id: "morpher",
    symbol: "mph",
    name: "Morpher",
  },
  {
    id: "morpheus-labs",
    symbol: "mitx",
    name: "Morpheus Labs",
  },
  {
    id: "morpheus-network",
    symbol: "mnw",
    name: "Morpheus Network",
  },
  {
    id: "morpheus-token",
    symbol: "pills",
    name: "Morpheus Swap",
  },
  {
    id: "morphie",
    symbol: "mrfi",
    name: "Morphie",
  },
  {
    id: "morph-vault-nftx",
    symbol: "morph",
    name: "MORPH Vault (NFTX)",
  },
  {
    id: "mor-stablecoin",
    symbol: "mor",
    name: "Mor Stablecoin",
  },
  {
    id: "morty-token",
    symbol: "mrty",
    name: "Morty Token",
  },
  {
    id: "moss-carbon-credit",
    symbol: "mco2",
    name: "Moss Carbon Credit",
  },
  {
    id: "mossland",
    symbol: "moc",
    name: "Mossland",
  },
  {
    id: "mosterisland",
    symbol: "mi",
    name: "MosterIsland",
  },
  {
    id: "mota",
    symbol: "mgot",
    name: "MoTA",
  },
  {
    id: "motacoin",
    symbol: "mota",
    name: "MotaCoin",
  },
  {
    id: "motel-crypto",
    symbol: "motel",
    name: "Motel Crypto",
  },
  {
    id: "mother-earth",
    symbol: "mot",
    name: "Mother Earth",
  },
  {
    id: "mother-of-memes",
    symbol: "mom",
    name: "Mother of Memes",
  },
  {
    id: "mothership",
    symbol: "msp",
    name: "Mothership",
  },
  {
    id: "motionwreck-games",
    symbol: "mwg",
    name: "MotionWreck Games",
  },
  {
    id: "motiv-protocol",
    symbol: "mov",
    name: "MOTIV Protocol",
  },
  {
    id: "motocoin",
    symbol: "moto",
    name: "Motocoin",
  },
  {
    id: "mound-token",
    symbol: "mnd",
    name: "Mound Token",
  },
  {
    id: "mouse",
    symbol: "mouse",
    name: "MouseMN",
  },
  {
    id: "mousecoin",
    symbol: "mic3",
    name: "MOUSECOIN",
  },
  {
    id: "mouse-haunt",
    symbol: "mht",
    name: "Mouse Haunt",
  },
  {
    id: "mousepad",
    symbol: "mpad",
    name: "MousePad",
  },
  {
    id: "move-network",
    symbol: "movd",
    name: "MOVE Network",
  },
  {
    id: "moviebloc",
    symbol: "mbl",
    name: "MovieBloc",
  },
  {
    id: "movie-magic",
    symbol: "mvm",
    name: "Movie Magic",
  },
  {
    id: "mox",
    symbol: "mox",
    name: "MoX",
  },
  {
    id: "mozik",
    symbol: "moz",
    name: "Mozik",
  },
  {
    id: "mozox",
    symbol: "mozox",
    name: "MozoX",
  },
  {
    id: "mp3",
    symbol: "mp3",
    name: "MP3",
  },
  {
    id: "mp4",
    symbol: "mp4",
    name: "MP4",
  },
  {
    id: "mr-burns-token",
    symbol: "burns",
    name: "Mr Burns Token",
  },
  {
    id: "mr-fox-token",
    symbol: "mrfox",
    name: "Mr.FOX Token",
  },
  {
    id: "mrv",
    symbol: "mrv",
    name: "MRV",
  },
  {
    id: "mrweb-finance",
    symbol: "ama",
    name: "MrWeb Finance",
  },
  {
    id: "ms-moona-rewards",
    symbol: "moona",
    name: "Ms Moona Rewards",
  },
  {
    id: "msn",
    symbol: "msn",
    name: "MSN",
  },
  {
    id: "msol",
    symbol: "msol",
    name: "Marinade staked SOL",
  },
  {
    id: "mstable-btc",
    symbol: "mbtc",
    name: "mStable BTC",
  },
  {
    id: "mtblock",
    symbol: "mts",
    name: "MtBlock",
  },
  {
    id: "mti-finance",
    symbol: "mti",
    name: "MTI Finance",
  },
  {
    id: "mt-pelerin-shares",
    symbol: "mps",
    name: "Mt Pelerin Shares",
  },
  {
    id: "mttcoin",
    symbol: "mttcoin",
    name: "MTTCoin",
  },
  {
    id: "mtvx",
    symbol: "MTVX",
    name: "MTVX",
  },
  {
    id: "mu-continent",
    symbol: "mu",
    name: "Mu Continent",
  },
  {
    id: "mu-dank",
    symbol: "dank",
    name: "MU DANK",
  },
  {
    id: "mud-guild-game",
    symbol: "mgg",
    name: "MUD Guild Game",
  },
  {
    id: "mulierum",
    symbol: "diva",
    name: "Mulierum",
  },
  {
    id: "multichain",
    symbol: "multi",
    name: "Multichain",
  },
  {
    id: "multi-chain-capital",
    symbol: "mcc",
    name: "Multi-Chain Capital [OLD]",
  },
  {
    id: "multi-chain-capital-2",
    symbol: "mcc",
    name: "Multi-Chain Capital",
  },
  {
    id: "multi-farm-capital",
    symbol: "mfc",
    name: "Multi-Farm Capital",
  },
  {
    id: "multigame",
    symbol: "multi",
    name: "Multigame",
  },
  {
    id: "multigencapital",
    symbol: "mgc",
    name: "MultiGenCapital",
  },
  {
    id: "multimillion",
    symbol: "mmm",
    name: "MultiMillion",
  },
  {
    id: "multipad",
    symbol: "mpad",
    name: "MultiPad",
  },
  {
    id: "multiplanetary-inus",
    symbol: "inus",
    name: "MultiPlanetary Inus",
  },
  {
    id: "multiplier",
    symbol: "mxx",
    name: "Multiplier",
  },
  {
    id: "multiplier-bsc",
    symbol: "bmxx",
    name: "Multiplier (BSC)",
  },
  {
    id: "multi-stake-capital",
    symbol: "msc",
    name: "Multi-Stake Capital",
  },
  {
    id: "multistarter",
    symbol: "mstart",
    name: "MultiStarter",
  },
  {
    id: "multivac",
    symbol: "mtv",
    name: "MultiVAC",
  },
  {
    id: "multiverse",
    symbol: "ai",
    name: "Multiverse",
  },
  {
    id: "multiverse-capital",
    symbol: "mvc",
    name: "Multiverse Capital",
  },
  {
    id: "munch-token",
    symbol: "munch",
    name: "Munch Token",
  },
  {
    id: "murphycat",
    symbol: "murphy",
    name: "MURPHYCAT",
  },
  {
    id: "mus",
    symbol: "mus",
    name: "Musashi Finance",
  },
  {
    id: "musd",
    symbol: "musd",
    name: "mStable USD",
  },
  {
    id: "muse-2",
    symbol: "muse",
    name: "Muse DAO",
  },
  {
    id: "museo",
    symbol: "mse",
    name: "Museo",
  },
  {
    id: "museum-of-crypto-art",
    symbol: "moca",
    name: "Museum of Crypto Art",
  },
  {
    id: "mushroom",
    symbol: "mush",
    name: "Mushroom",
  },
  {
    id: "mushu-finance",
    symbol: "mushu",
    name: "Mushu Finance",
  },
  {
    id: "musk",
    symbol: "musk",
    name: "Musk",
  },
  {
    id: "musk-doge",
    symbol: "mkd",
    name: "Musk Doge",
  },
  {
    id: "musk-gold",
    symbol: "musk",
    name: "MUSK Gold",
  },
  {
    id: "musk-metaverse",
    symbol: "metamusk",
    name: "Musk Metaverse",
  },
  {
    id: "muskswap",
    symbol: "musk",
    name: "MuskSwap",
  },
  {
    id: "muso-finance",
    symbol: "muso",
    name: "MUSO Finance [OLD]",
  },
  {
    id: "muso-finance-2",
    symbol: "muso",
    name: "MUSO Finance",
  },
  {
    id: "must",
    symbol: "must",
    name: "Must",
  },
  {
    id: "musubi",
    symbol: "musubi",
    name: "Musubi",
  },
  {
    id: "mute",
    symbol: "mute",
    name: "Mute",
  },
  {
    id: "muzible",
    symbol: "muzz",
    name: "Muzible",
  },
  {
    id: "muzika-network",
    symbol: "mzk",
    name: "Muzika Network",
  },
  {
    id: "mvg-token",
    symbol: "IUT",
    name: "ITO Utility Token",
  },
  {
    id: "mvp",
    symbol: "mvp",
    name: "MVP",
  },
  {
    id: "mvp-coin",
    symbol: "mvp",
    name: "MVP Coin",
  },
  {
    id: "mvs-multiverse",
    symbol: "mvs",
    name: "MVS Multiverse",
  },
  {
    id: "mxc",
    symbol: "mxc",
    name: "MXC",
  },
  {
    id: "mx-token",
    symbol: "mx",
    name: "MX Token",
  },
  {
    id: "mybitcoin",
    symbol: "mybtc",
    name: "MyBitcoin",
  },
  {
    id: "mybit-token",
    symbol: "myb",
    name: "MyBit Token",
  },
  {
    id: "mybricks",
    symbol: "bricks",
    name: "MyBricks",
  },
  {
    id: "myce",
    symbol: "yce",
    name: "MYCE",
  },
  {
    id: "my-ceremonial-event",
    symbol: "myce",
    name: "MY Ceremonial Event",
  },
  {
    id: "mycro-ico",
    symbol: "myo",
    name: "Mycro",
  },
  {
    id: "my-crypto-play",
    symbol: "mcp",
    name: "My Crypto Play",
  },
  {
    id: "my-defi-legends",
    symbol: "dlegends",
    name: "My DeFi Legends",
  },
  {
    id: "my-defi-pet",
    symbol: "dpet",
    name: "My DeFi Pet",
  },
  {
    id: "my-farm-pet",
    symbol: "myfarmpet",
    name: "My Farm Pet",
  },
  {
    id: "myfriends",
    symbol: "myfriends",
    name: "MyFriends",
  },
  {
    id: "my-identity-coin",
    symbol: "myid",
    name: "My Identity Coin",
  },
  {
    id: "mykey",
    symbol: "key",
    name: "MYKEY",
  },
  {
    id: "mylivn-coin",
    symbol: "mlvc",
    name: "Mylivn Coin",
  },
  {
    id: "my-lotto-coin",
    symbol: "myl",
    name: "My Lotto Coin",
  },
  {
    id: "my-master-war",
    symbol: "mat",
    name: "My Master War",
  },
  {
    id: "mymessage",
    symbol: "mesa",
    name: "myMessage",
  },
  {
    id: "mymn",
    symbol: "mymn",
    name: "MyMN",
  },
  {
    id: "my-neighbor-alice",
    symbol: "alice",
    name: "My Neighbor Alice",
  },
  {
    id: "my-neighbor-alice-wormhole",
    symbol: "alice",
    name: "My Neighbor Alice (Wormhole)",
  },
  {
    id: "myobu",
    symbol: "myobu",
    name: "Myōbu",
  },
  {
    id: "my-pandaverse",
    symbol: "PANDAVS",
    name: "My Pandaverse",
  },
  {
    id: "myra-ai",
    symbol: "myra",
    name: "Myra AI",
  },
  {
    id: "myriadcoin",
    symbol: "xmy",
    name: "Myriad",
  },
  {
    id: "my-shiba-academia",
    symbol: "msa",
    name: "My Shiba Academia",
  },
  {
    id: "mysterium",
    symbol: "myst",
    name: "Mysterium",
  },
  {
    id: "mystic-bets",
    symbol: "mbt",
    name: "MysticBets",
  },
  {
    id: "mystic-warrior",
    symbol: "mystic",
    name: "Mystic Warrior",
  },
  {
    id: "myteamcoin",
    symbol: "myc",
    name: "Myteamcoin",
  },
  {
    id: "myteamfinance",
    symbol: "myf",
    name: "MyteamFinance",
  },
  {
    id: "mytheria",
    symbol: "myra",
    name: "Mytheria",
  },
  {
    id: "myth-token",
    symbol: "myth",
    name: "Myth Token",
  },
  {
    id: "mytoken",
    symbol: "mt",
    name: "MyToken",
  },
  {
    id: "mytracknet-token",
    symbol: "mtnt",
    name: "Mytracknet Token",
  },
  {
    id: "mywish",
    symbol: "wish",
    name: "MyWish",
  },
  {
    id: "myx-network",
    symbol: "myx",
    name: "MYX Network",
  },
  {
    id: "n1ce",
    symbol: "n1ce",
    name: "N1CE",
  },
  {
    id: "n3rd-finance",
    symbol: "N3RDz",
    name: "N3RD Finance",
  },
  {
    id: "nabox",
    symbol: "nabox",
    name: "Nabox",
  },
  {
    id: "nacho-finance",
    symbol: "nacho",
    name: "Nacho Finance",
  },
  {
    id: "nadeshiko",
    symbol: "ndsk",
    name: "Nadeshiko",
  },
  {
    id: "nafter",
    symbol: "naft",
    name: "Nafter",
  },
  {
    id: "nafty",
    symbol: "nafty",
    name: "Nafty",
  },
  {
    id: "naga",
    symbol: "ngc",
    name: "NAGA",
  },
  {
    id: "nagaswap",
    symbol: "bnw",
    name: "NagaSwap",
  },
  {
    id: "nahmii",
    symbol: "nii",
    name: "Nahmii",
  },
  {
    id: "naka-bodhi-token",
    symbol: "nbot",
    name: "Naka Bodhi Token",
  },
  {
    id: "nakamoto-games",
    symbol: "naka",
    name: "Nakamoto Games",
  },
  {
    id: "name-changing-token",
    symbol: "nct",
    name: "Name Change Token",
  },
  {
    id: "namecoin",
    symbol: "nmc",
    name: "Namecoin",
  },
  {
    id: "nami-corporation-token",
    symbol: "nami",
    name: "Nami Corporation Token",
  },
  {
    id: "nami-inu",
    symbol: "nami",
    name: "Nami Inu",
  },
  {
    id: "nanjcoin",
    symbol: "nanj",
    name: "NANJCOIN",
  },
  {
    id: "nano",
    symbol: "xno",
    name: "Nano",
  },
  {
    id: "nano-bitcoin-token",
    symbol: "nbtc",
    name: "Nano Bitcoin Token",
  },
  {
    id: "nano-doge",
    symbol: "nanodoge",
    name: "Nano Doge Token",
  },
  {
    id: "nano-dogecoin",
    symbol: "indc",
    name: "Nano Dogecoin",
  },
  {
    id: "nanometer-bitcoin",
    symbol: "nmbtc",
    name: "NanoMeter Bitcoin",
  },
  {
    id: "nano-shiba-inu",
    symbol: "NanoShiba",
    name: "Nano Shiba Inu",
  },
  {
    id: "nantrade",
    symbol: "nan",
    name: "NanTrade",
  },
  {
    id: "naos-finance",
    symbol: "naos",
    name: "NAOS Finance",
  },
  {
    id: "napoleon-x",
    symbol: "npx",
    name: "Napoleon X",
  },
  {
    id: "napoli-fan-token",
    symbol: "NAP",
    name: "Napoli Fan Token",
  },
  {
    id: "naraka-token",
    symbol: "nt",
    name: "Naraka",
  },
  {
    id: "naruto-inu",
    symbol: "NARUTO",
    name: "Naruto Inu",
  },
  {
    id: "narwhale",
    symbol: "nawa",
    name: "Narwhale",
  },
  {
    id: "nasa-doge",
    symbol: "nasadoge",
    name: "Nasa Doge",
  },
  {
    id: "nasdacoin",
    symbol: "nsd",
    name: "Nasdacoin",
  },
  {
    id: "nasdex-token",
    symbol: "nsdx",
    name: "NASDEX Token",
  },
  {
    id: "native-utility-token",
    symbol: "nut",
    name: "Native Utility Token",
  },
  {
    id: "natural-farm-union-protocol",
    symbol: "nfup",
    name: "Natural Farm Union Protocol",
  },
  {
    id: "natus-vincere-fan-token",
    symbol: "navi",
    name: "Natus Vincere Fan Token",
  },
  {
    id: "naughtydoge",
    symbol: "ndoge",
    name: "NaughtyDoge",
  },
  {
    id: "nausicaal-inu",
    symbol: "nausicaa",
    name: "Nausicaa-Inu",
  },
  {
    id: "nav-coin",
    symbol: "nav",
    name: "Navcoin",
  },
  {
    id: "navibration",
    symbol: "navi",
    name: "Navibration",
  },
  {
    id: "navigator",
    symbol: "nttc",
    name: "Navigator",
  },
  {
    id: "naxar",
    symbol: "naxar",
    name: "Naxar",
  },
  {
    id: "nayuta-coin",
    symbol: "nc",
    name: "Nayuta Coin",
  },
  {
    id: "ndau",
    symbol: "ndau",
    name: "Ndau",
  },
  {
    id: "ndex",
    symbol: "ndx",
    name: "nDEX",
  },
  {
    id: "ndn-link",
    symbol: "ndn",
    name: "NDN Link",
  },
  {
    id: "neal",
    symbol: "neal",
    name: "Coineal Token",
  },
  {
    id: "near",
    symbol: "near",
    name: "Near",
  },
  {
    id: "nearpad",
    symbol: "pad",
    name: "NearPad",
  },
  {
    id: "neblio",
    symbol: "nebl",
    name: "Neblio",
  },
  {
    id: "nebulas",
    symbol: "nas",
    name: "Nebulas",
  },
  {
    id: "nebulatoken",
    symbol: "nebula",
    name: "NebulaToken",
  },
  {
    id: "nectar-token",
    symbol: "nec",
    name: "Nectar",
  },
  {
    id: "neetcoin",
    symbol: "neet",
    name: "Neetcoin",
  },
  {
    id: "neet-finance",
    symbol: "neet",
    name: "NEET Finance",
  },
  {
    id: "neeva-defi",
    symbol: "nva",
    name: "Neeva Defi",
  },
  {
    id: "neftipedia",
    symbol: "nft",
    name: "NEFTiPEDiA",
  },
  {
    id: "neighbourhoods",
    symbol: "nht",
    name: "Neighbourhoods",
  },
  {
    id: "neko-network",
    symbol: "neko",
    name: "Neko Network",
  },
  {
    id: "nekonium",
    symbol: "nuko",
    name: "Nekonium",
  },
  {
    id: "nelo-metaverse",
    symbol: "nelo",
    name: "NELO Metaverse",
  },
  {
    id: "nem",
    symbol: "xem",
    name: "NEM",
  },
  {
    id: "nemesis",
    symbol: "NMS",
    name: "Nemesis",
  },
  {
    id: "nemesis-dao",
    symbol: "nms",
    name: "Nemesis DAO",
  },
  {
    id: "nemesis-wealth-projects-bsc",
    symbol: "nms",
    name: "Nemesis Wealth Projects BSC",
  },
  {
    id: "neo",
    symbol: "neo",
    name: "NEO",
  },
  {
    id: "neo-holistic-coin",
    symbol: "nhc",
    name: "Neo Holistic Coin",
  },
  {
    id: "neon-exchange",
    symbol: "nex",
    name: "Nash",
  },
  {
    id: "neos-credits",
    symbol: "ncr",
    name: "Neos Credits",
  },
  {
    id: "neoworld-cash",
    symbol: "nash",
    name: "NeoWorld Cash",
  },
  {
    id: "neptune",
    symbol: "NPTUN",
    name: "Neptune",
  },
  {
    id: "nerdy-inu",
    symbol: "nerdy",
    name: "Nerdy Inu",
  },
  {
    id: "nerian-network",
    symbol: "nerian",
    name: "Nerian Network",
  },
  {
    id: "nerva",
    symbol: "xnv",
    name: "Nerva",
  },
  {
    id: "nerve-finance",
    symbol: "nrv",
    name: "Nerve Finance",
  },
  {
    id: "nerveflux",
    symbol: "nerve",
    name: "NerveFlux",
  },
  {
    id: "nervenetwork",
    symbol: "nvt",
    name: "NerveNetwork",
  },
  {
    id: "nervos-network",
    symbol: "ckb",
    name: "Nervos Network",
  },
  {
    id: "nest",
    symbol: "nest",
    name: "Nest Protocol",
  },
  {
    id: "nest-egg",
    symbol: "negg",
    name: "Nest Egg",
  },
  {
    id: "nestegg-coin",
    symbol: "egg",
    name: "NestEgg Coin",
  },
  {
    id: "nestree",
    symbol: "egg",
    name: "Nestree",
  },
  {
    id: "netbox-coin",
    symbol: "nbx",
    name: "Netbox Coin",
  },
  {
    id: "netcoin",
    symbol: "net",
    name: "Netcoin",
  },
  {
    id: "netcoincapital",
    symbol: "ncc",
    name: "Netcoincapital",
  },
  {
    id: "nether",
    symbol: "ntr",
    name: "Nether",
  },
  {
    id: "netkoin",
    symbol: "ntk",
    name: "Netkoin",
  },
  {
    id: "netm",
    symbol: "ntm",
    name: "Netm",
  },
  {
    id: "netswap",
    symbol: "nett",
    name: "Netswap",
  },
  {
    id: "netvrk",
    symbol: "ntvrk",
    name: "Netvrk",
  },
  {
    id: "neumark",
    symbol: "neu",
    name: "Neumark",
  },
  {
    id: "neural-protocol",
    symbol: "nrp",
    name: "Neural Protocol",
  },
  {
    id: "neurochain",
    symbol: "ncc",
    name: "NeuroChain",
  },
  {
    id: "neuromorphic-io",
    symbol: "nmp",
    name: "Neuromorphic.io",
  },
  {
    id: "neurotoken",
    symbol: "ntk",
    name: "Neurotoken",
  },
  {
    id: "neutrino",
    symbol: "usdn",
    name: "Neutrino USD",
  },
  {
    id: "neutrino-system-base-token",
    symbol: "nsbt",
    name: "Neutrino System Base Token",
  },
  {
    id: "nevada",
    symbol: "nevada",
    name: "Nevada",
  },
  {
    id: "neverdrop",
    symbol: "nd",
    name: "NeverDrop",
  },
  {
    id: "newb-farm",
    symbol: "newb",
    name: "NewB.Farm",
  },
  {
    id: "new-bitshares",
    symbol: "nbs",
    name: "New BitShares",
  },
  {
    id: "new-chance",
    symbol: "nce",
    name: "New Chance",
  },
  {
    id: "newdex-token",
    symbol: "dex",
    name: "Newdex Token",
  },
  {
    id: "new-earth-order-money",
    symbol: "neom",
    name: "New Earth Order Money",
  },
  {
    id: "new-era",
    symbol: "nec",
    name: "New Era",
  },
  {
    id: "newinu",
    symbol: "newinu",
    name: "Newinu",
  },
  {
    id: "new-landbox",
    symbol: "land",
    name: "LandBox",
  },
  {
    id: "new-order",
    symbol: "newo",
    name: "New Order",
  },
  {
    id: "new-origin",
    symbol: "noc",
    name: "New Origin",
  },
  {
    id: "new-power-coin",
    symbol: "npw",
    name: "New Power Coin",
  },
  {
    id: "newscrypto-coin",
    symbol: "nwc",
    name: "Newscrypto Coin",
  },
  {
    id: "newsolution",
    symbol: "nst",
    name: "Newsolution",
  },
  {
    id: "newsolution-2-0",
    symbol: "nste",
    name: "NewSolution 2.0",
  },
  {
    id: "new-token",
    symbol: "newb",
    name: "Newb Token",
  },
  {
    id: "newton-coin-project",
    symbol: "ncp",
    name: "Newton Coin Project",
  },
  {
    id: "newtonium",
    symbol: "newton",
    name: "Newtonium",
  },
  {
    id: "newton-project",
    symbol: "new",
    name: "Newton Project",
  },
  {
    id: "new-year-resolution",
    symbol: "nyr",
    name: "New Year Resolution",
  },
  {
    id: "new-year-token",
    symbol: "NYT",
    name: "New Year Token",
  },
  {
    id: "newyorkcoin",
    symbol: "nyc",
    name: "NewYorkCoin",
  },
  {
    id: "newyork-exchange",
    symbol: "nye",
    name: "NewYork Exchange",
  },
  {
    id: "nexalt",
    symbol: "xlt",
    name: "Nexalt",
  },
  {
    id: "nexdax",
    symbol: "nt",
    name: "NexDAX",
  },
  {
    id: "nexo",
    symbol: "nexo",
    name: "NEXO",
  },
  {
    id: "nextdao",
    symbol: "nax",
    name: "NextDAO",
  },
  {
    id: "next-defi-protocol",
    symbol: "nxdf",
    name: "NeXt-DeFi Protocol",
  },
  {
    id: "nextech-network",
    symbol: "nx",
    name: "Nxtech Network",
  },
  {
    id: "nextexchange",
    symbol: "next",
    name: "NEXT",
  },
  {
    id: "next-level",
    symbol: "nxl",
    name: "Next Level",
  },
  {
    id: "next-token",
    symbol: "NXT",
    name: "Next Token",
  },
  {
    id: "nextype-finance",
    symbol: "nt",
    name: "NEXTYPE Finance",
  },
  {
    id: "nexus",
    symbol: "nxs",
    name: "Nexus",
  },
  {
    id: "nexus-governance-token",
    symbol: "psi",
    name: "Nexus Protocol",
  },
  {
    id: "nexus-mutual-wormhole",
    symbol: "nxm",
    name: "Nexus Mutual (Wormhole)",
  },
  {
    id: "nexus-token",
    symbol: "nexus",
    name: "Nexus Token",
  },
  {
    id: "nezuko-inu",
    symbol: "nezuko",
    name: "Nezuko Inu",
  },
  {
    id: "nfans",
    symbol: "nfs",
    name: "Nfans",
  },
  {
    id: "nfmonsters",
    symbol: "nfmon",
    name: "NFMonsters",
  },
  {
    id: "nfraction",
    symbol: "nfta",
    name: "NFracTion",
  },
  {
    id: "nfta",
    symbol: "nfta",
    name: "NFTA",
  },
  {
    id: "nft-alley",
    symbol: "alley",
    name: "NFT Alley",
  },
  {
    id: "nft-art-finance",
    symbol: "nftart",
    name: "NFT Art Finance",
  },
  {
    id: "nftascii",
    symbol: "nftascii",
    name: "NFTASCII",
  },
  {
    id: "nftb",
    symbol: "nftb",
    name: "NFTb",
  },
  {
    id: "nftblackmarket",
    symbol: "nbm",
    name: "NFTBlackmarket",
  },
  {
    id: "nftbomb",
    symbol: "nbp",
    name: "NFTBomb",
  },
  {
    id: "nftbooks",
    symbol: "nftbs",
    name: "NFTBooks",
  },
  {
    id: "nft-champions",
    symbol: "champ",
    name: "NFT Champions",
  },
  {
    id: "nftcircle",
    symbol: "nftc",
    name: "NFTCircle",
  },
  {
    id: "nftdao",
    symbol: "NAO",
    name: "NFTDAO",
  },
  {
    id: "nfteez",
    symbol: "nfteez",
    name: "NFTeez",
  },
  {
    id: "nfteyez",
    symbol: "eye",
    name: "NftEyez",
  },
  {
    id: "nftfundart",
    symbol: "nfa",
    name: "NFTFundArt",
  },
  {
    id: "nftfy",
    symbol: "nftfy",
    name: "Nftfy",
  },
  {
    id: "nft-global-platform",
    symbol: "nftg",
    name: "NFT Global Platform",
  },
  {
    id: "nftify",
    symbol: "n1",
    name: "NFTify",
  },
  {
    id: "nftime",
    symbol: "nftm",
    name: "Nftime",
  },
  {
    id: "nftinder",
    symbol: "nftndr",
    name: "NFTinder",
  },
  {
    id: "nft-index",
    symbol: "nfti",
    name: "NFT Index",
  },
  {
    id: "nftlaunch",
    symbol: "nftl",
    name: "NFTLaunch",
  },
  {
    id: "nftlegends",
    symbol: "nfl",
    name: "NFTLegends",
  },
  {
    id: "nftlootbox",
    symbol: "loot",
    name: "LootBox.io",
  },
  {
    id: "nftl-token",
    symbol: "nftl",
    name: "NFTL Token",
  },
  {
    id: "nftmall",
    symbol: "gem",
    name: "NFTmall",
  },
  {
    id: "nftmania",
    symbol: "mania",
    name: "NFTMania",
  },
  {
    id: "nftmart-token",
    symbol: "nmt",
    name: "NFTMart Token",
  },
  {
    id: "nft-maze",
    symbol: "MAZE",
    name: "NFT MAZE",
  },
  {
    id: "nftmusic",
    symbol: "music",
    name: "NFTMusic.ai",
  },
  {
    id: "nftmusic-stream",
    symbol: "streamer",
    name: "NFTMUSIC.STREAM",
  },
  {
    id: "nftopia",
    symbol: "nftopia",
    name: "NFTOPIA",
  },
  {
    id: "nftpad",
    symbol: "nftpad",
    name: "NFTPad",
  },
  {
    id: "nft-platform-index",
    symbol: "NFTP",
    name: "NFT Platform Index",
  },
  {
    id: "nft-protocol",
    symbol: "nft",
    name: "NFT Protocol",
  },
  {
    id: "nftpunk",
    symbol: "nftpunk2.0",
    name: "NFTPunk",
  },
  {
    id: "nftpunk-finance",
    symbol: "nftpunk",
    name: "NFTPunk.Finance",
  },
  {
    id: "nftrade",
    symbol: "nftd",
    name: "NFTrade",
  },
  {
    id: "nft-royal-token",
    symbol: "nrt",
    name: "NFT Royal Token",
  },
  {
    id: "nftsocial",
    symbol: "nsc",
    name: "NFTSocial",
  },
  {
    id: "nft-solpad",
    symbol: "nftsol",
    name: "NFT SolPad",
  },
  {
    id: "nft-stars",
    symbol: "nfts",
    name: "NFT Stars",
  },
  {
    id: "nft-starter",
    symbol: "nst",
    name: "NFT Starter",
  },
  {
    id: "nftstyle",
    symbol: "nftstyle",
    name: "NFTStyle",
  },
  {
    id: "nftswaps",
    symbol: "swaps",
    name: "NFTSwaps",
  },
  {
    id: "nft-tech",
    symbol: "nftt",
    name: "NFT Tech",
  },
  {
    id: "nft-tone",
    symbol: "tone",
    name: "NFT Tone",
  },
  {
    id: "nft-wars",
    symbol: "war",
    name: "NFT Wars",
  },
  {
    id: "nftwiki",
    symbol: "nftk",
    name: "NFTWiki",
  },
  {
    id: "nft-worlds",
    symbol: "wrld",
    name: "NFT Worlds",
  },
  {
    id: "nftx",
    symbol: "nftx",
    name: "NFTX",
  },
  {
    id: "nfty-token",
    symbol: "nfty",
    name: "NFTY Token",
  },
  {
    id: "nfx-coin",
    symbol: "nfxc",
    name: "NFX Coin",
  },
  {
    id: "ngin",
    symbol: "ng",
    name: "Ngin",
  },
  {
    id: "nhbtc",
    symbol: "nhbtc",
    name: "nHBTC",
  },
  {
    id: "nice",
    symbol: "nice",
    name: "Nice",
  },
  {
    id: "nicheman",
    symbol: "nicheman",
    name: "Nicheman",
  },
  {
    id: "nickel-token",
    symbol: "nickel",
    name: "Nickel Token",
  },
  {
    id: "nico-robin-inu",
    symbol: "ROBIN",
    name: "Nico Robin Inu",
  },
  {
    id: "nidhi-dao",
    symbol: "guru",
    name: "Nidhi Dao",
  },
  {
    id: "niftify",
    symbol: "nift",
    name: "Niftify",
  },
  {
    id: "niftsy",
    symbol: "niftsy",
    name: "Envelop (Niftsy)",
  },
  {
    id: "nifty-league",
    symbol: "nftl",
    name: "Nifty League",
  },
  {
    id: "niftynft",
    symbol: "nifty",
    name: "NiftyNFT",
  },
  {
    id: "nifty-token",
    symbol: "nfty",
    name: "NFTY DeFi Protocol",
  },
  {
    id: "night-life-crypto",
    symbol: "nlife",
    name: "Night Life Crypto",
  },
  {
    id: "niifi",
    symbol: "niifi",
    name: "NiiFi",
  },
  {
    id: "nil-coin",
    symbol: "nil",
    name: "NIL",
  },
  {
    id: "nil-dao",
    symbol: "nil",
    name: "Nil DAO",
  },
  {
    id: "nilu",
    symbol: "nilu",
    name: "Nilu",
  },
  {
    id: "nimbus",
    symbol: "nbu",
    name: "Nimbus",
  },
  {
    id: "nimbus-governance-token",
    symbol: "gnbu",
    name: "Nimbus Governance Token",
  },
  {
    id: "nimiq-2",
    symbol: "nim",
    name: "Nimiq",
  },
  {
    id: "ninja-doge",
    symbol: "$ninjadoge",
    name: "Ninja Doge",
  },
  {
    id: "ninja-fantasy-token",
    symbol: "nfs",
    name: "Ninja Fantasy Token",
  },
  {
    id: "ninja-panda-inu",
    symbol: "npi",
    name: "Ninja Panda Inu",
  },
  {
    id: "ninja-protocol",
    symbol: "ninja",
    name: "Ninja Protocol",
  },
  {
    id: "ninja-squad",
    symbol: "nst",
    name: "Ninja Squad",
  },
  {
    id: "ninjaswap",
    symbol: "ninja",
    name: "NinjaSwap",
  },
  {
    id: "ninky",
    symbol: "ninky",
    name: "Ninky",
  },
  {
    id: "ninneko",
    symbol: "nino",
    name: "Ninneko",
  },
  {
    id: "nintia-estate",
    symbol: "ninti",
    name: "Nintia Estate",
  },
  {
    id: "niobio-cash",
    symbol: "nbr",
    name: "Niobio",
  },
  {
    id: "niobium-coin",
    symbol: "nbc",
    name: "Niobium Coin",
  },
  {
    id: "niros",
    symbol: "niros",
    name: "Niros",
  },
  {
    id: "nirvana",
    symbol: "vana",
    name: "Nirvana",
  },
  {
    id: "nirvanameta",
    symbol: "mnu",
    name: "NirvanaMeta",
  },
  {
    id: "nitroex",
    symbol: "ntx",
    name: "NitroEX",
  },
  {
    id: "nitro-league",
    symbol: "nitro",
    name: "Nitro League",
  },
  {
    id: "nitrous-finance",
    symbol: "nos",
    name: "Nitrous Finance",
  },
  {
    id: "nix-bridge-token",
    symbol: "voice",
    name: "Voice Token",
  },
  {
    id: "nix-platform",
    symbol: "nix",
    name: "NIX",
  },
  {
    id: "nkcl-classic",
    symbol: "nkclc",
    name: "NKCL Classic",
  },
  {
    id: "nkn",
    symbol: "nkn",
    name: "NKN",
  },
  {
    id: "nnb-token",
    symbol: "nnb",
    name: "NNB Token",
  },
  {
    id: "noahark",
    symbol: "nrk",
    name: "NoahArk",
  },
  {
    id: "noah-coin",
    symbol: "noahp",
    name: "Noah Decentralized State Coin",
  },
  {
    id: "noa-play",
    symbol: "noa",
    name: "NOA PLAY",
  },
  {
    id: "nobility",
    symbol: "nbl",
    name: "Nobility",
  },
  {
    id: "noblecoin",
    symbol: "nobl",
    name: "NobleCoin",
  },
  {
    id: "nobo-finance",
    symbol: "nobf",
    name: "Nobo Finance",
  },
  {
    id: "nobrainer-finance",
    symbol: "brain",
    name: "Nobrainer Finance",
  },
  {
    id: "no-bull",
    symbol: "NB",
    name: "No Bull",
  },
  {
    id: "nobunaga",
    symbol: "nbng",
    name: "Nobunaga",
  },
  {
    id: "nocapcoin",
    symbol: "ncc",
    name: "NoCapCoin",
  },
  {
    id: "node-cubed",
    symbol: "n3",
    name: "Node Cubed",
  },
  {
    id: "noderunners",
    symbol: "ndr",
    name: "Node Runners",
  },
  {
    id: "nodeseeds",
    symbol: "nds",
    name: "Nodeseeds",
  },
  {
    id: "node-squared",
    symbol: "n2",
    name: "Node Squared",
  },
  {
    id: "nodestats",
    symbol: "ns",
    name: "Nodestats",
  },
  {
    id: "nodetrade",
    symbol: "mnx",
    name: "Nodetrade",
  },
  {
    id: "noel-capital",
    symbol: "noel",
    name: "Noel Capital",
  },
  {
    id: "no-face-inu",
    symbol: "NOFACE",
    name: "No Face Inu",
  },
  {
    id: "nogoaltoken",
    symbol: "ino",
    name: "NoGoalToken",
  },
  {
    id: "noia-network",
    symbol: "noia",
    name: "Syntropy",
  },
  {
    id: "nokencoin",
    symbol: "nokn",
    name: "Nokencoin",
  },
  {
    id: "noku",
    symbol: "noku",
    name: "Noku",
  },
  {
    id: "nolecoin",
    symbol: "nole",
    name: "NoleCoin",
  },
  {
    id: "nole-npc",
    symbol: "npc",
    name: "NPC DAO",
  },
  {
    id: "nolewater",
    symbol: "amsk",
    name: "NoleWater",
  },
  {
    id: "nolimitcoin",
    symbol: "nlc2",
    name: "NoLimitCoin",
  },
  {
    id: "nominex",
    symbol: "nmx",
    name: "Nominex",
  },
  {
    id: "nomy",
    symbol: "nomy",
    name: "NOMY",
  },
  {
    id: "non-fungible-toke",
    symbol: "toke",
    name: "Non-Fungible TOKE",
  },
  {
    id: "non-fungible-yearn",
    symbol: "nfy",
    name: "Non-Fungible Yearn",
  },
  {
    id: "noob-finance",
    symbol: "$noob",
    name: "noob.finance",
  },
  {
    id: "no-one",
    symbol: "noone",
    name: "No One",
  },
  {
    id: "nora-token",
    symbol: "nra",
    name: "Nora Token",
  },
  {
    id: "nord-finance",
    symbol: "nord",
    name: "Nord Finance",
  },
  {
    id: "nosana",
    symbol: "nos",
    name: "Nosana",
  },
  {
    id: "noshit",
    symbol: "nsh",
    name: "NoShit",
  },
  {
    id: "nosta",
    symbol: "nosta",
    name: "Nosta",
  },
  {
    id: "nosturis",
    symbol: "ntrs",
    name: "Nosturis",
  },
  {
    id: "nota",
    symbol: "usnota",
    name: "NOTA",
  },
  {
    id: "notable",
    symbol: "nbl",
    name: "Notable",
  },
  {
    id: "not-another-shit-altcoin",
    symbol: "nasa",
    name: "Not Another Shit Altcoin",
  },
  {
    id: "note-blockchain",
    symbol: "ntbc",
    name: "Note Blockchain",
  },
  {
    id: "nothing",
    symbol: "nada",
    name: "Nothing",
  },
  {
    id: "notional-finance",
    symbol: "note",
    name: "Notional Finance",
  },
  {
    id: "not-much",
    symbol: "nm",
    name: "Not Much",
  },
  {
    id: "notsafemoon",
    symbol: "notsafemoon",
    name: "NotSafeMoon",
  },
  {
    id: "nova",
    symbol: "nova",
    name: "NOVA",
  },
  {
    id: "novacoin",
    symbol: "nvc",
    name: "Novacoin",
  },
  {
    id: "nova-finance",
    symbol: "nova",
    name: "Nova Finance",
  },
  {
    id: "nova-network",
    symbol: "nbk",
    name: "Nova Token",
  },
  {
    id: "novara-calcio-fan-token",
    symbol: "nov",
    name: "Novara Calcio Fan Token",
  },
  {
    id: "novaxcrystal",
    symbol: "xcrs",
    name: "NovaXCrystal",
  },
  {
    id: "novaxmetal",
    symbol: "xmtl",
    name: "NovaXMetal",
  },
  {
    id: "novaxsolar",
    symbol: "xslr",
    name: "NovaXSolar",
  },
  {
    id: "nowlage-coin",
    symbol: "nac",
    name: "Nowlage Coin",
  },
  {
    id: "npccoin",
    symbol: "npc",
    name: "NPCcoin",
  },
  {
    id: "npo-coin",
    symbol: "npo",
    name: "NPO Coin",
  },
  {
    id: "nrgy-defi",
    symbol: "nrgy",
    name: "NRGY Defi",
  },
  {
    id: "nshare",
    symbol: "nshare",
    name: "NSHARE",
  },
  {
    id: "nsights",
    symbol: "nsi",
    name: "nSights",
  },
  {
    id: "nss-coin",
    symbol: "nss",
    name: "NSS Coin",
  },
  {
    id: "nsur-coin",
    symbol: "nsur",
    name: "NSUR Coin",
  },
  {
    id: "nsure-network",
    symbol: "nsure",
    name: "Nsure Network",
  },
  {
    id: "ntoken0031",
    symbol: "n0031",
    name: "nYFI",
  },
  {
    id: "nubits",
    symbol: "usnbt",
    name: "NuBits",
  },
  {
    id: "nucleus",
    symbol: "nucleus",
    name: "Nucleus",
  },
  {
    id: "nucleus-vision",
    symbol: "ncash",
    name: "Nucleus Vision",
  },
  {
    id: "nuco-cloud",
    symbol: "ncdt",
    name: "Nuco.Cloud",
  },
  {
    id: "nucypher",
    symbol: "nu",
    name: "NuCypher",
  },
  {
    id: "nuggets",
    symbol: "nug",
    name: "Nuggets",
  },
  {
    id: "nuke-token",
    symbol: "nuke",
    name: "Nuke Token",
  },
  {
    id: "nuls",
    symbol: "nuls",
    name: "Nuls",
  },
  {
    id: "num-ars",
    symbol: "nuars",
    name: "Num ARS",
  },
  {
    id: "number-1-token",
    symbol: "nr1",
    name: "Number 1 Token",
  },
  {
    id: "numbers-protocol",
    symbol: "num",
    name: "Numbers Protocol",
  },
  {
    id: "numeraire",
    symbol: "nmr",
    name: "Numeraire",
  },
  {
    id: "nuna",
    symbol: "nuna",
    name: "Nuna",
  },
  {
    id: "nunet",
    symbol: "ntx",
    name: "NuNet",
  },
  {
    id: "nusd",
    symbol: "susd",
    name: "sUSD",
  },
  {
    id: "nusd-hotbit",
    symbol: "nusd",
    name: "nUSD (HotBit)",
  },
  {
    id: "nushares",
    symbol: "nsr",
    name: "NuShares",
  },
  {
    id: "nut-money",
    symbol: "nut",
    name: "Nut Money",
  },
  {
    id: "nuts-gaming",
    symbol: "nutsg",
    name: "NUTS Gaming",
  },
  {
    id: "nuvo-cash",
    symbol: "nuvo",
    name: "Nuvo Cash",
  },
  {
    id: "nvirworld",
    symbol: "nvir",
    name: "NvirWorld",
  },
  {
    id: "nvl-project",
    symbol: "nvl",
    name: "NVL Project",
  },
  {
    id: "nxm",
    symbol: "nxm",
    name: "Nexus Mutual",
  },
  {
    id: "nxt",
    symbol: "nxt",
    name: "NXT",
  },
  {
    id: "nyan-cat",
    symbol: "ncat",
    name: "NCAT Token",
  },
  {
    id: "nyantereum",
    symbol: "nyante",
    name: "Nyantereum International",
  },
  {
    id: "nyan-v2",
    symbol: "nyan-2",
    name: "Nyan V2",
  },
  {
    id: "nydronia",
    symbol: "nia",
    name: "Nydronia",
  },
  {
    id: "nyerium",
    symbol: "nyex",
    name: "Nyerium",
  },
  {
    id: "nyx-token",
    symbol: "nyxt",
    name: "Nyx Token",
  },
  {
    id: "nyzo",
    symbol: "nyzo",
    name: "Nyzo",
  },
  {
    id: "nzd-stablecoin",
    symbol: "nzds",
    name: "NZD Stablecoin",
  },
  {
    id: "o2ox",
    symbol: "o2ox",
    name: "O2OX",
  },
  {
    id: "o3-swap",
    symbol: "o3",
    name: "O3 Swap",
  },
  {
    id: "oasis-2",
    symbol: "xos",
    name: "OASIS",
  },
  {
    id: "oasis-city",
    symbol: "osc",
    name: "Oasis City",
  },
  {
    id: "oasis-network",
    symbol: "rose",
    name: "Oasis Network",
  },
  {
    id: "obic",
    symbol: "obic",
    name: "OBIC",
  },
  {
    id: "obortech",
    symbol: "obot",
    name: "Obortech",
  },
  {
    id: "obrok",
    symbol: "obrok",
    name: "OBRok",
  },
  {
    id: "observer-coin",
    symbol: "obsr",
    name: "OBSERVER Coin",
  },
  {
    id: "obsidium",
    symbol: "obs",
    name: "Obsidium",
  },
  {
    id: "obtoken",
    symbol: "obt",
    name: "OBToken",
  },
  {
    id: "occamfi",
    symbol: "occ",
    name: "OccamFi",
  },
  {
    id: "oceanex-token",
    symbol: "oce",
    name: "OceanEX Token",
  },
  {
    id: "ocean-protocol",
    symbol: "ocean",
    name: "Ocean Protocol",
  },
  {
    id: "oc-protocol",
    symbol: "ocp",
    name: "OC Protocol",
  },
  {
    id: "ocra",
    symbol: "ocra",
    name: "OCRA",
  },
  {
    id: "octafarm",
    symbol: "octf",
    name: "Octafarm",
  },
  {
    id: "octane-protocol-token",
    symbol: "octane",
    name: "Octane Protocol Token",
  },
  {
    id: "octans",
    symbol: "octa",
    name: "Octans",
  },
  {
    id: "octapay",
    symbol: "octa",
    name: "OctaPay",
  },
  {
    id: "octaplex-network",
    symbol: "plx",
    name: "Octaplex Network",
  },
  {
    id: "octaverse-games",
    symbol: "ovg",
    name: "Octaverse Games",
  },
  {
    id: "octax",
    symbol: "octax",
    name: "OctaX",
  },
  {
    id: "oction",
    symbol: "octi",
    name: "Oction",
  },
  {
    id: "octocoin",
    symbol: "888",
    name: "Octocoin",
  },
  {
    id: "octofi",
    symbol: "octo",
    name: "OctoFi",
  },
  {
    id: "octopus-network",
    symbol: "oct",
    name: "Octopus Network",
  },
  {
    id: "octopus-protocol",
    symbol: "ops",
    name: "Octopus Protocol",
  },
  {
    id: "octree",
    symbol: "oct",
    name: "Octree",
  },
  {
    id: "octree-finance",
    symbol: "oak",
    name: "Octree Finance",
  },
  {
    id: "oculus-vision",
    symbol: "OCV",
    name: "Oculus Vision",
  },
  {
    id: "oddz",
    symbol: "oddz",
    name: "Oddz",
  },
  {
    id: "odem",
    symbol: "ode",
    name: "ODEM",
  },
  {
    id: "odindao",
    symbol: "odin",
    name: "OdinDAO",
  },
  {
    id: "odin-platform",
    symbol: "odn",
    name: "Odin Platform",
  },
  {
    id: "odin-protocol",
    symbol: "odin",
    name: "Odin Protocol",
  },
  {
    id: "odin-token",
    symbol: "odin",
    name: "OdinBrowser",
  },
  {
    id: "odinycoin",
    symbol: "odc",
    name: "Odinycoin",
  },
  {
    id: "odius",
    symbol: "odi",
    name: "Odius",
  },
  {
    id: "oduwa-coin",
    symbol: "owc",
    name: "Oduwa Coin",
  },
  {
    id: "oduwausd",
    symbol: "owdt",
    name: "OduwaUSD",
  },
  {
    id: "odyssey",
    symbol: "ocn",
    name: "Odyssey",
  },
  {
    id: "oec-auction",
    symbol: "auctionk",
    name: "OEC AUCTION",
  },
  {
    id: "oec-bch",
    symbol: "bchk",
    name: "OEC BCH",
  },
  {
    id: "oec-binance-coin",
    symbol: "BNB",
    name: "OEC Binance Coin",
  },
  {
    id: "oec-btc",
    symbol: "btck",
    name: "OEC BTC",
  },
  {
    id: "oec-chainlink",
    symbol: "linkk",
    name: "OEC Chainlink",
  },
  {
    id: "oec-dai",
    symbol: "daik",
    name: "OEC DAI",
  },
  {
    id: "oec-dot",
    symbol: "dotk",
    name: "OEC DOT",
  },
  {
    id: "oec-etc",
    symbol: "etck",
    name: "OEC ETC",
  },
  {
    id: "oec-eth",
    symbol: "ethk",
    name: "OEC ETH",
  },
  {
    id: "oec-fil",
    symbol: "filk",
    name: "OEC FIL",
  },
  {
    id: "oec-kine",
    symbol: "kinek",
    name: "OEC KINE",
  },
  {
    id: "oec-ltc",
    symbol: "ltck",
    name: "OEC LTC",
  },
  {
    id: "oec-sfg",
    symbol: "sfgk",
    name: "OEC SFG",
  },
  {
    id: "oec-shib",
    symbol: "shibk",
    name: "OEC SHIB",
  },
  {
    id: "oec-sushi",
    symbol: "sushik",
    name: "OEC SUSHI",
  },
  {
    id: "oec-token",
    symbol: "okt",
    name: "OEC Token",
  },
  {
    id: "oec-tron",
    symbol: "trxk",
    name: "OEC Tron",
  },
  {
    id: "oec-uni",
    symbol: "unik",
    name: "OEC UNI",
  },
  {
    id: "oec-xrp",
    symbol: "xrpk",
    name: "OEC XRP",
  },
  {
    id: "oec-zks",
    symbol: "zksk",
    name: "OEC ZKS",
  },
  {
    id: "official-crypto-cowboy-token",
    symbol: "occt",
    name: "Official Crypto Cowboy Token",
  },
  {
    id: "offshift",
    symbol: "xft",
    name: "Offshift",
  },
  {
    id: "ofi-cash",
    symbol: "ofi",
    name: "OFI.cash",
  },
  {
    id: "ogcnode",
    symbol: "org",
    name: "Ogcnode",
  },
  {
    id: "og-fan-token",
    symbol: "og",
    name: "OG Fan Token",
  },
  {
    id: "oh-finance",
    symbol: "oh",
    name: "Oh! Finance",
  },
  {
    id: "ohm-coin",
    symbol: "ohmc",
    name: "Ohmcoin",
  },
  {
    id: "ohm-inu-dao",
    symbol: "AVohminu",
    name: "Ohm Inu DAO",
  },
  {
    id: "oikos",
    symbol: "oks",
    name: "Oikos",
  },
  {
    id: "oilage",
    symbol: "oil",
    name: "OILage",
  },
  {
    id: "oiler",
    symbol: "oil",
    name: "Oiler",
  },
  {
    id: "oin-finance",
    symbol: "oin",
    name: "OIN Finance",
  },
  {
    id: "oink-token",
    symbol: "oink",
    name: "Oink Token",
  },
  {
    id: "oiocoin",
    symbol: "oioc",
    name: "OIOCoin",
  },
  {
    id: "ojamu",
    symbol: "oja",
    name: "Ojamu",
  },
  {
    id: "oje-token",
    symbol: "oje",
    name: "Oje Token",
  },
  {
    id: "okb",
    symbol: "okb",
    name: "OKB",
  },
  {
    id: "okboomer",
    symbol: "okboomer",
    name: "OKBoomer",
  },
  {
    id: "okcash",
    symbol: "ok",
    name: "OKCash",
  },
  {
    id: "okex-fly",
    symbol: "okfly",
    name: "Okex Fly",
  },
  {
    id: "ok-lets-go",
    symbol: "oklg",
    name: "ok.lets.go.",
  },
  {
    id: "okletsplay",
    symbol: "oklp",
    name: "OkLetsPlay",
  },
  {
    id: "okratech-token",
    symbol: "ort",
    name: "Okratech Token",
  },
  {
    id: "oktplay",
    symbol: "oktp",
    name: "OKTPlay",
  },
  {
    id: "olcf",
    symbol: "olcf",
    name: "OLCF",
  },
  {
    id: "olea",
    symbol: "OLE",
    name: "Olea",
  },
  {
    id: "olecoin",
    symbol: "ole",
    name: "OleCoin",
  },
  {
    id: "olivecash",
    symbol: "olive",
    name: "Olive Cash",
  },
  {
    id: "olympia",
    symbol: "soo",
    name: "Olympia",
  },
  {
    id: "olympic-doge",
    symbol: "olympic doge",
    name: "Olympic Doge",
  },
  {
    id: "olympus",
    symbol: "ohm",
    name: "Olympus",
  },
  {
    id: "olympus-inu-dao",
    symbol: "ohminu",
    name: "Olympus Inu Dao",
  },
  {
    id: "olympus-token",
    symbol: "olympus",
    name: "OLYMPUS token",
  },
  {
    id: "olympus-v1",
    symbol: "ohm",
    name: "Olympus v1",
  },
  {
    id: "olympus-wormhole",
    symbol: "ohm",
    name: "Olympus (Wormhole)",
  },
  {
    id: "olyseum",
    symbol: "oly",
    name: "Olyseum",
  },
  {
    id: "oly-sport",
    symbol: "oly",
    name: "Oly Sport",
  },
  {
    id: "omax-token",
    symbol: "omax",
    name: "Omax Token",
  },
  {
    id: "ombre",
    symbol: "omb",
    name: "Ombre",
  },
  {
    id: "omega",
    symbol: "omega",
    name: "OMEGA",
  },
  {
    id: "omega-protocol-money",
    symbol: "opm",
    name: "Omega Protocol Money",
  },
  {
    id: "omicron",
    symbol: "omic",
    name: "Omicron",
  },
  {
    id: "omisego",
    symbol: "omg",
    name: "OMG Network",
  },
  {
    id: "omlira",
    symbol: "oml",
    name: "Omlira",
  },
  {
    id: "omm-tokens",
    symbol: "omm",
    name: "Omm Tokens",
  },
  {
    id: "omni",
    symbol: "omni",
    name: "Omni",
  },
  {
    id: "omni-cash",
    symbol: "oca$h",
    name: "Omni Cash",
  },
  {
    id: "omni-consumer-protocol",
    symbol: "ocp",
    name: "Omni Consumer Protocol",
  },
  {
    id: "omni-people-driven",
    symbol: "oai",
    name: "OMNI - People Driven",
  },
  {
    id: "omni-real-estate-token",
    symbol: "ort",
    name: "Omni Real Estate Token",
  },
  {
    id: "omnis",
    symbol: "omnis",
    name: "OMNIS",
  },
  {
    id: "omnitude",
    symbol: "ecom",
    name: "Omnitude",
  },
  {
    id: "omniwhirl",
    symbol: "whirl",
    name: "OmniWhirl",
  },
  {
    id: "omotenashicoin",
    symbol: "mtns",
    name: "OmotenashiCoin",
  },
  {
    id: "onbuff",
    symbol: "onit",
    name: "ONBUFF",
  },
  {
    id: "on-chain-capital",
    symbol: "OCC",
    name: "On Chain Capital",
  },
  {
    id: "one",
    symbol: "one",
    name: "One",
  },
  {
    id: "one-army-coin",
    symbol: "oac",
    name: "One Army Coin",
  },
  {
    id: "one-basis-cash",
    symbol: "obs",
    name: "One Basis Cash",
  },
  {
    id: "onebit",
    symbol: "1bit",
    name: "OneBit",
  },
  {
    id: "onebtc",
    symbol: "onebtc",
    name: "oneBTC",
  },
  {
    id: "one-cash",
    symbol: "onc",
    name: "One Cash",
  },
  {
    id: "onedao-finance",
    symbol: "odao",
    name: "OneDao Finance",
  },
  {
    id: "one-dex",
    symbol: "odex",
    name: "One DEX",
  },
  {
    id: "onefuse",
    symbol: "onefuse",
    name: "oneFUSE",
  },
  {
    id: "onegetcoin",
    symbol: "ogc",
    name: "Onegetcoin",
  },
  {
    id: "one-hundred-coin-2",
    symbol: "one",
    name: "One Hundred Coin",
  },
  {
    id: "one-ledger",
    symbol: "olt",
    name: "OneLedger",
  },
  {
    id: "onemoon",
    symbol: "onemoon",
    name: "OneMoon",
  },
  {
    id: "oneperl",
    symbol: "oneperl",
    name: "onePERL",
  },
  {
    id: "one-piece",
    symbol: "onepiece",
    name: "ONE PIECE",
  },
  {
    id: "onerare",
    symbol: "orare",
    name: "OneRare",
  },
  {
    id: "oneroot-network",
    symbol: "rnt",
    name: "OneRoot Network",
  },
  {
    id: "one-share",
    symbol: "ons",
    name: "One Share",
  },
  {
    id: "oneswap-dao-token",
    symbol: "ones",
    name: "OneSwap DAO Token",
  },
  {
    id: "onevbtc",
    symbol: "onevbtc",
    name: "oneVBTC",
  },
  {
    id: "onewing",
    symbol: "onewing",
    name: "oneWING",
  },
  {
    id: "one-world-coin",
    symbol: "owo",
    name: "One World Coin",
  },
  {
    id: "ong",
    symbol: "ong",
    name: "Ontology Gas",
  },
  {
    id: "onigiri",
    symbol: "onigiri",
    name: "Onigiri",
  },
  {
    id: "onion-mixer",
    symbol: "omt",
    name: "Onion Mixer",
  },
  {
    id: "oni-token",
    symbol: "oni",
    name: "ONINO",
  },
  {
    id: "onlexpa-token",
    symbol: "onlexpa",
    name: "onLEXpa Token",
  },
  {
    id: "online-expo",
    symbol: "expo",
    name: "Expo Token",
  },
  {
    id: "only1",
    symbol: "like",
    name: "Only1",
  },
  {
    id: "only-1-token",
    symbol: "o1t",
    name: "Only 1 Token",
  },
  {
    id: "onlyup",
    symbol: "$UP",
    name: "OnlyUp",
  },
  {
    id: "onooks",
    symbol: "ooks",
    name: "Onooks",
  },
  {
    id: "onston",
    symbol: "onston",
    name: "Onston",
  },
  {
    id: "ontology",
    symbol: "ont",
    name: "Ontology",
  },
  {
    id: "onx-finance",
    symbol: "onx",
    name: "OnX Finance",
  },
  {
    id: "onyx",
    symbol: "onyx",
    name: "Onyx",
  },
  {
    id: "oobit",
    symbol: "obt",
    name: "Oobit",
  },
  {
    id: "o-ocean-mar22",
    symbol: "o-ocean-mar22",
    name: "O-OCEAN-MAR22",
  },
  {
    id: "oogi",
    symbol: "oogi",
    name: "OOGI",
  },
  {
    id: "ooki",
    symbol: "ooki",
    name: "Ooki",
  },
  {
    id: "oolongswap",
    symbol: "olo",
    name: "OolongSwap",
  },
  {
    id: "oooor-finance",
    symbol: "oooor",
    name: "OOOOR Finance",
  },
  {
    id: "opacity",
    symbol: "opct",
    name: "Opacity",
  },
  {
    id: "opalcoin",
    symbol: "auop",
    name: "Opalcoin",
  },
  {
    id: "op-coin",
    symbol: "opc",
    name: "OP Coin",
  },
  {
    id: "openalexa-protocol",
    symbol: "oap",
    name: "OpenAlexa Protocol",
  },
  {
    id: "openanx",
    symbol: "oax",
    name: "OAX",
  },
  {
    id: "openbisea",
    symbol: "obs",
    name: "OpenBiSea",
  },
  {
    id: "opendao",
    symbol: "sos",
    name: "OpenDAO",
  },
  {
    id: "opendao-wormhole",
    symbol: "sos",
    name: "OpenDAO (Wormhole)",
  },
  {
    id: "open-governance-token",
    symbol: "open",
    name: "OPEN Governance Token",
  },
  {
    id: "openlive-nft",
    symbol: "opv",
    name: "OpenLive NFT",
  },
  {
    id: "open-monetary-system",
    symbol: "oms",
    name: "Open Monetary System",
  },
  {
    id: "opennity",
    symbol: "opnn",
    name: "Opennity",
  },
  {
    id: "openocean",
    symbol: "ooe",
    name: "OpenOcean",
  },
  {
    id: "open-platform",
    symbol: "open",
    name: "Open Platform",
  },
  {
    id: "open-predict-token",
    symbol: "opt",
    name: "OpenPredict Token",
  },
  {
    id: "openswap",
    symbol: "oswap",
    name: "OpenSwap",
  },
  {
    id: "openswap-token",
    symbol: "openx",
    name: "OpenSwap Token",
  },
  {
    id: "operon-origins",
    symbol: "oro",
    name: "Operon Origins",
  },
  {
    id: "opes-wrapped-pe",
    symbol: "wpe",
    name: "OPES (Wrapped PE)",
  },
  {
    id: "opium",
    symbol: "opium",
    name: "Opium",
  },
  {
    id: "oppa",
    symbol: "oppa",
    name: "OPPA",
  },
  {
    id: "optimus",
    symbol: "optcm",
    name: "Optimus",
  },
  {
    id: "optimuscat",
    symbol: "opcat",
    name: "OptimusCat",
  },
  {
    id: "optimusrise",
    symbol: "ore",
    name: "OptimusRise",
  },
  {
    id: "option-panda-platform",
    symbol: "opa",
    name: "Option Panda Platform",
  },
  {
    id: "option-room",
    symbol: "room",
    name: "OptionRoom",
  },
  {
    id: "optionroom-governance-token",
    symbol: "court",
    name: "OptionRoom Governance Token",
  },
  {
    id: "options-market",
    symbol: "osm",
    name: "Options Market",
  },
  {
    id: "optitoken",
    symbol: "opti",
    name: "Optitoken",
  },
  {
    id: "opulous",
    symbol: "opul",
    name: "Opulous",
  },
  {
    id: "opus",
    symbol: "opt",
    name: "Opus",
  },
  {
    id: "opusbeat",
    symbol: "opus",
    name: "OpusBeat",
  },
  {
    id: "opyn-squeeth",
    symbol: "osqth",
    name: "Opyn Squeeth",
  },
  {
    id: "oraclechain",
    symbol: "oct",
    name: "OracleChain",
  },
  {
    id: "oracle-system",
    symbol: "orc",
    name: "Oracle System",
  },
  {
    id: "oracle-top-5",
    symbol: "orcl5",
    name: "Oracle Top 5 Index",
  },
  {
    id: "oracolxor",
    symbol: "xor",
    name: "Oracolxor",
  },
  {
    id: "oragonx",
    symbol: "orgn",
    name: "OragonX",
  },
  {
    id: "oraichain-token",
    symbol: "orai",
    name: "Oraichain Token",
  },
  {
    id: "orakler",
    symbol: "orkl",
    name: "Orakler",
  },
  {
    id: "orakuru",
    symbol: "ork",
    name: "Orakuru",
  },
  {
    id: "orao-network",
    symbol: "orao",
    name: "ORAO Network",
  },
  {
    id: "orbit-chain",
    symbol: "orc",
    name: "Orbit Chain",
  },
  {
    id: "orbitcoin",
    symbol: "orb",
    name: "Orbitcoin",
  },
  {
    id: "orbit-token",
    symbol: "orbit",
    name: "Orbit Token",
  },
  {
    id: "orbs",
    symbol: "orbs",
    name: "Orbs",
  },
  {
    id: "orbyt-token",
    symbol: "orbyt",
    name: "ORBYT Token",
  },
  {
    id: "orca",
    symbol: "orca",
    name: "Orca",
  },
  {
    id: "orca-avai",
    symbol: "avai",
    name: "Orca AVAI",
  },
  {
    id: "orcadao",
    symbol: "orca",
    name: "Orca DAO",
  },
  {
    id: "orchid-protocol",
    symbol: "oxt",
    name: "Orchid Protocol",
  },
  {
    id: "orclands-metaverse",
    symbol: "orc",
    name: "Orclands Metaverse",
  },
  {
    id: "order-of-the-apeverse",
    symbol: "OAV",
    name: "Order of the Apeverse",
  },
  {
    id: "orenda-protocol",
    symbol: "orex",
    name: "Orenda Protocol",
  },
  {
    id: "oren-game",
    symbol: "OREN",
    name: "OREN Game",
  },
  {
    id: "oreo",
    symbol: "ore",
    name: "Oreo Defi Finance",
  },
  {
    id: "ore-token",
    symbol: "ore",
    name: "ORE Token",
  },
  {
    id: "organix",
    symbol: "ogx",
    name: "Organix",
  },
  {
    id: "orica",
    symbol: "ori",
    name: "Orica",
  },
  {
    id: "orient",
    symbol: "oft",
    name: "Orient",
  },
  {
    id: "orient-walt",
    symbol: "htdf",
    name: "Orient Walt",
  },
  {
    id: "original-crypto-coin",
    symbol: "tusc",
    name: "The Universal Settlement Coin",
  },
  {
    id: "original-gangsta-shiba",
    symbol: "ogshib",
    name: "Original Gangsta Shiba",
  },
  {
    id: "origin-dollar",
    symbol: "ousd",
    name: "Origin Dollar",
  },
  {
    id: "origin-protocol",
    symbol: "ogn",
    name: "Origin Protocol",
  },
  {
    id: "origin-sport",
    symbol: "ors",
    name: "Origin Sport",
  },
  {
    id: "origintrail",
    symbol: "trac",
    name: "OriginTrail",
  },
  {
    id: "origo",
    symbol: "ogo",
    name: "Origo",
  },
  {
    id: "orion-money",
    symbol: "orion",
    name: "Orion Money",
  },
  {
    id: "orion-protocol",
    symbol: "orn",
    name: "Orion Protocol",
  },
  {
    id: "orlycoin",
    symbol: "orly",
    name: "Orlycoin",
  },
  {
    id: "ormeus-cash",
    symbol: "omc",
    name: "Ormeus Cash",
  },
  {
    id: "ormeuscoin",
    symbol: "orme",
    name: "Ormeus Coin",
  },
  {
    id: "ormeus-ecosystem",
    symbol: "eco",
    name: "Ormeus Ecosystem",
  },
  {
    id: "orne",
    symbol: "orne",
    name: "Orne",
  },
  {
    id: "oro",
    symbol: "oro",
    name: "ORO",
  },
  {
    id: "oros-finance",
    symbol: "oros",
    name: "OROS.finance",
  },
  {
    id: "orsgroup-io",
    symbol: "ors",
    name: "ORS Group",
  },
  {
    id: "oshare",
    symbol: "oshare",
    name: "OShare",
  },
  {
    id: "osmiumcoin",
    symbol: "os76",
    name: "OsmiumCoin",
  },
  {
    id: "osmoscoin",
    symbol: "os",
    name: "OsmosCoin",
  },
  {
    id: "osmosis",
    symbol: "osmo",
    name: "Osmosis",
  },
  {
    id: "ot-aave-interest-bearing-usdc",
    symbol: "ot-ausdc-29dec2022",
    name: "OT Aave Interest Bearing USDC",
  },
  {
    id: "otcbtc-token",
    symbol: "otb",
    name: "OTCBTC Token",
  },
  {
    id: "ot-compound-dai",
    symbol: "ot-cdai-29dec2022",
    name: "OT Compound Dai",
  },
  {
    id: "ot-eth-usdc",
    symbol: "ot-ethusdc-29dec2022",
    name: "OT-ETH/USDC",
  },
  {
    id: "otherlife",
    symbol: "OTL",
    name: "OtherLife",
  },
  {
    id: "otium-technologies",
    symbol: "otium",
    name: "Otium Technologies",
  },
  {
    id: "otocash",
    symbol: "oto",
    name: "OTOCASH",
  },
  {
    id: "ot-pendle-eth",
    symbol: "ot-pe-29dec2022",
    name: "OT-PENDLE/ETH",
  },
  {
    id: "otterclam",
    symbol: "clam",
    name: "OtterClam",
  },
  {
    id: "otter-finance",
    symbol: "otr",
    name: "Otter Finance",
  },
  {
    id: "oud",
    symbol: "oud",
    name: "OUD",
  },
  {
    id: "ouranos",
    symbol: "our",
    name: "Ouranos",
  },
  {
    id: "ourglass",
    symbol: "glass",
    name: "OurGlass",
  },
  {
    id: "ouroboros",
    symbol: "ouro",
    name: "Ouroboros",
  },
  {
    id: "ouro-governance-share",
    symbol: "ogs",
    name: "Ouro Governance Share",
  },
  {
    id: "ouro-stablecoin",
    symbol: "ouro",
    name: "Ouro Stablecoin",
  },
  {
    id: "our-pay",
    symbol: "our",
    name: "Our Pay",
  },
  {
    id: "ouse",
    symbol: "ouse",
    name: "Ouse",
  },
  {
    id: "outrace",
    symbol: "ore",
    name: "Outrace",
  },
  {
    id: "ovato",
    symbol: "ovo",
    name: "Ovato",
  },
  {
    id: "overline-emblem",
    symbol: "emb",
    name: "Overline Emblem",
  },
  {
    id: "overload-game",
    symbol: "ovl",
    name: "Overlord Game",
  },
  {
    id: "overlord",
    symbol: "lord",
    name: "Overlord",
  },
  {
    id: "ovr",
    symbol: "ovr",
    name: "Ovr",
  },
  {
    id: "owgaming",
    symbol: "ow",
    name: "OWGaming",
  },
  {
    id: "owl",
    symbol: "owl",
    name: "OWL",
  },
  {
    id: "owldao",
    symbol: "owl",
    name: "OwlDAO",
  },
  {
    id: "owl-token",
    symbol: "owl",
    name: "OWL Token",
  },
  {
    id: "owndata",
    symbol: "own",
    name: "OWNDATA",
  },
  {
    id: "ownix",
    symbol: "onx",
    name: "Ownix",
  },
  {
    id: "ownly",
    symbol: "own",
    name: "Ownly",
  },
  {
    id: "own-token",
    symbol: "own",
    name: "OWN Token",
  },
  {
    id: "oxbitcoin",
    symbol: "0xbtc",
    name: "0xBitcoin",
  },
  {
    id: "oxbull-solana",
    symbol: "oxs",
    name: "Oxbull Solana",
  },
  {
    id: "oxbull-tech",
    symbol: "oxb",
    name: "Oxbull Tech",
  },
  {
    id: "oxo-farm",
    symbol: "oxo",
    name: "OXO.Farm",
  },
  {
    id: "oxy-dev",
    symbol: "oyt",
    name: "OxyDev",
  },
  {
    id: "oxygen",
    symbol: "oxy",
    name: "Oxygen",
  },
  {
    id: "ozagold",
    symbol: "ozg",
    name: "Ozagold",
  },
  {
    id: "p2p",
    symbol: "p2p",
    name: "P2P",
  },
  {
    id: "p2p-solutions-foundation",
    symbol: "p2ps",
    name: "P2P solutions foundation",
  },
  {
    id: "paccoin",
    symbol: "pac",
    name: "PAC Protocol",
  },
  {
    id: "pacific",
    symbol: "paf",
    name: "Pacific",
  },
  {
    id: "pacific-defi",
    symbol: "pacific",
    name: "Pacific DeFi",
  },
  {
    id: "packageportal",
    symbol: "port",
    name: "PackagePortal",
  },
  {
    id: "packswap",
    symbol: "pact",
    name: "PactSwap",
  },
  {
    id: "pacoca",
    symbol: "pacoca",
    name: "Pacoca",
  },
  {
    id: "paddycoin",
    symbol: "paddy",
    name: "Paddycoin",
  },
  {
    id: "pagan-gods-fur-token",
    symbol: "fur",
    name: "Pagan Gods Fur token",
  },
  {
    id: "page",
    symbol: "page",
    name: "Page",
  },
  {
    id: "paid-network",
    symbol: "paid",
    name: "PAID Network",
  },
  {
    id: "paint",
    symbol: "paint",
    name: "MurAll",
  },
  {
    id: "paint-swap",
    symbol: "brush",
    name: "Paint Swap",
  },
  {
    id: "pakcoin",
    symbol: "pak",
    name: "Pakcoin",
  },
  {
    id: "pakkun-inu",
    symbol: "pakk",
    name: "Pakkun Inu",
  },
  {
    id: "pako",
    symbol: "pako",
    name: "Pako",
  },
  {
    id: "palace",
    symbol: "paa",
    name: "Palace",
  },
  {
    id: "paladin-dao",
    symbol: "pal",
    name: "Paladin DAO",
  },
  {
    id: "palchain",
    symbol: "palt",
    name: "PalChain",
  },
  {
    id: "palestine-finance",
    symbol: "pal",
    name: "Palestine Finance",
  },
  {
    id: "palette",
    symbol: "plt",
    name: "Palette",
  },
  {
    id: "palgold",
    symbol: "palg",
    name: "PalGold",
  },
  {
    id: "pallapay",
    symbol: "palla",
    name: "Pallapay",
  },
  {
    id: "pallas-finance",
    symbol: "pallas",
    name: "Pallas Finance",
  },
  {
    id: "palletone",
    symbol: "ptn",
    name: "PalletOneToken",
  },
  {
    id: "pamp-cc",
    symbol: "PAMP",
    name: "PAMP.CC",
  },
  {
    id: "pamp-network",
    symbol: "pamp",
    name: "Pamp Network",
  },
  {
    id: "pampther",
    symbol: "pampther",
    name: "Pampther",
  },
  {
    id: "pancake-bunny",
    symbol: "bunny",
    name: "Pancake Bunny",
  },
  {
    id: "pancake-games",
    symbol: "gcake",
    name: "Pancake Games",
  },
  {
    id: "pancake-hunny",
    symbol: "hunny",
    name: "Hunny Finance",
  },
  {
    id: "pancakelock",
    symbol: "plock",
    name: "PancakeLock",
  },
  {
    id: "pancakepoll",
    symbol: "ppoll",
    name: "PancakePoll",
  },
  {
    id: "pancakeswap-token",
    symbol: "cake",
    name: "PancakeSwap",
  },
  {
    id: "pancakeswap-wormhole",
    symbol: "cake",
    name: "PancakeSwap (Wormhole)",
  },
  {
    id: "pancaketools",
    symbol: "tcake",
    name: "PancakeTools",
  },
  {
    id: "pandacoin",
    symbol: "pnd",
    name: "Pandacoin",
  },
  {
    id: "panda-coin",
    symbol: "panda",
    name: "Panda Coin",
  },
  {
    id: "panda-dao",
    symbol: "pdao",
    name: "Panda Dao",
  },
  {
    id: "panda-finance",
    symbol: "pand",
    name: "Panda Finance",
  },
  {
    id: "panda-girl",
    symbol: "pgirl",
    name: "Panda Girl",
  },
  {
    id: "panda-multiverse",
    symbol: "pndmlv",
    name: "Panda Multiverse",
  },
  {
    id: "pando",
    symbol: "pando",
    name: "Pando",
  },
  {
    id: "pandora-protocol",
    symbol: "pndr",
    name: "Pandora Protocol",
  },
  {
    id: "pangea",
    symbol: "xpat",
    name: "Pangea Arbitration Token (Bitnation)",
  },
  {
    id: "pangea-cleanup-coin",
    symbol: "poc",
    name: "PANGEA Cleanup Coin",
  },
  {
    id: "pangolin",
    symbol: "png",
    name: "Pangolin",
  },
  {
    id: "pangolinswap",
    symbol: "pangolin",
    name: "Pangolinswap",
  },
  {
    id: "pantheon-x",
    symbol: "xpn",
    name: "PANTHEON X",
  },
  {
    id: "panther",
    symbol: "zkp",
    name: "Panther Protocol",
  },
  {
    id: "pantherswap",
    symbol: "panther",
    name: "PantherSwap",
  },
  {
    id: "pantos",
    symbol: "pan",
    name: "Pantos",
  },
  {
    id: "panvala-pan",
    symbol: "pan",
    name: "Panvala Pan",
  },
  {
    id: "papacake",
    symbol: "papacake",
    name: "PapaCake",
  },
  {
    id: "papa-dao",
    symbol: "papa",
    name: "PAPA DAO",
  },
  {
    id: "papa-doge",
    symbol: "papadoge",
    name: "Papa Doge",
  },
  {
    id: "paparazzi",
    symbol: "pazzi",
    name: "Paparazzi",
  },
  {
    id: "papel",
    symbol: "papel",
    name: "Papel Token",
  },
  {
    id: "paper",
    symbol: "paper",
    name: "Paper",
  },
  {
    id: "pappay",
    symbol: "pappay",
    name: "Pappay",
  },
  {
    id: "paprprintr-finance",
    symbol: "papr",
    name: "Paprprintr Finance",
  },
  {
    id: "parabolic",
    symbol: "PARA",
    name: "Parabolic",
  },
  {
    id: "parachute",
    symbol: "par",
    name: "Parachute",
  },
  {
    id: "paradisefi",
    symbol: "eden",
    name: "ParadiseFi",
  },
  {
    id: "paradisehotel-nft",
    symbol: "pht",
    name: "ParadiseHotel NFT",
  },
  {
    id: "paradox",
    symbol: "pdox",
    name: "Paradox",
  },
  {
    id: "paradox-nft",
    symbol: "pxbsc",
    name: "Paradox NFT",
  },
  {
    id: "paragonsdao",
    symbol: "pdt",
    name: "ParagonsDAO",
  },
  {
    id: "parainu",
    symbol: "parainu",
    name: "ParaInu",
  },
  {
    id: "paralink-network",
    symbol: "para",
    name: "Paralink Network",
  },
  {
    id: "parallelchain",
    symbol: "xpll",
    name: "ParallelChain",
  },
  {
    id: "parallelcoin",
    symbol: "duo",
    name: "ParallelCoin",
  },
  {
    id: "paras",
    symbol: "paras",
    name: "Paras",
  },
  {
    id: "parasol-finance",
    symbol: "psol",
    name: "Parasol Finance",
  },
  {
    id: "parasset",
    symbol: "aset",
    name: "Parasset",
  },
  {
    id: "paraswap",
    symbol: "psp",
    name: "ParaSwap",
  },
  {
    id: "paribus",
    symbol: "pbx",
    name: "Paribus",
  },
  {
    id: "paris-saint-germain-fan-token",
    symbol: "psg",
    name: "Paris Saint-Germain Fan Token",
  },
  {
    id: "parkgene",
    symbol: "gene",
    name: "Parkgene",
  },
  {
    id: "parkingo",
    symbol: "got",
    name: "ParkinGo",
  },
  {
    id: "parrotdao",
    symbol: "parr",
    name: "ParrotDao",
  },
  {
    id: "parrot-egg",
    symbol: "ipegg",
    name: "Parrot Egg",
  },
  {
    id: "parrot-egg-polygon",
    symbol: "ppegg",
    name: "Polygon Parrot Egg",
  },
  {
    id: "parrot-protocol",
    symbol: "prt",
    name: "Parrot Protocol",
  },
  {
    id: "parrot-usd",
    symbol: "pai",
    name: "Parrot USD",
  },
  {
    id: "parsiq",
    symbol: "prq",
    name: "PARSIQ",
  },
  {
    id: "parsiq-boost",
    symbol: "prqboost",
    name: "Parsiq Boost",
  },
  {
    id: "parsl",
    symbol: "seed",
    name: "Parsl",
  },
  {
    id: "par-stablecoin",
    symbol: "par",
    name: "Parallel",
  },
  {
    id: "particl",
    symbol: "part",
    name: "Particl",
  },
  {
    id: "particle-2",
    symbol: "prtcle",
    name: "Particle",
  },
  {
    id: "particle-technology",
    symbol: "part",
    name: "Particle Technology",
  },
  {
    id: "partneroid",
    symbol: "ptr",
    name: "Partner Coin",
  },
  {
    id: "parts-of-four-coin",
    symbol: "p4c",
    name: "Parts of Four Coin",
  },
  {
    id: "partyboard",
    symbol: "pab",
    name: "PartyBoard",
  },
  {
    id: "party-dog",
    symbol: "PDog",
    name: "Party Dog",
  },
  {
    id: "party-hat",
    symbol: "phat",
    name: "Party Hat",
  },
  {
    id: "party-of-the-living-dead",
    symbol: "DEAD",
    name: "Party Of The Living Dead",
  },
  {
    id: "partyswap",
    symbol: "party",
    name: "PartySwap",
  },
  {
    id: "party-v2",
    symbol: "party",
    name: "Party",
  },
  {
    id: "pascalcoin",
    symbol: "pasc",
    name: "Pascal",
  },
  {
    id: "passive-income",
    symbol: "psi",
    name: "Passive Income",
  },
  {
    id: "passive-income-bot",
    symbol: "pib",
    name: "Passive Income Bot",
  },
  {
    id: "passive-token",
    symbol: "Passive",
    name: "Passive Token",
  },
  {
    id: "passport-finance",
    symbol: "pass",
    name: "Passport Finance",
  },
  {
    id: "pasta-finance",
    symbol: "pasta",
    name: "Pasta Finance",
  },
  {
    id: "pasta-vault-nftx",
    symbol: "pasta",
    name: "PASTA Vault (NFTX)",
  },
  {
    id: "pastel",
    symbol: "psl",
    name: "Pastel",
  },
  {
    id: "pastrypunks",
    symbol: "PastryPunks",
    name: "PastryPunks",
  },
  {
    id: "pasv",
    symbol: "pasv",
    name: "PASV",
  },
  {
    id: "pathdao",
    symbol: "path",
    name: "PathDAO",
  },
  {
    id: "pathfund",
    symbol: "path",
    name: "PathFund",
  },
  {
    id: "path-vault-nftx",
    symbol: "path",
    name: "PATH Vault (NFTX)",
  },
  {
    id: "patientory",
    symbol: "ptoy",
    name: "Patientory",
  },
  {
    id: "patron",
    symbol: "pat",
    name: "Patron",
  },
  {
    id: "paul-token",
    symbol: "paul",
    name: "PAUL Token",
  },
  {
    id: "pavecoin",
    symbol: "pvn",
    name: "Pavecoin",
  },
  {
    id: "pawgcoin",
    symbol: "pawg",
    name: "PAWGcoin",
  },
  {
    id: "pawn-my-nft",
    symbol: "pnft",
    name: "Pawn My NFT",
  },
  {
    id: "paws-funds",
    symbol: "paws",
    name: "Paws Funds",
  },
  {
    id: "pawthereum",
    symbol: "pawth",
    name: "Pawthereum",
  },
  {
    id: "pawtocol",
    symbol: "upi",
    name: "Pawtocol",
  },
  {
    id: "paw-v2",
    symbol: "paw",
    name: "Paw V2",
  },
  {
    id: "pax-gold",
    symbol: "paxg",
    name: "PAX Gold",
  },
  {
    id: "paxos-gold-wormhole",
    symbol: "paxg",
    name: "Paxos Gold (Wormhole)",
  },
  {
    id: "paxos-standard",
    symbol: "usdp",
    name: "Pax Dollar",
  },
  {
    id: "payaccept",
    symbol: "payt",
    name: "PayAccept",
  },
  {
    id: "paybandcoin",
    symbol: "PYBC",
    name: "PaybandCoin",
  },
  {
    id: "paybswap",
    symbol: "payb",
    name: "Paybswap",
  },
  {
    id: "paycent",
    symbol: "pyn",
    name: "Paycent",
  },
  {
    id: "paycheck-defi",
    symbol: "check",
    name: "Paycheck DeFi",
  },
  {
    id: "pay-coin",
    symbol: "pci",
    name: "Paycoin",
  },
  {
    id: "paycon-token",
    symbol: "con",
    name: "Paycon Token",
  },
  {
    id: "pay-it-now",
    symbol: "pin",
    name: "Pay It Now",
  },
  {
    id: "paymastercoin",
    symbol: "pmc",
    name: "PayMasterCoin",
  },
  {
    id: "payment-coin",
    symbol: "pod",
    name: "Payment Coin",
  },
  {
    id: "paynet-coin",
    symbol: "payn",
    name: "PayNet Coin",
  },
  {
    id: "paynshop",
    symbol: "payns",
    name: "Paynshop",
  },
  {
    id: "payperex",
    symbol: "pax",
    name: "PayperEx",
  },
  {
    id: "paypex",
    symbol: "payx",
    name: "Paypex",
  },
  {
    id: "paypie",
    symbol: "ppp",
    name: "PayPie",
  },
  {
    id: "paypolitan-token",
    symbol: "epan",
    name: "Paypolitan Token",
  },
  {
    id: "payrue",
    symbol: "propel",
    name: "Propel",
  },
  {
    id: "payship",
    symbol: "pshp",
    name: "Payship",
  },
  {
    id: "paytomat",
    symbol: "pti",
    name: "Paytomat",
  },
  {
    id: "payturn",
    symbol: "ptr",
    name: "Payturn",
  },
  {
    id: "payyoda",
    symbol: "yot",
    name: "PayYoda",
  },
  {
    id: "payzus",
    symbol: "pzs",
    name: "Payzus",
  },
  {
    id: "pazzy",
    symbol: "pazzy",
    name: "Pazzy",
  },
  {
    id: "pbtc35a",
    symbol: "pbtc35a",
    name: "pBTC35A",
  },
  {
    id: "pcatv3",
    symbol: "pcatv3",
    name: "pCATv3",
  },
  {
    id: "pchain",
    symbol: "pi",
    name: "Plian",
  },
  {
    id: "pcore",
    symbol: "pcc",
    name: "Pcore",
  },
  {
    id: "peace-token",
    symbol: "pet",
    name: "Peace Token",
  },
  {
    id: "peaches-finance",
    symbol: "pchs",
    name: "Peaches.Finance",
  },
  {
    id: "peach-finance",
    symbol: "peech",
    name: "Peach Finance",
  },
  {
    id: "peachfolio",
    symbol: "pchf",
    name: "Peachfolio",
  },
  {
    id: "peacockcoin",
    symbol: "pekc",
    name: "Peacockcoin",
  },
  {
    id: "peacockcoin-eth",
    symbol: "pekc",
    name: "Peacockcoin (ETH)",
  },
  {
    id: "pea-farm",
    symbol: "pea",
    name: "Pea Farm",
  },
  {
    id: "peak-avalanche",
    symbol: "peakavax",
    name: "Peak Avalanche",
  },
  {
    id: "peanut",
    symbol: "nux",
    name: "Peanut",
  },
  {
    id: "peanuts",
    symbol: "peanuts",
    name: "Peanuts",
  },
  {
    id: "peaq",
    symbol: "peaq",
    name: "peaq",
  },
  {
    id: "pear",
    symbol: "pear",
    name: "Pear",
  },
  {
    id: "pearl-finance",
    symbol: "pearl",
    name: "Pearl Finance",
  },
  {
    id: "peculium-2",
    symbol: "pcl",
    name: "Peculium",
  },
  {
    id: "peepcoin",
    symbol: "pcn",
    name: "Peepcoin",
  },
  {
    id: "peercoin",
    symbol: "ppc",
    name: "Peercoin",
  },
  {
    id: "peerex-network",
    symbol: "PERX",
    name: "PeerEx Network",
  },
  {
    id: "peerguess",
    symbol: "guess",
    name: "PeerGuess",
  },
  {
    id: "peet-defi",
    symbol: "pte",
    name: "Peet DeFi",
  },
  {
    id: "pegascoin",
    symbol: "pgc",
    name: "Pegascoin",
  },
  {
    id: "pegasusdao",
    symbol: "sus",
    name: "PegasusDAO",
  },
  {
    id: "pegaxy-stone",
    symbol: "pgx",
    name: "Pegaxy Stone",
  },
  {
    id: "pegazus-finance",
    symbol: "peg",
    name: "Pegazus Finance",
  },
  {
    id: "pegnet",
    symbol: "peg",
    name: "PegNet",
  },
  {
    id: "pele-network",
    symbol: "pele",
    name: "PELE Network",
  },
  {
    id: "pendle",
    symbol: "pendle",
    name: "Pendle",
  },
  {
    id: "pengolincoin",
    symbol: "pgo",
    name: "PengolinCoin",
  },
  {
    id: "penguin-finance",
    symbol: "pefi",
    name: "Penguin Finance",
  },
  {
    id: "penguin-party-fish",
    symbol: "fish",
    name: "Penguin Party Fish",
  },
  {
    id: "penky",
    symbol: "penky",
    name: "Penky",
  },
  {
    id: "penny-for-bit",
    symbol: "pfb",
    name: "Penny For Bit",
  },
  {
    id: "pension-plan",
    symbol: "pp",
    name: "Pension Plan",
  },
  {
    id: "peony-coin",
    symbol: "pny",
    name: "Peony Coin",
  },
  {
    id: "peoples-punk",
    symbol: "dddd",
    name: "People's Punk",
  },
  {
    id: "peoplez",
    symbol: "lez",
    name: "Peoplez",
  },
  {
    id: "peos",
    symbol: "peos",
    name: "pEOS",
  },
  {
    id: "pepecash",
    symbol: "pepecash",
    name: "PepeCash",
  },
  {
    id: "pepedex",
    symbol: "ppdex",
    name: "Pepedex",
  },
  {
    id: "pepegold",
    symbol: "peps",
    name: "PEPS Coin",
  },
  {
    id: "pepemon-pepeballs",
    symbol: "ppblz",
    name: "Pepemon Pepeballs",
  },
  {
    id: "pepemoon",
    symbol: "pepe",
    name: "Pepemoon",
  },
  {
    id: "pepeverse",
    symbol: "pepevr",
    name: "PepeVerse",
  },
  {
    id: "peppa-network",
    symbol: "peppa",
    name: "Peppa Network",
  },
  {
    id: "pera-finance",
    symbol: "pera",
    name: "Pera Finance",
  },
  {
    id: "percent",
    symbol: "pct",
    name: "Percent",
  },
  {
    id: "perfect-world",
    symbol: "pfw",
    name: "Perfect World",
  },
  {
    id: "peri-finance",
    symbol: "peri",
    name: "PERI Finance",
  },
  {
    id: "perkle",
    symbol: "prkl",
    name: "Perkle",
  },
  {
    id: "perlin",
    symbol: "perl",
    name: "PERL.eco",
  },
  {
    id: "permission-coin",
    symbol: "ask",
    name: "Permission Coin",
  },
  {
    id: "perpetual-protocol",
    symbol: "perp",
    name: "Perpetual Protocol",
  },
  {
    id: "perpetual-wormhole",
    symbol: "perp",
    name: "Perpetual (Wormhole)",
  },
  {
    id: "perpetuum-coin",
    symbol: "prp",
    name: "Perpetuum Coin",
  },
  {
    id: "per-project",
    symbol: "per",
    name: "PER Project",
  },
  {
    id: "perra",
    symbol: "perra",
    name: "Perra",
  },
  {
    id: "persia",
    symbol: "persia",
    name: "Persia",
  },
  {
    id: "persistence",
    symbol: "xprt",
    name: "Persistence",
  },
  {
    id: "persistence-staked-xprt",
    symbol: "stkxprt",
    name: "pSTAKE Staked XPRT",
  },
  {
    id: "perth-mint-gold-token",
    symbol: "pmgt",
    name: "Perth Mint Gold Token",
  },
  {
    id: "peseta-digital",
    symbol: "ptd",
    name: "Peseta Digital",
  },
  {
    id: "pesobit",
    symbol: "psb",
    name: "Pesobit",
  },
  {
    id: "pet-games",
    symbol: "petg",
    name: "Pet Games",
  },
  {
    id: "peth18c",
    symbol: "peth18c",
    name: "pETH18C",
  },
  {
    id: "petkingdom",
    symbol: "pkd",
    name: "PetKingdom",
  },
  {
    id: "petrachor",
    symbol: "pta",
    name: "Petrachor",
  },
  {
    id: "petrodollar",
    symbol: "xpd",
    name: "PetroDollar",
  },
  {
    id: "petshelp",
    symbol: "peth",
    name: "PetsHelp",
  },
  {
    id: "petworld",
    symbol: "pw",
    name: "PetWorld",
  },
  {
    id: "pexcoin",
    symbol: "pex",
    name: "Pexcoin",
  },
  {
    id: "pgov",
    symbol: "pgov",
    name: "PGOV",
  },
  {
    id: "pha",
    symbol: "pha",
    name: "Phala Network",
  },
  {
    id: "phaeton",
    symbol: "phae",
    name: "Phaeton",
  },
  {
    id: "phant",
    symbol: "pnt",
    name: "Phant",
  },
  {
    id: "phantasia",
    symbol: "fant",
    name: "Phantasia",
  },
  {
    id: "phantasma",
    symbol: "soul",
    name: "Phantasma",
  },
  {
    id: "phantasma-energy",
    symbol: "kcal",
    name: "Phantasma Energy",
  },
  {
    id: "phantom-protocol",
    symbol: "phm",
    name: "Phantom Protocol",
  },
  {
    id: "pharma-pay-coin",
    symbol: "prp",
    name: "Pharma Pay Coin",
  },
  {
    id: "phifi-finance",
    symbol: "phifiv2",
    name: "PhiFi Finance",
  },
  {
    id: "philips-pay-coin",
    symbol: "ppc",
    name: "PHILLIPS PAY COIN",
  },
  {
    id: "phillionex",
    symbol: "phn",
    name: "Phillionex",
  },
  {
    id: "philscurrency",
    symbol: "wage",
    name: "Digiwage",
  },
  {
    id: "phoenix",
    symbol: "phoenix",
    name: "Phoenix",
  },
  {
    id: "phoenixchain",
    symbol: "pcn",
    name: "PhoenixChain",
  },
  {
    id: "phoenixcoin",
    symbol: "pxc",
    name: "Phoenixcoin",
  },
  {
    id: "phoenixdao",
    symbol: "phnx",
    name: "PhoenixDAO",
  },
  {
    id: "phoenix-defi-finance",
    symbol: "pnixs",
    name: "Phoenix Defi Finance",
  },
  {
    id: "phoenixdefi-finance",
    symbol: "pnix",
    name: "PhoenixDefi.Finance",
  },
  {
    id: "phoenix-global",
    symbol: "phb",
    name: "Phoenix Global",
  },
  {
    id: "phoenix-token",
    symbol: "phx",
    name: "Phoenix Token",
  },
  {
    id: "phoenix-unity",
    symbol: "pxu",
    name: "Phoenix Unity",
  },
  {
    id: "phoneum",
    symbol: "pht",
    name: "Phoneum",
  },
  {
    id: "phoneum-green",
    symbol: "phtg",
    name: "Phoneum Green",
  },
  {
    id: "phonon-dao",
    symbol: "phonon",
    name: "Phonon DAO",
  },
  {
    id: "phore",
    symbol: "phr",
    name: "Phore",
  },
  {
    id: "photon",
    symbol: "pho",
    name: "Photon",
  },
  {
    id: "photonswap",
    symbol: "photon",
    name: "PhotonSwap",
  },
  {
    id: "phuket-holiday-coin",
    symbol: "phc",
    name: "Phuket Holiday Coin",
  },
  {
    id: "phunk-vault-nftx",
    symbol: "phunk",
    name: "PHUNK Vault (NFTX)",
  },
  {
    id: "phu-quoc-dog",
    symbol: "pqd",
    name: "Phu Quoc Dog",
  },
  {
    id: "phuture",
    symbol: "phtr",
    name: "Phuture",
  },
  {
    id: "physis",
    symbol: "phy",
    name: "Physis",
  },
  {
    id: "piasa",
    symbol: "piasa",
    name: "PIASA",
  },
  {
    id: "pibble",
    symbol: "pib",
    name: "Pibble",
  },
  {
    id: "pica",
    symbol: "pica",
    name: "PICA",
  },
  {
    id: "picartnft",
    symbol: "panft",
    name: "PicArtNFT",
  },
  {
    id: "piccolo-inu",
    symbol: "pinu",
    name: "Piccolo Inu",
  },
  {
    id: "picipo",
    symbol: "picipo",
    name: "Picipo",
  },
  {
    id: "pick",
    symbol: "pick",
    name: "PICK",
  },
  {
    id: "pickle-finance",
    symbol: "pickle",
    name: "Pickle Finance",
  },
  {
    id: "picogo",
    symbol: "pico",
    name: "PicoGo",
  },
  {
    id: "piction-network",
    symbol: "pxl",
    name: "Piction Network",
  },
  {
    id: "pidao",
    symbol: "pid",
    name: "PIDAO",
  },
  {
    id: "piedao-balanced-crypto-pie",
    symbol: "bcp",
    name: "PieDAO Balanced Crypto Pie",
  },
  {
    id: "piedao-btc",
    symbol: "btc++",
    name: "PieDAO BTC++",
  },
  {
    id: "piedao-defi",
    symbol: "defi++",
    name: "PieDAO DEFI++",
  },
  {
    id: "piedao-defi-large-cap",
    symbol: "defi+l",
    name: "PieDAO DEFI Large Cap",
  },
  {
    id: "piedao-defi-small-cap",
    symbol: "DEFI+S",
    name: "PieDAO DEFI Small Cap",
  },
  {
    id: "piedao-dough-v2",
    symbol: "dough",
    name: "PieDAO DOUGH v2",
  },
  {
    id: "piedao-yearn-ecosystem-pie",
    symbol: "ypie",
    name: "PieDAO Yearn Ecosystem Pie",
  },
  {
    id: "pie-share",
    symbol: "pie",
    name: "Pie Share",
  },
  {
    id: "pigeoncoin",
    symbol: "pgn",
    name: "Pigeoncoin",
  },
  {
    id: "pigeon-sol",
    symbol: "pgnt",
    name: "Pigeon Sol",
  },
  {
    id: "pig-finance",
    symbol: "pig",
    name: "Pig Finance",
  },
  {
    id: "piggy",
    symbol: "piggy",
    name: "Piggy",
  },
  {
    id: "piggy-bank",
    symbol: "pb",
    name: "Piggy Bank",
  },
  {
    id: "piggy-bank-token",
    symbol: "piggy",
    name: "Piggy Bank Token",
  },
  {
    id: "piggy-finance",
    symbol: "piggy",
    name: "Piggy Finance",
  },
  {
    id: "piggy-planet",
    symbol: "pigi",
    name: "Piggy Planet",
  },
  {
    id: "piggy-share",
    symbol: "pshare",
    name: "Piggy Share",
  },
  {
    id: "pigx",
    symbol: "pigx",
    name: "PIGX",
  },
  {
    id: "pikachu",
    symbol: "pika",
    name: "Pika",
  },
  {
    id: "pikachu-inu",
    symbol: "pikachu",
    name: "Pikachu Inu",
  },
  {
    id: "pikto-group",
    symbol: "pkp",
    name: "Pikto Group",
  },
  {
    id: "pillar",
    symbol: "plr",
    name: "Pillar",
  },
  {
    id: "pilot",
    symbol: "ptd",
    name: "Pilot",
  },
  {
    id: "pinecone-finance",
    symbol: "pct",
    name: "Pinecone Finance",
  },
  {
    id: "pinkcoin",
    symbol: "pink",
    name: "Pinkcoin",
  },
  {
    id: "pinkelon",
    symbol: "pinke",
    name: "PinkElon",
  },
  {
    id: "pinkmoon",
    symbol: "pinkm",
    name: "PinkMoon",
  },
  {
    id: "pinknode",
    symbol: "pnode",
    name: "Pinknode",
  },
  {
    id: "pink-panda",
    symbol: "pinkpanda",
    name: "Pink Panda",
  },
  {
    id: "pink-panther",
    symbol: "PINK",
    name: "PINK PANTHER",
  },
  {
    id: "pinksale",
    symbol: "pinksale",
    name: "PinkSale",
  },
  {
    id: "pinkslip-finance",
    symbol: "pslip",
    name: "Pinkslip Finance",
  },
  {
    id: "pinkswap-token",
    symbol: "pinks",
    name: "PinkSwap Token",
  },
  {
    id: "pintu-token",
    symbol: "PTU",
    name: "Pintu Token",
  },
  {
    id: "pip",
    symbol: "pip",
    name: "PIP",
  },
  {
    id: "piplcoin",
    symbol: "pipl",
    name: "PiplCoin",
  },
  {
    id: "pippi-finance",
    symbol: "pipi",
    name: "Pippi Finance",
  },
  {
    id: "pirate-boy",
    symbol: "pirateboy",
    name: "Pirate Boy",
  },
  {
    id: "piratecash",
    symbol: "pirate",
    name: "PirateCash",
  },
  {
    id: "pirate-chain",
    symbol: "arrr",
    name: "Pirate Chain",
  },
  {
    id: "piratecoin",
    symbol: "piratecoin☠",
    name: "PirateCoin",
  },
  {
    id: "piratedao",
    symbol: "jolly",
    name: "PirateDAO",
  },
  {
    id: "pirate-dice",
    symbol: "booty",
    name: "Pirate Dice",
  },
  {
    id: "pirate-inu",
    symbol: "pinu",
    name: "Pirate Inu",
  },
  {
    id: "piratep",
    symbol: "piratep",
    name: "PirateP",
  },
  {
    id: "piratera",
    symbol: "pira",
    name: "Piratera",
  },
  {
    id: "pirl",
    symbol: "pirl",
    name: "Pirl",
  },
  {
    id: "pist-trust",
    symbol: "pist",
    name: "Pist Trust",
  },
  {
    id: "pitbull",
    symbol: "pit",
    name: "Pitbull",
  },
  {
    id: "pitch",
    symbol: "pitch",
    name: "Pitch",
  },
  {
    id: "pitch-finance-token",
    symbol: "pft",
    name: "Pitch Finance Token",
  },
  {
    id: "pitquidity",
    symbol: "pitqd",
    name: "Pitquidity",
  },
  {
    id: "pitquidity-bsc",
    symbol: "pitqd",
    name: "Pitquidity-BSC",
  },
  {
    id: "pittys",
    symbol: "PITTYS",
    name: "Pittys",
  },
  {
    id: "pivot-token",
    symbol: "pvt",
    name: "Pivot Token",
  },
  {
    id: "pivx",
    symbol: "pivx",
    name: "PIVX",
  },
  {
    id: "pixelgas",
    symbol: "pixelgas",
    name: "PixelGas",
  },
  {
    id: "pixel-inu",
    symbol: "pixu",
    name: "Pixel Inu",
  },
  {
    id: "pixelpotus",
    symbol: "pxl",
    name: "PixelPotus",
  },
  {
    id: "pixelsquid",
    symbol: "pixelsquid",
    name: "PixelSQUID",
  },
  {
    id: "pixels-so",
    symbol: "pixl",
    name: "Pixels.so",
  },
  {
    id: "pixelverse",
    symbol: "pixel",
    name: "PixelVerse",
  },
  {
    id: "pixeos",
    symbol: "pixeos",
    name: "PixEOS",
  },
  {
    id: "pixiu-finance",
    symbol: "pixiu",
    name: "Pixiu Finance",
  },
  {
    id: "pixl-coin-2",
    symbol: "pxlc",
    name: "Pixl Coin",
  },
  {
    id: "pixls-vault-nftx",
    symbol: "pixls",
    name: "PIXLS Vault (NFTX)",
  },
  {
    id: "pizza-nft",
    symbol: "$PIZZA",
    name: "Pizza NFT",
  },
  {
    id: "pizza-pug-coin",
    symbol: "ppug",
    name: "Pizza Pug Coin",
  },
  {
    id: "pizzaswap",
    symbol: "pizza",
    name: "PizzaSwap",
  },
  {
    id: "pizza-usde",
    symbol: "pizza",
    name: "PIZZA",
  },
  {
    id: "pkg-token",
    symbol: "pkg",
    name: "PKG Token",
  },
  {
    id: "placeh",
    symbol: "phl",
    name: "Placeholders",
  },
  {
    id: "place-war",
    symbol: "place",
    name: "PlaceWar Governance Token",
  },
  {
    id: "plair",
    symbol: "pla",
    name: "Plair",
  },
  {
    id: "planet",
    symbol: "pla",
    name: "PLANET",
  },
  {
    id: "planet-finance",
    symbol: "aqua",
    name: "Planet Finance",
  },
  {
    id: "planet-inu",
    symbol: "PLANETINU",
    name: "Planet Inu",
  },
  {
    id: "planet-of-apes",
    symbol: "poa",
    name: "Planet of Apes",
  },
  {
    id: "planet-sandbox",
    symbol: "psb",
    name: "Planet Sandbox",
  },
  {
    id: "planetverse",
    symbol: "planetverse",
    name: "PlanetVerse",
  },
  {
    id: "planetwatch",
    symbol: "planets",
    name: "PlanetWatch",
  },
  {
    id: "plant2earn",
    symbol: "p2e",
    name: "Plant2Earn",
  },
  {
    id: "plant-exodus",
    symbol: "pexo",
    name: "Plant Exodus",
  },
  {
    id: "plant-vs-undead-token",
    symbol: "pvu",
    name: "Plant vs Undead Token",
  },
  {
    id: "plasma-finance",
    symbol: "ppay",
    name: "Plasma Finance",
  },
  {
    id: "plastiks",
    symbol: "plastik",
    name: "Plastiks",
  },
  {
    id: "plateau-finance",
    symbol: "plt",
    name: "Plateau Finance",
  },
  {
    id: "platincoin",
    symbol: "plc",
    name: "PlatinCoin",
  },
  {
    id: "platoncoin",
    symbol: "pltc",
    name: "PlatonCoin",
  },
  {
    id: "platon-network",
    symbol: "lat",
    name: "PlatON Network",
  },
  {
    id: "platypus-finance",
    symbol: "ptp",
    name: "Platypus Finance",
  },
  {
    id: "play2live",
    symbol: "luc",
    name: "Level-Up Coin",
  },
  {
    id: "playandlike",
    symbol: "pal",
    name: "PlayAndLike",
  },
  {
    id: "playandlike-old",
    symbol: "pal",
    name: "PlayAndLike [OLD]",
  },
  {
    id: "playcent",
    symbol: "pcnt",
    name: "Playcent",
  },
  {
    id: "playchip",
    symbol: "pla",
    name: "PlayChip",
  },
  {
    id: "playdapp",
    symbol: "pla",
    name: "PlayDapp",
  },
  {
    id: "playermon",
    symbol: "pym",
    name: "Playermon",
  },
  {
    id: "playersonly",
    symbol: "po",
    name: "PlayersOnly",
  },
  {
    id: "playervsplayercoin",
    symbol: "pvp",
    name: "PlayerVsPlayerCoin",
  },
  {
    id: "playfuel",
    symbol: "plf",
    name: "PlayFuel",
  },
  {
    id: "playgame",
    symbol: "pxg",
    name: "PlayGame",
  },
  {
    id: "playgroundz",
    symbol: "iog",
    name: "Playgroundz",
  },
  {
    id: "play-it-forward-dao",
    symbol: "pif",
    name: "Play It Forward DAO",
  },
  {
    id: "playkey",
    symbol: "pkt",
    name: "PlayKey",
  },
  {
    id: "playmarket",
    symbol: "pmt",
    name: "DAO PlayMarket 2.0",
  },
  {
    id: "playnity",
    symbol: "ply",
    name: "PlayNity",
  },
  {
    id: "playpad",
    symbol: "ppad",
    name: "PlayPad",
  },
  {
    id: "play-token",
    symbol: "play",
    name: "PLAY Token",
  },
  {
    id: "playtreks",
    symbol: "treks",
    name: "PlayTreks",
  },
  {
    id: "plaza-finance",
    symbol: "plaza",
    name: "Plaza Finance",
  },
  {
    id: "plebe-gaming",
    symbol: "pleb",
    name: "Plebe Gaming",
  },
  {
    id: "pledge",
    symbol: "plgr",
    name: "Pledge",
  },
  {
    id: "pledgecamp",
    symbol: "plg",
    name: "Pledgecamp",
  },
  {
    id: "plentycoin",
    symbol: "plentycoin",
    name: "PlentyCoin",
  },
  {
    id: "plenty-dao",
    symbol: "plenty",
    name: "Plenty DeFi",
  },
  {
    id: "plethori",
    symbol: "ple",
    name: "Plethori",
  },
  {
    id: "plex",
    symbol: "plex",
    name: "PLEX",
  },
  {
    id: "plgnet",
    symbol: "plug",
    name: "PL^Gnet",
  },
  {
    id: "plotx",
    symbol: "plot",
    name: "PlotX",
  },
  {
    id: "plug",
    symbol: "plg",
    name: "Plug",
  },
  {
    id: "plug-chain",
    symbol: "plugcn",
    name: "Plug Chain",
  },
  {
    id: "plugin",
    symbol: "pli",
    name: "Plugin",
  },
  {
    id: "plumcake-finance",
    symbol: "plum",
    name: "PlumCake Finance",
  },
  {
    id: "plunge",
    symbol: "plg",
    name: "Plunge",
  },
  {
    id: "pluracoin",
    symbol: "plura",
    name: "PluraCoin",
  },
  {
    id: "plus-coin",
    symbol: "nplc",
    name: "Plus Coin",
  },
  {
    id: "plusonecoin",
    symbol: "plus1",
    name: "PlusOneCoin",
  },
  {
    id: "pluspad",
    symbol: "plus",
    name: "PlusPad",
  },
  {
    id: "pluto",
    symbol: "plut",
    name: "Pluto",
  },
  {
    id: "pluton",
    symbol: "plu",
    name: "Pluton",
  },
  {
    id: "pluton-chain",
    symbol: "plc",
    name: "Pluton Chain",
  },
  {
    id: "pluto-network",
    symbol: "ptn",
    name: "Pluto Network",
  },
  {
    id: "plutonium",
    symbol: "pln",
    name: "Plutonium",
  },
  {
    id: "plutopepe",
    symbol: "pluto",
    name: "PlutoPepe",
  },
  {
    id: "plutos-network",
    symbol: "plut",
    name: "Plutos Network",
  },
  {
    id: "plutus-defi",
    symbol: "plt",
    name: "Add.xyz (OLD)",
  },
  {
    id: "pmail",
    symbol: "pml",
    name: "Pmail",
  },
  {
    id: "pnetwork",
    symbol: "pnt",
    name: "pNetwork",
  },
  {
    id: "pn-token",
    symbol: "pn",
    name: "PN Token",
  },
  {
    id: "poa-network",
    symbol: "poa",
    name: "POA Network",
  },
  {
    id: "poc-blockchain",
    symbol: "poc",
    name: "POC Blockchain",
  },
  {
    id: "poc-chain",
    symbol: "pocc",
    name: "POC Chain",
  },
  {
    id: "pocket-arena",
    symbol: "poc",
    name: "Pocket Arena",
  },
  {
    id: "pocketcoin",
    symbol: "pkoin",
    name: "Pocketcoin",
  },
  {
    id: "pocket-doge",
    symbol: "pckt",
    name: "Pocket",
  },
  {
    id: "pocket-network",
    symbol: "pokt",
    name: "Pocket Network",
  },
  {
    id: "pocket-node",
    symbol: "node",
    name: "Pocket Node",
  },
  {
    id: "pocmon",
    symbol: "pmon",
    name: "PocMon (Old)",
  },
  {
    id: "pocmon-2",
    symbol: "mon",
    name: "PocMon",
  },
  {
    id: "pocoland",
    symbol: "poco",
    name: "Pocoland",
  },
  {
    id: "podo-point",
    symbol: "pod",
    name: "Podo Point",
  },
  {
    id: "poet",
    symbol: "poe",
    name: "Po.et",
  },
  {
    id: "pofi",
    symbol: "pofi",
    name: "PoFi",
  },
  {
    id: "pofid-dao",
    symbol: "pfid",
    name: "Pofid Dao",
  },
  {
    id: "pogcoin",
    symbol: "pog",
    name: "PogCoin",
  },
  {
    id: "pog-coin",
    symbol: "pog",
    name: "PolygonumOnline",
  },
  {
    id: "pogged-finance",
    symbol: "pog",
    name: "Pogged Finance",
  },
  {
    id: "pointpay",
    symbol: "pxp",
    name: "PointPay",
  },
  {
    id: "pokeball",
    symbol: "poke",
    name: "Pokeball",
  },
  {
    id: "pokedx",
    symbol: "pdx",
    name: "PokeDX",
  },
  {
    id: "pokelon-finance",
    symbol: "pokelon",
    name: "Pokelon.Finance",
  },
  {
    id: "pokemonspace",
    symbol: "POS",
    name: "PokemonSpace",
  },
  {
    id: "poken",
    symbol: "pkn",
    name: "Poken",
  },
  {
    id: "pokerain",
    symbol: "mmda",
    name: "Pokerain",
  },
  {
    id: "pokerfi",
    symbol: "pokerfi",
    name: "PokerFi",
  },
  {
    id: "pokmonsters",
    symbol: "pok",
    name: "Pokmonsters",
  },
  {
    id: "polar",
    symbol: "polar",
    name: "POLAR",
  },
  {
    id: "polaris",
    symbol: "polar",
    name: "Polarisdefi",
  },
  {
    id: "polaris-2",
    symbol: "polaris",
    name: "Polaris",
  },
  {
    id: "polaris-share",
    symbol: "pola",
    name: "Polaris Share",
  },
  {
    id: "polaris-token",
    symbol: "plrs",
    name: "Polaris Token",
  },
  {
    id: "polars-governance-token",
    symbol: "pol",
    name: "Polars Governance Token",
  },
  {
    id: "polar-sync",
    symbol: "polar",
    name: "Polar Sync",
  },
  {
    id: "police-and-thief-game",
    symbol: "loot",
    name: "Police and Thief Game",
  },
  {
    id: "policedoge",
    symbol: "policedoge",
    name: "PoliceDOGE",
  },
  {
    id: "polinate",
    symbol: "poli",
    name: "Polinate",
  },
  {
    id: "polis",
    symbol: "polis",
    name: "Polis",
  },
  {
    id: "polkabase",
    symbol: "pbase",
    name: "Polkabase",
  },
  {
    id: "polkabridge",
    symbol: "pbr",
    name: "PolkaBridge",
  },
  {
    id: "polkacipher",
    symbol: "cphr",
    name: "PolkaCipher",
  },
  {
    id: "polka-city",
    symbol: "polc",
    name: "Polkacity",
  },
  {
    id: "polka-classic",
    symbol: "dotc",
    name: "Polka Classic",
  },
  {
    id: "polkadex",
    symbol: "pdex",
    name: "Polkadex",
  },
  {
    id: "polkadog-v2-0",
    symbol: "einstein",
    name: "Polkadog V2.0",
  },
  {
    id: "polkadomain",
    symbol: "name",
    name: "PolkaDomain",
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
  },
  {
    id: "polkaex",
    symbol: "pkex",
    name: "PolkaEx",
  },
  {
    id: "polkafantasy",
    symbol: "xp",
    name: "PolkaFantasy",
  },
  {
    id: "polkafoundry",
    symbol: "pkf",
    name: "PolkaFoundry",
  },
  {
    id: "polkago",
    symbol: "$PLKG",
    name: "Polkago",
  },
  {
    id: "polkainsure-finance",
    symbol: "pis",
    name: "Polkainsure Finance",
  },
  {
    id: "polkainu",
    symbol: "pinu",
    name: "PolkaInu",
  },
  {
    id: "polkally",
    symbol: "kally",
    name: "Polkally",
  },
  {
    id: "polkalokr",
    symbol: "lkr",
    name: "Polkalokr",
  },
  {
    id: "polkamarkets",
    symbol: "polk",
    name: "Polkamarkets",
  },
  {
    id: "polkamonster",
    symbol: "pkmon",
    name: "PolkaMonster",
  },
  {
    id: "polkaparty",
    symbol: "polp",
    name: "PolkaParty",
  },
  {
    id: "polkapet-world",
    symbol: "pets",
    name: "PolkaPet World",
  },
  {
    id: "polkaplay",
    symbol: "polo",
    name: "NftyPlay",
  },
  {
    id: "polkarare",
    symbol: "prare",
    name: "Polkarare",
  },
  {
    id: "polkasocial-network",
    symbol: "psn",
    name: "Polkasocial Network",
  },
  {
    id: "polkastarter",
    symbol: "pols",
    name: "Polkastarter",
  },
  {
    id: "polkaswap",
    symbol: "pswap",
    name: "Polkaswap",
  },
  {
    id: "polkatrail",
    symbol: "trail",
    name: "Polkatrail",
  },
  {
    id: "polkatrain",
    symbol: "polt",
    name: "Polkatrain",
  },
  {
    id: "polka-ventures",
    symbol: "polven",
    name: "Polka Ventures",
  },
  {
    id: "polkawar",
    symbol: "pwar",
    name: "PolkaWar",
  },
  {
    id: "polker",
    symbol: "pkr",
    name: "Polker",
  },
  {
    id: "pollchain",
    symbol: "poll",
    name: "Pollchain",
  },
  {
    id: "pollen",
    symbol: "pln",
    name: "Pollen",
  },
  {
    id: "pollux-coin",
    symbol: "pox",
    name: "Pollux Coin",
  },
  {
    id: "polly",
    symbol: "polly",
    name: "Polly Finance",
  },
  {
    id: "polly-defi-nest",
    symbol: "ndefi",
    name: "Polly DeFi Nest",
  },
  {
    id: "polyalpha-finance",
    symbol: "alpha",
    name: "PolyAlpha Finance",
  },
  {
    id: "polybeta-finance",
    symbol: "beta",
    name: "PolyBeta Finance",
  },
  {
    id: "polybius",
    symbol: "plbt",
    name: "Polybius",
  },
  {
    id: "polybull-finance",
    symbol: "bull",
    name: "PolyBull Finance",
  },
  {
    id: "polycake-finance",
    symbol: "pcake",
    name: "PolyCake Finance",
  },
  {
    id: "polycat-finance",
    symbol: "fish",
    name: "Polycat Finance",
  },
  {
    id: "polychain-monsters",
    symbol: "pmon",
    name: "Polychain Monsters",
  },
  {
    id: "polychart",
    symbol: "pchart",
    name: "Polychart",
  },
  {
    id: "polycorn-finance",
    symbol: "ycorn",
    name: "Polycorn Finance",
  },
  {
    id: "polydoge",
    symbol: "polydoge",
    name: "PolyDoge",
  },
  {
    id: "polyfi",
    symbol: "polyfi",
    name: "PolyFi",
  },
  {
    id: "polyfloki",
    symbol: "POKI",
    name: "PolyFLOKI",
  },
  {
    id: "polygamma",
    symbol: "gamma",
    name: "PolyGamma Finance",
  },
  {
    id: "polygen",
    symbol: "pgen",
    name: "Polygen",
  },
  {
    id: "polygod",
    symbol: "gull",
    name: "PolyGod",
  },
  {
    id: "polygold",
    symbol: "polygold",
    name: "PolyGold",
  },
  {
    id: "polygon-babydoge",
    symbol: "polybabydoge",
    name: "Polygon BabyDoge",
  },
  {
    id: "polygon-ecosystem-index",
    symbol: "peco",
    name: "Amun Polygon Ecosystem Index",
  },
  {
    id: "polygonfarm-finance",
    symbol: "spade",
    name: "PolygonFarm Finance",
  },
  {
    id: "polyient-games-governance-token",
    symbol: "pgt",
    name: "Polyient Games Governance Token",
  },
  {
    id: "polyient-games-unity",
    symbol: "pgu",
    name: "Polyient Games Unity",
  },
  {
    id: "polylastic",
    symbol: "polx",
    name: "Polylastic",
  },
  {
    id: "polylauncher",
    symbol: "angel",
    name: "Polylauncher",
  },
  {
    id: "polylion",
    symbol: "lion",
    name: "PolyLion",
  },
  {
    id: "polymath",
    symbol: "poly",
    name: "Polymath",
  },
  {
    id: "polymath-finance",
    symbol: "pmf",
    name: "PolyMath.Finance",
  },
  {
    id: "polymoon",
    symbol: "polymoon",
    name: "PolyMoon",
  },
  {
    id: "polypanda",
    symbol: "bamboo",
    name: "PolyPanda",
  },
  {
    id: "poly-peg-mdex",
    symbol: "hmdx",
    name: "Poly-Peg Mdex",
  },
  {
    id: "polypug",
    symbol: "polypug",
    name: "PolyPug",
  },
  {
    id: "polypup",
    symbol: "pup",
    name: "PolyPup",
  },
  {
    id: "polypup-collar-token",
    symbol: "collar",
    name: "PolyPup Collar Token",
  },
  {
    id: "polypux",
    symbol: "PUX",
    name: "PolypuX",
  },
  {
    id: "polyquity",
    symbol: "pyq",
    name: "PolyQuity",
  },
  {
    id: "polyquity-dollar",
    symbol: "pyd",
    name: "PolyQuity Dollar",
  },
  {
    id: "polyquokka-finance",
    symbol: "quokk",
    name: "PolyQuokka Finance",
  },
  {
    id: "polyroll",
    symbol: "roll",
    name: "Polyroll",
  },
  {
    id: "polysafu",
    symbol: "safu",
    name: "polySAFU",
  },
  {
    id: "polysage",
    symbol: "sage",
    name: "Polysage",
  },
  {
    id: "polyshark-finance",
    symbol: "shark",
    name: "PolyShark Finance",
  },
  {
    id: "polyshiba",
    symbol: "polyshiba",
    name: "PolyShiba",
  },
  {
    id: "polyshield",
    symbol: "shi3ld",
    name: "PolyShield",
  },
  {
    id: "polystar",
    symbol: "polystar",
    name: "PolyStar",
  },
  {
    id: "polystarter",
    symbol: "polr",
    name: "PolyStarter",
  },
  {
    id: "polyswarm",
    symbol: "nct",
    name: "PolySwarm",
  },
  {
    id: "polytrade",
    symbol: "trade",
    name: "Polytrade",
  },
  {
    id: "polyunity-finance",
    symbol: "unity",
    name: "PolyUnity Finance",
  },
  {
    id: "polyvertex",
    symbol: "vert",
    name: "PolyVertex",
  },
  {
    id: "polyvolve-finance",
    symbol: "spr",
    name: "PolyVolve Finance",
  },
  {
    id: "polywave",
    symbol: "wave",
    name: "polyWAVE",
  },
  {
    id: "polywhale",
    symbol: "krill",
    name: "Polywhale",
  },
  {
    id: "polywolf",
    symbol: "moon",
    name: "Polywolf",
  },
  {
    id: "polyx",
    symbol: "pxt",
    name: "POLYX",
  },
  {
    id: "polyyeld-token",
    symbol: "yeld",
    name: "PolyYeld Token",
  },
  {
    id: "polyyield-token",
    symbol: "yield",
    name: "PolyYield Token",
  },
  {
    id: "polyyork",
    symbol: "york",
    name: "PolyYork",
  },
  {
    id: "polyzap",
    symbol: "pzap",
    name: "PolyZap",
  },
  {
    id: "pomeranian",
    symbol: "pom",
    name: "Pomeranian",
  },
  {
    id: "pomerocket",
    symbol: "pome",
    name: "PomeRocket",
  },
  {
    id: "pomi",
    symbol: "Pomi",
    name: "Pomi",
  },
  {
    id: "pompom",
    symbol: "pom",
    name: "PomPom",
  },
  {
    id: "pomskey",
    symbol: "pm",
    name: "Pomskey",
  },
  {
    id: "pontoon",
    symbol: "toon",
    name: "Pontoon",
  },
  {
    id: "ponyo-inu",
    symbol: "ponyo",
    name: "Ponyo Impact",
  },
  {
    id: "ponzicoin",
    symbol: "ponzi",
    name: "PonziCoin",
  },
  {
    id: "ponzu-inu",
    symbol: "ponzu",
    name: "Ponzu Inu",
  },
  {
    id: "poocoin",
    symbol: "poocoin",
    name: "PooCoin",
  },
  {
    id: "poodle",
    symbol: "poodl",
    name: "Poodl Token",
  },
  {
    id: "poofcash",
    symbol: "poof",
    name: "PoofCash",
  },
  {
    id: "poolcoin",
    symbol: "pool",
    name: "POOLCOIN",
  },
  {
    id: "poollotto-finance",
    symbol: "plt",
    name: "Poollotto.finance",
  },
  {
    id: "pool-party",
    symbol: "pp",
    name: "Pool Party",
  },
  {
    id: "pooltogether",
    symbol: "pool",
    name: "PoolTogether",
  },
  {
    id: "pool-token",
    symbol: "pool",
    name: "Pool Token",
  },
  {
    id: "poolz-finance",
    symbol: "poolz",
    name: "Poolz Finance",
  },
  {
    id: "poomoon",
    symbol: "poo",
    name: "POOMOON",
  },
  {
    id: "poopay",
    symbol: "poo",
    name: "PooPay",
  },
  {
    id: "poopsicle",
    symbol: "poop",
    name: "Poopsicle",
  },
  {
    id: "poordoge",
    symbol: "poordoge",
    name: "PoorDoge",
  },
  {
    id: "poor-quack",
    symbol: "poor",
    name: "Poor Quack",
  },
  {
    id: "pop",
    symbol: "pop!",
    name: "POP",
  },
  {
    id: "pop-chest-token",
    symbol: "pop",
    name: "POP Network",
  },
  {
    id: "popcorn",
    symbol: "pop",
    name: "Popcorn",
  },
  {
    id: "popcorn-token",
    symbol: "corn",
    name: "Popcorn Token",
  },
  {
    id: "populous",
    symbol: "ppt",
    name: "Populous",
  },
  {
    id: "populous-xbrl-token",
    symbol: "pxt",
    name: "Populous XBRL Token",
  },
  {
    id: "porkswap",
    symbol: "pswap",
    name: "PorkSwap",
  },
  {
    id: "pornrocket",
    symbol: "pornrocket",
    name: "PornRocket",
  },
  {
    id: "porta",
    symbol: "kian",
    name: "Porta",
  },
  {
    id: "portal",
    symbol: "portal",
    name: "Portal",
  },
  {
    id: "porte-token",
    symbol: "porte",
    name: "Porte Token",
  },
  {
    id: "port-finance",
    symbol: "port",
    name: "Port Finance",
  },
  {
    id: "portify",
    symbol: "pfy",
    name: "Portify",
  },
  {
    id: "portion",
    symbol: "prt",
    name: "Portion",
  },
  {
    id: "portugal-national-team-fan-token",
    symbol: "por",
    name: "Portugal National Team Fan Token",
  },
  {
    id: "portuma",
    symbol: "por",
    name: "Portuma",
  },
  {
    id: "pos-coin",
    symbol: "pos",
    name: "POS Coin",
  },
  {
    id: "poseidon-token",
    symbol: "pos",
    name: "Poseidon Token",
  },
  {
    id: "position-token",
    symbol: "posi",
    name: "Position Token",
  },
  {
    id: "postcoin",
    symbol: "post",
    name: "PostCoin",
  },
  {
    id: "potato",
    symbol: "potato",
    name: "Potato",
  },
  {
    id: "potcoin",
    symbol: "pot",
    name: "Potcoin",
  },
  {
    id: "potent-coin",
    symbol: "ptt",
    name: "Potent Coin",
  },
  {
    id: "potentiam",
    symbol: "ptm",
    name: "Potentiam",
  },
  {
    id: "potion-brew-finance",
    symbol: "brew",
    name: "Potion Brew Finance",
  },
  {
    id: "potter-inu",
    symbol: "potterinu",
    name: "Potter Inu",
  },
  {
    id: "povo-finance",
    symbol: "povo",
    name: "Povo Finance",
  },
  {
    id: "powerada",
    symbol: "pow",
    name: "PowerADA",
  },
  {
    id: "powerbalt",
    symbol: "pwrb",
    name: "PowerBalt",
  },
  {
    id: "power-block",
    symbol: "pow",
    name: "Power Block",
  },
  {
    id: "power-cash",
    symbol: "prch",
    name: "Power Cash",
  },
  {
    id: "power-index-pool-token",
    symbol: "pipt",
    name: "Power Index Pool Token",
  },
  {
    id: "powerinu",
    symbol: "PowerInu",
    name: "PowerInu",
  },
  {
    id: "power-ledger",
    symbol: "powr",
    name: "Power Ledger",
  },
  {
    id: "power-nodes",
    symbol: "power",
    name: "Power Nodes",
  },
  {
    id: "powertrade-fuel",
    symbol: "ptf",
    name: "PowerTrade Fuel",
  },
  {
    id: "powerzilla",
    symbol: "powerzilla",
    name: "PowerZilla",
  },
  {
    id: "pqbert",
    symbol: "pqbert",
    name: "pQBERT",
  },
  {
    id: "prcy-coin",
    symbol: "prcy",
    name: "PRCY Coin",
  },
  {
    id: "precharge",
    symbol: "pcpi",
    name: "Precharge",
  },
  {
    id: "precium",
    symbol: "pcm",
    name: "Precium",
  },
  {
    id: "predator-coin",
    symbol: "prd",
    name: "Predator Coin",
  },
  {
    id: "predict",
    symbol: "pt",
    name: "Predict",
  },
  {
    id: "predictcoin",
    symbol: "pred",
    name: "Predictcoin",
  },
  {
    id: "prediqt",
    symbol: "pqt",
    name: "Prediqt",
  },
  {
    id: "predix-network",
    symbol: "prdx",
    name: "Predix Network",
  },
  {
    id: "prelax",
    symbol: "peax",
    name: "Prelax",
  },
  {
    id: "premia",
    symbol: "premia",
    name: "Premia",
  },
  {
    id: "premio",
    symbol: "premio",
    name: "Premio",
  },
  {
    id: "premiumblock",
    symbol: "prb",
    name: "PremiumBlock",
  },
  {
    id: "presaledao",
    symbol: "af-presaledao",
    name: "PresaleDAO",
  },
  {
    id: "presearch",
    symbol: "pre",
    name: "Presearch",
  },
  {
    id: "president-doge",
    symbol: "presidentdoge",
    name: "President Doge",
  },
  {
    id: "pria",
    symbol: "pria",
    name: "PRIA",
  },
  {
    id: "pridetoken",
    symbol: "prdetkn",
    name: "PrideToken",
  },
  {
    id: "primas",
    symbol: "pst",
    name: "Primas",
  },
  {
    id: "prime",
    symbol: "d2d",
    name: "Prime",
  },
  {
    id: "primecoin",
    symbol: "xpm",
    name: "Primecoin",
  },
  {
    id: "prime-dai",
    symbol: "pdai",
    name: "Prime DAI",
  },
  {
    id: "prime-numbers",
    symbol: "prnt",
    name: "Prime Numbers",
  },
  {
    id: "primestone",
    symbol: "kkc",
    name: "Kabberry",
  },
  {
    id: "prime-whiterock-company",
    symbol: "pwc",
    name: "Prime Whiterock Company",
  },
  {
    id: "prime-xi",
    symbol: "pxi",
    name: "Prime-XI",
  },
  {
    id: "prism",
    symbol: "prism",
    name: "Prism",
  },
  {
    id: "prism-network",
    symbol: "prism",
    name: "Prism Network",
  },
  {
    id: "privacyswap",
    symbol: "prv",
    name: "PrivacySwap",
  },
  {
    id: "privapp-network",
    symbol: "bpriva",
    name: "Privapp Network",
  },
  {
    id: "privateum",
    symbol: "pvm",
    name: "Privateum",
  },
  {
    id: "privatix",
    symbol: "prix",
    name: "Privatix",
  },
  {
    id: "privcy",
    symbol: "priv",
    name: "PRiVCY",
  },
  {
    id: "privi-pix",
    symbol: "pix",
    name: "Privi Pix",
  },
  {
    id: "privi-trax",
    symbol: "trax",
    name: "Privi Trax",
  },
  {
    id: "prize-coin",
    symbol: "prz",
    name: "Prize Coin",
  },
  {
    id: "prizm",
    symbol: "pzm",
    name: "Prizm",
  },
  {
    id: "prntr",
    symbol: "prntr",
    name: "PRNTR",
  },
  {
    id: "probably-nothing",
    symbol: "pn",
    name: "Probably Nothing",
  },
  {
    id: "probit-exchange",
    symbol: "prob",
    name: "Probit Token",
  },
  {
    id: "prodax",
    symbol: "dax",
    name: "Prodax",
  },
  {
    id: "professional-fighters-league-fan-token",
    symbol: "pfl",
    name: "Professional Fighters League Fan Token",
  },
  {
    id: "profit-bank",
    symbol: "pbk",
    name: "Profit Bank",
  },
  {
    id: "profit-bls",
    symbol: "profit",
    name: "Profit Bls",
  },
  {
    id: "project-dogex",
    symbol: "dogex",
    name: "Project DogeX",
  },
  {
    id: "projectfeenixv2",
    symbol: "feenixv2",
    name: "ProjectFeenixv2",
  },
  {
    id: "project-inverse",
    symbol: "xiv",
    name: "Project Inverse",
  },
  {
    id: "projectmars",
    symbol: "mars",
    name: "ProjectMars",
  },
  {
    id: "project-oasis",
    symbol: "oasis",
    name: "ProjectOasis",
  },
  {
    id: "project-one-whale",
    symbol: "pow",
    name: "Project: One Whale",
  },
  {
    id: "project-pai",
    symbol: "pai",
    name: "Project Pai",
  },
  {
    id: "project-quantum",
    symbol: "qbit",
    name: "Project Quantum",
  },
  {
    id: "project-senpai",
    symbol: "senpai",
    name: "Project Senpai",
  },
  {
    id: "project-shivom",
    symbol: "omx",
    name: "Project SHIVOM",
  },
  {
    id: "project-with",
    symbol: "wiken",
    name: "Project WITH",
  },
  {
    id: "projectx",
    symbol: "xil",
    name: "ProjectX",
  },
  {
    id: "project-x",
    symbol: "nanox",
    name: "Project-X",
  },
  {
    id: "project-x-nodes",
    symbol: "pxt2",
    name: "Project X Nodes",
  },
  {
    id: "projekt-diamond",
    symbol: "diamnd",
    name: "Projekt Diamond",
  },
  {
    id: "projekt-gold",
    symbol: "gold",
    name: "Projekt Gold",
  },
  {
    id: "prometeus",
    symbol: "prom",
    name: "Prometeus",
  },
  {
    id: "promise-token",
    symbol: "promise",
    name: "Promise Token",
  },
  {
    id: "promodio",
    symbol: "pmd",
    name: "Promodio",
  },
  {
    id: "promo-swipe-coin",
    symbol: "psc",
    name: "Promo Swipe Coin",
  },
  {
    id: "promotionchain",
    symbol: "pc",
    name: "PromotionChain",
  },
  {
    id: "proof-of-liquidity",
    symbol: "pol",
    name: "Proof Of Liquidity",
  },
  {
    id: "propel-token",
    symbol: "pel",
    name: "Propel Token",
  },
  {
    id: "propersix",
    symbol: "psix",
    name: "ProperSix",
  },
  {
    id: "prophecy",
    symbol: "pry",
    name: "Prophecy",
  },
  {
    id: "prophet",
    symbol: "prophet",
    name: "Prophet",
  },
  {
    id: "props",
    symbol: "props",
    name: "Props Token",
  },
  {
    id: "propy",
    symbol: "pro",
    name: "Propy",
  },
  {
    id: "proshares-bitcoin-strategy-etf",
    symbol: "bito",
    name: "ProShares Bitcoin Strategy ETF",
  },
  {
    id: "prosper",
    symbol: "pros",
    name: "Prosper",
  },
  {
    id: "prostarter-token",
    symbol: "prot",
    name: "ProStarter",
  },
  {
    id: "proswap",
    symbol: "pros",
    name: "ProSwap",
  },
  {
    id: "protector-roge",
    symbol: "proge",
    name: "Protector Roge",
  },
  {
    id: "protocol-finance",
    symbol: "pfi",
    name: "Protocol Finance",
  },
  {
    id: "protofi",
    symbol: "proto",
    name: "Protofi",
  },
  {
    id: "proton",
    symbol: "xpr",
    name: "Proton",
  },
  {
    id: "proton-loan",
    symbol: "loan",
    name: "Proton Loan",
  },
  {
    id: "proton-project",
    symbol: "prtn",
    name: "Proton Project",
  },
  {
    id: "proton-token",
    symbol: "ptt",
    name: "Proton Token",
  },
  {
    id: "proud-money",
    symbol: "proud",
    name: "Proud Money",
  },
  {
    id: "proverty-eradication-coin",
    symbol: "pec",
    name: "Poverty Eradication Coin",
  },
  {
    id: "provoco",
    symbol: "voco",
    name: "Provoco",
  },
  {
    id: "proxeus",
    symbol: "xes",
    name: "Proxeus",
  },
  {
    id: "proximax",
    symbol: "xpx",
    name: "ProximaX",
  },
  {
    id: "proxy",
    symbol: "prxy",
    name: "Proxy",
  },
  {
    id: "proxynode",
    symbol: "prx",
    name: "ProxyNode",
  },
  {
    id: "pryz",
    symbol: "pryz",
    name: "Pryz",
  },
  {
    id: "pspace",
    symbol: "pspace",
    name: "pSPACE",
  },
  {
    id: "psrs",
    symbol: "psrs",
    name: "PSRS",
  },
  {
    id: "pstake-staked-atom",
    symbol: "stkatom",
    name: "pSTAKE Staked ATOM",
  },
  {
    id: "pswampy",
    symbol: "pswamp",
    name: "pSwampy",
  },
  {
    id: "psyche",
    symbol: "usd1",
    name: "Psyche",
  },
  {
    id: "psychic",
    symbol: "psy",
    name: "Psychic",
  },
  {
    id: "psycho-doge",
    symbol: "psychodoge",
    name: "Psycho Doge",
  },
  {
    id: "psy-coin",
    symbol: "psy",
    name: "PSY Coin",
  },
  {
    id: "psyoptions",
    symbol: "psy",
    name: "PsyOptions",
  },
  {
    id: "pteria",
    symbol: "pteria",
    name: "Pteria",
  },
  {
    id: "ptokens-btc",
    symbol: "pbtc",
    name: "pTokens BTC",
  },
  {
    id: "ptokens-ltc",
    symbol: "pltc",
    name: "pTokens LTC",
  },
  {
    id: "ptokens-ore",
    symbol: "ore",
    name: "pTokens ORE",
  },
  {
    id: "pube-finance",
    symbol: "pube",
    name: "Pube Finance",
  },
  {
    id: "pub-finance",
    symbol: "pint",
    name: "Pub Finance",
  },
  {
    id: "public-index-network",
    symbol: "pin",
    name: "Public Index Network",
  },
  {
    id: "public-mint",
    symbol: "mint",
    name: "Public Mint",
  },
  {
    id: "publish",
    symbol: "news",
    name: "PUBLISH",
  },
  {
    id: "pudgy-vault-nftx",
    symbol: "pudgy",
    name: "PUDGY Vault (NFTX)",
  },
  {
    id: "puff",
    symbol: "puff",
    name: "PUFF",
  },
  {
    id: "puff-santa",
    symbol: "puffsanta",
    name: "Puff Santa",
  },
  {
    id: "puglife",
    symbol: "pugl",
    name: "PugLife",
  },
  {
    id: "puli-inu",
    symbol: "puli",
    name: "Puli Inu",
  },
  {
    id: "pulsar-token",
    symbol: "$pulsar",
    name: "Pulsar Token",
  },
  {
    id: "pulsedoge",
    symbol: "pulsedoge",
    name: "PulseDoge",
  },
  {
    id: "pulsemoon",
    symbol: "pulsemoon",
    name: "PulseMoon",
  },
  {
    id: "pulsepad",
    symbol: "plspad",
    name: "PulsePad",
  },
  {
    id: "pulse-token",
    symbol: "pulse",
    name: "Pulse Token",
  },
  {
    id: "pumapay",
    symbol: "pma",
    name: "PumaPay",
  },
  {
    id: "puml-better-health",
    symbol: "puml",
    name: "PUML Better Health",
  },
  {
    id: "pump-coin",
    symbol: "pump",
    name: "Pump Coin",
  },
  {
    id: "pumpeth",
    symbol: "PETH",
    name: "PumpETH",
  },
  {
    id: "pumpkin-inu",
    symbol: "pumpkin",
    name: "Pumpkin Inu",
  },
  {
    id: "pumpkin-punks",
    symbol: "ppunks",
    name: "Pumpkin Punks",
  },
  {
    id: "pumpshibax",
    symbol: "pshibax",
    name: "PumpShibaX",
  },
  {
    id: "pumpy-farm",
    symbol: "pmp",
    name: "Pumpy Farm",
  },
  {
    id: "punch",
    symbol: "punch",
    name: "Punch",
  },
  {
    id: "pundi-x",
    symbol: "npxs",
    name: "Pundi X [OLD]",
  },
  {
    id: "pundi-x-2",
    symbol: "pundix",
    name: "Pundi X",
  },
  {
    id: "pundi-x-nem",
    symbol: "npxsxem",
    name: "Pundi X NEM",
  },
  {
    id: "pundi-x-purse",
    symbol: "purse",
    name: "Pundi X PURSE",
  },
  {
    id: "punk-floor",
    symbol: "floor",
    name: "PUNK Floor",
  },
  {
    id: "punks-comic",
    symbol: "punks",
    name: "PUNKS Comic",
  },
  {
    id: "punks-comic-pow",
    symbol: "pow",
    name: "Metahero Universe",
  },
  {
    id: "punk-shiba",
    symbol: "PUNKS",
    name: "Punk Shiba",
  },
  {
    id: "punk-vault-nftx",
    symbol: "punk",
    name: "Punk Vault (NFTX)",
  },
  {
    id: "pup-doge",
    symbol: "pupdoge",
    name: "Pup Doge",
  },
  {
    id: "pupper",
    symbol: "pup",
    name: "Pupper",
  },
  {
    id: "puppies-network",
    symbol: "ppn",
    name: "Puppies Network",
  },
  {
    id: "puppy-doge",
    symbol: "puppy",
    name: "Puppy Doge",
  },
  {
    id: "puppy-token",
    symbol: "puppy",
    name: "Puppy Token",
  },
  {
    id: "purefi",
    symbol: "ufi",
    name: "PureFi",
  },
  {
    id: "puregold-token",
    symbol: "pgpay",
    name: "PGPay",
  },
  {
    id: "purge",
    symbol: "purge",
    name: "Purge",
  },
  {
    id: "puriever",
    symbol: "pure",
    name: "Puriever",
  },
  {
    id: "purple-butterfly-trading",
    symbol: "pbtt",
    name: "Purple Butterfly Trading",
  },
  {
    id: "purple-floki-inu",
    symbol: "purplefloki",
    name: "Purple Floki Inu",
  },
  {
    id: "purr-vault-nftx",
    symbol: "purr",
    name: "PURR Vault (NFTX)",
  },
  {
    id: "pusd",
    symbol: "pusd",
    name: "PUSD",
  },
  {
    id: "pussy-financial",
    symbol: "pussy",
    name: "Pussy Financial",
  },
  {
    id: "putincoin",
    symbol: "put",
    name: "PutinCoin",
  },
  {
    id: "pw-gold",
    symbol: "pwg",
    name: "PW-GOLD",
  },
  {
    id: "pwrd-stablecoin",
    symbol: "pwrd",
    name: "PWRD Stablecoin",
  },
  {
    id: "pye",
    symbol: "pye",
    name: "PYE",
  },
  {
    id: "pylon-eco-token",
    symbol: "petn",
    name: "Pylon Eco Token",
  },
  {
    id: "pylon-finance",
    symbol: "pylon",
    name: "Pylon Finance",
  },
  {
    id: "pylon-network",
    symbol: "pylnt",
    name: "Pylon Network",
  },
  {
    id: "pylon-protocol",
    symbol: "mine",
    name: "Pylon Protocol",
  },
  {
    id: "pynths-pusd",
    symbol: "pusd",
    name: "Pynths pUSD",
  },
  {
    id: "pyram-token",
    symbol: "pyram",
    name: "Pyram Token",
  },
  {
    id: "pyrexcoin",
    symbol: "gpyx",
    name: "GoldenPyrex",
  },
  {
    id: "pyrk",
    symbol: "pyrk",
    name: "Pyrk",
  },
  {
    id: "pyromaniac",
    symbol: "pyro",
    name: "Pyroworld",
  },
  {
    id: "pyro-network",
    symbol: "pyro",
    name: "PYRO Network",
  },
  {
    id: "pyrrho-defi",
    symbol: "PYO",
    name: "Pyrrho DeFi",
  },
  {
    id: "q8e20-token",
    symbol: "q8e20",
    name: "Q8E20 Token",
  },
  {
    id: "qanplatform",
    symbol: "qanx",
    name: "QANplatform",
  },
  {
    id: "qao",
    symbol: "&#127760;",
    name: "QAO",
  },
  {
    id: "qash",
    symbol: "qash",
    name: "QASH",
  },
  {
    id: "qawalla-token",
    symbol: "qwla",
    name: "Qawalla Token",
  },
  {
    id: "qbao",
    symbol: "qbt",
    name: "Qbao",
  },
  {
    id: "qcash",
    symbol: "qc",
    name: "Qcash",
  },
  {
    id: "qchi",
    symbol: "qch",
    name: "QChi",
  },
  {
    id: "qchi-chain",
    symbol: "qhc",
    name: "QChi Chain",
  },
  {
    id: "q-dao-governance-token-v1-0",
    symbol: "qdao",
    name: "Q DAO Governance token v1.0",
  },
  {
    id: "qfinance",
    symbol: "qfi",
    name: "QFinance",
  },
  {
    id: "qian-second-generation-dollar",
    symbol: "qsd",
    name: "QIAN Second Generation Dollar",
  },
  {
    id: "qi-dao",
    symbol: "qi",
    name: "Qi Dao",
  },
  {
    id: "qiibee",
    symbol: "qbx",
    name: "qiibee",
  },
  {
    id: "qlink",
    symbol: "qlc",
    name: "QLC Chain",
  },
  {
    id: "qmcoin",
    symbol: "qmc",
    name: "QMCoin",
  },
  {
    id: "qobit",
    symbol: "qob",
    name: "Qobit",
  },
  {
    id: "qoiniq",
    symbol: "qiq",
    name: "QoinIQ",
  },
  {
    id: "qqq-token",
    symbol: "qqq",
    name: "Poseidon Network",
  },
  {
    id: "qredit",
    symbol: "xqr",
    name: "Qredit",
  },
  {
    id: "qredo",
    symbol: "qrdo",
    name: "Qredo",
  },
  {
    id: "qrkita-token",
    symbol: "qrt",
    name: "Qrkita Token",
  },
  {
    id: "qtum",
    symbol: "qtum",
    name: "Qtum",
  },
  {
    id: "quadency",
    symbol: "quad",
    name: "Quadency",
  },
  {
    id: "quadrant-protocol",
    symbol: "equad",
    name: "Quadrant Protocol",
  },
  {
    id: "quai-dao",
    symbol: "quai",
    name: "Quai Dao",
  },
  {
    id: "quam-network",
    symbol: "quam",
    name: "Quam Network",
  },
  {
    id: "quannabu",
    symbol: "qbu",
    name: "Quannabu",
  },
  {
    id: "quantfury",
    symbol: "qtf",
    name: "Quantfury",
  },
  {
    id: "quantis",
    symbol: "quan",
    name: "Quantis",
  },
  {
    id: "quant-network",
    symbol: "qnt",
    name: "Quant",
  },
  {
    id: "quantstamp",
    symbol: "qsp",
    name: "Quantstamp",
  },
  {
    id: "quantum-assets",
    symbol: "qa",
    name: "Quantum Assets",
  },
  {
    id: "quantum-resistant-ledger",
    symbol: "qrl",
    name: "Quantum Resistant Ledger",
  },
  {
    id: "quantum-tech",
    symbol: "qua",
    name: "Quantum Tech",
  },
  {
    id: "quark",
    symbol: "qrk",
    name: "Quark",
  },
  {
    id: "quark-chain",
    symbol: "qkc",
    name: "QuarkChain",
  },
  {
    id: "quasacoin",
    symbol: "qua",
    name: "Quasacoin",
  },
  {
    id: "quasarcoin",
    symbol: "qac",
    name: "Quasarcoin",
  },
  {
    id: "quattro-tech",
    symbol: "qtech",
    name: "Quattro Tech",
  },
  {
    id: "qube-2",
    symbol: "qube",
    name: "Qube",
  },
  {
    id: "qubism",
    symbol: "qub",
    name: "Qubism",
  },
  {
    id: "qubit",
    symbol: "qbt",
    name: "Qubit",
  },
  {
    id: "quebecoin",
    symbol: "qbc",
    name: "Quebecoin",
  },
  {
    id: "queenbee",
    symbol: "qbz",
    name: "QUEENBEE",
  },
  {
    id: "quick",
    symbol: "quick",
    name: "Quickswap",
  },
  {
    id: "quick-bounty",
    symbol: "qb",
    name: "Quick Bounty",
  },
  {
    id: "quickchart",
    symbol: "quickchart",
    name: "QuickChart",
  },
  {
    id: "quick-mining",
    symbol: "qm",
    name: "Quick Mining",
  },
  {
    id: "quickswap-wormhole",
    symbol: "quick",
    name: "Quickswap (Wormhole)",
  },
  {
    id: "quickx-protocol",
    symbol: "qcx",
    name: "QuickX Protocol",
  },
  {
    id: "quidax",
    symbol: "qdx",
    name: "Quidax",
  },
  {
    id: "quidd",
    symbol: "quidd",
    name: "Quidd",
  },
  {
    id: "quid-ika",
    symbol: "QUID",
    name: "Quid Ika",
  },
  {
    id: "quid-token",
    symbol: "quid",
    name: "Quid Token",
  },
  {
    id: "quik",
    symbol: "quik",
    name: "Quik",
  },
  {
    id: "quinads",
    symbol: "quin",
    name: "QUINADS",
  },
  {
    id: "quipuswap-governance-token",
    symbol: "quipu",
    name: "QuipuSwap Governance Token",
  },
  {
    id: "quiverx",
    symbol: "qrx",
    name: "QuiverX",
  },
  {
    id: "quizdrop",
    symbol: "qdrop",
    name: "QuizDrop",
  },
  {
    id: "quiztok",
    symbol: "qtcon",
    name: "Quiztok",
  },
  {
    id: "quotient",
    symbol: "xqn",
    name: "Quotient",
  },
  {
    id: "quras-token",
    symbol: "xqc",
    name: "Quras Token",
  },
  {
    id: "qwertycoin",
    symbol: "qwc",
    name: "Qwertycoin",
  },
  {
    id: "qzkcoin",
    symbol: "qzk",
    name: "QZKCoin",
  },
  {
    id: "r34p",
    symbol: "r34p",
    name: "R34P",
  },
  {
    id: "rabbit-finance",
    symbol: "rabbit",
    name: "Rabbit Finance",
  },
  {
    id: "rac",
    symbol: "rac",
    name: "RAC",
  },
  {
    id: "racefi",
    symbol: "racefi",
    name: "RaceFi",
  },
  {
    id: "racex",
    symbol: "racex",
    name: "RaceX",
  },
  {
    id: "racing-fan-token",
    symbol: "racing",
    name: "Racing Fan Token",
  },
  {
    id: "rad",
    symbol: "rad",
    name: "RAD",
  },
  {
    id: "radar",
    symbol: "radar",
    name: "Radar",
  },
  {
    id: "radditarium-network",
    symbol: "raddit",
    name: "Radditarium Network",
  },
  {
    id: "radicle",
    symbol: "rad",
    name: "Radicle",
  },
  {
    id: "radio-caca",
    symbol: "raca",
    name: "Radio Caca",
  },
  {
    id: "radio-hero",
    symbol: "RAHO",
    name: "Radio Hero",
  },
  {
    id: "radium",
    symbol: "val",
    name: "Validity",
  },
  {
    id: "radix",
    symbol: "xrd",
    name: "Radix",
  },
  {
    id: "radom",
    symbol: "dom",
    name: "Radom",
  },
  {
    id: "rae-token",
    symbol: "rae",
    name: "Receive Access Ecosystem",
  },
  {
    id: "rafflection",
    symbol: "raff",
    name: "Rafflection",
  },
  {
    id: "rage-fan",
    symbol: "rage",
    name: "Rage.Fan",
  },
  {
    id: "ragnarok",
    symbol: "ragna",
    name: "Ragnarok",
  },
  {
    id: "ragnarokdao",
    symbol: "rgk",
    name: "RagnarokDAO",
  },
  {
    id: "ragnarok-token",
    symbol: "rok",
    name: "Ragnarok Token",
  },
  {
    id: "rai",
    symbol: "rai",
    name: "Rai Reflex Index",
  },
  {
    id: "raicoin",
    symbol: "rai",
    name: "Raicoin",
  },
  {
    id: "raiden-network",
    symbol: "rdn",
    name: "Raiden Network Token",
  },
  {
    id: "raider-aurum",
    symbol: "aurum",
    name: "Raider Aurum",
  },
  {
    id: "raid-token",
    symbol: "raid",
    name: "Raid Token",
  },
  {
    id: "rai-finance",
    symbol: "sofi",
    name: "RAI Finance",
  },
  {
    id: "raijin",
    symbol: "raijin",
    name: "Raijin",
  },
  {
    id: "railgun",
    symbol: "rail",
    name: "Railgun",
  },
  {
    id: "railnode",
    symbol: "TRAIN",
    name: "RailNode",
  },
  {
    id: "rainbowtoken",
    symbol: "rainbowtoken",
    name: "RainbowToken",
  },
  {
    id: "rainbow-token",
    symbol: "rnbw",
    name: "HaloDAO",
  },
  {
    id: "rainicorn",
    symbol: "raini",
    name: "Rainicorn",
  },
  {
    id: "rainmaker-games",
    symbol: "rain",
    name: "Rainmaker Games",
  },
  {
    id: "rain-network",
    symbol: "rain",
    name: "RAIN Network",
  },
  {
    id: "rai-token",
    symbol: "rai",
    name: "Rai Token",
  },
  {
    id: "raja-inu",
    symbol: "rajainu",
    name: "Raja Inu",
  },
  {
    id: "rake-finance",
    symbol: "rak",
    name: "Rake Finance",
  },
  {
    id: "rakon",
    symbol: "rkn",
    name: "RAKON",
  },
  {
    id: "raku-coin",
    symbol: "rakuc",
    name: "Raku Coin",
  },
  {
    id: "rakun",
    symbol: "raku",
    name: "RAKUN",
  },
  {
    id: "rally-2",
    symbol: "rly",
    name: "Rally",
  },
  {
    id: "ramenswap",
    symbol: "ramen",
    name: "RamenSwap",
  },
  {
    id: "ramifi",
    symbol: "ram",
    name: "Ramifi Protocol",
  },
  {
    id: "rammus",
    symbol: "rammus",
    name: "Rammus",
  },
  {
    id: "ramp",
    symbol: "ramp",
    name: "RAMP",
  },
  {
    id: "random",
    symbol: "rndm",
    name: "Random",
  },
  {
    id: "rangers-fan-token",
    symbol: "rft",
    name: "Rangers Fan Token",
  },
  {
    id: "rangers-protocol-gas",
    symbol: "rpg",
    name: "Rangers Protocol",
  },
  {
    id: "rank-token",
    symbol: "rank",
    name: "Rank Token",
  },
  {
    id: "ran-online-crypto-world",
    symbol: "rcw",
    name: "Ran Online Crypto World",
  },
  {
    id: "ran-x-crypto",
    symbol: "rxc",
    name: "Ran x Crypto",
  },
  {
    id: "rapidly-reusable-rocket",
    symbol: "rrr",
    name: "Rapidly Reusable Rocket",
  },
  {
    id: "rapids",
    symbol: "rpd",
    name: "Rapids",
  },
  {
    id: "rapidz",
    symbol: "rpzx",
    name: "Rapidz",
  },
  {
    id: "rap-keo-group",
    symbol: "rkg",
    name: "Rap Keo Group",
  },
  {
    id: "raptoreum",
    symbol: "rtm",
    name: "Raptoreum",
  },
  {
    id: "raptor-finance",
    symbol: "raptr",
    name: "Raptor Finance",
  },
  {
    id: "rare",
    symbol: "rare",
    name: "Rare",
  },
  {
    id: "rare-pepe",
    symbol: "rpepe",
    name: "Rare Pepe",
  },
  {
    id: "rarible",
    symbol: "rari",
    name: "Rarible",
  },
  {
    id: "rari-governance-token",
    symbol: "rgt",
    name: "Rari Governance Token",
  },
  {
    id: "rari-governance-token-wormhole",
    symbol: "rgt",
    name: "Rari Governance Token (Wormhole)",
  },
  {
    id: "rarx",
    symbol: "rarx",
    name: "Rarx",
  },
  {
    id: "rasko",
    symbol: "rasko",
    name: "rASKO",
  },
  {
    id: "rasta-finance",
    symbol: "rasta",
    name: "Rasta Finance",
  },
  {
    id: "rate3",
    symbol: "rte",
    name: "Rate3",
  },
  {
    id: "ratecoin",
    symbol: "xra",
    name: "Ratecoin",
  },
  {
    id: "ratoken",
    symbol: "ratoken",
    name: "Ratoken",
  },
  {
    id: "ratrace",
    symbol: "ratrace",
    name: "RatRace",
  },
  {
    id: "raven",
    symbol: "raven",
    name: "Raven",
  },
  {
    id: "ravencoin",
    symbol: "rvn",
    name: "Ravencoin",
  },
  {
    id: "ravencoin-classic",
    symbol: "rvc",
    name: "Ravencoin Classic",
  },
  {
    id: "raven-dark",
    symbol: "xrd",
    name: "Raven Dark",
  },
  {
    id: "ravendex",
    symbol: "rave",
    name: "Ravendex",
  },
  {
    id: "raven-protocol",
    symbol: "raven",
    name: "Raven Protocol",
  },
  {
    id: "raya-crypto",
    symbol: "raya",
    name: "RAYA Crypto",
  },
  {
    id: "raydium",
    symbol: "ray",
    name: "Raydium",
  },
  {
    id: "raydium-wormhole",
    symbol: "ray",
    name: "Raydium (Wormhole)",
  },
  {
    id: "rayons-energy",
    symbol: "rayons",
    name: "Rayons Energy",
  },
  {
    id: "raze-network",
    symbol: "raze",
    name: "Raze Network",
  },
  {
    id: "razor-network",
    symbol: "razor",
    name: "Razor Network",
  },
  {
    id: "rbxsamurai",
    symbol: "rbxs",
    name: "RBXSamurai",
  },
  {
    id: "rbx-token",
    symbol: "rbx",
    name: "RBX Token",
  },
  {
    id: "rccc",
    symbol: "rccc",
    name: "RCCC",
  },
  {
    id: "rchain",
    symbol: "REV",
    name: "RChain",
  },
  {
    id: "rdctoken",
    symbol: "rdct",
    name: "RDCToken",
  },
  {
    id: "read-this-contract",
    symbol: "rtc",
    name: "Read This Contract",
  },
  {
    id: "realfevr",
    symbol: "fevr",
    name: "RealFevr",
  },
  {
    id: "realfinance-network",
    symbol: "refi",
    name: "Realfinance Network",
  },
  {
    id: "realio-network",
    symbol: "rio",
    name: "Realio Network",
  },
  {
    id: "realital-metaverse",
    symbol: "reta",
    name: "Realital Metaverse",
  },
  {
    id: "real-land",
    symbol: "rld",
    name: "Real Land",
  },
  {
    id: "reallink",
    symbol: "real",
    name: "RealLink",
  },
  {
    id: "realliq",
    symbol: "rlq",
    name: "Realliq",
  },
  {
    id: "realm",
    symbol: "realm",
    name: "Realm",
  },
  {
    id: "real-realm",
    symbol: "real",
    name: "Real Realm",
  },
  {
    id: "realtoken-s-13895-saratoga-st-detroit-mi",
    symbol: "realtoken-s-13895-saratoga-st-detroit-mi",
    name: "RealT Token - 13895 Saratoga St, Detroit, MI 48205",
  },
  {
    id: "realtract",
    symbol: "ret",
    name: "RealTract",
  },
  {
    id: "real-trump-token",
    symbol: "rtt",
    name: "Real Trump Token v2",
  },
  {
    id: "realy-metaverse",
    symbol: "real",
    name: "Realy Metaverse",
  },
  {
    id: "reapchain",
    symbol: "reap",
    name: "ReapChain",
  },
  {
    id: "reaper-token",
    symbol: "reaper",
    name: "Reaper Token",
  },
  {
    id: "reapit",
    symbol: "reap",
    name: "REAPit",
  },
  {
    id: "rebasing-liquidity",
    symbol: "delta rlp",
    name: "Rebasing Liquidity",
  },
  {
    id: "rebellion-protocol",
    symbol: "rebl",
    name: "Rebellion Protocol",
  },
  {
    id: "rebeltradertoken",
    symbol: "rtt",
    name: "RebelTraderToken",
  },
  {
    id: "rebit",
    symbol: "keyt",
    name: "Rebit",
  },
  {
    id: "reborn-dollar",
    symbol: "rebd",
    name: "Reborn Dollar",
  },
  {
    id: "rebound",
    symbol: "rebound",
    name: "Rebound",
  },
  {
    id: "recast1",
    symbol: "R1",
    name: "Recast1",
  },
  {
    id: "recharge",
    symbol: "rcg",
    name: "Recharge",
  },
  {
    id: "recharge-finance",
    symbol: "r3fi",
    name: "Recharge Finance",
  },
  {
    id: "recovery-right-token",
    symbol: "rrt",
    name: "Recovery Right Token",
  },
  {
    id: "rec-token",
    symbol: "rec",
    name: "Rec Token",
  },
  {
    id: "red",
    symbol: "red",
    name: "Red",
  },
  {
    id: "redbuff-token",
    symbol: "redbuff",
    name: "RedBuff Token",
  },
  {
    id: "redbux",
    symbol: "redbux",
    name: "RedBUX",
  },
  {
    id: "redchillies",
    symbol: "redc",
    name: "RedChillies",
  },
  {
    id: "reddcoin",
    symbol: "rdd",
    name: "Reddcoin",
  },
  {
    id: "reddoge",
    symbol: "reddoge",
    name: "RedDoge",
  },
  {
    id: "redfeg",
    symbol: "redfeg",
    name: "RedFeg",
  },
  {
    id: "red-floki",
    symbol: "redfloki",
    name: "Red Floki",
  },
  {
    id: "redfox-labs-2",
    symbol: "rfox",
    name: "RedFOX Labs",
  },
  {
    id: "redi",
    symbol: "redi",
    name: "REDi",
  },
  {
    id: "red-kishu",
    symbol: "redkishu",
    name: "Red Kishu",
  },
  {
    id: "redpanda-earth",
    symbol: "redpanda",
    name: "RedPanda Earth",
  },
  {
    id: "red-pulse",
    symbol: "phb",
    name: "Phoenix Global [OLD]",
  },
  {
    id: "redshiba",
    symbol: "redshiba",
    name: "RedShiba",
  },
  {
    id: "red-shiba-token",
    symbol: "rst",
    name: "Red Shiba Token",
  },
  {
    id: "redzilla",
    symbol: "redzilla",
    name: "RedZilla",
  },
  {
    id: "reecoin",
    symbol: "ree",
    name: "ReeCoin",
  },
  {
    id: "reef-finance",
    symbol: "reef",
    name: "Reef Finance",
  },
  {
    id: "reesykle",
    symbol: "sycle",
    name: "Reesykle",
  },
  {
    id: "reeth",
    symbol: "reeth",
    name: "Reeth",
  },
  {
    id: "refereum",
    symbol: "rfr",
    name: "Refereum",
  },
  {
    id: "ref-finance",
    symbol: "ref",
    name: "Ref Finance",
  },
  {
    id: "refi",
    symbol: "refi",
    name: "Reimagined Finance",
  },
  {
    id: "refinable",
    symbol: "fine",
    name: "Refinable",
  },
  {
    id: "refine-medium",
    symbol: "xrm",
    name: "Refine Medium",
  },
  {
    id: "reflect-finance",
    symbol: "rfi",
    name: "reflect.finance",
  },
  {
    id: "reflecto",
    symbol: "reflecto",
    name: "Reflecto",
  },
  {
    id: "reflector-finance",
    symbol: "rfctr",
    name: "Reflector.Finance",
  },
  {
    id: "reflex",
    symbol: "rfx",
    name: "Reflex",
  },
  {
    id: "reflexer-ungovernance-token",
    symbol: "flx",
    name: "Reflexer Ungovernance Token",
  },
  {
    id: "reforestation-mahogany",
    symbol: "RMOG",
    name: "Reforestation Mahogany",
  },
  {
    id: "refork",
    symbol: "efk",
    name: "ReFork",
  },
  {
    id: "refract",
    symbol: "rfr",
    name: "Refract",
  },
  {
    id: "refugees-token",
    symbol: "$RFG",
    name: "Refugees",
  },
  {
    id: "regen",
    symbol: "regen",
    name: "Regen",
  },
  {
    id: "regiment-finance",
    symbol: "rtf",
    name: "Regiment Finance",
  },
  {
    id: "regularpresale",
    symbol: "REGU",
    name: "RegularPresale",
  },
  {
    id: "rekt-2",
    symbol: "rkt",
    name: "Rekt",
  },
  {
    id: "relay-token",
    symbol: "relay",
    name: "Relay Token",
  },
  {
    id: "relbit",
    symbol: "rlb",
    name: "Relbit",
  },
  {
    id: "release-ico-project",
    symbol: "rel",
    name: "RELEASE",
  },
  {
    id: "relevant",
    symbol: "rel",
    name: "Relevant",
  },
  {
    id: "relex",
    symbol: "rlx",
    name: "Relex",
  },
  {
    id: "relite-finance",
    symbol: "reli",
    name: "Relite Finance",
  },
  {
    id: "rematicegc",
    symbol: "rmtx",
    name: "RematicEGC",
  },
  {
    id: "remex",
    symbol: "rmx",
    name: "RemeX",
  },
  {
    id: "remita-coin",
    symbol: "remit",
    name: "Remita Coin",
  },
  {
    id: "remme",
    symbol: "rem",
    name: "Remme",
  },
  {
    id: "rena-finance",
    symbol: "rena",
    name: "RENA Finance",
  },
  {
    id: "renbch",
    symbol: "renbch",
    name: "renBCH",
  },
  {
    id: "renbtc",
    symbol: "renbtc",
    name: "renBTC",
  },
  {
    id: "render-token",
    symbol: "rndr",
    name: "Render Token",
  },
  {
    id: "rendoge",
    symbol: "rendoge",
    name: "renDOGE",
  },
  {
    id: "renewableelectronicenergycoin",
    symbol: "reec",
    name: "Renewable Electronic Energy Coin",
  },
  {
    id: "renfil",
    symbol: "renfil",
    name: "renFIL",
  },
  {
    id: "renrenbit",
    symbol: "rrb",
    name: "Renrenbit",
  },
  {
    id: "rentberry",
    symbol: "berry",
    name: "Rentberry",
  },
  {
    id: "rentible",
    symbol: "rnb",
    name: "Rentible",
  },
  {
    id: "renzec",
    symbol: "renzec",
    name: "renZEC",
  },
  {
    id: "reosc-ecosystem",
    symbol: "reosc",
    name: "REOSC Ecosystem",
  },
  {
    id: "repo",
    symbol: "repo",
    name: "Repo Coin",
  },
  {
    id: "represent",
    symbol: "rpt",
    name: "Represent",
  },
  {
    id: "reptilian",
    symbol: "rptc",
    name: "Reptilian",
  },
  {
    id: "republic-of-dogs",
    symbol: "rod",
    name: "Republic of Dogs",
  },
  {
    id: "republic-protocol",
    symbol: "ren",
    name: "REN",
  },
  {
    id: "request-network",
    symbol: "req",
    name: "Request",
  },
  {
    id: "reserve",
    symbol: "rsv",
    name: "Reserve",
  },
  {
    id: "reserve-rights-token",
    symbol: "rsr",
    name: "Reserve Rights Token",
  },
  {
    id: "reserve-rights-wormhole",
    symbol: "rsr",
    name: "Reserve Rights (Wormhole)",
  },
  {
    id: "resfinex-token",
    symbol: "res",
    name: "Resfinex Token",
  },
  {
    id: "resource-protocol",
    symbol: "source",
    name: "ReSource Protocol",
  },
  {
    id: "restart-energy",
    symbol: "mwat",
    name: "Restart Energy",
  },
  {
    id: "reth",
    symbol: "reth",
    name: "rETH",
  },
  {
    id: "retire-token",
    symbol: "retire",
    name: "Retire Token",
  },
  {
    id: "retrocade",
    symbol: "rc",
    name: "RetroCade",
  },
  {
    id: "retro-defi",
    symbol: "rcube",
    name: "Retro DEFI",
  },
  {
    id: "retromoon",
    symbol: "retro",
    name: "Retromoon",
  },
  {
    id: "return-of-the-king",
    symbol: "rok",
    name: "Return of The King",
  },
  {
    id: "reucoin",
    symbol: "reu",
    name: "REUCOIN",
  },
  {
    id: "revain",
    symbol: "rev",
    name: "Revain",
  },
  {
    id: "revamped-music",
    symbol: "mp3",
    name: "Revamped Music",
  },
  {
    id: "revault-network",
    symbol: "reva",
    name: "Revault Network",
  },
  {
    id: "revelation-coin",
    symbol: "rev",
    name: "Revelation coin",
  },
  {
    id: "revenue-coin",
    symbol: "rvc",
    name: "Revenue Coin",
  },
  {
    id: "reverse",
    symbol: "rvrs",
    name: "Reverse",
  },
  {
    id: "reverse-protocol",
    symbol: "rvrs",
    name: "Reverse Protocol",
  },
  {
    id: "revest-finance",
    symbol: "rvst",
    name: "Revest Finance",
  },
  {
    id: "review-capital",
    symbol: "recap",
    name: "Review Capital",
  },
  {
    id: "revival",
    symbol: "RVL",
    name: "REVIVAL",
  },
  {
    id: "revolotto",
    symbol: "rvl",
    name: "Revolotto",
  },
  {
    id: "revolt",
    symbol: "revt",
    name: "Revolt",
  },
  {
    id: "revolution",
    symbol: "rev",
    name: "Revolution",
  },
  {
    id: "revolution-populi",
    symbol: "rvp",
    name: "Revolution Populi",
  },
  {
    id: "revoluzion",
    symbol: "rvz",
    name: "Revoluzion",
  },
  {
    id: "revolve-games",
    symbol: "rpg",
    name: "Revolve Games",
  },
  {
    id: "revolver-token",
    symbol: "$rvlvr",
    name: "Revolver Token",
  },
  {
    id: "revomon",
    symbol: "revo",
    name: "Revomon",
  },
  {
    id: "revonetwork",
    symbol: "revo",
    name: "RevoNetwork",
  },
  {
    id: "revuto",
    symbol: "revu",
    name: "Revuto",
  },
  {
    id: "revv",
    symbol: "revv",
    name: "REVV",
  },
  {
    id: "reward-cycle",
    symbol: "rc",
    name: "Reward Cycle",
  },
  {
    id: "reward-cycle-2",
    symbol: "RC2",
    name: "Reward Cycle 2",
  },
  {
    id: "rewardeum",
    symbol: "reum",
    name: "Rewardeum",
  },
  {
    id: "reward-hunters-token",
    symbol: "rht",
    name: "Reward Hunters Token",
  },
  {
    id: "rewardiqa",
    symbol: "rew",
    name: "Rewardiqa",
  },
  {
    id: "rewards",
    symbol: "rwd",
    name: "Rewards",
  },
  {
    id: "rewards-bunny",
    symbol: "rbunny",
    name: "Rewards Bunny",
  },
  {
    id: "rewardscoin",
    symbol: "rwsc",
    name: "RewardsCoin",
  },
  {
    id: "rewards-token",
    symbol: "rewards",
    name: "Rewards Token",
  },
  {
    id: "rewardsx",
    symbol: "rex",
    name: "RewardsX",
  },
  {
    id: "rex",
    symbol: "rex",
    name: "Imbrex",
  },
  {
    id: "rezerve",
    symbol: "rzrv",
    name: "Rezerve",
  },
  {
    id: "rfis",
    symbol: "rfis",
    name: "rFIS",
  },
  {
    id: "rfust",
    symbol: "rfust",
    name: "rfUST",
  },
  {
    id: "rheaprotocol",
    symbol: "rhea",
    name: "Rhea Protocol",
  },
  {
    id: "rhegic2",
    symbol: "rhegic2",
    name: "rHEGIC2",
  },
  {
    id: "rhinos-finance",
    symbol: "rho",
    name: "Rhinos Finance",
  },
  {
    id: "rhinos-game",
    symbol: "rhinos",
    name: "rhinos.game",
  },
  {
    id: "rhobusd",
    symbol: "rhobusd",
    name: "rhoBUSD",
  },
  {
    id: "rhousdc",
    symbol: "rhousdc",
    name: "rhoUSDC",
  },
  {
    id: "rhousdt",
    symbol: "rhousdt",
    name: "rhoUSDT",
  },
  {
    id: "rhythm",
    symbol: "rhythm",
    name: "Rhythm",
  },
  {
    id: "ribbon-finance",
    symbol: "rbn",
    name: "Ribbon Finance",
  },
  {
    id: "ricefarm",
    symbol: "rice",
    name: "RiceFarm",
  },
  {
    id: "riceswap",
    symbol: "rice",
    name: "RiceSwap",
  },
  {
    id: "rice-wallet",
    symbol: "rice",
    name: "Rice Wallet",
  },
  {
    id: "rich",
    symbol: "rch",
    name: "Rich",
  },
  {
    id: "richcity",
    symbol: "rich",
    name: "RichCity",
  },
  {
    id: "rich-doge-coin",
    symbol: "richdoge 💲",
    name: "Rich Doge Coin",
  },
  {
    id: "richduck",
    symbol: "RICHDUCK",
    name: "RICHDUCK",
  },
  {
    id: "richie",
    symbol: "rich",
    name: "Richie",
  },
  {
    id: "richierich-coin",
    symbol: "rich",
    name: "RichieRich Coin",
  },
  {
    id: "rich-maker",
    symbol: "rich",
    name: "Rich Maker",
  },
  {
    id: "richochet",
    symbol: "ric",
    name: "Ricochet",
  },
  {
    id: "richquack",
    symbol: "quack",
    name: "Rich Quack",
  },
  {
    id: "richway-finance",
    symbol: "rich",
    name: "Richway.Finance",
  },
  {
    id: "rick-and-morty",
    symbol: "RICKMORTY",
    name: "Rick And Morty",
  },
  {
    id: "rickmortydoxx",
    symbol: "rickmortydoxx",
    name: "RickMortyDoxx",
  },
  {
    id: "ride-my-car",
    symbol: "ride",
    name: "Ride My Car",
  },
  {
    id: "ridge",
    symbol: "ridge",
    name: "Ridge",
  },
  {
    id: "ridotto",
    symbol: "rdt",
    name: "Ridotto",
  },
  {
    id: "riecoin",
    symbol: "ric",
    name: "Riecoin",
  },
  {
    id: "rifi-united",
    symbol: "ru",
    name: "RIFI United",
  },
  {
    id: "rif-token",
    symbol: "rif",
    name: "RSK Infrastructure Framework",
  },
  {
    id: "rigel-finance",
    symbol: "rigel",
    name: "Rigel Finance",
  },
  {
    id: "rigel-protocol",
    symbol: "rgp",
    name: "Rigel Protocol",
  },
  {
    id: "rigoblock",
    symbol: "grg",
    name: "RigoBlock",
  },
  {
    id: "rijent-coin",
    symbol: "rtc",
    name: "Rijent Coin",
  },
  {
    id: "rikkei-finance",
    symbol: "rifi",
    name: "Rikkei Finance",
  },
  {
    id: "rilcoin",
    symbol: "ril",
    name: "Rilcoin",
  },
  {
    id: "ringer-vault-nftx",
    symbol: "ringer",
    name: "RINGER Vault (NFTX)",
  },
  {
    id: "ring-financial",
    symbol: "ring",
    name: "RING Financial",
  },
  {
    id: "ring-x-platform",
    symbol: "ringx",
    name: "RING X PLATFORM",
  },
  {
    id: "rinnegan",
    symbol: "ren",
    name: "Rinnegan",
  },
  {
    id: "rio-defi",
    symbol: "rfuel",
    name: "RioDeFi",
  },
  {
    id: "riot-racers",
    symbol: "riot",
    name: "Riot Racers",
  },
  {
    id: "ripio-credit-network",
    symbol: "rcn",
    name: "Ripio Credit Network",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
  },
  {
    id: "ripple-alpha",
    symbol: "xla",
    name: "Ripple Alpha",
  },
  {
    id: "rise",
    symbol: "rise",
    name: "Rise",
  },
  {
    id: "rise2protocol",
    symbol: "ripr",
    name: "RISE2PROTOCOL",
  },
  {
    id: "risecity",
    symbol: "rsc",
    name: "RiseCity",
  },
  {
    id: "risecointoken",
    symbol: "rsct",
    name: "RiseCoin Token",
  },
  {
    id: "risehero",
    symbol: "rise",
    name: "RiseHero",
  },
  {
    id: "rise-of-defenders",
    symbol: "rdr",
    name: "Rise of Defenders",
  },
  {
    id: "rise-of-nebula",
    symbol: "ron",
    name: "Rise Of Nebula",
  },
  {
    id: "rise-protocol",
    symbol: "rise",
    name: "Rise Protocol",
  },
  {
    id: "riseupv2",
    symbol: "riv2",
    name: "RiseUpV2",
  },
  {
    id: "risingsun",
    symbol: "rsun",
    name: "RisingSun",
  },
  {
    id: "riskmoon",
    symbol: "riskmoon",
    name: "Riskmoon",
  },
  {
    id: "risq-protocol",
    symbol: "risq",
    name: "Risq Protocol",
  },
  {
    id: "rito",
    symbol: "rito",
    name: "Rito",
  },
  {
    id: "ri-token",
    symbol: "ri",
    name: "RI Token",
  },
  {
    id: "riverboat",
    symbol: "rib",
    name: "RiverBoat",
  },
  {
    id: "rivetz",
    symbol: "rvt",
    name: "Rivetz",
  },
  {
    id: "rivex-erc20",
    symbol: "rvx",
    name: "Rivex",
  },
  {
    id: "rivrdoge",
    symbol: "rivrdoge",
    name: "RivrDoge",
  },
  {
    id: "rivrfloki",
    symbol: "rivrfloki",
    name: "RivrFloki",
  },
  {
    id: "rivrkitty",
    symbol: "rkitty",
    name: "RivrKitty",
  },
  {
    id: "rivrshiba",
    symbol: "rivrshib",
    name: "RivrShiba",
  },
  {
    id: "rizen-coin",
    symbol: "rzn",
    name: "Rizen Coin (Old)",
  },
  {
    id: "rizen-coin-2",
    symbol: "rzn",
    name: "Rizen Coin",
  },
  {
    id: "rizon",
    symbol: "atolo",
    name: "RIZON",
  },
  {
    id: "rmrk",
    symbol: "rmrk",
    name: "RMRK",
  },
  {
    id: "road",
    symbol: "road",
    name: "ROAD",
  },
  {
    id: "roaring-twenties",
    symbol: "roar",
    name: "Roaring Twenties",
  },
  {
    id: "roar-token",
    symbol: "roar",
    name: "Roar Token",
  },
  {
    id: "roarts",
    symbol: "roar",
    name: "RoArts",
  },
  {
    id: "robbocoach",
    symbol: "rbc",
    name: "RobboCoach",
  },
  {
    id: "robet-coin",
    symbol: "robet",
    name: "RoBet Coin",
  },
  {
    id: "robin-doge",
    symbol: "rdoge",
    name: "Robin Doge",
  },
  {
    id: "robinhoodprotocol",
    symbol: "xrhp",
    name: "RobinHoodProtocol",
  },
  {
    id: "robinhoodswap",
    symbol: "rbh",
    name: "RobinHoodSwap",
  },
  {
    id: "robiniaswap-token",
    symbol: "rbs",
    name: "RobiniaSwap Token",
  },
  {
    id: "robin-inu",
    symbol: "robin",
    name: "Robin Inu",
  },
  {
    id: "robinos",
    symbol: "rbn",
    name: "Robinos",
  },
  {
    id: "robocalls",
    symbol: "rc20",
    name: "RoboCalls",
  },
  {
    id: "robodoge-coin",
    symbol: "robodoge",
    name: "RoboDoge Coin",
  },
  {
    id: "robofi-token",
    symbol: "vics",
    name: "RoboFi Token",
  },
  {
    id: "robo-inu-finance",
    symbol: "rbif",
    name: "Robo Inu Finance",
  },
  {
    id: "robonomics-network",
    symbol: "xrt",
    name: "Robonomics Network",
  },
  {
    id: "robonomics-web-services",
    symbol: "rws",
    name: "Robonomics Web Services",
  },
  {
    id: "roboots",
    symbol: "rbo",
    name: "Roboots",
  },
  {
    id: "roboshib",
    symbol: "roboshib",
    name: "RoboShib",
  },
  {
    id: "robot",
    symbol: "robot",
    name: "Robot",
  },
  {
    id: "robotina",
    symbol: "rox",
    name: "Robotina",
  },
  {
    id: "robo-token",
    symbol: "robo",
    name: "Robo Token",
  },
  {
    id: "robot-shib",
    symbol: "RSHIB",
    name: "ROBOT SHIB",
  },
  {
    id: "robot-wars",
    symbol: "war",
    name: "Robot Wars",
  },
  {
    id: "robust-token",
    symbol: "rbt",
    name: "Robust Token",
  },
  {
    id: "rock3t",
    symbol: "r3t",
    name: "ROCK3T",
  },
  {
    id: "rocket",
    symbol: "rokt",
    name: "Rocket",
  },
  {
    id: "rocket-boys",
    symbol: "rboys",
    name: "Rocket Boys",
  },
  {
    id: "rocket-bunny",
    symbol: "bunny",
    name: "Rocket Bunny",
  },
  {
    id: "rocketbusd",
    symbol: "rocketbusd",
    name: "RocketBUSD",
  },
  {
    id: "rocketcoin-2",
    symbol: "rocket",
    name: "RocketCoin",
  },
  {
    id: "rocketdoge",
    symbol: "rd",
    name: "RocketDoge",
  },
  {
    id: "rocket-finance",
    symbol: "rocket",
    name: "Rocket Finance",
  },
  {
    id: "rocket-fund",
    symbol: "rkt",
    name: "Rocket Fund",
  },
  {
    id: "rocket-launchpad",
    symbol: "rckt",
    name: "Rocket Launchpad",
  },
  {
    id: "rocket-pool",
    symbol: "rpl",
    name: "Rocket Pool",
  },
  {
    id: "rocket-pool-eth",
    symbol: "rETH",
    name: "Rocket Pool ETH",
  },
  {
    id: "rocket-pool-wormhole",
    symbol: "rpl",
    name: "Rocket Pool (Wormhole)",
  },
  {
    id: "rocket-raccoon",
    symbol: "roc",
    name: "Rocket Raccoon",
  },
  {
    id: "rocket-share",
    symbol: "srocket",
    name: "Rocket Share",
  },
  {
    id: "rocket-shib",
    symbol: "rocketshib",
    name: "Rocket Shib",
  },
  {
    id: "rocket-vault-rocketx",
    symbol: "rvf",
    name: "RocketX",
  },
  {
    id: "rocket-venture",
    symbol: "RKTV",
    name: "Rocket Venture",
  },
  {
    id: "rocket-zilla",
    symbol: "ROZ",
    name: "Rocket Zilla",
  },
  {
    id: "rocki",
    symbol: "rocki",
    name: "Rocki",
  },
  {
    id: "rock-n-rain-coin",
    symbol: "rnrc",
    name: "Rock N Rain Coin",
  },
  {
    id: "rock-paper-scissors-token",
    symbol: "rpst",
    name: "Rock Paper Scissors Token",
  },
  {
    id: "rocks-idle-game",
    symbol: "rocks",
    name: "Rocks Idle Game",
  },
  {
    id: "rockstar-doge",
    symbol: "rockstar",
    name: "Rockstar Doge",
  },
  {
    id: "rocky-inu",
    symbol: "rocky",
    name: "Rocky Inu",
  },
  {
    id: "roco-finance",
    symbol: "roco",
    name: "Roco Finance",
  },
  {
    id: "roge",
    symbol: "roge",
    name: "Rogue Doge",
  },
  {
    id: "rogue-west",
    symbol: "rogue",
    name: "Rogue West",
  },
  {
    id: "roiyal-coin",
    symbol: "roco",
    name: "ROIyal Coin",
  },
  {
    id: "rokkit-fuel",
    symbol: "$rokk",
    name: "Rokkit Fuel",
  },
  {
    id: "rome",
    symbol: "rome",
    name: "Rome",
  },
  {
    id: "romeo-doge",
    symbol: "romeodoge",
    name: "Romeo Doge",
  },
  {
    id: "ronin",
    symbol: "ron",
    name: "Ronin",
  },
  {
    id: "ronin-gamez",
    symbol: "roningmz",
    name: "Ronin Gamez",
  },
  {
    id: "ronpaulcoin",
    symbol: "rpc",
    name: "RonPaulCoin",
  },
  {
    id: "roobee",
    symbol: "roobee",
    name: "Roobee",
  },
  {
    id: "roocoin",
    symbol: "roo",
    name: "RooCoin",
  },
  {
    id: "rook",
    symbol: "rook",
    name: "KeeperDAO",
  },
  {
    id: "rook-token",
    symbol: "r0ok",
    name: "r0ok Token",
  },
  {
    id: "roonex",
    symbol: "rnx",
    name: "ROONEX",
  },
  {
    id: "rooster-battle",
    symbol: "rice",
    name: "Rooster Battle",
  },
  {
    id: "rootkit",
    symbol: "root",
    name: "Rootkit",
  },
  {
    id: "rootstock",
    symbol: "rbtc",
    name: "Rootstock RSK",
  },
  {
    id: "rope",
    symbol: "$rope",
    name: "Rope",
  },
  {
    id: "rope-token",
    symbol: "rope",
    name: "Rope Token",
  },
  {
    id: "ror-universe",
    symbol: "ror",
    name: "ROR Universe",
  },
  {
    id: "rose",
    symbol: "rose",
    name: "Rose",
  },
  {
    id: "roseon-finance",
    symbol: "rosn",
    name: "Roseon Finance",
  },
  {
    id: "rose-wormhole",
    symbol: "rose",
    name: "ROSE (Wormhole)",
  },
  {
    id: "ro-slayers",
    symbol: "slyr",
    name: "RO Slayers",
  },
  {
    id: "rotharium",
    symbol: "rth",
    name: "Rotharium",
  },
  {
    id: "rotten",
    symbol: "rot",
    name: "Rotten",
  },
  {
    id: "rotten-floki",
    symbol: "rotten",
    name: "Rotten Floki",
  },
  {
    id: "rougecoin",
    symbol: "xrge",
    name: "RougeCoin",
  },
  {
    id: "round-dollar",
    symbol: "rd",
    name: "Round Dollar",
  },
  {
    id: "roundrobin-protocol-token",
    symbol: "rrt",
    name: "RoundRobin Protocol Token",
  },
  {
    id: "roush-fenway-racing-fan-token",
    symbol: "roush",
    name: "Roush Fenway Racing Fan Token",
  },
  {
    id: "route",
    symbol: "route",
    name: "Router Protocol",
  },
  {
    id: "rover-coin",
    symbol: "roe",
    name: "Rover Coin",
  },
  {
    id: "rover-inu",
    symbol: "rover",
    name: "Rover Inu",
  },
  {
    id: "rowan-coin",
    symbol: "rwn",
    name: "Rowan Coin",
  },
  {
    id: "roxe",
    symbol: "roc",
    name: "Roxe",
  },
  {
    id: "royalada",
    symbol: "royalada",
    name: "RoyalADA",
  },
  {
    id: "royal-bet",
    symbol: "rbet",
    name: "Royal BET",
  },
  {
    id: "royal-bnb",
    symbol: "rb",
    name: "Royal BNB",
  },
  {
    id: "royal-doge",
    symbol: "rdoge",
    name: "Royal Doge",
  },
  {
    id: "royale",
    symbol: "roya",
    name: "Royale",
  },
  {
    id: "royal-flush-coin",
    symbol: "rfc",
    name: "Royal Flush Coin",
  },
  {
    id: "royal-gold",
    symbol: "RGOLD",
    name: "Royal Gold",
  },
  {
    id: "royal-protocol",
    symbol: "roy",
    name: "Royal Protocol",
  },
  {
    id: "rps-league",
    symbol: "rps",
    name: "Rps League",
  },
  {
    id: "rubic",
    symbol: "rbc",
    name: "Rubic",
  },
  {
    id: "rublix",
    symbol: "rblx",
    name: "Rublix",
  },
  {
    id: "ruby-currency",
    symbol: "rbc",
    name: "Ruby Currency",
  },
  {
    id: "rudolph-coin",
    symbol: "RUDOLPH",
    name: "Rudolph Coin",
  },
  {
    id: "ruff",
    symbol: "ruff",
    name: "Ruff",
  },
  {
    id: "rug-busters",
    symbol: "rugbust",
    name: "Rug Busters",
  },
  {
    id: "r-u-generous",
    symbol: "rug",
    name: "R U Generous",
  },
  {
    id: "rug-proof",
    symbol: "rpt",
    name: "Rug Proof",
  },
  {
    id: "rugpull-prevention",
    symbol: "rugpull",
    name: "Rugpull Prevention",
  },
  {
    id: "rug-relief",
    symbol: "rr",
    name: "Rug Relief",
  },
  {
    id: "rugseekers",
    symbol: "SEEK",
    name: "RugSeekers",
  },
  {
    id: "rugzombie",
    symbol: "zmbe",
    name: "RugZombie",
  },
  {
    id: "ruler-protocol",
    symbol: "ruler",
    name: "Ruler Protocol",
  },
  {
    id: "ruletka",
    symbol: "rtk",
    name: "Ruletka",
  },
  {
    id: "rumito",
    symbol: "rutc",
    name: "Rumito",
  },
  {
    id: "run",
    symbol: "run",
    name: "Run",
  },
  {
    id: "rune",
    symbol: "rune",
    name: "Rune",
  },
  {
    id: "runebase",
    symbol: "runes",
    name: "Runebase",
  },
  {
    id: "rune-shards",
    symbol: "rxs",
    name: "Rune Shards",
  },
  {
    id: "rupaya",
    symbol: "rupx",
    name: "Rupaya",
  },
  {
    id: "rupee",
    symbol: "rup",
    name: "Rupee",
  },
  {
    id: "rupiah-token",
    symbol: "idrt",
    name: "Rupiah Token",
  },
  {
    id: "rusd",
    symbol: "rusd",
    name: "rUSD",
  },
  {
    id: "rush",
    symbol: "ruc",
    name: "Rush",
  },
  {
    id: "rush-defi",
    symbol: "rush",
    name: "Rush DeFi",
  },
  {
    id: "rushmoon",
    symbol: "rush",
    name: "RushMoon",
  },
  {
    id: "russell-coin",
    symbol: "rc",
    name: "RussellCoin",
  },
  {
    id: "rutheneum",
    symbol: "rth",
    name: "Rutheneum",
  },
  {
    id: "ruufcoin",
    symbol: "ruuf",
    name: "RuufCoin",
  },
  {
    id: "ruyi",
    symbol: "ryb",
    name: "Ruyi",
  },
  {
    id: "rxcgames",
    symbol: "rexc",
    name: "RXCGames",
  },
  {
    id: "ryi-platinum",
    symbol: "ryip",
    name: "RYI Platinum",
  },
  {
    id: "ryi-unity",
    symbol: "ryiu",
    name: "RYI Unity",
  },
  {
    id: "ryo",
    symbol: "ryo",
    name: "Ryo Currency",
  },
  {
    id: "ryoshimoto",
    symbol: "ryoshimoto",
    name: "Ryoshimoto",
  },
  {
    id: "ryoshis-vision",
    symbol: "ryoshi",
    name: "Ryoshis Vision",
  },
  {
    id: "ryoshi-token",
    symbol: "ryoshi",
    name: "Ryoshi Token",
  },
  {
    id: "ryze-inu",
    symbol: "$ryzeinu",
    name: "Ryze Inu",
  },
  {
    id: "s4fe",
    symbol: "s4f",
    name: "S4FE",
  },
  {
    id: "saave",
    symbol: "saave",
    name: "sAAVE",
  },
  {
    id: "sabac-warrior",
    symbol: "sw",
    name: "Sabac Warrior",
  },
  {
    id: "sabaka-inu",
    symbol: "SABAKA INU",
    name: "Sabaka Inu",
  },
  {
    id: "saber",
    symbol: "sbr",
    name: "Saber",
  },
  {
    id: "saber-wormhole",
    symbol: "sbr",
    name: "Saber (Wormhole)",
  },
  {
    id: "saber-wrapped-usd-coin",
    symbol: "susdc-9",
    name: "Saber Wrapped USD Coin",
  },
  {
    id: "sacks",
    symbol: "sacks",
    name: "Sacks",
  },
  {
    id: "sacred-tails",
    symbol: "st",
    name: "Sacred Tails",
  },
  {
    id: "sada",
    symbol: "sada",
    name: "sADA",
  },
  {
    id: "sadbaby",
    symbol: "sdby",
    name: "Sadbaby",
  },
  {
    id: "sad-cat-token",
    symbol: "scat",
    name: "Sad Cat Token",
  },
  {
    id: "saddle-finance",
    symbol: "sdl",
    name: "Saddle Finance",
  },
  {
    id: "safari",
    symbol: "sfr",
    name: "Safari",
  },
  {
    id: "safcoin",
    symbol: "saf",
    name: "SafCoin",
  },
  {
    id: "safeaffinity",
    symbol: "affinity",
    name: "Affinity",
  },
  {
    id: "safeape",
    symbol: "usda",
    name: "SafeApe",
  },
  {
    id: "safe-baby-shiba",
    symbol: "sbsh",
    name: "Safe Baby Shiba",
  },
  {
    id: "safebank",
    symbol: "safebank",
    name: "SafeBank",
  },
  {
    id: "safebank-eth",
    symbol: "sbank",
    name: "SafeBank ETH",
  },
  {
    id: "safebank-token",
    symbol: "sbank",
    name: "SafeBank BSC",
  },
  {
    id: "safebitcoin",
    symbol: "safebtc",
    name: "SafeBitcoin",
  },
  {
    id: "safeblast",
    symbol: "blast",
    name: "SafeBlast",
  },
  {
    id: "safebreastinu",
    symbol: "breast",
    name: "SafeBreastInu",
  },
  {
    id: "safebull",
    symbol: "safebull",
    name: "SafeBull",
  },
  {
    id: "safebuy",
    symbol: "sbf",
    name: "SAfebuy",
  },
  {
    id: "safecapital",
    symbol: "scap",
    name: "SafeCapital",
  },
  {
    id: "safecap-token",
    symbol: "sfc",
    name: "SafeCap Token",
  },
  {
    id: "safechaintoken",
    symbol: "sct",
    name: "Safechaintoken",
  },
  {
    id: "safecity",
    symbol: "safecity",
    name: "SafeCity",
  },
  {
    id: "safecock",
    symbol: "safecock",
    name: "SafeCock",
  },
  {
    id: "safe-coin",
    symbol: "safe",
    name: "Safe",
  },
  {
    id: "safe-coin-2",
    symbol: "safe",
    name: "SafeCoin",
  },
  {
    id: "safecookie",
    symbol: "safecookie",
    name: "SafeCookie",
  },
  {
    id: "safe-deal",
    symbol: "sfd",
    name: "SafeDeal",
  },
  {
    id: "safedoge",
    symbol: "safedoge",
    name: "SafeDoge",
  },
  {
    id: "safedogecoin",
    symbol: "SafeDoge",
    name: "SafeDogecoin",
  },
  {
    id: "safedoge-token",
    symbol: "safedoge",
    name: "SafeDoge Token",
  },
  {
    id: "safedog-protocol",
    symbol: "safedog",
    name: "Safedog Protocol",
  },
  {
    id: "safedollar",
    symbol: "sdo",
    name: "SafeDollar",
  },
  {
    id: "safedollar-shares",
    symbol: "sds",
    name: "SafeDollar Shares",
  },
  {
    id: "safedot",
    symbol: "sdot",
    name: "SafeDot",
  },
  {
    id: "safe-drive",
    symbol: "drive",
    name: "Safe Drive",
  },
  {
    id: "safe-earn",
    symbol: "safearn",
    name: "Safe Earn",
  },
  {
    id: "safeearth",
    symbol: "safeearth",
    name: "SafeEarth",
  },
  {
    id: "safe-energy",
    symbol: "energyx",
    name: "Safe Energy",
  },
  {
    id: "safeeth",
    symbol: "safeeth",
    name: "SafeETH",
  },
  {
    id: "safegem",
    symbol: "gems",
    name: "SafeGem",
  },
  {
    id: "safehamsters",
    symbol: "safehamsters",
    name: "SafeHamsters",
  },
  {
    id: "safe-haven",
    symbol: "sha",
    name: "Safe Haven",
  },
  {
    id: "safehold",
    symbol: "safehold",
    name: "SafeHold",
  },
  {
    id: "safeinsure",
    symbol: "sins",
    name: "SafeInsure",
  },
  {
    id: "safelaunch",
    symbol: "sfex",
    name: "SafeLaunch",
  },
  {
    id: "safelcarus",
    symbol: "safeicarus",
    name: "SafeIcarus",
  },
  {
    id: "safelight",
    symbol: "safelight",
    name: "SafeLight",
  },
  {
    id: "safemars",
    symbol: "safemars",
    name: "Safemars",
  },
  {
    id: "safemars-protocol",
    symbol: "smars",
    name: "Safemars Protocol",
  },
  {
    id: "safememe",
    symbol: "sme",
    name: "SafeMeme",
  },
  {
    id: "safemoney",
    symbol: "safemoney",
    name: "SafeMoney",
  },
  {
    id: "safemoneybsc",
    symbol: "safemoney",
    name: "SafeMoneyBSC",
  },
  {
    id: "safemoon",
    symbol: "safemoon",
    name: "SafeMoon [OLD]",
  },
  {
    id: "safemoon-2",
    symbol: "sfm",
    name: "SafeMoon",
  },
  {
    id: "safemoonavax",
    symbol: "safemoona",
    name: "SafemoonAvax",
  },
  {
    id: "safemooncash",
    symbol: "safemooncash",
    name: "SafeMoonCash",
  },
  {
    id: "safemoon-inu",
    symbol: "smi",
    name: "SafeMoon Inu",
  },
  {
    id: "safemoon-swap",
    symbol: "sfms",
    name: "SafeMoon Swap",
  },
  {
    id: "safemoon-zilla",
    symbol: "sfz",
    name: "Safemoon Zilla",
  },
  {
    id: "safemusk",
    symbol: "safemusk",
    name: "SafeMusk",
  },
  {
    id: "safenami",
    symbol: "safenami",
    name: "SafeNami",
  },
  {
    id: "safe-nebula",
    symbol: "snb",
    name: "Safe Nebula",
  },
  {
    id: "safenotmoon",
    symbol: "$SNM",
    name: "SafeNotMoon",
  },
  {
    id: "safe-ohm",
    symbol: "sohm",
    name: "SafeOHM",
  },
  {
    id: "safepal",
    symbol: "sfp",
    name: "SafePal",
  },
  {
    id: "safepe",
    symbol: "loox",
    name: "SafePe",
  },
  {
    id: "safeplus",
    symbol: "$SPLUS",
    name: "SafePlus",
  },
  {
    id: "safepluto",
    symbol: "safepluto",
    name: "SafePluto",
  },
  {
    id: "safermoon",
    symbol: "safermoon",
    name: "SAFERMOON",
  },
  {
    id: "safe-seafood-coin",
    symbol: "ssf",
    name: "Safe SeaFood Coin",
  },
  {
    id: "safeshiba",
    symbol: "safeshib",
    name: "SafeShiba",
  },
  {
    id: "safe-shield",
    symbol: "sfshld",
    name: "Safe Shield",
  },
  {
    id: "safespace",
    symbol: "safespace",
    name: "SafeSpace",
  },
  {
    id: "safestar",
    symbol: "safestar",
    name: "Safestar",
  },
  {
    id: "safesun",
    symbol: "SAFESUN",
    name: "SafeSun",
  },
  {
    id: "safeswap",
    symbol: "ssgt",
    name: "Safeswap",
  },
  {
    id: "safeswap-online",
    symbol: "swap",
    name: "SafeSwap Online",
  },
  {
    id: "safeswap-token",
    symbol: "ssgtx",
    name: "Safeswap Token",
  },
  {
    id: "safetesla",
    symbol: "safetesla",
    name: "SafeTesla",
  },
  {
    id: "safe-token",
    symbol: "SAFE",
    name: "SAFE TOKEN",
  },
  {
    id: "safetrees",
    symbol: "trees",
    name: "Safetrees",
  },
  {
    id: "safe-trip-finance",
    symbol: "stf",
    name: "Safe Trip Finance",
  },
  {
    id: "safety",
    symbol: "sft",
    name: "Safety",
  },
  {
    id: "safewages",
    symbol: "safew",
    name: "SafeWages",
  },
  {
    id: "safewhale",
    symbol: "swhal",
    name: "SafeWhale",
  },
  {
    id: "safewin",
    symbol: "safewin",
    name: "SafeWin",
  },
  {
    id: "safewolf",
    symbol: "sw",
    name: "SafeWolf",
  },
  {
    id: "safexi",
    symbol: "sxi",
    name: "SafeXI",
  },
  {
    id: "safezone",
    symbol: "safezone",
    name: "SafeZone",
  },
  {
    id: "saffron-finance",
    symbol: "sfi",
    name: "saffron.finance",
  },
  {
    id: "safle",
    symbol: "safle",
    name: "Safle",
  },
  {
    id: "safufide",
    symbol: "safest",
    name: "SafuFide",
  },
  {
    id: "safuyield-protocol",
    symbol: "safuyield",
    name: "SafuYield Protocol",
  },
  {
    id: "sai",
    symbol: "sai",
    name: "Sai",
  },
  {
    id: "sail",
    symbol: "sail",
    name: "SAIL",
  },
  {
    id: "saint-inu",
    symbol: "saint",
    name: "Saint Inu",
  },
  {
    id: "saint-token",
    symbol: "saint",
    name: "Saint Token",
  },
  {
    id: "saitama-inu",
    symbol: "saitama",
    name: "Saitama Inu",
  },
  {
    id: "saitama-kitty",
    symbol: "saikitty",
    name: "Saitama Kitty",
  },
  {
    id: "saitamax",
    symbol: "saitax",
    name: "SaitamaX",
  },
  {
    id: "saito",
    symbol: "saito",
    name: "Saito",
  },
  {
    id: "saiyan-inu",
    symbol: "sayan",
    name: "Saiyan Inu",
  },
  {
    id: "saja",
    symbol: "saja",
    name: "Saja",
  },
  {
    id: "sak3",
    symbol: "sak3",
    name: "SAKE",
  },
  {
    id: "sakaryaspor",
    symbol: "skry",
    name: "Sakaryaspor",
  },
  {
    id: "sakata-inu",
    symbol: "sakata",
    name: "Sakata Inu",
  },
  {
    id: "sake-token",
    symbol: "sake",
    name: "SakeToken",
  },
  {
    id: "sakhalin-husky",
    symbol: "SAHU",
    name: "Sakhalin Husky",
  },
  {
    id: "sakura",
    symbol: "sku",
    name: "Sakura",
  },
  {
    id: "sakura-bloom",
    symbol: "skb",
    name: "Sakura Bloom",
  },
  {
    id: "sakura-inu",
    symbol: "sakura",
    name: "Sakura Inu",
  },
  {
    id: "sakura-neko",
    symbol: "neko",
    name: "Sakura Neko",
  },
  {
    id: "salary",
    symbol: "slr",
    name: "Salary",
  },
  {
    id: "salmon",
    symbol: "slm",
    name: "Salmon",
  },
  {
    id: "salt",
    symbol: "salt",
    name: "SALT",
  },
  {
    id: "salus",
    symbol: "sls",
    name: "SaluS",
  },
  {
    id: "salvation-finance",
    symbol: "slvn",
    name: "Salvation Finance",
  },
  {
    id: "samecoin",
    symbol: "same",
    name: "Samecoin",
  },
  {
    id: "samo-inu",
    symbol: "SINU",
    name: "Samo INU",
  },
  {
    id: "samoyedcoin",
    symbol: "samo",
    name: "Samoyedcoin",
  },
  {
    id: "samsunspor-fan-token",
    symbol: "sam",
    name: "Samsunspor Fan Token",
  },
  {
    id: "samurai",
    symbol: "sam",
    name: "Samurai",
  },
  {
    id: "samusky-token",
    symbol: "samu",
    name: "Samusky Token",
  },
  {
    id: "sandclock",
    symbol: "quartz",
    name: "Sandclock",
  },
  {
    id: "sandego",
    symbol: "sdgo",
    name: "SanDeGo",
  },
  {
    id: "san-diego-coin",
    symbol: "sand",
    name: "San Diego Coin",
  },
  {
    id: "sandman",
    symbol: "sandman",
    name: "SandMan",
  },
  {
    id: "sanshu-inu",
    symbol: "sanshu",
    name: "Sanshu Inu",
  },
  {
    id: "sans-token",
    symbol: "sans",
    name: "Sans Token",
  },
  {
    id: "santa-capital",
    symbol: "SC",
    name: "Santa Capital",
  },
  {
    id: "santaclaus",
    symbol: "santa",
    name: "Santaclaus",
  },
  {
    id: "santa-coin-2",
    symbol: "santa",
    name: "Santa Coin",
  },
  {
    id: "santa-dash",
    symbol: "santadash",
    name: "Santa Dash",
  },
  {
    id: "santadoge",
    symbol: "santa",
    name: "SantaDoge",
  },
  {
    id: "santa-floki",
    symbol: "HoHoHo",
    name: "Santa Floki",
  },
  {
    id: "santa-inu",
    symbol: "saninu",
    name: "Santa Inu",
  },
  {
    id: "santa-shiba",
    symbol: "santashib",
    name: "Santa Shiba",
  },
  {
    id: "santas-war-nft-epic",
    symbol: "SANTAWAR",
    name: "Santas War NFT Epic",
  },
  {
    id: "santiment-network-token",
    symbol: "san",
    name: "Santiment Network Token",
  },
  {
    id: "santos-fc-fan-token",
    symbol: "santos",
    name: "Santos FC Fan Token",
  },
  {
    id: "santrast",
    symbol: "snrw",
    name: "Santrast",
  },
  {
    id: "sao-paulo-fc-fan-token",
    symbol: "spfc",
    name: "Sao Paulo FC Fan Token",
  },
  {
    id: "sapchain",
    symbol: "sap",
    name: "Sapchain",
  },
  {
    id: "sapien",
    symbol: "spn",
    name: "Sapien",
  },
  {
    id: "sappchat",
    symbol: "app",
    name: "SappChat",
  },
  {
    id: "sapphire",
    symbol: "sapp",
    name: "Sapphire",
  },
  {
    id: "sapphire-defi",
    symbol: "sapphire",
    name: "Sapphire DeFi",
  },
  {
    id: "sapphire-war",
    symbol: "war",
    name: "Sapphire War",
  },
  {
    id: "sarcophagus",
    symbol: "sarco",
    name: "Sarcophagus",
  },
  {
    id: "saren",
    symbol: "sar",
    name: "Saren",
  },
  {
    id: "sashimi",
    symbol: "sashimi",
    name: "Sashimi",
  },
  {
    id: "sasuke-inu",
    symbol: "SINU",
    name: "Sasuke Inu",
  },
  {
    id: "sata-exchange",
    symbol: "satax",
    name: "Sata Exchange",
  },
  {
    id: "satcoin",
    symbol: "SAT",
    name: "Satcoin",
  },
  {
    id: "satisfinance",
    symbol: "sat",
    name: "SatisFinance",
  },
  {
    id: "satoexchange-token",
    symbol: "satx",
    name: "SatoExchange Token",
  },
  {
    id: "satopay",
    symbol: "stop",
    name: "SatoPay",
  },
  {
    id: "satopay-yield-token",
    symbol: "spy",
    name: "Satopay Yield Token",
  },
  {
    id: "sator",
    symbol: "sao",
    name: "Sator",
  },
  {
    id: "satoru-inu",
    symbol: "sato",
    name: "Satoru Inu",
  },
  {
    id: "satoshistreetbets",
    symbol: "ssb",
    name: "SatoshiStreetBets",
  },
  {
    id: "satozhi",
    symbol: "satoz",
    name: "Satozhi",
  },
  {
    id: "satt",
    symbol: "satt",
    name: "SaTT",
  },
  {
    id: "saturna",
    symbol: "sat",
    name: "Saturna",
  },
  {
    id: "saturnbeam",
    symbol: "sat",
    name: "SaturnBeam",
  },
  {
    id: "saud",
    symbol: "saud",
    name: "sAUD",
  },
  {
    id: "saunafinance-token",
    symbol: "sauna",
    name: "SaunaFinance Token",
  },
  {
    id: "sav3",
    symbol: "sav3",
    name: "SAV3",
  },
  {
    id: "savage",
    symbol: "savg",
    name: "SAVAGE",
  },
  {
    id: "saveanimal",
    symbol: "saveanimal",
    name: "SaveAnimal",
  },
  {
    id: "save-baby-doge",
    symbol: "babydoge",
    name: "Save Baby Doge",
  },
  {
    id: "savebee-farm-honeycomb",
    symbol: "hc",
    name: "SAVEBEE FARM HONEYCOMB",
  },
  {
    id: "savebritney",
    symbol: "sbrt",
    name: "SaveBritney",
  },
  {
    id: "savenode",
    symbol: "sno",
    name: "SaveNode",
  },
  {
    id: "saveplanetearth",
    symbol: "spe",
    name: "SavePlanetEarth",
  },
  {
    id: "saveplanetearth-old",
    symbol: "spe",
    name: "SavePlanetEarth (OLD)",
  },
  {
    id: "save-ralph",
    symbol: "ralph",
    name: "Save Ralph",
  },
  {
    id: "save-the-kids",
    symbol: "kids",
    name: "Save The Kids",
  },
  {
    id: "savetheworld",
    symbol: "save",
    name: "SaveTheWorld",
  },
  {
    id: "save-token-us",
    symbol: "save",
    name: "SaveToken",
  },
  {
    id: "savix",
    symbol: "svx",
    name: "Savix",
  },
  {
    id: "saylor-moon",
    symbol: "smoon",
    name: "SaylorMoon",
  },
  {
    id: "sbank",
    symbol: "sts",
    name: "SBank",
  },
  {
    id: "sbet",
    symbol: "sbet",
    name: "SBET",
  },
  {
    id: "sbf-coin",
    symbol: "sbfc",
    name: "SBF Coin",
  },
  {
    id: "sbland-vault-nftx",
    symbol: "sbland",
    name: "SBLAND Vault (NFTX)",
  },
  {
    id: "sbtc",
    symbol: "sbtc",
    name: "sBTC",
  },
  {
    id: "scale-finance",
    symbol: "scale",
    name: "Scale Finance",
  },
  {
    id: "scaleswap-token",
    symbol: "sca",
    name: "Scaleswap Token",
  },
  {
    id: "scallop",
    symbol: "sclp",
    name: "Scallop",
  },
  {
    id: "scan-defi",
    symbol: "scan",
    name: "Scan DeFi",
  },
  {
    id: "scanetchain",
    symbol: "swc",
    name: "Scanetchain",
  },
  {
    id: "scar",
    symbol: "scar",
    name: "Scar",
  },
  {
    id: "scarab-finance",
    symbol: "scarab",
    name: "Scarab Finance",
  },
  {
    id: "scarcity",
    symbol: "scx",
    name: "Scarcity",
  },
  {
    id: "scardust",
    symbol: "scard",
    name: "SCARDust",
  },
  {
    id: "scarecrow",
    symbol: "scare",
    name: "ScareCrow",
  },
  {
    id: "scary-chain-capital",
    symbol: "scc",
    name: "Scary Chain Capital",
  },
  {
    id: "scary-games",
    symbol: "scy",
    name: "Scary Games",
  },
  {
    id: "scash",
    symbol: "scash",
    name: "sCASH",
  },
  {
    id: "scatter-cx",
    symbol: "stt",
    name: "Scatter.cx",
  },
  {
    id: "scc",
    symbol: "scc",
    name: "SCC",
  },
  {
    id: "s-c-corinthians-fan-token",
    symbol: "sccp",
    name: "S.C. Corinthians Fan Token",
  },
  {
    id: "schain-wallet",
    symbol: "scha",
    name: "Schain Wallet",
  },
  {
    id: "schillingcoin",
    symbol: "sch",
    name: "Schilling-Coin",
  },
  {
    id: "schnoodle",
    symbol: "snood",
    name: "Schnoodle",
  },
  {
    id: "scholarship-coin",
    symbol: "scho",
    name: "Scholarship Coin",
  },
  {
    id: "schrodinger",
    symbol: "kitty dinger",
    name: "Schrodinger",
  },
  {
    id: "science_chain",
    symbol: "scc",
    name: "Science Chain",
  },
  {
    id: "scientia",
    symbol: "scie",
    name: "Scientia",
  },
  {
    id: "scientix",
    symbol: "scix",
    name: "Scientix",
  },
  {
    id: "scientix-usd",
    symbol: "scusd",
    name: "Scientix USD",
  },
  {
    id: "scifi-index",
    symbol: "scifi",
    name: "SCIFI Index",
  },
  {
    id: "scolcoin",
    symbol: "scol",
    name: "Scolcoin",
  },
  {
    id: "sconex",
    symbol: "sconex",
    name: "SCOneX",
  },
  {
    id: "scoobi-doge",
    symbol: "scoobi",
    name: "Scoobi Doge",
  },
  {
    id: "scootercoin",
    symbol: "scoot",
    name: "ScooterCoin",
  },
  {
    id: "scope",
    symbol: "SCP",
    name: "Scope",
  },
  {
    id: "scopecoin",
    symbol: "xscp",
    name: "ScopeCoin",
  },
  {
    id: "scopuly-token",
    symbol: "scop",
    name: "Scopuly Token",
  },
  {
    id: "score-token",
    symbol: "sco",
    name: "Score Token",
  },
  {
    id: "scorpion-finance",
    symbol: "scorpfin",
    name: "Scorpion Finance",
  },
  {
    id: "scorum",
    symbol: "scr",
    name: "Scorum",
  },
  {
    id: "scotty-beam",
    symbol: "scotty",
    name: "Scotty Beam",
  },
  {
    id: "scrap",
    symbol: "scrap",
    name: "Scrap",
  },
  {
    id: "scream",
    symbol: "scream",
    name: "Scream",
  },
  {
    id: "scribe",
    symbol: "scribe",
    name: "Scribe",
  },
  {
    id: "script-network",
    symbol: "scpt",
    name: "Script Network",
  },
  {
    id: "scriv",
    symbol: "scriv",
    name: "SCRIV",
  },
  {
    id: "scroll-token",
    symbol: "xd",
    name: "Data Transaction Token",
  },
  {
    id: "scrooge",
    symbol: "scrooge",
    name: "Scrooge",
  },
  {
    id: "scry-info",
    symbol: "ddd",
    name: "Scry.info",
  },
  {
    id: "scrypta",
    symbol: "lyra",
    name: "Scrypta",
  },
  {
    id: "sdefi",
    symbol: "sdefi",
    name: "sDEFI",
  },
  {
    id: "sdot",
    symbol: "sdot",
    name: "sDOT",
  },
  {
    id: "se7en-2",
    symbol: "se7en",
    name: "SE7EN",
  },
  {
    id: "sea",
    symbol: "sea",
    name: "Sea",
  },
  {
    id: "seachain",
    symbol: "seachain",
    name: "SeaChain",
  },
  {
    id: "seadex",
    symbol: "sead",
    name: "SEADEX",
  },
  {
    id: "seadog-finance",
    symbol: "sead",
    name: "SeaDog Finance",
  },
  {
    id: "seadog-metaverse",
    symbol: "seadog",
    name: "Seadog Metaverse",
  },
  {
    id: "seamlessswap-token",
    symbol: "seamless",
    name: "SeamlessSwap Token",
  },
  {
    id: "seancecircle",
    symbol: "seance",
    name: "SeanceCircle",
  },
  {
    id: "sea-oceanus",
    symbol: "sea",
    name: "Sea Oceanus",
  },
  {
    id: "sea-swap-global",
    symbol: "ssg",
    name: "Sea Swap Global",
  },
  {
    id: "sechain",
    symbol: "snn",
    name: "SeChain",
  },
  {
    id: "secret",
    symbol: "scrt",
    name: "Secret",
  },
  {
    id: "secret-erc20",
    symbol: "wscrt",
    name: "Secret (ERC20)",
  },
  {
    id: "secret-finance",
    symbol: "sefi",
    name: "Secret Finance",
  },
  {
    id: "secretsky-finance",
    symbol: "ssf",
    name: "SecretSky Finance",
  },
  {
    id: "securabyte-protocol",
    symbol: "sbyte",
    name: "Securabyte Protocol",
  },
  {
    id: "secure",
    symbol: "scr",
    name: "Secure",
  },
  {
    id: "secure-cash",
    symbol: "scsx",
    name: "Secure Cash",
  },
  {
    id: "secured-moonrat-token",
    symbol: "smrat",
    name: "Secured MoonRat Token",
  },
  {
    id: "secured-ship",
    symbol: "ship",
    name: "Secured Ship",
  },
  {
    id: "secure-pad",
    symbol: "sepa",
    name: "Secure Pad",
  },
  {
    id: "securus",
    symbol: "xscr",
    name: "Securus",
  },
  {
    id: "sedo-pow-token",
    symbol: "sedo",
    name: "SEDO POW TOKEN",
  },
  {
    id: "seed2need",
    symbol: "silo",
    name: "Seed2Need",
  },
  {
    id: "seeder-finance",
    symbol: "leaf",
    name: "Seeder Finance",
  },
  {
    id: "seeder-network-token",
    symbol: "SEED",
    name: "Sesameseed",
  },
  {
    id: "seedify-fund",
    symbol: "sfund",
    name: "Seedify.fund",
  },
  {
    id: "seedling",
    symbol: "sdln",
    name: "Seedling",
  },
  {
    id: "seeds",
    symbol: "seeds",
    name: "Seeds",
  },
  {
    id: "seedswap",
    symbol: "snft",
    name: "SeedSwap",
  },
  {
    id: "seedswap-token",
    symbol: "seed",
    name: "SeedSwap Token",
  },
  {
    id: "seed-token",
    symbol: "seed",
    name: "Seed Token",
  },
  {
    id: "seed-venture",
    symbol: "seed",
    name: "Seed Venture",
  },
  {
    id: "seele",
    symbol: "seele",
    name: "Seele",
  },
  {
    id: "seen",
    symbol: "seen",
    name: "SEEN",
  },
  {
    id: "seer",
    symbol: "seer",
    name: "Seer",
  },
  {
    id: "seigniorage-shares",
    symbol: "share",
    name: "Seigniorage Shares",
  },
  {
    id: "sekuritance",
    symbol: "skrt",
    name: "Sekuritance",
  },
  {
    id: "selenium",
    symbol: "slc",
    name: "Selenium",
  },
  {
    id: "selfbar",
    symbol: "sbar",
    name: "Selfbar",
  },
  {
    id: "selfkey",
    symbol: "key",
    name: "SelfKey",
  },
  {
    id: "semitoken",
    symbol: "semi",
    name: "Semitoken",
  },
  {
    id: "semux",
    symbol: "sem",
    name: "Semux",
  },
  {
    id: "senate",
    symbol: "senate",
    name: "SENATE",
  },
  {
    id: "senator-karen",
    symbol: "karen",
    name: "Senator Karen",
  },
  {
    id: "sense",
    symbol: "sense",
    name: "Sense",
  },
  {
    id: "sensei",
    symbol: "sensei",
    name: "Sensei",
  },
  {
    id: "sensei-shib",
    symbol: "$sensei",
    name: "Sensei Shib",
  },
  {
    id: "sensible-finance",
    symbol: "sensi",
    name: "Sensible Finance",
  },
  {
    id: "sensitrust",
    symbol: "sets",
    name: "Sensitrust",
  },
  {
    id: "senso",
    symbol: "senso",
    name: "SENSO",
  },
  {
    id: "sentiment-token",
    symbol: "sent",
    name: "Sentiment Token",
  },
  {
    id: "sentinel",
    symbol: "dvpn",
    name: "Sentinel",
  },
  {
    id: "sentinel-chain",
    symbol: "senc",
    name: "Sentinel Chain",
  },
  {
    id: "sentinel-group",
    symbol: "dvpn",
    name: "Sentinel [OLD]",
  },
  {
    id: "sentinel-protocol",
    symbol: "upp",
    name: "Sentinel Protocol",
  },
  {
    id: "sentivate",
    symbol: "sntvt",
    name: "Sentivate",
  },
  {
    id: "sentre",
    symbol: "sntr",
    name: "Sentre",
  },
  {
    id: "sephirothinu",
    symbol: "sephi",
    name: "SephirothInu",
  },
  {
    id: "sequence",
    symbol: "seq",
    name: "Sequence",
  },
  {
    id: "ser",
    symbol: "ser",
    name: "SER",
  },
  {
    id: "serbian-cave-hermit",
    symbol: "serbiancavehermit",
    name: "Serbian Cave Hermit",
  },
  {
    id: "serenity",
    symbol: "srnt",
    name: "Serenity",
  },
  {
    id: "serey-coin",
    symbol: "sry",
    name: "Serey Coin",
  },
  {
    id: "sergey-save-link",
    symbol: "ssl",
    name: "SERGS Governance",
  },
  {
    id: "sergs",
    symbol: "sergs",
    name: "SERGS",
  },
  {
    id: "serum",
    symbol: "srm",
    name: "Serum",
  },
  {
    id: "serum-ecosystem-token",
    symbol: "seco",
    name: "Serum Ecosystem Token",
  },
  {
    id: "serum-wormhole",
    symbol: "srmso",
    name: "Serum (Wormhole)",
  },
  {
    id: "serum-wormhole-from-ethereum",
    symbol: "srmet",
    name: "Serum (Wormhole from Ethereum)",
  },
  {
    id: "sessia",
    symbol: "kicks",
    name: "SESSIA",
  },
  {
    id: "seth",
    symbol: "seth",
    name: "sETH",
  },
  {
    id: "seth2",
    symbol: "seth2",
    name: "sETH2",
  },
  {
    id: "sether",
    symbol: "seth",
    name: "Sether",
  },
  {
    id: "seur",
    symbol: "seur",
    name: "sEUR",
  },
  {
    id: "severe-rise-games",
    symbol: "srgt",
    name: "Severe Rise Games",
  },
  {
    id: "sewer-rat-social-club-chiz-token",
    symbol: "chiz",
    name: "Sewer Rat Social Club CHIZ Token",
  },
  {
    id: "sexcoin",
    symbol: "sxc",
    name: "Sexcoin",
  },
  {
    id: "sf-capital",
    symbol: "sfcp",
    name: "SF Capital",
  },
  {
    id: "s-finance",
    symbol: "sfg",
    name: "S.Finance",
  },
  {
    id: "sfmoney",
    symbol: "sfm",
    name: "SFMoney",
  },
  {
    id: "sg20",
    symbol: "sg20",
    name: "SG20",
  },
  {
    id: "shabu-shabu",
    symbol: "kobe",
    name: "Shabu Shabu",
  },
  {
    id: "shade-cash",
    symbol: "shade",
    name: "Shade Cash",
  },
  {
    id: "shadows",
    symbol: "dows",
    name: "Shadows",
  },
  {
    id: "shadowswap",
    symbol: "shadow",
    name: "ShadowSwap",
  },
  {
    id: "shadow-token",
    symbol: "shdw",
    name: "Shadow Token",
  },
  {
    id: "shakita-inu",
    symbol: "shak",
    name: "Shakita Inu",
  },
  {
    id: "shaman-king-inu",
    symbol: "shaman",
    name: "Shaman King Inu",
  },
  {
    id: "shambala",
    symbol: "bala",
    name: "Shambala",
  },
  {
    id: "shapepay",
    symbol: "spp",
    name: "ShapePay",
  },
  {
    id: "shapeshift-fox-token",
    symbol: "fox",
    name: "ShapeShift FOX Token",
  },
  {
    id: "shard",
    symbol: "shard",
    name: "Shard Coin",
  },
  {
    id: "sharder-protocol",
    symbol: "ss",
    name: "Sharder protocol",
  },
  {
    id: "shardingdao",
    symbol: "shd",
    name: "ShardingDAO",
  },
  {
    id: "shardus",
    symbol: "ult",
    name: "Shardus",
  },
  {
    id: "shareat",
    symbol: "xat",
    name: "ShareAt",
  },
  {
    id: "sharedstake-governance-token",
    symbol: "sgtv2",
    name: "SharedStake Governance Token v2",
  },
  {
    id: "sharering",
    symbol: "shr",
    name: "ShareToken",
  },
  {
    id: "sharity",
    symbol: "$shari",
    name: "Sharity",
  },
  {
    id: "sharkcoin",
    symbol: "skn",
    name: "Sharkcoin",
  },
  {
    id: "shark-girl",
    symbol: "sgirl",
    name: "Shark Girl",
  },
  {
    id: "sharpay",
    symbol: "s",
    name: "Sharpay",
  },
  {
    id: "shar-pei",
    symbol: "sharpei",
    name: "Shar Pei",
  },
  {
    id: "shd-cash",
    symbol: "shdc",
    name: "SHD Cash",
  },
  {
    id: "shebolleth-commerce",
    symbol: "sbecom",
    name: "SheBollETH Commerce",
  },
  {
    id: "shed-coin",
    symbol: "shed",
    name: "Shed Coin",
  },
  {
    id: "sheep-game",
    symbol: "awool",
    name: "Sheep Game",
  },
  {
    id: "sheeptoken",
    symbol: "SHEEP",
    name: "SheepToken",
  },
  {
    id: "sheesh",
    symbol: "sheesh",
    name: "Sheesh",
  },
  {
    id: "sheesha-finance",
    symbol: "sheesha",
    name: "Sheesha Finance (BEP20)",
  },
  {
    id: "sheesha-finance-erc20",
    symbol: "sheesha",
    name: "Sheesha Finance (ERC20)",
  },
  {
    id: "sheeshmoon",
    symbol: "smoo",
    name: "SheeshMoon",
  },
  {
    id: "shelby-token",
    symbol: "sby",
    name: "Shelby Token",
  },
  {
    id: "shelling",
    symbol: "shl",
    name: "Shelling",
  },
  {
    id: "shell-token",
    symbol: "shell",
    name: "Shell Token",
  },
  {
    id: "sheltie-inu",
    symbol: "shinu",
    name: "Sheltie Inu",
  },
  {
    id: "sheng",
    symbol: "sheng",
    name: "SHENG",
  },
  {
    id: "sherlock365",
    symbol: "lock",
    name: "Sherlock365",
  },
  {
    id: "sherlock-wallet",
    symbol: "sher",
    name: "Sherlock Wallet",
  },
  {
    id: "sherpa",
    symbol: "sherpa",
    name: "Sherpa",
  },
  {
    id: "shiba2k22",
    symbol: "shiba22",
    name: "SHIBA2K22",
  },
  {
    id: "shiba-bank",
    symbol: "shibabank",
    name: "Shiba Bank",
  },
  {
    id: "shibabnb-org",
    symbol: "shibabnb",
    name: "ShibaBNB.org",
  },
  {
    id: "shiba-bsc",
    symbol: "shibsc",
    name: "SHIBA BSC",
  },
  {
    id: "shibacash",
    symbol: "shibacash",
    name: "ShibaCash",
  },
  {
    id: "shiba-chocolate",
    symbol: "shoco",
    name: "Shiba Chocolate",
  },
  {
    id: "shibachu",
    symbol: "shibchu",
    name: "Shibachu",
  },
  {
    id: "shiback",
    symbol: "shiback",
    name: "SHIBACK",
  },
  {
    id: "shiba-cloud",
    symbol: "nimbus",
    name: "Shiba Cloud",
  },
  {
    id: "shibacock",
    symbol: "cock",
    name: "Shibacock",
  },
  {
    id: "shibacorgi",
    symbol: "shico",
    name: "ShibaCorgi",
  },
  {
    id: "shibadoge",
    symbol: "shibdoge",
    name: "ShibaDoge",
  },
  {
    id: "shiba-dollars",
    symbol: "shibadollars",
    name: "Shiba Dollars",
  },
  {
    id: "shiba-dragon",
    symbol: "shibad",
    name: "Shiba Dragon",
  },
  {
    id: "shibaduff",
    symbol: "shibaduff",
    name: "ShibaDuff",
  },
  {
    id: "shiba-elon",
    symbol: "eshib",
    name: "Shiba Elon",
  },
  {
    id: "shibaelonverse",
    symbol: "shibev",
    name: "ShibaElonVerse",
  },
  {
    id: "shiba-fantom",
    symbol: "shiba",
    name: "Shiba Fantom",
  },
  {
    id: "shibafi",
    symbol: "ShibaFi",
    name: "Shiba Finance",
  },
  {
    id: "shibagalaxy",
    symbol: "shibgx",
    name: "ShibaGalaxy",
  },
  {
    id: "shiba-games",
    symbol: "shibagames",
    name: "Shiba Games",
  },
  {
    id: "shiba-hunter",
    symbol: "shunt",
    name: "Shiba Hunter",
  },
  {
    id: "shiba-inu",
    symbol: "shib",
    name: "Shiba Inu",
  },
  {
    id: "shiba-inu-billionaire",
    symbol: "shibib",
    name: "Shiba Inu Billionaire",
  },
  {
    id: "shiba-inu-classic",
    symbol: "shibic",
    name: "Shiba Inu Classic",
  },
  {
    id: "shiba-inu-empire",
    symbol: "shibemp",
    name: "Shiba Inu Empire",
  },
  {
    id: "shiba-inu-wormhole",
    symbol: "shib",
    name: "Shiba Inu (Wormhole)",
  },
  {
    id: "shibaken-finance",
    symbol: "shibaken",
    name: "Shibaken Finance",
  },
  {
    id: "shibalana",
    symbol: "shiba",
    name: "Shibalana",
  },
  {
    id: "shiba-launch",
    symbol: "shibal",
    name: "Shiba Launch",
  },
  {
    id: "shiba-light",
    symbol: "shibt",
    name: "Shiba Light",
  },
  {
    id: "shiba-link",
    symbol: "slink",
    name: "ShibaLink",
  },
  {
    id: "shibalite",
    symbol: "shiblite",
    name: "ShibaLite",
  },
  {
    id: "shiba-maki",
    symbol: "shibamaki",
    name: "Shiba Maki",
  },
  {
    id: "shibamax",
    symbol: "smax",
    name: "ShibaMax",
  },
  {
    id: "shiba-metaverse",
    symbol: "shibmeta",
    name: "Shiba Metaverse",
  },
  {
    id: "shibamon",
    symbol: "shibamon",
    name: "Shibamon",
  },
  {
    id: "shiba-mongoose",
    symbol: "shibmong",
    name: "Shiba Mongoose",
  },
  {
    id: "shiba-monk",
    symbol: "shibamonk",
    name: "Shiba Monk",
  },
  {
    id: "shiba-moon",
    symbol: "shibm",
    name: "Shiba Moon",
  },
  {
    id: "shibana",
    symbol: "bana",
    name: "Shibana",
  },
  {
    id: "shibanaut",
    symbol: "snaut",
    name: "Shibanaut",
  },
  {
    id: "shibanaut-token",
    symbol: "shibanaut",
    name: "Shibanaut Token",
  },
  {
    id: "shibance-token",
    symbol: "woof",
    name: "Shibance Token",
  },
  {
    id: "shibanomi",
    symbol: "shio",
    name: "Shibanomi",
  },
  {
    id: "shibanomics",
    symbol: "shibin",
    name: "Shibanomics",
  },
  {
    id: "shibanova",
    symbol: "nova",
    name: "ShibaNova",
  },
  {
    id: "shibapad",
    symbol: "sbp",
    name: "ShibaPad",
  },
  {
    id: "shibapup",
    symbol: "shibapup",
    name: "ShibaPup",
  },
  {
    id: "shiba-ramen",
    symbol: "shibaramen",
    name: "Shiba Ramen",
  },
  {
    id: "shib-army",
    symbol: "shibarmy",
    name: "Shib Army",
  },
  {
    id: "shibarocket",
    symbol: "shibarocket",
    name: "ShibaRocket",
  },
  {
    id: "shiba-shogun",
    symbol: "shibagun",
    name: "Shiba Shogun",
  },
  {
    id: "shiba-swim",
    symbol: "sswim",
    name: "Shiba Swim",
  },
  {
    id: "shiba-toby",
    symbol: "shbt",
    name: "Shiba Toby",
  },
  {
    id: "shiba-tron",
    symbol: "shibt",
    name: "Shiba Tron",
  },
  {
    id: "shibavax",
    symbol: "shibx",
    name: "Shibavax",
  },
  {
    id: "shibaverse",
    symbol: "VERSE",
    name: "Shibaverse",
  },
  {
    id: "shibaverse-token",
    symbol: "shiver",
    name: "Shibaverse Token",
  },
  {
    id: "shiba-viking",
    symbol: "shibking",
    name: "Shiba Viking",
  },
  {
    id: "shibawallet",
    symbol: "shwa",
    name: "ShibaWallet",
  },
  {
    id: "shiba-watch",
    symbol: "shibaw",
    name: "Shiba Watch",
  },
  {
    id: "shiba-x",
    symbol: "shibax",
    name: "Shiba X",
  },
  {
    id: "shibazilla",
    symbol: "shibazilla",
    name: "ShibaZilla",
  },
  {
    id: "shibboo-inu",
    symbol: "shibboo",
    name: "Shibboo Inu",
  },
  {
    id: "shib-cake",
    symbol: "shibcake",
    name: "SHIB CAKE",
  },
  {
    id: "shibelon",
    symbol: "shibelon",
    name: "ShibElon",
  },
  {
    id: "shibelon-mars",
    symbol: "shibelon",
    name: "Shibelon Mars",
  },
  {
    id: "shiberus-inu",
    symbol: "shiberus",
    name: "Shiberus Inu",
  },
  {
    id: "shibfuel",
    symbol: "shibfuel",
    name: "ShibFueL",
  },
  {
    id: "shib-generating",
    symbol: "shg",
    name: "Shib Generating",
  },
  {
    id: "shibgf",
    symbol: "shibgf",
    name: "SHIBGF",
  },
  {
    id: "shibmerican",
    symbol: "shibmerican",
    name: "Shibmerican",
  },
  {
    id: "shibnaki",
    symbol: "SHAKI",
    name: "SHIBNAKI",
  },
  {
    id: "shibnobi",
    symbol: "shinja",
    name: "Shibnobi",
  },
  {
    id: "shiboki",
    symbol: "shiboki",
    name: "Shiboki",
  },
  {
    id: "shibonics",
    symbol: "snis",
    name: "Shibonics",
  },
  {
    id: "shibonk",
    symbol: "shibo",
    name: "Shibonk",
  },
  {
    id: "shibooster",
    symbol: "shiboost",
    name: "Shibooster",
  },
  {
    id: "shiborg-inu",
    symbol: "shiborg",
    name: "SHIBORG INU",
  },
  {
    id: "shibosu",
    symbol: "shibosu",
    name: "Shibosu",
  },
  {
    id: "shibrwd",
    symbol: "SRWD",
    name: "ShibRWD",
  },
  {
    id: "shibtaro",
    symbol: "shibtaro",
    name: "ShibTaro",
  },
  {
    id: "shibu-life",
    symbol: "shibu",
    name: "Shibu Life",
  },
  {
    id: "shibx",
    symbol: "$ShibX",
    name: "ShibX",
  },
  {
    id: "shiden",
    symbol: "sdn",
    name: "Shiden Network",
  },
  {
    id: "shield",
    symbol: "xsh",
    name: "SHIELD",
  },
  {
    id: "shield-dao",
    symbol: "sld",
    name: "ShieldEX",
  },
  {
    id: "shield-finance",
    symbol: "shld",
    name: "Shield Finance",
  },
  {
    id: "shield-network",
    symbol: "shieldnet",
    name: "Shield Network",
  },
  {
    id: "shield-protocol",
    symbol: "shield",
    name: "Shield Protocol",
  },
  {
    id: "shield-token-2",
    symbol: "shield",
    name: "ShieldToken",
  },
  {
    id: "shih-tzu",
    symbol: "shih",
    name: "Shih Tzu",
  },
  {
    id: "shikage",
    symbol: "shkg",
    name: "Shikage",
  },
  {
    id: "shikokuaido",
    symbol: "shokk",
    name: "Shikokuaido",
  },
  {
    id: "shikoku-inu",
    symbol: "shiko",
    name: "Shikoku Inu",
  },
  {
    id: "shill",
    symbol: "posh",
    name: "Shill",
  },
  {
    id: "shilling",
    symbol: "sh",
    name: "Shilling",
  },
  {
    id: "shillit-app",
    symbol: "shill",
    name: "Shillit App",
  },
  {
    id: "shillmoon",
    symbol: "shillmoon",
    name: "ShillMoon",
  },
  {
    id: "shill-token",
    symbol: "shill",
    name: "SHILL Token",
  },
  {
    id: "shilly-bar",
    symbol: "shbar",
    name: "Shilly Bar",
  },
  {
    id: "shimmer-network",
    symbol: "smr",
    name: "Shimmer Network",
  },
  {
    id: "shinchan-token",
    symbol: "shinnosuke",
    name: "ShinChan Token",
  },
  {
    id: "shinechain",
    symbol: "she",
    name: "ShineChain",
  },
  {
    id: "shinedao",
    symbol: "shn",
    name: "ShineDAO",
  },
  {
    id: "shinigami-inu",
    symbol: "shinu",
    name: "Shinigami Inu",
  },
  {
    id: "shining-crystal-shard",
    symbol: "scs",
    name: "Shining Crystal Shard",
  },
  {
    id: "shinji-inu",
    symbol: "shinji",
    name: "Shinji Inu",
  },
  {
    id: "shinjutsu",
    symbol: "shinjutsu",
    name: "Shinjutsu",
  },
  {
    id: "shinobi",
    symbol: "snb",
    name: "Shinobi",
  },
  {
    id: "shinobi-inu",
    symbol: "shin",
    name: "Shinobi Inu",
  },
  {
    id: "shinomics",
    symbol: "shin",
    name: "Shinomics",
  },
  {
    id: "shiny",
    symbol: "shiny",
    name: "Shiny",
  },
  {
    id: "shipchain",
    symbol: "ship",
    name: "ShipChain",
  },
  {
    id: "shipitpro",
    symbol: "shpp",
    name: "ShipItPro",
  },
  {
    id: "shirainu",
    symbol: "shr",
    name: "ShiraINU",
  },
  {
    id: "shirtum",
    symbol: "shi",
    name: "Shirtum",
  },
  {
    id: "shiryo-inu",
    symbol: "shiryo-inu",
    name: "Shiryo-Inu",
  },
  {
    id: "shitcoin",
    symbol: "shit",
    name: "ShitCoin",
  },
  {
    id: "shitzu-inu",
    symbol: "shitzuinu",
    name: "Shitzu Inu",
  },
  {
    id: "shiwbawitch-token",
    symbol: "shibawitch",
    name: "SHIWBAWITCH TOKEN",
  },
  {
    id: "shkooby-inu",
    symbol: "shkooby",
    name: "SHKOOBY INU",
  },
  {
    id: "shockwave-finance",
    symbol: "wave",
    name: "Shockwave Finance",
  },
  {
    id: "shoebill-coin",
    symbol: "shbl",
    name: "Shoebill Coin",
  },
  {
    id: "shoefy",
    symbol: "shoe",
    name: "ShoeFy",
  },
  {
    id: "shokky",
    symbol: "shokky",
    name: "SHOKKY",
  },
  {
    id: "shontoken",
    symbol: "shon",
    name: "ShonToken",
  },
  {
    id: "shoot",
    symbol: "shoo",
    name: "SHOOT",
  },
  {
    id: "shopnext",
    symbol: "next",
    name: "ShopNEXT",
  },
  {
    id: "shopperoo",
    symbol: "sro",
    name: "Shopperoo",
  },
  {
    id: "shoppi-coin",
    symbol: "shop",
    name: "Shoppi Coin",
  },
  {
    id: "shopping-io",
    symbol: "spi",
    name: "Shopping.io",
  },
  {
    id: "shorty",
    symbol: "shorty",
    name: "Shorty",
  },
  {
    id: "showcase-token",
    symbol: "sho",
    name: "Showcase Token",
  },
  {
    id: "showhand",
    symbol: "hand",
    name: "ShowHand",
  },
  {
    id: "shping",
    symbol: "shping",
    name: "Shping",
  },
  {
    id: "shrek",
    symbol: "shk",
    name: "Shrek",
  },
  {
    id: "shrimp-finance",
    symbol: "shrimp",
    name: "Shrimp Finance",
  },
  {
    id: "shroom-finance",
    symbol: "shroom",
    name: "Niftyx Protocol",
  },
  {
    id: "shrooms",
    symbol: "shrm",
    name: "Shrooms",
  },
  {
    id: "shuffle",
    symbol: "shfl",
    name: "SHUFFLE!",
  },
  {
    id: "shuna-inuverse",
    symbol: "shunav2",
    name: "Shuna Inuverse",
  },
  {
    id: "shyft-network-2",
    symbol: "shft",
    name: "Shyft Network",
  },
  {
    id: "si14bet",
    symbol: "si14",
    name: "Si14Bet",
  },
  {
    id: "siacashcoin",
    symbol: "scc",
    name: "SiaCashCoin",
  },
  {
    id: "siaclassic",
    symbol: "scc",
    name: "SiaClassic",
  },
  {
    id: "siacoin",
    symbol: "sc",
    name: "Siacoin",
  },
  {
    id: "siambitcoin",
    symbol: "sbtc",
    name: "SiamBitcoin",
  },
  {
    id: "siamese-neko",
    symbol: "siam",
    name: "Siamese Neko",
  },
  {
    id: "siaprime-coin",
    symbol: "scp",
    name: "ScPrime",
  },
  {
    id: "sibcoin",
    symbol: "sib",
    name: "SIBCoin",
  },
  {
    id: "siberian-husky",
    symbol: "shusky",
    name: "Siberian Husky",
  },
  {
    id: "sicash",
    symbol: "sic",
    name: "SICash",
  },
  {
    id: "sidekick-token",
    symbol: "sk",
    name: "SideKick Token",
  },
  {
    id: "sideshift-token",
    symbol: "xai",
    name: "SideShift Token",
  },
  {
    id: "sidus",
    symbol: "sidus",
    name: "Sidus",
  },
  {
    id: "sienna",
    symbol: "sienna",
    name: "Sienna",
  },
  {
    id: "sienna-erc20",
    symbol: "wsienna",
    name: "Sienna [ERC-20]",
  },
  {
    id: "sierra",
    symbol: "sra",
    name: "Sierra",
  },
  {
    id: "sif",
    symbol: "sif",
    name: "Sif",
  },
  {
    id: "sifchain",
    symbol: "erowan",
    name: "Sifchain",
  },
  {
    id: "signal-token",
    symbol: "sig",
    name: "Signal Token",
  },
  {
    id: "signata",
    symbol: "sata",
    name: "Signata",
  },
  {
    id: "signaturechain",
    symbol: "sign",
    name: "SignatureChain",
  },
  {
    id: "signum",
    symbol: "signa",
    name: "Signum",
  },
  {
    id: "silent-notary",
    symbol: "ubsn",
    name: "Silent Notary",
  },
  {
    id: "sil-finance",
    symbol: "sil",
    name: "SIL Finance Token V2",
  },
  {
    id: "silkchain",
    symbol: "silk",
    name: "SilkChain",
  },
  {
    id: "silo-finance",
    symbol: "silo",
    name: "Silo Finance",
  },
  {
    id: "silva-token",
    symbol: "silva",
    name: "Silva",
  },
  {
    id: "silvercashs",
    symbol: "svc",
    name: "Silvercashs",
  },
  {
    id: "silvercoin",
    symbol: "sc",
    name: "SilverCoin",
  },
  {
    id: "silver-gateway",
    symbol: "svs",
    name: "Silver Gateway",
  },
  {
    id: "silverstonks",
    symbol: "sstx",
    name: "Silver Stonks",
  },
  {
    id: "silvertoken",
    symbol: "slvt",
    name: "SilverToken",
  },
  {
    id: "silver-token",
    symbol: "silver",
    name: "Silver Token",
  },
  {
    id: "silverway",
    symbol: "slv",
    name: "Silverway",
  },
  {
    id: "simba-empire",
    symbol: "sim",
    name: "Simba Empire",
  },
  {
    id: "simba-inu",
    symbol: "simbainu",
    name: "Simba Inu",
  },
  {
    id: "simba-storage-token",
    symbol: "sst",
    name: "SIMBA Storage Token",
  },
  {
    id: "simba-token",
    symbol: "simba",
    name: "Simba Token",
  },
  {
    id: "simbcoin-swap",
    symbol: "smbswap",
    name: "SimbCoin Swap",
  },
  {
    id: "simian-finance",
    symbol: "sifi",
    name: "Simian Finance",
  },
  {
    id: "simple",
    symbol: "simple",
    name: "SIMPLE",
  },
  {
    id: "simple-cool-automatic-money",
    symbol: "scam",
    name: "Simple Cool Automatic Money",
  },
  {
    id: "simple-masternode-coin",
    symbol: "smnc",
    name: "Simple Masternode Coin",
  },
  {
    id: "simple-software-solutions",
    symbol: "sss",
    name: "Simple Software Solutions",
  },
  {
    id: "simple-token",
    symbol: "ost",
    name: "OST",
  },
  {
    id: "simplexchain",
    symbol: "sxc",
    name: "SimplexChain",
  },
  {
    id: "simplicity-coin",
    symbol: "spl",
    name: "Simplicity Coin",
  },
  {
    id: "simpli-finance",
    symbol: "simpli",
    name: "Simpli Finance",
  },
  {
    id: "simply",
    symbol: "simply",
    name: "Simply",
  },
  {
    id: "simp-token",
    symbol: "simp",
    name: "Simp",
  },
  {
    id: "simracer-coin",
    symbol: "src",
    name: "Simracer Coin",
  },
  {
    id: "sin-city",
    symbol: "sin",
    name: "Sin City",
  },
  {
    id: "sinerium",
    symbol: "xnr",
    name: "Sinerium",
  },
  {
    id: "singer-community-coin",
    symbol: "SINGER",
    name: "Singer Community Coin",
  },
  {
    id: "single-finance",
    symbol: "single",
    name: "Single Finance",
  },
  {
    id: "sing-token",
    symbol: "sing",
    name: "Sing Token",
  },
  {
    id: "sing-token-avalanche",
    symbol: "sing",
    name: "Sing Token (Avalanche)",
  },
  {
    id: "sing-token-bsc",
    symbol: "sing",
    name: "Sing Token (BSC)",
  },
  {
    id: "sing-token-ftm",
    symbol: "sing",
    name: "Sing Token FTM",
  },
  {
    id: "singulardtv",
    symbol: "sngls",
    name: "SingularDTV",
  },
  {
    id: "singularity",
    symbol: "sgly",
    name: "Singularity",
  },
  {
    id: "singularitydao",
    symbol: "sdao",
    name: "SingularityDAO",
  },
  {
    id: "singularitynet",
    symbol: "agix",
    name: "SingularityNET",
  },
  {
    id: "sint-truidense-voetbalvereniging-fan-token",
    symbol: "stv",
    name: "Sint-Truidense Voetbalvereniging Fan Token",
  },
  {
    id: "sipher",
    symbol: "sipher",
    name: "Sipher",
  },
  {
    id: "siren",
    symbol: "si",
    name: "Siren",
  },
  {
    id: "sirin-labs-token",
    symbol: "srn",
    name: "Sirin Labs Token",
  },
  {
    id: "sirio",
    symbol: "SIR",
    name: "Sirio",
  },
  {
    id: "sirius-bond",
    symbol: "srsb",
    name: "Sirius Bond",
  },
  {
    id: "sishi-finance",
    symbol: "sishi",
    name: "Sishi Finance",
  },
  {
    id: "sivasspor",
    symbol: "siv",
    name: "Sivasspor",
  },
  {
    id: "sixeleven",
    symbol: "611",
    name: "SixEleven",
  },
  {
    id: "six-network",
    symbol: "six",
    name: "SIX Network",
  },
  {
    id: "sjwcoin",
    symbol: "sjw",
    name: "SJWCoin",
  },
  {
    id: "skale",
    symbol: "skl",
    name: "SKALE",
  },
  {
    id: "skey-network",
    symbol: "skey",
    name: "Skey Network",
  },
  {
    id: "skillchain",
    symbol: "ski",
    name: "Skillchain",
  },
  {
    id: "skinchain",
    symbol: "skc",
    name: "SKINCHAIN",
  },
  {
    id: "skincoin",
    symbol: "skin",
    name: "SkinCoin",
  },
  {
    id: "sklay",
    symbol: "sklay",
    name: "sKLAY",
  },
  {
    id: "skraps",
    symbol: "skrp",
    name: "Skraps",
  },
  {
    id: "skrumble-network",
    symbol: "skm",
    name: "Skrumble Network",
  },
  {
    id: "skull",
    symbol: "skull",
    name: "Skull",
  },
  {
    id: "skycoin",
    symbol: "sky",
    name: "Skycoin",
  },
  {
    id: "skyhub",
    symbol: "shb",
    name: "SkyHub",
  },
  {
    id: "skylight",
    symbol: "sltn",
    name: "Skylight",
  },
  {
    id: "skyrim-finance",
    symbol: "skyrim",
    name: "Skyrim Finance",
  },
  {
    id: "skyrocketing",
    symbol: "skyrocketing",
    name: "Skyrocketing",
  },
  {
    id: "sky-shiba",
    symbol: "sky",
    name: "Sky Shiba",
  },
  {
    id: "skywalker",
    symbol: "sky",
    name: "Skywalker",
  },
  {
    id: "skyward-finance",
    symbol: "skyward",
    name: "Skyward Finance",
  },
  {
    id: "skyx-token",
    symbol: "skyx",
    name: "SkyX Token",
  },
  {
    id: "sl3-token",
    symbol: "sl3",
    name: "Mammoth",
  },
  {
    id: "slam-token",
    symbol: "slam",
    name: "Slam Token",
  },
  {
    id: "slash-protocol",
    symbol: "slash",
    name: "Slash Protocol",
  },
  {
    id: "slavi-coin",
    symbol: "slv",
    name: "Slavi Coin",
  },
  {
    id: "sleepearn-finance",
    symbol: "sen",
    name: "SleepEarn Finance",
  },
  {
    id: "sleepy-shib",
    symbol: "sleepy-shib",
    name: "Sleepy-Shib",
  },
  {
    id: "sleepy-sloth",
    symbol: "sleepy",
    name: "Sleepy Sloth Finance",
  },
  {
    id: "slimcoin",
    symbol: "slm",
    name: "Slimcoin",
  },
  {
    id: "slink",
    symbol: "slink",
    name: "sLINK",
  },
  {
    id: "slink-labs",
    symbol: "slab",
    name: "Slink Labs",
  },
  {
    id: "slittle-rabbit",
    symbol: "sltrbt",
    name: "sLittle Rabbit",
  },
  {
    id: "slnv2",
    symbol: "slnv2",
    name: "SLNV2",
  },
  {
    id: "slothcoin",
    symbol: "sloth",
    name: "SlothCoin",
  },
  {
    id: "slt",
    symbol: "slt",
    name: "SLT",
  },
  {
    id: "slushie-capital",
    symbol: "slush",
    name: "Slushie Capital",
  },
  {
    id: "small-doge",
    symbol: "sdog",
    name: "Small Doge",
  },
  {
    id: "small-fish-cookie",
    symbol: "sfc",
    name: "Small Fish Cookie",
  },
  {
    id: "smart-busd",
    symbol: "sbusd",
    name: "Smart BUSD",
  },
  {
    id: "smartcash",
    symbol: "smart",
    name: "SmartCash",
  },
  {
    id: "smartchem",
    symbol: "smac",
    name: "Smartchem",
  },
  {
    id: "smartcoin-2",
    symbol: "smrt",
    name: "SmartCoin",
  },
  {
    id: "smart-coin-smrtr",
    symbol: "smrtr",
    name: "SmarterCoin",
  },
  {
    id: "smartcredit-token",
    symbol: "smartcredit",
    name: "SmartCredit Token",
  },
  {
    id: "smartlands",
    symbol: "slt",
    name: "Smartlands Network",
  },
  {
    id: "smartlink",
    symbol: "smak",
    name: "Smartlink",
  },
  {
    id: "smartlox",
    symbol: "smartlox",
    name: "SmartLOX",
  },
  {
    id: "smart-marketing-token",
    symbol: "smt",
    name: "Smart Marketing Token",
  },
  {
    id: "smart-medical-coin",
    symbol: "smc",
    name: "Smart Medical Coin",
  },
  {
    id: "smartmesh",
    symbol: "smt",
    name: "SmartMesh",
  },
  {
    id: "smart-mfg",
    symbol: "mfg",
    name: "Smart MFG",
  },
  {
    id: "smartnft",
    symbol: "smartnft",
    name: "SmartNFT",
  },
  {
    id: "smartofgiving",
    symbol: "aog",
    name: "smARTOFGIVING",
  },
  {
    id: "smartpad",
    symbol: "pad",
    name: "SmartPad",
  },
  {
    id: "smart-payment",
    symbol: "spay",
    name: "Smart Payment",
  },
  {
    id: "smartshare",
    symbol: "ssp",
    name: "Smartshare",
  },
  {
    id: "smart-shiba",
    symbol: "smartshib",
    name: "Smart Shiba",
  },
  {
    id: "smart-token",
    symbol: "smart",
    name: "Smart Token",
  },
  {
    id: "smart-trade-coin",
    symbol: "trade",
    name: "Smart Trade Coin",
  },
  {
    id: "smart-trade-networks",
    symbol: "stn5",
    name: "Smart Trade Networks",
  },
  {
    id: "smart-valor",
    symbol: "valor",
    name: "Smart Valor",
  },
  {
    id: "smart-wallet-token",
    symbol: "swt",
    name: "Smart Wallet Token",
  },
  {
    id: "smartway-finance",
    symbol: "smart",
    name: "Smartway.Finance",
  },
  {
    id: "smartworth",
    symbol: "smartworth",
    name: "Smartworth",
  },
  {
    id: "smartx",
    symbol: "sat",
    name: "SmartX",
  },
  {
    id: "smarty-pay",
    symbol: "spy",
    name: "Smarty Pay",
  },
  {
    id: "smash-cash",
    symbol: "smash",
    name: "Smash Cash",
  },
  {
    id: "smash-token",
    symbol: "sas",
    name: "Smashchain",
  },
  {
    id: "smaugs-nft",
    symbol: "smg",
    name: "Smaugs NFT",
  },
  {
    id: "smd-coin",
    symbol: "smd",
    name: "SMD Coin",
  },
  {
    id: "smegmars",
    symbol: "SMGM",
    name: "SMEGMARS",
  },
  {
    id: "smilecoin",
    symbol: "sec",
    name: "Smilecoin",
  },
  {
    id: "smile-coin",
    symbol: "smile",
    name: "Smile Coin",
  },
  {
    id: "smile-token",
    symbol: "smile",
    name: "Smile Token",
  },
  {
    id: "smileycoin",
    symbol: "smly",
    name: "Smileycoin",
  },
  {
    id: "smoke",
    symbol: "smoke",
    name: "Smoke",
  },
  {
    id: "smoke-high",
    symbol: "smoke",
    name: "Smoke High",
  },
  {
    id: "smol",
    symbol: "smol",
    name: "smol",
  },
  {
    id: "smooth-love-potion",
    symbol: "slp",
    name: "Smooth Love Potion",
  },
  {
    id: "smooth-love-potion-wormhole",
    symbol: "slp",
    name: "Smooth Love Potion (Wormhole)",
  },
  {
    id: "smoothy",
    symbol: "smty",
    name: "Smoothy",
  },
  {
    id: "smscodes",
    symbol: "smsct",
    name: "SMSCodes",
  },
  {
    id: "smugdoge",
    symbol: "smug",
    name: "SmugDoge",
  },
  {
    id: "snake",
    symbol: "GSK",
    name: "SNAKE",
  },
  {
    id: "snakes-on-a-nft-game",
    symbol: "snakes",
    name: "Snakes On A NFT Game",
  },
  {
    id: "snake-token",
    symbol: "snk",
    name: "Snake Token",
  },
  {
    id: "snapex",
    symbol: "snap",
    name: "SnapEx",
  },
  {
    id: "snapparazzi",
    symbol: "rno",
    name: "Earneo",
  },
  {
    id: "snap-token",
    symbol: "snap",
    name: "SNAP!",
  },
  {
    id: "snetwork",
    symbol: "snet",
    name: "Snetwork",
  },
  {
    id: "snglsdao-governance-token",
    symbol: "sgt",
    name: "snglsDAO Governance Token",
  },
  {
    id: "snook",
    symbol: "snk",
    name: "Snook",
  },
  {
    id: "snoopdao",
    symbol: "snoop",
    name: "SnoopDAO",
  },
  {
    id: "snoopdoge",
    symbol: "snoop",
    name: "SnoopDoge",
  },
  {
    id: "snoop-doge",
    symbol: "snoge",
    name: "Snoop Doge",
  },
  {
    id: "snovio",
    symbol: "snov",
    name: "Snovian.Space",
  },
  {
    id: "snowballtoken",
    symbol: "snowball",
    name: "Snowball Token",
  },
  {
    id: "snowball-token",
    symbol: "snob",
    name: "Snowball",
  },
  {
    id: "snowballxyz",
    symbol: "sno",
    name: "Snowball-Snowbank",
  },
  {
    id: "snowbank",
    symbol: "sb",
    name: "Snowbank",
  },
  {
    id: "snowbear",
    symbol: "sbr",
    name: "Snowbear",
  },
  {
    id: "snowblossom",
    symbol: "snow",
    name: "SnowBlossom",
  },
  {
    id: "snowcrash-token",
    symbol: "nora",
    name: "SnowCrash Token",
  },
  {
    id: "snowdog",
    symbol: "sdog",
    name: "Snowdog",
  },
  {
    id: "snowgem",
    symbol: "tent",
    name: "TENT",
  },
  {
    id: "snowswap",
    symbol: "SNOW",
    name: "Snowswap",
  },
  {
    id: "snx-debt-mirror",
    symbol: "dsnx",
    name: "SNX Debt Mirror",
  },
  {
    id: "soakmont",
    symbol: "soak",
    name: "Soakmont",
  },
  {
    id: "soar-2",
    symbol: "soar",
    name: "Soar",
  },
  {
    id: "soba-token",
    symbol: "soba",
    name: "SOBA Token",
  },
  {
    id: "soccerhub",
    symbol: "sch",
    name: "SoccerHub",
  },
  {
    id: "soccer-infinity",
    symbol: "SOCIN",
    name: "Soccer Infinity",
  },
  {
    id: "socean-staked-sol",
    symbol: "scnsol",
    name: "Socean Staked Sol",
  },
  {
    id: "social-capitalism",
    symbol: "socap",
    name: "Social Capitalism",
  },
  {
    id: "social-finance",
    symbol: "sofi",
    name: "Social Finance",
  },
  {
    id: "social-good-project",
    symbol: "sg",
    name: "SocialGood",
  },
  {
    id: "sociall",
    symbol: "scl",
    name: "Sociall",
  },
  {
    id: "social-rocket",
    symbol: "rocks",
    name: "Social Rocket",
  },
  {
    id: "social-send",
    symbol: "send",
    name: "Social Send",
  },
  {
    id: "socialx-2",
    symbol: "sosx",
    name: "SocialX",
  },
  {
    id: "society-of-galactic-exploration",
    symbol: "sge",
    name: "Society of Galactic Exploration",
  },
  {
    id: "soda-coin",
    symbol: "soc",
    name: "SODA Coin",
  },
  {
    id: "sodium-vault-nftx",
    symbol: "sodium",
    name: "SODIUM Vault (NFTX)",
  },
  {
    id: "soft-bitcoin",
    symbol: "sbtc",
    name: "Soft Bitcoin",
  },
  {
    id: "softchain",
    symbol: "scc",
    name: "SoftChain",
  },
  {
    id: "soft-yearn",
    symbol: "syfi",
    name: "Soft Yearn",
  },
  {
    id: "soga-project",
    symbol: "soga",
    name: "SOGA Project",
  },
  {
    id: "soge",
    symbol: "soge",
    name: "SOGE",
  },
  {
    id: "sokuswap",
    symbol: "soku",
    name: "SokuSwap",
  },
  {
    id: "solabrador",
    symbol: "SOLAB",
    name: "Solabrador",
  },
  {
    id: "solace",
    symbol: "solace",
    name: "SOLACE",
  },
  {
    id: "solace-coin",
    symbol: "solace",
    name: "Solace Coin",
  },
  {
    id: "solalambo",
    symbol: "sob",
    name: "SolaLambo",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
  },
  {
    id: "solana-inu",
    symbol: "inu",
    name: "Solana Inu",
  },
  {
    id: "solana-nut",
    symbol: "SOLNUT",
    name: "Solana Nut",
  },
  {
    id: "solana-paws",
    symbol: "paws",
    name: "Solana Paws",
  },
  {
    id: "solanasail-governance-token",
    symbol: "gsail",
    name: "SolanaSail Governance Token",
  },
  {
    id: "solanax",
    symbol: "sold",
    name: "Solanax",
  },
  {
    id: "sola-ninja",
    symbol: "snj",
    name: "Sola Ninja",
  },
  {
    id: "solanium",
    symbol: "slim",
    name: "Solanium",
  },
  {
    id: "solanyx",
    symbol: "SYX",
    name: "Solanyx",
  },
  {
    id: "solape-token",
    symbol: "solape",
    name: "SOLAPE Token",
  },
  {
    id: "solar",
    symbol: "solar",
    name: "Solar",
  },
  {
    id: "solarbeam",
    symbol: "solar",
    name: "Solarbeam",
  },
  {
    id: "solar-bear",
    symbol: "solbear",
    name: "Solar Bear",
  },
  {
    id: "solar-dao",
    symbol: "sdao",
    name: "Solar DAO",
  },
  {
    id: "solar-energy",
    symbol: "seg",
    name: "Solar Energy",
  },
  {
    id: "solareum",
    symbol: "slrm",
    name: "Solareum",
  },
  {
    id: "solareum-wallet",
    symbol: "xsb",
    name: "Solareum Wallet",
  },
  {
    id: "solarfare",
    symbol: "slf",
    name: "Solarfare",
  },
  {
    id: "solar-full-cycle",
    symbol: "SFC",
    name: "Solar Full Cycle",
  },
  {
    id: "solaris",
    symbol: "xlr",
    name: "Solaris",
  },
  {
    id: "solarite",
    symbol: "solarite",
    name: "Solarite",
  },
  {
    id: "solarmine",
    symbol: "solar",
    name: "Solarmine",
  },
  {
    id: "solarminex",
    symbol: "smx",
    name: "SolarMineX",
  },
  {
    id: "solarmoon",
    symbol: "solar",
    name: "Solarmoon",
  },
  {
    id: "solarys",
    symbol: "sola",
    name: "Solarys",
  },
  {
    id: "sola-token",
    symbol: "sola",
    name: "SOLA Token",
  },
  {
    id: "sol-baby-doge",
    symbol: "SBABYDOGE",
    name: "SOL Baby Doge",
  },
  {
    id: "solbank-token",
    symbol: "sbnk",
    name: "Solbank Token",
  },
  {
    id: "solberg",
    symbol: "slb",
    name: "Solberg",
  },
  {
    id: "solberry",
    symbol: "solberry",
    name: "SolBerry",
  },
  {
    id: "solbit",
    symbol: "sbt",
    name: "SOLBIT",
  },
  {
    id: "solcash",
    symbol: "solcash",
    name: "SOLCash",
  },
  {
    id: "solcats",
    symbol: "meow",
    name: "Solcats",
  },
  {
    id: "solchicks-token",
    symbol: "chicks",
    name: "SolChicks Token",
  },
  {
    id: "solclout",
    symbol: "sct",
    name: "SolClout",
  },
  {
    id: "solcondoms",
    symbol: "condoms",
    name: "SolCondoms",
  },
  {
    id: "solcubator",
    symbol: "solc",
    name: "Solcubator",
  },
  {
    id: "soldait",
    symbol: "sit",
    name: "Soldait",
  },
  {
    id: "soldate-token",
    symbol: "date",
    name: "SolDate Token",
  },
  {
    id: "soldex",
    symbol: "solx",
    name: "Soldex",
  },
  {
    id: "soldiernodes",
    symbol: "sld",
    name: "SoldierNodes",
  },
  {
    id: "soldiersland",
    symbol: "sld",
    name: "SoldiersLand",
  },
  {
    id: "soldo",
    symbol: "sld",
    name: "Soldo",
  },
  {
    id: "soldoge",
    symbol: "sdoge",
    name: "SolDoge",
  },
  {
    id: "solend",
    symbol: "slnd",
    name: "Solend",
  },
  {
    id: "solex-finance",
    symbol: "slx",
    name: "Solex Finance",
  },
  {
    id: "solfarm",
    symbol: "tulip",
    name: "Tulip Protocol",
  },
  {
    id: "solfina",
    symbol: "solfi",
    name: "Solfina",
  },
  {
    id: "solfire-finance",
    symbol: "fire",
    name: "Solfire Finance",
  },
  {
    id: "sol-fox",
    symbol: "sfox",
    name: "Sol Fox",
  },
  {
    id: "solice",
    symbol: "slc",
    name: "Solice",
  },
  {
    id: "solideth",
    symbol: "solideth",
    name: "SolidETH",
  },
  {
    id: "soliditylabs",
    symbol: "soliditylabs",
    name: "SolidityLabs",
  },
  {
    id: "solid-protocol",
    symbol: "solid",
    name: "Solid Protocol",
  },
  {
    id: "solidray-finance",
    symbol: "SRT",
    name: "Solidray Finance",
  },
  {
    id: "solidus",
    symbol: "slds",
    name: "Solidus",
  },
  {
    id: "solit",
    symbol: "slt",
    name: "Solit",
  },
  {
    id: "solium-rise",
    symbol: "solar",
    name: "Solium Rise",
  },
  {
    id: "solminter",
    symbol: "smrt",
    name: "Solminter",
  },
  {
    id: "solmoon",
    symbol: "solmo",
    name: "SolMoon",
  },
  {
    id: "solo-coin",
    symbol: "solo",
    name: "Sologenic",
  },
  {
    id: "solomon-defi",
    symbol: "slm",
    name: "Solomon Defi",
  },
  {
    id: "solootbox-dao",
    symbol: "box",
    name: "Solootbox DAO",
  },
  {
    id: "solo-vault-nftx",
    symbol: "solo",
    name: "SOLO Vault (NFTX)",
  },
  {
    id: "solpad-finance",
    symbol: "solpad",
    name: "Solpad Finance",
  },
  {
    id: "solpay-finance",
    symbol: "solpay",
    name: "SolPay Finance",
  },
  {
    id: "solrazr",
    symbol: "solr",
    name: "SolRazr",
  },
  {
    id: "solrider",
    symbol: "srd",
    name: "SolRider",
  },
  {
    id: "solrise-finance",
    symbol: "slrs",
    name: "Solrise Finance",
  },
  {
    id: "solster",
    symbol: "str",
    name: "Solster",
  },
  {
    id: "soltato-fries",
    symbol: "fries",
    name: "Soltato FRIES",
  },
  {
    id: "solum",
    symbol: "solum",
    name: "Solum",
  },
  {
    id: "solve-care",
    symbol: "solve",
    name: "SOLVE",
  },
  {
    id: "solvent",
    symbol: "svt",
    name: "Solvent",
  },
  {
    id: "solview",
    symbol: "solv",
    name: "Solview",
  },
  {
    id: "sol-wormhole",
    symbol: "sol",
    name: "SOL (Wormhole)",
  },
  {
    id: "solx-gaming-guild",
    symbol: "sgg",
    name: "SolX Gaming Guild",
  },
  {
    id: "solyard-finance",
    symbol: "yard",
    name: "Solyard Finance",
  },
  {
    id: "somax",
    symbol: "smx",
    name: "Somax",
  },
  {
    id: "sombe",
    symbol: "sbe",
    name: "Sombe",
  },
  {
    id: "sombra-network",
    symbol: "smbr",
    name: "Sombra",
  },
  {
    id: "somee-advertising-token",
    symbol: "sat",
    name: "SoMee Advertising Token",
  },
  {
    id: "somee-social",
    symbol: "somee",
    name: "SoMee.Social",
  },
  {
    id: "somee-social-old",
    symbol: "ong",
    name: "SoMee.Social [OLD]",
  },
  {
    id: "somesing",
    symbol: "ssx",
    name: "SOMESING",
  },
  {
    id: "somidax",
    symbol: "smdx",
    name: "SOMIDAX",
  },
  {
    id: "somnium",
    symbol: "som",
    name: "Somnium",
  },
  {
    id: "somnium-space-cubes",
    symbol: "cube",
    name: "Somnium Space CUBEs",
  },
  {
    id: "sona-network",
    symbol: "sona",
    name: "Sona Network",
  },
  {
    id: "sonar",
    symbol: "ping",
    name: "Sonar",
  },
  {
    id: "sonarwatch",
    symbol: "sonar",
    name: "SonarWatch",
  },
  {
    id: "sone-finance",
    symbol: "sone",
    name: "S-ONE Finance",
  },
  {
    id: "songbird",
    symbol: "sgb",
    name: "Songbird",
  },
  {
    id: "songcoin",
    symbol: "song",
    name: "SongCoin",
  },
  {
    id: "sonic",
    symbol: "sonic",
    name: "Sonic",
  },
  {
    id: "sonic-token",
    symbol: "sonic",
    name: "Sonic Token",
  },
  {
    id: "sonm",
    symbol: "snm",
    name: "SONM",
  },
  {
    id: "sono",
    symbol: "sono",
    name: "SONO",
  },
  {
    id: "sonocoin",
    symbol: "sono",
    name: "SonoCoin",
  },
  {
    id: "son-of-doge-v2",
    symbol: "SODV2",
    name: "Son of Doge V2",
  },
  {
    id: "son-of-elon",
    symbol: "soe",
    name: "Son of Elon",
  },
  {
    id: "sonofsaitama",
    symbol: "sos",
    name: "SonOfSaitama",
  },
  {
    id: "sonofshib",
    symbol: "son",
    name: "SONofSHIB",
  },
  {
    id: "sopay",
    symbol: "sop",
    name: "SoPay",
  },
  {
    id: "sophiatx",
    symbol: "sphtx",
    name: "SophiaTX",
  },
  {
    id: "sora",
    symbol: "xor",
    name: "Sora",
  },
  {
    id: "sorachancoin",
    symbol: "sora",
    name: "SorachanCoin",
  },
  {
    id: "sora-synthetic-usd",
    symbol: "xstusd",
    name: "SORA Synthetic USD",
  },
  {
    id: "sora-validator-token",
    symbol: "val",
    name: "Sora Validator Token",
  },
  {
    id: "sos-foundation",
    symbol: "sos",
    name: "SOS Foundation",
  },
  {
    id: "sota-finance",
    symbol: "sota",
    name: "SOTA Finance",
  },
  {
    id: "soteria",
    symbol: "wsote",
    name: "Soteria",
  },
  {
    id: "soulocoin",
    symbol: "soulo",
    name: "SouloCoin",
  },
  {
    id: "soul-swap",
    symbol: "soul",
    name: "Soul Swap",
  },
  {
    id: "sound-coin",
    symbol: "sound",
    name: "Sound Coin",
  },
  {
    id: "south-african-tether",
    symbol: "xzar",
    name: "South African Tether",
  },
  {
    id: "southxchange-coin",
    symbol: "sxcc",
    name: "SouthXchange Coin",
  },
  {
    id: "sov",
    symbol: "sov",
    name: "SOV",
  },
  {
    id: "sovereign-coin",
    symbol: "sov",
    name: "Sovereign Coin",
  },
  {
    id: "sovi-token",
    symbol: "sovi",
    name: "Sovi Token",
  },
  {
    id: "sovranocoin",
    symbol: "svr",
    name: "SovranoCoin",
  },
  {
    id: "sovreign-governance-token",
    symbol: "reign",
    name: "Sovreign Governance Token",
  },
  {
    id: "sovryn",
    symbol: "sov",
    name: "Sovryn",
  },
  {
    id: "space",
    symbol: "space",
    name: "Space",
  },
  {
    id: "spaceballs",
    symbol: "balls",
    name: "SpaceBalls",
  },
  {
    id: "spacechain-erc-20",
    symbol: "spc",
    name: "SpaceChain (ERC-20)",
  },
  {
    id: "spacecoin",
    symbol: "space",
    name: "Spacecoin",
  },
  {
    id: "spacecorgi",
    symbol: "scorgi",
    name: "SpaceCorgi",
  },
  {
    id: "spacecowboy",
    symbol: "scb",
    name: "SpaceCowBoy",
  },
  {
    id: "space-crypto",
    symbol: "spg",
    name: "Space Crypto",
  },
  {
    id: "spacedawgs",
    symbol: "dawgs",
    name: "SpaceDawgs",
  },
  {
    id: "space-dog",
    symbol: "Space dog",
    name: "Space dog",
  },
  {
    id: "space-doge",
    symbol: "spacedoge",
    name: "Space Doge",
  },
  {
    id: "space-dollars",
    symbol: "sdollar",
    name: "Space Dollars",
  },
  {
    id: "spacefalcon",
    symbol: "fcon",
    name: "SpaceFalcon",
  },
  {
    id: "spacegoat-token",
    symbol: "sgt",
    name: "SpaceGoat Token",
  },
  {
    id: "spacegrime",
    symbol: "grimex",
    name: "SpaceGrime",
  },
  {
    id: "space-hamster",
    symbol: "hams",
    name: "Space Hamster",
  },
  {
    id: "space-iz",
    symbol: "spiz",
    name: "SPACE-iZ",
  },
  {
    id: "spacelens",
    symbol: "space",
    name: "Spacelens",
  },
  {
    id: "space-link",
    symbol: "splink",
    name: "Space Link",
  },
  {
    id: "space-monkey",
    symbol: "spmk",
    name: "Space Monkey",
  },
  {
    id: "space-monkey-token",
    symbol: "MONKE",
    name: "Space Monkey Token",
  },
  {
    id: "spaceport-coin",
    symbol: "spc",
    name: "SpacePort Coin",
  },
  {
    id: "spaceport-universe",
    symbol: "spu",
    name: "SpacePort Universe",
  },
  {
    id: "spacerat",
    symbol: "srat",
    name: "SpaceRat",
  },
  {
    id: "spaceship-war",
    symbol: "spw",
    name: "Spaceship War",
  },
  {
    id: "space-sip",
    symbol: "sip",
    name: "Space SIP",
  },
  {
    id: "space-soldier",
    symbol: "soldier",
    name: "Space Soldier",
  },
  {
    id: "spaceswap-milk2",
    symbol: "milk2",
    name: "Spaceswap MILK2",
  },
  {
    id: "spaceswap-shake",
    symbol: "shake",
    name: "Spaceswap SHAKE",
  },
  {
    id: "spacetoast",
    symbol: "spacetoast",
    name: "SpaceToast",
  },
  {
    id: "space-token",
    symbol: "space",
    name: "Space Token",
  },
  {
    id: "space-token-bsc",
    symbol: "space",
    name: "Space Token BSC",
  },
  {
    id: "spacevikings",
    symbol: "svt",
    name: "SpaceVikings",
  },
  {
    id: "spacex-floki",
    symbol: "xfloki",
    name: "SpaceX Floki",
  },
  {
    id: "spacexlife",
    symbol: "safe",
    name: "SpaceXliFe",
  },
  {
    id: "spacey-2025",
    symbol: "spay",
    name: "SpaceY 2025",
  },
  {
    id: "spaghetti",
    symbol: "pasta",
    name: "Spaghetti",
  },
  {
    id: "spain-national-fan-token",
    symbol: "snft",
    name: "Spain National Fan Token",
  },
  {
    id: "spankchain",
    symbol: "spank",
    name: "SpankChain",
  },
  {
    id: "spantale",
    symbol: "AEL",
    name: "Spantale",
  },
  {
    id: "sparda-wallet",
    symbol: "spw",
    name: "Sparda Wallet",
  },
  {
    id: "sparklab",
    symbol: "spark",
    name: "SparkLab",
  },
  {
    id: "sparkle",
    symbol: "sprkl",
    name: "Sparkle Loyalty",
  },
  {
    id: "sparkle-coin",
    symbol: "sctk",
    name: "Sparkle Coin",
  },
  {
    id: "sparkleswap-rewards",
    symbol: "✨",
    name: "Sparkleswap Rewards",
  },
  {
    id: "sparkpoint",
    symbol: "srk",
    name: "SparkPoint",
  },
  {
    id: "sparkpoint-fuel",
    symbol: "sfuel",
    name: "SparkPoint Fuel",
  },
  {
    id: "sparks",
    symbol: "spk",
    name: "SparksPay",
  },
  {
    id: "sparta",
    symbol: "spar",
    name: "Sparta",
  },
  {
    id: "spartacus",
    symbol: "spa",
    name: "Spartacus",
  },
  {
    id: "spartan",
    symbol: "300",
    name: "Spartan",
  },
  {
    id: "spartancoin",
    symbol: "spn",
    name: "SpartanCoin",
  },
  {
    id: "spartan-protocol-token",
    symbol: "sparta",
    name: "Spartan Protocol Token",
  },
  {
    id: "spartan-token",
    symbol: "spa",
    name: "Spartan Token",
  },
  {
    id: "spectra",
    symbol: "spc",
    name: "Spectra",
  },
  {
    id: "spectrecoin",
    symbol: "alias",
    name: "Alias",
  },
  {
    id: "spectre-dividend-token",
    symbol: "sxdt",
    name: "Spectre.ai Dividend Token",
  },
  {
    id: "spectresecuritycoin",
    symbol: "xspc",
    name: "SpectreSecurityCoin",
  },
  {
    id: "spectre-utility-token",
    symbol: "sxut",
    name: "Spectre.ai Utility Token",
  },
  {
    id: "spectrum",
    symbol: "spt",
    name: "SPECTRUM",
  },
  {
    id: "spectrum-cash",
    symbol: "xsm",
    name: "Spectrum Cash",
  },
  {
    id: "spectrum-token",
    symbol: "spec",
    name: "Spectrum Token",
  },
  {
    id: "speedcash",
    symbol: "scs",
    name: "Speedcash",
  },
  {
    id: "speed-coin",
    symbol: "speed",
    name: "Speed Coin",
  },
  {
    id: "speed-mining-service",
    symbol: "sms",
    name: "Speed Mining Service",
  },
  {
    id: "spellfire",
    symbol: "spellfire",
    name: "Spellfire",
  },
  {
    id: "spellprinter",
    symbol: "spellp",
    name: "SpellPrinter",
  },
  {
    id: "spell-token",
    symbol: "spell",
    name: "Spell Token",
  },
  {
    id: "spell-token-wormhole",
    symbol: "spell",
    name: "Spell Token (Wormhole)",
  },
  {
    id: "spendcoin",
    symbol: "spnd",
    name: "Spendcoin",
  },
  {
    id: "spender-x",
    symbol: "spdx",
    name: "SPENDER-X",
  },
  {
    id: "sperax",
    symbol: "spa",
    name: "Sperax",
  },
  {
    id: "sperax-usd",
    symbol: "usds",
    name: "Sperax USD",
  },
  {
    id: "sphere",
    symbol: "sphr",
    name: "Sphere",
  },
  {
    id: "sphere-social",
    symbol: "sat",
    name: "Social Activity Token",
  },
  {
    id: "spherium",
    symbol: "sphri",
    name: "Spherium",
  },
  {
    id: "spheroid-universe",
    symbol: "sph",
    name: "Spheroid Universe",
  },
  {
    id: "sphinxel",
    symbol: "spx",
    name: "Sphinxel",
  },
  {
    id: "sphynx",
    symbol: "sphynx",
    name: "Sphynx",
  },
  {
    id: "sphynx-eth",
    symbol: "sphynx",
    name: "Sphynx ETH",
  },
  {
    id: "sphynx-network",
    symbol: "sph",
    name: "Sphynx Network",
  },
  {
    id: "spice",
    symbol: "spice",
    name: "Spice Token",
  },
  {
    id: "spice-dao",
    symbol: "spice",
    name: "Spice DAO",
  },
  {
    id: "spice-finance",
    symbol: "spice",
    name: "SPICE",
  },
  {
    id: "spiderdao",
    symbol: "spdr",
    name: "SpiderDAO",
  },
  {
    id: "spideyfloki",
    symbol: "spideyxmas",
    name: "SpideyFloki",
  },
  {
    id: "spidey-inu",
    symbol: "spidey inu",
    name: "Spidey Inu",
  },
  {
    id: "spike-inu",
    symbol: "spki",
    name: "Spike Inu",
  },
  {
    id: "spiking",
    symbol: "spike",
    name: "Spiking",
  },
  {
    id: "spin",
    symbol: "spin",
    name: "SPIN",
  },
  {
    id: "spinada-cash",
    symbol: "spin",
    name: "Spinada Cash",
  },
  {
    id: "spindle",
    symbol: "spd",
    name: "SPINDLE",
  },
  {
    id: "spintop",
    symbol: "spin",
    name: "Spintop",
  },
  {
    id: "spiral",
    symbol: "spr",
    name: "Spiral",
  },
  {
    id: "spiritdao-ghost",
    symbol: "ghost",
    name: "SpiritDAO Ghost",
  },
  {
    id: "spirit-orb-pets-care-token",
    symbol: "care",
    name: "Spirit Orb Pets Care Token",
  },
  {
    id: "spiritswap",
    symbol: "spirit",
    name: "SpiritSwap",
  },
  {
    id: "splash",
    symbol: "spl",
    name: "Splash",
  },
  {
    id: "splinterlands",
    symbol: "sps",
    name: "Splinterlands",
  },
  {
    id: "splyt",
    symbol: "shopx",
    name: "Splyt",
  },
  {
    id: "spongebob-square",
    symbol: "spongs",
    name: "SpongeBob Square",
  },
  {
    id: "sponsee",
    symbol: "spon",
    name: "Sponsee",
  },
  {
    id: "spookeletons-token",
    symbol: "spkl",
    name: "Spookeletons Token",
  },
  {
    id: "spooky10000",
    symbol: "SPK10k",
    name: "Spooky10000",
  },
  {
    id: "spooky-inu",
    symbol: "spook",
    name: "Spooky Inu",
  },
  {
    id: "spookyshiba",
    symbol: "spookyshiba",
    name: "SpookyShiba",
  },
  {
    id: "spookyswap",
    symbol: "boo",
    name: "Spookyswap",
  },
  {
    id: "spool-dao-token",
    symbol: "spool",
    name: "Spool DAO Token",
  },
  {
    id: "spore",
    symbol: "spore",
    name: "Spore",
  },
  {
    id: "spores-network",
    symbol: "spo",
    name: "Spores Network",
  },
  {
    id: "sport-and-leisure",
    symbol: "snl",
    name: "Sport and Leisure",
  },
  {
    id: "sportemon-go",
    symbol: "sgo",
    name: "Sportemon Go",
  },
  {
    id: "sportium",
    symbol: "sprt",
    name: "Sportium",
  },
  {
    id: "sportsicon",
    symbol: "$icons",
    name: "SportsIcon",
  },
  {
    id: "spots",
    symbol: "spt",
    name: "Spots",
  },
  {
    id: "sprink",
    symbol: "sprink",
    name: "Sprink",
  },
  {
    id: "sprint-coin",
    symbol: "sprx",
    name: "Sprint Coin",
  },
  {
    id: "spritzcoin",
    symbol: "sprtz",
    name: "SpritzCoin",
  },
  {
    id: "sprouts",
    symbol: "sprts",
    name: "Sprouts",
  },
  {
    id: "sproutsextreme",
    symbol: "spex",
    name: "SproutsExtreme",
  },
  {
    id: "spunk-vault-nftx",
    symbol: "spunk",
    name: "SPUNK Vault (NFTX)",
  },
  {
    id: "spywolf",
    symbol: "$spy",
    name: "Spywolf",
  },
  {
    id: "sqgl-vault-nftx",
    symbol: "sqgl",
    name: "SQGL Vault (NFTX)",
  },
  {
    id: "square-token",
    symbol: "SQUA",
    name: "Square Token",
  },
  {
    id: "squeeze-token",
    symbol: "SQUEEZE",
    name: "Squeeze Token",
  },
  {
    id: "squid",
    symbol: "squid",
    name: "SquidDao",
  },
  {
    id: "squid-2",
    symbol: "squid",
    name: "SQUID Finance",
  },
  {
    id: "squidanomics",
    symbol: "squid",
    name: "Squidanomics",
  },
  {
    id: "squid-game",
    symbol: "squid",
    name: "Squid Game",
  },
  {
    id: "squidgame-token",
    symbol: "SQT",
    name: "Squidgame Token",
  },
  {
    id: "squid-inu",
    symbol: "squid",
    name: "Squid Inu",
  },
  {
    id: "squid-moon",
    symbol: "sqm",
    name: "Squid Moon",
  },
  {
    id: "squid-pet",
    symbol: "squidpet",
    name: "Squid Pet",
  },
  {
    id: "squirrel-finance",
    symbol: "nuts",
    name: "Squirrel Finance",
  },
  {
    id: "squirt-game",
    symbol: "SQUIRT",
    name: "Squirt Game",
  },
  {
    id: "squoge-coin",
    symbol: "sqc",
    name: "Squoge Coin",
  },
  {
    id: "srcoin",
    symbol: "srh",
    name: "SRH",
  },
  {
    id: "sriracha-inu",
    symbol: "sriracha",
    name: "Sriracha Inu",
  },
  {
    id: "srnartgallery",
    symbol: "sact",
    name: "srnArtGallery",
  },
  {
    id: "srnartgallery-tokenized-arts",
    symbol: "sista",
    name: "srnArtGallery Tokenized Arts",
  },
  {
    id: "srune",
    symbol: "srune",
    name: "sRUNE",
  },
  {
    id: "ssv-network",
    symbol: "ssv",
    name: "SSV Network",
  },
  {
    id: "stabilize",
    symbol: "stbz",
    name: "Stabilize",
  },
  {
    id: "stabilize-bsc",
    symbol: "stbb",
    name: "Stabilize BSC",
  },
  {
    id: "stabilize-token",
    symbol: "set",
    name: "Stabilize Token",
  },
  {
    id: "stabilize-usd",
    symbol: "susd",
    name: "Stabilize USD",
  },
  {
    id: "stabinol",
    symbol: "stol",
    name: "Stabinol",
  },
  {
    id: "stable-1inch",
    symbol: "one1inch",
    name: "Stable 1inch",
  },
  {
    id: "stable-asset",
    symbol: "sta",
    name: "STABLE ASSET",
  },
  {
    id: "stabledoc-token",
    symbol: "sdt",
    name: "Stabledoc Token",
  },
  {
    id: "stable-fil",
    symbol: "onefil",
    name: "Stable FIL",
  },
  {
    id: "stable-fox",
    symbol: "onefox",
    name: "Stable FOX",
  },
  {
    id: "stablegaj",
    symbol: "sgaj",
    name: "StableGaj",
  },
  {
    id: "stable-mph",
    symbol: "onemph",
    name: "Stable MPH",
  },
  {
    id: "stable-uni",
    symbol: "oneuni",
    name: "Stable UNI",
  },
  {
    id: "stableusd",
    symbol: "USDS",
    name: "Stably USD",
  },
  {
    id: "stablexswap",
    symbol: "stax",
    name: "StableXSwap",
  },
  {
    id: "stacker-ventures",
    symbol: "stack",
    name: "Stacker Ventures",
  },
  {
    id: "stackos",
    symbol: "stack",
    name: "StackOS",
  },
  {
    id: "stacktical",
    symbol: "dsla",
    name: "DSLA Protocol",
  },
  {
    id: "stack-treasury",
    symbol: "STACKT",
    name: "Stack Treasury",
  },
  {
    id: "stacy",
    symbol: "stacy",
    name: "Stacy",
  },
  {
    id: "stader",
    symbol: "sd",
    name: "Stader",
  },
  {
    id: "stadium",
    symbol: "std",
    name: "Stadium",
  },
  {
    id: "stadium-ape",
    symbol: "SAPE",
    name: "Stadium Ape",
  },
  {
    id: "stadium-pepe",
    symbol: "SPEP",
    name: "Stadium Pepe",
  },
  {
    id: "stafi",
    symbol: "fis",
    name: "Stafi",
  },
  {
    id: "stafi-ratom",
    symbol: "ratom",
    name: "StaFi rATOM",
  },
  {
    id: "stakd-token",
    symbol: "stkd",
    name: "Stakd Token",
  },
  {
    id: "stakeborg-dao",
    symbol: "standard",
    name: "Stakeborg DAO",
  },
  {
    id: "stakecube",
    symbol: "scc",
    name: "Stakecube",
  },
  {
    id: "staked-aave-balancer-pool-token",
    symbol: "stkabpt",
    name: "Staked Aave Balancer Pool Token",
  },
  {
    id: "stake-dao",
    symbol: "sdt",
    name: "Stake DAO",
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
  },
  {
    id: "staked-exodia",
    symbol: "sexod",
    name: "Staked Exodia",
  },
  {
    id: "staked-icx",
    symbol: "sICX",
    name: "Staked ICX",
  },
  {
    id: "staked-klima",
    symbol: "sklima",
    name: "Staked Klima",
  },
  {
    id: "staked-olympus",
    symbol: "sohm",
    name: "Staked Olympus",
  },
  {
    id: "staked-olympus-v1",
    symbol: "sohm",
    name: "Staked Olympus v1",
  },
  {
    id: "stakedthorus",
    symbol: "stho",
    name: "StakedThorus",
  },
  {
    id: "stakedxem",
    symbol: "stxem",
    name: "stakedXEM",
  },
  {
    id: "stakedzen",
    symbol: "stzen",
    name: "StakedZEN",
  },
  {
    id: "stakehound",
    symbol: "stfiro",
    name: "StakedFIRO",
  },
  {
    id: "stakehound-staked-ether",
    symbol: "steth",
    name: "StakeHound Staked Ether",
  },
  {
    id: "stakemoon",
    symbol: "SMOON",
    name: "Stakemoon",
  },
  {
    id: "stakenet",
    symbol: "xsn",
    name: "Stakenet",
  },
  {
    id: "staker",
    symbol: "str",
    name: "Staker Token",
  },
  {
    id: "staker-dao",
    symbol: "stkr",
    name: "Staker DAO",
  },
  {
    id: "stakewise",
    symbol: "swise",
    name: "StakeWise",
  },
  {
    id: "stakholders",
    symbol: "sh",
    name: "StakHolders",
  },
  {
    id: "stamen-tellus-token",
    symbol: "stt",
    name: "Stamen Tellus Token",
  },
  {
    id: "standard-protocol",
    symbol: "stnd",
    name: "Standard Protocol",
  },
  {
    id: "standard-token",
    symbol: "tst",
    name: "Standard Token",
  },
  {
    id: "stand-cash",
    symbol: "sac",
    name: "Stand Cash",
  },
  {
    id: "stand-share",
    symbol: "sas",
    name: "Stand Share",
  },
  {
    id: "star-atlas",
    symbol: "atlas",
    name: "Star Atlas",
  },
  {
    id: "star-atlas-dao",
    symbol: "polis",
    name: "Star Atlas DAO",
  },
  {
    id: "star-atlas-wormhole",
    symbol: "atlas",
    name: "Star Atlas (Wormhole)",
  },
  {
    id: "starbase",
    symbol: "star",
    name: "Starbase",
  },
  {
    id: "starbase-huobi",
    symbol: "se",
    name: "Starbase Huobi",
  },
  {
    id: "starbaseuniverse",
    symbol: "suni",
    name: "StarbaseUniverse",
  },
  {
    id: "starblock",
    symbol: "stb",
    name: "StarBlock",
  },
  {
    id: "starbots",
    symbol: "bot",
    name: "Starbots",
  },
  {
    id: "starbound",
    symbol: "sbd",
    name: "Starbound",
  },
  {
    id: "starbugs-shards",
    symbol: "bugs",
    name: "Starbugs Shards",
  },
  {
    id: "starchain",
    symbol: "stc",
    name: "StarChain",
  },
  {
    id: "starchi",
    symbol: "elixir",
    name: "Starchi",
  },
  {
    id: "starcoin",
    symbol: "stc",
    name: "Starcoin",
  },
  {
    id: "star-crunch",
    symbol: "starc",
    name: "Star Crunch",
  },
  {
    id: "stardust",
    symbol: "sd",
    name: "StarDust",
  },
  {
    id: "star-foxx",
    symbol: "foxx",
    name: "Star Foxx",
  },
  {
    id: "stargaze",
    symbol: "stars",
    name: "Stargaze",
  },
  {
    id: "stargaze-protocol",
    symbol: "stgz",
    name: "Stargaze Protocol",
  },
  {
    id: "stargazer-protocol",
    symbol: "stardust",
    name: "Stargazer Protocol",
  },
  {
    id: "stark-chain",
    symbol: "stark",
    name: "Stark Chain",
  },
  {
    id: "starlaunch",
    symbol: "stars",
    name: "StarLaunch",
  },
  {
    id: "starlink",
    symbol: "starl",
    name: "StarLink",
  },
  {
    id: "starminer-ore-token",
    symbol: "ore",
    name: "StarMiner ORE Token",
  },
  {
    id: "starmon-token",
    symbol: "smon",
    name: "StarMon Token",
  },
  {
    id: "starname",
    symbol: "iov",
    name: "Starname",
  },
  {
    id: "starplay",
    symbol: "stpc",
    name: "StarPlay",
  },
  {
    id: "starpunk",
    symbol: "srp",
    name: "Starpunk",
  },
  {
    id: "starsharks",
    symbol: "sss",
    name: "StarSharks",
  },
  {
    id: "starsharks-sea",
    symbol: "sea",
    name: "StarSharks SEA",
  },
  {
    id: "star-shib",
    symbol: "STARSB",
    name: "Star Shib",
  },
  {
    id: "starship",
    symbol: "starship",
    name: "StarShip",
  },
  {
    id: "star-ship-royal",
    symbol: "SSR",
    name: "Star Ship Royal",
  },
  {
    id: "starship-token",
    symbol: "stars",
    name: "StarShip Token",
  },
  {
    id: "starstream",
    symbol: "stars",
    name: "Starstream",
  },
  {
    id: "starterra",
    symbol: "stt",
    name: "StarTerra",
  },
  {
    id: "startfi",
    symbol: "stfi",
    name: "StartFi",
  },
  {
    id: "startup-boost-token",
    symbol: "subx",
    name: "Startup Boost Token",
  },
  {
    id: "start-vesting",
    symbol: "vest",
    name: "START Vesting",
  },
  {
    id: "star-wars-cat",
    symbol: "swcat",
    name: "Star Wars Cat",
  },
  {
    id: "starwire",
    symbol: "str",
    name: "Starwire",
  },
  {
    id: "starworks-global-ecosystem",
    symbol: "starx",
    name: "Starworks Global",
  },
  {
    id: "stasis-eurs",
    symbol: "eurs",
    name: "STASIS EURO",
  },
  {
    id: "stater",
    symbol: "str",
    name: "Stater",
  },
  {
    id: "statera",
    symbol: "sta",
    name: "Statera",
  },
  {
    id: "statik",
    symbol: "statik",
    name: "Statik",
  },
  {
    id: "status",
    symbol: "SNT",
    name: "Status",
  },
  {
    id: "stax-protocol",
    symbol: "stax",
    name: "Stax Protocol",
  },
  {
    id: "stay-in-destiny-world",
    symbol: "siw",
    name: "Stay In Destiny World",
  },
  {
    id: "staysafu",
    symbol: "safu",
    name: "StaySAFU",
  },
  {
    id: "steakbank-finance",
    symbol: "sbf",
    name: "SteakBank Finance",
  },
  {
    id: "steaks-finance",
    symbol: "steak",
    name: "Steaks Finance",
  },
  {
    id: "steak-token",
    symbol: "steak",
    name: "Steak Token",
  },
  {
    id: "stealthcoin",
    symbol: "xst",
    name: "Stealth",
  },
  {
    id: "steam-exchange",
    symbol: "steamx",
    name: "Steam Exchange",
  },
  {
    id: "steel",
    symbol: "steel",
    name: "Steel",
  },
  {
    id: "steem",
    symbol: "steem",
    name: "Steem",
  },
  {
    id: "steem-dollars",
    symbol: "sbd",
    name: "Steem Dollars",
  },
  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
  },
  {
    id: "stellar-diamond",
    symbol: "xld",
    name: "Stellar Diamond",
  },
  {
    id: "stellarinu",
    symbol: "stellarinu",
    name: "StellarInu",
  },
  {
    id: "stellar-invictus",
    symbol: "tryon",
    name: "Stellar Invictus",
  },
  {
    id: "stellarpayglobal",
    symbol: "xlpg",
    name: "StellarPayGlobal",
  },
  {
    id: "stellaswap",
    symbol: "stella",
    name: "StellaSwap",
  },
  {
    id: "stellite",
    symbol: "xla",
    name: "Scala",
  },
  {
    id: "stemx",
    symbol: "stemx",
    name: "STEMX",
  },
  {
    id: "step",
    symbol: "step",
    name: "Step",
  },
  {
    id: "step-finance",
    symbol: "step",
    name: "Step Finance",
  },
  {
    id: "step-hero",
    symbol: "hero",
    name: "Step Hero",
  },
  {
    id: "step-hero-soul",
    symbol: "step",
    name: "Step Hero Soul",
  },
  {
    id: "stib-token",
    symbol: "sti",
    name: "StiB",
  },
  {
    id: "stimmy",
    symbol: "STIMMY",
    name: "$STIMMY",
  },
  {
    id: "stimmy-protocol",
    symbol: "stimmy",
    name: "Stimmy Protocol",
  },
  {
    id: "sting",
    symbol: "stn",
    name: "Sting",
  },
  {
    id: "stingdefi",
    symbol: "sdfi",
    name: "StingDefi",
  },
  {
    id: "stipend",
    symbol: "spd",
    name: "Stipend",
  },
  {
    id: "stk",
    symbol: "stk",
    name: "STK",
  },
  {
    id: "stobox-token",
    symbol: "stbu",
    name: "Stobox Token",
  },
  {
    id: "ston",
    symbol: "ston",
    name: "Ston",
  },
  {
    id: "stoneage-nft",
    symbol: "ges",
    name: "Stoneage NFT",
  },
  {
    id: "stoner-doge",
    symbol: "stoge",
    name: "Stoner Doge Finance",
  },
  {
    id: "stone-token",
    symbol: "stn",
    name: "Stone Token",
  },
  {
    id: "stonk",
    symbol: "stonk",
    name: "Stonk Swap",
  },
  {
    id: "stonk-2",
    symbol: "stonk",
    name: "Stonk",
  },
  {
    id: "stonkbase",
    symbol: "sbf",
    name: "StonkBase",
  },
  {
    id: "stonkinu",
    symbol: "stonk",
    name: "StonkInu",
  },
  {
    id: "stonk-league",
    symbol: "",
    name: "Stonk League",
  },
  {
    id: "stonks",
    symbol: "stonk",
    name: "STONKS",
  },
  {
    id: "stopelon",
    symbol: "stopelon",
    name: "StopElon",
  },
  {
    id: "storage-area-network-anywhere",
    symbol: "sana",
    name: "Storage Area Network Anywhere",
  },
  {
    id: "store-of-value-token",
    symbol: "sov",
    name: "Store of Value Token",
  },
  {
    id: "storichain-token",
    symbol: "tori",
    name: "Storichain Token",
  },
  {
    id: "storiqa",
    symbol: "stq",
    name: "Storiqa",
  },
  {
    id: "storj",
    symbol: "storj",
    name: "Storj",
  },
  {
    id: "storks-token",
    symbol: "storks",
    name: "STORKS TOKEN",
  },
  {
    id: "storm",
    symbol: "stmx",
    name: "StormX",
  },
  {
    id: "storm-bringer-token",
    symbol: "stb",
    name: "Storm Bringer token",
  },
  {
    id: "storm-token",
    symbol: "storm",
    name: "Storm Token",
  },
  {
    id: "storx",
    symbol: "srx",
    name: "StorX",
  },
  {
    id: "story",
    symbol: "story",
    name: "Story",
  },
  {
    id: "stox",
    symbol: "stx",
    name: "Stox",
  },
  {
    id: "stp-network",
    symbol: "stpt",
    name: "STP Network",
  },
  {
    id: "strains",
    symbol: "sfn",
    name: "Strains",
  },
  {
    id: "straitsx-indonesia-rupiah",
    symbol: "xidr",
    name: "XIDR",
  },
  {
    id: "stratis",
    symbol: "strax",
    name: "Stratis",
  },
  {
    id: "stratos",
    symbol: "stos",
    name: "Stratos",
  },
  {
    id: "strayacoin",
    symbol: "nah",
    name: "Strayacoin",
  },
  {
    id: "stream-protocol",
    symbol: "stpl",
    name: "Stream Protocol",
  },
  {
    id: "streamr",
    symbol: "data",
    name: "Streamr",
  },
  {
    id: "streamr-xdata",
    symbol: "xdata",
    name: "Streamr XDATA",
  },
  {
    id: "stream-smart-business",
    symbol: "$SSB",
    name: "Stream Smart Business",
  },
  {
    id: "street-cred",
    symbol: "cred",
    name: "Street Cred",
  },
  {
    id: "strike",
    symbol: "strk",
    name: "Strike",
  },
  {
    id: "strikecoin",
    symbol: "strx",
    name: "StrikeX",
  },
  {
    id: "stripcoin",
    symbol: "strip",
    name: "StripCoin",
  },
  {
    id: "strip-finance",
    symbol: "strip",
    name: "Strip Finance",
  },
  {
    id: "strips-finance",
    symbol: "strp",
    name: "Strips Finance",
  },
  {
    id: "strite",
    symbol: "stri",
    name: "Strite",
  },
  {
    id: "strong",
    symbol: "strong",
    name: "Strong",
  },
  {
    id: "stronghands",
    symbol: "shnd",
    name: "StrongHands",
  },
  {
    id: "stronghands-finance",
    symbol: "ishnd",
    name: "StrongHands Finance",
  },
  {
    id: "stronghands-masternode",
    symbol: "shmn",
    name: "StrongHands Masternode",
  },
  {
    id: "stronghold",
    symbol: "strng",
    name: "StrongHold",
  },
  {
    id: "stronghold-token",
    symbol: "shx",
    name: "Stronghold Token",
  },
  {
    id: "strong-inu",
    symbol: "sinu",
    name: "Strong Inu",
  },
  {
    id: "strongnode",
    symbol: "sne",
    name: "StrongNode",
  },
  {
    id: "structure-finance",
    symbol: "stf",
    name: "Structure Finance",
  },
  {
    id: "strudel-finance",
    symbol: "trdl",
    name: "Strudel Finance",
  },
  {
    id: "studio-shibli",
    symbol: "shibli",
    name: "Studio Shibli",
  },
  {
    id: "studyum",
    symbol: "stud",
    name: "Studyum",
  },
  {
    id: "subgame",
    symbol: "sgb",
    name: "SubGame",
  },
  {
    id: "subme",
    symbol: "sub",
    name: "Subme",
  },
  {
    id: "substratum",
    symbol: "sub",
    name: "Substratum",
  },
  {
    id: "subx-finance",
    symbol: "sfx",
    name: "SUBX FINANCE LAB",
  },
  {
    id: "success-inu",
    symbol: "SUCCESS",
    name: "SUCCESS INU",
  },
  {
    id: "succor-coin",
    symbol: "succor",
    name: "Succor Coin",
  },
  {
    id: "sucrecoin",
    symbol: "xsr",
    name: "Sucrecoin",
  },
  {
    id: "sugarbounce",
    symbol: "tip",
    name: "SugarBounce",
  },
  {
    id: "sugarchain",
    symbol: "sugar",
    name: "Sugarchain",
  },
  {
    id: "sugarland",
    symbol: "sugar",
    name: "Sugarland [OLD]",
  },
  {
    id: "sugarland-token",
    symbol: "sugar",
    name: "Sugarland",
  },
  {
    id: "sukhavati-network",
    symbol: "skt",
    name: "Sukhavati Network",
  },
  {
    id: "suku",
    symbol: "SUKU",
    name: "SUKU",
  },
  {
    id: "sulgecoin",
    symbol: "sug",
    name: "Sulgecoin",
  },
  {
    id: "sumcoin",
    symbol: "sum",
    name: "Sumcoin",
  },
  {
    id: "summeris",
    symbol: "sum",
    name: "Summeris",
  },
  {
    id: "summit-defi",
    symbol: "summit",
    name: "Summit DeFi",
  },
  {
    id: "sumokoin",
    symbol: "sumo",
    name: "Sumokoin",
  },
  {
    id: "sumswap",
    symbol: "sum",
    name: "SumSwap",
  },
  {
    id: "sun",
    symbol: "sun",
    name: "SUN",
  },
  {
    id: "suncontract",
    symbol: "snc",
    name: "SunContract",
  },
  {
    id: "sundaeswap",
    symbol: "sundae",
    name: "SundaeSwap",
  },
  {
    id: "sunder-goverance-token",
    symbol: "sunder",
    name: "Sunder Goverance Token",
  },
  {
    id: "sunflower-farm",
    symbol: "sff",
    name: "Sunflower Farm",
  },
  {
    id: "sunflower-finance",
    symbol: "sfo",
    name: "Sunflower Finance",
  },
  {
    id: "suni",
    symbol: "suni",
    name: "SUNI",
  },
  {
    id: "sunny-aggregator",
    symbol: "sunny",
    name: "Sunny Aggregator",
  },
  {
    id: "sunrise",
    symbol: "sunc",
    name: "Sunrise",
  },
  {
    id: "sunshield",
    symbol: "sshld",
    name: "SunShield",
  },
  {
    id: "sun-token",
    symbol: "sun",
    name: "Sun Token",
  },
  {
    id: "supa-foundation",
    symbol: "supa",
    name: "SUPA Foundation",
  },
  {
    id: "supe-infinity",
    symbol: "supe",
    name: "Supe Infinity",
  },
  {
    id: "super8",
    symbol: "s8",
    name: "Super8",
  },
  {
    id: "super-algorithmic-token",
    symbol: "sato",
    name: "Super Algorithmic Token",
  },
  {
    id: "superalgos",
    symbol: "sa",
    name: "Superalgos",
  },
  {
    id: "superbid",
    symbol: "superbid",
    name: "SuperBid",
  },
  {
    id: "super-black-hole",
    symbol: "hole",
    name: "Super Black Hole",
  },
  {
    id: "superbnb-finance",
    symbol: "SPB",
    name: "SuperBNB.Finance [OLD]",
  },
  {
    id: "superbonds",
    symbol: "sb",
    name: "SuperBonds",
  },
  {
    id: "superbrain-capital-dao",
    symbol: "$sbc",
    name: "SuperBrain Capital Dao",
  },
  {
    id: "supercoin",
    symbol: "super",
    name: "SuperCoin",
  },
  {
    id: "super-coinview-token",
    symbol: "scv",
    name: "Super CoinView Token",
  },
  {
    id: "superdoge",
    symbol: "SUPDOG",
    name: "SuperDoge",
  },
  {
    id: "superfarm",
    symbol: "super",
    name: "SuperFarm",
  },
  {
    id: "super-floki",
    symbol: "sloki",
    name: "Super Floki",
  },
  {
    id: "superfuel",
    symbol: "sfuel",
    name: "SuperFuel",
  },
  {
    id: "super-heavy-booster-4",
    symbol: "shb4",
    name: "Super Heavy Booster 4",
  },
  {
    id: "super-hero",
    symbol: "sh",
    name: "Super Hero",
  },
  {
    id: "superinu",
    symbol: "sinu",
    name: "SuperInu",
  },
  {
    id: "superlaunch",
    symbol: "sla",
    name: "SUPERLAUNCH",
  },
  {
    id: "superlauncher-dao",
    symbol: "launch",
    name: "SuperLauncher DAO",
  },
  {
    id: "super-mario",
    symbol: "MARIO",
    name: "SUPER MARIO",
  },
  {
    id: "supermegahyperdoge",
    symbol: "smhdoge",
    name: "SuperMegaHyperDoge",
  },
  {
    id: "superminesweeper",
    symbol: "sm",
    name: "SuperMinesweeper",
  },
  {
    id: "supermoon",
    symbol: "osm",
    name: "Supermoon",
  },
  {
    id: "super-music-league",
    symbol: "sml",
    name: "Super Music League",
  },
  {
    id: "supernova",
    symbol: "snt",
    name: "Supernova",
  },
  {
    id: "superplayer-world",
    symbol: "honor",
    name: "SuperPlayer World",
  },
  {
    id: "superrare",
    symbol: "rare",
    name: "SuperRare",
  },
  {
    id: "super-saiya-jin",
    symbol: "ssj",
    name: "Super Saiya-jin",
  },
  {
    id: "super-saiyan-blue",
    symbol: "ssb",
    name: "Super Saiyan Blue",
  },
  {
    id: "super-shiba",
    symbol: "$sshiba",
    name: "Super Shiba",
  },
  {
    id: "superskynet",
    symbol: "ssn",
    name: "SuperSkyNet",
  },
  {
    id: "supersonic-finance",
    symbol: "ssn",
    name: "Supersonic Finance",
  },
  {
    id: "super-three-kingdoms",
    symbol: "stk",
    name: "Super Three Kingdoms",
  },
  {
    id: "supertron",
    symbol: "stro",
    name: "Supertron",
  },
  {
    id: "supertx-governance-token",
    symbol: "sup",
    name: "SuperTx Governance Token",
  },
  {
    id: "superwhale",
    symbol: "WAROO",
    name: "SuperWhale",
  },
  {
    id: "super-zero",
    symbol: "sero",
    name: "SERO",
  },
  {
    id: "support-doge",
    symbol: "supd",
    name: "Support Doge",
  },
  {
    id: "supra-token",
    symbol: "supra",
    name: "Supra Token",
  },
  {
    id: "suprenft",
    symbol: "snft",
    name: "SupreNFT",
  },
  {
    id: "suqa",
    symbol: "sin",
    name: "SINOVATE",
  },
  {
    id: "sureremit",
    symbol: "rmt",
    name: "SureRemit",
  },
  {
    id: "suretly",
    symbol: "sur",
    name: "Suretly",
  },
  {
    id: "surfexutilitytoken",
    symbol: "surf",
    name: "SurfExUtilityToken",
  },
  {
    id: "surf-finance",
    symbol: "surf",
    name: "Surf.Finance",
  },
  {
    id: "surfmoon",
    symbol: "surfmoon",
    name: "SurfMoon",
  },
  {
    id: "surge-inu",
    symbol: "SURGE",
    name: "Surge Inu",
  },
  {
    id: "surviving-soldiers",
    symbol: "ssg",
    name: "Surviving Soldiers",
  },
  {
    id: "sushi",
    symbol: "sushi",
    name: "Sushi",
  },
  {
    id: "sushiba",
    symbol: "sushiba",
    name: "Sushiba",
  },
  {
    id: "sushi-wormhole",
    symbol: "sushi",
    name: "Sushi (Wormhole)",
  },
  {
    id: "sustainable-energy-token",
    symbol: "set",
    name: "Sustainable Energy Token",
  },
  {
    id: "suteku",
    symbol: "suteku",
    name: "Suteku",
  },
  {
    id: "suterusu",
    symbol: "suter",
    name: "Suterusu",
  },
  {
    id: "suvereno",
    symbol: "suv",
    name: "Suvereno",
  },
  {
    id: "swace",
    symbol: "swace",
    name: "Swace",
  },
  {
    id: "swagbucks",
    symbol: "bucks",
    name: "SwagBucks",
  },
  {
    id: "swag-finance",
    symbol: "swag",
    name: "SWAG Finance",
  },
  {
    id: "swag-finance-wormhole",
    symbol: "swag",
    name: "SWAG Finance (Wormhole)",
  },
  {
    id: "swagg-network",
    symbol: "swagg",
    name: "Swagg Network",
  },
  {
    id: "s-wallet-protocol",
    symbol: "swp",
    name: "S-Wallet Protocol",
  },
  {
    id: "swamp-coin",
    symbol: "swamp",
    name: "Swamp Coin",
  },
  {
    id: "swampy",
    symbol: "swamp",
    name: "Swampy",
  },
  {
    id: "swanlana",
    symbol: "swan",
    name: "Swanlana",
  },
  {
    id: "swap",
    symbol: "xwp",
    name: "Swap",
  },
  {
    id: "swapall",
    symbol: "sap",
    name: "SwapAll",
  },
  {
    id: "swapdex",
    symbol: "sdx",
    name: "SwapDEX",
  },
  {
    id: "swaperry",
    symbol: "perry",
    name: "Swaperry",
  },
  {
    id: "swapfolio",
    symbol: "swfl",
    name: "Swapfolio",
  },
  {
    id: "swapmatic",
    symbol: "swam",
    name: "SwapMatic",
  },
  {
    id: "swapp",
    symbol: "swapp",
    name: "SWAPP Protocol",
  },
  {
    id: "swapr",
    symbol: "swpr",
    name: "Swapr",
  },
  {
    id: "swapship",
    symbol: "swsh",
    name: "SwapShip",
  },
  {
    id: "swaptoken",
    symbol: "token",
    name: "SwapToken",
  },
  {
    id: "swaptracker",
    symbol: "swpt",
    name: "SwapTracker",
  },
  {
    id: "swapx",
    symbol: "xwap",
    name: "SwapX",
  },
  {
    id: "swapz-app",
    symbol: "swapz",
    name: "SWAPZ.app",
  },
  {
    id: "swarm",
    symbol: "swm",
    name: "Swarm Network",
  },
  {
    id: "swarm-bzz",
    symbol: "bzz",
    name: "Swarm",
  },
  {
    id: "swarm-city",
    symbol: "swt",
    name: "Swarm City",
  },
  {
    id: "swarm-markets",
    symbol: "smt",
    name: "Swarm Markets",
  },
  {
    id: "swash",
    symbol: "swash",
    name: "Swash",
  },
  {
    id: "swass-finance",
    symbol: "swass",
    name: "SWASS Finance",
  },
  {
    id: "sway-social",
    symbol: "sway",
    name: "Sway Social",
  },
  {
    id: "sw-dao",
    symbol: "swd",
    name: "SW DAO",
  },
  {
    id: "sweetmoon",
    symbol: "$weeties",
    name: "Sweetmoon",
  },
  {
    id: "swerve-dao",
    symbol: "swrv",
    name: "Swerve",
  },
  {
    id: "swerve-protocol",
    symbol: "swerve",
    name: "SWERVE Protocol",
  },
  {
    id: "swftcoin",
    symbol: "swftc",
    name: "SWFTCOIN",
  },
  {
    id: "swgtoken",
    symbol: "swg",
    name: "SWGToken",
  },
  {
    id: "swiftcash",
    symbol: "swift",
    name: "SwiftCash",
  },
  {
    id: "swift-finance",
    symbol: "swift",
    name: "Swift Finance",
  },
  {
    id: "swiftlance-token",
    symbol: "swl",
    name: "Swiftlance Token",
  },
  {
    id: "swiftmoon",
    symbol: "smoon",
    name: "SwiftMoon",
  },
  {
    id: "swincoin",
    symbol: "swin",
    name: "SwinCoin",
  },
  {
    id: "swing",
    symbol: "swing",
    name: "Swing",
  },
  {
    id: "swingby",
    symbol: "SWINGBY",
    name: "Swingby",
  },
  {
    id: "swipe",
    symbol: "sxp",
    name: "Swipe",
  },
  {
    id: "swipe-network",
    symbol: "swipe",
    name: "SWIPE Network",
  },
  {
    id: "swipe-wormhole",
    symbol: "sxp",
    name: "Swipe (Wormhole)",
  },
  {
    id: "swipp",
    symbol: "swipp",
    name: "Swipp",
  },
  {
    id: "swirge",
    symbol: "swgb",
    name: "Swirge",
  },
  {
    id: "swirl-cash",
    symbol: "swirl",
    name: "Swirl Cash",
  },
  {
    id: "swirltoken",
    symbol: "SWIRL",
    name: "SwirlToken",
  },
  {
    id: "swissborg",
    symbol: "chsb",
    name: "SwissBorg",
  },
  {
    id: "swisscoin-classic",
    symbol: "sicc",
    name: "Swisscoin-Classic",
  },
  {
    id: "swiss-finance",
    symbol: "swiss",
    name: "swiss.finance",
  },
  {
    id: "switch",
    symbol: "esh",
    name: "Switch",
  },
  {
    id: "switcheo",
    symbol: "swth",
    name: "Switcheo",
  },
  {
    id: "swole-doge",
    symbol: "swole",
    name: "Swole Doge",
  },
  {
    id: "swop",
    symbol: "swop",
    name: "Swop",
  },
  {
    id: "swtcoin",
    symbol: "swat",
    name: "SWTCoin",
  },
  {
    id: "swusd",
    symbol: "swusd",
    name: "Swerve.fi USD",
  },
  {
    id: "swyft",
    symbol: "swyftt",
    name: "SWYFT",
  },
  {
    id: "sx-network",
    symbol: "sx",
    name: "SX Network",
  },
  {
    id: "sya-x-flooz",
    symbol: "sya",
    name: "SYA x Flooz",
  },
  {
    id: "sybc-coin",
    symbol: "sybc",
    name: "SYBC Coin",
  },
  {
    id: "syfin",
    symbol: "syf",
    name: "Syfin",
  },
  {
    id: "sylo",
    symbol: "sylo",
    name: "Sylo",
  },
  {
    id: "symbiosis-finance",
    symbol: "sis",
    name: "Symbiosis Finance",
  },
  {
    id: "symbol",
    symbol: "xym",
    name: "Symbol",
  },
  {
    id: "symbull",
    symbol: "symbull",
    name: "SymBULL",
  },
  {
    id: "symmetric",
    symbol: "symm",
    name: "Symmetric",
  },
  {
    id: "symverse",
    symbol: "sym",
    name: "SymVerse",
  },
  {
    id: "synapse-2",
    symbol: "syn",
    name: "Synapse",
  },
  {
    id: "synapse-network",
    symbol: "snp",
    name: "Synapse Network",
  },
  {
    id: "syncdao-governance",
    symbol: "sdg",
    name: "SyncDAO Governance",
  },
  {
    id: "synchrobitcoin",
    symbol: "snb",
    name: "SynchroBitcoin",
  },
  {
    id: "synchrolife",
    symbol: "syc",
    name: "SynchroLife",
  },
  {
    id: "synchrony",
    symbol: "scy",
    name: "Synchrony",
  },
  {
    id: "sync-network",
    symbol: "sync",
    name: "Sync Network",
  },
  {
    id: "syndex",
    symbol: "synd",
    name: "SynDEX",
  },
  {
    id: "syndicate-2",
    symbol: "synr",
    name: "Syndicate",
  },
  {
    id: "synex-coin",
    symbol: "minecraft",
    name: "Synex Coin",
  },
  {
    id: "synthetic-btc",
    symbol: "xbtc",
    name: "Synthetic BTC",
  },
  {
    id: "synthetic-eth",
    symbol: "xeth",
    name: "Synthetic ETH",
  },
  {
    id: "synthetic-ftt",
    symbol: "xftt",
    name: "Synthetic FTT",
  },
  {
    id: "synthetic-sol",
    symbol: "xsol",
    name: "Synthetic SOL",
  },
  {
    id: "synthetic-usd",
    symbol: "xusd",
    name: "Synthetic USD",
  },
  {
    id: "synthetify-token",
    symbol: "sny",
    name: "Synthetify Token",
  },
  {
    id: "synthetix-network-token-wormhole",
    symbol: "snx",
    name: "Synthetix Network Token (Wormhole)",
  },
  {
    id: "synth-ousd",
    symbol: "ousd",
    name: "Synth oUSD",
  },
  {
    id: "sypool",
    symbol: "syp",
    name: "Sypool",
  },
  {
    id: "syrex",
    symbol: "srx",
    name: "Syrex",
  },
  {
    id: "syscoin",
    symbol: "sys",
    name: "Syscoin",
  },
  {
    id: "t99",
    symbol: "t99",
    name: "T99",
  },
  {
    id: "tabank",
    symbol: "tab",
    name: "Tabank",
  },
  {
    id: "taboo-token",
    symbol: "taboo",
    name: "Taboo Token",
  },
  {
    id: "tabtrader",
    symbol: "ttt",
    name: "TabTrader",
  },
  {
    id: "tacocat-token",
    symbol: "tct",
    name: "TacoCat Token",
  },
  {
    id: "taco-dao",
    symbol: "tdao",
    name: "Taco DAO",
  },
  {
    id: "tacoenergy",
    symbol: "tacoe",
    name: "TacoEnergy",
  },
  {
    id: "tacos",
    symbol: "taco",
    name: "Tacos",
  },
  {
    id: "tacotoken",
    symbol: "taco",
    name: "TacoToken",
  },
  {
    id: "tadpole-finance",
    symbol: "tad",
    name: "Tadpole",
  },
  {
    id: "tadpole-token",
    symbol: "tad",
    name: "Tadpole Token",
  },
  {
    id: "taf-token",
    symbol: "taf",
    name: "TAF Token",
  },
  {
    id: "tagbond",
    symbol: "tag",
    name: "Tagbond",
  },
  {
    id: "tagcoin",
    symbol: "tag",
    name: "Tagcoin",
  },
  {
    id: "tag-protocol",
    symbol: "tag",
    name: "Tag Protocol",
  },
  {
    id: "tagrcoin",
    symbol: "tagr",
    name: "TAGRcoin",
  },
  {
    id: "tahu",
    symbol: "tahu",
    name: "TAHU",
  },
  {
    id: "tai",
    symbol: "tai",
    name: "tBridge Token",
  },
  {
    id: "taichi",
    symbol: "tac",
    name: "TaiChi",
  },
  {
    id: "tails",
    symbol: "tails",
    name: "Tails",
  },
  {
    id: "tajcoin",
    symbol: "taj",
    name: "TajCoin",
  },
  {
    id: "takamaka-green-coin",
    symbol: "tkg",
    name: "Takamaka Green Coin",
  },
  {
    id: "takeda-shin",
    symbol: "takeda",
    name: "Takeda Shin",
  },
  {
    id: "taklimakan-network",
    symbol: "tan",
    name: "Taklimakan Network",
  },
  {
    id: "tako-token",
    symbol: "tako",
    name: "Tako Token",
  },
  {
    id: "talan",
    symbol: "talan",
    name: "Talan",
  },
  {
    id: "talaria-inu",
    symbol: "tali",
    name: "Talaria Inu",
  },
  {
    id: "talecraft",
    symbol: "craft",
    name: "TaleCraft",
  },
  {
    id: "talentcoin",
    symbol: "tlnt",
    name: "TalentCoin",
  },
  {
    id: "talent-coin",
    symbol: "tlnt",
    name: "Talent Coin",
  },
  {
    id: "talent-token",
    symbol: "ttx",
    name: "Talent Token",
  },
  {
    id: "tale-of-chain",
    symbol: "tale",
    name: "Tales Of Chain",
  },
  {
    id: "taler",
    symbol: "tlr",
    name: "Taler",
  },
  {
    id: "talkado",
    symbol: "talk",
    name: "Talkado",
  },
  {
    id: "talken",
    symbol: "talk",
    name: "Talken",
  },
  {
    id: "talleo",
    symbol: "tlo",
    name: "Talleo",
  },
  {
    id: "tama-egg-niftygotchi",
    symbol: "tme",
    name: "TAMA EGG NiftyGotchi",
  },
  {
    id: "tama-finance",
    symbol: "tama",
    name: "Tama Finance",
  },
  {
    id: "tangle",
    symbol: "tngl",
    name: "Tangle",
  },
  {
    id: "tangoswap",
    symbol: "tango",
    name: "TangoSwap",
  },
  {
    id: "tank-battle",
    symbol: "tbl",
    name: "Tank Battle",
  },
  {
    id: "tanks",
    symbol: "tanks",
    name: "Tanks",
  },
  {
    id: "tanuki-token",
    symbol: "tanuki",
    name: "Tanuki",
  },
  {
    id: "taodao",
    symbol: "tao",
    name: "TaoDAO",
  },
  {
    id: "tao-network",
    symbol: "tao",
    name: "Tao Network",
  },
  {
    id: "tap",
    symbol: "xtp",
    name: "Tap",
  },
  {
    id: "tapme-token",
    symbol: "tap",
    name: "TAPME Token",
  },
  {
    id: "tapmydata",
    symbol: "tap",
    name: "Tapmydata",
  },
  {
    id: "tap-project",
    symbol: "ttt",
    name: "Tapcoin",
  },
  {
    id: "tarality",
    symbol: "TARAL",
    name: "Tarality",
  },
  {
    id: "taraxa",
    symbol: "tara",
    name: "Taraxa",
  },
  {
    id: "tardigrades-finance",
    symbol: "trdg",
    name: "Tardigrades Finance",
  },
  {
    id: "tarot",
    symbol: "tarot",
    name: "Tarot",
  },
  {
    id: "tart",
    symbol: "tart",
    name: "Tart",
  },
  {
    id: "tartarus",
    symbol: "tar",
    name: "Tartarus",
  },
  {
    id: "tastenft",
    symbol: "taste",
    name: "TasteNFT",
  },
  {
    id: "tasty-token",
    symbol: "tasty",
    name: "Tasty Token",
  },
  {
    id: "tata-coin",
    symbol: "TATA",
    name: "TATA Coin",
  },
  {
    id: "tatcoin",
    symbol: "tat",
    name: "Tatcoin",
  },
  {
    id: "tavittcoin",
    symbol: "tavitt",
    name: "Tavittcoin",
  },
  {
    id: "taxa-token",
    symbol: "txt",
    name: "Taxa Token",
  },
  {
    id: "tbcc",
    symbol: "tbcc",
    name: "TBCC",
  },
  {
    id: "t-bitcoin",
    symbol: "tbtc",
    name: "τBitcoin",
  },
  {
    id: "tbtc",
    symbol: "tbtc",
    name: "tBTC",
  },
  {
    id: "tcash",
    symbol: "tcash",
    name: "TCASH",
  },
  {
    id: "tcgcoin",
    symbol: "tcgcoin",
    name: "TCGCoin",
  },
  {
    id: "tcgcoin-2-0",
    symbol: "tcg2",
    name: "TCGCoin 2.0",
  },
  {
    id: "tchalla",
    symbol: "tcha",
    name: "TCHALLA",
  },
  {
    id: "tcoin-fun",
    symbol: "tco",
    name: "Tcoin.fun",
  },
  {
    id: "tcw-token",
    symbol: "tcw",
    name: "TCW Token",
  },
  {
    id: "tdoge",
    symbol: "tdoge",
    name: "τDoge",
  },
  {
    id: "teal",
    symbol: "teat",
    name: "TEAL",
  },
  {
    id: "team-clean-seas",
    symbol: "tcs",
    name: "Team Clean Seas",
  },
  {
    id: "team-finance",
    symbol: "team",
    name: "Team Finance",
  },
  {
    id: "team-heretics-fan-token",
    symbol: "th",
    name: "Team Heretics Fan Token",
  },
  {
    id: "team-vitality-fan-token",
    symbol: "vit",
    name: "Team Vitality Fan Token",
  },
  {
    id: "teaswap-art",
    symbol: "tsa",
    name: "Teaswap Art",
  },
  {
    id: "tea-token",
    symbol: "tea",
    name: "Tea Token",
  },
  {
    id: "technology-innovation-project",
    symbol: "tip",
    name: "Technology Innovation Project",
  },
  {
    id: "techshare-token",
    symbol: "tcl",
    name: "Techshare Token",
  },
  {
    id: "tecracoin",
    symbol: "tcr",
    name: "TecraCoin ERC20",
  },
  {
    id: "tectonic",
    symbol: "tonic",
    name: "Tectonic",
  },
  {
    id: "teddy",
    symbol: "teddy",
    name: "Teddy",
  },
  {
    id: "teddy-dollar",
    symbol: "tsd",
    name: "Teddy Dollar",
  },
  {
    id: "te-food",
    symbol: "tone",
    name: "TE-FOOD",
  },
  {
    id: "tegridy",
    symbol: "tgdy",
    name: "Tegridy",
  },
  {
    id: "tekcoin",
    symbol: "tek",
    name: "TEKcoin",
  },
  {
    id: "telcoin",
    symbol: "tel",
    name: "Telcoin",
  },
  {
    id: "tellor",
    symbol: "trb",
    name: "Tellor",
  },
  {
    id: "telokanda",
    symbol: "kanda",
    name: "Telokanda",
  },
  {
    id: "telos",
    symbol: "tlos",
    name: "Telos",
  },
  {
    id: "telos-coin",
    symbol: "telos",
    name: "Teloscoin",
  },
  {
    id: "temco",
    symbol: "temco",
    name: "TEMCO",
  },
  {
    id: "templardao",
    symbol: "tem",
    name: "Templar DAO",
  },
  {
    id: "temple",
    symbol: "temple",
    name: "TempleDAO",
  },
  {
    id: "tempo-dao",
    symbol: "tempo",
    name: "Tempo DAO",
  },
  {
    id: "tempus",
    symbol: "temp",
    name: "Tempus",
  },
  {
    id: "temtem",
    symbol: "tem",
    name: "Temtum",
  },
  {
    id: "ten",
    symbol: "tenfi",
    name: "TEN",
  },
  {
    id: "tena",
    symbol: "tena",
    name: "TENA",
  },
  {
    id: "tendies",
    symbol: "tend",
    name: "Tendies",
  },
  {
    id: "tendieswap",
    symbol: "tendie",
    name: "TendieSwap",
  },
  {
    id: "tenet",
    symbol: "ten",
    name: "Tenet",
  },
  {
    id: "tengu",
    symbol: "tengu",
    name: "Tengu",
  },
  {
    id: "tenset",
    symbol: "10set",
    name: "Tenset",
  },
  {
    id: "tenshi",
    symbol: "tenshi",
    name: "Tenshi v2",
  },
  {
    id: "tenup",
    symbol: "tup",
    name: "Tenup",
  },
  {
    id: "tenx",
    symbol: "pay",
    name: "TenX",
  },
  {
    id: "tenxcoin",
    symbol: "txc",
    name: "TenXCoin",
  },
  {
    id: "tepleton",
    symbol: "tep",
    name: "Tepleton",
  },
  {
    id: "terablock",
    symbol: "tbc",
    name: "TeraBlock",
  },
  {
    id: "tera-smart-money",
    symbol: "tera",
    name: "TERA",
  },
  {
    id: "terkehh",
    symbol: "terk",
    name: "Terk",
  },
  {
    id: "ternio",
    symbol: "tern",
    name: "Ternio",
  },
  {
    id: "terra-aut",
    symbol: "aut",
    name: "Terra AUT",
  },
  {
    id: "terra-cat",
    symbol: "cat",
    name: "Terra CAT",
  },
  {
    id: "terra-cht",
    symbol: "cht",
    name: "Terra CHT",
  },
  {
    id: "terra-cnt",
    symbol: "cnt",
    name: "Terra CNT",
  },
  {
    id: "terracoin",
    symbol: "trc",
    name: "Terracoin",
  },
  {
    id: "terra-dkt",
    symbol: "dkt",
    name: "Terra DKT",
  },
  {
    id: "terra-eut",
    symbol: "eut",
    name: "Terra EUT",
  },
  {
    id: "terrafloki",
    symbol: "tfloki",
    name: "TerraFloki",
  },
  {
    id: "terra-gbt",
    symbol: "gbt",
    name: "Terra GBT",
  },
  {
    id: "terra-hkt",
    symbol: "hkt",
    name: "Terra HKT",
  },
  {
    id: "terra-idt",
    symbol: "idt",
    name: "Terra IDT",
  },
  {
    id: "terra-int",
    symbol: "int",
    name: "Terra INT",
  },
  {
    id: "terra-jpt",
    symbol: "jpt",
    name: "Terra JPT",
  },
  {
    id: "terra-krw",
    symbol: "krt",
    name: "TerraKRW",
  },
  {
    id: "terrakub",
    symbol: "tkub",
    name: "TerraKub",
  },
  {
    id: "terraland-token",
    symbol: "tland",
    name: "TerraLand Token",
  },
  {
    id: "terra-luna",
    symbol: "luna",
    name: "Terra",
  },
  {
    id: "terramnt",
    symbol: "mnt",
    name: "Terra MNT",
  },
  {
    id: "terra-name-service",
    symbol: "tns",
    name: "Terra Name Service",
  },
  {
    id: "terran-coin",
    symbol: "trr",
    name: "Terran Coin",
  },
  {
    id: "terra-pht",
    symbol: "pht",
    name: "Terra PHT",
  },
  {
    id: "terra-sdt",
    symbol: "sdt",
    name: "Terra SDT",
  },
  {
    id: "terra-set",
    symbol: "set",
    name: "Terra SET",
  },
  {
    id: "terra-sgt",
    symbol: "sgt",
    name: "Terra SGT",
  },
  {
    id: "terra-shiba",
    symbol: "tshiba",
    name: "Terra Shiba",
  },
  {
    id: "terra-tht",
    symbol: "tht",
    name: "Terra THT",
  },
  {
    id: "terrausd",
    symbol: "ust",
    name: "TerraUSD",
  },
  {
    id: "terrausd-wormhole",
    symbol: "ust",
    name: "TerraUSD (Wormhole)",
  },
  {
    id: "terra-virtua-kolect",
    symbol: "tvk",
    name: "Terra Virtua Kolect",
  },
  {
    id: "terra-world-token",
    symbol: "twd",
    name: "Terra World Token",
  },
  {
    id: "teslafan",
    symbol: "teslf",
    name: "Teslafan",
  },
  {
    id: "teslafunds",
    symbol: "tsf",
    name: "Transaction Service Fee",
  },
  {
    id: "tesla-inu",
    symbol: "tesinu",
    name: "Tesla Inu",
  },
  {
    id: "tesra",
    symbol: "tsr",
    name: "Tesra",
  },
  {
    id: "tessla-coin",
    symbol: "tsla",
    name: "Tessla Coin",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
  },
  {
    id: "tether-3x-short",
    symbol: "tetherdoom",
    name: "Tether 3x Short",
  },
  {
    id: "tetherblack",
    symbol: "ttb",
    name: "TetherBlack",
  },
  {
    id: "tether-eurt",
    symbol: "eurt",
    name: "Euro Tether",
  },
  {
    id: "tether-gold",
    symbol: "xaut",
    name: "Tether Gold",
  },
  {
    id: "tetherino",
    symbol: "ttr",
    name: "Tetherino",
  },
  {
    id: "tethermoon",
    symbol: "trm",
    name: "TetherMoon",
  },
  {
    id: "tether-usd-pos-wormhole",
    symbol: "usdtpo",
    name: "Tether USD (PoS) (Wormhole)",
  },
  {
    id: "tether-usd-wormhole",
    symbol: "usdtso",
    name: "Tether USD (Wormhole)",
  },
  {
    id: "tether-usd-wormhole-from-bsc",
    symbol: "usdtbs",
    name: "Tether USD (Wormhole from BSC)",
  },
  {
    id: "tether-usd-wormhole-from-ethereum",
    symbol: "usdtet",
    name: "Tether USD (Wormhole from Ethereum)",
  },
  {
    id: "tethys-finance",
    symbol: "tethys",
    name: "Tethys Finance",
  },
  {
    id: "teto-inu",
    symbol: "tetoinu",
    name: "Teto Inu",
  },
  {
    id: "tetrahedra",
    symbol: "tth",
    name: "TetraHedra",
  },
  {
    id: "tetra-pay",
    symbol: "tpay",
    name: "Tetra Pay",
  },
  {
    id: "tetsu-inu",
    symbol: "tetsu",
    name: "Tetsu Inu",
  },
  {
    id: "tetu",
    symbol: "tetu",
    name: "TETU",
  },
  {
    id: "tewken",
    symbol: "tewken",
    name: "TEWKEN",
  },
  {
    id: "texo",
    symbol: "texo",
    name: "tEXO",
  },
  {
    id: "tezilla",
    symbol: "tezilla",
    name: "Tezilla",
  },
  {
    id: "tezos",
    symbol: "xtz",
    name: "Tezos",
  },
  {
    id: "tfs-token",
    symbol: "TFS",
    name: "TFS Token",
  },
  {
    id: "tg-dao",
    symbol: "tgdao",
    name: "TG DAO",
  },
  {
    id: "thaicoin",
    symbol: "tac",
    name: "Thaicoin",
  },
  {
    id: "thales",
    symbol: "thales",
    name: "Thales",
  },
  {
    id: "thanos-2",
    symbol: "thanos",
    name: "THANOS",
  },
  {
    id: "the-4th-pillar",
    symbol: "four",
    name: "4thpillar technologies",
  },
  {
    id: "the-abyss",
    symbol: "abyss",
    name: "Abyss",
  },
  {
    id: "the-alliance-of-eragard",
    symbol: "era",
    name: "The Alliance of Eragard",
  },
  {
    id: "the-amaze-world",
    symbol: "amze",
    name: "The Amaze World",
  },
  {
    id: "the-batdoge",
    symbol: "batdoge",
    name: "The Batdoge",
  },
  {
    id: "thebigcoin",
    symbol: "big",
    name: "TheBigCoin",
  },
  {
    id: "the-bitcoin-family",
    symbol: "family",
    name: "The Bitcoin Family",
  },
  {
    id: "theca",
    symbol: "THECA",
    name: "Theca",
  },
  {
    id: "the-cancoin",
    symbol: "canna",
    name: "The CanCoin",
  },
  {
    id: "thecash",
    symbol: "tch",
    name: "THECASH",
  },
  {
    id: "the-chad-token",
    symbol: "chad",
    name: "The Chad Token",
  },
  {
    id: "the-champcoin",
    symbol: "tcc",
    name: "The ChampCoin",
  },
  {
    id: "the-citadel",
    symbol: "thecitadel",
    name: "The Citadel",
  },
  {
    id: "the-collective-coin",
    symbol: "tcc",
    name: "The Collective Coin",
  },
  {
    id: "the-coop-network",
    symbol: "gmd",
    name: "The Coop Network",
  },
  {
    id: "the-corgi-of-polkabridge",
    symbol: "corgib",
    name: "The Corgi of PolkaBridge",
  },
  {
    id: "the-crypto-prophecies",
    symbol: "tcp",
    name: "The Crypto Prophecies",
  },
  {
    id: "the-crypto-you",
    symbol: "milk",
    name: "The Crypto You",
  },
  {
    id: "the-crypt-space",
    symbol: "crypt",
    name: "The Crypt Space",
  },
  {
    id: "the-doge-nft",
    symbol: "dog",
    name: "The Doge NFT",
  },
  {
    id: "the-doge-world",
    symbol: "tdw",
    name: "The Doge World",
  },
  {
    id: "the-dynasty",
    symbol: "dyt",
    name: "The Dynasty",
  },
  {
    id: "the-employment-commons-work-token",
    symbol: "work",
    name: "The Employment Commons Work Token",
  },
  {
    id: "the-essential-coin",
    symbol: "esc",
    name: "The Essential Coin",
  },
  {
    id: "the-everlasting-parachain",
    symbol: "elp",
    name: "The Everlasting Parachain",
  },
  {
    id: "the-fire-token",
    symbol: "xfr",
    name: "The Fire Token",
  },
  {
    id: "theflashcurrency",
    symbol: "tfc",
    name: "TheFlashCurrency",
  },
  {
    id: "the-forbidden-forest",
    symbol: "forestplus",
    name: "The Forbidden Forest",
  },
  {
    id: "theforce-trade",
    symbol: "foc",
    name: "TheForce Trade",
  },
  {
    id: "thefutbolcoin",
    symbol: "tfc",
    name: "TheFutbolCoin",
  },
  {
    id: "thegcccoin",
    symbol: "gcc",
    name: "Global Cryptocurrency",
  },
  {
    id: "the-global-index-chain",
    symbol: "tgic",
    name: "The Global Index Chain",
  },
  {
    id: "the-grand-banks",
    symbol: "grand",
    name: "The Grand Banks",
  },
  {
    id: "the-graph",
    symbol: "grt",
    name: "The Graph",
  },
  {
    id: "the-graph-wormhole",
    symbol: "grt",
    name: "The Graph (Wormhole)",
  },
  {
    id: "the-hash-speed",
    symbol: "ths",
    name: "The Hash Speed",
  },
  {
    id: "theholyrogercoin",
    symbol: "roger",
    name: "TheHolyRogerCoin",
  },
  {
    id: "the-husl",
    symbol: "husl",
    name: "The HUSL",
  },
  {
    id: "thekey",
    symbol: "tky",
    name: "THEKEY",
  },
  {
    id: "the-killbox-game",
    symbol: "kbox",
    name: "The Killbox Game",
  },
  {
    id: "the-kraken",
    symbol: "krkn",
    name: "The Kraken",
  },
  {
    id: "the-lab-finance",
    symbol: "labo",
    name: "The Lab Finance",
  },
  {
    id: "the-legend-of-deification",
    symbol: "tlod",
    name: "The Legend of Deification",
  },
  {
    id: "the-luxury",
    symbol: "tlx",
    name: "The Luxury",
  },
  {
    id: "the-mars-shiba",
    symbol: "marsshib",
    name: "The Mars Shiba",
  },
  {
    id: "the-mask",
    symbol: "dmask",
    name: "The Mask",
  },
  {
    id: "the-metaonez",
    symbol: "meta",
    name: "The MetaONEz",
  },
  {
    id: "the-midas-touch-gold",
    symbol: "tmtg",
    name: "The Midas Touch Gold",
  },
  {
    id: "themis",
    symbol: "get",
    name: "Themis Network",
  },
  {
    id: "themis-2",
    symbol: "mis",
    name: "Themis",
  },
  {
    id: "the-monopolist",
    symbol: "mono",
    name: "The Monopolist",
  },
  {
    id: "the-moon-shiba",
    symbol: "MOONSHIB",
    name: "The Moon Shiba",
  },
  {
    id: "the-neko",
    symbol: "neko",
    name: "The Neko",
  },
  {
    id: "the-nifty-onez",
    symbol: "onez",
    name: "The Nifty ONEz",
  },
  {
    id: "the-node",
    symbol: "the",
    name: "THENODE",
  },
  {
    id: "the-open-network",
    symbol: "toncoin",
    name: "The Open Network",
  },
  {
    id: "theos",
    symbol: "theos",
    name: "Theos",
  },
  {
    id: "theoscoin",
    symbol: "ths",
    name: "Theoscoin",
  },
  {
    id: "the-pablo-token",
    symbol: "pablo",
    name: "The Pablo Token",
  },
  {
    id: "the-parallel",
    symbol: "prl",
    name: "The Parallel",
  },
  {
    id: "the-people-coin",
    symbol: "peeps",
    name: "The People’s Coin",
  },
  {
    id: "the-philosophers-stone",
    symbol: "tpos",
    name: "The Philosophers Stone",
  },
  {
    id: "the-phoenix",
    symbol: "fire",
    name: "The Phoenix",
  },
  {
    id: "the-piece",
    symbol: "piece",
    name: "The Piece",
  },
  {
    id: "the-plant-dao",
    symbol: "sprout",
    name: "The Plant Dao",
  },
  {
    id: "the-portal",
    symbol: "portal",
    name: "The Portal",
  },
  {
    id: "the-rare-antiquities-token",
    symbol: "rat",
    name: "The Rare Antiquities Token",
  },
  {
    id: "the-real-golden-inu",
    symbol: "trgi",
    name: "The Real Golden Inu",
  },
  {
    id: "the-realm-defenders",
    symbol: "trd",
    name: "The Realm Defenders",
  },
  {
    id: "the-red-order",
    symbol: "ordr",
    name: "The Red Order",
  },
  {
    id: "the-rocks",
    symbol: "therocks",
    name: "The Rocks",
  },
  {
    id: "the-sandbox",
    symbol: "sand",
    name: "The Sandbox",
  },
  {
    id: "the-sandbox-wormhole",
    symbol: "sand",
    name: "The Sandbox (Wormhole)",
  },
  {
    id: "the-seed-farm",
    symbol: "seed",
    name: "The Seed Farm",
  },
  {
    id: "thesolandao",
    symbol: "SDO",
    name: "TheSolanDAO",
  },
  {
    id: "the-spartans",
    symbol: "tsp",
    name: "The Spartans",
  },
  {
    id: "the-starship-finance",
    symbol: "bip",
    name: "The Starship Finance",
  },
  {
    id: "the-sun-rises",
    symbol: "sunrise",
    name: "The Sun Rises",
  },
  {
    id: "theta-fuel",
    symbol: "tfuel",
    name: "Theta Fuel",
  },
  {
    id: "thetan-arena",
    symbol: "thg",
    name: "Thetan Arena",
  },
  {
    id: "thetan-coin",
    symbol: "thc",
    name: "Thetan Coin",
  },
  {
    id: "theta-token",
    symbol: "theta",
    name: "Theta Network",
  },
  {
    id: "the-three-kingdoms",
    symbol: "ttk",
    name: "The Three Kingdoms",
  },
  {
    id: "the-tokenized-bitcoin",
    symbol: "imbtc",
    name: "The Tokenized Bitcoin",
  },
  {
    id: "the-transfer-token",
    symbol: "ttt",
    name: "The Transfer Token",
  },
  {
    id: "the-troller-coin",
    symbol: "troller",
    name: "The Troller Coin",
  },
  {
    id: "the-winkyverse",
    symbol: "wnk",
    name: "The Winkyverse",
  },
  {
    id: "the-wolf-pack",
    symbol: "PACK",
    name: "The Wolf Pack",
  },
  {
    id: "thingschain",
    symbol: "tic",
    name: "Thingschain",
  },
  {
    id: "thingsoperatingsystem",
    symbol: "tos",
    name: "ThingsOperatingSystem",
  },
  {
    id: "thinkium",
    symbol: "tkm",
    name: "Thinkium",
  },
  {
    id: "thisoption",
    symbol: "tons",
    name: "Thisoption",
  },
  {
    id: "thor",
    symbol: "thor",
    name: "Thor",
  },
  {
    id: "thorchain",
    symbol: "rune",
    name: "THORChain",
  },
  {
    id: "thorchain-erc20",
    symbol: "rune",
    name: "THORChain (ERC20)",
  },
  {
    id: "thor-doge",
    symbol: "thoge",
    name: "Thor Doge",
  },
  {
    id: "thorecash",
    symbol: "tch",
    name: "Thorecash (ERC-20)",
  },
  {
    id: "thorecoin",
    symbol: "thr",
    name: "Thorecoin",
  },
  {
    id: "thore-exchange",
    symbol: "thex",
    name: "Thore Exchange Token",
  },
  {
    id: "thorenext",
    symbol: "thx",
    name: "Thorenext",
  },
  {
    id: "thoreum",
    symbol: "thoreum",
    name: "Thoreum [OLD]",
  },
  {
    id: "thoreum-v2",
    symbol: "thoreum",
    name: "Thoreum V2",
  },
  {
    id: "thorncoin",
    symbol: "thrn",
    name: "Thorncoin",
  },
  {
    id: "thors-mead",
    symbol: "mead",
    name: "Thors Mead",
  },
  {
    id: "thorstarter",
    symbol: "xrune",
    name: "Thorstarter",
  },
  {
    id: "thorswap",
    symbol: "thor",
    name: "THORSwap",
  },
  {
    id: "thorus",
    symbol: "tho",
    name: "Thorus",
  },
  {
    id: "thorwallet",
    symbol: "tgt",
    name: "THORWallet",
  },
  {
    id: "thought",
    symbol: "tht",
    name: "Thought",
  },
  {
    id: "threefold-token",
    symbol: "tft",
    name: "ThreeFold Token",
  },
  {
    id: "threshold-network-token",
    symbol: "T",
    name: "Threshold Network Token",
  },
  {
    id: "thrivechain",
    symbol: "trvc",
    name: "TriveChain",
  },
  {
    id: "throne",
    symbol: "thn",
    name: "Throne",
  },
  {
    id: "thropic",
    symbol: "thropic",
    name: "Thropic",
  },
  {
    id: "thunder",
    symbol: "thun",
    name: "Thunder",
  },
  {
    id: "thunderada-app",
    symbol: "thunderada",
    name: "ThunderADA.app",
  },
  {
    id: "thunderbnb",
    symbol: "thunderbnb",
    name: "ThunderBNB",
  },
  {
    id: "thundereth",
    symbol: "thundereth",
    name: "ThunderETH",
  },
  {
    id: "thunderracer",
    symbol: "racerr",
    name: "ThunderRacer",
  },
  {
    id: "thunder-run-bsc",
    symbol: "thundrr",
    name: "Thunder Run BSC",
  },
  {
    id: "thunder-token",
    symbol: "tt",
    name: "ThunderCore",
  },
  {
    id: "thunderverse",
    symbol: "THUNDER",
    name: "ThunderVerse",
  },
  {
    id: "thx",
    symbol: "thx",
    name: "Thx!",
  },
  {
    id: "thx-network",
    symbol: "thx",
    name: "THX Network",
  },
  {
    id: "tianya-token",
    symbol: "tyt",
    name: "Tianya Token",
  },
  {
    id: "tianyu-finance",
    symbol: "tyc",
    name: "Tianyu Finance",
  },
  {
    id: "tiara",
    symbol: "tti",
    name: "Tiara",
  },
  {
    id: "tican",
    symbol: "tia",
    name: "Tican",
  },
  {
    id: "ticket-finance",
    symbol: "ticket",
    name: "Ticket Finance",
  },
  {
    id: "tictalk",
    symbol: "tic",
    name: "TicTalk",
  },
  {
    id: "tidal-finance",
    symbol: "tidal",
    name: "Tidal Finance",
  },
  {
    id: "tidex-token",
    symbol: "tdx",
    name: "Tidex Token",
  },
  {
    id: "tierion",
    symbol: "tnt",
    name: "Tierion",
  },
  {
    id: "ties-network",
    symbol: "tie",
    name: "Ties.DB",
  },
  {
    id: "tiger-baby",
    symbol: "tigerbaby",
    name: "Tiger Baby",
  },
  {
    id: "tigercash",
    symbol: "tch",
    name: "TigerCash",
  },
  {
    id: "tiger-coin",
    symbol: "tiger",
    name: "Tiger Coin",
  },
  {
    id: "tiger-cub",
    symbol: "tcub",
    name: "Tiger Cub",
  },
  {
    id: "tigereum",
    symbol: "tig",
    name: "TIG Token",
  },
  {
    id: "tigerinu2022",
    symbol: "tigerinu2022",
    name: "TigerInu2022",
  },
  {
    id: "tiger-king",
    symbol: "tking",
    name: "Tiger King",
  },
  {
    id: "tigerqueen",
    symbol: "TQUEEN",
    name: "TigerQueen",
  },
  {
    id: "tiger-token",
    symbol: "tgnb",
    name: "Tiger Token",
  },
  {
    id: "tiki-token",
    symbol: "tiki",
    name: "Tiki Token",
  },
  {
    id: "tilwiki",
    symbol: "tlw",
    name: "TilWiki",
  },
  {
    id: "timechain-swap-token",
    symbol: "tcs",
    name: "Timechain Swap Token",
  },
  {
    id: "time-coin",
    symbol: "timec",
    name: "TIMEcoin",
  },
  {
    id: "timecoin-protocol",
    symbol: "tmcn",
    name: "Timecoin Protocol",
  },
  {
    id: "timeleap-finance",
    symbol: "time",
    name: "Timeleap Finance",
  },
  {
    id: "timelockcoin",
    symbol: "tym",
    name: "TimeLockCoin",
  },
  {
    id: "timeminer",
    symbol: "time",
    name: "TimeMiner",
  },
  {
    id: "time-new-bank",
    symbol: "tnb",
    name: "Time New Bank",
  },
  {
    id: "timerr",
    symbol: "timerr",
    name: "Timerr",
  },
  {
    id: "timers",
    symbol: "ipm",
    name: "Timers",
  },
  {
    id: "timexspace",
    symbol: "txs",
    name: "TIMEXSPACE",
  },
  {
    id: "tinkucoin",
    symbol: "tinku",
    name: "TinkuCoin",
  },
  {
    id: "tinville",
    symbol: "tinv",
    name: "TINVILLE",
  },
  {
    id: "tiny-colony",
    symbol: "tiny",
    name: "Tiny Colony",
  },
  {
    id: "tip-blue",
    symbol: "blue",
    name: "Tip.Blue",
  },
  {
    id: "tipinu",
    symbol: "tipinu",
    name: "Tipinu",
  },
  {
    id: "tipsy",
    symbol: "TIPSY",
    name: "Tipsy",
  },
  {
    id: "titan-coin",
    symbol: "ttn",
    name: "Titan Coin",
  },
  {
    id: "titan-hunters",
    symbol: "tita",
    name: "Titan Hunters",
  },
  {
    id: "titania-token",
    symbol: "titania",
    name: "Titania Token",
  },
  {
    id: "titano",
    symbol: "titano",
    name: "Titano",
  },
  {
    id: "titanswap",
    symbol: "titan",
    name: "TitanSwap",
  },
  {
    id: "title-network",
    symbol: "tnet",
    name: "Bitcoin Clashic",
  },
  {
    id: "tits-token",
    symbol: "tits",
    name: "TITS Token",
  },
  {
    id: "titsv2",
    symbol: "tits",
    name: "TitsV2",
  },
  {
    id: "ti-value",
    symbol: "tv",
    name: "Ti-Value",
  },
  {
    id: "tixl-new",
    symbol: "txl",
    name: "Tixl",
  },
  {
    id: "tkbtoken",
    symbol: "tkb",
    name: "TKBToken",
  },
  {
    id: "tkn-token",
    symbol: "tknt",
    name: "TKN Token",
  },
  {
    id: "tmc",
    symbol: "tmc",
    name: "TMC",
  },
  {
    id: "tmeta",
    symbol: "tmt",
    name: "TMETA",
  },
  {
    id: "tnc-coin",
    symbol: "tnc",
    name: "TNC Coin",
  },
  {
    id: "toad-network",
    symbol: "toad",
    name: "TOAD.Network",
  },
  {
    id: "toddler-inu",
    symbol: "todinu",
    name: "Toddler Inu",
  },
  {
    id: "togashi-inu",
    symbol: "togashi",
    name: "Togashi Inu",
  },
  {
    id: "tokamak-network",
    symbol: "ton",
    name: "Tokamak Network",
  },
  {
    id: "tokel",
    symbol: "tkl",
    name: "Tokel",
  },
  {
    id: "tokemak",
    symbol: "toke",
    name: "Tokemak",
  },
  {
    id: "tokemak-wormhole",
    symbol: "toke",
    name: "Tokemak (Wormhole)",
  },
  {
    id: "tokemon",
    symbol: "tkmn",
    name: "Tokemon",
  },
  {
    id: "toke-n",
    symbol: "toke.n",
    name: "TOKE.N",
  },
  {
    id: "tokenasset",
    symbol: "ntb",
    name: "TokenAsset",
  },
  {
    id: "tokenbook",
    symbol: "tbk",
    name: "TokenBook",
  },
  {
    id: "tokenbox",
    symbol: "tbx",
    name: "Tokenbox",
  },
  {
    id: "tokencard",
    symbol: "tkn",
    name: "Monolith",
  },
  {
    id: "token-cashpay",
    symbol: "tcp",
    name: "Token CashPay",
  },
  {
    id: "token-cheetah",
    symbol: "chtt",
    name: "Token Cheetah",
  },
  {
    id: "tokenclub",
    symbol: "tct",
    name: "TokenClub",
  },
  {
    id: "tokendesk",
    symbol: "tds",
    name: "TokenDesk",
  },
  {
    id: "token-dforce-usd",
    symbol: "usx",
    name: "Token dForce USD",
  },
  {
    id: "token-echo",
    symbol: "echo",
    name: "Token Echo",
  },
  {
    id: "token-engineering-commons",
    symbol: "tec",
    name: "Token Engineering Commons",
  },
  {
    id: "tokenfy",
    symbol: "tknfy",
    name: "Tokenfy",
  },
  {
    id: "tokengo",
    symbol: "gpt",
    name: "GoPower",
  },
  {
    id: "tokenize-xchange",
    symbol: "tkx",
    name: "Tokenize Xchange",
  },
  {
    id: "tokenjenny",
    symbol: "jenn",
    name: "TokenJenny",
  },
  {
    id: "token-kennel",
    symbol: "kennel",
    name: "Token Kennel",
  },
  {
    id: "tokenlon",
    symbol: "lon",
    name: "Tokenlon",
  },
  {
    id: "token-of-power",
    symbol: "top",
    name: "Token of Power",
  },
  {
    id: "tokenoid",
    symbol: "noid",
    name: "Tokenoid",
  },
  {
    id: "tokenomy",
    symbol: "ten",
    name: "Tokenomy",
  },
  {
    id: "tokenpay",
    symbol: "tpay",
    name: "TokenPay",
  },
  {
    id: "tokenplace",
    symbol: "tok",
    name: "Tokenplace",
  },
  {
    id: "tokenplay",
    symbol: "top",
    name: "Tokenplay",
  },
  {
    id: "token-play",
    symbol: "tp3",
    name: "Token Play",
  },
  {
    id: "token-pocket",
    symbol: "tpt",
    name: "Token Pocket",
  },
  {
    id: "token-shelby",
    symbol: "tsy",
    name: "Token Shelby",
  },
  {
    id: "tokens-of-babel",
    symbol: "tob",
    name: "Tokens of Babel",
  },
  {
    id: "token-tkx",
    symbol: "tkx",
    name: "Token TKX",
  },
  {
    id: "tokentuber",
    symbol: "tuber",
    name: "TokenTuber",
  },
  {
    id: "tokes",
    symbol: "tks",
    name: "Tokes",
  },
  {
    id: "toko",
    symbol: "toko",
    name: "Tokoin",
  },
  {
    id: "tokocrypto",
    symbol: "tko",
    name: "Tokocrypto",
  },
  {
    id: "tokok",
    symbol: "tok",
    name: "Tokok",
  },
  {
    id: "tokonft",
    symbol: "tkn",
    name: "TokoNFT",
  },
  {
    id: "tokpie",
    symbol: "tkp",
    name: "TOKPIE",
  },
  {
    id: "tokyo",
    symbol: "tokc",
    name: "Tokyo Coin",
  },
  {
    id: "tokyo-au",
    symbol: "tokau",
    name: "Tokyo AU",
  },
  {
    id: "tokyo-inu",
    symbol: "toki",
    name: "Tokyo Inu",
  },
  {
    id: "tolar",
    symbol: "tol",
    name: "Tolar",
  },
  {
    id: "toll-free-swap",
    symbol: "toll",
    name: "Toll Free Swap",
  },
  {
    id: "tomatotoken",
    symbol: "tomato",
    name: "TomatoToken",
  },
  {
    id: "tomb",
    symbol: "tomb",
    name: "Tomb",
  },
  {
    id: "tombprinter",
    symbol: "tombp",
    name: "TombPrinter",
  },
  {
    id: "tomb-shares",
    symbol: "tshare",
    name: "Tomb Shares",
  },
  {
    id: "tom-finance",
    symbol: "tom",
    name: "TOM Finance",
  },
  {
    id: "tomi",
    symbol: "tomi",
    name: "TOMI",
  },
  {
    id: "tomochain",
    symbol: "tomo",
    name: "TomoChain",
  },
  {
    id: "tomoe",
    symbol: "tomoe",
    name: "TomoChain ERC-20",
  },
  {
    id: "tomtomcoin",
    symbol: "toms",
    name: "TomTomCoin",
  },
  {
    id: "ton-crystal",
    symbol: "ever",
    name: "Everscale",
  },
  {
    id: "tonestra",
    symbol: "tnr",
    name: "Tonestra",
  },
  {
    id: "tonstarter",
    symbol: "tos",
    name: "TONStarter",
  },
  {
    id: "tontoken",
    symbol: "ton",
    name: "TONToken",
  },
  {
    id: "toolape",
    symbol: "tape",
    name: "ToolApe",
  },
  {
    id: "tools",
    symbol: "tools",
    name: "TOOLS",
  },
  {
    id: "too-token",
    symbol: "too",
    name: "TOO Token",
  },
  {
    id: "topb",
    symbol: "topb",
    name: "TOPBTC Token",
  },
  {
    id: "topbidder",
    symbol: "bid",
    name: "TopBidder",
  },
  {
    id: "topcat",
    symbol: "topcat",
    name: "TopCat",
  },
  {
    id: "top-cat-inu",
    symbol: "tcat",
    name: "Top Cat inu",
  },
  {
    id: "topchain",
    symbol: "topc",
    name: "TopChain",
  },
  {
    id: "top-coin-token",
    symbol: "tct",
    name: "Top Coin Token",
  },
  {
    id: "topdog",
    symbol: "$TOPDOG",
    name: "TOPDOG",
  },
  {
    id: "topia",
    symbol: "topia",
    name: "TOPIA",
  },
  {
    id: "topmanager",
    symbol: "tmt",
    name: "TopManager",
  },
  {
    id: "top-network",
    symbol: "top",
    name: "TOP Network",
  },
  {
    id: "topshelf-finance",
    symbol: "liqr",
    name: "Topshelf Finance",
  },
  {
    id: "torchain",
    symbol: "tor",
    name: "Torchain",
  },
  {
    id: "torex",
    symbol: "tor",
    name: "Torex",
  },
  {
    id: "torg",
    symbol: "torg",
    name: "TORG",
  },
  {
    id: "torii-finance",
    symbol: "torii",
    name: "Torii Finance",
  },
  {
    id: "tornadao",
    symbol: "nado",
    name: "Tornadao",
  },
  {
    id: "tornado-cash",
    symbol: "torn",
    name: "Tornado Cash",
  },
  {
    id: "tornadocore",
    symbol: "tcore",
    name: "Tornado Core",
  },
  {
    id: "torocus-token",
    symbol: "torocus",
    name: "TOROCUS Token",
  },
  {
    id: "torpedo",
    symbol: "torpedo",
    name: "Torpedo",
  },
  {
    id: "torq-coin",
    symbol: "torq",
    name: "TORQ Coin",
  },
  {
    id: "torum",
    symbol: "xtm",
    name: "Torum",
  },
  {
    id: "t-os",
    symbol: "tosc",
    name: "T.OS",
  },
  {
    id: "tosdis",
    symbol: "dis",
    name: "TosDis",
  },
  {
    id: "toshify-finance",
    symbol: "YFT",
    name: "Toshify.finance",
  },
  {
    id: "toshinori-inu",
    symbol: "toshinori",
    name: "Toshinori Inu",
  },
  {
    id: "toshi-token",
    symbol: "toshi",
    name: "Toshimon",
  },
  {
    id: "total-crypto-market-cap-token",
    symbol: "tcap",
    name: "Total Crypto Market Cap",
  },
  {
    id: "totally-a-rug-pull",
    symbol: "tarp",
    name: "Totally A Rug Pull",
  },
  {
    id: "totem-earth-systems",
    symbol: "ctzn",
    name: "Totem",
  },
  {
    id: "totemfi",
    symbol: "totm",
    name: "TotemFi",
  },
  {
    id: "totem-finance",
    symbol: "totem",
    name: "Totem Finance",
  },
  {
    id: "to-the-mars",
    symbol: "mars",
    name: "To The Mars",
  },
  {
    id: "tothe-moon",
    symbol: "ttm",
    name: "To The Moon",
  },
  {
    id: "to-the-moon-token",
    symbol: "TON",
    name: "To The Moon Token",
  },
  {
    id: "totoro-inu",
    symbol: "totoro",
    name: "Totoro Inu",
  },
  {
    id: "toucan-protocol-base-carbon-tonne",
    symbol: "bct",
    name: "Toucan Protocol: Base Carbon Tonne",
  },
  {
    id: "touch",
    symbol: "touch",
    name: "Touch",
  },
  {
    id: "touchcon",
    symbol: "toc",
    name: "TouchCon",
  },
  {
    id: "touchfuture",
    symbol: "tf",
    name: "TouchFuture",
  },
  {
    id: "touch-social",
    symbol: "tst",
    name: "Touch Social",
  },
  {
    id: "tourist-token",
    symbol: "toto",
    name: "Tourist Token",
  },
  {
    id: "touriva",
    symbol: "tour",
    name: "Touriva",
  },
  {
    id: "toursim-coin",
    symbol: "TIC",
    name: "Toursim Coin",
  },
  {
    id: "tower",
    symbol: "tower",
    name: "Tower",
  },
  {
    id: "tower-defense-titans",
    symbol: "titans",
    name: "Tower Defense Titans",
  },
  {
    id: "tower-finance",
    symbol: "tower",
    name: "Tower Finance",
  },
  {
    id: "town-star",
    symbol: "town",
    name: "Town Star",
  },
  {
    id: "toxicgamenft",
    symbol: "txc",
    name: "ToxicGameNft",
  },
  {
    id: "toydoge",
    symbol: "tdg",
    name: "ToyDOGE",
  },
  {
    id: "toyshiba",
    symbol: "toyshiba",
    name: "ToySHIBA",
  },
  {
    id: "tozex",
    symbol: "toz",
    name: "Tozex",
  },
  {
    id: "tp-swap",
    symbol: "tp",
    name: "Token Swap",
  },
  {
    id: "tr3zor",
    symbol: "tr3",
    name: "Tr3zor",
  },
  {
    id: "trabzonspor-fan-token",
    symbol: "tra",
    name: "Trabzonspor Fan Token",
  },
  {
    id: "tracer-dao",
    symbol: "tcr",
    name: "Tracer DAO",
  },
  {
    id: "tractor-joe",
    symbol: "tractor",
    name: "Tractor Joe",
  },
  {
    id: "tradcoin",
    symbol: "trad",
    name: "Tradcoin",
  },
  {
    id: "trade-butler-bot",
    symbol: "tbb",
    name: "Trade Butler Bot",
  },
  {
    id: "trade-fighter",
    symbol: "tdf",
    name: "Trade Fighter",
  },
  {
    id: "traders-coin",
    symbol: "trdc",
    name: "Traders Coin",
  },
  {
    id: "traders-global-business",
    symbol: "tgb",
    name: "Traders Global Business",
  },
  {
    id: "tradestars",
    symbol: "tsx",
    name: "TradeStars",
  },
  {
    id: "trade-win",
    symbol: "twi",
    name: "Trade.win",
  },
  {
    id: "tranche-finance",
    symbol: "SLICE",
    name: "Tranche Finance",
  },
  {
    id: "tranchess",
    symbol: "chess",
    name: "Tranchess",
  },
  {
    id: "tranquil-finance",
    symbol: "tranq",
    name: "Tranquil Finance",
  },
  {
    id: "tranquility-city",
    symbol: "lumen",
    name: "Tranquility City",
  },
  {
    id: "tranquil-staked-one",
    symbol: "stone",
    name: "Tranquil Staked ONE",
  },
  {
    id: "transcodium",
    symbol: "tns",
    name: "Transcodium",
  },
  {
    id: "transfercoin",
    symbol: "tx",
    name: "Transfercoin",
  },
  {
    id: "transhuman-coin",
    symbol: "thc",
    name: "Transhuman Coin",
  },
  {
    id: "transient",
    symbol: "tsct",
    name: "Transient",
  },
  {
    id: "transparent-token",
    symbol: "transparent",
    name: "Transparent Token",
  },
  {
    id: "trapeza-protocol",
    symbol: "fidl",
    name: "Trapeza Protocol",
  },
  {
    id: "tratok",
    symbol: "trat",
    name: "Tratok",
  },
  {
    id: "trava-finance",
    symbol: "trava",
    name: "Trava Finance",
  },
  {
    id: "travel-care",
    symbol: "travel",
    name: "Travel Care",
  },
  {
    id: "travelnote",
    symbol: "tvnt",
    name: "TravelNote",
  },
  {
    id: "traverse",
    symbol: "VERSE",
    name: "Traverse",
  },
  {
    id: "travgopv",
    symbol: "tpv",
    name: "TravGoPV",
  },
  {
    id: "traxia",
    symbol: "tmt",
    name: "Traxia",
  },
  {
    id: "treasure",
    symbol: "treasure",
    name: "Treasure",
  },
  {
    id: "treasure-sl",
    symbol: "tsl",
    name: "Treasure SL",
  },
  {
    id: "treasure-under-sea",
    symbol: "tus",
    name: "Treasure Under Sea",
  },
  {
    id: "treat",
    symbol: "treat",
    name: "Treat",
  },
  {
    id: "treatdao",
    symbol: "treat",
    name: "TreatDAO",
  },
  {
    id: "treatdao-v2",
    symbol: "treat",
    name: "TreatDAO v2",
  },
  {
    id: "treeb",
    symbol: "treeb",
    name: "Retreeb",
  },
  {
    id: "treecle",
    symbol: "trcl",
    name: "Treecle",
  },
  {
    id: "treelion",
    symbol: "trn",
    name: "Treelion",
  },
  {
    id: "treep-token",
    symbol: "treep",
    name: "Treep Token",
  },
  {
    id: "tremendous-coin",
    symbol: "tmds",
    name: "Tremendous Coin",
  },
  {
    id: "trendering",
    symbol: "trnd",
    name: "Trendering",
  },
  {
    id: "trendsy",
    symbol: "trndz",
    name: "Trendsy",
  },
  {
    id: "trezarcoin",
    symbol: "tzc",
    name: "TrezarCoin",
  },
  {
    id: "trgold",
    symbol: "trgo",
    name: "TrGold",
  },
  {
    id: "triall",
    symbol: "trl",
    name: "Triall",
  },
  {
    id: "trias-token",
    symbol: "trias",
    name: "Trias Token",
  },
  {
    id: "tribe-2",
    symbol: "tribe",
    name: "Tribe",
  },
  {
    id: "tribeland",
    symbol: "trbl",
    name: "Tribeland",
  },
  {
    id: "tribeone",
    symbol: "haka",
    name: "TribeOne",
  },
  {
    id: "tribe-token",
    symbol: "tribex",
    name: "Tribe Token",
  },
  {
    id: "tribe-wormhole",
    symbol: "tribe",
    name: "Tribe (Wormhole)",
  },
  {
    id: "trich",
    symbol: "trc",
    name: "Trich",
  },
  {
    id: "trick",
    symbol: "trick",
    name: "Trick",
  },
  {
    id: "trickle",
    symbol: "h2o",
    name: "Trickle",
  },
  {
    id: "triipmiles",
    symbol: "tiim",
    name: "TriipMiles",
  },
  {
    id: "trillion",
    symbol: "tt",
    name: "Trillion",
  },
  {
    id: "trillium",
    symbol: "tt",
    name: "Trillium",
  },
  {
    id: "trinity",
    symbol: "tty",
    name: "Trinity",
  },
  {
    id: "trinity-defi",
    symbol: "trin",
    name: "Trinity Defi",
  },
  {
    id: "trinity-network-credit",
    symbol: "tnc",
    name: "Trinity Network Credit",
  },
  {
    id: "tripcandy",
    symbol: "candy",
    name: "TripCandy",
  },
  {
    id: "tripedia",
    symbol: "trip",
    name: "Tripedia",
  },
  {
    id: "tripio",
    symbol: "trio",
    name: "Tripio",
  },
  {
    id: "trip-leverage-token",
    symbol: "tlt",
    name: "Trip Leverage Token",
  },
  {
    id: "trips-community",
    symbol: "trips",
    name: "Trips Community",
  },
  {
    id: "trism",
    symbol: "trism",
    name: "Trism",
  },
  {
    id: "trisolaris",
    symbol: "tri",
    name: "Trisolaris",
  },
  {
    id: "triton",
    symbol: "xeq",
    name: "Equilibria",
  },
  {
    id: "trittium",
    symbol: "trtt",
    name: "Trittium",
  },
  {
    id: "triumphx",
    symbol: "trix",
    name: "TriumphX",
  },
  {
    id: "trodl",
    symbol: "tro",
    name: "Trodl",
  },
  {
    id: "trolite",
    symbol: "trl",
    name: "Trolite",
  },
  {
    id: "trollbox",
    symbol: "tox",
    name: "trollbox",
  },
  {
    id: "trollcoin",
    symbol: "troll",
    name: "Trollcoin",
  },
  {
    id: "trolls-token",
    symbol: "trolls",
    name: "TROLLS Token",
  },
  {
    id: "tron",
    symbol: "trx",
    name: "TRON",
  },
  {
    id: "tron-atm",
    symbol: "tatm",
    name: "TRON ATM",
  },
  {
    id: "tronbetdice",
    symbol: "dice",
    name: "TRONbetDice",
  },
  {
    id: "tronbetlive",
    symbol: "live",
    name: "TRONbetLive",
  },
  {
    id: "tron-bsc",
    symbol: "trx",
    name: "TRON (BSC)",
  },
  {
    id: "tronclassic",
    symbol: "trxc",
    name: "TronClassic",
  },
  {
    id: "tron-connect",
    symbol: "tcx",
    name: "Tron Connect",
  },
  {
    id: "trondice",
    symbol: "dice",
    name: "TRONdice",
  },
  {
    id: "troneuroperewardcoin",
    symbol: "terc",
    name: "TronEuropeRewardCoin",
  },
  {
    id: "tron-go",
    symbol: "go",
    name: "TRON GO",
  },
  {
    id: "tronipay",
    symbol: "trp",
    name: "Tronipay",
  },
  {
    id: "tronnodes",
    symbol: "trn",
    name: "TronNodes",
  },
  {
    id: "tronpad",
    symbol: "tronpad",
    name: "TRONPAD",
  },
  {
    id: "tronsecurehybrid",
    symbol: "tschybrid",
    name: "TronSecureHybrid",
  },
  {
    id: "tronvegascoin",
    symbol: "vcoin",
    name: "TronVegasCoin",
  },
  {
    id: "tronweeklyjournal",
    symbol: "twj",
    name: "TronWeeklyJournal",
  },
  {
    id: "tronx-coin",
    symbol: "tronx",
    name: "TronX coin",
  },
  {
    id: "tropical-finance",
    symbol: "daiquiri",
    name: "Tropical Finance",
  },
  {
    id: "troy",
    symbol: "troy",
    name: "Troy",
  },
  {
    id: "trubadger",
    symbol: "trubgr",
    name: "TruBadger",
  },
  {
    id: "trueaud",
    symbol: "taud",
    name: "TrueAUD",
  },
  {
    id: "truebit-protocol",
    symbol: "tru",
    name: "Truebit Protocol",
  },
  {
    id: "trueburn",
    symbol: "true",
    name: "TrueBurn",
  },
  {
    id: "true-chain",
    symbol: "true",
    name: "TrueChain",
  },
  {
    id: "truedeck",
    symbol: "tdp",
    name: "TrueDeck",
  },
  {
    id: "truefeedbackchain",
    symbol: "tfbx",
    name: "Truefeedback Token",
  },
  {
    id: "truefi",
    symbol: "tru",
    name: "TrueFi",
  },
  {
    id: "trueflip",
    symbol: "tfl",
    name: "TrueFlip",
  },
  {
    id: "truegame",
    symbol: "tgame",
    name: "Truegame",
  },
  {
    id: "truegbp",
    symbol: "tgbp",
    name: "TrueGBP",
  },
  {
    id: "truehkd",
    symbol: "thkd",
    name: "TrueHKD",
  },
  {
    id: "true-pnl",
    symbol: "pnl",
    name: "True PNL",
  },
  {
    id: "true-usd",
    symbol: "tusd",
    name: "TrueUSD",
  },
  {
    id: "trumpcoin",
    symbol: "trump",
    name: "Trumpcoin",
  },
  {
    id: "trust",
    symbol: "trust",
    name: "TrustDAO",
  },
  {
    id: "trustbase",
    symbol: "tbe",
    name: "TrustBase",
  },
  {
    id: "trusted-node",
    symbol: "tnode",
    name: "Trusted Node",
  },
  {
    id: "trustercoin",
    symbol: "tsc",
    name: "TrusterCoin",
  },
  {
    id: "trust-ether-reorigin",
    symbol: "teo",
    name: "Trust Ether ReOrigin",
  },
  {
    id: "trustfi-network-token",
    symbol: "tfi",
    name: "TrustFi Network Token",
  },
  {
    id: "trustkeys-network",
    symbol: "trustk",
    name: "TrustKeys Network",
  },
  {
    id: "trustline-network",
    symbol: "tln",
    name: "Trustlines Network",
  },
  {
    id: "trustmarkethub-token",
    symbol: "tmh",
    name: "TrusMarketHub Token",
  },
  {
    id: "trustnft",
    symbol: "trustnft",
    name: "TrustNFT",
  },
  {
    id: "trustpad",
    symbol: "tpad",
    name: "TrustPad",
  },
  {
    id: "trustpay",
    symbol: "tph",
    name: "Trustpay",
  },
  {
    id: "trustrise",
    symbol: "trise",
    name: "TrustRise",
  },
  {
    id: "trustswap",
    symbol: "swap",
    name: "Trustswap",
  },
  {
    id: "trustusd",
    symbol: "trusd",
    name: "TrustUSD",
  },
  {
    id: "trustverse",
    symbol: "trv",
    name: "TrustVerse",
  },
  {
    id: "trust-wallet-token",
    symbol: "twt",
    name: "Trust Wallet Token",
  },
  {
    id: "trustworks",
    symbol: "trust",
    name: "Trustworks",
  },
  {
    id: "truth-technology",
    symbol: "truth",
    name: "Truth Technology",
  },
  {
    id: "trybe",
    symbol: "trybe",
    name: "Trybe",
  },
  {
    id: "tryc",
    symbol: "tryc",
    name: "TRYC",
  },
  {
    id: "try-finance",
    symbol: "try",
    name: "Try.Finance",
  },
  {
    id: "tryhards",
    symbol: "try",
    name: "TryHards",
  },
  {
    id: "tsar-network",
    symbol: "TSAR",
    name: "Tsar Network",
  },
  {
    id: "tsuki-dao",
    symbol: "tsuki",
    name: "Tsuki DAO",
  },
  {
    id: "tsuki-inu",
    symbol: "tkinu",
    name: "Tsuki Inu",
  },
  {
    id: "tsukiverse-galactic-adventures",
    symbol: "tsuga",
    name: "Tsukiverse:Galactic Adventures",
  },
  {
    id: "tsuzuki-inu",
    symbol: "tzki",
    name: "Tsuzuki Inu",
  },
  {
    id: "ttanslateme-network-token",
    symbol: "TMN",
    name: "TranslateMe Network Token",
  },
  {
    id: "ttcoin",
    symbol: "TC",
    name: "TTcoin",
  },
  {
    id: "ttc-protocol",
    symbol: "maro",
    name: "Maro",
  },
  {
    id: "ttoken",
    symbol: "TTOKEN",
    name: "TTOKEN",
  },
  {
    id: "tt-token",
    symbol: "ttt",
    name: "TT Token",
  },
  {
    id: "tube2",
    symbol: "tube2",
    name: "TUBE2",
  },
  {
    id: "tudabirds",
    symbol: "burd",
    name: "tudaBirds",
  },
  {
    id: "tulip",
    symbol: "tulip",
    name: "Tulip",
  },
  {
    id: "tundra-token",
    symbol: "tundra",
    name: "Tundra Token",
  },
  {
    id: "tune",
    symbol: "tun",
    name: "TUNE",
  },
  {
    id: "tune-fm",
    symbol: "jam",
    name: "Tune.Fm",
  },
  {
    id: "tune-token",
    symbol: "tune",
    name: "TUNE TOKEN",
  },
  {
    id: "turex",
    symbol: "tur",
    name: "Turex",
  },
  {
    id: "turkiye-basketbol-federasyonu-token",
    symbol: "tbft",
    name: "Turkiye Basketbol Federasyonu Token",
  },
  {
    id: "turncoin",
    symbol: "turncoin",
    name: "TurnCoin",
  },
  {
    id: "turnt-up-tikis",
    symbol: "tut",
    name: "Turnt Up Tikis",
  },
  {
    id: "turtle",
    symbol: "turtle",
    name: "Turtle",
  },
  {
    id: "turtlecoin",
    symbol: "trtl",
    name: "TurtleCoin",
  },
  {
    id: "turtle-racing",
    symbol: "turt",
    name: "Turtle Racing",
  },
  {
    id: "turtles-token",
    symbol: "TRTLS",
    name: "Turtles Token",
  },
  {
    id: "tusk-token",
    symbol: "tusk",
    name: "Mammoth.Bet",
  },
  {
    id: "tutellus",
    symbol: "tut",
    name: "Tutellus",
  },
  {
    id: "tutors-diary",
    symbol: "tuda",
    name: "Tutor's Diary",
  },
  {
    id: "tutti-frutti-finance",
    symbol: "tff",
    name: "Tutti Frutti",
  },
  {
    id: "tuxcoin",
    symbol: "tux",
    name: "Tuxcoin",
  },
  {
    id: "tvt",
    symbol: "tvt",
    name: "TVT",
  },
  {
    id: "twelve-legions",
    symbol: "ctl",
    name: "Twelve Legions",
  },
  {
    id: "twinci",
    symbol: "twin",
    name: "Twinci",
  },
  {
    id: "twindex",
    symbol: "twx",
    name: "Twindex",
  },
  {
    id: "twin-finance",
    symbol: "twin",
    name: "Twin Finance",
  },
  {
    id: "twirl-governance-token",
    symbol: "tgt",
    name: "Twirl Governance Token",
  },
  {
    id: "twist",
    symbol: "TWIST",
    name: "TWIST",
  },
  {
    id: "txa",
    symbol: "txa",
    name: "TXA",
  },
  {
    id: "txbit",
    symbol: "txbit",
    name: "Txbit",
  },
  {
    id: "tycoon",
    symbol: "tyc",
    name: "Tycoon",
  },
  {
    id: "tycoon-global",
    symbol: "tct",
    name: "Tycoon Global",
  },
  {
    id: "typerium",
    symbol: "type",
    name: "Typerium",
  },
  {
    id: "typhoon-cash",
    symbol: "phoon",
    name: "Typhoon Cash",
  },
  {
    id: "typhoon-network",
    symbol: "typh",
    name: "Typhoon Network",
  },
  {
    id: "tyrannosaurus-rex",
    symbol: "trex",
    name: "Tyrannosaurus Rex",
  },
  {
    id: "tzbtc",
    symbol: "tzbtc",
    name: "tzBTC",
  },
  {
    id: "ubeswap",
    symbol: "ube",
    name: "Ubeswap",
  },
  {
    id: "ubex",
    symbol: "ubex",
    name: "Ubex",
  },
  {
    id: "ubg-token",
    symbol: "ubg",
    name: "UBG Token",
  },
  {
    id: "ubiner",
    symbol: "ubin",
    name: "Ubiner",
  },
  {
    id: "ubiq",
    symbol: "ubq",
    name: "Ubiq",
  },
  {
    id: "ubiquitous-social-network-service",
    symbol: "usns",
    name: "Ubiquitous Social Network Service",
  },
  {
    id: "ubiquity",
    symbol: "ubq",
    name: "Ubiquity",
  },
  {
    id: "ubiquity-algorithmic-dollar",
    symbol: "uad",
    name: "Ubiquity Algorithmic Dollar",
  },
  {
    id: "ubix-network",
    symbol: "ubx",
    name: "UBIX Network",
  },
  {
    id: "ubu",
    symbol: "ubu",
    name: "UBU",
  },
  {
    id: "ubu-finance",
    symbol: "ubu",
    name: "UBU Finance",
  },
  {
    id: "ubxs-token",
    symbol: "ubxs",
    name: "UBXS Token",
  },
  {
    id: "uca",
    symbol: "uca",
    name: "UCA Coin",
  },
  {
    id: "ucash",
    symbol: "ucash",
    name: "U.CASH",
  },
  {
    id: "uchain",
    symbol: "ucn",
    name: "UChain",
  },
  {
    id: "ucoin",
    symbol: "u",
    name: "Ucoin",
  },
  {
    id: "ucot",
    symbol: "uct",
    name: "Ubique Chain of Things (UCOT)",
  },
  {
    id: "ucrowdme",
    symbol: "ucm",
    name: "UCROWDME",
  },
  {
    id: "ucx",
    symbol: "ucx",
    name: "UCX",
  },
  {
    id: "ufc-fan-token",
    symbol: "ufc",
    name: "UFC Fan Token",
  },
  {
    id: "ufo",
    symbol: "ufo",
    name: "UFO",
  },
  {
    id: "ufocoin",
    symbol: "ufo",
    name: "Uniform Fiscal Object",
  },
  {
    id: "ufo-gaming",
    symbol: "ufo",
    name: "UFO Gaming",
  },
  {
    id: "ufo-gaming-wormhole",
    symbol: "ufo",
    name: "UFO Gaming (Wormhole)",
  },
  {
    id: "uhive",
    symbol: "hve2",
    name: "Uhive",
  },
  {
    id: "ulanco",
    symbol: "uac",
    name: "Ulanco",
  },
  {
    id: "uland",
    symbol: "uland",
    name: "ULAND",
  },
  {
    id: "ulgen-hash-power",
    symbol: "uhp",
    name: "Ulgen Hash Power",
  },
  {
    id: "ulord",
    symbol: "ut",
    name: "Ulord",
  },
  {
    id: "ulti-arena",
    symbol: "ulti",
    name: "Ulti Arena",
  },
  {
    id: "ultiledger",
    symbol: "ult",
    name: "Ultiledger",
  },
  {
    id: "ultimate-nft",
    symbol: "unft",
    name: "Ultimate Nft",
  },
  {
    id: "ultimate-secure-cash",
    symbol: "usc",
    name: "Ultimate Secure Cash",
  },
  {
    id: "ultimogg",
    symbol: "ultgg",
    name: "UltimoGG",
  },
  {
    id: "ultra",
    symbol: "uos",
    name: "Ultra",
  },
  {
    id: "ultrachad",
    symbol: "uchad",
    name: "UltraChad",
  },
  {
    id: "ultra-clear",
    symbol: "ucr",
    name: "Ultra Clear",
  },
  {
    id: "ultragate",
    symbol: "ulg",
    name: "Ultragate",
  },
  {
    id: "ultrain",
    symbol: "ugas",
    name: "Ultrain",
  },
  {
    id: "ultralpha",
    symbol: "uat",
    name: "UltrAlpha",
  },
  {
    id: "ultra-nft",
    symbol: "unft",
    name: "Ultra NFT",
  },
  {
    id: "ultranote-infinity",
    symbol: "xuni",
    name: "UltraNote Infinity",
  },
  {
    id: "ultrasafe",
    symbol: "ultra",
    name: "UltraSafe",
  },
  {
    id: "uma",
    symbol: "uma",
    name: "UMA",
  },
  {
    id: "umami-finance",
    symbol: "umami",
    name: "Umami Finance",
  },
  {
    id: "umbra-network",
    symbol: "umbr",
    name: "Umbria Network",
  },
  {
    id: "umbrellacoin",
    symbol: "umc",
    name: "Umbrella Coin",
  },
  {
    id: "umbrella-network",
    symbol: "umb",
    name: "Umbrella Network",
  },
  {
    id: "umee",
    symbol: "umee",
    name: "Umee",
  },
  {
    id: "umetaworld",
    symbol: "umw",
    name: "UMetaWorld",
  },
  {
    id: "ume-token",
    symbol: "ume",
    name: "UME Token",
  },
  {
    id: "umi",
    symbol: "umi",
    name: "UMI",
  },
  {
    id: "umi-digital",
    symbol: "umi",
    name: "Umi Digital",
  },
  {
    id: "unagii-dai",
    symbol: "udai",
    name: "Unagii Dai",
  },
  {
    id: "unagii-eth",
    symbol: "ueth",
    name: "Unagii ETH",
  },
  {
    id: "unagii-tether-usd",
    symbol: "uusdt",
    name: "Unagii Tether USD",
  },
  {
    id: "unagii-usd-coin",
    symbol: "uusdc",
    name: "Unagii USD Coin",
  },
  {
    id: "unagii-wrapped-bitcoin",
    symbol: "uwbtc",
    name: "Unagii Wrapped Bitcoin",
  },
  {
    id: "unbanked",
    symbol: "unbnk",
    name: "Unbanked",
  },
  {
    id: "unbound-dollar",
    symbol: "und",
    name: "Unbound Dollar",
  },
  {
    id: "unbound-finance",
    symbol: "unb",
    name: "Unbound Finance",
  },
  {
    id: "unbox-art",
    symbol: "uba",
    name: "Unbox Art",
  },
  {
    id: "uncl",
    symbol: "uncl",
    name: "UNCL",
  },
  {
    id: "uncle",
    symbol: "uncle",
    name: "Uncle",
  },
  {
    id: "uncle-doge",
    symbol: "udoge",
    name: "Uncle Doge",
  },
  {
    id: "unclemine",
    symbol: "um",
    name: "UncleMine",
  },
  {
    id: "uncle-scrooge-finance",
    symbol: "crooge",
    name: "Uncle Scrooge Finance",
  },
  {
    id: "undead-finance",
    symbol: "undead",
    name: "Undead Finance",
  },
  {
    id: "underground-warriors",
    symbol: "wp",
    name: "Underground Warriors",
  },
  {
    id: "underminegold",
    symbol: "umg",
    name: "UnderMineGold",
  },
  {
    id: "undo-token",
    symbol: "undo",
    name: "Undo Token",
  },
  {
    id: "u-network",
    symbol: "uuu",
    name: "U Network",
  },
  {
    id: "unfederalreserve",
    symbol: "ersdl",
    name: "unFederalReserve",
  },
  {
    id: "uni-ape",
    symbol: "uape",
    name: "Uni Ape",
  },
  {
    id: "uniarts",
    symbol: "UART",
    name: "UniArts",
  },
  {
    id: "unibot-cash",
    symbol: "undb",
    name: "UniDexBot",
  },
  {
    id: "unibright",
    symbol: "ubt",
    name: "Unibright",
  },
  {
    id: "unicake",
    symbol: "uct",
    name: "UniCAKE",
  },
  {
    id: "unicandy",
    symbol: "ucd",
    name: "UniCandy",
  },
  {
    id: "unicap-finance",
    symbol: "ucap",
    name: "Unicap.Finance",
  },
  {
    id: "unicat-token",
    symbol: "unicat",
    name: "Unicat Token",
  },
  {
    id: "unicly",
    symbol: "unic",
    name: "Unicly",
  },
  {
    id: "unicly-aavegotchi-astronauts-collection",
    symbol: "ugotchi",
    name: "Unicly Aavegotchi Astronauts Collection",
  },
  {
    id: "unicly-artblocks-collection",
    symbol: "uartb",
    name: "Unicly ArtBlocks Collection",
  },
  {
    id: "unicly-bored-ape-yacht-club-collection",
    symbol: "uAPE",
    name: "Unicly Bored Ape Yacht Club Collection",
  },
  {
    id: "unicly-chris-mccann-collection",
    symbol: "ucm",
    name: "Unicly Chris McCann Collection",
  },
  {
    id: "unicly-cryptopunks-collection",
    symbol: "upunk",
    name: "Unicly CryptoPunks Collection",
  },
  {
    id: "unicly-doki-doki-collection",
    symbol: "udoki",
    name: "Unicly Doki Doki Collection",
  },
  {
    id: "unicly-fewocious-collection",
    symbol: "ufewo",
    name: "Unicly Fewocious Collection",
  },
  {
    id: "unicly-genesis-collection",
    symbol: "uunicly",
    name: "Unicly Genesis Collection",
  },
  {
    id: "unicly-genesis-mooncats-collection",
    symbol: "ugmc",
    name: "Unicly Genesis MoonCats Collection",
  },
  {
    id: "unicly-hashmasks-collection",
    symbol: "umask",
    name: "Unicly Hashmasks Collection",
  },
  {
    id: "unicly-mooncats-collection",
    symbol: "umoon",
    name: "Unicly MoonCats Collection",
  },
  {
    id: "unicly-mystic-axies-collection",
    symbol: "uaxie",
    name: "Unicly Mystic Axies Collection",
  },
  {
    id: "unicly-waifu-collection",
    symbol: "uwaifu",
    name: "Unicly Waifu Collection",
  },
  {
    id: "unicorn-cake",
    symbol: "unic",
    name: "Unicorn Cake",
  },
  {
    id: "unicorn-token",
    symbol: "uni",
    name: "UNICORN Token",
  },
  {
    id: "unicrypt-2",
    symbol: "uncx",
    name: "UniCrypt",
  },
  {
    id: "unidex",
    symbol: "unidx",
    name: "UniDex",
  },
  {
    id: "unidexgas",
    symbol: "undg",
    name: "UniDexGas",
  },
  {
    id: "unido-ep",
    symbol: "udo",
    name: "Unido",
  },
  {
    id: "unidollar",
    symbol: "uniusd",
    name: "UniDollar",
  },
  {
    id: "unifarm",
    symbol: "ufarm",
    name: "UniFarm",
  },
  {
    id: "unifees",
    symbol: "fees",
    name: "Unifees",
  },
  {
    id: "unifi",
    symbol: "unifi",
    name: "Covenants",
  },
  {
    id: "unification",
    symbol: "fund",
    name: "Unification",
  },
  {
    id: "unifi-defi",
    symbol: "unifi",
    name: "UNIFI DeFi",
  },
  {
    id: "unifi-protocol",
    symbol: "up",
    name: "UniFi Protocol",
  },
  {
    id: "unifi-protocol-dao",
    symbol: "unfi",
    name: "Unifi Protocol DAO",
  },
  {
    id: "unifty",
    symbol: "nif",
    name: "Unifty",
  },
  {
    id: "unifund",
    symbol: "ifund",
    name: "Unifund",
  },
  {
    id: "unify",
    symbol: "unify",
    name: "Unify",
  },
  {
    id: "unikoin-gold",
    symbol: "ukg",
    name: "Unikoin Gold",
  },
  {
    id: "unilab-network",
    symbol: "ulab",
    name: "Unilab",
  },
  {
    id: "unilayer",
    symbol: "layer",
    name: "UniLayer",
  },
  {
    id: "unilayerx",
    symbol: "layerx",
    name: "UnilayerX",
  },
  {
    id: "unilock-network",
    symbol: "unl",
    name: "Unilock.Network",
  },
  {
    id: "unimex-network",
    symbol: "umx",
    name: "UniMex Network",
  },
  {
    id: "unimoon",
    symbol: "unimoon",
    name: "Unimoon",
  },
  {
    id: "union-fair-coin",
    symbol: "ufc",
    name: "Union Fair Coin",
  },
  {
    id: "union-protocol-governance-token",
    symbol: "unn",
    name: "UNION Protocol Governance Token",
  },
  {
    id: "unipilot",
    symbol: "pilot",
    name: "Unipilot",
  },
  {
    id: "unipower",
    symbol: "power",
    name: "UniPower",
  },
  {
    id: "uniqly",
    symbol: "uniq",
    name: "Uniqly",
  },
  {
    id: "unique-fans",
    symbol: "fans",
    name: "Unique Fans",
  },
  {
    id: "uniquemeta",
    symbol: "unqm",
    name: "UniqueMeta",
  },
  {
    id: "unique-one",
    symbol: "rare",
    name: "Unique One",
  },
  {
    id: "uniqueone-photo",
    symbol: "foto",
    name: "UniqueOne Photo",
  },
  {
    id: "unirealchain",
    symbol: "unr",
    name: "Unirealchain",
  },
  {
    id: "unisocks",
    symbol: "socks",
    name: "Unisocks",
  },
  {
    id: "unistake",
    symbol: "unistake",
    name: "Unistake",
  },
  {
    id: "uniswap",
    symbol: "uni",
    name: "Uniswap",
  },
  {
    id: "uniswap-state-dollar",
    symbol: "usd",
    name: "unified Stable Dollar",
  },
  {
    id: "uniswap-wormhole",
    symbol: "uni",
    name: "Uniswap (Wormhole)",
  },
  {
    id: "unite",
    symbol: "unite",
    name: "Unite",
  },
  {
    id: "united-bitcoin",
    symbol: "ubtc",
    name: "United Bitcoin",
  },
  {
    id: "unitedcrowd",
    symbol: "uct",
    name: "UnitedCrowd",
  },
  {
    id: "united-doge-finance",
    symbol: "udog",
    name: "United Doge Finance",
  },
  {
    id: "united-emirate-decentralized-coin",
    symbol: "uedc",
    name: "United Emirate Decentralized Coin",
  },
  {
    id: "united-farmers-finance",
    symbol: "uff",
    name: "United Farmers Finance",
  },
  {
    id: "united-token",
    symbol: "uted",
    name: "United",
  },
  {
    id: "united-traders-token",
    symbol: "utt",
    name: "United Traders Token",
  },
  {
    id: "unit-protocol",
    symbol: "col",
    name: "Unit Protocol",
  },
  {
    id: "unit-protocol-duck",
    symbol: "duck",
    name: "Unit Protocol New",
  },
  {
    id: "unitrade",
    symbol: "trade",
    name: "Unitrade",
  },
  {
    id: "unitus",
    symbol: "uis",
    name: "Unitus",
  },
  {
    id: "unitycom",
    symbol: "unitycom",
    name: "UnityCom",
  },
  {
    id: "unity-network",
    symbol: "unt",
    name: "Unity Network",
  },
  {
    id: "unity-protocol",
    symbol: "unity",
    name: "Unity Protocol",
  },
  {
    id: "unityventures",
    symbol: "uv",
    name: "UnityVentures",
  },
  {
    id: "universal-basic-income",
    symbol: "ubi",
    name: "Universal Basic Income",
  },
  {
    id: "universal-coin",
    symbol: "ucoin",
    name: "Universal Coin",
  },
  {
    id: "universal-currency",
    symbol: "unit",
    name: "Universal Currency",
  },
  {
    id: "universal-euro",
    symbol: "upeur",
    name: "Universal Euro",
  },
  {
    id: "universal-floki-coin",
    symbol: "ufloki",
    name: "Universal Floki Coin",
  },
  {
    id: "universal-gold",
    symbol: "upxau",
    name: "Universal Gold",
  },
  {
    id: "universal-liquidity-union",
    symbol: "ulu",
    name: "Universal Liquidity Union",
  },
  {
    id: "universal-pickle",
    symbol: "$upl",
    name: "Universal Pickle",
  },
  {
    id: "universal-protocol-token",
    symbol: "upt",
    name: "Universal Protocol Token",
  },
  {
    id: "universal-us-dollar",
    symbol: "upusd",
    name: "Universal US Dollar",
  },
  {
    id: "universe-coin",
    symbol: "unis",
    name: "Universe Coin",
  },
  {
    id: "universe-finance-token",
    symbol: "unt",
    name: "Universe Finance Token",
  },
  {
    id: "universe-island",
    symbol: "uim",
    name: "Universe Island",
  },
  {
    id: "universe-token",
    symbol: "uni",
    name: "UNIVERSE",
  },
  {
    id: "universe-xyz",
    symbol: "xyz",
    name: "Universe.XYZ",
  },
  {
    id: "universidad-de-chile-fan-token",
    symbol: "UCH",
    name: "Universidad de Chile Fan Token",
  },
  {
    id: "uniwhales",
    symbol: "uwl",
    name: "UniWhales",
  },
  {
    id: "uniworld",
    symbol: "unw",
    name: "UniWorld",
  },
  {
    id: "unix",
    symbol: "unix",
    name: "UniX",
  },
  {
    id: "unizen",
    symbol: "zcx",
    name: "Unizen",
  },
  {
    id: "unknown-fair-object",
    symbol: "ufo",
    name: "Unknown Fair Object",
  },
  {
    id: "unlend-finance",
    symbol: "uft",
    name: "UniLend Finance",
  },
  {
    id: "unlimited-fiscusfyi",
    symbol: "uffyi",
    name: "Unlimited FiscusFYI",
  },
  {
    id: "unlimitedip",
    symbol: "uip",
    name: "UnlimitedIP",
  },
  {
    id: "unlock-protocol",
    symbol: "udt",
    name: "Unlock Protocol",
  },
  {
    id: "unmarshal",
    symbol: "marsh",
    name: "Unmarshal",
  },
  {
    id: "unobtanium",
    symbol: "uno",
    name: "Unobtanium",
  },
  {
    id: "unobtanium-tezos",
    symbol: "uno",
    name: "Unobtanium Tezos",
  },
  {
    id: "uno-re",
    symbol: "uno",
    name: "Uno Re",
  },
  {
    id: "unoswap",
    symbol: "unos",
    name: "UnoSwap",
  },
  {
    id: "unq",
    symbol: "unq",
    name: "UNQ",
  },
  {
    id: "unreal-finance",
    symbol: "ugt",
    name: "Unreal Finance",
  },
  {
    id: "unslashed-finance",
    symbol: "usf",
    name: "Unslashed Finance",
  },
  {
    id: "unus-dao",
    symbol: "udo",
    name: "Unus Dao",
  },
  {
    id: "unvest",
    symbol: "unv",
    name: "Unvest",
  },
  {
    id: "upbnb",
    symbol: "upbnb",
    name: "upBNB",
  },
  {
    id: "upbots",
    symbol: "ubxt",
    name: "UpBots",
  },
  {
    id: "upbots-wormhole",
    symbol: "ubxt",
    name: "UpBots (Wormhole)",
  },
  {
    id: "upcake",
    symbol: "upc",
    name: "UpCake",
  },
  {
    id: "upcoin",
    symbol: "upcoin",
    name: "Upcoin",
  },
  {
    id: "updog",
    symbol: "updog",
    name: "UpDog",
  },
  {
    id: "upfi-network",
    symbol: "ups",
    name: "UPFI Network",
  },
  {
    id: "upfinity",
    symbol: "upf",
    name: "UpFinity",
  },
  {
    id: "upfire",
    symbol: "upr",
    name: "Upfire",
  },
  {
    id: "upfiring",
    symbol: "ufr",
    name: "Upfiring",
  },
  {
    id: "upfund",
    symbol: "upt",
    name: "UPFUND",
  },
  {
    id: "uplexa",
    symbol: "upx",
    name: "uPlexa",
  },
  {
    id: "uplift",
    symbol: "lift",
    name: "Uplift",
  },
  {
    id: "uplink",
    symbol: "uplink",
    name: "UpLink",
  },
  {
    id: "upper-dollar",
    symbol: "usdu",
    name: "Upper Dollar",
  },
  {
    id: "upper-euro",
    symbol: "euru",
    name: "Upper Euro",
  },
  {
    id: "upper-pound",
    symbol: "gbpu",
    name: "Upper Pound",
  },
  {
    id: "upper-swiss-franc",
    symbol: "chfu",
    name: "Upper Swiss Franc",
  },
  {
    id: "uppsme",
    symbol: "upps",
    name: "UppsMe",
  },
  {
    id: "upshib",
    symbol: "upshib",
    name: "upShib",
  },
  {
    id: "upstabletoken",
    symbol: "ustx",
    name: "UpStableToken",
  },
  {
    id: "uptoken",
    symbol: "up",
    name: "UpToken",
  },
  {
    id: "up-token",
    symbol: "up",
    name: "UP Token",
  },
  {
    id: "uptrennd",
    symbol: "1up",
    name: "Uptrennd",
  },
  {
    id: "uquid-coin",
    symbol: "uqc",
    name: "Uquid Coin",
  },
  {
    id: "uraniumx",
    symbol: "urx",
    name: "UraniumX",
  },
  {
    id: "uranus",
    symbol: "urac",
    name: "Uranus",
  },
  {
    id: "ureeqa",
    symbol: "urqa",
    name: "UREEQA",
  },
  {
    id: "urgaming",
    symbol: "urg",
    name: "UrGaming",
  },
  {
    id: "urg-university",
    symbol: "URG-U",
    name: "URG University",
  },
  {
    id: "urubit",
    symbol: "urub",
    name: "Urubit",
  },
  {
    id: "urus-token",
    symbol: "urus",
    name: "Aurox Token",
  },
  {
    id: "usda",
    symbol: "usda",
    name: "USDA",
  },
  {
    id: "usd-bancor",
    symbol: "usdb",
    name: "USD Bancor",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USD Coin",
  },
  {
    id: "usd-coin-pos-wormhole",
    symbol: "usdcpo",
    name: "USD Coin (PoS) (Wormhole)",
  },
  {
    id: "usd-coin-wormhole",
    symbol: "usdcso",
    name: "USD Coin (Wormhole)",
  },
  {
    id: "usd-coin-wormhole-from-avalanche",
    symbol: "usdcav",
    name: "USD Coin (Wormhole from Avalanche)",
  },
  {
    id: "usd-coin-wormhole-from-bsc",
    symbol: "usdcbs",
    name: "USD Coin (Wormhole from BSC)",
  },
  {
    id: "usd-coin-wormhole-from-ethereum",
    symbol: "usdcet",
    name: "USD Coin (Wormhole from Ethereum)",
  },
  {
    id: "usdfreeliquidity",
    symbol: "usdfl",
    name: "USDFreeLiquidity",
  },
  {
    id: "usd-gambit",
    symbol: "usdg",
    name: "USD Gambit",
  },
  {
    id: "usdh",
    symbol: "usdh",
    name: "USDH",
  },
  {
    id: "usdk",
    symbol: "usdk",
    name: "USDK",
  },
  {
    id: "usdk-wormhole",
    symbol: "usdk",
    name: "USDK (Wormhole)",
  },
  {
    id: "usdm",
    symbol: "usdm",
    name: "USDM",
  },
  {
    id: "usd-mars",
    symbol: "usdm",
    name: "USD Mars",
  },
  {
    id: "usd-open-dollar",
    symbol: "usdo",
    name: "USD Open Dollar",
  },
  {
    id: "usdp",
    symbol: "usdp",
    name: "USDP Stablecoin",
  },
  {
    id: "usdq",
    symbol: "usdq",
    name: "USDQ",
  },
  {
    id: "usd-sports",
    symbol: "usdsp",
    name: "USD Sports",
  },
  {
    id: "usdtez",
    symbol: "usdtz",
    name: "USDtez",
  },
  {
    id: "usdx",
    symbol: "usdx",
    name: "USDX",
  },
  {
    id: "usdx-stablecoin",
    symbol: "usdx",
    name: "USDx Stablecoin",
  },
  {
    id: "usechain",
    symbol: "use",
    name: "Usechain",
  },
  {
    id: "useless",
    symbol: "useless",
    name: "Useless",
  },
  {
    id: "usgold",
    symbol: "usg",
    name: "USGold",
  },
  {
    id: "ushare",
    symbol: "ushare",
    name: "USHARE",
  },
  {
    id: "usopp-inu",
    symbol: "usopp",
    name: "Usopp Inu",
  },
  {
    id: "utip",
    symbol: "utip",
    name: "uTip",
  },
  {
    id: "utopia",
    symbol: "crp",
    name: "Crypton",
  },
  {
    id: "utopia-2",
    symbol: "topia",
    name: "Utopia",
  },
  {
    id: "utopia-genesis-foundation",
    symbol: "uop",
    name: "Utopia Genesis Foundation",
  },
  {
    id: "utrin",
    symbol: "utrin",
    name: "Utrin",
  },
  {
    id: "utrust",
    symbol: "utk",
    name: "Utrust",
  },
  {
    id: "utu-coin",
    symbol: "utu",
    name: "UTU Coin",
  },
  {
    id: "uwu-vault-nftx",
    symbol: "uwu",
    name: "UWU Vault (NFTX)",
  },
  {
    id: "uxd-protocol-token",
    symbol: "uxp",
    name: "UXD Protocol Token",
  },
  {
    id: "uxd-stablecoin",
    symbol: "uxd",
    name: "UXD Stablecoin",
  },
  {
    id: "uzumaki-inu",
    symbol: "uzumaki",
    name: "Uzumaki Inu",
  },
  {
    id: "uzyth",
    symbol: "zyth",
    name: "Uzyth",
  },
  {
    id: "v4p0rr15e",
    symbol: "vrise",
    name: "VaporRISE",
  },
  {
    id: "vabble",
    symbol: "vab",
    name: "Vabble",
  },
  {
    id: "vacay",
    symbol: "vacay",
    name: "Vacay",
  },
  {
    id: "vader-protocol",
    symbol: "vader",
    name: "Vader Protocol",
  },
  {
    id: "vagabond",
    symbol: "vgo",
    name: "Vagabond",
  },
  {
    id: "vai",
    symbol: "vai",
    name: "Vai",
  },
  {
    id: "vaiot",
    symbol: "vai",
    name: "Vaiot",
  },
  {
    id: "vaivo",
    symbol: "vaivox",
    name: "Vaivo",
  },
  {
    id: "valencia-cf-fan-token",
    symbol: "vcf",
    name: "Valencia CF Fan Token",
  },
  {
    id: "valid",
    symbol: "vld",
    name: "Vetri",
  },
  {
    id: "valireum",
    symbol: "vlm",
    name: "Valireum",
  },
  {
    id: "valkyrie-network",
    symbol: "val",
    name: "Valkyrie Network",
  },
  {
    id: "valkyrie-protocol",
    symbol: "vkr",
    name: "Valkyrie Protocol",
  },
  {
    id: "valkyrio-token",
    symbol: "valk",
    name: "Valkyrio Token",
  },
  {
    id: "valobit",
    symbol: "vbit",
    name: "VALOBIT",
  },
  {
    id: "valorfoundation",
    symbol: "valor",
    name: "ValorFoundation",
  },
  {
    id: "value-liquidity",
    symbol: "value",
    name: "Value DeFi",
  },
  {
    id: "value-network-token",
    symbol: "vntw",
    name: "Value Network Token",
  },
  {
    id: "value-set-dollar",
    symbol: "vsd",
    name: "Value Set Dollar",
  },
  {
    id: "valuto",
    symbol: "vlu",
    name: "Valuto",
  },
  {
    id: "vampire-protocol",
    symbol: "vamp",
    name: "Vampire Protocol",
  },
  {
    id: "vampirestakecapital",
    symbol: "vsc",
    name: "VampireStakeCapital",
  },
  {
    id: "va-na-su",
    symbol: "vns",
    name: "Va Na Su",
  },
  {
    id: "vancat",
    symbol: "vancat",
    name: "Vancat",
  },
  {
    id: "vanci-finance",
    symbol: "vancii",
    name: "Vanci Finance",
  },
  {
    id: "vanilla",
    symbol: "vnl",
    name: "Vanilla",
  },
  {
    id: "vanilla-network",
    symbol: "vnla",
    name: "Vanilla Network",
  },
  {
    id: "vanity",
    symbol: "vny",
    name: "Vanity",
  },
  {
    id: "vankia-chain",
    symbol: "vkt",
    name: "Vankia Chain",
  },
  {
    id: "vantaur",
    symbol: "vtar",
    name: "Vantaur",
  },
  {
    id: "vanywhere",
    symbol: "vany",
    name: "Vanywhere",
  },
  {
    id: "vaperscoin",
    symbol: "vprc",
    name: "VapersCoin",
  },
  {
    id: "vapornodes",
    symbol: "vpnd",
    name: "VaporNodes",
  },
  {
    id: "varen",
    symbol: "vrn",
    name: "Varen",
  },
  {
    id: "vari-stable-capital",
    symbol: "vsc",
    name: "Vari-Stable Capital",
  },
  {
    id: "vault",
    symbol: "vault",
    name: "VAULT",
  },
  {
    id: "vault12",
    symbol: "vgt",
    name: "Vault Guardian Token",
  },
  {
    id: "vaultdefi",
    symbol: "vault",
    name: "Vault-X",
  },
  {
    id: "vault-hill-city",
    symbol: "vhc",
    name: "Vault Hill City",
  },
  {
    id: "vault-s",
    symbol: "vault-s",
    name: "Vault-S",
  },
  {
    id: "vaulty-token",
    symbol: "vlty",
    name: "Vaulty Token",
  },
  {
    id: "vbswap",
    symbol: "vbswap",
    name: "vBSWAP",
  },
  {
    id: "vbzrx",
    symbol: "vbzrx",
    name: "bZx Vesting Token",
  },
  {
    id: "vcash",
    symbol: "xvc",
    name: "Vcash",
  },
  {
    id: "vcash-token",
    symbol: "vcash",
    name: "VCash Token",
  },
  {
    id: "vcgamers",
    symbol: "vcg",
    name: "VCGamers",
  },
  {
    id: "vdv-token",
    symbol: "vdv",
    name: "VDV Token",
  },
  {
    id: "vechain",
    symbol: "vet",
    name: "VeChain",
  },
  {
    id: "veco",
    symbol: "veco",
    name: "Veco",
  },
  {
    id: "vecrv-dao-yvault",
    symbol: "yve-crvdao",
    name: "veCRV-DAO yVault",
  },
  {
    id: "vectorium",
    symbol: "vect",
    name: "Vectorium",
  },
  {
    id: "vectorspace",
    symbol: "vxv",
    name: "Vectorspace AI",
  },
  {
    id: "vedao",
    symbol: "weve",
    name: "veDAO",
  },
  {
    id: "veed",
    symbol: "veed",
    name: "VEED",
  },
  {
    id: "vee-finance",
    symbol: "vee",
    name: "Vee Finance",
  },
  {
    id: "vegannation-greencoin",
    symbol: "grnc",
    name: "VeganNation GreenCoin",
  },
  {
    id: "vega-protocol",
    symbol: "vega",
    name: "Vega Protocol",
  },
  {
    id: "vegaswap",
    symbol: "vga",
    name: "Vegaswap",
  },
  {
    id: "vegawallet-token",
    symbol: "vgw",
    name: "VegaWallet Token",
  },
  {
    id: "vegeta-inu",
    symbol: "vegi",
    name: "Vegeta Inu",
  },
  {
    id: "veggiecoin",
    symbol: "vegi",
    name: "VeggieCoin",
  },
  {
    id: "veil",
    symbol: "veil",
    name: "VEIL",
  },
  {
    id: "velas",
    symbol: "vlx",
    name: "Velas",
  },
  {
    id: "velaspad",
    symbol: "vlxpad",
    name: "VelasPad",
  },
  {
    id: "veldorabsc",
    symbol: "vdora",
    name: "VeldoraBSC",
  },
  {
    id: "veles",
    symbol: "vls",
    name: "Veles",
  },
  {
    id: "velhalla",
    symbol: "scar",
    name: "Velhalla",
  },
  {
    id: "velo",
    symbol: "velo",
    name: "Velo",
  },
  {
    id: "velorex",
    symbol: "vex",
    name: "Velorex",
  },
  {
    id: "vempire-ddao",
    symbol: "vemp",
    name: "vEmpire DDAO",
  },
  {
    id: "vena-network",
    symbol: "vena",
    name: "Vena Network",
  },
  {
    id: "vendit",
    symbol: "vndt",
    name: "Vendit",
  },
  {
    id: "venice",
    symbol: "veni",
    name: "Venice",
  },
  {
    id: "venjocoin",
    symbol: "vjc",
    name: "VENJOCOIN",
  },
  {
    id: "venox",
    symbol: "vnx",
    name: "Venox",
  },
  {
    id: "vent-finance",
    symbol: "vent",
    name: "Vent Finance",
  },
  {
    id: "vention",
    symbol: "vention",
    name: "Vention",
  },
  {
    id: "venus",
    symbol: "xvs",
    name: "Venus",
  },
  {
    id: "venus-bch",
    symbol: "vbch",
    name: "Venus BCH",
  },
  {
    id: "venus-beth",
    symbol: "vbeth",
    name: "Venus BETH",
  },
  {
    id: "venus-btc",
    symbol: "vbtc",
    name: "Venus BTC",
  },
  {
    id: "venus-busd",
    symbol: "vbusd",
    name: "Venus BUSD",
  },
  {
    id: "venus-dai",
    symbol: "vdai",
    name: "Venus DAI",
  },
  {
    id: "venus-doge",
    symbol: "vdoge",
    name: "Venus DOGE",
  },
  {
    id: "venus-dot",
    symbol: "vdot",
    name: "Venus DOT",
  },
  {
    id: "venus-eth",
    symbol: "veth",
    name: "Venus ETH",
  },
  {
    id: "venus-fil",
    symbol: "vfil",
    name: "Venus FIL",
  },
  {
    id: "venus-link",
    symbol: "vlink",
    name: "Venus LINK",
  },
  {
    id: "venus-ltc",
    symbol: "vltc",
    name: "Venus LTC",
  },
  {
    id: "venus-reward-token",
    symbol: "vrt",
    name: "Venus Reward Token",
  },
  {
    id: "venus-sxp",
    symbol: "vsxp",
    name: "Venus SXP",
  },
  {
    id: "venus-usdc",
    symbol: "vusdc",
    name: "Venus USDC",
  },
  {
    id: "venus-usdt",
    symbol: "vusdt",
    name: "Venus USDT",
  },
  {
    id: "venus-xrp",
    symbol: "vxrp",
    name: "Venus XRP",
  },
  {
    id: "venus-xvs",
    symbol: "vxvs",
    name: "Venus XVS",
  },
  {
    id: "vera",
    symbol: "vera",
    name: "Vera",
  },
  {
    id: "vera-cruz-coin",
    symbol: "vcco",
    name: "Vera Cruz Coin",
  },
  {
    id: "vera-exchange",
    symbol: "vera",
    name: "VERA Exchange",
  },
  {
    id: "veraone",
    symbol: "vro",
    name: "VeraOne",
  },
  {
    id: "verasity",
    symbol: "vra",
    name: "Verasity",
  },
  {
    id: "veraswap",
    symbol: "vrap",
    name: "VeraSwap",
  },
  {
    id: "verge",
    symbol: "xvg",
    name: "Verge",
  },
  {
    id: "veriblock",
    symbol: "vbk",
    name: "VeriBlock",
  },
  {
    id: "vericoin",
    symbol: "vrc",
    name: "VeriCoin",
  },
  {
    id: "veridocglobal",
    symbol: "vdg",
    name: "VeriDocGlobal",
  },
  {
    id: "verify",
    symbol: "cred",
    name: "Verify",
  },
  {
    id: "verify-token",
    symbol: "vrfy",
    name: "Verify Token",
  },
  {
    id: "verisafe",
    symbol: "vsf",
    name: "VeriSafe",
  },
  {
    id: "veritaseum",
    symbol: "veri",
    name: "Veritaseum",
  },
  {
    id: "vero-farm",
    symbol: "vero",
    name: "Vero Farm",
  },
  {
    id: "veros",
    symbol: "vrs",
    name: "Veros",
  },
  {
    id: "verox",
    symbol: "vrx",
    name: "Verox",
  },
  {
    id: "verse",
    symbol: "verse",
    name: "Verse",
  },
  {
    id: "versewar",
    symbol: "verse",
    name: "VerseWar",
  },
  {
    id: "version",
    symbol: "v",
    name: "Version",
  },
  {
    id: "verso",
    symbol: "vso",
    name: "Verso",
  },
  {
    id: "versoview",
    symbol: "vvt",
    name: "VersoView",
  },
  {
    id: "versus-farm",
    symbol: "versus",
    name: "Versus Farm",
  },
  {
    id: "vertcoin",
    symbol: "vtc",
    name: "Vertcoin",
  },
  {
    id: "verus-coin",
    symbol: "vrsc",
    name: "Verus Coin",
  },
  {
    id: "verve",
    symbol: "verve",
    name: "Verve",
  },
  {
    id: "vesper-finance",
    symbol: "vsp",
    name: "Vesper Finance",
  },
  {
    id: "vesper-vdollar",
    symbol: "vusd",
    name: "Vesper V-Dollar",
  },
  {
    id: "vesq",
    symbol: "vsq",
    name: "VESQ",
  },
  {
    id: "vesta",
    symbol: "vesta",
    name: "Vesta",
  },
  {
    id: "vestchain",
    symbol: "vest",
    name: "VestChain",
  },
  {
    id: "vether",
    symbol: "veth",
    name: "Vether",
  },
  {
    id: "vethor-token",
    symbol: "vtho",
    name: "VeThor Token",
  },
  {
    id: "vetter-token",
    symbol: "vetter",
    name: "Vetter Token",
  },
  {
    id: "vexanium",
    symbol: "vex",
    name: "Vexanium",
  },
  {
    id: "vfox",
    symbol: "vfox",
    name: "VFOX",
  },
  {
    id: "viacoin",
    symbol: "via",
    name: "Viacoin",
  },
  {
    id: "viagra-token",
    symbol: "viagra",
    name: "Viagra Token",
  },
  {
    id: "vibe",
    symbol: "vibe",
    name: "VIBE",
  },
  {
    id: "viberate",
    symbol: "vib",
    name: "Viberate",
  },
  {
    id: "vibe-token",
    symbol: "vibe",
    name: "Vibe Token",
  },
  {
    id: "viblo",
    symbol: "viblo",
    name: "VIBLO",
  },
  {
    id: "vibranium",
    symbol: "vbn",
    name: "Vibranium",
  },
  {
    id: "vicetoken",
    symbol: "vicex",
    name: "ViceToken",
  },
  {
    id: "vicewrld",
    symbol: "vice",
    name: "Vicewrld",
  },
  {
    id: "victoria-vr",
    symbol: "vr",
    name: "Victoria VR",
  },
  {
    id: "victorum",
    symbol: "vcc",
    name: "Victorum",
  },
  {
    id: "v-id-blockchain",
    symbol: "vidt",
    name: "VIDT Datalink",
  },
  {
    id: "videocoin",
    symbol: "vid",
    name: "VideoCoin",
  },
  {
    id: "vidiachange",
    symbol: "vida",
    name: "Vidiachange",
  },
  {
    id: "vidulum",
    symbol: "vdl",
    name: "Vidulum",
  },
  {
    id: "vidy",
    symbol: "vidy",
    name: "VIDY",
  },
  {
    id: "vidya",
    symbol: "vidya",
    name: "Vidya",
  },
  {
    id: "vidyx",
    symbol: "vidyx",
    name: "VidyX",
  },
  {
    id: "vig",
    symbol: "vig",
    name: "VIG",
  },
  {
    id: "vigorus",
    symbol: "vis",
    name: "Vigorus",
  },
  {
    id: "viking-legend",
    symbol: "viking",
    name: "Viking Legend",
  },
  {
    id: "vikings-finance",
    symbol: "val",
    name: "Vikings Finance",
  },
  {
    id: "vikings-inu",
    symbol: "vikings",
    name: "Vikings Inu",
  },
  {
    id: "viking-swap",
    symbol: "viking",
    name: "Viking Swap",
  },
  {
    id: "vikkytoken",
    symbol: "vikky",
    name: "VikkyToken",
  },
  {
    id: "vinci",
    symbol: "vinci",
    name: "Vinci",
  },
  {
    id: "vindax-coin",
    symbol: "vd",
    name: "VinDax Coin",
  },
  {
    id: "vip-coin",
    symbol: "vip",
    name: "Vip Coin",
  },
  {
    id: "vipcoin-gold",
    symbol: "vcg",
    name: "VipCoin.Gold",
  },
  {
    id: "viper",
    symbol: "viper",
    name: "Viper",
  },
  {
    id: "viperpit",
    symbol: "xviper",
    name: "ViperPit",
  },
  {
    id: "viplus",
    symbol: "vpl",
    name: "Viplus",
  },
  {
    id: "vipstarcoin",
    symbol: "vips",
    name: "VIPSTARCOIN",
  },
  {
    id: "vip-token",
    symbol: "vip",
    name: "VIP Token",
  },
  {
    id: "vira-lata-finance",
    symbol: "reau",
    name: "Vira-Lata Finance",
  },
  {
    id: "viral-ethereum",
    symbol: "eViral",
    name: "Viral Ethereum",
  },
  {
    id: "viral-inu",
    symbol: "vinu",
    name: "Viral Inu",
  },
  {
    id: "vires-finance",
    symbol: "vires",
    name: "Vires Finance",
  },
  {
    id: "virgo",
    symbol: "vgo",
    name: "Virgo",
  },
  {
    id: "virgox-token",
    symbol: "vxt",
    name: "VirgoX Token",
  },
  {
    id: "virtual-goods-token",
    symbol: "vgo",
    name: "Virtual Goods Token",
  },
  {
    id: "virtue-poker",
    symbol: "vpp",
    name: "Virtue Poker Points",
  },
  {
    id: "visio",
    symbol: "visio",
    name: "Visio",
  },
  {
    id: "vision-network",
    symbol: "vsn",
    name: "Vision Network",
  },
  {
    id: "visor",
    symbol: "visr",
    name: "Visor",
  },
  {
    id: "vitadao",
    symbol: "vita",
    name: "VitaDAO",
  },
  {
    id: "vita-inu",
    symbol: "vinu",
    name: "Vita Inu",
  },
  {
    id: "vitality",
    symbol: "vita",
    name: "Vitality",
  },
  {
    id: "vitall-markets",
    symbol: "VITAL",
    name: "Vitall Markets",
  },
  {
    id: "vitamin-coin",
    symbol: "vitc",
    name: "Vitamin Coin",
  },
  {
    id: "vite",
    symbol: "vite",
    name: "Vite",
  },
  {
    id: "vitex",
    symbol: "vx",
    name: "ViteX Coin",
  },
  {
    id: "vitoge",
    symbol: "VITOGE",
    name: "Vitoge",
  },
  {
    id: "viva-classic",
    symbol: "viva",
    name: "Viva Classic",
  },
  {
    id: "vivaion",
    symbol: "vivaion",
    name: "Vivaion",
  },
  {
    id: "vival",
    symbol: "viv",
    name: "Vival",
  },
  {
    id: "vixco",
    symbol: "vix",
    name: "Vixco",
  },
  {
    id: "vlad-finance",
    symbol: "vlad",
    name: "Vlad Finance",
  },
  {
    id: "vlaunch",
    symbol: "vpad",
    name: "VLaunch",
  },
  {
    id: "vmates",
    symbol: "mate",
    name: "Vmates",
  },
  {
    id: "vndc",
    symbol: "vndc",
    name: "VNDC",
  },
  {
    id: "vntchain",
    symbol: "vnt",
    name: "VNT Chain",
  },
  {
    id: "vn-token",
    symbol: "vn",
    name: "VN Token",
  },
  {
    id: "vnx-exchange",
    symbol: "vnxlu",
    name: "VNX Exchange",
  },
  {
    id: "vodi-x",
    symbol: "vdx",
    name: "Vodi X",
  },
  {
    id: "vodka-token",
    symbol: "VODKA",
    name: "Vodka Token",
  },
  {
    id: "vodra",
    symbol: "vdr",
    name: "Vodra",
  },
  {
    id: "void-games",
    symbol: "void",
    name: "Void Games",
  },
  {
    id: "volatility-protocol-token",
    symbol: "vol",
    name: "Volatility Protocol Token",
  },
  {
    id: "volentix-vtx",
    symbol: "vtx",
    name: "Volentix",
  },
  {
    id: "vollar",
    symbol: "vollar",
    name: "V-Dimension",
  },
  {
    id: "volt",
    symbol: "acdc",
    name: "Volt",
  },
  {
    id: "voltage",
    symbol: "volt",
    name: "Voltage",
  },
  {
    id: "voltbit",
    symbol: "vbit",
    name: "Voltbit",
  },
  {
    id: "volt-inu",
    symbol: "VOLT",
    name: "Volt Inu",
  },
  {
    id: "volts-finance",
    symbol: "volts",
    name: "Volts.Finance",
  },
  {
    id: "voltswap",
    symbol: "volt",
    name: "VoltSwap",
  },
  {
    id: "voltz",
    symbol: "voltz",
    name: "Voltz",
  },
  {
    id: "voovoo",
    symbol: "voo",
    name: "VooVoo",
  },
  {
    id: "vortex-dao",
    symbol: "space",
    name: "Vortex DAO",
  },
  {
    id: "vortex-defi",
    symbol: "vtx",
    name: "Vortex DeFi",
  },
  {
    id: "vortex-network",
    symbol: "vtx",
    name: "VorteX Network",
  },
  {
    id: "votechain",
    symbol: "vbsc",
    name: "Votechain",
  },
  {
    id: "voucher-eth",
    symbol: "veth",
    name: "Voucher ETH",
  },
  {
    id: "vow",
    symbol: "vow",
    name: "Vow",
  },
  {
    id: "voxel-x-network",
    symbol: "vxl",
    name: "Voxel X Network",
  },
  {
    id: "vox-finance",
    symbol: "vox",
    name: "Vox.Finance",
  },
  {
    id: "voxies",
    symbol: "voxel",
    name: "Voxies",
  },
  {
    id: "voyager",
    symbol: "vgr",
    name: "Voyager",
  },
  {
    id: "voyce",
    symbol: "voyce",
    name: "Voyce",
  },
  {
    id: "voyr",
    symbol: "voyrme",
    name: "VOYR",
  },
  {
    id: "voytek-bear-coin",
    symbol: "bear",
    name: "BEAR Coin",
  },
  {
    id: "vpex-exchange",
    symbol: "vpx",
    name: "VPEX Exchange",
  },
  {
    id: "vpncoin",
    symbol: "vash",
    name: "VPNCoin",
  },
  {
    id: "vpunks-token",
    symbol: "vpu",
    name: "VPunks Token",
  },
  {
    id: "vsync",
    symbol: "vsx",
    name: "Vsync",
  },
  {
    id: "v-systems",
    symbol: "vsys",
    name: "V.SYSTEMS",
  },
  {
    id: "vulcan-forged",
    symbol: "pyr",
    name: "Vulcan Forged",
  },
  {
    id: "vulkania",
    symbol: "vlk",
    name: "Vulkania",
  },
  {
    id: "vvs-finance",
    symbol: "vvs",
    name: "VVS Finance",
  },
  {
    id: "vvsp",
    symbol: "vvsp",
    name: "vVSP",
  },
  {
    id: "vybe",
    symbol: "vybe",
    name: "Vybe",
  },
  {
    id: "vybit",
    symbol: "vi",
    name: "Vybit",
  },
  {
    id: "vyndao",
    symbol: "vyn",
    name: "Vyndao",
  },
  {
    id: "vynk-chain",
    symbol: "vync",
    name: "VYNK Chain",
  },
  {
    id: "wabi",
    symbol: "wabi",
    name: "Wabi",
  },
  {
    id: "wab-network",
    symbol: "baw",
    name: "BAW Network",
  },
  {
    id: "wadzpay-token",
    symbol: "wtk",
    name: "WadzPay Token",
  },
  {
    id: "wagerr",
    symbol: "wgr",
    name: "Wagerr",
  },
  {
    id: "waggle-network",
    symbol: "wag",
    name: "Waggle Network",
  },
  {
    id: "wagmi",
    symbol: "wagmi",
    name: "WAGMI",
  },
  {
    id: "wagmidao",
    symbol: "gmi",
    name: "WagmiDAO",
  },
  {
    id: "wagmi-game",
    symbol: "wagmi",
    name: "WAGMI Game",
  },
  {
    id: "wagmi-on-solana",
    symbol: "wagmi",
    name: "WAGMI On Solana",
  },
  {
    id: "wagyuswap",
    symbol: "wag",
    name: "WagyuSwap",
  },
  {
    id: "waifer",
    symbol: "waifer",
    name: "Waifer",
  },
  {
    id: "waifu-token",
    symbol: "waif",
    name: "Waifu Token",
  },
  {
    id: "waifu-vault-nftx",
    symbol: "waifu",
    name: "WAIFU Vault (NFTX)",
  },
  {
    id: "waka-finance",
    symbol: "waka",
    name: "Waka Finance",
  },
  {
    id: "wakanda-inu",
    symbol: "wkd",
    name: "Wakanda Inu",
  },
  {
    id: "waletoken",
    symbol: "wtn",
    name: "Waletoken",
  },
  {
    id: "walletnow",
    symbol: "wnow",
    name: "WalletNow",
  },
  {
    id: "wallet-pay",
    symbol: "xpay",
    name: "Wallet Pay",
  },
  {
    id: "wallet-plus-x",
    symbol: "wpx",
    name: "Wallet Plus X",
  },
  {
    id: "wallet-swap",
    symbol: "wswap",
    name: "Wallet Swap",
  },
  {
    id: "wallfair",
    symbol: "wfair",
    name: "Wallfair",
  },
  {
    id: "wall-street-baby",
    symbol: "wsb",
    name: "Wall Street Baby",
  },
  {
    id: "wall-street-bets-dapp",
    symbol: "wsb",
    name: "WallStreetBets DApp",
  },
  {
    id: "wallstreetbets-token",
    symbol: "wsbt",
    name: "WallStreetBets Token",
  },
  {
    id: "wall-street-capital",
    symbol: "wsc",
    name: "Wall Street Capital",
  },
  {
    id: "wall-street-games",
    symbol: "wsg",
    name: "Wall Street Games",
  },
  {
    id: "wall-street-inu",
    symbol: "wallstreetinu",
    name: "Wall Street Inu",
  },
  {
    id: "wallstreetninja",
    symbol: "WSN",
    name: "WallStreetNinja",
  },
  {
    id: "walnut-finance",
    symbol: "wtf",
    name: "Walnut.finance",
  },
  {
    id: "waltonchain",
    symbol: "wtc",
    name: "Waltonchain",
  },
  {
    id: "wam",
    symbol: "wam",
    name: "Wam",
  },
  {
    id: "wamo",
    symbol: "wamo",
    name: "WAMO",
  },
  {
    id: "wanaka-farm",
    symbol: "wana",
    name: "Wanaka Farm",
  },
  {
    id: "wanaka-farm-wairere-token",
    symbol: "wai",
    name: "Wanaka Farm WAIRERE Token",
  },
  {
    id: "wanamoon",
    symbol: "moon",
    name: "WANAMOON",
  },
  {
    id: "wanchain",
    symbol: "wan",
    name: "Wanchain",
  },
  {
    id: "wanda-exchange",
    symbol: "we",
    name: "Wanda Exchange",
  },
  {
    id: "wanderlust",
    symbol: "wander",
    name: "Wanderlust",
  },
  {
    id: "wannaswap",
    symbol: "wanna",
    name: "WannaSwap",
  },
  {
    id: "wanswap",
    symbol: "wasp",
    name: "WanSwap",
  },
  {
    id: "wapswap-finance",
    symbol: "wap",
    name: "WapSwap Finance",
  },
  {
    id: "war-bond",
    symbol: "wbond",
    name: "War Bond",
  },
  {
    id: "warden",
    symbol: "wad",
    name: "Warden",
  },
  {
    id: "warena",
    symbol: "RENA",
    name: "Warena",
  },
  {
    id: "war-of-tribes",
    symbol: "wotg",
    name: "War of Tribes",
  },
  {
    id: "warp-bond",
    symbol: "warp",
    name: "Warp Bond",
  },
  {
    id: "warp-finance",
    symbol: "warp",
    name: "Warp Finance",
  },
  {
    id: "warranty-chain",
    symbol: "wac",
    name: "Warranty Chain",
  },
  {
    id: "warrior-rare-essentials",
    symbol: "ware",
    name: "Warrior Rare Essentials",
  },
  {
    id: "warrior-token",
    symbol: "war",
    name: "Warrior Token",
  },
  {
    id: "warship-battles",
    symbol: "$oil",
    name: "Warship Battles",
  },
  {
    id: "wasabix",
    symbol: "wasabi",
    name: "WasabiX",
  },
  {
    id: "wasdaq-finance",
    symbol: "wsdq",
    name: "Wasdaq Finance",
  },
  {
    id: "wasder",
    symbol: "was",
    name: "Wasder",
  },
  {
    id: "waste-coin",
    symbol: "waco",
    name: "Waste Digital Coin",
  },
  {
    id: "watchdo",
    symbol: "wdo",
    name: "WatchDO",
  },
  {
    id: "watchmen",
    symbol: "WTM",
    name: "WATCHMEN",
  },
  {
    id: "watchtower",
    symbol: "wtw",
    name: "Watchtower",
  },
  {
    id: "water",
    symbol: "WATER",
    name: "Water",
  },
  {
    id: "waterfall-finance",
    symbol: "waterfall",
    name: "Waterfall Finance",
  },
  {
    id: "waterfall-governance-token",
    symbol: "wtf",
    name: "Waterfall Governance Token",
  },
  {
    id: "wault",
    symbol: "waultx",
    name: "Wault",
  },
  {
    id: "waultswap",
    symbol: "wex",
    name: "WaultSwap",
  },
  {
    id: "waultswap-polygon",
    symbol: "wexpoly",
    name: "WaultSwap Polygon",
  },
  {
    id: "wault-usd",
    symbol: "wusd",
    name: "Wault USD",
  },
  {
    id: "waves",
    symbol: "waves",
    name: "Waves",
  },
  {
    id: "waves-community-token",
    symbol: "wct",
    name: "Waves Community Token",
  },
  {
    id: "waves-ducks",
    symbol: "egg",
    name: "Waves Ducks",
  },
  {
    id: "waves-enterprise",
    symbol: "west",
    name: "Waves Enterprise",
  },
  {
    id: "waves-exchange",
    symbol: "wx",
    name: "Waves Exchange",
  },
  {
    id: "wavesgo",
    symbol: "wgo",
    name: "WavesGo",
  },
  {
    id: "wax",
    symbol: "waxp",
    name: "WAX",
  },
  {
    id: "waxe",
    symbol: "waxe",
    name: "WAXE",
  },
  {
    id: "wayawolfcoin",
    symbol: "ww",
    name: "WayaWolfCoin",
  },
  {
    id: "waykichain",
    symbol: "wicc",
    name: "WaykiChain",
  },
  {
    id: "waykichain-governance-coin",
    symbol: "wgrt",
    name: "WaykiChain Governance Coin",
  },
  {
    id: "waytom",
    symbol: "wtm",
    name: "Waytom",
  },
  {
    id: "wazirx",
    symbol: "wrx",
    name: "WazirX",
  },
  {
    id: "wbnb",
    symbol: "wbnb",
    name: "Wrapped BNB",
  },
  {
    id: "wealth-locks",
    symbol: "wlt",
    name: "Wealth Locks",
  },
  {
    id: "wealthsecrets",
    symbol: "wsc",
    name: "WealthSecrets",
  },
  {
    id: "wearesatoshi",
    symbol: "n8v",
    name: "NativeCoin",
  },
  {
    id: "weave",
    symbol: "weave",
    name: "Weave",
  },
  {
    id: "web3-inu",
    symbol: "web3",
    name: "WEB3 Inu",
  },
  {
    id: "webchain",
    symbol: "mintme",
    name: "MintMe.com Coin",
  },
  {
    id: "webcoin",
    symbol: "web",
    name: "Webcoin",
  },
  {
    id: "web-coin-pay",
    symbol: "wec",
    name: "Web Coin Pay",
  },
  {
    id: "webdollar",
    symbol: "webd",
    name: "webdollar",
  },
  {
    id: "webflix",
    symbol: "wfx",
    name: "WebFlix",
  },
  {
    id: "web-four",
    symbol: "webfour",
    name: "WEBFOUR",
  },
  {
    id: "web-innovation-ph",
    symbol: "webn",
    name: "WEBN token",
  },
  {
    id: "weble-ecosystem-token",
    symbol: "wet",
    name: "Weble Ecosystem Token",
  },
  {
    id: "weblock",
    symbol: "won",
    name: "WeBlock",
  },
  {
    id: "webooswap",
    symbol: "weboo",
    name: "WebooSwap",
  },
  {
    id: "web-token-pay",
    symbol: "wtp",
    name: "Web Token Pay",
  },
  {
    id: "wechain-coin",
    symbol: "wxtc",
    name: "WeChain Coin",
  },
  {
    id: "wecoown",
    symbol: "wcx",
    name: "WeCoOwn",
  },
  {
    id: "weecoins",
    symbol: "wcs",
    name: "Weecoins",
  },
  {
    id: "weenie-inu",
    symbol: "weenie",
    name: "Weenie Inu",
  },
  {
    id: "weentar",
    symbol: "wntr",
    name: "Weentar",
  },
  {
    id: "ween-token",
    symbol: "weens",
    name: "Ween Token",
  },
  {
    id: "wegro",
    symbol: "wegro",
    name: "WeGro",
  },
  {
    id: "weiup",
    symbol: "weiup",
    name: "WeiUp",
  },
  {
    id: "weld",
    symbol: "weld",
    name: "Weld",
  },
  {
    id: "wellness-token-economy",
    symbol: "well",
    name: "Wellness Token Economy",
  },
  {
    id: "welltrado",
    symbol: "wtl",
    name: "Welltrado",
  },
  {
    id: "welnance-finance",
    symbol: "wel",
    name: "Welnance Finance",
  },
  {
    id: "we-love-gm",
    symbol: "gm",
    name: "we love gm",
  },
  {
    id: "welups-blockchain",
    symbol: "welups",
    name: "Welups Blockchain",
  },
  {
    id: "wemix-token",
    symbol: "wemix",
    name: "WEMIX Token",
  },
  {
    id: "wenlambo",
    symbol: "wenlambo",
    name: "Wenlambo",
  },
  {
    id: "wen-lambo",
    symbol: "lambo",
    name: "Wen Lambo",
  },
  {
    id: "wenmoon",
    symbol: "wm",
    name: "WenMoon",
  },
  {
    id: "wenwen-eurn",
    symbol: "eurn",
    name: "WENWEN EURN",
  },
  {
    id: "wenwen-jpyn",
    symbol: "jpyn",
    name: "WENWEN JPYN",
  },
  {
    id: "wenwen-sharen",
    symbol: "sharen",
    name: "WENWEN SHAREN",
  },
  {
    id: "wenwen-usdn",
    symbol: "usdn",
    name: "WENWEN USDN",
  },
  {
    id: "wepiggy-coin",
    symbol: "WPC",
    name: "WePiggy Coin",
  },
  {
    id: "wepower",
    symbol: "wpr",
    name: "WePower",
  },
  {
    id: "werenode",
    symbol: "wrc",
    name: "Werenode",
  },
  {
    id: "werewolf-coin",
    symbol: "wwc",
    name: "Werewolf Coin",
  },
  {
    id: "werewolves-game",
    symbol: "wolf",
    name: "Werewolves Game",
  },
  {
    id: "wesing-coin",
    symbol: "wsc",
    name: "WeSing Coin",
  },
  {
    id: "westarter",
    symbol: "war",
    name: "WeStarter",
  },
  {
    id: "weta-vr",
    symbol: "WETA",
    name: "WETA VR",
  },
  {
    id: "weth",
    symbol: "weth",
    name: "WETH",
  },
  {
    id: "wetrust",
    symbol: "trst",
    name: "WeTrust",
  },
  {
    id: "weway",
    symbol: "wwy",
    name: "WeWay",
  },
  {
    id: "weyu",
    symbol: "weyu",
    name: "WEYU",
  },
  {
    id: "wgmi",
    symbol: "wgmi",
    name: "WGMI",
  },
  {
    id: "w-green-pay",
    symbol: "wgp",
    name: "W Green Pay",
  },
  {
    id: "whale",
    symbol: "whale",
    name: "WHALE",
  },
  {
    id: "whale-coin",
    symbol: "whale",
    name: "Whale Coin",
  },
  {
    id: "whale-fall",
    symbol: "whale",
    name: "Whale Fall",
  },
  {
    id: "whalegirl",
    symbol: "WGIRL",
    name: "WhaleGirl",
  },
  {
    id: "whale-hunter-finance",
    symbol: "$moby",
    name: "Whale Hunter Finance",
  },
  {
    id: "whalemap",
    symbol: "wmp",
    name: "Whalemap",
  },
  {
    id: "whaleroom",
    symbol: "whl",
    name: "WhaleRoom",
  },
  {
    id: "whalestreet-shrimp-token",
    symbol: "$hrimp",
    name: "WhaleStreet $hrimp Token",
  },
  {
    id: "whale-vault-nftx",
    symbol: "whale",
    name: "WHALE Vault (NFTX)",
  },
  {
    id: "wheat-token",
    symbol: "wheat",
    name: "Wheat Token (BSC)",
  },
  {
    id: "wheat-token-avax",
    symbol: "wheat",
    name: "Wheat Token (AVAX)",
  },
  {
    id: "wheelers",
    symbol: "wheel",
    name: "Wheelers",
  },
  {
    id: "when-lambo",
    symbol: "lmbo",
    name: "When Lambo",
  },
  {
    id: "when-token",
    symbol: "when",
    name: "WHEN Token",
  },
  {
    id: "whey",
    symbol: "whey",
    name: "WHEY",
  },
  {
    id: "whirl-finance",
    symbol: "whirl",
    name: "Whirl Finance",
  },
  {
    id: "whis-inu",
    symbol: "whis",
    name: "Whis Inu",
  },
  {
    id: "whitecoin",
    symbol: "xwc",
    name: "Whitecoin",
  },
  {
    id: "whiteheart",
    symbol: "white",
    name: "Whiteheart",
  },
  {
    id: "whiterockcasino",
    symbol: "wrc",
    name: "WhiteRockCasino",
  },
  {
    id: "white-whale",
    symbol: "whale",
    name: "White Whale",
  },
  {
    id: "whitex",
    symbol: "whx",
    name: "WhiteX",
  },
  {
    id: "whitex-community",
    symbol: "whxc",
    name: "WhiteX Community",
  },
  {
    id: "whive",
    symbol: "whive",
    name: "Whive",
  },
  {
    id: "whole-earth-coin",
    symbol: "wec",
    name: "Whole Earth Coin",
  },
  {
    id: "whole-network",
    symbol: "node",
    name: "Whole Network",
  },
  {
    id: "wibx",
    symbol: "wbx",
    name: "WiBX",
  },
  {
    id: "wick-finance",
    symbol: "wick",
    name: "Wick Finance",
  },
  {
    id: "wicrypt",
    symbol: "wnt",
    name: "Wicrypt",
  },
  {
    id: "widecoin",
    symbol: "wcn",
    name: "Widecoin",
  },
  {
    id: "wider-coin",
    symbol: "wdr",
    name: "Wider Coin",
  },
  {
    id: "widiland",
    symbol: "widi",
    name: "WidiLand",
  },
  {
    id: "widi-soul",
    symbol: "wso",
    name: "Widi Soul",
  },
  {
    id: "wifedoge",
    symbol: "wifedoge",
    name: "Wifedoge",
  },
  {
    id: "wifi-coin",
    symbol: "wifi",
    name: "Wifi Coin",
  },
  {
    id: "wiggly-finance",
    symbol: "wgl",
    name: "Wiggly Finance",
  },
  {
    id: "wiix-coin",
    symbol: "wxc",
    name: "WIIX Coin",
  },
  {
    id: "wiki-token",
    symbol: "wiki",
    name: "Wiki Token",
  },
  {
    id: "wild-beast-block",
    symbol: "wbb",
    name: "Wild Beast Block",
  },
  {
    id: "wild-credit",
    symbol: "wild",
    name: "Wild Credit",
  },
  {
    id: "wilder-world",
    symbol: "wild",
    name: "Wilder World",
  },
  {
    id: "wildfire",
    symbol: "wdf",
    name: "Wildfire",
  },
  {
    id: "wildfire-token",
    symbol: "wildf",
    name: "Wildfire Token",
  },
  {
    id: "wild-island-game",
    symbol: "wild",
    name: "Wild Island Game",
  },
  {
    id: "wild-ride",
    symbol: "wild",
    name: "Wild Ride",
  },
  {
    id: "williecoin",
    symbol: "willie",
    name: "Williecoin",
  },
  {
    id: "wincash-coin",
    symbol: "wcc",
    name: "Wincash Coin",
  },
  {
    id: "winco",
    symbol: "wco",
    name: "Winco",
  },
  {
    id: "windfall-token",
    symbol: "wft",
    name: "Windfall Token",
  },
  {
    id: "winding-tree",
    symbol: "lif",
    name: "Lif",
  },
  {
    id: "windoge95",
    symbol: "wndg95",
    name: "Windoge95",
  },
  {
    id: "windswap",
    symbol: "windy",
    name: "WindSwap",
  },
  {
    id: "wine-shares",
    symbol: "wine",
    name: "Wine Shares",
  },
  {
    id: "wing-finance",
    symbol: "wing",
    name: "Wing Finance",
  },
  {
    id: "wings",
    symbol: "wings",
    name: "Wings",
  },
  {
    id: "wingswap",
    symbol: "wis",
    name: "WingSwap",
  },
  {
    id: "wink",
    symbol: "win",
    name: "WINkLink",
  },
  {
    id: "winklink-bsc",
    symbol: "win",
    name: "WINkLink BSC",
  },
  {
    id: "winnow",
    symbol: "wnnw",
    name: "WinNow",
  },
  {
    id: "winry-inu",
    symbol: "winry",
    name: "Winry Inu",
  },
  {
    id: "winstars",
    symbol: "wnl",
    name: "WinStars Live",
  },
  {
    id: "wipemyass",
    symbol: "wipe",
    name: "WipeMyAss",
  },
  {
    id: "wirex",
    symbol: "wxt",
    name: "Wirex",
  },
  {
    id: "wiseavax",
    symbol: "wiseavax",
    name: "WiseAvax",
  },
  {
    id: "wise-token11",
    symbol: "wise",
    name: "Wise",
  },
  {
    id: "wish-finance-2",
    symbol: "wish",
    name: "Wish Finance",
  },
  {
    id: "wisteria-swap",
    symbol: "wst",
    name: "Wisteria Swap",
  },
  {
    id: "witchain",
    symbol: "wit",
    name: "WITChain",
  },
  {
    id: "witcher-inu",
    symbol: "winu",
    name: "Witcher Inu",
  },
  {
    id: "witcherverse",
    symbol: "wch",
    name: "WitcherVerse",
  },
  {
    id: "witch-token",
    symbol: "witch",
    name: "Witch Token",
  },
  {
    id: "witnet",
    symbol: "wit",
    name: "Witnet",
  },
  {
    id: "wiva",
    symbol: "wiva",
    name: "WIVA",
  },
  {
    id: "wixlar",
    symbol: "wix",
    name: "Wixlar",
  },
  {
    id: "wizardium",
    symbol: "wizzy",
    name: "Wizardium",
  },
  {
    id: "wizards-and-dragons",
    symbol: "gp",
    name: "Wizards And Dragons",
  },
  {
    id: "wizard-token",
    symbol: "wizard",
    name: "Wizard Token",
  },
  {
    id: "wizard-vault-nftx",
    symbol: "wizard",
    name: "WIZARD Vault (NFTX)",
  },
  {
    id: "wizarre-scroll",
    symbol: "scrl",
    name: "Wizarre Scroll",
  },
  {
    id: "wliti",
    symbol: "wliti",
    name: "wLITI",
  },
  {
    id: "wmatic",
    symbol: "wmatic",
    name: "Wrapped Matic",
  },
  {
    id: "wm-professional",
    symbol: "wmpro",
    name: "WM PROFESSIONAL",
  },
  {
    id: "wodex",
    symbol: "wmt",
    name: "Wodex",
  },
  {
    id: "wojak-finance",
    symbol: "WOJ",
    name: "Wojak Finance",
  },
  {
    id: "wolfecoin",
    symbol: "wolfe",
    name: "Wolfecoin",
  },
  {
    id: "wolf-game-wool",
    symbol: "wool",
    name: "Wolf Game Wool",
  },
  {
    id: "wolfgirl",
    symbol: "WLFGRL",
    name: "Wolfgirl",
  },
  {
    id: "wolf-girl",
    symbol: "wolfgirl",
    name: "Wolf Girl",
  },
  {
    id: "wolf-pups",
    symbol: "wolfies",
    name: "WOLF PUPS",
  },
  {
    id: "wolfsafepoorpeople",
    symbol: "wspp",
    name: "WolfSafePoorPeople",
  },
  {
    id: "wolfsafepoorpeople-polygon",
    symbol: "wspp",
    name: "WolfSafePoorPeople Polygon",
  },
  {
    id: "wolfy",
    symbol: "wolfy",
    name: "WOLFY",
  },
  {
    id: "wolverine",
    symbol: "wlvr",
    name: "Wolverine",
  },
  {
    id: "wolverinu",
    symbol: "wolverinu",
    name: "WOLVERINU",
  },
  {
    id: "wolves-of-wall-street",
    symbol: "wows",
    name: "Wolves of Wall Street",
  },
  {
    id: "women-empowerment-token",
    symbol: "WEMP",
    name: "Women Empowerment Token",
  },
  {
    id: "wom-token",
    symbol: "wom",
    name: "WOM Protocol",
  },
  {
    id: "wonderfi-tokenized-stock",
    symbol: "wndr",
    name: "WonderFi Tokenized Stock",
  },
  {
    id: "wonderhero",
    symbol: "wnd",
    name: "WonderHero",
  },
  {
    id: "wonderland",
    symbol: "time",
    name: "Wonderland",
  },
  {
    id: "woodcoin",
    symbol: "log",
    name: "Woodcoin",
  },
  {
    id: "woof-token",
    symbol: "woof",
    name: "WOOF",
  },
  {
    id: "woof-token-2",
    symbol: "woof",
    name: "Woof Token",
  },
  {
    id: "woofy",
    symbol: "woofy",
    name: "Woofy",
  },
  {
    id: "wool-token",
    symbol: "wool",
    name: "Wool",
  },
  {
    id: "woo-network",
    symbol: "woo",
    name: "WOO Network",
  },
  {
    id: "woonkly-power",
    symbol: "woop",
    name: "Woonkly Power",
  },
  {
    id: "woozoo-music",
    symbol: "wzm",
    name: "Woozoo Music",
  },
  {
    id: "wordl-defi",
    symbol: "wordl",
    name: "Wordl DeFi",
  },
  {
    id: "wordlex",
    symbol: "wdx",
    name: "Wordlex",
  },
  {
    id: "work-quest",
    symbol: "wqt",
    name: "Work Quest",
  },
  {
    id: "worktips",
    symbol: "wtip",
    name: "Worktips",
  },
  {
    id: "worldcoin",
    symbol: "wdc",
    name: "WorldCoin",
  },
  {
    id: "worldcore",
    symbol: "wrc",
    name: "Worldcore",
  },
  {
    id: "world-credit-diamond-coin",
    symbol: "wcdc",
    name: "World Credit Diamond Coin",
  },
  {
    id: "world-mobile-token",
    symbol: "wmt",
    name: "World Mobile Token",
  },
  {
    id: "world-of-defish",
    symbol: "WOD",
    name: "World of Defish",
  },
  {
    id: "world-of-waves",
    symbol: "wow",
    name: "World of Waves",
  },
  {
    id: "worldpet",
    symbol: "wpt",
    name: "WORLDPET",
  },
  {
    id: "world-stream-finance",
    symbol: "$tream",
    name: "World Stream Finance",
  },
  {
    id: "world-token",
    symbol: "world",
    name: "World Token",
  },
  {
    id: "wormfi",
    symbol: "worm",
    name: "WormFi",
  },
  {
    id: "worthwhile",
    symbol: "whe",
    name: "Worthwhile",
  },
  {
    id: "wownero",
    symbol: "wow",
    name: "Wownero",
  },
  {
    id: "wowswap",
    symbol: "wow",
    name: "WOWswap",
  },
  {
    id: "woyager",
    symbol: "wyx",
    name: "Woyager",
  },
  {
    id: "wozx",
    symbol: "wozx",
    name: "Efforce",
  },
  {
    id: "wpp-token",
    symbol: "wpp",
    name: "WPP Token",
  },
  {
    id: "wraith",
    symbol: "wraith",
    name: "Wraith",
  },
  {
    id: "wraith-protocol",
    symbol: "wraith",
    name: "Wraith Protocol",
  },
  {
    id: "wrap-governance-token",
    symbol: "wrap",
    name: "WRAP Governance Token",
  },
  {
    id: "wrapped-ampleforth",
    symbol: "wampl",
    name: "Wrapped Ampleforth",
  },
  {
    id: "wrapped-anatha",
    symbol: "wanatha",
    name: "Wrapped ANATHA",
  },
  {
    id: "wrapped-ar",
    symbol: "war",
    name: "Wrapped AR",
  },
  {
    id: "wrapped-atromg8",
    symbol: "wag8",
    name: "Wrapped ATROMG8",
  },
  {
    id: "wrapped-avax",
    symbol: "wavax",
    name: "Wrapped AVAX",
  },
  {
    id: "wrapped-bch",
    symbol: "wbch",
    name: "Wrapped BCH",
  },
  {
    id: "wrapped-bind",
    symbol: "wbind",
    name: "Wrapped BIND",
  },
  {
    id: "wrapped-bitcoin",
    symbol: "wbtc",
    name: "Wrapped Bitcoin",
  },
  {
    id: "wrapped-bitcoin-stacks",
    symbol: "xbtc",
    name: "Wrapped Bitcoin-Stacks",
  },
  {
    id: "wrapped-btc-wormhole",
    symbol: "wbtc",
    name: "Wrapped BTC (Wormhole)",
  },
  {
    id: "wrapped-busd",
    symbol: "wbusd",
    name: "Wrapped BUSD",
  },
  {
    id: "wrapped-busd-allbridge-from-bsc",
    symbol: "abbusd",
    name: "Wrapped BUSD (Allbridge from BSC)",
  },
  {
    id: "wrapped-celo",
    symbol: "wcelo",
    name: "Wrapped CELO",
  },
  {
    id: "wrapped-celo-dollar",
    symbol: "wcusd",
    name: "Wrapped Celo Dollar",
  },
  {
    id: "wrapped-centrifuge",
    symbol: "wcfg",
    name: "Wrapped Centrifuge",
  },
  {
    id: "wrapped-conceal",
    symbol: "wccx",
    name: "Wrapped Conceal",
  },
  {
    id: "wrapped-cro",
    symbol: "wcro",
    name: "Wrapped CRO",
  },
  {
    id: "wrapped-cryptokitties",
    symbol: "wck",
    name: "Wrapped CryptoKitties",
  },
  {
    id: "wrapped-cusd-allbridge-from-celo",
    symbol: "acusd",
    name: "Wrapped CUSD (Allbridge from Celo)",
  },
  {
    id: "wrapped-dai",
    symbol: "wdai",
    name: "Wrapped DAI",
  },
  {
    id: "wrapped-dgld",
    symbol: "wdgld",
    name: "Wrapped-DGLD",
  },
  {
    id: "wrapped-ducatusx",
    symbol: "wducx",
    name: "Wrapped DucatusX",
  },
  {
    id: "wrapped-ecomi",
    symbol: "womi",
    name: "Wrapped ECOMI",
  },
  {
    id: "wrapped-elrond",
    symbol: "wegld",
    name: "Wrapped Elrond",
  },
  {
    id: "wrapped-fantom",
    symbol: "wftm",
    name: "Wrapped Fantom",
  },
  {
    id: "wrapped-fct",
    symbol: "wfct",
    name: "Wrapped FCT",
  },
  {
    id: "wrapped-filecoin",
    symbol: "wfil",
    name: "Wrapped Filecoin",
  },
  {
    id: "wrapped-gen-0-cryptokitties",
    symbol: "wg0",
    name: "Wrapped Gen-0 CryptoKitties",
  },
  {
    id: "wrapped-hec",
    symbol: "wshec",
    name: "Wrapped HEC",
  },
  {
    id: "wrapped-huobi-token",
    symbol: "wht",
    name: "Wrapped Huobi Token",
  },
  {
    id: "wrapped-ilcoin",
    symbol: "wilc",
    name: "Wrapped ILCOIN",
  },
  {
    id: "wrapped-iotex",
    symbol: "wiotx",
    name: "Wrapped IoTex",
  },
  {
    id: "wrapped-kadena",
    symbol: "wkda",
    name: "Wrapped Kadena",
  },
  {
    id: "wrapped-kcs",
    symbol: "wkcs",
    name: "Wrapped KCS",
  },
  {
    id: "wrapped-leo",
    symbol: "wleo",
    name: "Wrapped LEO",
  },
  {
    id: "wrapped-link",
    symbol: "wlink",
    name: "Wrapped Link",
  },
  {
    id: "wrapped-matic-tezos",
    symbol: "wmatic",
    name: "Wrapped Matic Tezos",
  },
  {
    id: "wrapped-memory",
    symbol: "wmemo",
    name: "Wonderful Memories",
  },
  {
    id: "wrapped-metrix",
    symbol: "mrxb",
    name: "Wrapped Metrix",
  },
  {
    id: "wrapped-moon-cats",
    symbol: "mcat20",
    name: "Wrapped Moon Cats",
  },
  {
    id: "wrapped-nce",
    symbol: "WNCE",
    name: "Wrapped NCE",
  },
  {
    id: "wrapped-ncg",
    symbol: "wncg",
    name: "Wrapped NCG",
  },
  {
    id: "wrapped-near",
    symbol: "wnear",
    name: "Wrapped Near",
  },
  {
    id: "wrapped-newyorkcoin",
    symbol: "wnyc",
    name: "Wrapped NewYorkCoin",
  },
  {
    id: "wrapped-nxm",
    symbol: "wnxm",
    name: "Wrapped NXM",
  },
  {
    id: "wrapped-okt",
    symbol: "wokt",
    name: "Wrapped OKT",
  },
  {
    id: "wrapped-one",
    symbol: "wone",
    name: "Wrapped One",
  },
  {
    id: "wrapped-origin-axie",
    symbol: "woa",
    name: "Wrapped Origin Axie",
  },
  {
    id: "wrapped-pkt",
    symbol: "wpkt",
    name: "Wrapped PKT",
  },
  {
    id: "wrapped-polis",
    symbol: "polis",
    name: "Wrapped Polis",
  },
  {
    id: "wrapped-sexod",
    symbol: "wsexod",
    name: "Wrapped sEXOD",
  },
  {
    id: "wrapped-solana",
    symbol: "sol",
    name: "Wrapped Solana",
  },
  {
    id: "wrapped-staked-metaversepro",
    symbol: "wsmeta",
    name: "Wrapped Staked MetaversePro",
  },
  {
    id: "wrapped-staked-necc",
    symbol: "nnecc",
    name: "Wrapped Staked Necc",
  },
  {
    id: "wrapped-staked-olympus",
    symbol: "wsohm",
    name: "Wrapped Staked Olympus",
  },
  {
    id: "wrapped-statera",
    symbol: "wsta",
    name: "Wrapped Statera",
  },
  {
    id: "wrapped-steth",
    symbol: "wsteth",
    name: "Wrapped stETH",
  },
  {
    id: "wrapped-terra",
    symbol: "luna",
    name: "Wrapped Terra",
  },
  {
    id: "wrapped-tezos",
    symbol: "wxtz",
    name: "Wrapped Tezos",
  },
  {
    id: "wrapped-ton-crystal",
    symbol: "wton",
    name: "Wrapped TON Crystal",
  },
  {
    id: "wrapped-usd",
    symbol: "wusd",
    name: "Wrapped USD",
  },
  {
    id: "wrapped-usdc",
    symbol: "wusdc",
    name: "Wrapped USDC",
  },
  {
    id: "wrapped-usdt",
    symbol: "wusdt",
    name: "Wrapped USDT",
  },
  {
    id: "wrapped-usdt-allbridge-from-polygon",
    symbol: "apusdt",
    name: "Wrapped USDT (Allbridge from Polygon)",
  },
  {
    id: "wrapped-ust",
    symbol: "ust",
    name: "Wrapped UST",
  },
  {
    id: "wrapped-virgin-gen-0-cryptokitties",
    symbol: "wvg0",
    name: "Wrapped Virgin Gen-0 CryptoKittties",
  },
  {
    id: "wrapped-weth",
    symbol: "wweth",
    name: "Wrapped WETH",
  },
  {
    id: "wrapped-widecoin",
    symbol: "wwcn",
    name: "Wrapped Widecoin",
  },
  {
    id: "wrapped-wit",
    symbol: "ewit",
    name: "Wrapped Wit",
  },
  {
    id: "wrapped-wrx",
    symbol: "bwrx",
    name: "Wrapped WRX",
  },
  {
    id: "wrapped-xbtc",
    symbol: "wxbtc",
    name: "Wrapped xBTC",
  },
  {
    id: "wrapped-xdai",
    symbol: "wxdai",
    name: "Wrapped XDAI",
  },
  {
    id: "wrapped-xmr-btse",
    symbol: "wxmr",
    name: "Wrapped XMR by BTSE",
  },
  {
    id: "wrapped-xrp",
    symbol: "wxrp",
    name: "Wrapped XRP",
  },
  {
    id: "wrapped-zcash",
    symbol: "wzec",
    name: "Wrapped Zcash",
  },
  {
    id: "wtf-token",
    symbol: "wtf",
    name: "WTF Token",
  },
  {
    id: "wula",
    symbol: "wula",
    name: "Wula",
  },
  {
    id: "wwbtc",
    symbol: "wwbtc",
    name: "wWBTC",
  },
  {
    id: "wxcoin",
    symbol: "wxc",
    name: "WXCOINS",
  },
  {
    id: "x",
    symbol: "x",
    name: "SpaceGrime X",
  },
  {
    id: "x2",
    symbol: "x2",
    name: "X2",
  },
  {
    id: "x-2",
    symbol: "x",
    name: "X",
  },
  {
    id: "x22",
    symbol: "x22",
    name: "X22",
  },
  {
    id: "x3swap",
    symbol: "x3s",
    name: "X3Swap",
  },
  {
    id: "x42-protocol",
    symbol: "x42",
    name: "X42 Protocol",
  },
  {
    id: "x8-project",
    symbol: "x8x",
    name: "X8X Token",
  },
  {
    id: "x99token",
    symbol: "x99",
    name: "x99Token",
  },
  {
    id: "xaavea",
    symbol: "xaavea",
    name: "xAAVEa",
  },
  {
    id: "xaaveb",
    symbol: "xaaveb",
    name: "xAAVEb",
  },
  {
    id: "x-ae-a-12",
    symbol: "xaea12",
    name: "X AE A-12",
  },
  {
    id: "xanalia",
    symbol: "alia",
    name: "Xanalia",
  },
  {
    id: "xank",
    symbol: "xank",
    name: "Xank",
  },
  {
    id: "xaurum",
    symbol: "xaur",
    name: "Xaurum",
  },
  {
    id: "xavander-coin",
    symbol: "xczm",
    name: "Xavander Coin",
  },
  {
    id: "xazab",
    symbol: "xazab",
    name: "Xazab",
  },
  {
    id: "xbe-token",
    symbol: "xbe",
    name: "XBE Token",
  },
  {
    id: "xbit",
    symbol: "xbt",
    name: "Xbit",
  },
  {
    id: "x-block",
    symbol: "ix",
    name: "X-Block",
  },
  {
    id: "xbn",
    symbol: "xbn",
    name: "Elastic BNB",
  },
  {
    id: "xbn-community-token",
    symbol: "xbc",
    name: "XBN Community Token",
  },
  {
    id: "xbullion",
    symbol: "gold",
    name: "XBullion",
  },
  {
    id: "xbx",
    symbol: "xbx",
    name: "XBX",
  },
  {
    id: "xcad-network",
    symbol: "xcad",
    name: "XCAD Network",
  },
  {
    id: "xcarnival",
    symbol: "xcv",
    name: "XCarnival",
  },
  {
    id: "x-cash",
    symbol: "xcash",
    name: "X-CASH",
  },
  {
    id: "xcel-swap",
    symbol: "xld",
    name: "Xcel Defi",
  },
  {
    id: "xceltoken-plus",
    symbol: "xlab",
    name: "XCELTOKEN PLUS",
  },
  {
    id: "xcf-token",
    symbol: "xcf",
    name: "XCF Token",
  },
  {
    id: "xchainz",
    symbol: "xcz",
    name: "XChainZ",
  },
  {
    id: "xcom",
    symbol: "xc",
    name: "XCOM",
  },
  {
    id: "x-consoles",
    symbol: "game",
    name: "X-Consoles",
  },
  {
    id: "xdai",
    symbol: "xdai",
    name: "XDAI",
  },
  {
    id: "xdai-native-comb",
    symbol: "xcomb",
    name: "xDai Native Comb",
  },
  {
    id: "xdai-stake",
    symbol: "stake",
    name: "STAKE",
  },
  {
    id: "xdce-crowd-sale",
    symbol: "xdc",
    name: "XDC Network",
  },
  {
    id: "xdef-finance",
    symbol: "xdef2",
    name: "Xdef Finance",
  },
  {
    id: "xdefi",
    symbol: "xdefi",
    name: "XDEFI",
  },
  {
    id: "xdefi-governance-token",
    symbol: "xdex",
    name: "XDEFI Governance Token",
  },
  {
    id: "xdoge",
    symbol: "xdoge",
    name: "Xdoge",
  },
  {
    id: "xdollar",
    symbol: "xdo",
    name: "xDollar",
  },
  {
    id: "xdollar-interverse-money",
    symbol: "xim",
    name: "xDollar Interverse Money",
  },
  {
    id: "xdollar-stablecoin",
    symbol: "xusd",
    name: "xDollar Stablecoin",
  },
  {
    id: "xeebster",
    symbol: "xeeb",
    name: "Xeebster",
  },
  {
    id: "xels",
    symbol: "xels",
    name: "XELS",
  },
  {
    id: "xend-finance",
    symbol: "xend",
    name: "Xend Finance",
  },
  {
    id: "xenios",
    symbol: "xnc",
    name: "Xenios",
  },
  {
    id: "xeniumx",
    symbol: "xemx",
    name: "Xeniumx",
  },
  {
    id: "xenon-pay",
    symbol: "x2p",
    name: "Xenon Pay",
  },
  {
    id: "xenon-pay-old",
    symbol: "x2p",
    name: "Xenon Pay [Old]",
  },
  {
    id: "xenon-play",
    symbol: "xplay",
    name: "Xenon Play",
  },
  {
    id: "xenophondao",
    symbol: "xph",
    name: "XenophonDAO",
  },
  {
    id: "xeno-token",
    symbol: "xno",
    name: "Xeno Token",
  },
  {
    id: "xenoverse-crypto",
    symbol: "xenox",
    name: "Xenoverse Crypto",
  },
  {
    id: "xensa",
    symbol: "xensa",
    name: "Xensa",
  },
  {
    id: "xensor",
    symbol: "xsr",
    name: "Xensor",
  },
  {
    id: "xeonbit",
    symbol: "xnb",
    name: "Xeonbit",
  },
  {
    id: "xeonbit-token",
    symbol: "xns",
    name: "Xeonbit Token",
  },
  {
    id: "xeta-reality",
    symbol: "xeta",
    name: "Xeta Reality",
  },
  {
    id: "xeus",
    symbol: "xeus",
    name: "XEUS",
  },
  {
    id: "xfarmer",
    symbol: "xf",
    name: "xFarmer",
  },
  {
    id: "xfinance",
    symbol: "xfi",
    name: "Xfinance",
  },
  {
    id: "xfinite-entertainment-token",
    symbol: "xet",
    name: "Xfinite Entertainment Token",
  },
  {
    id: "xfit",
    symbol: "xfit",
    name: "Xfit",
  },
  {
    id: "xfuel",
    symbol: "xfuel",
    name: "XFUEL",
  },
  {
    id: "xfund",
    symbol: "xfund",
    name: "xFund",
  },
  {
    id: "xgold-coin",
    symbol: "xgold",
    name: "Xgold Coin",
  },
  {
    id: "x-hash",
    symbol: "xsh",
    name: "X-HASH",
  },
  {
    id: "xhashtag",
    symbol: "xtag",
    name: "xHashtag",
  },
  {
    id: "xhunter",
    symbol: "xht",
    name: "xHunter",
  },
  {
    id: "xiamipool",
    symbol: "xmpt",
    name: "XiamiPool",
  },
  {
    id: "xiasi-inu",
    symbol: "xiasi",
    name: "Xiasi Inu",
  },
  {
    id: "xido-finance",
    symbol: "xido",
    name: "Xido Finance",
  },
  {
    id: "xiglute-coin",
    symbol: "xgc",
    name: "Xiglute Coin",
  },
  {
    id: "xigua-finance",
    symbol: "xplus",
    name: "Xigua Finance",
  },
  {
    id: "xincha",
    symbol: "xINCHa",
    name: "xINCHa",
  },
  {
    id: "xio",
    symbol: "xio",
    name: "Blockzero Labs",
  },
  {
    id: "xion-finance",
    symbol: "xgt",
    name: "Xion Finance",
  },
  {
    id: "xiotri",
    symbol: "xiot",
    name: "Xiotri",
  },
  {
    id: "xircus",
    symbol: "xircus",
    name: "Xircus",
  },
  {
    id: "xiropht",
    symbol: "xiro",
    name: "Xiropht",
  },
  {
    id: "xi-token",
    symbol: "xi",
    name: "Xi Token",
  },
  {
    id: "xkawa",
    symbol: "xkawa",
    name: "xKAWA",
  },
  {
    id: "xl-moon",
    symbol: "xlmn",
    name: "XL-Moon",
  },
  {
    id: "xlshiba",
    symbol: "xlshiba",
    name: "XLSHIBA",
  },
  {
    id: "xmark",
    symbol: "xmark",
    name: "xMARK",
  },
  {
    id: "xmax",
    symbol: "xmx",
    name: "XMax",
  },
  {
    id: "xmine",
    symbol: "xmn",
    name: "Xmine",
  },
  {
    id: "xmon",
    symbol: "xmon",
    name: "XMON",
  },
  {
    id: "xmooney",
    symbol: "xM",
    name: "xMooney",
  },
  {
    id: "xnft",
    symbol: "xnft",
    name: "xNFT Protocol",
  },
  {
    id: "xnode",
    symbol: "xnode",
    name: "XNODE",
  },
  {
    id: "xolo",
    symbol: "xolo",
    name: "Xolo",
  },
  {
    id: "xolo-inu",
    symbol: "XL",
    name: "Xolo Inu",
  },
  {
    id: "xolo-metaverse",
    symbol: "xolo",
    name: "Xolo Metaverse",
  },
  {
    id: "xov",
    symbol: "xov",
    name: "XOVBank",
  },
  {
    id: "xp",
    symbol: "xp",
    name: "XP",
  },
  {
    id: "xpandacoin",
    symbol: "xpc",
    name: "XPandaCoin",
  },
  {
    id: "xpansion-game",
    symbol: "xps",
    name: "Xpansion Game",
  },
  {
    id: "xp-network",
    symbol: "xpnet",
    name: "XP Network",
  },
  {
    id: "xpool",
    symbol: "xpo",
    name: "Xpool",
  },
  {
    id: "xpose-protocol",
    symbol: "xp",
    name: "Xpose Protocol",
  },
  {
    id: "x-power-chain",
    symbol: "xpo",
    name: "X-power Chain",
  },
  {
    id: "x-protocol",
    symbol: "pot",
    name: "X Protocol",
  },
  {
    id: "xrdoge",
    symbol: "xrdoge",
    name: "XRdoge",
  },
  {
    id: "xre-global",
    symbol: "xre",
    name: "XRE Global",
  },
  {
    id: "xriba",
    symbol: "xra",
    name: "Xriba",
  },
  {
    id: "xroad",
    symbol: "xri",
    name: "XRoad",
  },
  {
    id: "xrpalike-gene",
    symbol: "xag",
    name: "Xrpalike Gene",
  },
  {
    id: "xrp-apes",
    symbol: "xrpape",
    name: "XRP Apes",
  },
  {
    id: "xrp-bep2",
    symbol: "xrp-bf2",
    name: "XRP BEP2",
  },
  {
    id: "xrp-classic",
    symbol: "xrpc",
    name: "XRP Classic",
  },
  {
    id: "xsgd",
    symbol: "xsgd",
    name: "XSGD",
  },
  {
    id: "xsigma",
    symbol: "sig",
    name: "xSigma",
  },
  {
    id: "xsl-labs",
    symbol: "syl",
    name: "XSL Labs",
  },
  {
    id: "xsushi",
    symbol: "xsushi",
    name: "xSUSHI",
  },
  {
    id: "xsuter",
    symbol: "xsuter",
    name: "xSuter",
  },
  {
    id: "xswap",
    symbol: "xsp",
    name: "XSwap",
  },
  {
    id: "xswap-protocol",
    symbol: "xsp",
    name: "XSwap Protocol",
  },
  {
    id: "xtblock-token",
    symbol: "xtt-b20",
    name: "XTblock Token",
  },
  {
    id: "xtcom-token",
    symbol: "xt",
    name: "XT.com Token",
  },
  {
    id: "xtendcash",
    symbol: "XTNC",
    name: "XtendCash",
  },
  {
    id: "xtime",
    symbol: "xtm",
    name: "XTime",
  },
  {
    id: "xtoken",
    symbol: "xtk",
    name: "xToken",
  },
  {
    id: "x-token",
    symbol: "x-token",
    name: "X-Token",
  },
  {
    id: "xtrabytes",
    symbol: "xby",
    name: "XTRABYTES",
  },
  {
    id: "xtrade",
    symbol: "xtrd",
    name: "XTRD",
  },
  {
    id: "xtra-fund",
    symbol: "xtra",
    name: "Xtra Fund",
  },
  {
    id: "xtra-token",
    symbol: "xtra",
    name: "XTRA Token",
  },
  {
    id: "xtremcoin",
    symbol: "xtr",
    name: "Xtremcoin",
  },
  {
    id: "xtrm",
    symbol: "xtrm",
    name: "XTRM",
  },
  {
    id: "xuez",
    symbol: "xuez",
    name: "Xuez Coin",
  },
  {
    id: "xusd",
    symbol: "xusd",
    name: "xUSD",
  },
  {
    id: "xusd-token",
    symbol: "XUSD",
    name: "xUSD Token",
  },
  {
    id: "xverse",
    symbol: "xvc",
    name: "Xverse",
  },
  {
    id: "xvix",
    symbol: "xvix",
    name: "XVIX",
  },
  {
    id: "xwin-finance",
    symbol: "xwin",
    name: "xWIN Finance",
  },
  {
    id: "x-world-games",
    symbol: "xwg",
    name: "X World Games",
  },
  {
    id: "xx-platform",
    symbol: "xxp",
    name: "XX Platform",
  },
  {
    id: "xxxnifty",
    symbol: "nsfw",
    name: "xxxNifty",
  },
  {
    id: "xy-finance",
    symbol: "xy",
    name: "XY Finance",
  },
  {
    id: "xyo-network",
    symbol: "xyo",
    name: "XYO Network",
  },
  {
    id: "xysl",
    symbol: "xysl",
    name: "xYSL",
  },
  {
    id: "yaan-launchpad",
    symbol: "yaan",
    name: "Yaan Launchpad",
  },
  {
    id: "yacoin",
    symbol: "yac",
    name: "YACoin",
  },
  {
    id: "yadacoin",
    symbol: "yda",
    name: "YadaCoin",
  },
  {
    id: "yaki-gold",
    symbol: "yag",
    name: "Yaki Gold",
  },
  {
    id: "yam-2",
    symbol: "yam",
    name: "YAM",
  },
  {
    id: "yamp-finance",
    symbol: "yamp",
    name: "Yamp Finance",
  },
  {
    id: "yam-v2",
    symbol: "YAMv2",
    name: "YAM v2",
  },
  {
    id: "yandere-shiba",
    symbol: "yansh",
    name: "Yandere Shiba",
  },
  {
    id: "yap-stone",
    symbol: "yap",
    name: "Yap Stone",
  },
  {
    id: "yarloo",
    symbol: "yarl",
    name: "Yarloo",
  },
  {
    id: "yas",
    symbol: "yas",
    name: "YAS",
  },
  {
    id: "yaxis",
    symbol: "yaxis",
    name: "yAxis",
  },
  {
    id: "yay-games",
    symbol: "yay",
    name: "YAY Games",
  },
  {
    id: "yayo-coin",
    symbol: "yayo",
    name: "Yayo Coin",
  },
  {
    id: "yayswap",
    symbol: "yay",
    name: "YaySwap",
  },
  {
    id: "ycash",
    symbol: "yec",
    name: "Ycash",
  },
  {
    id: "y-coin",
    symbol: "yco",
    name: "Y Coin",
  },
  {
    id: "ydragon",
    symbol: "ydr",
    name: "YDragon",
  },
  {
    id: "yeabrswap",
    symbol: "sBEAR",
    name: "yBEARSwap",
  },
  {
    id: "yeafinance",
    symbol: "yea",
    name: "YeaFinance",
  },
  {
    id: "yeager-inu",
    symbol: "yeager",
    name: "Yeager Inu",
  },
  {
    id: "yearn-classic-finance",
    symbol: "earn",
    name: "Yearn Classic Finance",
  },
  {
    id: "yearn-ecosystem-token-index",
    symbol: "yeti",
    name: "Yearn Ecosystem Token Index",
  },
  {
    id: "yearn-ethereum-finance",
    symbol: "yefi",
    name: "Yearn Ethereum Finance",
  },
  {
    id: "yearn-finance",
    symbol: "yfi",
    name: "yearn.finance",
  },
  {
    id: "yearn-finance-bit",
    symbol: "yfbt",
    name: "Yearn Finance Bit",
  },
  {
    id: "yearn-finance-bit2",
    symbol: "yfb2",
    name: "Yearn Finance Bit2",
  },
  {
    id: "yearn-finance-center",
    symbol: "yfc",
    name: "Yearn Finance Center",
  },
  {
    id: "yearn-finance-diamond-token",
    symbol: "yfdt",
    name: "Yearn Finance Diamond Token",
  },
  {
    id: "yearn-finance-dot",
    symbol: "yfdot",
    name: "Yearn Finance DOT",
  },
  {
    id: "yearn-finance-ecosystem",
    symbol: "yfiec",
    name: "Yearn Finance Ecosystem",
  },
  {
    id: "yearn-finance-infrastructure-labs",
    symbol: "ylab",
    name: "Yearn-finance Infrastructure Labs",
  },
  {
    id: "yearn-finance-management",
    symbol: "yefim",
    name: "Yearn Finance Management",
  },
  {
    id: "yearn-finance-network",
    symbol: "yfn",
    name: "Yearn Finance Network",
  },
  {
    id: "yearn-finance-passive-income",
    symbol: "yfpi",
    name: "Yearn Finance Passive Income",
  },
  {
    id: "yearn-finance-protocol",
    symbol: "yfp",
    name: "Yearn Finance Protocol",
  },
  {
    id: "yearn-finance-red-moon",
    symbol: "yfrm",
    name: "Yearn Finance Red Moon",
  },
  {
    id: "yearn-finance-value",
    symbol: "yfiv",
    name: "Yearn Finance Value",
  },
  {
    id: "yearn-finance-wormhole",
    symbol: "yfi",
    name: "yearn.finance (Wormhole)",
  },
  {
    id: "yearn-hold-finance",
    symbol: "yhfi",
    name: "Yearn Hold Finance",
  },
  {
    id: "yearnlab",
    symbol: "ylb",
    name: "Yearnlab",
  },
  {
    id: "yearn-land",
    symbol: "yland",
    name: "Yearn Land",
  },
  {
    id: "yearn-lazy-ape",
    symbol: "YLA",
    name: "Yearn Lazy Ape",
  },
  {
    id: "yearn-secure",
    symbol: "ysec",
    name: "Yearn Secure",
  },
  {
    id: "yearrise",
    symbol: "yrt",
    name: "YearRise",
  },
  {
    id: "yee",
    symbol: "yee",
    name: "Yee",
  },
  {
    id: "yefi",
    symbol: "yefi",
    name: "YeFi",
  },
  {
    id: "yeld-finance",
    symbol: "yeld",
    name: "Yeld Finance",
  },
  {
    id: "yel-finance",
    symbol: "yel",
    name: "Yel.Finance",
  },
  {
    id: "yellow-road",
    symbol: "road",
    name: "Yellow Road",
  },
  {
    id: "yenten",
    symbol: "ytn",
    name: "YENTEN",
  },
  {
    id: "yesorno",
    symbol: "yon",
    name: "YESorNO",
  },
  {
    id: "yeticoin",
    symbol: "yetic",
    name: "YetiCoin",
  },
  {
    id: "yetiswap",
    symbol: "yts",
    name: "YetiSwap",
  },
  {
    id: "yetucoin",
    symbol: "yetu",
    name: "Yetucoin",
  },
  {
    id: "yfarmland-token",
    symbol: "yfarmer",
    name: "YFarmLand Token",
  },
  {
    id: "yfarm-token",
    symbol: "yfarm",
    name: "YFARM Token",
  },
  {
    id: "yfbeta",
    symbol: "yfbeta",
    name: "yfBeta",
  },
  {
    id: "yfbitcoin",
    symbol: "yfbtc",
    name: "YFBitcoin",
  },
  {
    id: "yfc",
    symbol: "yfc",
    name: "YFC",
  },
  {
    id: "yfdai-finance",
    symbol: "yf-dai",
    name: "YfDAI.finance",
  },
  {
    id: "yfdfi-finance",
    symbol: "yfd",
    name: "Your Finance Decentralized",
  },
  {
    id: "yfe-money",
    symbol: "YFE",
    name: "YFE Money",
  },
  {
    id: "yfet",
    symbol: "yfet",
    name: "YFET",
  },
  {
    id: "yff-finance",
    symbol: "yff",
    name: "YFF.Finance",
  },
  {
    id: "yffi-finance",
    symbol: "yffi",
    name: "yffi finance",
  },
  {
    id: "yffii-finance",
    symbol: "yffii",
    name: "YFFII Finance",
  },
  {
    id: "yffs",
    symbol: "yffs",
    name: "YFFS Finance",
  },
  {
    id: "yfia",
    symbol: "yfia",
    name: "YFIA",
  },
  {
    id: "yfibalancer-finance",
    symbol: "yfib",
    name: "YFIBALANCER.FINANCE",
  },
  {
    id: "yfi-business",
    symbol: "yfib",
    name: "YFI Business",
  },
  {
    id: "yfi-credits-group",
    symbol: "yficg",
    name: "YFI Credits Group",
  },
  {
    id: "yfidapp",
    symbol: "yfid",
    name: "YFIDapp",
  },
  {
    id: "yfiexchange-finance",
    symbol: "yfie",
    name: "YFIEXCHANGE.FINANCE",
  },
  {
    id: "yfii-finance",
    symbol: "yfii",
    name: "DFI.money",
  },
  {
    id: "yfii-gold",
    symbol: "yfiig",
    name: "YFII Gold",
  },
  {
    id: "yfiking-finance",
    symbol: "yfiking",
    name: "YFIKing Finance",
  },
  {
    id: "yfilend-finance",
    symbol: "yfild",
    name: "YFILEND.FINANCE",
  },
  {
    id: "yfimobi",
    symbol: "yfim",
    name: "Yfi.mobi",
  },
  {
    id: "yfione",
    symbol: "yfo",
    name: "YFIONE",
  },
  {
    id: "yfiscurity",
    symbol: "yfis",
    name: "YFISCURITY",
  },
  {
    id: "yfive-finance",
    symbol: "yfive",
    name: "YFIVE FINANCE",
  },
  {
    id: "yfix-finance",
    symbol: "yfix",
    name: "YFIX.finance",
  },
  {
    id: "yflink",
    symbol: "yfl",
    name: "YF Link",
  },
  {
    id: "yfmoonshot",
    symbol: "yfms",
    name: "YFMoonshot",
  },
  {
    id: "yfos-finance",
    symbol: "YFOS",
    name: "YFOS.finance",
  },
  {
    id: "yfox-finance",
    symbol: "yfox",
    name: "YFOX Finance",
  },
  {
    id: "yfpro-finance",
    symbol: "yfpro",
    name: "YFPRO Finance",
  },
  {
    id: "yfscience",
    symbol: "yfsi",
    name: "Yfscience",
  },
  {
    id: "yftether",
    symbol: "yfte",
    name: "YFTether",
  },
  {
    id: "yfu-finance",
    symbol: "YFU",
    name: "yfu.finance",
  },
  {
    id: "yfx",
    symbol: "yfx",
    name: "Your Futures Exchange",
  },
  {
    id: "yggdrash",
    symbol: "yeed",
    name: "Yggdrash",
  },
  {
    id: "yi12-stfinance",
    symbol: "yi12",
    name: "Yield Stake Finance",
  },
  {
    id: "yield",
    symbol: "yld",
    name: "Yield",
  },
  {
    id: "yield-app",
    symbol: "yld",
    name: "YIELD App",
  },
  {
    id: "yieldblox",
    symbol: "ybx",
    name: "YieldBlox",
  },
  {
    id: "yield-farming-known-as-ash",
    symbol: "yfka",
    name: "Yield Farming Known as Ash",
  },
  {
    id: "yield-farming-token",
    symbol: "YFT",
    name: "Yield Farming Token",
  },
  {
    id: "yield-goat",
    symbol: "ygoat",
    name: "Yield Goat",
  },
  {
    id: "yield-guild-games",
    symbol: "ygg",
    name: "Yield Guild Games",
  },
  {
    id: "yield-guild-games-south-east-asia",
    symbol: "sea",
    name: "Yield Guild Games South East Asia",
  },
  {
    id: "yield-guild-games-wormhole",
    symbol: "ygg",
    name: "Yield Guild Games (Wormhole)",
  },
  {
    id: "yield-hunt",
    symbol: "gem",
    name: "Yield Hunt",
  },
  {
    id: "yieldly",
    symbol: "yldy",
    name: "Yieldly",
  },
  {
    id: "yield-optimization-platform",
    symbol: "yop",
    name: "Yield Optimization Platform & Protocol",
  },
  {
    id: "yield-parrot",
    symbol: "lory",
    name: "Yield Parrot",
  },
  {
    id: "yield-protocol",
    symbol: "yield",
    name: "Yield Protocol",
  },
  {
    id: "yield-protocol-token",
    symbol: "yield",
    name: "Yield Protocol Token",
  },
  {
    id: "yieldwars-com",
    symbol: "war",
    name: "YieldWars",
  },
  {
    id: "yieldwatch",
    symbol: "watch",
    name: "Yieldwatch",
  },
  {
    id: "yield-yak",
    symbol: "yak",
    name: "Yield Yak",
  },
  {
    id: "yinbi",
    symbol: "yinbi",
    name: "Yinbi",
  },
  {
    id: "yin-finance",
    symbol: "yin",
    name: "YIN Finance",
  },
  {
    id: "ymen-finance",
    symbol: "ymen",
    name: "Ymen.Finance",
  },
  {
    id: "ymplepay",
    symbol: "ympa",
    name: "YmplePay",
  },
  {
    id: "yobit-token",
    symbol: "yo",
    name: "Yobit Token",
  },
  {
    id: "yocoin",
    symbol: "yoc",
    name: "Yocoin",
  },
  {
    id: "yocoinyoco",
    symbol: "yoco",
    name: "YocoinYOCO",
  },
  {
    id: "yohero",
    symbol: "yo",
    name: "YoHero",
  },
  {
    id: "yohero-yhc",
    symbol: "yhc",
    name: "YoHero (YHC)",
  },
  {
    id: "yoink",
    symbol: "ynk",
    name: "Yoink",
  },
  {
    id: "yoi-shiba-inu",
    symbol: "YOSI",
    name: "Yoi Shiba Inu",
  },
  {
    id: "yokai-money",
    symbol: "yokai",
    name: "Yokai Money",
  },
  {
    id: "yokai-network",
    symbol: "yokai",
    name: "Yokai Network",
  },
  {
    id: "yokcoin",
    symbol: "yok",
    name: "YOKcoin",
  },
  {
    id: "yolo-cash",
    symbol: "ylc",
    name: "YOLOCash",
  },
  {
    id: "yoloverse",
    symbol: "yolov",
    name: "YoloVerse",
  },
  {
    id: "yooshi",
    symbol: "yooshi",
    name: "YooShi",
  },
  {
    id: "yooshiba-inu",
    symbol: "YSHIBAINU",
    name: "Yooshiba Inu",
  },
  {
    id: "yoplex",
    symbol: "yplx",
    name: "Yoplex",
  },
  {
    id: "yorocket",
    symbol: "$yo",
    name: "YoRocket",
  },
  {
    id: "yoshi-exchange",
    symbol: "yoshi",
    name: "Yoshi.exchange",
  },
  {
    id: "youcash",
    symbol: "youc",
    name: "YOUcash",
  },
  {
    id: "you-chain",
    symbol: "you",
    name: "YOU Chain",
  },
  {
    id: "youclout",
    symbol: "yct",
    name: "Youclout",
  },
  {
    id: "youforia",
    symbol: "yfr",
    name: "YouForia",
  },
  {
    id: "youlive-coin",
    symbol: "uc",
    name: "YouLive Coin",
  },
  {
    id: "young-boys-fan-token",
    symbol: "ybo",
    name: "Young Boys Fan Token",
  },
  {
    id: "youswap",
    symbol: "you",
    name: "YouSwap",
  },
  {
    id: "youves-uusd",
    symbol: "uusd",
    name: "Youves uUSD",
  },
  {
    id: "youves-you-governance",
    symbol: "you",
    name: "Youves YOU Governance",
  },
  {
    id: "yoyow",
    symbol: "yoyow",
    name: "YOYOW",
  },
  {
    id: "yplutus",
    symbol: "yplt",
    name: "yplutus",
  },
  {
    id: "yrise-finance",
    symbol: "yrise",
    name: "yRise Finance",
  },
  {
    id: "ysl",
    symbol: "ysl",
    name: "YSL",
  },
  {
    id: "ysl-io",
    symbol: "sysl",
    name: "YSL.IO",
  },
  {
    id: "ysoy-chain",
    symbol: "ysoy",
    name: "YSOY Chain",
  },
  {
    id: "ystar",
    symbol: "ysr",
    name: "Ystar",
  },
  {
    id: "ytho-online",
    symbol: "ytho",
    name: "YTHO Online",
  },
  {
    id: "ytofu",
    symbol: "ytofu",
    name: "yTOFU",
  },
  {
    id: "ytsla-finance",
    symbol: "ytsla",
    name: "yTSLA Finance",
  },
  {
    id: "ytv-coin",
    symbol: "ytv",
    name: "YTV Coin",
  },
  {
    id: "yuan",
    symbol: "yuan",
    name: "YUAN",
  },
  {
    id: "yuan-chain-coin",
    symbol: "ycc",
    name: "Yuan Chain Coin",
  },
  {
    id: "yuang-coin",
    symbol: "yuang",
    name: "Yuang Coin",
  },
  {
    id: "yucreat",
    symbol: "yuct",
    name: "Yucreat",
  },
  {
    id: "yugi",
    symbol: "yugi",
    name: "Yugi",
  },
  {
    id: "yu-gi-eth",
    symbol: "yge",
    name: "Yu-Gi-Eth!",
  },
  {
    id: "yukon",
    symbol: "yukon",
    name: "Yukon",
  },
  {
    id: "yummy",
    symbol: "yummy",
    name: "Yummy",
  },
  {
    id: "yumyumfarm",
    symbol: "yum",
    name: "YumYumFarm",
  },
  {
    id: "yunex",
    symbol: "yun",
    name: "YunEx Yun Token",
  },
  {
    id: "yuno-finance",
    symbol: "yuno",
    name: "YUNo Finance",
  },
  {
    id: "yup",
    symbol: "yup",
    name: "Yup",
  },
  {
    id: "yusra",
    symbol: "yusra",
    name: "YUSRA",
  },
  {
    id: "yvault-lp-ycurve",
    symbol: "yvault-lp-ycurve",
    name: "yUSD",
  },
  {
    id: "yvboost",
    symbol: "yvboost",
    name: "Yearn Compounding veCRV yVault",
  },
  {
    id: "yvs-finance",
    symbol: "yvs",
    name: "YVS Finance",
  },
  {
    id: "yye-energy",
    symbol: "yye",
    name: "YYE Energy",
  },
  {
    id: "yyfi-protocol",
    symbol: "yyfi",
    name: "YYFI.Protocol",
  },
  {
    id: "zabaku-inu",
    symbol: "zabaku",
    name: "Zabaku Inu",
  },
  {
    id: "zabu-token",
    symbol: "zabu",
    name: "Zabu Token",
  },
  {
    id: "zac",
    symbol: "zac",
    name: "ZAC",
  },
  {
    id: "zada",
    symbol: "zada",
    name: "Zada",
  },
  {
    id: "zafira",
    symbol: "zfai",
    name: "Zafira",
  },
  {
    id: "zaif-token",
    symbol: "zaif",
    name: "Zaif Token",
  },
  {
    id: "zaigar-finance",
    symbol: "zaif",
    name: "Zaigar Finance",
  },
  {
    id: "zam-io",
    symbol: "zam",
    name: "Zam.io",
  },
  {
    id: "zamzam",
    symbol: "zamzam",
    name: "ZAMZAM",
  },
  {
    id: "zano",
    symbol: "zano",
    name: "Zano",
  },
  {
    id: "zantepay",
    symbol: "zantepay",
    name: "Zantepay",
  },
  {
    id: "zap",
    symbol: "zap",
    name: "Zap",
  },
  {
    id: "zap-defi",
    symbol: "zap",
    name: "Zap DeFi",
  },
  {
    id: "zarcash",
    symbol: "zarh",
    name: "Zarhexcash",
  },
  {
    id: "zasset-zusd",
    symbol: "zusd",
    name: "Zasset zUSD",
  },
  {
    id: "zatcoin",
    symbol: "zatcoin",
    name: "ZatCoin",
  },
  {
    id: "zbank-token",
    symbol: "zbk",
    name: "Zbank Token",
  },
  {
    id: "zb-token",
    symbol: "zb",
    name: "ZB Token",
  },
  {
    id: "zcash",
    symbol: "zec",
    name: "Zcash",
  },
  {
    id: "zccoin",
    symbol: "zcc",
    name: "ZcCoin",
  },
  {
    id: "zclassic",
    symbol: "zcl",
    name: "Zclassic",
  },
  {
    id: "zcnox-coin",
    symbol: "zcnox",
    name: "ZCNOX Coin",
  },
  {
    id: "zcoin",
    symbol: "firo",
    name: "Firo",
  },
  {
    id: "zcon-protocol",
    symbol: "zcon",
    name: "Zcon Protocol",
  },
  {
    id: "zcore",
    symbol: "zcr",
    name: "ZCore",
  },
  {
    id: "zcore-finance",
    symbol: "zefi",
    name: "ZCore Finance",
  },
  {
    id: "zealium",
    symbol: "nzl",
    name: "Zealium",
  },
  {
    id: "zebi",
    symbol: "zco",
    name: "Zebi",
  },
  {
    id: "zedxion",
    symbol: "zedxion",
    name: "Zedxion",
  },
  {
    id: "zeedex",
    symbol: "zdex",
    name: "Zeedex",
  },
  {
    id: "zeepin",
    symbol: "zpt",
    name: "Zeepin",
  },
  {
    id: "zeitcoin",
    symbol: "zeit",
    name: "Zeitcoin",
  },
  {
    id: "zelaapayae",
    symbol: "zpae",
    name: "ZelaaPayAE",
  },
  {
    id: "zelcash",
    symbol: "flux",
    name: "Flux",
  },
  {
    id: "zelda-inu",
    symbol: "zlda",
    name: "Zelda Inu",
  },
  {
    id: "zeloop-eco-reward",
    symbol: "erw",
    name: "ZeLoop Eco Reward",
  },
  {
    id: "zelwin",
    symbol: "zlw",
    name: "Zelwin",
  },
  {
    id: "zenad",
    symbol: "znd",
    name: "Zenad",
  },
  {
    id: "zencash",
    symbol: "zen",
    name: "Horizen",
  },
  {
    id: "zenfi-ai",
    symbol: "zenfi",
    name: "ZenFi AI",
  },
  {
    id: "zenfuse",
    symbol: "zefu",
    name: "Zenfuse",
  },
  {
    id: "zenith-chain",
    symbol: "zenith",
    name: "Zenith Chain",
  },
  {
    id: "zenith-token",
    symbol: "zenx",
    name: "Zenith Token",
  },
  {
    id: "zenko",
    symbol: "znko",
    name: "Zenko",
  },
  {
    id: "zenlink-network-token",
    symbol: "zlk",
    name: "Zenlink Network Token",
  },
  {
    id: "zennies",
    symbol: "zeni",
    name: "Zennies",
  },
  {
    id: "zeno-inu",
    symbol: "zeno",
    name: "Zeno Inu",
  },
  {
    id: "zenon",
    symbol: "znn",
    name: "Zenon",
  },
  {
    id: "zensports",
    symbol: "sports",
    name: "ZenSports",
  },
  {
    id: "zenswap-network-token",
    symbol: "znt",
    name: "Zenswap Network Token",
  },
  {
    id: "zent-cash",
    symbol: "ztc",
    name: "Zent Cash",
  },
  {
    id: "zenzo",
    symbol: "znz",
    name: "ZENZO",
  },
  {
    id: "zeon",
    symbol: "zeon",
    name: "ZEON Network",
  },
  {
    id: "zeos",
    symbol: "zeos",
    name: "ZEOS",
  },
  {
    id: "zeppelin-dao",
    symbol: "zep",
    name: "Zeppelin Dao",
  },
  {
    id: "zeptagram",
    symbol: "zptc",
    name: "Zeptacoin",
  },
  {
    id: "zer-dex",
    symbol: "zdx",
    name: "Zer-Dex",
  },
  {
    id: "zero",
    symbol: "zer",
    name: "Zero",
  },
  {
    id: "zero-collateral-dai",
    symbol: "zai",
    name: "Zero Collateral Dai",
  },
  {
    id: "zero-exchange",
    symbol: "zero",
    name: "0.exchange",
  },
  {
    id: "zerogoki",
    symbol: "rei",
    name: "Zerogoki",
  },
  {
    id: "zerogoki-usd",
    symbol: "zusd",
    name: "Zerogoki USD",
  },
  {
    id: "zerohybrid",
    symbol: "zht",
    name: "ZeroHybrid Network",
  },
  {
    id: "zeronauts",
    symbol: "zns",
    name: "Zeronauts",
  },
  {
    id: "zeroswap",
    symbol: "zee",
    name: "ZeroSwap",
  },
  {
    id: "zero-tech",
    symbol: "zero",
    name: "Zero Tech",
  },
  {
    id: "zerotwohm",
    symbol: "z2o",
    name: "ZeroTwOhm",
  },
  {
    id: "zero-utility-token",
    symbol: "zut",
    name: "Zero Utility Token",
  },
  {
    id: "zerozed",
    symbol: "x0z",
    name: "Zerozed",
  },
  {
    id: "zetacoin",
    symbol: "zet",
    name: "Zetacoin",
  },
  {
    id: "zeto",
    symbol: "ztc",
    name: "ZeTo",
  },
  {
    id: "zetta-bitcoin-hashrate-token",
    symbol: "zbtc",
    name: "Zetta Bitcoin Hashrate Token",
  },
  {
    id: "zettelkasten",
    symbol: "zttl",
    name: "Zettelkasten",
  },
  {
    id: "zeus10000",
    symbol: "zeus10000",
    name: "ZEUS10000",
  },
  {
    id: "zeusshield",
    symbol: "zsc",
    name: "Zeusshield",
  },
  {
    id: "zeuxcoin",
    symbol: "zuc",
    name: "ZeuxCoin",
  },
  {
    id: "zfarm",
    symbol: "zfarm",
    name: "ZFarm",
  },
  {
    id: "zhegic",
    symbol: "zhegic",
    name: "zHEGIC",
  },
  {
    id: "zignaly",
    symbol: "zig",
    name: "Zignaly",
  },
  {
    id: "zigzag",
    symbol: "zag",
    name: "ZigZag",
  },
  {
    id: "zik-token",
    symbol: "zik",
    name: "Ziktalk",
  },
  {
    id: "zilchess",
    symbol: "zch",
    name: "ZilChess",
  },
  {
    id: "zild-finance",
    symbol: "zild",
    name: "Zild Finance",
  },
  {
    id: "zilla",
    symbol: "zla",
    name: "Zilla",
  },
  {
    id: "zilla-dao",
    symbol: "zd",
    name: "Zilla DAO",
  },
  {
    id: "zillamatrix",
    symbol: "zmax",
    name: "ZillaMatrix",
  },
  {
    id: "zillioncoin",
    symbol: "zln",
    name: "ZillionCoin",
  },
  {
    id: "zillionlife",
    symbol: "zlf",
    name: "ZillonLife",
  },
  {
    id: "zilliqa",
    symbol: "zil",
    name: "Zilliqa",
  },
  {
    id: "zilpay-wallet",
    symbol: "zlp",
    name: "ZilPay Wallet",
  },
  {
    id: "zilstream",
    symbol: "stream",
    name: "ZilStream",
  },
  {
    id: "zilsurvey",
    symbol: "srv",
    name: "zilSurvey",
  },
  {
    id: "zilswap",
    symbol: "zwap",
    name: "ZilSwap",
  },
  {
    id: "zilwall",
    symbol: "zwall",
    name: "ZilWall",
  },
  {
    id: "zilwall-paint",
    symbol: "zpaint",
    name: "ZilWall Paint",
  },
  {
    id: "zimbocash",
    symbol: "zash",
    name: "ZIMBOCASH",
  },
  {
    id: "zin",
    symbol: "Zin",
    name: "Zin",
  },
  {
    id: "zion",
    symbol: "zion",
    name: "Zion",
  },
  {
    id: "zioncoin",
    symbol: "znc",
    name: "ZionCoin",
  },
  {
    id: "zionomics",
    symbol: "ZIOX",
    name: "Zionomics",
  },
  {
    id: "ziot",
    symbol: "ziot",
    name: "Ziot",
  },
  {
    id: "zip",
    symbol: "zip",
    name: "Zipper Network",
  },
  {
    id: "zipmex-token",
    symbol: "zmt",
    name: "Zipmex Token",
  },
  {
    id: "zippie",
    symbol: "zipt",
    name: "Zippie",
  },
  {
    id: "zipswap",
    symbol: "zip",
    name: "ZipSwap",
  },
  {
    id: "ziticoin",
    symbol: "ziti",
    name: "Ziticoin",
  },
  {
    id: "zjlt-distributed-factoring-network",
    symbol: "zjlt",
    name: "ZJLT Distributed Factoring Network",
  },
  {
    id: "zkchaos",
    symbol: "chaos",
    name: "ZKCHAOS",
  },
  {
    id: "zkswap",
    symbol: "zks",
    name: "ZKSwap",
  },
  {
    id: "zktube",
    symbol: "zkt",
    name: "zkTube",
  },
  {
    id: "zloadr",
    symbol: "zdr",
    name: "Zloadr",
  },
  {
    id: "zlot",
    symbol: "zlot",
    name: "zLOT",
  },
  {
    id: "zmine",
    symbol: "zmn",
    name: "ZMINE",
  },
  {
    id: "zodiac",
    symbol: "zdc",
    name: "Zodiac",
  },
  {
    id: "zodiacdao",
    symbol: "zd",
    name: "ZodiacDAO",
  },
  {
    id: "zodiacs",
    symbol: "zdc",
    name: "Zodiacs",
  },
  {
    id: "zodiacsv2",
    symbol: "zdcv2",
    name: "ZodiacsV2",
  },
  {
    id: "zodium",
    symbol: "zodi",
    name: "Zodium",
  },
  {
    id: "zoe-cash",
    symbol: "zoe",
    name: "Zoe Cash",
  },
  {
    id: "zoid-pay",
    symbol: "zpay",
    name: "ZoidPay",
  },
  {
    id: "zoints",
    symbol: "zee",
    name: "Zoints",
  },
  {
    id: "zomainfinity",
    symbol: "zin",
    name: "ZomaInfinity",
  },
  {
    id: "zombiecake",
    symbol: "zc",
    name: "ZombieCake",
  },
  {
    id: "zombie-inu",
    symbol: "zinu",
    name: "Zombie Inu",
  },
  {
    id: "zombie-rising",
    symbol: "zomb",
    name: "Zombie Rising",
  },
  {
    id: "zombie-skull-games",
    symbol: "zskull",
    name: "Zombie Skull Games",
  },
  {
    id: "zomfi",
    symbol: "zomfi",
    name: "Zomfi",
  },
  {
    id: "zomi",
    symbol: "zomi",
    name: "ZOMI",
  },
  {
    id: "zonecoin",
    symbol: "zne",
    name: "Zonecoin",
  },
  {
    id: "zoobit",
    symbol: "zbt",
    name: "Zoobit",
  },
  {
    id: "zoo-coin",
    symbol: "zoo",
    name: "ZooCoin",
  },
  {
    id: "zoo-crypto-world",
    symbol: "zoo",
    name: "ZOO Crypto World",
  },
  {
    id: "zookeeper",
    symbol: "zoo",
    name: "ZooKeeper",
  },
  {
    id: "zoo-labs",
    symbol: "zoo",
    name: "Zoo Labs",
  },
  {
    id: "zoomcoin",
    symbol: "zoom",
    name: "Zoomcoin",
  },
  {
    id: "zoom-protocol",
    symbol: "zom",
    name: "Zoom Protocol",
  },
  {
    id: "zoomswap",
    symbol: "zm",
    name: "ZoomSwap",
  },
  {
    id: "zooshi",
    symbol: "zooshi",
    name: "Zooshi",
  },
  {
    id: "zoo-token",
    symbol: "zoot",
    name: "Zoo Token",
  },
  {
    id: "zoracles",
    symbol: "zora",
    name: "Zoracles",
  },
  {
    id: "zoro-inu",
    symbol: "zoro",
    name: "Zoro Inu",
  },
  {
    id: "zort",
    symbol: "zort",
    name: "Zort",
  },
  {
    id: "zotova",
    symbol: "zoa",
    name: "Zotova",
  },
  {
    id: "zper",
    symbol: "zpr",
    name: "ZPER",
  },
  {
    id: "zrcoin",
    symbol: "zrc",
    name: "ZrCoin",
  },
  {
    id: "zrocor",
    symbol: "zcor",
    name: "Zrocor",
  },
  {
    id: "ztcoin",
    symbol: "zt",
    name: "ZBG Token",
  },
  {
    id: "zuescrowdfunding",
    symbol: "zeus",
    name: "ZeusNetwork",
  },
  {
    id: "zufinance",
    symbol: "zuf",
    name: "ZuFinance",
  },
  {
    id: "zug",
    symbol: "zug",
    name: "EtherOrcs",
  },
  {
    id: "zuki",
    symbol: "zuki",
    name: "Zuki",
  },
  {
    id: "zuki-moba",
    symbol: "zuki",
    name: "Zuki Moba",
  },
  {
    id: "zumcoin",
    symbol: "zum",
    name: "ZumCoin",
  },
  {
    id: "zum-token",
    symbol: "zum",
    name: "ZUM TOKEN",
  },
  {
    id: "zuna",
    symbol: "zuna",
    name: "Zuna",
  },
  {
    id: "zupi-coin",
    symbol: "zupi",
    name: "Zupi Coin",
  },
  {
    id: "zuplo",
    symbol: "zlp",
    name: "Zuplo",
  },
  {
    id: "zurrency",
    symbol: "zurr",
    name: "ZURRENCY",
  },
  {
    id: "zusd",
    symbol: "zusd",
    name: "ZUSD",
  },
  {
    id: "zuz-protocol",
    symbol: "zuz",
    name: "ZUZ Protocol",
  },
  {
    id: "zynecoin",
    symbol: "zyn",
    name: "Zynecoin",
  },
  {
    id: "zyro",
    symbol: "zyro",
    name: "Zyro",
  },
  {
    id: "zytara-dollar",
    symbol: "zusd",
    name: "Zytara Dollar",
  },
  {
    id: "zyx",
    symbol: "zyx",
    name: "ZYX",
  },
  {
    id: "zzz-finance",
    symbol: "zzz",
    name: "zzz.finance",
  },
  {
    id: "zzz-finance-v2",
    symbol: "zzzv2",
    name: "zzz.finance v2",
  },
];

export { coinList }