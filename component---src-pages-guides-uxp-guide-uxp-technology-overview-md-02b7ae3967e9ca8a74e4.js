(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{ykSc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));var i=n("wx14"),a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("LHWr"),s=(n("qKvR"),{}),r={_frontmatter:s},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.mdx)(c,Object(i.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"uxp-technology-overview"},"UXP Technology Overview"),Object(l.mdx)("p",null,"The definitive reference guide for UXP can be found ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"tbd"}),"here"),", but this section has a brief overview of some key UXP concepts."),Object(l.mdx)("h2",{id:"plugin-folder-structure"},"Plugin Folder Structure"),Object(l.mdx)("p",null,"A UXP plugin is contained in a single folder, which may contain any number of subfolders. At a minimum, it requires these files at the folder's top level:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"A ",Object(l.mdx)("a",Object(i.a)({parentName:"li"},{href:"./uxp-manifest.md"}),"manifest.json")," file. The manifest  identifies a plugin (with a globally unique ID), describes the plugin, identifies its entry points, and more. If your manifest file is malformed or missing pieces, your plugin will not load. No executable code goes in the manifest, only the JSON description of your plugin.")),Object(l.mdx)("p",null,"The manifest describes one or more entry points, which define strings that show up in the Plugins menu."),Object(l.mdx)("p",null,"The manifest also contains ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"plugin-icons.md"}),"icon definitions")," describing icons that appear in Photoshop's Plugins panel, and in collapsed panels."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"At least one JavaScript file that contains the plugin's executable code.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Optionally, if the plugin provides a user interface, one or more HTML files that define that UI.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Plugins using React require additional components, including ",Object(l.mdx)("inlineCode",{parentName:"p"},"package.json")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"webpack.config.js")," files."))),Object(l.mdx)("h2",{id:"key-uxp-features"},"Key UXP Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"File access - UXP can read and write files and folders in the user's filesystem. File accesses outside of the plugin's root folder and a temporary folder require the user's permission. File I/O is discussed ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"./file-access.md"}),"here"),". ")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Network access - UXP supports XMLHttpRequest, WebSockets, and Fetch APIs. Network access is discussed ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"./network-io.md"}),"here"),".")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Spectrum CSS - UXP plugins can use platform-native HTML components such as buttons, input fields, etc. But a plugin can also use Spectrum CSS components.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Localization\nIf you want your plugins to be used internationally, you should localize them. ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"./localization-and-platforms.md"}),"Here's how to localize your plugins"),".")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Flyout menus")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"JSON: UXP, being rooted in modern JavaScript, has the JSON features you would expect. These include JSON."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-uxp-technology-overview-md-02b7ae3967e9ca8a74e4.js.map