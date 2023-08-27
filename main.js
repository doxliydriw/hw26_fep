// const moment = require("moment/moment");

// const moment = require("moment/moment");

const bDate = new Date('11-04-1981');
// console.log(moment(bDate));
const userDate = document.getElementById("user_input");
const userDateRegEx = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

//Tooltip//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Alert message //
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.id = 'wrapper'
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        if (!document.getElementById('wrapper')) {
            appendAlert('Натисніть ще раз щоб закрити вікно', 'danger')
        } else {
            document.getElementById('wrapper').remove();
        }
    })
}


//Add eventlistener to show date of birth
document.getElementById('myBdate').addEventListener('click', () => {
    if (document.getElementById('bdate_alert')) {
        document.getElementById('bdate_alert').remove();
    } else {
        const birthday = document.createElement('div')
        birthday.innerHTML = `
        <div id="bdate_alert" class="alert alert-info" role="alert">${moment(bDate, "YYYYMMDD").fromNow()}</div>`
        document.getElementById('bdate_placeholder').appendChild(birthday)
    }
})

//Add eventListener for date submit from User

const alertPlaceholderSecond = document.getElementById('liveAlertPlaceholderSecond')
const appendAlertSecond = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.id = 'wrapper_second'
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
    ].join('')

    alertPlaceholderSecond.append(wrapper)
}

const alertTriggerSecond = document.getElementById('liveAlertBtnSecond')
if (alertTriggerSecond) {
    alertTriggerSecond.addEventListener('click', () => {
        if (!document.getElementById('wrapper_second')) {
            let userDateInput = document.getElementById("form-control").value
            console.log(userDateRegEx.test(userDateInput))
            if (userDateRegEx.test(userDateInput)) {
                appendAlertSecond(moment(userDateInput, 'YYYY-MM-DD').format('LL'), 'success');
            } else {
                console.log('fail');
                appendAlertSecond('Невірний формат дати', 'danger');
            }
        } else {
            document.getElementById('wrapper_second').remove();
        }
    })
}


document.getElementById('form-control').addEventListener('keydown', () => {
    if (document.getElementById('wrapper_second')) {
        document.getElementById('wrapper_second').remove();
    }
})
