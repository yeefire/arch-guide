(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[747],{372:(e,r,n)=>{"use strict";n.r(r),n.d(r,{data:()=>a});const a={key:"v-5f0ee8ab",path:"/play&office/play.html",title:"娱乐软件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"性能提升",slug:"性能提升",children:[]},{level:2,title:"网游网络加速",slug:"网游网络加速",children:[]},{level:2,title:"我的世界",slug:"我的世界",children:[]},{level:2,title:"Steam",slug:"steam",children:[{level:3,title:"原生游戏组",slug:"原生游戏组",children:[]},{level:3,title:"Steam Play 组",slug:"steam-play-组",children:[]}]},{level:2,title:"Lutris",slug:"lutris",children:[{level:3,title:"暴雪战网",slug:"暴雪战网",children:[]},{level:3,title:"WargamingGameCenter(坦克世界、战舰世界等)",slug:"wargaminggamecenter-坦克世界、战舰世界等",children:[]}]},{level:2,title:"原生 wine",slug:"原生-wine",children:[]},{level:2,title:"性能监控",slug:"性能监控",children:[]}],filePathRelative:"play&office/play.md",git:{updatedTime:1622292364e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},5620:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>ca});var a=n(6252);const l=(0,a.uE)('<h1 id="娱乐软件"><a class="header-anchor" href="#娱乐软件">#</a> 娱乐软件</h1><p>群主的电脑配置如下，供参考，本节中所有主观的体验均以此配置为准。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>CPU: Intel i7-6700K <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> @ <span class="token number">4</span>.200GHz\nGPU: NVIDIA GeForce GTX <span class="token number">1070</span>\nMemory: 32GB <span class="token number">2666</span>\nDisk: PLEXTOR PX-1TM9PeG\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="性能提升"><a class="header-anchor" href="#性能提升">#</a> 性能提升</h2><p>在游戏之前，如果有强烈的性能需要，可先确保 cpu 处于性能模式。在终端中，输入下列代码：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> performance <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>现在电源应该处于 High Performance 模式了。</p><p>如果希望将设置改回 Power Save 模式，那么只需要输入下列代码即可</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> powersave <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="网游网络加速"><a class="header-anchor" href="#网游网络加速">#</a> 网游网络加速</h2><p>对于在 linux 上玩网游，网络加速一直是一个难题，尤其是在玩一些外服网游的时候。这里提供一些思路来在 linux 下对网游加速。</p><ul><li>一些机场会提供网游游戏节点，这些节点专门为游戏优化，限制流量并且提高倍率，一般可以得到较好的加速效果。在 linux 中配合<a href="/advanced/transparentProxy">透明代理</a>，同时开启对 UDP 流量的代理加速，即可以得到优化网游网速的效果。</li><li>一些中端或者高端的路由器，会内置一些市面上常见的网游加速器，如果你的路由器有这个功能，那可以直接使用路由器内置的加速器加速本机的网游流量。</li><li>据网友说，wine 运行的网游加速器也能加速 linux 中运行的网游，此条我未成功，未验证。</li></ul><h2 id="我的世界"><a class="header-anchor" href="#我的世界">#</a> 我的世界</h2>',13),s=(0,a.Uk)("注意，如果不进行代理设置，启动器的下载速度将很慢。推荐使用全局透明代理。在安装使用中若出现问题可自行查看"),t={href:"https://aur.archlinux.org/packages/minecraft-launcher",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("AUR 仓库地址"),p=(0,a.Uk)("下的评论。"),m=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S minecraft-launcher <span class="token comment">#我的世界官服启动器(ArchLinuxCN)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),i=(0,a.Uk)("但是比较了解我的世界的人都知道，官启比较难用。我们推荐使用"),u={href:"https://hmcl.huangyuhui.net/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("HMCL"),h=(0,a.Uk)("（Hello Minecraft! Launcher）启动器。"),d={href:"https://github.com/huanghongxun/HMCL",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("GitHub"),b=(0,a.Uk)(),g={href:"https://www.mcbbs.net/thread-142335-1-1.html",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("MCBBS"),f=(0,a.uE)('<p>配置教程（注意：我们使用 HMCL-3.3.172 版本演示，其余版本类似）：</p><p>我们先下载 HMCL 启动器本体：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>aria2c http://ci.huangyuhui.net/job/HMCL/172/artifact/HMCL/build/libs/HMCL-3.3.172.jar <span class="token comment">#下载启动器本体</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后配置 java，我们推荐使用 Java8，因为 HMCL 仅支持 Java8 与 Java10：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S jre8 <span class="token comment">#安装jre8,一般仅玩就用jre即可，如要开发请安装jdk</span>\narchlinux-java status <span class="token comment">#列出系统上的Java版本</span>\n<span class="token function">sudo</span> archlinux-java <span class="token builtin class-name">set</span> java-8-jre/jre <span class="token comment">#设定默认Java版本</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>启动：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar HMCL-3.3.172.jar\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果要是能正常启动那就成功啦~~~</p><p>我们也可以去安装社区上的 HMCL，自动配置：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S hmcl\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="steam"><a class="header-anchor" href="#steam">#</a> Steam</h2><p>群主的 SteamID: 144736794 。由于游戏实在太多，个人肯定无法完成购买全部。如有需要可以进行联络，群主可以测试在 Linux 上的可运行性。</p>',12),_={href:"https://wiki.archlinux.org/index.php/Steam",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("官方文档"),v=(0,a.Wm)("br",null,null,-1),w=(0,a.Uk)(" 一些字体和驱动已经在"),x=(0,a.Wm)("code",null,"新手上路",-1),S=(0,a.Uk)("章节中配置完成。若有安装问题请自查。"),y=(0,a.Uk)("此外，如果某些游戏启动或者游玩有问题，可以用终端使用"),M=(0,a.Wm)("code",null,"steam",-1),L=(0,a.Uk)("命令启动 steam 客户端，并观察游戏崩溃时的终端报错。一般都是缺少某种依赖造成的，可以根据具体情况自行安装依赖。同时，archlinux 官方文档也提供了一个"),P={href:"https://wiki.archlinux.org/index.php/Steam/Game-specific_troubleshooting",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Uk)("查错页面"),E=(0,a.Uk)("，记录了一些游戏崩溃(如骑马与砍杀等)的解决方式。"),H=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S steam\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),G=(0,a.Uk)("下面的清单是群主自身测试过，或者玩过的，在 Linux 下拥有"),D=(0,a.Wm)("code",null,"完美体验或者表现良好",-1),R=(0,a.Uk)("的游戏列表，分为原生组和 "),T={href:"https://wiki.archlinux.org/index.php/Steam#Proton_Steam-Play",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("Steam Play"),A=(0,a.Uk)(" 组两类。关于非 Linux 平台的游戏，通过 Steam Play 运行的可玩程度，可通过"),I={href:"https://www.protondb.com/",target:"_blank",rel:"noopener noreferrer"},B=(0,a.Uk)("protondb"),O=(0,a.Uk)("这个网站进行查询。如果玩某个游戏出现问题，在这个网站里你也可以找到玩家 post 的各个游戏的修正方式。有时最新版 Proton 可能存在问题，这时自行尝试其他版本即可。"),K=(0,a.Uk)("另外，github 上还存在一些官方 proton 的 fork 版本，如 "),V={href:"https://github.com/GloriousEggroll/proton-ge-custom",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("GE proton"),J=(0,a.Uk)("，可以支持一些额外的，官方暂不支持或支持不完善的游戏。使用方式也很简单，根据官方文档，下载 release 的压缩包到指定位置，重启 steam 后即可选择特定版本的 GE proton。"),X=(0,a.Wm)("p",null,"只列出大作以及较好玩的精品，不会列举全部。",-1),q=(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,"游戏锁区解决办法：让你的 steam 处于一个国家的代理下，如日本。先随便加一个游戏到购物车，在购物车右上角国家地区改成日本，再去访问已锁区的游戏，就可以浏览购买了。")],-1),F=(0,a.Wm)("h3",{id:"原生游戏组"},[(0,a.Wm)("a",{class:"header-anchor",href:"#原生游戏组"},"#"),(0,a.Uk)(" 原生游戏组")],-1),z={href:"https://store.steampowered.com/app/107410/Arma_3/",target:"_blank",rel:"noopener noreferrer"},Y=(0,a.Uk)("武装突袭 3"),Q=(0,a.Uk)(" 完美运行。"),Z={href:"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",target:"_blank",rel:"noopener noreferrer"},$=(0,a.Uk)("CS GO"),ee=(0,a.Uk)(" 不用介绍了吧？"),re={href:"https://store.steampowered.com/app/1158310/Crusader_Kings_III/",target:"_blank",rel:"noopener noreferrer"},ne=(0,a.Uk)("十字军之王 3"),ae=(0,a.Uk)(" 经典的中世纪模拟器 第三部已经有官方中文了。若启动器闪退启动不了游戏，可以执行游戏目录的./binary/ck3 启动游戏。"),le={href:"https://store.steampowered.com/app/570/Dota_2/",target:"_blank",rel:"noopener noreferrer"},se=(0,a.Uk)("Dota2"),te=(0,a.Uk)(" 完美运行，提供 openGL 与 Vulkan 两种方案。目前已经可以输入中文。"),oe={href:"https://store.steampowered.com/app/292030/_3/",target:"_blank",rel:"noopener noreferrer"},pe=(0,a.Uk)("巫师 3"),me=(0,a.Uk)(" 完美运行。"),ie={href:"https://store.steampowered.com/app/294100/RimWorld/",target:"_blank",rel:"noopener noreferrer"},ue=(0,a.Uk)("RimWorld"),ce=(0,a.Uk)(" 一款非常好玩的生存建设类游戏。"),he={href:"https://store.steampowered.com/app/236850/Europa_Universalis_IV/",target:"_blank",rel:"noopener noreferrer"},de=(0,a.Uk)("欧陆风云 4"),ke=(0,a.Uk)(" 没有官中。linux 双字节补丁暂无。"),be={href:"https://store.steampowered.com/app/368230/Kingdom_Classic/",target:"_blank",rel:"noopener noreferrer"},ge=(0,a.Uk)("Kingdom: Classic"),We=(0,a.Uk)(" 挺好玩的一个像素风横版闯关类小游戏。同系列还有几个新作。"),fe={href:"https://store.steampowered.com/app/286690/Metro_2033_Redux/",target:"_blank",rel:"noopener noreferrer"},_e=(0,a.Uk)("地铁 2033 Redux"),Ue=(0,a.Uk)(" 经典的地铁系列。"),ve={href:"https://store.steampowered.com/app/287390/Metro_Last_Light_Redux/",target:"_blank",rel:"noopener noreferrer"},we=(0,a.Uk)("地铁 Last Light Redux"),xe=(0,a.Uk)(" 经典的地铁系列。"),Se={href:"https://store.steampowered.com/app/413150/Stardew_Valley/",target:"_blank",rel:"noopener noreferrer"},ye=(0,a.Uk)("星露谷物语"),Me=(0,a.Uk)(" 二次元像素风农场模拟器。"),Le={href:"https://store.steampowered.com/app/219740/Dont_Starve/",target:"_blank",rel:"noopener noreferrer"},Pe=(0,a.Uk)("饥荒"),Ce=(0,a.Uk)(" 中文显示有问题，需要订阅并启用中文 mod,如"),Ee={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=874857181&searchtext=%E4%B8%AD%E6%96%87",target:"_blank",rel:"noopener noreferrer"},He=(0,a.Uk)("这个"),Ge={href:"https://store.steampowered.com/app/457140/Oxygen_Not_Included/",target:"_blank",rel:"noopener noreferrer"},De=(0,a.Uk)("Oxygen Not Included(缺氧)"),Re=(0,a.Uk)(" 同样是 Klei 出品，2D 模拟经营类游戏。"),Te={href:"https://store.steampowered.com/app/105600/Terraria/",target:"_blank",rel:"noopener noreferrer"},je=(0,a.Uk)("泰拉瑞亚"),Ae=(0,a.Uk)(" 不用介绍了吧？"),Ie={href:"https://store.steampowered.com/app/779340/Total_War_THREE_KINGDOMS/",target:"_blank",rel:"noopener noreferrer"},Be=(0,a.Uk)("全战三国"),Oe=(0,a.Uk)(" 全战系列的三国篇。"),Ke={href:"https://store.steampowered.com/app/22100/Mount__Blade/",target:"_blank",rel:"noopener noreferrer"},Ve=(0,a.Uk)("骑马与砍杀"),Ne=(0,a.Uk)(" 最爱骑砍。"),Je={href:"https://store.steampowered.com/app/48700/Mount__Blade_Warband/",target:"_blank",rel:"noopener noreferrer"},Xe=(0,a.Uk)("骑马与砍杀：战团"),qe={href:"https://store.steampowered.com/app/594550/Arma_Cold_War_Assault_MacLinux/",target:"_blank",rel:"noopener noreferrer"},Fe=(0,a.Uk)("武装突袭 1(闪点行动)"),ze=(0,a.Uk)(" 血统上为武装突袭第一代。"),Ye={href:"https://store.steampowered.com/app/241930/Middleearth_Shadow_of_Mordor/",target:"_blank",rel:"noopener noreferrer"},Qe=(0,a.Uk)("中土世界 暗影摩多"),Ze=(0,a.Uk)(" 兽人养成器。"),$e={href:"https://store.steampowered.com/app/400/Portal/",target:"_blank",rel:"noopener noreferrer"},er=(0,a.Uk)("Portal 系列"),rr=(0,a.Uk)(" V 社著名解谜游戏。"),nr={href:"https://store.steampowered.com/app/233450/Prison_Architect/",target:"_blank",rel:"noopener noreferrer"},ar=(0,a.Uk)("监狱建造师"),lr=(0,a.Uk)(" 好玩的坐牢游戏。"),sr={href:"https://store.steampowered.com/app/464920/Surviving_Mars/",target:"_blank",rel:"noopener noreferrer"},tr=(0,a.Uk)("Surviving Mars"),or=(0,a.Uk)(" 好玩的火星生存游戏。"),pr={href:"https://store.steampowered.com/app/427520/Factorio/",target:"_blank",rel:"noopener noreferrer"},mr=(0,a.Uk)("Factorio(异星工厂)"),ir=(0,a.Uk)(" 模拟经营，策略类游戏，自带 100%汉化。喜欢自动化的玩家可以一试。(并且对显卡要求不高，该条目的贡献者用着 UHD630 如是说道)"),ur={href:"https://store.steampowered.com/app/328080/Rise_to_Ruins/",target:"_blank",rel:"noopener noreferrer"},cr=(0,a.Uk)("Rise to Ruins"),hr=(0,a.Uk)(" 类似 RimWorld 模式的像素风模拟经营游戏。"),dr=(0,a.Wm)("h3",{id:"steam-play-组"},[(0,a.Wm)("a",{class:"header-anchor",href:"#steam-play-组"},"#"),(0,a.Uk)(" Steam Play 组")],-1),kr=(0,a.Wm)("p",null,"默认使用最新的 Steam 官方 Pronton 版本即可。如果不行，可尝试使用其他版本的 Proton 或者 GE Pronton。",-1),br={href:"https://store.steampowered.com/app/1091500/_2077/",target:"_blank",rel:"noopener noreferrer"},gr=(0,a.Uk)("赛博朋克 2077"),Wr=(0,a.Uk)(" 可玩，但是会随机性闪退，是共性问题。需要等待后续优化。"),fr={href:"https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",target:"_blank",rel:"noopener noreferrer"},_r=(0,a.Uk)("荒野大镖客 2"),Ur=(0,a.Uk)(" 完美运行。"),vr={href:"https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/",target:"_blank",rel:"noopener noreferrer"},wr=(0,a.Uk)("骑马与砍杀 2"),xr=(0,a.uE)(' 略有卡顿，启动器存在 bug，无法启动游戏，需要进行一点修改。进入游戏文件夹的./bin/Win64_Shipping_Client 文件夹中，执行如下命令<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> TaleWorlds.MountAndBlade.Launcher.exe TaleWorlds.MountAndBlade.Launcher.exe.bak <span class="token comment">#备份源文件</span>\n<span class="token function">ln</span> -s Bannerlord.Native.exe TaleWorlds.MountAndBlade.Launcher.exe <span class="token comment">#通过符号链接让启动器直接指向Bannerlord.Native.exe</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',2),Sr={href:"https://github.com/ValveSoftware/Proton/issues/3706",target:"_blank",rel:"noopener noreferrer"},yr=(0,a.Uk)("相关 issue 讨论"),Mr={href:"https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",target:"_blank",rel:"noopener noreferrer"},Lr=(0,a.Uk)("只狼"),Pr=(0,a.Uk)(" 完美运行。"),Cr={href:"https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",target:"_blank",rel:"noopener noreferrer"},Er=(0,a.Uk)("上古卷轴 5"),Hr=(0,a.Uk)(" 完美运行。"),Gr={href:"https://store.steampowered.com/app/1230140/ATRI_My_Dear_Moments/",target:"_blank",rel:"noopener noreferrer"},Dr=(0,a.Uk)("ATRI -My Dear Moments-"),Rr=(0,a.Uk)(" 可爱的あとり 第一时间预购了 但始终没时间玩。 可使用 Proton 4.11-13 版本。"),Tr={href:"https://store.steampowered.com/app/1347430/Cute_Honey/",target:"_blank",rel:"noopener noreferrer"},jr=(0,a.Uk)("cute honey"),Ar=(0,a.Uk)(" 已锁国区。一款社保黄油。可使用 Proton 5.0-10 版本。"),Ir={href:"https://store.steampowered.com/app/939600/LOVE/",target:"_blank",rel:"noopener noreferrer"},Br=(0,a.Uk)("LOVE³ -爱立方-"),Or=(0,a.Uk)(" 一款社保黄油。steam dlc 有社保补丁 dlc。可使用 Proton 5.0-10 版本。"),Kr={href:"https://store.steampowered.com/app/628070/Romance_of_the_Three_Kingdoms_XI_with_Power_Up_Kit/",target:"_blank",rel:"noopener noreferrer"},Vr=(0,a.Uk)("三国志 11"),Nr=(0,a.Uk)(" 可使用 Proton 5.0-10 版本。"),Jr={href:"https://store.steampowered.com/app/233860/Kenshi/",target:"_blank",rel:"noopener noreferrer"},Xr=(0,a.Uk)("Kenshi"),qr=(0,a.Uk)(" 废土生存类游戏，非常好玩。可使用 Proton 5.0-10 版本。"),Fr={href:"https://store.steampowered.com/app/976730/Halo_The_Master_Chief_Collection/",target:"_blank",rel:"noopener noreferrer"},zr=(0,a.Uk)("光环士官长合集"),Yr=(0,a.Uk)(" 大名鼎鼎的光环系列。启动时需要在启动参数中加入"),Qr=(0,a.Wm)("code",null,"-windowed",-1),Zr=(0,a.Uk)("，否则会报错 fatal error。可在进入游戏后自行调整分辨率。可使用 Proton 5.0-10 版本。"),$r={href:"https://store.steampowered.com/app/40950/Stronghold_HD/",target:"_blank",rel:"noopener noreferrer"},en=(0,a.Uk)("Stronghold HD"),rn=(0,a.Uk)(" 要塞 1 重制版，近乎完美，只是不能 Alt+Tab 切换，会卡死。"),nn={href:"https://store.steampowered.com/app/40970/Stronghold_Crusader_HD/",target:"_blank",rel:"noopener noreferrer"},an=(0,a.Uk)("Stronghold Crusader (Extreme) HD"),ln=(0,a.Uk)(" 要塞 1 十字军重制版，近乎完美，只是不能 Alt+Tab 切换，会卡死。"),sn={href:"https://store.steampowered.com/app/40960/Stronghold_2_Steam_Edition/",target:"_blank",rel:"noopener noreferrer"},tn=(0,a.Uk)("Stronghold 2"),on=(0,a.Uk)(" 要塞 2。完美运行。"),pn={href:"https://store.steampowered.com/app/40980/Stronghold_Legends_Steam_Edition/",target:"_blank",rel:"noopener noreferrer"},mn=(0,a.Uk)("Stronghold Legends"),un=(0,a.Uk)(" 要塞传奇。完美运行。"),cn={href:"https://store.steampowered.com/app/835570/_/",target:"_blank",rel:"noopener noreferrer"},hn=(0,a.Uk)("战意"),dn=(0,a.Uk)(" 中世纪网游。注意需要使用 GE Proton 的新版本。"),kn={href:"https://store.steampowered.com/app/6880/Just_Cause/",target:"_blank",rel:"noopener noreferrer"},bn=(0,a.Uk)("Just Cause"),gn={href:"https://store.steampowered.com/app/12120/Grand_Theft_Auto_San_Andreas/",target:"_blank",rel:"noopener noreferrer"},Wn=(0,a.Uk)("侠盗猎车手圣安地列斯"),fn={href:"https://store.steampowered.com/app/998930/Seek_Girl/",target:"_blank",rel:"noopener noreferrer"},_n=(0,a.Uk)("Seek girl 系列黄油"),Un=(0,a.Uk)(" 好玩的 🐍 击游戏。玩之前记得先去装社保补丁"),vn=(0,a.Wm)("h2",{id:"lutris"},[(0,a.Wm)("a",{class:"header-anchor",href:"#lutris"},"#"),(0,a.Uk)(" Lutris")],-1),wn=(0,a.Uk)("Lutris 基于 wine，提供了大量游戏在 Linux 下的解决方案。其为你已经配置好了 wine 相关的一切配置，你只需要安装游玩即可。一般极少需要额外配置。进入"),xn={href:"https://lutris.net/",target:"_blank",rel:"noopener noreferrer"},Sn=(0,a.Uk)("官网"),yn=(0,a.Uk)("在右上角搜索你想玩的游戏。点击进入游戏页面后，可以看到在相应版本右侧有一个 install 按钮，点击后即可拉起 Lurtis 进行安装。玩游戏前要先装好"),Mn={href:"https://github.com/lutris/docs/blob/master/InstallingDrivers.md",target:"_blank",rel:"noopener noreferrer"},Ln=(0,a.Uk)("驱动"),Pn=(0,a.Uk)("和"),Cn={href:"https://github.com/lutris/docs/blob/master/WineDependencies.md",target:"_blank",rel:"noopener noreferrer"},En=(0,a.Uk)("依赖"),Hn=(0,a.Uk)("。下面针对一些群主玩的游戏进行一些额外说明。"),Gn=(0,a.Wm)("h3",{id:"暴雪战网"},[(0,a.Wm)("a",{class:"header-anchor",href:"#暴雪战网"},"#"),(0,a.Uk)(" 暴雪战网")],-1),Dn={href:"https://lutris.net/games/battlenet/",target:"_blank",rel:"noopener noreferrer"},Rn=(0,a.Uk)("暴雪战网"),Tn=(0,a.Uk)(" 直接安装后可能无法登录，这是因为缺乏某些库。阅读历史 Issue,安装如下库后解决问题。"),jn=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo libxcomposite lib32-libxcomposite libxinerama lib32-libxinerama ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader cups samba dosbox\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>如果你发现还是无法登陆，检查你的代理设置。比如你是国服的帐号，但是代理挂的是日本的，那是无法登陆的，可以换一个香港的代理再尝试。</p></blockquote><h3 id="wargaminggamecenter-坦克世界、战舰世界等"><a class="header-anchor" href="#wargaminggamecenter-坦克世界、战舰世界等">#</a> WargamingGameCenter(坦克世界、战舰世界等)</h3>',3),An={href:"https://lutris.net/games/wargaming-game-center/",target:"_blank",rel:"noopener noreferrer"},In=(0,a.Uk)("WargamingGameCenter(坦克世界、战舰世界等)"),Bn=(0,a.Uk)(" 在页面上选择亚服即可进行安装（如果你玩亚服，则需要使用"),On=(0,a.Wm)("a",{href:"/advanced/transparentProxy"},"透明代理",-1),Kn=(0,a.Uk)("对 UDP 流量进行加速）。注意安装结束后，会卡在 wargaming 启动器，整个启动器会黑掉，在右下角托盘右键关闭就可以继续安装流程。"),Vn=(0,a.Wm)("p",null,"如果无法更新游戏，在需要更新游戏的时候，将 wine 版本设置为系统的 wine staging 版本,如果最新的 wine-staging 版本仍然闪退，可以退回到 5.19 版本，这是最新的可用版本。如果依旧无法更新，可以尝试重新安装启动器(安装前先删除容器内 wgc 的文件夹，注意不是游戏本体的文件夹，无需重新下游戏本体)。在更新完毕后，需要启动游戏时，将 wine 版本设置为 lutris 自带的版本。",-1),Nn=(0,a.Wm)("p",null,[(0,a.Uk)("如遇到无法启动闪退的情况，可以尝试在命令行启动 Lutris,再启动坦克世界即可，玄学，不知道原因。如果启动器中启动游戏还是闪退，可以尝试把 lutris 容器的启动文件从启动器改到 WOT 游戏本体的可执行文件。这个方法在外服可以，国服就不行，因为启动游戏本体后要输入帐号密码，我试了旧的空中网帐密，新的 360 帐密都不行，提示帐号密码错误或已过期。想了想原因可能是 360 在启动器做了套娃，有自身的验证登陆手段。这时候就需要用另一个更通用的方式，可以使用 lutris 的功能"),(0,a.Wm)("code",null,"Run EXE inside wine prefix"),(0,a.Uk)("，然后选择坦克世界游戏本体就可以通过验证玩游戏了。"),(0,a.Wm)("code",null,"Run EXE inside wine prefix"),(0,a.Uk)("的位置在 lutris 下方，点击小酒杯，最后一个。")],-1),Jn=(0,a.Wm)("p",null,"如果你玩国服，群主在 lutris 上传了国服的安装脚本，目前还没通过审核。",-1),Xn=(0,a.Uk)("关于插件，可以在官方的 "),qn={href:"https://wgmods.net/",target:"_blank",rel:"noopener noreferrer"},Fn=(0,a.Uk)("Mod Hub"),zn=(0,a.Uk)(" 下载，使用方式和 windows 上是相同的，个人习惯更换背景音乐为 Old Memories。如果习惯使用坦克世界盒子，也可以安装在同一个容器里，经过测试，除了没有效率值之外，其他功能是可以正常使用的。"),Yn=(0,a.Wm)("h2",{id:"原生-wine"},[(0,a.Wm)("a",{class:"header-anchor",href:"#原生-wine"},"#"),(0,a.Uk)(" 原生 wine")],-1),Qn=(0,a.Uk)("安装使用原生 "),Zn={href:"https://wiki.archlinux.org/index.php/Wine",target:"_blank",rel:"noopener noreferrer"},$n=(0,a.Uk)("wine"),ea=(0,a.Uk)(" 也可运行 windows 游戏，但是很多情况下需要你自行处理 windows 下的依赖问题，常用的工具是"),ra={href:"https://archlinux.org/packages/multilib/x86_64/winetricks/",target:"_blank",rel:"noopener noreferrer"},na=(0,a.Uk)("winetricks"),aa=(0,a.Uk)("。这种方式费时费力，只运行无需处理依赖的小游戏或者 gal 还好。"),la=(0,a.Wm)("h2",{id:"性能监控"},[(0,a.Wm)("a",{class:"header-anchor",href:"#性能监控"},"#"),(0,a.Uk)(" 性能监控")],-1),sa=(0,a.Uk)("和微星的 Afterburner 软件中性能显示的部分类似，linux 上也有一款同类软件可以监控游戏中的电脑性能，名为"),ta={href:"https://github.com/flightlessmango/MangoHud",target:"_blank",rel:"noopener noreferrer"},oa=(0,a.Uk)("MangoHud"),pa=(0,a.Uk)("。使用方式可参见此项目的 readme。此外，官方提供图形化的参数设置软件 "),ma={href:"https://github.com/benjamimgois/goverlay#arch--manjaro--other-arch-derivatives",target:"_blank",rel:"noopener noreferrer"},ia=(0,a.Uk)("GOverlay"),ua=(0,a.Uk)(",可以自行选择安装。"),ca={render:function(e,r){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)("p",null,[s,(0,a.Wm)("a",t,[o,(0,a.Wm)(n)]),p]),m,(0,a.Wm)("p",null,[i,(0,a.Wm)("a",u,[c,(0,a.Wm)(n)]),h]),(0,a.Wm)("p",null,[(0,a.Wm)("a",d,[k,(0,a.Wm)(n)]),b,(0,a.Wm)("a",g,[W,(0,a.Wm)(n)])]),f,(0,a.Wm)("p",null,[(0,a.Wm)("a",_,[U,(0,a.Wm)(n)]),v,w,x,S]),(0,a.Wm)("p",null,[y,M,L,(0,a.Wm)("a",P,[C,(0,a.Wm)(n)]),E]),H,(0,a.Wm)("p",null,[G,D,R,(0,a.Wm)("a",T,[j,(0,a.Wm)(n)]),A,(0,a.Wm)("a",I,[B,(0,a.Wm)(n)]),O]),(0,a.Wm)("p",null,[K,(0,a.Wm)("a",V,[N,(0,a.Wm)(n)]),J]),X,q,F,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",z,[Y,(0,a.Wm)(n)]),Q]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Z,[$,(0,a.Wm)(n)]),ee]),(0,a.Wm)("li",null,[(0,a.Wm)("a",re,[ne,(0,a.Wm)(n)]),ae]),(0,a.Wm)("li",null,[(0,a.Wm)("a",le,[se,(0,a.Wm)(n)]),te]),(0,a.Wm)("li",null,[(0,a.Wm)("a",oe,[pe,(0,a.Wm)(n)]),me]),(0,a.Wm)("li",null,[(0,a.Wm)("a",ie,[ue,(0,a.Wm)(n)]),ce]),(0,a.Wm)("li",null,[(0,a.Wm)("a",he,[de,(0,a.Wm)(n)]),ke]),(0,a.Wm)("li",null,[(0,a.Wm)("a",be,[ge,(0,a.Wm)(n)]),We]),(0,a.Wm)("li",null,[(0,a.Wm)("a",fe,[_e,(0,a.Wm)(n)]),Ue]),(0,a.Wm)("li",null,[(0,a.Wm)("a",ve,[we,(0,a.Wm)(n)]),xe]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Se,[ye,(0,a.Wm)(n)]),Me]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Le,[Pe,(0,a.Wm)(n)]),Ce,(0,a.Wm)("a",Ee,[He,(0,a.Wm)(n)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Ge,[De,(0,a.Wm)(n)]),Re]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Te,[je,(0,a.Wm)(n)]),Ae]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Ie,[Be,(0,a.Wm)(n)]),Oe]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Ke,[Ve,(0,a.Wm)(n)]),Ne]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Je,[Xe,(0,a.Wm)(n)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",qe,[Fe,(0,a.Wm)(n)]),ze]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Ye,[Qe,(0,a.Wm)(n)]),Ze]),(0,a.Wm)("li",null,[(0,a.Wm)("a",$e,[er,(0,a.Wm)(n)]),rr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",nr,[ar,(0,a.Wm)(n)]),lr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",sr,[tr,(0,a.Wm)(n)]),or]),(0,a.Wm)("li",null,[(0,a.Wm)("a",pr,[mr,(0,a.Wm)(n)]),ir]),(0,a.Wm)("li",null,[(0,a.Wm)("a",ur,[cr,(0,a.Wm)(n)]),hr])]),dr,kr,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",br,[gr,(0,a.Wm)(n)]),Wr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",fr,[_r,(0,a.Wm)(n)]),Ur]),(0,a.Wm)("li",null,[(0,a.Wm)("a",vr,[wr,(0,a.Wm)(n)]),xr,(0,a.Wm)("a",Sr,[yr,(0,a.Wm)(n)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Mr,[Lr,(0,a.Wm)(n)]),Pr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Cr,[Er,(0,a.Wm)(n)]),Hr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Gr,[Dr,(0,a.Wm)(n)]),Rr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Tr,[jr,(0,a.Wm)(n)]),Ar]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Ir,[Br,(0,a.Wm)(n)]),Or]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Kr,[Vr,(0,a.Wm)(n)]),Nr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Jr,[Xr,(0,a.Wm)(n)]),qr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Fr,[zr,(0,a.Wm)(n)]),Yr,Qr,Zr]),(0,a.Wm)("li",null,[(0,a.Wm)("a",$r,[en,(0,a.Wm)(n)]),rn]),(0,a.Wm)("li",null,[(0,a.Wm)("a",nn,[an,(0,a.Wm)(n)]),ln]),(0,a.Wm)("li",null,[(0,a.Wm)("a",sn,[tn,(0,a.Wm)(n)]),on]),(0,a.Wm)("li",null,[(0,a.Wm)("a",pn,[mn,(0,a.Wm)(n)]),un]),(0,a.Wm)("li",null,[(0,a.Wm)("a",cn,[hn,(0,a.Wm)(n)]),dn]),(0,a.Wm)("li",null,[(0,a.Wm)("a",kn,[bn,(0,a.Wm)(n)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",gn,[Wn,(0,a.Wm)(n)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",fn,[_n,(0,a.Wm)(n)]),Un])]),vn,(0,a.Wm)("p",null,[wn,(0,a.Wm)("a",xn,[Sn,(0,a.Wm)(n)]),yn,(0,a.Wm)("a",Mn,[Ln,(0,a.Wm)(n)]),Pn,(0,a.Wm)("a",Cn,[En,(0,a.Wm)(n)]),Hn]),Gn,(0,a.Wm)("p",null,[(0,a.Wm)("a",Dn,[Rn,(0,a.Wm)(n)]),Tn]),jn,(0,a.Wm)("p",null,[(0,a.Wm)("a",An,[In,(0,a.Wm)(n)]),Bn,On,Kn]),Vn,Nn,Jn,(0,a.Wm)("p",null,[Xn,(0,a.Wm)("a",qn,[Fn,(0,a.Wm)(n)]),zn]),Yn,(0,a.Wm)("p",null,[Qn,(0,a.Wm)("a",Zn,[$n,(0,a.Wm)(n)]),ea,(0,a.Wm)("a",ra,[na,(0,a.Wm)(n)]),aa]),la,(0,a.Wm)("p",null,[sa,(0,a.Wm)("a",ta,[oa,(0,a.Wm)(n)]),pa,(0,a.Wm)("a",ma,[ia,(0,a.Wm)(n)]),ua])],64)}}}}]);