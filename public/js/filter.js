let input = document.querySelector("input")

const search = () => {
    let query = input.value.toLowerCase();
    let table = document.querySelector("table")
    let tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0]
        if (td) {
            let text = td.textContent || td.innerHTML;
            if (text.toLowerCase().indexOf(query) > -1) { } else {
                tr[i].style.display = "none";
            }
        }
    }
}

input.addEventListener("keydown", search)