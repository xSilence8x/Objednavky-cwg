# Objednavky-cwg
Tento jednoduchý skript spuštěný z konzole na webové stránce eventu na geocaching.com vypíše do konzole hráče, jejich objednávky cwg a počet.
Skript prohledává logy hráčů, kde pomocí regexu hledá shodu pro část stringu: 
```const regex = /\+[0-9]{1,2}CWG/;```
Příkladem shody je ```+2CWG```
Hráči jsou v listingu eventu vybízeni k objednávce cwg pomocí daného vzoru.
