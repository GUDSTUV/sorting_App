 const displayUnsortedList = document.getElementById("unsorted-list")
        const displaySortedList = document.getElementById("sorted-list")
        const word = new Array (10)
        
        function unsort(){  
            
            displayUnsortedList.innerHTML = ""

             for (i = 0; i < word.length; i++) {
                 let input = prompt("Enter two words #" + i, "").trim();
                 word[i]  = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
            }

            for (i = 0; i < word.length; i++){
            
           let list = document.createElement("li")
           list.innerText = word[i]
           displayUnsortedList.appendChild(list) 
       }
        }
 
    function sorted(){
        displaySortedList.innerHTML =""
        word.sort()
        for (i = 0; i < word.length; i++) {
            let list = document.createElement("li");
            list.innerText = word[i]
            displaySortedList.appendChild(list);

    }
}
