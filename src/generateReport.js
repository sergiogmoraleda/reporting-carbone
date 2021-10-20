import carboneSDK from "carbone-sdk-js";
import {saveAs} from 'file-saver';
const _carboneService = carboneSDK("test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0NzIyIiwiYXVkIjoiY2FyYm9uZSIsImV4cCI6MjI2NDY1NjEwMiwiZGF0YSI6eyJpZEFjY291bnQiOjQ3MjJ9fQ.AOa9Vl0tQwz1yoi1WrzmcMlulgpkZjMpbVpLIE5gG7Kc9brXrX11s4JJWxPFynqqlorv7GmxeTdWy0sqzI37tTilAO-fiq_ZJCpkTbiUrupPZi2wBh8Pkc-HJ1tBwMBEfNExNBMKOtpTMmk8vMu_MlyA3QopfHIs2EMGL6eD_-vYnWMF")
const _template = document.getElementById("21bc2ea02373fb14dfe34e490d52812f67b0a197f52668dc9faf7fb547f341a1")

let _data = JSON.parse('null');

export function generateReport(){
     
    _carboneService.getTemplate("21bc2ea02373fb14dfe34e490d52812f67b0a197f52668dc9faf7fb547f341a1").then(file => {
    saveAs(file, 'document.docx');
    });
    
 
}