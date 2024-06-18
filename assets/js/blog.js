
        function getFromLocalStorage(){
            const newblog=JSON.parse(localStorage.getItem("blogs"))|| []
           return newblog
        }
        function renderBlogs(){
            const blogs=getFromLocalStorage()
            for (const blog of blogs) {
                const titleEl=document.createElement("h3")
                const userEl=document.createElement("p")
                const contentEl=document.createElement("p")
                const card=document.createElement("div")
                const cardBody=document.createElement("div")
            

                titleEl.textContent=blog.Title
                userEl.textContent="By "+ blog.Username
                contentEl.textContent=blog.Content
                card.setAttribute("class","card")
                titleEl.setAttribute("class","card-header")
                cardBody.setAttribute("class","card-body")
                cardBody.append(contentEl,userEl)
                card.append(titleEl,cardBody)
                document.querySelector("main").append(card)
            }
        }
 renderBlogs()       