
module.exports ={
    init(){
        $('#header__menu-button').on('click',()=>{
            $('body').toggleClass('menu-visible')
        })
        $('.shorten-result-container').on('click',(e)=>{
            if($(e.target).hasClass('shorten-btn-copy')){
                $(e.target).html('Copied!')
                //creating a input to use select method to copy the text field
                let $temp = $("<input>")
                $('body').append($temp)
                $temp.val($(e.target).prev().html()).select()
                document.execCommand('copy')
                $temp.remove()
                
            }
        })
    }
}