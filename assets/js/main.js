/* SHOW MENU */
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* MOSTRAR MENU - MENU SHOW ( validar se ocorrer saída constante*/
if(navToggle){
    navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
    })
}

/* ESCONDE MENU - MENU HIDDEN ( validar se ocorrer saída constante  */
if(navClose){
    navClose.addEventListener('click', () => {  
    navMenu.classList.remove('show-menu')
    })
}

/* esconder menu mobile */

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    // quando clica em cada nav__link remove o show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*adiciona BLUR ao HEADER*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY>= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



/*  EMAIL  JS */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()
// service ID - templateID - #form e PublicKey//
    emailjs.sendForm('service_ev8oy9h','template_e7fx8ab', '#contact-form', 'npquNgzz52d5rnWO3')
        .then(()=>{
            //Mostrar mensagem enviada//
            contactMessage.textContent = 'Mensagem Enviada com Sucesso ✔'

            // remover msg a cada 10 seg//
            setTimeout(()=>{
                contactMessage.textContent=''
            }, 10000)

            // limpar inputs //
            contactForm.reset()
        
        }, () =>{
            //Mostrar Erro//
            contactMessage.textContent = '❌❌Sua mensagem não pode ser enviada (SERVICE#ERROR#) 🤷‍♂️🤦‍♂️❌ '
        })


}

contactForm.addEventListener('submit', sendEmail)

/* SHOW SCROLL UP*/

    const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            :scrollUp.classList.remove('show-scroll')
    }
window.addEventListener('scroll', scrollUp)


/* SCROLL SECTION ACTIVE LINK*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*  SCROLL REVEAL*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
   // reset: true //animação repete
})

sr.reveal('.home__data, .home__social, contact__container, footer__container')
sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal('.about__data, .skills_data', {origin: 'left'})
sr.reveal('.about__image, .skills_content', {origin: 'right'})
sr.reveal('.services__card, .projects__cards', {interval: 100})
