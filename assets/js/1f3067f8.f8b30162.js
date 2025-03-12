"use strict";(self.webpackChunktest_prufung=self.webpackChunktest_prufung||[]).push([[660],{5706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"Netzwerk/ip-adresse","title":"Internet Protocol (IP)","description":"Das Internet Protocol (IP) ist das zentrale Kommunikationsprotokoll des Internets. Es erm\xf6glicht die eindeutige Identifizierung und Adressierung von Ger\xe4ten in Netzwerken. IP arbeitet auf der Vermittlungsschicht (Layer 3) des OSI-Modells und bestimmt, wie Datenpakete geroutet werden.","source":"@site/docs/Netzwerk/ip-adresse.mdx","sourceDirName":"Netzwerk","slug":"/Netzwerk/ip-adresse","permalink":"/test-fisi/docs/Netzwerk/ip-adresse","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Netzwerk/ip-adresse.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Internet Protocol (IP)"},"sidebar":"tutorialSidebar","previous":{"title":"TODO","permalink":"/test-fisi/docs/TODO"},"next":{"title":"MAC-Adresse","permalink":"/test-fisi/docs/Netzwerk/mac-adresse"}}');var i=s(4848),t=s(8453);const d={sidebar_position:1,title:"Internet Protocol (IP)"},l="Internet Protocol (IP)",c={},h=[{value:"IPv4 und IPv6",id:"ipv4-und-ipv6",level:2},{value:"IPv4",id:"ipv4",level:3},{value:"IPv6",id:"ipv6",level:3},{value:"IPv6-Adressen k\xfcrzen",id:"ipv6-adressen-k\xfcrzen",level:3},{value:"Adressierungstypen",id:"adressierungstypen",level:2},{value:"IPv4-Adressklassen",id:"ipv4-adressklassen",level:2},{value:"IPv4-Subnetting",id:"ipv4-subnetting",level:2},{value:"Vergleich IPv4 vs. IPv6",id:"vergleich-ipv4-vs-ipv6",level:2},{value:"Quellen",id:"quellen",level:2}];function o(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"internet-protocol-ip",children:"Internet Protocol (IP)"})}),"\n",(0,i.jsxs)(n.p,{children:["Das ",(0,i.jsx)(n.strong,{children:"Internet Protocol (IP)"})," ist das zentrale Kommunikationsprotokoll des Internets. Es erm\xf6glicht die eindeutige Identifizierung und Adressierung von Ger\xe4ten in Netzwerken. IP arbeitet auf der Vermittlungsschicht (Layer 3) des ",(0,i.jsx)(n.strong,{children:"OSI-Modells"})," und bestimmt, wie Datenpakete geroutet werden."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"ipv4-und-ipv6",children:"IPv4 und IPv6"}),"\n",(0,i.jsx)(n.h3,{id:"ipv4",children:"IPv4"}),"\n",(0,i.jsxs)(n.p,{children:["IPv4 ist die am weitesten verbreitete Version von IP und verwendet ",(0,i.jsx)(n.strong,{children:"32-Bit-Adressen"}),", die in vier Dezimalzahlen (0-255) geschrieben werden, z. B. ",(0,i.jsx)(n.code,{children:"192.168.1.1"}),". Es gibt ca. ",(0,i.jsx)(n.strong,{children:"4,3 Milliarden"})," m\xf6gliche IPv4-Adressen."]}),"\n",(0,i.jsx)(n.h3,{id:"ipv6",children:"IPv6"}),"\n",(0,i.jsxs)(n.p,{children:["IPv6 wurde eingef\xfchrt, um die Adressknappheit von IPv4 zu beheben. Es nutzt ",(0,i.jsx)(n.strong,{children:"128-Bit-Adressen"}),", geschrieben in hexadezimaler Form, z. B. ",(0,i.jsx)(n.code,{children:"2001:0db8:85a3::8a2e:0370:7334"}),". Dies erm\xf6glicht ",(0,i.jsx)(n.strong,{children:"2^128 m\xf6gliche Adressen"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"ipv6-adressen-k\xfcrzen",children:"IPv6-Adressen k\xfcrzen"}),"\n",(0,i.jsx)(n.p,{children:"IPv6-Adressen k\xf6nnen gem\xe4\xdf folgender Regeln gek\xfcrzt werden:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["F\xfchrende Nullen in jedem Segment k\xf6nnen weggelassen werden (",(0,i.jsx)(n.code,{children:"2001:0db8:0000:0000:0000:ff00:0042:8329"})," \u2192 ",(0,i.jsx)(n.code,{children:"2001:db8:0:0:0:ff00:42:8329"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["L\xe4ngste zusammenh\xe4ngende ",(0,i.jsx)(n.code,{children:":0:"}),"-Bl\xf6cke k\xf6nnen durch ",(0,i.jsx)(n.code,{children:"::"})," ersetzt werden (nur einmal pro Adresse erlaubt):",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"2001:db8:0:0:0:ff00:42:8329"})," \u2192 ",(0,i.jsx)(n.code,{children:"2001:db8::ff00:42:8329"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"adressierungstypen",children:"Adressierungstypen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unicast"}),": Eine eindeutige Adresse f\xfcr eine einzelne Netzwerkverbindung."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Broadcast"})," (nur IPv4): Pakete werden an alle Ger\xe4te im Netzwerk gesendet (",(0,i.jsx)(n.code,{children:"255.255.255.255"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multicast"}),": Pakete werden an eine Gruppe von Ger\xe4ten gesendet (",(0,i.jsx)(n.code,{children:"224.0.0.0 - 239.255.255.255"})," f\xfcr IPv4, ",(0,i.jsx)(n.code,{children:"FF00::/8"})," f\xfcr IPv6)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Anycast"})," (nur IPv6): Mehrere Ger\xe4te teilen sich eine Adresse, wobei das n\xe4chstgelegene Ger\xe4t antwortet."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"ipv4-adressklassen",children:"IPv4-Adressklassen"}),"\n",(0,i.jsx)(n.p,{children:"IPv4-Adressen sind in verschiedene Klassen unterteilt:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Klasse"}),(0,i.jsx)(n.th,{children:"Netzwerkteil"}),(0,i.jsx)(n.th,{children:"Hostteil"}),(0,i.jsx)(n.th,{children:"Beispiel"}),(0,i.jsx)(n.th,{children:"Subnetzmaske"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"A"}),(0,i.jsx)(n.td,{children:"8 Bit"}),(0,i.jsx)(n.td,{children:"24 Bit"}),(0,i.jsx)(n.td,{children:"10.0.0.0"}),(0,i.jsx)(n.td,{children:"255.0.0.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"B"}),(0,i.jsx)(n.td,{children:"16 Bit"}),(0,i.jsx)(n.td,{children:"16 Bit"}),(0,i.jsx)(n.td,{children:"172.16.0.0"}),(0,i.jsx)(n.td,{children:"255.255.0.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"C"}),(0,i.jsx)(n.td,{children:"24 Bit"}),(0,i.jsx)(n.td,{children:"8 Bit"}),(0,i.jsx)(n.td,{children:"192.168.1.0"}),(0,i.jsx)(n.td,{children:"255.255.255.0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Klassen D und E sind f\xfcr Multicast bzw. experimentelle Zwecke reserviert."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"ipv4-subnetting",children:"IPv4-Subnetting"}),"\n",(0,i.jsx)(n.p,{children:"Subnetting unterteilt Netzwerke in kleinere Subnetze, um die IP-Adressverwaltung zu optimieren."}),"\n",(0,i.jsxs)(n.p,{children:["Beispiel:",(0,i.jsx)(n.br,{}),"\n","Ein Unternehmen ben\xf6tigt 16 Subnetze in einem ",(0,i.jsx)(n.code,{children:"192.168.1.0/24"}),"-Netz.",(0,i.jsx)(n.br,{}),"\n","Die Subnetzmaske wird auf ",(0,i.jsx)(n.code,{children:"/28"})," gesetzt:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Subnetz 1"}),": ",(0,i.jsx)(n.code,{children:"192.168.1.0/28"})," (14 Hosts, da 2 f\xfcr Netz- und Broadcastadresse reserviert sind)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Subnetz 2"}),": ",(0,i.jsx)(n.code,{children:"192.168.1.16/28"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u2026 bis ",(0,i.jsx)(n.code,{children:"192.168.1.240/28"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"vergleich-ipv4-vs-ipv6",children:"Vergleich IPv4 vs. IPv6"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Merkmal"}),(0,i.jsx)(n.th,{children:"IPv4"}),(0,i.jsx)(n.th,{children:"IPv6"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adressl\xe4nge"}),(0,i.jsx)(n.td,{children:"32 Bit"}),(0,i.jsx)(n.td,{children:"128 Bit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adressanzahl"}),(0,i.jsx)(n.td,{children:"~4,3 Milliarden"}),(0,i.jsx)(n.td,{children:"~340 Sextillionen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adressnotation"}),(0,i.jsxs)(n.td,{children:["Dezimal (z. B. ",(0,i.jsx)(n.code,{children:"192.168.1.1"}),")"]}),(0,i.jsxs)(n.td,{children:["Hexadezimal (",(0,i.jsx)(n.code,{children:"2001:db8::1"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Broadcast"}),(0,i.jsx)(n.td,{children:"Ja"}),(0,i.jsx)(n.td,{children:"Nein (ersetzt durch Multicast)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Sicherheit"}),(0,i.jsx)(n.td,{children:"Keine integrierte Verschl\xfcsselung"}),(0,i.jsx)(n.td,{children:"Integriertes IPsec"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Konfiguration"}),(0,i.jsx)(n.td,{children:"Manuell oder DHCP"}),(0,i.jsx)(n.td,{children:"Automatische Konfiguration"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"quellen",children:"Quellen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.cloudflare.com/1.1.1.1/ip-addresses/",children:"Cloudflare - IP adresses, 12.03.2025"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cloudflare.com/de-de/learning/network-layer/what-is-a-subnet/",children:"Cloudflare - Was ist ein Subnetz, 12.03.2025"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);