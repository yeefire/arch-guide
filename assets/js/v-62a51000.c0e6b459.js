(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[464],{4607:(l,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>s});const s={key:"v-62a51000",path:"/rookie/desktop-env-and-app.html",title:"桌面环境与常用应用",lang:"zh-CN",frontmatter:{title:"桌面环境与常用应用",description:"archlinux 安装桌面环境与常用应用 | 本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！"},excerpt:"",headers:[{level:3,title:"🏔 两岸猿声啼不住，轻舟已过万重山",slug:"🏔-两岸猿声啼不住-轻舟已过万重山",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"1. 确保系统为最新",slug:"_1-确保系统为最新",children:[]},{level:2,title:"2. 准备非 root 用户",slug:"_2-准备非-root-用户",children:[]},{level:2,title:"3. 安装 KDE Plasma 桌面环境",slug:"_3-安装-kde-plasma-桌面环境",children:[]},{level:2,title:"4. 配置 greeter sddm",slug:"_4-配置-greeter-sddm",children:[]},{level:2,title:"5. 开启 32 位支持库与 Arch Linux 中文社区仓库（archlinuxcn）",slug:"_5-开启-32-位支持库与-arch-linux-中文社区仓库-archlinuxcn",children:[]},{level:2,title:"7. 安装基础功能包",slug:"_7-安装基础功能包",children:[]},{level:2,title:"8. 检查家目录",slug:"_8-检查家目录",children:[]},{level:2,title:"9. 设置系统为中文",slug:"_9-设置系统为中文",children:[]},{level:2,title:"10. 安装输入法",slug:"_10-安装输入法",children:[]},{level:2,title:"11. 启动蓝牙（若有）",slug:"_11-启动蓝牙-若有",children:[]},{level:2,title:"12. 设置 Timeshift 快照",slug:"_12-设置-timeshift-快照",children:[]},{level:2,title:"✨ 太棒了",slug:"✨-太棒了",children:[]}],filePathRelative:"rookie/desktop-env-and-app.md",git:{updatedTime:1623405292e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:8}]}}},6685:(l,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>fs});var s=e(6252);const m=e.p+"assets/img/desktop-env-and-app_update.0b441c77.png",a=e.p+"assets/img/desktop-env-and-app_add-user.7bd43b0c.png",t=e.p+"assets/img/desktop-env-and-app_visudo.4e719d62.png",c=e.p+"assets/img/desktop-env-and-app_install-kde.42878da2.png",i=e.p+"assets/img/desktop-env-and-app_sddm.05d736c5.png",u=e.p+"assets/img/desktop-env-and-app_multilib.f5545e2f.png",o=e.p+"assets/img/desktop-env-and-app_archlinuxcn.0f7fd001.png",W=e.p+"assets/img/desktop-env-and-app_syyu.28645404.png",r=e.p+"assets/img/desktop-env-and-app_sign-in.979d84d0.png",d=e.p+"assets/img/desktop-env-and-app_desktop.028a9588.png",p=e.p+"assets/img/desktop-env-and-app_konsole.37c0b17a.png",k=e.p+"assets/img/desktop-env-and-app_network.dcbd3b4f.png",h=e.p+"assets/img/desktop-env-and-app_mkdir.69b817bf.png",g=e.p+"assets/img/desktop-env-and-app_language.33dae259.png",U=e.p+"assets/img/desktop-env-and-app_effect.ab7b7aa3.png",b=e.p+"assets/img/desktop-env-and-app_fcitx5-1.e37020a8.png",f=e.p+"assets/img/desktop-env-and-app_fcitx5-2.af703fb7.png",v=e.p+"assets/img/desktop-env-and-app_fcitx5-3.530b6ea7.png",_=e.p+"assets/img/desktop-env-and-app_fcitx5-4.2106dcc3.png",x=e.p+"assets/img/desktop-env-and-app_fcitx5-5.2202488f.png",w=e.p+"assets/img/desktop-env-and-app_fcitx5-6.d453092f.png",E=e.p+"assets/img/desktop-env-and-app_timeshift-install.1e23c853.png",y=e.p+"assets/img/desktop-env-and-app_timeshift-cfg-1.007bcd99.png",S=e.p+"assets/img/desktop-env-and-app_timeshift-cfg-2.ff011444.png",A=e.p+"assets/img/desktop-env-and-app_timeshift-cfg-3.82edcddc.png",D=e.p+"assets/img/desktop-env-and-app_timeshift-cfg-4.be6ac6c1.png",L=(0,s.Wm)("h1",{id:"桌面环境与常用应用安装"},[(0,s.Wm)("a",{class:"header-anchor",href:"#桌面环境与常用应用安装"},"#"),(0,s.Uk)(" 桌面环境与常用应用安装")],-1),T=(0,s.Wm)("blockquote",null,[(0,s.Wm)("h3",{id:"🏔-两岸猿声啼不住-轻舟已过万重山"},[(0,s.Wm)("a",{class:"header-anchor",href:"#🏔-两岸猿声啼不住-轻舟已过万重山"},"#"),(0,s.Uk)(" 🏔 两岸猿声啼不住，轻舟已过万重山")]),(0,s.Wm)("p",null,"没有图形界面的 archlinux 显然作为日常使用的操作系统是不合适的。但经过这一节的安装和配置后，我们的系统就可以当作日常的操作系统使用了")],-1),B=(0,s.Wm)("h3",{id:"🔖-这一节将会讨论"},[(0,s.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论"},"#"),(0,s.Uk)(" 🔖 这一节将会讨论：")],-1),F={class:"table-of-contents"},C=(0,s.Uk)("🏔 两岸猿声啼不住，轻舟已过万重山"),R=(0,s.Uk)("🔖 这一节将会讨论："),M=(0,s.Uk)("1. 确保系统为最新"),I=(0,s.Uk)("2. 准备非 root 用户"),K=(0,s.Uk)("3. 安装 KDE Plasma 桌面环境"),N=(0,s.Uk)("4. 配置 greeter sddm"),P=(0,s.Uk)("5. 开启 32 位支持库与 Arch Linux 中文社区仓库（archlinuxcn）"),O=(0,s.Uk)("7. 安装基础功能包"),q=(0,s.Uk)("8. 检查家目录"),G=(0,s.Uk)("9. 设置系统为中文"),z=(0,s.Uk)("10. 安装输入法"),$=(0,s.Uk)("11. 启动蓝牙（若有）"),j=(0,s.Uk)("12. 设置 Timeshift 快照"),H=(0,s.Uk)("✨ 太棒了"),V=(0,s.Uk)("这一小节，我们开始着手安装桌面环境和一些常用的软件。如有需要可以参阅 "),Q={href:"https://wiki.archlinux.org/title/General_recommendations_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},X=(0,s.Uk)("archWiki 一般性建议"),Y=(0,s.Uk)("。"),Z={class:"custom-container tip"},J=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),ll=(0,s.Uk)("指南中带有 "),nl=(0,s.Wm)("sup",null,"aur",-1),el=(0,s.Uk)(" 角标的软件代表是在 "),sl={href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"},ml=(0,s.Uk)("AUR"),al=(0,s.Uk)("（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题。"),tl=(0,s.Uk)("指南中带有 "),cl=(0,s.Wm)("sup",null,"cn",-1),il=(0,s.Uk)(" 角标的软件代表是在 "),ul={href:"https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/",target:"_blank",rel:"noopener noreferrer"},ol=(0,s.Uk)("archlinuxcn"),Wl=(0,s.Uk)("（Arch Linux 中文社区仓库）中用户自行打包的软件。"),rl=(0,s.Wm)("p",null,[(0,s.Uk)("指南中带有 "),(0,s.Wm)("sup",null,"EULA"),(0,s.Uk)(" 角标的软件代表是专有软件。")],-1),dl=(0,s.Wm)("h2",{id:"_1-确保系统为最新"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_1-确保系统为最新"},"#"),(0,s.Uk)(" 1. 确保系统为最新")],-1),pl=(0,s.Uk)("如果你在做完章节 "),kl=(0,s.Uk)("archlinux 基础安装"),hl=(0,s.Uk)(" 的内容后，关机并放置过一段时间，那么需要先按照 "),gl=(0,s.Uk)("18. 完成安装"),Ul=(0,s.Uk)(" 中连接网络的方法重新连网，然后使用以下命令更新系统："),bl=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Uk)("pacman -Syyu "),(0,s.Wm)("span",{class:"token comment"},"# 升级系统中全部包"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),fl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:m,alt:"update"})],-1),vl=(0,s.Wm)("h2",{id:"_2-准备非-root-用户"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_2-准备非-root-用户"},"#"),(0,s.Uk)(" 2. 准备非 root 用户")],-1),_l=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Uk)("通过以下命令添加用户，比如新增加的用户叫 "),(0,s.Wm)("code",null,"myusername"),(0,s.Uk)("：")])],-1),xl=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"useradd"),(0,s.Uk)(" -m -G wheel -s /bin/bash myusername\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),wl=(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,"📑 命令参数说明："),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"-m"),(0,s.Uk)(" 创建用户的同时创建用户家目录")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"-G"),(0,s.Uk)(" 选项后指定附加组 "),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"wheel"),(0,s.Uk)(" —— "),(0,s.Wm)("code",null,"wheel"),(0,s.Uk)(" 附加组可 "),(0,s.Wm)("code",null,"sudo"),(0,s.Uk)(" 进行提权")])])]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"-s"),(0,s.Uk)(" 选项后指定 shell 程序")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"myusername"),(0,s.Uk)(" —— 用户名（"),(0,s.Wm)("strong",null,"请自定义"),(0,s.Uk)("，但不要包含空格和特殊字符）")])])],-1),El=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,[(0,s.Uk)("通过以下命令根据提示设置新用户 "),(0,s.Wm)("code",null,"myusername"),(0,s.Uk)(" 的密码：")])],-1),yl=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"passwd"),(0,s.Uk)(" myusername\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Sl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:a,alt:"add-user"})],-1),Al=(0,s.Wm)("ol",{start:"3"},[(0,s.Wm)("li",null,[(0,s.Uk)("使用 "),(0,s.Wm)("code",null,"vim"),(0,s.Uk)(" 编辑器通过 "),(0,s.Wm)("code",null,"visudo"),(0,s.Uk)(" 命令编辑 "),(0,s.Wm)("code",null,"sudoers"),(0,s.Uk)(" 文件：")])],-1),Dl=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token assign-left variable"},"EDITOR"),(0,s.Wm)("span",{class:"token operator"},"="),(0,s.Uk)("vim visudo\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Ll=(0,s.Wm)("ol",{start:"4"},[(0,s.Wm)("li",null,[(0,s.Uk)("找到如下这样的一行，把前面的注释符号 "),(0,s.Wm)("code",null,"#"),(0,s.Uk)(" 去掉：")])],-1),Tl=(0,s.Wm)("div",{class:"language-sudoers ext-sudoers line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-sudoers"},[(0,s.Wm)("code",null,"#%wheel ALL=(ALL) ALL\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Bl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:t,alt:"visudo"})],-1),Fl=(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,"📑 这里稍微解释一下："),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"%wheel"),(0,s.Uk)(" —— 用户名或用户组，此处则代表是 "),(0,s.Wm)("code",null,"wheel"),(0,s.Uk)(" 组，"),(0,s.Wm)("code",null,"%"),(0,s.Uk)(" 是用户组的前缀")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"ALL="),(0,s.Uk)(" —— 主机名，此处则代表在所有主机上都生效（如果把同样的 "),(0,s.Wm)("code",null,"sudoers"),(0,s.Uk)(" 文件下发到了多个主机上）")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"(ALL)"),(0,s.Uk)(" —— 用户名，此处则代表可以成为任意目标用户")]),(0,s.Wm)("li",null,[(0,s.Uk)("最后的 "),(0,s.Wm)("code",null,"ALL"),(0,s.Uk)(" —— 代表可以执行任意命令")])]),(0,s.Wm)("p",null,"几个更详细的例子:"),(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Uk)("在 "),(0,s.Wm)("code",null,"mailadmin"),(0,s.Uk)(" 组里的用户可以作为 "),(0,s.Wm)("code",null,"root"),(0,s.Uk)(" 用户，在 "),(0,s.Wm)("code",null,"snow"),(0,s.Uk)(" 和 "),(0,s.Wm)("code",null,"rain"),(0,s.Uk)(" 这两台主机执行一些邮件服务器控制命令（命令之间用 "),(0,s.Wm)("code",null,","),(0,s.Uk)(" 分隔）：")])]),(0,s.Wm)("div",{class:"language-sudoers ext-sudoers line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-sudoers"},[(0,s.Wm)("code",null,"%mailadmin  snow,rain=(root)  /usr/sbin/postfix, /usr/sbin/postsuper, /usr/bin/doveadm\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])]),(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,[(0,s.Uk)("用户 "),(0,s.Wm)("code",null,"whoami"),(0,s.Uk)(" 可以在所有主机上以 "),(0,s.Wm)("code",null,"root"),(0,s.Uk)(" 用户不输入密码执行 "),(0,s.Wm)("code",null,"rndc reload"),(0,s.Uk)(" 这条命令（正常来说 "),(0,s.Wm)("code",null,"sudo"),(0,s.Uk)(" 都是要求输入调用方的密码的）：")])]),(0,s.Wm)("div",{class:"language-sudoers ext-sudoers line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-sudoers"},[(0,s.Wm)("code",null,"whoami  ALL=(root)  NOPASSWD: /usr/sbin/rndc reload\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])]),(0,s.Wm)("ol",{start:"3"},[(0,s.Wm)("li",null,[(0,s.Uk)("当在 "),(0,s.Wm)("code",null,"users"),(0,s.Uk)(" 组里的用户以 "),(0,s.Wm)("code",null,"sudo passwd"),(0,s.Uk)(" 或者 "),(0,s.Wm)("code",null,"sudo passwd root"),(0,s.Uk)(" 方式运行命令的时候，可以直接把 "),(0,s.Wm)("code",null,"root"),(0,s.Uk)(" 用户的密> 码 改掉，这真是太危险了！必须要把这两条命令禁止掉，但我们又希望用户可以通过 "),(0,s.Wm)("code",null,"sudo passwd"),(0,s.Uk)(" 修改其它用户的密码。那么我们可以在命令前面加上 "),(0,s.Wm)("code",null,"!"),(0,s.Uk)(" 来表示不可执行的命令：")])]),(0,s.Wm)("div",{class:"language-sudoers ext-sudoers line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-sudoers"},[(0,s.Wm)("code",null,"%users  ALL=(root)  !/usr/bin/passwd, /usr/bin/passwd [A-Za-z]*, !/usr/bin/passwd root\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])]),(0,s.Wm)("p",null,"总结一下，语法如下："),(0,s.Wm)("div",{class:"language-sudoers ext-sudoers line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-sudoers"},[(0,s.Wm)("code",null,"用户名/%用户组名 主机名=(目标用户名) 命令1, 命令2, !命令3\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])])],-1),Cl=(0,s.Wm)("ol",{start:"5"},[(0,s.Wm)("li",null,[(0,s.Uk)("保存并退出 "),(0,s.Wm)("code",null,"vim"),(0,s.Uk)(" 编辑器")])],-1),Rl=(0,s.Wm)("h2",{id:"_3-安装-kde-plasma-桌面环境"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_3-安装-kde-plasma-桌面环境"},"#"),(0,s.Uk)(" 3. 安装 KDE Plasma 桌面环境")],-1),Ml=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,"通过以下命令安装相关软件包：")],-1),Il=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Uk)("pacman -S plasma-meta konsole dolphin "),(0,s.Wm)("span",{class:"token comment"},"# plasma-meta 元软件包、konsole 终端模拟器和 dolphin 文件管理器"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Kl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:c,alt:"install-kde"})],-1),Nl=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,"一路回车完成安装即可")],-1),Pl=(0,s.Wm)("h2",{id:"_4-配置-greeter-sddm"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_4-配置-greeter-sddm"},"#"),(0,s.Uk)(" 4. 配置 greeter sddm")],-1),Ol=(0,s.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-text"},[(0,s.Wm)("code",null,"systemctl enable sddm\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),ql=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:i,alt:"enable-sddm"})],-1),Gl=(0,s.Wm)("h2",{id:"_5-开启-32-位支持库与-arch-linux-中文社区仓库-archlinuxcn"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_5-开启-32-位支持库与-arch-linux-中文社区仓库-archlinuxcn"},"#"),(0,s.Uk)(" 5. 开启 32 位支持库与 Arch Linux 中文社区仓库（archlinuxcn）")],-1),zl=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Uk)("编辑 "),(0,s.Wm)("code",null,"/etc/pacman.conf"),(0,s.Uk)(" 文件：")])],-1),$l=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"vim"),(0,s.Uk)(" /etc/pacman.conf\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),jl=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,[(0,s.Uk)("去掉 "),(0,s.Wm)("code",null,"[multilib]"),(0,s.Uk)(" 一节中两行的注释，来开启 32 位库支持")])],-1),Hl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:u,alt:"multilib"})],-1),Vl=(0,s.Wm)("ol",{start:"3"},[(0,s.Wm)("li",null,[(0,s.Uk)("在文档结尾处加入下面的文字，来添加 "),(0,s.Wm)("code",null,"archlinuxcn"),(0,s.Uk)(" 源。推荐的镜像源（选一个即可）也一并列出：")])],-1),Ql=(0,s.Wm)("div",{class:"language-pacman ext-pacman line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-pacman"},[(0,s.Wm)("code",null,"[archlinuxcn]\nServer = https://mirrors.ustc.edu.cn/archlinuxcn/$arch # 中国科学技术大学开源镜像站\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch # 清华大学开源软件镜像站\nServer = https://mirrors.hit.edu.cn/archlinuxcn/$arch # 哈尔滨工业大学开源镜像站\nServer = https://repo.huaweicloud.com/archlinuxcn/$arch # 华为开源镜像站\n")]),(0,s.Wm)("div",{class:"highlight-lines"},[(0,s.Wm)("br"),(0,s.Wm)("div",{class:"highlight-line"}," "),(0,s.Wm)("br"),(0,s.Wm)("br"),(0,s.Wm)("br")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"5"),(0,s.Wm)("br")])],-1),Xl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:o,alt:"archlinuxcn"})],-1),Yl={class:"custom-container tip"},Zl=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),Jl=(0,s.Uk)("此外，还有其它镜像源在 "),ln={href:"https://github.com/archlinuxcn/mirrorlist-repo#arch-linux-cn-community-repo-mirrors-list",target:"_blank",rel:"noopener noreferrer"},nn=(0,s.Uk)("archlinuxcn 官方 Github Repo"),en=(0,s.Uk)(" 列出，可以根据自己实际情况另行选择。"),sn=(0,s.Wm)("p",null,"archlinuxcn 仓库服务器位于欧洲，在中国大陆、中国香港、美国有镜像。",-1),mn=(0,s.Wm)("ol",{start:"4"},[(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("保存并退出 "),(0,s.Wm)("code",null,"vim"),(0,s.Uk)(" 编辑器")])]),(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("通过以下命令刷新 "),(0,s.Wm)("code",null,"pacman"),(0,s.Uk)(" 数据库并更新：")])])],-1),an=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"pacman -Syyu\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),tn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:W,alt:"syyu"})],-1),cn=(0,s.Wm)("ol",{start:"6"},[(0,s.Wm)("li",null,"通过以下命令重启电脑，即可看到欢迎界面：")],-1),un=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"reboot"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),on=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:r,alt:"sign-in"})],-1),Wn=(0,s.Wm)("ol",{start:"7"},[(0,s.Wm)("li",null,[(0,s.Uk)("输入新用户的密码并回车 "),(0,s.Wm)("code",null,"Enter"),(0,s.Uk)(" 即可登录桌面")])],-1),rn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:d,alt:"desktop"})],-1),dn={class:"custom-container tip"},pn=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),kn=(0,s.Uk)("若虚拟机下在 sddm 输入密码登录后无法进入桌面，只有黑屏和光标，请确认在步骤 "),hn=(0,s.Uk)("3. 配置 VirtualBox"),gn=(0,s.Uk)(" 中没有勾选 "),Un=(0,s.Wm)("code",null,"启用3D加速",-1),bn=(0,s.Uk)("。"),fn=(0,s.Wm)("h2",{id:"_7-安装基础功能包"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_7-安装基础功能包"},"#"),(0,s.Uk)(" 7. 安装基础功能包")],-1),vn=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,"进入桌面后，在开始菜单搜索并打开 Konsole。它是 KDE 桌面环境默认的终端模拟器")],-1),_n=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:p,alt:"konsole"})],-1),xn=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,"首先进行桌面环境中的网络设置：")],-1),wn=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl disable iwd "),(0,s.Wm)("span",{class:"token comment"},"# 确保 iwd 开机处于关闭状态，因为其无线连接会与 NetworkManager 冲突"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl stop iwd "),(0,s.Wm)("span",{class:"token comment"},"# 立即关闭 iwd"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl "),(0,s.Wm)("span",{class:"token builtin class-name"},"enable"),(0,s.Uk)(" --now NetworkManager "),(0,s.Wm)("span",{class:"token comment"},"# 确保先启动 NetworkManager，并进行网络连接。若 iwd 已经与 NetworkManager 冲突，则执行完上一步重启一下电脑即可"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"ping"),(0,s.Uk)(" www.bilibili.com "),(0,s.Wm)("span",{class:"token comment"},"# 测试网络连通性"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br")])],-1),En=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:k,alt:"network"})],-1),yn=(0,s.Wm)("p",null,"KDE 桌面环境中连接网络和 win10 一样，这里不再赘述。",-1),Sn=(0,s.Wm)("ol",{start:"3"},[(0,s.Wm)("li",null,"接下来安装一些基础功能包：")],-1),An=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S ntfs-3g "),(0,s.Wm)("span",{class:"token comment"},"# 使系统可以识别 NTFS 格式的硬盘"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S adobe-source-han-serif-cn-fonts wqy-zenhei "),(0,s.Wm)("span",{class:"token comment"},"# 安装几个开源中文字体。一般装上文泉驿就能解决大多 wine 应用中文方块的问题"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra "),(0,s.Wm)("span",{class:"token comment"},"# 安装谷歌开源字体及表情"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S firefox chromium "),(0,s.Wm)("span",{class:"token comment"},"# 安装常用的火狐、chromium 浏览器"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S ark "),(0,s.Wm)("span",{class:"token comment"},"# 压缩软件。在 dolphin 中可用右键解压压缩包"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S packagekit-qt5 packagekit appstream-qt appstream "),(0,s.Wm)("span",{class:"token comment"},"# 确保 Discover（软件中心）可用，需重启"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S gwenview "),(0,s.Wm)("span",{class:"token comment"},"# 图片查看器"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S steam "),(0,s.Wm)("span",{class:"token comment"},"# 游戏商店。稍后看完显卡驱动章节再使用"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"5"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"6"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"7"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"8"),(0,s.Wm)("br")])],-1),Dn=(0,s.Wm)("ol",{start:"4"},[(0,s.Wm)("li",null,[(0,s.Uk)("最后执行安装 "),(0,s.Wm)("code",null,"archlinuxcn"),(0,s.Uk)(" 源所需的相关步骤：")])],-1),Ln=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S archlinuxcn-keyring "),(0,s.Wm)("span",{class:"token comment"},"# cn 源中的签名（archlinuxcn-keyring 在 archlinuxcn）"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S yay "),(0,s.Wm)("span",{class:"token comment"},"# yay 命令可以让用户安装 AUR 中的软件（yay 在 archlinuxcn）"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br")])],-1),Tn={class:"custom-container tip"},Bn=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),Fn=(0,s.Uk)("若安装 "),Cn=(0,s.Wm)("code",null,"archlinuxcn-keyring",-1),Rn=(0,s.Uk)(" 时报错，是由于密钥环的问题。可先按照 "),Mn={href:"https://www.archlinuxcn.org/gnupg-2-1-and-the-pacman-keyring/",target:"_blank",rel:"noopener noreferrer"},In=(0,s.Uk)("archlinuxcn 官方说明"),Kn=(0,s.Uk)(" 执行其中的命令，再安装 "),Nn=(0,s.Wm)("code",null,"archlinuxcn-keyring",-1),Pn=(0,s.Uk)("。"),On=(0,s.Wm)("h2",{id:"_8-检查家目录"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_8-检查家目录"},"#"),(0,s.Uk)(" 8. 检查家目录")],-1),qn=(0,s.Wm)("p",null,"检查家目录下的各个常见目录是否已经创建，若没有则需通过以下命令手动创建：",-1),Gn=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token builtin class-name"},"cd"),(0,s.Uk)(" ~\n"),(0,s.Wm)("span",{class:"token function"},"ls"),(0,s.Uk)(" -hl\n"),(0,s.Wm)("span",{class:"token function"},"mkdir"),(0,s.Uk)(" Desktop Documents Downloads Music Pictures Videos\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br")])],-1),zn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:h,alt:"mkdir"})],-1),$n=(0,s.Wm)("h2",{id:"_9-设置系统为中文"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_9-设置系统为中文"},"#"),(0,s.Uk)(" 9. 设置系统为中文")],-1),jn=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Uk)("打开 "),(0,s.Wm)("code",null,"System Settings"),(0,s.Uk)(" > "),(0,s.Wm)("code",null,"Regional Settings"),(0,s.Uk)(" > 在 "),(0,s.Wm)("code",null,"Language"),(0,s.Uk)(" 中点击 "),(0,s.Wm)("code",null,"Add languages..."),(0,s.Uk)(" > 选择中文加入 "),(0,s.Wm)("code",null,"ADD"),(0,s.Uk)("，再拖拽到第一位 > 点击 "),(0,s.Wm)("code",null,"Apply")])],-1),Hn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:g,alt:"language"})],-1),Vn=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,"注销并重新登陆即可生效")],-1),Qn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:U,alt:"language-effect"})],-1),Xn=(0,s.Wm)("div",{class:"custom-container tip"},[(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,s.Wm)("p",null,[(0,s.Uk)("很多人会错误的更改 "),(0,s.Wm)("code",null,"System Settings"),(0,s.Uk)(" > "),(0,s.Wm)("code",null,"Regional Settings"),(0,s.Uk)(" > "),(0,s.Wm)("code",null,"Formats"),(0,s.Uk)(" 中的值为中文蒙古、默认或者其他值。这会导致系统中一半英文一般中文。这里的值要保持默认的 "),(0,s.Wm)("code",null,"en_US"),(0,s.Uk)(" 或 "),(0,s.Wm)("code",null,"zh_CN"),(0,s.Uk)("，或者改为你在 "),(0,s.Wm)("code",null,"locale.gen"),(0,s.Uk)(" 中添加的任意一种语言。")])],-1),Yn=(0,s.Wm)("h2",{id:"_10-安装输入法"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_10-安装输入法"},"#"),(0,s.Uk)(" 10. 安装输入法")],-1),Zn=(0,s.Uk)("如有需要可以参阅 "),Jn={href:"https://wiki.archlinux.org/index.php/Fcitx5_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},le=(0,s.Uk)("Fcitx5 官方文档"),ne=(0,s.Uk)("。"),ee=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,"通过以下命令安装相关软件包：")],-1),se=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S fcitx5-im "),(0,s.Wm)("span",{class:"token comment"},"# 输入法基础包组"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S fcitx5-chinese-addons "),(0,s.Wm)("span",{class:"token comment"},"# 官方中文输入引擎"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S fcitx5-anthy "),(0,s.Wm)("span",{class:"token comment"},"# 日文输入引擎"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S fcitx5-pinyin-moegirl "),(0,s.Wm)("span",{class:"token comment"},"# 萌娘百科词库。二刺猿必备（archlinuxcn）"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S fcitx5-material-color "),(0,s.Wm)("span",{class:"token comment"},"# 输入法主题"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"5"),(0,s.Wm)("br")])],-1),me=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,[(0,s.Uk)("此外，我们还需要设置环境变量。通过 "),(0,s.Wm)("code",null,"vim"),(0,s.Uk)(" 编辑文件 "),(0,s.Wm)("code",null,"~/.pam_environment"),(0,s.Uk)("：")])],-1),ae=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"vim"),(0,s.Uk)(" ~/.pam_environment\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),te=(0,s.Wm)("ol",{start:"3"},[(0,s.Wm)("li",null,"在文件中加入以下内容并保存退出：")],-1),ce=(0,s.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-text"},[(0,s.Wm)("code",null,"INPUT_METHOD DEFAULT=fcitx5\nGTK_IM_MODULE DEFAULT=fcitx5\nQT_IM_MODULE DEFAULT=fcitx5\nXMODIFIERS DEFAULT=\\@im=fcitx5\nSDL_IM_MODULE DEFAULT=fcitx\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"5"),(0,s.Wm)("br")])],-1),ie=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:b,alt:"fcitx5_step-1"})],-1),ue=(0,s.Wm)("p",null,"Konsole 以及 Dolphin 都需要这些环境变量，倒是 Firefox 和 Chromium 都不需要就可以输入中文。",-1),oe=(0,s.Wm)("div",{class:"custom-container tip"},[(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,s.Wm)("p",null,"检查一下是否有拼写错误。")],-1),We=(0,s.Wm)("ol",{start:"4"},[(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("打开 "),(0,s.Wm)("code",null,"系统设置"),(0,s.Uk)(" > "),(0,s.Wm)("code",null,"区域设置"),(0,s.Uk)(" > "),(0,s.Wm)("code",null,"输入法")])]),(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("点击提示信息中的 "),(0,s.Wm)("code",null,"运行 Fcitx")])])],-1),re=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:f,alt:"fcitx5_step-2"})],-1),de=(0,s.Wm)("ol",{start:"6"},[(0,s.Wm)("li",null,[(0,s.Uk)("点击 "),(0,s.Wm)("code",null,"添加输入法"),(0,s.Uk)(" > 找到简体中文下的 "),(0,s.Wm)("code",null,"Pinyin"),(0,s.Uk)(" > 点击 "),(0,s.Wm)("code",null,"添加"),(0,s.Uk)(" 即可加入拼音输入法")])],-1),pe=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:v,alt:"fcitx5_step-3"})],-1),ke=(0,s.Wm)("ol",{start:"7"},[(0,s.Wm)("li",null,[(0,s.Uk)("接下来点击 "),(0,s.Wm)("code",null,"Pinyin"),(0,s.Uk)(" 右侧的配置按钮 > 点选 "),(0,s.Wm)("code",null,"云拼音"),(0,s.Uk)(" 和 "),(0,s.Wm)("code",null,"在程序中显示预编辑文本"),(0,s.Uk)(" > 最后点击 "),(0,s.Wm)("code",null,"应用")])],-1),he=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:_,alt:"fcitx5_step-4"})],-1),ge=(0,s.Wm)("ol",{start:"8"},[(0,s.Wm)("li",null,[(0,s.Uk)("回到输入法设置 > 点击 "),(0,s.Wm)("code",null,"配置附加组件"),(0,s.Uk)(" > 找到 "),(0,s.Wm)("code",null,"Classic User Interface"),(0,s.Uk)(" > 在主题里选择一个你喜欢的颜色 > 最后点击 "),(0,s.Wm)("code",null,"应用")])],-1),Ue=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:x,alt:"fcitx5_step-5"})],-1),be=(0,s.Wm)("ol",{start:"9"},[(0,s.Wm)("li",null,"注销并重新登陆，发现已经可以在各个软件中输入中文了")],-1),fe=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:w,alt:"fcitx5_step-6"})],-1),ve=(0,s.Wm)("div",{class:"custom-container tip"},[(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,s.Wm)("p",null,[(0,s.Uk)("通过 "),(0,s.Wm)("code",null,"Ctrl"),(0,s.Uk)(" + "),(0,s.Wm)("code",null,"空格"),(0,s.Uk)(" 切换中英文输入。")])],-1),_e=(0,s.Wm)("h2",{id:"_11-启动蓝牙-若有"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_11-启动蓝牙-若有"},"#"),(0,s.Uk)(" 11. 启动蓝牙（若有）")],-1),xe=(0,s.Wm)("p",null,"通过以下命令开启蓝牙相关服务并设置开机自动启动：",-1),we=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl "),(0,s.Wm)("span",{class:"token builtin class-name"},"enable"),(0,s.Uk)(" --now bluetooth\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Ee=(0,s.Wm)("h2",{id:"_12-设置-timeshift-快照"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_12-设置-timeshift-快照"},"#"),(0,s.Uk)(" 12. 设置 Timeshift 快照")],-1),ye=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Uk)("通过以下命令安装 Timeshift"),(0,s.Wm)("sup",null,"cn / aur"),(0,s.Uk)("：")])],-1),Se=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S timeshift\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Ae=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"yay -S aur/timeshift\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),De=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:E,alt:"timeshift-install"})],-1),Le={class:"custom-container tip"},Te=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),Be=(0,s.Uk)("Timeshift"),Fe=(0,s.Wm)("sup",null,"cn",-1),Ce=(0,s.Uk)(" 目前有问题（参见 "),Re={href:"https://github.com/archlinuxcn/repo/issues/2317",target:"_blank",rel:"noopener noreferrer"},Me=(0,s.Uk)("#2317"),Ie=(0,s.Uk)("），请使用 Timeshift"),Ke=(0,s.Wm)("sup",null,"aur",-1),Ne=(0,s.Uk)("。"),Pe={class:"custom-container tip"},Oe=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),qe=(0,s.Uk)("若安装 AUR 时无法正常下载，请先参照章节 "),Ge=(0,s.Uk)("透明代理"),ze=(0,s.Uk)(" 配置透明代理。"),$e=(0,s.Wm)("ol",{start:"2"},[(0,s.Wm)("li",null,[(0,s.Wm)("p",null,"打开 Timeshift，第一次启动会自动启动设置向导")]),(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("快照类型选择 "),(0,s.Wm)("code",null,"BTRFS"),(0,s.Uk)("，点击 "),(0,s.Wm)("code",null,"下一步"),(0,s.Uk)("：")])])],-1),je=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:y,alt:"timeshift-config_step-1"})],-1),He=(0,s.Wm)("ol",{start:"4"},[(0,s.Wm)("li",null,[(0,s.Uk)("快照位置选择 "),(0,s.Wm)("code",null,"BTRFS"),(0,s.Uk)(" 分区，点击 "),(0,s.Wm)("code",null,"下一步"),(0,s.Uk)("：")])],-1),Ve=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:S,alt:"timeshift-config_step-2"})],-1),Qe={class:"custom-container tip"},Xe=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),Ye=(0,s.Wm)("p",null,[(0,s.Uk)("Timeshift 只支持快照操作系统安装在具有 Ubuntu 类型的子卷布局（"),(0,s.Wm)("code",null,"@"),(0,s.Uk)(" 和 "),(0,s.Wm)("code",null,"@home"),(0,s.Uk)(" 子卷）的 BTRFS 分区。")],-1),Ze=(0,s.Uk)("若此处提示不支持的子卷布局，请确保按照步骤 "),Je=(0,s.Uk)("7. 分区和格式化（使用 Btrfs 文件系统）"),ls=(0,s.Uk)(" 的说明分区。"),ns=(0,s.Wm)("ol",{start:"5"},[(0,s.Wm)("li",null,[(0,s.Uk)("选择快照计划，点击 "),(0,s.Wm)("code",null,"下一步"),(0,s.Uk)("：")])],-1),es=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:A,alt:"timeshift-config_step-3"})],-1),ss=(0,s.Wm)("div",{class:"custom-container tip"},[(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,s.Wm)("p",null,"由于 BTRFS 类型快照占用空间相对较小，可以适当提高快照数量。")],-1),ms=(0,s.Wm)("ol",{start:"6"},[(0,s.Wm)("li",null,[(0,s.Uk)("若希望 "),(0,s.Wm)("code",null,"/home"),(0,s.Uk)(" 用户主目录也快照，则勾选在备份中包含 "),(0,s.Wm)("code",null,"@home"),(0,s.Uk)(" 子卷，然后点击 "),(0,s.Wm)("code",null,"下一步"),(0,s.Uk)("：")])],-1),as=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:D,alt:"timeshift-config_step-4"})],-1),ts=(0,s.Wm)("ol",{start:"7"},[(0,s.Wm)("li",null,[(0,s.Uk)("点击 "),(0,s.Wm)("code",null,"完成"),(0,s.Uk)(" 结束配置")])],-1),cs=(0,s.Wm)("p",null,"自此，Timeshift 快照已经成功设置。Timeshift 将按照计划快照系统并删除久远的快照。Timeshift 快照为系统增加了一层保障。",-1),is=(0,s.Wm)("h2",{id:"✨-太棒了"},[(0,s.Wm)("a",{class:"header-anchor",href:"#✨-太棒了"},"#"),(0,s.Uk)(" ✨ 太棒了")],-1),us=(0,s.Wm)("p",null,"自此，一个可以当作日常系统使用的 archlinux 已经基本配置完成了！KDE 桌面环境经过了多年的迭代更新，已经非常完善和强大了，将 archlinux 作为日常使用的主力系统不在话下。",-1),os=(0,s.Uk)("接下来，在下一节 "),Ws=(0,s.Uk)("显卡驱动"),rs=(0,s.Uk)(" 中，我们将配置显卡驱动；然后我们将在 "),ds=(0,s.Uk)("其它可选配置"),ps=(0,s.Uk)(" 一节中做一些可选的设置 —— 包括休眠的设置、字体的设置以及使虚拟机体验更好的设置等等；然后是大概率要用到的 "),ks=(0,s.Uk)("透明代理"),hs=(0,s.Uk)("。最后将迎来 🌱 新手上路的最后一节 "),gs=(0,s.Uk)("系统美化"),Us=(0,s.Uk)("。"),bs=(0,s.Wm)("p",null,"祝你好运！",-1),fs={render:function(l,n){const e=(0,s.up)("RouterLink"),m=(0,s.up)("OutboundLink"),a=(0,s.up)("CodeGroupItem"),t=(0,s.up)("CodeGroup");return(0,s.wg)(),(0,s.j4)(s.HY,null,[L,T,(0,s.Wm)("blockquote",null,[B,(0,s.Wm)("nav",F,[(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#🏔-两岸猿声啼不住-轻舟已过万重山"},{default:(0,s.w5)((()=>[C])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#🔖-这一节将会讨论"},{default:(0,s.w5)((()=>[R])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_1-确保系统为最新"},{default:(0,s.w5)((()=>[M])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_2-准备非-root-用户"},{default:(0,s.w5)((()=>[I])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_3-安装-kde-plasma-桌面环境"},{default:(0,s.w5)((()=>[K])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_4-配置-greeter-sddm"},{default:(0,s.w5)((()=>[N])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_5-开启-32-位支持库与-arch-linux-中文社区仓库-archlinuxcn"},{default:(0,s.w5)((()=>[P])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_7-安装基础功能包"},{default:(0,s.w5)((()=>[O])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_8-检查家目录"},{default:(0,s.w5)((()=>[q])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_9-设置系统为中文"},{default:(0,s.w5)((()=>[G])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_10-安装输入法"},{default:(0,s.w5)((()=>[z])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_11-启动蓝牙-若有"},{default:(0,s.w5)((()=>[$])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#_12-设置-timeshift-快照"},{default:(0,s.w5)((()=>[j])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#✨-太棒了"},{default:(0,s.w5)((()=>[H])),_:1})])])])]),(0,s.Wm)("p",null,[V,(0,s.Wm)("a",Q,[X,(0,s.Wm)(m)]),Y]),(0,s.Wm)("div",Z,[J,(0,s.Wm)("p",null,[ll,nl,el,(0,s.Wm)("a",sl,[ml,(0,s.Wm)(m)]),al]),(0,s.Wm)("p",null,[tl,cl,il,(0,s.Wm)("a",ul,[ol,(0,s.Wm)(m)]),Wl]),rl]),dl,(0,s.Wm)("p",null,[pl,(0,s.Wm)(e,{to:"/rookie/basic-install.html"},{default:(0,s.w5)((()=>[kl])),_:1}),hl,(0,s.Wm)(e,{to:"/basic-install.html#_18-%E5%AE%8C%E6%88%90%E5%AE%89%E8%A3%85"},{default:(0,s.w5)((()=>[gl])),_:1}),Ul]),bl,fl,vl,_l,xl,wl,El,yl,Sl,Al,Dl,Ll,Tl,Bl,Fl,Cl,Rl,Ml,Il,Kl,Nl,Pl,Ol,ql,Gl,zl,$l,jl,Hl,Vl,Ql,Xl,(0,s.Wm)("div",Yl,[Zl,(0,s.Wm)("p",null,[Jl,(0,s.Wm)("a",ln,[nn,(0,s.Wm)(m)]),en]),sn]),mn,an,tn,cn,un,on,Wn,rn,(0,s.Wm)("div",dn,[pn,(0,s.Wm)("p",null,[kn,(0,s.Wm)(e,{to:"/rookie/pre-virt.html#_3-%E9%85%8D%E7%BD%AE-virtualbox"},{default:(0,s.w5)((()=>[hn])),_:1}),gn,Un,bn])]),fn,vn,_n,xn,wn,En,yn,Sn,An,Dn,Ln,(0,s.Wm)("div",Tn,[Bn,(0,s.Wm)("p",null,[Fn,Cn,Rn,(0,s.Wm)("a",Mn,[In,(0,s.Wm)(m)]),Kn,Nn,Pn])]),On,qn,Gn,zn,$n,jn,Hn,Vn,Qn,Xn,Yn,(0,s.Wm)("p",null,[Zn,(0,s.Wm)("a",Jn,[le,(0,s.Wm)(m)]),ne]),ee,se,me,ae,te,ce,ie,ue,oe,We,re,de,pe,ke,he,ge,Ue,be,fe,ve,_e,xe,we,Ee,ye,(0,s.Wm)(t,null,{default:(0,s.w5)((()=>[(0,s.Wm)(a,{title:"cn"},{default:(0,s.w5)((()=>[Se])),_:1}),(0,s.Wm)(a,{title:"aur"},{default:(0,s.w5)((()=>[Ae])),_:1})])),_:1}),De,(0,s.Wm)("div",Le,[Te,(0,s.Wm)("p",null,[Be,Fe,Ce,(0,s.Wm)("a",Re,[Me,(0,s.Wm)(m)]),Ie,Ke,Ne])]),(0,s.Wm)("div",Pe,[Oe,(0,s.Wm)("p",null,[qe,(0,s.Wm)(e,{to:"/rookie/transparent.html"},{default:(0,s.w5)((()=>[Ge])),_:1}),ze])]),$e,je,He,Ve,(0,s.Wm)("div",Qe,[Xe,Ye,(0,s.Wm)("p",null,[Ze,(0,s.Wm)(e,{to:"/rookie/basic-install.html#_7-%E5%88%86%E5%8C%BA%E5%92%8C%E6%A0%BC%E5%BC%8F%E5%8C%96-%E4%BD%BF%E7%94%A8-btrfs-%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F"},{default:(0,s.w5)((()=>[Je])),_:1}),ls])]),ns,es,ss,ms,as,ts,cs,is,us,(0,s.Wm)("p",null,[os,(0,s.Wm)(e,{to:"/rookie/graphic-driver.html"},{default:(0,s.w5)((()=>[Ws])),_:1}),rs,(0,s.Wm)(e,{to:"/rookie/optional-cfg.html"},{default:(0,s.w5)((()=>[ds])),_:1}),ps,(0,s.Wm)(e,{to:"/rookie/transparent.html"},{default:(0,s.w5)((()=>[ks])),_:1}),hs,(0,s.Wm)(e,{to:"/rookie/beauty.html"},{default:(0,s.w5)((()=>[gs])),_:1}),Us]),bs],64)}}}}]);