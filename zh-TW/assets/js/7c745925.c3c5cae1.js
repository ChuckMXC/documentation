(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[321],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||n;return a?o.createElement(m,l(l({ref:t},u),{},{components:a})):o.createElement(m,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7796:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var o=a(2122),r=a(9756),n=(a(7294),a(3905)),l=["components"],s={id:"tutorials-nodes-collators-setup",title:"Setup Collator Node",sidebar_label:"Setup Collator Node"},i=void 0,c={unversionedId:"tutorials/tutorials-nodes-collators-setup",id:"tutorials/tutorials-nodes-collators-setup",isDocsHomePage:!1,title:"Setup Collator Node",description:"How do you setup an Collator Node?",source:"@site/docs/tutorials/tutorials-nodes-collators-setup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-nodes-collators-setup",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-collators-setup",editUrl:"https://github.com/DataHighway-DHX/documentation/edit/master/docs/tutorials/tutorials-nodes-collators-setup.md",version:"current",frontMatter:{id:"tutorials-nodes-collators-setup",title:"Setup Collator Node",sidebar_label:"Setup Collator Node"},sidebar:"tutorialSidebar",previous:{title:"Setup Rococo Parachain Testnet (Spreehafen)",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local"},next:{title:"Runtime Upgrade",permalink:"/zh-TW/docs/tutorials/tutorials-runtime-upgrade"}},u=[{value:"How do you setup an Collator Node?",id:"how-do-you-setup-an-collator-node",children:[{value:"Provisioning a server",id:"provisioning-a-server",children:[]},{value:"Installing DataHighway and setting it up as a system service",id:"installing-datahighway-and-setting-it-up-as-a-system-service",children:[]},{value:"Set up the node as a system service.",id:"set-up-the-node-as-a-system-service",children:[]},{value:"Set Session Keys",id:"set-session-keys",children:[]},{value:"Register as a Collator candidate",id:"register-as-a-collator-candidate",children:[]}]}],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-do-you-setup-an-collator-node"},"How do you setup an Collator Node?"),(0,n.kt)("p",null,"This guide covers how to set up a DataHighway Collator Node on the Tanganika Network."),(0,n.kt)("h3",{id:"provisioning-a-server"},"Provisioning a server"),(0,n.kt)("p",null,"Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc."),(0,n.kt)("p",null,"We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions."),(0,n.kt)("p",null,"SSH into the server."),(0,n.kt)("h3",{id:"installing-datahighway-and-setting-it-up-as-a-system-service"},"Installing DataHighway and setting it up as a system service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y gcc libc6-dev\napt install -y cmake pkg-config libssl-dev git clang libclang-dev\n")),(0,n.kt)("p",null,"Prefetch SSH publickeys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keyscan -H github.com >> ~/.ssh/known_hosts\n")),(0,n.kt)("p",null,"Install rustup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.rustup.rs -sSf | sh -s -- -y\nsource $HOME/.cargo/env\nexport PATH=$HOME/.cargo/bin:$PATH\n")),(0,n.kt)("p",null,"Clone the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain"},"DataHighway-DHX/DataHighway-Parachain")," repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DataHighway-DHX/DataHighway-Parachain\ncd DataHighway-Parachain\n")),(0,n.kt)("p",null,"Checkout to latest release tag. At the time of updating this document, latest release was ",(0,n.kt)("inlineCode",{parentName:"p"},"3.6.0")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout v3.6.0\n")),(0,n.kt)("p",null,"Build packages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://getsubstrate.io -sSf | bash -s -- --fast && \\\n./scripts/init.sh\n")),(0,n.kt)("p",null,"To start your collator node you need to use the same binary that was used to start the first collator node, which has been stored in the $fullprojectpath/res/kusama/datahighway-collator.tar.gz."),(0,n.kt)("p",null,"Unzip that file into the root directory of the DataHighway-DHX/DataHighway-Parachain"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gunzip -c ./res/kusama/datahighway-collator.tar.gz | tar xopf -\nmv datahighway-collator ./res/kusama\n")),(0,n.kt)("h3",{id:"set-up-the-node-as-a-system-service"},"Set up the node as a system service."),(0,n.kt)("p",null,"To do this, navigate into the root directory of the DataHighway-DHX/DataHighway-Parachain repo and execute the following to create the service configuration file.\nReplace the values for keys starting with $ to suit your own collator node"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  echo '[Unit]'\n  echo 'Description=DataHighway'\n  echo '[Service]'\n  echo 'Type=simple'\n  echo 'WorkingDirectory=$fullprojectpath'\n  echo 'ExecStart=$fullprojectpath/res/kusama/datahighway-collator --collator --base-path $fullprojectpath/.local/share/datahighway-collator --chain $fullprojectpath/res/kusama/kusama-parachain-raw.json --name $nameofyourcollatornode  --force-authoring --port 40333 --rpc-port 9933 --ws-port 9744 --bootnodes $dhxbootnode --unsafe-ws-external --unsafe-rpc-external --rpc-cors=all --rpc-methods=Unsafe -- --execution wasm --chain $fullprojectpath/res/kusama/kusama.json --port 30333 --ws-port 9944'\n  echo '[Install]'\n  echo 'WantedBy=multi-user.target'\n} > /etc/systemd/system/datahighway.service\n")),(0,n.kt)("p",null,"Where: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$dhxbootnode = request this from DHX team through Discord"),(0,n.kt)("li",{parentName:"ul"},"$fullprojectpath = needs to be the full path to your DataHighway-Parachain project which you cloned. eg:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/home/foo/DataHighway-Parachain\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$nameofyourcollatornode = name of your collator node with the --name option which will be shown on telemetry (if supported), eg:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'--name "My collator"\n')),(0,n.kt)("p",null,"Double check that the config has been written to /etc/systemd/system/datahighway.service correctly."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cat /etc/systemd/system/datahighway.service\n")),(0,n.kt)("p",null,"Each time you change the service file you need to reload it"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n")),(0,n.kt)("p",null,"Then enable the service so it runs on startup, and then try to start it now:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable datahighway\nsystemctl start datahighway\n")),(0,n.kt)("p",null,"Check the status of the service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status datahighway\n")),(0,n.kt)("p",null,"You should see the Tanganika parachain collator node connecting to Kusama relay chain and other collator node peers and syncing the latest blocks. If you like to follow the log output, you can use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u datahighway.service -f\n")),(0,n.kt)("p",null,"Generate and add your Aura session keys (author ID) for your collator node to sign blocks with on Tanganika:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$fullprojectpath/res/kusama/datahighway-collator key insert --base-path $fullprojectpath/.local/share/datahighway-collator --chain $fullprojectpath/res/kusama/kusama-parachain-raw.json --scheme Sr25519 --suri $youraurasecretseed --key-type aura\n")),(0,n.kt)("h3",{id:"set-session-keys"},"Set Session Keys"),(0,n.kt)("p",null,"DataHighway is using ",(0,n.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/pallet_collator_selection/index.html"},"Collator Selection")," pallet for registering collators."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer"},"Tanganika Polkadot.js portal"),": ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Developper > Extrinsic"))),(0,n.kt)("li",{parentName:"ol"},"Select your ",(0,n.kt)("em",{parentName:"li"},"collator account")," and extrinsic type: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"session / setKeys"))),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"session keys"))," and set proof to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"0x00"))),(0,n.kt)("li",{parentName:"ol"},"Submit the transaction.")),(0,n.kt)("h3",{id:"register-as-a-collator-candidate"},"Register as a Collator candidate"),(0,n.kt)("p",null,"To start collating, you need to have 10 DHX tokens"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer"},"Tanganika Polkadot.js portal"),": ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Developper > Extrinsic"))),(0,n.kt)("li",{parentName:"ol"},"Select your ",(0,n.kt)("em",{parentName:"li"},"collator account")," and extrinsic type: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"CollatorSelection / registerAsCandidate"))),(0,n.kt)("li",{parentName:"ol"},"Submit the transaction.")),(0,n.kt)("p",null,"Onboarding takes place at ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"n+1"))," session. Once your collator is active, you will see your collator inside ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab every time you produce a block.\nYou will also see your collator in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Network > Collators")),"."))}h.isMDXComponent=!0}}]);