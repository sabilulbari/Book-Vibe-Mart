const getAddToReadlistLocalDB = () =>{
    const allReadlist = localStorage.getItem('readList');
    if(allReadlist) return JSON.parse(allReadlist);
    return [];

}

const addReadlistToLocalDB = (book) =>{
    const allBooks = getAddToReadlistLocalDB();

    const isExist = allBooks.find(bs => bs.bookId === book.bookId)

    if(!isExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }


}
const getAddToWishlistLocalDB = () =>{
    const allWishlist = localStorage.getItem('wishlist');
    if (allWishlist) return JSON.parse(allWishlist);
    return [];

}

const addWishlistToLocalDB = (book) =>{
    const allBooks = getAddToWishlistLocalDB();

    const isExist = allBooks.find(bs => bs.bookId === book.bookId)

    if(!isExist) {
        allBooks.push(book);
        localStorage.setItem("wishlist", JSON.stringify(allBooks));
    }


}

export { getAddToReadlistLocalDB, addReadlistToLocalDB, getAddToWishlistLocalDB, addWishlistToLocalDB };