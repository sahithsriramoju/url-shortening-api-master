var shortUrl = require('node-url-shortener')
class Shorten{
    constructor(element){
        //check if the element is correctly provided
        if((typeof element === 'string' && element.charAt(0) !== '#') || 
        (typeof element === 'object' && !element instanceof jQuery)){
            throw `Expected "element" to be ID string or jQuery object. Got ${typeof element === 'string' ? element : typeof element}`
        }
    
    this.container = typeof element === 'string' ? $(element) : element
    this.inputValue = this.container.find('.shorten-link')
    this.shortenBtn = this.container.find('.shorten-btn')
    this.shortenResultContainer = $('.shorten-result-container')
    this.Form = this.container.find('#shorten-link-form')
    this.Error = this.container.find('.shorten-link-error')
    //event listener
    this.Form.on('submit', this.handleFormSubmit.bind(this))
    }
    init(){
       console.log("shorten object created")
    }
    
    validFormData(data){
        if(data.length === 0){
            this.inputValue.addClass('border-red')
            this.Error.addClass('shorten-link-error-visible')
            return 0
        }else{
            let urlRegex = ''
            if(!urlRegex.test()){
                return 0
            }
        }
    }
    validateForm(form){
        let valid = 1
        $('.invalid').removeClass('.invalid')
        let requiredField = form.find('.required')
        let inputValue = requiredField.val()
        //get the required field input value
        //check if the input is empty
        valid = this.validFormData(inputValue)
        return valid
    }
    handleFormSubmit(e){
        e.preventDefault() 
        let form_query = $(e.currentTarget)
        if(this.validateForm(form_query) === 0) return false
        let inputUrl = this.inputValue.val()
        shortUrl.short(inputUrl, (err,url)=>{
            if(err){
                console.log("error shortening the url")
            }
                 //creating html element 
                let element = ` <div class="shorten-result">
                <p class="shorten-url">${inputUrl}</p>
                <div class="shorten__accent-line"></div>
                <a class="shortened-url" href="${url}">${url}</a>
                <button class="shorten-btn-copy">Copy</button>
                </div>`
                //check if the container has alreay 3 results
                //insert the above element to the results container
                if(this.shortenResultContainer.children().length === 3) this.shortenResultContainer.children()[2].remove()
            this.shortenResultContainer.prepend(element)      
        }) 
    }
    
    
}
export {Shorten as default}