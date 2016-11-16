/*!
 * Shinan ver.4.1
 * 
 * Copyright (c) 2016 Thuliu Technologies.
 * Licensed MIT
 * https://opensource.org/licenses/mit-license.php
 */





function fot(src) { return src.replace(/[\u3041-\u3096]/g, function (match) { var chr = match.charCodeAt(0) + 0x60; return String.fromCharCode(chr); }); }
var gettext=""
gettext = document.location.search;
var title = document.title;

gettext = gettext.substring(1,gettext.length);

 gettext = escape(gettext);


 if (gettext.indexOf("textfield=",0) == 0) {gettext = gettext.substring(10,gettext.length);}


 gettext = unescape(gettext);


 if (gettext.indexOf("textfield=",0) == 0) {gettext = gettext.substring(10,gettext.length);}
 
var n2=0
for(n2=0;n2<gettext.length;n2++){
gettext = gettext.replace( '+' , " " ) ;
}
 //decodeURI
gettext=decodeURIComponent(gettext) ;
tag=gettext.substring(0,1);

if(gettext!=""){
document.title=gettext+" - "+title;
}

document.sendget.textfield.value = gettext;

for(n2=0;n2<gettext.length;n2++){
gettext = gettext.replace( '　' , " " ) ;
}

gettext2=gettext.toLowerCase();
tag2=tag=="#";
gettext2=fot(gettext2);
gettext2=gettext2.split(" ")



var fileName='files.dat'

    httpObj = new XMLHttpRequest();

    httpObj.open('GET',fileName+"?"+(new Date()).getTime(),true);

    httpObj.send(null);

    httpObj.onreadystatechange = function(){

        if ( (httpObj.readyState == 4) && (httpObj.status == 200) ){

            paths = httpObj.responseText.split("\n");

            var out=""

var n=0

var out=[""];

var i=0

var pa=0

var ul=[""]

var i2=0

var ti=[""]

var ca=""
var n2
var out2=[""];
var cas="";
for (n = 0; n < paths.length; n++) {

cas=paths[n];

if(cas.indexOf("/*end*/")!=-1){
out[i]=ti[i]+" - "+out[i];

ca=out[i];

if(tag2){
n2=n-1
ca=paths[n2];
out[i]=ca+" "+out[i]
}
                                out2[i]=fot(ca.toLowerCase());

                                        i++;

                                        pa=0;

                                        n++;

                                        out[i]="";

                                        }



if(pa==1){

            out[i]+= paths[n]+"\n" ;

             }



if(pa==0){

              ul[i2]=paths[n];

              n++;

    

              ti[i2]=paths[n];

              i2++;

              pa=1;

              }



}




var h=""
var j=0
var i4=0;

var gun="";

var gun2="";

var rpm="検索結果<br>";

var c=0;
var f=0;
var i5=0
for(i5;i5<gettext2.length;i5++){
for(i4=0;i4<i;i4++){

gun2=out2[i4];

gun=out[i4]
if(gettext2[i5]==""){
gettext2[i5]="何にもないから代わりに授ける";
}
b=gun2.indexOf(gettext2[i5]);
var c=0;
var g=gettext2[i5];
c=g.length
var e=10;
if(b<10){
e=b

}


if (b!=-1){
j=h.indexOf(ul[i4]);
if(j==-1){
               rpm=rpm+"<font size=3><A Href="+ul[i4]+">"+ti[i4]+"</a></font><br><font size=2 color=00aa00>"+ul[i4]+"</font><br><font size=2 color=#555555>"+gun.substr(b-e,e)+"</font><font size=2 color=#009999>"+gun.substr(b,c)+"</font><font size=2 color=#555555>"+gun.substr(b+c,50)+"…</font><br><br>";
               f=1;
h+=ul[i4];
}
               }

}
}


if(f==0){

rpm="<font size=4>"+gettext+"</font><br>に一致する情報は見つかりませんでした。<br><br><br>検索のヒント:<br><br>    ・キーワードに誤字・脱字がないか確認します。<br>    ・別のキーワードを試してみます。<br>    ・もっと一般的なキーワードに変えてみます。";

}

if(gettext==""){
rpm=""
}

        document.getElementById('out').innerHTML=rpm+"<br><br><font size=2 color=#00cccc>Shinan ver.4.1</font>";

        }

    }