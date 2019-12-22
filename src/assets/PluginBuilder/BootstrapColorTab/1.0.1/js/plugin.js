var uniservenxtcmp_Bootstrap_colortab1={
    name: "BootstrapColorTab",
    actions: {
        getHTML: function() {
            return '<div class="uniservenxtcmp_Bootstrap_colortab1"></div>';
        },
        getLabelName: function() {
            return 'Color tabs';
        },
        getVersion: function() {
            return '1.0.1';
        },
		getName: function(){
			return 'BootstrapColorTab';
		},
		getCategory: function(){
			return 'Tab';
		},
		getIcon: function(){
			return 'colortabs.png';
		},
		getUniqueClass: function(){
			return 'uniservenxtcmp_Bootstrap_colortab1';
		},
		getConfs: function(){
			return '';
		},
		getEvents: function(){
			return '';
		},
		getData: function(row){

		//return OBJ;
					
		},
		setData: function(plgnObj,dataObj,id){
			debugger;
			console.log("calling setDataaaaaaaaaaaaaaaaaaaa")
			console.log($("#"+id));
			var plgnContainer, headContent, tabsContent,activeStyle,inactiveStyle;
			activeStyle='color:#45aef1 !important;background:#FFFFFF !important;border-bottom:1px solid #fff;border-top:4px solid #45aef1;';
			inactiveStyle = 'background:#e3e3e3 !important;'
			plgnContainer = $('#'+id);
			plgnContainer.attr("removehtmlstatus","false");
			plgnContainer.removeAttr("unxtcomponent");
			plgnContainer.addClass('unxt_plgn_cmp');
			headContent = $(plgnObj.htmlHead);
			tabsContent = $(plgnObj.htmlContent);
			console.log("headContent :::::", headContent.get(0).outerHTML);
			console.log("tabsContent ::::: ",tabsContent.get(0).outerHTML);
			
			if(dataObj==undefined){
				var dataObj = plgnObj.dataSource;
				if(typeof dataObj != 'object'){
					dataObj=$.parseJSON(dataObj);;
				}			
			}
			if(plgnContainer.find('ul.nav-tabs li').length==0){
				//plgnContainer.empty().append('<style id="activeStyle">.nav-tabs > li.active{'+activeStyle+'}</style><style id="inactiveStyle">.nav-tabs > li >a{background:none !important;} .nav-tabs > li{'+inactiveStyle+'}</style><ul class="nav nav-tabs"></ul><div class="tab-content" style="padding:0 10px;"></div>');
				plgnContainer.empty().append('<ul class="nav nav-tabs"></ul><div class="tab-content" style="padding:0 10px;"></div>');
				if(headContent && tabsContent){
					setTimeout(function(){
						plgnContainer.find('ul.nav').kendoListView({dataSource: dataObj,template: kendo.template($(tabsContent).html()) });
						plgnContainer.find('ul.nav li:first').addClass('active');
					},200)
					setTimeout(function(){
						plgnContainer.find('.tab-content').kendoListView({dataSource: dataObj,template: kendo.template($(headContent).html()) });
						plgnContainer.find('.tab-content').find('div:first').addClass('active');
						plgnContainer.append('<span style="clear: left; display: block;"></span>');
						plgnContainer.find('.k-widget').removeClass('k-widget');
					},200)
				}
			}else{
				console.error('can not re-render:::');
			}
			return '';
		},
		getBindConfs: function(){
			return [];
		},
		getDemonObj: function(){
			return '';
		},
		refresh: function(){
			return '';
		},
		getVendor: function() {
		 var jsonObject={"vendor": "Bootstrap"};
            return jsonObject;
        },
		getDemonMethod: function(id,dataOBJ,headObj) {
		
			return "";
        },
        getImage: function() {
            return "colortabs.png";
        },
        tooltip: function() {
            return 'Bootstrap color tabs';
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
            var jsonObject=[
				{
				 "labelName":"Increment",
    	         "propKey":"navTabIncrement",
				 "targetIdenfierName":"uniservenxtcmp_Bootstrap_colortab1"
    	         }
				  
				
    	         ];
            return jsonObject;
        },
        getPluginOBJ: function(id) {
			
			var randNum = new Date().getTime();
            var OBJ = {type:'html',htmlContent:'<script type="text/x-kendo-template" id="'+id+'template" > <li editmodeheadstatus="#: field #"><a data-toggle="tab" href="\\##: field #'+randNum+'" style="background-color:\\#fff;color:\\#333;border-radius:0;margin-right:-2px">#= name #</a></li><\\/script>',htmlHead :'<script type="text/x-kendo-template" id="'+id+'templateHead"> <div id="#: field #'+randNum+'" class="tab-pane fade in" editmodecontentstatus="#: field #"><div class="unxt_row"><div class="col-md-12"><h3 class="uniservenxtcmp_content ">#= name #</h3></div></div></div><\\/script>', dataSource:'[{"field":"home", "name":"Home","bgcolor":"#083455"},{"field":"menu1","name":"Menu1","bgcolor":"#083455"},{"field":"menu2","name":"Menu2","bgcolor":"#663466"},{"field":"menu3","name":"Menu3","bgcolor":"#ff6600"}]',active:3};
		   
		   return OBJ;
        },
        updateThemeClasses:function(OBJ){
				 
				return OBJ;
			}		
    }
}