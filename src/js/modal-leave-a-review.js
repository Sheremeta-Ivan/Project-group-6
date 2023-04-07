// the error occurs because you are trying to add an event listener to an element that is null or
//does not exist at the time the code is executed.y
//
//(() => {
//   const refs = {
//     openModalLeaveReviewBtnFirst: document.querySelector('[data-modal-leave-a-review-open-first]'), 
//     openModalLeaveReviewBtnSecond: document.querySelector('[data-modal-leave-a-review-open-second]'), 
//     openModalLeaveReviewBtnThird: document.querySelector('[data-modal-leave-a-review-open-third]'), 
//     closeModalLeaveReviewBtn: document.querySelector('[data-modal-leave-a-review-close]'),
//     modalLeaveReview: document.querySelector('[data-modal-leave-a-review]'),
//   };

//   refs.openModalLeaveReviewBtnFirst.addEventListener('click', toggleModal);
//   refs.openModalLeaveReviewBtnSecond.addEventListener('click', toggleModal);
//   refs.openModalLeaveReviewBtnThird.addEventListener('click', toggleModal);

//   refs.closeModalLeaveReviewBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modalLeaveReview.classList.toggle('is_hidden');
//     }
// })();

(() => {
  const refs = {
    openModalLeaveReviewBtnFirst: document.querySelector('[data-modal-leave-a-review-open-first]'), 
    openModalLeaveReviewBtnSecond: document.querySelector('[data-modal-leave-a-review-open-second]'), 
    openModalLeaveReviewBtnThird: document.querySelector('[data-modal-leave-a-review-open-third]'), 
    closeModalLeaveReviewBtn: document.querySelector('[data-modal-leave-a-review-close]'),
    modalLeaveReview: document.querySelector('[data-modal-leave-a-review]'),
  };

  if (refs.openModalLeaveReviewBtnFirst) {
    refs.openModalLeaveReviewBtnFirst.addEventListener('click', toggleModal);
  }
  if (refs.openModalLeaveReviewBtnSecond) {
    refs.openModalLeaveReviewBtnSecond.addEventListener('click', toggleModal);
  }
  if (refs.openModalLeaveReviewBtnThird) {
    refs.openModalLeaveReviewBtnThird.addEventListener('click', toggleModal);
  }

  if (refs.closeModalLeaveReviewBtn) {
    refs.closeModalLeaveReviewBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    if (refs.modalLeaveReview) {
      refs.modalLeaveReview.classList.toggle('is_hidden');
    }
  }
})();