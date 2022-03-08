const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('.book-form');
const container = document.querySelector('.container');
const input = document.querySelector('input');

class Book {

    constructor(titre, auteur, annee){
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }
   
    addBookToList(book){

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class="delete">X</button></td>`;

        bookList.appendChild(row);
    }
    
    clearFields(){
        const titre = document.getElementById('titre').value = '';
        const auteur = document.getElementById('auteur').value = '';
        const annee = document.getElementById('annee').value = '';
    }

    showAlert(message, className){

        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        container.insertBefore(alert, bookForm);

        setTimeout(() =>{
            document.querySelector('.alert').remove();
        }, 2000)
    }
}
 
class Interface {

    deleteBook(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

bookForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;
  
    const book = new Book(titre, auteur, annee);

    if(titre === "" || auteur === "" || annee === ""){
        book.showAlert('Veuillez remplir les champs svp !', 'error');
    }else{  
        book.addBookToList(book);
        book.clearFields();
        book.showAlert('Livre ajouté avec succès!', 'success')
    }
})

bookList.addEventListener('click', (e) =>{

    const ui = new Interface();

    ui.deleteBook(e.target)
})

