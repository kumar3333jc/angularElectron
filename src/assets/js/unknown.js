
	
function downloadData(contentType,data,filename){
   var link=document.createElement("A");
   link.setAttribute("href",encodeURI("data:"+contentType+","+data));
   link.setAttribute("style","display:none");
   link.setAttribute("download",filename);
   document.body.appendChild(link); //needed for firefox
   console.log(link.outerHTML);
   if (navigator.msSaveBlob) 
{ // IE 10+
var blobObject = new Blob([data]);


window.navigator.msSaveBlob(blobObject, filename);
}
   link.click();
   setTimeout(function(){
   	document.body.removeChild(link);
   },1000);
}

function fromToXml(form){
    var xmldata=['<?xml version="1.0"?>'];
	  xmldata.push("<form>");
    var inputs=form.elements;
    for(var i=0;i<inputs.length;i++){
    	var el=document.createElement("ELEMENT");
      if (inputs[i].name){
      	el.setAttribute("name",inputs[i].name);
        el.setAttribute("value",inputs[i].value);
        xmldata.push(el.outerHTML);
      }
    }
    xmldata.push("</form>");
    return xmldata.join("\n");
}

function fromToText(form){
    var xmldata=['<![CDATA'];
	  xmldata.push("[");
    var inputs=form.elements;
    for(var i=0;i<inputs.length;i++){
    	var el=document.createElement("ELEMENT");
      if (inputs[i].name){
      	el.setAttribute("name",inputs[i].name);
        el.setAttribute("value",inputs[i].value);
        xmldata.push(el.outerHTML);
      }
    }
    xmldata.push("]]>");
    return xmldata.join("\n");
}

function download(frm){
  var data=fromToXml(frm);
  console.log(data);
  downloadData("text/xml",data,"export.xml");
}
function download1(frm){
  var data=fromToText(frm);
  console.log(data);
  downloadData("text",data,"save.txt");
}

function saveTextAsFile()
{

    var First_Name = document.getElementById("First_Name").value;
	var Middle_Name = document.getElementById("Middle_Name").value;
	var Last_Name = document.getElementById("Last_Name").value;
	var Pan = document.getElementById("Pan").value;
	var Gender = document.getElementById("Gender").value;
	var Date_of_Birth = document.getElementById("Date_of_Birth").value;
	
	var salary = document.getElementById("salary").value;
	var Type_of_House_Property = document.getElementById("Type_of_House_Property").value;
	var Income_from_One_House_Property = document.getElementById("Income_from_One_House_Property").value;
	var Income_from_Other_Sources = document.getElementById("Income_from_Other_Sources").value;
	
	var checkbox1 = document.getElementById("checkbox1").value;
	var Tan_1 = document.getElementById("Tan_1").value;
	var Name_of_Employer_1 = document.getElementById("Name_of_Employer_1").value;
	var Income_chargeable_1 = document.getElementById("Income_chargeable_1").value;
	var Total_tax_deducted_1 = document.getElementById("Total_tax_deducted_1").value;
	
	var checkbox2 = document.getElementById("checkbox2").value;
	var Tan_2 = document.getElementById("Tan_2").value;
	var Name_of_Employer_2 = document.getElementById("Name_of_Employer_2").value;
	var Income_chargeable_2 = document.getElementById("Income_chargeable_2").value;
	var Total_tax_deducted_2 = document.getElementById("Total_tax_deducted_2").value;
	
	var checkbox3 = document.getElementById("checkbox3").value;
	var Tan_3 = document.getElementById("Tan_3").value;
	var Name_of_Employer_3 = document.getElementById("Name_of_Employer_3").value;
	var Income_chargeable_3 = document.getElementById("Income_chargeable_3").value;
	var Total_tax_deducted_3 = document.getElementById("Total_tax_deducted_3").value;
	
	
	
	
	var Advance_Tax = document.getElementById("Advance_Tax").value;
	var TDS = document.getElementById("TDS").value;
	var Self_Assessment_Tax = document.getElementById("Self_Assessment_Tax").value;
	
	var Total_Taxes_Paid = document.getElementById("Total_Taxes_Paid").value;
	var Tax_Payable = document.getElementById("Tax_Payable").value;
	var Refund = document.getElementById("Refund").value;
	
	
	
	
	
	
	var textToSave = First_Name + "~~~" + Middle_Name + "~~~" + Last_Name + "~~~" +
	                 Pan + "~~~" + Gender + "~~~" + Date_of_Birth + "~~~" + salary
					 + "~~~" + Type_of_House_Property  + "~~~" + Income_from_One_House_Property
					 + "~~~" + Income_from_Other_Sources + "~~~" + checkbox1 + "~~~" + Tan_1
					 + "~~~" + Name_of_Employer_1 + "~~~" + Income_chargeable_1 + "~~~" + Total_tax_deducted_1  + "~~~" + checkbox2 + "~~~" + Tan_2
					 + "~~~" + Name_of_Employer_2 + "~~~" + Income_chargeable_2 + "~~~" + Total_tax_deducted_2  + "~~~" + checkbox3 + "~~~" + Tan_3
					 + "~~~" + Name_of_Employer_3 + "~~~" + Income_chargeable_3 + "~~~" + Total_tax_deducted_3  + "~~~" + Advance_Tax + "~~~" + TDS + "~~~" + Self_Assessment_Tax + "~~~" + Total_Taxes_Paid + "~~~" + Tax_Payable
					 + "~~~" + Refund
					 
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    //var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = "text";
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}


    function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function loadFileAsText()
{
	debugger
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
	debugger
        var textFromFileLoaded = fileLoadedEvent.target.result;
		textFromFileLoaded = textFromFileLoaded.split("~~~");
        document.getElementById("First_Name").value = textFromFileLoaded[0];
		document.getElementById("Middle_Name").value = textFromFileLoaded[1];
		document.getElementById("Last_Name").value = textFromFileLoaded[2];
		document.getElementById("Pan").value = textFromFileLoaded[3];
		document.getElementById("Gender").value = textFromFileLoaded[4];
		document.getElementById("Date_of_Birth").value = textFromFileLoaded[5];
		document.getElementById("salary").value = textFromFileLoaded[6];
		document.getElementById("Type_of_House_Property").value = textFromFileLoaded[7];
		document.getElementById("Income_from_One_House_Property").value = textFromFileLoaded[8];
		document.getElementById("Income_from_Other_Sources").value = textFromFileLoaded[9];
		document.getElementById("checkbox1").value = textFromFileLoaded[10];
		document.getElementById("Tan_1").value = textFromFileLoaded[11];
		document.getElementById("Name_of_Employer_1").value = textFromFileLoaded[12];
		document.getElementById("Income_chargeable_1").value = textFromFileLoaded[13];
		document.getElementById("Total_tax_deducted_1").value = textFromFileLoaded[14];
		document.getElementById("checkbox2").value = textFromFileLoaded[15];
		document.getElementById("Tan_2").value = textFromFileLoaded[16];
		document.getElementById("Name_of_Employer_2").value = textFromFileLoaded[17];
		document.getElementById("Income_chargeable_2").value = textFromFileLoaded[18];
		document.getElementById("Total_tax_deducted_2").value = textFromFileLoaded[19];
		
		document.getElementById("checkbox3").value = textFromFileLoaded[20];
		document.getElementById("Tan_3").value = textFromFileLoaded[21];
		document.getElementById("Name_of_Employer_3").value = textFromFileLoaded[22];
		document.getElementById("Income_chargeable_3").value = textFromFileLoaded[23];
		document.getElementById("Total_tax_deducted_3").value = textFromFileLoaded[24];
		
		
		document.getElementById("Advance_Tax").value = textFromFileLoaded[25];
		document.getElementById("Tan_2").value = textFromFileLoaded[26];
		document.getElementById("TDS").value = textFromFileLoaded[27];
		document.getElementById("Self_Assessment_Tax").value = textFromFileLoaded[28];
		document.getElementById("Total_Taxes_Paid").value = textFromFileLoaded[29];
		
		document.getElementById("Tax_Payable").value = textFromFileLoaded[30];
		document.getElementById("Refund").value = textFromFileLoaded[31];
		
		
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}