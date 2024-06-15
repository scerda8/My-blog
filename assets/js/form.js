function handleFormSubmit(event){
    event.preventDefault()
    const Username=document.querySelector("#username").value.trim()
    const Title=document.querySelector("#title").value.trim()
    const Content=document.querySelector("#content").value.trim()
    if(!Username||!Title||!Content){
        const errorEl=document.querySelector("#error")
        errorEl.textContent="please complete entire form"
        setTimeout(function(){
            errorEl.textContent=""
        },3000)
    return} 
   const formData={
    Username,Title,Content
   }
saveToLocalStorage(formData)
window.location.href="blog.html"
}

function saveToLocalStorage(data){
    const blogs=JSON.parse(localStorage.getItem("blogs"))|| []
    blogs.push(data)
    localStorage.setItem("blogs",JSON.stringify(blogs))
}




document.querySelector("form").addEventListener("submit",handleFormSubmit)