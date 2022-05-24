$("form").on("submit", ProductToList);
$("#list").on("click", "a", changeElementList);
$("#purchasedList").on("click", "a", cleanElement);
$("#cleanList").on("click", cleanList);

function ProductToList(event) {
    event.preventDefault();
    /* Variables from input */
    // get Product
    let newProduct = $("input#newProduct").val();
    //create element list
    $("#list").append("<li class='newItem border shadow-sm p-3 mb-2 bg-body rounded row'><div class='col-9 align-middle'>" + newProduct + "</div> <a class='btn btn-warning col-3  py-0' href='#'>Remove</a></li>");
    //clean the form
    $("form")[0].reset();
}
// Change the list each li
function changeElementList(event) {
    $("#purchasedList").append(event.target.parentElement);
}
// Clean whole List
function cleanList() {
    $("#list li").remove();
}
// delete each li
function cleanElement(event) {
    $(event.target.parentElement).remove();
}
