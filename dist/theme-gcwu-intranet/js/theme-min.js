/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-13 07:35 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),menu:null,init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var u,x,G="",e,l,N=pe.dic.get("%settings"),w,q,f,L,Q="",s='<a data-role="button" data-iconpos="notext"',z=' data-rel="popup" data-position-to="window"',n=s+z,A='<div data-role="popup" data-overlay-theme="a"',C='<div data-role="header"',P=C+"><h1>",y=' data-theme="c" class="ui-corner-all">',o=C+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',M=s+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",J=n+' data-icon="back" class="ui-btn-left"',H=">"+pe.dic.get("%back")+"</a>",O="</div></div>",m='<ul data-role="listview">',v="",E,k,r,p,D,g,d,K,t,F,B,I,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");q=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");x=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?q:b.bcrumb.children(":header")[0])).innerHTML;u=A+' id="jqm-wb-mb">'+P+e+"</h1>"+M+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){B=b.bcrumb[0];I=B.getElementsByTagName("a")[0].href;u+='<section><div id="jqm-mb-location-text">'+B.innerHTML+"</div></section>"}else{u+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){G+="<section><div><h2>"+q.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";B=pe.secnav[0]}if(b.menubar.length!==0){G+="<section><div><h2>"+x+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}u+='<div id="jqm-mb-menu"></div></nav></div></div></div>';Q+=u;b.menu=G;v+=n+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){l=pe.dic.get("%search");f=b.search[0].innerHTML;L=A+' id="jqm-wb-search">'+P+l+"</h1>"+M+'</div><div data-role="content"><div>'+f.substring(f.indexOf("<form"))+"</div></div></div>";Q+=L;v+=n+' data-icon="search" href="#jqm-wb-search">'+l+"</a>"}j='<div data-role="header">';if(b.wmms.length!==0){B=b.wmms[0].getElementsByTagName("img")[0];j+='<div class="ui-title"><img src="'+B.getAttribute("src").replace(".gif","-bg.gif")+'" width="90" alt="'+B.getAttribute("alt")+'" /></div>'}else{j+='<div class="ui-title"></div>'}j+='<map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof I!=="undefined"){j+=s+' href="'+I+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=s+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(v.length!==0){j+=v}j+=n+' href="#popupSettings" data-icon="gear">'+N+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";p=b.gcnb.find('li[id*="-lang"]');w=A+' id="popupSettings"'+y;w+=o+N+"</h1>"+M+"</div>";w+=h+m;if(p.length>0){w+='<li><a href="#popupLanguages"'+z+">"+pe.dic.get("%languages")+"</a></li>"}w+='<li class="ui-corner-bottom"><a href="#popupAbout"'+z+">"+pe.dic.get("%about")+"</a></li>";w+="</ul>"+O;if(p.length>0){w+=A+' id="popupLanguages"'+y;w+=o+pe.dic.get("%languages")+"</h1>"+J+' href="#popupSettings"'+H+"</div>";w+=h+m;if(p.filter('[id*="-lang-current"]').length===0){w+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}F=p.get();for(K=0,t=F.length;K!==t;K+=1){B=F[K];k=B.childNodes[0];w+="<li"+(K===(t-1)?' class="ui-corner-bottom"':"");if(B.id.indexOf("-lang-current")!==-1){w+='><a href="javascript:;" class="ui-disabled">'+B.innerHTML+pe.dic.get("%current")+"</a></li>"}else{w+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}w+="</ul>"+O}w+=A+' id="popupAbout"'+y;w+=o+pe.dic.get("%about")+"</h1>"+J+' href="#popupSettings"'+H+"</div>";w+=h+m;w+="<li>"+b.title.text()+"</li>";B=pe.main.find("#gcwu-date-mod").children();if(B.length!==0){d=B[1];if(d.getElementsByTagName("time").length===0){w+="<li>"+B[0].innerHTML+" "+d.innerHTML+"</li>"}}E=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(K=0,t=E.length;K!==t;K+=1){k=E[K];w+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}E=b.sft.find(".gcwu-col-head a").get();for(K=0,t=E.length;K!==t;K+=1){k=E[K];B=k.innerHTML;d=B.toLowerCase();w+="<li"+(K===(t-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+B+"</a></li>"}w+="</ul>"+O;pe.bodydiv.append(Q+w)}else{p=document.getElementById("gcwu-lang");if(p!==null){F=p.getElementsByTagName("li");D='<div data-role="navbar"><ul>';for(K=0,t=F.length;K<t;K+=1){B=F[K];k=B.getElementsByTagName("a")[0];D+='<li><a href="'+k.href+'"'+(B.hasAttribute("lang")?' lang="'+B.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}D+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=D;p=document.getElementById("gcwu-other-lang");if(p!==null){p.parentNode.removeChild(p)}}d=document.getElementById("gcwu-tc");if(d!==null){F=d.getElementsByTagName("li");r='<ul class="ui-grid-a">';for(K=0,t=F.length;K<t;K+=1){B=F[K];k=B.getElementsByTagName("a")[0];r+='<li class="ui-block-'+(K%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(B.hasAttribute("lang")?' lang="'+B.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}r+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=r}if(b.wmms.length!==0){B=b.wmms[0];pe.footer[0].getElementsByTagName("footer")[0].appendChild(B.cloneNode(true));B.parentNode.removeChild(B)}}c(document).on("pagecreate",function(){if(b.menubar.length!==0){B=b.psnb[0];B.parentNode.removeChild(B)}if(b.search.length!==0){B=b.search[0];B.parentNode.removeChild(B)}if(v.length!==0){var U=b.gcnb.find("#gcwu-mnavbar"),W=pe.bodydiv.find("#jqm-mb-menu"),V,T,R,S;U.removeClass("wb-hide");if(W.length!==0){W.append(b.menu);U.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){W.trigger("create");V=W.find(".ui-controlgroup");T=V.get();t=T.length;while(t--){B=T[t];S=B.getElementsByTagName("li")[0];if(S.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&S.className.indexOf("ui-corner-top")===-1){S.className+=" ui-corner-top"}R=V.eq(t).find(".ui-btn").get();B=R[R.length-1];if(B.className.indexOf("ui-corner-bottom")===-1){B.className+=" ui-corner-bottom"}}})}}function i(Y,X,ab,aa){var Z;c.mobile.showPageLoadingMsg();Z=c.mobile.transitionHandlers.simultaneous("pop",X,ab,aa);Z.done(function(){c.mobile.hidePageLoadingMsg()});return Z}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));