const ratings = document.querySelectorAll('.rating');
const panel = document.querySelector("#panel");

panel.addEventListener('click', (e) => {
    if (e.target.className === 'rating') {
        ratings.forEach(rating => rating.classList.remove('active'))
        e.target.classList.add('active');
    } else if ( e.target.parentNode.className === 'rating') {
        ratings.forEach(rating => rating.classList.remove('active'))
        e.target.parentNode.classList.add('active');
    } else if (e.target.className === 'btn') {
        let active = false;
        let msg = ``
        ratings.forEach(rating => {
            if (rating.classList.contains('active')) {
                active = true;
                msg = rating.innerHTML.match(/<small>(\w+)<\/small>/)[1];
            }
        })
        if (active) {
            panel.innerHTML = `
            <i class="fas fa-heart"></i>
            <strong>Thank you!</strong>
            <br>
            <strong>Feedback: ${msg}</strong>
            <p>We will use your feedback to inprove our customer support</p>
            `;
        }
    }
})