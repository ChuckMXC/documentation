(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[396],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,g=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2753:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=["components"],s={id:"tutorials-nodes-full-node-setup",title:"Setup Full Node",sidebar_label:"Setup Full Node"},i={unversionedId:"tutorials/tutorials-nodes-full-node-setup",id:"tutorials/tutorials-nodes-full-node-setup",isDocsHomePage:!1,title:"Setup Full Node",description:"How do you setup a Full Node?",source:"@site/docs/tutorials/tutorials-nodes-full-node-setup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-nodes-full-node-setup",permalink:"/de/docs/tutorials/tutorials-nodes-full-node-setup",editUrl:"https://github.com/DataHighway-DHX/documentation/docs/tutorials/tutorials-nodes-full-node-setup.md",version:"current",sidebar_label:"Setup Full Node",frontMatter:{id:"tutorials-nodes-full-node-setup",title:"Setup Full Node",sidebar_label:"Setup Full Node"},sidebar:"tutorialSidebar",previous:{title:"Setup collator Node",permalink:"/de/docs/tutorials/tutorials-nodes-collators-setup"},next:{title:"Setup Validator Node",permalink:"/de/docs/tutorials/tutorials-nodes-validator-setup"}},u=[{value:"How do you setup a Full Node?",id:"how-do-you-setup-a-full-node",children:[{value:"Provisioning a server",id:"provisioning-a-server",children:[]},{value:"Installing DataHighway and setting it up as a system service",id:"installing-datahighway-and-setting-it-up-as-a-system-service",children:[]},{value:"Set up the node as a system service.",id:"set-up-the-node-as-a-system-service",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-do-you-setup-a-full-node"},"How do you setup a Full Node?"),(0,o.kt)("p",null,"This guide covers how to set up a DataHighway Full Node."),(0,o.kt)("h3",{id:"provisioning-a-server"},"Provisioning a server"),(0,o.kt)("p",null,"Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc."),(0,o.kt)("p",null,"We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions."),(0,o.kt)("p",null,"SSH into the server."),(0,o.kt)("h3",{id:"installing-datahighway-and-setting-it-up-as-a-system-service"},"Installing DataHighway and setting it up as a system service"),(0,o.kt)("p",null,"First, clone the DataHighway-DHX/node repo, install any dependencies, and run the required build scripts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y gcc libc6-dev\napt install -y cmake pkg-config libssl-dev git clang libclang-dev\n")),(0,o.kt)("p",null,"Prefetch SSH publickeys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keyscan -H github.com >> ~/.ssh/known_hosts\n")),(0,o.kt)("p",null,"Install rustup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.rustup.rs -sSf | sh -s -- -y\nsource $HOME/.cargo/env\nexport PATH=$HOME/.cargo/bin:$PATH\n")),(0,o.kt)("p",null,"Get packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DataHighway-DHX/node.git\ncd node\n")),(0,o.kt)("p",null,"Build packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://getsubstrate.io -sSf | bash -s -- --fast && \\\n./scripts/init.sh\n")),(0,o.kt)("p",null,"Build runtime code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,o.kt)("h3",{id:"set-up-the-node-as-a-system-service"},"Set up the node as a system service."),(0,o.kt)("p",null,"To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file and make specific configuration updates for your node as detailed below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  echo '[Unit]'\n  echo 'Description=DataHighway'\n  echo '[Service]'\n  echo 'Type=simple'\n  echo 'WorkingDirectory=/home/foo/node'\n  echo 'ExecStart=/home/foo/node/target/release/datahighway --chain CHAIN_NAME  --bootnodes BOOT_NODE --name YOUR_NODE_NAME'\n  echo '[Install]'\n  echo 'WantedBy=multi-user.target'\n} > /etc/systemd/system/datahighway.service\n")),(0,o.kt)("p",null,"WorkingDirectory=needs to be the full path to your node project which you cloned. eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/home/foo/node\n")),(0,o.kt)("p",null,"ExecStart=needs to include the full path to the datahighway binary, eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/home/foo/node/target/release/datahighway \n")),(0,o.kt)("p",null,"CHAIN_NAME=Specify the chain name where you want to connect your node to, eg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--chain harbour\n")),(0,o.kt)("p",null,"YOUR_NODE_NAME=Name your node with the --name option which will be shown on telemetry, eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--name MyAwesomeNode\n")),(0,o.kt)("p",null,"BOOT_NODE=specify one of our chain specific bootnodes, its IP and Peer-ID can be provided thru a discord request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--bootnodes /ip4/GET_IP_FROM_DISCORD/tcp/30333/p2p/GET_PEER_ID_FROM_DISCORD\n")),(0,o.kt)("p",null,"Double check that the config has been written to /etc/systemd/system/datahighway.service correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat /etc/systemd/system/datahighway.service\n")),(0,o.kt)("p",null,"Then enable the service so it runs on startup, and then try to start it now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable datahighway\nsystemctl start datahighway\n")),(0,o.kt)("p",null,"Check the status of the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status datahighway\n")),(0,o.kt)("p",null,"You should see the node connecting to the network and syncing the latest blocks. If you need to tail the latest output, you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u datahighway.service -f\n")))}p.isMDXComponent=!0}}]);