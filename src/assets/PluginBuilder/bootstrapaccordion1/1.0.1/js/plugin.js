 var uniservenxtcmp_bootstrapaccordion1={  //UniqueIdentfier
    name: "bootstrapaccordion1",  //PluginName
    actions: {
        getHTML: function() {
           
            return '<div class="uniservenxtcmp_bootstrapaccordion1"></div>';
        },
        getLabelName: function() {
            return 'accoridon12';
        },
        getVersion: function() {
            return '1.0.1';
        },
		getName: function(){
			return 'accoridon12';
		},
		getCategory: function(){
			return 'Other';
		},
		getIcon: function(){
			return 'collapse.png';
		},
		getUniqueClass: function(){
			return 'uniservenxtcmp_bootstrapaccordion1';
		},
		getConfs: function(){
			return '';
		},
		registerEvents: function(id,events){
			return '';
		},
		getEvents: function(ID){
			return [
						{ pluginselector:'.unxt_templatebutton',
						   eventName:'clickEvent',
						   configurable:true,
						   eventType:'pluginevnts'
						},
						{ pluginselector:'.unxt_productapplynow',
						   eventName:'applyNowEvent',
						   configurable:true,
						   eventType:'pluginevnts'
						}
					];
		},
		getData: function(ID,currentContext,acttype,currentevent){
			return '';
		},
		setData: function(plgnObj,dataObj,id)
		{
			plgnContainer = $('#'+id);
			plgnContainer.attr("removehtmlstatus","false");
			plgnContainer.removeAttr("unxtcomponent");
			plgnContainer.addClass('unxt_plgn_cmp');
		   var selected_class="";
				function ra()
						{

							return '_' + Math.random().toString(36).substr(2, 8);
						}
						mainid=ra();
						console.log("calling setData "+id);
						 
						//parent.global_comp_obj["name"]="s";
						console.log("icon...................",plgnObj.icon);
					if(plgnObj.icon=="plus")
					{
						selected_class= "fa fa-plus"
						
					}
					else if(plgnObj.icon=="Arrows")
					{
						selected_class=" fa fa-angle-down";
						
					}
					console.log("html html",plgnObj.htmlContent);
					htmlContent = $(plgnObj.htmlContent);
			  if(dataObj!=undefined)
					  {
						  
						  console.log("typeeeee"+typeof(dataObj))
						  plgnObj.dataSource=dataObj;
						  data=plgnObj.dataSource;
					  }
			  else
				  
				  {
					  data=JSON.parse(plgnObj.dataSource);
				  }
			 
			 
			 for(var i=0;i<data.length;i++)
			 { 
					
				 var obj=data[i];
				 
				 obj["id"]=ra();
				 obj["mainId"]=mainid;
				 obj["faclass"]=selected_class;
				 
				 if(obj.hasOwnProperty("headcss")!==true )
					{
						console.log('inside if... headcss')
						obj["headcss"]="a";
					
					}
					if(obj.hasOwnProperty("bodycss")!==true)
					{ 
						console.log('inside if... bodycss')
							obj["bodycss"]="a";
					}
				
				 
			 }
			 //plgnObj.dataSource=JSON.stringify(data);
			 console.log("final data"+JSON.stringify(data));
			 $('#'+id).empty().append('<div class="panel-group" id='+mainid+'></div>')
			$('#'+id).find('.panel-group').kendoListView({dataSource:data,template: kendo.template($(htmlContent).html()) });
			//parent.global_comp_obj[id].dataSource=JSON.stringify(data);
			$('body').on('click',"#"+mainid,function(e)
			{
				     
						
						var par=$(e.target).parent();
						
						if($(e.target).prop("tagName")=="I")
						{
							$(e.target).parent().parent().find('a').trigger('click')
						}
						else
						{
						
							$(e.target).find('a').trigger('click')
						}
						 
			});
			function toggleIcon(e) 
			{ 
			     
			     var ele=$(e.target)
									.siblings()
									.find(".more-less");
									
								  if(ele.hasClass( "fa-plus")||ele.hasClass( "fa-minus"))
								  {
									$(ele).toggleClass('fa-plus fa-minus');
								  }
								  else if(ele.hasClass( "fa-angle-down")|| ele.hasClass( "fa-angle-up"))
								  {
									  $(ele).toggleClass('fa-angle-down fa-angle-up');
								  }
								  
						}
						$('body').on('shown.bs.collapse','#'+id+' .panel' ,toggleIcon);
						$('body').on('hidden.bs.collapse','#'+id+' .panel' ,toggleIcon); 
						$("body").on("click",".USN_accordian_next",function(e){
							
							if($(e.target).parent().parent().parent().parent().next().next().length==0)
							{
								console.log($(e.target).parent().parent().parent().parent().next().find(".USN_accordian_next").css("display","none"))
							}
							
							$(e.target).parent().parent().parent().parent().next().find("a").trigger('click');
						
						});
						
						
						
						
						var k=$('#'+id).find(".panel-collapse")[0];
						$(k).addClass("in");
						
						
				
			
		},
		getBindConfs: function(){
			return [{name:"name",valueDataType:"string",isBind:false},{name:"data",valueDataType:"string",isBind:false}];
		},
		getDemonObj: function(){
			return '';
		},
		refresh: function(){
			return '';
		},
		getVendor: function() {
		 var jsonObject={"vendor": "bootstrap"};
            return jsonObject;
        },
		getDemonMethod: function() {
			return "";
			
        },
        getImage: function() {
            return "table.png";
        },
        tooltip: function() {
            return 'Repeatable Template';
        },
       getPluginJsImports: function() {
            var jsArray=[];
            return jsArray;
        },
        getCSSFile: function() {
            var jsArray=[];
            return jsArray;
        },
        getTargetPosition: function() {
            return 'Packages';
        },
        getPluginProperties: function() {
            var jsonObject=[{
				                	labelName:"EditIcon",
				                	propKey:"EditIcon",
				                	targetIdenfierName:"uniservenxtcmp_bootstrapaccordion1",
									specificPlugin:"yes"
				                },
								{
				                	labelName:"accordianSettings",
				                	propKey:"accordianSettings",
				                	targetIdenfierName:"uniservenxtcmp_bootstrapaccordion1",
									specificPlugin:"yes"
				                }];
            return jsonObject;
        },
        getPluginOBJ: function(id) 
		{
           var OBJ = {type:"html",htmlContent:'<script type="text/x-kendo-template" id="'+id+'template"><div class="panel panel-default"> <div class="panel-heading" > <h4 class="panel-title"> <a  style="#:headcss#" data-toggle="collapse" data-parent="\\##:mainid#" href="\\##=id#"> #=name# </a> <span style="float:right"><i class=" more-less fa #:faclass#"></i></span> </h4></div><div id="#=id#" class="panel-collapse collapse"> <div class="panel-body"  ondrop="drop(event)" ondragover="allowDrop(event)" style="#:bodycss#"><p>#:data#</p><div><input type="button" class="btn btn-primary USN_accordian_next" style="float:right" value="next"></div></div></div></div><\\/script>',
            dataSource:'[{"name": "collapse1","data":"c1"},{"name": "collapse2","data":"c2"},{"name": "collapse3","data":"c3"}]',icon:'plus'};
            return OBJ;
        },updateThemeClasses: function (OBJ)
		{
        	
        	return OBJ;
        }	
    }
}