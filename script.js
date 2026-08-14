const nav=document.getElementById("navLinks"),menu=document.getElementById("menuBtn");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

/* CHANGE THIS EMAIL BEFORE PUBLISHING */
const SUBMISSION_EMAIL="contact@setjobs.com";

function emailForm(form,subject,statusId){
  const data=new FormData(form);
  const lines=[];
  for(const [key,value] of data.entries()) if(value) lines.push(`${key}: ${value}`);
  const body=encodeURIComponent(lines.join("\n"));
  window.location.href=`mailto:${SUBMISSION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  document.getElementById(statusId).textContent="Opening your email app…";
}
document.getElementById("jobForm").addEventListener("submit",e=>{
  e.preventDefault(); emailForm(e.target,"SET Jobs - Job Seeker Application","jobStatus");
});
document.getElementById("employerForm")?.addEventListener("submit",e=>{
  e.preventDefault(); emailForm(e.target,"SET Jobs - Employer Hiring Enquiry","employerStatus");
});

