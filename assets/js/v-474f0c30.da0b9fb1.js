"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42724],{5803:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-474f0c30","path":"/guide/adapters/flashing/connecting_cc2530.html","title":"Connecting the CC2530","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Pin layouts","slug":"pin-layouts","link":"#pin-layouts","children":[]},{"level":2,"title":"Using a USB to serial adapter","slug":"using-a-usb-to-serial-adapter","link":"#using-a-usb-to-serial-adapter","children":[{"level":3,"title":"Confirmed working","slug":"confirmed-working","link":"#confirmed-working","children":[]},{"level":3,"title":"Connecting","slug":"connecting","link":"#connecting","children":[]}]},{"level":2,"title":"To a Raspberry Pi (Zero)","slug":"to-a-raspberry-pi-zero","link":"#to-a-raspberry-pi-zero","children":[{"level":3,"title":"Wiring CC2530 to the Raspberry","slug":"wiring-cc2530-to-the-raspberry","link":"#wiring-cc2530-to-the-raspberry","children":[]},{"level":3,"title":"Configuring Zigbee2MQTT","slug":"configuring-zigbee2mqtt","link":"#configuring-zigbee2mqtt","children":[]}]},{"level":2,"title":"Via an ESP8266 as a serial to WiFi bridge","slug":"via-an-esp8266-as-a-serial-to-wifi-bridge","link":"#via-an-esp8266-as-a-serial-to-wifi-bridge","children":[{"level":3,"title":"Wiring","slug":"wiring","link":"#wiring","children":[]},{"level":3,"title":"Option 1 - Flashing the ESP8266 with ESPEasy","slug":"option-1-flashing-the-esp8266-with-espeasy","link":"#option-1-flashing-the-esp8266-with-espeasy","children":[]},{"level":3,"title":"Setting up ESPEasy","slug":"setting-up-espeasy","link":"#setting-up-espeasy","children":[]},{"level":3,"title":"Option 2 - Flashing the ESP8266 with Tasmota","slug":"option-2-flashing-the-esp8266-with-tasmota","link":"#option-2-flashing-the-esp8266-with-tasmota","children":[]},{"level":3,"title":"Setting up Tasmota","slug":"setting-up-tasmota","link":"#setting-up-tasmota","children":[]},{"level":3,"title":"Zigbee2MQTT configuration","slug":"zigbee2mqtt-configuration","link":"#zigbee2mqtt-configuration","children":[]}]}],"git":{"updatedTime":1703619663000},"filePathRelative":"guide/adapters/flashing/connecting_cc2530.md"}')},318577:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var i=a(166252),n=a(18476),r=a(690070),s=a(861430),l=a(980654);const d=a.p+"assets/img/CP2102.9b7919dc.png",o=a.p+"assets/img/CC2530_PI.5d76f9c5.jpg",A=(0,i.uE)('<h1 id="connecting-the-cc2530" tabindex="-1"><a class="header-anchor" href="#connecting-the-cc2530" aria-hidden="true">#</a> Connecting the CC2530</h1><h2 id="pin-layouts" tabindex="-1"><a class="header-anchor" href="#pin-layouts" aria-hidden="true">#</a> Pin layouts</h2><p>The pin layout is different between each CC2530 module</p><table><thead><tr><th>Name</th><th>Pin layout</th><th>Picture</th></tr></thead><tbody><tr><td>CC2530</td><td><img src="'+n+'" alt="CC2530 pin layout"></td><td><img src="'+r+'" alt="CC2530"></td></tr><tr><td>Webee CC2530 + CC2591</td><td><img src="'+s+'" alt="Webee CC2530 + CC2591 pin layout"></td><td><img src="'+l+'" alt="CC2530 + CC2591"></td></tr></tbody></table><h2 id="using-a-usb-to-serial-adapter" tabindex="-1"><a class="header-anchor" href="#using-a-usb-to-serial-adapter" aria-hidden="true">#</a> Using a USB to serial adapter</h2><h3 id="confirmed-working" tabindex="-1"><a class="header-anchor" href="#confirmed-working" aria-hidden="true">#</a> Confirmed working</h3><p>This how-to has been confirmed working with the following CC2530 based devices:</p><table><thead><tr><th>Device</th><th>Image</th></tr></thead><tbody><tr><td><strong>CC2530</strong></td><td><img src="'+r+'" alt="CC2530"></td></tr></tbody></table><p>and the following USB to serial adapters:</p><table><thead><tr><th>Device</th><th>Image</th></tr></thead><tbody><tr><td><strong>CP2102</strong></td><td><img src="'+d+'" alt="CP2102"></td></tr></tbody></table><h5 id="flashing-the-firmware" tabindex="-1"><a class="header-anchor" href="#flashing-the-firmware" aria-hidden="true">#</a> Flashing the firmware</h5>',11),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin",target:"_blank",rel:"noopener noreferrer"},g=(0,i.uE)('<h3 id="connecting" tabindex="-1"><a class="header-anchor" href="#connecting" aria-hidden="true">#</a> Connecting</h3><p>Connect to CC2530 to the USB to serial adapter using the following mapping:</p><table><thead><tr><th style="text-align:center;">USB-Serial Adapter</th><th style="text-align:center;">CC2530</th></tr></thead><tbody><tr><td style="text-align:center;">3V3</td><td style="text-align:center;">VCC</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">GND</td></tr><tr><td style="text-align:center;">TXD</td><td style="text-align:center;">P02</td></tr><tr><td style="text-align:center;">RXD</td><td style="text-align:center;">P03</td></tr></tbody></table><p>Now plug in the USB-to-serial adapter in your USB port and start Zigbee2MQTT, enjoy!</p><h2 id="to-a-raspberry-pi-zero" tabindex="-1"><a class="header-anchor" href="#to-a-raspberry-pi-zero" aria-hidden="true">#</a> To a Raspberry Pi (Zero)</h2><p>CC2530 can be connected to a Raspberry PI (Zero) via GPIO Pins - no USB2FTDI is needed.</p>',6),p={href:"https://www.raspberrypi.org/documentation/configuration/uart.md",target:"_blank",rel:"noopener noreferrer"},u=(0,i.uE)('<p>Enable UART in the Kernel and disable UART use for BlueTooth.</p><p>In <code>/boot/config.txt</code> add following lines:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>enable_uart=1\ndtoverlay=pi3-disable-bt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Disable the modem system service (on the command line):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl disable hciuart\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remove the console entry by removing any of those entries from <code>/boot/cmdline.txt</code> if present:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console=serial0,115200 console=ttyAMA0,115200\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Reboot your Raspberry.</p><h3 id="wiring-cc2530-to-the-raspberry" tabindex="-1"><a class="header-anchor" href="#wiring-cc2530-to-the-raspberry" aria-hidden="true">#</a> Wiring CC2530 to the Raspberry</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CC C2530 -&gt; Raspberry\nVCC -&gt; 3,3V (Pin1)\nGND -&gt; GND (Pin6)\nP02 -&gt; TXD (Pin8 / BCM 14)\nP03 -&gt; RXD (Pin10 / BCM 15)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+o+'" alt="CC2531PI"></p><h3 id="configuring-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#configuring-zigbee2mqtt" aria-hidden="true">#</a> Configuring Zigbee2MQTT</h3><p>Change the Serial Port in your <code>data/configuration.yaml</code> file:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>serial:\n  port: /dev/ttyAMA0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Have fun.</p><h2 id="via-an-esp8266-as-a-serial-to-wifi-bridge" tabindex="-1"><a class="header-anchor" href="#via-an-esp8266-as-a-serial-to-wifi-bridge" aria-hidden="true">#</a> Via an ESP8266 as a serial to WiFi bridge</h2><p>This setup allows you to connect a CC2530 to an ESP8266 which can be put everywhere in your house. Via a serial socket, Zigbee2MQTT will connect to your CC2530.</p><h3 id="wiring" tabindex="-1"><a class="header-anchor" href="#wiring" aria-hidden="true">#</a> Wiring</h3><p>Wire the CC2530 to the ESP8266 using the following scheme:</p><table><thead><tr><th style="text-align:center;">ESP8266</th><th style="text-align:center;">CC2530</th></tr></thead><tbody><tr><td style="text-align:center;">3v3</td><td style="text-align:center;">VCC</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">GND</td></tr><tr><td style="text-align:center;">TX</td><td style="text-align:center;">P02</td></tr><tr><td style="text-align:center;">RX</td><td style="text-align:center;">P03</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">P20</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">P04</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">P05</td></tr></tbody></table><h3 id="option-1-flashing-the-esp8266-with-espeasy" tabindex="-1"><a class="header-anchor" href="#option-1-flashing-the-esp8266-with-espeasy" aria-hidden="true">#</a> Option 1 - Flashing the ESP8266 with ESPEasy</h3><p>The ESP8266 needs to be flashed with ESPEasy. ESPEasy has sufficient documentation on how to get you up and running:</p>',22),b={href:"https://www.letscontrolit.com/wiki/index.php?title=Tutorial_ESPEasy_Firmware_Upload",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/letscontrolit/ESPEasy/releases",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction",target:"_blank",rel:"noopener noreferrer"},y=(0,i.uE)('<h3 id="setting-up-espeasy" tabindex="-1"><a class="header-anchor" href="#setting-up-espeasy" aria-hidden="true">#</a> Setting up ESPEasy</h3><p>Open the ESPEasy web interface and complete the setup. Afterwards open the web interface again.</p><p>Click on <em>Devices</em> Edit of the first task and select <em>Communication - Serial Server</em> from the dropdown list.</p><p>Fill in the form as following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a.    Name: ZIGBEE2MQTT\nb.    Enabled: checked\nc.    TCP Port: a number between 1000 and 9999 &quot;1775&quot;\nd.    Baud Rate: 115200\ne.    Data bits: 8\nf.    Parity: No Parity\ng.    Stop bits: 1\nh.    Reset target after boot: - none –\ni.    RX receive timeout: 0\nj.    Event processing: Generic\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Press Submit, the setup is now completed.</p><h3 id="option-2-flashing-the-esp8266-with-tasmota" tabindex="-1"><a class="header-anchor" href="#option-2-flashing-the-esp8266-with-tasmota" aria-hidden="true">#</a> Option 2 - Flashing the ESP8266 with Tasmota</h3><p>The ESP8266 needs to be flashed with Tasmota firmware, <strong>&quot;zbbridge&quot; build</strong>. Please find flashing instructions in the following guides:</p>',8),v={href:"https://github.com/arendst/Tasmota",target:"_blank",rel:"noopener noreferrer"},w={href:"https://tasmota.github.io/docs/Getting-Started/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://tasmota.github.io/docs/Serial-to-TCP-Bridge/",target:"_blank",rel:"noopener noreferrer"},C=(0,i.uE)('<p>You don&#39;t need MQTT for the serial to network functionality but it is a nice option to monitor your bridge.</p><h3 id="setting-up-tasmota" tabindex="-1"><a class="header-anchor" href="#setting-up-tasmota" aria-hidden="true">#</a> Setting up Tasmota</h3><p>Open the Tasmota web interface and complete the basic network setup. Next in &quot;Configuration&quot;, &quot;Configure Module&quot; define your RX and TX pins. The Rx/Tx are relative to the ESP device. For example with ESP8266/ESP01&#39;s hardware serial, set GPIO1 as <code>TCP Tx</code> and GPIO3 as <code>TCP Rx</code>.</p><p>Next, in Tasmota&#39;s main screen, open &quot;Console&quot;. Enter <code>TCPBaudRate 115200</code>. Decide on the port number to use and set it. For example for port = 8888 run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Rule1 ON System#Boot do TCPStart 8888 endon\nRule1 1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zigbee2mqtt-configuration" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt-configuration" aria-hidden="true">#</a> Zigbee2MQTT configuration</h3><p>Now add the following to the Zigbee2MQTT <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;tcp://192.168.2.13:20108&#39;</span>\n    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> zstack\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note to change the IP address and port. You can now start Zigbee2qmtt.</p>',9),k={},E=(0,a(983744).Z)(k,[["render",function(e,t){const a=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[A,(0,i._)("p",null,[(0,i.Uk)("The required coordinator firmware can be found here: "),(0,i._)("a",c,[(0,i.Uk)("Zigbee 1.2"),(0,i.Wm)(a)]),(0,i.Uk)(" and "),(0,i._)("a",h,[(0,i.Uk)("Zigbee 3.0"),(0,i.Wm)(a)]),(0,i.Uk)(".")]),g,(0,i._)("p",null,[(0,i.Uk)("The use of UART by the installed Linux has to be disabled: "),(0,i._)("a",p,[(0,i.Uk)("Detailed explanation here"),(0,i.Wm)(a)])]),u,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",b,[(0,i.Uk)("How to flash the ESP8266 with ESPEasy"),(0,i.Wm)(a)])]),(0,i._)("li",null,[(0,i.Uk)("ESP8266 firmware: "),(0,i._)("a",m,[(0,i.Uk)("ESP_Easy_mega-XXXXXXXX_normal_ESP8266_4096.bin"),(0,i.Wm)(a)])]),(0,i._)("li",null,[(0,i._)("a",f,[(0,i.Uk)("More information about ESPEasy"),(0,i.Wm)(a)])])]),y,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",v,[(0,i.Uk)("Tasmota github"),(0,i.Wm)(a)])]),(0,i._)("li",null,[(0,i._)("a",w,[(0,i.Uk)("Getting started"),(0,i.Wm)(a)])]),(0,i._)("li",null,[(0,i._)("a",x,[(0,i.Uk)("Serial to TCP Bridge docs"),(0,i.Wm)(a)])])]),C])}]])},690070:(e,t,a)=>{e.exports=a.p+"assets/img/cc2530.3b0e534a.jpg"},980654:e=>{e.exports="data:image/jpeg;base64,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"},18476:(e,t,a)=>{e.exports=a.p+"assets/img/cc2530_pin_layout.d28e67d9.png"},861430:(e,t,a)=>{e.exports=a.p+"assets/img/webee_cc2530_cc2591_pinlayout.c476b9b5.png"}}]);