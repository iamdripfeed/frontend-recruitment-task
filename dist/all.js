class BaseComponent{constructor(t=null,e="div",n=[],o,s="",i=""){this.parentNode=t,this.element=document.createElement(e),this.element.classList.add(...n),this.element.innerHTML=""+s,this.element.id=i,t&&this.create()}create(){this.parentNode.appendChild(this.element)}setContent(t){this.element.innerHTMl=""+t}destroy(){this.element.remove()}}import{BaseComponent}from"./BaseComponent.js";import{ModalWindow}from"./modal.js";const title="Lorem ipsum";class StartPage{constructor(t){this.parentElement=t,this.container=new BaseComponent(this.parentElement,"section",["start"]),this.heroElement=new BaseComponent(this.container.element,"img"),this.contentElement=new BaseComponent(this.container.element,"div",["start_content"]),this.contentTitle=new BaseComponent(this.contentElement.element,"h2",["start_content-title"],"",""+title),this.contentText=new BaseComponent(this.contentElement.element,"p",["start_content-text"],"",""+title),this.contentButton=new BaseComponent(this.contentElement.element,"button",["start_content-button"],"","button"),this.contentButton.element.addEventListener("click",()=>{new ModalWindow(this.parentElement,this.getCurrentCount())})}getCurrentCount(){this.count=Number(localStorage.getItem("counter")),console.log(this.count)}}export default StartPage;import StartPage from"./StartPage.js";window.onload=()=>{var t=document.getElementById("app");if(!t)throw Error("App root element");new StartPage(t)};import{BaseComponent}from"./BaseComponent.js";const str="You have clicked X times to related button.";class ModalWindow extends BaseComponent{constructor(t,e){super(t,"div",["cover"],""),this.parentElement=t,this.clickCount=e??0,this.popup=new BaseComponent(this.element,"div",["popup","hidden"],"",'<h2 class="popup_title">Alert<h2>'),this.popupContent=new BaseComponent(this.popup.element,"div",["popup_content"],"",`You have clicked ${this.clickCount} times to related button.`),this.buttonClose=new BaseComponent(this.popup.element,"button",["popup_close"],"","<img >"),this.buttonClose.element.onclick=()=>{this.destroy()}}onClose(){}}export{BaseComponent,title,str,ModalWindow};