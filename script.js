let currentPage = 1;

function navigate(page) {
  currentPage = page;
  const container = document.querySelector('.container');
  const translateValue = -(page - 1) * 100;
  container.style.transform = `translateX(${translateValue}vw)`;
}
