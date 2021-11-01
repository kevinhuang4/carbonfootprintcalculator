(this.webpackJsonpcarbonfootprintcalculator=this.webpackJsonpcarbonfootprintcalculator||[]).push([[0],{11:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o.n(n),a=o(4),r=o.n(a),l=(o(9),o(2)),s=[{id:0,option0:3.3,option1:2.5,option2:1.9,option3:1.7,option4:1.5,src:"https://www.conservation.org/carbon-footprint-calculator#/"},{id:1,option0:2303.25/2204.6,option1:3071/2204.6,option2:3838.75/2204.6,src:"https://www3.epa.gov/carbon-footprint-calculator/"},{id:2,option0:4091.25/2204.6,option1:5455/2204.6,option2:6818.75/2204.6,src:"https://www3.epa.gov/carbon-footprint-calculator/"},{id:3,option0:0,option1:3636/2204.6,option2:4848/2204.6,option3:6060/2204.6,src:"https://www3.epa.gov/carbon-footprint-calculator/"},{id:4,option0:0,option1:1682.25/2204.6,option2:2243/2204.6,option3:2803.75/2204.6,src:"https://www3.epa.gov/carbon-footprint-calculator/"},{id:5,option0:692/2204.6,option1:.2479066497323777,option2:401.07/2204.6,src:"https://www3.epa.gov/carbon-footprint-calculator/"},{id:6,option0:0,option1:3931.5/2204.6,option2:5242/2204.6,option3:6552.5/2204.6,src:"https://www3.epa.gov/carbon-footprint-calculator/"},{id:7,option0:0,option1:.08574615,option2:816.63*14e-5,option3:.14291025,option4:.4164813,option5:.6941355,option6:1.388271,src:["https://www.statista.com/statistics/742763/regional-carriers-average-passenger-trip-length/","https://www.conservation.org/carbon-footprint-calculator#/"]}],c=o(0);function p(e){if(parseFloat(e)>=s[0].option1)return Object(c.jsx)("li",{children:"Eat more plant-based food"})}function u(e){if(parseFloat(e)>=s[1].option1)return Object(c.jsx)("li",{children:"Use less natural gas by using cold water for washing when possible, heating your house less frequently, installing programmable thermostats..."})}function j(e){if(parseFloat(e)>=s[2].option1)return Object(c.jsx)("li",{children:"Use less electricity by turning off unnecessary water, lights and AC, unpluging unused electronics, running full loads in laundry..."})}function d(e){if(parseFloat(e)>=s[3].option2)return Object(c.jsx)("li",{children:"Use less fuel oils by heating your home or using furnaces less frequently"})}function b(e){if(parseFloat(e)>=s[4].option2)return Object(c.jsx)("li",{children:"Use less propane by sealing air leaks, lowering hot water thermostat, and closing doors in unused rooms"})}function h(e){if(parseFloat(e)>=s[5].option1)return Object(c.jsx)("li",{children:"Recycle more (batteries, beverage containers, electronics, hazardous waste, metals, papers, plastics, food waste) and buy more recycled products"})}function g(e){if(parseFloat(e)>=s[6].option2)return Object(c.jsx)("li",{children:"Drive less. Walk, cycle, and take public transportation more"})}function m(e){if(parseFloat(e)>=s[7].option2)return Object(c.jsx)("li",{children:"Reduce unnecessary flights and switch to other transportations like trains and buses"})}var O=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),o=t[0],i=t[1],a=Object(n.useState)(""),r=Object(l.a)(a,2),O=r[0],v=r[1],x=Object(n.useState)(""),f=Object(l.a)(x,2),y=f[0],w=f[1],F=Object(n.useState)(""),N=Object(l.a)(F,2),S=N[0],C=N[1],k=Object(n.useState)(""),A=Object(l.a)(k,2),q=A[0],z=A[1],B=Object(n.useState)(""),H=Object(l.a)(B,2),I=H[0],U=H[1],W=Object(n.useState)(""),D=Object(l.a)(W,2),E=D[0],J=D[1],M=Object(n.useState)(""),R=Object(l.a)(M,2),V=R[0],Y=R[1],Z=Object(n.useState)(0),L=Object(l.a)(Z,2),T=L[0],G=L[1];return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("p",{children:"Carbon Footprint Calculator"})}),Object(c.jsx)("div",{className:"slogan",children:Object(c.jsx)("b",{children:"Understand your carbon emission"})}),Object(c.jsxs)("form",{className:"input",onSubmit:function(e){e.preventDefault();for(var t=[o,O,y,S,q,I,E,V],n=0,i=0;i<t.length;i++)n+=parseFloat(t[i]);G(n),window.scrollTo(0,document.body.scrollHeight)},children:[Object(c.jsxs)("div",{className:"input-box",children:[Object(c.jsxs)("div",{className:"diet",children:[Object(c.jsx)("p",{className:"questions",children:"How would you categorize your diet?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-00",children:[Object(c.jsx)("input",{type:"radio",name:"diet",value:s[0].option0.toString(),id:"option-00",onChange:function(e){return i(e.target.value)}}),"Meat Lover"]}),Object(c.jsxs)("label",{htmlFor:"option-01",children:[Object(c.jsx)("input",{type:"radio",name:"diet",value:s[0].option1.toString(),id:"option-01",onChange:function(e){return i(e.target.value)}}),"Average"]}),Object(c.jsxs)("label",{htmlFor:"option-02",children:[Object(c.jsx)("input",{type:"radio",name:"diet",value:s[0].option2.toString(),id:"option-02",onChange:function(e){return i(e.target.value)}}),"No Beef"]}),Object(c.jsxs)("label",{htmlFor:"option-03",children:[Object(c.jsx)("input",{type:"radio",name:"diet",value:s[0].option3.toString(),id:"option-03",onChange:function(e){return i(e.target.value)}}),"Vegetarian"]}),Object(c.jsxs)("label",{htmlFor:"option-04",children:[Object(c.jsx)("input",{type:"radio",name:"diet",value:s[0].option4.toString(),id:"option-04",onChange:function(e){return i(e.target.value)}}),"Vegan"]})]})})]}),Object(c.jsxs)("div",{className:"natural-gas",children:[Object(c.jsx)("p",{className:"questions",children:"How would you categorize your natural gas use (residential energy consumption)?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-10",children:[Object(c.jsx)("input",{type:"radio",name:"natural-gas",value:s[1].option0.toString(),id:"option-10",onChange:function(e){return v(e.target.value)}}),"Below Average (1605 m",Object(c.jsx)("sup",{children:"3"}),"/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-11",children:[Object(c.jsx)("input",{type:"radio",name:"natural-gas",value:s[1].option1.toString(),id:"option-11",onChange:function(e){return v(e.target.value)}}),"Average (2140 m",Object(c.jsx)("sup",{children:"3"}),"/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-12",children:[Object(c.jsx)("input",{type:"radio",name:"natural-gas",value:s[1].option2.toString(),id:"option-12",onChange:function(e){return v(e.target.value)}}),"Above Average (2675 m",Object(c.jsx)("sup",{children:"3"}),"/month)"]})]})})]}),Object(c.jsxs)("div",{className:"electrcity",children:[Object(c.jsx)("p",{className:"questions",children:"How would you categorize your electricity use?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-20",children:[Object(c.jsx)("input",{type:"radio",name:"electricity",value:s[2].option0.toString(),id:"option-20",onChange:function(e){return w(e.target.value)}}),"Below Average (275 kWh/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-21",children:[Object(c.jsx)("input",{type:"radio",name:"electricity",value:s[2].option1.toString(),id:"option-21",onChange:function(e){return w(e.target.value)}}),"Average (367 kWh/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-22",children:[Object(c.jsx)("input",{type:"radio",name:"electricity",value:s[2].option2.toString(),id:"option-22",onChange:function(e){return w(e.target.value)}}),"Above Average (459 kWh/month)"]})]})})]}),Object(c.jsxs)("div",{className:"fuel-oil",children:[Object(c.jsx)("p",{className:"questions",children:"How would you categorize your use of fuel oil (heat your home and car)?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-30",children:[Object(c.jsx)("input",{type:"radio",name:"fuel-oil",value:s[3].option0.toString(),id:"option-30",onChange:function(e){return C(e.target.value)}}),"Zero"]}),Object(c.jsxs)("label",{htmlFor:"option-31",children:[Object(c.jsx)("input",{type:"radio",name:"fuel-oil",value:s[3].option1.toString(),id:"option-31",onChange:function(e){return C(e.target.value)}}),"Below Average (34.5 gallons/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-32",children:[Object(c.jsx)("input",{type:"radio",name:"fuel-oil",value:s[3].option2.toString(),id:"option-32",onChange:function(e){return C(e.target.value)}}),"Average (46 gallons/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-33",children:[Object(c.jsx)("input",{type:"radio",name:"fuel-oil",value:s[3].option3.toString(),id:"option-33",onChange:function(e){return C(e.target.value)}}),"Above Average (57.5 gallons/month)"]})]})})]}),Object(c.jsxs)("div",{className:"propane",children:[Object(c.jsx)("p",{className:"questions",children:"How would you categorize your use of propane (water heating, cooking, refrigerating, clothes drying)?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-40",children:[Object(c.jsx)("input",{type:"radio",name:"propane",value:s[4].option0.toString(),id:"option-40",onChange:function(e){return z(e.target.value)}}),"Zero"]}),Object(c.jsxs)("label",{htmlFor:"option-41",children:[Object(c.jsx)("input",{type:"radio",name:"propane",value:s[4].option1.toString(),id:"option-41",onChange:function(e){return z(e.target.value)}}),"Below Average (29.25 gallons/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-42",children:[Object(c.jsx)("input",{type:"radio",name:"propane",value:s[4].option2.toString(),id:"option-42",onChange:function(e){return z(e.target.value)}}),"Average (39 gallons/month)"]}),Object(c.jsxs)("label",{htmlFor:"option-43",children:[Object(c.jsx)("input",{type:"radio",name:"propane",value:s[4].option3.toString(),id:"option-43",onChange:function(e){return z(e.target.value)}}),"Above Average (48.75 gallons/month)"]})]})})]}),Object(c.jsxs)("div",{className:"waste",children:[Object(c.jsx)("p",{className:"questions",children:"How would you categorize your waste (liquid, solid, organic, recyclable, hazardou)?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-50",children:[Object(c.jsx)("input",{type:"radio",name:"waste",value:s[5].option0.toString(),id:"option-50",onChange:function(e){return U(e.target.value)}}),"I don't recycle"]}),Object(c.jsxs)("label",{htmlFor:"option-51",children:[Object(c.jsx)("input",{type:"radio",name:"waste",value:s[5].option1.toString(),id:"option-51",onChange:function(e){return U(e.target.value)}}),"I recycle around half of my recyclable waste, including metal, plastic, glass, and paper"]}),Object(c.jsxs)("label",{htmlFor:"option-52",children:[Object(c.jsx)("input",{type:"radio",name:"waste",value:s[5].option2.toString(),id:"option-52",onChange:function(e){return U(e.target.value)}}),"I recycle all of my recyclable waste, including metal, plastic, glass, and paper"]})]})})]}),Object(c.jsxs)("div",{className:"car",children:[Object(c.jsx)("p",{className:"questions",children:"How often do you drive your car?"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-60",children:[Object(c.jsx)("input",{type:"radio",name:"car",value:s[6].option0.toString(),id:"option-60",onChange:function(e){return J(e.target.value)}}),"I don't drive a car"]}),Object(c.jsxs)("label",{htmlFor:"option-61",children:[Object(c.jsx)("input",{type:"radio",name:"car",value:s[6].option1.toString(),id:"option-61",onChange:function(e){return J(e.target.value)}}),"I sometimes drive a car"]}),Object(c.jsxs)("label",{htmlFor:"option-62",children:[Object(c.jsx)("input",{type:"radio",name:"car",value:s[6].option2.toString(),id:"option-62",onChange:function(e){return J(e.target.value)}}),"Average"]}),Object(c.jsxs)("label",{htmlFor:"option-63",children:[Object(c.jsx)("input",{type:"radio",name:"car",value:s[6].option3.toString(),id:"option-63",onChange:function(e){return J(e.target.value)}}),"I drive a car all the time"]})]})})]}),Object(c.jsxs)("div",{className:"flight",children:[Object(c.jsx)("p",{className:"questions",children:"What's your approximate flight distance for one year? (Average: 816.63 miles)"}),Object(c.jsx)("div",{className:"answers",children:Object(c.jsxs)("div",{className:"block",id:"block-11",children:[Object(c.jsxs)("label",{htmlFor:"option-70",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option0.toString(),id:"option-70",onChange:function(e){return Y(e.target.value)}}),"0"]}),Object(c.jsxs)("label",{htmlFor:"option-71",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option1.toString(),id:"option-71",onChange:function(e){return Y(e.target.value)}}),"612 miles"]}),Object(c.jsxs)("label",{htmlFor:"option-72",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option2.toString(),id:"option-72",onChange:function(e){return Y(e.target.value)}}),"817 miles (Average)"]}),Object(c.jsxs)("label",{htmlFor:"option-73",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option3.toString(),id:"option-73",onChange:function(e){return Y(e.target.value)}}),"1021 miles"]}),Object(c.jsxs)("label",{htmlFor:"option-74",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option4.toString(),id:"option-74",onChange:function(e){return Y(e.target.value)}}),"2450 miles"]}),Object(c.jsxs)("label",{htmlFor:"option-75",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option5.toString(),id:"option-75",onChange:function(e){return Y(e.target.value)}}),"4083 miles"]}),Object(c.jsxs)("label",{htmlFor:"option-76",children:[Object(c.jsx)("input",{type:"radio",name:"flight",value:s[7].option6.toString(),id:"option-76",onChange:function(e){return Y(e.target.value)}}),"8166 miles"]})]})})]})]}),Object(c.jsx)("div",{className:"btn",children:Object(c.jsx)("button",{type:"submit",children:"Calculate"})})]}),Object(c.jsx)("div",{className:"result",children:Object(c.jsxs)("div",{className:"result-box",children:["Your annual emission is ",T.toFixed(2)," metric tons or ",(2204.62*T).toFixed(0)," lbs of CO2",Object(c.jsx)("br",{}),"Average: 12.32 metric tons",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Your emission requires ",(2204.62*T/48).toFixed(0)," trees",Object(c.jsx)("span",{class:"material-icons",children:"park"}),Object(c.jsx)("span",{class:"material-icons",children:"park"}),Object(c.jsx)("span",{class:"material-icons",children:"park"}),"to absorb",Object(c.jsx)("br",{}),"But..."]})}),Object(c.jsx)("div",{className:"improvement",children:Object(c.jsxs)("div",{className:"improvement-box",children:[Object(c.jsx)("p",{children:"Based on your answers, you can do these to help the planet:"}),Object(c.jsxs)("ul",{children:[p(o),u(O),j(y),d(S),b(q),h(I),g(E),m(V)]})]})})]})})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))},9:function(e,t,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.fcfb4a36.chunk.js.map