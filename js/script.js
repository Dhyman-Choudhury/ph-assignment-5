// Header section
document.getElementById('theme_btn')
       .addEventListener('click', function () {
    const body = document.getElementById('body_bg');
    const colors = ['bg-red-400', 'bg-blue-400', 'bg-cyan-400', 'bg-teal-400', 'bg-[#f3ffb6]'];

    for (let i = 0; i < colors.length; i++) {
        if (body.classList.contains(colors[i])) {
            body.classList.remove(colors[i]);
            body.classList.add(colors[(i + 1) % colors.length]);
            return; 
        }
    }
    body.classList.add(colors[0]);
});

// Another Page
document.getElementById('another_page')
    .addEventListener('click', function(){
        window.location.href = "discover.html"
})



// Live Day and Date
function dayDate() {
    const button = document.getElementById('day_date');
    const now = new Date();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    button.innerText = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

setInterval(dayDate, 1000);
dayDate(); 

// cards code
const buttons = document.querySelectorAll('.card_btn');
let count=0;

for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', function() {

    alert('Board updated Successfully')
    // document.getElementById('added_card').style.visibility = 'visible';

        const taskAssigned = document.getElementById('task_assigned').innerText;
        const amount = taskAssigned-1;
        document.getElementById('task_assigned').innerText=amount;

        const checkedBtn = parseInt(document.getElementById('check_btn').innerText);
        const amountChecked = checkedBtn + 1;
        document.getElementById('check_btn').innerText = amountChecked;

        const cardTitle = document.querySelectorAll('.card_title');
        const container = document.getElementById('added_card');
        const d = new Date();
       let time = d.toLocaleTimeString();
       count++;

       for(let j=i; j<i+1; j++){
           const cardTitleText = cardTitle[i].innerText;
           
           
           const div = document.createElement('div');
            div.innerHTML=`
            <p id="added_p">You have completed the task ${cardTitleText} at ${time}</p>
            `
            container.appendChild(div);

        }
        
        document.getElementById('added_card').style.display='block';
        this.disabled=true
       
        if(count===6){
            alert('Congrats!! You have completed all the current task.')
        }
    })
    
}

  // clear history
  document.getElementById('clear_btn')
   .addEventListener('click', function(){
    console.log('click')
    document.getElementById('added_card').style.display='none';
    document.getElementById('added_p').style.display='none';
    
     
  })
