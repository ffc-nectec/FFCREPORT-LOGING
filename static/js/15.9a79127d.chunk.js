(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{736:function(e,t,a){"use strict";a.r(t);a(504);var n,o=a(527),r=(a(238),a(104)),l=(a(173),a(48)),i=(a(479),a(484)),s=(a(477),a(478)),c=(a(480),a(15)),u=a(21),m=a(22),p=a(24),d=a(23),g=a(0),h=a.n(g),f=a(33),b=a(47),v=a(50),E=a(51),S=a.n(E),y=a(171),w=a(506),k=a(537),L=a(536),O=a(532),j=a(534),x=a(535),z=a(469),C=a.n(z),N=a(485),I=a.n(N),M=a(167),U=new C.a.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[0,0],iconAnchor:[0,0],popupAnchor:[0,0],shadowSize:[0,0]}),A=new C.a.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[20,30],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),T=new C.a.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[20,30],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),D=Object(f.c)(function(e){return{settings:e.settings}})(n=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).toggleSettings=function(){var e=n.props;(0,e.dispatch)({type:"settings/CHANGE_SETTING",payload:{setting:"isSidebarOpen",value:!e.settings.isSidebarOpen}})},n.setStore=function(e){localStorage.setItem("userUnit",JSON.stringify(e))},n.showDrawer=function(e){var t=sessionStorage.getItem("userData"),a=JSON.parse(t),o=a.user.orgId,r=e.properties.id;n.setState({visible:!0,selectedVillage:e.properties.id,isLoaded:!0},function(e){n.setState({isLoaded:!0,error:e})}),Object(M.e)(o,a.token,r).then(function(e){n.setState({house:e,isLoaded:!0})},function(e){n.setState({isLoaded:!0,error:e})}),Object(M.i)(o,a.token,r).then(function(e){n.setState({houseaddress:e.features,isLoaded:!0})},function(e){n.setState({isLoaded:!0,error:e})})},n.onClose=function(){n.setState({visible:!1,selectedVillage:null})},n.checkIdItems=function(e){1===e.target.value?n.setState({clickTag:"chronic",submit:"",zoomLevel:14}):2===e.target.value&&n.setState({clickTag:"disable",submit:"",zoomLevel:14})},n.setCenterMap=function(e,t){var a=n.state,o=a.lat,r=a.lng;o!==e&&n.setState({lat:e,zoomLevel:20}),r!==t&&n.setState({lng:t,zoomLevel:20})},n.state={geojson:[],house:[],houseaddress:[],lat:"",lng:"",submit:"",clickTag:"",visible:!1,selectedVillage:null,isLoaded:!1,error:null,zoomLevel:14},n.baseMaps=[{name:"Google Satellite",url:"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",attribution:"&copy; Google",type:"tile",checked:!0},{name:"OpenStreet Map",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",type:"tile"}],n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("userData"),a=JSON.parse(t),n=a.user.orgId;Object(M.a)(n,a.token).then(function(t){e.setState({items:t,isLoaded:!0})},function(t){e.setState({isLoaded:!0,error:t})}),Object(M.c)(n,a.token).then(function(t){var a=(t.bbox[2]+t.bbox[0])/2,n=(t.bbox[3]+t.bbox[1])/2;e.setState({geojson:t.features,isLoaded:!0,lat:n,lng:a})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"renderBaseLayerControl",value:function(){return h.a.createElement(w.b,{position:"bottomleft"},this.baseMaps.map(function(e){var t=e.name,a=e.url,n=e.attribution,o=e.type,r=e.layer,l=e.format,i=e.checked,s=void 0!==i&&i;return"wms"===o?h.a.createElement(w.b.BaseLayer,{key:t,name:t,checked:s},h.a.createElement(k.a,{layers:r,format:l,transparent:!1,url:a,attribution:n})):h.a.createElement(w.b.BaseLayer,{key:t,name:t,checked:s},h.a.createElement(L.a,{attribution:n,url:a}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.geojson,n=t.items,u=t.lat,m=t.lng,p=t.submit,d=t.isLoaded,g=t.error,f=t.clickTag,E=t.selectedVillage,w=t.house,k=t.visible,L=t.houseaddress,z=t.zoomLevel,C=S()(),N=[u,m],M=L.map(function(e){return e.properties.no}),D=L.map(function(e){return e.properties.villageName});function G(){window.location.reload(!1)}console.log(n,E);var J=function(){return h.a.createElement(i.a,{style:{width:350,Color:"#000"},onSelect:function(t){e.setState({submit:t,clickTag:"",zoomLevel:20})},dataSource:a.map(function(e){return e.properties.no+e.properties.villageName}),defaultValue:p,placeholder:"\u0e1a\u0e49\u0e32\u0e19\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48 / \u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}},h.a.createElement(s.a,{suffix:h.a.createElement(c.a,{type:"search",onClick:G,className:"certain-category-icon"}),allowClear:!0}))};return g?h.a.createElement("div",null,"Error: ",g.message):d?h.a.createElement("div",null,h.a.createElement(v.Helmet,{title:"\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e27\u0e30/\u0e2d\u0e32\u0e01\u0e32\u0e23"}),h.a.createElement("div",{className:"air__utils__heading"},h.a.createElement("h5",null,"\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e27\u0e30/\u0e2d\u0e32\u0e01\u0e32\u0e23")),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-xl-4 col-lg-12"},h.a.createElement(l.a.Group,{onChange:this.checkIdItems},h.a.createElement(l.a,{value:1},"\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07"),h.a.createElement(l.a,{value:2},"\u0e1c\u0e39\u0e49\u0e1e\u0e34\u0e01\u0e32\u0e23"))),h.a.createElement("div",{className:"col-xl-2 col-lg-12"}),h.a.createElement("div",{className:"col-xl-4 col-lg-12"},h.a.createElement(J,null))),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(O.a,{style:{height:"70vh"},center:N,zoom:z},h.a.createElement(I.a,{position:"topleft"}),this.renderBaseLayerControl(),a.map(function(t){var a=U;return t.properties.no+t.properties.villageName===p?(e.setCenterMap(t.geometry.coordinates[1],t.geometry.coordinates[0]),a=A):f===t.properties.tags.find(function(e){return"chronic"===e})?a=A:f===t.properties.tags.find(function(e){return"disable"===e})&&(a=T),h.a.createElement(j.a,{onMouseOver:function(e){e.target.openPopup()},onMouseOut:function(e){e.target.closePopup()},position:[t.geometry.coordinates[1],t.geometry.coordinates[0]],icon:a},h.a.createElement(x.a,null,h.a.createElement("span",null,h.a.createElement("p",null,"\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19:",t.properties.villageName),h.a.createElement("p",null,"\u0e1a\u0e49\u0e32\u0e19\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48:",t.properties.no),h.a.createElement("p",null,t.geometry.coordinates[1],",",t.geometry.coordinates[0]))),h.a.createElement("div",{className:"site-drawer-render-in-current-wrapper"},h.a.createElement(o.a,{title:"".concat(M," ").concat(D),placement:"right",onClose:e.onClose,visible:k,getContainer:!1,style:{position:"absolute",overflow:"hidden",width:240}},w.map(function(t){var a,n=C.diff(t.birthDate,"years");return a=n>=1?h.a.createElement(r.a,{onClick:function(){return e.setStore(t)},style:{width:220,height:50}},t.firstname,"\xa0",t.lastname,"\xa0\u0e2d\u0e32\u0e22\u0e38\xa0",n,"\xa0\u0e1b\u0e35"):null,h.a.createElement("div",null,h.a.createElement(b.a,{to:"/dashboard/userdetail"},a))}))))})),h.a.createElement("br",null),h.a.createElement(y.a,null)):h.a.createElement("div",null,"Loading...")}}]),a}(h.a.Component))||n;t.default=D}}]);
//# sourceMappingURL=15.9a79127d.chunk.js.map