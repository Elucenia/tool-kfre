/* tool-kfre · ELUCENIA · https://github.com/Elucenia/tool-kfre
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"kfre","title":"KFRE (Kidney Failure Risk Equation)","fields":[["idade","Idade","num",{"min":18,"max":110,"unit":"anos","ph":"60"}],["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["tfg","TFG estimada","num",{"min":1,"max":120,"unit":"mL/min/1,73 m²","ph":"30"}],["rac","Relação albumina/creatinina urinária (RAC)","num",{"min":1,"max":10000,"step":0.1,"unit":"mg/g","ph":"300"}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
