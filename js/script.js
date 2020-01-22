function init() {
  const $modal = $('[data-js="modal"]');
  const $closeModalButton = $('[data-js="close-modal"]');
  const $addButton = $('[data-js="add-btn"]');
  const $input = $('[data-js="task-input"]');
  const $list = $('[data-js="task-list"]');
  const $quantity = $('[data-js="quantity"');

  $addButton.click(() => {
    const value = $input.val();
    if(value) {
      $list.append(`<li>${$input.val()}</li>`);
      $input.val('');
    }
    $modal.fadeIn(300);
    $quantity.text( $list.children().length);
  });

  $closeModalButton.click(() => {
    $modal.fadeOut(300);
  });
}

window.onload = init;
