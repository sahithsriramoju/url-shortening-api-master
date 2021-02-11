import Shorten from './shorten';
import Config from './config';
(() => {
   let Module = $('[data-module="shorten-url"]')
    //variable to determine whether to execute or kill this script
    if(Module === undefined || Module === 'undefined' || Module.length === 0){
        return null
    }
    let shorten = new Shorten(Module)
    shorten.init()
    Config.init()
})()