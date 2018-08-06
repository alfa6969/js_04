let link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://deweloper.mozilla.org';








// Add new element

// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';
const section = document.querySelector('section');
// section.appendChild(para);

for (let i = 0; i < 100; i++) {
   const para = document.createElement('p');
   para.style.color = 'white';
   para.style.backgroundColor = 'black';
   para.style.padding = '10px';
   para.style.width = '250px';
   para.style.textAlign = 'center';
   para.textContent = 'We hope you enjoyed the ride.';
   section.appendChild(para);
}


