/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
YUI.add("datatype-number-parse",function(b){var a=b.Lang;b.mix(b.namespace("DataType.Number"),{parse:function(d){var c=(d===null)?d:+d;if(a.isNumber(c)){return c;}else{return null;}}});b.namespace("Parsers").number=b.DataType.Number.parse;},"3.3.0",{requires:["yui-base"]});YUI.add("datatype-number-format",function(b){var a=b.Lang;b.mix(b.namespace("DataType.Number"),{format:function(j,e){if(a.isNumber(j)){e=e||{};var d=(j<0),f=j+"",n=e.decimalPlaces,c=e.decimalSeparator||".",m=e.thousandsSeparator,l,g,k,h;if(a.isNumber(n)&&(n>=0)&&(n<=20)){f=j.toFixed(n);}if(c!=="."){f=f.replace(".",c);}if(m){l=f.lastIndexOf(c);l=(l>-1)?l:f.length;g=f.substring(l);for(k=0,h=l;h>0;h--){if((k%3===0)&&(h!==l)&&(!d||(h>1))){g=m+g;}g=f.charAt(h-1)+g;k++;}f=g;}f=(e.prefix)?e.prefix+f:f;f=(e.suffix)?f+e.suffix:f;return f;}else{return(a.isValue(j)&&j.toString)?j.toString():"";}}});},"3.3.0",{requires:["yui-base"]});YUI.add("datatype-number",function(a){},"3.3.0",{use:["datatype-number-parse","datatype-number-format"]});