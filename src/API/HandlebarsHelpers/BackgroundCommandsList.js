"use strict";const e=e=>e&&e.length>0?t(e):"<p>Список порожній</p>";function t(e){let t="";return e.forEach(e=>{t+=`<option value="${e.id}" style="background-image: url('data:image/jpeg;base64,${e.base64}'); background-size:contain; background-repeat:no-repeat; background-position:center; height:90px; margin: 3px 0"></option>`}),`<select id='command-bg-dropdown' name='bg_id' style="text-align: center; width: 40%;"size=2>${t}</select>`}module.exports=e;