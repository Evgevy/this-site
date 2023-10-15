

$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__nav").toggleClass("header__nav--open")
        $(".header__nav-mob").toggleClass("header__nav-mob--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})

$(document).ready(function (){
    $(".header__help").click(function(){
        $(".header__modal").toggleClass("header__modal--hide")
    })
})









$(document).ready(function (){
    $(".popup__close").click(function(){
        $(".popup").addClass("popup--hide")
    })
        
    $(".header__link-enter").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".popup__bg").click(function(){
        $(".popup").addClass("popup--hide")
    })
})
$(document).ready(function(){
    $(".services__mobile").click(function(){
        if ($(this).siblings(".services__text").hasClass("services__text--open")){
            $(this).siblings(".services__text").removeClass("services__text--open")
            $(this).removeClass("services__mobile--open")
            
            
        } else {
            $(".services__text").removeClass("services__text--open")
            $(this).siblings(".services__text").addClass("services__text--open")
            $(".services__mobile").removeClass("services__mobile--open")
            $(this).addClass("services__mobile--open")
        }
        
        
    })
})

