const store = {
  bookmarks: [
    {
      id: 'x56w',
      title: 'Title 1',
      rating: 3,
      url: 'http://www.title1.com',
      description: 'lorem ipsum dolor sit',
      expanded: false
    },
    {
      id: '6ffw',
      title: 'Title 2',
      rating: 5,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    },
    {
      id: '7ddr',
      title: 'Title 11',
      rating: 5,
      url: 'http://www.title11.com',
      description: 'lorem ipsum dolor',
      expanded: true
    }
  ],

  adding: false,
  error: null,
  filter: 0
};

function newButtonClick(){

  $('#new').click(event=>{
    $('#bookmark-form').append('#bookmark-form');
  });
}

function deleteButtonClick()



// set up event lister for Form
// get values of user input to include in the ->
// fetch and post requests

$(newButtonClick);
$(deleteButtonClick);