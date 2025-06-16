 const boxes = document.querySelectorAll('.box');
  const display = document.getElementById('display');

  let expression = '';

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const value = box.textContent.trim();
      if (value === '=') {
        try {
          expression = eval(expression).toString();
        } catch {
          expression = 'Error';
        }
      } else {
        expression += value;
      }
      display.textContent = expression;
    });
  });