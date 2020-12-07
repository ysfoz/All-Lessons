function getText (){
    fetch('example.txt')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getText()

function getJson (){
    fetch('example.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getJson()





