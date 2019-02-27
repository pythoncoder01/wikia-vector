// ==UserScript==
// @name     Wikia Vector
// @version  2
// @grant    none
// ==/UserScript==

var vectorcss = "\
..mw-3d-wrapper {\
 display:inline-block;\
 position:relative;\
 overflow:hidden;\
 vertical-align:top \
}\
.mw-3d-wrapper:after {\
 content:attr(data-label);\
 position:absolute;\
 pointer-events:none;\
 top:11px;\
 left:11px;\
 color:#1e1f21;\
 font-size:14px;\
 line-height:19px;\
 font-weight:bold;\
 opacity:0.8;\
 padding:2px 5px;\
 background-color:#f8f9fa;\
 border-radius:2px \
}\
.mw-3d-thumb-placeholder {\
 display:inline-block;\
 text-decoration:none;\
 color:#222 \
}\
.mw-cite-backlink,\
.cite-accessibility-label {\
 -moz-user-select:none;\
 -webkit-user-select:none;\
 -ms-user-select:none;\
 user-select:none \
}\
.mw-references-columns {\
 -webkit-column-width:30em;\
 -moz-column-width:30em;\
 column-width:30em \
}\
.mw-references-columns li {\
 -webkit-column-break-inside:avoid;\
 page-break-inside:avoid;\
 break-inside:avoid-column \
}\
sup.reference {\
 unicode-bidi:-moz-isolate;\
 unicode-bidi:-webkit-isolate;\
 unicode-bidi:isolate;\
 white-space:nowrap;\
 font-weight:normal;\
 font-style:normal \
}\
ol.references li:target,\
sup.reference:target {\
 background-color:#eaf3ff \
}\
.mw-ext-cite-error {\
 font-weight:bold;\
 unicode-bidi:embed \
}\
.mw-cite-dir-ltr .reference-text {\
 direction:ltr;\
 unicode-bidi:embed \
}\
.mw-cite-dir-rtl .reference-text {\
 direction:rtl;\
 unicode-bidi:embed \
}\
@media print {\
 .mw-cite-backlink {\
  display:none  \
 }\
}\
.oo-ui-icon-bell {\
 background-image:url(/w/load.php?modules=ext.echo.badgeicons&image=bell&format=rasterized&lang=en&skin=vector);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Ctitle%3E bell %3C/title%3E %3Cpath d=%22M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z%22/%3E %3C/svg%3E\") \
}\
.oo-ui-icon-tray {\
 background-image:url(/w/load.php?modules=ext.echo.badgeicons&image=tray&format=rasterized&lang=en&skin=vector);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Ctitle%3E tray %3C/title%3E %3Cpath d=%22M17 1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 12h-4l-1 2H8l-1-2H3V3h14z%22/%3E %3C/svg%3E\") \
}\
#pt-notifications-alert .mw-echo-notifications-badge,\
#pt-notifications-notice .mw-echo-notifications-badge {\
 position:relative;\
 display:block;\
 width:20px;\
 height:20px;\
 margin:0 2px;\
 top:-1005px;\
 cursor:pointer;\
 text-decoration:none;\
 line-height:normal;\
 -webkit-box-sizing:border-box;\
 -moz-box-sizing:border-box;\
 box-sizing:border-box \
}\
#pt-notifications-alert .mw-echo-notifications-badge:hover,\
#pt-notifications-notice .mw-echo-notifications-badge:hover,\
#pt-notifications-alert .mw-echo-notifications-badge:active,\
#pt-notifications-notice .mw-echo-notifications-badge:active,\
#pt-notifications-alert .mw-echo-notifications-badge:focus,\
#pt-notifications-notice .mw-echo-notifications-badge:focus {\
 outline:0;\
 -moz-outline-style:0 \
}\
#pt-notifications-alert .mw-echo-notifications-badge-dimmed,\
#pt-notifications-notice .mw-echo-notifications-badge-dimmed {\
 opacity:0.4 \
}\
#pt-notifications-alert .mw-echo-notifications-badge:before,\
#pt-notifications-notice .mw-echo-notifications-badge:before {\
 position:absolute;\
 display:inline-block;\
 cursor:pointer;\
 opacity:0.87;\
 content:'';\
 background-repeat:no-repeat;\
 top:1000px;\
 left:0;\
 width:100%;\
 height:100% \
}\
#pt-notifications-alert .mw-echo-notifications-badge:after,\
#pt-notifications-notice .mw-echo-notifications-badge:after {\
 position:absolute;\
 display:inline-block;\
 cursor:pointer;\
 top:1009px;\
 left:55%;\
 font-size:0.9em;\
 font-weight:bold;\
 padding:0 0.3em;\
 border:1px solid #fff;\
 border-radius:2px;\
 background-color:#72777d;\
 content:attr(data-counter-text);\
 color:#fff \
}\
#pt-notifications-alert .mw-echo-notifications-badge.mw-echo-notifications-badge-long-label,\
#pt-notifications-notice .mw-echo-notifications-badge.mw-echo-notifications-badge-long-label {\
 margin-right:0.5em \
}\
#pt-notifications-alert .mw-echo-notifications-badge.mw-echo-notifications-badge-long-label:after,\
#pt-notifications-notice .mw-echo-notifications-badge.mw-echo-notifications-badge-long-label:after {\
 left:35% \
}\
#pt-notifications-alert .mw-echo-notifications-badge.mw-echo-notifications-badge-all-read:before,\
#pt-notifications-notice .mw-echo-notifications-badge.mw-echo-notifications-badge-all-read:before {\
 opacity:0.51 \
}\
#pt-notifications-alert .mw-echo-notifications-badge.mw-echo-notifications-badge-all-read:after,\
#pt-notifications-notice .mw-echo-notifications-badge.mw-echo-notifications-badge-all-read:after {\
 visibility:hidden \
}\
#pt-notifications-alert .mw-echo-notifications-badge:before {\
 background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Ctitle%3E bell %3C/title%3E %3Cpath d=%22M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z%22/%3E %3C/svg%3E\") \
}\
#pt-notifications-notice .mw-echo-notifications-badge:before {\
 background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Ctitle%3E tray %3C/title%3E %3Cpath d=%22M17 1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 12h-4l-1 2H8l-1-2H3V3h14z%22/%3E %3C/svg%3E\") \
}\
#pt-notifications-alert .mw-echo-notifications-badge.oo-ui-flaggedElement-unseen:after,\
#pt-notifications-alert .mw-echo-notifications-badge.mw-echo-unseen-notifications:after {\
 background-color:#dd3333 \
}\
#pt-notifications-notice .mw-echo-notifications-badge.oo-ui-flaggedElement-unseen:after,\
#pt-notifications-notice .mw-echo-notifications-badge.mw-echo-unseen-notifications:after {\
 background-color:#3366cc \
}\
.wds-global-navigation__user-menu > div > ul #pt-notifications-alert,\
.wds-global-navigation__user-menu > div > ul #pt-notifications-notice {\
 margin-right:0.4em \
}\
#p-lang .uls-settings-trigger {\
 background:transparent no-repeat center top;\
 background-image:url(/w/extensions/UniversalLanguageSelector/resources/images/cog-sprite.png?30312);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 width=%2214%22 height=%2232%22%3E %3Cdefs%3E %3Cpath id=%22a%22 d=%22M14 9.3V6.73l-1.575-.264a4.947 4.947 0 0 0-.496-1.2l.93-1.285-1.81-1.84-1.31.908c-.38-.205-.79-.38-1.196-.497L8.284 1H5.716l-.263 1.578a5.489 5.489 0 0 0-1.196.497L2.975 2.17 1.137 3.98l.934 1.287c-.2.38-.376.79-.493 1.228L0 6.73V9.3l1.575.264c.117.438.292.818.496 1.198l-.93 1.315L2.95 13.89l1.312-.938c.38.205.787.38 1.224.497L5.746 15h2.566l.263-1.578a6.13 6.13 0 0 0 1.196-.497l1.315.935 1.81-1.812-.935-1.315c.203-.38.38-.76.495-1.2L14 9.303zm-7 1.404c-1.488 0-2.683-1.2-2.683-2.69S5.542 5.327 7 5.327a2.698 2.698 0 0 1 2.683 2.69A2.678 2.678 0 0 1 7 10.705z%22/%3E %3C/defs%3E %3Cuse fill=%22%2372777d%22 xlink:href=%22%23a%22/%3E %3Cuse fill=%22%2354595d%22 transform=%22translate%280 16%29%22 xlink:href=%22%23a%22/%3E %3C/svg%3E\");\
 border:0;\
 min-height:16px;\
 min-width:16px;\
 float:right;\
 cursor:pointer \
}\
#p-lang .uls-settings-trigger::-moz-focus-inner {\
 border:0 \
}\
#p-lang .uls-settings-trigger:focus {\
 outline:1px solid #36c \
}\
.skin-vector #p-lang .uls-settings-trigger {\
 margin-top:8px \
}\
#p-lang .uls-settings-trigger:hover {\
 background-position:center -16px \
}\
.client-nojs #ca-ve-edit,\
.client-nojs .mw-editsection-divider,\
.client-nojs .mw-editsection-visualeditor,\
.ve-not-available #ca-ve-edit,\
.ve-not-available .mw-editsection-divider,\
.ve-not-available .mw-editsection-visualeditor {\
 display:none \
}\
.client-js .mw-content-ltr .mw-editsection-bracket:first-of-type,\
.client-js .mw-content-rtl .mw-editsection-bracket:not(:first-of-type) {\
 margin-right:0.25em;\
 color:#54595d \
}\
.client-js .mw-content-rtl .mw-editsection-bracket:first-of-type,\
.client-js .mw-content-ltr .mw-editsection-bracket:not(:first-of-type) {\
 margin-left:0.25em;\
 color:#54595d \
}\
.badge-goodarticle,\
.badge-goodlist,\
.badge-recommendedarticle {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-silver-star.png?70a8c) \
}\
.badge-featuredarticle,\
.badge-featuredportal,\
.badge-featuredlist {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-golden-star.png?ed948) \
}\
.badge-problematic {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-problematic.png?f3177) \
}\
.badge-proofread {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-proofread.png?e81f9) \
}\
.badge-validated {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-validated.png?6232c) \
}\
.badge-digitaldocument {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-digitaldocument.png?d1c50) \
}\
@media print {\
 .noprint,\
 .catlinks,\
 .magnify,\
 .mw-cite-backlink,\
 .mw-editsection,\
 .mw-editsection-like,\
 .mw-hidden-catlinks,\
 .mw-indicators,\
 .mw-redirectedfrom,\
 .patrollink,\
 .usermessage,\
 #column-one,\
 #footer-places,\
 #mw-navigation,\
 #siteNotice,\
 #f-poweredbyico,\
 #f-copyrightico,\
 li#about,\
 li#disclaimer,\
 li#mobileview,\
 li#privacy {\
  display:none  \
 }\
 body {\
  background:#fff;\
  color:#000;\
  margin:0;\
  padding:0  \
 }\
 a {\
  background:none !important;\
  padding:0 !important  \
 }\
 a,\
 a.external,\
 a.new,\
 a.stub {\
  color:#000 !important;\
  text-decoration:none !important;\
  color:inherit !important;\
  text-decoration:inherit !important  \
 }\
 .mw-parser-output a.external.text:after,\
 .mw-parser-output a.external.autonumber:after {\
  content:' (' attr(href) ')';\
  word-break:break-all;\
  word-wrap:break-word  \
 }\
 .mw-parser-output a.external.text[href^='//']:after,\
 .mw-parser-output a.external.autonumber[href^='//']:after {\
  content:' (https:' attr(href) ')'  \
 }\
 dt {\
  font-weight:bold  \
 }\
 h1,\
 h2,\
 h3,\
 h4,\
 h5,\
 h6 {\
  font-weight:bold;\
  page-break-after:avoid;\
  page-break-before:avoid  \
 }\
 p {\
  margin:1em 0;\
  line-height:1.2;\
  orphans:3;\
  widows:3  \
 }\
 img,\
 figure,\
 .wikitable,\
 .thumb {\
  page-break-inside:avoid  \
 }\
 img {\
  border:0;\
  vertical-align:middle  \
 }\
 pre,\
 .mw-code {\
  background:#fff;\
  color:#000;\
  border:1pt dashed #000;\
  padding:1em 0;\
  font-size:8pt;\
  white-space:pre-wrap;\
  word-wrap:break-word  \
 }\
 sup,\
 sub {\
  line-height:1  \
 }\
 ul {\
  list-style-type:square  \
 }\
 #globalWrapper {\
  width:100% !important;\
  min-width:0 !important  \
 }\
 .mw-body {\
  background:#fff;\
  color:#000;\
  border:0 !important;\
  padding:0 !important;\
  margin:0 !important;\
  direction:ltr  \
 }\
 #column-content {\
  margin:0 !important  \
 }\
 #column-content .mw-body {\
  padding:1em;\
  margin:0 !important  \
 }\
 .toc {\
  background-color:#f9f9f9;\
  border:1pt solid #aaa;\
  padding:5px;\
  display:table  \
 }\
 .tocnumber,\
 .toctext {\
  display:table-cell  \
 }\
 .tocnumber {\
  padding-left:0;\
  padding-right:0.5em  \
 }\
 .mw-content-ltr .tocnumber {\
  padding-left:0;\
  padding-right:0.5em  \
 }\
 .mw-content-rtl .tocnumber {\
  padding-left:0.5em;\
  padding-right:0  \
 }\
 table.floatright,\
 div.floatright,\
 div.tright {\
  float:right;\
  clear:right;\
  position:relative  \
 }\
 table.floatleft,\
 div.floatleft,\
 div.tleft {\
  float:left;\
  clear:left;\
  position:relative  \
 }\
 div.tleft {\
  margin:0.5em 1.4em 1.3em 0  \
 }\
 div.tright {\
  margin:0.5em 0 1.3em 1.4em  \
 }\
 table.floatright,\
 div.floatright {\
  margin:0 0 0.5em 0.5em;\
  border:0  \
 }\
 table.floatleft,\
 div.floatleft {\
  margin:0 0.5em 0.5em 0;\
  border:0  \
 }\
 .center {\
  text-align:center  \
 }\
 div.thumb {\
  background-color:transparent;\
  width:auto  \
 }\
 div.thumb a {\
  border-bottom:0  \
 }\
 div.thumbinner {\
  background-color:#fff;\
  border:0;\
  border-radius:2px;\
  padding:5px;\
  font-size:10pt;\
  color:#666;\
  text-align:center;\
  overflow:hidden;\
  min-width:100px  \
 }\
 html .thumbcaption {\
  text-align:left;\
  line-height:1.4;\
  padding:3px  \
 }\
 img.thumbborder {\
  border:1pt solid #ddd  \
 }\
 .wikitable,\
 .mw_metadata {\
  background:#fff;\
  margin:1em 0;\
  border:1pt solid #aaa;\
  border-collapse:collapse;\
  font-size:10pt  \
 }\
 .wikitable > caption,\
 .mw_metadata caption {\
  padding:5px;\
  font-size:10pt  \
 }\
 .wikitable > tr > th,\
 .wikitable > tr > td,\
 .wikitable > * > tr > th,\
 .wikitable > * > tr > td,\
 .mw_metadata th,\
 .mw_metadata td {\
  background:#fff !important;\
  color:#000 !important;\
  border:1pt solid #aaa;\
  padding:0.4em 0.6em  \
 }\
 .wikitable > tr > th,\
 .wikitable > * > tr > th,\
 .mw_metadata th {\
  text-align:center  \
 }\
 table.listing,\
 table.listing td {\
  border:1pt solid #000;\
  border-collapse:collapse  \
 }\
 .catlinks ul {\
  display:inline;\
  padding:0;\
  list-style:none none  \
 }\
 .catlinks li {\
  display:inline-block;\
  line-height:1.15;\
  margin:0.1em 0;\
  border-left:1pt solid #aaa;\
  padding:0 0.4em  \
 }\
 .catlinks li:first-child {\
  border-left:0;\
  padding-left:0.2em  \
 }\
 .printfooter {\
  padding:1em 0  \
 }\
 #footer {\
  background:#fff;\
  color:#000;\
  margin-top:1em;\
  border-top:1pt solid #aaa;\
  padding-top:5px;\
  direction:ltr  \
 }\
}\
@media screen {\
 .mw-content-ltr {\
  direction:ltr  \
 }\
 .mw-content-rtl {\
  direction:rtl  \
 }\
 .sitedir-ltr textarea,\
 .sitedir-ltr input {\
  direction:ltr  \
 }\
 .sitedir-rtl textarea,\
 .sitedir-rtl input {\
  direction:rtl  \
 }\
 .mw-userlink {\
  unicode-bidi:embed  \
 }\
 mark {\
  background-color:#ff0;\
  color:#000  \
 }\
 wbr {\
  display:inline-block  \
 }\
 input[type='submit'],\
 input[type='button'],\
 input[type='reset'],\
 input[type='file'] {\
  direction:ltr  \
 }\
 textarea[dir='ltr'],\
 input[dir='ltr'] {\
  direction:ltr  \
 }\
 textarea[dir='rtl'],\
 input[dir='rtl'] {\
  direction:rtl  \
 }\
 abbr[title],\
 .explain[title] {\
  border-bottom:1px dotted;\
  cursor:help  \
 }\
 @supports (text-decoration:underline dotted) {\
  abbr[title],\
  .explain[title] {\
   border-bottom:0;\
   text-decoration:underline dotted   \
  }\
 }\
 span.comment {\
  font-style:italic;\
  unicode-bidi:-moz-isolate;\
  unicode-bidi:isolate  \
 }\
 #editform,\
 #toolbar,\
 #wpTextbox1 {\
  clear:both  \
 }\
 #toolbar {\
  height:22px  \
 }\
 .mw-underline-always a {\
  text-decoration:underline  \
 }\
 .mw-underline-never a {\
  text-decoration:none  \
 }\
 li span.deleted,\
 span.history-deleted {\
  text-decoration:line-through;\
  color:#72777d;\
  font-style:italic  \
 }\
 .not-patrolled {\
  background-color:#ffa  \
 }\
 .unpatrolled {\
  font-weight:bold;\
  color:#d33  \
 }\
 div.patrollink {\
  font-size:75%;\
  text-align:right  \
 }\
 td.mw-label {\
  text-align:right;\
  vertical-align:middle  \
 }\
 td.mw-input {\
  text-align:left  \
 }\
 td.mw-submit {\
  text-align:left;\
  white-space:nowrap  \
 }\
 .mw-input-with-label {\
  white-space:nowrap;\
  display:inline-block  \
 }\
 .mw-content-ltr .thumbcaption {\
  text-align:left  \
 }\
 .mw-content-ltr .magnify {\
  float:right  \
 }\
 .mw-content-rtl .thumbcaption {\
  text-align:right  \
 }\
 .mw-content-rtl .magnify {\
  float:left  \
 }\
 #catlinks {\
  text-align:left  \
 }\
 .catlinks ul {\
  display:inline;\
  margin:0;\
  padding:0;\
  list-style:none none;\
  vertical-align:middle !ie  \
 }\
 .catlinks li {\
  display:inline-block;\
  line-height:1.25em;\
  border-left:1px solid #a2a9b1;\
  margin:0.125em 0;\
  padding:0 0.5em;\
  zoom:1;\
  display:inline !ie  \
 }\
 .catlinks li:first-child {\
  padding-left:0.25em;\
  border-left:0  \
 }\
 .catlinks li a.mw-redirect {\
  font-style:italic  \
 }\
 .mw-hidden-cats-hidden {\
  display:none  \
 }\
 .catlinks-allhidden {\
  display:none  \
 }\
 p.mw-protect-editreasons,\
 p.mw-filedelete-editreasons,\
 p.mw-delete-editreasons {\
  font-size:90%;\
  text-align:right  \
 }\
 .autocomment,\
 .autocomment a,\
 .autocomment a:visited {\
  color:#72777d  \
 }\
 .newpage,\
 .minoredit,\
 .botedit {\
  font-weight:bold  \
 }\
 div.mw-warning-with-logexcerpt {\
  padding:3px;\
  margin-bottom:3px;\
  border:2px solid #2a4b8d;\
  clear:both  \
 }\
 div.mw-warning-with-logexcerpt ul li {\
  font-size:90%  \
 }\
 span.mw-revdelundel-link,\
 strong.mw-revdelundel-link {\
  font-size:90%  \
 }\
 span.mw-revdelundel-hidden,\
 input.mw-revdelundel-hidden {\
  visibility:hidden  \
 }\
 td.mw-revdel-checkbox,\
 th.mw-revdel-checkbox {\
  padding-right:10px;\
  text-align:center  \
 }\
 a.new {\
  color:#ba0000  \
 }\
 .plainlinks a.external {\
  background:none !important;\
  padding:0 !important  \
 }\
 .rtl a.external.free,\
 .rtl a.external.autonumber {\
  direction:ltr;\
  unicode-bidi:embed  \
 }\
 .wikitable {\
  background-color:#f8f9fa;\
  color:#222;\
  margin:1em 0;\
  border:1px solid #a2a9b1;\
  border-collapse:collapse  \
 }\
 .wikitable > tr > th,\
 .wikitable > tr > td,\
 .wikitable > * > tr > th,\
 .wikitable > * > tr > td {\
  border:1px solid #a2a9b1;\
  padding:0.2em 0.4em  \
 }\
 .wikitable > tr > th,\
 .wikitable > * > tr > th {\
  background-color:#eaecf0;\
  text-align:center  \
 }\
 .wikitable > caption {\
  font-weight:bold  \
 }\
 .error,\
 .warning,\
 .success {\
  font-size:larger  \
 }\
 .error {\
  color:#d33  \
 }\
 .warning {\
  color:#705000  \
 }\
 .success {\
  color:#009000  \
 }\
 .errorbox,\
 .warningbox,\
 .successbox {\
  border:1px solid;\
  padding:0.5em 1em;\
  margin-bottom:1em;\
  display:inline-block;\
  zoom:1;\
  *display:inline  \
 }\
 .errorbox h2,\
 .warningbox h2,\
 .successbox h2 {\
  font-size:1em;\
  color:inherit;\
  font-weight:bold;\
  display:inline;\
  margin:0 0.5em 0 0;\
  border:0  \
 }\
 .errorbox {\
  color:#d33;\
  border-color:#fac5c5;\
  background-color:#fae3e3  \
 }\
 .warningbox {\
  color:#705000;\
  border-color:#fde29b;\
  background-color:#fdf1d1  \
 }\
 .successbox {\
  color:#008000;\
  border-color:#b7fdb5;\
  background-color:#e1fddf  \
 }\
 .mw-infobox {\
  border:2px solid #ff7f00;\
  margin:0.5em;\
  clear:left;\
  overflow:hidden  \
 }\
 .mw-infobox-left {\
  margin:7px;\
  float:left;\
  width:35px  \
 }\
 .mw-infobox-right {\
  margin:0.5em 0.5em 0.5em 49px  \
 }\
 .previewnote {\
  color:#d33;\
  margin-bottom:1em  \
 }\
 .previewnote p {\
  text-indent:3em;\
  margin:0.8em 0  \
 }\
 .visualClear {\
  clear:both  \
 }\
 .mw-datatable {\
  border:1px solid #a2a9b1;\
  border-collapse:collapse  \
 }\
 .mw-datatable td,\
 .mw-datatable th {\
  border:1px solid #a2a9b1;\
  padding:0.2em 0.4em  \
 }\
 .mw-datatable th {\
  background-color:#ddf  \
 }\
 .mw-datatable td {\
  background-color:#fff  \
 }\
 .mw-datatable tr:hover td {\
  background-color:#eaf3ff  \
 }\
 .mw-content-ltr ul,\
 .mw-content-rtl .mw-content-ltr ul {\
  margin:0.3em 0 0 1.6em;\
  padding:0  \
 }\
 .mw-content-rtl ul,\
 .mw-content-ltr .mw-content-rtl ul {\
  margin:0.3em 1.6em 0 0;\
  padding:0  \
 }\
 .mw-content-ltr ol,\
 .mw-content-rtl .mw-content-ltr ol {\
  margin:0.3em 0 0 3.2em;\
  padding:0  \
 }\
 .mw-content-rtl ol,\
 .mw-content-ltr .mw-content-rtl ol {\
  margin:0.3em 3.2em 0 0;\
  padding:0  \
 }\
 .mw-content-ltr dd,\
 .mw-content-rtl .mw-content-ltr dd {\
  margin-left:1.6em;\
  margin-right:0  \
 }\
 .mw-content-rtl dd,\
 .mw-content-ltr .mw-content-rtl dd {\
  margin-right:1.6em;\
  margin-left:0  \
 }\
 .mw-ajax-loader {\
  background-image:url(/w/resources/src/mediawiki.legacy/images/ajax-loader.gif?57f34);\
  background-position:center center;\
  background-repeat:no-repeat;\
  padding:16px;\
  position:relative;\
  top:-16px  \
 }\
 .mw-small-spinner {\
  padding:10px !important;\
  margin-right:0.6em;\
  background-image:url(/w/resources/src/mediawiki.legacy/images/spinner.gif?ca65b);\
  background-position:center center;\
  background-repeat:no-repeat  \
 }\
 h1:lang(anp),\
 h1:lang(as),\
 h1:lang(bh),\
 h1:lang(bho),\
 h1:lang(bn),\
 h1:lang(gu),\
 h1:lang(hi),\
 h1:lang(kn),\
 h1:lang(ks),\
 h1:lang(ml),\
 h1:lang(mr),\
 h1:lang(my),\
 h1:lang(mai),\
 h1:lang(ne),\
 h1:lang(new),\
 h1:lang(or),\
 h1:lang(pa),\
 h1:lang(pi),\
 h1:lang(sa),\
 h1:lang(ta),\
 h1:lang(te) {\
  line-height:1.6em !important  \
 }\
 h2:lang(anp),\
 h3:lang(anp),\
 h4:lang(anp),\
 h5:lang(anp),\
 h6:lang(anp),\
 h2:lang(as),\
 h3:lang(as),\
 h4:lang(as),\
 h5:lang(as),\
 h6:lang(as),\
 h2:lang(bho),\
 h3:lang(bho),\
 h4:lang(bho),\
 h5:lang(bho),\
 h6:lang(bho),\
 h2:lang(bh),\
 h3:lang(bh),\
 h4:lang(bh),\
 h5:lang(bh),\
 h6:lang(bh),\
 h2:lang(bn),\
 h3:lang(bn),\
 h4:lang(bn),\
 h5:lang(bn),\
 h6:lang(bn),\
 h2:lang(gu),\
 h3:lang(gu),\
 h4:lang(gu),\
 h5:lang(gu),\
 h6:lang(gu),\
 h2:lang(hi),\
 h3:lang(hi),\
 h4:lang(hi),\
 h5:lang(hi),\
 h6:lang(hi),\
 h2:lang(kn),\
 h3:lang(kn),\
 h4:lang(kn),\
 h5:lang(kn),\
 h6:lang(kn),\
 h2:lang(ks),\
 h3:lang(ks),\
 h4:lang(ks),\
 h5:lang(ks),\
 h6:lang(ks),\
 h2:lang(ml),\
 h3:lang(ml),\
 h4:lang(ml),\
 h5:lang(ml),\
 h6:lang(ml),\
 h2:lang(mr),\
 h3:lang(mr),\
 h4:lang(mr),\
 h5:lang(mr),\
 h6:lang(mr),\
 h2:lang(my),\
 h3:lang(my),\
 h4:lang(my),\
 h5:lang(my),\
 h6:lang(my),\
 h2:lang(mai),\
 h3:lang(mai),\
 h4:lang(mai),\
 h5:lang(mai),\
 h6:lang(mai),\
 h2:lang(ne),\
 h3:lang(ne),\
 h4:lang(ne),\
 h5:lang(ne),\
 h6:lang(ne),\
 h2:lang(new),\
 h3:lang(new),\
 h4:lang(new),\
 h5:lang(new),\
 h6:lang(new),\
 h2:lang(or),\
 h3:lang(or),\
 h4:lang(or),\
 h5:lang(or),\
 h6:lang(or),\
 h2:lang(pa),\
 h3:lang(pa),\
 h4:lang(pa),\
 h5:lang(pa),\
 h6:lang(pa),\
 h2:lang(pi),\
 h3:lang(pi),\
 h4:lang(pi),\
 h5:lang(pi),\
 h6:lang(pi),\
 h2:lang(sa),\
 h3:lang(sa),\
 h4:lang(sa),\
 h5:lang(sa),\
 h6:lang(sa),\
 h2:lang(ta),\
 h3:lang(ta),\
 h4:lang(ta),\
 h5:lang(ta),\
 h6:lang(ta),\
 h2:lang(te),\
 h3:lang(te),\
 h4:lang(te),\
 h5:lang(te),\
 h6:lang(te) {\
  line-height:1.2em  \
 }\
 ol:lang(azb) li,\
 ol:lang(bcc) li,\
 ol:lang(bgn) li,\
 ol:lang(bqi) li,\
 ol:lang(fa) li,\
 ol:lang(glk) li,\
 ol:lang(kk-arab) li,\
 ol:lang(lrc) li,\
 ol:lang(luz) li,\
 ol:lang(mzn) li {\
  list-style-type:-moz-persian;\
  list-style-type:persian  \
 }\
 ol:lang(ckb) li,\
 ol:lang(sdh) li {\
  list-style-type:-moz-arabic-indic;\
  list-style-type:arabic-indic  \
 }\
 ol:lang(hi) li,\
 ol:lang(mai) li,\
 ol:lang(mr) li,\
 ol:lang(ne) li {\
  list-style-type:-moz-devanagari;\
  list-style-type:devanagari  \
 }\
 ol:lang(as) li,\
 ol:lang(bn) li {\
  list-style-type:-moz-bengali;\
  list-style-type:bengali  \
 }\
 ol:lang(or) li {\
  list-style-type:-moz-oriya;\
  list-style-type:oriya  \
 }\
 .toc ul {\
  margin:0.3em 0  \
 }\
 .mw-content-ltr .toc ul,\
 .mw-content-rtl .mw-content-ltr .toc ul {\
  text-align:left  \
 }\
 .mw-content-rtl .toc ul,\
 .mw-content-ltr .mw-content-rtl .toc ul {\
  text-align:right  \
 }\
 .mw-content-ltr .toc ul ul,\
 .mw-content-rtl .mw-content-ltr .toc ul ul {\
  margin:0 0 0 2em  \
 }\
 .mw-content-rtl .toc ul ul,\
 .mw-content-ltr .mw-content-rtl .toc ul ul {\
  margin:0 2em 0 0  \
 }\
 .toc .toctitle {\
  direction:ltr  \
 }\
 #mw-clearyourcache,\
 #mw-sitecsspreview,\
 #mw-sitejspreview,\
 #mw-usercsspreview,\
 #mw-userjspreview {\
  direction:ltr;\
  unicode-bidi:embed  \
 }\
 #mw-revision-info,\
 #mw-revision-info-current,\
 #mw-revision-nav {\
  direction:ltr  \
 }\
 div.tright,\
 div.floatright,\
 table.floatright {\
  clear:right;\
  float:right  \
 }\
 div.tleft,\
 div.floatleft,\
 table.floatleft {\
  float:left;\
  clear:left  \
 }\
 div.floatright,\
 table.floatright,\
 div.floatleft,\
 table.floatleft {\
  position:relative  \
 }\
 #mw-credits a {\
  unicode-bidi:embed  \
 }\
 .printfooter {\
  display:none  \
 }\
 .xdebug-error {\
  position:absolute;\
  z-index:99  \
 }\
 .mw-editsection {\
  -moz-user-select:none;\
  -webkit-user-select:none;\
  -ms-user-select:none;\
  user-select:none  \
 }\
 .mw-editsection,\
 .mw-editsection-like {\
  font-size:small;\
  font-weight:normal;\
  margin-left:1em;\
  vertical-align:baseline;\
  line-height:1em  \
 }\
 .mw-content-ltr .mw-editsection,\
 .mw-content-rtl .mw-content-ltr .mw-editsection {\
  margin-left:1em  \
 }\
 .mw-content-rtl .mw-editsection,\
 .mw-content-ltr .mw-content-rtl .mw-editsection {\
  margin-right:1em  \
 }\
 sup,\
 sub {\
  line-height:1  \
 }\
}\
@media screen {\
 a {\
  text-decoration:none;\
  color:#0645ad;\
  background:none  \
 }\
 a:not([href]) {\
  cursor:pointer  \
 }\
 a:visited {\
  color:#0b0080  \
 }\
 a:active {\
  color:#faa700  \
 }\
 a:hover,\
 a:focus {\
  text-decoration:underline  \
 }\
 a:lang(ar),\
 a:lang(kk-arab),\
 a:lang(mzn),\
 a:lang(ps),\
 a:lang(ur) {\
  text-decoration:none  \
 }\
 a.stub {\
  color:#723  \
 }\
 a.new,\
 .wds-global-navigation__user-menu > div > ul a.new {\
  color:#ba0000  \
 }\
 a.mw-selflink {\
  color:inherit;\
  font-weight:bold;\
  text-decoration:inherit  \
 }\
 a.mw-selflink:hover {\
  cursor:inherit;\
  text-decoration:inherit  \
 }\
 a.mw-selflink:active,\
 a.mw-selflink:visited {\
  color:inherit  \
 }\
 a.new:visited,\
 .wds-global-navigation__user-menu > div > ul a.new:visited {\
  color:#a55858  \
 }\
 .mw-parser-output a.extiw,\
 .mw-parser-output a.extiw:active {\
  color:#36b  \
 }\
 .mw-parser-output a.extiw:visited {\
  color:#636  \
 }\
 .mw-parser-output a.extiw:active {\
  color:#b63  \
 }\
 .mw-parser-output a.external {\
  color:#36b  \
 }\
 .mw-parser-output a.external:visited {\
  color:#636  \
 }\
 .mw-parser-output a.external:active {\
  color:#b63  \
 }\
 .mw-parser-output a.external.free {\
  word-wrap:break-word  \
 }\
 img {\
  border:0;\
  vertical-align:middle  \
 }\
 hr {\
  height:1px;\
  color:#a2a9b1;\
  background-color:#a2a9b1;\
  border:0;\
  margin:0.2em 0  \
 }\
 h1,\
 h2,\
 h3,\
 h4,\
 h5,\
 h6 {\
  color:#000;\
  background:none;\
  font-weight:normal;\
  margin:0;\
  overflow:hidden;\
  padding-top:0.5em;\
  padding-bottom:0.17em;\
  border-bottom:1px solid #a2a9b1  \
 }\
 h1 {\
  font-size:188%  \
 }\
 h2 {\
  font-size:150%  \
 }\
 h3,\
 h4,\
 h5,\
 h6 {\
  border-bottom:0;\
  font-weight:bold  \
 }\
 h3 {\
  font-size:128%  \
 }\
 h4 {\
  font-size:116%  \
 }\
 h5 {\
  font-size:108%  \
 }\
 h6 {\
  font-size:100%  \
 }\
 h1,\
 h2 {\
  margin-bottom:0.6em  \
 }\
 h3,\
 h4,\
 h5 {\
  margin-bottom:0.3em  \
 }\
 p {\
  margin:0.4em 0 0.5em 0  \
 }\
 p img {\
  margin:0  \
 }\
 ul {\
  list-style-type:square;\
  margin:0.3em 0 0 1.6em;\
  padding:0  \
 }\
 ol {\
  margin:0.3em 0 0 3.2em;\
  padding:0;\
  list-style-image:none  \
 }\
 li {\
  margin-bottom:0.1em  \
 }\
 dt {\
  font-weight:bold;\
  margin-bottom:0.1em  \
 }\
 dl {\
  margin-top:0.2em;\
  margin-bottom:0.5em  \
 }\
 dd {\
  margin-left:1.6em;\
  margin-bottom:0.1em  \
 }\
 pre,\
 code,\
 tt,\
 kbd,\
 samp,\
 .mw-code {\
  font-family:monospace,monospace  \
 }\
 code {\
  color:#000;\
  background-color:#f8f9fa;\
  border:1px solid #eaecf0;\
  border-radius:2px;\
  padding:1px 4px  \
 }\
 pre,\
 .mw-code {\
  color:#000;\
  background-color:#f8f9fa;\
  border:1px solid #eaecf0;\
  padding:1em;\
  white-space:pre-wrap  \
 }\
 table {\
  font-size:100%  \
 }\
 fieldset {\
  border:1px solid #2a4b8d;\
  margin:1em 0 1em 0;\
  padding:0 1em 1em  \
 }\
 fieldset.nested {\
  margin:0 0 0.5em 0;\
  padding:0 0.5em 0.5em  \
 }\
 legend {\
  padding:0.5em;\
  font-size:95%  \
 }\
 form {\
  border:0;\
  margin:0  \
 }\
 textarea {\
  width:100%;\
  padding:0.1em;\
  display:block;\
  -moz-box-sizing:border-box;\
  -webkit-box-sizing:border-box;\
  box-sizing:border-box  \
 }\
 .center {\
  width:100%;\
  text-align:center  \
 }\
 *.center * {\
  margin-left:auto;\
  margin-right:auto  \
 }\
 .small {\
  font-size:94%  \
 }\
 table.small {\
  font-size:100%  \
 }\
 .toc,\
 .mw-warning,\
 .toccolours {\
  border:1px solid #a2a9b1;\
  background-color:#f8f9fa;\
  padding:5px;\
  font-size:95%  \
 }\
 .toc {\
  display:inline-block;\
  display:table;\
  zoom:1;\
  *display:inline;\
  padding:7px  \
 }\
 table.toc {\
  border-collapse:collapse  \
 }\
 table.toc td {\
  padding:0  \
 }\
 .toc h2 {\
  display:inline;\
  border:0;\
  padding:0;\
  font-size:100%;\
  font-weight:bold  \
 }\
 .toc .toctitle {\
  text-align:center  \
 }\
 .toc ul {\
  list-style-type:none;\
  list-style-image:none;\
  margin-left:0;\
  padding:0;\
  text-align:left  \
 }\
 .toc ul ul {\
  margin:0 0 0 2em  \
 }\
 .tocnumber,\
 .toctext {\
  display:table-cell;\
  text-decoration:inherit  \
 }\
 .tocnumber {\
  padding-left:0;\
  padding-right:0.5em;\
  color:#222  \
 }\
 .mw-content-ltr .tocnumber {\
  padding-left:0;\
  padding-right:0.5em  \
 }\
 .mw-content-rtl .tocnumber {\
  padding-left:0.5em;\
  padding-right:0  \
 }\
 .mw-warning {\
  margin-left:50px;\
  margin-right:50px;\
  text-align:center  \
 }\
 div.floatright,\
 table.floatright {\
  margin:0 0 0.5em 0.5em  \
 }\
 div.floatleft,\
 table.floatleft {\
  margin:0 0.5em 0.5em 0  \
 }\
 div.thumb {\
  margin-bottom:0.5em;\
  width:auto;\
  background-color:transparent  \
 }\
 div.thumbinner {\
  border:1px solid #c8ccd1;\
  padding:3px;\
  background-color:#f8f9fa;\
  font-size:94%;\
  text-align:center;\
  overflow:hidden  \
 }\
 html .thumbimage {\
  background-color:#fff;\
  border:1px solid #c8ccd1  \
 }\
 html .thumbcaption {\
  border:0;\
  line-height:1.4em;\
  padding:3px;\
  font-size:94%;\
  text-align:left  \
 }\
 div.magnify {\
  float:right;\
  margin-left:3px  \
 }\
 div.magnify a {\
  display:block;\
  text-indent:15px;\
  white-space:nowrap;\
  overflow:hidden;\
  width:15px;\
  height:11px;\
  background-image:url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png?4f704);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%2211%22 viewBox=%220 0 11 15%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M1.509 1.865h10.99v7.919H1.509z%22/%3E %3Cpath id=%22smallbox%22 d=%22M-1.499 6.868h5.943v4.904h-5.943z%22/%3E %3C/g%3E %3C/svg%3E\");\
  -moz-user-select:none;\
  -webkit-user-select:none;\
  -ms-user-select:none;\
  user-select:none  \
 }\
 img.thumbborder {\
  border:1px solid #eaecf0  \
 }\
 .mw-content-ltr .thumbcaption {\
  text-align:left  \
 }\
 .mw-content-ltr .magnify {\
  float:right;\
  margin-left:3px;\
  margin-right:0  \
 }\
 .mw-content-ltr div.magnify a {\
  background-image:url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png?4f704);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%2211%22 viewBox=%220 0 11 15%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M1.509 1.865h10.99v7.919H1.509z%22/%3E %3Cpath id=%22smallbox%22 d=%22M-1.499 6.868h5.943v4.904h-5.943z%22/%3E %3C/g%3E %3C/svg%3E\")  \
 }\
 .mw-content-rtl .thumbcaption {\
  text-align:right  \
 }\
 .mw-content-rtl .magnify {\
  float:left;\
  margin-left:0;\
  margin-right:3px  \
 }\
 .mw-content-rtl div.magnify a {\
  background-image:url(/w/resources/src/mediawiki.skinning/images/magnify-clip-rtl.png?a9fb3);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%2211%22 viewBox=%220 0 11 15%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M9.491 1.865h-10.99v7.919h10.99z%22/%3E %3Cpath id=%22smallbox%22 d=%22M12.499 6.868H6.556v4.904h5.943z%22/%3E %3C/g%3E %3C/svg%3E\")  \
 }\
 div.tright {\
  margin:0.5em 0 1.3em 1.4em  \
 }\
 div.tleft {\
  margin:0.5em 1.4em 1.3em 0  \
 }\
 body.mw-hide-empty-elt .mw-empty-elt {\
  display:none  \
 }\
 .catlinks {\
  border:1px solid #a2a9b1;\
  background-color:#f8f9fa;\
  padding:5px;\
  margin-top:1em;\
  clear:both  \
 }\
 textarea {\
  border:1px solid #c8ccd1  \
 }\
 .editOptions {\
  background-color:#eaecf0;\
  color:#222;\
  border:1px solid #c8ccd1;\
  border-top:0;\
  padding:1em 1em 1.5em 1em;\
  margin-bottom:2em  \
 }\
 .usermessage {\
  background-color:#ffce7b;\
  border:1px solid #ffa500;\
  color:#000;\
  font-weight:bold;\
  margin:2em 0 1em;\
  padding:0.5em 1em;\
  vertical-align:middle  \
 }\
 #siteNotice {\
  position:relative;\
  text-align:center;\
  margin:0  \
 }\
 #localNotice {\
  margin-bottom:0.9em  \
 }\
 .firstHeading {\
  margin-bottom:0.1em;\
  line-height:1.2em;\
  padding-bottom:0  \
 }\
 #siteSub {\
  display:none  \
 }\
 #contentSub,\
 #contentSub2 {\
  font-size:84%;\
  line-height:1.2em;\
  margin:0 0 1.4em 1em;\
  color:#54595d;\
  width:auto  \
 }\
 span.subpages {\
  display:block  \
 }\
}\
.mw-wiki-logo {\
 background-image:url(/static/images/project-logos/enwiki.png) \
}\
@media (-webkit-min-device-pixel-ratio:1.5),(min--moz-device-pixel-ratio:1.5),(min-resolution:1.5dppx),(min-resolution:144dpi) {\
 .mw-wiki-logo {\
  background-image:url(/static/images/project-logos/enwiki-1.5x.png);\
  background-size:135px auto  \
 }\
}\
@media (-webkit-min-device-pixel-ratio:2),(min--moz-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi) {\
 .mw-wiki-logo {\
  background-image:url(/static/images/project-logos/enwiki-2x.png);\
  background-size:135px auto  \
 }\
}\
.toctogglecheckbox:checked ~ ul {\
 display:none \
}\
@media screen {\
 :not(:checked) > .toctogglecheckbox {\
  display:inline !important;\
  position:absolute;\
  opacity:0  \
 }\
 .toctogglespan {\
  font-size:94%  \
 }\
 :not(:checked) > .toctogglespan:before {\
  content:' ['  \
 }\
 :not(:checked) > .toctogglespan:after {\
  content:']'  \
 }\
 .toctogglelabel {\
  cursor:pointer;\
  color:#0645ad  \
 }\
 .toctogglelabel:hover {\
  text-decoration:underline  \
 }\
 .toctogglecheckbox:focus + .toctitle .toctogglelabel {\
  text-decoration:underline;\
  outline:dotted 1px;\
  outline:auto -webkit-focus-ring-color  \
 }\
 .toctogglecheckbox:checked + .toctitle .toctogglelabel:after {\
  content:'show'  \
 }\
 .toctogglecheckbox:not(:checked) + .toctitle .toctogglelabel:after {\
  content:'hide'  \
 }\
}\
@media print {\
 .toctogglecheckbox:checked + .toctitle {\
  display:none  \
 }\
}\
@media screen {\
 html {\
  font-size:100%  \
 }\
 html,\
 body {\
  height:100%;\
  margin:0;\
  padding:0;\
  font-family:sans-serif  \
 }\
 body {\
  background-color:#f6f6f6  \
 }\
 .mw-body,\
 .parsoid-body {\
  padding:1em;\
  background-color:#ffffff;\
  color:#222222;\
  direction:ltr  \
 }\
 .mw-body {\
  margin-left:10em;\
  border:1px solid #a7d7f9;\
  border-right-width:0;\
  margin-top:-1px  \
 }\
 .mw-body h1,\
 .mw-body-content h1,\
 .mw-body-content h2 {\
  font-family:'Linux Libertine','Georgia','Times',serif;\
  line-height:1.3;\
  margin-bottom:0.25em;\
  padding:0  \
 }\
 .mw-body h1:lang(ja),\
 .mw-body-content h1:lang(ja),\
 .mw-body-content h2:lang(ja),\
 .mw-body h1:lang(he),\
 .mw-body-content h1:lang(he),\
 .mw-body-content h2:lang(he),\
 .mw-body h1:lang(ko),\
 .mw-body-content h1:lang(ko),\
 .mw-body-content h2:lang(ko) {\
  font-family:sans-serif  \
 }\
 .mw-body h1:lang(my),\
 .mw-body-content h1:lang(my),\
 .mw-body-content h2:lang(my) {\
  line-height:normal  \
 }\
 .mw-body h1,\
 .mw-body-content h1 {\
  font-size:1.8em  \
 }\
 .mw-body .firstHeading {\
  overflow:visible  \
 }\
 .mw-body .mw-indicators {\
  float:right;\
  line-height:1.6;\
  font-size:0.875em;\
  position:relative;\
  z-index:1  \
 }\
 .mw-body .mw-indicator {\
  display:inline-block;\
  zoom:1;\
  *display:inline  \
 }\
 .mw-body-content {\
  position:relative;\
  line-height:1.6;\
  font-size:0.875em;\
  z-index:0  \
 }\
 .mw-body-content p {\
  line-height:inherit;\
  margin:0.5em 0  \
 }\
 .mw-body-content h1 {\
  margin-top:1em  \
 }\
 .mw-body-content h2 {\
  font-size:1.5em;\
  margin-top:1em  \
 }\
 .mw-body-content h3,\
 .mw-body-content h4,\
 .mw-body-content h5,\
 .mw-body-content h6 {\
  line-height:1.6;\
  margin-top:0.3em;\
  margin-bottom:0;\
  padding-bottom:0  \
 }\
 .mw-body-content h3 {\
  font-size:1.2em  \
 }\
 .mw-body-content h3,\
 .mw-body-content h4 {\
  font-weight:bold  \
 }\
 .mw-body-content h4,\
 .mw-body-content h5,\
 .mw-body-content h6 {\
  font-size:100%  \
 }\
 .mw-body-content .toc h2 {\
  font-size:100%;\
  font-family:sans-serif  \
 }\
 .mw-editsection,\
 .mw-editsection-like {\
  font-family:sans-serif  \
 }\
 div.emptyPortlet {\
  display:none  \
 }\
 ul {\
  list-style-type:disc;\
  list-style-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%225%22 height=%2213%22%3E %3Ccircle cx=%222.5%22 cy=%229.5%22 r=%222.5%22 fill=%22%2300528c%22/%3E %3C/svg%3E\");\
  list-style-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAANCAIAAADuXjPfAAAABnRSTlMA/wD/AP83WBt9AAAAHklEQVR4AWP4jwrowWcI6oEgEBtIISNCfFT9mOYDACO/lbNIGC/yAAAAAElFTkSuQmCC) 9;\
  list-style-image:url(/w/skins/Vector/images/bullet-icon.png?e31f8) 9!ie  \
 }\
 pre,\
 .mw-code {\
  line-height:1.3em  \
 }\
 #siteNotice {\
  font-size:0.8em  \
 }\
 .wds-global-navigation__user-menu > div > ul {\
  position:absolute;\
  top:0.33em;\
  right:0.75em;\
  z-index:100  \
 }\
 .wds-global-navigation__user-menu > div > ul h3 {\
  display:none  \
 }\
 .wds-global-navigation__user-menu > div > ul ul {\
  list-style:none none;\
  margin:0;\
  padding-left:10em  \
 }\
 .wds-global-navigation__user-menu > div > ul li {\
  float:left;\
  margin-left:0.75em;\
  padding-top:0.5em;\
  font-size:0.75em;\
  line-height:1.16666667em;\
  white-space:nowrap  \
 }\
 #pt-anonuserpage,\
 #pt-userpage a {\
  background-image:url(/w/skins/Vector/images/user-avatar.png?59494);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Cg fill=%22%2354595d%22%3E %3Cpath d=%22M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z%22/%3E %3Ccircle cx=%2210%22 cy=%225.5%22 r=%224.5%22/%3E %3C/g%3E %3C/svg%3E\");\
  background-position:left 0.33333333em;\
  background-repeat:no-repeat;\
  background-size:1.16666667em 1.16666667em;\
  padding-top:0.5em !important;\
  padding-left:16px !important  \
 }\
 #pt-userpage {\
  padding-top:0 !important  \
 }\
 #pt-userpage a {\
  display:inline-block  \
 }\
 #pt-anonuserpage {\
  color:#54595d  \
 }\
 #p-search {\
  float:left;\
  margin-right:0.5em;\
  margin-left:0.5em  \
 }\
 #p-search h3 {\
  display:block;\
  position:absolute !important;\
  clip:rect(1px,1px,1px,1px);\
  width:1px;\
  height:1px;\
  margin:-1px;\
  border:0;\
  padding:0;\
  overflow:hidden  \
 }\
 #p-search form,\
 #p-search input {\
  margin:0.4em 0 0  \
 }\
 #simpleSearch {\
  background-color:#fff;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAQCAIAAABY/YLgAAAAJUlEQVQIHQXBsQEAAAjDoND/73UWdnerhmHVsDQZJrNWVg3Dqge6bgMe6bejNAAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/search-fade.png?50f7b)!ie;\
  background-position:top left;\
  background-repeat:repeat-x;\
  color:#000;\
  display:block;\
  width:12.6em;\
  width:20vw;\
  min-width:5em;\
  max-width:20em;\
  padding-right:1.4em;\
  height:1.4em;\
  margin-top:0.65em;\
  position:relative;\
  min-height:1px;\
  border:1px solid #a2a9b1;\
  border-radius:2px;\
  -webkit-transition:border-color 250ms;\
  -moz-transition:border-color 250ms;\
  transition:border-color 250ms  \
 }\
 #simpleSearch:hover {\
  border-color:#72777d  \
 }\
 #simpleSearch input {\
  background-color:transparent;\
  color:#000;\
  margin:0;\
  padding:0;\
  border:0  \
 }\
 #simpleSearch #searchInput {\
  width:100%;\
  padding:0.2em 0 0.2em 0.2em;\
  font-size:0.8125em;\
  direction:ltr;\
  -webkit-appearance:textfield  \
 }\
 #simpleSearch #searchInput:focus {\
  outline:0  \
 }\
 #simpleSearch #searchInput::-webkit-input-placeholder {\
  color:#72777d;\
  opacity:1  \
 }\
 #simpleSearch #searchInput:-ms-input-placeholder {\
  color:#72777d;\
  opacity:1  \
 }\
 #simpleSearch #searchInput::-moz-placeholder {\
  color:#72777d;\
  opacity:1  \
 }\
 #simpleSearch #searchInput:-moz-placeholder {\
  color:#72777d;\
  opacity:1  \
 }\
 #simpleSearch #searchInput::placeholder {\
  color:#72777d;\
  opacity:1  \
 }\
 #simpleSearch #searchInput::-webkit-search-decoration,\
 #simpleSearch #searchInput::-webkit-search-cancel-button,\
 #simpleSearch #searchInput::-webkit-search-results-button,\
 #simpleSearch #searchInput::-webkit-search-results-decoration {\
  -webkit-appearance:textfield  \
 }\
 #simpleSearch #searchButton,\
 #simpleSearch #mw-searchButton {\
  position:absolute;\
  top:0;\
  right:0;\
  width:1.65em;\
  height:100%;\
  cursor:pointer;\
  text-indent:-99999px;\
  direction:ltr;\
  white-space:nowrap;\
  overflow:hidden  \
 }\
 #simpleSearch #searchButton {\
  background-image:url(/w/skins/Vector/images/search-ltr.png?39f97);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2213%22%3E %3Cg fill=%22none%22 stroke=%22%2354595d%22 stroke-width=%222%22%3E %3Cpath d=%22M11.29 11.71l-4-4%22/%3E %3Ccircle cx=%225%22 cy=%225%22 r=%224%22/%3E %3C/g%3E %3C/svg%3E\");\
  background-position:center center;\
  background-repeat:no-repeat  \
 }\
 #simpleSearch #mw-searchButton {\
  z-index:1  \
 }\
 .vectorTabs {\
  float:left;\
  height:2.5em;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-position:bottom left;\
  background-repeat:no-repeat;\
  padding-left:1px  \
 }\
 .vectorTabs h3 {\
  display:none  \
 }\
 .vectorTabs ul {\
  float:left;\
  height:100%;\
  list-style:none none;\
  margin:0;\
  padding:0;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-position:right bottom;\
  background-repeat:no-repeat  \
 }\
 .vectorTabs li {\
  float:left;\
  line-height:1.125em;\
  display:block;\
  height:100%;\
  margin:0;\
  padding:0;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAIAAADITs03AAAAO0lEQVR4AeSKhREAMQzDdN5/5uixuEKDpqgBjl2f78wd2DVj1+26/h///PfteVMN7zoGebcg1/Y/ZQQAlAUtQCujIJMAAAAASUVORK5CYII=);\
  background-image:url(/w/skins/Vector/images/tab-normal-fade.png?1cc52)!ie;\
  background-position:bottom left;\
  background-repeat:repeat-x;\
  white-space:nowrap  \
 }\
 .vectorTabs li.new a,\
 .vectorTabs li.new a:visited {\
  color:#a55858  \
 }\
 .vectorTabs li.selected {\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkAQAAAABvV2fNAAAADElEQVR4AWNoGB4QAInlMgFKeRKBAAAAAElFTkSuQmCC);\
  background-image:url(/w/skins/Vector/images/tab-current-fade.png?22887)!ie  \
 }\
 .vectorTabs li.selected a,\
 .vectorTabs li.selected a:visited {\
  color:#222;\
  text-decoration:none  \
 }\
 .vectorTabs li.icon a {\
  background-position:bottom right;\
  background-repeat:no-repeat  \
 }\
 .vectorTabs li a {\
  display:block;\
  height:1.9em;\
  padding-left:0.615em;\
  padding-right:0.615em;\
  color:#0645ad;\
  cursor:pointer;\
  font-size:0.8125em  \
 }\
 .vectorTabs span {\
  display:inline-block;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-position:bottom right;\
  background-repeat:no-repeat;\
  height:100%  \
 }\
 .vectorTabs span a {\
  float:left;\
  display:block;\
  position:relative;\
  padding-top:1.25em  \
 }\
 .vectorMenu {\
  direction:ltr;\
  float:left;\
  cursor:pointer;\
  position:relative;\
  line-height:1.125em  \
 }\
 .vectorMenu h3 span {\
  position:relative;\
  display:block;\
  font-size:0.8125em;\
  padding-left:0.615em;\
  padding-top:1.25em;\
  padding-right:16px;\
  font-weight:normal;\
  color:#444  \
 }\
 .vectorMenu h3 span:after {\
  content:'';\
  position:absolute;\
  top:1.25em;\
  right:0;\
  bottom:0;\
  left:0;\
  background-image:url(/w/skins/Vector/images/arrow-down.png?42edd);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E %3Cpath d=%22M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5%22 fill=%22%23222%22/%3E %3C/svg%3E\");\
  background-position:100% 50%;\
  background-repeat:no-repeat;\
  opacity:0.85  \
 }\
 .vectorMenu h3:hover span,\
 .vectorMenu h3:focus span {\
  color:#222222  \
 }\
 .vectorMenu h3:hover span:after,\
 .vectorMenu h3:focus span:after {\
  opacity:1  \
 }\
 .vectorMenu .menu {\
  list-style:none none;\
  background-color:#ffffff;\
  clear:both;\
  min-width:100%;\
  position:absolute;\
  top:2.5em;\
  left:-1px;\
  margin:0;\
  border:1px solid #a2a9b1;\
  border-top-width:0;\
  padding:0;\
  box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);\
  text-align:left;\
  opacity:0;\
  visibility:hidden;\
  -webkit-transition:opacity 100ms;\
  -moz-transition:opacity 100ms;\
  transition:opacity 100ms;\
  z-index:2  \
 }\
 .vectorMenu:hover .menu {\
  opacity:1;\
  visibility:visible  \
 }\
 .vectorMenu .vectorMenuCheckbox:checked ~ .menu {\
  opacity:1;\
  visibility:visible  \
 }\
 .vectorMenu ul {\
  list-style:none none;\
  padding:0;\
  margin:0;\
  text-align:left  \
 }\
 .vectorMenu li {\
  padding:0;\
  margin:0;\
  text-align:left;\
  line-height:1em  \
 }\
 .vectorMenu li a {\
  display:block;\
  padding:0.625em;\
  white-space:nowrap;\
  color:#0645ad;\
  cursor:pointer;\
  font-size:0.8125em  \
 }\
 .vectorMenu li.selected a,\
 .vectorMenu li.selected a:visited {\
  color:#222;\
  text-decoration:none  \
 }\
 #mw-head .vectorMenu h3 {\
  float:left;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-repeat:no-repeat;\
  background-position:bottom right;\
  font-size:1em;\
  height:2.5em;\
  padding:0 0.5em 0 0;\
  margin:0 -1px 0 0  \
 }\
 .vectorMenuCheckbox {\
  cursor:pointer;\
  position:absolute;\
  top:0;\
  left:0;\
  z-index:1;\
  opacity:0;\
  width:100%;\
  height:100%;\
  margin:0;\
  padding:0;\
  display:none  \
 }\
 :not(:checked) > .vectorMenuCheckbox {\
  display:block  \
 }\
 .vectorMenuCheckbox:checked + h3 span:after {\
  transform:scaleY(-1)  \
 }\
 .vectorMenuCheckbox:focus + h3 {\
  outline:dotted 1px;\
  outline:auto -webkit-focus-ring-color  \
 }\
 @-webkit-keyframes rotate {\
  from {\
   -webkit-transform:rotate(0deg);\
   -moz-transform:rotate(0deg);\
   transform:rotate(0deg)   \
  }\
  to {\
   -webkit-transform:rotate(360deg);\
   -moz-transform:rotate(360deg);\
   transform:rotate(360deg)   \
  }\
 }\
 @-moz-keyframes rotate {\
  from {\
   -webkit-transform:rotate(0deg);\
   -moz-transform:rotate(0deg);\
   transform:rotate(0deg)   \
  }\
  to {\
   -webkit-transform:rotate(360deg);\
   -moz-transform:rotate(360deg);\
   transform:rotate(360deg)   \
  }\
 }\
 @keyframes rotate {\
  from {\
   -webkit-transform:rotate(0deg);\
   -moz-transform:rotate(0deg);\
   transform:rotate(0deg)   \
  }\
  to {\
   -webkit-transform:rotate(360deg);\
   -moz-transform:rotate(360deg);\
   transform:rotate(360deg)   \
  }\
 }\
 .vectorTabs #ca-unwatch.icon a,\
 .vectorTabs #ca-watch.icon a {\
  margin:0;\
  padding:0;\
  display:block;\
  width:28px;\
  padding-top:3.07692308em;\
  height:0;\
  overflow:hidden;\
  background-position:5px 60%;\
  background-repeat:no-repeat  \
 }\
 .vectorTabs #ca-unwatch.icon a {\
  background-image:url(/w/skins/Vector/images/unwatch-icon.png?fccbe);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E %3Cdefs%3E %3ClinearGradient id=%22a%22%3E %3Cstop offset=%220%22 stop-color=%22%23c2edff%22/%3E %3Cstop offset=%22.5%22 stop-color=%22%2368bdff%22/%3E %3Cstop offset=%221%22 stop-color=%22%23fff%22/%3E %3C/linearGradient%3E %3ClinearGradient id=%22b%22 x1=%2213.47%22 x2=%224.596%22 y1=%2214.363%22 y2=%223.397%22 xlink:href=%22%23a%22 gradientUnits=%22userSpaceOnUse%22/%3E %3C/defs%3E %3Cpath fill=%22url%28%23b%29%22 stroke=%22%237cb5d1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\")  \
 }\
 .vectorTabs #ca-watch.icon a {\
  background-image:url(/w/skins/Vector/images/watch-icon.png?e1b42);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%237cb5d1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\")  \
 }\
 .vectorTabs #ca-unwatch.icon a:hover,\
 .vectorTabs #ca-unwatch.icon a:focus {\
  background-image:url(/w/skins/Vector/images/unwatch-icon-hl.png?c4723);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E %3Cdefs%3E %3ClinearGradient id=%22a%22%3E %3Cstop offset=%220%22 stop-color=%22%23c2edff%22/%3E %3Cstop offset=%22.5%22 stop-color=%22%2368bdff%22/%3E %3Cstop offset=%221%22 stop-color=%22%23fff%22/%3E %3C/linearGradient%3E %3ClinearGradient id=%22b%22 x1=%2213.47%22 x2=%224.596%22 y1=%2214.363%22 y2=%223.397%22 xlink:href=%22%23a%22 gradientUnits=%22userSpaceOnUse%22/%3E %3C/defs%3E %3Cpath fill=%22url%28%23b%29%22 stroke=%22%23c8b250%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\")  \
 }\
 .vectorTabs #ca-watch.icon a:hover,\
 .vectorTabs #ca-watch.icon a:focus {\
  background-image:url(/w/skins/Vector/images/watch-icon-hl.png?f4c7e);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23c8b250%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\")  \
 }\
 .vectorTabs #ca-unwatch.icon a.loading,\
 .vectorTabs #ca-watch.icon a.loading {\
  background-image:url(/w/skins/Vector/images/watch-icon-loading.png?5cb92);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23c8ccd1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\");\
  -webkit-animation:rotate 700ms infinite linear;\
  -moz-animation:rotate 700ms infinite linear;\
  animation:rotate 700ms infinite linear;\
  outline:0;\
  cursor:default;\
  pointer-events:none;\
  background-position:50% 60%;\
  -webkit-transform-origin:50% 57%;\
  transform-origin:50% 57%  \
 }\
 .vectorTabs #ca-unwatch.icon a span,\
 .vectorTabs #ca-watch.icon a span {\
  display:none  \
 }\
 #mw-navigation h2 {\
  position:absolute;\
  top:-9999px  \
 }\
 .mw-jump-link:not(:focus) {\
  display:block;\
  position:absolute !important;\
  clip:rect(1px,1px,1px,1px);\
  width:1px;\
  height:1px;\
  margin:-1px;\
  border:0;\
  padding:0;\
  overflow:hidden  \
 }\
 #mw-page-base {\
  height:5em;\
  background-position:bottom left;\
  background-repeat:repeat-x;\
  background-image:url(/w/skins/Vector/images/page-fade.png?1d168);\
  background-color:#f6f6f6;\
  background-image:-webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);\
  background-image:-moz-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);\
  background-image:linear-gradient(#ffffff 50%,#f6f6f6 100%);\
  background-color:#ffffff  \
 }\
 #mw-head-base {\
  margin-top:-5em;\
  margin-left:10em;\
  height:5em  \
 }\
 #mw-head {\
  position:absolute;\
  top:0;\
  right:0;\
  width:100%  \
 }\
 #left-navigation {\
  float:left;\
  margin-left:10em;\
  margin-top:2.5em;\
  margin-bottom:-2.5em  \
 }\
 #right-navigation {\
  float:right;\
  margin-top:2.5em  \
 }\
 #p-logo {\
  width:10em;\
  height:160px  \
 }\
 #p-logo a {\
  display:block;\
  width:10em;\
  height:160px;\
  background-repeat:no-repeat;\
  background-position:center center;\
  text-decoration:none  \
 }\
 #mw-panel {\
  font-size:inherit;\
  position:absolute;\
  top:0;\
  width:10em;\
  left:0  \
 }\
 #mw-panel .portal {\
  margin:0 0.6em 0 0.7em;\
  padding:0.25em 0;\
  direction:ltr;\
  background-position:top left;\
  background-repeat:no-repeat  \
 }\
 #mw-panel .portal h3 {\
  font-size:0.75em;\
  color:#444444;\
  font-weight:normal;\
  margin:0.5em 0 0 0.66666667em;\
  padding:0.25em 0;\
  cursor:default;\
  border:0  \
 }\
 #mw-panel .portal .body {\
  margin-left:0.5em;\
  padding-top:0;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAABCAAAAAAphRnkAAAAJ0lEQVQIW7XFsQEAIAyAMPD/b7uLWz8wS5youFW1UREfiIpH1Q2VBz7fGPS1dOGeAAAAAElFTkSuQmCC);\
  background-image:url(/w/skins/Vector/images/portal-break.png?3ea1b)!ie;\
  background-repeat:no-repeat  \
 }\
 #mw-panel .portal .body ul {\
  list-style:none none;\
  margin:0;\
  padding:0.3em 0 0 0  \
 }\
 #mw-panel .portal .body li {\
  line-height:1.125em;\
  margin:0;\
  padding:0.25em 0;\
  font-size:0.75em;\
  word-wrap:break-word  \
 }\
 #mw-panel .portal .body li a {\
  color:#0645ad  \
 }\
 #mw-panel .portal .body li a:visited {\
  color:#0b0080  \
 }\
 #mw-panel #p-logo + .portal {\
  background-image:none;\
  margin-top:1em  \
 }\
 #mw-panel #p-logo + .portal h3 {\
  display:none  \
 }\
 #mw-panel #p-logo + .portal .body {\
  background-image:none;\
  margin-left:0.5em  \
 }\
 #footer {\
  margin-left:10em;\
  margin-top:0;\
  padding:0.75em;\
  direction:ltr  \
 }\
 #footer ul {\
  list-style:none none;\
  margin:0;\
  padding:0  \
 }\
 #footer ul li {\
  color:#222;\
  margin:0;\
  padding:0;\
  padding-top:0.5em;\
  padding-bottom:0.5em;\
  font-size:0.7em  \
 }\
 #footer #footer-icons {\
  float:right  \
 }\
 #footer #footer-icons li {\
  float:left;\
  margin-left:0.5em;\
  line-height:2em;\
  text-align:right  \
 }\
 #footer #footer-info li {\
  line-height:1.4em  \
 }\
 #footer #footer-places li {\
  float:left;\
  margin-right:1em;\
  line-height:2em  \
 }\
 .mw-parser-output .external {\
  background-position:center right;\
  background-repeat:no-repeat;\
  background-image:url(/w/skins/Vector/images/external-link-ltr-icon.png?325de);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E\");\
  padding-right:13px  \
 }\
}\
@media screen and (min-width:982px) {\
 .mw-body,\
 #mw-head-base,\
 #left-navigation,\
 #footer {\
  margin-left:11em  \
 }\
 .mw-body {\
  padding:1.25em 1.5em 1.5em 1.5em  \
 }\
 #footer {\
  padding:1.25em  \
 }\
 #mw-panel {\
  padding-left:0.5em  \
 }\
 #p-search {\
  margin-right:1em  \
 }\
 .wds-global-navigation__user-menu > div > ul {\
  right:1em  \
 }\
}\
.firstHeading:before {\
 content:url(//en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg);\
 display:block;\
 height:18px;\
 left:-9999px;\
 line-height:0;\
 margin-bottom:20px;\
 position:absolute;\
 width:116px \
}\
@media print {\
 .toc,\
 body {\
  padding:10px;\
  font-family:'Linux Libertine','Georgia','Times',serif  \
 }\
 .printfooter,\
 #footer,\
 .thumb,\
 table,\
 ol,\
 dl,\
 ul,\
 h3,\
 h4,\
 h5,\
 h6 {\
  font-family:sans-serif  \
 }\
 img {\
  font-family:'Linux Libertine','Georgia','Times',serif  \
 }\
 a {\
  border-bottom:1px solid #aaa  \
 }\
 .firstHeading {\
  font-size:25pt;\
  line-height:28pt;\
  margin-bottom:20px;\
  padding-bottom:5px  \
 }\
 .firstHeading:before {\
  left:auto;\
  position:relative  \
 }\
 .firstHeading,\
 h2 {\
  overflow:hidden;\
  border-bottom:2px solid #000000  \
 }\
 h3,\
 h4,\
 h5,\
 h6 {\
  margin:30px 0 0  \
 }\
 h2,\
 h3,\
 h4,\
 h5,\
 h6 {\
  padding:0;\
  position:relative  \
 }\
 h2 {\
  font-size:18pt;\
  line-height:24pt;\
  margin-bottom:0.25em  \
 }\
 h3 {\
  font-size:13pt;\
  line-height:20pt  \
 }\
 h4,\
 h5,\
 h6 {\
  font-size:10pt;\
  line-height:15pt  \
 }\
 p {\
  font-size:10pt;\
  line-height:16pt;\
  margin-top:5px;\
  text-align:justify  \
 }\
 p:before {\
  content:'';\
  display:block;\
  overflow:hidden;\
  width:120pt  \
 }\
 blockquote {\
  border-left:2px solid #000000;\
  padding-left:20px  \
 }\
 ol,\
 ul {\
  margin:10px 0 0 1.6em;\
  padding:0  \
 }\
 ol li,\
 ul li {\
  padding:2px 0;\
  font-size:10pt  \
 }\
 table ol li,\
 table ul li {\
  font-size:inherit  \
 }\
 .toc {\
  page-break-before:avoid;\
  page-break-after:avoid;\
  background:none;\
  border:0;\
  display:table  \
 }\
 .toc a {\
  border:0;\
  font-weight:normal  \
 }\
 .toc > ul > li {\
  margin-bottom:4px;\
  font-weight:bold  \
 }\
 .toc ul {\
  margin:0;\
  list-style:none  \
 }\
 .toc ul ul {\
  padding-left:30px  \
 }\
 .toc li.toclevel-1 > a {\
  font-weight:bold;\
  font-size:10pt  \
 }\
 .mw-jump-link,\
 .toc .tocnumber {\
  display:none  \
 }\
 .printfooter {\
  margin-top:10px;\
  border-top:3px solid #000000;\
  padding-top:10px;\
  font-size:10pt;\
  clear:both  \
 }\
 #footer {\
  margin-top:12px;\
  border-top:1px solid #eeeeee;\
  padding-top:5px  \
 }\
 #footer-info {\
  margin:0;\
  padding:0  \
 }\
 #footer-info li {\
  color:#999;\
  list-style:none;\
  display:block;\
  padding-bottom:10px;\
  font-size:10pt  \
 }\
 #footer-info li a {\
  color:#999 !important  \
 }\
 #footer-info-lastmod {\
  color:#000000;\
  font-size:12pt;\
  font-weight:bold  \
 }\
}\
.wb-langlinks-link {\
 line-height:1.125em;\
 font-size:0.75em;\
 float:right \
}\
.wb-langlinks-link {\
 list-style:none none;\
 text-align:right;\
 padding-right:0.5em !important \
}\
.wb-langlinks-link > a:before {\
 content:'';\
 background-image:url(/w/extensions/Wikibase/client/resources/images/edit.png?52328);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E %3Cpath fill=%22%230645ad%22 d=%22M10.5 4.7l1.3-1.3c.3-.3.3-.7 0-.9L9.6.2c-.3-.3-.7-.3-.9 0L7.3 1.5l3.2 3.2zM6.6 2.2L0 8.8V12h3.2l6.6-6.6-3.2-3.2z%22/%3E %3C/svg%3E\");\
 background-position:left top;\
 background-repeat:no-repeat;\
 -webkit-background-size:10px 10px;\
 background-size:10px 10px;\
 display:inline-block;\
 width:10px;\
 height:10px;\
 margin-right:2px;\
 vertical-align:top \
}\
.wb-langlinks-link > a:link,\
.wb-langlinks-link > a:visited {\
 color:#72777d !important \
}\
.wb-langlinks-link > a:link:before,\
.wb-langlinks-link > a:visited:before {\
 -webkit-filter:grayscale(1);\
 filter:grayscale(1);\
 opacity:0.73 \
}\
.wb-langlinks-link > a:hover {\
 color:#0645ad !important \
}\
.wb-langlinks-link > a:hover:before {\
 -webkit-filter:none;\
 filter:none;\
 opacity:1 \
}\
div.after-portlet-lang:after {\
 content:'';\
 clear:both;\
 display:block \
}\
.mw-3d-wrapper {\
 display:inline-block;\
 position:relative;\
 overflow:hidden;\
 vertical-align:top\
}\
.mw-3d-wrapper:after {\
 content:attr(data-label);\
 position:absolute;\
 pointer-events:none;\
 top:11px;\
 left:11px;\
 color:#1e1f21;\
 font-size:14px;\
 line-height:19px;\
 font-weight:bold;\
 opacity:0.8;\
 padding:2px 5px;\
 background-color:#f8f9fa;\
 border-radius:2px\
}\
.mw-3d-thumb-placeholder {\
 display:inline-block;\
 text-decoration:none;\
 color:#222\
}\
#p-lang .uls-settings-trigger {\
 background:transparent no-repeat center top;\
 background-image:url(/w/extensions/UniversalLanguageSelector/resources/images/cog-sprite.png?30312);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 width=%2214%22 height=%2232%22%3E %3Cdefs%3E %3Cpath id=%22a%22 d=%22M14 9.3V6.73l-1.575-.264a4.947 4.947 0 0 0-.496-1.2l.93-1.285-1.81-1.84-1.31.908c-.38-.205-.79-.38-1.196-.497L8.284 1H5.716l-.263 1.578a5.489 5.489 0 0 0-1.196.497L2.975 2.17 1.137 3.98l.934 1.287c-.2.38-.376.79-.493 1.228L0 6.73V9.3l1.575.264c.117.438.292.818.496 1.198l-.93 1.315L2.95 13.89l1.312-.938c.38.205.787.38 1.224.497L5.746 15h2.566l.263-1.578a6.13 6.13 0 0 0 1.196-.497l1.315.935 1.81-1.812-.935-1.315c.203-.38.38-.76.495-1.2L14 9.303zm-7 1.404c-1.488 0-2.683-1.2-2.683-2.69S5.542 5.327 7 5.327a2.698 2.698 0 0 1 2.683 2.69A2.678 2.678 0 0 1 7 10.705z%22/%3E %3C/defs%3E %3Cuse fill=%22%2372777d%22 xlink:href=%22%23a%22/%3E %3Cuse fill=%22%2354595d%22 transform=%22translate%280 16%29%22 xlink:href=%22%23a%22/%3E %3C/svg%3E\");\
 border:0;\
 min-height:16px;\
 min-width:16px;\
 float:right;\
 cursor:pointer\
}\
#p-lang .uls-settings-trigger::-moz-focus-inner {\
 border:0\
}\
#p-lang .uls-settings-trigger:focus {\
 outline:1px solid #36c\
}\
.skin-vector #p-lang .uls-settings-trigger {\
 margin-top:8px\
}\
#p-lang .uls-settings-trigger:hover {\
 background-position:center -16px\
}\
.client-nojs #ca-ve-edit,\
.client-nojs .editsection-divider,\
.client-nojs .editsection-visualeditor,\
.ve-not-available #ca-ve-edit,\
.ve-not-available .editsection-divider,\
.ve-not-available .editsection-visualeditor {\
 display:none\
}\
.client-js .mw-content-ltr .editsection-bracket:first-of-type,\
.client-js .mw-content-rtl .editsection-bracket:not(:first-of-type) {\
 margin-right:0.25em;\
 color:#54595d\
}\
.client-js .mw-content-rtl .editsection-bracket:first-of-type,\
.client-js .mw-content-ltr .editsection-bracket:not(:first-of-type) {\
 margin-left:0.25em;\
 color:#54595d\
}\
.badge-goodarticle,\
.badge-goodlist,\
.badge-recommendedarticle {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-silver-star.png?70a8c)\
}\
.badge-featuredarticle,\
.badge-featuredportal,\
.badge-featuredlist {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-golden-star.png?ed948)\
}\
.badge-problematic {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-problematic.png?f3177)\
}\
.badge-proofread {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-proofread.png?e81f9)\
}\
.badge-validated {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-validated.png?6232c)\
}\
.badge-digitaldocument {\
 list-style-image:url(/w/extensions/WikimediaBadges/resources/images/badge-digitaldocument.png?d1c50)\
}\
@media print {\
 .noprint,\
 .catlinks,\
 .magnify,\
 .mw-cite-backlink,\
 .editsection,\
 .editsection-like,\
 .mw-hidden-catlinks,\
 .mw-indicators,\
 .mw-redirectedfrom,\
 .patrollink,\
 .usermessage,\
 #column-one,\
 #footer-places,\
 #mw-navigation,\
 #siteNotice,\
 #f-poweredbyico,\
 #f-copyrightico,\
 li#about,\
 li#disclaimer,\
 li#mobileview,\
 li#privacy {\
  display:none \
 }\
 body {\
  background:#fff;\
  color:#000;\
  margin:0;\
  padding:0 \
 }\
 a {\
  background:none !important;\
  padding:0 !important \
 }\
 a,\
 a.external,\
 a.new,\
 a.stub {\
  color:#000 !important;\
  text-decoration:none !important;\
  color:inherit !important;\
  text-decoration:inherit !important \
 }\
 .mw-parser-output a.external.text:after,\
 .mw-parser-output a.external.autonumber:after {\
  content:' (' attr(href) ')';\
  word-break:break-all;\
  word-wrap:break-word \
 }\
 .mw-parser-output a.external.text[href^='//']:after,\
 .mw-parser-output a.external.autonumber[href^='//']:after {\
  content:' (https:' attr(href) ')' \
 }\
 dt {\
  font-weight:bold \
 }\
 h1,\
 h2,\
 h3,\
 h4,\
 h5,\
 h6 {\
  font-weight:bold;\
  page-break-after:avoid;\
  page-break-before:avoid \
 }\
 p {\
  margin:1em 0;\
  line-height:1.2;\
  orphans:3;\
  widows:3 \
 }\
 img,\
 figure,\
 .wikitable,\
 .thumb {\
  page-break-inside:avoid \
 }\
 img {\
  border:0;\
  vertical-align:middle \
 }\
 pre,\
 .mw-code {\
  background:#fff;\
  color:#000;\
  border:1pt dashed #000;\
  padding:1em 0;\
  font-size:8pt;\
  white-space:pre-wrap;\
  word-wrap:break-word \
 }\
 sup,\
 sub {\
  line-height:1 \
 }\
 ul {\
  list-style-type:square \
 }\
 #globalWrapper {\
  width:100% !important;\
  min-width:0 !important \
 }\
 #WikiaPage {\
  background:#fff;\
  color:#000;\
  border:0 !important;\
  padding:0 !important;\
  margin:0 !important;\
  direction:ltr \
 }\
 #column-content {\
  margin:0 !important \
 }\
 #column-content #WikiaPage {\
  padding:1em;\
  margin:0 !important \
 }\
 .toc {\
  background-color:#f9f9f9;\
  border:1pt solid #aaa;\
  padding:5px;\
  display:table \
 }\
 .tocnumber,\
 .toctext {\
  display:table-cell \
 }\
 .tocnumber {\
  padding-left:0;\
  padding-right:0.5em \
 }\
 .mw-content-ltr .tocnumber {\
  padding-left:0;\
  padding-right:0.5em \
 }\
 .mw-content-rtl .tocnumber {\
  padding-left:0.5em;\
  padding-right:0 \
 }\
 table.floatright,\
 div.floatright,\
 div.tright {\
  float:right;\
  clear:right;\
  position:relative \
 }\
 table.floatleft,\
 div.floatleft,\
 div.tleft {\
  float:left;\
  clear:left;\
  position:relative \
 }\
 div.tleft {\
  margin:0.5em 1.4em 1.3em 0 \
 }\
 div.tright {\
  margin:0.5em 0 1.3em 1.4em \
 }\
 table.floatright,\
 div.floatright {\
  margin:0 0 0.5em 0.5em;\
  border:0 \
 }\
 table.floatleft,\
 div.floatleft {\
  margin:0 0.5em 0.5em 0;\
  border:0 \
 }\
 .center {\
  text-align:center \
 }\
 div.thumb {\
  background-color:transparent;\
  width:auto \
 }\
 div.thumb a {\
  border-bottom:0 \
 }\
 div.thumbinner {\
  background-color:#fff;\
  border:0;\
  border-radius:2px;\
  padding:5px;\
  font-size:10pt;\
  color:#666;\
  text-align:center;\
  overflow:hidden;\
  min-width:100px \
 }\
 html .thumbcaption {\
  text-align:left;\
  line-height:1.4;\
  padding:3px \
 }\
 img.thumbborder {\
  border:1pt solid #ddd \
 }\
 .wikitable,\
 .mw_metadata {\
  background:#fff;\
  margin:1em 0;\
  border:1pt solid #aaa;\
  border-collapse:collapse;\
  font-size:10pt \
 }\
 .wikitable > caption,\
 .mw_metadata caption {\
  padding:5px;\
  font-size:10pt \
 }\
 .wikitable > tr > th,\
 .wikitable > tr > td,\
 .wikitable > * > tr > th,\
 .wikitable > * > tr > td,\
 .mw_metadata th,\
 .mw_metadata td {\
  background:#fff !important;\
  color:#000 !important;\
  border:1pt solid #aaa;\
  padding:0.4em 0.6em \
 }\
 .wikitable > tr > th,\
 .wikitable > * > tr > th,\
 .mw_metadata th {\
  text-align:center \
 }\
 table.listing,\
 table.listing td {\
  border:1pt solid #000;\
  border-collapse:collapse \
 }\
 .catlinks ul {\
  display:inline;\
  padding:0;\
  list-style:none none \
 }\
 .catlinks li {\
  display:inline-block;\
  line-height:1.15;\
  margin:0.1em 0;\
  border-left:1pt solid #aaa;\
  padding:0 0.4em \
 }\
 .catlinks li:first-child {\
  border-left:0;\
  padding-left:0.2em \
 }\
 .printfooter {\
  padding:1em 0 \
 }\
 .wds-global-footer {\
  background:#fff;\
  color:#000;\
  margin-top:1em;\
  border-top:1pt solid #aaa;\
  padding-top:5px;\
  direction:ltr \
 }\
}\
@media screen {\
 .mw-content-ltr {\
  direction:ltr \
 }\
 .mw-content-rtl {\
  direction:rtl \
 }\
 .sitedir-ltr textarea,\
 .sitedir-ltr input {\
  direction:ltr \
 }\
 .sitedir-rtl textarea,\
 .sitedir-rtl input {\
  direction:rtl \
 }\
 .mw-userlink {\
  unicode-bidi:embed \
 }\
 mark {\
  background-color:#ff0;\
  color:#000 \
 }\
 wbr {\
  display:inline-block \
 }\
 input[type='submit'],\
 input[type='button'],\
 input[type='reset'],\
 input[type='file'] {\
  direction:ltr \
 }\
 textarea[dir='ltr'],\
 input[dir='ltr'] {\
  direction:ltr \
 }\
 textarea[dir='rtl'],\
 input[dir='rtl'] {\
  direction:rtl \
 }\
 abbr[title],\
 .explain[title] {\
  border-bottom:1px dotted;\
  cursor:help \
 }\
 @supports (text-decoration:underline dotted) {\
  abbr[title],\
  .explain[title] {\
   border-bottom:0;\
   text-decoration:underline dotted  \
  }\
 }\
 span.comment {\
  font-style:italic;\
  unicode-bidi:-moz-isolate;\
  unicode-bidi:isolate \
 }\
 #editform,\
 #toolbar,\
 #wpTextbox1 {\
  clear:both \
 }\
 #toolbar {\
  height:22px \
 }\
 .mw-underline-always a {\
  text-decoration:underline \
 }\
 .mw-underline-never a {\
  text-decoration:none \
 }\
 li span.deleted,\
 span.history-deleted {\
  text-decoration:line-through;\
  color:#72777d;\
  font-style:italic \
 }\
 .not-patrolled {\
  background-color:#ffa \
 }\
 .unpatrolled {\
  font-weight:bold;\
  color:#d33 \
 }\
 div.patrollink {\
  font-size:75%;\
  text-align:right \
 }\
 td.mw-label {\
  text-align:right;\
  vertical-align:middle \
 }\
 td.mw-input {\
  text-align:left \
 }\
 td.mw-submit {\
  text-align:left;\
  white-space:nowrap \
 }\
 .mw-input-with-label {\
  white-space:nowrap;\
  display:inline-block \
 }\
 .mw-content-ltr .thumbcaption {\
  text-align:left \
 }\
 .mw-content-ltr .magnify {\
  float:right \
 }\
 .mw-content-rtl .thumbcaption {\
  text-align:right \
 }\
 .mw-content-rtl .magnify {\
  float:left \
 }\
 #catlinks {\
  text-align:left \
 }\
 .catlinks ul {\
  display:inline;\
  margin:0;\
  padding:0;\
  list-style:none none;\
  vertical-align:middle !ie \
 }\
 .catlinks li {\
  display:inline-block;\
  line-height:1.25em;\
  border-left:1px solid #a2a9b1;\
  margin:0.125em 0;\
  padding:0 0.5em;\
  zoom:1;\
  display:inline !ie \
 }\
 .catlinks li:first-child {\
  padding-left:0.25em;\
  border-left:0 \
 }\
 .catlinks li a.mw-redirect {\
  font-style:italic \
 }\
 .mw-hidden-cats-hidden {\
  display:none \
 }\
 .catlinks-allhidden {\
  display:none \
 }\
 p.mw-protect-editreasons,\
 p.mw-filedelete-editreasons,\
 p.mw-delete-editreasons {\
  font-size:90%;\
  text-align:right \
 }\
 .autocomment,\
 .autocomment a,\
 .autocomment a:visited {\
  color:#72777d \
 }\
 .newpage,\
 .minoredit,\
 .botedit {\
  font-weight:bold \
 }\
 div.mw-warning-with-logexcerpt {\
  padding:3px;\
  margin-bottom:3px;\
  border:2px solid #2a4b8d;\
  clear:both \
 }\
 div.mw-warning-with-logexcerpt ul li {\
  font-size:90% \
 }\
 span.mw-revdelundel-link,\
 strong.mw-revdelundel-link {\
  font-size:90% \
 }\
 span.mw-revdelundel-hidden,\
 input.mw-revdelundel-hidden {\
  visibility:hidden \
 }\
 td.mw-revdel-checkbox,\
 th.mw-revdel-checkbox {\
  padding-right:10px;\
  text-align:center \
 }\
 a.new {\
  color:#ba0000 \
 }\
 .plainlinks a.external {\
  background:none !important;\
  padding:0 !important \
 }\
 .rtl a.external.free,\
 .rtl a.external.autonumber {\
  direction:ltr;\
  unicode-bidi:embed \
 }\
 .wikitable {\
  background-color:#f8f9fa;\
  color:#222;\
  margin:1em 0;\
  border:1px solid #a2a9b1;\
  border-collapse:collapse \
 }\
 .wikitable > tr > th,\
 .wikitable > tr > td,\
 .wikitable > * > tr > th,\
 .wikitable > * > tr > td {\
  border:1px solid #a2a9b1;\
  padding:0.2em 0.4em \
 }\
 .wikitable > tr > th,\
 .wikitable > * > tr > th {\
  background-color:#eaecf0;\
  text-align:center \
 }\
 .wikitable > caption {\
  font-weight:bold \
 }\
 .error,\
 .warning,\
 .success {\
  font-size:larger \
 }\
 .error {\
  color:#d33 \
 }\
 .warning {\
  color:#705000 \
 }\
 .success {\
  color:#009000 \
 }\
 .errorbox,\
 .warningbox,\
 .successbox {\
  border:1px solid;\
  padding:0.5em 1em;\
  margin-bottom:1em;\
  display:inline-block;\
  zoom:1;\
  *display:inline \
 }\
 .errorbox h2,\
 .warningbox h2,\
 .successbox h2 {\
  font-size:1em;\
  color:inherit;\
  font-weight:bold;\
  display:inline;\
  margin:0 0.5em 0 0;\
  border:0 \
 }\
 .errorbox {\
  color:#d33;\
  border-color:#fac5c5;\
  background-color:#fae3e3 \
 }\
 .warningbox {\
  color:#705000;\
  border-color:#fde29b;\
  background-color:#fdf1d1 \
 }\
 .successbox {\
  color:#008000;\
  border-color:#b7fdb5;\
  background-color:#e1fddf \
 }\
 .mw-infobox {\
  border:2px solid #ff7f00;\
  margin:0.5em;\
  clear:left;\
  overflow:hidden \
 }\
 .mw-infobox-left {\
  margin:7px;\
  float:left;\
  width:35px \
 }\
 .mw-infobox-right {\
  margin:0.5em 0.5em 0.5em 49px \
 }\
 .previewnote {\
  color:#d33;\
  margin-bottom:1em \
 }\
 .previewnote p {\
  text-indent:3em;\
  margin:0.8em 0 \
 }\
 .visualClear {\
  clear:both \
 }\
 .mw-datatable {\
  border:1px solid #a2a9b1;\
  border-collapse:collapse \
 }\
 .mw-datatable td,\
 .mw-datatable th {\
  border:1px solid #a2a9b1;\
  padding:0.2em 0.4em \
 }\
 .mw-datatable th {\
  background-color:#ddf \
 }\
 .mw-datatable td {\
  background-color:#fff \
 }\
 .mw-datatable tr:hover td {\
  background-color:#eaf3ff \
 }\
 .mw-content-ltr ul,\
 .mw-content-rtl .mw-content-ltr ul {\
  margin:0.3em 0 0 1.6em;\
  padding:0 \
 }\
 .mw-content-rtl ul,\
 .mw-content-ltr .mw-content-rtl ul {\
  margin:0.3em 1.6em 0 0;\
  padding:0 \
 }\
 .mw-content-ltr ol,\
 .mw-content-rtl .mw-content-ltr ol {\
  margin:0.3em 0 0 3.2em;\
  padding:0 \
 }\
 .mw-content-rtl ol,\
 .mw-content-ltr .mw-content-rtl ol {\
  margin:0.3em 3.2em 0 0;\
  padding:0 \
 }\
 .mw-content-ltr dd,\
 .mw-content-rtl .mw-content-ltr dd {\
  margin-left:1.6em;\
  margin-right:0 \
 }\
 .mw-content-rtl dd,\
 .mw-content-ltr .mw-content-rtl dd {\
  margin-right:1.6em;\
  margin-left:0 \
 }\
 .mw-ajax-loader {\
  background-image:url(/w/resources/src/mediawiki.legacy/images/ajax-loader.gif?57f34);\
  background-position:center center;\
  background-repeat:no-repeat;\
  padding:16px;\
  position:relative;\
  top:-16px \
 }\
 .mw-small-spinner {\
  padding:10px !important;\
  margin-right:0.6em;\
  background-image:url(/w/resources/src/mediawiki.legacy/images/spinner.gif?ca65b);\
  background-position:center center;\
  background-repeat:no-repeat \
 }\
 h1:lang(anp),\
 h1:lang(as),\
 h1:lang(bh),\
 h1:lang(bho),\
 h1:lang(bn),\
 h1:lang(gu),\
 h1:lang(hi),\
 h1:lang(kn),\
 h1:lang(ks),\
 h1:lang(ml),\
 h1:lang(mr),\
 h1:lang(my),\
 h1:lang(mai),\
 h1:lang(ne),\
 h1:lang(new),\
 h1:lang(or),\
 h1:lang(pa),\
 h1:lang(pi),\
 h1:lang(sa),\
 h1:lang(ta),\
 h1:lang(te) {\
  line-height:1.6em !important \
 }\
 h2:lang(anp),\
 h3:lang(anp),\
 h4:lang(anp),\
 h5:lang(anp),\
 h6:lang(anp),\
 h2:lang(as),\
 h3:lang(as),\
 h4:lang(as),\
 h5:lang(as),\
 h6:lang(as),\
 h2:lang(bho),\
 h3:lang(bho),\
 h4:lang(bho),\
 h5:lang(bho),\
 h6:lang(bho),\
 h2:lang(bh),\
 h3:lang(bh),\
 h4:lang(bh),\
 h5:lang(bh),\
 h6:lang(bh),\
 h2:lang(bn),\
 h3:lang(bn),\
 h4:lang(bn),\
 h5:lang(bn),\
 h6:lang(bn),\
 h2:lang(gu),\
 h3:lang(gu),\
 h4:lang(gu),\
 h5:lang(gu),\
 h6:lang(gu),\
 h2:lang(hi),\
 h3:lang(hi),\
 h4:lang(hi),\
 h5:lang(hi),\
 h6:lang(hi),\
 h2:lang(kn),\
 h3:lang(kn),\
 h4:lang(kn),\
 h5:lang(kn),\
 h6:lang(kn),\
 h2:lang(ks),\
 h3:lang(ks),\
 h4:lang(ks),\
 h5:lang(ks),\
 h6:lang(ks),\
 h2:lang(ml),\
 h3:lang(ml),\
 h4:lang(ml),\
 h5:lang(ml),\
 h6:lang(ml),\
 h2:lang(mr),\
 h3:lang(mr),\
 h4:lang(mr),\
 h5:lang(mr),\
 h6:lang(mr),\
 h2:lang(my),\
 h3:lang(my),\
 h4:lang(my),\
 h5:lang(my),\
 h6:lang(my),\
 h2:lang(mai),\
 h3:lang(mai),\
 h4:lang(mai),\
 h5:lang(mai),\
 h6:lang(mai),\
 h2:lang(ne),\
 h3:lang(ne),\
 h4:lang(ne),\
 h5:lang(ne),\
 h6:lang(ne),\
 h2:lang(new),\
 h3:lang(new),\
 h4:lang(new),\
 h5:lang(new),\
 h6:lang(new),\
 h2:lang(or),\
 h3:lang(or),\
 h4:lang(or),\
 h5:lang(or),\
 h6:lang(or),\
 h2:lang(pa),\
 h3:lang(pa),\
 h4:lang(pa),\
 h5:lang(pa),\
 h6:lang(pa),\
 h2:lang(pi),\
 h3:lang(pi),\
 h4:lang(pi),\
 h5:lang(pi),\
 h6:lang(pi),\
 h2:lang(sa),\
 h3:lang(sa),\
 h4:lang(sa),\
 h5:lang(sa),\
 h6:lang(sa),\
 h2:lang(ta),\
 h3:lang(ta),\
 h4:lang(ta),\
 h5:lang(ta),\
 h6:lang(ta),\
 h2:lang(te),\
 h3:lang(te),\
 h4:lang(te),\
 h5:lang(te),\
 h6:lang(te) {\
  line-height:1.2em \
 }\
 ol:lang(azb) li,\
 ol:lang(bcc) li,\
 ol:lang(bgn) li,\
 ol:lang(bqi) li,\
 ol:lang(fa) li,\
 ol:lang(glk) li,\
 ol:lang(kk-arab) li,\
 ol:lang(lrc) li,\
 ol:lang(luz) li,\
 ol:lang(mzn) li {\
  list-style-type:-moz-persian;\
  list-style-type:persian \
 }\
 ol:lang(ckb) li,\
 ol:lang(sdh) li {\
  list-style-type:-moz-arabic-indic;\
  list-style-type:arabic-indic \
 }\
 ol:lang(hi) li,\
 ol:lang(mai) li,\
 ol:lang(mr) li,\
 ol:lang(ne) li {\
  list-style-type:-moz-devanagari;\
  list-style-type:devanagari \
 }\
 ol:lang(as) li,\
 ol:lang(bn) li {\
  list-style-type:-moz-bengali;\
  list-style-type:bengali \
 }\
 ol:lang(or) li {\
  list-style-type:-moz-oriya;\
  list-style-type:oriya \
 }\
 .toc ul {\
  margin:0.3em 0 \
 }\
 .mw-content-ltr .toc ul,\
 .mw-content-rtl .mw-content-ltr .toc ul {\
  text-align:left \
 }\
 .mw-content-rtl .toc ul,\
 .mw-content-ltr .mw-content-rtl .toc ul {\
  text-align:right \
 }\
 .mw-content-ltr .toc ul ul,\
 .mw-content-rtl .mw-content-ltr .toc ul ul {\
  margin:0 0 0 2em \
 }\
 .mw-content-rtl .toc ul ul,\
 .mw-content-ltr .mw-content-rtl .toc ul ul {\
  margin:0 2em 0 0 \
 }\
 .toc .toctitle {\
  direction:ltr \
 }\
 #mw-clearyourcache,\
 #mw-sitecsspreview,\
 #mw-sitejspreview,\
 #mw-usercsspreview,\
 #mw-userjspreview {\
  direction:ltr;\
  unicode-bidi:embed \
 }\
 #mw-revision-info,\
 #mw-revision-info-current,\
 #mw-revision-nav {\
  direction:ltr \
 }\
 div.tright,\
 div.floatright,\
 table.floatright {\
  clear:right;\
  float:right \
 }\
 div.tleft,\
 div.floatleft,\
 table.floatleft {\
  float:left;\
  clear:left \
 }\
 div.floatright,\
 table.floatright,\
 div.floatleft,\
 table.floatleft {\
  position:relative \
 }\
 #mw-credits a {\
  unicode-bidi:embed \
 }\
 .printfooter {\
  display:none \
 }\
 .xdebug-error {\
  position:absolute;\
  z-index:99 \
 }\
 .editsection {\
  -moz-user-select:none;\
  -webkit-user-select:none;\
  -ms-user-select:none;\
  user-select:none \
 }\
 .editsection,\
 .editsection-like {\
  font-size:small;\
  font-weight:normal;\
  margin-left:1em;\
  vertical-align:baseline;\
  line-height:1em \
 }\
 .mw-content-ltr .editsection,\
 .mw-content-rtl .mw-content-ltr .editsection {\
  margin-left:1em \
 }\
 .mw-content-rtl .editsection,\
 .mw-content-ltr .mw-content-rtl .editsection {\
  margin-right:1em \
 }\
 sup,\
 sub {\
  line-height:1 \
 }\
}\
@media screen {\
 a {\
  text-decoration:none;\
  color:#0645ad;\
  background:none \
 }\
 a:not([href]) {\
  cursor:pointer \
 }\
 a:visited {\
  color:#0b0080 \
 }\
 a:active {\
  color:#faa700 \
 }\
 a:hover,\
 a:focus {\
  text-decoration:underline \
 }\
 a:lang(ar),\
 a:lang(kk-arab),\
 a:lang(mzn),\
 a:lang(ps),\
 a:lang(ur) {\
  text-decoration:none \
 }\
 a.stub {\
  color:#723 \
 }\
 a.new,\
 #globalNavigation a.new {\
  color:#ba0000 \
 }\
 a.mw-selflink {\
  color:inherit;\
  font-weight:bold;\
  text-decoration:inherit \
 }\
 a.mw-selflink:hover {\
  cursor:inherit;\
  text-decoration:inherit \
 }\
 a.mw-selflink:active,\
 a.mw-selflink:visited {\
  color:inherit \
 }\
 a.new:visited,\
 #globalNavigation a.new:visited {\
  color:#a55858 \
 }\
 .mw-parser-output a.extiw,\
 .mw-parser-output a.extiw:active {\
  color:#36b \
 }\
 .mw-parser-output a.extiw:visited {\
  color:#636 \
 }\
 .mw-parser-output a.extiw:active {\
  color:#b63 \
 }\
 .mw-parser-output a.external {\
  color:#36b \
 }\
 .mw-parser-output a.external:visited {\
  color:#636 \
 }\
 .mw-parser-output a.external:active {\
  color:#b63 \
 }\
 .mw-parser-output a.external.free {\
  word-wrap:break-word \
 }\
 img {\
  border:0;\
  vertical-align:middle \
 }\
 hr {\
  height:1px;\
  color:#a2a9b1;\
  background-color:#a2a9b1;\
  border:0;\
  margin:0.2em 0 \
 }\
 h1,\
 h2,\
 h3,\
 h4,\
 h5,\
 h6 {\
  color:#000;\
  background:none;\
  font-weight:normal;\
  margin:0;\
  overflow:hidden;\
  padding-top:0.5em;\
  padding-bottom:0.17em;\
  border-bottom:1px solid #a2a9b1 \
 }\
 h1 {\
  font-size:188% \
 }\
 h2 {\
  font-size:150% \
 }\
 h3,\
 h4,\
 h5,\
 h6 {\
  border-bottom:0;\
  font-weight:bold \
 }\
 h3 {\
  font-size:128% \
 }\
 h4 {\
  font-size:116% \
 }\
 h5 {\
  font-size:108% \
 }\
 h6 {\
  font-size:100% \
 }\
 h1,\
 h2 {\
  margin-bottom:0.6em \
 }\
 h3,\
 h4,\
 h5 {\
  margin-bottom:0.3em \
 }\
 p {\
  margin:0.4em 0 0.5em 0 \
 }\
 p img {\
  margin:0 \
 }\
 ul {\
  list-style-type:square;\
  margin:0.3em 0 0 1.6em;\
  padding:0 \
 }\
 ol {\
  margin:0.3em 0 0 3.2em;\
  padding:0;\
  list-style-image:none \
 }\
 li {\
  margin-bottom:0.1em \
 }\
 dt {\
  font-weight:bold;\
  margin-bottom:0.1em \
 }\
 dl {\
  margin-top:0.2em;\
  margin-bottom:0.5em \
 }\
 dd {\
  margin-left:1.6em;\
  margin-bottom:0.1em \
 }\
 pre,\
 code,\
 tt,\
 kbd,\
 samp,\
 .mw-code {\
  font-family:monospace,monospace \
 }\
 code {\
  color:#000;\
  background-color:#f8f9fa;\
  border:1px solid #eaecf0;\
  border-radius:2px;\
  padding:1px 4px \
 }\
 pre,\
 .mw-code {\
  color:#000;\
  background-color:#f8f9fa;\
  border:1px solid #eaecf0;\
  padding:1em;\
  white-space:pre-wrap \
 }\
 table {\
  font-size:100% \
 }\
 fieldset {\
  border:1px solid #2a4b8d;\
  margin:1em 0 1em 0;\
  padding:0 1em 1em \
 }\
 fieldset.nested {\
  margin:0 0 0.5em 0;\
  padding:0 0.5em 0.5em \
 }\
 legend {\
  padding:0.5em;\
  font-size:95% \
 }\
 form {\
  border:0;\
  margin:0 \
 }\
 textarea {\
  width:100%;\
  padding:0.1em;\
  display:block;\
  -moz-box-sizing:border-box;\
  -webkit-box-sizing:border-box;\
  box-sizing:border-box \
 }\
 .center {\
  width:100%;\
  text-align:center \
 }\
 *.center * {\
  margin-left:auto;\
  margin-right:auto \
 }\
 .small {\
  font-size:94% \
 }\
 table.small {\
  font-size:100% \
 }\
 .toc,\
 .mw-warning,\
 .toccolours {\
  border:1px solid #a2a9b1;\
  background-color:#f8f9fa;\
  padding:5px;\
  font-size:95% \
 }\
 .toc {\
  display:inline-block;\
  display:table;\
  zoom:1;\
  *display:inline;\
  padding:7px \
 }\
 table.toc {\
  border-collapse:collapse \
 }\
 table.toc td {\
  padding:0 \
 }\
 .toc h2 {\
  display:inline;\
  border:0;\
  padding:0;\
  font-size:100%;\
  font-weight:bold \
 }\
 .toc .toctitle {\
  text-align:center \
 }\
 .toc ul {\
  list-style-type:none;\
  list-style-image:none;\
  margin-left:0;\
  padding:0;\
  text-align:left \
 }\
 .toc ul ul {\
  margin:0 0 0 2em \
 }\
 .tocnumber,\
 .toctext {\
  display:table-cell;\
  text-decoration:inherit \
 }\
 .tocnumber {\
  padding-left:0;\
  padding-right:0.5em;\
  color:#222 \
 }\
 .mw-content-ltr .tocnumber {\
  padding-left:0;\
  padding-right:0.5em \
 }\
 .mw-content-rtl .tocnumber {\
  padding-left:0.5em;\
  padding-right:0 \
 }\
 .mw-warning {\
  margin-left:50px;\
  margin-right:50px;\
  text-align:center \
 }\
 div.floatright,\
 table.floatright {\
  margin:0 0 0.5em 0.5em \
 }\
 div.floatleft,\
 table.floatleft {\
  margin:0 0.5em 0.5em 0 \
 }\
 div.thumb {\
  margin-bottom:0.5em;\
  width:auto;\
  background-color:transparent \
 }\
 div.thumbinner {\
  border:1px solid #c8ccd1;\
  padding:3px;\
  background-color:#f8f9fa;\
  font-size:94%;\
  text-align:center;\
  overflow:hidden \
 }\
 html .thumbimage {\
  background-color:#fff;\
  border:1px solid #c8ccd1 \
 }\
 html .thumbcaption {\
  border:0;\
  line-height:1.4em;\
  padding:3px;\
  font-size:94%;\
  text-align:left \
 }\
 div.magnify {\
  float:right;\
  margin-left:3px \
 }\
 div.magnify a {\
  display:block;\
  text-indent:15px;\
  white-space:nowrap;\
  overflow:hidden;\
  width:15px;\
  height:11px;\
  background-image:url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png?4f704);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%2211%22 viewBox=%220 0 11 15%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M1.509 1.865h10.99v7.919H1.509z%22/%3E %3Cpath id=%22smallbox%22 d=%22M-1.499 6.868h5.943v4.904h-5.943z%22/%3E %3C/g%3E %3C/svg%3E\");\
  -moz-user-select:none;\
  -webkit-user-select:none;\
  -ms-user-select:none;\
  user-select:none \
 }\
 img.thumbborder {\
  border:1px solid #eaecf0 \
 }\
 .mw-content-ltr .thumbcaption {\
  text-align:left \
 }\
 .mw-content-ltr .magnify {\
  float:right;\
  margin-left:3px;\
  margin-right:0 \
 }\
 .mw-content-ltr div.magnify a {\
  background-image:url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png?4f704);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%2211%22 viewBox=%220 0 11 15%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M1.509 1.865h10.99v7.919H1.509z%22/%3E %3Cpath id=%22smallbox%22 d=%22M-1.499 6.868h5.943v4.904h-5.943z%22/%3E %3C/g%3E %3C/svg%3E\") \
 }\
 .mw-content-rtl .thumbcaption {\
  text-align:right \
 }\
 .mw-content-rtl .magnify {\
  float:left;\
  margin-left:0;\
  margin-right:3px \
 }\
 .mw-content-rtl div.magnify a {\
  background-image:url(/w/resources/src/mediawiki.skinning/images/magnify-clip-rtl.png?a9fb3);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%2211%22 viewBox=%220 0 11 15%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M9.491 1.865h-10.99v7.919h10.99z%22/%3E %3Cpath id=%22smallbox%22 d=%22M12.499 6.868H6.556v4.904h5.943z%22/%3E %3C/g%3E %3C/svg%3E\") \
 }\
 div.tright {\
  margin:0.5em 0 1.3em 1.4em \
 }\
 div.tleft {\
  margin:0.5em 1.4em 1.3em 0 \
 }\
 body.mw-hide-empty-elt .mw-empty-elt {\
  display:none \
 }\
 .catlinks {\
  border:1px solid #a2a9b1;\
  background-color:#f8f9fa;\
  padding:5px;\
  margin-top:1em;\
  clear:both \
 }\
 textarea {\
  border:1px solid #c8ccd1 \
 }\
 .editOptions {\
  background-color:#eaecf0;\
  color:#222;\
  border:1px solid #c8ccd1;\
  border-top:0;\
  padding:1em 1em 1.5em 1em;\
  margin-bottom:2em \
 }\
 .usermessage {\
  background-color:#ffce7b;\
  border:1px solid #ffa500;\
  color:#000;\
  font-weight:bold;\
  margin:2em 0 1em;\
  padding:0.5em 1em;\
  vertical-align:middle \
 }\
 #siteNotice {\
  position:relative;\
  text-align:center;\
  margin:0 \
 }\
 #localNotice {\
  margin-bottom:0.9em \
 }\
 .firstHeading {\
  margin-bottom:0.1em;\
  line-height:1.2em;\
  padding-bottom:0 \
 }\
 #siteSub {\
  display:none \
 }\
 #contentSub,\
 #contentSub2 {\
  font-size:84%;\
  line-height:1.2em;\
  margin:0 0 1.4em 1em;\
  color:#54595d;\
  width:auto \
 }\
 span.subpages {\
  display:block \
 }\
}\
.mw-wiki-logo {\
 background-image:url(/static/images/project-logos/enwiki.png)\
}\
@media (-webkit-min-device-pixel-ratio:1.5),(min--moz-device-pixel-ratio:1.5),(min-resolution:1.5dppx),(min-resolution:144dpi) {\
 .mw-wiki-logo {\
  background-image:url(/static/images/project-logos/enwiki-1.5x.png);\
  background-size:135px auto \
 }\
}\
@media (-webkit-min-device-pixel-ratio:2),(min--moz-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi) {\
 .mw-wiki-logo {\
  background-image:url(/static/images/project-logos/enwiki-2x.png);\
  background-size:135px auto \
 }\
}\
@media screen {\
 html {\
  font-size:100% \
 }\
 html,\
 body {\
  height:100%;\
  margin:0;\
  padding:0;\
  font-family:sans-serif \
 }\
 body {\
  background-color:#f6f6f6 \
 }\
 #WikiaPage,\
 .parsoid-body {\
  padding:1em;\
  background-color:#ffffff;\
  color:#222222;\
  direction:ltr \
 }\
 #WikiaPage {\
  margin-left:10em;\
  border:1px solid #a7d7f9;\
  border-right-width:0;\
  margin-top:-1px \
 }\
 #WikiaPage h1,\
 #WikiaPage-content h1,\
 #WikiaPage-content h2 {\
  font-family:'Linux Libertine','Georgia','Times',serif;\
  line-height:1.3;\
  margin-bottom:0.25em;\
  padding:0 \
 }\
 #WikiaPage h1:lang(ja),\
 #WikiaPage-content h1:lang(ja),\
 #WikiaPage-content h2:lang(ja),\
 #WikiaPage h1:lang(he),\
 #WikiaPage-content h1:lang(he),\
 #WikiaPage-content h2:lang(he),\
 #WikiaPage h1:lang(ko),\
 #WikiaPage-content h1:lang(ko),\
 #WikiaPage-content h2:lang(ko) {\
  font-family:sans-serif \
 }\
 #WikiaPage h1:lang(my),\
 #WikiaPage-content h1:lang(my),\
 #WikiaPage-content h2:lang(my) {\
  line-height:normal \
 }\
 #WikiaPage h1,\
 #WikiaPage-content h1 {\
  font-size:1.8em \
 }\
 #WikiaPage .firstHeading {\
  overflow:visible \
 }\
 #WikiaPage .mw-indicators {\
  float:right;\
  line-height:1.6;\
  font-size:0.875em;\
  position:relative;\
  z-index:1 \
 }\
 #WikiaPage .mw-indicator {\
  display:inline-block;\
  zoom:1;\
  *display:inline \
 }\
 #WikiaPage-content {\
  position:relative;\
  line-height:1.6;\
  font-size:0.875em;\
  z-index:0 \
 }\
 #WikiaPage-content p {\
  line-height:inherit;\
  margin:0.5em 0 \
 }\
 #WikiaPage-content h1 {\
  margin-top:1em \
 }\
 #WikiaPage-content h2 {\
  font-size:1.5em;\
  margin-top:1em \
 }\
 #WikiaPage-content h3,\
 #WikiaPage-content h4,\
 #WikiaPage-content h5,\
 #WikiaPage-content h6 {\
  line-height:1.6;\
  margin-top:0.3em;\
  margin-bottom:0;\
  padding-bottom:0 \
 }\
 #WikiaPage-content h3 {\
  font-size:1.2em \
 }\
 #WikiaPage-content h3,\
 #WikiaPage-content h4 {\
  font-weight:bold \
 }\
 #WikiaPage-content h4,\
 #WikiaPage-content h5,\
 #WikiaPage-content h6 {\
  font-size:100% \
 }\
 #WikiaPage-content .toc h2 {\
  font-size:100%;\
  font-family:sans-serif \
 }\
 .editsection,\
 .editsection-like {\
  font-family:sans-serif \
 }\
 div.emptyPortlet {\
  display:none \
 }\
 ul {\
  list-style-type:disc;\
  list-style-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%225%22 height=%2213%22%3E %3Ccircle cx=%222.5%22 cy=%229.5%22 r=%222.5%22 fill=%22%2300528c%22/%3E %3C/svg%3E\");\
  list-style-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAANCAIAAADuXjPfAAAABnRSTlMA/wD/AP83WBt9AAAAHklEQVR4AWP4jwrowWcI6oEgEBtIISNCfFT9mOYDACO/lbNIGC/yAAAAAElFTkSuQmCC) 9;\
  list-style-image:url(/w/skins/Vector/images/bullet-icon.png?e31f8) 9!ie \
 }\
 pre,\
 .mw-code {\
  line-height:1.3em \
 }\
 #siteNotice {\
  font-size:0.8em \
 }\
 #globalNavigation {\
  top:0.33em;\
  right:0.75em;\
  z-index:100 \
 }\
 #globalNavigation h3 {\
  display:none \
 }\
 #globalNavigation ul {\
  list-style:none none;\
  margin:0;\
 }\
 #globalNavigation li {\
  float:left;\
  margin-left:0.75em;\
  padding-top:0.5em;\
  font-size:0.75em;\
  line-height:1.16666667em;\
  white-space:nowrap \
 }\
 #pt-anonuserpage,\
 #pt-userpage a {\
  background-image:url(/w/skins/Vector/images/user-avatar.png?59494);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Cg fill=%22%2354595d%22%3E %3Cpath d=%22M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z%22/%3E %3Ccircle cx=%2210%22 cy=%225.5%22 r=%224.5%22/%3E %3C/g%3E %3C/svg%3E\");\
  background-position:left 0.33333333em;\
  background-repeat:no-repeat;\
  background-size:1.16666667em 1.16666667em;\
  padding-top:0.5em !important;\
  padding-left:16px !important \
 }\
 #pt-userpage {\
  padding-top:0 !important \
 }\
 #pt-userpage a {\
  display:inline-block \
 }\
 #pt-anonuserpage {\
  color:#54595d \
 }\
 .wds-global-navigation__search-container {\
  /*! float:left; */\
  margin-right:0.5em;\
  margin-left:0.5em \
 }\
 .wds-global-navigation__search-container h3 {\
  display:block;\
  position:absolute !important;\
  clip:rect(1px,1px,1px,1px);\
  width:1px;\
  height:1px;\
  margin:-1px;\
  border:0;\
  padding:0;\
  overflow:hidden \
 }\
 .wds-global-navigation__search-container,\
 .wds-global-navigation__search-container input {\
  margin:0.4em 0 0 \
 }\
 .wds-global-navigation__search-input-wrapper {\
  background-color:#fff;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAQCAIAAABY/YLgAAAAJUlEQVQIHQXBsQEAAAjDoND/73UWdnerhmHVsDQZJrNWVg3Dqge6bgMe6bejNAAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/search-fade.png?50f7b)!ie;\
  background-position:top left;\
  background-repeat:repeat-x;\
  color:#000;\
  display:block;\
  width:12.6em;\
  width:20vw;\
  min-width:5em;\
  max-width:20em;\
  padding-right:1.4em;\
  height:1.4em;\
  margin-top:0.65em;\
  position:relative;\
  min-height:1px;\
  border:1px solid #a2a9b1;\
  border-radius:2px;\
  -webkit-transition:border-color 250ms;\
  -moz-transition:border-color 250ms;\
  transition:border-color 250ms \
 }\
 .wds-global-navigation__search-input-wrapper:hover {\
  border-color:#72777d \
 }\
 .wds-global-navigation__search-input-wrapper input {\
  background-color:transparent;\
  color:#000;\
  margin:0;\
  padding:0;\
  border:0 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input {\
  width:100%;\
  padding:0.2em 0 0.2em 0.2em;\
  font-size:0.8125em;\
  direction:ltr;\
  -webkit-appearance:textfield \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input:focus {\
  outline:0 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::-webkit-input-placeholder {\
  color:#72777d;\
  opacity:1 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input:-ms-input-placeholder {\
  color:#72777d;\
  opacity:1 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::-moz-placeholder {\
  color:#72777d;\
  opacity:1 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input:-moz-placeholder {\
  color:#72777d;\
  opacity:1 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::placeholder {\
  color:#72777d;\
  opacity:1 \
 }\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::-webkit-search-decoration,\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::-webkit-search-cancel-button,\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::-webkit-search-results-button,\
 .wds-global-navigation__search-input-wrapper .wds-global-navigation__search-input::-webkit-search-results-decoration {\
  -webkit-appearance:textfield \
 }\
 .wds-global-navigation__search-input-wrapper #searchButton,\
 .wds-global-navigation__search-input-wrapper #mw-searchButton {\
  position:absolute;\
  top:0;\
  right:0;\
  width:1.65em;\
  height:100%;\
  cursor:pointer;\
  text-indent:-99999px;\
  direction:ltr;\
  white-space:nowrap;\
  overflow:hidden \
 }\
 .wds-global-navigation__search-input-wrapper #searchButton {\
  background-image:url(/w/skins/Vector/images/search-ltr.png?39f97);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2213%22%3E %3Cg fill=%22none%22 stroke=%22%2354595d%22 stroke-width=%222%22%3E %3Cpath d=%22M11.29 11.71l-4-4%22/%3E %3Ccircle cx=%225%22 cy=%225%22 r=%224%22/%3E %3C/g%3E %3C/svg%3E\");\
  background-position:center center;\
  background-repeat:no-repeat \
 }\
 .wds-global-navigation__search-input-wrapper #mw-searchButton {\
  z-index:1 \
 }\
 .vectorTabs {\
  float:left;\
  height:2.5em;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-position:bottom left;\
  background-repeat:no-repeat;\
  padding-left:1px \
 }\
 .vectorTabs h3 {\
  display:none \
 }\
 .vectorTabs ul {\
  float:left;\
  height:100%;\
  list-style:none none;\
  margin:0;\
  padding:0;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-position:right bottom;\
  background-repeat:no-repeat \
 }\
 .vectorTabs li {\
  float:left;\
  line-height:1.125em;\
  display:block;\
  height:100%;\
  margin:0;\
  padding:0;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAIAAADITs03AAAAO0lEQVR4AeSKhREAMQzDdN5/5uixuEKDpqgBjl2f78wd2DVj1+26/h///PfteVMN7zoGebcg1/Y/ZQQAlAUtQCujIJMAAAAASUVORK5CYII=);\
  background-image:url(/w/skins/Vector/images/tab-normal-fade.png?1cc52)!ie;\
  background-position:bottom left;\
  background-repeat:repeat-x;\
  white-space:nowrap \
 }\
 .vectorTabs li.new a,\
 .vectorTabs li.new a:visited {\
  color:#a55858 \
 }\
 .vectorTabs li.selected {\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkAQAAAABvV2fNAAAADElEQVR4AWNoGB4QAInlMgFKeRKBAAAAAElFTkSuQmCC);\
  background-image:url(/w/skins/Vector/images/tab-current-fade.png?22887)!ie \
 }\
 .vectorTabs li.selected a,\
 .vectorTabs li.selected a:visited {\
  color:#222;\
  text-decoration:none \
 }\
 .vectorTabs li.icon a {\
  background-position:bottom right;\
  background-repeat:no-repeat \
 }\
 .vectorTabs li a {\
  display:block;\
  height:1.9em;\
  padding-left:0.615em;\
  padding-right:0.615em;\
  color:#0645ad;\
  cursor:pointer;\
  font-size:0.8125em \
 }\
 .vectorTabs span {\
  display:inline-block;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-position:bottom right;\
  background-repeat:no-repeat;\
  height:100% \
 }\
 .vectorTabs span a {\
  float:left;\
  display:block;\
  position:relative;\
  padding-top:1.25em \
 }\
 .vectorMenu {\
  direction:ltr;\
  float:left;\
  cursor:pointer;\
  position:relative;\
  line-height:1.125em \
 }\
 .vectorMenu h3 span {\
  position:relative;\
  display:block;\
  font-size:0.8125em;\
  padding-left:0.615em;\
  padding-top:1.25em;\
  padding-right:16px;\
  font-weight:normal;\
  color:#444 \
 }\
 .vectorMenu h3 span:after {\
  content:'';\
  position:absolute;\
  top:1.25em;\
  right:0;\
  bottom:0;\
  left:0;\
  background-image:url(/w/skins/Vector/images/arrow-down.png?42edd);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E %3Cpath d=%22M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5%22 fill=%22%23222%22/%3E %3C/svg%3E\");\
  background-position:100% 50%;\
  background-repeat:no-repeat;\
  opacity:0.85 \
 }\
 .vectorMenu h3:hover span,\
 .vectorMenu h3:focus span {\
  color:#222222 \
 }\
 .vectorMenu h3:hover span:after,\
 .vectorMenu h3:focus span:after {\
  opacity:1 \
 }\
 .vectorMenu .menu {\
  list-style:none none;\
  background-color:#ffffff;\
  clear:both;\
  min-width:100%;\
  position:absolute;\
  top:2.5em;\
  left:-1px;\
  margin:0;\
  border:1px solid #a2a9b1;\
  border-top-width:0;\
  padding:0;\
  box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);\
  text-align:left;\
  opacity:0;\
  visibility:hidden;\
  -webkit-transition:opacity 100ms;\
  -moz-transition:opacity 100ms;\
  transition:opacity 100ms;\
  z-index:2 \
 }\
 .vectorMenu:hover .menu {\
  opacity:1;\
  visibility:visible \
 }\
 .vectorMenu .vectorMenuCheckbox:checked ~ .menu {\
  opacity:1;\
  visibility:visible \
 }\
 .vectorMenu ul {\
  list-style:none none;\
  padding:0;\
  margin:0;\
  text-align:left \
 }\
 .vectorMenu li {\
  padding:0;\
  margin:0;\
  text-align:left;\
  line-height:1em \
 }\
 .vectorMenu li a {\
  display:block;\
  padding:0.625em;\
  white-space:nowrap;\
  color:#0645ad;\
  cursor:pointer;\
  font-size:0.8125em \
 }\
 .vectorMenu li.selected a,\
 .vectorMenu li.selected a:visited {\
  color:#222;\
  text-decoration:none \
 }\
 #mw-head .vectorMenu h3 {\
  float:left;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);\
  background-image:url(/w/skins/Vector/images/tab-break.png?09d4b)!ie;\
  background-repeat:no-repeat;\
  background-position:bottom right;\
  font-size:1em;\
  height:2.5em;\
  padding:0 0.5em 0 0;\
  margin:0 -1px 0 0 \
 }\
 .vectorMenuCheckbox {\
  cursor:pointer;\
  position:absolute;\
  top:0;\
  left:0;\
  z-index:1;\
  opacity:0;\
  width:100%;\
  height:100%;\
  margin:0;\
  padding:0;\
  display:none \
 }\
 :not(:checked) > .vectorMenuCheckbox {\
  display:block \
 }\
 .vectorMenuCheckbox:checked + h3 span:after {\
  transform:scaleY(-1) \
 }\
 .vectorMenuCheckbox:focus + h3 {\
  outline:dotted 1px;\
  outline:auto -webkit-focus-ring-color \
 }\
 @-webkit-keyframes rotate {\
  from {\
   -webkit-transform:rotate(0deg);\
   -moz-transform:rotate(0deg);\
   transform:rotate(0deg)  \
  }\
  to {\
   -webkit-transform:rotate(360deg);\
   -moz-transform:rotate(360deg);\
   transform:rotate(360deg)  \
  }\
 }\
 @-moz-keyframes rotate {\
  from {\
   -webkit-transform:rotate(0deg);\
   -moz-transform:rotate(0deg);\
   transform:rotate(0deg)  \
  }\
  to {\
   -webkit-transform:rotate(360deg);\
   -moz-transform:rotate(360deg);\
   transform:rotate(360deg)  \
  }\
 }\
 @keyframes rotate {\
  from {\
   -webkit-transform:rotate(0deg);\
   -moz-transform:rotate(0deg);\
   transform:rotate(0deg)  \
  }\
  to {\
   -webkit-transform:rotate(360deg);\
   -moz-transform:rotate(360deg);\
   transform:rotate(360deg)  \
  }\
 }\
 .vectorTabs #ca-unwatch.icon a,\
 .vectorTabs #ca-watch.icon a {\
  margin:0;\
  padding:0;\
  display:block;\
  width:28px;\
  padding-top:3.07692308em;\
  height:0;\
  overflow:hidden;\
  background-position:5px 60%;\
  background-repeat:no-repeat \
 }\
 .vectorTabs #ca-unwatch.icon a {\
  background-image:url(/w/skins/Vector/images/unwatch-icon.png?fccbe);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E %3Cdefs%3E %3ClinearGradient id=%22a%22%3E %3Cstop offset=%220%22 stop-color=%22%23c2edff%22/%3E %3Cstop offset=%22.5%22 stop-color=%22%2368bdff%22/%3E %3Cstop offset=%221%22 stop-color=%22%23fff%22/%3E %3C/linearGradient%3E %3ClinearGradient id=%22b%22 x1=%2213.47%22 x2=%224.596%22 y1=%2214.363%22 y2=%223.397%22 xlink:href=%22%23a%22 gradientUnits=%22userSpaceOnUse%22/%3E %3C/defs%3E %3Cpath fill=%22url%28%23b%29%22 stroke=%22%237cb5d1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\") \
 }\
 .vectorTabs #ca-watch.icon a {\
  background-image:url(/w/skins/Vector/images/watch-icon.png?e1b42);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%237cb5d1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\") \
 }\
 .vectorTabs #ca-unwatch.icon a:hover,\
 .vectorTabs #ca-unwatch.icon a:focus {\
  background-image:url(/w/skins/Vector/images/unwatch-icon-hl.png?c4723);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E %3Cdefs%3E %3ClinearGradient id=%22a%22%3E %3Cstop offset=%220%22 stop-color=%22%23c2edff%22/%3E %3Cstop offset=%22.5%22 stop-color=%22%2368bdff%22/%3E %3Cstop offset=%221%22 stop-color=%22%23fff%22/%3E %3C/linearGradient%3E %3ClinearGradient id=%22b%22 x1=%2213.47%22 x2=%224.596%22 y1=%2214.363%22 y2=%223.397%22 xlink:href=%22%23a%22 gradientUnits=%22userSpaceOnUse%22/%3E %3C/defs%3E %3Cpath fill=%22url%28%23b%29%22 stroke=%22%23c8b250%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\") \
 }\
 .vectorTabs #ca-watch.icon a:hover,\
 .vectorTabs #ca-watch.icon a:focus {\
  background-image:url(/w/skins/Vector/images/watch-icon-hl.png?f4c7e);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23c8b250%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\") \
 }\
 .vectorTabs #ca-unwatch.icon a.loading,\
 .vectorTabs #ca-watch.icon a.loading {\
  background-image:url(/w/skins/Vector/images/watch-icon-loading.png?5cb92);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23c8ccd1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E\");\
  -webkit-animation:rotate 700ms infinite linear;\
  -moz-animation:rotate 700ms infinite linear;\
  animation:rotate 700ms infinite linear;\
  outline:0;\
  cursor:default;\
  pointer-events:none;\
  background-position:50% 60%;\
  -webkit-transform-origin:50% 57%;\
  transform-origin:50% 57% \
 }\
 .vectorTabs #ca-unwatch.icon a span,\
 .vectorTabs #ca-watch.icon a span {\
  display:none \
 }\
 #mw-navigation h2 {\
  position:absolute;\
  top:-9999px \
 }\
 .mw-jump-link:not(:focus) {\
  display:block;\
  position:absolute !important;\
  clip:rect(1px,1px,1px,1px);\
  width:1px;\
  height:1px;\
  margin:-1px;\
  border:0;\
  padding:0;\
  overflow:hidden \
 }\
 #mw-page-base {\
  height:5em;\
  background-position:bottom left;\
  background-repeat:repeat-x;\
  background-image:url(/w/skins/Vector/images/page-fade.png?1d168);\
  background-color:#f6f6f6;\
  background-image:-webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);\
  background-image:-moz-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);\
  background-image:linear-gradient(#ffffff 50%,#f6f6f6 100%);\
  background-color:#ffffff \
 }\
 #mw-head-base {\
  margin-top:-5em;\
  margin-left:10em;\
  height:5em \
 }\
 #mw-head {\
  position:absolute;\
  top:0;\
  right:0;\
  width:100% \
 }\
 #left-navigation {\
  float:left;\
  margin-left:10em;\
  margin-top:2.5em;\
  margin-bottom:-2.5em \
 }\
 #right-navigation {\
  float:right;\
  margin-top:2.5em \
 }\
 #p-logo {\
  width:10em;\
  height:160px \
 }\
 #p-logo a {\
  display:block;\
  width:10em;\
  height:160px;\
  background-repeat:no-repeat;\
  background-position:center center;\
  text-decoration:none \
 }\
 .wds-community-header {\
  font-size:inherit;\
  position:absolute;\
  top:0;\
  width:10em;\
  left:0 \
 }\
 .wds-community-header .wds-dropdown {\
  margin:0 0.6em 0 0.7em;\
  padding:0.25em 0;\
  direction:ltr;\
  background-position:top left;\
  background-repeat:no-repeat \
 }\
 .wds-community-header .wds-dropdown .wds-dropdown__toggle a {\
  font-size:0.75em;\
  color:#444444;\
  font-weight:normal;\
  margin:0.5em 0 0 0.66666667em;\
  padding:0.25em 0;\
  cursor:default;\
  border:0 \
 }\
 .createpage {\
  margin:0 0.6em 0 0.7em;\
  padding:0.25em 0;\
  direction:ltr;\
  background-position:top left;\
  background-repeat:no-repeat;\
  font-size:0.75em;\
  color:#444444;\
  font-weight:normal;\
  margin:0.5em 0 0 0.66666667em;\
  padding:0.25em 0;\
  cursor:default;\
  border:0 \
 }\
 .wds-community-header .wds-dropdown .wds-dropdown__content {\
  margin-left:0.5em;\
  padding-top:0;\
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAABCAAAAAAphRnkAAAAJ0lEQVQIW7XFsQEAIAyAMPD/b7uLWz8wS5youFW1UREfiIpH1Q2VBz7fGPS1dOGeAAAAAElFTkSuQmCC);\
  background-image:url(/w/skins/Vector/images/portal-break.png?3ea1b)!ie;\
  background-repeat:no-repeat \
 }\
 .wds-community-header .wds-dropdown .wds-dropdown__content ul {\
  list-style:none none;\
  margin:0;\
  padding:0.3em 0 0 0 \
 }\
 .wds-community-header .wds-dropdown .wds-dropdown__content > ul > li {\
  line-height:1.125em;\
  margin:0;\
  padding:0.25em 0;\
  font-size:0.75em;\
  word-wrap:break-word \
 }\
 .wds-community-header .wds-dropdown .wds-dropdown__content li a {\
  color:#0645ad \
 }\
 .wds-community-header .wds-dropdown .wds-dropdown__content li a:visited {\
  color:#0b0080 \
 }\
 .wds-community-header #p-logo + .wds-dropdown {\
  background-image:none;\
  margin-top:1em \
 }\
 .wds-community-header #p-logo + .wds-dropdown .wds-dropdown__toggle {\
  display:none \
 }\
 .wds-community-header #p-logo + .wds-dropdown .wds-dropdown__content {\
  background-image:none;\
  margin-left:0.5em \
 }\
 .wds-global-footer {\
  margin-left:10em;\
  margin-top:0;\
  padding:0.75em;\
  direction:ltr \
 }\
 .wds-global-footer ul {\
  list-style:none none;\
  margin:0;\
  padding:0 \
 }\
 .wds-global-footer ul li {\
  color:#222;\
  margin:0;\
  padding:0;\
  padding-top:0.5em;\
  padding-bottom:0.5em;\
  font-size:0.7em \
 }\
 .wds-global-footer #footer-icons {\
  float:right \
 }\
 .wds-global-footer #footer-icons li {\
  float:left;\
  margin-left:0.5em;\
  line-height:2em;\
  text-align:right \
 }\
 .wds-global-footer #footer-info li {\
  line-height:1.4em \
 }\
 .wds-global-footer #footer-places li {\
  float:left;\
  margin-right:1em;\
  line-height:2em \
 }\
 .mw-parser-output .external {\
  background-position:center right;\
  background-repeat:no-repeat;\
  background-image:url(/w/skins/Vector/images/external-link-ltr-icon.png?325de);\
  background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E\");\
  padding-right:13px \
 }\
}\
@media screen and (min-width:982px) {\
 #WikiaPage,\
 #mw-head-base,\
 #left-navigation,\
 .wds-global-footer {\
  margin-left:11em \
 }\
 #WikiaPage {\
  padding:1.25em 1.5em 1.5em 1.5em \
 }\
 .wds-global-footer {\
  padding:1.25em \
 }\
 .wds-community-header {\
  padding-left:0.5em \
 }\
 .wds-global-navigation__search-container {\
  margin-right:1em; \
 }\
 #globalNavigation {\
  right:1em \
 }\
}\
.firstHeading:before {\
 content:url(//en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg);\
 display:block;\
 height:18px;\
 left:-9999px;\
 line-height:0;\
 margin-bottom:20px;\
 position:absolute;\
 width:116px\
}\
@media print {\
 .toc,\
 body {\
  padding:10px;\
  font-family:'Linux Libertine','Georgia','Times',serif \
 }\
 .printfooter,\
 .wds-global-footer,\
 .thumb,\
 table,\
 ol,\
 dl,\
 ul,\
 h3,\
 h4,\
 h5,\
 h6 {\
  font-family:sans-serif \
 }\
 img {\
  font-family:'Linux Libertine','Georgia','Times',serif \
 }\
 a {\
  border-bottom:1px solid #aaa \
 }\
 .firstHeading {\
  font-size:25pt;\
  line-height:28pt;\
  margin-bottom:20px;\
  padding-bottom:5px \
 }\
 .firstHeading:before {\
  left:auto;\
  position:relative \
 }\
 .firstHeading,\
 h2 {\
  overflow:hidden;\
  border-bottom:2px solid #000000 \
 }\
 h3,\
 h4,\
 h5,\
 h6 {\
  margin:30px 0 0 \
 }\
 h2,\
 h3,\
 h4,\
 h5,\
 h6 {\
  padding:0;\
  position:relative \
 }\
 h2 {\
  font-size:18pt;\
  line-height:24pt;\
  margin-bottom:0.25em \
 }\
 h3 {\
  font-size:13pt;\
  line-height:20pt \
 }\
 h4,\
 h5,\
 h6 {\
  font-size:10pt;\
  line-height:15pt \
 }\
 p {\
  font-size:10pt;\
  line-height:16pt;\
  margin-top:5px;\
  text-align:justify \
 }\
 p:before {\
  content:'';\
  display:block;\
  overflow:hidden;\
  width:120pt \
 }\
 blockquote {\
  border-left:2px solid #000000;\
  padding-left:20px \
 }\
 ol,\
 ul {\
  margin:10px 0 0 1.6em;\
  padding:0 \
 }\
 ol li,\
 ul li {\
  padding:2px 0;\
  font-size:10pt \
 }\
 table ol li,\
 table ul li {\
  font-size:inherit \
 }\
 .toc {\
  page-break-before:avoid;\
  page-break-after:avoid;\
  background:none;\
  border:0;\
  display:table \
 }\
 .toc a {\
  border:0;\
  font-weight:normal \
 }\
 .toc > ul > li {\
  margin-bottom:4px;\
  font-weight:bold \
 }\
 .toc ul {\
  margin:0;\
  list-style:none \
 }\
 .toc ul ul {\
  padding-left:30px \
 }\
 .toc li.toclevel-1 > a {\
  font-weight:bold;\
  font-size:10pt \
 }\
 .mw-jump-link,\
 .toc .tocnumber {\
  display:none \
 }\
 .printfooter {\
  margin-top:10px;\
  border-top:3px solid #000000;\
  padding-top:10px;\
  font-size:10pt;\
  clear:both \
 }\
 .wds-global-footer {\
  margin-top:12px;\
  border-top:1px solid #eeeeee;\
  padding-top:5px \
 }\
 #footer-info {\
  margin:0;\
  padding:0 \
 }\
 #footer-info li {\
  color:#999;\
  list-style:none;\
  display:block;\
  padding-bottom:10px;\
  font-size:10pt \
 }\
 #footer-info li a {\
  color:#999 !important \
 }\
 #footer-info-lastmod {\
  color:#000000;\
  font-size:12pt;\
  font-weight:bold \
 }\
}\
.mw-editfont-monospace {\
 font-family:monospace,monospace\
}\
.mw-editfont-sans-serif {\
 font-family:sans-serif\
}\
.mw-editfont-serif {\
 font-family:serif\
}\
.mw-editfont-monospace,\
.mw-editfont-sans-serif,\
.mw-editfont-serif {\
 font-size:13px;\
}\
.mw-editfont-monospace.oo-ui-textInputWidget,\
.mw-editfont-sans-serif.oo-ui-textInputWidget,\
.mw-editfont-serif.oo-ui-textInputWidget {\
 font-size:inherit\
}\
.mw-editfont-monospace > .oo-ui-inputWidget-input,\
.mw-editfont-sans-serif > .oo-ui-inputWidget-input,\
.mw-editfont-serif > .oo-ui-inputWidget-input {\
 font-size:13px\
}\
.mw-ui-button {\
 background-color:#f8f9fa;\
 color:#222222;\
 display:inline-block;\
 -webkit-box-sizing:border-box;\
 -moz-box-sizing:border-box;\
 box-sizing:border-box;\
 min-width:4em;\
 max-width:28.75em;\
 margin:0;\
 padding:0.546875em 1em;\
 border:1px solid #a2a9b1;\
 border-radius:2px;\
 font-family:inherit;\
 font-size:1em;\
 font-weight:bold;\
 line-height:1.286;\
 text-align:center;\
 -webkit-appearance:none;\
 *display:inline;\
 zoom:1;\
 vertical-align:middle;\
 cursor:pointer\
}\
.mw-ui-button:visited {\
 color:#222222\
}\
.mw-ui-button:hover {\
 background-color:#ffffff;\
 color:#444444;\
 border-color:#a2a9b1\
}\
.mw-ui-button:focus {\
 background-color:#ffffff;\
 color:#222222;\
 border-color:#3366cc;\
 box-shadow:inset 0 0 0 1px #3366cc,inset 0 0 0 2px #ffffff;\
 outline-width:0\
}\
.mw-ui-button:focus::-moz-focus-inner {\
 border-color:transparent;\
 padding:0\
}\
.mw-ui-button:active,\
.mw-ui-button.is-on {\
 background-color:#c8ccd1;\
 color:#000000;\
 border-color:#72777d;\
 box-shadow:none\
}\
.mw-ui-button:disabled {\
 background-color:#c8ccd1;\
 color:#ffffff;\
 border-color:#c8ccd1;\
 cursor:default\
}\
.mw-ui-button:disabled:hover,\
.mw-ui-button:disabled:active {\
 background-color:#c8ccd1;\
 color:#ffffff;\
 box-shadow:none;\
 border-color:#c8ccd1\
}\
.mw-ui-button:not(:disabled) {\
 -webkit-transition:background-color 100ms,color 100ms,border-color 100ms,box-shadow 100ms;\
 -moz-transition:background-color 100ms,color 100ms,border-color 100ms,box-shadow 100ms;\
 transition:background-color 100ms,color 100ms,border-color 100ms,box-shadow 100ms\
}\
.mw-ui-button.mw-ui-quiet,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive {\
 background-color:transparent;\
 color:#222222;\
 border-color:transparent\
}\
.mw-ui-button.mw-ui-quiet:hover,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive:hover,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive:hover {\
 background-color:transparent;\
 color:#444444;\
 border-color:transparent;\
 box-shadow:none\
}\
.mw-ui-button.mw-ui-quiet:active,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive:active,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive:active {\
 background-color:transparent;\
 color:#000000;\
 border-color:transparent\
}\
.mw-ui-button.mw-ui-quiet:focus,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive:focus,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive:focus {\
 background-color:transparent;\
 color:#222222;\
 border-color:transparent;\
 box-shadow:none\
}\
.mw-ui-button.mw-ui-quiet:disabled,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive:disabled,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive:disabled,\
.mw-ui-button.mw-ui-quiet:disabled:hover,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive:disabled:hover,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive:disabled:hover,\
.mw-ui-button.mw-ui-quiet:disabled:active,\
.mw-ui-button.mw-ui-quiet.mw-ui-progressive:disabled:active,\
.mw-ui-button.mw-ui-quiet.mw-ui-destructive:disabled:active {\
 background-color:transparent;\
 color:#72777d;\
 border-color:transparent\
}\
.mw-ui-button.mw-ui-progressive {\
 background-color:#3366cc;\
 color:#fff;\
 border:1px solid #3366cc\
}\
.mw-ui-button.mw-ui-progressive:hover {\
 background-color:#447ff5;\
 border-color:#447ff5\
}\
.mw-ui-button.mw-ui-progressive:focus {\
 box-shadow:inset 0 0 0 1px #3366cc,inset 0 0 0 2px #ffffff\
}\
.mw-ui-button.mw-ui-progressive:active,\
.mw-ui-button.mw-ui-progressive.is-on {\
 background-color:#2a4b8d;\
 border-color:#2a4b8d;\
 box-shadow:none\
}\
.mw-ui-button.mw-ui-progressive:disabled {\
 background-color:#c8ccd1;\
 color:#fff;\
 border-color:#c8ccd1\
}\
.mw-ui-button.mw-ui-progressive:disabled:hover,\
.mw-ui-button.mw-ui-progressive:disabled:active {\
 background-color:#c8ccd1;\
 color:#fff;\
 border-color:#c8ccd1;\
 box-shadow:none\
}\
.mw-ui-button.mw-ui-progressive.mw-ui-quiet {\
 color:#3366cc\
}\
.mw-ui-button.mw-ui-progressive.mw-ui-quiet:hover {\
 background-color:transparent;\
 color:#447ff5\
}\
.mw-ui-button.mw-ui-progressive.mw-ui-quiet:active {\
 color:#2a4b8d\
}\
.mw-ui-button.mw-ui-progressive.mw-ui-quiet:focus {\
 background-color:transparent;\
 color:#3366cc\
}\
.mw-ui-button.mw-ui-destructive {\
 background-color:#dd3333;\
 color:#fff;\
 border:1px solid #dd3333\
}\
.mw-ui-button.mw-ui-destructive:hover {\
 background-color:#ff4242;\
 border-color:#ff4242\
}\
.mw-ui-button.mw-ui-destructive:focus {\
 box-shadow:inset 0 0 0 1px #dd3333,inset 0 0 0 2px #ffffff\
}\
.mw-ui-button.mw-ui-destructive:active,\
.mw-ui-button.mw-ui-destructive.is-on {\
 background-color:#b32424;\
 border-color:#b32424;\
 box-shadow:none\
}\
.mw-ui-button.mw-ui-destructive:disabled {\
 background-color:#c8ccd1;\
 color:#fff;\
 border-color:#c8ccd1\
}\
.mw-ui-button.mw-ui-destructive:disabled:hover,\
.mw-ui-button.mw-ui-destructive:disabled:active {\
 background-color:#c8ccd1;\
 color:#fff;\
 border-color:#c8ccd1;\
 box-shadow:none\
}\
.mw-ui-button.mw-ui-destructive.mw-ui-quiet {\
 color:#dd3333\
}\
.mw-ui-button.mw-ui-destructive.mw-ui-quiet:hover {\
 background-color:transparent;\
 color:#ff4242\
}\
.mw-ui-button.mw-ui-destructive.mw-ui-quiet:active {\
 color:#b32424\
}\
.mw-ui-button.mw-ui-destructive.mw-ui-quiet:focus {\
 background-color:transparent;\
 color:#dd3333\
}\
.mw-ui-button.mw-ui-big {\
 font-size:1.3em\
}\
.mw-ui-button.mw-ui-block {\
 display:block;\
 width:100%;\
 margin-left:auto;\
 margin-right:auto\
}\
input.mw-ui-button::-moz-focus-inner,\
button.mw-ui-button::-moz-focus-inner {\
 margin-top:-1px;\
 margin-bottom:-1px\
}\
a.mw-ui-button {\
 text-decoration:none\
}\
a.mw-ui-button:hover,\
a.mw-ui-button:focus {\
 text-decoration:none\
}\
.mw-ui-button-group > * {\
 min-width:48px;\
 border-radius:0;\
 float:left\
}\
.mw-ui-button-group > *:first-child {\
 border-top-left-radius:2px;\
 border-bottom-left-radius:2px\
}\
.mw-ui-button-group > *:not(:first-child) {\
 border-left:0\
}\
.mw-ui-button-group > *:last-child {\
 border-top-right-radius:2px;\
 border-bottom-right-radius:2px\
}\
.mw-ui-button-group .is-on .button {\
 cursor:default\
}\
.mw-ui-icon {\
 position:relative;\
 line-height:1.5em;\
 min-height:1.5em;\
 min-width:1.5em\
}\
span.mw-ui-icon {\
 display:inline-block\
}\
.mw-ui-icon.mw-ui-icon-element {\
 text-indent:-999px;\
 overflow:hidden;\
 width:3.5em;\
 min-width:3.5em;\
 max-width:3.5em\
}\
.mw-ui-icon.mw-ui-icon-element:before {\
 left:0;\
 right:0;\
 position:absolute;\
 margin:0 1em\
}\
.mw-ui-icon.mw-ui-icon-element.mw-ui-icon-large {\
 width:4.625em;\
 min-width:4.625em;\
 max-width:4.625em;\
 line-height:4.625em;\
 min-height:4.625em\
}\
.mw-ui-icon.mw-ui-icon-element.mw-ui-icon-large:before {\
 min-height:4.625em\
}\
.mw-ui-icon.mw-ui-icon-before:before,\
.mw-ui-icon.mw-ui-icon-element:before {\
 background-position:50% 50%;\
 background-repeat:no-repeat;\
 background-size:100% auto;\
 float:left;\
 display:block;\
 min-height:1.5em;\
 content:''\
}\
.mw-ui-icon.mw-ui-icon-before:before {\
 position:relative;\
 width:1.5em;\
 margin-right:1em\
}\
.mw-ui-icon.mw-ui-icon-small:before {\
 background-size:66.67% auto\
}\
.ve-init-mw-progressBarWidget {\
 height:1em;\
 overflow:hidden;\
 margin:0 25%\
}\
.ve-init-mw-progressBarWidget-bar {\
 height:1em;\
 width:0\
}\
.ve-init-mw-progressBarWidget {\
 height:0.75em;\
 border:1px solid #36c;\
 background:#fff;\
 border-radius:2px;\
 box-shadow:0 0.1em 0 0 rgba(0,0,0,0.15)\
}\
.ve-init-mw-progressBarWidget-bar {\
 height:0.75em;\
 background:#36c\
}\
.wp-teahouse-question-form {\
 position:absolute;\
 margin-left:auto;\
 margin-right:auto;\
 background-color:#f4f3f0;\
 border:1px solid #a7d7f9;\
 padding:1em\
}\
#wp-th-question-ask {\
 float:right\
}\
.wp-teahouse-ask a.external {\
 background-image:none !important\
}\
.wp-teahouse-respond-form {\
 position:absolute;\
 margin-left:auto;\
 margin-right:auto;\
 background-color:#f4f3f0;\
 border:1px solid #a7d7f9;\
 padding:1em\
}\
.wp-th-respond {\
 float:right\
}\
.wp-teahouse-respond a.external {\
 background-image:none !important\
}\
.rt-tooltip {\
 position:absolute;\
 z-index:100;\
 max-width:350px;\
 background:#fff;\
 color:#222;\
 font-size:13px;\
 line-height:1.5em;\
 border:1px solid #c8ccd1;\
 border-radius:3px;\
 -webkit-box-shadow:0 15px 45px -10px rgba(0,0,0,0.3);\
 box-shadow:0 15px 45px -10px rgba(0,0,0,0.3);\
 overflow-wrap:break-word\
}\
.rt-tooltip.rt-tooltip-insideWindow {\
 z-index:110\
}\
.rt-tooltipContent {\
 padding:8px 11px\
}\
.rt-tooltip-above .rt-tooltipContent {\
 margin-bottom:-8px;\
 padding-bottom:16px\
}\
.rt-tooltip-below .rt-tooltipContent {\
 margin-top:-10px;\
 padding-top:18px\
}\
.rt-tooltipTail,\
.rt-tooltipTail:after {\
 position:absolute;\
 width:12px;\
 height:12px\
}\
.rt-tooltipTail {\
 background:#c8ccd1;\
 background:-webkit-linear-gradient(bottom left,#c8ccd1 50%,rgba(0,0,0,0) 50%);\
 background:linear-gradient(to top right,#c8ccd1 50%,rgba(0,0,0,0) 50%)\
}\
.rt-tooltipTail:after {\
 content:\"\";\
 background:#fff;\
 bottom:1px;\
 left:1px\
}\
.rt-tooltip-above .rt-tooltipTail {\
 -webkit-transform:rotate(-45deg);\
 transform:rotate(-45deg);\
 -webkit-transform-origin:100% 100%;\
 transform-origin:100% 100%;\
 bottom:0;\
 left:15px\
}\
.rt-tooltip-below .rt-tooltipTail {\
 -webkit-transform:rotate(135deg);\
 transform:rotate(135deg);\
 -webkit-transform-origin:0 0;\
 transform-origin:0 0;\
 top:0;\
 left:27px\
}\
.rt-settingsLink {\
 background-image:linear-gradient(transparent,transparent),url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0D%0A%20%20%20%20%3Cpath%20fill%3D%22%23555%22%20d%3D%22M20%2014.5v-2.9l-1.8-.3c-.1-.4-.3-.8-.6-1.4l1.1-1.5-2.1-2.1-1.5%201.1c-.5-.3-1-.5-1.4-.6L13.5%205h-2.9l-.3%201.8c-.5.1-.9.3-1.4.6L7.4%206.3%205.3%208.4l1%201.5c-.3.5-.4.9-.6%201.4l-1.7.2v2.9l1.8.3c.1.5.3.9.6%201.4l-1%201.5%202.1%202.1%201.5-1c.4.2.9.4%201.4.6l.3%201.8h3l.3-1.8c.5-.1.9-.3%201.4-.6l1.5%201.1%202.1-2.1-1.1-1.5c.3-.5.5-1%20.6-1.4l1.5-.3zM12%2016c-1.7%200-3-1.3-3-3s1.3-3%203-3%203%201.3%203%203-1.3%203-3%203z%22%2F%3E%0D%0A%3C%2Fsvg%3E);\
 float:right;\
 cursor:pointer;\
 margin:-4px -4px 0 8px;\
 height:24px;\
 width:24px;\
 border-radius:2px;\
 background-position:center center;\
 background-repeat:no-repeat;\
 background-size:24px 24px\
}\
.rt-settingsLink:hover {\
 background-color:#eee\
}\
.rt-target {\
 background-color:#def\
}\
.rt-enableSelect {\
 font-weight:bold\
}\
.rt-settingsFormSeparator {\
 margin:0.85714286em 0\
}\
.rt-numberInput.rt-numberInput {\
 width:150px\
}\
.rt-tooltipsForCommentsField.rt-tooltipsForCommentsField.rt-tooltipsForCommentsField {\
 margin-top:1.64285714em\
}\
.rt-disabledHelp {\
 border-collapse:collapse\
}\
.rt-disabledHelp td {\
 padding:0\
}\
.rt-disabledNote.rt-disabledNote {\
 vertical-align:bottom;\
 padding-left:0.36em;\
 font-weight:bold\
}\
@-webkit-keyframes rt-fade-in-up {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-moz-keyframes rt-fade-in-up {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@keyframes rt-fade-in-up {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-webkit-keyframes rt-fade-in-down {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-moz-keyframes rt-fade-in-down {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@keyframes rt-fade-in-down {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-webkit-keyframes rt-fade-out-down {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
}\
@-moz-keyframes rt-fade-out-down {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
}\
@keyframes rt-fade-out-down {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
}\
@-webkit-keyframes rt-fade-out-up {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
}\
@-moz-keyframes rt-fade-out-up {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
}\
@keyframes rt-fade-out-up {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
}\
.rt-fade-in-up {\
 -webkit-animation:rt-fade-in-up 0.2s ease forwards;\
 -moz-animation:rt-fade-in-up 0.2s ease forwards;\
 animation:rt-fade-in-up 0.2s ease forwards \
}\
.rt-fade-in-down {\
 -webkit-animation:rt-fade-in-down 0.2s ease forwards;\
 -moz-animation:rt-fade-in-down 0.2s ease forwards;\
 animation:rt-fade-in-down 0.2s ease forwards \
}\
.rt-fade-out-down {\
 -webkit-animation:rt-fade-out-down 0.2s ease forwards;\
 -moz-animation:rt-fade-out-down 0.2s ease forwards;\
 animation:rt-fade-out-down 0.2s ease forwards \
}\
.rt-fade-out-up {\
 -webkit-animation:rt-fade-out-up 0.2s ease forwards;\
 -moz-animation:rt-fade-out-up 0.2s ease forwards;\
 animation:rt-fade-out-up 0.2s ease forwards \
}\
.suggestions {\
 overflow:hidden;\
 position:absolute;\
 top:0;\
 left:0;\
 width:0;\
 border:0;\
 z-index:1099;\
 padding:0;\
 margin:-1px 0 0 0\
}\
.suggestions-special {\
 position:relative;\
 background-color:#fff;\
 cursor:pointer;\
 border:1px solid #a2a9b1;\
 margin:0;\
 margin-top:-2px;\
 display:none;\
 padding:0.25em 0.25em;\
 line-height:1.25em\
}\
.suggestions-results {\
 background-color:#fff;\
 cursor:pointer;\
 border:1px solid #a2a9b1;\
 padding:0;\
 margin:0\
}\
.suggestions-result {\
 color:#000;\
 margin:0;\
 line-height:1.5em;\
 padding:0.01em 0.25em;\
 text-align:left;\
 overflow:hidden;\
 text-overflow:ellipsis;\
 white-space:nowrap\
}\
.suggestions-result-current {\
 background-color:#2a4b8d;\
 color:#fff\
}\
.suggestions-special .special-label {\
 color:#72777d;\
 text-align:left\
}\
.suggestions-special .special-query {\
 color:#000;\
 font-style:italic;\
 text-align:left\
}\
.suggestions-special .special-hover {\
 background-color:#c8ccd1\
}\
.suggestions-result-current .special-label,\
.suggestions-result-current .special-query {\
 color:#fff\
}\
.highlight {\
 font-weight:bold\
}\
@-webkit-keyframes centralAuthPPersonalAnimation {\
 0% {\
  opacity:0;\
  -webkit-transform:translateY(-20px)\
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translateY(0)\
 }\
}\
@-moz-keyframes centralAuthPPersonalAnimation {\
 0% {\
  opacity:0;\
  -moz-transform:translateY(-20px)\
 }\
 100% {\
  opacity:1;\
  -moz-transform:translateY(0)\
 }\
}\
@-o-keyframes centralAuthPPersonalAnimation {\
 0% {\
  opacity:0;\
  -o-transform:translateY(-20px)\
 }\
 100% {\
  opacity:1;\
  -o-transform:translateY(0)\
 }\
}\
@keyframes centralAuthPPersonalAnimation {\
 0% {\
  opacity:0;\
  transform:translateY(-20px)\
 }\
 100% {\
  opacity:1;\
  transform:translateY(0)\
 }\
}\
.centralAuthPPersonalAnimation {\
 -webkit-animation-duration:1s;\
 -moz-animation-duration:1s;\
 -o-animation-duration:1s;\
 animation-duration:1s;\
 -webkit-animation-fill-mode:both;\
 -moz-animation-fill-mode:both;\
 -o-animation-fill-mode:both;\
 animation-fill-mode:both;\
 -webkit-animation-name:centralAuthPPersonalAnimation;\
 -moz-animation-name:centralAuthPPersonalAnimation;\
 -o-animation-name:centralAuthPPersonalAnimation;\
 animation-name:centralAuthPPersonalAnimation\
}\
@media print {\
 #centralNotice {\
  display:none\
 }\
}\
.cn-closeButton {\
 display:inline-block;\
 zoom:1;\
 background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAElBMVEUAAAAQEBDPz88AAABAQEDv7+9oe1vvAAAABnRSTlMA3rLe3rJS22KzAAAARElEQVQI12PAAUIUQCSTK5BwFgIxFU1AhKECUFAYKAAioXwwBeZChMGCEGGQIFQYJohgIhQgtCEMQ7ECYTHCOciOxA4AADgJTXIb9s8AAAAASUVORK5CYII=) no-repeat;\
 background:url(/w/extensions/CentralNotice/resources/subscribing/close.png?8e3d8) no-repeat!ie;\
 width:20px;\
 height:20px;\
 text-indent:20px;\
 white-space:nowrap;\
 overflow:hidden\
}\
.uls-menu {\
 border-radius:2px;\
 font-size:medium\
}\
.uls-search,\
.uls-language-settings-close-block {\
 border-top-right-radius:2px;\
 border-top-left-radius:2px\
}\
.uls-language-list {\
 border-bottom-right-radius:2px;\
 border-bottom-left-radius:2px\
}\
.uls-menu.callout:before,\
.uls-menu.callout:after {\
 border-top:10px solid transparent;\
 border-bottom:10px solid transparent;\
 display:inline-block;\
 top:17px;\
 position:absolute;\
 content:''\
}\
.uls-menu.callout.selector-right:before {\
 border-left:10px solid #c8ccd1;\
 right:-11px\
}\
.uls-menu.callout.selector-right:after {\
 border-left:10px solid #fff;\
 right:-10px\
}\
.uls-menu.callout.selector-left:before {\
 border-right:10px solid #c8ccd1;\
 left:-11px\
}\
.uls-menu.callout.selector-left:after {\
 border-right:10px solid #fff;\
 left:-10px\
}\
.uls-ui-languages button {\
 margin:5px 15px 5px 0;\
 white-space:nowrap;\
 overflow:hidden\
}\
.uls-search-wrapper-wrapper {\
 position:relative;\
 padding-left:40px;\
 margin-top:5px;\
 margin-bottom:5px\
}\
.uls-icon-back {\
 background:transparent url(/w/extensions/UniversalLanguageSelector/resources/images/back-grey-ltr.png?90e9b) no-repeat scroll center center;\
 background-image:-webkit-linear-gradient(transparent,transparent),url(/w/extensions/UniversalLanguageSelector/resources/images/back-grey-ltr.svg?e226b);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E %3Cpath fill=%22%2354595d%22 d=%22M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z%22/%3E %3C/svg%3E\");\
 background-size:28px;\
 background-position:center center;\
 height:32px;\
 width:40px;\
 display:block;\
 position:absolute;\
 left:0;\
 border-right:1px solid #c8ccd1;\
 opacity:0.8\
}\
.uls-icon-back:hover {\
 opacity:1;\
 cursor:pointer\
}\
.uls-menu .uls-no-results-view .uls-no-found-more {\
 background-color:#fff\
}\
.uls-menu .uls-no-results-view h3 {\
 padding:0 28px;\
 margin:0;\
 color:#54595d;\
 font-size:1em;\
 font-weight:normal\
}\
.skin-vector .uls-menu {\
 border-color:#c8ccd1;\
 -webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.25);\
 box-shadow:0 2px 2px 0 rgba(0,0,0,0.25);\
 font-size:0.875em\
}\
.skin-vector .uls-search {\
 border-bottom-color:#c8ccd1\
}\
.skin-vector .uls-filtersuggestion {\
 color:#72777d\
}\
.skin-vector .uls-lcd-region-title {\
 color:#54595d\
}\
.ext-quick-survey-panel,\
.ext-qs-loader-bar {\
 width:auto;\
 background-color:#eaecf0\
}\
.ext-qs-loader-bar {\
 display:block;\
 height:100px;\
 margin-left:1.4em;\
 clear:right;\
 float:right;\
 background-color:#eaecf0\
}\
.ext-qs-loader-bar.mw-ajax-loader {\
 top:0\
}\
@media all and (min-width:720px) {\
 .ext-qs-loader-bar,\
 .ext-quick-survey-panel {\
  margin-left:1.4em;\
  width:300px;\
  clear:right;\
  float:right\
 }\
}\
.suggestions a.mw-searchSuggest-link,\
.suggestions a.mw-searchSuggest-link:hover,\
.suggestions a.mw-searchSuggest-link:active,\
.suggestions a.mw-searchSuggest-link:focus {\
 color:#000;\
 text-decoration:none\
}\
.suggestions-result-current a.mw-searchSuggest-link,\
.suggestions-result-current a.mw-searchSuggest-link:hover,\
.suggestions-result-current a.mw-searchSuggest-link:active,\
.suggestions-result-current a.mw-searchSuggest-link:focus {\
 color:#fff\
}\
.suggestions a.mw-searchSuggest-link .special-query {\
 overflow:hidden;\
 text-overflow:ellipsis;\
 white-space:nowrap\
}\
.mw-mmv-overlay {\
 position:fixed;\
 top:0;\
 left:0;\
 right:0;\
 bottom:0;\
 z-index:1000;\
 background-color:#000\
}\
body.mw-mmv-lightbox-open {\
 overflow-y:auto;\
}\
body.mw-mmv-lightbox-open #mw-page-base,\
body.mw-mmv-lightbox-open #mw-head-base,\
body.mw-mmv-lightbox-open #mw-navigation,\
body.mw-mmv-lightbox-open #content,\
body.mw-mmv-lightbox-open .wds-global-footer,\
body.mw-mmv-lightbox-open #globalWrapper {\
 display:none\
}\
body.mw-mmv-lightbox-open > * {\
 display:none\
}\
body.mw-mmv-lightbox-open > .mw-mmv-overlay,\
body.mw-mmv-lightbox-open > .mw-mmv-wrapper {\
 display:block\
}\
.mw-mmv-filepage-buttons {\
 margin-top:5px\
}\
.mw-mmv-filepage-buttons .mw-mmv-view-expanded,\
.mw-mmv-filepage-buttons .mw-mmv-view-config {\
 display:block;\
 line-height:inherit\
}\
.mw-mmv-filepage-buttons .mw-mmv-view-expanded.mw-ui-icon:before {\
 background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1024 768%22%3E %3Cpath d=%22M851.2 71.6L690.7 232.1l-40.1-40.3-9.6 164.8 164.8-9.3-40.3-40.4L926 146.4l58.5 58.5L997.6 0 792.7 13.1%22/%3E %3Cpath d=%22M769.6 89.3H611.9l70.9 70.8 7.9 7.5m-47.1 234.6l-51.2 3 3-51.2 9.4-164.4 5.8-100.3H26.4V768h883.1V387l-100.9 5.8-165 9.4zM813.9 678H113.6l207.2-270.2 31.5-12.9L548 599.8l105.9-63.2 159.8 140.8.2.6zm95.6-291.9V228l-79.1 78.9 7.8 7.9%22/%3E %3C/svg%3E\")\
}\
.mw-mmv-filepage-buttons .mw-mmv-view-config.mw-ui-icon:before {\
 background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1024 768%22%3E %3Cpath d=%22M897 454.6V313.4L810.4 299c-6.4-23.3-16-45.7-27.3-65.8l50.5-71.4-99.4-100.2-71.4 50.5c-20.9-11.2-42.5-20.9-65.8-27.3L582.6-1H441.4L427 85.6c-23.3 6.4-45.7 16-65.8 27.3l-71.4-50.5-100.3 99.5 50.5 71.4c-11.2 20.9-20.9 42.5-27.3 66.6L127 313.4v141.2l85.8 14.4c6.4 23.3 16 45.7 27.3 66.6L189.6 607l99.5 99.5 71.4-50.5c20.9 11.2 42.5 20.9 66.6 27.3l14.4 85.8h141.2l14.4-86.6c23.3-6.4 45.7-16 65.8-27.3l71.4 50.5 99.5-99.5-50.5-71.4c11.2-20.9 20.9-42.5 27.3-66.6l86.4-13.6zm-385 77c-81.8 0-147.6-66.6-147.6-147.6 0-81.8 66.6-147.6 147.6-147.6S659.6 302.2 659.6 384 593.8 531.6 512 531.6z%22/%3E %3C/svg%3E\");\
 opacity:0.75\
}\
.mw-mmv-filepage-buttons .mw-mmv-view-config.mw-ui-icon:before:hover {\
 opacity:1\
}\
.mw-mmv-button {\
 background-color:transparent;\
 min-width:0;\
 border:0;\
 padding:0;\
 overflow-x:hidden;\
 text-indent:-9999em\
}\
.ve-init-mw-tempWikitextEditorWidget {\
 border:0;\
 padding:0;\
 color:inherit;\
 line-height:1.5em;\
 width:100%;\
}\
.ve-init-mw-tempWikitextEditorWidget:focus {\
 outline:0;\
 padding:0\
}\
.ve-init-mw-tempWikitextEditorWidget::selection {\
 background:rgba(109,169,247,0.5);\
}\
#uls-settings-block {\
 background-color:#f8f9fa;\
 border-top:1px solid #c8ccd1;\
 padding-left:10px;\
 line-height:1.2em;\
 border-radius:0 0 2px 2px\
}\
#uls-settings-block > button {\
 background:left top transparent no-repeat;\
 background-size:20px auto;\
 color:#54595d;\
 display:inline-block;\
 margin:8px 15px;\
 border:0;\
 padding:0 0 0 26px;\
 font-size:medium;\
 cursor:pointer\
}\
#uls-settings-block > button:hover {\
 color:#222\
}\
#uls-settings-block > button.display-settings-block {\
 background-image:url(/w/extensions/UniversalLanguageSelector/resources/images/display.png?d25f1);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Cpath fill=%22%23222%22 d=%22M.002 2.275V15.22h8.405c.535 1.624-.975 1.786-1.902 2.505 0 0 2.293-.024 3.439-.024 1.144 0 3.432.024 3.432.024-.905-.688-2.355-.868-1.902-2.505h8.527V2.275h-20zm6.81 1.84h.797l3.313 8.466H9.879L8.836 9.943H5.462l-1.043 2.638h-.982zm.368 1.104c-.084.369-.211.785-.368 1.227L5.83 9.023h2.699l-.982-2.577c-.128-.33-.234-.747-.368-1.227zm7.117.982c.753 0 1.295.157 1.656.491.365.334.552.858.552 1.595v4.294h-.675l-.184-.859h-.062c-.315.396-.605.655-.92.798-.311.138-.758.184-1.227.184-.626 0-1.115-.168-1.472-.491-.353-.323-.491-.754-.491-1.35 0-1.275 1.028-1.963 3.068-2.025h1.043v-.429c0-.495-.091-.87-.307-1.104-.211-.238-.574-.307-1.043-.307-.526 0-1.115.107-1.779.429l-.307-.675a4.748 4.748 0 0 1 1.043-.429 4.334 4.334 0 0 1 1.104-.123zm.307 3.313c-.761.027-1.318.157-1.656.368-.334.207-.491.54-.491.982 0 .346.1.617.307.798.211.181.544.245.92.245.595 0 1.012-.164 1.35-.491.342-.326.552-.762.552-1.35v-.552z%22/%3E %3C/svg%3E\")\
}\
#uls-settings-block > button.input-settings-block {\
 background-image:url(/w/extensions/UniversalLanguageSelector/resources/images/input.png?aea9e);\
 background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Cpath fill=%22%23222%22 d=%22M9 1.281c-.124.259-.185.599-.5.688-.55.081-1.133.018-1.688 0-.866-.032-1.733-.148-2.594 0-.588.157-.953.727-1.188 1.25-.178.416-.271.836-.344 1.281H-.002V16h20V4.5H3.654c.109-.52.203-1.057.563-1.469.222-.231.587-.17.875-.188 1.212.003 2.415.179 3.625.063.463-.058.812-.455.969-.875l.188-.438-.875-.313zM1.875 7.125h1.563c.094 0 .188.093.188.188v1.531a.201.201 0 0 1-.188.188H1.875c-.094 0-.156-.093-.156-.188V7.313c0-.094.062-.188.156-.188zm2.844 0h1.563c.094 0 .156.093.156.188v1.531c0 .094-.062.188-.156.188H4.719c-.094 0-.156-.093-.156-.188V7.313c0-.094.062-.188.156-.188zm2.844 0h1.563c.094 0 .156.093.156.188v1.531c0 .094-.062.188-.156.188H7.563a.201.201 0 0 1-.188-.188V7.313c0-.094.093-.188.188-.188zm2.813 0h1.563c.094 0 .188.093.188.188v1.531a.201.201 0 0 1-.188.188h-1.563c-.094 0-.156-.093-.156-.188V7.313c0-.094.062-.188.156-.188zm2.844 0h1.563c.094 0 .156.093.156.188v1.531c0 .094-.062.188-.156.188H13.22c-.094 0-.156-.093-.156-.188V7.313c0-.094.062-.188.156-.188zm2.844 0h1.531c.094 0 .188.093.188.188v1.531a.201.201 0 0 1-.188.188h-1.531a.201.201 0 0 1-.188-.188V7.313c0-.094.093-.188.188-.188zm-12.844 3h1.563c.094 0 .156.093.156.188v1.563c0 .094-.062.156-.156.156H3.22c-.094 0-.156-.062-.156-.156v-1.563c0-.094.062-.188.156-.188zm2.906 0h1.563c.094 0 .188.093.188.188v1.563c0 .094-.093.156-.188.156H6.126c-.094 0-.156-.062-.156-.156v-1.563c0-.094.062-.188.156-.188zm2.938 0h1.531c.094 0 .188.093.188.188v1.563c0 .094-.093.156-.188.156H9.064c-.094 0-.188-.062-.188-.156v-1.563c0-.094.093-.188.188-.188zm2.906 0h1.563c.094 0 .156.093.156.188v1.563c0 .094-.062.156-.156.156H11.97c-.094 0-.188-.062-.188-.156v-1.563c0-.094.093-.188.188-.188zm2.906 0h1.563c.094 0 .156.093.156.188v1.563c0 .094-.062.156-.156.156h-1.563c-.094 0-.156-.062-.156-.156v-1.563c0-.094.062-.188.156-.188zM4.001 13.688h12c.088 0 .156.068.156.156v.844a.154.154 0 0 1-.156.156h-12a.154.154 0 0 1-.156-.156v-.844c0-.088.068-.156.156-.156z%22/%3E %3C/svg%3E\")\
}\
.ve-activated .ve-init-mw-desktopArticleTarget-editableContent #toc,\
.ve-activated #siteNotice,\
.ve-activated .mw-indicators,\
.ve-activated #t-print,\
.ve-activated #t-permalink,\
.ve-activated #p-coll-print_export,\
.ve-activated #t-cite,\
.ve-deactivating .ve-ui-surface,\
.ve-active .ve-init-mw-desktopArticleTarget-editableContent,\
.ve-active .ve-init-mw-tempWikitextEditorWidget {\
 display:none\
}\
.ve-activating .ve-ui-surface {\
 height:0;\
 padding:0 !important;\
 overflow:hidden\
}\
.ve-loading #content > :not(.ve-init-mw-desktopArticleTarget-loading-overlay),\
.ve-activated .ve-init-mw-desktopArticleTarget-uneditableContent {\
 pointer-events:none;\
 -webkit-user-select:none;\
 -moz-user-select:none;\
 -ms-user-select:none;\
 user-select:none;\
 opacity:0.5\
}\
.ve-activated #catlinks {\
 cursor:pointer\
}\
.ve-activated #catlinks a {\
 opacity:1\
}\
.ve-activated #content {\
 position:relative\
}\
.ve-init-mw-desktopArticleTarget-loading-overlay {\
 position:absolute;\
 top:1.25em;\
 left:0;\
 right:0;\
 z-index:1;\
 margin-top:-0.5em\
}\
.ve-init-mw-desktopArticleTarget-toolbarPlaceholder {\
 transition:height 250ms ease;\
 height:0;\
}\
.oo-ui-element-hidden {\
 display:none !important;\
}\
.editsection {\
 white-space:nowrap;\
 unicode-bidi:-moz-isolate;\
 unicode-bidi:-webkit-isolate;\
 unicode-bidi:isolate\
}\
.editsection-divider {\
 color:#54595d\
}\
.ve-init-mw-desktopArticleTarget-toolbarPlaceholder {\
 border-bottom:1px solid #c8ccd1;\
 box-shadow:0 1px 1px 0 rgba(0,0,0,0.1)\
}\
.ve-init-mw-desktopArticleTarget-toolbarPlaceholder-open {\
 height:42px\
}\
.ve-init-mw-desktopArticleTarget-toolbar,\
.ve-init-mw-desktopArticleTarget-toolbarPlaceholder {\
 font-size:0.875em;\
 margin:-1.14em -1.14em 1.14em -1.14em;\
}\
@media screen and (min-width:982px) {\
 .ve-init-mw-desktopArticleTarget-toolbar,\
 .ve-init-mw-desktopArticleTarget-toolbarPlaceholder {\
  margin:-1.43em -1.71em 1.43em -1.71em \
 }\
}\
@-webkit-keyframes mwe-popups-fade-in-up {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-moz-keyframes mwe-popups-fade-in-up {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@keyframes mwe-popups-fade-in-up {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-webkit-keyframes mwe-popups-fade-in-down {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-moz-keyframes mwe-popups-fade-in-down {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@keyframes mwe-popups-fade-in-down {\
 0% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
 100% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
}\
@-webkit-keyframes mwe-popups-fade-out-down {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
}\
@-moz-keyframes mwe-popups-fade-out-down {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
}\
@keyframes mwe-popups-fade-out-down {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,20px);\
  -moz-transform:translate(0,20px);\
  -ms-transform:translate(0,20px);\
  transform:translate(0,20px) \
 }\
}\
@-webkit-keyframes mwe-popups-fade-out-up {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
}\
@-moz-keyframes mwe-popups-fade-out-up {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
}\
@keyframes mwe-popups-fade-out-up {\
 0% {\
  opacity:1;\
  -webkit-transform:translate(0,0);\
  -moz-transform:translate(0,0);\
  -ms-transform:translate(0,0);\
  transform:translate(0,0) \
 }\
 100% {\
  opacity:0;\
  -webkit-transform:translate(0,-20px);\
  -moz-transform:translate(0,-20px);\
  -ms-transform:translate(0,-20px);\
  transform:translate(0,-20px) \
 }\
}\
.mwe-popups-fade-in-up {\
 -webkit-animation:mwe-popups-fade-in-up 0.2s ease forwards;\
 -moz-animation:mwe-popups-fade-in-up 0.2s ease forwards;\
 animation:mwe-popups-fade-in-up 0.2s ease forwards\
}\
.mwe-popups-fade-in-down {\
 -webkit-animation:mwe-popups-fade-in-down 0.2s ease forwards;\
 -moz-animation:mwe-popups-fade-in-down 0.2s ease forwards;\
 animation:mwe-popups-fade-in-down 0.2s ease forwards\
}\
.mwe-popups-fade-out-down {\
 -webkit-animation:mwe-popups-fade-out-down 0.2s ease forwards;\
 -moz-animation:mwe-popups-fade-out-down 0.2s ease forwards;\
 animation:mwe-popups-fade-out-down 0.2s ease forwards\
}\
.mwe-popups-fade-out-up {\
 -webkit-animation:mwe-popups-fade-out-up 0.2s ease forwards;\
 -moz-animation:mwe-popups-fade-out-up 0.2s ease forwards;\
 animation:mwe-popups-fade-out-up 0.2s ease forwards\
}\
#mwe-popups-settings {\
 z-index:1000;\
 background:#fff;\
 width:420px;\
 border:1px solid #a2a9b1;\
 box-shadow:0 2px 2px 0 rgba(0,0,0,0.25);\
 border-radius:2px;\
 font-size:14px\
}\
#mwe-popups-settings header {\
 -webkit-box-sizing:border-box;\
 -moz-box-sizing:border-box;\
 box-sizing:border-box;\
 border-bottom:1px solid #c8ccd1;\
 position:relative;\
 display:table;\
 width:100%;\
 padding:5px 7px 5px 0\
}\
#mwe-popups-settings header > div {\
 display:table-cell;\
 width:3.5em;\
 vertical-align:middle;\
 cursor:pointer\
}\
#mwe-popups-settings header h1 {\
 margin-bottom:0.6em;\
 padding-top:0.5em;\
 border:0;\
 width:100%;\
 font-family:sans-serif;\
 font-size:18px;\
 font-weight:bold;\
 text-align:center\
}\
#mwe-popups-settings .mwe-ui-icon-popups-close {\
 opacity:0.87;\
 -webkit-transition:opacity 100ms;\
 -moz-transition:opacity 100ms;\
 transition:opacity 100ms\
}\
#mwe-popups-settings .mwe-ui-icon-popups-close:hover {\
 opacity:0.73\
}\
#mwe-popups-settings .mwe-ui-icon-popups-close:active {\
 opacity:1\
}\
#mwe-popups-settings main {\
 display:block;\
 width:350px;\
 padding:32px 0 24px;\
 margin:0 auto\
}\
#mwe-popups-settings main p {\
 color:#54595d;\
 font-size:17px;\
 margin:16px 0 0\
}\
#mwe-popups-settings main p:first-child {\
 margin-top:0\
}\
#mwe-popups-settings main form img,\
#mwe-popups-settings main form input,\
#mwe-popups-settings main form label {\
 vertical-align:top\
}\
#mwe-popups-settings main form img {\
 margin-right:60px\
}\
#mwe-popups-settings main form input {\
 display:inline-block;\
 margin:0 10px 0 0;\
 padding:0\
}\
#mwe-popups-settings main form label {\
 font-size:13px;\
 display:inline-block;\
 line-height:16px;\
 width:300px\
}\
#mwe-popups-settings main form label > span {\
 color:#000;\
 font-size:18px;\
 font-weight:bold;\
 display:block;\
 margin-bottom:5px;\
 line-height:18px\
}\
.mwe-popups-settings-help {\
 font-size:13px;\
 font-weight:800;\
 margin:40px;\
 position:relative\
}\
.mwe-popups-settings-help .mw-ui-icon:before,\
.mwe-popups-settings-help .mw-ui-icon {\
 height:140px;\
 width:180px;\
 max-width:none;\
 margin:0\
}\
.mwe-popups-settings-help p {\
 left:180px;\
 bottom:20px;\
 position:absolute\
}\
.mwe-popups {\
 background:#fff;\
 position:absolute;\
 z-index:110;\
 -webkit-box-shadow:0 30px 90px -20px rgba(0,0,0,0.3),0 0 1px #a2a9b1;\
 box-shadow:0 30px 90px -20px rgba(0,0,0,0.3),0 0 1px #a2a9b1;\
 padding:0;\
 display:none;\
 font-size:14px;\
 line-height:20px;\
 min-width:300px;\
 border-radius:2px;\
}\
.mwe-popups .mw-ui-icon {\
 font-size:16px\
}\
.mwe-popups .mw-ui-icon-preview-disambiguation,\
.mwe-popups .mw-ui-icon-preview-generic {\
 margin:21px 0 8px 0\
}\
.mwe-popups .mwe-popups-container {\
 color:#222222;\
 margin-top:-9px;\
 padding-top:9px;\
 text-decoration:none\
}\
.mwe-popups .mwe-popups-container footer {\
 padding:16px;\
 margin:0;\
 font-size:10px;\
 position:absolute;\
 bottom:0;\
 left:0\
}\
.mwe-popups .mwe-popups-extract {\
 margin:16px;\
 display:block;\
 color:#222222;\
 text-decoration:none;\
 position:relative;\
}\
.mwe-popups .mwe-popups-extract:hover {\
 text-decoration:none\
}\
.mwe-popups .mwe-popups-extract:after {\
 content:' ';\
 position:absolute;\
 bottom:0;\
 width:25%;\
 height:20px;\
 background-color:transparent\
}\
.mwe-popups .mwe-popups-extract[dir='ltr']:after {\
 right:0;\
 background-image:-webkit-linear-gradient(to right,rgba(255,255,255,0),#ffffff 50%);\
 background-image:-moz-linear-gradient(to right,rgba(255,255,255,0),#ffffff 50%);\
 background-image:-o-linear-gradient(to right,rgba(255,255,255,0),#ffffff 50%);\
 background-image:linear-gradient(to right,rgba(255,255,255,0),#ffffff 50%)\
}\
.mwe-popups .mwe-popups-extract[dir='rtl']:after {\
 left:0;\
 background-image:-webkit-linear-gradient(to left,rgba(255,255,255,0),#ffffff 50%);\
 background-image:-moz-linear-gradient(to left,rgba(255,255,255,0),#ffffff 50%);\
 background-image:-o-linear-gradient(to left,rgba(255,255,255,0),#ffffff 50%);\
 background-image:linear-gradient(to left,rgba(255,255,255,0),#ffffff 50%)\
}\
.mwe-popups .mwe-popups-extract p {\
 margin:0\
}\
.mwe-popups .mwe-popups-extract ul,\
.mwe-popups .mwe-popups-extract ol,\
.mwe-popups .mwe-popups-extract li,\
.mwe-popups .mwe-popups-extract dl,\
.mwe-popups .mwe-popups-extract dd,\
.mwe-popups .mwe-popups-extract dt {\
 margin-top:0;\
 margin-bottom:0\
}\
.mwe-popups svg {\
 overflow:hidden\
}\
.mwe-popups.mwe-popups-is-tall {\
 width:450px\
}\
.mwe-popups.mwe-popups-is-tall > div > a > svg {\
 vertical-align:middle\
}\
.mwe-popups.mwe-popups-is-tall .mwe-popups-extract {\
 width:215px;\
 height:180px;\
 overflow:hidden;\
 float:left\
}\
.mwe-popups.mwe-popups-is-tall footer {\
 width:215px;\
 left:0\
}\
.mwe-popups.mwe-popups-is-not-tall {\
 width:320px\
}\
.mwe-popups.mwe-popups-is-not-tall .mwe-popups-extract {\
 min-height:40px;\
 max-height:140px;\
 overflow:hidden;\
 margin-bottom:47px;\
 padding-bottom:0\
}\
.mwe-popups.mwe-popups-is-not-tall footer {\
 width:290px\
}\
.mwe-popups.mwe-popups-type-generic .mwe-popups-extract,\
.mwe-popups.mwe-popups-type-disambiguation .mwe-popups-extract {\
 min-height:auto;\
 padding-top:4px;\
 margin-bottom:60px;\
 margin-top:0\
}\
.mwe-popups.mwe-popups-type-generic .mwe-popups-read-link,\
.mwe-popups.mwe-popups-type-disambiguation .mwe-popups-read-link {\
 font-weight:bold;\
 font-size:12px\
}\
.mwe-popups.mwe-popups-type-generic .mwe-popups-extract:hover + footer .mwe-popups-read-link,\
.mwe-popups.mwe-popups-type-disambiguation .mwe-popups-extract:hover + footer .mwe-popups-read-link {\
 text-decoration:underline\
}\
.mwe-popups.mwe-popups-no-image-pointer:before {\
 content:'';\
 position:absolute;\
 border:8px solid transparent;\
 border-top:0;\
 border-bottom:8px solid #a2a9b1;\
 top:-8px;\
 left:10px\
}\
.mwe-popups.mwe-popups-no-image-pointer:after {\
 content:'';\
 position:absolute;\
 border:11px solid transparent;\
 border-top:0;\
 border-bottom:11px solid #ffffff;\
 top:-7px;\
 left:7px\
}\
.mwe-popups.flipped-x.mwe-popups-no-image-pointer:before {\
 left:auto;\
 right:10px\
}\
.mwe-popups.flipped-x.mwe-popups-no-image-pointer:after {\
 left:auto;\
 right:7px\
}\
.mwe-popups.mwe-popups-image-pointer:before {\
 content:'';\
 position:absolute;\
 border:9px solid transparent;\
 border-top:0;\
 border-bottom:9px solid #a2a9b1;\
 top:-9px;\
 left:9px;\
 z-index:111\
}\
.mwe-popups.mwe-popups-image-pointer:after {\
 content:'';\
 position:absolute;\
 border:12px solid transparent;\
 border-top:0;\
 border-bottom:12px solid #ffffff;\
 top:-8px;\
 left:6px;\
 z-index:112\
}\
.mwe-popups.mwe-popups-image-pointer.flipped-x:before {\
 content:'';\
 position:absolute;\
 border:9px solid transparent;\
 border-top:0;\
 border-bottom:9px solid #a2a9b1;\
 top:-9px;\
 left:293px\
}\
.mwe-popups.mwe-popups-image-pointer.flipped-x:after {\
 content:'';\
 position:absolute;\
 border:12px solid transparent;\
 border-top:0;\
 border-bottom:12px solid #ffffff;\
 top:-8px;\
 left:290px\
}\
.mwe-popups.mwe-popups-image-pointer .mwe-popups-extract {\
 padding-top:16px;\
 margin-top:200px\
}\
.mwe-popups.mwe-popups-image-pointer > div > a > svg {\
 margin-top:-8px;\
 position:absolute;\
 z-index:113;\
 left:0\
}\
.mwe-popups.flipped-x.mwe-popups-is-tall {\
 min-height:242px\
}\
.mwe-popups.flipped-x.mwe-popups-is-tall:before {\
 content:'';\
 position:absolute;\
 border:9px solid transparent;\
 border-top:0;\
 border-bottom:9px solid #a2a9b1;\
 top:-9px;\
 left:420px;\
 z-index:111\
}\
.mwe-popups.flipped-x.mwe-popups-is-tall > div > a > svg {\
 margin:0;\
 margin-top:-8px;\
 margin-bottom:-7px;\
 position:absolute;\
 z-index:113;\
 right:0\
}\
.mwe-popups.flipped-x-y:before {\
 content:'';\
 position:absolute;\
 border:9px solid transparent;\
 border-bottom:0;\
 border-top:9px solid #a2a9b1;\
 bottom:-9px;\
 left:293px;\
 z-index:111\
}\
.mwe-popups.flipped-x-y:after {\
 content:'';\
 position:absolute;\
 border:12px solid transparent;\
 border-bottom:0;\
 border-top:12px solid #ffffff;\
 bottom:-8px;\
 left:290px;\
 z-index:112\
}\
.mwe-popups.flipped-x-y.mwe-popups-is-tall {\
 min-height:242px\
}\
.mwe-popups.flipped-x-y.mwe-popups-is-tall:before {\
 content:'';\
 position:absolute;\
 border:9px solid transparent;\
 border-bottom:0;\
 border-top:9px solid #a2a9b1;\
 bottom:-9px;\
 left:420px\
}\
.mwe-popups.flipped-x-y.mwe-popups-is-tall:after {\
 content:'';\
 position:absolute;\
 border:12px solid transparent;\
 border-bottom:0;\
 border-top:12px solid #ffffff;\
 bottom:-8px;\
 left:417px\
}\
.mwe-popups.flipped-x-y.mwe-popups-is-tall > div > a > svg {\
 margin:0;\
 margin-bottom:-9px;\
 position:absolute;\
 z-index:113;\
 right:0\
}\
.mwe-popups.flipped-y:before {\
 content:'';\
 position:absolute;\
 border:8px solid transparent;\
 border-bottom:0;\
 border-top:8px solid #a2a9b1;\
 bottom:-8px;\
 left:10px\
}\
.mwe-popups.flipped-y:after {\
 content:'';\
 position:absolute;\
 border:11px solid transparent;\
 border-bottom:0;\
 border-top:11px solid #ffffff;\
 bottom:-7px;\
 left:7px\
}\
.mwe-popups-is-tall polyline {\
 -webkit-transform:translate(0,0);\
 -moz-transform:translate(0,0);\
 -ms-transform:translate(0,0);\
 transform:translate(0,0)\
}\
.mwe-popups-is-tall.flipped-x-y polyline {\
 -webkit-transform:translate(0,-8px);\
 -moz-transform:translate(0,-8px);\
 -ms-transform:translate(0,-8px);\
 transform:translate(0,-8px)\
}\
.mwe-popups-is-tall.flipped-x polyline {\
 -webkit-transform:translate(0,8px);\
 -moz-transform:translate(0,8px);\
 -ms-transform:translate(0,8px);\
 transform:translate(0,8px)\
}\
.rtl .mwe-popups-is-tall polyline {\
 -webkit-transform:translate(-100%,0);\
 -moz-transform:translate(-100%,0);\
 -ms-transform:translate(-100%,0);\
 transform:translate(-100%,0)\
}\
.rtl .mwe-popups-is-tall.flipped-x-y polyline {\
 -webkit-transform:translate(-100%,-8px);\
 -moz-transform:translate(-100%,-8px);\
 -ms-transform:translate(-100%,-8px);\
 transform:translate(-100%,-8px)\
}\
.rtl .mwe-popups-is-tall.flipped-x polyline {\
 -webkit-transform:translate(-100%,8px);\
 -moz-transform:translate(-100%,8px);\
 -ms-transform:translate(-100%,8px);\
 transform:translate(-100%,8px)\
}\
.mwe-popups-settings-icon {\
 display:block;\
 overflow:hidden;\
 font-size:16px;\
 width:1.5em;\
 height:1.5em;\
 padding:3px;\
 float:right;\
 margin:4px 4px 2px 4px;\
 text-indent:-1em;\
 border-radius:2px\
}\
.mwe-popups-settings-icon:hover {\
 background-color:#eaecf0\
}\
.mwe-popups-settings-icon:active {\
 background-color:#c8ccd1\
}\
.mwe-popups .mwe-popups-title {\
 display:block;\
 font-weight:bold;\
 margin:0 16px\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-title {\
 margin-top:16px\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-title .mw-ui-icon {\
 vertical-align:middle\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-title .mw-ui-icon.mw-ui-icon-element {\
 min-width:1.5em;\
 width:1.5em\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-title .mw-ui-icon.mw-ui-icon-element:before {\
 margin:0\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-title .mw-ui-icon.mw-ui-icon-preview-reference {\
 margin-left:-2px\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-extract {\
 min-height:20px;\
 overflow:auto\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-extract:after {\
 display:none\
}\
.mwe-popups.mwe-popups-type-reference .mwe-popups-read-link {\
 font-size:12px\
}\
.mwe-popups-overlay {\
 background-color:rgba(255,255,255,0.9);\
 z-index:999;\
 position:fixed;\
 height:100%;\
 width:100%;\
 top:0;\
 bottom:0;\
 left:0;\
 right:0;\
 display:flex;\
 justify-content:center;\
 align-items:center\
}\
#mwe-popups-svg {\
 position:absolute;\
 top:-1000px\
}\
div#editpage-specialchars {\
 display:block;\
 border:1px solid #c0c0c0;\
 padding:.5em 1em\
}\
#editpage-specialchars a {\
 background-color:#f9f9f9;\
 border:1px solid #ddd;\
 padding:1px 4px\
}\
textarea#wpTextbox1 + #editpage-specialchars,\
.wikiEditor-ui-clear + #editpage-specialchars {\
 border-top:none\
}\
cite,\
dfn {\
 font-style:inherit\
}\
q {\
 quotes:'\"' '\"' \"'\" \"'\"\
}\
blockquote {\
 overflow:hidden;\
 margin:1em 0;\
 padding:0 40px\
}\
strong.selflink {\
 font-weight:700\
}\
small {\
 font-size:85%\
}\
#WikiaPage-content sub,\
#WikiaPage-content sup,\
span.reference {\
 font-size:80%\
}\
.ns-talk #WikiaPage-content dd {\
 margin-top:0.4em;\
 margin-bottom:0.4em\
}\
#interwiki-completelist {\
 font-weight:bold\
}\
.client-js .mw-special-Watchlist #watchlist-message,\
.client-js .NavFrame.collapsed .NavContent,\
.client-js .collapsible:not(.mw-made-collapsible).collapsed > tbody > tr:not(:first-child) {\
 display:none\
}\
.mw-rcfilters-enabled .mw-specialpage-summary {\
 margin-top:1em\
}\
#editpage-specialchars {\
 display:none\
}\
body.action-info #WikiaPage-content :target,\
.citation:target {\
 background-color:#def;\
 background-color:rgba(0,127,255,0.133)\
}\
.citation {\
 word-wrap:break-word\
}\
@media screen,handheld {\
 .citation .printonly {\
  display:none \
 }\
}\
ol.references,\
div.reflist {\
 font-size:90%;\
 margin-bottom:0.5em\
}\
div.reflist ol.references {\
 font-size:100%;\
 margin-bottom:0;\
 list-style-type:inherit\
}\
span.brokenref {\
 display:none\
}\
div.columns {\
 margin-top:0.3em\
}\
div.columns dl,\
div.columns ol,\
div.columns ul {\
 margin-top:0\
}\
.nocolbreak,\
div.columns li,\
div.columns dd dd {\
 -webkit-column-break-inside:avoid;\
 page-break-inside:avoid;\
 break-inside:avoid-column\
}\
.hlist dl,\
.hlist ol,\
.hlist ul {\
 margin:0;\
 padding:0\
}\
.hlist dd,\
.hlist dt,\
.hlist li {\
 margin:0;\
 display:inline\
}\
.hlist.inline,\
.hlist.inline dl,\
.hlist.inline ol,\
.hlist.inline ul,\
.hlist dl dl,\
.hlist dl ol,\
.hlist dl ul,\
.hlist ol dl,\
.hlist ol ol,\
.hlist ol ul,\
.hlist ul dl,\
.hlist ul ol,\
.hlist ul ul {\
 display:inline\
}\
.hlist .mw-empty-li {\
 display:none\
}\
.hlist dt:after {\
 content:\":\"\
}\
.hlist dd:after,\
.hlist li:after {\
 content:\" · \";\
 font-weight:bold\
}\
.hlist dd:last-child:after,\
.hlist dt:last-child:after,\
.hlist li:last-child:after {\
 content:none\
}\
.hlist dd dd:first-child:before,\
.hlist dd dt:first-child:before,\
.hlist dd li:first-child:before,\
.hlist dt dd:first-child:before,\
.hlist dt dt:first-child:before,\
.hlist dt li:first-child:before,\
.hlist li dd:first-child:before,\
.hlist li dt:first-child:before,\
.hlist li li:first-child:before {\
 content:\" (\";\
 font-weight:normal\
}\
.hlist dd dd:last-child:after,\
.hlist dd dt:last-child:after,\
.hlist dd li:last-child:after,\
.hlist dt dd:last-child:after,\
.hlist dt dt:last-child:after,\
.hlist dt li:last-child:after,\
.hlist li dd:last-child:after,\
.hlist li dt:last-child:after,\
.hlist li li:last-child:after {\
 content:\")\";\
 font-weight:normal\
}\
.hlist ol {\
 counter-reset:listitem\
}\
.hlist ol > li {\
 counter-increment:listitem\
}\
.hlist ol > li:before {\
 content:\" \" counter(listitem) \"a0\"\
}\
.hlist dd ol > li:first-child:before,\
.hlist dt ol > li:first-child:before,\
.hlist li ol > li:first-child:before {\
 content:\" (\" counter(listitem) \"a0\"\
}\
.plainlist ol,\
.plainlist ul {\
 line-height:inherit;\
 list-style:none none;\
 margin:0\
}\
.plainlist ol li,\
.plainlist ul li {\
 margin-bottom:0\
}\
.navbox {\
 box-sizing:border-box;\
 border:1px solid #a2a9b1;\
 width:100%;\
 clear:both;\
 font-size:88%;\
 text-align:center;\
 padding:1px;\
 margin:1em auto 0\
}\
.navbox .navbox {\
 margin-top:0\
}\
.navbox + .navbox {\
 margin-top:-1px\
}\
.navbox-inner,\
.navbox-subgroup {\
 width:100%\
}\
.navbox-group,\
.navbox-title,\
.navbox-abovebelow {\
 padding:0.25em 1em;\
 line-height:1.5em;\
 text-align:center\
}\
th.navbox-group {\
 white-space:nowrap;\
 text-align:right\
}\
.navbox,\
.navbox-subgroup {\
 background-color:#fdfdfd\
}\
.navbox-list {\
 line-height:1.5em;\
 border-color:#fdfdfd\
}\
tr + tr > .navbox-abovebelow,\
tr + tr > .navbox-group,\
tr + tr > .navbox-image,\
tr + tr > .navbox-list {\
 border-top:2px solid #fdfdfd\
}\
.navbox th,\
.navbox-title {\
 background-color:#ccccff\
}\
.navbox-abovebelow,\
th.navbox-group,\
.navbox-subgroup .navbox-title {\
 background-color:#ddddff\
}\
.navbox-subgroup .navbox-group,\
.navbox-subgroup .navbox-abovebelow {\
 background-color:#e6e6ff\
}\
.navbox-even {\
 background-color:#f7f7f7\
}\
.navbox-odd {\
 background-color:transparent\
}\
.navbox .hlist td dl,\
.navbox .hlist td ol,\
.navbox .hlist td ul,\
.navbox td.hlist dl,\
.navbox td.hlist ol,\
.navbox td.hlist ul {\
 padding:0.125em 0\
}\
.navbar {\
 display:inline;\
 font-size:88%;\
 font-weight:normal\
}\
.navbar ul {\
 display:inline;\
 white-space:nowrap\
}\
#WikiaPage-content .navbar ul {\
 line-height:inherit\
}\
.navbar li {\
 word-spacing:-0.125em\
}\
.navbar.mini li abbr[title] {\
 font-variant:small-caps;\
 border-bottom:none;\
 text-decoration:none;\
 cursor:inherit\
}\
.portable-infobox .navbar {\
 font-size:100%\
}\
.navbox .navbar {\
 display:block;\
 font-size:100%\
}\
.navbox-title .navbar {\
 float:left;\
 text-align:left;\
 margin-right:0.5em\
}\
.collapseButton {\
 float:right;\
 font-weight:normal;\
 margin-left:0.5em;\
 text-align:right;\
 width:auto\
}\
.mw-parser-output .mw-collapsible-toggle {\
 font-weight:normal;\
 text-align:right;\
 padding-right:0.2em;\
 padding-left:0.2em\
}\
.mw-collapsible-leftside-toggle .mw-collapsible-toggle {\
 float:left;\
 text-align:left\
}\
.portable-infobox {\
 border:1px solid #a2a9b1;\
 border-spacing:3px;\
 background-color:#f8f9fa;\
 color:black;\
 margin:0.5em 0 0.5em 1em;\
 padding:0.2em;\
 float:right;\
 clear:right;\
 font-size:88%;\
 line-height:1.5em\
}\
.portable-infobox caption {\
 font-size:125%;\
 font-weight:bold;\
 padding:0.2em;\
 text-align:center\
}\
.portable-infobox td,\
.portable-infobox th {\
 vertical-align:top;\
 text-align:left\
}\
.portable-infobox.bordered {\
 border-collapse:collapse\
}\
.portable-infobox.bordered td,\
.portable-infobox.bordered th {\
 border:1px solid #a2a9b1\
}\
.portable-infobox.bordered .borderless td,\
.portable-infobox.bordered .borderless th {\
 border:0\
}\
.portable-infobox.sisterproject {\
 width:20em;\
 font-size:90%\
}\
.portable-infobox.standard-talk {\
 border:1px solid #c0c090;\
 background-color:#f8eaba\
}\
.portable-infobox.standard-talk.bordered td,\
.portable-infobox.standard-talk.bordered th {\
 border:1px solid #c0c090\
}\
.portable-infobox.bordered .mergedtoprow td,\
.portable-infobox.bordered .mergedtoprow th {\
 border:0;\
 border-top:1px solid #a2a9b1;\
 border-right:1px solid #a2a9b1\
}\
.portable-infobox.bordered .mergedrow td,\
.portable-infobox.bordered .mergedrow th {\
 border:0;\
 border-right:1px solid #a2a9b1\
}\
.portable-infobox.geography {\
 border-collapse:collapse;\
 line-height:1.2em;\
 font-size:90%\
}\
.infoportable-infoboxbox.geography td,\
.portable-infobox.geography th {\
 border-top:1px solid #a2a9b1;\
 padding:0.4em 0.6em 0.4em 0.6em\
}\
.portable-infobox.geography .mergedtoprow td,\
.portable-infobox.geography .mergedtoprow th {\
 border-top:1px solid #a2a9b1;\
 padding:0.4em 0.6em 0.2em 0.6em\
}\
.portable-infobox.geography .mergedrow td,\
.portable-infobox.geography .mergedrow th {\
 border:0;\
 padding:0 0.6em 0.2em 0.6em\
}\
.portable-infobox.geography .mergedbottomrow td,\
.portable-infobox.geography .mergedbottomrow th {\
 border-top:0;\
 border-bottom:1px solid #a2a9b1;\
 padding:0 0.6em 0.4em 0.6em\
}\
.portable-infobox.geography .maptable td,\
.portable-infobox.geography .maptable th {\
 border:0;\
 padding:0\
}\
.wikitable.plainrowheaders th[scope=row] {\
 font-weight:normal;\
 text-align:left\
}\
.wikitable td ul,\
.wikitable td ol,\
.wikitable td dl {\
 text-align:left\
}\
.toc.hlist ul,\
#toc.hlist ul,\
.wikitable.hlist td ul,\
.wikitable.hlist td ol,\
.wikitable.hlist td dl {\
 text-align:inherit\
}\
div.listenlist {\
 background:url(//upload.wikimedia.org/wikipedia/commons/4/47/Sound-icon.svg) no-repeat scroll 0 0 transparent;\
 background-size:30px;\
 padding-left:40px\
}\
table.mw-hiero-table td {\
 vertical-align:middle\
}\
div.medialist {\
 min-height:50px;\
 margin:1em;\
 background-position:top left;\
 background-repeat:no-repeat\
}\
div.medialist ul {\
 list-style-type:none;\
 list-style-image:none;\
 margin:0\
}\
div.medialist ul li {\
 padding-bottom:0.5em\
}\
div.medialist ul li li {\
 font-size:91%;\
 padding-bottom:0\
}\
.mw-parser-output a[href$=\".pdf\"].external,\
.mw-parser-output a[href*=\".pdf?\"].external,\
.mw-parser-output a[href*=\".pdf#\"].external,\
.mw-parser-output a[href$=\".PDF\"].external,\
.mw-parser-output a[href*=\".PDF?\"].external,\
.mw-parser-output a[href*=\".PDF#\"].external {\
 background:url(//upload.wikimedia.org/wikipedia/commons/2/23/Icons-mini-file_acrobat.gif) no-repeat right;\
 padding-right:18px\
}\
.messagebox {\
 border:1px solid #a2a9b1;\
 background-color:#f8f9fa;\
 width:80%;\
 margin:0 auto 1em auto;\
 padding:.2em\
}\
.messagebox.merge {\
 border:1px solid #c0b8cc;\
 background-color:#f0e5ff;\
 text-align:center\
}\
.messagebox.cleanup {\
 border:1px solid #9f9fff;\
 background-color:#efefff;\
 text-align:center\
}\
.messagebox.standard-talk {\
 border:1px solid #c0c090;\
 background-color:#f8eaba;\
 margin:4px auto\
}\
.mbox-inside .standard-talk,\
.messagebox.nested-talk {\
 border:1px solid #c0c090;\
 background-color:#f8eaba;\
 width:100%;\
 margin:2px 0;\
 padding:2px\
}\
.messagebox.small {\
 width:238px;\
 font-size:85%;\
 float:right;\
 clear:both;\
 margin:0 0 1em 1em;\
 line-height:1.25em\
}\
.messagebox.small-talk {\
 width:238px;\
 font-size:85%;\
 float:right;\
 clear:both;\
 margin:0 0 1em 1em;\
 line-height:1.25em;\
 background-color:#f8eaba\
}\
th.mbox-text,\
td.mbox-text {\
 border:none;\
 padding:0.25em 0.9em;\
 width:100%\
}\
td.mbox-image {\
 border:none;\
 padding:2px 0 2px 0.9em;\
 text-align:center\
}\
td.mbox-imageright {\
 border:none;\
 padding:2px 0.9em 2px 0;\
 text-align:center\
}\
td.mbox-empty-cell {\
 border:none;\
 padding:0;\
 width:1px\
}\
table.ambox {\
 margin:0 10%;\
 border:1px solid #a2a9b1;\
 border-left:10px solid #36c;\
 background-color:#fbfbfb;\
 box-sizing:border-box\
}\
table.ambox + table.ambox {\
 margin-top:-1px\
}\
.ambox th.mbox-text,\
.ambox td.mbox-text {\
 padding:0.25em 0.5em\
}\
.ambox td.mbox-image {\
 padding:2px 0 2px 0.5em\
}\
.ambox td.mbox-imageright {\
 padding:2px 0.5em 2px 0\
}\
table.ambox-notice {\
 border-left:10px solid #36c\
}\
table.ambox-speedy {\
 border-left:10px solid #b32424;\
 background-color:#fee7e6\
}\
table.ambox-delete {\
 border-left:10px solid #b32424\
}\
table.ambox-content {\
 border-left:10px solid #f28500\
}\
table.ambox-style {\
 border-left:10px solid #fc3\
}\
table.ambox-move {\
 border-left:10px solid #9932cc\
}\
table.ambox-protection {\
 border-left:10px solid #a2a9b1\
}\
table.imbox {\
 margin:4px 10%;\
 border-collapse:collapse;\
 border:3px solid #36c;\
 background-color:#fbfbfb;\
 box-sizing:border-box\
}\
.imbox .mbox-text .imbox {\
 margin:0 -0.5em;\
 display:block\
}\
.mbox-inside .imbox {\
 margin:4px\
}\
table.imbox-notice {\
 border:3px solid #36c\
}\
table.imbox-speedy {\
 border:3px solid #b32424;\
 background-color:#fee7e6\
}\
table.imbox-delete {\
 border:3px solid #b32424\
}\
table.imbox-content {\
 border:3px solid #f28500\
}\
table.imbox-style {\
 border:3px solid #fc3\
}\
table.imbox-move {\
 border:3px solid #9932cc\
}\
table.imbox-protection {\
 border:3px solid #a2a9b1\
}\
table.imbox-license {\
 border:3px solid #88a;\
 background-color:#f7f8ff\
}\
table.imbox-featured {\
 border:3px solid #cba135\
}\
table.cmbox {\
 margin:3px 10%;\
 border-collapse:collapse;\
 border:1px solid #a2a9b1;\
 background-color:#dfe8ff;\
 box-sizing:border-box\
}\
table.cmbox-notice {\
 background-color:#d8e8ff\
}\
table.cmbox-speedy {\
 margin-top:4px;\
 margin-bottom:4px;\
 border:4px solid #b32424;\
 background-color:#ffdbdb\
}\
table.cmbox-delete {\
 background-color:#ffdbdb\
}\
table.cmbox-content {\
 background-color:#ffe7ce\
}\
table.cmbox-style {\
 background-color:#fff9db\
}\
table.cmbox-move {\
 background-color:#e4d8ff\
}\
table.cmbox-protection {\
 background-color:#efefe1\
}\
table.ombox {\
 margin:4px 10%;\
 border-collapse:collapse;\
 border:1px solid #a2a9b1;\
 background-color:#f8f9fa;\
 box-sizing:border-box\
}\
table.ombox-notice {\
 border:1px solid #a2a9b1\
}\
table.ombox-speedy {\
 border:2px solid #b32424;\
 background-color:#fee7e6\
}\
table.ombox-delete {\
 border:2px solid #b32424\
}\
table.ombox-content {\
 border:1px solid #f28500\
}\
table.ombox-style {\
 border:1px solid #fc3\
}\
table.ombox-move {\
 border:1px solid #9932cc\
}\
table.ombox-protection {\
 border:2px solid #a2a9b1\
}\
table.tmbox {\
 margin:4px 10%;\
 border-collapse:collapse;\
 border:1px solid #c0c090;\
 background-color:#f8eaba;\
 min-width:80%;\
 box-sizing:border-box\
}\
.tmbox.mbox-small {\
 min-width:0\
}\
.mediawiki .mbox-inside .tmbox {\
 margin:2px 0;\
 width:100%\
}\
.mbox-inside .tmbox.mbox-small {\
 line-height:1.5em;\
 font-size:100%\
}\
table.tmbox-speedy {\
 border:2px solid #b32424;\
 background-color:#fee7e6\
}\
table.tmbox-delete {\
 border:2px solid #b32424\
}\
table.tmbox-content {\
 border:2px solid #f28500\
}\
table.tmbox-style {\
 border:2px solid #fc3\
}\
table.tmbox-move {\
 border:2px solid #9932cc\
}\
table.tmbox-protection,\
table.tmbox-notice {\
 border:1px solid #c0c090\
}\
table.dmbox {\
 clear:both;\
 margin:0.9em 1em;\
 border-top:1px solid #ccc;\
 border-bottom:1px solid #ccc;\
 background-color:transparent\
}\
table.fmbox {\
 clear:both;\
 margin:0.2em 0;\
 width:100%;\
 border:1px solid #a2a9b1;\
 background-color:#f8f9fa;\
 box-sizing:border-box\
}\
table.fmbox-system {\
 background-color:#f8f9fa\
}\
table.fmbox-warning {\
 border:1px solid #bb7070;\
 background-color:#ffdbdb\
}\
table.fmbox-editnotice {\
 background-color:transparent\
}\
div.mw-warning-with-logexcerpt,\
div.mw-lag-warn-high,\
div.mw-cascadeprotectedwarning,\
div#mw-protect-cascadeon,\
div.titleblacklist-warning,\
div.locked-warning {\
 clear:both;\
 margin:0.2em 0;\
 border:1px solid #bb7070;\
 background-color:#ffdbdb;\
 padding:0.25em 0.9em;\
 box-sizing:border-box\
}\
html body.mediawiki .mbox-small {\
 clear:right;\
 float:right;\
 margin:4px 0 4px 1em;\
 box-sizing:border-box;\
 width:238px;\
 font-size:88%;\
 line-height:1.25em\
}\
html body.mediawiki .mbox-small-left {\
 margin:4px 1em 4px 0;\
 box-sizing:border-box;\
 overflow:hidden;\
 width:238px;\
 border-collapse:collapse;\
 font-size:88%;\
 line-height:1.25em\
}\
.compact-ambox table .mbox-image,\
.compact-ambox table .mbox-imageright,\
.compact-ambox table .mbox-empty-cell {\
 display:none\
}\
.compact-ambox table.ambox {\
 border:none;\
 border-collapse:collapse;\
 background-color:transparent;\
 margin:0 0 0 1.6em !important;\
 padding:0 !important;\
 width:auto;\
 display:block\
}\
body.mediawiki .compact-ambox table.mbox-small-left {\
 font-size:100%;\
 width:auto;\
 margin:0\
}\
.compact-ambox table .mbox-text {\
 padding:0 !important;\
 margin:0 !important\
}\
.compact-ambox table .mbox-text-span {\
 display:list-item;\
 line-height:1.5em;\
 list-style-type:square;\
 list-style-image:url(//en.wikipedia.org/w/skins/MonoBook/resources/images/bullet.gif)\
}\
.skin-vector .compact-ambox table .mbox-text-span {\
 list-style-type:disc;\
 list-style-image:url(//en.wikipedia.org/w/skins/Vector/images/bullet-icon.svg);\
 list-style-image:url(//en.wikipedia.org/w/skins/Vector/images/bullet-icon.png)9\
}\
.compact-ambox .hide-when-compact {\
 display:none\
}\
.visualhide {\
 position:absolute;\
 left:-10000px;\
 top:auto;\
 width:1px;\
 height:1px;\
 overflow:hidden\
}\
.check-icon a.new {\
 display:none;\
 speak:none\
}\
.nounderlines a,\
.IPA a:link,\
.IPA a:visited {\
 text-decoration:none !important\
}\
div.NavFrame {\
 margin:0;\
 padding:4px;\
 border:1px solid #a2a9b1;\
 text-align:center;\
 border-collapse:collapse;\
 font-size:95%\
}\
div.NavFrame + div.NavFrame {\
 border-top-style:none;\
 border-top-style:hidden\
}\
div.NavPic {\
 background-color:#fff;\
 margin:0;\
 padding:2px;\
 float:left\
}\
div.NavFrame div.NavHead {\
 line-height:1.6em;\
 font-weight:bold;\
 background-color:#ccf;\
 position:relative\
}\
div.NavFrame p,\
div.NavFrame div.NavContent,\
div.NavFrame div.NavContent p {\
 font-size:100%\
}\
div.NavEnd {\
 margin:0;\
 padding:0;\
 line-height:1px;\
 clear:both\
}\
a.NavToggle {\
 position:absolute;\
 top:0;\
 right:3px;\
 font-weight:normal;\
 font-size:90%\
}\
.hatnote {\
 font-style:italic\
}\
.hatnote i {\
 font-style:normal\
}\
div.hatnote {\
 padding-left:1.6em;\
 margin-bottom:0.5em\
}\
div.hatnote + div.hatnote {\
 margin-top:-0.5em\
}\
.listify td {\
 display:list-item\
}\
.listify tr {\
 display:block\
}\
.listify table {\
 display:block\
}\
.geo-default,\
.geo-dms,\
.geo-dec {\
 display:inline\
}\
.geo-nondefault,\
.geo-multi-punct {\
 display:none\
}\
.longitude,\
.latitude {\
 white-space:nowrap\
}\
div.user-block {\
 padding:5px;\
 margin-bottom:0.5em;\
 border:1px solid #a9a9a9;\
 background-color:#ffefd5\
}\
.nowrap,\
.nowraplinks a,\
.nowraplinks .selflink {\
 white-space:nowrap\
}\
.nowrap pre {\
 white-space:pre\
}\
.wrap,\
.wraplinks a {\
 white-space:normal\
}\
.template-documentation {\
 clear:both;\
 margin:1em 0 0 0;\
 border:1px solid #a2a9b1;\
 background-color:#ecfcf4;\
 padding:1em\
}\
#wpUploadDescription {\
 height:13em\
}\
.thumbinner {\
 min-width:100px\
}\
#mw-subcategories,\
#mw-pages,\
#mw-category-media,\
#filehistory,\
#wikiPreview,\
#wikiDiff {\
 clear:both\
}\
.wpb .wpb-header {\
 display:none\
}\
.wpbs-inner .wpb .wpb-header {\
 display:block\
}\
.wpbs-inner .wpb .wpb-header {\
 display:table-row\
}\
.wpbs-inner .wpb-outside {\
 display:none\
}\
.mw-tag-markers {\
 font-style:italic;\
 font-size:90%\
}\
.sysop-show,\
.templateeditor-show,\
.extendedmover-show,\
.patroller-show,\
.extendedconfirmed-show,\
.autoconfirmed-show,\
.user-show {\
 display:none\
}\
.ve-ui-mwNoticesPopupTool-item .editnotice-redlink,\
.ve-ui-mwNoticesPopupTool-item .mbox-image,\
.ve-ui-mwNoticesPopupTool-item .mbox-imageright {\
 display:none !important\
}\
ul.permissions-errors > li {\
 list-style:none none\
}\
ul.permissions-errors {\
 margin:0\
}\
.times-serif,\
span.texhtml {\
 font-family:\"Nimbus Roman No9 L\",\"Times New Roman\",Times,serif;\
 font-size:118%;\
 line-height:1\
}\
span.texhtml {\
 white-space:nowrap\
}\
span.texhtml span.texhtml {\
 font-size:100%\
}\
span.mwe-math-mathml-inline {\
 font-size:118%\
}\
.digits,\
.texhtml {\
 -moz-font-feature-settings:\"lnum\",\"tnum\",\"kern\" 0;\
 -webkit-font-feature-settings:\"lnum\",\"tnum\",\"kern\" 0;\
 font-feature-settings:\"lnum\",\"tnum\",\"kern\" 0;\
 font-variant-numeric:lining-nums tabular-nums;\
 font-kerning:none\
}\
.mwe-math-fallback-image-display,\
.mwe-math-mathml-display {\
 margin-left:1.6em !important;\
 margin-top:0.6em;\
 margin-bottom:0.6em\
}\
.mwe-math-mathml-display math {\
 display:inline\
}\
table#mw-prefixindex-list-table,\
table#mw-prefixindex-nav-table {\
 width:98%\
}\
.portal-column-left {\
 float:left;\
 width:50%\
}\
.portal-column-right {\
 float:right;\
 width:49%\
}\
.portal-column-left-wide {\
 float:left;\
 width:60%\
}\
.portal-column-right-narrow {\
 float:right;\
 width:39%\
}\
.portal-column-left-extra-wide {\
 float:left;\
 width:70%\
}\
.portal-column-right-extra-narrow {\
 float:right;\
 width:29%\
}\
@media only screen and (max-width:800px) {\
 .portal-column-left,\
 .portal-column-right,\
 .portal-column-left-wide,\
 .portal-column-right-narrow,\
 .portal-column-left-extra-wide,\
 .portal-column-right-extra-narrow {\
  float:inherit;\
  width:inherit \
 }\
}\
#bodyContent .letterhead {\
 background-image:url(//upload.wikimedia.org/wikipedia/commons/e/e0/Tan-page-corner.png);\
 background-repeat:no-repeat;\
 padding:2em;\
 background-color:#faf9f2\
}\
td .sortkey,\
th .sortkey {\
 display:none;\
 speak:none\
}\
.inputbox-hidecheckboxes form .inputbox-element,\
.inputbox-hidecheckboxes .mw-ui-checkbox {\
 display:none !important\
}\
.k-player .k-attribution {\
 visibility:hidden\
}\
.PopUpMediaTransform a .play-btn-large {\
 margin:0;\
 top:auto;\
 right:auto;\
 bottom:0;\
 left:0\
}\
.flaggedrevs_draft_synced,\
.flaggedrevs_stable_synced {\
 display:none\
}\
.bordered-images img {\
 border:solid #ddd 1px\
}\
@media screen {\
 #content .gallerybox div.thumb {\
  background-color:#f8f9fa \
 }\
 .gallerybox .thumb img {\
  background:#fff url(//upload.wikimedia.org/wikipedia/commons/5/5d/Checker-16x16.png) repeat \
 }\
 .ns-0 .gallerybox .thumb img,\
 .ns-2 .gallerybox .thumb img,\
 .ns-100 .gallerybox .thumb img,\
 .nochecker .gallerybox .thumb img {\
  background-image:none \
 }\
}\
@media screen {\
 #siteSub {\
  display:block \
 }\
}\
.page-Main_Page #deleteconfirm,\
.page-Main_Page #t-cite,\
.page-Main_Page #footer-info-lastmod,\
.action-view.page-Main_Page #siteSub,\
.action-view.page-Main_Page #contentSub,\
.action-view.page-Main_Page .firstHeading {\
 display:none !important\
}\
#coordinates {\
 position:absolute;\
 top:0;\
 right:0;\
 float:right;\
 margin:0;\
 padding:0;\
 line-height:1.5em;\
 text-align:right;\
 text-indent:0;\
 font-size:85%;\
 text-transform:none;\
 white-space:nowrap\
}\
.ve-ce-surface-enabled #coordinates {\
 margin-right:2em;\
 margin-top:-1em\
}\
.mw-indicator #coordinates {\
 position:absolute;\
 top:3em;\
 right:0;\
 line-height:1.6;\
 text-align:right;\
 font-size:92%;\
 white-space:nowrap\
}\
div.flaggedrevs_short {\
 position:absolute;\
 top:-3em;\
 right:100px;\
 z-index:1\
}\
#siteSub {\
 font-size:92%\
}\
#WikiaPage .mw-indicators {\
 padding-top:0.4em\
}\
@media print {\
 .ns--1 .ambox,\
 .ns-0 .ambox,\
 .ns--1 .navbox,\
 .ns-0 .navbox,\
 .ns--1 .vertical-navbox,\
 .ns-0 .vertical-navbox,\
 .ns--1 .portable-infobox.sisterproject,\
 .ns-0 .portable-infobox.sisterproject,\
 .ns--1 .hatnote,\
 .ns-0 .hatnote,\
 .ns--1 .dablink,\
 .ns-0 .dablink,\
 .ns--1 .metadata,\
 .ns-0 .metadata,\
 .sistersitebox,\
 .editlink,\
 .navbar,\
 a.NavToggle,\
 span.collapseButton,\
 span.mw-collapsible-toggle,\
 th .sortkey,\
 td .sortkey,\
 #mw-revision-nav {\
  display:none !important \
 }\
 .nourlexpansion a.external.text:after,\
 .nourlexpansion a.external.autonumber:after {\
  display:none !important \
 }\
 table.collapsible tr,\
 div.NavPic,\
 div.NavContent {\
  display:block !important \
 }\
 table.collapsible tr {\
  display:table-row !important \
 }\
 .mw-parser-output .mw-collapsed .mw-collapsible-content {\
  display:block !important \
 }\
 .mw-parser-output table.mw-collapsed > * > tr {\
  display:table-row !important \
 }\
 .mw-parser-output ol.mw-collapsed > li,\
 .mw-parser-output ul.mw-collapsed > li {\
  display:list-item !important \
 }\
 #firstHeading {\
  margin:0 \
 }\
 #content a.external.text:after,\
 #content a.external.autonumber:after {\
  word-wrap:break-word \
 }\
 .portable-infobox {\
  border:solid 1px #aaa;\
  background-color:#fff;\
  border-spacing:0;\
  border-collapse:collapse;\
  width:180pt !important \
 }\
 .portable-infobox > * > tr > td,\
 .portable-infobox > * > tr > th {\
  padding:2px 5px;\
  border-bottom:1px solid #EAECF0 \
 }\
 .portable-infobox a,\
 .portable-infobox > * > tr:last-child > th,\
 .portable-infobox > * > tr:last-child > td {\
  border:0 \
 }\
 .refbegin a,\
 .references a,\
 .reference a {\
  color:black !important \
 }\
 .reference a {\
  border-bottom:0 \
 }\
 ol.references,\
 div.reflist,\
 div.refbegin,\
 cite * {\
  font-size:inherit !important \
 }\
 .refbegin li,\
 .references li {\
  color:#666;\
  line-height:14pt \
 }\
 .printfooter {\
  clear:both \
 }\
}\
svg {\
 display: none !important;\
}\
.wds-community-header {\
 background-image: url() !important;\
}\
.wds-community-header ul {\
 list-style: none none;\
 margin-left:0px;\
}\
#InvisibleHighImpactWrapper,\
.wds-global-navigation__links,\
.wds-global-navigation__search-toggle,\
ul.tools,\
#WikiaRail,\
#notifications,\
.wds-global-navigation__start-a-wiki,\
.wds-notifications__dropdown-content,\
.page-header__categories,\
.WikiaSiteWrapper > h2 {\
 display: none;\
}\
.wds-community-header__wordmark img {\
 width: 160px;\
 height: auto;\
}\
.wds-global-navigation__user-menu ul li {\
  display: inline !important;\
}\
.wds-global-navigation__search-input-wrapper {\
  float:right;\
  margin-top:-25px;\
}\
#WikiaPage {\
  margin-top: 60px;\
}\
/*\
Known issues:\
Infoboxes don’t display properly\
Restyle global navigation\
*/\
/*You can't get rid of good wiki skins that easily, WIKIA!*/\
";

if (!document.URL.endsWith("useskin=oasis")) {
	//document.querySelectorAll('[style]')
	//  .forEach(el => el.removeAttribute('style'));

	document.querySelectorAll('link[rel="stylesheet"]')
	  .forEach(el => el.parentNode.removeChild(el));

	document.querySelectorAll('style')
	  .forEach(el => el.parentNode.removeChild(el));

	var para = document.createElement("style");
	var node = document.createTextNode(vectorcss);
	para.appendChild(node);

	var element = document.getElementById("WikiaPage");
	element.appendChild(para);
}

//var para = document.createElement("div");
//var element = document.getElementById("WikiaPage");
//element.appendChild(para);
//para.innerHTML = '<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/pythoncoder01/wikia-vector/master/vector.css"/>';
