**
 * Created by Daniel Vidmar.
 * Date: 7/7/14
 * Time: 8:37 AM
 * Version: Alpha 1
 */

var Language = {
	//Names for this language
	names: ['base', 'default'],
	
	//Used to create a new language with the specified names
	create: function (names) {
		var language = Object.create(this);
		language.names = names;
		return language;
	}
};

var CSS = {
	names: ['css', 'cascading style sheets'],
	
	syntax: {
		comments: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: '/*%*/'
		},
		
		selectors: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: '*,#%,.%,a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,big,blockquote,body,' +
					'br,button,canvas,caption,center,cite,code,col,colgroup,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,' +
					'embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,head,header,h1,h2,h3,h4,h5,h6,hr,html,i,' +
					'iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,' +
					'noscript,object,ol,optgroup,option,output,p,param,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,' +
					'small,source,span,strike,strong,style,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,title,tr,' +
					'track,tt,u,ul,var,video,wbr'
		},
		
		specialSelectors: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: ':active,::after,::before,:checked,:disabled,:empty,:enabled,' +
					':first-child,::first-letter,::first-line,:first-of-type,' +
					':focus,:hover,:in-range,:invalid,:lang(%),:last-child,:last-of-type,' +
					':link,:not(%),:nth-child(%),:nth-last-child(%),:nth-last-of-type(%),' +
					':nth-of-type(%),:only-of-type,:only-child,:optional,:out-of-range,' +
					':read-only,:read-write,:required,:root,::selection,:target,:valid,' +
					':visited'
		},
		
		properties: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: 'align-content,align-items,align-self,animation,animation-delay,animation-direction,animation-duration,' +
					'animation-fill-mode,animation-iteration-count,animation-name,animation-play-state,animation-timing-function,' +
					'backface-visibility,background,background-attachment,background-clip,background-color,background-image,' +
					'background-origin,background-position,background-repeat,background-size,border,border-bottom,border-bottom-color,' +
					'border-bottom-left-radius,border-bottom-right-radius,border-bottom-style,border-bottom-width,border-collapse,' +
					'border-color,border-image,border-image-outset,border-image-repeat,border-image-slice,border-image-source,' +
					'border-image-width,border-left,border-left-color,border-left-style,border-left-width,border-radius,border-right,
					'border-right-color,border-right-style,border-right-width,border-spacing,border-style,border-top,border-top-color,' +
					'border-top-left-radius,border-top-right-radius,border-top-style,border-top-width,border-width,bottom,box-shadow,' +
					'box-sizing,caption-side,clear,clip,color,column-count,column-fill,column-gap,column-rule,column-rule-color,' +
					'column-rule-style,column-rule-width,column-span,column-width,columns,content,counter-increment,counter-reset,' +
					'cursor,direction,display,empty-cells,flex,flex-basis,flex-direction,flex-flow,flex-grow,flex-shrink,flex-wrap,' +
					'float,font,@font-face,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,' +
					'hanging-punctuation,height,icon,justify-content,@keyframes,left,letter-spacing,line-height,list-style,' +
					'list-style-image,list-style-position,list-style-type,margin,margin-bottom,margin-left,margin-right,margin-top,' +
					'max-height,max-width,min-height,min-width,nav-down,nav-index,nav-left,nav-right,nav-up,opacity,order,outline,' +
					'outline-color,outline-offset,outline-style,outline-width,overflow,overflow-x,overflow-y,padding,padding-bottom,' +
					'padding-left,padding-right,padding-top,page-break-after,page-break-before,page-break-inside,perspective,' +
					'perspective-origin,position,quotes,resize,right,tab-size,table-layout,text-align,text-align-last,text-decoration,' +
					'text-decoration-color,text-decoration-line,text-indent,text-justify,text-overflow,text-shadow,text-transform,' +
					'top,transform,transform-origin,transform-style,transition,transition-delay,transition-duration,' +
					'transition-property,transition-timing-function,unicode-bidi,vertical-align,visibility,white-space,width,' +
					'word-break,word-spacing,word-wrap,z-index'
		},
		
		vendorPrefixes: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: '-ms-,mso-,-moz-,-o-,-xv-,-atsc-,-wap,-webkit-,-khtml-,-apple-,prince-,' +
					'-ah-,-hp-,-ro-,-rim-,-tc-'
		},
	},
};

var JavaScript = {
	names: ['js', 'javascript'],
	
	syntax: {
		
	},
};

var HTML = {
	names: ['html', 'hyper text markup language'],
	
	syntax: {
		comments: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: '<!--%-->'
		},
		
		tags: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: ''
		},
		
		attributes: {
			delimiter: ',',
			
			color: '#ffffff',
			
			values: ''
		},
	}
};