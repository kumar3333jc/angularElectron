var bootstrapaccordion1_properties = {
	EditIcon:{
    
			actions: {
				
				setPropertyHTML : function(OBJ,srcID)
				{
						optionString='<option value="down">DownErrow</option><option value="plus">Plus</option>';
		
						var HTML=' <li class="tiles_properties" id="modalSize" style=" margin-left: -20%;border-top: 1px solid #ddd;padding:8px;"> <span>' + OBJ.labelName + '</span> <div style="margin-top:-20px;margin-left:47%;"><div class="form-group">             <select class="form-control" id="sel1">         <option>plus</option>         <option>Arrows</option>               </select></div></div> </li>';
						return HTML;
						  
				},
				setPropertyValue : function(OBJ,srcID)
				{
					
					var elmId = OBJ.targetIdenfierName.substring(1)
					console.log('setPropertyValue  ::'+JSON.stringify(OBJ));
					//var picon=OBJ.global_comp_obj["icon"];
					console.log(parent.global_comp_obj[elmId].icon)
					parent.$('#sel1').val(""+parent.global_comp_obj[elmId].icon);
					
					return '';
				},
				getPropertyValue : function(OBJ,srcID,destID,currentHTML)
				{
					
								
					var elmId = OBJ.targetIdenfierName.substring(1)
					parent.$("#sel1").on("change",function(){
					var opt=parent.$("#sel1").val();
					parent.global_comp_obj[elmId].icon=opt;
					attachOnloadScript(elmId,parent.global_comp_obj[elmId])
					
				
					
					});
						
					return '';
				}
			}

			

				},
	accordianSettings:{
								
			actions: {
											
							setPropertyHTML : function(OBJ,srcID)
									{
										
										
											
								
									
									var HTML=' <li class="tiles_properties"  style=" margin-left: -20%;border-top: 1px solid #ddd;padding:8px;"><div id="anchor"></div><input type="button"  title="update panel data " class="btn btn-primary"  id="USN_accoridon_data_update" style="margin-left: 43%;" value="update"></li>';
									
											
									return HTML;		
												
													
									},
									setPropertyValue : function(OBJ,srcID)
									{
										   function ra()
												{

													return '_' + Math.random().toString(36).substr(2, 8);
												}
											var elmId = JSON.parse(parent.global_comp_obj[OBJ.targetIdenfierName.substring(1)].dataSource);
											 console.log(elmId)
												for(var i=0;i<= elmId.length-1;i++)
												{
													var head,body;
										               if(elmId[i].headcss==undefined)
													   {
														   head="";
													   }
													   else
													   {
														   head=elmId[i].headcss;
													   }  
														if(elmId[i].bodycss==undefined)
													   {
														   body="";
													   }
													   else
													   {
														  body=elmId[i].bodycss;
													   }													   
								
													parent.$("#anchor").append('<div class= "USN_panneldiv" id="'+ra()+'"  style="border-bottom: solid 1px;width: 100%; margin-bottom: 10px;"><span>panel Header</span><div   class="form-group" style="margin-top:-20px;margin-left:40%;"><input style="margin-left: 8px" type="text" class=" form-control"  value='+ elmId[i].name+'></div><span>panel Body</span><div style="margin-top:-20px;margin-left:40%;"><input style="margin-left: 8px" type="text" class=" form-control" value='+ elmId[i].data+'></div> <span>panelHeadeCss</span><div style="margin-top:-20px;margin-left:40%;"><input  style="margin-left: 8px" type="text" class=" form-control" value='+ head+'></div><span>panelBodycss</span><div style="margin-top:-20px;margin-left:40%;"><input style="margin-left: 8px" type="text" class=" form-control" value='+body+'  ></div><span style="margin-left: 82%"><i  class="fa   fa-plus USN_pannel_adding" data-toggle="tooltip" title="Add new panel"></i></span><span style="    margin-left: 2%"><i class="fa fa-minus USN_pannel_remove" data-toggle="tooltip" title="Delete panel"></i></span></div>')
													
												}
												
												parent.$("body").off("click",'.USN_pannel_adding').on("click",".USN_pannel_adding",function(e)
												{
												
												       var inputs=$(e.currentTarget).parent().parent().find('input')
													   console.log(inputs[0])
												    if(inputs[0].value==""||inputs[1].value=="")
													{
														inputs[0].focus();
														alert("please fill the data to add new panel")
													}
													else
													{
													
														$('<div class= "USN_panneldiv" style="border-bottom: solid 1px;width: 100%; margin-bottom: 10px;"><span>panel Header</span><div class="form-group" style="margin-top:-20px;margin-left:40%;"><input style="margin-left: 8px" type="text" class=" form-control"  ></div><span>panel Body</span><div style="margin-top:-20px;margin-left:40%;"><input   style="margin-left: 8px" type="text" class=" form-control"></div> <span>panelHeadCss</span><div style="margin-top:-20px;margin-left:40%;"><input style="margin-left: 8px" type="text" class=" form-control"></div><span>panelBodyCss</span><div style="margin-top:-20px;margin-left:40%;"><input style="margin-left: 8px" type="text" class=" form-control"  ></div> <span><i style=" margin-left: 82%" class="fa   fa-plus USN_pannel_adding" data-toggle="tooltip" title="Add new panel"></i></span><span style="    margin-left: 2%"><i class="fa fa-minus USN_pannel_remove" data-toggle="tooltip" title="Delete panel"></i></span></div>').insertAfter($(e.currentTarget).parent().parent())
													}
												
												});
												parent.$("body").off("click",'.USN_pannel_remove').on("click",".USN_pannel_remove",function(e)
												{
													($(e.currentTarget).parent().parent()).remove();
													console.log(e)
												});
											
										 return '';		
									},
									getPropertyValue : function(OBJ,srcID,destID,currentHTML)
									{
												
												
												
									parent.$("#USN_accoridon_data_update").on('click',function(e)
												{ 
													e.stopPropagation()
													var elmId, array=[],k,count=0;
													 elmId = OBJ.targetIdenfierName.substring(1)
													k=parent.$(".USN_panneldiv");
													for(var i=0;i<=k.length-1;i++)
													{
														var inputs,obj;
														inputs=$(k[i]).find("input");
													
														 obj={"name":inputs[0].value,"data":inputs[1].value,"headcss":inputs[2].value,"bodycss":inputs[3].value}
														if(obj.name==""||obj.data=="")
														{
															if(obj.name=="")
															{
																inputs[0].focus();
															}
															else
															{
																inputs[1].focus();
															}
															count=1;
															break;
														}
														else
														{
															array.push(obj);
														}
													}
													console.log("updated array......."+JSON.stringify(array))
													parent.global_comp_obj[elmId].dataSource=JSON.stringify(array);
													if(count==0)
													{
														attachOnloadScript(elmId,parent.global_comp_obj[elmId])
													}
													else
													{
														alert("one of the panel Body or panel Header was leaved empty pls fill that to proced fourther")
													}
												});
												
													
									return '';
			
									
									}
								}
	}
				
						
	
					
	
};


	 