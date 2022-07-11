/* Metadata */

const atuiKernel_Metadata = {
     name : "ATUI",
     author : "alcapitan (on GitHub)",
     version : "developer branch",
     website : "https://github.com/alcapitan/atui",
}
atuiKernel_MetadataDisplay(atuiKernel_Metadata);


/* Metadata display */

function atuiKernel_MetadataDisplay(infos)
{
     console.group("Metadata of " + infos["name"]);
     console.log("Author : " + infos["author"]);
     console.log("Version : " + infos["version"]);
     console.log("Website : " + infos["website"]);
     console.groupEnd();
}


/* Height carousel */

try // Ne peut pas fonctionner sous about.html du kernel
{
     const atuiKernel_Header = document.getElementById("atuiKernel_Header");
     const atuiKernel_HeaderAside = atuiKernel_Header.childNodes[1];
     atuiKernel_Header.style.minHeight = atuiKernel_HeaderAside.clientHeight + "px";
     const atuiKernel_Carousel = atuiKernel_Header.childNodes[3];
     if (document.documentElement.clientWidth > 767)
     {
          const atuiKernel_CarouselHeight = atuiKernel_Carousel.clientHeight + (atuiKernel_HeaderAside.clientHeight * 2);
          atuiKernel_Carousel.style.height = atuiKernel_CarouselHeight + "px";
     }
     atuiKernel_Carousel.style.paddingTop = atuiKernel_HeaderAside.clientHeight + "px";
}
catch{}

/* Display mode */

try
{
     const atuiKernel_ToolsSettingsDisplaymodeElement = document.getElementById("atuiKernel_ToolsSettingsDisplaymode").childNodes[1];
     atuiKernel_ToolsSettingsDisplaymodeElement.addEventListener("click",atuiKernel_ToolsSettingsDisplaymodeChange);
     let atuiKernel_ToolsSettingsDisplaymodeStatus = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
     if (!atuiKernel_ToolsSettingsDisplaymodeStatus)
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = true;
          atuiKernel_ToolsSettingsDisplaymodeChange()
     }
}
catch{}

function atuiKernel_ToolsSettingsDisplaymodeChange()
{
     const atuiKernel_ToolsSettingsDisplaymodeElement = document.getElementById("atuiKernel_ToolsSettingsDisplaymode").childNodes[1];
     if (atuiKernel_ToolsSettingsDisplaymodeStatus)
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = false;
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src","atui/kernel/medias/dark.png");
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt","Mode sombre activé");
          atuiKernel_ColorschemeGeneratorAuto(undefined);
     }
     else
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = true;
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src","atui/kernel/medias/light.png");
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt","Mode clair activé");
          atuiKernel_ColorschemeGeneratorAuto(undefined);
     }
}


/* Color scheme */

function atuiKernel_ColorschemeGenerator(base,isDarkMode,wantOpacity)
{
     // Diff color
     diffColor = [];
     for (let counter = 0;counter < 3;counter++)
     {
          diffColor.push(base[counter]);
     }
     for (let counter = 0;counter < 3;counter++)
     {
          diffColor.push(255 - base[counter]);
     }

     // Step color
     stepColor = []
     for (let counter = 0;counter < 6;counter++)
     {
          stepColor.push(diffColor[counter] / 5);
     }
     
     // Color scheme
     schemeColor = [[0,0,0]];
     for (let tones = 1;tones < 5;tones++)
     {
          tone = [];
          for (let primary = 0;primary < 3;primary++)
          {
               tone.push(Math.round(stepColor[primary]*tones));
          }
          schemeColor.push(tone);
     }
     schemeColor.push([Math.round(base[0]),Math.round(base[1]),Math.round(base[2])]);
     for (let tones = 1;tones < 5;tones++)
     {
          tone = [];
          for (let primary = 0;primary < 3;primary++)
          {
               tone.push(Math.round(base[primary] + (stepColor[primary + 3] * tones)));
          }
          schemeColor.push(tone);
     }
     schemeColor.push([255,255,255]);
     if (isDarkMode)
     {
          schemeColor = schemeColor.reverse();
     }
     
     // Apply
     const root = document.documentElement;
     for (let variable = 0;variable < 11;variable++)
     {
          // Replace 10 by F
          variableText = variable;
          if (variable == 10)
          {
               variableText = "F";
          }

          // Set opacity or no
          if (wantOpacity)
          {
               opacity = 0.8;
               codeColor = 'rgba(' + schemeColor[variable][0] + ',' + schemeColor[variable][1] + ',' + schemeColor[variable][2] + ',' + opacity + ')';
               opacityText = "B";
          }
          else
          {
               codeColor = 'rgb(' + schemeColor[variable][0] + ',' + schemeColor[variable][1] + ',' + schemeColor[variable][2] + ')';
               opacityText = "O";
          }

          // Is an accent color or no
          if (base.toString() == [127.5,127.5,127.5].toString())
          {
               accentText = "B";
          }
          else
          {
               accentText = "A";
               document.querySelector("meta[name=theme-color]").setAttribute("content",'rgb(' + schemeColor[5][0] + ',' + schemeColor[5][1] + ',' + schemeColor[5][2] + ')');
          }

          nameColor = '--atuiKernel_Colorscheme' + opacityText + accentText + variableText;

          root.style.setProperty(nameColor,codeColor);
     }
}

function atuiKernel_ColorschemeGeneratorPack(bicolor,accent,isDarkMode)
{
     if (bicolor)
     {
          atuiKernel_ColorschemeGenerator([127.5,127.5,127.5],isDarkMode,false);
          atuiKernel_ColorschemeGenerator([127.5,127.5,127.5],isDarkMode,true);
     }
     if (accent != undefined)
     {
          atuiKernel_ColorschemeGenerator(accent,isDarkMode,false);
          atuiKernel_ColorschemeGenerator(accent,isDarkMode,true);
     }
}

let defaultAccent = [230, 51, 0];
function atuiKernel_ColorschemeGeneratorAuto(accent)
{
     if (accent != undefined)
     {
          defaultAccent = accent;
     }
     if (typeof(atuiKernel_ToolsSettingsDisplaymodeStatus) == 'undefined') // Pour about.html dans kernel
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = true;
     }
     atuiKernel_ColorschemeGeneratorPack(true,defaultAccent,atuiKernel_ToolsSettingsDisplaymodeStatus);
}
atuiKernel_ColorschemeGeneratorAuto(undefined);

/* Footer info */

try
{
     const atuiKernel_FooterInfo = document.getElementById("atuiKernel_FooterInfo");
}
catch{}

function atuiKernel_FooterLastedited(day,month,year)
{
     /* Warning date not updated */
     const atuiKernel_FooterInfoDate = new Date();
     if ((atuiKernel_FooterInfoDate.getDate() != day || atuiKernel_FooterInfoDate.getMonth() + 1 != month || atuiKernel_FooterInfoDate.getFullYear() != year) && atuiKernel_Metadata['version'] == 'developer branch')
     {
          console.warn("The last modification date may be not up to date. ");
     }

     /* Based on ATUI */
     const atuiKernel_FooterInfoBased = document.createElement("a");
     atuiKernel_FooterInfoBased.setAttribute('href',atuiKernel_Metadata["website"]);
     atuiKernel_FooterInfoBased.setAttribute('target','_blank');
     atuiKernel_FooterInfoBased.innerHTML = "Ce site utilise " + atuiKernel_Metadata["name"] + " " + atuiKernel_Metadata["version"] + ". ";
     atuiKernel_FooterInfo.appendChild(atuiKernel_FooterInfoBased);

     /* Last modification of this website */
     const atuiKernel_FooterInfoLasteditedText = document.createElement("a");
     const atuiKernel_FooterInfoLasteditedConvertMonth = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
     month = atuiKernel_FooterInfoLasteditedConvertMonth[month-1];
     atuiKernel_FooterInfoLasteditedText.innerHTML = "Dernière modification le " + day + " " + month + " " + year + ". ";
     atuiKernel_FooterInfoLasteditedText.setAttribute('href','./atui/kernel/about.html');
     atuiKernel_FooterInfoLasteditedText.setAttribute('target','_blank');
     atuiKernel_FooterInfo.insertBefore(atuiKernel_FooterInfoLasteditedText,atuiKernel_FooterInfo.firstChild);
}


/* Notifications */

function atuiKernel_NotificationClose(element)
{
     element.remove();
}

try
{
     const atuiKernel_Notification = document.getElementById("atuiKernel_Notification");
}
catch{}
// Types available : normal, alert, caution, confirmation, information, insertion
function atuiKernel_NotificationDisplay(type,buttons,actions,title,text)
{
     // Notification element
     const atuiKernel_NotificationElement = document.createElement('aside');
     atuiKernel_NotificationElement.classList.add("atuiKernel_NotificationElement");
     const atuiKernel_NotificationElementHeader = document.createElement('div');
     const atuiKernel_NotificationElementFooter = document.createElement('div');

     // Type
     const atuiKernel_NotificationElementHeaderTypeImg = document.createElement('img');
     if (type != "normal")
     {
          atuiKernel_NotificationElementHeaderTypeImg.setAttribute("src","atui/kernel/medias/" + type + ".png");
     }
     else
     {
          atuiKernel_NotificationElementHeaderTypeImg.style.visibility = "hidden";
     }

     // Sound
     const atuiKernel_NotificationElementSound = new Audio("atui/kernel/medias/notification.mp3");
     
     // Title
     const atuiKernel_NotificationElementHeaderTitle = document.createElement('h3');
     atuiKernel_NotificationElementHeaderTitle.textContent = title;
     
     // Close button
     const atuiKernel_NotificationElementHeaderClose = document.createElement('img');
     atuiKernel_NotificationElementHeaderClose.setAttribute("src","atui/kernel/medias/close.png");
     atuiKernel_NotificationElementHeaderClose.addEventListener("click",function(){atuiKernel_NotificationClose(atuiKernel_NotificationElement);return(console.log("close"))});

     // Text
     const atuiKernel_NotificationElementText = document.createElement('p');
     atuiKernel_NotificationElementText.textContent = text;

     // Action buttons
     if (buttons == 'default')
     {
          if (type == 'normal')
          {
               buttons = [];
          }
          else if (type == 'alert')
          {
               buttons = ['Ok','Annuler'];
          }
          else if (type == 'caution')
          {
               buttons = ['Ok','Annuler'];
          }
          else if (type == 'confirmation')
          {
               buttons = ['Oui','Non'];
          }
          else if (type == 'information')
          {
               buttons = ['Ok'];
          }
          else if (type == 'insertion')
          {
               buttons = 'insertion';
          }
     }
     if (buttons != 'insertion')
     {
          for (let counter = 0;counter < buttons.length;counter++)
          {
               const atuiKernel_NotificationElementFooterButton = document.createElement('button');
               atuiKernel_NotificationElementFooterButton.textContent = buttons[counter];
               atuiKernel_NotificationElementFooterButton.addEventListener("click",function(){atuiKernel_NotificationClose(atuiKernel_NotificationElement);return(actions[counter]);})
               atuiKernel_NotificationElementFooter.appendChild(atuiKernel_NotificationElementFooterButton);
          }
     }
     else
     {
          const atuiKernel_NotificationElementFooterInput = document.createElement('input');
          atuiKernel_NotificationElementFooterInput.setAttribute("type","text");
     }

     // Insertion des éléments dans HTML
     atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderTypeImg);
     atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderTitle);
     atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderClose);
     atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementHeader);
     atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementText);
     atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementFooter);
     atuiKernel_Notification.appendChild(atuiKernel_NotificationElement);

     // Son joué
     atuiKernel_NotificationElementSound.play();

     // Attendre puis fermer la notification
     if (type == "normal")
     {
          setTimeout(function(){atuiKernel_NotificationClose(atuiKernel_NotificationElement)},5000);
     }
}

function atuiKernel_NotificationClose(element)
{
     element.remove();
}

function atuiKernel_NotificationCookies()
{
     atuiKernel_NotificationDisplay("cookies",["J'accepte","Je refuse cette fois-ci","Je refuse définitivement","En savoir plus"],["console.log('accept')","console.log('not accept')","console.log('always notaccept')","console.log('doc')"],"Autoriser-vous les cookies ?","Ce site utilise des traceurs collectant des informations sur vous. Selon le RGPD, vous pouvez exprimer votre consentement à l'utilisation des cookies.");
}


/* Shields */

// Script en phase de test disponible dans la branche git dev-shields


/* Context Menu */

function atuiKernel_ToolsContextmenuDisplay(element,wish)
{
     cible = element.childNodes[3]; /* Context menu */
     element = element.childNodes[1]; /* Trigger */
     if (!wish)
     {
          cible.style.visibility = "hidden";
          cible.style.top = "0";
          cible.style.left = "0";
          element.style.fontWeight = "normal";
          element.style.textDecoration = "none";
     }
     else
     {
          elementPositionXShift = cible.getBoundingClientRect().x; /* Décalage X écran conteneur */
          elementPositionYShift = cible.getBoundingClientRect().y; /* Décalage Y écran conteneur */
          elementPositionX = element.getBoundingClientRect().x + 20; /* Position left sur l'écran du récepteur */
          elementPositionY = element.getBoundingClientRect().y + 20; /* Position top sur l'écran du récepteur */
          element.style.fontWeight = "bold";
          element.style.textDecoration = "underline";
          if (elementPositionX + cible.clientWidth > document.documentElement.clientWidth)  // Overflow droite
          {
               elementPositionX = elementPositionX - cible.clientWidth;
          }
          elementPositionX = elementPositionX - elementPositionXShift;
          elementPositionX = elementPositionX + "px";
          cible.style.left = elementPositionX;
          if (elementPositionY + cible.clientHeight > window.innerHeight)  // Overflow bas
          {
               elementPositionY = elementPositionY - cible.clientHeight;
          }
          elementPositionY = elementPositionY - elementPositionYShift;
          elementPositionY = elementPositionY + "px";
          cible.style.top = elementPositionY;
          cible.style.visibility = "visible";
     }
}

function atuiKernel_ToolsContextmenu(cible)
{
     document.getElementById(cible).addEventListener("mouseenter",function(){atuiKernel_ToolsContextmenuDisplay(this,true);});
     document.getElementById(cible).addEventListener("mouseleave",function(){atuiKernel_ToolsContextmenuDisplay(this,false);});     
}


/* Global Panel */

// Va bientôt être supprimé au profit d'une fusion avec le script de Context Menu quand il supportera la responsive.

function atuiKernel_NavigatorGlobalpanelDisplay(element,wish)
{
     cible = element.childNodes[3];
     element = element.childNodes[1];
     if (!wish)
     {
          cible.style.visibility = "hidden";
          element.style.fontWeight = "normal";
          element.style.textDecoration = "none";
     }
     else
     {
          element.style.fontWeight = "bold";
          element.style.textDecoration = "underline";
          offsetTop = element.offsetTop + 30;
          offsetTop = offsetTop + "px";
          cible.style.top = offsetTop;
          cible.style.visibility = "visible";
     }
}

function atuiKernel_NavigatorGlobalpanel(cible)
{
     document.getElementById(cible).addEventListener("mouseover",function(){atuiKernel_NavigatorGlobalpanelDisplay(this,true);});
     document.getElementById(cible).addEventListener("mouseout",function(){atuiKernel_NavigatorGlobalpanelDisplay(this,false);});     
}


/* Infotip */

function atuiKernel_ToolsInfotip(cible)
{
     document.getElementById(cible).addEventListener("mouseenter",function(){atuiKernel_ToolsContextmenuDisplay(this,true);});
     document.getElementById(cible).addEventListener("mouseleave",function(){atuiKernel_ToolsContextmenuDisplay(this,false);});     
}

