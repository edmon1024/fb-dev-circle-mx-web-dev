class Book{
  constructor(title, author, pages, description){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = 1;
    this.read = false;
  }
  
  readBook(currentPage){
    if(currentPage < 1 || currentPage > this.pages){
      return
    }
      this.currentPage = currentPage;
      
      if(currentPage == this.pages){
        this.read = true;
      }
  }
}

export { Book };

