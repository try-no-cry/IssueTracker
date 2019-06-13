
var idNo=0;
// create div ,span,li,button,paragraph
function createElm(el,className,text){
    var el=document.createElement(el);
    
    if(text){
        el.innerText=text;
    }
    
    if(className){
        el.classList.add(className);
     }
    
    return el;
    
}

//create image

function createImg(alt,name){
    var img=document.createElement("img");
    
    if(name==="severe"){
    img.setAttribute("src","images/id.png");}
    
    if(name==="time"){
     img.setAttribute("src","images/transparent_clock.png")}
    
    if(alt){
        img.setAttribute("alt",alt);
    }
    
    
    
    return img;
}


var ul=document.getElementById("uList");


function createList(realIssue,issueStatus,issueSeverity,assignedPerson,ID){
    
    var li=createElm("li");
        var h5=createElm("h5","issueID","Issue-ID: "+ID);
        li.append(h5);
        
        var div=createElm("div","issueStatus",issueStatus);
        li.append(div);
    
        var p=createElm("p","realIssue",realIssue);
        li.append(p);
    
        var spanTime=createElm("span","timeImage","");
            var imgT=createImg("$","time");
            spanTime.append(imgT);
        li.append(spanTime);
    
        var spanSeverity=createElm("span","issueSeverity",issueSeverity);
            
        li.append(spanSeverity);
    
       var spanSevImg=createElm("span","personImage");
           var imgS=createImg("#","severe");
           spanSevImg.append(imgS);
       li.append(spanSevImg);
    
       var spanAssigned=createElm("span","assignedPerson",assignedPerson);
       li.append(spanAssigned);
    
       var div=createElm("div","decisionButton");
           var btnClose=createElm("button","closeBtn","Close");
           var btnDel=createElm("button","deleteBtn","Delete");
           div.append(btnClose);
           div.append(btnDel);
       li.append(div);
    
    
    
    if(ul.hasChildNodes){
        let ch=ul.childNodes[0];
        ul.insertBefore(li,ch);
    }
    else ul.append(li);
    
    return ul;
}

var addBtn=document.getElementById("addIssue");
var issueDes=document.getElementById("Description");
var severe=document.querySelector("select");
var assignedPerson=document.getElementById("responsible");


addBtn.addEventListener("click", function(e){
    
    
    if(issueDes.value!="" && assignedPerson.value!=""){
    idNo++;
    
    var description=issueDes.value;
    var severity=severe.value;
    var respPers=assignedPerson.value;
   
    
    createList(description,"Open",severity,respPers,idNo);
    
    
    
    var closeButton=document.querySelector(".closeBtn");
    
    
    
    closeButton.addEventListener("click", function(){
       
        let parent=closeButton.parentElement.parentElement;
        let issStat=parent.querySelector(".issueStatus");
         issStat.innerHTML="Close";
    });
    
    
    issueDes.value="";
    severe.value="High";
    assignedPerson.value="";
  

    
    
   
    }
});


document.addEventListener("click",function(e){
    if(ul.hasChildNodes){
        if(e.target.className==="deleteBtn"){
            let parent=e.target.parentElement.parentElement;
            
            parent.parentElement.removeChild(parent);
            
        }
    }
})





