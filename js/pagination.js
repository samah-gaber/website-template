const totalNumberOfPages = 2;
$(document).ready( () => {
    disablePrevNextBtn(`prev`);
    $(`[href="#page-1"]`).addClass(`active`);
})

// on clicking previous or next buttons
nextPrevPage = function () {
    let btnId = $(this).attr("id");
    let pageId = parseInt($(`.page:visible`).attr(`data-id`));
    if (btnId==`prev`) {
        pageId-=1;
    }
    if (btnId==`next`) {
        pageId+=1;
    }
    showPage(pageId);
}
// on clicking pages numbers
let showPage = id => {
    checkId(id);
    activeBtn(id);
    pageDisplayNone();
    if ($(`[data-id=${id}]`)) {
        $(`#page-` + id).show();
    }
}
// hiding all the pages
let pageDisplayNone = () => {
    $(`.page`).hide();
}
// disabling and enabling previous and next buttons
let disablePrevNextBtn = id => {
    $(`#`+id).removeAttr(`href`);
    $(`#`+id).addClass(`inactive`);
    $(`#`+id).off(`click`, nextPrevPage);
}
let enablePrevNextBtn = id => {
    $(`#`+id).attr(`href`, `#`);
    $(`#`+id).removeClass(`inactive`);
    $(`#`+id).on(`click`, nextPrevPage);
}
let checkId = id => {
    if(id==1) {
        disablePrevNextBtn(`prev`);
        enablePrevNextBtn(`next`);
    }else if(id==totalNumberOfPages) {
        disablePrevNextBtn(`next`);
        enablePrevNextBtn(`prev`);
    }else {
        enablePrevNextBtn(`prev`);
        enablePrevNextBtn(`next`);
    }
}
// active buttons styling
let activeBtn = btn => {
    $(`.page-link`).removeClass(`active`);
    var currentPageId = parseInt($(`.page:visible`).attr(`data-id`));
    var targetPageId = 1;
    if(btn==`prev`){
        targetPageId = currentPageId - 1;
    }else if(btn==`next`){
        targetPageId = currentPageId + 1;
    }else {
        targetPageId = btn;
    }
    $(`[href="#page-${targetPageId}"]`).addClass(`active`);
}
$(`.navigat-link`).on(`click`, nextPrevPage);
