"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79214],{251694:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-05c6d958","path":"/devices/ZSS-QY-SSD-A-EN.html","title":"TuYa ZSS-QY-SSD-A-EN control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZSS-QY-SSD-A-EN control via MQTT","description":"Integrate your TuYa ZSS-QY-SSD-A-EN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:46:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Fault alarm (binary)","slug":"fault-alarm-binary","link":"#fault-alarm-binary","children":[]},{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Self test (binary)","slug":"self-test-binary","link":"#self-test-binary","children":[]},{"level":3,"title":"Smoke concentration (numeric)","slug":"smoke-concentration-numeric","link":"#smoke-concentration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1703619663000},"filePathRelative":"devices/ZSS-QY-SSD-A-EN.md"}')},542209:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(166252);const o=(0,i._)("h1",{id:"tuya-zss-qy-ssd-a-en",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-zss-qy-ssd-a-en","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa ZSS-QY-SSD-A-EN")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZSS-QY-SSD-A-EN")],-1),d=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart smoke alarm")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"smoke, fault_alarm, battery_state, battery, silence, self_test, smoke_concentration, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZSS-QY-SSD-A-EN.jpg",alt:"TuYa ZSS-QY-SSD-A-EN"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary" aria-hidden="true">#</a> Fault alarm (binary)</h3><p>Indicates whether a fault was detected. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault alarm is ON, if <code>false</code> OFF.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum" aria-hidden="true">#</a> Battery state (enum)</h3><p>State of the battery. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="self-test-binary" tabindex="-1"><a class="header-anchor" href="#self-test-binary" aria-hidden="true">#</a> Self test (binary)</h3><p>Indicates whether the device is being self-tested. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_test&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self test is ON, if <code>false</code> OFF.</p><h3 id="smoke-concentration-numeric" tabindex="-1"><a class="header-anchor" href="#smoke-concentration-numeric" aria-hidden="true">#</a> Smoke concentration (numeric)</h3><p>Parts per million of smoke detected. Value can be found in the published state on the <code>smoke_concentration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),h={},b=(0,a(983744).Z)(h,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),o,(0,i._)("table",null,[n,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),s,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);