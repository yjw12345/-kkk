import{u as d,v as _,o as r,e as l,f as p,N as u,z as g,p as h,k as y,D as x,G as f,H as b,h as e,w as v}from"./index.d2d58ca2.js";/* empty css                        *//* empty css                   */import{_ as I}from"./pageindex.1c6658d0.js";import"./request.1d72398d.js";import{d as w}from"./piniastore-data.1bdeeb3a.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";/* empty css                                                                  */const k=a=>(h("data-v-6b46988e"),a=a(),y(),a),A=k(()=>p("div",{class:"property2Name"},"api\u6210\u529F\u7387",-1)),S={id:"property2"},N={__name:"showproperty4",setup(a){w();let o=d(null);function s(){let i=g(o.value),t={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{},xAxis:[{type:"time"}],yAxis:[{type:"value",name:"\u5F02\u5E38\u6570",position:"left",axisLabel:{formatter:"{value} "}},{type:"value",name:"\u5F02\u5E38\u767E\u5206\u6BD4",min:0,max:100,position:"right",axisLabel:{formatter:"{value} %"}}],series:[{encode:{x:"time",y:"percentage",seriesName:"percentage"},type:"bar",showSymbol:!1,yAxisIndex:1},{encode:{x:"time",y:"num",seriesName:"num"},smooth:!0,type:"line",showSymbol:!1,yAxisIndex:0}],dataset:{dimensions:["time","num","percentage"],source:[{time:"2019-11-1 6:00:00",num:0,percentage:0},{time:"2019-11-1 7:00:00",num:3,percentage:60},{time:"2019-11-1 8:00:00",num:0,percentage:0},{time:"2019-11-1 9:00:00",num:3,percentage:60},{time:"2019-11-1 10:00:00",num:0,percentage:0},{time:"2019-11-1 11:00:00",num:0,percentage:0},{time:"2019-11-1 12:00:00",num:5,percentage:75},{time:"2019-11-1 13:00:00",num:0,percentage:0},{time:"2019-11-1 14:00:00",num:3,percentage:60},{time:"2019-11-1 15:00:00",num:0,percentage:0},{time:"2019-11-1 16:00:00",num:0,percentage:0},{time:"2019-11-1 17:00:00",num:5,percentage:75}]}};i.setOption(t)}return _(()=>{s()}),(i,n)=>(r(),l(u,null,[A,p("div",S,[p("div",{class:"showproperty",ref_key:"property",ref:o},"\u7B49\u5F85\u6570\u636E\u52A0\u8F7D",512)])],64))}},T=m(N,[["__scopeId","data-v-6b46988e"]]);const L={class:"speed"},W={class:"propertyTotal"},z={__name:"Api",setup(a){const o=x([{page:"static-c7c3a1d5-1246-4a9b-bae5-a9730f498faf.bspapp.com",active:!0},{page:"127.0.0.1:5500/webgl/save/itaem/index.html",active:!1}]),s=[{talkId:"veIU86Qg7Ljvxotvc46ybezmdag",userId:"alskdfj544cxsdf5d",page:"http://localhost:3000/index.html",useragent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",IP:"126.0.0.1",time:"2022-07-02 20:40:12"},{talkId:"veIU86Qg7Ljvxotvc46ybezmdag",userId:"alskdfj544cxsdf5d",page:"http://localhost:3000/index.html",useragent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",IP:"126.0.0.1",time:"2022-07-02 20:40:12"}];return(i,n)=>{const t=f,c=b;return r(),l("div",L,[e(I,{pageAll:o},null,8,["pageAll"]),p("div",W,[e(T),e(c,{data:s,style:{width:"100%"}},{default:v(()=>[e(t,{fixed:"",prop:"talkId",label:"\u4F1A\u8BDDID",width:"150"}),e(t,{prop:"userId",label:"\u7528\u6237ID",width:"120"}),e(t,{prop:"page",label:"\u8BBF\u95EE\u9875\u9762",width:"120"}),e(t,{prop:"useragent",label:"\u7EC8\u7AEF\u4FE1\u606F",width:"320"}),e(t,{prop:"IP",label:"IP",width:"100"}),e(t,{prop:"time",label:"\u65F6\u95F4",width:"180"})]),_:1})])])}}},G=m(z,[["__scopeId","data-v-b1dd2d8a"]]);export{G as default};