import{a as y,b as ae,d as k,e as O,f as U,w as N,g as K,o as u,h as p,i as e,j as me,v as ve,u as t,k as J,F as A,l as Q,t as b,n as ne,p as X,m as Y,_ as W,q as he,s as fe,r as h,x as i,y as M,z as ye,c as G,A as ie,B as T,C as ge}from"./index-By1BpXj6.js";const xe=y(5),be=y({name:"Todos",value:"todos"}),we=y(""),$e=y(0),P=ae({id:null,name:"",description:"",price_per_day:null,resolution_height:null,resolution_width:null,type:""}),F=()=>({selectedPageSize:xe,selectedOptionType:be,searchQuery:we,selectOffset:$e,itemSelected:P,clearDataSelected:()=>{P.id=null,P.name="",P.description="",P.price_per_day=null,P.resolution_height=null,P.resolution_width=null,P.type=""},setSelectedItem:r=>{Object.assign(P,r)}}),oe=y([]);y([]);const se=y(0),q=()=>{const a=y(!1),o=y(0),r=y(0),{selectedPageSize:c,selectedOptionType:x,searchQuery:d,selectOffset:_,clearDataSelected:I,setSelectedItem:m}=F(),V={Authorization:"Bearer OC1iZXJuYXJkb2NrZGV2QGdtYWlsLmNvbQ=="},C=async()=>{a.value=!0;try{let n=`/display?offset=${_.value}&pageSize=${c.value}`;d.value&&(n+=`&name=${encodeURIComponent(d.value)}`),x.value.value!="todos"&&(n+=`&type=${encodeURIComponent(x.value.value)}`);const l=await O.get(n,{headers:V}),{data:E}=l;oe.value=E.data,se.value=E.totalCount,a.value=!1,d.value=""}catch(n){throw console.error("Error fetching displays:",n),n}},$=async()=>{try{const l=await O.get("/display?offset=0&pageSize=1000",{headers:V});o.value=l.data.data,r.value=l.data.totalCount}catch(n){console.error("Error fetching display totals:",n)}},D=async n=>{try{const l=await O.post("/display",n,{headers:V});return I(),C(),l.data}catch(l){throw console.error("Error al crear el display:",l),l}},H=async n=>{try{const l=await O.delete(`/display/${n}`,{headers:V});return C(),l.data}catch(l){throw console.error("Error al eliminar el display:",l),l}},w=async n=>{try{const l=await O.get(`/display/${n}`,{headers:V});m(l.data),a.value=!1}catch(l){console.error("Error fetching display details:",l),a.value=!1}},g=k(()=>o.value.filter(l=>l.type==="outdoor"));k(()=>o.value.filter(n=>n.type==="indoor"));const s=k(()=>r.value?Math.round(g.value.length/r.value*100):0),j=async n=>{a.value=!0;try{const l=await O.put(`/display/${n.id}`,n,{headers:V});return C(),a.value=!1,l.data}catch(l){throw console.error("Error al actualizar el display:",l),a.value=!1,l}},L=k(()=>100-s.value);return{products:oe,totalItems:se,getDisplays:C,outDoorPercent:s,inDoorPercent:L,getTotalDisplays:$,createDisplay:D,isLoading:a,deleteDisplay:H,getDisplayById:w,updateDisplay:j}},le=a=>{switch(a.type){case"indoor":return"success";case"outdoor":return"warning";default:return null}},Le=a=>(X("data-v-2c51084c"),a=a(),Y(),a),Ve={class:"flex align-items-center justify-content-between w-full"},Ce={class:"flex align-items-center"},ke=Le(()=>e("label",{for:"pageSize"},"Registros por Página:",-1)),Ie=["value"],Se={class:"flex align-items-center"},De=["disabled"],Me=["onClick"],Pe=["disabled"],Be={class:"flex align-items-center"},Te=U({__name:"PaginationNumber",emits:["pageChange"],setup(a,{emit:o}){const{selectedPageSize:r,selectOffset:c}=F(),{getDisplays:x,totalItems:d}=q(),_=y(1),I=[5,10,15,30],m=o,B=k(()=>c.value+1),V=k(()=>Math.min(c.value+r.value,d.value)),C=k(()=>`Mostrando ${B.value} - ${V.value} de ${d.value}`);N(_,w=>{m("pageChange",w)}),K(async()=>{await x()});const $=k(()=>Math.ceil(d.value/r.value)),D=w=>{_.value=w},H=k(()=>Array.from({length:$.value},(w,g)=>g+1));return(w,g)=>(u(),p("div",Ve,[e("div",Ce,[ke,me(e("select",{class:"select select-bordered",id:"pageSize","onUpdate:modelValue":g[0]||(g[0]=s=>J(r)?r.value=s:null)},[(u(),p(A,null,Q(I,s=>e("option",{value:s,key:s},b(s),9,Ie)),64))],512),[[ve,t(r)]])]),e("div",Se,[e("button",{disabled:_.value===1,onClick:g[1]||(g[1]=s=>D(_.value-1))}," Anterior ",8,De),(u(!0),p(A,null,Q(H.value,s=>(u(),p("button",{key:s,class:ne({active:_.value===s}),onClick:j=>D(s)},b(s),11,Me))),128)),e("button",{disabled:_.value===$.value,onClick:g[2]||(g[2]=s=>D(_.value+1))}," Siguiente ",8,Pe)]),e("div",Be,b(C.value),1)]))}}),He=W(Te,[["__scopeId","data-v-2c51084c"]]),re=a=>(X("data-v-0ef0b2b5"),a=a(),Y(),a),Ee={key:0,class:"card"},je={class:"flex justify-content-between align-items-center px-3"},Oe={class:"search-group"},ze={class:"grid grid-nogutter"},Ze={class:"md:w-10rem relative"},Ae=["src","alt"],Ne={class:"flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"},Ue={class:"flex flex-row md:flex-column justify-content-between align-items-start gap-2"},Fe={class:"text-xl font-semibold text-900 mt-1"},Re={class:"text-base font-medium text-600 mt-1"},Qe={class:"font-medium text-secondary text-sm"},Ge={class:"surface-100 p-1",style:{"border-radius":"30px"}},We={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},qe={class:"text-900 font-medium text-sm"},Je=re(()=>e("i",{class:"pi pi-star-fill text-yellow-500"},null,-1)),Ke={class:"flex flex-column md:align-items-end gap-5"},Xe={class:"text-xl font-semibold text-900"},Ye={class:"flex flex-row-reverse md:flex-row gap-2"},et={class:"grid grid-nogutter"},tt={class:"p-4 border-1 surface-border surface-card border-round flex flex-column"},ot={class:"surface-50 flex justify-content-center border-round p-3"},st={class:"relative mx-auto"},lt=["src","alt"],at={class:"pt-4"},nt={class:"flex flex-row justify-content-between align-items-start gap-2"},it={class:"text-xl font-semibold text-900 mt-1"},rt={class:"text-base font-medium text-600 mt-1"},ct={class:"font-light text-secondary text-sm"},dt={class:"surface-100 p-1",style:{"border-radius":"30px"}},ut={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},pt={class:"text-900 font-medium text-sm"},_t=re(()=>e("i",{class:"pi pi-star-fill text-yellow-500"},null,-1)),mt={class:"flex flex-column gap-4 mt-4"},vt={class:"text-2xl font-semibold text-900"},ht={class:"flex gap-2"},ft={key:1,class:"flex align-items-center justify-content-center"},yt=U({__name:"MyDataView",setup(a){const{selectedPageSize:o,selectedOptionType:r,searchQuery:c,selectOffset:x}=F(),{getDisplays:d,totalItems:_,products:I,isLoading:m,deleteDisplay:B,getDisplayById:V}=q(),C=he(),$=fe(),D=y(1),H=async(n,l)=>{C.require({target:n.currentTarget,message:"¿ Desea eliminar este display ?",acceptLabel:"Si",rejectLabel:"No",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",acceptClass:"p-button-danger",rejectClass:"p-button-secondary",accept:async()=>{try{await B(l),$.add({severity:"success",summary:"Deleted",detail:"El Item ha sido eliminado correctamente."})}catch{$.add({severity:"error",summary:"Error",detail:"Fallo la eliminacion del item."})}},reject:()=>{$.add({severity:"info",summary:"Cancelled",detail:"Ha sido cancelada la operacion."})}})},w=y("grid"),g=k(()=>Math.ceil(_.value/o.value)),s=y([{name:"Todos",value:"todos"},{name:"Indoor",value:"indoor"},{name:"Outdoor",value:"outdoor"}]),j=async n=>{D.value=n,x.value=(n-1)*o.value,await L()};K(async()=>{try{await d()}catch(n){console.error("Error fetching display totals:",n)}});const L=async()=>{r.value.value===""||r.value.name==="Todos"||r.value.value;try{await d()}catch(n){console.error("Error fetching display totals:",n)}};return N(o,async n=>{n&&(console.log("newVal:!!:: ",n),await L())}),N(r,async n=>{n&&n.value&&(o.value=5,x.value=0,await L())}),(n,l)=>{const E=h("DataViewLayoutOptions"),f=h("InputText"),Z=h("Button"),ce=h("SelectButton"),ee=h("Tag"),de=h("DataView"),ue=h("ProgressSpinner"),pe=h("Toast"),_e=h("ConfirmPopup");return u(),p(A,null,[t(m)?(u(),p("div",ft,[i(ue)])):(u(),p("div",Ee,[i(de,{value:t(I),layout:w.value},{header:M(()=>[e("div",je,[i(E,{modelValue:w.value,"onUpdate:modelValue":l[0]||(l[0]=S=>w.value=S)},null,8,["modelValue"]),e("div",Oe,[i(f,{modelValue:t(c),"onUpdate:modelValue":l[1]||(l[1]=S=>J(c)?c.value=S:null),placeholder:"Buscar",onKeyup:l[2]||(l[2]=ye(S=>L(),["enter"]))},null,8,["modelValue"]),i(Z,{label:"Buscar",severity:"info",text:"",onClick:l[3]||(l[3]=S=>L())})]),i(ce,{modelValue:t(r),"onUpdate:modelValue":l[4]||(l[4]=S=>J(r)?r.value=S:null),options:s.value,optionLabel:"name","aria-labelledby":"basic"},null,8,["modelValue","options"])])]),list:M(S=>[e("div",ze,[(u(!0),p(A,null,Q(S.items,(v,R)=>(u(),p("div",{key:R,class:"col-12"},[e("div",{class:ne(["flex flex-column sm:flex-row sm:align-items-center p-4 gap-3",{"border-top-1 surface-border":R!==0}])},[e("div",Ze,[e("img",{class:"block xl:block mx-auto border-round w-full",src:`${v.picture_url}`,alt:v.name},null,8,Ae),i(ee,{value:v.type,severity:t(le)(v),class:"absolute",style:{left:"4px",top:"4px"}},null,8,["value","severity"])]),e("div",Ne,[e("div",Ue,[e("div",null,[e("div",Fe,b(v.name),1),e("div",Re,b(v.description),1),e("span",Qe,"Resolucion: "+b(v.resolution_height)+" | "+b(v.resolution_width),1)]),e("div",Ge,[e("div",We,[e("span",qe,b(Math.floor(Math.random()*10)+1),1),Je])])]),e("div",Ke,[e("span",Xe,"$"+b(v.price_per_day),1),e("div",Ye,[i(Z,{icon:"pi pi-trash",severity:"danger",outlined:""}),i(Z,{icon:"pi pi-shopping-cart",severity:"info",label:"Editar Display",class:"flex-auto md:flex-initial white-space-nowrap"})])])])],2)]))),128))])]),grid:M(S=>[e("div",et,[(u(!0),p(A,null,Q(S.items,(v,R)=>(u(),p("div",{key:R,class:"col-12 sm:col-6 md:col-4 xl:col-6 p-2"},[e("div",tt,[e("div",ot,[e("div",st,[e("img",{class:"border-round w-full",src:`${v.picture_url}`,alt:v.name,style:{"max-width":"300px"}},null,8,lt),i(ee,{value:v.type,severity:t(le)(v),class:"absolute",style:{left:"4px",top:"4px"}},null,8,["value","severity"])])]),e("div",at,[e("div",nt,[e("div",null,[e("div",it,b(v.name),1),e("div",rt,b(v.description),1),e("span",ct,"Resolucion: "+b(v.resolution_height)+" | "+b(v.resolution_width),1)]),e("div",dt,[e("div",ut,[e("span",pt,b(Math.floor(Math.random()*10)+1),1),_t])])]),e("div",mt,[e("span",vt,"$"+b(v.price_per_day),1),e("div",ht,[i(Z,{icon:"pi pi-pencil",label:"Editar Item",class:"flex-auto white-space-nowrap",onClick:te=>t(V)(v.id)},null,8,["onClick"]),i(Z,{icon:"pi pi-trash",severity:"danger",outlined:"",onClick:te=>H(te,v.id)},null,8,["onClick"])])])])])]))),128))])]),_:1},8,["value","layout"])])),i(He,{class:"flex align-items-center justify-content-center",totalPages:g.value,currentPage:D.value,onPageChange:j},null,8,["totalPages","currentPage"]),i(pe),i(_e)],64)}}}),gt=W(yt,[["__scopeId","data-v-0ef0b2b5"]]),xt="/assets/noImage-BR9i0E_g.gif",bt=a=>{const o=ae({name:!1,description:!1,price_per_day:!1,resolution_height:!1,resolution_width:!1,type:!1}),r=m=>!isNaN(parseFloat(m))&&isFinite(m),c=k(()=>({nameValid:!o.name||a.name.length>=3,descriptionValid:!o.description||a.description.length>=3,priceValid:!o.price_per_day||r(a.price_per_day)&&a.price_per_day>0,resolutionHeightValid:!o.resolution_height||r(a.resolution_height)&&a.resolution_height>0,resolutionWidthValid:!o.resolution_width||r(a.resolution_width)&&a.resolution_width>0,typeValid:!o.type||a.type!==""})),x=k(()=>Object.values(c.value).every(Boolean));return{validations:c,isValidForm:x,touched:o,setTouched:m=>{m in o&&(o[m]=!0)},setClearInput:()=>{Object.keys(o).forEach(m=>{o[m]=!1})},touchAll:()=>{Object.keys(o).forEach(m=>{o[m]=!0})}}},z=a=>(X("data-v-cf94932a"),a=a(),Y(),a),wt={key:1},$t={class:"flex flex-column gap-2 mb-2"},Lt=z(()=>e("label",{for:"name"},"Nombre",-1)),Vt={key:0,class:"p-error"},Ct={class:"flex flex-column gap-2 mb-2"},kt=z(()=>e("label",{for:"description"},"Descripcion",-1)),It={key:0,class:"p-error"},St={class:"flex flex-row gap-4 mb-2"},Dt={class:"image-container mt-4"},Mt=["src"],Pt={key:1,src:xt,alt:"Default Image",class:"image-size"},Bt={class:"flex flex-column gap-2 flex-grow"},Tt={class:"flex flex-column gap-2"},Ht=z(()=>e("label",{for:"price_per_day"},"Alquiler por dia",-1)),Et={key:0,class:"p-error"},jt={class:"flex flex-column gap-2"},Ot=z(()=>e("label",{for:"resolution_height"},"Resolucion Height",-1)),zt={key:0,class:"p-error"},Zt={class:"flex flex-column gap-2"},At=z(()=>e("label",{for:"resolution_width"},"Resolucion Width",-1)),Nt={key:0,class:"p-error"},Ut={class:"flex flex-column gap-2"},Ft=z(()=>e("label",{for:"type"},"Outdoor - Indoor",-1)),Rt={key:0,class:"p-error"},Qt={class:"flex gap-3 mt-1"},Gt=U({__name:"MyForm",setup(a){const{itemSelected:o,clearDataSelected:r}=F(),{validations:c,isValidForm:x,touched:d,setTouched:_,touchAll:I,setClearInput:m}=bt(o),{createDisplay:B,updateDisplay:V}=q(),C=y(null),$=y(!1),D=y([{name:"Outdoor",value:"outdoor"},{name:"Indoor",value:"indoor"}]),H=async()=>{if(I(),!!x.value)try{$.value=!0,o.id?await V(o):await B(o),w(),$.value=!1}catch(g){console.error("Error al guardar o actualizar el display:",g),alert("Error al guardar o actualizar el display. Por favor, inténtelo de nuevo.")}},w=()=>{r(),m()};return N(C,g=>{g&&(o.type=g.value)},{immediate:!0}),(g,s)=>{const j=h("ProgressSpinner"),L=h("InputText"),n=h("Dropdown"),l=h("Button"),E=h("Card");return u(),G(E,null,{title:M(()=>[ie(b(t(o).id?"Editar Display":"Agregar nuevo item"),1)]),content:M(()=>[$.value?(u(),G(j,{key:0,style:{width:"50px",height:"50px"}})):T("",!0),$.value?T("",!0):(u(),p("div",wt,[e("div",$t,[Lt,i(L,{id:"name","aria-describedby":"name-help",modelValue:t(o).name,"onUpdate:modelValue":s[0]||(s[0]=f=>t(o).name=f),onBlur:s[1]||(s[1]=f=>t(_)("name")),invalid:!t(c).nameValid&&t(d).name},null,8,["modelValue","invalid"]),!t(c).nameValid&&t(d).name?(u(),p("small",Vt,"El nombre debe tener al menos 3 caracteres.")):T("",!0)]),e("div",Ct,[kt,i(L,{id:"description","aria-describedby":"description-help",modelValue:t(o).description,"onUpdate:modelValue":s[2]||(s[2]=f=>t(o).description=f),onBlur:s[3]||(s[3]=f=>t(_)("description")),invalid:!t(c).descriptionValid&&t(d).description},null,8,["modelValue","invalid"]),!t(c).descriptionValid&&t(d).description?(u(),p("small",It,"La descripción debe tener al menos 3 caracteres.")):T("",!0)]),e("div",St,[e("div",Dt,[t(o).id?(u(),p("img",{key:0,src:t(o).picture_url,alt:"Display Image",class:"image-size"},null,8,Mt)):(u(),p("img",Pt))]),e("div",Bt,[e("div",Tt,[Ht,i(L,{id:"price_per_day","aria-describedby":"price_per_day-help",modelValue:t(o).price_per_day,"onUpdate:modelValue":s[4]||(s[4]=f=>t(o).price_per_day=f),onBlur:s[5]||(s[5]=f=>t(_)("price_per_day")),invalid:!t(c).priceValid&&t(d).price_per_day},null,8,["modelValue","invalid"]),!t(c).priceValid&&t(d).price_per_day?(u(),p("small",Et,"El precio debe ser un número positivo.")):T("",!0)]),e("div",jt,[Ot,i(L,{id:"resolution_height","aria-describedby":"resolution_height-help",modelValue:t(o).resolution_height,"onUpdate:modelValue":s[6]||(s[6]=f=>t(o).resolution_height=f),onBlur:s[7]||(s[7]=f=>t(_)("resolution_height")),invalid:!t(c).resolutionHeightValid&&t(d).resolution_height},null,8,["modelValue","invalid"]),!t(c).resolutionHeightValid&&t(d).resolution_height?(u(),p("small",zt,"La altura de resolución debe ser un número positivo.")):T("",!0)]),e("div",Zt,[At,i(L,{id:"resolution_width","aria-describedby":"resolution_width-help",modelValue:t(o).resolution_width,"onUpdate:modelValue":s[8]||(s[8]=f=>t(o).resolution_width=f),onBlur:s[9]||(s[9]=f=>t(_)("resolution_width")),invalid:!t(c).resolutionWidthValid&&t(d).resolution_width},null,8,["modelValue","invalid"]),!t(c).resolutionWidthValid&&t(d).resolution_width?(u(),p("small",Nt,"El ancho de resolución debe ser un número positivo.")):T("",!0)]),e("div",Ut,[Ft,i(n,{modelValue:C.value,"onUpdate:modelValue":s[10]||(s[10]=f=>C.value=f),options:D.value,optionLabel:"name",placeholder:"Seleccione una opcion",class:"w-full",onBlur:s[11]||(s[11]=f=>t(_)("type")),invalid:!t(c).typeValid&&t(d).type},null,8,["modelValue","options","invalid"]),!t(c).typeValid&&t(d).type?(u(),p("small",Rt,"Por favor seleccione un tipo.")):T("",!0)])])])]))]),footer:M(()=>[e("div",Qt,[i(l,{label:t(o).id?"Cancelar":"Limpiar",onClick:w,severity:"secondary",outlined:"",class:"w-full"},null,8,["label"]),i(l,{label:"Guardar","data-testid":"save-button",onClick:H,class:"w-full",disabled:!t(x)},null,8,["disabled"])])]),_:1})}}}),Wt=W(Gt,[["__scopeId","data-v-cf94932a"]]),qt={class:"card"},Jt={__name:"MyMetter",setup(a){const{outDoorPercent:o,inDoorPercent:r,getTotalDisplays:c}=q(),x=y(!0),d=y([]);return K(async()=>{x.value=!0;try{await c()}finally{x.value=!1}}),N([o,r],()=>{d.value=[{label:"Todos",color:"#60a5fa",value:100,icon:"pi pi-database"},{label:"Outdoor",color:"#fbbf24",value:o.value,icon:"pi pi-th-large"},{label:"Indoor",color:"#34d399",value:r.value,icon:"pi pi-objects-column"}]},{immediate:!0}),(_,I)=>{const m=h("MeterGroup"),B=h("ProgressBar");return u(),p("div",qt,[x.value?(u(),G(B,{key:1,mode:"indeterminate",style:{height:"6px"}})):(u(),G(m,{key:0,value:d.value},null,8,["value"]))])}}},Kt={class:"card"},Xt={class:"flex align-items-center gap-2"},Yt={viewBox:"0 0 35 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"2rem","margin-right":"1rem"}},eo=e("path",{d:"M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z",fill:"var(--text-color)"},null,-1),to=e("path",{d:"M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z",fill:"var(--surface-card)"},null,-1),oo=[eo,to],so={class:"flex align-items-center gap-2"},lo=U({__name:"MyToolbar",setup(a){const{logout:o}=ge(),{clearDataSelected:r}=F(),c=()=>{r()};return(x,d)=>{const _=h("Button"),I=h("Avatar"),m=h("Toolbar");return u(),p("div",Kt,[i(m,{style:{"border-radius":"3rem",padding:"1rem 1rem 1rem 1.5rem"}},{start:M(()=>[e("div",Xt,[(u(),p("svg",Yt,oo)),i(_,{label:"Agregar",text:"",plain:"",onClick:c})])]),end:M(()=>[e("div",so,[i(_,{label:"Salir",severity:"contrast",size:"small",onClick:t(o)},null,8,["onClick"]),i(I,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",style:{width:"32px",height:"32px"}})])]),_:1})])}}}),ao={class:"flex flex-column lg:flex-row md:flex-row full-height"},no={class:"flex-1 p-2"},io={class:"flex-1 p-2"},ro=U({__name:"HomePage",setup(a){return(o,r)=>{const c=h("Card");return u(),p("div",ao,[e("div",no,[i(c,null,{title:M(()=>[ie("Administrador de alquiler de Displays")]),content:M(()=>[i(gt)]),_:1})]),e("div",io,[i(lo),i(Jt,{class:"mt-5 px-5 mb-5"}),i(Wt)])])}}}),uo=W(ro,[["__scopeId","data-v-bd2a9169"]]);export{uo as default};