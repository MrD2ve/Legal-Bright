'use script'

window.addEventListener('DOMContentLoaded', () => {

    // Sun-Moon
    const changer = document.querySelector('.changer'),
        sun = document.querySelector('.sun'),
        moon = document.querySelector('.moon'),
        lightLogo = document.querySelector('.light-logo'),
        nightLogo = document.querySelector('.night-logo'),
        openMenu = document.querySelector('.open-menu'),
        closeMenu = document.querySelector('.close-menu'),
        topper = document.querySelector('.topper'),
        nightText = document.querySelectorAll('.night-text'),
        money = document.querySelector('.list-group-item-mine'),
        mediaMenu = document.querySelector('.media-menu'),
        easyMedia = document.querySelector('.easy-media'),
        sendingEmail = document.querySelector('.sending-email'),
        sendingBtn = document.querySelector('.sending-btn')

    let element = document.body
    nightLogo.classList.toggle("hide")
    moon.classList.toggle("hide")
    changer.addEventListener('click', () => {

        element.classList.toggle("dark-mode")
        sun.classList.toggle("hide")
        moon.classList.toggle("show")
        lightLogo.classList.toggle("hide")
        nightLogo.classList.toggle("show")
        for (let i = 0; i < 50; i++) {
            nightText[i].classList.toggle("white")
        }
        money.classList.toggle("white-bg")
    })


    easyMedia.classList.toggle("show")
    closeMenu.classList.toggle("hide")
    mediaMenu.addEventListener('click', () => {
        openMenu.classList.toggle("hide")
        closeMenu.classList.toggle("show")
        easyMedia.classList.toggle("show")
    })

    let s = element.scrollTop;
    console.log(s);
    topper.classList.add('hide')
    if (s > 500) {
        topper.classList.remove('hide')
        topper.classList.add('show')
    } else {
        topper.classList.remove('show')
        topper.classList.add('hide')
    }

    

    // Timer
    const deadline = '2025-10-10'

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endtime) - Date.parse(new Date())

        if (timer <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        } else {
            days = Math.floor(timer / (1000 * 60 * 60 * 24))
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
            minutes = Math.floor((timer / 1000 / 60) % 60)
            seconds = Math.floor((timer / 1000) % 60)
        }


        return { timer, days, hours, minutes, seconds }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return (`0${num}`)
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updatClock, 1000)

        updatClock()

        function updatClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.timer <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock('.timer', deadline)


    // Loader
    // loader = document.querySelector('.loader');

    // setTimeout(() => {
    //     loader.style.opacity = '0'
    //     setTimeout(() => {
    //         loader.style.display = 'none'
    //     }, 500)
    // }, 2000)

    // Forms
})
